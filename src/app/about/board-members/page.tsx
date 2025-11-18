import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Board Members | SheTech',
  description: 'Meet our leadership team. Learn about the dedicated individuals guiding SheTech and Women Tech Council.',
};

export default function BoardMembersPage() {
  return (
    <PageLayout
      title="Board Members"
      subtitle="Meet our leadership team. Learn about the dedicated individuals guiding SheTech and Women Tech Council."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

