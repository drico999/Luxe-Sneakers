// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartProvider } from "@/context/CartContext";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import Index from "./pages/Index";
// import Shop from "./pages/Shop";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";


// import CustomerDetails from "./pages/CustomerDetails";
// import DeliveryMethod from "./pages/DeliveryMethod";
// import Payment from "./pages/Payment";

// <Routes>
//   <Route path="/cart" element={<Cart />} />
//   <Route path="/checkout/details" element={<CustomerDetails />} />
//   <Route path="/checkout/delivery" element={<DeliveryMethod />} />
//   <Route path="/checkout/payment" element={<Payment />} />
//   ... 
// </Routes>


// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <CartProvider>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <div className="min-h-screen flex flex-col">
//             <Header />
//             <main className="flex-1">
//               <Routes>
//                 <Route path="/" element={<Index />} />
//                 <Route path="/shop" element={<Shop />} />
//                 <Route path="/product/:slug" element={<ProductDetail />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </BrowserRouter>
//       </TooltipProvider>
//     </CartProvider>
//   </QueryClientProvider>
// );

// export default App;

// hello
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartProvider } from "@/context/CartContext";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import Index from "./pages/Index";
// import Shop from "./pages/Shop";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <CartProvider>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <div className="min-h-screen flex flex-col">
//             <Header />
//             <main className="flex-1">
//               <Routes>
//                 <Route path="/" element={<Index />} />
//                 <Route path="/shop" element={<Shop />} />
//                 <Route path="/product/:slug" element={<ProductDetail />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/checkout" element={<Checkout />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </BrowserRouter>
//       </TooltipProvider>
//     </CartProvider>
//   </QueryClientProvider>
// );

// export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartProvider } from "@/context/CartContext";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { ScrollToTop } from "@/components/ScrollToTop";
// import Index from "./pages/Index";
// import Shop from "./pages/Shop";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <CartProvider>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
//           <ScrollToTop />
//           <div className="min-h-screen flex flex-col">
//             <Header />
//             <main className="flex-1">
//               <Routes>
//                 <Route path="/" element={<Index />} />
//                 <Route path="/shop" element={<Shop />} />
//                 <Route path="/product/:slug" element={<ProductDetail />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/checkout" element={<Checkout />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </BrowserRouter>
//       </TooltipProvider>
//     </CartProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;