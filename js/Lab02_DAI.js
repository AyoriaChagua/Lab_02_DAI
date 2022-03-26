// Código del ejercicio A>---------------------------------

const getValueInput = ()=>{
    let nombre = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;
    document.getElementById('results').innerHTML = `Hola ${nombre}, a ingresado su email: ${mail}`;
}

// Código del ejercicio B>---------------------------------



const getValueSum = ()=>{

    let num1 = document.getElementById('first-number-ej2').value;
    let num2 = document.getElementById('second-number-ej2').value;
    let result = document.getElementById('first-results-second-ej');
    let suma = parseFloat(num1) + parseFloat(num2);

    if(isNaN(parseFloat(num1))){
        result.innerHTML =  'Enter numbers :(';
    }else if (isNaN(parseFloat(num2))){
        result.innerHTML =  'Enter numbers :(';
    }else{
        result.innerHTML =  suma;
    }
    
}

const getValueMult = ()=>{
    
    let num3 = document.getElementById('third-number-ej2').value;
    let num4 = document.getElementById('fourth-number-ej2').value;
    let result = document.getElementById('second-results-second-ej');
    let mult = parseFloat(num3) * parseFloat(num4);

    if(isNaN(parseFloat(num3))){
        result.innerHTML =  'Enter numbers :(';
    }else if (isNaN(parseFloat(num4))){
        result.innerHTML =  'Enter numbers :(';
    }else{
        result.innerHTML =  mult;
    }
}

// Código del ejercicio C>---------------------------------

const getValueComparison = ()=>{
    let num1 = parseFloat(document.getElementById('first-number-ej3').value);
    let num2 = parseFloat(document.getElementById('second-number-ej3').value);
    let result1 = document.getElementById('first-results-third-ej');
    let result2 = document.getElementById('second-results-third-ej');

    if(isNaN(parseFloat(num1))){
        result1.innerHTML =  'Enter numbers :(';
    }else if (isNaN(parseFloat(num2))){
        result2.innerHTML =  'Enter numbers :(';
    }else{
        if (num1 > num2){
            let suma = num1 + num2;
            let resta = num1 - num2;
            document.getElementById('comparion-ej-third').innerHTML = '>';
            document.getElementById('first-op-ej-third').innerHTML = '+';
            document.getElementById('second-op-ej-third').innerHTML = '-';
            result1.innerHTML = suma;
            result2.innerHTML = resta;
        }else{
            let mult = num1 * num2;
            let div = num1 / num2;
            document.getElementById('comparion-ej-third').innerHTML = '<';
            document.getElementById('first-op-ej-third').innerHTML = 'x';
            document.getElementById('second-op-ej-third').innerHTML = '/';
            result1.innerHTML = mult;
            result2.innerHTML = div;
        }
    }
}
// Código del ejercicio D>---------------------------------

const getValueProm = ()=>{
    let nota1 = parseFloat(document.getElementById('first-number-ej4').value);
    let nota2 = parseFloat(document.getElementById('second-number-ej4').value);
    let nota3 = parseFloat(document.getElementById('third-number-ej4').value);

    let rpta = document.getElementById('msj-average');
    let prom = ((nota1 + nota2 + nota3)/3);

    if(prom >= 4) rpta.innerHTML = '<p style="color:green">Regular</p>' ;
    if(prom <= 4) rpta.innerHTML = '<p style="color:red">Reprobado</p>';
}

// Código del ejercicio E>---------------------------------

const getValueComparisonEj5 = ()=>{
    let num1 = document.getElementById('first-number-ej5').value;
    let num2 = document.getElementById('second-number-ej5').value;
    let num3 = document.getElementById('third-number-ej5').value;

    let r1 = document.getElementById('image-if-first-great');
    let r2 = document.getElementById('image-if-second-great');
    let r3 = document.getElementById('image-if-third-great');

    let array = [num1, num2, num3];
    let max = Math.max(...array);

    if(isNaN(parseFloat(num1))){
        r1.innerHTML =  '<h6>Enter numbers :(</h6>';
    }else if (isNaN(parseFloat(num2))){
        r2.innerHTML =  '<h6>Enter numbers :(</h6>';
    }else if  (isNaN(parseFloat(num3))){
        r3.innerHTML =  '<h6>Enter numbers :(</h6>';
    }else{
        if(num1 == max) r1.innerHTML =  `<img src="img/flecha-izquierda.png" width="80px" alt="">`;
        if(num2 == max) r2.innerHTML =  `<img src="img/flecha-izquierda.png" width="80px" alt="">`;
        if(num3 == max) r3.innerHTML =  `<img src="img/flecha-izquierda.png" width="80px" alt="">`;
    }
}