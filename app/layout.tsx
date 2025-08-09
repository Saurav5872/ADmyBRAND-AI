
import './globals.css';
export const metadata = {
  title: 'ADmyBRAND AI Suite',
  description: 'AI marketing suite landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
