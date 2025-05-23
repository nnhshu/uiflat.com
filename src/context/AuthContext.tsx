'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Định nghĩa kiểu user (ví dụ bạn có thể thay đổi theo user của bạn)
type UserType = {
  id: number;
  name: string;
  email: string;
} | null;

// Kiểu context chứa user và setUser
type AuthContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
} | null;

const AuthContext = createContext<AuthContextType>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
