import { React } from "react";

const Item = ({
  name,
  total,
  price,
  src,
  decTotal,
  incTotal,
  deleteItem,
  i,
}) => {
  const incTotalHandler = () => {
    incTotal(i);
  };

  const decTotalHandler = () => {
    decTotal(i);
  };

  // const deleteHandler = () => {
  //   setVegsArr(vegsArr.filter((el) => el.id !== item.id));
  // };

  const deleteHandler = () => {
    deleteItem(i);
  };

  return (
    <div className="item">
      <div className="item-img">
        <img src={src} alt={src.name} />
      </div>
      <h1>{name}</h1>

      <div className="amount">
        <p>КОЛ-ВО</p>

        <div className="minus-plus">
          <button onClick={decTotalHandler} className="minus">
            –
          </button>
          <h2>{total}</h2>
          <button onClick={incTotalHandler} className="plus">
            +
          </button>
        </div>
      </div>
      <div className="price">
        {total === 0
          ? total
          : total > 0 && total <= 2
          ? total * price
          : total >= 3 && total < 5
          ? total * price * 0.9
          : total * price * 0.85}
        {} ₴
      </div>

      <button onClick={deleteHandler} className="delete">
        &#9003;
      </button>
    </div>
  );
};

export default Item;
