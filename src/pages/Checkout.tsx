// import { useCart } from '@/context/CartContext';

// export default function Checkout() {
//   const { state } = useCart();

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>

//       <div className="mb-4">
//         <p className="text-muted-foreground">
//           Total items: {state.itemCount} | Subtotal: R{state.total}
//         </p>
//       </div>

//       {/* Example: Add customer detail inputs */}
//       <form className="space-y-6">
//         <div>
//           <label className="block mb-1 font-medium">Full Name</label>
//           <input
//             type="text"
//             className="w-full border border-border rounded-lg px-4 py-2"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Shipping Address</label>
//           <input
//             type="text"
//             className="w-full border border-border rounded-lg px-4 py-2"
//             placeholder="Street, City, Zip Code"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Phone Number</label>
//           <input
//             type="tel"
//             className="w-full border border-border rounded-lg px-4 py-2"
//             placeholder="Enter your phone number"
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn-hero w-full py-3 font-semibold text-white bg-black rounded-lg"
//         >
//           Continue to Payment
//         </button>
//       </form>
//     </div>
//   );
// }



// real

// import { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Separator } from '@/components/ui/separator';
// import { useCart } from '@/context/CartContext';
// import { useToast } from '@/hooks/use-toast';
// import { ArrowLeft, Shield, Truck, CreditCard } from 'lucide-react';

// interface CustomerInfo {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   postalCode: string;
//   province: string;
//   deliveryMethod: string;
// }

// export default function Checkout() {
//   const { state, clearCart } = useCart();
//   const { toast } = useToast();
//   const [searchParams] = useSearchParams();
//   const isBuyNowMode = searchParams.get('mode') === 'buynow';
//   const [buyNowItem, setBuyNowItem] = useState<any>(null);
//   const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     postalCode: '',
//     province: '',
//     deliveryMethod: ''
//   });

//   useEffect(() => {
//     if (isBuyNowMode) {
//       const storedItem = sessionStorage.getItem('buyNowItem');
//       if (storedItem) {
//         setBuyNowItem(JSON.parse(storedItem));
//       }
//     }
//   }, [isBuyNowMode]);

//   const formatPrice = (price: number) => {
//     return `R${price.toLocaleString()},00`;
//   };

//   const handleInputChange = (field: keyof CustomerInfo, value: string) => {
//     setCustomerInfo(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode', 'province', 'deliveryMethod'];
//     const missingFields = requiredFields.filter(field => !customerInfo[field as keyof CustomerInfo]);
    
//     if (missingFields.length > 0) {
//       toast({
//         title: "Missing Information",
//         description: "Please fill in all required fields.",
//         variant: "destructive"
//       });
//       return;
//     }

//     // Simulate Ikhokha payment processing
//     toast({
//       title: "Processing Payment",
//       description: "Redirecting to Ikhokha secure payment...",
//     });

//     // In a real implementation, this would redirect to Ikhokha
//     setTimeout(() => {
//       toast({
//         title: "Order Placed Successfully!",
//         description: "Thank you for your purchase. You will receive a confirmation email shortly.",
//       });
      
//       // Clear cart or session storage after successful payment
//       if (isBuyNowMode) {
//         sessionStorage.removeItem('buyNowItem');
//       } else {
//         clearCart();
//       }
//     }, 2000);
//   };

//   // Get items to display
//   const displayItems = isBuyNowMode ? (buyNowItem ? [buyNowItem] : []) : state.items;
//   const displayTotal = isBuyNowMode ? (buyNowItem ? buyNowItem.price : 0) : state.total;
//   const displayItemCount = isBuyNowMode ? 1 : state.itemCount;

