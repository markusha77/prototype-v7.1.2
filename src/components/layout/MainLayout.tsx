import { motion, useScroll } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import AuthNavbar from '../auth/AuthNavbar';
import SignUpNavBar from '../auth/SignupNavBar';
import { Footer } from './Footer';
import Navbar from './Navbar';

const MainLayout = () => {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 xl:hidden"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
          zIndex: 60,
          backgroundColor: 'rgba(79, 70, 229, 0.4)',
        }}
      />
      <main
        className={twMerge(
          'min-h-screen bg-gray-50',
          pathname === '/communities' && ' bg-gradient-to-br from-gray-50 via-white to-blue-50',
        )}
      >
        {['/signin', '/signup'].includes(pathname) ? (
          <AuthNavbar />
        ) : pathname === '/landing' ? (
          <SignUpNavBar />
        ) : (
          <Navbar />
        )}
        <Outlet /> {/* Renders nested routes here */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
