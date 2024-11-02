"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 10);
    };

    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = () => (
    <>
      <Link href="/">Lones</Link>
      <Link href="/about">About</Link>
      <Button variant="outline">Sign In</Button>
      <Link href="/applyLoans">
        <Button>APPLY NOW</Button>
      </Link>
      <ThemeToggle />
    </>
  );

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled ? "h-20" : "h-24"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/sovefi.jpeg"
            alt="Sovefi logo"
            height={isScrolled ? 62 : 72}
            width={isScrolled ? 60 : 70}
            className="transition-all duration-200"
          />
          <span className="text-primary text-xl font-extrabold">
            Sovefi <br />{" "}
            <small className="text-sm font-extralight border-b-2 border-primary">
              Uplifting Life 1 at a Time...
            </small>
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <NavItems />
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
