import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function AuthPage() {
  const [currentView, setCurrentView] = useState('login'); 

  const toggleView = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="auth-container" style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', }}>
      <h1>Welcome</h1>
      
      {currentView === 'login' ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}

      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        {currentView === 'login' ? (
          <>
            Don't have an account?{' '}
            <button onClick={() => toggleView('signup')} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button onClick={() => toggleView('login')} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
              Log In
            </button>
          </>
        )}
      </p>
    </div>
  );
}

export default AuthPage;