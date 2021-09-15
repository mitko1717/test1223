import React, { useState } from "react";
// import Footer from "../../footer/Footer";
import Item from "./Item";
import "../../footer/Footer.css";

const Fruits = (vegs) => {
  const [fruitsArr, setFruitsArr] = useState(vegs.vegs);

  const decTotal = (i) => {
    const apdatedTotal = [...fruitsArr];
    if (apdatedTotal[i].total > 0) {
      apdatedTotal[i].total -= 1;
      setFruitsArr(apdatedTotal);
    }
  };
  const incTotal = (i) => {
    const apdatedTotal = [...fruitsArr];
    apdatedTotal[i].total += 1;
    setFruitsArr(apdatedTotal);
  };

  const deleteItem = (i) => {
    const apdatedTotal = [...fruitsArr];
    apdatedTotal.splice(i, 1);
    setFruitsArr(apdatedTotal);
  };
  // const deleteItem = (item) => {
  //   setFruitsArr(vegsArr.filter((el) => el.id !== item.id));
  // };

  const order = fruitsArr.map((i) => {
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

  const totalPrice = fruitsArr.reduce((s, q) => {
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
    <section className="ren">
      {fruitsArr
        .filter((e) => !e.type)
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
            decTotal={decTotal}
            incTotal={incTotal}
            deleteItem={deleteItem}
            vegsArr={fruitsArr}
            setVegsArr={setFruitsArr}
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

export default Fruits;