//   if (displayItems.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <div className="max-w-md mx-auto">
//           <h1 className="text-3xl font-bold text-foreground mb-4">
//             {isBuyNowMode ? 'No item selected' : 'Your cart is empty'}
//           </h1>
//           <p className="text-muted-foreground mb-8">
//             {isBuyNowMode 
//               ? 'Please select an item to purchase.' 
//               : 'Add some items to your cart before proceeding to checkout.'
//             }
//           </p>
//           <Link to="/shop">
//             <Button size="lg" className="btn-hero">
//               Continue Shopping
//             </Button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <Link to="/cart">
//           <Button variant="ghost" className="mb-4">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Cart
//           </Button>
//         </Link>
//         <h1 className="text-4xl font-bold text-foreground">Secure Checkout</h1>
//         <div className="flex items-center gap-2 mt-2 text-muted-foreground">
//           <Shield className="h-4 w-4" />
//           <span>Safe and secure checkout with 256-bit SSL encryption</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Customer Information Form */}
//         <div className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Truck className="h-5 w-5" />
//                 Delivery Information
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="firstName">First Name *</Label>
//                     <Input
//                       id="firstName"
//                       value={customerInfo.firstName}
//                       onChange={(e) => handleInputChange('firstName', e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="lastName">Last Name *</Label>
//                     <Input
//                       id="lastName"
//                       value={customerInfo.lastName}
//                       onChange={(e) => handleInputChange('lastName', e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={customerInfo.email}
//                     onChange={(e) => handleInputChange('email', e.target.value)}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     value={customerInfo.phone}
//                     onChange={(e) => handleInputChange('phone', e.target.value)}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <Label htmlFor="address">Street Address *</Label>
//                   <Input
//                     id="address"
//                     value={customerInfo.address}
//                     onChange={(e) => handleInputChange('address', e.target.value)}
//                     required
//                   />
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="city">City *</Label>
//                     <Input
//                       id="city"
//                       value={customerInfo.city}
//                       onChange={(e) => handleInputChange('city', e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="postalCode">Postal Code *</Label>
//                     <Input
//                       id="postalCode"
//                       value={customerInfo.postalCode}
//                       onChange={(e) => handleInputChange('postalCode', e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <Label htmlFor="province">Province *</Label>
//                   <Select value={customerInfo.province} onValueChange={(value) => handleInputChange('province', value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Province" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
//                       <SelectItem value="free-state">Free State</SelectItem>
//                       <SelectItem value="gauteng">Gauteng</SelectItem>
//                       <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
//                       <SelectItem value="limpopo">Limpopo</SelectItem>
//                       <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
//                       <SelectItem value="northern-cape">Northern Cape</SelectItem>
//                       <SelectItem value="north-west">North West</SelectItem>
//                       <SelectItem value="western-cape">Western Cape</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </form>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Truck className="h-5 w-5" />
//                 Delivery Method
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 <div 
//                   className={`p-4 border rounded-lg cursor-pointer transition-colors ${
//                     customerInfo.deliveryMethod === 'paxi' 
//                       ? 'border-primary bg-primary/5' 
//                       : 'border-border hover:border-primary/50'
//                   }`}
//                   onClick={() => handleInputChange('deliveryMethod', 'paxi')}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
//                         <Truck className="h-6 w-6 text-red-500" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold">Paxi</h3>
//                         <p className="text-sm text-muted-foreground">Collect from Paxi point</p>
//                       </div>
//                     </div>
//                     <div className="text-sm font-medium text-green-600">R199</div>
//                   </div>
//                 </div>

//                 <div 
//                   className={`p-4 border rounded-lg cursor-pointer transition-colors ${
//                     customerInfo.deliveryMethod === 'postnet' 
//                       ? 'border-primary bg-primary/5' 
//                       : 'border-border hover:border-primary/50'
//                   }`}
//                   onClick={() => handleInputChange('deliveryMethod', 'postnet')}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
//                         <Truck className="h-6 w-6 text-blue-500" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold">PostNet</h3>
//                         <p className="text-sm text-muted-foreground">Collect from PostNet branch</p>
//                       </div>
//                     </div>
//                     <div className="text-sm font-medium text-green-600">R199</div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <CreditCard className="h-5 w-5" />
//                 Payment Method
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center justify-between p-4 border border-border rounded-lg">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                     <CreditCard className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Ikhokha Secure Payment</h3>
//                     <p className="text-sm text-muted-foreground">Credit Card, Debit Card, EFT</p>
//                   </div>
//                 </div>
//                 <div className="text-xs text-muted-foreground">
//                   Powered by Ikhokha
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Order Summary */}
//         <div>
//           <Card className="sticky top-24">
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {/* Order Items */}
//               <div className="space-y-3">
//                 {displayItems.map((item) => (
//                   <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-3">
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="h-16 w-16 rounded-lg object-cover"
//                     />
//                     <div className="flex-1 min-w-0">
//                       <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
//                       <div className="flex items-center gap-2 text-xs text-muted-foreground">
//                         {item.selectedSize && <span>Size: {item.selectedSize}</span>}
//                         <span>Qty: {item.quantity || 1}</span>
//                       </div>
//                     </div>
//                     <div className="text-sm font-semibold">
//                       {formatPrice(item.price * (item.quantity || 1))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <Separator />

//               {/* Pricing Breakdown */}
//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span>Subtotal ({displayItemCount} items)</span>
//                   <span>{formatPrice(displayTotal)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span>Delivery</span>
//                   <span className="text-green-600">R199</span>
//                 </div>
//                 <Separator />
//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total</span>
//                   <span className="text-primary">{formatPrice(displayTotal)}</span>
//                 </div>
//               </div>

