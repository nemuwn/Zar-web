import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Banner } from "../components/Banner";
import TapeText from "../components/TapeText";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SEEKER.mn - Үндэсний зарын портал</title>
      </Head>
      <Banner />
      <TapeText />
    </div>
  );
};

export default Home;
