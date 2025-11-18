import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Sponsors | SheTech',
  description: 'Our valued partners and supporters. Meet the companies and organizations that make SheTech programs possible.',
};

export default function SponsorsPage() {
  return (
    <PageLayout
      title="Our Sponsors"
      subtitle="Our valued partners and supporters. Meet the companies and organizations that make SheTech programs possible."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

