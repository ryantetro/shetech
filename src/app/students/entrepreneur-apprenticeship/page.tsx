import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Entrepreneur Apprenticeship | SheTech',
  description: 'Learn entrepreneurship from tech leaders. Gain hands-on experience building and launching tech products and services.',
};

export default function EntrepreneurApprenticeshipPage() {
  return (
    <PageLayout
      title="Entrepreneur Apprenticeship"
      subtitle="Learn entrepreneurship from tech leaders. Gain hands-on experience building and launching tech products and services."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

