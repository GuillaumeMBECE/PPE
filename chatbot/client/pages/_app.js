import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

import 'tailwindcss/tailwind.css';

const SUPABASE_URL = "https://kocgoacexsujdhwakbjq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvY2dvYWNleHN1amRod2FrYmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MDc0NDgsImV4cCI6MjAxNTI4MzQ0OH0.wHDJyAystba07j7thllqYOVpVL-Q-m5Mj94zXS5zQlA";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function MyApp({ Component, pageProps }) {
  return (
    
      
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        > 
          <Component {...pageProps} />
        </SessionContextProvider>
        
    
  );
}

export default MyApp;
