import { ActionIcon, Textarea } from "@mantine/core";
import { BsSendFill } from "react-icons/bs";
//======================================
export const PromptArea = ({ input, handleInputChange, handleSubmit }: {
  input: string;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}) => {
  // const {
  //   onSubmit,
  //   methods: { register, handleSubmit },
  // } = useFetch();

  return (
    <form
      className="min-h-20 sticky bottom-0 w-full bg-[#141517]/10 pb-2 backdrop-blur-sm"
      onSubmit={handleSubmit}
    >
      <Textarea
        placeholder="send message"
        minRows={1}
        maxRows={10}
        size="lg"
        className="mx-auto max-w-3xl"
        autosize
        value={input}
        onChange={handleInputChange}
        rightSection={
          <ActionIcon type="submit">
            <BsSendFill />
          </ActionIcon>
        }
      />
    </form>
  );
};
