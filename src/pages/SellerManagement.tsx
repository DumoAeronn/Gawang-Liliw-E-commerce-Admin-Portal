import React from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import SellerApprovalList from "../components/sellers/SellerApprovalList";

const SellerManagement = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-6 bg-background">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Seller Management
            </h1>
            <p className="text-muted-foreground">
              Review and manage seller applications and accounts
            </p>
          </div>
        </div>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Pending Applications</h2>
          </div>
          <SellerApprovalList />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default SellerManagement;
