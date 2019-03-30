var plusButton = document.querySelector('#soma');
/*plusButton.onclick = function(){

    var input1 = document.getElementById('field1');
    var input2 = document.getElementById('field2');
    var input3 = document.getElementById('field3');

    console.log("entrou");
    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
    var soma = input1.value + input2.value + input3.value;
    console.log(soma);
    alert("The plus operation result is "+soma);
}*/

function somarF (){

    var input1 = parseInt(document.querySelector('#field1 input').value);
    var input2 = parseInt(document.querySelector('#field2 input').value);
    var input3 = parseInt(document.querySelector('#field3 input').value);

    console.log("entrou");
    console.log(input1);
    console.log(input2);
    console.log(input3);
    var soma = input1 + input2 + input3;
    var par = soma%2 == 0 ? "par":"impare";
    console.log(soma);
    alert("The plus operation result is "+soma+" and is "+par);
    setTimeout(4);
}