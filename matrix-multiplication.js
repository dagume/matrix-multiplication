
var a = [ [1, 4, 8],
          [1, 1, 2],
          [4, 1, 8] ];

var b = [ [1, 4],
          [2, 1],
          [5, 1] ];

var result = 0;
var arr = Array.from(Array(a.length), () => new Array(b[0].length));

document.write("Matrices a multiplicar");
printMatrix(a); 
printMatrix(b); 
if (a[0].length == b.length) 
{
    multiplication(result);
}
else
{
    document.write(" Las matrices no cumplen con la condicion: <br>"  +
    "- El número de columnas de A no coincide con el número de filas de B ");
}

function multiplication(result) 
{   
    document.write("<br>Resultado de la multiplicación <br>");
    for (let i = 0; i <= a.length-1; i++) {
        for (let j = 0; j <= b[0].length-1; j++) {
            for (let k = 0; k <= a[0].length-1; k++) {
                result += (a[i][k] * b[k][j]);
            }
            printResult(i, j, result);  
            result = 0;          
        }        
    }
}

function printResult(i, j, result) 
{    
    
    arr[i][j] = result;
    document.write("c ["+ i + "] [" + j + "] = " + arr[i][j]+ "<br>");            
}

function printMatrix(array) 
{        
    document.write("<br>");
    for (let i = 0; i <= array.length-1; i++) {

        for (let j = 0; j <= array[0].length-1; j++) {
            document.write(array[i][j] + "\n");
        }   
        document.write("<br>");

    }       
}

