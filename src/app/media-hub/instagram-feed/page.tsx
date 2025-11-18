import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Instagram Feed | SheTech',
  description: 'Follow our journey on Instagram. See photos and updates from SheTech events, programs, and our amazing community.',
};

export default function InstagramFeedPage() {
  return (
    <PageLayout
      title="Instagram Feed"
      subtitle="Follow our journey on Instagram. See photos and updates from SheTech events, programs, and our amazing community."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

