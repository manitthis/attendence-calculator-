


function calculate(){
    var a=parseFloat(document.getElementById("a").value);
var b=parseFloat(document.getElementById("b").value);

 console.log("result"); 
 if (isNaN(a) || isNaN(b)) {
    document.getElementById("r").innerHTML = "Please enter valid numbers.";
 }else{
    var c = (b / a) * 100;
 document.getElementById("r").innerHTML = c.toFixed(2) + "%";
    }
}

