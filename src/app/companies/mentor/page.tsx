import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Mentor | SheTech',
  description: 'Guide and inspire the next generation of women in tech. Share your expertise and help students discover their potential in STEM.',
};

export default function MentorPage() {
  return (
    <PageLayout
      title="Become a Mentor"
      subtitle="Guide and inspire the next generation of women in tech. Share your expertise and help students discover their potential in STEM."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

