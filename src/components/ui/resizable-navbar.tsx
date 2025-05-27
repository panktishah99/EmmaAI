'use client';

import { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar-components';
import { HeartFilledIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

export const ResizableNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Features',
      link: '#features',
    },
    {
      name: 'How it Works',
      link: '#how-it-works',
    },
    {
      name: 'Testimonials',
      link: '#testimonials',
    },
    {
      name: 'FAQ',
      link: '#faq',
    },
  ];
  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4CAF50] to-[#8BC34A]">
            <HeartFilledIcon className="size-6 text-white" />
          </div>
          <div className="font-normal">
            <span className="font-bold text-white">Emma</span>
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
              {' '}
              | AI Therapist
            </span>
          </div>
        </NavbarLogo>

        <NavItems items={navItems} />

        <div className="relative z-20 flex items-center gap-4">
          <NavbarButton
            variant="secondary"
            as="a"
            href="https://calendly.com/swanandwagh/alias"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span>Book a Demo</span>
          </NavbarButton>
          <NavbarButton variant="primary" href="/therapist">
            Get Started
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#4CAF50] to-[#8BC34A]">
              <HeartFilledIcon className="size-5 text-white" />
            </div>
            <div className="font-normal">
              <span className="font-bold text-white">Emma</span>
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">
                {' '}
                | AI Therapist
              </span>
            </div>
          </NavbarLogo>

          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative py-2 text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              <span className="block">{item.name}</span>
              {/* Animated underline on hover */}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
          <div className="mt-4 flex w-full flex-col gap-4">
            <NavbarButton
              as="a"
              href="https://calendly.com/swanandwagh/alias"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="flex w-full items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
            </NavbarButton>
            <NavbarButton
              href="/therapist"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
