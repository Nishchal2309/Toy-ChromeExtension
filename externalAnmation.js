function createAnimation() {
    
    const documentBody = document.body;
    var counter = 0;
    const pairList = [["top", "left"], ["top", "right"], ["bottom", "left"], ["bottom", "right"]]

    for(var x =0; x < pairList.length; x++){
        var getPair = pairList[x];
        const createStarDiv = document.createElement("div");
        createStarDiv.classList.add("star");

        createStarDiv.style[getPair[0]] = (Math.floor(Math.random() * 95) + 5)+'%';
        createStarDiv.style[getPair[1]] =  ((Math.floor(Math.random() * 95) + 5))+'%'
        counter = counter + 1;
        documentBody.appendChild(createStarDiv)
        if(x == pairList.length -1){
            x = 0;
        }
        if(counter > 15){
            break;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createAnimation();
});

