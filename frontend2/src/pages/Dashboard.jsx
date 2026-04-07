import { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

export default function Dashboard() {
  const [tasks, setTasks]       = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = async () => {
    const { data } = await api.get('/tasks');
    setTasks(data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleCreate = async (taskData) => {
    await api.post('/tasks', taskData);
    fetchTasks();
    setShowForm(false);
  };

  const handleToggle = async (id, completed) => {
    await api.put(`/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Minhas Tarefas</h2>
          <button onClick={() => setShowForm(!showForm)}>+ Nova Tarefa</button>
        </div>
        {showForm && <TaskForm onSubmit={handleCreate} onCancel={() => setShowForm(false)} />}
        <div className="task-list">
          {tasks.length === 0 && <p style={{color:'#888', marginTop:'2rem', textAlign:'center'}}>Nenhuma tarefa ainda. Crie uma!</p>}
          {tasks.map(task => (
            <TaskCard key={task._id} task={task} onToggle={handleToggle} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}
