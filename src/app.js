/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let txt = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function excuse() {
    let a, b, c, d;

    a = Math.floor(Math.random() * who.length);
    b = Math.floor(Math.random() * action.length);
    c = Math.floor(Math.random() * what.length);
    d = Math.floor(Math.random() * when.length);

    txt.innerHTML = who[a] + " " + action[b] + " " + what[c] + " " + when[d];

    // let arr = [who, action, what, when];
    // let pos = [];

    // for (let i = 0; i < arr.length; i++) {
    //   pos.push(Math.floor(Math.random() * arr[i].length));
    // }
    // document.write(
    //   `${who[pos[0]]} ${action[pos[1]]} ${what[pos[2]]} ${when[pos[3]]}.`
    // );
  }
  excuse();
};
