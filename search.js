console.log('This is a popup!');

var crazyBtn = document.getElementById("crazysearch");
const websiteList = ["https://medium.com/search?q=", "https://stackoverflow.com/search?q="]
 // https://medium.com/search?q=JavaScript
        //https://www.google.com/search?q=null+pointer+exception+site:stackoverflow.com
crazyBtn.onclick = async function(){ // purpose of this button is to open multiple tabs with realted search
    var getInputFieldVal = document.getElementById("inputarea");
    if(getInputFieldVal.value == null || getInputFieldVal.value === ''){
        console.log(getInputFieldVal.value)
        console.log("input text area is empty");
    }else{
        console.log("input text value ", getInputFieldVal.value);
        var query = getInputFieldVal.value;
        var validUrls = [];
        for(var website = 0; website < websiteList.length; website++){
            var createTab = websiteList[website] + query;
            console.log(createTab);
            validUrls.push(await checkValid(createTab)); // add the valid urls in valid urls list
        }
        validUrls.map(url => (window.open(url)));
        getInputFieldVal.value = ""; // clear out the field

    }
}

async function checkValid(createTab) {
    try{
        const resp = await fetch(createTab);
        if(resp.ok){
            console.log('resp oka', createTab)
            return createTab;
        }
    }catch (err){
        console.log('not okay')
        console.log(err)
    }
}