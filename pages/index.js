import Head from "next/head";
import Slider from "../components/slider";
import ScrollUp from "../components/scrollUp";
import About from "../components/about";
import Features from "../components/features";
import Team from "../components/team";
import Committee from "../components/committee";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Events from "../components/events";
import Donation from "../components/donation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arab Physical Society</title>
        <meta name="description" content="Arab Physical Society" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Features />
      <Events />
      <About />
      <Team />
      <Committee />
      <Donation />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
}
