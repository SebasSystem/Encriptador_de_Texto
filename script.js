
let botonEncriptador = document.getElementById('botonEncriptador');
let botonDesencriptador = document.getElementById('botonDesencriptador');
let cajaImpresion = document.querySelector('.impresion-texto');
//Encriptado
botonEncriptador.addEventListener('click',function(){
    let cajaIngreso = document.getElementById('textoIngresado');
    let textoIngresado= cajaIngreso.value;
    let textoEncriptado='';
    for(let i=0; i<textoIngresado.length; i++){
        let letra=textoIngresado.charAt(i);
        if(letra=="a"){
            letra='ai';
        }else if(letra=="e"){
            letra='enter';
        }else if(letra=="i"){
            letra='imes';
        }else if(letra=="o"){
            letra='ober';
        }else if(letra=="u"){
            letra='ufat';
        }
        textoEncriptado=textoEncriptado+letra;   
    }
    imprimirTexto(textoEncriptado);
})
//Desencriptado
botonDesencriptador.addEventListener('click',function(){
    let cajaIngreso = document.getElementById('textoIngresado');
    let textoIngresado= cajaIngreso.value;
    let textoDesencriptado=textoIngresado.replace(/ai/g,'a').replace(/enter/g,'e').replace(/imes/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');
    imprimirTexto(textoDesencriptado);
})
//impresion de texto + boton copiar y funcionalidad
function imprimirTexto(texto){
    cajaImpresion.innerHTML='<ul class="caja-texto-impreso" id="texto-script"><li class="texto-script-arriva">'+texto+'</li><li><input type="submit" value="copiar" class="desencriptador" id="botonCopiar"></input></li></ul>'
    let botonCopiar=document.getElementById('botonCopiar');
    //evento copiar
    botonCopiar.addEventListener('click',function(){
        navigator.clipboard.writeText(texto);
    })
}



