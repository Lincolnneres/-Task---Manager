import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao fazer login');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Entrar</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email"    placeholder="Email"  value={email}    onChange={e => setEmail(e.target.value)}    required />
          <input type="password" placeholder="Senha"  value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Entrar</button>
        </form>
        <p>Nao tem conta? <Link to="/register">Cadastre-se</Link></p>
      </div>
    </div>
  );
}
