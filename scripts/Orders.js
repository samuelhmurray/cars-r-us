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
    const formattedPrice = orderPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    html += `<div>${order.paint.name}
            with ${order.wheel.name} wheels,
            ${order.interior.name}, and the
            ${order.technology.name} package:
            ${formattedPrice}</div>`;
  });
  html += divStringArray.join("");
  return html;
};
