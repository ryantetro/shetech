import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Register Your Students | SheTech',
  description: 'Sign up your students for SheTech programs and events. Help them explore opportunities in STEM education and careers.',
};

export default function RegisterYourStudentsPage() {
  return (
    <PageLayout
      title="Register Your Students"
      subtitle="Sign up your students for SheTech programs and events. Help them explore opportunities in STEM education and careers."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

