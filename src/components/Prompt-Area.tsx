import { useFetch } from "@/hooks/use-fetch";
import { ActionIcon, Textarea } from "@mantine/core";
import { BsSendFill } from "react-icons/bs";

//======================================
export const PromptArea = () => {
  const {
    onSubmit,
    methods: { register, handleSubmit },
  } = useFetch();
  return (
    <form className="w-full sticky bottom-0 bg-[#141517]/10 backdrop-blur-sm min-h-20 pb-2" onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        placeholder="send message"
        minRows={1}
        maxRows={10}
        size="lg"
        className="max-w-3xl mx-auto"
        autosize
        {...register("userMsg")}
        rightSection={
          <ActionIcon type="submit">
            <BsSendFill />
          </ActionIcon>
        }
      />
    </form>
  );
};
