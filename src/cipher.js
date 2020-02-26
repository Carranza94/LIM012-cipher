const cipher = {//Creo un objeto porque me permitirá almacenar las funciones que ultilizaré para reutilizar mi cifrado y decifrado
    //Utilizaré el nombre encode para la propiedad que contiene la función que va a cifrar.
  encode:(desplazamiento,texto) => {
    //Creo la variable cuyo valor es vacio para almacenar ahí los múltiples resultado de cada condición 
    let cifrado = '';
    if(desplazamiento === null || desplazamiento === 0){
      throw new TypeError();
    }
    for(let i= 0; i < texto.length; i++){//For para iterar
      const positionAsciiEncode = texto.charCodeAt(i); 
      if (positionAsciiEncode >= 65 && positionAsciiEncode <= 90) {
        if(desplazamiento > 0) {
          cifrado += String.fromCharCode((positionAsciiEncode - 65 + parseInt(desplazamiento))%26 + 65);  
        } else {
          cifrado += String.fromCharCode((positionAsciiEncode - 90 + parseInt(desplazamiento))%26 + 90);
        }
      } else if(positionAsciiEncode >= 97 && positionAsciiEncode <=122) {
        if (desplazamiento > 0){
          cifrado += String.fromCharCode((positionAsciiEncode - 97 + parseInt(desplazamiento))%26 + 97);
        } else {
          cifrado += String.fromCharCode((positionAsciiEncode - 122 + parseInt(desplazamiento))%26 + 122)
        }
      } else {
        if (desplazamiento > 0){
          cifrado += String.fromCharCode((positionAsciiEncode - 32 + parseInt(desplazamiento))%33 + 32);
        } else {
          cifrado += String.fromCharCode((positionAsciiEncode - 64 + parseInt(desplazamiento))%33 + 64);  
        }
      }
    }
    return cifrado// antes de finalizar una función, en la ultima penúltima línea debo explicar a qué me va a dar como resultado 
  },
  decode:(desplazamiento,texto) => {
    let decifrado= '';//Variable vacía para almacenar resultado del algoritmo
    if(desplazamiento === null || desplazamiento === 0){
      throw new TypeError();
    }
    for(let i= 0; i < texto.length; i++){//For para iterar
      const positionAsciiDecode = texto.charCodeAt(i);//Posición en ASCII.
      if(positionAsciiDecode >= 65 && positionAsciiDecode <= 90){
        if(desplazamiento > 0){
          decifrado += String.fromCharCode((positionAsciiDecode - 90 - parseInt(desplazamiento))%26 + 90);//Impresión del nuevo string ASCII a través del ALGORITMO 
        } else{
          decifrado += String.fromCharCode((positionAsciiDecode - 65 - parseInt(desplazamiento))%26 + 65);
        } 
      }else if(positionAsciiDecode >= 97 && positionAsciiDecode <= 122){
        if(desplazamiento > 0){
          decifrado += String.fromCharCode((positionAsciiDecode - 122 - parseInt(desplazamiento))%26 + 122);//Impresión del nuevo string ASCII a través del ALGORITMO 
        }else {
          decifrado += String.fromCharCode((positionAsciiDecode - 97 - parseInt(desplazamiento))%26 + 97);
        }
      }else {
        if(desplazamiento > 0){
          decifrado += String.fromCharCode((positionAsciiDecode - 64 - parseInt(desplazamiento))%33 + 64);//Impresión del nuevo string ASCII a través del ALGORITMO
        } else {
          decifrado += String.fromCharCode((positionAsciiDecode - 32 - parseInt(desplazamiento))%33 + 32);
        }
      }
    }
    return decifrado
   }
};
export default cipher;