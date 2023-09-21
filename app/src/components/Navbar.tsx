import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Всі тести</Link>
        </li>
        <li>
          <Link to="/create-test">Створити тест</Link>
        </li>
      </ul>
    </nav>
  );
}
