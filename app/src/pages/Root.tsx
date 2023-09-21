import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function Root() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
