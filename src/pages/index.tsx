import { Chats, PromptArea } from "@/components";
import { AppShell } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chatbot starter</title>
        <meta name="description" content="Chatbot starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell padding={0}>
        <main className="flex h-full flex-col items-center justify-end ">
          <div className="h-full w-full flex-col-center">
            <Chats />
            <PromptArea />
          </div>
        </main>
      </AppShell>
    </>
  );
};

export default Home;
