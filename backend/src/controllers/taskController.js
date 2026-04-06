const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    const task = await Task.create({ user: req.userId, title, description, priority });
    res.status(201).json(task);
  } catch {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!task)
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.json(task);
  } catch {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!task)
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.json({ message: 'Tarefa deletada' });
  } catch {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};
