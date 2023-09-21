import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Всі тести</Link>
        </li>
      </ul>
    </nav>
  );
}
