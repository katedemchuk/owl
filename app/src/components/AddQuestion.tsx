import { Link, Outlet, useLocation } from 'react-router-dom';

export function AddQuestion() {
  const { pathname } = useLocation();

  return (
    <>
      {!pathname.includes('create-question') &&
      <Link to="create-question">
        Додати запитання
      </Link>}
      <Outlet />
    </>
  );
}
