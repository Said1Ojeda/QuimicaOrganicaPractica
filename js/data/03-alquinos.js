// tema 3 alquinos
(window.TEMAS = window.TEMAS || []).push({
  id: 'alquinos',
  n: 3,
  titulo: 'Alquinos',
  corto: 'Alquinos',
  familia: 'insaturados',

  teoria: [
    '<p><b>Alquinos</b> son hidrocarburos con al menos un <b>triple enlace C≡C</b>. Con uno solo y cadena abierta cumplen <span class="formula">C<sub>n</sub>H<sub>2n−2</sub></span>.</p>',
    '<ul>',
    '<li>Los C del triple enlace son <b>sp</b> y la geometría es <b>lineal</b>, 180°.</li>',
    '<li>El triple enlace es un σ y dos <b>π</b>. Hacen adiciones como los alquenos y pueden sumar hasta dos moléculas.</li>',
    '<li>Sufijo <b>-ino</b>. El más simple es el etino, llamado acetileno.</li>',
    '<li><b>Terminal</b>: el triple enlace está al final, R–C≡C–H. <b>Interno</b>: R–C≡C–R.</li>',
    '<li>El H de un alquino terminal es <b>ácido</b> (pKa 25). Con NaNH<sub>2</sub> forma un <b>acetiluro</b> que sirve para alargar cadenas.</li>',
    '</ul>',
    '<div class="nota-caja">No hay isomería cis-trans en el triple enlace porque es lineal. Pero al reducirlo eliges cis con Lindlar o trans con Na en NH<sub>3</sub>.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: la más larga que contenga el triple enlace.',
      '<b>Numeración</b>: desde el extremo más cercano al triple enlace.',
      '<b>Sustituyentes</b>: con su número y en orden alfabético.',
      '<b>Nombre</b>: localizador del triple enlace y sufijo -ino. Se acepta 2-pentino y pent-2-ino.',
      '<b>Doble y triple a la vez</b>: el nombre termina en -enino y el doble enlace se escribe primero. Si hay empate en la numeración, el doble enlace recibe el número menor.'
    ],
    ejemplos: [
      {
        s: 'C#CCC(C)C',
        c: 'CH≡C–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        nom: '4-metil-1-pentino',
        pasos: [
          'Cadena más larga con el triple enlace: 5 carbonos, <b>pentino</b>.',
          'Se numera desde el CH≡ para que el triple enlace quede en 1.',
          'El metil queda en el C4.',
          'Nombre 4-metil-1-pentino o 4-metilpent-1-ino.'
        ]
      },
      {
        s: 'CC#CC(C)(C)C',
        c: 'CH<sub>3</sub>–C≡C–C(CH<sub>3</sub>)<sub>3</sub>',
        nom: '4,4-dimetil-2-pentino',
        pasos: [
          'Cadena más larga con el triple enlace: 5 carbonos.',
          'Desde la izquierda el triple enlace queda en 2, desde la derecha en 3. Gana 2.',
          'Los dos metilos quedan en el C4.',
          'Nombre 4,4-dimetil-2-pentino.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Hidrogenación total',
      reactivos: 'Alquino + 2 H<sub>2</sub>',
      condiciones: 'Pt, Pd o Ni',
      producto: 'Alcano',
      regla: 'Adición, se satura por completo'
    },
    {
      nombre: 'Hidrogenación con Lindlar',
      reactivos: 'Alquino + H<sub>2</sub>',
      condiciones: 'Catalizador de Lindlar (Pd envenenado)',
      producto: 'Alqueno <b>cis</b>',
      regla: 'Adición sin, se detiene en el alqueno'
    },
    {
      nombre: 'Reducción con sodio',
      reactivos: 'Alquino + Na',
      condiciones: 'NH<sub>3</sub> líquido',
      producto: 'Alqueno <b>trans</b>',
      regla: 'Adición anti'
    },
    {
      nombre: 'Adición de HX',
      reactivos: 'Alquino + HX (1 o 2 equivalentes)',
      condiciones: 'Sin peróxidos',
      producto: 'Haloalqueno, y con 2 HX un dihaluro geminal (los dos X en el mismo C)',
      regla: 'Markovnikov',
      s: 'CC(C)(Br)Br',
      c: 'Propino + 2 HBr da 2,2-dibromopropano'
    },
    {
      nombre: 'Halogenación',
      reactivos: 'Alquino + 2 Br<sub>2</sub>',
      condiciones: 'CCl<sub>4</sub>',
      producto: 'Tetrahaloalcano',
      regla: 'Adición, primero anti'
    },
    {
      nombre: 'Hidratación',
      reactivos: 'Alquino + H<sub>2</sub>O',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub> y HgSO<sub>4</sub>',
      producto: 'Cetona, y el etino da etanal',
      regla: 'Markovnikov, el enol pasa a cetona (tautomería)'
    },
    {
      nombre: 'Formación y alquilación de acetiluros',
      reactivos: 'Alquino terminal + NaNH<sub>2</sub>, luego R–X primario',
      condiciones: 'NH<sub>3</sub> líquido',
      producto: 'Alquino con la cadena más larga',
      regla: 'Ácido-base y luego sustitución'
    },
    {
      nombre: 'Obtención de acetileno',
      reactivos: 'CaC<sub>2</sub> + 2 H<sub>2</sub>O',
      condiciones: 'Temperatura ambiente',
      producto: 'HC≡CH + Ca(OH)<sub>2</sub>',
      regla: 'Hidrólisis del carburo'
    },
    {
      nombre: 'Doble deshidrohalogenación (obtención)',
      reactivos: 'Dihaluro vecinal o geminal + 2 NaNH<sub>2</sub>',
      condiciones: 'Calor',
      producto: 'Alquino',
      regla: 'Dos eliminaciones seguidas'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: un poco más alto que el del alqueno y el alcano equivalentes. Etino −84 °C (sublima), propino −23 °C, 1-butino 8 °C, 1-pentino 40 °C.',
    '<b>Solubilidad</b>: no polares, insolubles en agua y solubles en disolventes orgánicos.',
    '<b>Acidez</b>: un C sp tiene 50% de carácter s y retiene mejor los electrones. Por eso etino (pKa 25) es más ácido que eteno (pKa 44) y que etano (pKa 50).',
    '<b>Alquino terminal contra interno</b>: solo el terminal tiene el H ácido y forma acetiluros.',
    '<b>Estabilidad</b>: los internos son más estables que los terminales.'
  ],

  errores: [
    'Poner Lindlar y Na en NH<sub>3</sub> al revés. Lindlar da cis y sodio da trans.',
    'Creer que un alquino interno forma acetiluro. Hace falta un H sobre el carbono del triple enlace.',
    'Pensar que la hidratación da un alcohol. El enol se convierte en cetona.',
    'Numerar para favorecer al sustituyente. El triple enlace manda en la numeración.',
    'Buscar isomería cis-trans en el triple enlace. Es lineal y no la tiene.',
    'Olvidar que con 2 HX los dos halógenos quedan en el mismo carbono, no en carbonos vecinos.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Alquino', reverso: 'Triple enlace C≡C<br><b>C<sub>n</sub>H<sub>2n−2</sub></b><br>Sufijo -ino' },
    { cat: 'sufijo', frente: 'Sufijo <b>-ino</b>', reverso: 'Alquino<br>Ejemplo propino HC≡C–CH<sub>3</sub>' },
    { cat: 'sufijo', frente: 'Sufijo <b>-enino</b>', reverso: 'Un doble y un triple enlace en la misma cadena' },
    { cat: 'reaccion', frente: 'Alquino + H<sub>2</sub> con Lindlar', reverso: 'Alqueno <b>cis</b>' },
    { cat: 'reaccion', frente: 'Alquino + Na en NH<sub>3</sub> líquido', reverso: 'Alqueno <b>trans</b>' },
    { cat: 'reaccion', frente: 'Alquino + H<sub>2</sub>O con HgSO<sub>4</sub>', reverso: 'Cetona por Markovnikov<br>El etino da etanal' },
    { cat: 'reaccion', frente: 'Alquino terminal + NaNH<sub>2</sub>', reverso: 'Acetiluro de sodio<br>Luego con R–X alarga la cadena' }
  ],

  ejercicios: [
    {
      id: 'aqn-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre IUPAC de este alquino?',
      mol: { s: 'C#CCC', c: 'CH≡C–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['1-butino', '3-butino', '2-butino', '1-buteno'], ok: 0,
      exp: [
        'Cadena de 4 C con un triple enlace, butino.',
        'Se numera desde el extremo del triple enlace, queda en 1.',
        'Nombre 1-butino o but-1-ino.'
      ]
    },
    {
      id: 'aqn-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC#CC', c: 'CH<sub>3</sub>–C≡C–CH<sub>3</sub>' },
      resp: ['2-butino', 'but-2-ino'],
      exp: [
        'Cadena de 4 C con triple enlace.',
        'El triple enlace está entre C2 y C3 desde cualquier lado.',
        'Nombre 2-butino o but-2-ino.'
      ]
    },
    {
      id: 'aqn-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es la estructura del <b>propino</b>?',
      nom: 'propino',
      op: [
        { s: 'C#CC', c: 'HC≡C–CH<sub>3</sub>' },
        { s: 'C=CC', c: 'CH<sub>2</sub>=CH–CH<sub>3</sub>' },
        { s: 'CCC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'C#C', c: 'HC≡CH' }
      ], ok: 0,
      exp: [
        'Prop indica 3 carbonos.',
        'El sufijo -ino indica un triple enlace.',
        'Con 3 C el triple enlace solo puede estar en 1, HC≡C–CH<sub>3</sub>.'
      ]
    },
    {
      id: 'aqn-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'C#CC(C)C', c: 'HC≡C–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
      op: ['3-metil-1-butino', '2-metil-3-butino', '2-metil-1-butino', '3-metil-2-butino'], ok: 0,
      exp: [
        'Cadena de 4 C con el triple enlace.',
        'El triple enlace manda la numeración y queda en 1.',
        'El metil cae en C3. Un C del triple enlace interno no podría llevar el metil, por eso las otras opciones son imposibles.'
      ]
    },
    {
      id: 'aqn-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC#CC(C)C', c: 'CH<sub>3</sub>–C≡C–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
      resp: ['4-metil-2-pentino', '4-metilpent-2-ino'],
      exp: [
        'Cadena más larga con el triple enlace, 5 carbonos.',
        'Desde la izquierda el triple enlace queda en 2, desde la derecha en 3. Gana 2.',
        'El metil queda en el C4, 4-metil-2-pentino.'
      ]
    },
    {
      id: 'aqn-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'CC#CCC(C)CC', c: 'CH<sub>3</sub>–C≡C–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['5-metil-2-heptino', '3-metil-5-heptino', '5-metil-2-hexino', '5-etil-2-hexino'], ok: 0,
      exp: [
        'La cadena más larga incluye el etilo del final, son 7 carbonos, heptino.',
        'Numerando desde el lado del triple enlace, este queda en 2.',
        'El metil cae en el C5, 5-metil-2-heptino.'
      ]
    },
    {
      id: 'aqn-07', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es la estructura del <b>3,3-dimetil-1-butino</b>?',
      nom: '3,3-dimetil-1-butino',
      op: [
        { s: 'C#CC(C)(C)C', c: 'HC≡C–C(CH<sub>3</sub>)<sub>3</sub>' },
        { s: 'CC#CC(C)C', c: 'CH<sub>3</sub>–C≡C–CH(CH<sub>3</sub>)<sub>2</sub>' },
        { s: 'C#CCC(C)C', c: 'HC≡C–CH<sub>2</sub>–CH(CH<sub>3</sub>)<sub>2</sub>' },
        { s: 'C=CC(C)(C)C', c: 'CH<sub>2</sub>=CH–C(CH<sub>3</sub>)<sub>3</sub>' }
      ], ok: 0,
      exp: [
        'Butino terminal, HC≡C–C–C.',
        'Los dos metilos van en el C3.',
        'El C3 queda con tres grupos CH<sub>3</sub> a su alrededor, un terc-butilo.'
      ]
    },
    {
      id: 'aqn-08', tipo: 'grupo', nivel: 1,
      q: '¿A qué familia pertenece este compuesto?',
      mol: { s: 'C#CCC', c: 'HC≡C–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['Alquino', 'Alqueno', 'Alcano', 'Cicloalcano'], ok: 0,
      exp: [
        'Tiene un triple enlace C≡C.',
        'Cumple C<sub>n</sub>H<sub>2n−2</sub>, C<sub>4</sub>H<sub>6</sub>.',
        'Es un alquino terminal.'
      ]
    },
    {
      id: 'aqn-09', tipo: 'vf', nivel: 1,
      q: 'En el triple enlace los carbonos tienen hibridación sp y la geometría es lineal.',
      ok: true,
      exp: [
        'Verdadero. Cada C del triple enlace usa dos orbitales sp.',
        'Los dos orbitales sp apuntan en direcciones opuestas, 180°.',
        'Los dos orbitales p sobrantes forman los dos enlaces π.'
      ]
    },
    {
      id: 'aqn-10', tipo: 'vf', nivel: 2,
      q: 'El 2-butino reacciona con NaNH<sub>2</sub> formando un acetiluro.',
      ok: false,
      exp: [
        'Falso. Para formar acetiluro se necesita un H sobre el C del triple enlace.',
        'El 2-butino es interno, sus C del triple enlace no tienen H.',
        'Solo los alquinos terminales, como el 1-butino, forman acetiluros.'
      ]
    },
    {
      id: 'aqn-11', tipo: 'reaccion', nivel: 1,
      q: '¿Qué se obtiene con exceso de hidrógeno?',
      reac: 'HC≡CH + 2 H<sub>2</sub> <small>(Pt)</small> → ?',
      prod: 'CC',
      op: ['etano', 'eteno', 'etanol', 'metano'], ok: 0,
      exp: [
        'Con Pt y exceso de H<sub>2</sub> la hidrogenación no se detiene.',
        'Se suman 2 H<sub>2</sub>, uno por cada enlace π.',
        'Se obtiene el alcano, etano.'
      ]
    },
    {
      id: 'aqn-12', tipo: 'reaccion', nivel: 2,
      q: '¿Qué producto da el catalizador de Lindlar?',
      reac: 'CH<sub>3</sub>–C≡C–CH<sub>3</sub> + H<sub>2</sub> <small>(Lindlar)</small> → ?',
      prod: 'C/C=C\\C',
      op: ['cis-2-buteno', 'trans-2-buteno', 'butano', '1-buteno'], ok: 0,
      exp: [
        'Lindlar es un Pd envenenado que se detiene en el alqueno.',
        'Los dos H entran por la misma cara, adición sin.',
        'Los CH<sub>3</sub> quedan del mismo lado, cis-2-buteno.'
      ]
    },
    {
      id: 'aqn-13', tipo: 'reaccion', nivel: 3,
      q: '¿Qué producto se forma con sodio en amoníaco líquido?',
      reac: 'CH<sub>3</sub>–C≡C–CH<sub>3</sub> + Na <small>(NH<sub>3</sub> líquido)</small> → ?',
      prod: 'C/C=C/C',
      op: ['trans-2-buteno', 'cis-2-buteno', 'butano', '2-butanol'], ok: 0,
      exp: [
        'Es una reducción con metal disuelto.',
        'Los H entran por caras opuestas, adición anti.',
        'Los CH<sub>3</sub> quedan en lados opuestos, trans-2-buteno.'
      ]
    },
    {
      id: 'aqn-14', tipo: 'reaccion', nivel: 2,
      q: 'Propino con un equivalente de HBr. ¿Producto principal?',
      reac: 'HC≡C–CH<sub>3</sub> + HBr <small>(1 eq)</small> → ?',
      prod: 'C=C(C)Br',
      op: ['2-bromopropeno', '1-bromopropeno', '2-bromopropano', '1,2-dibromopropano'], ok: 0,
      exp: [
        'Con un solo HBr se suma una vez y queda un doble enlace.',
        'Por Markovnikov el H va al C1 y el Br al C2.',
        'Producto CH<sub>2</sub>=CBr–CH<sub>3</sub>, 2-bromopropeno.'
      ]
    },
    {
      id: 'aqn-15', tipo: 'reaccion', nivel: 3,
      q: 'Propino con exceso de HBr. ¿Producto principal?',
      reac: 'HC≡C–CH<sub>3</sub> + 2 HBr → ?',
      prod: 'CC(C)(Br)Br',
      op: ['2,2-dibromopropano', '1,2-dibromopropano', '1,1-dibromopropano', '2-bromopropeno'], ok: 0,
      exp: [
        'La primera adición da 2-bromopropeno.',
        'La segunda también sigue Markovnikov y el Br vuelve al C2.',
        'Los dos Br quedan en el mismo C, dihaluro geminal 2,2-dibromopropano.'
      ]
    },
    {
      id: 'aqn-16', tipo: 'reaccion', nivel: 3,
      q: 'Hidratación del propino. ¿Producto final?',
      reac: 'HC≡C–CH<sub>3</sub> + H<sub>2</sub>O <small>(H<sub>2</sub>SO<sub>4</sub>, HgSO<sub>4</sub>)</small> → ?',
      prod: 'CC(C)=O',
      op: ['propanona', 'propanal', '2-propanol', '1-propanol'], ok: 0,
      exp: [
        'El OH entra en el C2 por Markovnikov y se forma un enol.',
        'El enol es inestable y se reacomoda a la forma ceto, tautomería.',
        'Queda CH<sub>3</sub>–CO–CH<sub>3</sub>, propanona o acetona.'
      ]
    },
    {
      id: 'aqn-17', tipo: 'reaccion', nivel: 3,
      q: 'Síntesis en dos pasos. ¿Qué alquino se obtiene?',
      reac: 'HC≡CH <small>1) NaNH<sub>2</sub> 2) CH<sub>3</sub>CH<sub>2</sub>Br</small> → ?',
      prod: 'C#CCC',
      op: ['1-butino', '2-butino', '1-buteno', 'butano'], ok: 0,
      exp: [
        'El NaNH<sub>2</sub> quita el H ácido y forma HC≡C<sup>−</sup> Na<sup>+</sup>.',
        'El acetiluro ataca al bromoetano y desplaza al Br.',
        'Se une un etilo al triple enlace, HC≡C–CH<sub>2</sub>–CH<sub>3</sub>, 1-butino.'
      ]
    },
    {
      id: 'aqn-18', tipo: 'reaccion', nivel: 1,
      q: '¿Qué se forma al agregar agua al carburo de calcio?',
      reac: 'CaC<sub>2</sub> + 2 H<sub>2</sub>O → ?',
      op: ['HC≡CH + Ca(OH)<sub>2</sub>', 'CH<sub>2</sub>=CH<sub>2</sub> + CaO', 'CH<sub>4</sub> + CaCO<sub>3</sub>', 'CH<sub>3</sub>–CH<sub>3</sub> + Ca'], ok: 0,
      exp: [
        'El ion carburo C<sub>2</sub><sup>2−</sup> toma dos H del agua.',
        'Se forma etino o acetileno.',
        'El calcio queda como hidróxido, Ca(OH)<sub>2</sub>.'
      ]
    },
    {
      id: 'aqn-19', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>más ácido a menos ácido</b>.',
      items: [
        { t: 'etino', s: 'C#C', c: 'HC≡CH' },
        { t: 'eteno', s: 'C=C', c: 'CH<sub>2</sub>=CH<sub>2</sub>' },
        { t: 'etano', s: 'CC', c: 'CH<sub>3</sub>–CH<sub>3</sub>' }
      ],
      exp: [
        'La acidez depende de qué tan estable queda el carbanión.',
        'Más carácter s en el carbono significa electrones más cerca del núcleo y más estabilidad. sp 50%, sp² 33%, sp³ 25%.',
        'pKa etino 25, eteno 44, etano 50. Menor pKa es más ácido.'
      ]
    },
    {
      id: 'aqn-20', tipo: 'ordenar', nivel: 1,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: '1-pentino', s: 'C#CCCC' },
        { t: '1-butino', s: 'C#CCC' },
        { t: 'propino', s: 'C#CC' },
        { t: 'etino', s: 'C#C' }
      ],
      exp: [
        'Misma familia, entonces manda el tamaño de la cadena.',
        'Más carbonos, más fuerzas de London.',
        '1-pentino 40 °C, 1-butino 8 °C, propino −23 °C, etino −84 °C.'
      ]
    },
    {
      id: 'aqn-21', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>3-pentino</b>. ¿Cuál es el error?',
      mol: { s: 'CC#CCC', c: 'CH<sub>3</sub>–C≡C–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: [
        'El triple enlace debe llevar el número menor, es 2-pentino',
        'El sufijo debe ser -eno',
        'La cadena tiene 4 carbonos',
        'Falta el prefijo di'
      ], ok: 0,
      exp: [
        'Se numera desde el extremo más cercano al triple enlace.',
        'Desde la izquierda empieza en el C2.',
        'Nombre correcto 2-pentino o pent-2-ino.'
      ]
    },
    {
      id: 'aqn-22', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>2-etil-3-butino</b>. ¿Cuál es el error?',
      mol: { s: 'C#CC(C)CC', c: 'HC≡C–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: [
        'No eligió la cadena más larga ni numeró desde el triple enlace, es 3-metil-1-pentino',
        'Solo faltó ordenar alfabéticamente',
        'El nombre correcto es 2-etil-1-butino',
        'El sufijo debería ser -eno'
      ], ok: 0,
      exp: [
        'Siguiendo el etil, la cadena con el triple enlace tiene 5 carbonos.',
        'Se numera desde el CH≡ para que el triple enlace quede en 1.',
        'El metil queda en C3, 3-metil-1-pentino.'
      ]
    },
    {
      id: 'aqn-23', tipo: 'vf', nivel: 3,
      q: 'Un alquino interno hidrogenado con Lindlar da el alqueno trans.',
      ok: false,
      exp: [
        'Falso. Lindlar da el alqueno cis.',
        'Los dos H llegan por la misma cara del catalizador.',
        'Para obtener trans se usa Na en NH<sub>3</sub> líquido.'
      ]
    },
    {
      id: 'aqn-24', tipo: 'escribir', nivel: 3,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC(C)C#CC(C)C', c: '(CH<sub>3</sub>)<sub>2</sub>CH–C≡C–CH(CH<sub>3</sub>)<sub>2</sub>' },
      resp: ['2,5-dimetil-3-hexino', '2,5-dimetilhex-3-ino'],
      exp: [
        'Cadena más larga con el triple enlace, 6 carbonos, hexino.',
        'El triple enlace queda en 3 desde cualquier lado.',
        'Los metilos quedan en 2 y 5, 2,5-dimetil-3-hexino.'
      ]
    }
  ]
});
