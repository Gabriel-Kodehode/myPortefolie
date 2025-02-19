export default function Light() {
  let Theme = true;
  function ThemeChange() {
    document.getElementById("ButtonRope").classList.toggle("animate");
    document.getElementById("LightButton").classList.toggle("animateButton");

    if (Theme === true) {
      document.body.classList.add("dark-theme");
      Theme = false;
    } else if (Theme === false) {
      document.body.classList.remove("dark-theme");
      Theme = true;
    }
  }

  return (
    <>
      <div id="ButtonRope"></div>
      <button id="LightButton" onClick={ThemeChange}></button>
      <div id="LightRope"></div>
      <img src="Light.PNG" alt="lys" id="Light" />
    </>
  );
}
