import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Banner } from "../components/Banner";
import TapeText from "../components/TapeText";
import Cards2 from "../components/Cards2";

import { Zar } from "../utils/zar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SEEKER.mn - Үндэсний зарын портал</title>
      </Head>
      <Banner />

     

      <div className="bg-awwards-gray">
        <div className=" container mx-auto px-20 py-10">
          <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
            {Zar.map((item) => (
              <Cards2
                path={item.path}
                pic={item.pic}
                title={item.title}
                desc={item.desc}
                date={item.date}
                icon={item.icon}
                author={item.author}
                tooltip={item.tooltip}
              />
            ))}
          </div>
        </div>
      </div>

      <TapeText />
    </div>
  );
};

export default Home;
