import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ArrowLeft, ShoppingCart, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/shop')}>Return to Shop</Button>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `R${price.toLocaleString()},00`;
  };

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must select a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart(product, selectedSize);
    toast({
      title: "Added to cart!",
      description: `${product.name}${selectedSize ? ` (${selectedSize})` : ''} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must select a size before proceeding.",
        variant: "destructive",
      });
      return;
    }

    // Store product for direct checkout
    const buyNowItem = {
      ...product,
      selectedSize,
      quantity: 1
    };
    sessionStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
    navigate('/checkout?mode=buynow');
  };

  // Related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-card">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {product.isNew && (
              <Badge variant="destructive">New Release</Badge>
            )}
            {product.isCombo && (
              <Badge variant="secondary">Combo Deal</Badge>
            )}
            {product.isExclusive && (
              <Badge variant="default">Exclusive</Badge>
            )}
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              Category: {product.category}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-foreground leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                Select Size
              </label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose your size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              size="lg"
              onClick={handleBuyNow}
              className="w-full btn-hero text-lg py-6"
            >
              Buy Now
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleAddToCart}
              className="w-full text-lg py-6"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Quality Assurance</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Truck className="h-4 w-4" />
              <span>R199 Delivery</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <RotateCcw className="h-4 w-4" />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.slug}`}>
                <Card className="product-card group overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-primary">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}