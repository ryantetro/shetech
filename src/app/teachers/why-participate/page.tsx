import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Why Participate | SheTech',
  description: 'Learn about the benefits of SheTech programs for your students and how participation can enhance their STEM education.',
};

export default function WhyParticipatePage() {
  return (
    <PageLayout
      title="Why Participate"
      subtitle="Learn about the benefits of SheTech programs for your students and how participation can enhance their STEM education."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

