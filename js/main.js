import {createObject} from './c-parallax.js';
let obj = [
  {
    elClass: "sec1",
    w: 50,
    h: 50,
    posTop: 50,
    posLeft: 50,
    zIndex: 0,
    posBottom: "unset",
    posRight: "unset",
    imgWrapperId: "circleWrapper",
    imageUrl: "/images/circle.png",
    dataDepth: 8,
  },
  {
    elClass: "sec2",
    w: 50,
    h: 50,
    posTop: 50,
    posLeft: 50,
    zIndex: 0,
    posBottom: "unset",
    posRight: "unset",
    imgWrapperId: "manWrapper",
    imageUrl: "/images/man.png",
    dataDepth: 2,
  },
  {
    elClass: "div1",
    w: 50,
    h: 50,
    posTop: 150,
    posLeft: 350,
    zIndex: 0,
    posBottom: "unset",
    posRight: "unset",
    imgWrapperId: "triangleWrapper",
    imageUrl: "/images/triangle.png",
    dataDepth: 10,
  },
];


document.addEventListener("DOMContentLoaded", function () {
createObject(obj)
});
