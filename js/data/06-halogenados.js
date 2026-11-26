// tema 6 derivados halogenados
(window.TEMAS = window.TEMAS || []).push({
  id: 'halogenados',
  n: 6,
  titulo: 'Derivados halogenados',
  corto: 'Halogenados',
  familia: 'halogenados',

  teoria: [
    '<p>Los <b>haloalcanos</b> (haluros de alquilo) tienen un halógeno (F, Cl, Br, I) unido a un carbono sp³. Fórmula general <span class="formula">R–X</span>.</p>',
    '<ul>',
    '<li>Se clasifican según el C que lleva el halógeno: <b>primario</b> (unido a 1 C), <b>secundario</b> (2 C) o <b>terciario</b> (3 C).</li>',
    '<li>El enlace C–X es <b>polar</b>. El C queda con carga parcial positiva y atrae a los nucleófilos.</li>',
    '<li><b>Sustitución</b>: un nucleófilo cambia al halógeno. SN2 en un paso, ideal en primarios. SN1 pasa por un carbocatión, típica de terciarios.</li>',
    '<li><b>Eliminación</b>: una base fuerte con calor quita HX y forma un alqueno (E2 o E1), regla de Zaitsev.</li>',
    '<li>Mejor grupo saliente: I<sup>−</sup> &gt; Br<sup>−</sup> &gt; Cl<sup>−</sup> &gt; F<sup>−</sup>.</li>',
    '</ul>',
    '<div class="nota-caja">El halógeno no tiene sufijo. Se nombra como prefijo (fluoro, cloro, bromo, yodo) igual que un alquilo.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: la más larga, igual que en alcanos. El halógeno es un sustituyente más.',
      '<b>Numeración</b>: números más bajos para todos los sustituyentes juntos, halógenos y alquilos por igual.',
      '<b>Empate</b>: el número menor va al sustituyente que va primero en orden alfabético.',
      '<b>Nombre</b>: todos los sustituyentes en orden alfabético. Ejemplo 2-bromo-3-metilbutano.',
      '<b>Nombres comunes</b>: cloruro de metilo (CH<sub>3</sub>Cl), cloroformo (CHCl<sub>3</sub>), tetracloruro de carbono (CCl<sub>4</sub>).'
    ],
    ejemplos: [
      {
        s: 'CC(C)C(C)Br',
        c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CHBr–CH<sub>3</sub>',
        nom: '2-bromo-3-metilbutano',
        pasos: [
          'Cadena más larga de 4 C, butano.',
          'Desde cualquier extremo los sustituyentes quedan en 2 y 3, empate.',
          'Bromo va antes que metil en el alfabeto, el Br recibe el 2.',
          'Nombre 2-bromo-3-metilbutano.'
        ]
      },
      {
        s: 'CC(Cl)CC(C)CBr',
        c: 'BrCH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CHCl–CH<sub>3</sub>',
        nom: '1-bromo-4-cloro-2-metilpentano',
        pasos: [
          'Cadena más larga de 5 C, pentano.',
          'Desde el Br quedan 1, 2 y 4. Desde el otro lado 2, 4 y 5.',
          'En el primer punto de diferencia gana el 1.',
          'En orden alfabético, bromo, cloro, metil.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Sustitución SN2',
      reactivos: 'R–X primario + nucleófilo fuerte (OH<sup>−</sup>, RO<sup>−</sup>, I<sup>−</sup>)',
      condiciones: 'Disolvente aprótico polar, sin mucho calor',
      producto: 'R–Nu + X<sup>−</sup>',
      regla: 'Sustitución en un paso, inversión de configuración'
    },
    {
      nombre: 'Sustitución SN1',
      reactivos: 'R–X terciario + nucleófilo débil (H<sub>2</sub>O, alcohol)',
      condiciones: 'Disolvente prótico',
      producto: 'Alcohol o éter, mezcla racémica',
      regla: 'Sustitución por carbocatión'
    },
    {
      nombre: 'Eliminación E2',
      reactivos: 'R–X + base fuerte (KOH, NaOCH<sub>2</sub>CH<sub>3</sub>)',
      condiciones: 'Etanol y calor',
      producto: 'Alqueno más sustituido',
      regla: 'Eliminación, Zaitsev'
    },
    {
      nombre: 'Síntesis de Williamson',
      reactivos: 'R–O<sup>−</sup> Na<sup>+</sup> + R′–X primario',
      condiciones: 'Alcohol o DMSO',
      producto: 'Éter R–O–R′',
      regla: 'SN2',
      s: 'CCOC',
      c: 'Etóxido de sodio + yodometano da metoxietano'
    },
    {
      nombre: 'Reactivo de Grignard',
      reactivos: 'R–X + Mg',
      condiciones: 'Éter seco',
      producto: 'R–MgX',
      regla: 'Inserción del metal'
    },
    {
      nombre: 'Intercambio de halógeno (Finkelstein)',
      reactivos: 'R–Cl o R–Br + NaI',
      condiciones: 'Acetona',
      producto: 'R–I',
      regla: 'SN2'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: mayor que el del alcano equivalente por la polaridad y la masa. Sube de F a I. 1-cloropropano 47 °C, 1-bromopropano 71 °C, 1-yodopropano 102 °C.',
    '<b>Densidad</b>: los bromados, yodados y polihalogenados son más densos que el agua. El diclorometano y el cloroformo quedan abajo en un embudo de separación.',
    '<b>Solubilidad</b>: poco solubles en agua porque no forman puentes de hidrógeno.',
    '<b>Reactividad SN2</b>: metilo &gt; primario &gt; secundario &gt; terciario, por impedimento estérico.',
    '<b>Reactividad SN1</b>: terciario &gt; secundario &gt; primario, por estabilidad del carbocatión.'
  ],

  errores: [
    'Usar un sufijo para el halógeno. Siempre es prefijo: 2-cloropropano, no propanocloro.',
    'Darle prioridad de numeración al halógeno sobre el alquilo. Solo se desempata por orden alfabético.',
    'Proponer SN2 en un haluro terciario. Está demasiado impedido.',
    'Olvidar que con base fuerte y calor gana la eliminación.',
    'En Williamson, usar un haluro terciario. Se elimina en vez de formar el éter.',
    'Pensar que el F es buen grupo saliente. Es el peor de los halógenos.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Haloalcano', reverso: 'R–X, halógeno unido a C sp³', s: 'CCBr' },
    { cat: 'prefijo', frente: 'Prefijos de halógenos', reverso: 'fluoro, cloro, bromo, yodo' },
    { cat: 'reaccion', frente: 'SN2', reverso: 'Un paso, inversión<br>Mejor en metilo y primarios' },
    { cat: 'reaccion', frente: 'SN1', reverso: 'Carbocatión, racemización<br>Mejor en terciarios' },
    { cat: 'reaccion', frente: 'R–X + base fuerte con calor', reverso: 'Eliminación E2<br>Alqueno de Zaitsev' },
    { cat: 'reaccion', frente: 'R–O<sup>−</sup> + R′–X', reverso: 'Síntesis de Williamson<br>Éter R–O–R′' },
    { cat: 'reaccion', frente: 'R–X + Mg en éter', reverso: 'Reactivo de Grignard R–MgX' }
  ],

  ejercicios: [
    {
      id: 'hal-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CCBr', c: 'CH<sub>3</sub>–CH<sub>2</sub>–Br' },
      op: ['bromoetano', 'bromometano', 'etilbromo', '2-bromoetano'], ok: 0,
      exp: [
        'Cadena de 2 C, etano.',
        'El Br se nombra como prefijo, bromo.',
        'En etano no hace falta número, bromoetano. Nombre común bromuro de etilo.'
      ]
    },
    {
      id: 'hal-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC(C)Cl', c: 'CH<sub>3</sub>–CHCl–CH<sub>3</sub>' },
      resp: ['2-cloropropano', 'cloruro de isopropilo'],
      exp: [
        'Cadena de 3 C, propano.',
        'El Cl está en el carbono central.',
        'Nombre 2-cloropropano.'
      ]
    },
    {
      id: 'hal-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es el <b>triclorometano</b> (cloroformo)?',
      nom: 'triclorometano',
      op: [
        { s: 'ClC(Cl)Cl', c: 'CHCl<sub>3</sub>' },
        { s: 'ClC(Cl)(Cl)Cl', c: 'CCl<sub>4</sub>' },
        { s: 'ClCCl', c: 'CH<sub>2</sub>Cl<sub>2</sub>' },
        { s: 'CCl', c: 'CH<sub>3</sub>Cl' }
      ], ok: 0,
      exp: [
        'Metano con tres H cambiados por Cl.',
        'Le queda un solo H.',
        'CHCl<sub>3</sub>, el cloroformo.'
      ]
    },
    {
      id: 'hal-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'CC(C)C(C)Br', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CHBr–CH<sub>3</sub>' },
      op: ['2-bromo-3-metilbutano', '3-bromo-2-metilbutano', '2-metil-3-bromobutano', '1-bromo-2-metilbutano'], ok: 0,
      exp: [
        'Cadena de 4 C con sustituyentes en 2 y 3 desde cualquier lado.',
        'Hay empate y se resuelve por orden alfabético.',
        'Bromo antes que metil, el Br recibe el 2.'
      ]
    },
    {
      id: 'hal-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC(C)(Cl)CC', c: 'CH<sub>3</sub>–CCl(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      resp: ['2-cloro-2-metilbutano'],
      exp: [
        'Cadena de 4 C, butano.',
        'Desde la izquierda Cl y metil quedan en 2, desde la derecha en 3.',
        'Nombre 2-cloro-2-metilbutano.'
      ]
    },
    {
      id: 'hal-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'CC(Cl)CC(C)CBr', c: 'BrCH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CHCl–CH<sub>3</sub>' },
      op: ['1-bromo-4-cloro-2-metilpentano', '5-bromo-2-cloro-4-metilpentano', '4-cloro-1-bromo-2-metilpentano', '1-bromo-2-metil-4-cloropentano'], ok: 0,
      exp: [
        'Cadena de 5 C.',
        'Desde el CH<sub>2</sub>Br los números son 1, 2, 4. Del otro lado 2, 4, 5. Gana el 1.',
        'Se escriben en orden alfabético, bromo, cloro, metil.'
      ]
    },
    {
      id: 'hal-07', tipo: 'grupo', nivel: 1,
      q: '¿Qué tipo de haloalcano es?',
      mol: { s: 'CC(C)(C)Br', c: '(CH<sub>3</sub>)<sub>3</sub>C–Br' },
      op: ['Terciario', 'Secundario', 'Primario', 'Metílico'], ok: 0,
      exp: [
        'Mira el C que lleva el Br.',
        'Está unido a tres grupos CH<sub>3</sub>, es decir a 3 C.',
        'Es un haluro terciario, 2-bromo-2-metilpropano.'
      ]
    },
    {
      id: 'hal-08', tipo: 'grupo', nivel: 2,
      q: '¿Qué tipo de haloalcano es?',
      mol: { s: 'CCC(C)Br', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CHBr–CH<sub>3</sub>' },
      op: ['Secundario', 'Primario', 'Terciario', 'Vinílico'], ok: 0,
      exp: [
        'El C con Br es el C2 del butano.',
        'Está unido al C1 y al C3, dos carbonos.',
        'Es secundario.'
      ]
    },
    {
      id: 'hal-09', tipo: 'reaccion', nivel: 2,
      q: 'Sustitución con hidróxido. ¿Producto?',
      reac: 'CH<sub>3</sub>–CH<sub>2</sub>–Br + NaOH <small>(acuoso)</small> → ?',
      prod: 'CCO',
      op: ['etanol', 'eteno', 'etano', 'etanal'], ok: 0,
      exp: [
        'Haluro primario con nucleófilo fuerte, SN2.',
        'El OH<sup>−</sup> ataca al C y sale el Br<sup>−</sup>.',
        'Producto etanol y NaBr.'
      ]
    },
    {
      id: 'hal-10', tipo: 'reaccion', nivel: 3,
      q: 'Base fuerte y calor. ¿Producto principal?',
      reac: '(CH<sub>3</sub>)<sub>3</sub>C–Br + KOH <small>(etanol, calor)</small> → ?',
      prod: 'C=C(C)C',
      op: ['2-metilpropeno', '2-metil-2-propanol', '2-metilpropano', '1-buteno'], ok: 0,
      exp: [
        'Haluro terciario, la SN2 no es posible.',
        'Base fuerte en etanol con calor favorece la eliminación E2.',
        'Se pierde HBr y se forma 2-metilpropeno.'
      ]
    },
    {
      id: 'hal-11', tipo: 'reaccion', nivel: 3,
      q: 'Haluro terciario en agua, sin base. ¿Producto?',
      reac: '(CH<sub>3</sub>)<sub>3</sub>C–Br + H<sub>2</sub>O → ?',
      prod: 'CC(C)(C)O',
      op: ['2-metil-2-propanol', '2-metilpropeno', '2-metil-1-propanol', '2-metilpropanal'], ok: 0,
      exp: [
        'El Br sale solo y deja un carbocatión terciario estable, SN1.',
        'El agua, nucleófilo débil, ataca al carbocatión.',
        'Tras perder H<sup>+</sup> queda el alcohol terciario 2-metil-2-propanol.'
      ]
    },
    {
      id: 'hal-12', tipo: 'reaccion', nivel: 2,
      q: 'Síntesis de Williamson. ¿Producto?',
      reac: 'CH<sub>3</sub>CH<sub>2</sub>O<sup>−</sup> Na<sup>+</sup> + CH<sub>3</sub>I → ?',
      prod: 'CCOC',
      op: ['metoxietano (etil metil éter)', 'etanol', 'propano', 'metanol'], ok: 0,
      exp: [
        'El etóxido es un buen nucleófilo y el CH<sub>3</sub>I un sustrato ideal para SN2.',
        'El O del etóxido se une al CH<sub>3</sub> y sale I<sup>−</sup>.',
        'Producto CH<sub>3</sub>CH<sub>2</sub>–O–CH<sub>3</sub>, metoxietano.'
      ]
    },
    {
      id: 'hal-13', tipo: 'reaccion', nivel: 2,
      q: '¿Qué se forma con magnesio en éter seco?',
      reac: 'CH<sub>3</sub>Br + Mg <small>(éter seco)</small> → ?',
      op: ['CH<sub>3</sub>MgBr, un reactivo de Grignard', 'CH<sub>4</sub> + MgBr<sub>2</sub>', 'CH<sub>3</sub>OH', 'C<sub>2</sub>H<sub>6</sub>'], ok: 0,
      exp: [
        'El Mg se inserta entre el C y el Br.',
        'Se forma un organomagnesiano, R–MgX.',
        'El éter debe estar seco porque el agua destruye el Grignard.'
      ]
    },
    {
      id: 'hal-14', tipo: 'reaccion', nivel: 3,
      q: 'Reacción de Finkelstein. ¿Producto?',
      reac: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Br + NaI <small>(acetona)</small> → ?',
      prod: 'CCCCI',
      op: ['1-yodobutano', '2-yodobutano', '1-buteno', '1-butanol'], ok: 0,
      exp: [
        'El I<sup>−</sup> es buen nucleófilo y el sustrato es primario, SN2.',
        'El NaBr no se disuelve en acetona y precipita, eso empuja la reacción.',
        'El I ocupa el lugar del Br, 1-yodobutano.'
      ]
    },
    {
      id: 'hal-15', tipo: 'vf', nivel: 2,
      q: 'En una reacción SN2 se invierte la configuración del carbono.',
      ok: true,
      exp: [
        'Verdadero. El nucleófilo ataca por el lado opuesto al grupo saliente.',
        'El carbono se voltea como un paraguas con el viento.',
        'Se conoce como inversión de Walden.'
      ]
    },
    {
      id: 'hal-16', tipo: 'vf', nivel: 3,
      q: 'Los haluros terciarios reaccionan más rápido por SN2 que los primarios.',
      ok: false,
      exp: [
        'Falso. En SN2 el nucleófilo debe llegar por detrás del C.',
        'Tres grupos alquilo bloquean ese camino, impedimento estérico.',
        'Orden SN2, metilo &gt; primario &gt; secundario y el terciario casi no reacciona.'
      ]
    },
    {
      id: 'hal-17', tipo: 'vf', nivel: 1,
      q: 'En nomenclatura IUPAC el halógeno se nombra como prefijo, por ejemplo cloro o bromo.',
      ok: true,
      exp: [
        'Verdadero. Los halógenos no tienen sufijo propio.',
        'Se nombran fluoro, cloro, bromo y yodo.',
        'Se ordenan alfabéticamente junto con los grupos alquilo.'
      ]
    },
    {
      id: 'hal-18', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>más rápido a más lento</b> en SN2.',
      items: [
        { t: 'bromometano', s: 'CBr' },
        { t: 'bromoetano', s: 'CCBr' },
        { t: '2-bromopropano', s: 'CC(C)Br' },
        { t: '2-bromo-2-metilpropano', s: 'CC(C)(C)Br' }
      ],
      exp: [
        'En SN2 importa cuánto estorban los grupos alrededor del C.',
        'Metilo no tiene grupos, primario uno, secundario dos, terciario tres.',
        'A menos estorbo, más rápido.'
      ]
    },
    {
      id: 'hal-19', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: '1-yodopropano', s: 'CCCI' },
        { t: '1-bromopropano', s: 'CCCBr' },
        { t: '1-cloropropano', s: 'CCCCl' },
        { t: 'propano', s: 'CCC' }
      ],
      exp: [
        'El halógeno aporta masa y polaridad.',
        'El I es el más pesado y polarizable.',
        '1-yodopropano 102 °C, 1-bromopropano 71 °C, 1-cloropropano 47 °C, propano −42 °C.'
      ]
    },
    {
      id: 'hal-20', tipo: 'ordenar', nivel: 3,
      q: 'Ordena de <b>mejor a peor</b> grupo saliente.',
      items: [
        { t: 'I<sup>−</sup>' },
        { t: 'Br<sup>−</sup>' },
        { t: 'Cl<sup>−</sup>' },
        { t: 'F<sup>−</sup>' }
      ],
      exp: [
        'Un buen grupo saliente es una base débil y estable.',
        'El I<sup>−</sup> es grande, reparte su carga y es la base más débil.',
        'El F<sup>−</sup> es pequeño y básico, el peor grupo saliente.'
      ]
    },
    {
      id: 'hal-21', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>3-bromobutano</b>. ¿Cuál es el error?',
      mol: { s: 'CCC(C)Br', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CHBr–CH<sub>3</sub>' },
      op: [
        'Se numeró desde el extremo equivocado, es 2-bromobutano',
        'El bromo debe ir como sufijo',
        'La cadena tiene 5 C',
        'Debe llamarse bromuro de butano'
      ], ok: 0,
      exp: [
        'El Br debe recibir el número más bajo.',
        'Desde el CH<sub>3</sub> más cercano al Br, queda en 2.',
        'Nombre 2-bromobutano.'
      ]
    },
    {
      id: 'hal-22', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>3-bromo-2-metilbutano</b>. ¿Cuál es el error?',
      mol: { s: 'CC(C)C(C)Br', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CHBr–CH<sub>3</sub>' },
      op: [
        'Hay empate 2,3 y se desempata por orden alfabético, es 2-bromo-3-metilbutano',
        'El metil debe tener prioridad por ser un alquilo',
        'La cadena principal tiene 5 C',
        'No hay error'
      ], ok: 0,
      exp: [
        'Desde cualquier extremo los números son 2 y 3.',
        'El halógeno no tiene más prioridad que el alquilo, se desempata por el alfabeto.',
        'B va antes que m, 2-bromo-3-metilbutano.'
      ]
    },
    {
      id: 'hal-23', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es el <b>1,2-dicloroetano</b>?',
      nom: '1,2-dicloroetano',
      op: [
        { s: 'ClCCCl', c: 'ClCH<sub>2</sub>–CH<sub>2</sub>Cl' },
        { s: 'CC(Cl)Cl', c: 'CH<sub>3</sub>–CHCl<sub>2</sub>' },
        { s: 'ClCCCCl', c: 'ClCH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>Cl' },
        { s: 'ClC=CCl', c: 'ClCH=CHCl' }
      ], ok: 0,
      exp: [
        'Etano, 2 carbonos con enlace simple.',
        'Un Cl en cada carbono, 1 y 2.',
        'El CH<sub>3</sub>CHCl<sub>2</sub> sería 1,1-dicloroetano.'
      ]
    },
    {
      id: 'hal-24', tipo: 'vf', nivel: 2,
      q: 'El diclorometano es más denso que el agua.',
      ok: true,
      exp: [
        'Verdadero. Su densidad es cercana a 1.33 g/mL.',
        'Los átomos de Cl son pesados respecto a su volumen.',
        'En un embudo de separación queda en la capa de abajo.'
      ]
    }
  ]
});
