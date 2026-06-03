const startBtn =
document.getElementById("startBtn");

const welcomeScreen =
document.getElementById("welcomeScreen");

const memoryRoom =
document.getElementById("memoryRoom");

const overlay =
document.getElementById("overlay");

const viewer =
document.getElementById("viewer");

const viewerImage =
document.getElementById("viewerImage");

const viewerTitle =
document.getElementById("viewerTitle");

const viewerText =
document.getElementById("viewerText");

const closeViewer =
document.getElementById("closeViewer");

startBtn.addEventListener("click",()=>{

welcomeScreen.style.transition =
"1s";

welcomeScreen.style.opacity =
"0";

setTimeout(()=>{

welcomeScreen.style.display =
"none";

memoryRoom.style.display =
"block";

memoryRoom.style.animation =
"roomFade 1s ease";

},800);

});

const memories = {

1:{
image:"1.jpg",
title:"أول ذكرى ❤️",
text:"كانت البداية... وما أجمل تلك البداية."
},

2:{
image:"2.png",
title:"أجمل هدية 🎁",
text:"بعض الهدايا لا تُلف بورق... بل تُلف بالمشاعر."
},

3:{
image:"3.jpeg",
title:"صورة لا تُنسى 📸",
text:"هناك صور لا تحفظها الكاميرا فقط... بل يحتفظ بها القلب."
},

4:{
image:"4.jpeg",
title:"أسعد لحظة ❤️",
text:"الوقت كان جميلاً... لكن الأجمل هو من شاركني إياه."
},

5:{
image:"5.jpeg",
title:"إلى الأبد ✨",
text:"هذه ليست النهاية... بل مجرد بداية لمزيد من الذكريات."
}

};

document
.querySelectorAll(".memory-item")
.forEach(item=>{

item.addEventListener("click",()=>{

const id =
item.dataset.memory;

viewerImage.src =
memories[id].image;

viewerTitle.innerText =
memories[id].title;

viewerText.innerText =
memories[id].text;

overlay.style.display =
"block";

viewer.style.display =
"block";

viewer.style.animation =
"viewerPop .5s ease";

});

});

closeViewer.addEventListener("click",()=>{

viewer.style.display =
"none";

overlay.style.display =
"none";

});

overlay.addEventListener("click",()=>{

viewer.style.display =
"none";

overlay.style.display =
"none";

});
