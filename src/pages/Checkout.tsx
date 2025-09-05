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
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

type CheckoutStep = "delivery" | "payment" | "summary";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("delivery");
  const [deliveryMethod, setDeliveryMethod] = useState<string | null>(null);
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNextStep = () => {
    if (currentStep === "delivery" && !deliveryMethod) {
      toast({
        title: "Error",
        description: "Please select a delivery method.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === "delivery") setCurrentStep("payment");
    else if (currentStep === "payment") setCurrentStep("summary");
  };

  const handlePrevStep = () => {
    if (currentStep === "summary") setCurrentStep("payment");
    else if (currentStep === "payment") setCurrentStep("delivery");
  };

  const handlePayment = async () => {
    if (!deliveryMethod) {
      toast({
        title: "Error",
        description: "Please select a delivery method.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    toast({
      title: "Processing Payment",
      description: "Redirecting to iKhokha secure payment...",
    });

    try {
      const response = await fetch("http://localhost:5000/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          total: total,
          email: "customer@example.com", // Replace with actual customer email
          delivery_method: deliveryMethod,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create payment");
      }

      const data = await response.json();

      // Redirect to iKhokha's checkout URL
      window.location.href = data.payment_url;
    } catch (error) {
      console.error("Payment Error:", error);
      toast({
        title: "Payment Failed",
        description: "Could not initiate the payment process. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "delivery":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Delivery Method</CardTitle>
              <CardDescription>
                Choose how you'd like to receive your order.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div
                className={`border rounded-lg p-4 flex items-center gap-4 cursor-pointer ${
                  deliveryMethod === "collect" ? "border-primary" : ""
                }`}
                onClick={() => setDeliveryMethod("collect")}
              >
                <Package className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Click & Collect</h3>
                  <p className="text-sm text-muted-foreground">
                    Collect from our store in Johannesburg.
                  </p>
                  <p className="text-sm font-semibold">Free</p>
                </div>
              </div>
              <div
                className={`border rounded-lg p-4 flex items-center gap-4 cursor-pointer ${
                  deliveryMethod === "delivery" ? "border-primary" : ""
                }`}
                onClick={() => setDeliveryMethod("delivery")}
              >
                <Truck className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Standard Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Delivered to your door within 3-5 business days.
                  </p>
                  <p className="text-sm font-semibold">R 100.00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case "payment":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>
                Choose your preferred payment method.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">iKhokha Secure Payment</h3>
                    <p className="text-sm text-muted-foreground">
                      Pay with your credit or debit card.
                    </p>
                  </div>
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case "summary":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>
                Review your order before payment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      R {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>R {total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery</p>
                  <p>
                    {deliveryMethod === "delivery" ? "R 100.00" : "Free"}
                  </p>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>
                    R{" "}
                    {(
                      total + (deliveryMethod === "delivery" ? 100 : 0)
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <Toaster />
      <div className="flex items-center mb-8">
        <ShoppingBag className="w-8 h-8 text-primary mr-4" />
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === "delivery"}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm ${
                  currentStep === "delivery"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                Delivery
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span
                className={`text-sm ${
                  currentStep === "payment"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                Payment
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span
                className={`text-sm ${
                  currentStep === "summary"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                Summary
              </span>
            </div>
            <Button
              onClick={handleNextStep}
              disabled={currentStep === "summary"}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {renderStepContent()}
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Your Cart</CardTitle>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium">
                        R {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R {total.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </CardContent>
            {currentStep === "summary" && (
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing
                    ? "Processing..."
                    : `Pay R ${(
                        total + (deliveryMethod === "delivery" ? 100 : 0)
                      ).toFixed(2)}`}
                </Button>
              </CardFooter>
            )}
          </Card>
          <div className="mt-4 text-center">
            <Link
              to="/shop"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}