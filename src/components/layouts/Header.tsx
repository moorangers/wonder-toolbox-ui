import Link from 'next/link';
import { Menu, Drill } from 'lucide-react';

import { Button } from '../ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export function Header() {
  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-foreground">
            <Link href="/" className="flex items-center gap-2">
              <Drill size={32} strokeWidth={2} />
              <span>WonderToolbox</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/tools">
              <Button variant="ghost">TOOLS</Button>
            </Link>
            <Link href="/shop">
              <Button variant="ghost">SHOP</Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost">BLOG</Button>
            </Link>
            <Link href="/learn">
              <Button variant="ghost">LEARN</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">ABOUT</Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col pt-6 mt-6">
                  <Link href="/tools">
                    <Button variant="ghost" className="w-full justify-start">
                      TOOLS
                    </Button>
                  </Link>
                  <Link href="/shop">
                    <Button variant="ghost" className="w-full justify-start">
                      SHOP
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="ghost" className="w-full justify-start">
                      BLOG
                    </Button>
                  </Link>
                  <Link href="/learn">
                    <Button variant="ghost" className="w-full justify-start">
                      LEARN
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="ghost" className="w-full justify-start">
                      ABOUT
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
