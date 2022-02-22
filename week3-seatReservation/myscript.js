(function() {
  'use strict';

  const left = document.querySelector("#left");
  const middle = document.querySelector("#middle");
  const right = document.querySelector("#right");

  for (let abc = 97; abc <= 116; abc++) {
    const row = String.fromCharCode(abc);

    const leftLabel = document.createElement('div');
    leftLabel.className = "label";
    leftLabel.innerText = row.toUpperCase();
    left.appendChild(leftLabel);

    for (let num = 1; num <= 15; num++) {
      // createElement(div) // id and content are abc + num
      const seat = document.createElement("div");
      seat.setAttribute("id", row+num);
      seat.innerText = num;

      if (num <= 3 ){
        left.appendChild(seat);
      } else if (num <= 12) {
        middle.appendChild(seat);
      } else {
        right.appendChild(seat);
      }
      // if or switch: append to corresponding section
    }
    // another div.label with abc added to end
    const rightLabel = document.createElement("div");
    rightLabel.className = "label";
    rightLabel.innerText = row.toUpperCase();
    right.appendChild(rightLabel);

  }



}());
