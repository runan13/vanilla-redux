import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countReducer = (count = 0) => {
  return count;
};

const countStore = createStore(countReducer);

// ✅ Store는 data를 저장하는 곳
// ✅ CreateStore는 reducer를 요구함.
// ✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.

// let counter = 0;

// number.innerText = counter;

// const updateText = () => {
//   number.innerText = counter;
// };

// const handleAdd = () => {
//   counter++;
//   updateText();
// };

// const handleMinus = () => {
//   counter--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
