const triggers =
document.querySelectorAll(
'.memory-trigger'
);

triggers.forEach(trigger=>{

trigger.addEventListener(

'click',

()=>{

const content =
trigger.parentElement
.querySelector(
'.memory-content'
);

trigger.style.display='none';

content.style.display='block';

}

);

});
