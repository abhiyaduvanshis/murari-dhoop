import Image from "next/image";
import Nav from "./_components/Nav";
import Homebanner from "./_components/Homebanner";
import Homeabout from "./_components/Homeabout";
import Homewhychooseus from "./_components/Homewhychooseus";
import Contactus from "./_components/Contactus";
import Footer from "./_components/Footer";


export default function Home() {
  return (
    <>
      <Nav/>
      <Homebanner/>
      <Homeabout/>
      <Homewhychooseus/>
      <Contactus/>
      <Footer/>
    </>
  );
}
