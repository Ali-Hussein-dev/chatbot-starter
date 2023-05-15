import { useStore } from "@/hooks/use-store";
import { Paper, Text } from "@mantine/core";
import { TiUser } from 'react-icons/ti'
import { BsRobot } from 'react-icons/bs'
import { Markdown } from "./Markdown";

//======================================
export const UserMessage = ({ text = "" }) => {
    return (
        <div className="w-full  gap-2 py-4 flex items-start justify-start">
            <TiUser size="20" className="text-lime-600" />
            <Text color="dimmed">{text}</Text>{" "}
        </div>
    );
};
//======================================
export const AiMessage = ({ text = "" }) => {
    return (
        <div className="w-full  gap-2 py-4 flex items-start justify-start">
            <BsRobot size="20" className="text-indigo-400" />
            <Markdown content={text} />
        </div>
    );
};

//======================================
export const Chats = () => {
    const chats = useStore(s => s.chats)
    return (
        <div className="w-full grow py-2 max-w-3xl">
            {chats.length > 0 ? (
                <Paper p="md">
                    {chats.map((o) => (
                        <div key={o.id}>
                            <UserMessage text={o.user} />
                            <AiMessage text={o.ai} />
                        </div>
                    ))}
                </Paper>
            ) : <div className="mx-auto pt-10 ">Waiting for your message...</div>}
        </div>
    );
};
