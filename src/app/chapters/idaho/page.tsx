import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Idaho | SheTech',
  description: 'SheTech programs in Idaho. Find events, opportunities, and resources for students in the Idaho tech community.',
};

export default function IdahoPage() {
  return (
    <PageLayout
      title="SheTech Idaho"
      subtitle="SheTech programs in Idaho. Find events, opportunities, and resources for students in the Idaho tech community."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

