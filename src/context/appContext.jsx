import { createContext, useContext, useEffect, useRef, useState } from "react";

import { createClient } from "@supabase/supabase-js";

const AppContext = createContext({});

function AppContextProviver({ children }) {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    if (message.length <= 0) return { message: "too short" };
    setMessages([...messages, message]);
    return null;
  };

  useEffect(() => {
    supabase;
  }, []);

  return (
    <AppContext.Provider value={{ messages, addMessage, supabase }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppContextProviver, useAppContext };

export function useMessageInput() {
  const [value, setValue] = useState("");

  const { addMessage } = useAppContext();

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (value.trim().length > 0) addMessage(value.trim());
      setValue("");
    }
  };
  const onChange = (e) => setValue(e.target.value);

  return [{ onChange, onKeyDown, value }];
}

export function useMessageList() {
  const ref = useRef();
  const { messages } = useAppContext();
  useEffect(() => {
    ref?.current?.scrollIntoView();
  }, [messages]);

  return [messages, ref];
}

export function useDataBaseOnce(db, options) {
  const { supabase } = useAppContext();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await supabase.from(db).select();
      return data;
    };
    const { data, error } = getData();
    setData(data);
    setError(error);
    setLoading(false);
    console.log(data, error);
  }, []);
  return [data, loading, error];
}
