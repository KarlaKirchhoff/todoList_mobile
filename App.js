import React, { useEffect, useState } from 'react';
import Navigation from './src/navigation';
import useNotifications from './src/hooks/useNotifications';
import { supabase } from './src/utils/supabase';
import AuthNavigation from './src/navigation/AuthNavigation';

export default function App() {
  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => { setSession(session) })
    return () => { listener. subscription.unsubscribe()}
  }, [])

  return session ? <Navigation /> : <AuthNavigation />

}