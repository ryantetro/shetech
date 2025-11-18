import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Student Demos | SheTech',
  description: 'Watch student project demonstrations. See what our participants have built and learn about their innovative tech solutions.',
};

export default function StudentDemosPage() {
  return (
    <PageLayout
      title="Student Demos"
      subtitle="Watch student project demonstrations. See what our participants have built and learn about their innovative tech solutions."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

