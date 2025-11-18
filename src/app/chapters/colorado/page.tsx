import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Colorado | SheTech',
  description: 'SheTech programs in Colorado. Find events, opportunities, and resources for students in the Colorado tech community.',
};

export default function ColoradoPage() {
  return (
    <PageLayout
      title="SheTech Colorado"
      subtitle="SheTech programs in Colorado. Find events, opportunities, and resources for students in the Colorado tech community."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

