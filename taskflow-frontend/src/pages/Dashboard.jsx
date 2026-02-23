import { useEffect, useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');

  const fetchProjects = async () => {
    try {
      const res = await api.get('/projects');
      setProjects(res.data);
    } catch (error) {
      toast.error('Failed to fetch projects');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      await api.post('/projects', { name });
      setName('');
      fetchProjects();
      toast.success('Project created');
    } catch (error) {
      toast.error('Error creating project');
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <form onSubmit={handleCreate}>
        <input
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create Project</button>
      </form>

      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;