// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, X, Search } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { useCart } from '@/context/CartContext';
import logo from "@/assets/logo.png";

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'Shop', href: '/shop' },
//   { name: 'Jordan', href: '/shop?category=Jordan' },
//   { name: 'Yeezy', href: '/shop?category=Yeezy' },
//   { name: 'About', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const location = useLocation();
//   const { state } = useCart();

//   const isActive = (href: string) => {
//     if (href === '/') return location.pathname === '/';
//     return location.pathname.startsWith(href);
//   };

//   return (
//     // <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//     //   <div className="container mx-auto px-4">
//     //     <div className="flex h-16 items-center justify-between">
//     //       {/* Logo */}
//     //       <Link to="/" className="flex items-center space-x-2">
//     //         <div className="text-2xl font-bold text-primary">
//     //           LUXE SNEAKERS
//     //         </div>
//     //       </Link>
//         <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//   <div className="container mx-auto px-4">
//     <div className="flex h-16 items-center justify-between">
//       {/* Logo */}
//       <Link to="/" className="flex items-center space-x-2">
//         <img src={logo} alt="Luxesneakers logo" className="h-10 w-auto" />
//         <div className="text-2xl font-bold text-primary hidden sm:block">
//           {/* LUXE SNEAKERS */}
//         </div>
//       </Link>
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`text-sm font-medium transition-colors hover:text-primary ${
//                   isActive(item.href) 
//                     ? 'text-primary' 
//                     : 'text-muted-foreground'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Search and Cart */}
//           <div className="flex items-center space-x-4">
//             {/* Search - Desktop */}
//             <div className="hidden md:flex items-center space-x-2">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                 <Input
//                   type="search"
//                   placeholder="Search sneakers..."
//                   className="w-64 pl-10"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Cart */}
//             <Link to="/cart">
//               <Button variant="outline" size="sm" className="relative">
//                 <ShoppingCart className="h-4 w-4" />
//                 {state.itemCount > 0 && (
//                   <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
//                     {state.itemCount}
//                   </span>
//                 )}
//               </Button>
//             </Link>

//             {/* Mobile menu button */}
//             <Button
//               variant="outline"
//               size="sm"
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-border/40 pt-4 pb-4">
//             {/* Mobile Search */}
//             <div className="mb-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                 <Input
//                   type="search"
//                   placeholder="Search sneakers..."
//                   className="w-full pl-10"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Mobile Menu Items */}
//             <nav className="space-y-2">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
//                     isActive(item.href) 
//                       ? 'text-primary' 
//                       : 'text-muted-foreground'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }


import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Jordan', href: '/shop?category=Jordan' },
  { name: 'Yeezy', href: '/shop?category=Yeezy' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { state } = useCart();
  const { user, signOut, loading } = useAuth();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Luxesneakers logo" className="h-10 w-auto" />
        <div className="text-2xl font-bold text-primary hidden sm:block">
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search sneakers..."
                  className="w-64 pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Auth */}
            {!loading && (
              user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/auth">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
              )
            )}

            {/* Cart */}
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 pt-4 pb-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search sneakers..."
                  className="w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}