const introScreen =
document.getElementById("introScreen");

const movieScreen =
document.getElementById("movieScreen");

const playBtn =
document.getElementById("playBtn");

const movieImage =
document.getElementById("movieImage");

const sceneTitle =
document.getElementById("sceneTitle");

const sceneText =
document.getElementById("sceneText");

const nextScene =
document.getElementById("nextScene");

const scenes = [

{
image:"1.jpg",
title:"البداية ❤️",
text:"كل شيء بدأ من هنا"
},

{
image:"2.png",
title:"الفصل الثاني ❤️",
text:"ومن هنا بدأت الحكاية تكبر"
},

{
image:"3.jpeg",
title:"ذكرى لا تنسى ❤️",
text:"لحظات لا يستطيع الوقت محوها"
},

{
image:"4.jpeg",
title:"أجمل الأيام ❤️",
text:"أجمل اللحظات كانت أبسطها"
},

{
image:"5.jpeg",
title:"إلى الأبد ❤️",
text:"وما زالت أجمل الفصول لم تبدأ بعد"
}

];

let currentScene = 0;

playBtn.addEventListener("click",()=>{

introScreen.style.display="none";

movieScreen.style.display="block";

});

nextScene.addEventListener("click",()=>{

currentScene++;

if(currentScene >= scenes.length){

currentScene = 0;

}

movieImage.src =
scenes[currentScene].image;

sceneTitle.innerText =
scenes[currentScene].title;

sceneText.innerText =
scenes[currentScene].text;

});
