import React from 'react';
import PageShell from '../components/PageShell';
import { NavLink } from '../components/Navbar';
import { sitePath } from '../lib/sitePaths';

// Page frame for the studio's standalone pages: "Penko Software" brand, links back to
// Penko Plaza and the paid apps hub, plus any page-specific links
const StudioShell: React.FC<{ extraLinks?: NavLink[]; children: React.ReactNode }> = ({ extraLinks = [], children }) => {
  // The section switch already links Penko Plaza and the paid apps hub
  const links: NavLink[] = extraLinks;
  return (
    <PageShell area="paid" brand="Penko Software" brandHref={sitePath('')} links={links}>
      {children}
    </PageShell>
  );
};

export default StudioShell;
