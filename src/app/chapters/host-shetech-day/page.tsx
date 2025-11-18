import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Host SheTech Day | SheTech',
  description: 'Bring SheTech to your community. Learn how to host a SheTech Day event and inspire young women in your area.',
};

export default function HostSheTechDayPage() {
  return (
    <PageLayout
      title="Host SheTech Day"
      subtitle="Bring SheTech to your community. Learn how to host a SheTech Day event and inspire young women in your area."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

