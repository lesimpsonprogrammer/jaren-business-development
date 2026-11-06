import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Jaren BD | Momentum Data Solutions', description: 'Business development operations and approved outreach.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
