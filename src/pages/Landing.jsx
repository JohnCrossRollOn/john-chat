import { useAppContext } from "../context/appContext";
import { Chat } from "../components/Chat";

function Jumbotron() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-black text-white bg-black p-4">
        Hi! This is my chat app.
      </h2>
      <p className="tracking-tight leading-4">
        Stick around and try this new and revolutionary techonology!
      </p>
    </div>
  );
}
function Landing() {
  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-screen px-4 py-8 gap-4">
      <Jumbotron />
      <Chat />
    </div>
  );
}

export default Landing;
