import { Prison } from '../../types/prison';
import HistoricalTrendChart from '../stats/charts/HistoricalTrendChart';
import ComparisonChart from '../stats/charts/ComparisonChart';
import DetailedStatsTable from '../stats/tables/DetailedStatsTable';
import OccupancyTrendChart from '../stats/charts/OccupancyTrendChart';
import RegionalDistributionChart from '../stats/charts/RegionalDistributionChart';

interface StatisticsSectionProps {
  prisons: Prison[];
}

export default function StatisticsSection({ prisons }: StatisticsSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HistoricalTrendChart prisons={prisons} />
        <ComparisonChart prisons={prisons} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OccupancyTrendChart prisons={prisons} />
        <RegionalDistributionChart prisons={prisons} />
      </div>

      <DetailedStatsTable prisons={prisons} />
    </div>
  );
}