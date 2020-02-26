import cipher from './cipher.js';
/*console.log(cipher);*/
let string1 = document.getElementById('string1');
let string2 = document.getElementById('string2');
let click1 = document.getElementById('click1');
let click2 = document.getElementById('click2');
let offSet = document.getElementById('offset');
//let copiar = document.getElementById('copiar')
//let refrescar = document.getElementById('refrescar')
click1.addEventListener('click', () => 
{
  let texto = string1.value;
  let desplazamiento = offSet.value;
  string2.value = cipher.encode(desplazamiento,texto);
});  
click2.addEventListener('click', () =>
{
  let texto = string1.value;
  let desplazamiento = offSet.value;
  string2.value = cipher.decode(desplazamiento,texto);
}); 
/*
copiar.addEventListener('click', () => 
{

});
refrescar.addEventListener('click', () =>
{


});
*/

/*else if(positionAsciiEncode === 33){
      resultado += '!';
      string2.value = resultado;
    } else if(positionAsciiEncode === 64){
      resultado += '@';
      string2.value = resultado;
    } else if(positionAsciiEncode === 32){
      resultado += ' ';
      string2.value = resultado;
    }*/ 
/*else if(positionAsciiDecode === 33){
      resultado2 += '!';
      string1.value = resultado2;
    } else if(positionAsciiDecode === 64){
      resultado2 += '@';
      string1.value = resultado2;
    } else if(positionAsciiDecode === 32){
      resultado2 += ' ';
      string1.value = resultado2;
    }*/ 
    
/*
for(let i= 0; i < palabra.length; i++){

  let encode = String.fromCharCode((palabra.charCodeAt(i) - 65 + 5)%26 + 65);

  resultado = resultado + encode;
  
}
console.log(resultado);

let palabra2 = 'MTQFHTRTJXYFX';
let offset2 = 5;
let resultado2 = '';

for(let i= 0; i < palabra2.length; i++){

  let decode = String.fromCharCode((palabra2.charCodeAt(i) - 90 - 5)%26 + 90);

  resultado2 = resultado2 + decode;
}

console.log(resultado2);
*/

/*click1.addEventListener('click',() =>{
    let mensaje1 = string1.value;
    let desplazamiento = offSet1.value;
    string2.value= mensaje1;
});*/