import { setTechChoice } from "./TransientState.js";

export const TechnologyOptions = async () => {
  document.addEventListener("change", handleTechChoice);
  const response = await fetch("http://localhost:8088/technologies");
  const technologies = await response.json();

  let html = "<h2>Technologies</h2>";

  html += '<select id="technology">';
  html += '<option value="0">Select a technology package</option>';

  const arrayOfOptions = technologies.map((technology) => {
    return `<option value="${technology.id}">${technology.name}</option>`;
  });
  html += arrayOfOptions.join("");
  html += "</select>";
  return html;
};

const handleTechChoice = (event) => {
  if (event.target.id === "technology") {
    setTechChoice(+event.target.value);
  }
};
