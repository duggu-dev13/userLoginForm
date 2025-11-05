import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function AuthPage() {
  const [currentView, setCurrentView] = useState('login'); 

  const toggleView = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="auth-container" style={{ 
      border: '1px solid #ccc', 
      maxWidth: '400px', 
      margin: '20px auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      
      {currentView === 'login' ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}

      <p style={{ marginTop: '20px', fontSize: '0.9em' }}>
        {currentView === 'login' ? (
          <>
            Don't have an account?{' '}
            <button onClick={() => toggleView('signup')} style={{ 
              background: 'none', 
              border: 'none', 
              color: '#007bff', 
              cursor: 'pointer',
              textDecoration: 'underline' 
            }}>
              **Sign Up**
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button onClick={() => toggleView('login')} style={{ 
              background: 'none', 
              border: 'none', 
              color: '#007bff', 
              cursor: 'pointer',
              textDecoration: 'underline' 
            }}>
              **Log In**
            </button>
          </>
        )}
      </p>
    </div>
  );
}

export default AuthPage;