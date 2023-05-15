import { AppShell } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Next starter</title>
        <meta name="description" content="Next starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell>
        <main className="flex min-h-screen flex-col items-center justify-center"></main>
      </AppShell>
    </>
  );
};

export default Home;

