const Projekts = [
  {
    name: "DrumSite",
    link: "https://github.com/Gabriel-Kodehode/DrumSite",
    beskrivelse: "",
    image: "./src/Images/DrumWebsite.png",
  },
  {
    name: "Cookie Clicker",
    link: "https://github.com/Gabriel-Kodehode/CookieClicker",
    beskrivelse: "en kopi av Cookie clicker",
    image: "./src/Images/CookieClicker.png",
  },
  {
    name: "Space",
    link: "https://github.com/Gabriel-Kodehode/Space",
    beskrivelse: "A descriptopn for four diffrent planets",
    image: "./src/Images/Space.png",
  },
  {
    name: "Jule Kalender",
    link: "https://github.com/Gabriel-Kodehode/kalender",
    beskrivelse: "en kopi av Cookie clicker",
    image: "./src/Images/Kalender.png",
  },
];

export default function ProjektDisplay() {
  return (
    <div id="ProjektsBox">
      {Projekts.map((projekt, index) => (
        <div id="ProjektFile">
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
