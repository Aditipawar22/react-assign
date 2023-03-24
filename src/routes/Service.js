import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Image13 from "../assets/1.4.jpg"

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={Image13}
        title='Service'
        // text='We providing you the Services as ....'
        // buttonText='Get in Touch'
        // url='/'
        btnClass='hide'
       />
       <Trip/>
       <Footer/>
    </>
  );
}

export default Service;
