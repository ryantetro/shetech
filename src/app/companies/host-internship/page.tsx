import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Host Internship | SheTech',
  description: 'Provide real-world experience to students. Host SheTech interns and help build the future tech workforce.',
};

export default function HostInternshipPage() {
  return (
    <PageLayout
      title="Host an Internship"
      subtitle="Provide real-world experience to students. Host SheTech interns and help build the future tech workforce."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

