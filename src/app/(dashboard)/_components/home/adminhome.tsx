import AdminStatistic from "../statistic/AdminStatistic";
import PartnershipOpportunitiesChart from "../statistic/PartnershipOpportunitiesChart";
import ProfitChart from "../statistic/ProfitChart";
import VisitorsAnalytics from "../statistic/VisitorsAnalytics";

const AdminBoardHome = () => {
  return (
    <div>
      <section>
        <AdminStatistic />
      </section>
      <section className="mt-10  grid grid-cols-12 items-center gap-5 ">
        <PartnershipOpportunitiesChart />
        {/* <RevenueAndSalesChart /> */}
        <ProfitChart />

        <VisitorsAnalytics />
      </section>
    </div>
  );
};

export default AdminBoardHome;
