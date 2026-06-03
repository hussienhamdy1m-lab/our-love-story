const openers = document.querySelectorAll(
'.envelope,.scroll,.book,.gift,.heart-box'
);

openers.forEach(item=>{

item.addEventListener('click',()=>{

const memory =
item.parentElement.querySelector(
'.memory-content'
);

item.style.display='none';

memory.style.display='block';

});

});
