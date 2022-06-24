// // ----------------------------set var

const myBody = document.body;
const myBtn1 = document.querySelector(".btn1");
const myBtn2 = document.querySelector(".btn2");
const colorBgc = ["#76D82C", "#eeeeee", "yellow", "#00E7EA",'#845EC2','#5EC2A8'];

// -------------------------event

let i = 0;
myBtn1.onclick = ChangFunction = function () {
  myBody.style.backgroundColor = colorBgc[i];
  i++;
  if (i == colorBgc.length) {
    return (i = 0);
  }
};
//  button reset
myBtn2.onclick = ChangFunction = function () {
  myBody.style.backgroundColor = 'black';
};
