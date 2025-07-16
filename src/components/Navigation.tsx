import { NavLink } from "react-router-dom";
import { Search, Settings } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const navItems = [
    { to: "/", label: "Keybind Lookup", icon: Search },
    { to: "/setup", label: "Setup Guide", icon: Settings }
  ];

  return (
    <nav className="flex justify-center gap-4 mb-8">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to}>
          {({ isActive }) => (
            <Button 
              variant={isActive ? "default" : "outline"} 
              className="flex items-center gap-2"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          )}
        </NavLink>
      ))}
    </nav>
  );
}