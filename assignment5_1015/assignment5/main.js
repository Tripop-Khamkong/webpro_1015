var inputtextcount = 0;

function postFunction() {
    var inputtext = document.getElementById("text1").value;
    var outputtext = "";

    if (inputtextcount == 0) {
        outputtext = document.getElementById("topic1");
        inputtextcount++;
    }
    else if (inputtextcount == 1) {
        outputtext = document.getElementById("comment1");
        inputtextcount++;
    }
    else {
        outputtext = document.getElementById("comment2");
        inputtextcount = 0;
    }

    outputtext.innerHTML = inputtext;
}

function clearFunction() {
    inputtextcount = 0;
    document.getElementById("text1").value = ""; 
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}
