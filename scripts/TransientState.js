const transientState = {
  interiorId: 0,
  paintId: 0,
  technologyId: 0,
  wheelId: 0,
};

export const setInteriorChoice = (chossenInterior) => {
  transientState.interiorId = chossenInterior;
  console.log(transientState);
};
export const setPaintChoice = (chossenPaint) => {
  transientState.paintId = chossenPaint;
  console.log(transientState);
};
export const setTechChoice = (chossenTech) => {
  transientState.technologyId = chossenTech;
  console.log(transientState);
};
export const setWheelChoice = (chossenWheel) => {
  transientState.wheelId = chossenWheel;
  console.log(transientState);
};

export const placeOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  const response = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("newOrderCreated");
  document.dispatchEvent(customEvent);
};
