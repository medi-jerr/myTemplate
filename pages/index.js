import Head from "next/head";
import Image from "next/image";
import Slider from "../components/slider";
import ScrollUp from "../components/scrollUp";
import About from "../components/about";
import Features from "../components/features";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arab Physical Society</title>
        <meta name="description" content="Arab Physical Society" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Features />
      <About />
      <ScrollUp />
    </div>
  );
}
