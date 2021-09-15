/* import React, { useState } from "react";
import "./Footer.css";

const Footer = (vegs) => {
  // eslint-disable-next-line
  const [vegsArr, setVegsArr] = useState(vegs.vegs);

  const order = vegsArr.map((item) => {
    return {
      product: item.name,
      type: item.type === false ? "фрукт" : "овощ",
      amount: item.total,
      totalPrice:
        item.total === 0
          ? item.total
          : item.total > 0 && item.total < 3
          ? item.total * item.price
          : item.total > 2 && item.total < 5
          ? item.total * item.price * 0.9
          : item.total * item.price * 0.85,
    };
  });

  const customer = { name: "UNKNOWN" };

  const totalPrice = vegsArr.reduce((sum, quantity) => {
    if (quantity.total >= 3 && quantity.total < 5) {
      return sum + quantity.total * quantity.price * 0.9;
    } else if (quantity.total >= 5)
      return sum + quantity.total * quantity.price * 0.85;
    else {
      return sum + quantity.total * quantity.price;
    }
  }, 0);

  const sendOrderHandler = () => {
    console.log("ПОКУПАТЕЛЬ", customer.name);
    console.log("ЗАКАЗ:", JSON.stringify(order));
    console.log("СУММА ЗАКАЗА:", totalPrice);
  };

  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-text">
          <div className="sum">
            <strong>ОБЩАЯ СУММА:</strong> {totalPrice} {} ₴
          </div>
        </div>
        <button onClick={sendOrderHandler} className="footer-btn">
          ОФОРМИТЬ
        </button>
      </div>
    </footer>
  );
};

export default Footer;
 */
