import React from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import AnalyticsOverview from "../components/dashboard/AnalyticsOverview";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-6 bg-background">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              View detailed performance metrics and trends
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
          <AnalyticsOverview />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
