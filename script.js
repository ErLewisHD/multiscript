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
        'se le conoce como predicción Intra ',
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
        'procesa los bloques de datos directamente en el dominio espacial ',
        'es una técnica de codificación con pérdidas ',
        'permite una decodificación muy rápida '],
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
        'se crea una imagen de predicción con la imagen actual y la imagen precedente '
        'se generan los vectores de movimiento '
        'se genera el residuo de movimiento compensado '],
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
    'Un cuantificador de 2 bits aplicado a muestras de niveles de gris codificados con un byte/muestra proporciona un factor de compresión F de:' :[
      '4:1 '],
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
    'Caso de Estudio: Codificación Predictiva de Muestras (DPCM). Al representar la curva RD al aplicar el DPCM a la imagen de Lena256B (con 256 niveles de gris) para todos los DPCM bitrates disponibles (1 a 6 bpp)' :[],
    'La codificación de muestras…' :[
        'se utiliza únicamente información de los pixels o muestras individuales para comprimir la señal digital '],
    'Los servicios de broadcasting interactivos se caracterizan por ser:' :[
        'modelo de producción de contenidos centralizados ',
        'asimétrico ',
        'bidireccional ',
        'bidireccional y asimétrico '],
    'En una imagen existe …' :[
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
    'Los sistemas de codificación sin pérdidas o reversibles….' :[
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
    'En un codec asimétrico….' :[
        'son los utilizados en vídeo bajo demanda ',
        'son los utilizados en la difusión de la señal de TV ',
        'el codificador es mucho más complejo y lento que el descodificador '],
    'Los servicios de comunicaciones personales se caracterizan por ser:' :[
        'bidireccional y simétrico ',
        'retraso crítico ',
        'calidad media-baja '],
    'Los sistemas de codificación con pérdidas o irreversibles….' :[
        'Adecuados para medios continuos ',
        'Mayores tasas de compresión '],
    'En una secuencia de vídeo existe …' :[
        'redundancia espacial ',
        'redundancia temporal ',
        'considerable información que es irrelevante desde un punto de vista perceptivo'],
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
    'En el estándar JPEG con pérdidas, a que se debe un resultado con estas prestaciones como el mostrado en estas imágenes ' :[],
    'Las mejoras del Estándar JPEG XR con respecto a JPEG son:' :[
        'también usa bloques de 4x4, 2x4 y 2x2 pixeles ',
        'soporta pixeles de hasta 32 bits '],
    'En el estándar MPEG-4/parte 2:' :[
      'la codificación basada en objetos audiovisuales permitirá fácilmente la interacción, la reusabilidad y la escalabilidad ',
      'es necesaria información que describa las relaciones espaciales (descriptor de escena) y temporales entre los objetos que forman la escena ',
      'una escena es una composición de objetos audiovisuales que puede ser modificada por el usuario '],
    'En MPEG-1 el significado funcional de la capa de Cuadro es:' :[],
    'MPEG-2 presenta los siguientes modos de escalabilidad:' :[
      'Hibrida ',
      'SNR ',
      'Partición de datos '],
    'En el control de caudal del estándar MPEG-1-2 (codificación CBR):' :[
      'la calidad de vídeo varía debido a que el factor de cuantificación se varía para alcanzar un caudal de salida constante. ',
      'El estado de ocupación del buffer es controlado a través de la variación del factor de cuantificación ',
      'los bits producidos por el codificador son almacenados en un buffer, el cual es drenado a caudal constante '],
    'En MPEG-1 los cuadros B:' :[
      'utilizan para la codificación, la información contenida en los cuadros pasado y futuro, I o P, más próximos. '
    ],
    'En el control de caudal del estándar MPEG-1-2 (codificación CBR):' :[
      'los bits producidos por el codificador son almacenados en un buffer, el cual es drenado a caudal constante '],
    'En MPEG-1-2 el coeficiente de continua (DC) de un bloque inter se cuantifica' :[
      'de la misma forma que lo hacen los coeficientes AC '],
    'El estándar H.263:' :[
      'emplea gran parte de las técnicas utilizadas por los estándares H.261 y MPEG-1 '],
    'En MPEG-1-2 la redundancia temporal se reduce/elimina en el módulo de:' :[
      'estimación y compensación de movimiento '],
    'En el estándar MPEG-2 en codificación a VBR, se obtienen las siguientes prestaciones mostradas en estas figuras para evaluar la influencia del factor Q sobre el caudal medio y la calidad. ¿Qué conclusiones son ciertas?.' :[
      'la forma de las dos gráficas está directamente relacionada con la forma en que se anulan los coeficientes de la DCT después del proceso de cuantificación '],
    'Dado el patrón de codificación de los tipos de Macrobloque (Macroblock Types) y sus vectores de movimiento asociados mostrados en estas dos figuras, este cuadro ha sido codificado como:' :[
      'P '],
    'Con respecto a la decodificación del estándar MPEG-1-2:' :[
      'no se realiza la estimación del movimiento. ',
      'es asimétrico con respecto al codificador ',
      'no es un proceso costoso computacionalmente. '],
    'En el estándar MPEG-1, la predicción bidireccional:' :[
      'realiza el proceso de estimación de movimiento dos veces '],
    'El estándar MPEG-2 es aplicable para sistemas del tipo:' :[],
    'El estándar MPEG-2 de audio (Parte 3) es una extensión del MPEG-1 donde se han añadido las siguientes características.…' :[
      'Caudales de 384 Kbit/s o menos por canal. ',
      'Frecuencias de muestreo adicionales ',
      'Sistema Multicanal (5+1) '],
    'En MPEG-1-2 algunos de los parámetros (sintaxis) más importantes de la capa de cuadro son:' :[
      'el tipo de codificación (I, P o B) '],
    'En MPEG-2, en la escalabilidad Espacial' :[
      'las capas pueden tener diferentes tamaños de cuadro, caudal de cuadros o formatos de muestreo. '],
    'En MPEG-2, en la escalabilidad Espacial:' :[
      'las capas pueden tener diferentes tamaños de cuadro, caudal de cuadros o formatos de muestreo. '],
    'En MPEG-1-2 algunos de los parámetros (sintaxis) más importantes de la capa de franja son:' :[
      'la posición de la franja dentro del cuadro ',
      'el factor de escala Q de cuantificación (MQUANT) '],
    'En MPEG-2, el impacto que tienen los errores:' :[
      'se ven amplificados por los efectos de la propagación espacial y temporal '],
    'En el estándar H.261, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del tamaño de la ventana de búsqueda. ¿Qué conclusiones son ciertas?' :[
      'aumentar el tamaño de la ventana de búsqueda aumenta el coste computacional del codificador '],
    'En MPEG-1-2 el coeficiente de continua (DC) de un bloque intra se cuantifica' :[
      'de forma diferente a como lo hacen los coeficientes AC '],
    'En el estándar MPEG-2, se obtienen las siguientes prestaciones mostradas en estas figuras para evaluar las diferentes técnicas de ocultación ante una secuencia con elevado movimiento. ¿Qué conclusiones son ciertas?:' :[
      'al tener elevado movimiento, funcionan mejor las técnicas espaciales que las temporales '],
    'El estándar H.263 se definió principalmente (originalmente) para sistemas del tipo:' :[
      'Videotelefonía/Videoconferencia a bajo caudal '],
    'En MPEG-1 el significado funcional de la capa de Bloque es:' :[],
    'En MPEG-2, en la escalabilidad de SNR:' :[
      'Las capas de mejora restantes son codificadas para mejorar la calidad básica proporcionando un mayor refinamiento de los coeficientes de la DCT de la capa básica '],
    'El estándar H.263 presenta la opción de codificación avanzada Syntaxbased arithmetic coding mode (SAC-mode), que consiste en:' :[],
    'En el estándar MPEG-1, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del tamaño de la ventana de búsqueda. ¿Qué conclusiones son ciertas?.' :[
      'aumentar el tamaño de la ventana de búsqueda aumenta el coste computacional del codificador ',
      'MPEG-1 es un códec asimétrico independientemente del tamaño de la ventana de búsqueda ',
      'aumentar el tamaño de la ventana de búsqueda no es muy eficiente en términos de RD '],
    'El estándar MPEG-2 se diseñó bajo los siguientes requisitos:' :[
      'formato de video entrelazado y progresivo '],
    'En el estándar H.263, se obtienen las siguientes prestaciones mostradas en esta figura con respecto al estándar H.261. ¿Qué conclusiones son ciertas?.' :[],
    'El estándar H.263 presenta la opción de codificación avanzada PBframes mode, que consiste en:' :[],
    'En el estándar H.261:' :[],
    'En H.261 la redundancia temporal se reduce/elimina en el módulo de:' :[
      'estimación y compensación de movimiento '],
    'El estándar MPEG-4/parte 2 está basado en el concepto de:' :[
      'Objetos Audiovisuales '],
    'El estándar MPEG-4 de audio. Características de AAC-ELD:'  :[
      'Es apto para audio-conferencias de alta calidad '],
    'En MPEG-1-2 la redundancia estadística se reduce/elimina en el módulo de:' :[],
    'El estándar H.261 utiliza las siguientes técnicas en este orden' :[]
    'En H.261 la redundancia perceptiva se reduce/elimina en el módulo de:' :[],
    'En MPEG-2, sus ejemplos de uso más conocidos son:' :[
      'TDT (televisión digital terrestre) ',
      'Sistemas basados en DVD '],
    'En el Formato 3D: Frame Compatible Stereo, …' :[
      'a este formato también se le conoce como side-by-side (top-bottom, left-right,..) ',
      'se empaquetan los píxeles de las vistas izquierda y derecha, en un único frame para ser codificado “tradicionalmente”. ',
      'cada vista tiene solo la mitad de la resolución '],
    'En el estándar H.264/AVC, los objetivos que se marcaron para su diseño fueron:' :[
      'reducir en un 50% el bit-rate para el mismo nivel de calidad con respecto a MPEG-2. '],
    'En el estándar H.264/AVC, se obtienen las siguientes prestaciones mostradas en esta figura con respecto a otros estándares. ¿Qué conclusiones son ciertas?.' :[
      'H.264/AVC obtiene un ahorro en bitrate del 50% (aprox) con respecto a MPEG-2 para un mismo nivel de calidad '],
    'En el estándar H.264/AVC, alguna de sus novedades para mejorar la eficiencia son:' :[],
    'En el estándar H.264/AVC, alguna de sus novedades para mejorar la robustez son:' :[
      'Flexible macroblock ordering (FMO)'],
    'En el estándar H.264/AVC, en la codificación de los Frames B:' :[
      'Frames B MBs pueden utilizar dos referencias ponderadas: puede ser dos del pasado, o dos del futuro, o una del pasado y otra del futuro ',
      'La selección de las dos referencias (y los frames de referencia) dependen del codificador para maximizar la eficiencia en la codificación ',
      'Frames B pueden servir como referencia(predicción) para otros frames. '],
    'En el estándar H.264/AVC, en el proceso de cuantificación:'  :[
      'se obtiene una reducción del 12.5% en bitrate conforme se incrementa en 1 el Qstep '],
    'En el estándar HEVC, su extensión MV-HEVC esta basada en el formato:' :[
      'Multi-View Video (MVV) '],
    'En el estándar HEVC, su extensión 3D-HEVC esta basada en el formato:'  :[],
    'En el estándar H.264/SVC, dado el diagrama de bloques de la figura se trata de una escalabilidad…' :[
      'Calidad/Fidelidad '],
    'Alguno de los factores críticos para el éxito del vídeo 3D son …' :[
      'Que el cliente experimente una elevada calidad sin elevados costes de migración hacía el 3D.. ',
      'Aceptación por parte de los clientes de la tecnología de display del vídeo 3D, sin fatigas ni cansancio ocular ',
      'Disponibilidad de contenidos/canales en 3D '],
    'En el estándar H.264/SVC, el precio a pagar es…' :[
      'Se obtiene la misma calidad final (con todas las capas) pero a mas bitrate ',
      'Un incremento pequeño en la complejidad de la decodificación '],
    'En el estándar H.264/AVC, en la predicción Intra-Frame:' :[
      'al bloque o MB que se está codificando se le resta la predicción realizada para él. ',
      'se realiza una predicción para ese bloque o MB basándose en los bloques o MB previamente codificados en esa imagen ',
      'solo se pueden utilizar las muestras pertenecientes al mismo Slice '],
    'El estándar H.264/MVC, …' :[
      'Explota las redundancias entre vistas utilizando la predicción inter-vista para reducir el bitrate. '],
    'En el estándar H.264/AVC, que Perfil hay que utilizar para aplicaciones de Streaming Video:' :[
      'Extended '],
    'Algunas de las mejoras del estándar HEVC con respecto a H.264/AVC son:' :[
      'Unidades de codificación (CU) de tamaños 64x64 a 8x8 ',
      'Transformadas a bloques de muestras de tamaño grande (32x32 a 4x4) ',
      '35 Modos de Predicción Intra '],
    'En el estándar H.264/SVC, la escalabilidad temporal…' :[
      'las capas de resolución temporal mayor no deben ser utilizadas para predicción de capas de resolución temporal menor ',
      'Puede ser implementada haciendo uso de frames B generalizados ',
      'Es sencilla de implementar '],
    'En el Formato 3D: 3DV (MVD+synthesis) …' :[
      'Sintetizan un número de vistas “continuo” basado sobre un limitado conjunto de vistas decodificadas '],
    'En el estándar H.264/AVC, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del uso de los frames B generalizados. ¿Qué conclusiones son ciertas?.' :[
        'El uso tradicional de frames P con una sola referencia es el que peor prestaciones obtiene ',
        'Utilizando frames B generalizados se mejoran las prestaciones con respecto a frames B clásicos. ',
        'La mejora puede sser de un 40% con respecto al uso de frames P con una sola referencia previa '],
    '¿Cuáles fueron algunas de las motivaciones para el diseño del estándar HEVC?' :[
      'Codificar eficientemente resoluciones de alta (HD) a ultra-alta definición (UHDV) de vídeo ',
      'Se necesita desarrollar una nueva tecnología de compresión de vídeo para reducir considerablemente las tasas de bits que genera la mejor configuración de H.264/AVC ',
      'Si se sigue utilizando H.264/AVC, el caudal generado por el tráfico de vídeo crecerá más rápido de lo que serán capaces de transportar las infraestructuras de transmisión '],
    'En el Formato 3D: Multiview Simulcast, …' :[
      'Codifica cada vista por separado ',
      'Permite utilizar codificadores convencionales para cada vista (MPEG-2, H.264, etc..) ',
      'No se buscan dependencias entre vistas '],
    'En el estándar H.264/AVC, que Perfil hay que utilizar para aplicaciones de VideoConferencia:' :[
      'Baseline '],
    'En el estándar H.264/AVC, ¿Qué tipo de transformada se utiliza?:' :[
      'Transformada Hadamard 4x4 '],
    'Estándar HEVC, sobre la Prediction Unit (PU)…' :[],
    'En el estándar H.264/AVC, en la predicción Intra-Frame (para las Luminancias), se calculan en este ejemplo mostrado en la figura, los 4 predictores Intra16x16 para obtener el mejor predictor de todos ellos. ¿Cuál elegiría el estándar?:' :[
      'Modo 3 '],
    'En un estándar de codificación donde la partición de los Macrobloques (asume que los cuadrados de mayor tamaño son de 16x16) para obtener el mejor residuo posible ha sido el siguiente, ¿de cuál estándar se trata?:' :[
      'H.264/AVC '],
    'En el estándar H.264/AVC, …' :[
      'Frames B pueden servir como referencia(predicción) para otros frames. ',
      'Frames B MBs pueden utilizar dos referencias ponderadas: pueden ser dos del pasado, o dos del futuro, o una del pasado y otra del futuro '],
    'En el estándar H.264/AVC, en el filtro de deblocking, si es de tipo POST FILTER:' :[
      'Operan a la salida de la decodificación y antes de mostrar el frame en pantalla '],
    'En el estándar HEVC, en las CTC (Common Test Conditions), las Estructuras de Predicción pre-definidas son:' :[
      'All Intra (AI) ',
      'Random Access (RA) ',
      'Low Delay P (LDP) y Low Delay B (LDB) '],
    'En el estándar H.264/SVC, para proporcionar eficiencia en la escalabilidad espacial se utiliza…' :[
      'Inter-Layer Intra-Prediction ',
      'Inter-Layer Residual Prediction ',
      'Inter-Layer Motion Prediction '],
    'En el Formato 3D: Conventional Stereo Video, …' :[],
    'En el estándar H.264/AVC, dada la técnica de codificación mostrada en la figura ¿Qué nombre recibe esta técnica?:' :[
      'Predicción temporal (P) basada en múltiples frames '],
    'En el estándar H.264/SVC, la escalabilidad temporal…' :[
      'Puede ser implementada haciendo uso de frames B generalizados '],
    'En el estándar H.264/AVC, en el filtro de deblocking, si es de tipo IN LOOP FILTER:' :[],
    'En el Formato 3D: 2D (Texture) + Depth, …' :[
      'El mapa de profundidad posibilita la renderización (generación) de más vistas intermedias ',
      'La información 2D puede codificarse bajo estándares tradicionales (MPEG-2, MPEG-4, H.264) ',
      'La información 2D proporciona compatibilidad con los displays solo 2D '],
    '¿Cuáles fueron los principales requisitos para el diseño del estándar HEVC?' :[
      'una considerable reducción en bitrate con respecto al H.264/AVC High Profile (para un mismo nivel de calidad). '],
    'En el estándar H.264/AVC, los objetivos que se marcaron para su diseño fueron:' :[
      'aplicable a un amplio abanico de aplicaciones ',
      'reducir en un 50% el bit-rate para el mismo nivel de calidad con respecto a MPEG-2. ',
      'buenas prestaciones en términos de resistencia a errores '],
    'El estándar H.264/SVC, la idea de SVC es…' :[
      'Poder decodificar varias versiones del vídeo, utilizando un bitstream formado por varios sub-bitstreams (extraibles) o capas. ',
      'Codificar vídeos una sola vez a muy alta calidad (espacial/temporal/fidelidad) ',
      'Adaptar los contenidos de vídeo a las características de los dispositivos de display '],
    'El estándar de compresión de audio G.722'  :[
      'Los anchos de banda son 7Khz a 48, 56 y 64 kbits/s ',
      'Utiliza codificacion en sub-bandas+ADPCM ',
      'Es una versión mejorada del G.726. '],
    'El estándar de compresión de audio G.728'  :[
      'Utiliza un codificador LD-CELP. (CELP de bajo retraso). ',
      'Utiliza cuantificación vectorial ',
      'Alcanza una calidad comparable a la G.721 pero a 16 Kbits/s '],
    'El estándar MPEG-1 de audio…'  :[
      'fue el primer estándar para la codificación de audio de calidad CD ',
      'Utiliza una codificación en sub-banda y un modelo psico-acústico ',
      'alcanza compresión explotando el fenómeno de enmascaramiento tanto en los dominios frecuencial como temporal '],
    'La transformada DWT en JPEG2000:' :[
      'permite la representación en multiresolución espacial y de calidad ',
      'se aplica a nivel de TILE ',
      'elimina el “efecto de bloques” cuando se usan factores de compresión muy altos '],
    'En el estándar de compresión para aplicaciones de fax' :[
      'las imágenes o documentos son escaneados en un formato bitonal '],
    'Analizando las prestaciones mostradas en esta figura. ¿Qué conclusiones son ciertas?.' :[
      'JPEG2000 mejora sustancialmente las prestaciones de JPEG ',
      'JPEG XR mejora las prestaciones de JPEG ',
      'JPEG XR y JPEG2000 tienes prestaciones parecidas '],
    'Dado el diagrama de bloques de la figura ¿de qué codificador se trata?' :[],
    'Las mejoras del Estándar JPEG XR con respecto a JPEG son:' :[],
    'El modo de operación de JPEG mostrado en esta figura es:' :[],
    'En el RLC y Entropía del compresor JPEG con pérdidas' :[],
    'En la DCT del compresor JPEG con pérdidas' :[
      'el algoritmo para el cálculo de la DCT no está especificado en el estándar '],
    'La transformada DWT en JPEG2000:' :[],
    'El modo de operación de JPEG mostrado en esta figura es:' :[],
    'La transformada DWT en JPEG2000:' :[],
    'En el estándar JPEG con pérdidas, se obtienen las prestaciones mostradas en esta figura cuando se aplica a la imagen “The Palace”. ¿Qué conclusiones son ciertas?.' :[],
    'El modo de operación de JPEG mostrado en esta figura es:' :[
      'codificación jerárquica '],
    'En el estándar de compresión para aplicaciones de fax' :[
      'las imágenes o documentos son escaneados en un formato bitonal '],
    'Las mejoras del Estándar JPEG XR con respecto a JPEG son:' :[
      'soporta pixeles de hasta 32 bits. ',
      'también usa bloques de 4x4, 2x4 y 2x2 pixeles '],
    'Para la compresión JPEG con pérdidas se eligió en este orden' :[
      'codificación basada en Transformada DCT, cuantificador, codificación de longitud de series y una codificación de entropía '],
    'JPEG2000 se diferencia con respecto a JPEG ¿en cuales de las siguientes características?' :[
      'usa la DWT (Transformada Wavelet) en vez de la DCT ',
      'Huffman se reemplaza por un compresor aritmético adaptativo '],
    'El concepto de TILE en JPEG2000 permite:' :[
      'dividir la imagen en bloques de igual tamaño ',
      'reducir las necesidades de memoria y cómputo ',
      'comprimirlo independientemente con sus propios parámetros de compresión '],
    'El concepto de TILE en JPEG2000 permite:' :[
      'reducir las necesidades de memoria y cómputo '],
    'En la DCT del compresor JPEG con pérdidas' :[
      'se aplica a bloques de 8x8 ',
      'el algoritmo para el cálculo de la DCT no está especificado en el estándar ',
      'los coeficientes de la DCT son después cuantificados para hacer a la RLC más efectiva '],
    'Para la compresión JPEG sin pérdidas se eligió' :[
      'codificación diferencial + codificación Huffman o una codificación aritmética '],
    'En el estándar JPEG con pérdidas, se obtienen las prestaciones mostradas en esta figura cuando se aplica a la imagen “The Palace”. ¿Qué conclusiones son ciertas?.' :[
      'la compresión aumenta al aumentar el factor de cuantificación ',
      'la compresión es en tiempo real ',
      'JPEG es un códec simétrico '],
    'El concepto de TILE en JPEG2000 permite:' :[],
    'Analizando las prestaciones mostradas en esta figura. ¿Qué conclusiones son ciertas?.' :[],
    'Las prestaciones del estándar JPEG con pérdidas' :[],
    'El control de caudal (rate control) en JPEG2000:' :[
      'se alcanza modificando el factor de cuantificación ',
      'controla la tasa de bits de salida que se desea para la imagen '],
    'Dado el diagrama de bloques de la figura ¿de qué codificador se trata?' :[
      'JPEG2000 '],
    'En el estándar de compresión JBIG' :[
      'su aplicación objetivo son la compresión de imágenes con diferentes niveles de gris '],
    'Analizando las prestaciones mostradas en esta figura. ¿Qué conclusiones son ciertas?.' :[
      'JPEG2000 mejora sustancialmente las prestaciones de JPEG '],
    'La transformada DWT en JPEG2000:' :[
      'permite la representación en multiresolución espacial y de calidad ',
      'se aplica a nivel de TILE ',
      'elimina el “efecto de bloques” cuando se usan factores de compresión muy altos '],
    'En el estándar de compresión para aplicaciones de fax' :[
      'se adopta una codificación de longitud de series seguido de una codificación Huffman ',
      'las imágenes o documentos son escaneados en un formato bitonal ',
      'se utiliza un bit por pixel '],
    'En el estándar de compresión JBIG' :[
      'es un estándar de compresión sin pérdidas ',
      'consiste de un modelador de probabilidades y de un codificador aritmético ',
      'su aplicación objetivo son la compresión de imágenes con diferentes niveles de gris '],
    'En el estándar JPEG con pérdidas, se obtienen las prestaciones mostradas en esta figura cuando se aplica a la imagen “The Palace”. ¿Qué conclusiones son ciertas?.' :[
      'JPEG es un códec simétrico '],
    'En la DCT del compresor JPEG con pérdidas' :[],
    'El modo de operación de JPEG mostrado en esta figura es:' :[],
    'Las mejoras del Estándar JPEG XR con respecto a JPEG son:' :[],
    'En la DCT del compresor JPEG con pérdidas' :[
      'el algoritmo para el cálculo de la DCT no está especificado en el estándar '],
    'En el cuantificador del compresor JPEG con pérdidas' :[
      'se utilizan matrices de cuantificación ponderadas diferentes para los bloques de luminancia y crominancia ',
      'esta es la etapa en la que se produce la mayoría de las pérdidas ',
      'las altas frecuencias se cuantifican más '],
    'En el estándar JPEG con pérdidas, a que se debe un resultado con estas prestaciones como el mostrado en estas imágenes' :[],
    'En el estándar de compresión para aplicaciones de fax' :[],
    'En el RLC y Entropía del compresor JPEG con pérdidas' :[
      'el coeficiente DC se codifica diferencialmente con el coeficiente DC del bloque anterior ',
      'los códigos VLC se generan mediante codificación Huffman o codificación aritmética ',
      'los coeficientes de AC se leen en zigzag y se les aplica una RLC '],
    'Las prestaciones del estándar JPEG con pérdidas' :[
      'es posible utilizar el estándar JPEG para comprimir secuencias de vídeo ',
      'si se permiten pequeñas degradaciones visuales, el factor de compresión puede llegar hasta 100:1 ',
      'puede alcanzar factores de compresión de entre 10:1 y 20:1, sin comprometer la calidad visual '],
    'En el cuantificador del compresor JPEG con pérdidas' :[
      'esta es la etapa en la que se produce la mayoría de las pérdidas '],
    'Analizando las prestaciones mostradas en esta figura. ¿Qué conclusiones son ciertas?.' :[
      'JPEG2000 mejora sustancialmente las prestaciones de JPEG ',
      'JPEG XR mejora las prestaciones de JPEG ',
      'JPEG XR y JPEG2000 tienes prestaciones parecidas '],
    'Dado el diagrama de bloques de la figura ¿de qué codificador se trata?' :[],
    'En el estándar JPEG con pérdidas, a que se debe un resultado con estas prestaciones como el mostrado en estas imágenes' :[
      'al uso de factores de cuantificación muy elevados '],
    'Para la compresión JPEG con pérdidas se eligió en este orden' :[],
    'En el cuantificador del compresor JPEG con pérdidas' :[],
    'El modo de operación de JPEG mostrado en esta figura es:' :[
      'codificación secuencial '],
    'El modo de operación de JPEG mostrado en esta figura es:' :[],
    'Analizando las prestaciones mostradas en esta figura. ¿Qué conclusiones son ciertas?.' :[
      'JPEG XR y JPEG2000 tienes prestaciones parecidas '],
    'Para la compresión JPEG sin pérdidas se eligió' :[],
    'Analizando las prestaciones mostradas en esta figura. ¿Qué conclusiones son ciertas?.' :[
      'JPEG XR mejora las prestaciones de JPEG '],
    'En el estándar de compresión JBIG' :[],
    'La transformada DWT en JPEG2000:' :[
      'permite la representación en multiresolución espacial y de calidad '],
    'El modo de operación de JPEG mostrado en esta figura es:' :[
      'codificación progresiva. '],
    'En el RLC y Entropía del compresor JPEG con pérdidas' :[
      'los códigos VLC se generan mediante codificación Huffman o codificación aritmética '],
    'En el RLC y Entropía del compresor JPEG con pérdidas' :[],
    'Las prestaciones del estándar JPEG con pérdidas' :[
      'puede alcanzar factores de compresión de entre 10:1 y 20:1, sin comprometer la calidad visual '],
    'En MPEG-2, en la escalabilidad Espacial:' :[
      'las capas pueden tener diferentes tamaños de cuadro, caudalde cuadros o formatos de muestreo. ',
      'permite la migración desde sistemas con baja resolución espacial a sistemas con mayores resoluciones espaciales ',
      'las capas de mejora utilizan la capa básica para proporcionar la resolución espacial completa de la señal de vídeo '],
    'En MPEG-2, la ocultación de los errores es importante:' :[
      'para corregir las zonas erróneas antes de que éstas sean referenciadas en otras imágenes de manera errónea, y así eliminar en gran parte la propagación temporal de dichos errores ',
      'para obtener una calidad aceptable de la imagen donde se producen los errores '],
    'En el estándar MPEG-2, se obtienen las siguientes prestaciones mostradas en estas figuras para evaluar las diferentes técnicas de ocultación ante una secuencia con poco movimiento. ¿Qué conclusiones son ciertas?.' :[],
    'En MPEG-1-2 la redundancia perceptiva se reduce/elimina en el módulo de:' :[],
    'En MPEG-1 el significado funcional de la capa de Grupo de Cuadros es:' :[],
    'El estándar H.263 presenta las siguientes aplicaciones usuales:' :[
      'Telemedicina (consultas médicas y diagnostico a distancia) ',
      'Video vigilancia y monitorización ',
      'Videoconferencias sobre diferentes tipos de dispositivos '],
    'En MPEG-2, en la escalabilidad de Partición de Datos:' :[],
    'En MPEG-2, en las técnicas de ocultación de errores, la Temporal con Movimiento Compensado:' :[
      'obtiene prestaciones adecuadas en áreas con movimiento moderado '],
    'Con respecto a la decodificación del estándar H.261:' :[
      'es asimétrico con respecto al codificador. ',
      'no es un proceso costoso computacionalmente. ',
      'no se realiza la estimación del movimiento. '],
    'En el estándar MPEG-2, se obtienen las siguientes prestaciones mostradas en estas figuras para evaluar las diferentes técnicas de ocultación ante una secuencia con poco movimiento. ¿Qué conclusiones son ciertas?.' :[
      'al tener poco movimiento, funcionan mejor las técnicas temporales que las espaciales ',
      'el dinámico es el que mejor funciona al adaptarse a las características espaciales y temporales de la secuencia ',
      'las frecuenciales funcionan mal, al funcionar mal en los cuadros de tipo P y B '],
    'En la codificación VBR del estándar H.261:' :[],
    'En el estándar MPEG-1, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del factor Q. ¿Qué conclusiones son ciertas?' :[
      'MPEG-1 es un códec asimétrico independientemente del Q utilizado ',
      'más del 90% de la ganancia en compresión se obtiene al utilizar factores de compresión de 15 ',
      'aumentar el factor de cuantificación por encima de 15 no es eficiente en términos de RD '],
    'En MPEG-1 el significado funcional de la capa de Cuadro es:' :[
      'unidad primaria de display '],
    'En el estándar MPEG-1, se obtienen las siguientes prestaciones mostradas en esta figura. ¿Dónde crees que está el mayor coste computacional en el codificador?' :[
      'en el proceso de estimación de movimiento, al ir aumentando el tamaño de la ventana de búsqueda se ve claramente '],
    'En el estándar H.261, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del factor Q. ¿Qué conclusiones son ciertas?' :[],
    'En MPEG-2, en la escalabilidad de SNR:' :[],
    'En el estándar MPEG-1, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del factor Q. ¿Qué conclusiones son ciertas?:' :[
      'el número de coeficientes distintos de cero por bloque varía ligeramente dependiendo de la secuencia de vídeo ',
      'el número de coeficientes distintos de cero por bloque varía ligeramente dependiendo del frame ',
      'aumentando el factor Q disminuye el número de coeficientes distintos de cero por bloque '],
    'En MPEG-1-2 algunos de los parámetros (sintaxis) más importantes de la capa de secuencia son:' :[
      'las dimensiones (horizontal y vertical) de los cuadros ',
      'la frecuencia de cuadro ',
      'la razón de aspecto de los pixels '],
    'El estándar MPEG-2 es aplicable para sistemas del tipo:' :[
      'Televisión digital estándar '],
    'Este patrón de GOP de MPEG-1 mostrado en la figura se corresponde con un patrón de:' :[
      'N=9, M=3 '],
    'En MPEG-2, en las técnicas de ocultación de errores, la Frecuencial:' :[],
    'En el estándar MPEG-2 en codificación CBR vs VBR, se obtienen las siguientes prestaciones mostradas en estas figuras para evaluar la influencia del factor Q sobre la calidad. ¿Qué conclusiones son ciertas?' :[
      'desde el punto de vista de la calidad de vídeo (de la aplicación) es más conveniente la codificación a VBR '],
    'El estándar MPEG-1 se diseñó bajo los siguientes requisitos:' :[
      'formato SIF ',
      'formato de muestreo 4:2:0 ',
      'conseguir compresiones óptimas en el rango entre 1 a 1.5 Mbps. '],
    'En el estándar MPEG-4/parte 2, un VOP (Video Object Plane):' :[],
    'En el estándar MPEG-1, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del tamaño de la ventana de búsqueda. ¿Qué conclusiones son ciertas?.' :[
      'aumentar el tamaño de la ventana de búsqueda no es muy eficiente en términos de RD '],
    'El soporte de almacenamiento elegido por el estándar MPEG-2 fue:' :[
      'DVD '],
    'En MPEG-2, en las técnicas de ocultación de errores, la Temporal Simple:' :[
      'obtiene prestaciones adecuadas en áreas estáticas '],
    'En MPEG-2, en las técnicas de ocultación de errores, la Espacial:' :[],
    'En MPEG-1-2 algunos de los parámetros (sintaxis) más importantes de la capa de secuencia son:' :[],
    'El estándar H.261 utiliza las siguientes técnicas en este orden' :[
      'un sistema híbrido de codificación inter-cuadro, un cuantificador, un codificador de longitud de series y un codificador de entropía '],
    'En MPEG-1-2 algunos de los parámetros (sintaxis) más importantes de la capa de cuadro son:' :[],
    'En H.261 la redundancia temporal se reduce/elimina en el módulo de:' :[],
    'En el estándar H.261, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del tamaño de la ventana de búsqueda. ¿Qué conclusiones son ciertas?' :[],
    'Con respecto al estándar H.261:' :[
      'fue el primer estándar de codificación de vídeo con cierta adopción comercial. '],
    'En el estándar H.261, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del tamaño de la ventana de búsqueda. ¿Qué conclusiones son ciertas?' :[
      'aumentar el tamaño de la ventana de búsqueda no es muy eficiente en términos de RD ',
      'H.261 es un códec asimétrico independientemente del tamaño de la ventana de búsqueda utilizado. ',
      'aumentar el tamaño de la ventana de búsqueda aumenta el coste computacional del codificado '],
    'En MPEG-1-2 la capa de franja:' :[
      'está compuesta por un número determinado de Macrobloques. ',
      'permite hacer al sistema más robusto frente a errores ',
      'al comienzo de cada una de las franjas, las predicciones son puestos a cero '],
    'El estándar H.261 presenta las siguientes características:' :[
      'un formato de muestreo 4:2:0 y un formato de colores YCbCr '],
    'El estándar H.263:' :[],
    'Con respecto al estándar H.261:' :[],
    'En MPEG-1-2 algunos de los parámetros (sintaxis) más importantes de la capa de cuadro son:' :[
      'el tipo de codificación (I, P o B) ',
      'el rango de los vectores de movimiento. ',
      'la referencia temporal del cuadro '],
    'En el estándar MPEG-1, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del Patrón de GOP (PG). ¿Qué conclusiones son ciertas?.' :[
      'el patrón BP obtiene el mejor compromiso coste computacional/prestaciones RD '],
    'En MPEG-1 los tamaños relativos de cada tipo de cuadro, en general cumplen que:' :[
      'un cuadro P ocupa entre 2-5 veces el tamaño de un B '],
    'En MPEG-2, el diseño de las técnicas de ocultación de errores:' :[],
    'En MPEG-1-2, dado el orden de presentación del siguiente GOP 1I- 2B-3B-4P-5B-6B-7P-8B-9B-10I-11B-12B-13P, ¿Cuál sería su orden de codificación?:' :[
      '1I-4P-2B-3B-7P-5B-6B-10I-8B-9B-13P-11B-12B '],
    'En el estándar H.261, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia del tamaño de la ventana de búsqueda. ¿Qué conclusiones son ciertas?' :[
      'H.261 es un códec asimétrico independientemente del tamaño de la ventana de búsqueda utilizado. '],
    'El estándar MPEG-1 se diseñó bajo los siguientes requisitos:' :[],
    'En MPEG-1 los cuadros I:' :[],
    'En MPEG-1 el significado funcional de la capa de Franja es: ':[
      'unidad de sincronización '],
    'En MPEG-1 los tamaños relativos de cada tipo de cuadro, en general cumplen que:' :[
      'los cuadros B son los que menos ocupan '],
    'En MPEG-2, en las técnicas de ocultación de errores, la Temporal con Movimiento Compensado:' :[
      'obtiene prestaciones reducidas en imágenes de tipo I ',
      'obtiene prestaciones reducidas en cambios de escena ',
      'obtiene prestaciones adecuadas en áreas con movimiento moderado '],
    'El estándar H.261 presenta las siguientes características:' :[
      'un formato de muestreo 4:2:0 y un formato de colores YCbCr ',
      'el formato de tamaño vídeo utilizado es CIF o QCIF ',
      'debe comprimir imágenes en movimiento a un caudal de 15 cuadros por segundo '],
    'El soporte de almacenamiento elegido por el estándar MPEG-1 fue:' :[
      'CD '],
    'En MPEG-1-2 la redundancia espacial se reduce/elimina en el módulo de:' :[
      'DCT '],
    'En MPEG-1 el significado funcional de la capa de Macrobloque es:' :[],
    'En el estándar MPEG-4/parte 2, cuales de las siguientes son técnicas de resistencia a errores:' :[
      'partición de datos ',
      'marcas de sincronización (Video Packets) ',
      'códigos VLC reversibles '],
    'En el estándar MPEG-4/parte 2, un Macrobloque lleva información codificada sobre:' :[
      'el movimiento de la parte del objeto que codifica ',
      'la forma de la parte del objeto que codifica ',
      'la textura de la parte del objeto que codifica '],
    'En el estándar MPEG-2 en codificación CBR vs VBR, se obtienen las siguientes prestaciones mostradas en estas figuras para evaluar la influencia del factor Q sobre la calidad. ¿Qué conclusiones son ciertas?' :[
      'para garantizar una calidad de vídeo mínima, en VBR se necesita un menor caudal medio de bits (recursos de la red) que en CBR ',
      'desde el punto de vista de la calidad de vídeo (de la aplicación) es más conveniente la codificación a VBR ',
      'para un mismo caudal medio de bits, la calidad de vídeo y su consistencia, en VBR es mayor que en CBR '],
    'El estándar H.263:' :[
      'emplea gran parte de las técnicas utilizadas por los estándares H.261 y MPEG-1 '],
    'En MPEG-1, la precisión de ½ de pixel en la estimación y compensación de movimiento:' :[
      'aumenta el coste computacional',
      'obtiene mejores residuos (menores errores de predicción) ',
      'permite una mayor precisión en la estimación del movimiento '],
    'El estándar H.263 presenta las siguientes diferencias con respecto a H.261:' :[],
    'En el estándar MPEG-4/parte 2:' :[
      'la codificación basada en objetos audiovisuales permitirá fácilmente la interacción, la reusabilidad y la escalabilidad ',
      'es necesaria información que describa las relaciones espaciales (descriptor de escena) y temporales entre los objetos que forman la escena ',
      'una escena es una composición de objetos audiovisuales que puede ser modificada por el usuario '],
    'Dada una aplicación, los esquemas de compresión pueden explotar …… los factores de redundancia existentes, para alcanzar el nivel de compresión deseado' :[
      'todos '],
    'En una imagen existe ...' :[
      'redundancia espacial '],
    'Los parámetros característicos más habituales de una señal de audio calidad de Voz (Telefonía) son:' :[
      'Señal de audio de 3.5 KHz (BW) ',
      '8 bits/muestra ',
      'Sf = 8 KHz '],
    'Cuáles son las características del formato HDTV 1080i':[
      'video entrelazado ',
      '1080x1920 '],
    'Considerando una señal de audio de voz (calidad telefónica). ¿Cuál es el número de bits generados en un segundo?' :[
      '64 Kbps '],
    'En vídeo progresivo…' :[
      'las líneas adyacentes espacialmente también lo son temporalmente ',
      'no existe el concepto de campo, y sólo existe el de cuadro '],
    'Cuál es el tamaño de las imágenes en el formato CCIR/SD (NTSC)':[
      '720x480 '],
    'Si la idea es la de comprimir la señal, se puede obtener ahorro del ancho de banda si se trabaja con luminancias y crominancias debido a:' :[
      'que el ojo humano es más sensible al brillo (luminancia), y no tanto a la diferencia de color (crominancias) '],
    'Técnicas y estándares de codificación y compresión que proporcionan calidad CD Digital son:' :[
      'AAC ',
      'MP3 '],
    'Cuál es el tamaño de las imágenes en el formato 4CIF' :[
      '704x576 '],
    'Dada una imagen en color formada por 768 x 1024 pixeles. El número de bits aproximados generados por dicha imagen es' :[
      '18,874 Mbits '],
    'En el formato de muestreo 4:1:1' :[
      'las señales de crominancia son muestreadas a un cuarto de frecuencia que las de luminancia, en la dirección horizontal '],
    'Cuáles son las características del formato HDTV 720p' :[
      'video progresivo ',
      '720x1280 '],
    'Técnicas y estándares de codificación y compresión que proporcionan calidad de Voz (Telefonía) son:' :[
      'G.72x ',
      'ADPCM '],
    'El caudal de bits de una señal digital se define como:' :[
      'el producto entre la frecuencia de muestreo y el número de bits utilizados para representar el valor de las muestras en el proceso de cuantificación '],
    'En el proceso de cuantificación de una señal, cuanto mayor sea el número de niveles (bits utilizados por muestra)...' :[
      'menor será el error de cuantificación, pero mayor espacio ocupará su representación digital '],
    'Las aplicaciones multimedia basadas en datos continuos presentan':[
      'mayores requerimientos (retardos, sincronismo, etc) que las basadas en datos discretos '],
    'En el formato de muestreo 4:2:0' :[
      'las señales de crominancia son muestreadas a la mitad de frecuencia que las de luminancia, tanto en la dirección horizontal como en la vertical '],
    'Considerando una señal de audio estéreo de alta fidelidad en CD. ¿Cuál es el número de bits generados en un segundo?' :[
      '1.410 Kbps '],
    'Cuál es el tamaño de las imágenes en el formato CIF' :[
      '352x288 '],
    'Cuál es el tamaño de las imágenes en el formato 4K' :[
      '3840x2160 '],
    'Cuál es el tamaño de las imágenes en el formato 8K' :[
      '7680x4320 '],
    'La gama de frecuencias perceptibles por el oído humano está en el rango de frecuencias de' :[
      '20­20.000 Hz '],
    'Considerando el formato de vídeo CIF que consta de 288 líneas con 360 pixeles cada línea, por imagen y un caudal de frames de 30 fps. ¿Cuál es el número de bits generados en un segundo?':[
      '74,65 Mbits/s '],
    'La forma digital de una señal se obtiene de su forma analógica original realizando..' :[
      'muestreo + cuantificación + codificación '],
    'La percepción de la calidad de una señal de vídeo digital se basa en los siguientes parámetros:' :[
      'la resolución de las imágenes (tamaño) ',
      'la frecuencia de reproducción (cuadros/s) '],
    'Para la señal de audio de alta fidelidad en CD, el rango de frecuencias que se considera a la señal de audio es' :[
      '20­20.000 Hz ',
      '20­-20.000 Hz '],
    'Un factor de compresión (F) de 3:1 significa:' :[
      'el tamaño comprimido ocupa la tercera parte con respecto al tamaño original '],
    '¿Cuál de los siguientes son datos multimedia de tipo continuo?' :[
      'audio ',
      'vídeo '],
    'Cuál es el tamaño de las imágenes en el formato CCIR/SD (PAL)' :[
      '720x576 '],
    'En vídeo entrelazado…' :[
      'las líneas que son espacialmente adyacentes no lo son temporalmente ',
      'cada cuadro es dividido en dos campos, un campo alto y un campo bajo, separados temporalmente por un periodo de campo '],
    'En vídeo entrelazado …' :[],
    'En las aplicaciones multimedia actuales se utiliza' :[
      'la forma digital de las señales audiovisuales '],
    'Los parámetros característicos más habituales de una señal de audio calidad CD Digital son:' :[
      '16 bits/muestra ',
      'Sf = 41.1 KHz ',
      'Señal de audio de 20 KHz (BW) '],
    'En el formato de muestreo 4:2:2' :[
      'las señales de crominancia son muestreadas a la mitad de frecuencia que las de luminancia, en la dirección horizontal '],
    '¿Cuál de los siguientes son datos multimedia de tipo discreto?' :[
      'imágenes estáticas ',
      'gráficos ',
      'texto '],
    'Cuáles son las características del formato HDTV 1080p' :[
      '1080x1920 ',
      'video progresivo '],
    'El uso de otro espacio de colores representa una aplicación de la codificación' :[
      'Perceptiva '],
    'Cuál es el tamaño de las imágenes en el formato QCIF' :[
      '176x144 '],
    'Cuál es el tamaño de las imágenes en el formato Sub-QCIF' :[
      '128x96 '],
    'La métrica PSNR …' :[
      'a mayor PSNR mayor es la calidad ',
      'no siempre se ajusta eficientemente a la calidad subjetiva observada por el sistema visual humano ',
      'es ampliamente utilizada en la bibliografía '],
    'En el formato de muestreo 4:4:4' :[
      'la luminancia y las crominancias son muestreadas a la misma frecuencia, y por tanto, no existe ahorro del ancho de banda '],
    'En las comunicaciones telefónicas, el rango de frecuencias que presenta la voz humana es' :[
      '200­3.200 Hz ',
      '200­-3.200 Hz'],
    'Las aplicaciones multimedia se caracterizan por …' :[
      'Requieren servicios de transporte de alta calidad. ',
      'Consumen muchos recursos (red, memoria, CPU, etc.). ',
      'Se hace imprescindible el uso de técnicas de compresión '],
    'En las aplicaciones multimedia, el requisito de latencia extremo a extremo se hace más estricto conforme' :[
      'aumenta la interactividad de la aplicación Multimedia '],
    'Cuál es el tamaño de las imágenes en el formato Sub­QCIF':[],
    'Un factor de compresión (F) de 10:1 significa:' :[
      'el tamaño comprimido ocupa la décima parte con respecto al tamaño original '],
    'Según el teorema de muestreo de Nyquist, para obtener una representación digital adecuada de una señal analógica, la frecuencia de muestreo debe de ser' :[
      'El doble de la frecuencia más alta presente en la señal analógica '],
    'La codificación predictiva:' :[
      'es una técnica de compresión sin pérdidas ',
      'predice el valor de una muestra a través de su vecindad espacial o temporal ',
      'reduce la redundancia espacio-temporal de las señales ',
      'codifica sólo la diferencia entre los valores predichos y los valores actuales que tengan las muestras '],
    'La Codificación de Longitud de Series, (RLC):' :[
      'es una técnica útil cuando se esperan largas sucesiones de un mismo valor (usualmente cero) entre cualquier otro par de valores '],
    'La codificación perceptiva…' :[
      'se basa en el conocimiento de la percepción psico-visual y psico-acústica '],
    'La codificación basada en Wavelets: A la subbanda …. se le denomina subbanda wavelet' :[
      'LL '],
    'Los sistemas híbridos de codificación inter-cuadro son un método con el que se pretende' :[
      'eliminar la redundancia espacial ',
      'eliminar la redundancia temporal '],
    'La codificación por transformada…' :[
      'transforman la información a otro dominio donde los datos están mucho más de-correlados que en el dominio espacial, y la información se acumula en un pequeño número de muestras '],
    'El estándar MPEG-2 de audio (Parte 7)/ACC.…' :[
        'Fue diseñado para ser el sucesor de MP3 ',
        'Soporta asta 48 canales de audio ',
        'No es backward compatible con MPEG-1 '],
    'El fenómeno de enmascaramiento en el oído humano…' :[
        'además del enmascaramiento frecuencial existe el enmascaramiento temporal ',
        'gana importancia cuando los sonidos son cercanos en frecuencia y la frecuencia enmascaradora es inferior que la enmascarada '],
    'El estándar de compresión de audio G.721/G.726'  :[
      'G.721 fue sustituido por el G.726 el cual permite codificación en caudales de 16,24,32 y 40 Kbit/s ',
      'Ambos utilizan ADPCM y tienen una calidad ligeramente inferior al G.711 ',
      'G.721 es un estándar para la codificación de la voz a 32 kbit/s '],
    'El estándar MPEG-4 de audio. Características de AAC-LD:' :[
        'Es apto para audio-conferencias de alta calidad ',
        'Es un códec de audio solo para estéreo ',
        'Apto oara audio-conferencias de alta calidad ',
        'Es de bajo retraso '],
    'Los codificadores preceptúales de compresión de audio se basan en los siguientes fenómenos'  :[
      'El fenómero de enmascaramiento ',
      'La curva de sensibilidad del oído'],
    'El estándar MPEG-1 de audio. Su modelo psico-acústico…'  :[
        'Obtiene los umbrales de enmascaramiento para cada sub-banda ',
        'Su coste computacional es elevado ',
        'Es la clave de su funcionamiento ']
    'El estándar de compresión de audio G.729'  :[
        'Codifica muestras PCM muestreada a 8Khz a un caudal de 8 Kbit/s ',
        'Fue motivado para la transmisión de voz sobre redes inalámbricas ',
        'Utiliza un CS-ACELP '],
    'El estándar MPEG-4 de audio. Características de HE-AACv2:' :[],
    'El estándar MPEG-4 de audio. Características de HE-AAC:' :[],
    'La curva de sensibilidad del oído humano…' :[
      'nos indica que nuestro oído es muy sensible a frecuencias entre 2 y 4 KHz (aprox) ',
      'es la curva que indica cual es la potencia mínima (umbral) que una frecuencia necesita para ser detectada por nuestro oido '],
    '¿Qué parámetros controlan la calidad y el caudal de bits de la señal de audio digital?.' :[
      'Número de canales de audio ',
      'Frecuencia de muestreo (44.1, 48, 96, 192 kHz). ',
      'Número de bits por muestra de audio (8, 16, 24 bits). '],
    'El estándar MPEG-4 de audio. Características de AAC-ELDv2:'  :[
      'Es un códec de aucio solo para estéreo ',
      'Es apto para audio-conferencias de alta calidad '],
    'Los estándares de compresión de audio G.72x' :[
        'alcanzan su compresión realizando codificaciones predictivas en la mayría de los casos ',
        'realizan una codificación eficiente de la voz humana sobre canales de ancho de banda limitado. '],
    'Los estándares de compresión de audio G.727' :[
      'Utiliza un ADPCM mejorado (EADPCM). ',
      'Codifica muestras PCM muestreadas a 8 Khz a caudales de 40, 32, 24 y 16 kbits/s. '],
    'El estándar MPEG-1 de audio. Sus capas de codificación…' :[
      'La Capa I es la más simple de todas. Sólo considera en enmascaramiento frecuencial ',
      'La Capa III (formato mp3) es la más compleja y optimizada de las tres ',
      'La Capa II considera además del enmascaramiento frecuencial, el enmascaramiento temporal'],
    'El estándar de compresión de audio G.723.1'  :[
      'G.723.1 es estándar de facto para la codificación de voz en Internet ',
      'Para generar el caudal de 6.3 Kbit/s utiliza un codificador MPMLQ ',
      'Codifica muestras PCM muestreadas a 8 Khz a caudales de 5.3 y 6.3 Kbit/s '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.310 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[
      'Solo puede contener un único programa '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.321 '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.323 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Puede contener varios programas '],
    'La parte de Sistemas del estándar MPEG-1 (11172-1) ofrece:' :[],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[],
    'La parte de Sistemas del estándar MPEG-1 (11172-1) ofrece:' :[
      'Multiplexación y sincronización de los flujos de audio y vídeo ',
      'Añade sintaxis para el control temporal de los flujos '],
    'El sistema H.321 se utiliza para' :[
      'Videoconferencia sobre RDSI-BA, calidad media-alta '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Puede contener varios programas '],
    'El sistema H.323 se utiliza para' :[
      'Videoconferencia sobre IP/Ethernet, calidad media-baja '],
    'El sistema H.324 se utiliza para' :[
      'Videoconferencia sobre la RTB/Celular, calidad baja '],
    'La Recomendación del ITU-T H.241:' :[
      'Se definió para incluir H.264/AVC/SVC en las versión revisada de H.324 Se definió para incluir H.264/AVC/SVC en la versiones revisadas de H.323, H.324, H.320 (entre otras) ',
      'Se definió en el año 2012 '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.324 '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.320 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[
      'Longitud variable de paquetes ',
      'Utilizado en condiciones donde no hay errores ',
      'Solo puede contener un único programa '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.321 '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.320 '],
    'El sistema H.310 se utiliza para' :[
      'Videoconferencia MPEG-2 sobre RDSI-BA, calidad alta '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[],
    'La Recomendación del ITU-T H.241 (2012):' :[
      'Se definió para incluir H.264/AVC/SVC en la versión revisada de H.320 ',
      'Se definió para incluir H.264/AVC/SVC en la versión revisada de H.323 ',
      'Se definió para incluir H.264/AVC/SVC en la versión revisada de H.324 Se realizó en el año 2012 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.324 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[
      'Solo puede contener un único programa '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Longitud de paquetes 188 bytes ',
      'Utilizado en condiciones donde hay errores ',
      'Puede contener varios programas '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[
      'Solo puede contener un único programa '],
    'El sistema H.321 se utiliza para' :[
      'Videoconferencia sobre RDSI-BA, calidad media-alta '],
    'La parte de Sistemas del estándar MPEG-1 (11172-1) ofrece:' :[],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[
      'Solo puede contener un único programa '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Puede contener varios programas '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.323 '],
    'La Recomendación del ITU-T H.241:' :[
      'Se definió para incluir H.264/AVC/SVC en las versión revisada de H.324 Se definió para incluir H.264/AVC/SVC en la versiones revisadas de H.323, H.324, H.320 (entre otras) ',
      'Se definió en el año 2012 '],
    'La parte de Sistemas del estándar MPEG-1 (11172-1) ofrece:' :[
      'Multiplexación y sincronización de los flujos de audio y vídeo ',
      'Añade sintaxis para el control temporal de los flujos '],
    'El sistema H.323 se utiliza para' :[
      'Videoconferencia sobre IP/Ethernet, calidad media-baja '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.310 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[
      'Solo puede contener un único programa ',
      'Longitud variable de paquetes ',
      'Utilizado en condiciones donde no hay errores '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.321 '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.324 '],
    'La Recomendación del ITU-T H.241 (2012):' :[
      'Se definió para incluir H.264/AVC/SVC en la versión revisada de H.323 ',
      'Se definió para incluir H.264/AVC/SVC en la versión revisada de H.320 ',
      'Se definió para incluir H.264/AVC/SVC en la versión revisada de H.324 Se realizó en el año 2012 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[
      'Solo puede contener un único programa '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Puede contener varios programas '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.320 '],
    'El sistema H.324 se utiliza para' :[
      'Videoconferencia sobre la RTB/Celular, calidad baja '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Utilizado en condiciones donde hay errores ',
      'Puede contener varios programas ',
      'Longitud de paquetes 188 bytes '],
    'La parte de Sistemas del estándar MPEG-1 (11172-1) ofrece:' :[],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Puede contener varios programas '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.321 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Puede contener varios programas '],
    'La Recomendación del ITU-T H.241:' :[
      'Se definió para incluir H.264/AVC/SVC en las versión revisada de H.324 Se definió para incluir H.264/AVC/SVC en la versiones revisadas de H.323, H.324, H.320 (entre otras) ',
      'Se definió en el año 2012 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Transport Stream se caracteriza por:' :[
      'Utilizado en condiciones donde hay errores ',
      'Puede contener varios programas ',
      'Longitud de paquetes 188 bytes '],
    'La parte de Sistemas del estándar MPEG-1 (11172-1) ofrece:' :[
      'Añade sintaxis para el control temporal de los flujos ',
      'Multiplexación y sincronización de los flujos de audio y vídeo '],
    'El sistema H.310 se utiliza para' :[
      'Videoconferencia MPEG-2 sobre RDSI-BA, calidad alta '],
    'Dada la arquitectura del sistema mostrada en la figura, se trata de la recomendación:' :[
      'H.310 '],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[],
    'La parte de Sistemas del estándar MPEG-2 (13818-1), un Program Stream se caracteriza por:' :[
      'Solo puede contener un único programa '],
    'Los servicios de broadcasting convencionales se caracterizan por ser:' :[
      'unireccional '],
    'Los servicios de broadcasting convencionales se caracterizan por ser:' :[
      'punto a multipunto ',
      'unireccional ',
      'modelo de producción de contenidos centralizados '],
    'Los sistemas de codificación con pérdidas o irreversibles….' :[],
    'Los sistemas de codificación con pérdidas o irreversibles….' :[
      'Adecuados para medios continuos ',
      'Mayores tasas de compresión '],
    'Dentro de una imagen, existe una significativa correlación entre muestras vecinas. Esta se denomina' :[
      'redundancia espacial '],
    'Un estándar de imagen, video o audio define:' :[],
    'Un estándar de imagen, video o audio define:' :[
      'solo el proceso de decodificación '],
    'En un codec asimétrico….' :[
      'son los utilizados en vídeo bajo demanda ',
      'son los utilizados en la difusión de la señal de TV ',
      'el codificador es mucho más complejo y lento que el descodificador '],
    'En una imagen existe …' :[
      'considerable información que es irrelevante desde un punto de vista perceptivo. ',
      'redundancia espacial '],
    'En una imagen existe ...' :[
      'redundancia espacial '],
    'Los servicios de monocasting compartido se caracterizan por ser:' :[
      'modelo de producción de contenidos descentralizados ',
      'bidireccional y asimétrico ',
      'amplio rango de calidades '],
    'Los servicios de monocasting compartido se caracterizan por ser:' :[
      'modelo de producción de contenidos descentralizados '],
    'Los servicios de comunicaciones personales se caracterizan por ser:' :[
      'bidireccional y simétrico '],
    'Los servicios de comunicaciones personales se caracterizan por ser:' :[
      'bidireccional y simétrico ',
      'calidad media-baja ',
      'retraso crítico '],
    'Los servicios de broadcasting interactivos se caracterizan por ser:' :[
      'asimétrico ',
      'modelo de producción de contenidos centralizados ',
      'bidireccional '],
    'Los servicios de broadcasting interactivos se caracterizan por ser:' :[
      'bidireccional y asimétrico '],
    'Los servicios de reproducción multimedia se caracterizan por ser:' :[
      'no hay transmisión '],
    'Los servicios de reproducción multimedia se caracterizan por ser:' :[
      'modelo de producción de contenidos centralizados ',
      'calidad muy alta ',
      'no hay transmisión '],
    '¿Cuál de los siguientes aspectos se consideran necesarios para el buen desarrollo de las aplicaciones multimedia?' :[
      'Estándares ',
      'Potencia de procesamiento para comprimir/descomprimir las señales. ',
      'Técnicas de compresión. '],
    'Los sistemas de codificación sin pérdidas o reversibles….' :[],
    'Los sistemas de codificación sin pérdidas o reversibles….' :[
      'Tasas de compresión muy moderadas ',
      'Adecuada para ficheros de datos, imágenes médicas '],
    'En una secuencia de vídeo existe ..' :[
      'redundancia temporal ',
      'redundancia espacial '],
    'En una secuencia de vídeo existe …' :[
      'considerable información que es irrelevante desde un punto de vista perceptivo ',
      'redundancia temporal ',
      'redundancia espacial '],
    'En secuencias de vídeo, hay una significativa correlación entre muestras pertenecientes a cuadros vecinos. Esta se denomina' :[
      'redundancia temporal '],
    'Dada una aplicación, los esquemas de compresión pueden explotar …… los factores de redundancia existentes, para alcanzar el nivel de compresión deseado' :[
      'todos '],
    'En el proceso de cuantificación de una señal, cuanto mayor sea el número de niveles (bits utilizados por muestra)...' :[
      'menor será el error de cuantificación, pero mayor espacio ocupará su representación digital '],
    'En las aplicaciones multimedia actuales se utiliza' :[
      'la forma digital de las señales audiovisuales '],
    'En vídeo progresivo…' :[
      'no existe el concepto de campo, y sólo existe el de cuadro ',
      'las líneas adyacentes espacialmente también lo son temporalmente '],
    'En vídeo progresivo…' :[],
    'Considerando una señal de audio estéreo de alta fidelidad en CD. ¿Cuál es el número de bits generados en un segundo?' :[
      '1.410 Kbps '],
    'La forma digital de una señal se obtiene de su forma analógica original realizando..' :[
      'muestreo + cuantificación + codificación '],
    'Las aplicaciones multimedia basadas en datos continuos presentan' :[
      'mayores requerimientos (retardos, sincronismo, etc) que las basadas en datos discretos '],
    'Cuál es el tamaño de las imágenes en el formato Sub-QCIF' :[],
    'Cuál es el tamaño de las imágenes en el formato CIF' :[],
    'Cuál es el tamaño de las imágenes en el formato CIF' :[
      '352x288 '],
    '¿Cuál de los siguientes son datos multimedia de tipo continuo?' :[],
    '¿Cuál de los siguientes son datos multimedia de tipo continuo?' :[
      'vídeo '],
    'Un factor de compresión (F) de 3:1 significa:' :[
      'el tamaño comprimido ocupa la tercera parte con respecto al tamaño original ']
    'En el estándar H.264/AVC, los objetivos que se marcaron para su diseño fueron:' :[],
    'En el estándar H.264/AVC, en la predicción Intra-Frame (para las Luminancias), se calculan en este ejemplo mostrado en la figura, los 9 predictores Intra4x4 para obtener el mejor predictor de todos ellos. ¿Cuál elegiría el estándar?:' :[
      'Modo 7 '],
    'En el Formato 3D: Multiview Vídeo (MVV), …' :[
      'El estándar H.264/MVC utiliza este formato '],
    'En el estándar H.264/AVC, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar la influencia de la partición del MB. ¿Qué conclusiones son ciertas?.' :[
      'Aproximadamente el 80% de la ganancia se obtiene utilizando MB de 8x8 o mayores ',
      'El modo 4x4 no proporciona prácticamente mejora en PSNR ',
      'El modo 4x4 no proporciona prácticamente ganancia de compresión ',
      'Utilizando los 7 tamaños de MB se comprime un 16% (aprox) más comparado a usar solo 16x16. ',
      'Utilizando los 7 tamaños de MB se comprime un 16% mas comparado a usar solo 16x16. '],
    'El estándar H.264/MVC, sobre sus prestaciones, …' :[
      'Explotar la redundancia entre vistas proporciona solo una reducción del bitrate de un 25% aprox. ',
      'Es más eficiente que simulcast ',
      'El caudal con MVC es todavía bastante proporcional al número de vistas '],
    'En el estándar H.264/SVC, se obtienen las siguientes prestaciones mostradas en esta figura para evaluar el uso de la escalabilidad espacial . ¿Qué conclusiones son ciertas?' :[
      'El uso de las técnicas de Inter-Layer Prediction son las responsables de la eficiencia de SVC ',
      'SVC mejora sustancialmente las prestaciones frente a la versión Simulcast ',
      'Aun se puede mejorar las prestaciones de SVC si se optimizara más la codificación '],
    'En un estándar de codificación donde la partición de los Macrobloques (asume que los cuadrados de mayor tamaño son de 16x16) para obtener el mejor residuo posible ha sido el siguiente, ¿de cuál estándar se trata?:' :[
      'H.264/AVC '],
    'En el estándar H.264/AVC, para decidir que tamaño de MB utiliza:':[
      'selecciona “la mejor” partición posible para maximizar la eficiencia de la codificación '],
    'En el estándar HEVC, en las CTC (Common Test Conditions), en la Estructura de Predicción All Intra (AI):' :[
      'Es apto para aplicaciones de Post-producción y Edición (necesidad de acceso a cada frame de alta calidad). '],
    'En el estándar HEVC, en las CTC (Common Test Conditions), en la Estructura de Predicción Random-Access (RA):' :[
      'Es una configuración adecuada para aplicaciones con elevada eficiencia de codificación pero con un elevado retraso debido al reordenamiento de frames (Brodcasting y Streaming) ',
      'Se utiliza una estructura de predicción jerarquica con frames de tipo B. ',
      'Se introduce periódicamente un frame de tipo I (IntraPeriod) para eliminar la propagación de errores y permitir acceso aleatorio. '],
    'El estándar H.264/SVC, los tipos de escalabilidad básicos soportados son:' :[
      'Espacial ',
      'Temporal ',
      'Fidelidad/Calidad '],
    'En el estándar H.264/AVC, en el filtro de deblocking, si es de tipo POST FILTER:' :[
      'Libertad de implementación en el decodificador ',
      'No necesitan estar estandarizados ',
      'Operan a la salida de la decodificación y antes de mostrar el frame en pantalla '],
    'En el estándar HEVC, se obtienen las siguientes prestaciones mostradas en esta figura con respecto a estándares previos . ¿Qué conclusiones son ciertas?.' :[
      'MPEG-2 a pesar de ser muy utilizado actualmente (TV Digital SD), está muy desfasado tecnológicamente. ',
      'HEVC mejora considerablemente las prestaciones de estándares previos ',
      'Obtiene un ahorro del bitrate del 50% con respecto a su predecesor H.264/AVC '],
    'El estándar H.264/MVC, entre sus aplicaciones comerciales más conocida se encuentran' :[
      'Películas 3D en Blu-Ray Disc '],
    'El estándar H.264/SVC, permite…' :[
      'Permite adaptar las características del vídeo a las diferentes características de los dispositivos receptores ',
      'Codificar vídeos una sola vez a muy alta calidad y poder decodificar varias versiones del vídeo. '],
    'En el estándar HEVC, en las CTC (Common Test Conditions), en la Estructura de Predicción All Intra (AI):' :[
      'Es una configuración adecuada para aplicaciones con elevado bitrate y bajo retraso '],
    '¿Cuáles fueron los principales requisitos para el diseño del estándar HEVC?' :[
      'una considerable reducción en bitrate con respecto al H.264/AVC High Profile (para un mismo nivel de calidad). '],
    'En el estándar H.264/AVC, la predicción Intra-Frame (para las Crominancias):' :[
      'Utiliza 4 predictores direccionales Intra16x16. '],
    'En el estándar HEVC, en las CTC (Common Test Conditions), en las Estructuras de Predicción Low Delay P (LDP) y Low Delay B (LDB):' :[
      'LDP: Se utiliza solo la primera imagen de tipo I, y el resto son de tipo P. LDB: Se utiliza solo la primera imagen de tipo I, y el resto son de tipo B. ',
      'Adecuadas para aplicaciones de bajo retraso y adecuada eficiencia de codificación (LDB>LDP).Videoconferencia. ',
      'En LDP y LDB, no se permite reordenamiento de fotogramas (Low Delay), solo pueden usarse predicciones con respecto al pasado (P-unipredictiva, B-bipredictiva). '],
    'En el estándar H.264/AVC, en el filtro de deblocking, si es de tipo IN LOOP FILTER:' :[
      'Operan en el lazo del codificador donde los frames son utilizados para la estimación y compensación de movimiento ',
      'Mejora objetiva y subjetiva de la calidad al aplicarse antes de la estimación de movimiento ',
      'Necesitan estar estandarizados '],
    ''





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
                        i++
                    }
                }
            }
        });
        i++
    }
})
