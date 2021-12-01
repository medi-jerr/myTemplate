import Head from "next/head";
import Slider from "../components/slider";
import ScrollUp from "../components/scrollUp";
import About from "../components/about";
import Features from "../components/features";
import Team from "../components/team";
import Committee from "../components/committee";

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
      <Team />
      <Committee />
      <ScrollUp />
    </div>
  );
}
