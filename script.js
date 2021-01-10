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
        'si se permiten pequeñas degradaciones visuales, el factor de compresión puede llegar hasta 100:1 '],
    'La codificación predictiva (predicción espacial):' :[
        'elimina redundancia espacial ',
        'los predictores se forman extrapolando (de diferentes formas) el valor de los píxeles vecinos ',
        'se hace a nivel de pixel o a nivel de bloque de pixeles ',
        'se le conoce como predicción Intra '],
    'Los codificadores de entropía (VLC) se basan en' :[
      'asignar palabras de código de longitud variable a cada muestra '],
    'La codificación por transformada'  :[
        'transforma la señal a otro dominio, en el cual, sólo unos pocos de los coeficientes contengan la mayor parte de la información importante '],
    'La codificación por tranformada...':[],
    'La Codificación de Longitud de Series, (RLC)' :[
        'es una técnica de compresión sin pérdidas ',
        'es una técnica útil cuando se esperan largas sucesiones de un mismo valor (usualmente cero) entre cualquier otro par de valores ',
        'puede dar lugar a compresión o a expansión de los datos '],
    'La codificación predictiva':[
        'es una técnica de compresión sin pérdidas ',
        'reduce la redundancia espacio-temporal de las señales ',
        'predice el valor de una muestra a través de su vecindad espacial o temporal '],
    'La codificación predictiva (predicción temporal): para la estimación de movimiento, ¿Cuál es el procedimiento más popular?.':[
        'la comparación de macrobloques (MB) '],
    'La cuantificación vectorial':[
        'la complejidad dependerá de la medida de distorsión y del algoritmo de búsqueda utilizado '],
    'La codificación predictiva (predicción temporal): en la estimación de movimiento, ¿Cuál es la influencia del tamaño de MB?':[
        'el residuo es menor conforme se reduce el tamaño del MB ',
        'se generan menores vectores de movimiento al aumentar el tamaño del MB ',
        'se disminuye el coste computacional al aumentar el tamaño del MB '],
    'La codificación predictiva (predicción temporal): en la estimación de movimiento con fracciones de pixel':[
        'se realiza la estimación de movimiento con mayor precisión '],
    'Una descomposición wavelet completa se obtiene realizando reiteradamente los pasos de filtrado paso bajo y alto sobre la banda':[
        'LL '],
    'En la codificación por transformada:':[
        'para reducir el número de operaciones necesarias, la imagen se subdivide en bloques más pequeños, generalmente de 8x8 ',
        'La transformada elegida por la mayoría de los estándares establecidos, es la transformada DCT ',
        'es una técnica de compresión sin pérdidas (pérdidas despreciables) '],
    'En el cuantificador no lineal:':[
        'se da más resolución a las muestras de valor más pequeño y menos resolución a las muestras de mayor valor ',
        'el salto en cada paso del cuantificador no es el mismo a lo largo de todo el rango ',
        'la relación entre la señal de entrada y la señal de salida no es lineal '],
    'En el cuantificador lineal:':[]
    'La codificación en sub-banda':[
        'es más costosa computacionalmente que la codificación por transformada basada en bloque a bloque ',
        'elimina considerablemente el efecto de bloques '],
    'La codificación en sub-bandas...':[],
    'En la matriz (8x8) resultante de aplicar la DCT:':[
        'el valor de la esquina superior izquierda es el valor más importante ',
        'el valor de la esquina superior izquierda indica el valor del color dominante, que corresponde a la componente de continua (DC) del bloque (color promedio) ',
        'en general, cuanto más alejado de la esquina superior izquierda esté el coeficiente DCT, menos importante es desde un punto de vista perceptivo ']
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
