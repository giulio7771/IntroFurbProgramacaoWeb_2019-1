var fatorialButton = document.querySelector('#fatorial');
fatorialButton.onclick = function () {
    console.log("button click");
    var input = parseInt(document.querySelector('#field1 input').value);
    var output = document.querySelector('#field2 input');
    var result = fatorial(input);
    output.setAttribute('value', result);
}

function fatorial(n1){
    console.log("fatorial call: "+n1);
    if(n1 == 0){return 1;}
    return fatorial(n1-1)*n1;
}