import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Image13 from "../assets/1.4.jpg"

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={Image13}
        title='About'
        // text='We providing you the Services as ....'
        // buttonText='Get in Touch'
        // url='/'
        btnClass='hide'
       />
       <AboutUs/>
       <Footer/>
    </>
  );
}

export default About;
