"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  PhoneCall,
  ChevronDown,
} from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useConsultationStore } from "@/store/useConsultationStore";
import { useUIStore } from "@/store/useUIStore";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [concernsDropdownOpen, setConcernsDropdownOpen] = useState(false);

  const { items, openCart, getSubtotal } = useCartStore();
  const { wishlistIds, openWishlist } = useWishlistStore();
  const { openConsultation } = useConsultationStore();
  const { openSearch } = useUIStore();

  const totalCartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = getSubtotal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        isScrolled
          ? "bg-ayur-cream/95 backdrop-blur-md border-ayur-border shadow-soft"
          : "bg-ayur-cream border-ayur-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex lg:grid lg:grid-cols-[auto_1fr_auto] items-center justify-between h-16 sm:h-20 lg:h-24 gap-2 sm:gap-4 lg:gap-6 min-w-0">
          {/* 1. Far Left: Brand Logo & Typography */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group flex-shrink-0 focus:outline-none"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-ayur-parchment overflow-hidden flex items-center justify-center border-2 border-ayur-gold/40 shadow-sm flex-shrink-0 relative">
                <Image
                  src="/images/sarva-natural-emblem.png"
                  alt="SARVA NATURAL Emblem"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <span className="font-serif text-base sm:text-xl lg:text-[23px] font-bold tracking-tight text-ayur-dark leading-none whitespace-nowrap">
                  SARVA NATURAL
                </span>
                <span className="font-sans text-[6.5px] sm:text-[8px] lg:text-[9.5px] tracking-[0.16em] sm:tracking-[0.22em] uppercase text-ayur-primary font-bold mt-0.5 sm:mt-1 whitespace-nowrap">
                  EARTH &bull; HEALTH &bull; WELLNESS
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Center: Navigation Links in Evenly Spaced Horizontal Row */}
          <nav className="hidden lg:flex items-center justify-center min-w-0 px-2 xl:px-4">
            <div className="flex items-center justify-center gap-3.5 xl:gap-5 2xl:gap-7">
              <Link
                href="/collections/all-products"
                className={`text-sm font-medium transition-colors hover:text-ayur-primary ${
                  pathname.startsWith("/collections/all-products") || pathname === "/shop"
                    ? "text-ayur-primary border-b-2 border-ayur-primary pb-0.5"
                    : "text-ayur-dark/85"
                }`}
              >
                Shop All
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setConcernsDropdownOpen(true)}
                onMouseLeave={() => setConcernsDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-ayur-dark/85 hover:text-ayur-primary transition-colors py-2"
                  onClick={() => setConcernsDropdownOpen(!concernsDropdownOpen)}
                  aria-expanded={concernsDropdownOpen}
                >
                  <span>Our Formulations</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>

                {concernsDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-ayur-border shadow-elevated rounded-md p-3 grid gap-1.5 z-50 animate-in fade-in duration-150">
                    <div className="px-2 py-1 text-[11px] font-semibold text-ayur-muted uppercase tracking-wider border-b border-stone-100">
                      Classical Ayurvedic Trio
                    </div>
                    <Link
                      href="/products/moringa"
                      onClick={() => setConcernsDropdownOpen(false)}
                      className="p-2 text-xs font-medium text-ayur-dark hover:bg-ayur-sageSubtle hover:text-ayur-primary rounded flex items-center gap-2.5 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-700" />
                      <div>
                        <div className="font-semibold">Moringa Capsules</div>
                        <div className="text-[10px] text-ayur-muted">Superfood & Daily Immunity</div>
                      </div>
                    </Link>
                    <Link
                      href="/products/triphala"
                      onClick={() => setConcernsDropdownOpen(false)}
                      className="p-2 text-xs font-medium text-ayur-dark hover:bg-ayur-sageSubtle hover:text-ayur-primary rounded flex items-center gap-2.5 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-ayur-gold" />
                      <div>
                        <div className="font-semibold">Triphala Capsules</div>
                        <div className="text-[10px] text-ayur-muted">Digestion & Colon Detox</div>
                      </div>
                    </Link>
                    <Link
                      href="/products/ashwagandha"
                      onClick={() => setConcernsDropdownOpen(false)}
                      className="p-2 text-xs font-medium text-ayur-dark hover:bg-ayur-sageSubtle hover:text-ayur-primary rounded flex items-center gap-2.5 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-ayur-primary" />
                      <div>
                        <div className="font-semibold">Ashwagandha Capsules</div>
                        <div className="text-[10px] text-ayur-muted">Stress Relief & Deep Rest</div>
                      </div>
                    </Link>
                    <div className="pt-1 mt-1 border-t border-stone-100">
                      <Link
                        href="/collections/all-products"
                        onClick={() => setConcernsDropdownOpen(false)}
                        className="text-xs font-semibold text-ayur-primary hover:underline px-2 py-1 block"
                      >
                        View All Formulations &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/products/moringa"
                className={`text-sm font-medium transition-colors hover:text-ayur-primary ${
                  pathname === "/products/moringa"
                    ? "text-ayur-primary border-b-2 border-ayur-primary pb-0.5"
                    : "text-ayur-dark/85"
                }`}
              >
                Moringa
              </Link>

              <Link
                href="/products/triphala"
                className={`text-sm font-medium transition-colors hover:text-ayur-primary ${
                  pathname === "/products/triphala"
                    ? "text-ayur-primary border-b-2 border-ayur-primary pb-0.5"
                    : "text-ayur-dark/85"
                }`}
              >
                Triphala
              </Link>

              <Link
                href="/products/ashwagandha"
                className={`text-sm font-medium transition-colors hover:text-ayur-primary ${
                  pathname === "/products/ashwagandha"
                    ? "text-ayur-primary border-b-2 border-ayur-primary pb-0.5"
                    : "text-ayur-dark/85"
                }`}
              >
                Ashwagandha
              </Link>

              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors hover:text-ayur-primary ${
                  pathname.startsWith("/blog")
                    ? "text-ayur-primary border-b-2 border-ayur-primary pb-0.5"
                    : "text-ayur-dark/85"
                }`}
              >
                Blog
              </Link>

              <Link
                href="/pages/about-us"
                className={`text-sm font-medium transition-colors hover:text-ayur-primary ${
                  pathname.startsWith("/pages/about-us") || pathname.startsWith("/pages/our-story")
                    ? "text-ayur-primary border-b-2 border-ayur-primary pb-0.5"
                    : "text-ayur-dark/85"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/pages/contact-us"
                className={`text-sm font-medium transition-colors hover:text-ayur-primary ${
                  pathname.startsWith("/pages/contact-us")
                    ? "text-ayur-primary border-b-2 border-ayur-primary pb-0.5"
                    : "text-ayur-dark/85"
                }`}
              >
                Contact
              </Link>

              <Link
                href="/pages/faqs"
                className={`text-sm font-medium transition-colors hover:text-ayur-primary ${
                  pathname.startsWith("/pages/faqs")
                    ? "text-ayur-primary border-b-2 border-ayur-primary pb-0.5"
                    : "text-ayur-dark/85"
                }`}
              >
                FAQs
              </Link>
            </div>
          </nav>

          {/* 3. Far Right: Search, Account, Wishlist, Cart, Mobile Menu */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2 lg:gap-2.5 flex-shrink-0">
            {/* Search */}
            <button
              onClick={openSearch}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-ayur-dark hover:text-ayur-primary hover:bg-ayur-parchment/70 transition-colors focus:outline-none"
              aria-label="Search formulations"
              title="Search"
            >
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
            </button>

            {/* Account */}
            <Link
              href="/account"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none ${
                pathname.startsWith("/account")
                  ? "text-ayur-primary bg-ayur-parchment/80"
                  : "text-ayur-dark hover:text-ayur-primary hover:bg-ayur-parchment/70"
              } hidden min-[360px]:flex`}
              aria-label="Patron Account"
              title="Account"
            >
              <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
            </Link>

            {/* Wishlist */}
            <button
              onClick={openWishlist}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-ayur-dark hover:text-ayur-primary hover:bg-ayur-parchment/70 transition-colors focus:outline-none"
              aria-label={`Wishlist with ${wishlistIds.length} items`}
              title="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
              {wishlistIds.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-ayur-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-ayur-dark hover:text-ayur-primary hover:bg-ayur-parchment/70 transition-colors focus:outline-none group"
              aria-label={`Cart with ${totalCartCount} items, total ₹${cartSubtotal}`}
              title="Bag"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75] text-ayur-dark group-hover:text-ayur-primary transition-colors" />
              {totalCartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-ayur-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-ayur-dark hover:text-ayur-primary hover:bg-ayur-parchment/70 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[1.75]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.75]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-ayur-border px-4 py-6 shadow-card animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {/* Mobile Patron Profile Quick Link */}
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-ayur-parchment/60 rounded-lg flex items-center justify-between border border-ayur-border/80 text-xs font-semibold text-ayur-dark hover:bg-ayur-sageSubtle transition-colors mb-1"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-ayur-primary text-white flex items-center justify-center font-serif text-xs font-bold">
                  AV
                </div>
                <div>
                  <div className="leading-tight text-ayur-dark">Aditya Verma</div>
                  <div className="text-[10px] text-ayur-muted font-normal">Patron Member &bull; View Account</div>
                </div>
              </div>
              <span className="text-ayur-primary text-xs font-bold">&rarr;</span>
            </Link>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-ayur-dark hover:text-ayur-primary py-2 border-b border-stone-100 flex items-center justify-between"
            >
              <span>Home</span>
              <span className="text-xs text-ayur-gold font-serif italic">Sarva Natural</span>
            </Link>

            <Link
              href="/collections/all-products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-ayur-dark hover:text-ayur-primary py-2 border-b border-stone-100 flex items-center justify-between"
            >
              <span>Shop All Formulations</span>
              <span className="text-xs text-ayur-primary font-semibold">3 Classical Products &rarr;</span>
            </Link>

            {/* 3 Products Quick Access */}
            <div className="py-2 border-b border-stone-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-ayur-muted block mb-2">
                Our Formulations
              </span>
              <div className="flex flex-col gap-1.5">
                <Link
                  href="/products/moringa"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 bg-ayur-parchment/60 rounded text-xs font-medium text-ayur-dark hover:bg-ayur-sageLight flex items-center justify-between"
                >
                  <span className="font-semibold">Moringa Capsules</span>
                  <span className="text-[11px] text-emerald-800">Superfood & Immunity</span>
                </Link>
                <Link
                  href="/products/triphala"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 bg-ayur-parchment/60 rounded text-xs font-medium text-ayur-dark hover:bg-ayur-sageLight flex items-center justify-between"
                >
                  <span className="font-semibold">Triphala Capsules</span>
                  <span className="text-[11px] text-ayur-primary">Digestion & Detox</span>
                </Link>
                <Link
                  href="/products/ashwagandha"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 bg-ayur-parchment/60 rounded text-xs font-medium text-ayur-dark hover:bg-ayur-sageLight flex items-center justify-between"
                >
                  <span className="font-semibold">Ashwagandha Capsules</span>
                  <span className="text-[11px] text-amber-800">Stress Relief & Rest</span>
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-ayur-dark hover:text-ayur-primary py-2 border-b border-stone-100 flex items-center justify-between"
            >
              <span>Ayurvedic Journal &amp; Blog</span>
              <span className="text-xs text-ayur-primary font-semibold">Read Guides &rarr;</span>
            </Link>

            <div className="grid grid-cols-2 gap-2 py-2 border-b border-stone-100 text-xs">
              <Link
                href="/pages/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-700 hover:text-ayur-primary font-medium"
              >
                About Us
              </Link>
              <Link
                href="/pages/our-story"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-700 hover:text-ayur-primary font-medium"
              >
                Our Story
              </Link>
              <Link
                href="/pages/quality"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-700 hover:text-ayur-primary font-medium"
              >
                Quality & Labs
              </Link>
              <Link
                href="/pages/faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-700 hover:text-ayur-primary font-medium"
              >
                FAQs
              </Link>
              <Link
                href="/pages/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-700 hover:text-ayur-primary font-medium"
              >
                Contact Us
              </Link>
              <Link
                href="/pages/order-tracking"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-700 hover:text-ayur-primary font-medium"
              >
                Track Order
              </Link>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-ayur-primary text-white font-medium rounded text-sm mt-1"
            >
              <PhoneCall className="w-4 h-4 text-ayur-gold" />
              <span>Book Vaidya Consultation (Demo)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
