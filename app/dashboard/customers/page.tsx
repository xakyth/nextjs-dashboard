import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Page() {
  return <p>Customers page</p>;
}
