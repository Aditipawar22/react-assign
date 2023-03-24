import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Image13 from "../assets/1.4.jpg"


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero'
        heroImg={Image13}
        title='Welcome to India Tour'
        text='We providing you the Services as ....'
        buttonText='Explore to India'
        url="https://youtu.be/IgAnj6r1O48"
        btnClass='show'
       />
       <Destination/>

       <Footer/>
      </>
  );
}

export default Home;
