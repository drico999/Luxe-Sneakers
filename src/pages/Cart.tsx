// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { useCart } from '@/context/CartContext';
// import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// export default function Cart() {
//   const { state, updateQuantity, removeFromCart, clearCart } = useCart();
//   const { toast } = useToast();

//   const formatPrice = (price: number) => {
//     return `R${price.toLocaleString()},00`;
//   };

//   const handleUpdateQuantity = (id: string, newQuantity: number) => {
//     if (newQuantity < 1) return;
//     updateQuantity(id, newQuantity);
//   };

//   const handleRemoveItem = (id: string, name: string) => {
//     removeFromCart(id);
//     toast({
//       title: "Item removed",
//       description: `${name} has been removed from your cart.`,
//     });
//   };

//   const handleClearCart = () => {
//     clearCart();
//     toast({
//       title: "Cart cleared",
//       description: "All items have been removed from your cart.",
//     });
//   };

//   if (state.items.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <div className="max-w-md mx-auto">
//           <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//           <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
//           <p className="text-muted-foreground mb-8">
//             Looks like you haven't added any sneakers to your cart yet.
//           </p>
//           <Link to="/shop">
//             <Button size="lg" className="btn-hero">
//               Start Shopping
//             </Button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <Link to="/shop">
//           <Button variant="ghost" className="mb-4">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Continue Shopping
//           </Button>
//         </Link>
//         <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
//         <p className="text-muted-foreground mt-2">
//           {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'} in your cart
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Cart Items */}
//         <div className="lg:col-span-2 space-y-4">
//           {state.items.map((item) => (
//             <Card key={`${item.id}-${item.selectedSize}`} className="overflow-hidden">
//               <CardContent className="p-6">
//                 <div className="flex gap-4">
//                   {/* Product Image */}
//                   <Link to={`/product/${item.slug}`} className="shrink-0">
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="h-24 w-24 rounded-lg object-cover"
//                     />
//                   </Link>

//                   {/* Product Details */}
//                   <div className="flex-1 min-w-0">
//                     <Link to={`/product/${item.slug}`}>
//                       <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
//                         {item.name}
//                       </h3>
//                     </Link>
                    
//                     <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
//                       <span>Category: {item.category}</span>
//                       {item.selectedSize && (
//                         <span>Size: {item.selectedSize}</span>
//                       )}
//                     </div>

//                     <div className="flex items-center justify-between mt-4">
//                       <div className="flex items-center gap-3">
//                         {/* Quantity Controls */}
//                         <div className="flex items-center border border-border rounded-lg">
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
//                             disabled={item.quantity <= 1}
//                             className="h-8 w-8 p-0"
//                           >
//                             <Minus className="h-3 w-3" />
//                           </Button>
//                           <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">
//                             {item.quantity}
//                           </span>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
//                             className="h-8 w-8 p-0"
//                           >
//                             <Plus className="h-3 w-3" />
//                           </Button>
//                         </div>

//                         {/* Remove Button */}
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => handleRemoveItem(item.id, item.name)}
//                           className="text-destructive hover:text-destructive/80"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>

//                       {/* Price */}
//                       <div className="text-right">
//                         <p className="font-bold text-foreground">
//                           {formatPrice(item.price * item.quantity)}
//                         </p>
//                         <p className="text-sm text-muted-foreground">
//                           {formatPrice(item.price)} each
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}

//           {/* Clear Cart */}
//           <div className="flex justify-end">
//             <Button
//               variant="outline"
//               onClick={handleClearCart}
//               className="text-destructive border-destructive hover:bg-destructive hover:text-white"
//             >
//               Clear Cart
//             </Button>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="lg:col-span-1">
//           <Card className="sticky top-24">
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span>Subtotal ({state.itemCount} items)</span>
//                   <span>{formatPrice(state.total)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span>Delivery</span>
//                   <span className="text-green-600">R199</span>
//                 </div>
//                 <hr className="border-border" />
//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total</span>
//                   <span className="text-primary font-bold">
//                     {formatPrice(state.total + 199)}
//                   </span>
//                 </div>
//               </div>
//               <Button size="lg" className="w-full btn-hero">
//                 Proceed to Checkout
//               </Button>

//               <div className="text-center text-xs text-muted-foreground">
//                 <p>Secure Checkout</p>
//                 <p className="mt-1">Flat delivery fee of R199 on all orders</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// Real

// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { useCart } from '@/context/CartContext';
// import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// export default function Cart() {
//   const { state, updateQuantity, removeFromCart, clearCart } = useCart();
//   const { toast } = useToast();

//   const formatPrice = (price: number) => {
//     return `R${price.toLocaleString()},00`;
//   };

//   const handleUpdateQuantity = (id: string, newQuantity: number) => {
//     if (newQuantity < 1) return;
//     updateQuantity(id, newQuantity);
//   };

//   const handleRemoveItem = (id: string, name: string) => {
//     removeFromCart(id);
//     toast({
//       title: "Item removed",
//       description: `${name} has been removed from your cart.`,
//     });
//   };

