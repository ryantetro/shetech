import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Arizona | SheTech',
  description: 'SheTech programs in Arizona. Find events, opportunities, and resources for students in the Arizona tech community.',
};

export default function ArizonaPage() {
  return (
    <PageLayout
      title="SheTech Arizona"
      subtitle="SheTech programs in Arizona. Find events, opportunities, and resources for students in the Arizona tech community."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

