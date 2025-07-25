// import { Link } from 'react-router-dom';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Product } from '@/types/product';
// import { useCart } from '@/context/CartContext';
// import { ShoppingCart } from 'lucide-react';

// interface ProductCardProps {
//   product: Product;
// }

// export function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();

//   const formatPrice = (price: number) => {
//     return `R${price.toLocaleString()},00`;
//   };

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart(product);
//   };

//   return (
//     <Link to={`/product/${product.slug}`}>
//       <Card className="product-card group overflow-hidden bg-card border-border/40 shadow-card">
//         <div className="relative aspect-square overflow-hidden">
//           <img
//             src={product.images[0]}
//             alt={product.name}
//             className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
//           />
          
//           {/* Badges */}
//           <div className="absolute top-3 left-3 flex flex-col gap-2">
//             {product.isNew && (
//               <Badge variant="destructive" className="bg-red-500 text-white">
//                 New Release
//               </Badge>
//             )}
//             {product.isCombo && (
//               <Badge variant="secondary" className="bg-accent text-accent-foreground">
//                 Combo
//               </Badge>
//             )}
//             {product.isExclusive && (
//               <Badge variant="default" className="bg-primary text-primary-foreground">
//                 Exclusive
//               </Badge>
//             )}
//           </div>

//           {/* Quick Add Button */}
//           <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <Button
//               size="sm"
//               onClick={handleAddToCart}
//               className="btn-hero h-10 w-10 p-0"
//             >
//               <ShoppingCart className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         <CardContent className="p-4">
//           <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
//             {product.name}
//           </h3>
          
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <span className="text-lg font-bold text-primary">
//                 {formatPrice(product.price)}
//               </span>
//               {product.originalPrice && (
//                 <span className="text-sm text-muted-foreground line-through">
//                   {formatPrice(product.originalPrice)}
//                 </span>
//               )}
//             </div>
            
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleAddToCart}
//               className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </Link>
//   );
// }

// hello

// import { Link, useNavigate } from 'react-router-dom';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Product } from '@/types/product';
// import { useCart } from '@/context/CartContext';
// import { ShoppingCart } from 'lucide-react';

// interface ProductCardProps {
//   product: Product;
// }

// export function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   const formatPrice = (price: number) => {
//     return `R${price.toLocaleString()},00`;
//   };

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart(product);
//   };

//   const handleBuyNow = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     // Store product for direct checkout
//     const buyNowItem = {
//       ...product,
//       selectedSize: '',
//       quantity: 1
//     };
//     sessionStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
//     navigate('/checkout?mode=buynow');
//   };

//   return (
//     <Link to={`/product/${product.slug}`}>
//       <Card className="product-card group overflow-hidden bg-card border-border/40 shadow-card">
//         <div className="relative aspect-square overflow-hidden">
//           <img
//             src={product.images[0]}
//             alt={product.name}
//             className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
//           />
          
//           {/* Badges */}
//           <div className="absolute top-3 left-3 flex flex-col gap-2">
//             {product.isNew && (
//               <Badge variant="destructive" className="bg-red-500 text-white">
//                 New Release
//               </Badge>
//             )}
//             {product.isCombo && (
//               <Badge variant="secondary" className="bg-accent text-accent-foreground">
//                 Combo
//               </Badge>
//             )}
//             {product.isExclusive && (
//               <Badge variant="default" className="bg-primary text-primary-foreground">
//                 Exclusive
//               </Badge>
//             )}
//           </div>

//           {/* Quick Add Button */}
//           <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <Button
//               size="sm"
//               onClick={handleAddToCart}
//               className="btn-hero h-10 w-10 p-0"
//             >
//               <ShoppingCart className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         <CardContent className="p-4">
//           <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
//             {product.name}
//           </h3>
          
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <span className="text-lg font-bold text-primary">
//                 {formatPrice(product.price)}
//               </span>
//               {product.originalPrice && (
//                 <span className="text-sm text-muted-foreground line-through">
//                   {formatPrice(product.originalPrice)}
//                 </span>
//               )}
//             </div>
            
//             <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={handleBuyNow}
//                 className="flex-1"
//               >
//                 {/* Buy Now
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={handleAddToCart}
//                 className="w-10 p-0" */}
//               {/* > */}
//                 <ShoppingCart className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </Link>
//   );
// }

import { Link, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return `R${price.toLocaleString()},00`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Store product for direct checkout
    const buyNowItem = {
      ...product,
      selectedSize: '',
      quantity: 1
    };
    sessionStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
    navigate('/checkout?mode=buynow');
  };

  return (
    <Link to={`/product/${product.slug}`}>
      <Card className="product-card group overflow-hidden bg-card border-border/40 shadow-card">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge variant="destructive" className="bg-red-500 text-white">
                New Release
              </Badge>
            )}
            {product.isCombo && (
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Combo
              </Badge>
            )}
            {product.isExclusive && (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                Exclusive
              </Badge>
            )}
          </div>

        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}