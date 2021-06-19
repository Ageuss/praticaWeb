function adicionar() {
    var tabela = document.getElementById('tabela')
 
    var primeiroDadoTabela = document.getElementById('add');

    var input1 = document.getElementById("input1").value;
 
    var input2 = document.getElementById("input2").value;
 
    var input3 = document.getElementById("input3").value;

    var input4 = document.getElementById("input4").value;

    var input5 = document.getElementById("input5").value;

    var input6 = document.getElementById("input6").value;

    var input7 = document.getElementById("input7").value;

    var input8 = document.getElementById("input8").value;
 
    var input9 = document.getElementById("input9").value;

    var img = document.getElementById('add8');
    img.src = input9;

    if (primeiroDadoTabela.textContent) {
      
       novaLinha(tabela, input1, input2, input3, input4, input5, input6, input7, input8, input9);
       return;
    }
     
    document.querySelector('#add').innerHTML = input1;
    document.querySelector('#add1').innerHTML = input2;
    document.querySelector('#add2').innerHTML = input3;
    document.querySelector('#add3').innerHTML = input4;
    document.querySelector('#add4').innerHTML = input5;
    document.querySelector('#add5').innerHTML = input6;
    document.querySelector('#add6').innerHTML = input7;
    document.querySelector('#add7').innerHTML = input8;
    document.querySelector('#add8').innerHTML = input9;
    return false;
 }

 function novaLinha(tabela,input1, input2, input3, input4, input5, input6, input7, input8, input9) {
 
    var linha = tabela.insertRow(-1);
    var coluna1 = linha.insertCell(0);
    var coluna2 = linha.insertCell(1);
    var coluna3 = linha.insertCell(2);
    var coluna4 = linha.insertCell(3);
    var coluna5 = linha.insertCell(4);
    var coluna6 = linha.insertCell(5);
    var coluna7 = linha.insertCell(6);
    var coluna8 = linha.insertCell(7);
    var coluna9 = linha.insertCell(8);

    coluna1.innerHTML = input1;
    coluna2.innerHTML = input2;
    coluna3.innerHTML = input3;
    coluna4.innerHTML = input4;
    coluna5.innerHTML = input5;
    coluna6.innerHTML = input6;
    coluna7.innerHTML = input7;
    coluna8.innerHTML = input8;
    coluna9.innerHTML = input9;
    return false;
 }

function limpar(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";
    document.getElementById("input4").value="";
    document.getElementById("input5").value="";
    document.getElementById("input6").value="";
    document.getElementById("input7").value="";
    document.getElementById("input8").value="";
    document.getElementById("input9").value="";
}