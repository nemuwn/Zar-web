import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AppMain, MenuSlider } from "../components/Drawer";
function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MenuSlider menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppMain menuOpen={menuOpen}>
        <Header setMenuOpen={setMenuOpen} />
        <Component {...pageProps} />
      </AppMain>
    </>
  );
}

export default MyApp;
