import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Holiday Yacht",
  description:
    "Read Holiday Yacht's Terms and Conditions for yacht charter bookings. Understand our booking policies, cancellation terms, and charter conditions.",
  openGraph: {
    title: "Terms & Conditions | Holiday Yacht",
    description:
      "Read Holiday Yacht's Terms and Conditions for yacht charter bookings.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
