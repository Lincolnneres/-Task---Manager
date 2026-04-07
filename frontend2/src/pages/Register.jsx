import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao cadastrar');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Cadastrar</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text"     placeholder="Nome"  value={name}     onChange={e => setName(e.target.value)}     required />
          <input type="email"    placeholder="Email" value={email}    onChange={e => setEmail(e.target.value)}    required />
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Cadastrar</button>
        </form>
        <p>Ja tem conta? <Link to="/login">Entrar</Link></p>
      </div>
    </div>
  );
}
