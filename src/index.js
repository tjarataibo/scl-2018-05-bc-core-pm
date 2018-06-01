
//Crear función de los valores respectivos de cifrado para que aparezca en HTML (obtener datos de cifrado)

encodeGetData = () => 
{
    let offset= parseInt(document.getElementById("offset").value); 
    let string=  document.getElementById("text").value; 
    document.getElementById("message").innerHTML = window.cipher.encode(string, offset);
}

//Crear función de los valores respectivos de descifrado para que aparezca en HTML (obtener datos de descifrado)

decodeGetData = () => 
{
    let offset= parseInt(document.getElementById("offset").value);
    let string= document.getElementById("text").value; 
    document.getElementById("message").innerHTML = window.cipher.decode(string, offset);
}


