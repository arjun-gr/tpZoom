let box = document.getElementById("box");
let offsetX, offsetY;
// box.addEventListener("mousedown", (e) => {
//   e.preventDefault();
//   offsetX = e.clientX - box.getBoundingClientRect().left;
//   offsetY = e.clientY - box.getBoundingClientRect().top;

//   box.addEventListener("mousemove", drag);
//   box.addEventListener("mouseup", removeListener);

//   function removeListener(e) {
//     box.removeEventListener("mousemove", drag);
//     box.removeEventListener("mouseup", removeListener);
//   }
//   function drag(e) {
//     box.style.left = `${e.clientX - offsetX}px`;
//     box.style.top = `${e.clientY - offsetY}px`;
//   }
// });

box.addEventListener("mousedown", (e) => {
  e.preventDefault();
  console.log(e.clientX);
  console.log(box.getBoundingClientRect());
  let initialWidth = box.getBoundingClientRect().width;
  let initial = e.clientX;
  box.addEventListener("mousemove", resizeR);

  function resizeR(e) {
    console.log(initial, e.clientX);
    let diff = e.clientX - initial;
    console.log(e.clientX);
    if (e.clientX > 90) {
      box.style.width = `${initialWidth + diff}px`;
    }
  }

  box.removeEventListener("mouseup", (e) => {
    box.removeEventListener("mousemove", resizeR);
  });
});
