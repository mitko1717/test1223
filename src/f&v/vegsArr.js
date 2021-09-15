import pickle from "../img/pickle.svg";
import tomatos from "../img/tomato.svg";
import carrot from "../img/carrot.svg";

import orange from "../img/lemon.svg";
import cherry from "../img/cherry.svg";
import apple from "../img/apple.svg";

let vegs = [
  {
    name: "ОГУРЕЦ",
    src: pickle,
    price: 220,
    total: 2,
    id: Math.trunc(Math.random() * 10000000),
    type: true,
    totalPrice: "",
    // totalPrice:
    //   this.item.total === 0
    //     ? this.item.total
    //     : this.item.total > 0 && this.item.total < 3
    //     ? this.item.total * this.item.price
    //     : this.item.total > 2 && this.item.total < 5
    //     ? this.item.total * this.item.price * 0.9
    //     : this.item.total * this.item.price * 0.85,
  },
  {
    name: "ПОМИДОР",
    src: tomatos,
    price: 330,
    total: 5,
    id: Math.trunc(Math.random() * 10000000),
    type: true,
    totalPrice: "",
  },
  {
    name: "МОРКОВЬ",
    src: carrot,
    price: 110,
    total: 2,
    id: Math.trunc(Math.random() * 10000000),
    type: true,
    totalPrice: "",
  },
  {
    name: "АПЕЛЬСИН",
    src: orange,
    price: 400,
    total: 1,
    id: Math.trunc(Math.random() * 10000000),
    type: false,
    totalPrice: "",
  },
  {
    name: "ВИШНЯ",
    src: cherry,
    price: 300,
    total: 4,
    id: Math.trunc(Math.random() * 10000000),
    type: false,
    totalPrice: "",
  },
  {
    name: "ЯБЛОКО",
    src: apple,
    price: 200,
    total: 2,
    id: Math.trunc(Math.random() * 10000000),
    type: false,
    totalPrice: "",
  },
];

export default vegs;
