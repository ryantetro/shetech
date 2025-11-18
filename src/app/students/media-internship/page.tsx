import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Media Internship | SheTech',
  description: 'Get hands-on journalism experience promoting women in technology. Develop skills in writing, interviews, and multimedia content creation.',
};

export default function MediaInternshipPage() {
  return (
    <PageLayout
      title="Media Internship"
      subtitle="Get hands-on journalism experience promoting women in technology. Develop skills in writing, interviews, and multimedia content creation."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

