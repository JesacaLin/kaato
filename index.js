const appSettings = {
  databaseURL: "https://kaato-c9ad1-default-rtdb.firebaseio.com/",
};

const addButtonEl = document.querySelector("#add-button");
const inputFieldEl = document.querySelector("#input-field");

addButtonEl.addEventListener("click", () => {
  let inputValue = inputFieldEl.value;
  console.log(inputValue);
});
