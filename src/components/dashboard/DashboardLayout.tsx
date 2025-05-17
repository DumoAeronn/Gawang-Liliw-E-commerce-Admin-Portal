import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  BarChart2,
  FileText,
  Settings,
  Bell,
  Search,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps = {}) => {
  const navItems = [
    { icon: <Home className="mr-2 h-4 w-4" />, label: "Dashboard", href: "/" },
    {
      icon: <Users className="mr-2 h-4 w-4" />,
      label: "Seller Management",
      href: "/sellers",
    },
    {
      icon: <BarChart2 className="mr-2 h-4 w-4" />,
      label: "Analytics",
      href: "/analytics",
    },
    {
      icon: <FileText className="mr-2 h-4 w-4" />,
      label: "Reports",
      href: "/reports",
    },
    {
      icon: <Settings className="mr-2 h-4 w-4" />,
      label: "Settings",
      href: "/settings",
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card">
        <div className="flex h-16 items-center justify-center border-b">
          <h1 className="text-xl font-bold text-primary">Gawang Liliw</h1>
        </div>
        <nav className="flex flex-col p-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground mb-1"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <Separator className="my-4" />
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">
                admin@gawangliliw.com
              </p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8 w-full max-w-md" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="flex items-center justify-between p-2">
                  <p className="text-sm font-medium">Notifications</p>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Mark all as read
                  </Button>
                </div>
                <Separator />
                <div className="max-h-80 overflow-auto">
                  {[1, 2, 3].map((item) => (
                    <DropdownMenuItem key={item} className="cursor-pointer p-4">
                      <div>
                        <p className="text-sm font-medium">
                          New seller application
                        </p>
                        <p className="text-xs text-muted-foreground">
                          A new seller has submitted an application
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          10 minutes ago
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children || (
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">
                Select a menu item to view content
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
