import { Chats, PromptArea } from "@/components";
import { AppShell, Button } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";
import { useChat } from "ai/react";

const Home: NextPage = () => {
  const {
    messages,
    handleSubmit,
    input,
    handleInputChange,
    isLoading,
    stop,
    reload,
  } = useChat({
    api: "api/openai",
    initialMessages: [
    ],
  });
  return (
    <>
      <Head>
        <title>Chatbot starter</title>
        <meta name="description" content="Chatbot starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell padding={0}>
        <main className="flex h-full flex-col items-center justify-end py-4">
          <div className="h-full w-full flex-col-center">
            {messages.length === 0 ? (
              <div className="mx-auto pt-10 ">Waiting for your message...</div>
            ) : (
              <Chats messages={messages} />
            )}
            <div className="pb-2">
              <Button
                hidden={!isLoading}
                loading={isLoading}
                onClick={() => stop()}
              >
                Stop
              </Button>

              <Button
                hidden={isLoading || messages.length === 0}
                onClick={() => reload()}
              >
                Regenerate
              </Button>
            </div>
            <PromptArea
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </main>
      </AppShell>
    </>
  );
};

export default Home;
