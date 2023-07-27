import { Paper, Text } from "@mantine/core";
import { TiUser } from "react-icons/ti";
import { BsRobot } from "react-icons/bs";
import { Markdown } from "./Markdown";
import { Message } from "ai/react";
//======================================
export const UserMessage = ({ text = "" }) => {
  return (
    <div className="flex w-full items-start justify-start gap-2">
      <TiUser size="20" className="text-lime-600" />
      <Text color="dimmed">{text}</Text>{" "}
    </div>
  );
};
//======================================
export const AiMessage = ({ text = "" }) => {
  return (
    <div className="flex w-full items-start justify-start gap-2">
      <BsRobot size="20" className="text-indigo-400" />
      <Markdown content={text} />
    </div>
  );
};

//======================================
export const Chats = ({ messages }: { messages: Message[] }) => {
  // const chats = useStore(s => s.chats)
  return (
    <div className="w-full max-w-3xl grow py-2">
      {messages.length > 0 ? (
        <Paper p="md">
          {messages.map((o) => (
            <div key={o.id} className="border-l border-zinc-700 pl-2 mb-4">
              {o.role === "user" ? (
                <UserMessage text={o.content} />
              ) : (
                <AiMessage text={o.content} />
              )}
            </div>
          ))}
        </Paper>
      ) : (
        <div className="mx-auto pt-10 ">Waiting for your message...</div>
      )}
    </div>
  );
};
