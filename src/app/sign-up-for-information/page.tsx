import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Sign Up for Information | SheTech',
  description: 'Stay informed about SheTech programs, events, and opportunities. Sign up to receive updates and announcements.',
};

export default function SignUpForInformationPage() {
  return (
    <PageLayout
      title="Sign Up for Information"
      subtitle="Stay informed about SheTech programs, events, and opportunities. Sign up to receive updates and announcements."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

