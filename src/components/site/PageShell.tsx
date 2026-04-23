import { SiteFooter } from './SiteFooter';
import { SiteNavbar } from './SiteNavbar';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavbar />
      <div className="h-16 md:h-20" />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

