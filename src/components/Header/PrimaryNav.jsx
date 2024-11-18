import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function PrimaryNav() {
  return (
    <Navbar className="container mx-auto" maxWidth="full">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
      <NavbarItem>
          <a href="#benefits">Benefits</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#features">Features</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#pricing">Pricing</a>
        </NavbarItem>
        <NavbarItem>
        <a href="#faq">FAQ</a>
        </NavbarItem>
        <NavbarItem>
        <a href="#social-proof">Testimonials</a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <a href="#signup" className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover">Sign Up</a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}