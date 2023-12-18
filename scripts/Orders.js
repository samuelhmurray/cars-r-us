export const Orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel"
  );
  const orders = await fetchResponse.json();
  let html = "";
  const divStringArray = orders.map((order) => {
    const orderPrice =
      order.paint.price +
      order.interior.price +
      order.technology.price +
      order.wheel.price;
    html += `<div>${order.paint.name}
            with ${order.wheel.name} wheels,
            ${order.interior.name} and the
            "${order.technology.name}" package:
            $${orderPrice}</div>`;
  });
  html += divStringArray.join("");
  return html;
};

// export const Orders = async () => {
//   const fetchResponse = await fetch(
//     "http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=wheel"
//   );
//   const orders = await fetchResponse.json();
//   let html = "";
//   const divStringArray = await Promise.all(
//     orders.map(async (order) => {
//       const technologyResponse = await fetch(
//         `http://localhost:8088/technology/${order.technologyId}`
//       );
//       const technology = await technologyResponse.json();

//       const orderPrice =
//         order.paint.price +
//         order.interior.price +
//         technology.price +
//         order.wheel.price;

//       html += `<div>${order.paint.name}
//             with ${order.wheel.name} wheels,
//             ${order.interior.name} and the
//             "${technology.name}" package:
//             $${orderPrice}</div>`;
//     })
//   );

//   html += divStringArray.join("");
//   return html;
// };
