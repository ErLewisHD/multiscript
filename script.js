preguntas = document.getElementsByClassName("qtext")
opciones = document.getElementsByClassName("answer")
bbdd = {

    'Las instrucciones tipo I en el ISA del MIPS:'	:[
        'Incluyen las instrucciones de salto condicional. ',
        'Incluyen las cargas y almacenamientos. ',
        'Incluyen las instrucciones de bifurcación a registro, bifurcación y enlace a registro. ',
        'Pueden involucrar a un registro. ',
        'Son instrucciones con inmediato. '],
    'En secuencias de vídeo, hay una significativa correlación entre muestras pertenecientes a cuadros vecinos. Esta se denomina' :[
	    'redundancia temporal '],
    'En el estándar JPEG con pérdidas, se obtienen las prestaciones mostradas en esta figura cuando se aplica a la imagen “The Palace”. ¿Qué conclusiones son ciertas?.' :[
        'JPEG es un códec simétrico '],
    'En el estándar de compresión para aplicaciones de fax' :[],
    'El control de caudal (rate control) en JPEG2000:'  :[
        'se alcanza modificando el factor de cuantificación ',
        'controla la tasa de bits de salida que se desea para la imagen '],
    'JPEG2000 se diferencia con respecto a JPEG ¿en cuales de las siguientes características?' :[
        'Huffman se reemplaza por un compresor aritmético adaptativo ',
        'usa la DWT (Transformada Wavelet) en vez de la DCT '],
    'En el estándar JPEG con pérdidas, a que se debe un resultado con estas prestaciones como el mostrado en estas imágenes' :[
         'al uso de factores de cuantificación muy elevados '],
    'Las prestaciones del estándar JPEG con pérdidas' :[
        'puede alcanzar factores de compresión de entre 10:1 y 20:1, sin comprometer la calidad visual ',
        'es posible utilizar el estándar JPEG para comprimir secuencias de vídeo ',
        'si se permiten pequeñas degradaciones visuales, el factor de compresión puede llegar hasta 100:1 ']




}


setTimeout(() => {
    pregunta = []
    for(let i = 0; i < preguntas.length; i++) {
        pregunta[i] = preguntas.item(i).textContent
    }

    let i = 0
    for(let j = 0; j < pregunta.length; j++) {
        Object.entries(bbdd).forEach(([key, value]) => {
            if (pregunta[i].includes(key)) {
                opciones_test = opciones.item(i).childNodes
                for (let j=0; j < (opciones_test.length); j+=2) {
                    respuesta = opciones_test.item(j).textContent.slice(3)
                    if (value.includes(respuesta)) {

						 opciones_test.item(j).childNodes[1].childNodes[0].setAttribute("style","color:#504D4D")
                        i ++
                    }
                }
            }
        });
        i ++
    }
})
