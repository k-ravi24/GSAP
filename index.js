// gsap.from("#container", {
//   x: 1000,
//   y: 300,
//   duration: 3,
//   delay: 2,
//   rotate: 720,
//   backgroundColor: "green",
//   borderRadius: "50%",
//   yoyo: true,
//   repeat: 2,
// });

var timeline = gsap.timeline(); // timeline created

timeline.to("#container", {
  x: 1200,
  y: 230,
  color: "red",
  rotate: 231,
  delay: 2,
  duration: 3,
});
