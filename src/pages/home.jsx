import Navigation from "../components/navbar";
import Hero from "../components/hero";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = 'SMA Negeri 3 Pontianak'
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
};

export default Home;