console.log('This is a popup!');

var crazyBtn = document.getElementById("crazysearch");

crazyBtn.onclick = function(){
    var getInputFieldVal = document.getElementById("inputarea");
    if(getInputFieldVal.value == null || getInputFieldVal.value === ''){
        console.log(getInputFieldVal.value)
        console.log("input text area is empty");
    }else{
        console.log("input text value ", getInputFieldVal.value);
        getInputFieldVal.value = ""; // clear out the field
    }
}