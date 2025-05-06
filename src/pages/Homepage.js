import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import FilterPanel from '../components/FilterPanel';

function HomePage() {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ name: true, email: true, picture: true });

  const fetchUsers = async (count = 1) => {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await res.json();
    setUsers((prev) => [...prev, ...data.results]);
  };

  useEffect(() => {
    fetchUsers(5);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Users</h2>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <button onClick={() => fetchUsers(1)}>add</button>
      <div>
        {users.map((user, index) => (
          <UserCard key={index} user={user} filters={filters} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
