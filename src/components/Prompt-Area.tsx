import { ActionIcon, Textarea } from "@mantine/core";
import { BsSendFill } from "react-icons/bs";
//======================================
export const PromptArea = ({ input, handleInputChange, handleSubmit,isLoading }: {
  input: string;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  isLoading: boolean;
}) => {
  const onKeyPress: React.KeyboardEventHandler = (e) => {
    if (e.code === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
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
              onKeyDown={isLoading ? undefined : onKeyPress}
        rightSection={
          <ActionIcon type="submit">
            <BsSendFill />
          </ActionIcon>
        }
      />
    </form>
  );
};
