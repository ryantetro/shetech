import { Metadata } from 'next';
import { PageLayout, PlaceholderContent } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Contact Us | SheTech',
  description: 'Get in touch with us. Have questions or want to learn more about SheTech? We would love to hear from you.',
};

export default function ContactUsPage() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in touch with us. Have questions or want to learn more about SheTech? We would love to hear from you."
    >
      <PlaceholderContent />
    </PageLayout>
  );
}

