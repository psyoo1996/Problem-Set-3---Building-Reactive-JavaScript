/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    // console.log(colorblock.style.backgroundColor)
    //Write a condition determine what color it should be changed to
    if(colorblock.style.backgroundColor == 'rgb(240, 128, 128)'){
        // console.log('changeColor')
        //change the background color using JS
        //Change the text of the color using the span id color-name
        colorblock.style.backgroundColor = '#0000FF'
        colorname.innerText = '#0000FF'
    }
    else{
        //change the background color using JS
        //Change the text of the color using the span id color-name
        colorblock.style.backgroundColor = '#F08080'
        colorname.innerText = '#F08080'

    }
}
var colorblock = document.getElementById('color-block')
colorblock.addEventListener('click', function(){
    changeColor()
})
var colorname = document.getElementById('color-name')


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    //Send the calculated temperature to HTML
    console.log('convertTemp')
    var f = document.getElementById('f-input').value;
    var c = (f - 32) * 5/9;
    return(c);
}

var convertbutton = document.getElementById('convertbtn')
convertbutton.addEventListener('click', function(){
    var convertresult = convertTemp()
    var coutput = document.getElementById('c-output')
    coutput.innerText = convertresult
})

