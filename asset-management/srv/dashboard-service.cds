using { asset as db } from '../db/schema';

service DashboardService {
    entity AssetCounts as select from db.Assets {
        key 'AssetCounts' as ID,
        count(*) as totalAssets,
        sum(case when status = 'Available' then 1 else 0 end) as availableAssets,
        sum(case when status = 'Assigned' then 1 else 0 end) as assignedAssets,
        sum(case when status = 'Maintenance' then 1 else 0 end) as inMaintenanceAssets,
    };

}