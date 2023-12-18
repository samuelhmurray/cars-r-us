import { setPaintChoice } from "./TransientState.js";

export const PaintOptions = async () => {
  document.addEventListener("change", handlePaintChoice);
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  let html = "<h2>Paints</h2>";

  html += '<select id="paint">';
  html += '<option value="0">Select a paint package</option>';

  const arrayOfOptions = paints.map((paint) => {
    return `<div> 
                    <option
                    value="${paint.id}">
                    ${paint.name}
                    </option>
            </div>`;
  });
  html += arrayOfOptions.join("");
  html += "</select>";
  return html;
};

const handlePaintChoice = (event) => {
  if (event.target.id === "paint") {
    setPaintChoice(+event.target.value);
  }
};
