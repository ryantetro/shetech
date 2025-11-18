import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Sponsor | SheTech',
  description: 'Support SheTech programs and events. Partner with us to empower the next generation of women in technology.',
};

export default function SponsorPage() {
  return (
    <PageLayout
      title="Sponsor SheTech"
      subtitle="Support SheTech programs and events. Partner with us to empower the next generation of women in technology."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

