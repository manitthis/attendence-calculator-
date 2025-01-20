
function calculate(){
    var a=parseFloat(document.getElementById("a").value);
    var b=parseFloat(document.getElementById("b").value);
    let result = document.getElementById("r")

    if (isNaN(a) || isNaN(b)) {
        result.innerHTML = "Please enter valid numbers.";
        result.classList.remove("success");
        result.classList.add("fail");
    }
    else{
        var c = (b / a) * 100;
        result.innerHTML = "Your attendence is " + c.toFixed(2) + "%";
        result.classList.remove("fail");
        result.classList.add("success");
    }
}

