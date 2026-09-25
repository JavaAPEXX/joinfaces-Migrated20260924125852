// File: src/pages/migrated-repo/Security.tsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Security: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>Security Test Page</h1>
      {auth.isAnonymous && <span>anonymous</span>}
      {auth.isAuthenticated && <span>authenticated</span>}
      {auth.isFullyAuthenticated && <span>fullyAuthenticated</span>}
      {auth.hasRole('user') && <span>user</span>}
      {auth.hasRole('user') && <span>admin</span>}
    </div>
  );
};

export default Security;