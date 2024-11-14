import dynamic from "next/dynamic";
import { ReactNode, Suspense } from "react";

// Dynamically import components
const Navbar = dynamic(() => import("@/components/share/navbar"));
const Footer = dynamic(() => import("@/components/share/footer"));
const ScrollToTop = dynamic(() => import("@/components/share/scrollToTop"));

const PublicLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <head>
        <link
          rel="shortcut icon"
          href="/assets/sovefi.jpeg"
          type="image/x-icon"
        />
      </head>

      <Suspense fallback={<div>Loading navbar...</div>}>
        <Navbar />
      </Suspense>
      {children}
      <Suspense fallback={<div>Loading scroll...</div>}>
        <ScrollToTop />
      </Suspense>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default PublicLayout;
