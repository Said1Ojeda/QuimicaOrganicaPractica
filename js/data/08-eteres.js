// tema 8 eteres
(window.TEMAS = window.TEMAS || []).push({
  id: 'eteres',
  n: 8,
  titulo: 'Éteres',
  corto: 'Éteres',
  familia: 'oxigenados',

  teoria: [
    '<p>Los <b>éteres</b> tienen un oxígeno unido a dos grupos carbonados, <span class="formula">R–O–R′</span>. Son isómeros de los alcoholes con el mismo número de C.</p>',
    '<ul>',
    '<li>IUPAC los nombra como <b>alcoxialcanos</b>: el grupo pequeño con O es el prefijo (metoxi, etoxi) y el grande la cadena principal.</li>',
    '<li>Nombre común: los dos grupos en orden alfabético + <b>éter</b>. Ejemplo etil metil éter, dietil éter.</li>',
    '<li>No tienen H unido al O, así que <b>no forman puentes de hidrógeno</b> entre ellos. Sí aceptan puentes del agua.</li>',
    '<li>Son <b>poco reactivos</b>, por eso sirven como disolventes. Solo se rompen con HI o HBr concentrados.</li>',
    '<li><b>Éteres cíclicos</b>: oxirano (epóxido, anillo de 3) y tetrahidrofurano (THF, anillo de 5).</li>',
    '</ul>',
    '<div class="nota-caja">Seguridad: el dietil éter es muy inflamable y con el tiempo forma peróxidos explosivos.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Elige la cadena principal</b>: el grupo con más carbonos.',
      '<b>El otro grupo</b> con el O se vuelve prefijo alcoxi: metoxi, etoxi, propoxi, isopropoxi.',
      '<b>Numeración</b>: la cadena principal se numera para que el alcoxi tenga el número más bajo.',
      '<b>Orden alfabético</b>: si hay más sustituyentes, el alcoxi se ordena con ellos.',
      '<b>Nombre común</b>: grupo + grupo + éter en orden alfabético. Si son iguales, di. Ejemplo dietil éter.'
    ],
    ejemplos: [
      {
        s: 'CCCOC',
        c: 'CH<sub>3</sub>–O–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        nom: '1-metoxipropano',
        pasos: [
          'Los grupos son metilo (1 C) y propilo (3 C).',
          'El propilo es la cadena principal, propano.',
          'El metilo con el O se vuelve metoxi, en el C1.',
          'Nombre 1-metoxipropano. Nombre común metil propil éter.'
        ]
      },
      {
        s: 'CC(C)OC',
        c: 'CH<sub>3</sub>–O–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        nom: '2-metoxipropano',
        pasos: [
          'Grupos metilo e isopropilo.',
          'La cadena principal es el propano.',
          'El metoxi está en el C central, C2.',
          'Nombre 2-metoxipropano. Nombre común isopropil metil éter.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Síntesis de Williamson (obtención)',
      reactivos: 'R–O<sup>−</sup>Na<sup>+</sup> + R′–X',
      condiciones: 'R′–X metílico o primario',
      producto: 'R–O–R′ + NaX',
      regla: 'SN2'
    },
    {
      nombre: 'Deshidratación de alcoholes (obtención)',
      reactivos: '2 R–OH',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub>, 140 °C',
      producto: 'R–O–R + H<sub>2</sub>O, éter simétrico',
      regla: 'Sustitución. A 180 °C sale alqueno'
    },
    {
      nombre: 'Ruptura con HI o HBr',
      reactivos: 'R–O–R′ + HI en exceso',
      condiciones: 'Calor',
      producto: 'R–I + R′–I + H<sub>2</sub>O',
      regla: 'Sustitución en el C–O'
    },
    {
      nombre: 'Apertura de epóxidos',
      reactivos: 'Oxirano + H<sub>2</sub>O',
      condiciones: 'H<sub>3</sub>O<sup>+</sup>',
      producto: '1,2-diol',
      regla: 'Apertura por tensión del anillo',
      s: 'OCCO',
      c: 'Oxirano da 1,2-etanodiol'
    },
    {
      nombre: 'Autoxidación',
      reactivos: 'Éter + O<sub>2</sub> del aire',
      condiciones: 'Luz y tiempo',
      producto: 'Peróxidos',
      regla: 'Peligro, son explosivos'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: mucho más bajo que el del alcohol isómero y parecido al del alcano de masa similar. Dietil éter 35 °C, pentano 36 °C, 1-butanol 118 °C.',
    '<b>Solubilidad</b>: los pequeños son algo solubles en agua porque el O acepta puentes de hidrógeno. Dietil éter cerca de 7 g por 100 mL.',
    '<b>Polaridad</b>: ligeramente polares por el ángulo C–O–C de unos 110°.',
    '<b>Reactividad</b>: no reaccionan con bases, Na metálico ni oxidantes suaves.',
    '<b>Uso</b>: disolventes, el THF y el éter se usan para preparar reactivos de Grignard.'
  ],

  errores: [
    'Poner el grupo grande como alcoxi. El prefijo es el grupo pequeño: metoxietano y no etoximetano.',
    'Pensar que un éter hierve como un alcohol. Sin H en el O no hay puentes de hidrógeno entre éteres.',
    'En Williamson, usar haluro terciario. Da eliminación. El halógeno debe estar en el grupo menos impedido.',
    'Olvidar que la deshidratación a 140 °C da éter y a 180 °C da alqueno.',
    'Confundir éter con éster. El éster tiene C=O junto al O.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Éter', reverso: 'R–O–R′<br>Se nombra como alcoxialcano', s: 'CCOCC' },
    { cat: 'prefijo', frente: 'Prefijo <b>alcoxi</b>', reverso: 'metoxi CH<sub>3</sub>O–<br>etoxi CH<sub>3</sub>CH<sub>2</sub>O–' },
    { cat: 'sufijo', frente: 'Nombre común <b>... éter</b>', reverso: 'Grupos en orden alfabético + éter<br>Ejemplo etil metil éter' },
    { cat: 'reaccion', frente: 'Alcóxido + haluro primario', reverso: 'Síntesis de Williamson<br>Éter' },
    { cat: 'reaccion', frente: '2 alcoholes + H<sub>2</sub>SO<sub>4</sub> a 140 °C', reverso: 'Éter simétrico' },
    { cat: 'reaccion', frente: 'Éter + HI en exceso', reverso: 'Se rompe en dos yoduros de alquilo' }
  ],

  ejercicios: [
    {
      id: 'et-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre de este compuesto?',
      mol: { s: 'COC', c: 'CH<sub>3</sub>–O–CH<sub>3</sub>' },
      op: ['metoximetano (dimetil éter)', 'etanol', 'metanol', 'etanal'], ok: 0,
      exp: [
        'Un O unido a dos metilos, es un éter.',
        'Un metilo es la cadena principal y el otro el metoxi.',
        'Metoximetano o dimetil éter. El etanol es su isómero.'
      ]
    },
    {
      id: 'et-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC o el común.',
      mol: { s: 'CCOCC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–O–CH<sub>2</sub>–CH<sub>3</sub>' },
      resp: ['etoxietano', 'dietil éter', 'dietiléter', 'éter dietílico'],
      exp: [
        'Dos grupos etilo unidos al O.',
        'IUPAC, uno es etano y el otro etoxi, etoxietano.',
        'Nombre común dietil éter, el éter de los laboratorios.'
      ]
    },
    {
      id: 'et-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es el <b>metoxietano</b>?',
      nom: 'metoxietano',
      op: [
        { s: 'CCOC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–O–CH<sub>3</sub>' },
        { s: 'CCCO', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH' },
        { s: 'COC', c: 'CH<sub>3</sub>–O–CH<sub>3</sub>' },
        { s: 'CCOCC', c: 'C<sub>2</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub>' }
      ], ok: 0,
      exp: [
        'Etano es la cadena principal de 2 C.',
        'Metoxi es CH<sub>3</sub>–O– unido a ella.',
        'CH<sub>3</sub>CH<sub>2</sub>–O–CH<sub>3</sub>. El 1-propanol es un isómero, no un éter.'
      ]
    },
    {
      id: 'et-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CCCOC', c: 'CH<sub>3</sub>–O–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['1-metoxipropano', 'propoximetano', '2-metoxipropano', '1-etoxietano'], ok: 0,
      exp: [
        'El grupo más grande, propilo, es la cadena principal.',
        'El metilo con el O es metoxi.',
        'Está en el C1, 1-metoxipropano.'
      ]
    },
    {
      id: 'et-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC(C)OC', c: 'CH<sub>3</sub>–O–CH(CH<sub>3</sub>)<sub>2</sub>' },
      resp: ['2-metoxipropano'],
      exp: [
        'Grupos metilo e isopropilo.',
        'Cadena principal propano.',
        'El metoxi en el C2, 2-metoxipropano.'
      ]
    },
    {
      id: 'et-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CCOC1CCCCC1', c: 'C<sub>6</sub>H<sub>11</sub>–O–CH<sub>2</sub>CH<sub>3</sub>' },
      op: ['etoxiciclohexano', 'ciclohexiloxietano', '1-etoxihexano', 'etoxibenceno'], ok: 0,
      exp: [
        'El anillo de 6 C es mayor que el etilo, es la cadena principal.',
        'El etilo con el O se vuelve etoxi.',
        'Un solo sustituyente en el anillo, sin número, etoxiciclohexano.'
      ]
    },
    {
      id: 'et-07', tipo: 'grupo', nivel: 1,
      q: '¿Qué grupo funcional tiene?',
      mol: { s: 'CCOCC', c: 'C<sub>2</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub>' },
      op: ['Éter', 'Alcohol', 'Cetona', 'Aldehído'], ok: 0,
      exp: [
        'El O está entre dos carbonos.',
        'No hay –OH ni C=O.',
        'Es un éter, R–O–R.'
      ]
    },
    {
      id: 'et-08', tipo: 'grupo', nivel: 2,
      q: '¿Cómo se clasifica este compuesto?',
      mol: { s: 'C1CCOC1', c: 'C<sub>4</sub>H<sub>8</sub>O' },
      op: ['Éter cíclico', 'Alcohol cíclico', 'Cetona cíclica', 'Cicloalcano'], ok: 0,
      exp: [
        'El O forma parte del anillo y está entre dos C.',
        'No tiene OH ni C=O.',
        'Es el tetrahidrofurano (THF), un éter cíclico.'
      ]
    },
    {
      id: 'et-09', tipo: 'reaccion', nivel: 2,
      q: 'Etanol con ácido sulfúrico a 140 °C. ¿Producto?',
      reac: '2 CH<sub>3</sub>CH<sub>2</sub>OH <small>(H<sub>2</sub>SO<sub>4</sub>, 140 °C)</small> → ?',
      prod: 'CCOCC',
      op: ['dietil éter (etoxietano)', 'eteno', 'etanal', 'ácido etanoico'], ok: 0,
      exp: [
        'A 140 °C una molécula de etanol ataca a otra protonada.',
        'Se pierde una molécula de agua entre las dos.',
        'Se forma dietil éter. A 180 °C saldría eteno.'
      ]
    },
    {
      id: 'et-10', tipo: 'reaccion', nivel: 3,
      q: 'Dietil éter con exceso de HI y calor. ¿Productos?',
      reac: 'CH<sub>3</sub>CH<sub>2</sub>–O–CH<sub>2</sub>CH<sub>3</sub> + HI <small>(exceso, calor)</small> → ?',
      op: ['2 CH<sub>3</sub>CH<sub>2</sub>I + H<sub>2</sub>O', 'CH<sub>3</sub>CH<sub>2</sub>OH + CH<sub>3</sub>CH<sub>3</sub>', 'CH<sub>2</sub>=CH<sub>2</sub> + HI', 'No reacciona'], ok: 0,
      exp: [
        'El HI protona el O y el I<sup>−</sup> rompe un enlace C–O.',
        'Sale yodoetano y etanol.',
        'Con exceso de HI el etanol también pasa a yodoetano. Total 2 yodoetano y agua.'
      ]
    },
    {
      id: 'et-11', tipo: 'reaccion', nivel: 2,
      q: 'Síntesis de Williamson. ¿Producto?',
      reac: 'CH<sub>3</sub>O<sup>−</sup>Na<sup>+</sup> + CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br → ?',
      prod: 'CCCOC',
      op: ['1-metoxipropano', '2-metoxipropano', 'propeno', '1-propanol'], ok: 0,
      exp: [
        'Metóxido, buen nucleófilo, con haluro primario. SN2.',
        'El O se une al C que tenía el Br.',
        'Producto CH<sub>3</sub>–O–CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>, 1-metoxipropano.'
      ]
    },
    {
      id: 'et-12', tipo: 'reaccion', nivel: 3,
      q: '¿Qué combinación prepara mejor el terc-butil metil éter, (CH<sub>3</sub>)<sub>3</sub>C–O–CH<sub>3</sub>?',
      op: [
        '(CH<sub>3</sub>)<sub>3</sub>CO<sup>−</sup>Na<sup>+</sup> + CH<sub>3</sub>I',
        'CH<sub>3</sub>O<sup>−</sup>Na<sup>+</sup> + (CH<sub>3</sub>)<sub>3</sub>CBr',
        '(CH<sub>3</sub>)<sub>3</sub>COH + CH<sub>3</sub>OH sin catalizador',
        'CH<sub>3</sub>O<sup>−</sup>Na<sup>+</sup> + CH<sub>3</sub>I'
      ], ok: 0,
      exp: [
        'Williamson es SN2 y necesita un haluro poco impedido.',
        'El haluro terciario con una base fuerte daría eliminación, 2-metilpropeno.',
        'Por eso el grupo terciario va como alcóxido y el metilo como haluro.'
      ]
    },
    {
      id: 'et-13', tipo: 'reaccion', nivel: 3,
      q: 'Apertura del óxido de etileno en medio ácido. ¿Producto?',
      reac: 'Oxirano + H<sub>2</sub>O <small>(H<sub>3</sub>O<sup>+</sup>)</small> → ?',
      prod: 'OCCO',
      op: ['1,2-etanodiol', 'etanol', 'etanal', 'dietil éter'], ok: 0,
      exp: [
        'El anillo de 3 tiene mucha tensión y se abre fácil.',
        'El agua ataca un C y el O del anillo queda como OH en el otro.',
        'Se forma 1,2-etanodiol, el anticongelante.'
      ]
    },
    {
      id: 'et-14', tipo: 'vf', nivel: 1,
      q: 'Las moléculas de un éter no forman puentes de hidrógeno entre sí.',
      ok: true,
      exp: [
        'Verdadero. Para dar un puente de hidrógeno se necesita un H unido a O, N o F.',
        'En R–O–R todos los H están unidos a carbono.',
        'Por eso los éteres hierven mucho más bajo que los alcoholes.'
      ]
    },
    {
      id: 'et-15', tipo: 'vf', nivel: 2,
      q: 'El dietil éter guardado mucho tiempo puede formar peróxidos explosivos.',
      ok: true,
      exp: [
        'Verdadero. Reacciona lentamente con el O<sub>2</sub> del aire.',
        'Se forman peróxidos que explotan al concentrarse o calentarse.',
        'Por eso se guarda en frascos oscuros y se revisa antes de destilar.'
      ]
    },
    {
      id: 'et-16', tipo: 'vf', nivel: 3,
      q: 'Los éteres reaccionan fácilmente con NaOH y con sodio metálico.',
      ok: false,
      exp: [
        'Falso. No tienen H ácido en el O.',
        'Por eso no reaccionan con bases ni con Na.',
        'Esa inercia los hace buenos disolventes.'
      ]
    },
    {
      id: 'et-17', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: '1-butanol', s: 'CCCCO' },
        { t: 'dietil éter', s: 'CCOCC' },
        { t: 'butano', s: 'CCCC' }
      ],
      exp: [
        '1-butanol y dietil éter son isómeros, C<sub>4</sub>H<sub>10</sub>O.',
        'Solo el alcohol forma puentes de hidrógeno entre sus moléculas.',
        '1-butanol 118 °C, dietil éter 35 °C, butano −0.5 °C.'
      ]
    },
    {
      id: 'et-18', tipo: 'ordenar', nivel: 3,
      q: 'Ordena de <b>más a menos soluble</b> en agua.',
      items: [
        { t: 'etanol', s: 'CCO' },
        { t: 'dietil éter', s: 'CCOCC' },
        { t: 'pentano', s: 'CCCCC' }
      ],
      exp: [
        'El etanol da y acepta puentes de hidrógeno con el agua, es miscible.',
        'El éter solo acepta puentes con su O, es poco soluble.',
        'El pentano no forma ninguno, es insoluble.'
      ]
    },
    {
      id: 'et-19', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>etoximetano</b>. ¿Cuál es el error?',
      mol: { s: 'CCOC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–O–CH<sub>3</sub>' },
      op: [
        'El grupo más grande debe ser la cadena principal, es metoxietano',
        'Debe llamarse etoxietano',
        'Falta el número 1',
        'Es un alcohol, no un éter'
      ], ok: 0,
      exp: [
        'La cadena principal es el grupo con más C, etilo.',
        'El grupo pequeño, metilo, se vuelve metoxi.',
        'Nombre correcto metoxietano.'
      ]
    },
    {
      id: 'et-20', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>propoxietano</b>. ¿Cuál es el error?',
      mol: { s: 'CCCOCC', c: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>–O–CH<sub>2</sub>CH<sub>3</sub>' },
      op: [
        'El propilo es más grande y debe ser la cadena principal, es 1-etoxipropano',
        'Debe ser 2-etoxipropano',
        'Los éteres no llevan prefijo alcoxi',
        'No hay error'
      ], ok: 0,
      exp: [
        'Propilo tiene 3 C y etilo 2.',
        'El de 3 C es la cadena principal y el de 2 el alcoxi.',
        'El etoxi está en el C1, 1-etoxipropano.'
      ]
    },
    {
      id: 'et-21', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es el <b>tetrahidrofurano</b> (THF)?',
      nom: 'tetrahidrofurano',
      op: [
        { s: 'C1CCOC1', c: 'C<sub>4</sub>H<sub>8</sub>O' },
        { s: 'C1CCOCC1', c: 'C<sub>5</sub>H<sub>10</sub>O' },
        { s: 'C1CCCC1', c: 'C<sub>5</sub>H<sub>10</sub>' },
        { s: 'O=C1CCCC1', c: 'C<sub>5</sub>H<sub>8</sub>O' }
      ], ok: 0,
      exp: [
        'Anillo de 5 átomos con un O.',
        'Cuatro C y un O, todos con enlaces simples.',
        'Es el éter cíclico usado como disolvente para Grignard.'
      ]
    },
    {
      id: 'et-22', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre de este éter cíclico?',
      mol: { s: 'C1CO1', c: 'C<sub>2</sub>H<sub>4</sub>O' },
      op: ['oxirano (óxido de etileno)', 'oxetano', 'etanal', 'etanol'], ok: 0,
      exp: [
        'Anillo de 3 átomos, dos C y un O.',
        'Los éteres de anillo de 3 se llaman epóxidos.',
        'El más simple es el oxirano u óxido de etileno.'
      ]
    },
    {
      id: 'et-23', tipo: 'vf', nivel: 2,
      q: 'El dietil éter hierve casi a la misma temperatura que el pentano.',
      ok: true,
      exp: [
        'Verdadero. Masas parecidas, 74 y 72 g/mol.',
        'Ninguno forma puentes de hidrógeno entre sus moléculas.',
        'Dietil éter 35 °C, pentano 36 °C.'
      ]
    },
    {
      id: 'et-24', tipo: 'escribir', nivel: 3,
      q: 'Escribe el nombre IUPAC (o el común).',
      mol: { s: 'COc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–O–CH<sub>3</sub>' },
      resp: ['metoxibenceno', 'anisol'],
      exp: [
        'El benceno es la cadena principal.',
        'El metilo con el O es el metoxi.',
        'Metoxibenceno, nombre común anisol.'
      ]
    }
  ]
});
