import { Outlet, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import Navbar from '../community/Navbar';

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar />
      <main
        className={twMerge(
          'min-h-screen bg-gray-50',
          pathname === '/communities' && ' bg-gradient-to-br from-gray-50 via-white to-blue-50',
        )}
      >
        <Outlet /> {/* Renders nested routes here */}
      </main>
    </div>
  );
};

export default MainLayout;
