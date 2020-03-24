function dropdownMenu(y) {
    y.classList.toggle("change");
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function signUpMessage() {
    var message = "Thank you for signing up to our service!";
    alert(message);
}

function signInMessage() {
    var message = "Thank you for signing in to your account!";
    alert(message);
}

function stringToBinary() {
    var input = "Man";
    var output = "";
    for (i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " ";
    }
    console.log(output);
}

function stringToBase64() {
    var input = "Man";
    var output = btoa(input);
    console.log(output);
}

function rot13() {
    var str = "Man"
    var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    console.log(str.split('').map(translate).join(''));
}

function encode() {
    var input = document.getElementById("encodeMessage").value;
    var output = btoa(input);
    var str = output;
    output = "";
    var rotInput = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var rotOutput = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index = x => rotInput.indexOf(x);
    var translate = x => index(x) > -1 ? rotOutput[index(x)] : x;
    output = str.split('').map(translate).join('');
    var binaryInput = output;
    var result = "";
    output = "";
    for (i = 0; i < binaryInput.length; i++) {
        output = binaryInput[i].charCodeAt().toString(2);
        result += Array(8 - output.length + 1).join("0") + output + " ";
    }
    document.getElementById("encodeValue").innerHTML = result;
}

function decode() {
    var input = document.getElementById("decodeMessage").value;
    var output = "";
    var binaryInput = input.replace(/ +/g, "");
    var arr = binaryInput.match(/.{1,8}/g);
    for (i = 0; i < arr.length; i++) {
        output += String.fromCharCode(parseInt(arr[i], 2).toString(10));
    }
    var rotInput = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var rotOutput = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var index = x => rotInput.indexOf(x);
    var translate = x => index(x) > -1 ? rotOutput[index(x)] : x;
    var str = output;
    output = "";
    output = str.split('').map(translate).join('');
    var result = atob(output);
    document.getElementById("decodeValue").innerHTML = result;
}