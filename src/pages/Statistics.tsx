import ActivityLog from "../components/ActivityLog";
import PerformanceStatistics from "../components/dashboard/PerformanceStatistics";
import TotalSales from "../components/dashboard/TotalSales";
import SalesPerformance from "../components/SalesPerformance";
import SignUpRate from "../components/SignUpRate";
import UserEngagement from "../components/UserEngagement";
import PageLayout from "../layout/PageLayout";

const Statistics = () => {
  return (
    <PageLayout title="Statistics ">
      <div>
        <div className="grid md:grid-cols-10 gap-6">
          <div className="md:col-span-6">
            <PerformanceStatistics />
          </div>

          <div className="md:col-span-4">
            <SalesPerformance />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <TotalSales />
          <ActivityLog />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <UserEngagement />
          <SignUpRate />
        </div>
      </div>
    </PageLayout>
  );
};

export default Statistics;
