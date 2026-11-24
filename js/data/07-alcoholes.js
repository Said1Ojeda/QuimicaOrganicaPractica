// tema 7 alcoholes y fenoles
(window.TEMAS = window.TEMAS || []).push({
  id: 'alcoholes',
  n: 7,
  titulo: 'Alcoholes y fenoles',
  corto: 'Alcoholes y fenoles',
  familia: 'oxigenados',

  teoria: [
    '<p>Los <b>alcoholes</b> tienen un grupo <b>hidroxilo –OH</b> unido a un C sp³, <span class="formula">R–OH</span>. Los <b>fenoles</b> tienen el –OH unido directo a un anillo aromático, <span class="formula">Ar–OH</span>.</p>',
    '<ul>',
    '<li>Sufijo <b>-ol</b>. Como sustituyente se llama <b>hidroxi</b>.</li>',
    '<li>Se clasifican como <b>primarios</b>, <b>secundarios</b> o <b>terciarios</b> según el C que lleva el OH.</li>',
    '<li>Forman <b>puentes de hidrógeno</b>. Por eso hierven mucho más alto que alcanos de masa parecida y los pequeños se mezclan con agua.</li>',
    '<li><b>Oxidación</b>: primario da aldehído y luego ácido, secundario da cetona, terciario no se oxida.</li>',
    '<li>Los fenoles son <b>más ácidos</b> que los alcoholes porque el ion fenóxido se estabiliza por resonancia. Reaccionan con NaOH, los alcoholes no.</li>',
    '</ul>',
    '<div class="nota-caja">Dioles y trioles: etano-1,2-diol (etilenglicol) y propano-1,2,3-triol (glicerol). Se conserva la o de etano y propano.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: la más larga que contenga el C con el –OH.',
      '<b>Numeración</b>: el –OH tiene prioridad sobre dobles enlaces, triples enlaces, halógenos y alquilos. Recibe el número más bajo.',
      '<b>Sufijo</b>: cambia la o final del alcano por <b>-ol</b>. Se acepta 2-butanol y butan-2-ol.',
      '<b>Con doble enlace</b>: se nombran ambos, el -en- antes del -ol. Ejemplo 4-penten-2-ol.',
      '<b>Fenoles</b>: la base es fenol y el C con OH es el 1. Ejemplo 4-metilfenol.'
    ],
    ejemplos: [
      {
        s: 'CC(O)C(C)C',
        c: 'CH<sub>3</sub>–CH(OH)–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        nom: '3-metil-2-butanol',
        pasos: [
          'Cadena de 4 C que contiene el C del OH, butanol.',
          'Se numera desde el extremo más cercano al OH, queda en 2.',
          'El metil cae en el C3.',
          'Nombre 3-metil-2-butanol, también 3-metilbutan-2-ol.'
        ]
      },
      {
        s: 'C=CCC(C)O',
        c: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH(OH)–CH<sub>3</sub>',
        nom: '4-penten-2-ol',
        pasos: [
          'Cadena de 5 C con un OH y un doble enlace.',
          'El OH manda la numeración, se numera desde el CH<sub>3</sub> y el OH queda en 2.',
          'El doble enlace queda entre C4 y C5.',
          'Nombre 4-penten-2-ol, también pent-4-en-2-ol.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Oxidación suave de alcohol primario',
      reactivos: 'R–CH<sub>2</sub>OH',
      condiciones: 'PCC en CH<sub>2</sub>Cl<sub>2</sub>',
      producto: 'Aldehído R–CHO',
      regla: 'Oxidación, se detiene en el aldehído'
    },
    {
      nombre: 'Oxidación fuerte de alcohol primario',
      reactivos: 'R–CH<sub>2</sub>OH',
      condiciones: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> o KMnO<sub>4</sub> en ácido',
      producto: 'Ácido carboxílico R–COOH',
      regla: 'Oxidación completa'
    },
    {
      nombre: 'Oxidación de alcohol secundario',
      reactivos: 'R–CH(OH)–R′',
      condiciones: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> en ácido o PCC',
      producto: 'Cetona',
      regla: 'Oxidación. El terciario no reacciona'
    },
    {
      nombre: 'Deshidratación',
      reactivos: 'Alcohol',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub> concentrado y calor',
      producto: 'Alqueno + H<sub>2</sub>O',
      regla: 'Eliminación, Zaitsev'
    },
    {
      nombre: 'Reacción con sodio',
      reactivos: '2 R–OH + 2 Na',
      condiciones: 'Temperatura ambiente',
      producto: '2 R–O<sup>−</sup>Na<sup>+</sup> + H<sub>2</sub>',
      regla: 'Ácido-base, se forma un alcóxido'
    },
    {
      nombre: 'Con haluros de hidrógeno',
      reactivos: 'R–OH + HBr o HCl',
      condiciones: 'Con ZnCl<sub>2</sub> para HCl (reactivo de Lucas)',
      producto: 'R–X + H<sub>2</sub>O',
      regla: 'Sustitución. Terciario reacciona al instante'
    },
    {
      nombre: 'Acidez del fenol',
      reactivos: 'Fenol + NaOH',
      condiciones: 'Agua',
      producto: 'Fenóxido de sodio + H<sub>2</sub>O',
      regla: 'Ácido-base'
    },
    {
      nombre: 'Bromación del fenol',
      reactivos: 'Fenol + Br<sub>2</sub>',
      condiciones: 'Agua, sin catalizador',
      producto: '2,4,6-tribromofenol, precipitado blanco',
      regla: 'SEAr, el OH activa mucho',
      s: 'Oc1c(Br)cc(Br)cc1Br',
      c: '2,4,6-tribromofenol'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: alto por los puentes de hidrógeno. Etanol 78 °C contra propano −42 °C, con masa similar.',
    '<b>Tendencia</b>: sube con la cadena y con el número de OH. Metanol 65 °C, etanol 78 °C, 1-propanol 97 °C, 1-butanol 118 °C, etilenglicol 197 °C.',
    '<b>Solubilidad</b>: metanol, etanol y propanol se mezclan con agua en cualquier proporción. A partir de 4 o 5 C la parte no polar domina y la solubilidad baja.',
    '<b>Acidez</b>: etanol pKa 16, agua 15.7, fenol 10, 4-nitrofenol 7.2. Los grupos que atraen electrones aumentan la acidez del fenol y los que donan la reducen.',
    '<b>Prueba de Lucas</b>: terciario se enturbia al instante, secundario en minutos, primario casi no.'
  ],

  errores: [
    'Numerar para favorecer al doble enlace o al alquilo. El –OH manda.',
    'Escribir 4-pentanol en lugar de 2-pentanol. El OH recibe siempre el número más bajo.',
    'Oxidar un alcohol terciario. No tiene H en el C del OH y no reacciona.',
    'Confundir PCC con dicromato. PCC se detiene en aldehído, el dicromato llega al ácido.',
    'Creer que los alcoholes reaccionan con NaOH como los fenoles. El etanol es menos ácido que el agua.',
    'Confundir fenol con alcohol bencílico. En el fenol el OH está en el anillo.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Alcohol', reverso: 'R–OH, hidroxilo en C sp³<br>Sufijo -ol', s: 'CCO' },
    { cat: 'grupo', frente: 'Fenol', reverso: 'Ar–OH, hidroxilo en el anillo aromático', s: 'Oc1ccccc1' },
    { cat: 'sufijo', frente: 'Sufijo <b>-ol</b>', reverso: 'Alcohol<br>Ejemplo 2-propanol' },
    { cat: 'sufijo', frente: '<b>-diol</b> y <b>-triol</b>', reverso: 'Dos o tres OH<br>Etano-1,2-diol, propano-1,2,3-triol' },
    { cat: 'prefijo', frente: 'Prefijo <b>hidroxi</b>', reverso: 'El –OH cuando no es el grupo principal' },
    { cat: 'reaccion', frente: 'Alcohol primario + PCC', reverso: 'Aldehído' },
    { cat: 'reaccion', frente: 'Alcohol primario + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> en ácido', reverso: 'Ácido carboxílico' },
    { cat: 'reaccion', frente: 'Alcohol secundario oxidado', reverso: 'Cetona' },
    { cat: 'reaccion', frente: 'Alcohol terciario + oxidante', reverso: 'No reacciona' }
  ],

  ejercicios: [
    {
      id: 'ol-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CCO', c: 'CH<sub>3</sub>–CH<sub>2</sub>–OH' },
      op: ['etanol', 'etanal', 'metanol', 'etano'], ok: 0,
      exp: [
        'Cadena de 2 C con un –OH.',
        'Etano cambia la o por -ol.',
        'Etanol. Etanal es el aldehído.'
      ]
    },
    {
      id: 'ol-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC(C)O', c: 'CH<sub>3</sub>–CH(OH)–CH<sub>3</sub>' },
      resp: ['2-propanol', 'propan-2-ol'],
      exp: [
        'Cadena de 3 C con OH en el centro.',
        'El OH queda en el C2.',
        '2-propanol o propan-2-ol. Nombre común alcohol isopropílico.'
      ]
    },
    {
      id: 'ol-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es el <b>1-butanol</b>?',
      nom: '1-butanol',
      op: [
        { s: 'CCCCO', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH' },
        { s: 'CCC(C)O', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>3</sub>' },
        { s: 'CC(C)CO', c: '(CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–OH' },
        { s: 'CCCC=O', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO' }
      ], ok: 0,
      exp: [
        'Cadena lineal de 4 C.',
        'El OH en el extremo, C1.',
        'La última opción es butanal, un aldehído.'
      ]
    },
    {
      id: 'ol-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'CC(O)C(C)C', c: 'CH<sub>3</sub>–CH(OH)–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
      op: ['3-metil-2-butanol', '2-metil-3-butanol', '2-metil-2-butanol', '3-metil-1-butanol'], ok: 0,
      exp: [
        'Cadena de 4 C con el OH.',
        'El OH tiene prioridad y recibe el número más bajo, 2.',
        'El metil cae en 3, 3-metil-2-butanol.'
      ]
    },
    {
      id: 'ol-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CCC(C)(C)O', c: 'CH<sub>3</sub>–CH<sub>2</sub>–C(OH)(CH<sub>3</sub>)–CH<sub>3</sub>' },
      resp: ['2-metil-2-butanol', '2-metilbutan-2-ol'],
      exp: [
        'Cadena de 4 C, butanol.',
        'Numerando desde la derecha, el OH queda en 2.',
        'El metil también está en 2, 2-metil-2-butanol.'
      ]
    },
    {
      id: 'ol-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'C=CCC(C)O', c: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH(OH)–CH<sub>3</sub>' },
      op: ['4-penten-2-ol', '1-penten-4-ol', '4-penten-1-ol', '2-hidroxi-4-penteno'], ok: 0,
      exp: [
        'El –OH tiene más prioridad que el doble enlace.',
        'Se numera desde el CH<sub>3</sub> para que el OH quede en 2.',
        'El doble enlace queda en 4, 4-penten-2-ol.'
      ]
    },
    {
      id: 'ol-07', tipo: 'grupo', nivel: 1,
      q: '¿Qué tipo de compuesto es?',
      mol: { s: 'Oc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–OH' },
      op: ['Fenol', 'Alcohol', 'Éter', 'Cetona'], ok: 0,
      exp: [
        'Tiene un grupo –OH.',
        'El OH está unido directo al anillo aromático.',
        'Eso lo hace fenol, no alcohol.'
      ]
    },
    {
      id: 'ol-08', tipo: 'grupo', nivel: 2,
      q: '¿Cómo se clasifica este alcohol?',
      mol: { s: 'CC(C)(C)O', c: '(CH<sub>3</sub>)<sub>3</sub>C–OH' },
      op: ['Terciario', 'Secundario', 'Primario', 'Fenol'], ok: 0,
      exp: [
        'Mira el C que lleva el OH.',
        'Está unido a tres CH<sub>3</sub>.',
        'Alcohol terciario, 2-metil-2-propanol.'
      ]
    },
    {
      id: 'ol-09', tipo: 'reaccion', nivel: 2,
      q: 'Oxidación con PCC. ¿Producto?',
      reac: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH + PCC → ?',
      prod: 'CCC=O',
      op: ['propanal', 'ácido propanoico', 'propanona', 'propeno'], ok: 0,
      exp: [
        'Es un alcohol primario.',
        'El PCC es un oxidante suave y se detiene en el aldehído.',
        'Producto propanal.'
      ]
    },
    {
      id: 'ol-10', tipo: 'reaccion', nivel: 3,
      q: 'Oxidación fuerte. ¿Producto final?',
      reac: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> <small>(H<sub>2</sub>SO<sub>4</sub>, exceso)</small> → ?',
      prod: 'CCC(=O)O',
      op: ['ácido propanoico', 'propanal', 'propanona', '2-propanol'], ok: 0,
      exp: [
        'Alcohol primario con oxidante fuerte en exceso.',
        'Primero pasa a propanal y este se sigue oxidando.',
        'Producto final ácido propanoico.'
      ]
    },
    {
      id: 'ol-11', tipo: 'reaccion', nivel: 2,
      q: 'Oxidación de un alcohol secundario. ¿Producto?',
      reac: 'CH<sub>3</sub>–CH(OH)–CH<sub>2</sub>–CH<sub>3</sub> + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      prod: 'CCC(C)=O',
      op: ['butanona', 'butanal', 'ácido butanoico', '2-buteno'], ok: 0,
      exp: [
        'El 2-butanol es secundario.',
        'El C del OH pierde su H y queda un C=O entre dos carbonos.',
        'Se forma una cetona, butanona.'
      ]
    },
    {
      id: 'ol-12', tipo: 'reaccion', nivel: 3,
      q: '¿Qué pasa al tratar este alcohol con dicromato?',
      reac: '(CH<sub>3</sub>)<sub>3</sub>C–OH + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      op: ['No se oxida, es un alcohol terciario', '2-metilpropanal', 'ácido 2-metilpropanoico', 'propanona y metanol'], ok: 0,
      exp: [
        'Para oxidarse, el C del OH necesita al menos un H.',
        'En un alcohol terciario ese C tiene tres grupos alquilo y ningún H.',
        'No hay oxidación, el naranja del dicromato no cambia a verde.'
      ]
    },
    {
      id: 'ol-13', tipo: 'reaccion', nivel: 1,
      q: '¿Qué se forma con sodio metálico?',
      reac: '2 CH<sub>3</sub>CH<sub>2</sub>OH + 2 Na → ?',
      op: ['2 CH<sub>3</sub>CH<sub>2</sub>O<sup>−</sup>Na<sup>+</sup> + H<sub>2</sub>', 'CH<sub>3</sub>CH<sub>2</sub>Na + H<sub>2</sub>O', '2 CH<sub>3</sub>CH<sub>3</sub> + Na<sub>2</sub>O', 'No reacciona'], ok: 0,
      exp: [
        'El H del –OH es ácido frente a un metal activo.',
        'El Na lo reemplaza y forma un alcóxido.',
        'Se libera H<sub>2</sub> en forma de burbujas.'
      ]
    },
    {
      id: 'ol-14', tipo: 'reaccion', nivel: 2,
      q: 'Deshidratación del ciclohexanol. ¿Producto?',
      reac: 'Ciclohexanol <small>(H<sub>2</sub>SO<sub>4</sub>, calor)</small> → ?',
      prod: 'C1=CCCCC1',
      op: ['ciclohexeno', 'ciclohexano', 'benceno', 'ciclohexanona'], ok: 0,
      exp: [
        'El ácido protona el OH y sale como agua.',
        'Se pierde un H vecino y se forma un doble enlace.',
        'Producto ciclohexeno.'
      ]
    },
    {
      id: 'ol-15', tipo: 'reaccion', nivel: 3,
      q: 'Fenol con agua de bromo. ¿Producto?',
      reac: 'Fenol + 3 Br<sub>2</sub> <small>(agua)</small> → ?',
      prod: 'Oc1c(Br)cc(Br)cc1Br',
      op: ['2,4,6-tribromofenol', '4-bromofenol', '3-bromofenol', 'bromobenceno'], ok: 0,
      exp: [
        'El –OH activa tanto el anillo que no hace falta catalizador.',
        'Orienta a orto y para, que son las posiciones 2, 4 y 6.',
        'Entran tres Br y precipita un sólido blanco, 2,4,6-tribromofenol.'
      ]
    },
    {
      id: 'ol-16', tipo: 'reaccion', nivel: 1,
      q: '¿Qué se forma al tratar fenol con NaOH?',
      reac: 'C<sub>6</sub>H<sub>5</sub>OH + NaOH → ?',
      op: ['C<sub>6</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup> + H<sub>2</sub>O', 'C<sub>6</sub>H<sub>5</sub>Na + H<sub>2</sub>O<sub>2</sub>', 'C<sub>6</sub>H<sub>6</sub> + NaOH', 'No reacciona'], ok: 0,
      exp: [
        'El fenol es lo bastante ácido para reaccionar con NaOH.',
        'Pierde el H<sup>+</sup> del OH y forma fenóxido de sodio.',
        'Un alcohol como el etanol no reacciona así con NaOH.'
      ]
    },
    {
      id: 'ol-17', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>más ácido a menos ácido</b>.',
      items: [
        { t: 'fenol', s: 'Oc1ccccc1' },
        { t: 'agua', c: 'H<sub>2</sub>O' },
        { t: 'etanol', s: 'CCO' }
      ],
      exp: [
        'El fenóxido se estabiliza por resonancia con el anillo.',
        'El etóxido no tiene resonancia y el grupo etilo dona electrones.',
        'pKa fenol 10, agua 15.7, etanol 16.'
      ]
    },
    {
      id: 'ol-18', tipo: 'ordenar', nivel: 3,
      q: 'Ordena de <b>más ácido a menos ácido</b>.',
      items: [
        { t: '4-nitrofenol', s: 'Oc1ccc(cc1)[N+](=O)[O-]' },
        { t: 'fenol', s: 'Oc1ccccc1' },
        { t: '4-metilfenol', s: 'Cc1ccc(O)cc1' },
        { t: 'etanol', s: 'CCO' }
      ],
      exp: [
        'El –NO<sub>2</sub> atrae electrones y estabiliza aún más el fenóxido.',
        'El –CH<sub>3</sub> dona electrones y lo desestabiliza un poco.',
        'pKa 4-nitrofenol 7.2, fenol 10, 4-metilfenol 10.3, etanol 16.'
      ]
    },
    {
      id: 'ol-19', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: '1-butanol', s: 'CCCCO' },
        { t: '1-propanol', s: 'CCCO' },
        { t: 'etanol', s: 'CCO' },
        { t: 'metanol', s: 'CO' }
      ],
      exp: [
        'Todos forman puentes de hidrógeno.',
        'La diferencia la pone el tamaño de la cadena.',
        '1-butanol 118 °C, 1-propanol 97 °C, etanol 78 °C, metanol 65 °C.'
      ]
    },
    {
      id: 'ol-20', tipo: 'vf', nivel: 1,
      q: 'El etanol hierve a mayor temperatura que el propano porque forma puentes de hidrógeno.',
      ok: true,
      exp: [
        'Verdadero. Tienen masas parecidas, 46 y 44 g/mol.',
        'El etanol forma puentes de hidrógeno por su –OH.',
        'Etanol 78 °C contra propano −42 °C.'
      ]
    },
    {
      id: 'ol-21', tipo: 'vf', nivel: 2,
      q: 'Al alargar la cadena carbonada, los alcoholes se vuelven menos solubles en agua.',
      ok: true,
      exp: [
        'Verdadero. El –OH es la parte que interactúa con el agua.',
        'La cadena es no polar y crece con cada C.',
        'Etanol se mezcla en todo, 1-hexanol apenas se disuelve.'
      ]
    },
    {
      id: 'ol-22', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>4-pentanol</b>. ¿Cuál es el error?',
      mol: { s: 'CCCC(C)O', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>3</sub>' },
      op: [
        'El OH debe recibir el número más bajo, es 2-pentanol',
        'La cadena tiene 4 C',
        'El sufijo debe ser -al',
        'Falta un sustituyente metil'
      ], ok: 0,
      exp: [
        'Se numera desde el extremo más cercano al OH.',
        'Desde la derecha el OH queda en 2.',
        'Nombre 2-pentanol o pentan-2-ol.'
      ]
    },
    {
      id: 'ol-23', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>2-etil-1-propanol</b>. ¿Cuál es el error?',
      mol: { s: 'OCC(C)CC', c: 'HO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: [
        'No eligió la cadena más larga con el OH, es 2-metil-1-butanol',
        'El OH debe ir en el C2',
        'Debe escribirse 2-etilpropan-1-ol',
        'No hay error'
      ], ok: 0,
      exp: [
        'Siguiendo el etilo, la cadena que incluye el C del OH tiene 4 C.',
        'El OH queda en 1 y el metil sobrante en 2.',
        'Nombre 2-metil-1-butanol.'
      ]
    },
    {
      id: 'ol-24', tipo: 'vf', nivel: 3,
      q: 'Con el reactivo de Lucas, un alcohol terciario se enturbia casi de inmediato.',
      ok: true,
      exp: [
        'Verdadero. La reacción va por un carbocatión.',
        'El carbocatión terciario es el más estable y se forma rápido.',
        'Aparece el cloruro insoluble y la mezcla se enturbia.'
      ]
    },
    {
      id: 'ol-25', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es el <b>ciclohexanol</b>?',
      nom: 'ciclohexanol',
      op: [
        { s: 'OC1CCCCC1', c: 'C<sub>6</sub>H<sub>11</sub>–OH' },
        { s: 'Oc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–OH' },
        { s: 'OCC1CCCCC1', c: 'C<sub>6</sub>H<sub>11</sub>–CH<sub>2</sub>OH' },
        { s: 'O=C1CCCCC1', c: 'C<sub>6</sub>H<sub>10</sub>O' }
      ], ok: 0,
      exp: [
        'Anillo de 6 C saturado, ciclohexano.',
        'Con OH unido directamente al anillo, ciclohexanol.',
        'El aromático sería fenol y el C=O ciclohexanona.'
      ]
    }
  ]
});
