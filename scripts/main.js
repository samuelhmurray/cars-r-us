import { InteriorOptions } from "./Interiors.js";
import { Orders } from "./Orders.js";
import { PaintOptions } from "./Paints.js";
import { SaveSubmission } from "./SaveSubmission.js";
import { TechnologyOptions } from "./Technologies.js";
import { WheelOptions } from "./Wheels.js";

const container = document.querySelector("#container");

const render = async () => {
  const paintOptionsHTML = await PaintOptions();
  const interiorOptionsHTML = await InteriorOptions();
  const wheelOptionsHTML = await WheelOptions();
  const technologyOptionsHTML = await TechnologyOptions();
  const saveSubmissionHTML = SaveSubmission();
  const orderHTML = await Orders();

  const allHTML = `
    <h1>Cars 'R Us: Personal Car Builder</h1>

     <article class="choices">
        <section class="choices__paint options">
        ${paintOptionsHTML}

        </section>
        <section class="choices__interior options">
        ${interiorOptionsHTML}
        </section>
    
    
        <section class="choices__wheel options">
        ${wheelOptionsHTML}
        </section>
        
        <section class="choices__technology options">
        ${technologyOptionsHTML}
        </section>
    </article>
    
    <article class="order">
    ${saveSubmissionHTML}
    </article>
    
    <article class="customOrders">
    ${orderHTML}
    </article>
  `;
  container.innerHTML = allHTML;
};

render();
