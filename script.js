const triggers =
document.querySelectorAll(
'.memory-trigger'
);

triggers.forEach(trigger=>{

trigger.addEventListener(

'click',

()=>{

const content =
trigger.parentElement.querySelector(
'.memory-content'
);

if(
content.style.display === 'block'
){

content.style.display = 'none';

trigger.style.opacity = '1';

return;

}

content.style.display = 'block';

trigger.style.opacity = '.4';

}

);

});

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
