export default function TaskCard({ task, onToggle, onDelete }) {
  const labels = { baixa: 'Baixa', media: 'Media', alta: 'Alta' };

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <span className={`priority priority-${task.priority}`}>
          {labels[task.priority]}
        </span>
      </div>
      <div className="task-actions">
        <button onClick={() => onToggle(task._id, task.completed)}>
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>
        <button className="btn-delete" onClick={() => onDelete(task._id)}>
          Deletar
        </button>
      </div>
    </div>
  );
}
