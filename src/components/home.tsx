import React from "react";
import DashboardLayout from "./dashboard/DashboardLayout";
import AnalyticsOverview from "./dashboard/AnalyticsOverview";
import SellerApprovalList from "./sellers/SellerApprovalList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Bell, ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-6 bg-background">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Admin! Here's an overview of your e-commerce
              platform.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                3
              </span>
            </Button>
            <Button>
              View Reports
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Analytics Overview Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
          <AnalyticsOverview />
        </section>

        {/* Quick Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₱124,580.50</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <span className="text-emerald-500 mr-1">↑ 12%</span> from last
                month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Sellers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <span className="text-emerald-500 mr-1">↑ 4</span> new this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,204</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <span className="text-emerald-500 mr-1">↑ 8%</span> from last
                month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Approvals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <span className="text-amber-500 mr-1">!</span> requires
                attention
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Pending Seller Approvals Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Pending Seller Approvals</h2>
            <Button variant="outline" size="sm">
              View All
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <SellerApprovalList />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Home;
