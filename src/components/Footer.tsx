import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border/40 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              LUXE SNEAKERS
            </div>
            <p className="text-muted-foreground">
              Where style meets substance — discover premium sneakers handpicked for true sneaker enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/luxe_sneakers_sa"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100082544180401"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/27798494351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12a11.85 11.85 0 001.832 6.195L0 24l5.895-1.891A11.961 11.961 0 0012 24c6.627 0 12-5.373 12-12a11.95 11.95 0 00-3.48-8.52zm-8.195 15.125a8.294 8.294 0 01-4.47-1.296l-.318-.19-3.508 1.126 1.148-3.41-.205-.346a8.216 8.216 0 1111.263 3.716 8.147 8.147 0 01-3.91.96zm4.417-6.043c-.243-.122-1.438-.708-1.66-.789-.22-.08-.38-.122-.54.123-.16.243-.62.789-.76.95-.14.163-.28.183-.52.06-.243-.123-1.025-.377-1.954-1.206-.72-.64-1.204-1.43-1.345-1.673-.14-.243-.015-.374.108-.497.11-.11.243-.28.364-.42.12-.14.16-.243.243-.405.08-.16.04-.3-.02-.423-.06-.122-.54-1.297-.74-1.77-.195-.464-.39-.4-.54-.41-.14-.012-.3-.015-.457-.015-.16 0-.423.06-.645.3-.22.243-.84.82-.84 2 .002 1.18.86 2.327.98 2.49.12.16 1.7 2.593 4.12 3.635.575.248 1.02.396 1.37.507.575.18 1.1.155 1.51.094.46-.07 1.438-.586 1.642-1.152.203-.57.203-1.06.142-1.152-.06-.095-.22-.15-.463-.27z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Categories</h3>
            <nav className="space-y-2">
              <Link
                to="/shop?category=Jordan"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Jordan
              </Link>
              <Link
                to="/shop?category=Yeezy"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Yeezy
              </Link>
              <Link
                to="/shop?category=Nike"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Nike
              </Link>
              <Link
                to="/shop?category=Adidas"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Adidas
              </Link>
              <Link
                to="/shop?category=Combos"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Combo Deals
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@luxesneakers.co.za</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+27 79 849 4351</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2022 Luxe Sneakers SA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
