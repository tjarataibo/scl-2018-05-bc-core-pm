//Cifrar

    window.cipher = 
{
  //Función predeterminada
  encode : (offset, string) =>

    //Creo una variable de lo que el usuario podría escribir
  {
    let sentence = "";
    //En caso de repetición (es predeterminada)
    for (let index = 0; index < string.length; ++index) 
    {      
      //Leer minúsculas y mayúsculas
      string = string.toUpperCase();
      //Conversión de código ASCII 
      const X = string.charCodeAt(index);  
      //Número de la letra para encontrar su ubicación en ASCII (fórmula predeterminada)
      let position = ((X - 65 + offset) % 26 ) + 65;
      //A qué elemento sacamos el código ASCII
      const fromX = String.fromCharCode(position);
      //Para guardar el mensaje cifrado
      sentence += fromX;
    } 
   
  //Para retornar el mensaje cifrado  
  return sentence;
  },

//___________________________________________________________________________________________

 //Descifrar 

  //Función predeterminada
  decode : (offset, string) =>

  //Creo una variable de lo que el usuario podría escribir
{
  let sentence = "";
  //En caso de repetición (es predeterminada)
   for (let index = 0; index < string.length; ++index) 
   {      
     //Leer minúsculas y mayúsculas
     string = string.toUpperCase();
     //Conversión de código ASCII 
     const X = string.charCodeAt(index);  
     //Número de la letra para encontrar su ubicación en ASCII (aquí tiene que retroceder y volver a ser el mensaje original)
     let position = ((X + 65 - offset) % 26 ) + 65;
     //A qué elemento sacamos el código ASCII
     const fromX = String.fromCharCode(position);
     //Para guardar el mensaje cifrado
     sentence += fromX;
   } 
 
  //Para retornar el mensaje cifrado  
  return sentence;
  },

}


