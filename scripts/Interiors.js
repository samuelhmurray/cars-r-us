import { setInteriorChoice } from "./TransientState.js";

export const InteriorOptions = async () => {
  document.addEventListener("change", handleInteriorOptions);

  const response = await fetch("http://localhost:8088/interiors");
  const interiors = await response.json();

  let html = "<h2>Interior</h2>";

  html += '<select id="interior">';
  html += '<option value="0">Select a interior package</option>';

  const arrayOfOptions = interiors.map((interior) => {
    return `<option value="${interior.id}">${interior.name}</option>`;
  });
  html += arrayOfOptions.join("");
  html += "</select>";
  return html;
};

const handleInteriorOptions = (event) => {
  if (event.target.id === "interior") {
    setInteriorChoice(+event.target.value);
  }
};
