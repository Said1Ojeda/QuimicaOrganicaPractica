// tema 1 alcanos
(window.TEMAS = window.TEMAS || []).push({
  id: 'alcanos',
  n: 1,
  titulo: 'Alcanos',
  corto: 'Alcanos',
  familia: 'saturados',

  teoria: [
    '<p><b>Alcanos</b> son hidrocarburos <b>saturados</b>: solo tienen enlaces simples C–C y C–H. Fórmula general <span class="formula">C<sub>n</sub>H<sub>2n+2</sub></span>.</p>',
    '<ul>',
    '<li>Cada carbono es <b>sp³</b>, tetraédrico, ángulos de 109.5°.</li>',
    '<li>Sufijo <b>-ano</b>. Prefijos por número de C: met (1), et (2), prop (3), but (4), pent (5), hex (6), hept (7), oct (8), non (9), dec (10).</li>',
    '<li>Un alcano sin un H se vuelve <b>grupo alquilo</b> y termina en <b>-il</b> o <b>-ilo</b>: metil, etil, propil, isopropil, terc-butil.</li>',
    '<li>Carbonos <b>primarios</b> (unidos a 1 C), <b>secundarios</b> (2 C), <b>terciarios</b> (3 C) y <b>cuaternarios</b> (4 C).</li>',
    '<li>Son poco reactivos. Sus reacciones típicas son la <b>combustión</b> y la <b>halogenación por radicales</b> con luz.</li>',
    '</ul>',
    '<div class="nota-caja">Idea clave: más carbonos, mayor punto de ebullición. Más ramificado, menor punto de ebullición.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: busca la cadena continua más larga. Si hay empate, elige la que tenga más sustituyentes.',
      '<b>Numeración</b>: numera desde el extremo que dé el número más bajo al primer sustituyente (primer punto de diferencia).',
      '<b>Sustituyentes</b>: nombra cada grupo alquilo con su número. Si se repite usa di, tri, tetra y separa los números con comas.',
      '<b>Orden alfabético</b>: ordena los sustituyentes por orden alfabético. Los prefijos di, tri, sec y terc no cuentan, pero iso sí.',
      '<b>Escribe el nombre</b>: números separados de letras con guion, y el nombre de la cadena al final, todo junto. Ejemplo 3-etil-2-metilhexano.'
    ],
    ejemplos: [
      {
        s: 'CC(C)CC(C)(C)C',
        c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>3</sub>',
        nom: '2,2,4-trimetilpentano',
        pasos: [
          'Cadena más larga: 5 carbonos, es un <b>pentano</b>.',
          'Desde la derecha los metilos quedan en 2, 2 y 4. Desde la izquierda quedarían en 2, 4 y 4.',
          'Primer punto de diferencia: 2,2,4 contra 2,4,4. En la segunda posición gana el 2, así que se numera desde la derecha.',
          'Tres metilos iguales llevan el prefijo <b>tri</b>.'
        ]
      },
      {
        s: 'CCC(CC)C(C)CC',
        c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>2</sub>CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        nom: '3-etil-4-metilhexano',
        pasos: [
          'Cadena más larga: 6 carbonos, es un <b>hexano</b>.',
          'Desde cualquier extremo los sustituyentes quedan en 3 y 4, hay empate.',
          'Ante empate se da el número menor al sustituyente que va primero en orden alfabético. <b>Etil</b> va antes que metil, así que el etil queda en 3.',
          'Se escriben en orden alfabético, primero etil y luego metil.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Combustión completa',
      reactivos: 'Alcano + O<sub>2</sub> en exceso',
      condiciones: 'Chispa o llama',
      producto: 'CO<sub>2</sub> + H<sub>2</sub>O + energía',
      regla: 'Oxidación total'
    },
    {
      nombre: 'Cloración por radicales',
      reactivos: 'Alcano + Cl<sub>2</sub>',
      condiciones: 'Luz (hν) o calor',
      producto: 'Cloroalcano + HCl, mezcla de isómeros',
      regla: 'Sustitución por radicales, poco selectiva'
    },
    {
      nombre: 'Bromación por radicales',
      reactivos: 'Alcano + Br<sub>2</sub>',
      condiciones: 'Luz (hν) o calor',
      producto: 'Bromoalcano en el C más sustituido + HBr',
      regla: 'Sustitución selectiva, terciario &gt; secundario &gt; primario',
      s: 'CC(C)(C)Br',
      c: '2-bromo-2-metilpropano, a partir de 2-metilpropano'
    },
    {
      nombre: 'Hidrogenación de alquenos (obtención)',
      reactivos: 'Alqueno + H<sub>2</sub>',
      condiciones: 'Pt, Pd o Ni',
      producto: 'Alcano con el mismo número de C',
      regla: 'Adición, se satura el doble enlace'
    },
    {
      nombre: 'Síntesis de Wurtz (obtención)',
      reactivos: '2 R–X + 2 Na',
      condiciones: 'Éter seco',
      producto: 'R–R + 2 NaX',
      regla: 'Acoplamiento, se duplica la cadena'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: sube con la masa molar porque aumentan las fuerzas de London. Del C1 al C4 son gases, del C5 al C17 líquidos y desde C18 sólidos.',
    '<b>Ramificación</b>: entre isómeros, el más ramificado hierve a menor temperatura porque es más compacto y tiene menos superficie de contacto. Pentano 36 °C, 2-metilbutano 28 °C, 2,2-dimetilpropano 9.5 °C.',
    '<b>Solubilidad</b>: son no polares. Insolubles en agua y solubles en disolventes no polares como hexano o éter.',
    '<b>Densidad</b>: menor que la del agua, por eso flotan.',
    '<b>Acidez</b>: prácticamente nula, pKa cercano a 50.'
  ],

  errores: [
    'Elegir la cadena que se ve horizontal y no la más larga. La cadena principal puede doblar esquinas.',
    'Numerar desde el extremo equivocado. Compara números en el primer punto de diferencia, no por la suma.',
    'Ordenar los sustituyentes por número o contar el di como letra. En 4-etil-2,2-dimetilhexano se compara e con m.',
    'Escribir 2-etilbutano. Un etil en el carbono 2 siempre alarga la cadena, ese compuesto es 3-metilpentano.',
    'Olvidar comas entre números y guiones entre número y letra. Se escribe 2,3-dimetilbutano.',
    'Pensar que el cloro es selectivo. El bromo sí elige el carbono más sustituido, el cloro da mezclas.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Alcano', reverso: 'Solo enlaces simples C–C<br><b>C<sub>n</sub>H<sub>2n+2</sub></b><br>Sufijo -ano' },
    { cat: 'sufijo', frente: 'Sufijo <b>-ano</b>', reverso: 'Alcano<br>Ejemplo propano' },
    { cat: 'sufijo', frente: 'Terminación <b>-il</b> o <b>-ilo</b>', reverso: 'Grupo alquilo, un alcano al que le falta un H<br>Ejemplo metil CH<sub>3</sub>–' },
    { cat: 'prefijo', frente: 'Prefijos del 1 al 5', reverso: 'met, et, prop, but, pent' },
    { cat: 'prefijo', frente: 'Prefijos del 6 al 10', reverso: 'hex, hept, oct, non, dec' },
    { cat: 'prefijo', frente: '<b>iso</b>, <b>sec</b>, <b>terc</b>', reverso: 'Isopropil (CH<sub>3</sub>)<sub>2</sub>CH–<br>sec-butil CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)–<br>terc-butil (CH<sub>3</sub>)<sub>3</sub>C–' },
    { cat: 'reaccion', frente: 'Alcano + Br<sub>2</sub> con luz', reverso: 'Sustitución por radicales<br>El Br entra en el C más sustituido' },
    { cat: 'reaccion', frente: 'Alcano + O<sub>2</sub>', reverso: 'Combustión<br>CO<sub>2</sub> + H<sub>2</sub>O' }
  ],

  ejercicios: [
    {
      id: 'alc-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre IUPAC de este compuesto?',
      mol: { s: 'CC(C)CC', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['2-metilbutano', '3-metilbutano', '2-etilpropano', 'pentano'], ok: 0,
      exp: [
        'La cadena más larga tiene 4 carbonos, es un butano.',
        'Se numera desde el extremo más cercano al metil, que queda en el C2.',
        '3-metilbutano numera al revés y 2-etilpropano no usa la cadena más larga.'
      ]
    },
    {
      id: 'alc-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC de este compuesto.',
      mol: { s: 'CCC(C)CC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      resp: ['3-metilpentano'],
      exp: [
        'Cadena más larga de 5 carbonos, pentano.',
        'El metil queda en el C3 desde cualquier extremo.',
        'Nombre 3-metilpentano.'
      ]
    },
    {
      id: 'alc-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es la estructura del <b>2,2-dimetilpropano</b>?',
      nom: '2,2-dimetilpropano',
      op: [
        { s: 'CC(C)(C)C', c: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'CC(C)CC', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'CCCCC', c: 'CH<sub>3</sub>–(CH<sub>2</sub>)<sub>3</sub>–CH<sub>3</sub>' },
        { s: 'CC(C)C(C)C', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>3</sub>' }
      ], ok: 0,
      exp: [
        'Propano es una cadena de 3 carbonos.',
        'Dos metilos en el C2 significa que el carbono central lleva los dos.',
        'El C2 queda unido a 4 carbonos, es un carbono cuaternario.'
      ]
    },
    {
      id: 'alc-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'CC(C)C(C)CC', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['2,3-dimetilpentano', '3,4-dimetilpentano', '2-metil-3-metilpentano', '2,3-metilpentano'], ok: 0,
      exp: [
        'Cadena más larga de 5 carbonos, pentano.',
        'Desde la izquierda los metilos quedan en 2 y 3, desde la derecha en 3 y 4. Gana 2,3.',
        'Dos sustituyentes iguales se agrupan con el prefijo di.'
      ]
    },
    {
      id: 'alc-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC de este compuesto.',
      mol: { s: 'CCC(CC)C(C)C', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>2</sub>CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
      resp: ['3-etil-2-metilpentano'],
      exp: [
        'La cadena más larga tiene 5 carbonos, pentano.',
        'Numerando desde el extremo del metil, los sustituyentes quedan en 2 y 3.',
        'En orden alfabético va primero etil y luego metil, 3-etil-2-metilpentano.'
      ]
    },
    {
      id: 'alc-06', tipo: 'error', nivel: 2,
      q: 'Alguien nombró este compuesto como <b>2-etilbutano</b>. ¿Cuál es el error?',
      mol: { s: 'CCC(C)CC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: [
        'No eligió la cadena más larga. Son 5 carbonos y el nombre correcto es 3-metilpentano',
        'Numeró desde el extremo equivocado, debía ser 3-etilbutano',
        'Faltó ordenar los sustituyentes alfabéticamente',
        'El etil debía escribirse como etano'
      ], ok: 0,
      exp: [
        'Si sigues la cadena a través del etil, obtienes 5 carbonos seguidos.',
        'Con la cadena de 5 C solo queda un metil en el C3.',
        'Regla práctica, un etil en el C2 nunca es correcto porque alarga la cadena.'
      ]
    },
    {
      id: 'alc-07', tipo: 'grupo', nivel: 1,
      q: '¿A qué familia pertenece este compuesto?',
      mol: { s: 'CCCCCC', c: 'CH<sub>3</sub>–(CH<sub>2</sub>)<sub>4</sub>–CH<sub>3</sub>' },
      op: ['Alcano', 'Alqueno', 'Alquino', 'Cicloalcano'], ok: 0,
      exp: [
        'Solo tiene enlaces simples entre carbonos.',
        'Es una cadena abierta, no un anillo.',
        'Es el hexano, C<sub>6</sub>H<sub>14</sub>, que cumple C<sub>n</sub>H<sub>2n+2</sub>.'
      ]
    },
    {
      id: 'alc-08', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición. Toca en orden.',
      items: [
        { t: 'hexano', s: 'CCCCCC' },
        { t: '2-metilpentano', s: 'CC(C)CCC' },
        { t: '2,2-dimetilbutano', s: 'CC(C)(C)CC' }
      ],
      exp: [
        'Los tres son C<sub>6</sub>H<sub>14</sub>, tienen la misma masa.',
        'A más ramificación, forma más compacta y menos superficie para las fuerzas de London.',
        'Hexano 69 °C, 2-metilpentano 60 °C, 2,2-dimetilbutano 50 °C.'
      ]
    },
    {
      id: 'alc-09', tipo: 'ordenar', nivel: 1,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: 'pentano', s: 'CCCCC' },
        { t: 'butano', s: 'CCCC' },
        { t: 'propano', s: 'CCC' },
        { t: 'metano', s: 'C' }
      ],
      exp: [
        'En alcanos lineales el punto de ebullición sube con el número de carbonos.',
        'Más masa y más superficie dan fuerzas de London más fuertes.',
        'Pentano 36 °C, butano −0.5 °C, propano −42 °C, metano −162 °C.'
      ]
    },
    {
      id: 'alc-10', tipo: 'vf', nivel: 1,
      q: 'Los alcanos son solubles en agua porque son moléculas pequeñas.',
      ok: false,
      exp: [
        'Falso. Los alcanos son no polares y solo tienen fuerzas de London.',
        'El agua es polar y forma puentes de hidrógeno, que un alcano no puede formar.',
        'Lo semejante disuelve a lo semejante, se disuelven en disolventes no polares.'
      ]
    },
    {
      id: 'alc-11', tipo: 'vf', nivel: 2,
      q: 'El 2,2-dimetilpropano tiene menor punto de ebullición que el pentano.',
      ok: true,
      exp: [
        'Verdadero. Ambos son C<sub>5</sub>H<sub>12</sub>.',
        'El 2,2-dimetilpropano es casi esférico y tiene poca superficie de contacto.',
        'Hierve a 9.5 °C y el pentano a 36 °C.'
      ]
    },
    {
      id: 'alc-12', tipo: 'reaccion', nivel: 1,
      q: '¿Qué productos da la combustión completa del metano?',
      reac: 'CH<sub>4</sub> + 2 O<sub>2</sub> → ?',
      op: ['CO<sub>2</sub> + 2 H<sub>2</sub>O', 'CO + H<sub>2</sub>O', 'CH<sub>3</sub>OH', 'C + 2 H<sub>2</sub>O'], ok: 0,
      exp: [
        'Combustión completa significa oxígeno suficiente.',
        'Todo el carbono termina como CO<sub>2</sub> y todo el hidrógeno como H<sub>2</sub>O.',
        'CO u hollín aparecen solo si falta oxígeno, combustión incompleta.'
      ]
    },
    {
      id: 'alc-13', tipo: 'reaccion', nivel: 2,
      q: '¿Cuál es el producto principal?',
      reac: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>3</sub> + Br<sub>2</sub> <small>(luz)</small> → ?',
      prod: 'CC(Br)C',
      op: ['2-bromopropano', '1-bromopropano', '1,3-dibromopropano', 'propeno'], ok: 0,
      exp: [
        'Es una sustitución por radicales, un H se cambia por Br.',
        'El bromo es selectivo y prefiere el radical más estable, el secundario.',
        'El Br entra en el C2, se forma 2-bromopropano.'
      ]
    },
    {
      id: 'alc-14', tipo: 'reaccion', nivel: 3,
      q: '¿Cuál es el producto principal de la bromación del 2-metilpropano con luz?',
      reac: '(CH<sub>3</sub>)<sub>3</sub>CH + Br<sub>2</sub> <small>(hν)</small> → ?',
      prod: 'CC(C)(C)Br',
      op: ['2-bromo-2-metilpropano', '1-bromo-2-metilpropano', '2-bromobutano', '1-bromobutano'], ok: 0,
      exp: [
        'El 2-metilpropano tiene un solo H en un carbono terciario.',
        'El radical terciario es el más estable y el bromo lo elige casi siempre.',
        'El Br queda en el C2 junto al metil, 2-bromo-2-metilpropano.'
      ]
    },
    {
      id: 'alc-15', tipo: 'reaccion', nivel: 2,
      q: '¿Qué se obtiene al hidrogenar propeno?',
      reac: 'CH<sub>3</sub>–CH=CH<sub>2</sub> + H<sub>2</sub> <small>(Pt)</small> → ?',
      prod: 'CCC',
      op: ['propano', 'ciclopropano', '2-propanol', 'propino'], ok: 0,
      exp: [
        'El H<sub>2</sub> se suma al doble enlace con ayuda del catalizador.',
        'Cada carbono del doble enlace gana un H.',
        'Se obtiene el alcano con los mismos 3 carbonos, propano.'
      ]
    },
    {
      id: 'alc-16', tipo: 'reaccion', nivel: 3,
      q: 'Síntesis de Wurtz con bromoetano. ¿Qué alcano se forma?',
      reac: '2 CH<sub>3</sub>–CH<sub>2</sub>–Br + 2 Na <small>(éter seco)</small> → ?',
      prod: 'CCCC',
      op: ['butano', 'etano', 'propano', 'eteno'], ok: 0,
      exp: [
        'En Wurtz se unen dos grupos alquilo y el Na se lleva el halógeno.',
        'Dos etilos de 2 C se unen y dan 4 C.',
        'El producto es butano más 2 NaBr.'
      ]
    },
    {
      id: 'alc-17', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es la estructura del <b>3-etil-2-metilhexano</b>?',
      nom: '3-etil-2-metilhexano',
      op: [
        { s: 'CC(C)C(CC)CCC', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(C<sub>2</sub>H<sub>5</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'CCC(C)C(CC)CC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH(C<sub>2</sub>H<sub>5</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'CC(C)CC(CC)CC', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(C<sub>2</sub>H<sub>5</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'CC(C)C(C)CCC', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>' }
      ], ok: 0,
      exp: [
        'Dibuja primero la cadena de 6 carbonos.',
        'Coloca un metil en el C2 y un etil en el C3.',
        'Comprueba que la cadena más larga siga siendo de 6 y que no haya otra con más sustituyentes.'
      ]
    },
    {
      id: 'alc-18', tipo: 'escribir', nivel: 3,
      q: 'Escribe el nombre IUPAC de este compuesto.',
      mol: { s: 'CCC(C)(C)CC(C)C', c: 'CH<sub>3</sub>–CH<sub>2</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
      resp: ['2,4,4-trimetilhexano'],
      exp: [
        'Cadena más larga de 6 carbonos, hexano.',
        'Desde la derecha los metilos quedan en 2, 4 y 4. Desde la izquierda en 3, 3 y 5.',
        'En el primer punto de diferencia gana el 2, nombre 2,4,4-trimetilhexano.'
      ]
    },
    {
      id: 'alc-19', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'CC(C)CC(CC)CCC', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(C<sub>2</sub>H<sub>5</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['4-etil-2-metilheptano', '2-metil-4-etilheptano', '4-etil-6-metilheptano', '2-metil-4-propilhexano'], ok: 0,
      exp: [
        'La cadena más larga pasa por el propilo y tiene 7 carbonos, heptano.',
        'Desde el extremo del metil quedan 2 y 4, desde el otro 4 y 6. Gana 2,4.',
        'En orden alfabético etil va antes que metil.'
      ]
    },
    {
      id: 'alc-20', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró como <b>2-metil-4-etilhexano</b>. ¿Cuál es el error?',
      mol: { s: 'CC(C)CC(CC)CC', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(C<sub>2</sub>H<sub>5</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: [
        'Los sustituyentes van en orden alfabético, el correcto es 4-etil-2-metilhexano',
        'La cadena principal tiene 7 carbonos',
        'La numeración debía ser 3-etil-5-metil',
        'Faltó el prefijo di'
      ], ok: 0,
      exp: [
        'La cadena de 6 C y la numeración 2,4 están bien.',
        'El problema es el orden, la e de etil va antes que la m de metil.',
        'Nombre correcto 4-etil-2-metilhexano.'
      ]
    },
    {
      id: 'alc-21', tipo: 'vf', nivel: 2,
      q: 'El 2-metilbutano tiene exactamente un carbono terciario.',
      ok: true,
      exp: [
        'Verdadero. Un C terciario está unido a otros 3 carbonos.',
        'En el 2-metilbutano, el C2 está unido al C1, al C3 y al metil.',
        'Los demás carbonos son primarios o secundarios.'
      ]
    },
    {
      id: 'alc-22', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es la estructura del <b>butano</b>?',
      nom: 'butano',
      op: [
        { s: 'CCCC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'CC(C)C', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
        { s: 'CCC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'CCCCC', c: 'CH<sub>3</sub>–(CH<sub>2</sub>)<sub>3</sub>–CH<sub>3</sub>' }
      ], ok: 0,
      exp: [
        'But significa 4 carbonos.',
        'Sin números ni sustituyentes, es la cadena lineal.',
        'El ramificado de 4 C es el 2-metilpropano, un isómero del butano.'
      ]
    },
    {
      id: 'alc-23', tipo: 'vf', nivel: 3,
      q: 'En la halogenación por radicales el bromo es más selectivo que el cloro.',
      ok: true,
      exp: [
        'Verdadero. El paso con bromo es más lento y lento significa más selectivo.',
        'El bromo forma casi solo el producto del C más sustituido.',
        'El cloro reacciona rápido y da mezclas de isómeros.'
      ]
    },
    {
      id: 'alc-24', tipo: 'grupo', nivel: 1,
      q: '¿Cuál de estas fórmulas corresponde a un alcano?',
      op: ['C<sub>7</sub>H<sub>16</sub>', 'C<sub>7</sub>H<sub>14</sub>', 'C<sub>7</sub>H<sub>12</sub>', 'C<sub>6</sub>H<sub>6</sub>'], ok: 0,
      exp: [
        'Los alcanos cumplen C<sub>n</sub>H<sub>2n+2</sub>.',
        'Con n igual a 7 da 2(7)+2, que son 16 hidrógenos.',
        'C<sub>7</sub>H<sub>14</sub> sería alqueno o cicloalcano y C<sub>6</sub>H<sub>6</sub> es el benceno.'
      ]
    }
  ]
});
