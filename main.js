//Definicion de funciones
const clave = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat',

    //Código para funcionar con letras acentuadas
    /*'á' : 'ái',
    'é' : 'énter',
    'í' : 'ímes',
    'ó' : 'óber',
    'ú' : 'úfat',*/
}

//Obtenemos texto de la caja de texto y fragmentamos cada lretra en un array
function obtenerTextoIngresado(){
    //Código para que funcione tanto con mayúsculas y minúsculas
    //let texto_ingresado = document.getElementById("texto_ingresado").value.toLowerCase();
    let texto_ingresado = document.getElementById("texto_ingresado").value;
    return(texto_ingresado.split(""))
}

//Imprimimos el texto generado en la caja de resultado y limpiamos el formulario
function imprimir_texto(texto_generado){
    document.getElementById("texto_generado").innerHTML = texto_generado
    formulario.reset();
}

//Encriptamos mensaje según la clave otorgada
function encriptar(){
    let lista_mensaje = obtenerTextoIngresado();
    let lista_mensaje_encriptado = [];
    let mensaje_encriptado = '';
    
    //Creamos una nueva lista con reemplazo por encriptacion
    for(var i=0; i<lista_mensaje.length; i++){
        //Evaluamos el valor actual con el diccionario, si no coincide, dejamos el actual
        lista_mensaje_encriptado.push(clave[lista_mensaje[i]] || lista_mensaje[i])
    }

    //Unimos todo en una frase
    for(var i=0; i<lista_mensaje_encriptado.length; i++){
        //Concatenamos str
        mensaje_encriptado += lista_mensaje_encriptado[i];
    }

    //Imprimimos el mensaje encriptado
    imprimir_texto(mensaje_encriptado);

    //Cambiamos el color de la imagen como guía de lo realizado
    img_guia.src="recursos/texto_encriptado.png";

}

//Desencriptamos mensaje según la clave otorgada
function desencriptar(){
    let lista_mensaje = obtenerTextoIngresado();
    let mensaje_desencriptado = '';

    //Recorremos cada elemento de la lista buscando el inicio de cada clave
    let i = 0;
    while(i < lista_mensaje.length){
        
        //Analizamos si se encuentra la letra en el diccionario, de ser así, saltamos la clave
        if(lista_mensaje[i] in clave){
            mensaje_desencriptado += lista_mensaje[i];
            i += clave[lista_mensaje[i]].length;
        }

        //Sino, concatenamos libremente
        else{
            mensaje_desencriptado += lista_mensaje[i];
            i++;
        }
    }

    //Imprimimos el mensaje encriptado
    imprimir_texto(mensaje_desencriptado);

    //Cambiamos el color de la imagen como guía de lo realizado
    img_guia.src="recursos/texto_desencriptado.png"
}

function copiar_al_portapapeles(){
    let texto_a_copiar = document.getElementById("texto_generado");
    navigator.clipboard.writeText(texto_generado.textContent);

    //Cambiamos el color de la imagen como guía de lo realizado
    img_guia.src="recursos/texto_copiado.png"
}