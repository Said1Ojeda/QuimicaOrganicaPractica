// tema 5 hidrocarburos aromaticos
(window.TEMAS = window.TEMAS || []).push({
  id: 'aromaticos',
  n: 5,
  titulo: 'Hidrocarburos aromáticos (benceno)',
  corto: 'Aromáticos',
  familia: 'aromaticos',

  teoria: [
    '<p>El <b>benceno</b>, <span class="formula">C<sub>6</sub>H<sub>6</sub></span>, es un anillo plano de 6 C sp² con 6 electrones π <b>deslocalizados</b>. Se dibuja con tres dobles enlaces alternados o con un círculo.</p>',
    '<ul>',
    '<li><b>Resonancia</b>: los seis enlaces C–C miden lo mismo, entre simple y doble.</li>',
    '<li><b>Aromaticidad</b> (Hückel): anillo plano, conjugado y con 4n+2 electrones π. El benceno tiene 6.</li>',
    '<li>Es muy estable. No hace adiciones como los alquenos, hace <b>sustitución electrofílica aromática</b> (SEAr) y conserva el anillo.</li>',
    '<li>Grupo <b>fenil</b>: C<sub>6</sub>H<sub>5</sub>–. Nombres comunes aceptados: tolueno, xileno, estireno, fenol.</li>',
    '<li>Disustituidos: <b>orto</b> (1,2), <b>meta</b> (1,3), <b>para</b> (1,4).</li>',
    '</ul>',
    '<div class="nota-caja"><b>Orientación</b>: –CH<sub>3</sub>, –OH y los halógenos dirigen a orto y para. –NO<sub>2</sub>, –COOH, –CHO y –SO<sub>3</sub>H dirigen a meta y desactivan el anillo.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Un sustituyente</b>: nombre del grupo + benceno. Ejemplo etilbenceno, clorobenceno.',
      '<b>Nombres comunes</b>: metilbenceno es tolueno, hidroxibenceno es fenol, vinilbenceno es estireno.',
      '<b>Dos sustituyentes</b>: usa números 1,2 / 1,3 / 1,4 o los prefijos o-, m-, p-.',
      '<b>Numeración</b>: el juego de números más bajo. Si hay empate, el 1 va al primero en orden alfabético.',
      '<b>Con nombre común como base</b>: el grupo del nombre común es el C1. Ejemplo 4-bromotolueno.'
    ],
    ejemplos: [
      {
        s: 'Cc1ccc(Br)cc1',
        c: 'Br–C<sub>6</sub>H<sub>4</sub>–CH<sub>3</sub>',
        nom: '1-bromo-4-metilbenceno',
        pasos: [
          'Anillo de benceno con dos sustituyentes en posición para.',
          'Los números son 1 y 4 por cualquier lado.',
          'Empate para el 1, bromo va antes que metil en el alfabeto.',
          'Nombre 1-bromo-4-metilbenceno, también p-bromotolueno o 4-bromotolueno.'
        ]
      },
      {
        s: 'Cc1cccc(C)c1',
        c: 'C<sub>6</sub>H<sub>4</sub>(CH<sub>3</sub>)<sub>2</sub>',
        nom: '1,3-dimetilbenceno',
        pasos: [
          'Dos metilos con un carbono de por medio.',
          'Se numeran 1 y 3, no 1 y 5.',
          'Nombre 1,3-dimetilbenceno, también m-xileno.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Halogenación',
      reactivos: 'Benceno + Br<sub>2</sub> o Cl<sub>2</sub>',
      condiciones: 'FeBr<sub>3</sub> o FeCl<sub>3</sub>',
      producto: 'Halobenceno + HX',
      regla: 'Sustitución electrofílica aromática'
    },
    {
      nombre: 'Nitración',
      reactivos: 'Benceno + HNO<sub>3</sub>',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub> concentrado',
      producto: 'Nitrobenceno + H<sub>2</sub>O',
      regla: 'SEAr, el electrófilo es NO<sub>2</sub><sup>+</sup>',
      s: 'O=[N+]([O-])c1ccccc1',
      c: 'Nitrobenceno'
    },
    {
      nombre: 'Sulfonación',
      reactivos: 'Benceno + SO<sub>3</sub>',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub> fumante',
      producto: 'Ácido bencenosulfónico',
      regla: 'SEAr, reversible'
    },
    {
      nombre: 'Alquilación de Friedel-Crafts',
      reactivos: 'Benceno + R–Cl',
      condiciones: 'AlCl<sub>3</sub>',
      producto: 'Alquilbenceno + HCl',
      regla: 'SEAr, puede haber reordenamientos'
    },
    {
      nombre: 'Acilación de Friedel-Crafts',
      reactivos: 'Benceno + R–COCl',
      condiciones: 'AlCl<sub>3</sub>',
      producto: 'Cetona aromática + HCl',
      regla: 'SEAr, sin reordenamientos',
      s: 'CC(=O)c1ccccc1',
      c: 'Con CH<sub>3</sub>COCl da acetofenona'
    },
    {
      nombre: 'Oxidación de la cadena lateral',
      reactivos: 'Alquilbenceno + KMnO<sub>4</sub>',
      condiciones: 'Calor',
      producto: 'Ácido benzoico',
      regla: 'Oxidación, el anillo no cambia'
    },
    {
      nombre: 'Hidrogenación',
      reactivos: 'Benceno + 3 H<sub>2</sub>',
      condiciones: 'Ni, alta presión y temperatura',
      producto: 'Ciclohexano',
      regla: 'Adición, muy difícil por la aromaticidad'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: benceno 80 °C, tolueno 111 °C, etilbenceno 136 °C. Sube con la masa.',
    '<b>Punto de fusión</b>: los isómeros para suelen fundir más alto porque son más simétricos y se empacan mejor.',
    '<b>Solubilidad</b>: no polares, insolubles en agua, buenos disolventes orgánicos.',
    '<b>Reactividad en SEAr</b>: los activantes (–OH, –CH<sub>3</sub>) la aumentan y los desactivantes (–NO<sub>2</sub>, –COOH) la reducen. Fenol &gt; tolueno &gt; benceno &gt; nitrobenceno.',
    '<b>Seguridad</b>: el benceno es tóxico y cancerígeno, por eso en laboratorio se prefiere tolueno.'
  ],

  errores: [
    'Tratar al benceno como alqueno y proponer adición de Br<sub>2</sub>. Sin catalizador no reacciona y con FeBr<sub>3</sub> sustituye.',
    'Numerar 1,5 en lugar de 1,3. Siempre el juego más bajo.',
    'Confundir orto, meta y para. Orto 1,2, meta 1,3, para 1,4.',
    'Olvidar el catalizador en halogenación o Friedel-Crafts.',
    'Equivocar la orientación. Metil orienta a orto y para, nitro orienta a meta.',
    'Confundir fenil (C<sub>6</sub>H<sub>5</sub>–) con bencil (C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>–).'
  ],

  flash: [
    { cat: 'grupo', frente: 'Aromático', reverso: 'Anillo plano conjugado con 4n+2 electrones π<br>Ejemplo benceno', s: 'c1ccccc1' },
    { cat: 'prefijo', frente: '<b>orto</b>, <b>meta</b>, <b>para</b>', reverso: 'o = 1,2<br>m = 1,3<br>p = 1,4' },
    { cat: 'prefijo', frente: '<b>fenil</b>', reverso: 'C<sub>6</sub>H<sub>5</sub>–, el benceno como sustituyente' },
    { cat: 'sufijo', frente: 'Nombres comunes del benceno', reverso: 'Tolueno, metilbenceno<br>Xileno, dimetilbenceno<br>Estireno, vinilbenceno<br>Fenol, hidroxibenceno' },
    { cat: 'reaccion', frente: 'Benceno + HNO<sub>3</sub> con H<sub>2</sub>SO<sub>4</sub>', reverso: 'Nitración<br>Nitrobenceno' },
    { cat: 'reaccion', frente: 'Benceno + R–Cl con AlCl<sub>3</sub>', reverso: 'Alquilación de Friedel-Crafts<br>Alquilbenceno' },
    { cat: 'reaccion', frente: 'Orientadores orto y para', reverso: '–CH<sub>3</sub>, –OH, –OR, halógenos' },
    { cat: 'reaccion', frente: 'Orientadores meta', reverso: '–NO<sub>2</sub>, –COOH, –CHO, –COR, –SO<sub>3</sub>H<br>También desactivan' }
  ],

  ejercicios: [
    {
      id: 'aro-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre de este compuesto?',
      mol: { s: 'Cc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CH<sub>3</sub>' },
      op: ['metilbenceno (tolueno)', 'metilciclohexano', 'xileno', 'fenol'], ok: 0,
      exp: [
        'Es un anillo de benceno con un metil.',
        'Un sustituyente, sin número, metilbenceno.',
        'Su nombre común aceptado por IUPAC es tolueno.'
      ]
    },
    {
      id: 'aro-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CCc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CH<sub>2</sub>–CH<sub>3</sub>' },
      resp: ['etilbenceno'],
      exp: [
        'Benceno con un solo sustituyente.',
        'El sustituyente tiene 2 C, es etil.',
        'Nombre etilbenceno, sin número.'
      ]
    },
    {
      id: 'aro-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es el <b>clorobenceno</b>?',
      nom: 'clorobenceno',
      op: [
        { s: 'Clc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–Cl' },
        { s: 'ClC1CCCCC1', c: 'C<sub>6</sub>H<sub>11</sub>–Cl' },
        { s: 'ClCc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–CH<sub>2</sub>Cl' },
        { s: 'Cc1ccccc1Cl', c: 'Cl–C<sub>6</sub>H<sub>4</sub>–CH<sub>3</sub>' }
      ], ok: 0,
      exp: [
        'Benceno con un Cl unido directamente al anillo.',
        'El de la segunda opción es un anillo saturado, clorociclohexano.',
        'El CH<sub>2</sub>Cl sería cloruro de bencilo, no clorobenceno.'
      ]
    },
    {
      id: 'aro-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre correcto?',
      mol: { s: 'Cc1ccc(C)cc1', c: 'C<sub>6</sub>H<sub>4</sub>(CH<sub>3</sub>)<sub>2</sub>' },
      op: ['1,4-dimetilbenceno (p-xileno)', '1,3-dimetilbenceno (m-xileno)', '1,2-dimetilbenceno (o-xileno)', '1,4-dimetilciclohexano'], ok: 0,
      exp: [
        'Dos metilos en lados opuestos del anillo.',
        'Contando desde uno, el otro queda en el C4.',
        '1,4 es la posición para, p-xileno.'
      ]
    },
    {
      id: 'aro-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC con números.',
      mol: { s: 'Brc1cccc(Br)c1', c: 'C<sub>6</sub>H<sub>4</sub>Br<sub>2</sub>' },
      resp: ['1,3-dibromobenceno', 'm-dibromobenceno', 'meta-dibromobenceno'],
      exp: [
        'Dos bromos con un C de por medio.',
        'Por el camino corto quedan en 1 y 3.',
        '1,3-dibromobenceno, también m-dibromobenceno.'
      ]
    },
    {
      id: 'aro-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC sistemático?',
      mol: { s: 'Cc1ccc(Br)cc1', c: 'Br–C<sub>6</sub>H<sub>4</sub>–CH<sub>3</sub>' },
      op: ['1-bromo-4-metilbenceno', '1-metil-4-bromobenceno', '4-bromo-1-metilbenceno', '1-bromo-3-metilbenceno'], ok: 0,
      exp: [
        'Los sustituyentes están en 1,4 de cualquier forma.',
        'Empate, el 1 va al que va primero en el alfabeto, bromo.',
        'Además se escriben en orden alfabético, 1-bromo-4-metilbenceno.'
      ]
    },
    {
      id: 'aro-07', tipo: 'grupo', nivel: 1,
      q: '¿Qué tipo de compuesto es?',
      mol: { s: 'c1ccccc1', c: 'C<sub>6</sub>H<sub>6</sub>' },
      op: ['Aromático', 'Cicloalqueno', 'Cicloalcano', 'Alquino'], ok: 0,
      exp: [
        'Anillo plano con tres dobles enlaces alternados.',
        'Tiene 6 electrones π deslocalizados, cumple 4n+2 con n igual a 1.',
        'Es el benceno, el aromático por excelencia.'
      ]
    },
    {
      id: 'aro-08', tipo: 'vf', nivel: 1,
      q: 'El benceno reacciona con Br<sub>2</sub> por adición, igual que un alqueno.',
      ok: false,
      exp: [
        'Falso. La aromaticidad le da una estabilidad extra.',
        'Sin catalizador no reacciona con Br<sub>2</sub>.',
        'Con FeBr<sub>3</sub> hace sustitución y conserva el anillo aromático.'
      ]
    },
    {
      id: 'aro-09', tipo: 'vf', nivel: 2,
      q: 'Todos los enlaces C–C del benceno tienen la misma longitud.',
      ok: true,
      exp: [
        'Verdadero. Los electrones π están deslocalizados por todo el anillo.',
        'Cada enlace es un intermedio entre simple y doble, 1.39 Å.',
        'Las dos estructuras de Kekulé son solo formas de resonancia.'
      ]
    },
    {
      id: 'aro-10', tipo: 'reaccion', nivel: 1,
      q: '¿Qué producto se forma?',
      reac: 'Benceno + Br<sub>2</sub> <small>(FeBr<sub>3</sub>)</small> → ?',
      prod: 'Brc1ccccc1',
      op: ['bromobenceno', '1,2-dibromociclohexano', '1,2-dibromobenceno', 'no reacciona'], ok: 0,
      exp: [
        'El FeBr<sub>3</sub> activa al Br<sub>2</sub> y genera el electrófilo.',
        'Se sustituye un H por Br, sale HBr.',
        'El anillo sigue siendo aromático, bromobenceno.'
      ]
    },
    {
      id: 'aro-11', tipo: 'reaccion', nivel: 2,
      q: '¿Qué producto da la nitración?',
      reac: 'Benceno + HNO<sub>3</sub> <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      prod: 'O=[N+]([O-])c1ccccc1',
      op: ['nitrobenceno', 'fenol', 'ácido bencenosulfónico', 'nitrociclohexano'], ok: 0,
      exp: [
        'El H<sub>2</sub>SO<sub>4</sub> convierte al HNO<sub>3</sub> en el ion nitronio NO<sub>2</sub><sup>+</sup>.',
        'El nitronio sustituye un H del anillo.',
        'Se forma nitrobenceno y agua.'
      ]
    },
    {
      id: 'aro-12', tipo: 'reaccion', nivel: 2,
      q: 'Alquilación de Friedel-Crafts. ¿Producto?',
      reac: 'Benceno + CH<sub>3</sub>Cl <small>(AlCl<sub>3</sub>)</small> → ?',
      prod: 'Cc1ccccc1',
      op: ['tolueno (metilbenceno)', 'clorobenceno', 'metilciclohexano', 'etilbenceno'], ok: 0,
      exp: [
        'El AlCl<sub>3</sub> le quita el Cl al CH<sub>3</sub>Cl y forma un electrófilo CH<sub>3</sub><sup>+</sup>.',
        'El metil sustituye un H del anillo.',
        'Producto tolueno y HCl.'
      ]
    },
    {
      id: 'aro-13', tipo: 'reaccion', nivel: 3,
      q: 'Acilación de Friedel-Crafts. ¿Producto?',
      reac: 'Benceno + CH<sub>3</sub>COCl <small>(AlCl<sub>3</sub>)</small> → ?',
      prod: 'CC(=O)c1ccccc1',
      op: ['1-feniletanona (acetofenona)', 'etilbenceno', 'ácido benzoico', 'fenol'], ok: 0,
      exp: [
        'El AlCl<sub>3</sub> forma el ion acilio CH<sub>3</sub>C≡O<sup>+</sup>.',
        'El acilo entra al anillo y queda un C=O unido al benceno.',
        'Producto C<sub>6</sub>H<sub>5</sub>–CO–CH<sub>3</sub>, acetofenona.'
      ]
    },
    {
      id: 'aro-14', tipo: 'reaccion', nivel: 3,
      q: 'Bromación del tolueno. ¿Dónde entra el Br?',
      reac: 'Tolueno + Br<sub>2</sub> <small>(FeBr<sub>3</sub>)</small> → ?',
      op: ['En orto y para, mezcla de 2-bromotolueno y 4-bromotolueno', 'En meta, 3-bromotolueno', 'En el C del metil', 'En las tres posiciones a la vez, 1,3,5-tribromobenceno'], ok: 0,
      exp: [
        'El –CH<sub>3</sub> es activante y dona electrones al anillo.',
        'Estabiliza el intermedio cuando el ataque es en orto o para.',
        'Salen 2-bromotolueno y 4-bromotolueno. En el metil entraría solo con luz y sin FeBr<sub>3</sub>.'
      ]
    },
    {
      id: 'aro-15', tipo: 'reaccion', nivel: 3,
      q: 'Bromación del nitrobenceno. ¿Producto principal?',
      reac: 'Nitrobenceno + Br<sub>2</sub> <small>(FeBr<sub>3</sub>, calor)</small> → ?',
      prod: 'O=[N+]([O-])c1cccc(Br)c1',
      op: ['1-bromo-3-nitrobenceno', '1-bromo-2-nitrobenceno', '1-bromo-4-nitrobenceno', 'bromobenceno'], ok: 0,
      exp: [
        'El –NO<sub>2</sub> retira electrones y desactiva el anillo.',
        'Desestabiliza más las posiciones orto y para, por eso dirige a meta.',
        'El Br entra en 3, 1-bromo-3-nitrobenceno.'
      ]
    },
    {
      id: 'aro-16', tipo: 'reaccion', nivel: 2,
      q: '¿Qué produce la oxidación del tolueno?',
      reac: 'Tolueno + KMnO<sub>4</sub> <small>(calor)</small> → ?',
      prod: 'OC(=O)c1ccccc1',
      op: ['ácido benzoico', 'benzaldehído', 'fenol', 'ciclohexanol'], ok: 0,
      exp: [
        'El KMnO<sub>4</sub> caliente oxida la cadena lateral, no el anillo.',
        'Toda la cadena se reduce a un –COOH unido al anillo.',
        'Producto ácido benzoico.'
      ]
    },
    {
      id: 'aro-17', tipo: 'reaccion', nivel: 2,
      q: '¿Qué produce la sulfonación?',
      reac: 'Benceno + SO<sub>3</sub> <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      prod: 'OS(=O)(=O)c1ccccc1',
      op: ['ácido bencenosulfónico', 'nitrobenceno', 'fenol', 'ácido benzoico'], ok: 0,
      exp: [
        'El electrófilo es el SO<sub>3</sub>.',
        'Se sustituye un H por –SO<sub>3</sub>H.',
        'Producto ácido bencenosulfónico. La reacción es reversible.'
      ]
    },
    {
      id: 'aro-18', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: 'etilbenceno', s: 'CCc1ccccc1' },
        { t: 'tolueno', s: 'Cc1ccccc1' },
        { t: 'benceno', s: 'c1ccccc1' }
      ],
      exp: [
        'Los tres son aromáticos no polares.',
        'Más masa, más fuerzas de London.',
        'Etilbenceno 136 °C, tolueno 111 °C, benceno 80 °C.'
      ]
    },
    {
      id: 'aro-19', tipo: 'ordenar', nivel: 3,
      q: 'Ordena de <b>más a menos reactivo</b> en sustitución electrofílica.',
      items: [
        { t: 'fenol', s: 'Oc1ccccc1' },
        { t: 'tolueno', s: 'Cc1ccccc1' },
        { t: 'benceno', s: 'c1ccccc1' },
        { t: 'nitrobenceno', s: 'O=[N+]([O-])c1ccccc1' }
      ],
      exp: [
        'El –OH es un activante fuerte porque dona electrones por resonancia.',
        'El –CH<sub>3</sub> es un activante débil.',
        'El –NO<sub>2</sub> desactiva, por eso el nitrobenceno queda por debajo del benceno.'
      ]
    },
    {
      id: 'aro-20', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>1,5-diclorobenceno</b>. ¿Cuál es el error?',
      mol: { s: 'Clc1cccc(Cl)c1', c: 'C<sub>6</sub>H<sub>4</sub>Cl<sub>2</sub>' },
      op: [
        'Se numeró por el camino largo, es 1,3-diclorobenceno (m-diclorobenceno)',
        'Debe ser 1,4-diclorobenceno',
        'Falta el prefijo ciclo',
        'Con dos cloros no se usan números'
      ], ok: 0,
      exp: [
        'Entre los dos cloros hay un solo carbono por el lado corto.',
        'Por ese lado son 1 y 3.',
        'El nombre correcto es 1,3-diclorobenceno.'
      ]
    },
    {
      id: 'aro-21', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>1-metil-4-clorobenceno</b>. ¿Cuál es el error?',
      mol: { s: 'Cc1ccc(Cl)cc1', c: 'Cl–C<sub>6</sub>H<sub>4</sub>–CH<sub>3</sub>' },
      op: [
        'Orden alfabético, el correcto es 1-cloro-4-metilbenceno',
        'Los grupos están en 1,3',
        'El nombre debe terminar en tolueno sin números',
        'Debe escribirse 4-metil-1-clorobenceno'
      ], ok: 0,
      exp: [
        'La posición 1,4 está bien.',
        'Ante empate el 1 va al primero del alfabeto, cloro.',
        'Nombre 1-cloro-4-metilbenceno, también 4-clorotolueno.'
      ]
    },
    {
      id: 'aro-22', tipo: 'vf', nivel: 3,
      q: 'El grupo –NO<sub>2</sub> desactiva el anillo y orienta a la posición meta.',
      ok: true,
      exp: [
        'Verdadero. El –NO<sub>2</sub> retira electrones del anillo.',
        'El anillo reacciona más lento que el benceno.',
        'Las posiciones orto y para quedan más pobres en electrones, por eso entra en meta.'
      ]
    },
    {
      id: 'aro-23', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es el <b>1,2-dimetilbenceno (o-xileno)</b>?',
      nom: '1,2-dimetilbenceno',
      op: [
        { s: 'Cc1ccccc1C', c: 'C<sub>6</sub>H<sub>4</sub>(CH<sub>3</sub>)<sub>2</sub>' },
        { s: 'Cc1cccc(C)c1', c: 'C<sub>6</sub>H<sub>4</sub>(CH<sub>3</sub>)<sub>2</sub>' },
        { s: 'Cc1ccc(C)cc1', c: 'C<sub>6</sub>H<sub>4</sub>(CH<sub>3</sub>)<sub>2</sub>' },
        { s: 'CCc1ccccc1', c: 'C<sub>6</sub>H<sub>5</sub>–C<sub>2</sub>H<sub>5</sub>' }
      ], ok: 0,
      exp: [
        '1,2 significa carbonos vecinos.',
        'Esa posición se llama orto.',
        'El etilbenceno es isómero de los xilenos pero no es un dimetilbenceno.'
      ]
    },
    {
      id: 'aro-24', tipo: 'vf', nivel: 1,
      q: 'El benceno tiene fórmula C<sub>6</sub>H<sub>6</sub> y 6 electrones π.',
      ok: true,
      exp: [
        'Verdadero. Cada C aporta un electrón en su orbital p.',
        'Seis C dan seis electrones π deslocalizados.',
        'Seis cumple la regla de Hückel, 4n+2 con n igual a 1.'
      ]
    }
  ]
});
