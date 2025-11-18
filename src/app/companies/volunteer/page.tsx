import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Volunteer | SheTech',
  description: 'Contribute your time and expertise to SheTech programs. Help us create meaningful experiences for young women in STEM.',
};

export default function VolunteerPage() {
  return (
    <PageLayout
      title="Volunteer with SheTech"
      subtitle="Contribute your time and expertise to SheTech programs. Help us create meaningful experiences for young women in STEM."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

