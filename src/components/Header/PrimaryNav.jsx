import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function PrimaryNav() {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <a href="#features">Features</a>
        </NavbarItem>
        <NavbarItem isActive>
          <a href="#pricing">Pricing</a>
        </NavbarItem>
        <NavbarItem>
        <a href="#customers">Customers</a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" client:visible>Sign Up</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}