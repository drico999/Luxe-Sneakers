import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function Profile() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [defaultAddress, setDefaultAddress] = useState('');
  const [defaultCity, setDefaultCity] = useState('');
  const [defaultPostalCode, setDefaultPostalCode] = useState('');
  const [defaultProvince, setDefaultProvince] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;

    async function fetchProfile() {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {
        toast({
          title: 'Error loading profile',
          description: error.message,
          variant: 'destructive',
        });
      } else if (data) {
        setFullName(data.full_name ?? '');
        setPhone(data.phone ?? '');
        setDefaultAddress(data.default_address ?? '');
        setDefaultCity(data.default_city ?? '');
        setDefaultPostalCode(data.default_postal_code ?? '');
        setDefaultProvince(data.default_province ?? '');
      }
      setLoading(false);
    }

    fetchProfile();
  }, [user, toast]);

  async function updateProfile() {
    if (!user) return;
    setLoading(true);

    const updates = {
      user_id: user.id,
      full_name: fullName.trim(),
      phone: phone.trim(),
      default_address: defaultAddress.trim(),
      default_city: defaultCity.trim(),
      default_postal_code: defaultPostalCode.trim(),
      default_province: defaultProvince.trim(),
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('profiles').upsert(updates);

    if (error) {
      toast({
        title: 'Error updating profile',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Profile updated',
        description: 'Your profile information has been saved successfully.',
      });
    }

    setLoading(false);
  }

  if (!user) return <div>Please log in to edit your profile.</div>;

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="defaultAddress">Default Address</Label>
          <Input
            id="defaultAddress"
            value={defaultAddress}
            onChange={(e) => setDefaultAddress(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="defaultCity">Default City</Label>
          <Input
            id="defaultCity"
            value={defaultCity}
            onChange={(e) => setDefaultCity(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="defaultPostalCode">Default Postal Code</Label>
          <Input
            id="defaultPostalCode"
            value={defaultPostalCode}
            onChange={(e) => setDefaultPostalCode(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="defaultProvince">Default Province</Label>
          <Input
            id="defaultProvince"
            value={defaultProvince}
            onChange={(e) => setDefaultProvince(e.target.value)}
            disabled={loading}
          />
        </div>

        <Button onClick={updateProfile} disabled={loading} className="mt-4 w-full">
          {loading ? 'Saving...' : 'Save Profile'}
        </Button>
      </div>
    </div>
  );
}
