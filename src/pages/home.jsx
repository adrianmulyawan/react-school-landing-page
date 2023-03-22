import Navigation from "../components/navbar";
import Hero from "../components/hero";
import CardJurusan from "../components/card-jurusan";
import CardKegiatan from "../components/card-kegiatan";
import Footer from "../components/footer";
import { useEffect } from "react";

import ipa from '../assets/ipa_image.webp';
import belanegara from '../assets/bela_negara.jpeg';

const Home = () => {
  useEffect(() => {
    document.title = 'SMA Negeri 3 Pontianak';
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navigation />
      {/* Jumbotron */}
      <Hero />
      {/* Container Jurusan */}
      <div className="container">
        {/* Row Teks Jurusan */}
        <div className="row">
          {/* Text Jurusan */}
          <div className="col-12 text-center my-4">
            <h1>Jurusan Sekolah</h1>
          </div>
        </div>
        {/* Row Card Jurusan */}
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <CardJurusan image={ ipa } title='IPA' subtitle='lorem ipsum dolor sit amet.' />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <CardJurusan image={ ipa } title='IPS' subtitle='lorem ipsum dolor sit amet.' />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <CardJurusan image={ ipa } title='Bahasa' subtitle='lorem ipsum dolor sit amet.' />
          </div>
        </div>
      </div>
      {/* Container Kegiatan */}
      <div className="container">
        {/* Text Kegiatan  */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center my-4">
            <h1>Kegiatan</h1>
          </div>
        </div>
        {/* Card Kegiatan */}
        <div className="row">
          <div className="col-12 my-3">
            <CardKegiatan image={ belanegara } text='Bela Negara' />
          </div>
          <div className="col-12 my-3">
            <CardKegiatan image={ belanegara } text='Latihan Dasar Kepemimpinan' />
          </div>
          <div className="col-12 my-3">
            <CardKegiatan image={ belanegara } text='Malam Keakraban' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;