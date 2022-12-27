import { useState } from "react";
import { useAppContext } from "../context/appContext";

function Button(props) {
  return (
    <button className="p-2 m-2 border-2 border-black" onClick={props.action}>
      {props.children}
    </button>
  );
}

function UserInput() {
  const { supabase } = useAppContext();

  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const login = () =>
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={onChange}
        className="border-2 border-black"
      />
    </form>
  );
}

function Debug() {
  const { supabase } = useAppContext();
  const getData = () =>
    supabase
      .from("messages")
      .select("*")
      .then((data) => console.log(data));

  return (
    <div className="w-screen h-screen">
      <Button action={getData}>getDatabase</Button>
      <Button action={login}>Login</Button>
    </div>
  );
}

export default Debug;
