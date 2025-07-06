
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'senior' | 'family' | 'admin' | null;

export interface User {
  id: string;
  role: UserRole;
  nameTH: string;
  email: string;
  phone?: string;
  avatarURL?: string;
}

export interface AppContextType {
  user: User | null;
  userRole: UserRole;
  setUser: (user: User | null) => void;
  setUserRole: (role: UserRole) => void;
  isAuthenticated: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);

  const isAuthenticated = user !== null;

  return (
    <AppContext.Provider value={{
      user,
      userRole,
      setUser,
      setUserRole,
      isAuthenticated
    }}>
      {children}
    </AppContext.Provider>
  );
};
