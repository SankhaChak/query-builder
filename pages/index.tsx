import QueryBuilderModal from "@/components/QueryBuilderModal";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dynamic Query Builder</title>
        <meta name="description" content="Dynamic query builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen items-center justify-center">
        <QueryBuilderModal />
      </div>
    </>
  );
}
