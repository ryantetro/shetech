import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'TechBuzz Articles | SheTech',
  description: 'Latest articles about women in tech. Read inspiring stories, industry news, and insights from the SheTech community.',
};

export default function TechBuzzArticlesPage() {
  return (
    <PageLayout
      title="TechBuzz Articles"
      subtitle="Latest articles about women in tech. Read inspiring stories, industry news, and insights from the SheTech community."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

