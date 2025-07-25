import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Payment() {
  const [cart, setCart] = useState<any>(null);
  const [customer, setCustomer] = useState<any>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<string | null>(null);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '{}'));
    setCustomer(JSON.parse(localStorage.getItem('customer') || '{}'));
    setDeliveryMethod(localStorage.getItem('deliveryMethod'));
  }, []);

  const handlePayment = () => {
    fetch('Redirecting to iKhokha payment...');
    // Replace with real iKhokha redirect logic
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
