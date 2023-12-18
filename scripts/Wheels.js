import { setWheelChoice } from "./TransientState.js";

export const WheelOptions = async () => {
  document.addEventListener("change", handleWheelOptions);

  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let html = "<h2>Wheels</h2>";

  html += '<select id="wheel">';
  html += '<option value="0">Select a wheel package</option>';

  const arrayOfOptions = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.name}</option>`;
  });
  html += arrayOfOptions.join("");
  html += "</select>";
  return html;
};

const handleWheelOptions = (event) => {
  if (event.target.id === "wheel") {
    setWheelChoice(+event.target.value);
  }
};
