import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

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

  // Fetch the session on initial load
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  // SIGNUP FUNCTION
  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

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
      console.log("User signed up:", firstName);
      navigate("/account"); // Redirect to account page after signup
    }
    setLoading(false);
  };

  // SIGNIN WITH GOOGLE FUNCTION
  const handleGoogleSignin = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setError(error.message);
    } else {
      setSession(data.session);
      setJustLoggedIn(true);
      console.log("User signed in with Google");
      navigate("/account"); // Redirect to account page after Google signin
    }
    setLoading(false);
  };

  // LOGIN FUNCTION
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSession(data.session);
      setJustLoggedIn(true);
      console.log("Login successful");
      navigate("/account"); // Redirect to account page after login
    }
    setLoading(false);
  };

  // LOGOUT FUNCTION
  const handleLogout = async () => {
    try {
      setLoading(true);
      setError("");

      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }

      setSession(null);
      navigate("/login"); // Redirect to Login page after logout
    } catch (error) {
      setError(error.message);
      console.error("Error logging out:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // CHECK IF USER IS LOGGED IN
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
