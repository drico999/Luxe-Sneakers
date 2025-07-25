import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            STEP INTO
            <span className="block text-accent">LUXE SNEAKERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Step into style with the finest collection of sneakers, from iconic Jordans to rare Yeezys, your streetwear upgrade starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/shop">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/shop?category=New Release">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                New Releases
              </Button>
            </Link>
          </div>
        </div>

        {/* Category quick links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link to="/shop?category=Jordan" className="group">
            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                Jordan Collection
              </h3>
              <p className="text-muted-foreground">
                Iconic Air Jordans and exclusive releases
              </p>
            </div>
          </Link>

          <Link to="/shop?category=Yeezy" className="group">
            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                Yeezy Collection
              </h3>
              <p className="text-muted-foreground">
                Limited edition Yeezy drops and classics
              </p>
            </div>
          </Link>

          <Link to="/shop?category=Combos" className="group">
            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                Combo Deals
              </h3>
              <p className="text-muted-foreground">
                Premium bundles. Unmatched prices
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}