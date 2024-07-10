import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and API key are required");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [justLoggedIn, setJustLoggedIn] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };

    fetchSession();
  }, []);

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSession(data.session);
      setJustLoggedIn(true);
      navigate("/account");
    }
    setLoading(false);
  };

  const handleGoogleSignin = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setError(error.message);
    } else {
      setSession(data.session);
      setJustLoggedIn(true);
      navigate("/account");
    }
    setLoading(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSession(data.session);
      setJustLoggedIn(true);
      navigate("/account");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
    } else {
      setSession(null);
      navigate("/login");
    }
    setLoading(false);
  };

  const isLoggedIn = Boolean(session);

  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        handleSignup,
        handleLogin,
        handleLogout,
        isLoggedIn,
        handleGoogleSignin,
        error,
        loading,
        justLoggedIn,
        setJustLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthContextProvider");
  }
  return context;
}
