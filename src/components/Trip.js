import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/1.6.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/1.5.webp";

function Trip() {
  return (
    <div className="trip">
      <h1>More About Our Services</h1>
      <p>We provide services, you like!!!</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Wild Life "
        text="India wildlife tourism is a story to show the world about man and animal’s strong friendship and their persistence to live in love and harmony.

Tourists from all over the world come to India to witness its wildlife treasure. Wildlife tourism in India gives the tourist a scope of plenty of self- introspection, useful insight on the biodiversity and cultural aspect, as local people and community are involved deeply in the preservation of Wildlife.

If you are travelling to explore India."
        />
        <TripData
        image={Trip2}
        heading="Beach Tourism"
        text="Indian Beaches offer a breathtaking reprieve from the high-octane city life. They offer an ideal concoction of the enchanting and the tranquil which captivates your being while letting you enjoy to the utmost. India offers some of the most spectacular beaches in the world scattered over its considerable coastline of more than 7,500Â km.

Starting from the north-west coast, there are magnificent beaches in Gujarat, Daman and Diu and Maharashtra."
        />
        <TripData
        image={Trip3}
        heading="Culture and Heritage"
        text="These destinations stand as testimonies to the royal reign they once witnessed which contributes to their larger-than-life existence. The monuments and buildings built by the royal clans several centuries ago lend a wonderful old-world appeal to these three cities. That’s precisely the reason they are often termed as the golden tour circuit because of the opulent history they bring forth. "
        />
      </div>
    </div>
  );
}

export default Trip;
