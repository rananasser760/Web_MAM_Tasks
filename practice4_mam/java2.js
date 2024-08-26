
function firstStyle(element)
{
    element.style.cssText=" background-color:yellow; font-size:30px;";
}

function secondStyle(element)
{
    element.style.cssText=" background-color:red; font-size:30px; color:white";
}

let arr=[];
function addDiv()
{
    let element = document.createElement("div");
    let text  = document.createTextNode("Div");
    document.body.appendChild(element);
    element.appendChild(text);
    firstStyle(element);
    arr.push(element);
}
function changeStyle()
{
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        secondStyle(element);
    }
}