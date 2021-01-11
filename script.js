preguntas = document.getElementsByClassName("qtext")
opciones = document.getElementsByClassName("answer")
bbdd = {

    'Las instrucciones tipo I en el ISA del MIPS:'  :[
        'Incluyen las instrucciones de salto condicional. ',
        'Incluyen las cargas y almacenamientos. ',
        'Incluyen las instrucciones de bifurcación a registro, bifurcación y enlace a registro. ',
        'Pueden involucrar a un registro. ',
        'Son instrucciones con inmediato. '],
    'En secuencias de vídeo, hay una significativa correlación entre muestras pertenecientes a cuadros vecinos. Esta se denomina' :[
	    'redundancia temporal '],
    'En el estándar JPEG con pérdidas, se obtienen las prestaciones mostradas en esta figura cuando se aplica a la imagen “The Palace”. ¿Qué conclusiones son ciertas?.' :[
        'JPEG es un códec simétrico ',
        'la compresión es en tiempo real ',
        'la compresión aument al aumentar el factor de cuantificación '],
    'En el estándar de compresión para aplicaciones de fax' :[
        'se adopta una codificación de longitud de series seguido de una codificación Huffman ',
        'se utiliza un bit por pixel ',
        'las imágenes o documentos son escaneados en un formato bitonal '],
    'El control de caudal (rate control) en JPEG2000:'  :[
        'se alcanza modificando el factor de cuantificación ',
        'controla la tasa de bits de salida que se desea para la imagen '],
    'JPEG2000 se diferencia con respecto a JPEG ¿en cuales de las siguientes características?'  :[
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
        'se le conoce como predicción Intra '
        'es una técnica de compresión sin pérdidas '],
    'Los codificadores de entropía (VLC) se basan en' :[
      'asignar palabras de código de longitud variable a cada muestra ',
      'asignan palabras cortas a los valores de muestras más probables, y palabras largas a los valores de muestras menos probables ',
      'los dos mecanismos más utilizados son la codificación Huffman, y la codificación Aritmética ',
      'es una técnica de compresión sin pérdidas '],
    'La codificación por transformada'  :[
        'transforma la señal a otro dominio, en el cual, sólo unos pocos de los coeficientes contengan la mayor parte de la información importante '],
    'La codificación por tranformada...'  :[],
    'La Codificación de Longitud de Series, (RLC)' :[
        'es una técnica de compresión sin pérdidas ',
        'es una técnica útil cuando se esperan largas sucesiones de un mismo valor (usualmente cero) entre cualquier otro par de valores ',
        'puede dar lugar a compresión o a expansión de los datos '],
    'La codificación predictiva'  :[
        'es una técnica de compresión sin pérdidas ',
        'reduce la redundancia espacio-temporal de las señales ',
        'predice el valor de una muestra a través de su vecindad espacial o temporal '],
    'La codificación predictiva (predicción temporal):'  :[
      'elimina la redundancia temporal ',
      'se basa en la estimación y compensación de movimiento entre frames '],
    'La codificación predictiva (predicción temporal): para la estimación de movimiento, ¿Cuál es el procedimiento más popular?.' :[
        'la comparación de macrobloques (MB) '],
    'La cuantificación vectorial' :[
        'la complejidad dependerá de la medida de distorsión y del algoritmo de búsqueda utilizado ',
        'procesa los bloques de datos directamente en el dominio espacial '
        'es una técnica de codificación con pérdidas '],
    'La cuantificación vectorial…' :[
      'se basa en codificar un conjunto de muestras (vector) en base a una lista de vectores pre-establecidos '],
    'La codificación predictiva (predicción temporal): en la estimación de movimiento, ¿Cuál es la influencia del tamaño de MB?'  :[
        'el residuo es menor conforme se reduce el tamaño del MB ',
        'se generan menores vectores de movimiento al aumentar el tamaño del MB ',
        'se disminuye el coste computacional al aumentar el tamaño del MB '],
    'La codificación predictiva (predicción temporal): en la estimación de movimiento..'  :[
        'se define un área de búsqueda para reducir el coste de la misma ',
        'se utilizan algoritmos de búsqueda ',
        'está el proceso más costoso computacionalmente '],
    'La codificación predictiva (predicción temporal): en la estimación de movimiento con fracciones de pixel' :[
        'se realiza la estimación de movimiento con mayor precisión '],
    'La codificación predictiva (predicción temporal): en la estimación de movimiento con fracciones de pixel.' :[
        'se realiza la estimación de movimiento con mayor precisión ',
        'se aumenta el coste computacional '],
    'La codificación predictiva (predicción temporal): en la estimación y compensación de movimiento..' :[
        'la diferencia entre la imagen actual y la predicción se llama residuo de movimiento compensado ',
        'se crea una imagen de predicción con la imagen actual y la imagen precedente '],
    'La codificación predictiva (predicción temporal): en la estimación de movimiento, ¿Cuál es el algoritmo de búsqueda más costoso computacionalmente?.'  :[
        'Búsqueda completa '],
    'Una descomposición wavelet completa se obtiene realizando reiteradamente los pasos de filtrado paso bajo y alto sobre la banda' :[
        'LL '],
    'La codificación por transformada:' :[
        'tranforma la señal a otro dominio, en el cual, sólo unos pocos de los coeficientes contengan la mayor parte de la información importante ',
        'es una técnica de compresión sin pérdidas (pérdidas despreciables) ',
        'reduce la redundancia espacial de las señales'],
    'En la codificación por transformada:' :[
        'para reducir el número de operaciones necesarias, la imagen se subdivide en bloques más pequeños, generalmente de 8x8 ',
        'La transformada elegida por la mayoría de los estándares establecidos, es la transformada DCT ',
        'es una técnica de compresión sin pérdidas (pérdidas despreciables) '],
    'En el cuantificador no lineal:' :[
        'se da más resolución a las muestras de valor más pequeño y menos resolución a las muestras de mayor valor ',
        'el salto en cada paso del cuantificador no es el mismo a lo largo de todo el rango ',
        'la relación entre la señal de entrada y la señal de salida no es lineal '],
    'En el cuantificador lineal:' :[
        'el salto en cada paso del cuantificador es el mismo a lo largo de todo el rango '],
    'En el cuantificador del compresor JPEG con pérdidas' :[
        'se utilizan matrices de cuantificación ponderadas diferentes para los bloques de luminancia y crominancia ',
        'las altas frecuencias se cuantifican más ',
        'esta es la etapa en la que se produce la mayoría de las pérdidas '],
    'La codificación en sub-banda' :[
        'es más costosa computacionalmente que la codificación por transformada basada en bloque a bloque ',
        'elimina considerablemente el efecto de bloques ',
        'a las bandas resultantes de la codificación en sub-banda se le puede aplicar posteriormente otras técnicas de compresión ',
        'La compresión de los datos se alcanza al descartar algunas sub-bandas irrelevantes y al codificar eficientemente el resto de bandas acorde a su importancia ',
        'normalmente en audio se utilizan 32 sub-bandas y en imágenes o vídeo entre 4 y 7 sub-bandas'],
    'La codificación en sub-bandas…' :[
        'se basa en dividir la señal en varias bandas de frecuencia y efectuar una compresión en cada una de las bandas de acuerdo a su importancia '],
    'En la matriz (8x8) resultante de aplicar la DCT:' :[
        'el valor de la esquina superior izquierda es el valor más importante ',
        'el valor de la esquina superior izquierda indica el valor del color dominante, que corresponde a la componente de continua (DC) del bloque (color promedio) ',
        'en general, cuanto más alejado de la esquina superior izquierda esté el coeficiente DCT, menos importante es desde un punto de vista perceptivo '],
    'La codificación basada en Wavelets' :[
        'es un caso especial de codificación sub-banda ',
        'el filtro paso-bajo extrae la tendencia de la señal, mientras que el filtro paso-alto extrae los detalles ',
        'los cuatro filtrados realizados son denominados LL, LH, HL y HH ',
        'está basada en la aplicación repetida de filtros de paso-alto y paso-bajo sobre una imagen de entrada '],
    'Un cuantificador de 3 bits aplicado a muestras de niveles de gris codificados con un byte/muestra proporciona un factor de compresión F de:' :[
        '2,66:1 '],
    'Un cuantificador de 4 bits aplicado a muestras de niveles de gris codificados con un byte/muestra proporciona un factor de compresión F de:' :[
        '2:1 '],
    'Un cuantificador de 2 bits aplicado a muestras de niveles de gris codificados con un byte/muestra proporciona un factor de compresión F de:' :[],
    'Caso de Estudio: Cuantificación vectorial (VQ, Vector Quantization). Al representar la curva RD al aplicar el cuantificador vectorial(VQ) a la imagen de Lena256B (con 256 niveles de gris), con el codebook pre-diseñado en la herramienta VcDemo1_4x4_min1_max12, para los diferentes bitrate/vector 4x4 (desde 1 a 12).' :[
        'Se debe obtener una curva RD como la mostrada en la figura. '],
    'Caso de Estudio: Cuantificador Escalar Uniforme (PCM). Aplicando un PCM de 1 bpp a 7 bpp para la imagen "Lena256B" con 256 niveles de gris, obtenemos los resultados que se muestran en la figura. Si de entre todos ellos, finalmente optamos por un PCM bit rate=4, ¿Cuántos niveles de gris de salida se están utilizando?. ¿Cual es el Factor de Compresión (FC) que se obtendría?.' :[
        '16 niveles de gris y FC=2:1 '],
    'En los sistemas híbridos de codificación inter-cuadro se aplica:' :[
        'la DCT ',
        'la estimación y compensación de movimiento '],
    'Caso de Estudio: Estimación y Compensación de Movimiento (Evaluación de la Ganancia de la Predicción). Seleccionando la secuencia “Vectra21Frames.yuv” (352x288), utilizando modo no Jerárquico, Full Search, tamaño de MB=16X16, (asume que se genera un vector de movimiento por MB), tamaño área de búsqueda=15, se obtienen los resultados mostrados en la figura. ¿Cuál es el coste estimado de codificar todos los Vectores de Movimiento del Frame[2]?.':[
        '871,2 bits '],
    'Caso de Estudio: Estimación y Compensación de Movimiento (Evaluación de la Ganancia de la Predicción). Seleccionando la secuencia "Vectra21Frames.yuv", utilizando modo no Jerárquico, Full Search, tamaño de MB=16x16, tamaño área de búsqueda=15, se obtienen los resultados mostrados en la figura. ¿Cuál es la Ganancia de compresión (Gp) de la imagen fd y de la imagen mcfd del Frame[2]?.':[
        'Gp(fd)=4.53; Gp(mcfd)=41.05 '],
    'Caso de Estudio: Codificación de Sub-banda (SBC, Sub-Band Coding). Aplicándole a la imagen "Lena256B" con 256 niveles de gris, una codificación en sub-banda con un modelo de descomposición en 16 bandas de frecuencia, habilitando la codificación de las sub-bandas que se generan y la codificación de entropía de los valores cuantificados, se obtienen los resultados mostrados en la figura. ¿Cuál sería la imagen con la descomposición en sub-bandas codificadas, acorde al modelo de descomposición en sub-bandas seleccionado en Decomp, y a los resultados obtenidos?.' :[],
    'Caso de Estudio: Codificación en Sub-banda (SBC, Sub-Band Coding). Al representar la curva RD obtenida para los 6 tipos diferentes comunes de descomposición en sub-bandas de una imagen, habilitando la codificación de las sub-bandas que se generan y la codificación de entropía de los valores cuantificados, y comparándolo con la sprestaciones RD que se obtendían utilizando una codificación DPCM (mismo modelo de predicción 2D que el utilizado en SBC-Subs), para la imagen "Lena256B" con 256 niveles de gris' :[],
    'Caso de Estudio: Codificación Predictiva de Muestras (DPCM). Al representar la curva RD al aplicar el DPCM a la imagen de Lena256B (con 256 niveles de gris) para todos los DPCM bitrates disponibles (1 a 6 bpp)':[],
    'La codificación de muestras…' :[
        'se utiliza únicamente información de los pixels o muestras individuales para comprimir la señal digital '],
    'Los servicios de broadcasting interactivos se caracterizan por ser:' :[
        'modelo de producción de contenidos centralizados ',
        'asimétrico ',
        'bidireccional ',
        'bidireccional y asimétrico '],
    'En una imagen existe ...' :[
        'redundancia espacial ',
        'considerable información que es irrelevante desde un punto de vista perceptivo.'],
    'Los servicios de broadcasting convencionales se caracterizan por ser:' :[
        'modelo de producción de contenidos centralizados ',
        'unireccional ',
        'punto a multipunto '],
    'Los servicios de reproducción multimedia se caracterizan por ser:' :[
        'no hay transmisión ',
        'calidad muy alta ',
        'modelo de producción de contenidos centralizados '],
    'Los servicios de monocasting compartido se caracterizan por ser:' :[
        'modelo de producción de contenidos descentralizados ',
        'amplio rango de calidades ',
        'bidireccional y asimétrico '],
    'Los sistemas de codificación sin pérdidas o reversibles....' :[
        'Adecuada para ficheros de datos, imágenes médicas ',
        'Tasas de compresión muy moderadas '],
    'En una secuencia de vídeo existe ..' :[
        'redundancia espacial ',
        'redundancia temporal '],
    'Un estándar de imagen, video o audio define:' :[
        'solo el proceso de decodificación '],
    'Dentro de una imagen, existe una significativa correlación entre muestras vecinas. Esta se denomina' :[
        'redundancia espacial '],
    '¿Cuál de los siguientes aspectos se consideran necesarios para el buen desarrollo de las aplicaciones multimedia?' :[
        'Técnicas de compresión. ',
        'Potencia de procesamiento para comprimir/descomprimir las señales. ',
        'Estándares '],
    'En un codec asimétrico....' :[
        'son los utilizados en vídeo bajo demanda ',
        'son los utilizados en la difusión de la señal de TV ',
        'el codificador es mucho más complejo y lento que el descodificador '],
    'Los servicios de comunicaciones personales se caracterizan por ser:' :[
        'bidireccional y simétrico ',
        'retraso crítico ',
        'calidad media-baja '],
    'Los sistemas de codificación con pérdidas o irreversibles....' :[
        'Adecuados para medios continuos ',
        'Mayores tasas de compresión '],
    'En una secuencia de vídeo existe ...' :[
        'redundancia espacial ',
        'redundancia temporal '],
    'En el estándar de compresión JBIG' :[
        'su aplicación objetivo son la compresión de imágenes con diferentes niveles de gris ',
        'consiste de un modelador de probabilidades y de un codificador aritmético ',
        'es un estándar de compresión sin pérdidas '],
    'El concepto de TILE en JPEG2000 permite:'  :[
        'reducir las necesidades de memoria y cómputo ',
        'dividir la imagen en bloques de igual tamaño ',
        'comprimir independientemente con sus propios parámetros de compresión '],
    'La tranformada DWT en JPEG2000'  :[
        'permite la representación en multiresolución espacial y de calidad '],
    'La transformada DWT en JPEG2000:'  :[
        'permite la representación en multiresolución espacial y de calidad '],
    'Para la compresión JPEG sin pérdidas se eligió'  :[
        'codificación diferencial + codificación Huffman o una codificación aritmética '],
    'Para la compresión JPEG con pérdidas se eligió en este orden'  :[
        'codificación basada en Transformada DCT, cuantificador, codificación de longitud de series y una codificación de entropía '],
    'Dado el diagrama de bloques de la figura ¿de qué codificador se trata?'  :[
        'JPEG2000 '],
    'Analizando las prestaciones mostradas en esta figura. ¿Qué conclusiones son ciertas?.' :[
        'JPEG2000 mejora sustancialmente las prestaciones de JPEG ',
        'JPEG XR mejora las prestaciones de JPEG ',
        'JPEG XR y JPEG2000 tienes prestaciones parecidas '],
    'En la DCT del compresor JPEG con pérdidas' :[
        'el algoritmo para el cálculo de la DCT no está especificado en el estándar ',
        'los coeficientes de la DCT son después cuantificados para hacer a la RLC más efectiva ',
        'se aplica a bloques de 8x8 '],
    'En el RLC y Entropía del compresor JPEG con pérdidas'  :[
        'el coeficiente DC se codifica diferencialmente con el coeficiente DC del bloque anterior ',
        'los códigos VLC se generan mediante codificación Huffman o codificación aritmética ',
        'los coeficientes de AC se leen en zigzag y se les aplica una RLC '],
    'En el estándar JPEG con pérdidas, a que se debe un resultado con estas prestaciones como el mostrado en estas imágenes ' :[]
    'Las mejoras del Estándar JPEG XR con respecto a JPEG son:' :[
        'también usa bloques de 4x4, 2x4 y 2x2 pixeles ',
        'soporta pixeles de hasta 32 bits ']
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
