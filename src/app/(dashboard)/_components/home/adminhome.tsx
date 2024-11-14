"use client";

import dynamic from "next/dynamic";

// Dynamically import components with ssr: false to disable server-side rendering
const AdminStatistic = dynamic(() => import("../statistic/AdminStatistic"), {
  ssr: false,
});
const PartnershipOpportunitiesChart = dynamic(
  () => import("../statistic/PartnershipOpportunitiesChart"),
  { ssr: false },
);
const ProfitChart = dynamic(() => import("../statistic/ProfitChart"), {
  ssr: false,
});
const VisitorsAnalytics = dynamic(
  () => import("../statistic/VisitorsAnalytics"),
  { ssr: false },
);

const AdminBoardHome = () => {
  return (
    <div>
      <section>
        <AdminStatistic />
      </section>
      <section className="mt-10 grid grid-cols-12 items-center gap-5">
        <PartnershipOpportunitiesChart />
        {/* <RevenueAndSalesChart /> */}
        <ProfitChart />
        <VisitorsAnalytics />
      </section>
    </div>
  );
};

export default AdminBoardHome;
