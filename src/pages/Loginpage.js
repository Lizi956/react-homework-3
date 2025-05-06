import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isValid = email === 'digitalAcademy@gmail.com' && password === 'iLoveReact123';

  const handleLogin = () => {
    if (isValid) {
      navigate('/home');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button disabled={!isValid} onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
