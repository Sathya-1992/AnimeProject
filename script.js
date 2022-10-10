// const anime = require("animejs")
/**
 * Timeline
 */
function activateAnime(){
  var element = document.querySelectorAll(".container div")

  var tl = anime.timeline({
    targets : element,
    easing: 'easeOutExpo',
    duration: 750,
    loop:true,
    direction : 'alternate'
  });
 tl.add({
  translateX : 300
 })
 .add({
  translateY : 200
 })
 .add({
  targets: ".test",
  rotate : [-360,360]
 })
 .add({
  targets : ".container div:nth-child(3)",
  scale : 2,
  opacity : 0.5
 })
}