import { Outlet } from 'react-router-dom';
import GuestHeader from '../components/GuestHeader';
import GuestFooter from '../components/GuestFooter';
import './GuestLayout.css';

const GuestLayout = () => {
  return (
    <div className="guest-layout">
      <GuestHeader />
      <main className="guest-content">
        <Outlet /> {/* This will render the guest pages */}
      </main>
      <GuestFooter />
    </div>
  );
};

export default GuestLayout;