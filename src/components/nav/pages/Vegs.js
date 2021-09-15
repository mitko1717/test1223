import React, { useState } from "react";
// import Footer from "../../footer/Footer";
import Item from "./Item";
import "../../footer/Footer.css";

const Vegs = (vegs) => {
  const [vegsArr, setVegsArr] = useState(vegs.vegs);

  const decTotal = (i) => {
    const apdatedTotal = [...vegsArr];
    if (apdatedTotal[i].total > 0) {
      apdatedTotal[i].total -= 1;
      setVegsArr(apdatedTotal);
    }
  };
  const incTotal = (i) => {
    const apdatedTotal = [...vegsArr];
    apdatedTotal[i].total += 1;
    setVegsArr(apdatedTotal);

    console.log(vegsArr);
  };

  const deleteItem = (i) => {
    const apdatedTotal = [...vegsArr];
    apdatedTotal.splice(i, 1);
    setVegsArr(apdatedTotal);
  };

  //

  const order = vegsArr.map((i) => {
    return {
      product: i.name,
      type: i.type === false ? "фрукт" : "овощ",
      amount: i.total,
      totalPrice:
        i.total === 0
          ? i.total
          : i.total > 0 && i.total < 3
          ? i.total * i.price
          : i.total > 2 && i.total < 5
          ? i.total * i.price * 0.9
          : i.total * i.price * 0.85,
    };
  });

  const totalPrice = vegsArr.reduce((s, q) => {
    if (q.total >= 3 && q.total < 5) {
      return s + q.total * q.price * 0.9;
    } else if (q.total >= 5) return s + q.total * q.price * 0.85;
    else {
      return s + q.total * q.price;
    }
  }, 0);

  const sendOrderHandler = () => {
    console.group();
    console.log("ЗАКАЗ:", JSON.stringify(order, null, 5));
    console.log("СУММА ЗАКАЗА:", totalPrice, "₴");
    console.groupEnd();
  };

  return (
    <section className="vegs ren">
      {vegsArr
        .filter((e) => e.type)
        .map((item, i) => (
          <Item
            key={item.id}
            name={item.name}
            id={item.id}
            total={item.total}
            price={item.price}
            src={item.src}
            type={item.type}
            i={i}
            item={item}
            totalPrice={item.totalPrice}
            decTotal={decTotal}
            incTotal={incTotal}
            deleteItem={deleteItem}
            vegsArr={vegsArr}
            setVegsArr={setVegsArr}
          />
        ))}

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
    </section>
  );
};

export default Vegs;
