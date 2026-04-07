import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <span className="navbar-brand">Task Manager</span>
      <div className="navbar-right">
        <span>Ola, {user?.name}</span>
        <button onClick={logout}>Sair</button>
      </div>
    </nav>
  );
}
