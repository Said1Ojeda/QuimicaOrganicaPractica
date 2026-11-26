// tema 10 cetonas
(window.TEMAS = window.TEMAS || []).push({
  id: 'cetonas',
  n: 10,
  titulo: 'Cetonas',
  corto: 'Cetonas',
  familia: 'carbonilos',

  teoria: [
    '<p>Las <b>cetonas</b> tienen el carbonilo <b>C=O</b> unido a <b>dos carbonos</b>: <span class="formula">R–CO–R′</span>. Nunca está en el extremo de la cadena.</p>',
    '<ul>',
    '<li>Sufijo <b>-ona</b>. Como sustituyente se llama <b>oxo</b>.</li>',
    '<li>Hacen <b>adición nucleofílica</b> como los aldehídos, pero un poco más lenta.</li>',
    '<li><b>No se oxidan</b> con oxidantes suaves. Tollens y Fehling dan negativo, así se distinguen de los aldehídos.</li>',
    '<li>Se <b>reducen</b> con NaBH<sub>4</sub> a alcoholes secundarios y con Grignard dan alcoholes terciarios.</li>',
    '<li>Las <b>metilcetonas</b> (CH<sub>3</sub>–CO–R) dan la prueba del <b>yodoformo</b>, un precipitado amarillo.</li>',
    '</ul>',
    '<div class="nota-caja">Se obtienen oxidando alcoholes secundarios, hidratando alquinos o con acilación de Friedel-Crafts.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: la más larga que contenga el C del C=O.',
      '<b>Numeración</b>: el C=O recibe el número más bajo posible. Manda sobre dobles enlaces, halógenos y alquilos.',
      '<b>Sufijo</b>: cambia la o del alcano por <b>-ona</b> con su número. Se acepta 2-pentanona y pentan-2-ona.',
      '<b>Sin número</b>: propanona y butanona no lo necesitan, solo hay una posición posible.',
      '<b>Nombre común</b>: los dos grupos + cetona. Ejemplo etil metil cetona para la butanona.'
    ],
    ejemplos: [
      {
        s: 'CC(C)CC(C)=O',
        c: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        nom: '4-metil-2-pentanona',
        pasos: [
          'Cadena de 5 C con el C=O, pentanona.',
          'Desde la izquierda el C=O queda en 2, desde la derecha en 4. Gana 2.',
          'El metil cae en el C4.',
          'Nombre 4-metil-2-pentanona o 4-metilpentan-2-ona.'
        ]
      },
      {
        s: 'CC(=O)C(C)C',
        c: 'CH<sub>3</sub>–CO–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        nom: '3-metil-2-butanona',
        pasos: [
          'Cadena de 4 C, butanona.',
          'El C=O manda y se numera para que quede en 2.',
          'El metil queda en el C3.',
          'Nombre 3-metil-2-butanona. No 2-metil-3-butanona.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Oxidación de alcohol secundario (obtención)',
      reactivos: 'R–CH(OH)–R′',
      condiciones: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> en ácido o PCC',
      producto: 'Cetona',
      regla: 'Oxidación'
    },
    {
      nombre: 'Hidratación de alquinos (obtención)',
      reactivos: 'Alquino + H<sub>2</sub>O',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub>, HgSO<sub>4</sub>',
      producto: 'Cetona',
      regla: 'Markovnikov y tautomería'
    },
    {
      nombre: 'Reducción',
      reactivos: 'Cetona + NaBH<sub>4</sub> o LiAlH<sub>4</sub>',
      condiciones: 'Luego agua',
      producto: 'Alcohol secundario',
      regla: 'Adición nucleofílica de hidruro'
    },
    {
      nombre: 'Adición de Grignard',
      reactivos: 'Cetona + R–MgX, luego H<sub>3</sub>O<sup>+</sup>',
      condiciones: 'Éter seco',
      producto: 'Alcohol terciario',
      regla: 'Adición nucleofílica',
      s: 'CC(C)(C)O',
      c: 'Propanona + CH<sub>3</sub>MgBr da 2-metil-2-propanol'
    },
    {
      nombre: 'Reducción de Clemmensen',
      reactivos: 'Cetona',
      condiciones: 'Zn(Hg) y HCl concentrado',
      producto: 'Alcano, el C=O pasa a CH<sub>2</sub>',
      regla: 'Reducción total'
    },
    {
      nombre: 'Prueba del yodoformo',
      reactivos: 'CH<sub>3</sub>–CO–R + I<sub>2</sub>',
      condiciones: 'NaOH',
      producto: 'CHI<sub>3</sub> amarillo + R–COO<sup>−</sup>',
      regla: 'Identifica metilcetonas'
    },
    {
      nombre: 'Con oxidantes suaves',
      reactivos: 'Cetona + Tollens o Fehling',
      condiciones: 'Calor',
      producto: 'No reacciona',
      regla: 'Prueba negativa'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: un poco más alto que el del aldehído isómero y más bajo que el del alcohol. Butanona 80 °C, butanal 75 °C, 2-butanol 99.5 °C.',
    '<b>Tendencia</b>: propanona 56 °C, butanona 80 °C, 2-pentanona 102 °C, 2-hexanona 127 °C.',
    '<b>Solubilidad</b>: la propanona es miscible con agua. Las más grandes son poco solubles.',
    '<b>Uso</b>: la acetona disuelve tanto sustancias polares como no polares, por eso es un disolvente muy usado.',
    '<b>Reactividad</b>: menor que la de los aldehídos porque los dos grupos alquilo estorban y donan electrones.'
  ],

  errores: [
    'Numerar para favorecer al alquilo. El C=O manda: 3-metil-2-butanona y no 2-metil-3-butanona.',
    'Poner -ona en un carbonilo del extremo. Si está en el C1 es aldehído.',
    'Decir que las cetonas dan Tollens o Fehling.',
    'Olvidar que con Grignard una cetona da alcohol terciario.',
    'Escribir 2-propanona. En propanona el C=O solo puede estar en el centro, no lleva número.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Cetona', reverso: 'R–CO–R′, carbonilo entre dos C<br>Sufijo -ona', s: 'CC(C)=O' },
    { cat: 'sufijo', frente: 'Sufijo <b>-ona</b>', reverso: 'Cetona<br>Ejemplo propanona' },
    { cat: 'prefijo', frente: 'Prefijo <b>oxo</b>', reverso: 'C=O cuando no es el grupo principal' },
    { cat: 'reaccion', frente: 'Cetona + NaBH<sub>4</sub>', reverso: 'Alcohol secundario' },
    { cat: 'reaccion', frente: 'Cetona + R–MgX, luego H<sub>3</sub>O<sup>+</sup>', reverso: 'Alcohol terciario' },
    { cat: 'reaccion', frente: 'Metilcetona + I<sub>2</sub> y NaOH', reverso: 'Yodoformo CHI<sub>3</sub>, amarillo' },
    { cat: 'reaccion', frente: 'Cetona + Zn(Hg) y HCl', reverso: 'Clemmensen<br>C=O pasa a CH<sub>2</sub>' }
  ],

  ejercicios: [
    {
      id: 'cet-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre de este compuesto?',
      mol: { s: 'CC(C)=O', c: 'CH<sub>3</sub>–CO–CH<sub>3</sub>' },
      op: ['propanona (acetona)', 'propanal', '2-propanol', 'ácido propanoico'], ok: 0,
      exp: [
        'Cadena de 3 C con el C=O en el centro.',
        'Carbonilo entre dos C, es cetona.',
        'Propanona, nombre común acetona.'
      ]
    },
    {
      id: 'cet-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CCC(C)=O', c: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>3</sub>' },
      resp: ['butanona', '2-butanona', 'butan-2-ona', 'etil metil cetona', 'metil etil cetona'],
      exp: [
        'Cadena de 4 C con el C=O.',
        'El C=O solo puede estar en el C2, si estuviera en el C1 sería aldehído.',
        'Butanona. También se acepta 2-butanona.'
      ]
    },
    {
      id: 'cet-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es la <b>3-pentanona</b>?',
      nom: '3-pentanona',
      op: [
        { s: 'CCC(=O)CC', c: 'CH<sub>3</sub>CH<sub>2</sub>–CO–CH<sub>2</sub>CH<sub>3</sub>' },
        { s: 'CCCC(C)=O', c: 'CH<sub>3</sub>–CO–CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>' },
        { s: 'CCCCC=O', c: 'CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>CHO' },
        { s: 'CCC(O)CC', c: 'CH<sub>3</sub>CH<sub>2</sub>–CH(OH)–CH<sub>2</sub>CH<sub>3</sub>' }
      ], ok: 0,
      exp: [
        'Cadena de 5 C.',
        'El C=O en el C3, justo en el centro.',
        'Dos etilos a cada lado del carbonilo, también llamada dietil cetona.'
      ]
    },
    {
      id: 'cet-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC(C)CC(C)=O', c: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
      op: ['4-metil-2-pentanona', '2-metil-4-pentanona', '4-metilpentanal', '2-metil-2-pentanona'], ok: 0,
      exp: [
        'Cadena de 5 C con el C=O.',
        'El C=O manda la numeración, queda en 2.',
        'El metil cae en 4, 4-metil-2-pentanona.'
      ]
    },
    {
      id: 'cet-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'O=C1CCCCC1', c: 'C<sub>6</sub>H<sub>10</sub>O' },
      resp: ['ciclohexanona'],
      exp: [
        'Anillo de 6 C con un C=O.',
        'En un anillo el C del C=O es el C1, no se numera.',
        'Ciclohexanona.'
      ]
    },
    {
      id: 'cet-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC(=O)CC(C)CCl', c: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>Cl' },
      op: ['5-cloro-4-metil-2-pentanona', '1-cloro-2-metil-4-pentanona', '4-metil-5-cloro-2-pentanona', '5-cloro-4-metilpentanal'], ok: 0,
      exp: [
        'Cadena de 5 C, el C=O manda y queda en 2.',
        'Metil en 4 y cloro en 5.',
        'Orden alfabético, cloro antes que metil.'
      ]
    },
    {
      id: 'cet-07', tipo: 'grupo', nivel: 1,
      q: '¿Qué grupo funcional tiene?',
      mol: { s: 'CCC(C)=O', c: 'CH<sub>3</sub>CH<sub>2</sub>COCH<sub>3</sub>' },
      op: ['Cetona', 'Aldehído', 'Éter', 'Alcohol'], ok: 0,
      exp: [
        'Tiene un C=O.',
        'El C=O está unido a dos carbonos.',
        'Es una cetona, butanona.'
      ]
    },
    {
      id: 'cet-08', tipo: 'grupo', nivel: 2,
      q: '¿Qué tipo de compuesto es?',
      mol: { s: 'CC(=O)c1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CO–CH<sub>3</sub>' },
      op: ['Cetona aromática', 'Aldehído aromático', 'Éster', 'Fenol'], ok: 0,
      exp: [
        'El C=O está unido al anillo y a un CH<sub>3</sub>.',
        'Dos carbonos alrededor del carbonilo, es cetona.',
        'Es la acetofenona, 1-feniletanona.'
      ]
    },
    {
      id: 'cet-09', tipo: 'reaccion', nivel: 1,
      q: 'Oxidación de 2-propanol. ¿Producto?',
      reac: 'CH<sub>3</sub>–CH(OH)–CH<sub>3</sub> + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      prod: 'CC(C)=O',
      op: ['propanona', 'propanal', 'ácido propanoico', 'propeno'], ok: 0,
      exp: [
        'El 2-propanol es secundario.',
        'Un alcohol secundario se oxida a cetona y ahí se detiene.',
        'Producto propanona.'
      ]
    },
    {
      id: 'cet-10', tipo: 'reaccion', nivel: 2,
      q: 'Reducción de butanona. ¿Producto?',
      reac: 'CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub> + NaBH<sub>4</sub> → ?',
      prod: 'CCC(C)O',
      op: ['2-butanol', '1-butanol', 'butanal', 'butano'], ok: 0,
      exp: [
        'El hidruro ataca al C del carbonilo.',
        'El O queda como OH en el mismo C2.',
        'Se forma el alcohol secundario 2-butanol.'
      ]
    },
    {
      id: 'cet-11', tipo: 'reaccion', nivel: 3,
      q: 'Propanona con Grignard. ¿Producto final?',
      reac: 'CH<sub>3</sub>COCH<sub>3</sub> + CH<sub>3</sub>MgBr, luego H<sub>3</sub>O<sup>+</sup> → ?',
      prod: 'CC(C)(C)O',
      op: ['2-metil-2-propanol', '2-butanol', '2-propanol', 'butanona'], ok: 0,
      exp: [
        'El CH<sub>3</sub> se une al C del carbonilo.',
        'Ese C queda con tres CH<sub>3</sub> y un O<sup>−</sup> que luego se protona.',
        'Alcohol terciario 2-metil-2-propanol.'
      ]
    },
    {
      id: 'cet-12', tipo: 'reaccion', nivel: 2,
      q: '¿Qué pasa al calentar propanona con Tollens?',
      reac: 'CH<sub>3</sub>COCH<sub>3</sub> + Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> → ?',
      op: ['No reacciona, no hay espejo de plata', 'Espejo de plata y ácido acético', 'Precipitado rojo ladrillo', 'Se forma 2-propanol'], ok: 0,
      exp: [
        'Para oxidarse a ácido el carbonilo necesita un H unido.',
        'En una cetona el C=O tiene dos grupos alquilo y ningún H.',
        'Prueba negativa, así se distingue de un aldehído.'
      ]
    },
    {
      id: 'cet-13', tipo: 'reaccion', nivel: 3,
      q: 'Propanona con I<sub>2</sub> y NaOH. ¿Qué se observa?',
      reac: 'CH<sub>3</sub>COCH<sub>3</sub> + I<sub>2</sub> <small>(NaOH)</small> → ?',
      op: ['Precipitado amarillo de yodoformo, CHI<sub>3</sub>', 'Espejo de plata', 'Precipitado rojo ladrillo', 'No reacciona'], ok: 0,
      exp: [
        'La propanona es una metilcetona, tiene CH<sub>3</sub>–CO–.',
        'Los H del CH<sub>3</sub> se cambian por I y luego se rompe ese enlace.',
        'Sale CHI<sub>3</sub>, sólido amarillo con olor característico.'
      ]
    },
    {
      id: 'cet-14', tipo: 'reaccion', nivel: 3,
      q: 'Reducción de Clemmensen de la acetofenona. ¿Producto?',
      reac: 'C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> <small>(Zn(Hg), HCl)</small> → ?',
      prod: 'CCc1ccccc1',
      op: ['etilbenceno', '1-feniletanol', 'tolueno', 'ácido benzoico'], ok: 0,
      exp: [
        'Clemmensen reduce el C=O hasta CH<sub>2</sub>.',
        'El oxígeno sale por completo.',
        'C<sub>6</sub>H<sub>5</sub>–CH<sub>2</sub>–CH<sub>3</sub>, etilbenceno.'
      ]
    },
    {
      id: 'cet-15', tipo: 'reaccion', nivel: 2,
      q: 'Hidratación del 2-butino. ¿Producto?',
      reac: 'CH<sub>3</sub>–C≡C–CH<sub>3</sub> + H<sub>2</sub>O <small>(H<sub>2</sub>SO<sub>4</sub>, HgSO<sub>4</sub>)</small> → ?',
      prod: 'CCC(C)=O',
      op: ['butanona', 'butanal', '2-butanol', '2-buteno'], ok: 0,
      exp: [
        'El agua se suma al triple enlace y forma un enol.',
        'El enol se reacomoda a cetona.',
        'El C=O queda en el C2, butanona.'
      ]
    },
    {
      id: 'cet-16', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: '2-butanol', s: 'CCC(C)O' },
        { t: 'butanona', s: 'CCC(C)=O' },
        { t: 'pentano', s: 'CCCCC' }
      ],
      exp: [
        'Masas parecidas, 74, 72 y 72 g/mol.',
        'Alcohol con puentes de hidrógeno, cetona con dipolo, alcano solo London.',
        '2-butanol 99.5 °C, butanona 80 °C, pentano 36 °C.'
      ]
    },
    {
      id: 'cet-17', tipo: 'ordenar', nivel: 1,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: '2-hexanona', s: 'CCCCC(C)=O' },
        { t: '2-pentanona', s: 'CCCC(C)=O' },
        { t: 'butanona', s: 'CCC(C)=O' },
        { t: 'propanona', s: 'CC(C)=O' }
      ],
      exp: [
        'Misma familia, manda el tamaño.',
        'Cada CH<sub>2</sub> extra suma unos 20 a 25 °C.',
        '2-hexanona 127 °C, 2-pentanona 102 °C, butanona 80 °C, propanona 56 °C.'
      ]
    },
    {
      id: 'cet-18', tipo: 'vf', nivel: 1,
      q: 'En una cetona el carbonilo está unido a dos átomos de carbono.',
      ok: true,
      exp: [
        'Verdadero. Esa es la diferencia con el aldehído.',
        'En el aldehído uno de los dos grupos es un H.',
        'Por eso la cetona más pequeña tiene 3 C.'
      ]
    },
    {
      id: 'cet-19', tipo: 'vf', nivel: 2,
      q: 'Las cetonas dan positivo con el reactivo de Tollens.',
      ok: false,
      exp: [
        'Falso. Tollens es un oxidante suave.',
        'Las cetonas no tienen H en el carbonilo y no se oxidan con él.',
        'Solo los aldehídos forman el espejo de plata.'
      ]
    },
    {
      id: 'cet-20', tipo: 'vf', nivel: 3,
      q: 'La propanona es miscible con agua en cualquier proporción.',
      ok: true,
      exp: [
        'Verdadero. Es pequeña y el O acepta puentes de hidrógeno.',
        'Su parte no polar es solo de dos CH<sub>3</sub>.',
        'Por eso la acetona se usa para secar material de vidrio lavado con agua.'
      ]
    },
    {
      id: 'cet-21', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>4-pentanona</b>. ¿Cuál es el error?',
      mol: { s: 'CCCC(C)=O', c: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>–CO–CH<sub>3</sub>' },
      op: [
        'El C=O debe tener el número más bajo, es 2-pentanona',
        'Es un aldehído, pentanal',
        'La cadena tiene 4 C',
        'Debe ser 3-pentanona'
      ], ok: 0,
      exp: [
        'Se numera desde el extremo más cercano al C=O.',
        'Desde la derecha el C=O queda en 2.',
        'Nombre 2-pentanona o pentan-2-ona.'
      ]
    },
    {
      id: 'cet-22', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>2-metil-3-butanona</b>. ¿Cuál es el error?',
      mol: { s: 'CC(=O)C(C)C', c: 'CH<sub>3</sub>–CO–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
      op: [
        'Se favoreció al metil, pero el C=O manda. Es 3-metil-2-butanona',
        'La cadena tiene 5 C',
        'Es un aldehído',
        'Debe ser 2-metilbutanal'
      ], ok: 0,
      exp: [
        'El grupo funcional tiene prioridad en la numeración.',
        'Desde la izquierda el C=O es el C2.',
        'Así el metil cae en 3, 3-metil-2-butanona.'
      ]
    },
    {
      id: 'cet-23', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es la <b>ciclopentanona</b>?',
      nom: 'ciclopentanona',
      op: [
        { s: 'O=C1CCCC1', c: 'C<sub>5</sub>H<sub>8</sub>O' },
        { s: 'O=C1CCCCC1', c: 'C<sub>6</sub>H<sub>10</sub>O' },
        { s: 'OC1CCCC1', c: 'C<sub>5</sub>H<sub>10</sub>O' },
        { s: 'O=CC1CCCC1', c: 'C<sub>5</sub>H<sub>9</sub>–CHO' }
      ], ok: 0,
      exp: [
        'Anillo de 5 C.',
        'Uno de los C del anillo es el C=O.',
        'La última opción tiene el CHO fuera del anillo, es un aldehído.'
      ]
    },
    {
      id: 'cet-24', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre de este compuesto?',
      mol: { s: 'O=C(c1ccccc1)c1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CO–C<sub>6</sub>H<sub>5</sub>' },
      op: ['difenilmetanona (benzofenona)', '1-feniletanona (acetofenona)', 'benzaldehído', 'difenil éter'], ok: 0,
      exp: [
        'Un C=O unido a dos anillos de benceno.',
        'La cadena principal es el C del carbonilo, metanona, con dos fenilos.',
        'Difenilmetanona, nombre común benzofenona.'
      ]
    }
  ]
});
