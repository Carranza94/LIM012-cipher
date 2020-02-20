const cipher = {//Creo un objeto porque me permitirá almacenar las funciones que ultilizaré para reutilizar mi cifrado y decifrado
    encode:(palabra1,offSetC) => {
        let resultado = '';  //Creo la variable resultado vacío para almacenar ahí los múltiples resultado de cada condición 
        for(let i= 0; i < palabra1.length; i++)
        {
          let positionAsciiEncode = palabra1.charCodeAt(i);// Utilizo el charCodeAt() para conocer la posición del dígito que me dan, dependiendo de su posición se ejecutará de diferente
          if (positionAsciiEncode >= 65 && positionAsciiEncode <= 90){
            let encodeMayus = String.fromCharCode((positionAsciiEncode - 65 + parseInt(offSetC))%26 + 65);
            resultado = resultado + encodeMayus;
          } else if(positionAsciiEncode >= 97 && positionAsciiEncode <=122){
            let encondeMinusculas = String.fromCharCode((positionAsciiEncode - 97 + parseInt(offSetC))%26 + 97);
            resultado = resultado + encondeMinusculas;
          } else if(positionAsciiEncode >= 32 && positionAsciiEncode <= 64){
            let especialE = String.fromCharCode((positionAsciiEncode - 32 + parseInt(offSetC))%33 + 32);
            resultado = resultado + especialE;
          } 
        } 
        return resultado// antes de finalizar una función, en la ultima penúltima línea debo explicar a qué me va a dar como resultado 
      },// No olvidar que las propiedades son separadas por comas simples y no por punto y coma. 
      decode:(palabra2,offSetD) => {
        let resultado2= '';
        for(let i= 0; i < palabra2.length; i++)
        {
          let positionAsciiDecode = palabra2.charCodeAt(i);
          if(positionAsciiDecode >= 65 && positionAsciiDecode <= 90)
          {
            let decodeMayus = String.fromCharCode((positionAsciiDecode - 90 - parseInt(offSetD))%26 + 90);
            resultado2 = resultado2 + decodeMayus;
            string1.value = resultado2;
          } else if(positionAsciiDecode >= 97 && positionAsciiDecode <= 122){
            let decodeMinusculas = String.fromCharCode((positionAsciiDecode - 122 - parseInt(offSetD))%26 + 122);
            resultado2 = resultado2 + decodeMinusculas;
            string1.value = resultado2;
          } else if(positionAsciiDecode >= 32 && positionAsciiDecode <= 64){
            let especialD = String.fromCharCode((positionAsciiDecode - 64 - parseInt(offSetD))%33 + 64);
            resultado2 = resultado2 + especialD;
            string1.value = resultado2;
          }
        }
        return resultado2
      }
};

export default cipher;





//export default decipher;



