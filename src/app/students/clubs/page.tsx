import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Clubs | SheTech',
  description: 'Start or join a SheTech club at your school. Connect with other students interested in STEM and participate in hands-on activities.',
};

export default function ClubsPage() {
  return (
    <PageLayout
      title="SheTech Clubs"
      subtitle="Start or join a SheTech club at your school. Connect with other students interested in STEM and participate in hands-on activities."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

