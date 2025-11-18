import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Scholarships | SheTech',
  description: 'Financial support for your STEM education. Learn about scholarship opportunities available through SheTech and our partners.',
};

export default function ScholarshipsPage() {
  return (
    <PageLayout
      title="Scholarships"
      subtitle="Financial support for your STEM education. Learn about scholarship opportunities available through SheTech and our partners."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

