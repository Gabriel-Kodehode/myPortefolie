const Projekts = [
  {
    id: "1",
    name: "DrumSite",
    link: "https://github.com/Gabriel-Kodehode/DrumSite",
    beskrivelse: "",
    image: "DrumWebsite.PNG",
  },
  {
    id: "2",
    name: "Cookie Clicker",
    link: "https://github.com/Gabriel-Kodehode/CookieClicker",
    beskrivelse: "en kopi av Cookie clicker",
    image: "CookieClicker.PNG",
  },
  {
    id: "3",
    name: "Space",
    link: "https://github.com/Gabriel-Kodehode/Space",
    beskrivelse: "A descriptopn for four diffrent planets",
    image: "Space.PNG",
  },
  {
    id: "4",
    name: "Jule Kalender",
    link: "https://github.com/Gabriel-Kodehode/kalender",
    beskrivelse: "en kopi av Cookie clicker",
    image: "Kalender.PNG",
  },
];

export default function ProjektDisplay() {
  return (
    <div id="ProjektsBox">
      {Projekts.map((projekt, index) => (
        <div key={projekt.id} id="ProjektFile">
          <h3>{projekt.name}</h3>
          <p>{projekt.beskrivelse}</p>
          <button>
            <a href={projekt.link} target="_blank">
              Besøk prosjektet
            </a>
          </button>
          <img src={projekt.image} alt={projekt.name} />
        </div>
      ))}
    </div>
  );
}
