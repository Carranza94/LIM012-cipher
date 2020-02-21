const cipher = {//Creo un objeto porque me permitirá almacenar las funciones que ultilizaré para reutilizar mi cifrado y decifrado
    //Utilizaré el nombre encode para la propiedad que contiene la función que va a cifrar.
    encode:(palabra1,offSetC) => {
        let resultado = '';  //Creo la variable cuyo valor es vacio para almacenar ahí los múltiples resultado de cada condición 
        for(let i= 0; i < palabra1.length; i++){//For para iterar
          let positionAsciiEncode = palabra1.charCodeAt(i);// Utilizo el charCodeAt() para conocer la posición del dígito que me dan, dependiendo de su posición se ejecutará
     //Los if's que están a continuación se emplearán solo sí el offset es mayor que 0     
          if (positionAsciiEncode >= 65 && positionAsciiEncode <= 90 && offSetC>0){
            let encodeMayusculas = String.fromCharCode((positionAsciiEncode - 65 + parseInt(offSetC))%26 + 65);
            resultado = resultado + encodeMayusculas;
          } else if(positionAsciiEncode >= 97 && positionAsciiEncode <=122 && offSetC>0){
            let encondeMinusculas = String.fromCharCode((positionAsciiEncode - 97 + parseInt(offSetC))%26 + 97);
            resultado = resultado + encondeMinusculas;
          } else if(positionAsciiEncode >= 32 && positionAsciiEncode <= 64 && offSetC>0){
            let encodeEspecial = String.fromCharCode((positionAsciiEncode - 32 + parseInt(offSetC))%33 + 32);
            resultado = resultado + encodeEspecial;
      //Tras la siguiente línea estarán los if's menores que 0     
          } else if (positionAsciiEncode >= 65 && positionAsciiEncode <= 90 && offSetC<0){
            let encodeMayusculasNegativo = String.fromCharCode((positionAsciiEncode - 90 + parseInt(offSetC))%26 + 90);
            resultado = resultado + encodeMayusculasNegativo;
          } else if(positionAsciiEncode >= 97 && positionAsciiEncode <=122 && offSetC<0){
            let encondeMinusculasNegativo = String.fromCharCode((positionAsciiEncode - 122 + parseInt(offSetC))%26 + 122);
            resultado = resultado + encondeMinusculasNegativo;
          } else if(positionAsciiEncode >= 32 && positionAsciiEncode <= 64 && offSetC<0){
            let encodeEspecialNegativo = String.fromCharCode((positionAsciiEncode - 64 + parseInt(offSetC))%33 + 64);
            resultado = resultado + encodeEspecialNegativo;
          }
        } 
        return resultado// antes de finalizar una función, en la ultima penúltima línea debo explicar a qué me va a dar como resultado 
      },// No olvidar que las propiedades son separadas por comas simples y no por punto y coma. 
    //Utilizaré el nombre decode para la propiedad que contiene la función que va a decifrar.
      decode:(palabra2,offSetD) => {
        let resultado2= '';//Variable vacía para almacenar resultado del algoritmo
        for(let i= 0; i < palabra2.length; i++){//For para iterar
          let positionAsciiDecode = palabra2.charCodeAt(i);//Posición en ASCII.
          if(positionAsciiDecode >= 65 && positionAsciiDecode <= 90 && offSetD>0){//Condicional para Mayúsculas.
            let decodeMayus = String.fromCharCode((positionAsciiDecode - 90 - parseInt(offSetD))%26 + 90);//Impresión del nuevo string ASCII a través del ALGORITMO
            resultado2 = resultado2 + decodeMayus;
          } else if(positionAsciiDecode >= 97 && positionAsciiDecode <= 122 && offSetD>0){//Condicional para Minúsculas.
            let decodeMinus = String.fromCharCode((positionAsciiDecode - 122 - parseInt(offSetD))%26 + 122);//Impresión del nuevo string ASCII a través del ALGORITMO
            resultado2 = resultado2 + decodeMinus;
          } else if(positionAsciiDecode >= 32 && positionAsciiDecode <= 64 && offSetD>0){//Condicional para caracteres especiales.
            let decodeEspecial = String.fromCharCode((positionAsciiDecode - 64 - parseInt(offSetD))%33 + 64);//Impresión del nuevo string ASCII a través del ALGORITMO
            resultado2 = resultado2 + decodeEspecial;
      //if's menores que 0     
          } else if (positionAsciiDecode >= 65 && positionAsciiDecode <= 90 && offSetD<0){
            let decodeMayusculasNegativo = String.fromCharCode((positionAsciiDecode - 65 - parseInt(offSetD))%26 + 65);
            resultado2 = resultado2 + decodeMayusculasNegativo;
          } else if(positionAsciiDecode >= 97 && positionAsciiDecode <=122 && offSetD<0){
            let decondeMinusculasNegativo = String.fromCharCode((positionAsciiDecode - 97 - parseInt(offSetD))%26 + 97);
            resultado2 = resultado2 + decondeMinusculasNegativo;
          } else if(positionAsciiDecode >= 32 && positionAsciiDecode <= 64 && offSetD<0){
            let decodeEspecialNegativo = String.fromCharCode((positionAsciiDecode - 32 - parseInt(offSetD))%33 + 32);
            resultado2 = resultado2 + decodeEspecialNegativo;
          }
        }
        return resultado2
      }
};

export default cipher;