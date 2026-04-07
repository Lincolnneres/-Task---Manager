import { useState } from 'react';

export default function TaskForm({ onSubmit, onCancel }) {
  const [title, setTitle]             = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority]       = useState('media');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, priority });
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Titulo da tarefa" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Descricao (opcional)" value={description} onChange={e => setDescription(e.target.value)} />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="baixa">Baixa</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <div className="form-actions">
          <button type="submit">Criar</button>
          <button type="button" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
