function compute() { 
    var p = document.getElementById("principal").value;
    var n = document.getElementById("years").value;
    var r = document.getElementById("rate").value;
    
    var result = p * n * r;
        var inrst = result / 100;
        var interest = document.getElementById("SI").innerHTML="Simple Interest is" +inrst;
}


        