import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'WTC College Interns | SheTech',
  description: 'College internship opportunities through Women Tech Council. Gain professional experience while pursuing your degree.',
};

export default function WTCCollegeInternsPage() {
  return (
    <PageLayout
      title="WTC College Interns"
      subtitle="College internship opportunities through Women Tech Council. Gain professional experience while pursuing your degree."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

