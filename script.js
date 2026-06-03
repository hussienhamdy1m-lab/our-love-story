const startBtn =
document.getElementById("startBtn");

const welcomeScreen =
document.getElementById("welcomeScreen");

const memoryRoom =
document.getElementById("memoryRoom");

const viewer =
document.getElementById("viewer");

const viewerImage =
document.getElementById("viewerImage");

const viewerTitle =
document.getElementById("viewerTitle");

const viewerText =
document.getElementById("viewerText");

startBtn.addEventListener("click",()=>{

welcomeScreen.style.opacity="0";

setTimeout(()=>{

welcomeScreen.style.display="none";

memoryRoom.style.display="block";

memoryRoom.style.animation=
"fadeIn 1s ease";

},500);

});

const memories={

1:{
image:"1.jpg",
title:"أول ذكرى ❤️",
text:"بداية أجمل قصة عرفها قلبي."
},

2:{
image:"2.png",
title:"أجمل هدية 🎁",
text:"كل لحظة معك كانت هدية لا تقدر بثمن."
},

3:{
image:"3.jpeg",
title:"لحظة لا تنسى 🖼",
text:"هناك صور لا تحفظها الكاميرا فقط بل يحفظها القلب."
},

4:{
image:"4.jpeg",
title:"سعادة حقيقية ❤️",
text:"وجودك وحده كان كافياً ليجعل اليوم أجمل."
},

5:{
image:"5.jpeg",
title:"إلى الأبد 📖",
text:"وما زالت أجمل الذكريات قادمة."
}

};

document
.querySelectorAll(".memory-item")
.forEach(item=>{

item.addEventListener("click",()=>{

const id=
item.dataset.memory;

viewer.style.display=
"block";

viewerImage.src=
memories[id].image;

viewerTitle.innerText=
memories[id].title;

viewerText.innerText=
memories[id].text;

viewer.scrollIntoView({

behavior:"smooth"

});

});

});
