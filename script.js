const revealBtn =
document.getElementById(
'revealBtn'
);

const memoryView =
document.getElementById(
'memoryView'
);

revealBtn.addEventListener(

'click',

()=>{

memoryView.style.display =
'block';

setTimeout(()=>{

memoryView.classList.add(
'show'
);

},100);

revealBtn.style.display =
'none';

}

);

window.addEventListener(

'scroll',

()=>{

const scrollTop =
window.scrollY;

const docHeight =
document.body.scrollHeight
--------------------------

window.innerHeight;

const percent =
(scrollTop/docHeight)*100;

document.querySelector(
'.progress-bar'
).style.width =
percent + '%';

}

);
