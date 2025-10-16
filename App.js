import React from 'react';
import Navigation from './src/navigation';
import useNotifications from './src/hooks/useNotifications';

export default function App() {
  useNotifications();
  return <Navigation />;
}