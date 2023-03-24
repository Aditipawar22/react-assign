import Mountain1 from "../assets/1.3.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/1.2.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import VideoData from "./VideoData";
import Video from "./video";
import "./video.css";

const Destination = () => {
  return (
    <>
      <div className="InfoData">
        <h1>India The World of Tours</h1>

        <VideoData
          className="first-des-reverse"
          heading="First Service"
          text='India is part of the continent of Asia. Most of India forms a peninsula, which means it is surrounded by water on three sides. The worlds highest mountain range, the Himalaya, rises in the north. The southeast is bordered by the Bay of Bengal, and the southwest is bordered by the Arabian Sea.
           Lose yourself among colourful textiles, spices and handicrafts in bustling market bazaars; savour the heady flavours of one of the world s great cuisines and explore Indias incredible architecture ancient citadels temples and palaces in rich earthy tones and gaudy candy the faithful pray on the banks of the sacred Ganges in Varanasi explore the flamboyant architecture of the coloured cities of Rajasthan or take a houseboat trip down the beautiful palm-fringed backwaters of Kerala.'

        
      />
      </div>

      <div className="destination">
        <h1>Popullar Destinations</h1>
        <p>Below are some popullar destinations in india.</p>

        <DestinationData
          className="first-des"
          heading="Kanchenjunga"
          text="Kanchenjunga dominating peak is so high that a trek to its base camp is itself a big-time adventure that keeps kicking the adrenaline rush. Trekking trail to Kanchenjunga Base Camp is quite different when we compare it with the other treks in the Indian Himalayan belt. Kanchenjunga massifs contour a big cross that spans the boundaries of three major countries- Nepal, Tibet and India (Sikkim). Till 1849, before the discovery of Everest and K2, Kangchenjunga was deemed as the highest mountain in India."
          img1={Mountain1}
          img2={Mountain2}
        />
        <DestinationData
          className="first-des-reverse"
          heading="Havelock islands, Andaman & Nicobar"
          
          text=" 
          Andaman and Nicobar Islands featuring palm-fringed beaches with spotless stretches of white sands, an uninterrupted presence of peace, and crystal clear turquoise waters all around - Andaman is a true example of what you call 'Tropical Paradise'.

Andaman and Nicobar is an Indian archipelago located in the Bay of Bengal, claiming a large group of nearly 300 islands. While some of these islands have been commercialized and developed as tourism hubs, the rest are uninhabited, away from human interference and exemplify virgin nature.

Thus, from lively beaches bustling with fun-loving people to beaches teeming with the tranquillity of nature, Andaman and Nicobar has a variety which makes it an ideal destination for all. From kids to adults, from vacationers to explorers - they all return from Andaman elated and rejuvenated. In nutshell, Andaman is a treasure trove of experiences and delights in the form of varied activities, breathtaking sceneries, and of course, delectable seafood."
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
};

export default Destination;
