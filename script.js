function temperature()
{


    var cel = document.getElementById("c").value;
    if(cel=="")
    {
        alert("please enter value");
        cel.focus();

    }
    var f= (c*9/5) + 32;
    document.getElementById("f").value = f;

}

function weight(){
    var k = document.getElementById("kilo").value;
    var p = k * 2.2;
    document.getElementById("pound").value = p;
}

function distance(){
    var d= document.getElementById("km").value;
    var m = d * 0.62137;
    document.getElementById("mile").value = m;
}