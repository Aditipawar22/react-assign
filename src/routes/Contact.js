import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Image13 from "../assets/1.4.jpg"

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={Image13}
        title='Contact'
        // text='We providing you the Services as ....'
        // buttonText='Get in Touch'
        // url='/'
        btnClass='hide'
       />
       <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
