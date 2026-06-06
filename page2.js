const leaves = document.querySelectorAll('.leaf');
let currentLeaf = 0;

function initBook() {
    for (let i = 0; i < leaves.length; i++) {
        leaves[i].style.zIndex = leaves.length - i;
    }
}
initBook();

function flipNext(page) {
    if (currentLeaf < leaves.length) {
        let leafToFlip = leaves[currentLeaf];
        leafToFlip.classList.add('flipped');
        leafToFlip.style.zIndex = currentLeaf + 1; 
        currentLeaf++;
    }
}

function flipPrev(page) {
    if (currentLeaf > 0) {
        currentLeaf--;
        let leafToFlip = leaves[currentLeaf];
        leafToFlip.classList.remove('flipped');
        leafToFlip.style.zIndex = leaves.length - currentLeaf;
    }
}
