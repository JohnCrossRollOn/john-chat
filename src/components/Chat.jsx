import {
  useDataBaseOnce,
  useMessageInput,
  useMessageList,
  useAppContext,
} from "../context/appContext";

function Message({ children }) {
  return (
    <div className="bg-black text-white pl-8 break-all w-fit pr-1 max-w-[80%]">
      {children}
    </div>
  );
}
function MessagesList(props) {
  const [messages, ref] = useMessageList();
  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-1 px-1">
      {messages?.length === 0 && <div className=" ">wow, such empty</div>}
      <div className="flex-1"></div>
      {messages.map((m) => (
        <Message key={m + Math.random() * 100}>{m}</Message>
      ))}
      <div ref={ref} />
    </div>
  );
}
function MessageInput(props) {
  const [input] = useMessageInput();

  return (
    <input
      {...input}
      className="bg-black text-white px-1 focus:outline-none placeholder:text-red-500"
    />
  );
}
export const Chat = () => (
  <div className="border-4 border-black flex flex-col">
    <MessagesList />
    <MessageInput />
  </div>
);
