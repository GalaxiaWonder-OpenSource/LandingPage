import { UserType } from '../../users/model/user-type.enum';

export interface OverviewCard {
  icon: string;
  title: string;
  content: string;
}

export function getCardsByUserType(userType: UserType): OverviewCard[] {
  if (userType === UserType.CONTRACTOR) {
    return [
      { icon: 'workspaces', title: 'overviews.contractor.features.project-management.title', content: 'overviews.contractor.features.project-management.content' },
      { icon: 'change_circle', title: 'overviews.contractor.features.change-management.title', content: 'overviews.contractor.features.change-management.content' },
      { icon: 'calendar_today', title: 'overviews.contractor.features.schedule.title', content: 'overviews.contractor.features.schedule.content' },
      { icon: 'cloud', title: 'overviews.contractor.features.cloud-storage.title', content: 'overviews.contractor.features.cloud-storage.content' },
    ];
  }

  if (userType === UserType.CLIENT) {
    return [
      { icon: 'published_with_changes', title: 'overviews.client.features.request-changes.title', content: 'overviews.client.features.request-changes.content' },
      { icon: 'visibility', title: 'overviews.client.features.supervision.title', content: 'overviews.client.features.supervision.content' },
      { icon: 'verified', title: 'overviews.client.features.verified-partners.title', content: 'overviews.client.features.verified-partners.content' },
    ];
  }
  return [];
}
