import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateName } from "../utils/helper";

const LiveChat = () => {
  const [typeText, setTypeText] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateMessage(25) + "🤝",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="border border-gray-300 p-2 ml-8 w-[450px] h-[670px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="border w-[450px] ml-8 my-2 py-1.5 border-gray-300 rounded-lg"
        onSubmit={(e) => {
            e.preventDefault()
            dispatch(addMessage({
              name:"bhaskar",
              message:typeText
            }))
            setTypeText("")
        }}
      >
        <input
        type="text"
          value={typeText}
          className=" w-80 ms-4 me-2 outline-none"
          onChange={(e) => setTypeText(e.target.value)}
        />
        <button className="rounded-lg bg-green-200 p-1 mx-4">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
