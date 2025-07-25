import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function DeliveryMethod() {
  const [method, setMethod] = useState<string | null>(null);
  const navigate = useNavigate();

  const onNext = () => {
    if (!method) return;
    localStorage.setItem('deliveryMethod', method);
    navigate('/checkout/payment');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Choose Delivery Method</h2>
      <div className="space-y-4">
        {['paxi','postnet'].map(m => (
          <div 
            key={m}
            className={`p-4 border rounded cursor-pointer ${method === m ? 'border-primary bg-primary/10' : ''}`}
            onClick={() => setMethod(m)}
          >
            <h3 className="font-semibold uppercase">{m}</h3>
            <p>Flat delivery fee: R199</p>
          </div>
        ))}
      </div>
      <Button className="mt-6" disabled={!method} onClick={onNext}>
        Next: Payment
      </Button>
    </div>
  );
}
