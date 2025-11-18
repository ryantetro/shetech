import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Tech Workshops | SheTech',
  description: 'Recorded workshops and tutorials. Access educational content on programming, design, engineering, and other tech topics.',
};

export default function TechWorkshopsPage() {
  return (
    <PageLayout
      title="Tech Workshops"
      subtitle="Recorded workshops and tutorials. Access educational content on programming, design, engineering, and other tech topics."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

