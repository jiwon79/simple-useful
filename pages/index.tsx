import Card from "../component/main/Card/Card";
import Head from "next/head";
import MainLayout from "../layout/MainLayout/MainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Useful</title>
      </Head>
      <MainLayout>
        <Card />
      </MainLayout>
    </>
  )
}
