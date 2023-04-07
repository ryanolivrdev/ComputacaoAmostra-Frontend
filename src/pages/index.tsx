import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/sections/home/Header";
import { Hero } from "../components/sections/home/Hero";
import { Cards } from "../components/sections/home/Cards";
import { About } from "../components/sections/home/About";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Computação amostra</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Hero />
        <Cards />
        <About />
      </main>
    </>
  );
};

export default Home;
