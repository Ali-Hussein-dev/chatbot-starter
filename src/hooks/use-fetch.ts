import { useForm } from "react-hook-form";
import { useStore } from "./use-store";
type FormValues = { userMsg: string };

export const useFetch = () => {
  const addChatpair = useStore(s => s.addChatpair)
  const methods = useForm<FormValues>();
  const onSubmit = ({ userMsg }: FormValues) => {
    console.log(userMsg);
    addChatpair({ id: Math.random(), user: userMsg, ai: "no laskdjflsa dfjasldf" })
  };
  return { methods, onSubmit };
};
