import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

interface AnalyticsOverviewProps {
  revenueData?: {
    total: number;
    percentageChange: number;
    isPositive: boolean;
  };
  topProducts?: Array<{
    id: string;
    name: string;
    sales: number;
    revenue: number;
  }>;
  sellerPerformance?: Array<{
    id: string;
    name: string;
    sales: number;
    rating: number;
  }>;
}

const AnalyticsOverview: React.FC<AnalyticsOverviewProps> = ({
  revenueData = {
    total: 24500,
    percentageChange: 12.5,
    isPositive: true,
  },
  topProducts = [
    { id: "1", name: "Classic Liliw Slippers", sales: 245, revenue: 4900 },
    { id: "2", name: "Embroidered Slippers", sales: 187, revenue: 4675 },
    { id: "3", name: "Beaded Liliw Sandals", sales: 156, revenue: 3900 },
    { id: "4", name: "Woven Pattern Slippers", sales: 134, revenue: 3350 },
    { id: "5", name: "Premium Leather Slippers", sales: 98, revenue: 2940 },
  ],
  sellerPerformance = [
    { id: "1", name: "Liliw Crafts Co.", sales: 342, rating: 4.8 },
    { id: "2", name: "Laguna Footwear", sales: 287, rating: 4.7 },
    { id: "3", name: "Handmade Treasures", sales: 245, rating: 4.9 },
    { id: "4", name: "Filipino Artisans", sales: 198, rating: 4.5 },
    { id: "5", name: "Heritage Slippers", sales: 176, rating: 4.6 },
  ],
}) => {
  return (
    <div className="w-full space-y-6 bg-background">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Analytics Overview
        </h2>
        <div className="flex items-center space-x-2">
          <Tabs defaultValue="daily" className="w-[300px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₱{revenueData.total.toLocaleString()}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              {revenueData.isPositive ? (
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              )}
              <span
                className={
                  revenueData.isPositive ? "text-green-500" : "text-red-500"
                }
              >
                {revenueData.percentageChange}%
              </span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">8.2%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Sellers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">4.5%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              <span className="text-red-500">0.4%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Top 5 products by sales volume</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center">
                  <div className="w-[60%]">
                    <div className="text-sm font-medium">{product.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {product.sales} units sold
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{
                          width: `${(product.sales / topProducts[0].sales) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="ml-2 text-sm font-medium">
                    ₱{product.revenue.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Seller Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Sellers</CardTitle>
            <CardDescription>Based on sales volume and ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sellerPerformance.map((seller) => (
                <div key={seller.id} className="flex items-center">
                  <div className="w-[60%]">
                    <div className="text-sm font-medium">{seller.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {seller.sales} orders
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(seller.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-xs text-muted-foreground">
                        {seller.rating}
                      </span>
                    </div>
                  </div>
                  <div className="ml-2 text-sm font-medium">
                    {seller.sales} sales
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
