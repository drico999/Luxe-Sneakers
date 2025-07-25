// import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';

// export default function Payment() {
//   const [cart, setCart] = useState<any>(null);
//   const [customer, setCustomer] = useState<any>(null);
//   const [deliveryMethod, setDeliveryMethod] = useState<string | null>(null);

//   useEffect(() => {
//     setCart(JSON.parse(localStorage.getItem('cart') || '{}'));
//     setCustomer(JSON.parse(localStorage.getItem('customer') || '{}'));
//     setDeliveryMethod(localStorage.getItem('deliveryMethod'));
//   }, []);

//   const handlePayment = () => {
//     fetch('Redirecting to iKhokha payment...');
//     // Replace with real iKhokha redirect logic
//   };

//   if (!cart || !customer || !deliveryMethod) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-4">Payment</h2>
//       <div className="space-y-2">
//         <p><strong>Name:</strong> {customer.name}</p>
//         <p><strong>Delivery:</strong> {deliveryMethod}</p>
//         <p><strong>Total:</strong> R{cart.total + 199},00</p>
//       </div>
//       <Button size="lg" className="mt-4" onClick={handlePayment}>
//         Pay with iKhokha
//       </Button>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Payment() {
  const [cart, setCart] = useState<any>(null);
  const [customer, setCustomer] = useState<any>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<string | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedCustomer = localStorage.getItem('customer');
    const savedDelivery = localStorage.getItem('deliveryMethod');

    setCart(savedCart ? JSON.parse(savedCart) : null);
    setCustomer(savedCustomer ? JSON.parse(savedCustomer) : null);
    setDeliveryMethod(savedDelivery || null);
  }, []);

  const handlePayment = async () => {
    if (!cart || !customer || !deliveryMethod) {
      alert('Missing required info.');
      return;
    }

    try {
      const response = await fetch('https://luxe-sneakers-production.up.railway.app/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart, customer, deliveryMethod }),
      });

      const data = await response.json();

      if (response.ok && data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert('Failed to initiate payment.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong.');
    }
  };

  if (!cart || !customer || !deliveryMethod) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Delivery:</strong> {deliveryMethod}</p>
        <p><strong>Total:</strong> R{cart.total + 199},00</p>
      </div>
      <Button size="lg" className="mt-4" onClick={handlePayment}>
        Pay with iKhokha
      </Button>
    </div>
  );
}
