import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Count from './Count';
import './Login.css';

function Login() {
  const [token, setToken] = useState(null);

  // Quando o componente é montado, tentamos obter o token armazenado nos cookies
  useEffect(() => {
    const storedToken = Cookies.get('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Quando o usuário faz login, armazenamos o token nos cookies
  const handleLogin = (token) => {
    setToken(token);
    Cookies.set('token', token);
  };

  // Quando o usuário faz logout, removemos o token dos cookies
  const handleLogout = () => {
    setToken(null);
    Cookies.remove('token');
  };

  return (
    <div>
      {token ? (
        <div className='logado'>
          <p>Você está logado!</p>
          <Count/>
          <button className="logado" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='deslogado'>
          <p>Você precisa fazer login.</p>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

function Register(){
    // registra o usuario e senha
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     // Quando o componente é montado, tentamos obter o token armazenado nos cookies
  useEffect(() => {
    const storedToken = Cookies.get('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Quando o usuário faz login, armazenamos o token nos cookies
  const handleLogin = (token) => {
    setToken(token);
    Cookies.set('token', token);
  };

  // Quando o usuário faz logout, removemos o token dos cookies
  const handleLogout = () => {
    setToken(null);
    Cookies.remove('token');
  };
     return (
        <div>
      {token ? (
        <div className='logado'>
          <p>Você está logado!</p>
          <button className='logado' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='deslogado'>
          <p>Você precisa fazer registro.</p>
          <RegisterForm onLogin={handleLogin} />
        </div>
      )}
    </div>
    );

}

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você faria uma requisição para autenticar o usuário e obter um token
    const token = 'meu-token-de-autenticacao';

    onLogin(token);
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input className='login' type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input className='senha' type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button className='submit' type="submit">Entrar</button>
    </form>
  );
}


// register form
function RegisterForm({ onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = 'meu-token-de-autenticacao';
        onRegister(token);
    };

    return (
        <form className='register' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input className='login' type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input className='senha' type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button className='submit' type="submit">Entrar</button>
    </form>
    );
}

function activeTabContent(activeTab) {
   if (activeTab === "login") {
        console.log("Login");
        return <Login />;
        } else if (activeTab === "register") {
        console.log("Registro");
        return <Register />;
        }
    }

function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="auth-tabs-container">
      <button
        className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
        onClick={() => setActiveTab("login")}
      >
        Login
      </button>
      <button
        className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
        onClick={() => setActiveTab("register")}
      >
        Registro
      </button>
      
      {activeTabContent(activeTab)}

    </div>
  );
}

export default Auth;