// tema 11 acidos carboxilicos
(window.TEMAS = window.TEMAS || []).push({
  id: 'acidos',
  n: 11,
  titulo: 'Ácidos carboxílicos',
  corto: 'Ácidos carboxílicos',
  familia: 'acidos',

  teoria: [
    '<p>Los <b>ácidos carboxílicos</b> tienen el grupo <b>carboxilo –COOH</b>: un C=O y un –OH en el mismo carbono, <span class="formula">R–COOH</span>.</p>',
    '<ul>',
    '<li>Nombre: <b>ácido</b> + cadena + <b>-oico</b>. El C del –COOH es siempre el <b>C1</b>.</li>',
    '<li>Son <b>ácidos débiles</b> (pKa cerca de 4 a 5), pero mucho más ácidos que fenoles y alcoholes. El ion carboxilato se estabiliza por resonancia entre los dos O.</li>',
    '<li>Reaccionan con NaOH y también con <b>NaHCO<sub>3</sub></b> liberando CO<sub>2</sub>. Los fenoles no reaccionan con bicarbonato.</li>',
    '<li>Grupos que atraen electrones cerca del –COOH, como Cl, <b>aumentan la acidez</b>.</li>',
    '<li>Forman <b>dímeros</b> por dos puentes de hidrógeno, por eso hierven más alto que alcoholes de masa similar.</li>',
    '</ul>',
    '<div class="nota-caja">Nombres comunes: metanoico es fórmico, etanoico es acético, C<sub>6</sub>H<sub>5</sub>COOH es benzoico.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: la más larga que incluya el C del –COOH.',
      '<b>Numeración</b>: el C del –COOH es el C1. No se escribe su número.',
      '<b>Sustituyentes</b>: con su número y en orden alfabético.',
      '<b>Nombre</b>: ácido + sustituyentes + cadena + <b>-oico</b>. Ejemplo ácido 2-metilpropanoico.',
      '<b>Dos COOH</b>: sufijo <b>-dioico</b> conservando la o: ácido etanodioico (oxálico).'
    ],
    ejemplos: [
      {
        s: 'CC(C)CC(C)C(=O)O',
        c: '(CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CH(CH<sub>3</sub>)–COOH',
        nom: 'ácido 2,4-dimetilpentanoico',
        pasos: [
          'Cadena de 5 C que incluye el COOH, pentanoico.',
          'El C del COOH es el 1.',
          'Los metilos quedan en 2 y 4.',
          'Nombre ácido 2,4-dimetilpentanoico.'
        ]
      },
      {
        s: 'CC(Cl)C(=O)O',
        c: 'CH<sub>3</sub>–CHCl–COOH',
        nom: 'ácido 2-cloropropanoico',
        pasos: [
          'Cadena de 3 C, propanoico.',
          'COOH en el C1, cloro en el C2.',
          'Nombre ácido 2-cloropropanoico.',
          'El Cl cerca del COOH lo hace más ácido que el ácido propanoico.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Neutralización',
      reactivos: 'R–COOH + NaOH',
      condiciones: 'Agua',
      producto: 'R–COO<sup>−</sup>Na<sup>+</sup> + H<sub>2</sub>O',
      regla: 'Ácido-base, se forma una sal (carboxilato)'
    },
    {
      nombre: 'Con bicarbonato',
      reactivos: 'R–COOH + NaHCO<sub>3</sub>',
      condiciones: 'Agua',
      producto: 'R–COO<sup>−</sup>Na<sup>+</sup> + H<sub>2</sub>O + CO<sub>2</sub>',
      regla: 'Ácido-base, burbujeo que identifica ácidos'
    },
    {
      nombre: 'Esterificación de Fischer',
      reactivos: 'R–COOH + R′–OH',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub> y calor',
      producto: 'Éster R–COO–R′ + H<sub>2</sub>O',
      regla: 'Sustitución nucleofílica en el acilo, reversible',
      s: 'CCOC(C)=O',
      c: 'Ácido acético + etanol da etanoato de etilo'
    },
    {
      nombre: 'Reducción',
      reactivos: 'R–COOH + LiAlH<sub>4</sub>',
      condiciones: 'Éter seco, luego H<sub>3</sub>O<sup>+</sup>',
      producto: 'R–CH<sub>2</sub>OH, alcohol primario',
      regla: 'Reducción. El NaBH<sub>4</sub> no alcanza'
    },
    {
      nombre: 'Cloruro de ácido',
      reactivos: 'R–COOH + SOCl<sub>2</sub>',
      condiciones: 'Calor',
      producto: 'R–COCl + SO<sub>2</sub> + HCl',
      regla: 'Sustitución del OH'
    },
    {
      nombre: 'Oxidación (obtención)',
      reactivos: 'Alcohol primario o aldehído',
      condiciones: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> o KMnO<sub>4</sub> en ácido',
      producto: 'R–COOH',
      regla: 'Oxidación'
    },
    {
      nombre: 'Carbonatación de Grignard (obtención)',
      reactivos: 'R–MgX + CO<sub>2</sub>',
      condiciones: 'Luego H<sub>3</sub>O<sup>+</sup>',
      producto: 'R–COOH, con un C más',
      regla: 'Adición nucleofílica'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: el más alto de las familias vistas. Forman dímeros con dos puentes de hidrógeno. Ácido propanoico 141 °C, 1-butanol 118 °C, butanal 75 °C, pentano 36 °C.',
    '<b>Solubilidad</b>: del C1 al C4 son miscibles con agua. Después baja con la cadena.',
    '<b>Acidez</b>: fórmico pKa 3.75, acético 4.76, propanoico 4.87. Los grupos alquilo donan electrones y la bajan un poco.',
    '<b>Efecto de halógenos</b>: cloroacético 2.86, dicloroacético 1.29, tricloroacético 0.7. Más Cl, más ácido.',
    '<b>Olor</b>: los pequeños huelen fuerte. El acético es el del vinagre y el butanoico el de la mantequilla rancia.'
  ],

  errores: [
    'Numerar el COOH o ponerle número. Siempre es C1 y no se escribe.',
    'Olvidar la palabra ácido o escribir -ico en vez de -oico.',
    'Decir que el fenol es más ácido que el ácido acético. Es al revés.',
    'Pensar que el NaBH<sub>4</sub> reduce ácidos. Hace falta LiAlH<sub>4</sub>.',
    'Confundir el producto de la esterificación con un éter. El éster conserva el C=O.',
    'Creer que un grupo alquilo aumenta la acidez. Dona electrones y la disminuye.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Ácido carboxílico', reverso: 'R–COOH<br>ácido ...-oico', s: 'CC(=O)O' },
    { cat: 'sufijo', frente: 'Sufijo <b>-oico</b>', reverso: 'Ácido carboxílico<br>Ejemplo ácido etanoico' },
    { cat: 'sufijo', frente: 'Sufijo <b>-oato de ...ilo</b>', reverso: 'Éster, producto de un ácido y un alcohol<br>Ejemplo etanoato de etilo' },
    { cat: 'prefijo', frente: 'Prefijo <b>carboxi</b>', reverso: 'El –COOH cuando no es el grupo principal' },
    { cat: 'reaccion', frente: 'Ácido + alcohol con H<sub>2</sub>SO<sub>4</sub>', reverso: 'Esterificación de Fischer<br>Éster + agua' },
    { cat: 'reaccion', frente: 'Ácido + NaHCO<sub>3</sub>', reverso: 'Sal + H<sub>2</sub>O + CO<sub>2</sub>, burbujas' },
    { cat: 'reaccion', frente: 'Ácido + LiAlH<sub>4</sub>', reverso: 'Alcohol primario' },
    { cat: 'reaccion', frente: 'R–MgX + CO<sub>2</sub>, luego H<sub>3</sub>O<sup>+</sup>', reverso: 'Ácido carboxílico con un C más' }
  ],

  ejercicios: [
    {
      id: 'ac-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre de este compuesto?',
      mol: { s: 'CC(=O)O', c: 'CH<sub>3</sub>–COOH' },
      op: ['ácido etanoico (ácido acético)', 'etanal', 'etanol', 'ácido metanoico'], ok: 0,
      exp: [
        'Cadena de 2 C con un –COOH.',
        'Ácido + etan + oico.',
        'Ácido etanoico, el ácido acético del vinagre.'
      ]
    },
    {
      id: 'ac-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC (con la palabra ácido).',
      mol: { s: 'OC=O', c: 'HCOOH' },
      resp: ['ácido metanoico', 'ácido fórmico'],
      exp: [
        'Un solo C, que es el del –COOH.',
        'Ácido + metan + oico.',
        'Ácido metanoico, nombre común ácido fórmico.'
      ]
    },
    {
      id: 'ac-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es el <b>ácido propanoico</b>?',
      nom: 'ácido propanoico',
      op: [
        { s: 'CCC(=O)O', c: 'CH<sub>3</sub>CH<sub>2</sub>COOH' },
        { s: 'CCC=O', c: 'CH<sub>3</sub>CH<sub>2</sub>CHO' },
        { s: 'COC(C)=O', c: 'CH<sub>3</sub>COOCH<sub>3</sub>' },
        { s: 'CCCO', c: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH' }
      ], ok: 0,
      exp: [
        'Prop indica 3 C en total.',
        'Uno de ellos es el C del –COOH.',
        'CH<sub>3</sub>CH<sub>2</sub>COOH. La tercera opción es un éster isómero.'
      ]
    },
    {
      id: 'ac-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC(C)C(=O)O', c: '(CH<sub>3</sub>)<sub>2</sub>CH–COOH' },
      op: ['ácido 2-metilpropanoico', 'ácido 2-metilbutanoico', 'ácido 3-metilpropanoico', '2-metilpropanal'], ok: 0,
      exp: [
        'Cadena de 3 C que incluye el COOH.',
        'El COOH es el C1 y el metil queda en el C2.',
        'Ácido 2-metilpropanoico.'
      ]
    },
    {
      id: 'ac-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC(Cl)C(=O)O', c: 'CH<sub>3</sub>–CHCl–COOH' },
      resp: ['ácido 2-cloropropanoico'],
      exp: [
        'Cadena de 3 C, propanoico.',
        'El Cl está en el C2.',
        'Ácido 2-cloropropanoico.'
      ]
    },
    {
      id: 'ac-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC(C)CC(C)C(=O)O', c: '(CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CH(CH<sub>3</sub>)–COOH' },
      op: ['ácido 2,4-dimetilpentanoico', 'ácido 3,5-dimetilpentanoico', 'ácido 2-isobutilpropanoico', '2,4-dimetilpentanal'], ok: 0,
      exp: [
        'La cadena más larga con el COOH tiene 5 C.',
        'Desde el COOH los metilos quedan en 2 y 4.',
        'Ácido 2,4-dimetilpentanoico.'
      ]
    },
    {
      id: 'ac-07', tipo: 'grupo', nivel: 1,
      q: '¿Qué grupo funcional tiene?',
      mol: { s: 'CCC(=O)O', c: 'CH<sub>3</sub>CH<sub>2</sub>COOH' },
      op: ['Ácido carboxílico', 'Aldehído', 'Cetona', 'Alcohol'], ok: 0,
      exp: [
        'Tiene C=O y OH en el mismo carbono.',
        'Esa combinación es el carboxilo –COOH.',
        'Es un ácido carboxílico, ácido propanoico.'
      ]
    },
    {
      id: 'ac-08', tipo: 'grupo', nivel: 2,
      q: '¿Qué tipo de compuesto es?',
      mol: { s: 'OC(=O)c1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–COOH' },
      op: ['Ácido carboxílico aromático', 'Fenol', 'Aldehído aromático', 'Cetona aromática'], ok: 0,
      exp: [
        'Hay un –COOH unido al anillo.',
        'El OH está sobre el C=O, no sobre el anillo, así que no es fenol.',
        'Es el ácido benzoico.'
      ]
    },
    {
      id: 'ac-09', tipo: 'reaccion', nivel: 1,
      q: 'Ácido acético con hidróxido de sodio. ¿Productos?',
      reac: 'CH<sub>3</sub>COOH + NaOH → ?',
      op: ['CH<sub>3</sub>COO<sup>−</sup>Na<sup>+</sup> + H<sub>2</sub>O', 'CH<sub>3</sub>CH<sub>2</sub>OH + NaO', 'CH<sub>3</sub>COONa + H<sub>2</sub>', 'No reacciona'], ok: 0,
      exp: [
        'Es una neutralización ácido-base.',
        'El H del COOH pasa al OH<sup>−</sup> y forma agua.',
        'Queda la sal etanoato (acetato) de sodio.'
      ]
    },
    {
      id: 'ac-10', tipo: 'reaccion', nivel: 2,
      q: '¿Qué se observa al agregar bicarbonato de sodio a un ácido carboxílico?',
      reac: 'CH<sub>3</sub>COOH + NaHCO<sub>3</sub> → ?',
      op: ['Burbujas de CO<sub>2</sub>, se forma la sal y agua', 'Precipitado amarillo', 'Espejo de plata', 'Nada, no reacciona'], ok: 0,
      exp: [
        'El ácido es más fuerte que el ácido carbónico.',
        'Le pasa su H<sup>+</sup> al bicarbonato, que se descompone en CO<sub>2</sub> y agua.',
        'Las burbujas sirven para distinguir ácidos de fenoles.'
      ]
    },
    {
      id: 'ac-11', tipo: 'reaccion', nivel: 2,
      q: 'Esterificación de Fischer. ¿Producto orgánico?',
      reac: 'CH<sub>3</sub>COOH + CH<sub>3</sub>CH<sub>2</sub>OH <small>(H<sub>2</sub>SO<sub>4</sub>, calor)</small> → ?',
      prod: 'CCOC(C)=O',
      op: ['etanoato de etilo (acetato de etilo)', 'dietil éter', 'butanona', 'ácido butanoico'], ok: 0,
      exp: [
        'El ácido pierde el OH y el alcohol pierde el H, sale agua.',
        'Se une el CH<sub>3</sub>CO– con el –OCH<sub>2</sub>CH<sub>3</sub>.',
        'Queda CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>, etanoato de etilo, olor a quitaesmalte.'
      ]
    },
    {
      id: 'ac-12', tipo: 'reaccion', nivel: 3,
      q: 'Reducción con LiAlH<sub>4</sub>. ¿Producto?',
      reac: 'CH<sub>3</sub>CH<sub>2</sub>COOH + LiAlH<sub>4</sub>, luego H<sub>3</sub>O<sup>+</sup> → ?',
      prod: 'CCCO',
      op: ['1-propanol', 'propanal', '2-propanol', 'propano'], ok: 0,
      exp: [
        'El LiAlH<sub>4</sub> es un reductor fuerte.',
        'Reduce el COOH hasta CH<sub>2</sub>OH.',
        'Producto 1-propanol, alcohol primario.'
      ]
    },
    {
      id: 'ac-13', tipo: 'reaccion', nivel: 3,
      q: 'Grignard con CO<sub>2</sub>. ¿Producto final?',
      reac: 'CH<sub>3</sub>MgBr + CO<sub>2</sub>, luego H<sub>3</sub>O<sup>+</sup> → ?',
      prod: 'CC(=O)O',
      op: ['ácido etanoico', 'ácido metanoico', 'etanol', 'propanona'], ok: 0,
      exp: [
        'El CH<sub>3</sub> ataca al C del CO<sub>2</sub>.',
        'Se forma CH<sub>3</sub>COO<sup>−</sup> que el ácido protona.',
        'Ácido etanoico, con un C más que el Grignard.'
      ]
    },
    {
      id: 'ac-14', tipo: 'reaccion', nivel: 2,
      q: 'Ácido acético con cloruro de tionilo. ¿Producto orgánico?',
      reac: 'CH<sub>3</sub>COOH + SOCl<sub>2</sub> → ?',
      op: ['CH<sub>3</sub>COCl, cloruro de etanoilo', 'CH<sub>3</sub>CH<sub>2</sub>Cl', 'ClCH<sub>2</sub>COOH', 'CH<sub>3</sub>CHO'], ok: 0,
      exp: [
        'El SOCl<sub>2</sub> cambia el –OH del ácido por –Cl.',
        'El C=O se conserva.',
        'Se forma cloruro de etanoilo (acetilo), el reactivo de la acilación de Friedel-Crafts.'
      ]
    },
    {
      id: 'ac-15', tipo: 'reaccion', nivel: 2,
      q: 'Oxidación del butanal. ¿Producto?',
      reac: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      prod: 'CCCC(=O)O',
      op: ['ácido butanoico', '1-butanol', 'butanona', 'ácido propanoico'], ok: 0,
      exp: [
        'Un aldehído se oxida con facilidad.',
        'El CHO pasa a COOH sin perder carbonos.',
        'Ácido butanoico.'
      ]
    },
    {
      id: 'ac-16', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>más ácido a menos ácido</b>.',
      items: [
        { t: 'ácido etanoico', s: 'CC(=O)O' },
        { t: 'fenol', s: 'Oc1ccccc1' },
        { t: 'etanol', s: 'CCO' }
      ],
      exp: [
        'El carboxilato reparte la carga entre dos O iguales.',
        'El fenóxido la reparte en el anillo, menos eficaz. El etóxido no tiene resonancia.',
        'pKa ácido acético 4.76, fenol 10, etanol 16.'
      ]
    },
    {
      id: 'ac-17', tipo: 'ordenar', nivel: 3,
      q: 'Ordena de <b>más ácido a menos ácido</b>.',
      items: [
        { t: 'ácido tricloroetanoico', s: 'OC(=O)C(Cl)(Cl)Cl' },
        { t: 'ácido cloroetanoico', s: 'OC(=O)CCl' },
        { t: 'ácido etanoico', s: 'CC(=O)O' }
      ],
      exp: [
        'El Cl atrae electrones y estabiliza al carboxilato.',
        'Cuantos más Cl, mayor el efecto.',
        'pKa tricloroacético 0.7, cloroacético 2.86, acético 4.76.'
      ]
    },
    {
      id: 'ac-18', tipo: 'ordenar', nivel: 3,
      q: 'Ordena de <b>más ácido a menos ácido</b>.',
      items: [
        { t: 'ácido metanoico', s: 'OC=O' },
        { t: 'ácido etanoico', s: 'CC(=O)O' },
        { t: 'ácido propanoico', s: 'CCC(=O)O' }
      ],
      exp: [
        'Los grupos alquilo donan electrones al carboxilato.',
        'Eso lo desestabiliza y baja la acidez.',
        'pKa fórmico 3.75, acético 4.76, propanoico 4.87.'
      ]
    },
    {
      id: 'ac-19', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: 'ácido propanoico', s: 'CCC(=O)O' },
        { t: '1-butanol', s: 'CCCCO' },
        { t: 'butanal', s: 'CCCC=O' },
        { t: 'pentano', s: 'CCCCC' }
      ],
      exp: [
        'Masas parecidas, 74, 74, 72 y 72 g/mol.',
        'El ácido forma dímeros con dos puentes de hidrógeno, el alcohol uno, el aldehído solo dipolo.',
        'Ácido propanoico 141 °C, 1-butanol 118 °C, butanal 75 °C, pentano 36 °C.'
      ]
    },
    {
      id: 'ac-20', tipo: 'vf', nivel: 1,
      q: 'El C del grupo –COOH siempre es el C1 de la cadena.',
      ok: true,
      exp: [
        'Verdadero. El carboxilo solo puede estar en un extremo.',
        'Recibe el número 1 y no se escribe.',
        'Por eso se dice ácido butanoico y no ácido 1-butanoico.'
      ]
    },
    {
      id: 'ac-21', tipo: 'vf', nivel: 2,
      q: 'Los ácidos carboxílicos forman dímeros por puentes de hidrógeno y por eso hierven alto.',
      ok: true,
      exp: [
        'Verdadero. Dos moléculas se unen con dos puentes de hidrógeno.',
        'El dímero se comporta como una molécula del doble de masa.',
        'Hierven incluso más alto que los alcoholes de masa similar.'
      ]
    },
    {
      id: 'ac-22', tipo: 'vf', nivel: 3,
      q: 'Un ácido carboxílico es más ácido que un fenol.',
      ok: true,
      exp: [
        'Verdadero. pKa cerca de 4 a 5 contra 10.',
        'En el carboxilato la carga se reparte entre dos O muy electronegativos.',
        'Por eso el ácido reacciona con NaHCO<sub>3</sub> y el fenol no.'
      ]
    },
    {
      id: 'ac-23', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>ácido 1-butanoico</b>. ¿Cuál es el error?',
      mol: { s: 'CCCC(=O)O', c: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH' },
      op: [
        'El COOH siempre es C1 y no se numera, es ácido butanoico',
        'Debe ser ácido 4-butanoico',
        'Falta el sufijo -ol',
        'La cadena tiene 3 C'
      ], ok: 0,
      exp: [
        'El carboxilo siempre está en el C1.',
        'Ese número no aporta información y se omite.',
        'Nombre correcto ácido butanoico.'
      ]
    },
    {
      id: 'ac-24', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>ácido 2-metil-4-butanoico</b>. ¿Cuál es el error?',
      mol: { s: 'CC(C)CC(=O)O', c: '(CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–COOH' },
      op: [
        'Se numeró desde el lado opuesto, el COOH es C1 y el nombre es ácido 3-metilbutanoico',
        'La cadena tiene 5 C',
        'Debe ser ácido 2-metilpropanoico',
        'Solo sobra el 4'
      ], ok: 0,
      exp: [
        'El COOH manda la numeración, es el C1.',
        'Desde ahí el metil queda en el C3.',
        'Ácido 3-metilbutanoico.'
      ]
    },
    {
      id: 'ac-25', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es el <b>ácido benzoico</b>?',
      nom: 'ácido benzoico',
      op: [
        { s: 'OC(=O)c1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–COOH' },
        { s: 'Oc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–OH' },
        { s: 'O=Cc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CHO' },
        { s: 'OC(=O)C1CCCCC1', c: 'C<sub>6</sub>H<sub>11</sub>–COOH' }
      ], ok: 0,
      exp: [
        'Un COOH unido directo a un anillo de benceno.',
        'El fenol tiene solo OH y el benzaldehído CHO.',
        'La última opción tiene un anillo saturado, no aromático.'
      ]
    },
    {
      id: 'ac-26', tipo: 'escribir', nivel: 3,
      q: 'Escribe el nombre IUPAC de este diácido.',
      mol: { s: 'OC(=O)C(=O)O', c: 'HOOC–COOH' },
      resp: ['ácido etanodioico', 'ácido oxálico'],
      exp: [
        'Dos C, cada uno es un COOH.',
        'Dos carboxilos llevan el sufijo -dioico.',
        'Se conserva la o del alcano, ácido etanodioico (oxálico).'
      ]
    }
  ]
});