//   const handleClearCart = () => {
//     clearCart();
//     toast({
//       title: "Cart cleared",
//       description: "All items have been removed from your cart.",
//     });
//   };

//   if (state.items.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <div className="max-w-md mx-auto">
//           <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//           <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
//           <p className="text-muted-foreground mb-8">
//             Looks like you haven't added any sneakers to your cart yet.
//           </p>
//           <Link to="/shop">
//             <Button size="lg" className="btn-hero">
//               Start Shopping
//             </Button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <Link to="/shop">
//           <Button variant="ghost" className="mb-4">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Continue Shopping
//           </Button>
//         </Link>
//         <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
//         <p className="text-muted-foreground mt-2">
//           {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'} in your cart
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Cart Items */}
//         <div className="lg:col-span-2 space-y-4">
//           {state.items.map((item) => (
//             <Card key={`${item.id}-${item.selectedSize}`} className="overflow-hidden">
//               <CardContent className="p-6">
//                 <div className="flex gap-4">
//                   {/* Product Image */}
//                   <Link to={`/product/${item.slug}`} className="shrink-0">
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="h-24 w-24 rounded-lg object-cover"
//                     />
//                   </Link>

//                   {/* Product Details */}
//                   <div className="flex-1 min-w-0">
//                     <Link to={`/product/${item.slug}`}>
//                       <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
//                         {item.name}
//                       </h3>
//                     </Link>
                    
//                     <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
//                       <span>Category: {item.category}</span>
//                       {item.selectedSize && (
//                         <span>Size: {item.selectedSize}</span>
//                       )}
//                     </div>

//                     <div className="flex items-center justify-between mt-4">
//                       <div className="flex items-center gap-3">
//                         {/* Quantity Controls */}
//                         <div className="flex items-center border border-border rounded-lg">
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
//                             disabled={item.quantity <= 1}
//                             className="h-8 w-8 p-0"
//                           >
//                             <Minus className="h-3 w-3" />
//                           </Button>
//                           <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">
//                             {item.quantity}
//                           </span>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
//                             className="h-8 w-8 p-0"
//                           >
//                             <Plus className="h-3 w-3" />
//                           </Button>
//                         </div>

//                         {/* Remove Button */}
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => handleRemoveItem(item.id, item.name)}
//                           className="text-destructive hover:text-destructive/80"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>

//                       {/* Price */}
//                       <div className="text-right">
//                         <p className="font-bold text-foreground">
//                           {formatPrice(item.price * item.quantity)}
//                         </p>
//                         <p className="text-sm text-muted-foreground">
//                           {formatPrice(item.price)} each
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}

//           {/* Clear Cart */}
//           <div className="flex justify-end">
//             <Button
//               variant="outline"
//               onClick={handleClearCart}
//               className="text-destructive border-destructive hover:bg-destructive hover:text-white"
//             >
//               Clear Cart
//             </Button>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="lg:col-span-1">
//           <Card className="sticky top-24">
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span>Subtotal ({state.itemCount} items)</span>
//                   <span>{formatPrice(state.total)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span>Delivery</span>
//                   <span className="text-green-600">R199</span>
//                 </div>
//                 <hr className="border-border" />
//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total</span>
//                   <span className="text-primary">{formatPrice(state.total)}</span>
//                 </div>
//               </div>

//               <Link to="/checkout">
//                 <Button size="lg" className="w-full btn-hero">
//                   Proceed to Checkout
//                 </Button>
//               </Link>

//               <div className="text-center text-xs text-muted-foreground">
//                 <p>Secure checkout powered by Ikhokha</p>
//                 <p className="mt-1">R199 delivery on all orders</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Cart() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();

  const DELIVERY_FEE = 199;
  const finalTotal = state.total + DELIVERY_FEE;

  const formatPrice = (price: number) => {
    return `R${price.toLocaleString()},00`;
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: `${name} has been removed from your cart.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any sneakers to your cart yet.
          </p>
          <Link to="/shop">
            <Button size="lg" className="btn-hero">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/shop">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
        <p className="text-muted-foreground mt-2">
          {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={`${item.id}-${item.selectedSize}`} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <Link to={`/product/${item.slug}`} className="shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.slug}`}>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>Category: {item.category}</span>
                      {item.selectedSize && (
                        <span>Size: {item.selectedSize}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-bold text-foreground">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formatPrice(item.price)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Clear Cart */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={handleClearCart}
              className="text-destructive border-destructive hover:bg-destructive hover:text-white"
            >
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({state.itemCount} items)</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery</span>
                  <span className="text-green-600">{formatPrice(DELIVERY_FEE)}</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button size="lg" className="w-full btn-hero">
                  Proceed to Checkout
                </Button>
              </Link>

              <div className="text-center text-xs text-muted-foreground">
                <p>Secure checkout powered by Ikhokha</p>
                <p className="mt-1">R199 delivery on all orders</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
