import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Holiday Yacht",
  description:
    "Read Holiday Yacht's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our yacht charter services.",
  openGraph: {
    title: "Privacy Policy | Holiday Yacht",
    description:
      "Read Holiday Yacht's Privacy Policy. Learn how we collect, use, and protect your personal information.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