//               <Button 
//                 size="lg" 
//                 className="w-full btn-hero" 
//                 onClick={handleSubmit}
//                 type="submit"
//               >
//                 Complete Order - {formatPrice(displayTotal)}
//               </Button>

//               <div className="text-center text-xs text-muted-foreground space-y-1">
//                 <p>Secure checkout powered by Ikhokha</p>
//                 <p>R199 delivery on all orders</p>
//                 {/* <p>30-day return policy</p> */}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Shield, Truck, CreditCard } from 'lucide-react';

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  province: string;
  deliveryMethod: string;
}

export default function Checkout() {
  const { state, clearCart } = useCart();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const isBuyNowMode = searchParams.get('mode') === 'buynow';
  const [buyNowItem, setBuyNowItem] = useState<any>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    province: '',
    deliveryMethod: ''
  });

  useEffect(() => {
    if (isBuyNowMode) {
      const storedItem = sessionStorage.getItem('buyNowItem');
      if (storedItem) {
        setBuyNowItem(JSON.parse(storedItem));
      }
    }
  }, [isBuyNowMode]);

  const formatPrice = (price: number) => {
    return `R${price.toLocaleString()},00`;
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode', 'province', 'deliveryMethod'];
    const missingFields = requiredFields.filter(field => !customerInfo[field as keyof CustomerInfo]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
      
    }
    //now
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerInfo.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
}
//until here

    toast({
      title: "Processing Payment",
      description: "Redirecting to Ikhokha secure payment...",
    });

    setTimeout(() => {
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });

      if (isBuyNowMode) {
        sessionStorage.removeItem('buyNowItem');
      } else {
        clearCart();
      }
    }, 2000);
  };

  const displayItems = isBuyNowMode ? (buyNowItem ? [buyNowItem] : []) : state.items;
  const displayItemCount = isBuyNowMode ? 1 : state.itemCount;
  const displaySubtotal = isBuyNowMode ? (buyNowItem ? buyNowItem.price : 0) : state.total;
  const deliveryFee = customerInfo.deliveryMethod ? 199 : 0;
  //const deliveryFee = isBuyNowMode || customerInfo.deliveryMethod ? 199 : 0;
  const displayTotal = displaySubtotal + deliveryFee;

  if (displayItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {isBuyNowMode ? 'No item selected' : 'Your cart is empty'}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isBuyNowMode 
              ? 'Please select an item to purchase.' 
              : 'Add some items to your cart before proceeding to checkout.'
            }
          </p>
          <Link to="/shop">
            <Button size="lg" className="btn-hero">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/cart">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-foreground">Secure Checkout</h1>
        <div className="flex items-center gap-2 mt-2 text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>Safe and secure checkout with 256-bit SSL encryption</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Delivery Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={customerInfo.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={customerInfo.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />

                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />

                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  value={customerInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input
                      id="postalCode"
                      value={customerInfo.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Label htmlFor="province">Province *</Label>
                <Select value={customerInfo.province} onValueChange={(value) => handleInputChange('province', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                    <SelectItem value="free-state">Free State</SelectItem>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                    <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                    <SelectItem value="limpopo">Limpopo</SelectItem>
                    <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                    <SelectItem value="northern-cape">Northern Cape</SelectItem>
                    <SelectItem value="north-west">North West</SelectItem>
                    <SelectItem value="western-cape">Western Cape</SelectItem>
                  </SelectContent>
                </Select>
              </form>
            </CardContent>
          </Card>

          {/* Delivery Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['paxi', 'postnet'].map((method) => (
                  <div 
                    key={method}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      customerInfo.deliveryMethod === method 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => handleInputChange('deliveryMethod', method)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                          <Truck className="h-6 w-6 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold capitalize">{method}</h3>
                          <p className="text-sm text-muted-foreground">Collect from {method} point</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-green-600">R199</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ikhokha Secure Payment</h3>
                    <p className="text-sm text-muted-foreground">Credit Card, Debit Card, EFT</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Powered by Ikhokha
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {displayItems.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-3">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        <span>Qty: {item.quantity || 1}</span>
                      </div>
                    </div>
                    <div className="text-sm font-semibold">
                      {formatPrice(item.price * (item.quantity || 1))}
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Pricing Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({displayItemCount} items)</span>
                  <span>{formatPrice(displaySubtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery</span>
                  <span className="text-green-600">{formatPrice(deliveryFee)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(displayTotal)}</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full btn-hero" 
                onClick={handleSubmit}
                type="submit"
              >
                Complete Order - {formatPrice(displayTotal)}
              </Button>

              <div className="text-center text-xs text-muted-foreground space-y-1">
                <p>Secure checkout powered by Ikhokha</p>
                <p>R199 delivery on all orders</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
