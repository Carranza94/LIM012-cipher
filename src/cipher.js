const cipher = {//Creo un objeto porque me permitirá almacenar las funciones que ultilizaré para reutilizar mi cifrado y decifrado
    //Utilizaré el nombre encode para la propiedad que contiene la función que va a cifrar.
  encode:(offSetC,palabra1) => {
    //Creo la variable cuyo valor es vacio para almacenar ahí los múltiples resultado de cada condición 
    let cifrado = '';
    if(offSetC === null || offSetC === 0){
      throw new TypeError();
    }
    for(let i= 0; i < palabra1.length; i++){//For para iterar
      const positionAsciiEncode = palabra1.charCodeAt(i); 
      if (positionAsciiEncode >= 65 && positionAsciiEncode <= 90) {
        if(offSetC > 0) {
          cifrado += String.fromCharCode((positionAsciiEncode - 65 + parseInt(offSetC))%26 + 65);  
        } else {
          cifrado += String.fromCharCode((positionAsciiEncode - 90 + parseInt(offSetC))%26 + 90);
        }
      } else if(positionAsciiEncode >= 97 && positionAsciiEncode <=122) {
        if (offSetC > 0){
          cifrado += String.fromCharCode((positionAsciiEncode - 97 + parseInt(offSetC))%26 + 97);
        } else {
          cifrado += String.fromCharCode((positionAsciiEncode - 122 + parseInt(offSetC))%26 + 122)
        }
      } else {
        if (offSetC > 0){
          cifrado += String.fromCharCode((positionAsciiEncode - 32 + parseInt(offSetC))%33 + 32);
        } else {
          cifrado += String.fromCharCode((positionAsciiEncode - 64 + parseInt(offSetC))%33 + 64);  
        }
      }
    }
    return cifrado// antes de finalizar una función, en la ultima penúltima línea debo explicar a qué me va a dar como resultado 
  },
  decode:(offSetD,palabra2) => {
    let decifrado= '';//Variable vacía para almacenar resultado del algoritmo
    if(offSetD === null || offSetD === 0){
      throw new TypeError();
    }
    for(let i= 0; i < palabra2.length; i++){//For para iterar
      const positionAsciiDecode = palabra2.charCodeAt(i);//Posición en ASCII.
      if(positionAsciiDecode >= 65 && positionAsciiDecode <= 90){
        if(offSetD > 0){
          decifrado += String.fromCharCode((positionAsciiDecode - 90 - parseInt(offSetD))%26 + 90);//Impresión del nuevo string ASCII a través del ALGORITMO 
        } else{
          decifrado += String.fromCharCode((positionAsciiDecode - 65 - parseInt(offSetD))%26 + 65);
        } 
      }else if(positionAsciiDecode >= 97 && positionAsciiDecode <= 122){
        if(offSetD > 0){
          decifrado += String.fromCharCode((positionAsciiDecode - 122 - parseInt(offSetD))%26 + 122);//Impresión del nuevo string ASCII a través del ALGORITMO 
        }else {
          decifrado += String.fromCharCode((positionAsciiDecode - 97 - parseInt(offSetD))%26 + 97);
        }
      }else {
        if(offSetD > 0){
          decifrado += String.fromCharCode((positionAsciiDecode - 64 - parseInt(offSetD))%33 + 64);//Impresión del nuevo string ASCII a través del ALGORITMO
        } else {
          decifrado += String.fromCharCode((positionAsciiDecode - 32 - parseInt(offSetD))%33 + 32);
        }
      }
    }
    return decifrado
   }
};
export default cipher;