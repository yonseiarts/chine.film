import { Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/">
          <img src="https://ext.same-assets.com/2274058224/3335459291.svg" alt="NEON Logo" className="h-8" />
        </Link>
      </div>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/films/all" className="text-white hover:text-gray-400">FILMS</Link>
        <Link href="/shop/all" className="text-white hover:text-gray-400">SHOP</Link>
        <button className="text-white hover:text-gray-400">
          <Menu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
