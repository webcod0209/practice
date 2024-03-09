// リファクタリング前
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", async function() {
  //データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  //DOM操作
  users.forEach(function(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
  });
});

window.addEventListener("load", async function() {
  //データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  //DOM操作
  users.forEach(function(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
  });
});

// // リファクタリング後
// // DOM
// const button = document.getElementById("addBtn");
// const lists = document.getElementById("lists");

// //関数（メソッド）
// function addList(user) {
//   const list = document.createElement("li");
//   list.innerText = user.name;
//   lists.appendChild(list);
// }

// async function getUsers() {
//   //データのやり取り
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   return users;
// }

// async function listUsers() {
//   const users = await getUsers();
//   //DOM操作
//   users.forEach(addList);
// }

// //イベント
// window.addEventListener("load", listUsers);
// button.addEventListener("click", listUsers);

const menuButton = document.getElementById("menuButton");

const toggleButton = ()=> {
  menuButton.addEventListener("click", function(){
    this.classList.toggle("active");
  });
}
toggleButton();