// tema 9 aldehidos
(window.TEMAS = window.TEMAS || []).push({
  id: 'aldehidos',
  n: 9,
  titulo: 'Aldehídos',
  corto: 'Aldehídos',
  familia: 'carbonilos',

  teoria: [
    '<p>Los <b>aldehídos</b> tienen el grupo <b>carbonilo C=O</b> en un extremo de la cadena, unido a un H: <span class="formula">R–CHO</span>.</p>',
    '<ul>',
    '<li>Sufijo <b>-al</b>. El C del –CHO es siempre el <b>C1</b> y no se escribe su número.</li>',
    '<li>El C=O es polar: el C queda con carga parcial positiva y sufre <b>adición nucleofílica</b>.</li>',
    '<li>Se <b>oxidan con facilidad</b> a ácidos carboxílicos, incluso con oxidantes suaves. Por eso dan positivo con <b>Tollens</b> (espejo de plata) y <b>Fehling</b> (precipitado rojo ladrillo).</li>',
    '<li>Se <b>reducen</b> con NaBH<sub>4</sub> o LiAlH<sub>4</sub> a alcoholes primarios.</li>',
    '<li>Nombres comunes: metanal es formaldehído, etanal es acetaldehído y C<sub>6</sub>H<sub>5</sub>CHO es benzaldehído.</li>',
    '</ul>',
    '<div class="nota-caja">Se obtienen oxidando alcoholes primarios con PCC, que se detiene en el aldehído.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: la más larga que incluya el C del –CHO.',
      '<b>Numeración</b>: el C del –CHO es el 1, siempre.',
      '<b>Sustituyentes</b>: con su número y en orden alfabético.',
      '<b>Sufijo</b>: cambia la o del alcano por <b>-al</b>. Con dos –CHO se usa <b>-dial</b>: butanodial.',
      '<b>Anillos</b>: si el –CHO cuelga de un anillo se usa <b>carbaldehído</b>: ciclohexanocarbaldehído.'
    ],
    ejemplos: [
      {
        s: 'CC(C)CC=O',
        c: '(CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CHO',
        nom: '3-metilbutanal',
        pasos: [
          'Cadena de 4 C que incluye el CHO, butanal.',
          'El C del CHO es el 1.',
          'El metil cae en el C3.',
          'Nombre 3-metilbutanal, sin número para el -al.'
        ]
      },
      {
        s: 'CC(Cl)C(C)C=O',
        c: 'CH<sub>3</sub>–CHCl–CH(CH<sub>3</sub>)–CHO',
        nom: '3-cloro-2-metilbutanal',
        pasos: [
          'Cadena de 4 C con el CHO en el C1.',
          'Metil en el C2 y cloro en el C3.',
          'En orden alfabético, cloro antes que metil.',
          'Nombre 3-cloro-2-metilbutanal.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Oxidación de alcohol primario (obtención)',
      reactivos: 'R–CH<sub>2</sub>OH',
      condiciones: 'PCC',
      producto: 'R–CHO',
      regla: 'Oxidación suave'
    },
    {
      nombre: 'Oxidación a ácido',
      reactivos: 'R–CHO',
      condiciones: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> o KMnO<sub>4</sub> en ácido',
      producto: 'R–COOH',
      regla: 'Oxidación'
    },
    {
      nombre: 'Prueba de Tollens',
      reactivos: 'R–CHO + Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>',
      condiciones: 'Medio básico, calor suave',
      producto: 'R–COO<sup>−</sup> + espejo de Ag',
      regla: 'Oxidación, distingue aldehído de cetona'
    },
    {
      nombre: 'Prueba de Fehling',
      reactivos: 'R–CHO + Cu<sup>2+</sup> (azul)',
      condiciones: 'Medio básico, calor',
      producto: 'R–COO<sup>−</sup> + Cu<sub>2</sub>O rojo ladrillo',
      regla: 'Oxidación'
    },
    {
      nombre: 'Reducción',
      reactivos: 'R–CHO + NaBH<sub>4</sub>',
      condiciones: 'Metanol o agua',
      producto: 'R–CH<sub>2</sub>OH, alcohol primario',
      regla: 'Adición nucleofílica de hidruro'
    },
    {
      nombre: 'Adición de Grignard',
      reactivos: 'R–CHO + R′MgX, luego H<sub>3</sub>O<sup>+</sup>',
      condiciones: 'Éter seco',
      producto: 'Alcohol secundario (con metanal, primario)',
      regla: 'Adición nucleofílica',
      s: 'CCC(C)O',
      c: 'Etanal + CH<sub>3</sub>CH<sub>2</sub>MgBr da 2-butanol'
    },
    {
      nombre: 'Formación de acetales',
      reactivos: 'R–CHO + 2 R′OH',
      condiciones: 'H<sup>+</sup>',
      producto: 'Acetal R–CH(OR′)<sub>2</sub> + H<sub>2</sub>O',
      regla: 'Adición nucleofílica, pasa por hemiacetal'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: entre alcanos y alcoholes de masa parecida. Tienen dipolo pero no puentes de hidrógeno entre sí. Propanal 49 °C, butano −0.5 °C, 1-propanol 97 °C.',
    '<b>Tendencia</b>: metanal −19 °C (gas), etanal 20 °C, propanal 49 °C, butanal 75 °C.',
    '<b>Solubilidad</b>: los pequeños son solubles en agua porque el O acepta puentes de hidrógeno. La solubilidad baja con la cadena.',
    '<b>Reactividad</b>: más reactivos que las cetonas, el H estorba menos que un grupo alquilo.',
    '<b>Olor</b>: muchos tienen olores intensos, como el benzaldehído (almendra) y el cinamaldehído (canela).'
  ],

  errores: [
    'Escribir 1-butanal o 4-butanal. El –CHO siempre es C1 y no se numera.',
    'Confundir -al (aldehído) con -ol (alcohol).',
    'Decir que las cetonas dan Tollens. Solo los aldehídos.',
    'Pensar que los aldehídos forman puentes de hidrógeno entre sí. No tienen H unido al O.',
    'Olvidar que con Grignard el metanal da alcohol primario y los otros aldehídos dan secundario.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Aldehído', reverso: 'R–CHO, carbonilo en el extremo<br>Sufijo -al', s: 'CCC=O' },
    { cat: 'sufijo', frente: 'Sufijo <b>-al</b>', reverso: 'Aldehído, el CHO es el C1' },
    { cat: 'sufijo', frente: 'Sufijo <b>-carbaldehído</b>', reverso: 'CHO unido a un anillo' },
    { cat: 'prefijo', frente: 'Prefijo <b>formil</b> u <b>oxo</b>', reverso: 'El CHO cuando no es el grupo principal' },
    { cat: 'reaccion', frente: 'Aldehído + Tollens', reverso: 'Espejo de plata<br>El aldehído pasa a ácido' },
    { cat: 'reaccion', frente: 'Aldehído + Fehling', reverso: 'Precipitado rojo ladrillo Cu<sub>2</sub>O' },
    { cat: 'reaccion', frente: 'Aldehído + NaBH<sub>4</sub>', reverso: 'Alcohol primario' },
    { cat: 'reaccion', frente: 'Aldehído + R–MgX, luego H<sub>3</sub>O<sup>+</sup>', reverso: 'Alcohol secundario' }
  ],

  ejercicios: [
    {
      id: 'ald-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre de este compuesto?',
      mol: { s: 'C=O', c: 'HCHO' },
      op: ['metanal (formaldehído)', 'metanol', 'ácido metanoico', 'metano'], ok: 0,
      exp: [
        'Un solo C con un C=O y dos H.',
        'Es el aldehído más simple.',
        'Metanal, nombre común formaldehído.'
      ]
    },
    {
      id: 'ald-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CCC=O', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CHO' },
      resp: ['propanal'],
      exp: [
        'Cadena de 3 C con el CHO en un extremo.',
        'Propano cambia la o por -al.',
        'Propanal, sin número.'
      ]
    },
    {
      id: 'ald-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es el <b>etanal</b>?',
      nom: 'etanal',
      op: [
        { s: 'CC=O', c: 'CH<sub>3</sub>–CHO' },
        { s: 'CCO', c: 'CH<sub>3</sub>–CH<sub>2</sub>OH' },
        { s: 'CC(=O)O', c: 'CH<sub>3</sub>–COOH' },
        { s: 'COC', c: 'CH<sub>3</sub>–O–CH<sub>3</sub>' }
      ], ok: 0,
      exp: [
        'Et indica 2 C.',
        'El sufijo -al indica un CHO en el extremo.',
        'CH<sub>3</sub>–CHO, acetaldehído.'
      ]
    },
    {
      id: 'ald-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC(C)C=O', c: '(CH<sub>3</sub>)<sub>2</sub>CH–CHO' },
      op: ['2-metilpropanal', '2-metilpropanona', '3-metilpropanal', '2-metilpropanol'], ok: 0,
      exp: [
        'Cadena de 3 C que incluye el CHO.',
        'El CHO es el C1 y el metil queda en el C2.',
        '2-metilpropanal. 3-metilpropanal sería en realidad butanal.'
      ]
    },
    {
      id: 'ald-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC(C)CC=O', c: '(CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CHO' },
      resp: ['3-metilbutanal'],
      exp: [
        'Cadena de 4 C con el CHO.',
        'CHO en el C1, el metil cae en el C3.',
        '3-metilbutanal.'
      ]
    },
    {
      id: 'ald-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC(Cl)C(C)C=O', c: 'CH<sub>3</sub>–CHCl–CH(CH<sub>3</sub>)–CHO' },
      op: ['3-cloro-2-metilbutanal', '2-cloro-3-metilbutanal', '2-metil-3-clorobutanal', '3-cloro-2-metilbutanona'], ok: 0,
      exp: [
        'El CHO manda, es el C1.',
        'Metil en 2 y cloro en 3.',
        'Orden alfabético, cloro va primero.'
      ]
    },
    {
      id: 'ald-07', tipo: 'grupo', nivel: 1,
      q: '¿Qué grupo funcional tiene?',
      mol: { s: 'CCC=O', c: 'CH<sub>3</sub>CH<sub>2</sub>CHO' },
      op: ['Aldehído', 'Cetona', 'Alcohol', 'Ácido carboxílico'], ok: 0,
      exp: [
        'Tiene un C=O.',
        'El C=O está en el extremo y lleva un H.',
        'Es un aldehído, propanal.'
      ]
    },
    {
      id: 'ald-08', tipo: 'grupo', nivel: 2,
      q: '¿Qué tipo de compuesto es?',
      mol: { s: 'O=Cc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CHO' },
      op: ['Aldehído aromático', 'Cetona aromática', 'Fenol', 'Ácido aromático'], ok: 0,
      exp: [
        'Hay un –CHO unido a un anillo de benceno.',
        'El C=O tiene un H, no dos grupos carbonados.',
        'Es el benzaldehído, olor a almendra.'
      ]
    },
    {
      id: 'ald-09', tipo: 'reaccion', nivel: 1,
      q: 'Reducción con borohidruro. ¿Producto?',
      reac: 'CH<sub>3</sub>CH<sub>2</sub>CHO + NaBH<sub>4</sub> → ?',
      prod: 'CCCO',
      op: ['1-propanol', '2-propanol', 'ácido propanoico', 'propano'], ok: 0,
      exp: [
        'El NaBH<sub>4</sub> aporta un hidruro H<sup>−</sup> al C del carbonilo.',
        'El O queda como OH al final.',
        'El C1 pasa a CH<sub>2</sub>OH, alcohol primario 1-propanol.'
      ]
    },
    {
      id: 'ald-10', tipo: 'reaccion', nivel: 2,
      q: '¿Qué se observa al calentar etanal con reactivo de Tollens?',
      reac: 'CH<sub>3</sub>CHO + Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> → ?',
      op: ['Se forma un espejo de plata y el etanal pasa a ion etanoato', 'Se reduce a etanol', 'No reacciona', 'Precipitado rojo ladrillo'], ok: 0,
      exp: [
        'El aldehído se oxida a ácido, que en medio básico queda como etanoato.',
        'El Ag<sup>+</sup> se reduce a plata metálica.',
        'La plata cubre el tubo como un espejo. El rojo ladrillo es Fehling.'
      ]
    },
    {
      id: 'ald-11', tipo: 'reaccion', nivel: 2,
      q: 'Oxidación fuerte. ¿Producto?',
      reac: 'CH<sub>3</sub>CH<sub>2</sub>CHO + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      prod: 'CCC(=O)O',
      op: ['ácido propanoico', '1-propanol', 'propanona', 'propeno'], ok: 0,
      exp: [
        'Los aldehídos se oxidan con mucha facilidad.',
        'El H del CHO se cambia por OH.',
        'Producto ácido propanoico.'
      ]
    },
    {
      id: 'ald-12', tipo: 'reaccion', nivel: 3,
      q: 'Metanal con Grignard. ¿Producto final?',
      reac: 'HCHO + CH<sub>3</sub>MgBr, luego H<sub>3</sub>O<sup>+</sup> → ?',
      prod: 'CCO',
      op: ['etanol', 'metanol', '2-propanol', 'etanal'], ok: 0,
      exp: [
        'El CH<sub>3</sub> del Grignard ataca al C del carbonilo.',
        'Queda CH<sub>3</sub>–CH<sub>2</sub>–O<sup>−</sup> y el ácido lo protona.',
        'Se forma etanol, un alcohol primario. Es el único aldehído que da primario.'
      ]
    },
    {
      id: 'ald-13', tipo: 'reaccion', nivel: 3,
      q: 'Etanal con bromuro de etilmagnesio. ¿Producto final?',
      reac: 'CH<sub>3</sub>CHO + CH<sub>3</sub>CH<sub>2</sub>MgBr, luego H<sub>3</sub>O<sup>+</sup> → ?',
      prod: 'CCC(C)O',
      op: ['2-butanol', '1-butanol', 'butanona', 'butanal'], ok: 0,
      exp: [
        'El etilo se une al C del carbonilo.',
        'Ese C queda con CH<sub>3</sub>, etilo, H y OH.',
        'Es un alcohol secundario, 2-butanol.'
      ]
    },
    {
      id: 'ald-14', tipo: 'reaccion', nivel: 3,
      q: 'Etanal con exceso de metanol en ácido. ¿Producto?',
      reac: 'CH<sub>3</sub>CHO + 2 CH<sub>3</sub>OH <small>(H<sup>+</sup>)</small> → ?',
      prod: 'CC(OC)OC',
      op: ['1,1-dimetoxietano (un acetal)', 'metoxietano', 'etanoato de metilo', '2-metoxietanol'], ok: 0,
      exp: [
        'Primero se suma un metanol y se forma un hemiacetal.',
        'En ácido el OH sale como agua y entra un segundo metanol.',
        'Queda CH<sub>3</sub>CH(OCH<sub>3</sub>)<sub>2</sub>, un acetal.'
      ]
    },
    {
      id: 'ald-15', tipo: 'vf', nivel: 2,
      q: 'El reactivo de Fehling da un precipitado rojo ladrillo con los aldehídos alifáticos.',
      ok: true,
      exp: [
        'Verdadero. El Cu<sup>2+</sup> azul oxida al aldehído.',
        'El cobre se reduce a Cu<sub>2</sub>O, rojo ladrillo.',
        'Las cetonas no dan esta prueba.'
      ]
    },
    {
      id: 'ald-16', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: '1-propanol', s: 'CCCO' },
        { t: 'propanal', s: 'CCC=O' },
        { t: 'butano', s: 'CCCC' }
      ],
      exp: [
        'Masas parecidas, 60, 58 y 58 g/mol.',
        'El alcohol forma puentes de hidrógeno, el aldehído solo tiene dipolo y el alcano solo London.',
        '1-propanol 97 °C, propanal 49 °C, butano −0.5 °C.'
      ]
    },
    {
      id: 'ald-17', tipo: 'ordenar', nivel: 1,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: 'butanal', s: 'CCCC=O' },
        { t: 'propanal', s: 'CCC=O' },
        { t: 'etanal', s: 'CC=O' },
        { t: 'metanal', s: 'C=O' }
      ],
      exp: [
        'Misma familia, manda el tamaño.',
        'Más C, más fuerzas intermoleculares.',
        'Butanal 75 °C, propanal 49 °C, etanal 20 °C, metanal −19 °C.'
      ]
    },
    {
      id: 'ald-18', tipo: 'vf', nivel: 1,
      q: 'En un aldehído, el C del –CHO siempre es el C1 de la cadena.',
      ok: true,
      exp: [
        'Verdadero. El CHO solo puede estar en un extremo.',
        'Por eso se le da el número 1.',
        'Como es siempre 1, no se escribe en el nombre.'
      ]
    },
    {
      id: 'ald-19', tipo: 'vf', nivel: 3,
      q: 'Los aldehídos forman puentes de hidrógeno entre sus propias moléculas.',
      ok: false,
      exp: [
        'Falso. El H del CHO está unido al C, no al O.',
        'Sin H unido a O no hay donador de puente de hidrógeno.',
        'Sí pueden aceptar puentes del agua, por eso los pequeños son solubles.'
      ]
    },
    {
      id: 'ald-20', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>1-butanal</b>. ¿Cuál es el error?',
      mol: { s: 'CCCC=O', c: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO' },
      op: [
        'El CHO siempre es C1 y no se numera, es butanal',
        'Debe ser 4-butanal',
        'El sufijo debe ser -ol',
        'La cadena tiene 3 C'
      ], ok: 0,
      exp: [
        'El grupo CHO solo puede ir al extremo.',
        'Siempre recibe el número 1.',
        'Por eso el nombre correcto es butanal, sin número.'
      ]
    },
    {
      id: 'ald-21', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>2-metil-4-butanal</b>. ¿Cuál es el error?',
      mol: { s: 'CC(C)CC=O', c: '(CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CHO' },
      op: [
        'Se numeró desde el lado equivocado, el CHO es C1 y el nombre es 3-metilbutanal',
        'La cadena tiene 5 C',
        'Debe ser 2-metilbutanona',
        'Solo sobra el 4'
      ], ok: 0,
      exp: [
        'Se numeró desde el extremo del isopropilo.',
        'El CHO manda la numeración, es el C1.',
        'Así el metil queda en 3, 3-metilbutanal.'
      ]
    },
    {
      id: 'ald-22', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es el <b>benzaldehído</b>?',
      nom: 'benzaldehído',
      op: [
        { s: 'O=Cc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CHO' },
        { s: 'CC(=O)c1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CO–CH<sub>3</sub>' },
        { s: 'OCc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CH<sub>2</sub>OH' },
        { s: 'OC(=O)c1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–COOH' }
      ], ok: 0,
      exp: [
        'Benceno con un grupo –CHO.',
        'El C=O lleva un H.',
        'Las otras son acetofenona, alcohol bencílico y ácido benzoico.'
      ]
    },
    {
      id: 'ald-23', tipo: 'escribir', nivel: 3,
      q: 'Escribe el nombre IUPAC de este dialdehído.',
      mol: { s: 'O=CCCC=O', c: 'OHC–CH<sub>2</sub>–CH<sub>2</sub>–CHO' },
      resp: ['butanodial', 'succinaldehído'],
      exp: [
        'Cadena de 4 C con un CHO en cada extremo.',
        'Dos grupos aldehído llevan el sufijo -dial.',
        'Se conserva la o del alcano, butanodial.'
      ]
    },
    {
      id: 'ald-24', tipo: 'vf', nivel: 2,
      q: 'El metanal y el etanal son solubles en agua.',
      ok: true,
      exp: [
        'Verdadero. Son moléculas pequeñas.',
        'El O del carbonilo acepta puentes de hidrógeno del agua.',
        'La formalina es una solución de metanal en agua.'
      ]
    }
  ]
});
