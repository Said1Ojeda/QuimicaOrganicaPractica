// tema 4 cicloalcanos y cicloalquenos
(window.TEMAS = window.TEMAS || []).push({
  id: 'cicloalcanos',
  n: 4,
  titulo: 'Cicloalcanos y cicloalquenos',
  corto: 'Cicloalcanos',
  familia: 'saturados',

  teoria: [
    '<p><b>Cicloalcanos</b> son alcanos cuyos carbonos forman un anillo. Con un anillo cumplen <span class="formula">C<sub>n</sub>H<sub>2n</sub></span>, igual que los alquenos. Los <b>cicloalquenos</b> tienen un doble enlace dentro del anillo y cumplen <span class="formula">C<sub>n</sub>H<sub>2n−2</sub></span>.</p>',
    '<ul>',
    '<li>Se nombran con el prefijo <b>ciclo</b>: ciclopropano, ciclobutano, ciclopentano, ciclohexano.</li>',
    '<li><b>Tensión de anillo</b>: en el ciclopropano los ángulos son de 60° en vez de 109.5°. Es inestable y se abre con facilidad. El ciclohexano no tiene tensión.</li>',
    '<li>El ciclohexano adopta la conformación de <b>silla</b>, con posiciones <b>axiales</b> y <b>ecuatoriales</b>. Los grupos grandes prefieren la ecuatorial.</li>',
    '<li>El anillo no gira, así que dos sustituyentes en carbonos distintos pueden estar del mismo lado (<b>cis</b>) o en lados opuestos (<b>trans</b>).</li>',
    '<li>Los cicloalcanos reaccionan como alcanos y los cicloalquenos como alquenos.</li>',
    '</ul>',
    '<div class="nota-caja">Un solo sustituyente no lleva número: metilciclohexano, no 1-metilciclohexano.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: el anillo es la cadena principal si tiene igual o más carbonos que la cadena lateral más grande.',
      '<b>Un sustituyente</b>: no lleva número. Ejemplo etilciclopentano.',
      '<b>Varios sustituyentes</b>: numera el anillo para que reciban los números más bajos. El C1 lleva un sustituyente.',
      '<b>Empate</b>: el número 1 va al sustituyente que va primero en orden alfabético.',
      '<b>Cicloalquenos</b>: los C del doble enlace son siempre el 1 y el 2. Luego numera hacia donde los sustituyentes reciban el número más bajo. No se escribe el 1 del doble enlace.'
    ],
    ejemplos: [
      {
        s: 'CCC1CCCC(C)C1',
        c: 'C<sub>6</sub>H<sub>10</sub>(CH<sub>3</sub>)(C<sub>2</sub>H<sub>5</sub>)',
        nom: '1-etil-3-metilciclohexano',
        pasos: [
          'Anillo de 6 carbonos, <b>ciclohexano</b>.',
          'Los sustituyentes quedan en 1 y 3 numerando por el camino más corto.',
          'Empate entre etil y metil para el C1. Etil va primero en el alfabeto, recibe el 1.',
          'Nombre 1-etil-3-metilciclohexano.'
        ]
      },
      {
        s: 'CC1=CCCCC1',
        c: 'C<sub>6</sub>H<sub>9</sub>–CH<sub>3</sub>',
        nom: '1-metilciclohexeno',
        pasos: [
          'Anillo de 6 carbonos con un doble enlace, <b>ciclohexeno</b>.',
          'Los C del doble enlace son el 1 y el 2.',
          'El metil está sobre un C del doble enlace, así que ese C es el 1.',
          'Nombre 1-metilciclohexeno.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Combustión',
      reactivos: 'Cicloalcano + O<sub>2</sub>',
      condiciones: 'Llama',
      producto: 'CO<sub>2</sub> + H<sub>2</sub>O',
      regla: 'Oxidación total'
    },
    {
      nombre: 'Halogenación por radicales',
      reactivos: 'Ciclohexano + Br<sub>2</sub>',
      condiciones: 'Luz (hν)',
      producto: 'Bromociclohexano + HBr',
      regla: 'Sustitución por radicales'
    },
    {
      nombre: 'Apertura del ciclopropano',
      reactivos: 'Ciclopropano + H<sub>2</sub>',
      condiciones: 'Ni y calor',
      producto: 'Propano',
      regla: 'Adición con apertura del anillo, por tensión'
    },
    {
      nombre: 'Hidrogenación de cicloalquenos',
      reactivos: 'Cicloalqueno + H<sub>2</sub>',
      condiciones: 'Pt, Pd o Ni',
      producto: 'Cicloalcano',
      regla: 'Adición sin'
    },
    {
      nombre: 'Bromación de cicloalquenos',
      reactivos: 'Ciclohexeno + Br<sub>2</sub>',
      condiciones: 'CCl<sub>4</sub>',
      producto: 'trans-1,2-dibromociclohexano',
      regla: 'Adición anti',
      s: 'Br[C@H]1[C@@H](CCCC1)Br',
      c: 'Los dos Br en lados opuestos del anillo'
    },
    {
      nombre: 'HX sobre cicloalquenos',
      reactivos: '1-metilciclohexeno + HBr',
      condiciones: 'Sin peróxidos',
      producto: '1-bromo-1-metilciclohexano',
      regla: 'Markovnikov'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: más alto que el del alcano lineal con los mismos carbonos, porque el anillo es más rígido y se empaca mejor. Ciclohexano 81 °C contra hexano 69 °C.',
    '<b>Tendencia</b>: sube con el tamaño del anillo. Ciclopropano −33 °C, ciclobutano 12 °C, ciclopentano 49 °C, ciclohexano 81 °C.',
    '<b>Solubilidad</b>: no polares, insolubles en agua.',
    '<b>Estabilidad</b>: el anillo de 6 es el más estable. Ciclopropano &gt; ciclobutano en tensión.',
    '<b>Acidez</b>: nula, como en los alcanos.'
  ],

  errores: [
    'Escribir 1-metilciclohexano. Con un solo sustituyente no se pone número.',
    'Numerar el anillo por el camino largo. Se busca el juego de números más bajo, como 1,3 y no 1,5.',
    'En cicloalquenos, darle el 1 a un sustituyente que no está en el doble enlace. Los C del doble enlace siempre son 1 y 2.',
    'Confundir ciclohexeno con benceno. El benceno es aromático y no hace adiciones fácilmente.',
    'Olvidar que el Br<sub>2</sub> sobre un cicloalqueno da el producto trans.',
    'Creer que cis y trans solo existen en alquenos. En anillos con dos sustituyentes también existen.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Cicloalcano', reverso: 'Anillo de carbonos con enlaces simples<br><b>C<sub>n</sub>H<sub>2n</sub></b>', s: 'C1CCCCC1' },
    { cat: 'grupo', frente: 'Cicloalqueno', reverso: 'Anillo con un doble enlace<br><b>C<sub>n</sub>H<sub>2n−2</sub></b>', s: 'C1=CCCCC1' },
    { cat: 'prefijo', frente: 'Prefijo <b>ciclo</b>', reverso: 'Indica que la cadena forma un anillo' },
    { cat: 'prefijo', frente: '<b>cis</b> y <b>trans</b> en anillos', reverso: 'Cis, sustituyentes del mismo lado del anillo<br>Trans, en lados opuestos' },
    { cat: 'reaccion', frente: 'Ciclopropano + H<sub>2</sub> con Ni', reverso: 'Se abre el anillo<br>Propano' },
    { cat: 'reaccion', frente: 'Ciclohexeno + Br<sub>2</sub>', reverso: 'trans-1,2-dibromociclohexano<br>Adición anti' }
  ],

  ejercicios: [
    {
      id: 'cic-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC1CCCCC1', c: 'C<sub>6</sub>H<sub>11</sub>–CH<sub>3</sub>' },
      op: ['metilciclohexano', 'heptano', '1-metilhexano', 'metilciclopentano'], ok: 0,
      exp: [
        'Anillo de 6 C, ciclohexano.',
        'Un solo sustituyente metil.',
        'Con un solo sustituyente no se escribe número, metilciclohexano.'
      ]
    },
    {
      id: 'cic-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'C1CCCC1', c: 'C<sub>5</sub>H<sub>10</sub>' },
      resp: ['ciclopentano'],
      exp: [
        'Es un anillo de 5 carbonos con enlaces simples.',
        'Prefijo ciclo y nombre del alcano de 5 C.',
        'Ciclopentano.'
      ]
    },
    {
      id: 'cic-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es el <b>ciclobutano</b>?',
      nom: 'ciclobutano',
      op: [
        { s: 'C1CCC1', c: 'C<sub>4</sub>H<sub>8</sub>' },
        { s: 'C1CC1', c: 'C<sub>3</sub>H<sub>6</sub>' },
        { s: 'C1CCCC1', c: 'C<sub>5</sub>H<sub>10</sub>' },
        { s: 'CCCC', c: 'C<sub>4</sub>H<sub>10</sub>' }
      ], ok: 0,
      exp: [
        'But significa 4 carbonos.',
        'Ciclo indica que forman un anillo.',
        'Un cuadrado de 4 C, C<sub>4</sub>H<sub>8</sub>.'
      ]
    },
    {
      id: 'cic-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC1CCC(C)CC1', c: 'C<sub>6</sub>H<sub>10</sub>(CH<sub>3</sub>)<sub>2</sub>' },
      op: ['1,4-dimetilciclohexano', '1,5-dimetilciclohexano', 'dimetilciclohexano', '1,4-dimetilhexano'], ok: 0,
      exp: [
        'Anillo de 6 C con dos metilos.',
        'Un metil es el C1 y el otro queda en el C4 por cualquiera de los dos caminos.',
        'Con dos sustituyentes sí se escriben los números, 1,4-dimetilciclohexano.'
      ]
    },
    {
      id: 'cic-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CCC1CCCC(C)C1', c: 'C<sub>6</sub>H<sub>10</sub>(CH<sub>3</sub>)(C<sub>2</sub>H<sub>5</sub>)' },
      resp: ['1-etil-3-metilciclohexano'],
      exp: [
        'Anillo de 6 C, ciclohexano.',
        'Por el camino corto los sustituyentes quedan en 1 y 3.',
        'Empate para el 1, se lo lleva etil por orden alfabético.'
      ]
    },
    {
      id: 'cic-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'CC(C)C1CCCC1C', c: 'C<sub>5</sub>H<sub>8</sub>(CH<sub>3</sub>)(CH(CH<sub>3</sub>)<sub>2</sub>)' },
      op: ['1-isopropil-2-metilciclopentano', '2-isopropil-1-metilciclopentano', '1-metil-2-isopropilciclopentano', '1-isopropil-5-metilciclopentano'], ok: 0,
      exp: [
        'Anillo de 5 C, el isopropilo tiene solo 3 C.',
        'Los sustituyentes son vecinos, quedan en 1 y 2.',
        'Para el 1 se compara i con m. Isopropil va primero, el prefijo iso sí cuenta.'
      ]
    },
    {
      id: 'cic-07', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es el <b>cis-1,2-dimetilciclohexano</b>?',
      nom: 'cis-1,2-dimetilciclohexano',
      op: [
        { s: 'C[C@H]1[C@H](CCCC1)C', c: 'Ambos CH<sub>3</sub> del mismo lado' },
        { s: 'C[C@H]1[C@@H](CCCC1)C', c: 'CH<sub>3</sub> en lados opuestos' },
        { s: 'CC1CCCC(C)C1', c: 'Metilos en 1 y 3' },
        { s: 'CC1(C)CCCCC1', c: 'Metilos en el mismo C' }
      ], ok: 0,
      exp: [
        '1,2 significa metilos en carbonos vecinos.',
        'Cis significa que los dos apuntan al mismo lado del anillo, las dos cuñas iguales.',
        'Trans sería una cuña y una línea punteada.'
      ]
    },
    {
      id: 'cic-08', tipo: 'vf', nivel: 2,
      q: 'El 1,2-dimetilciclohexano puede existir como isómero cis y como isómero trans.',
      ok: true,
      exp: [
        'Verdadero. El anillo impide la rotación libre.',
        'Cada metil puede quedar arriba o abajo del plano del anillo.',
        'Si están del mismo lado es cis, si no es trans.'
      ]
    },
    {
      id: 'cic-09', tipo: 'grupo', nivel: 1,
      q: '¿Cómo se clasifica este compuesto?',
      mol: { s: 'C1=CCCCC1', c: 'C<sub>6</sub>H<sub>10</sub>' },
      op: ['Cicloalqueno', 'Cicloalcano', 'Aromático', 'Alqueno de cadena abierta'], ok: 0,
      exp: [
        'Es un anillo.',
        'Tiene un solo doble enlace, no tres alternados.',
        'Es el ciclohexeno, un cicloalqueno. No es aromático.'
      ]
    },
    {
      id: 'cic-10', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC?',
      mol: { s: 'CC1=CCCCC1', c: 'C<sub>6</sub>H<sub>9</sub>–CH<sub>3</sub>' },
      op: ['1-metilciclohexeno', '2-metilciclohexeno', '6-metilciclohexeno', 'metilciclohexano'], ok: 0,
      exp: [
        'Los C del doble enlace son el 1 y el 2.',
        'El metil está sobre un C del doble enlace.',
        'Ese C recibe el 1 para darle el número más bajo, 1-metilciclohexeno.'
      ]
    },
    {
      id: 'cic-11', tipo: 'escribir', nivel: 3,
      q: 'Escribe el nombre IUPAC.',
      mol: { s: 'CC1CC=CCC1', c: 'C<sub>6</sub>H<sub>9</sub>–CH<sub>3</sub>' },
      resp: ['4-metilciclohexeno', '4-metilciclohex-1-eno'],
      exp: [
        'Los C del doble enlace son 1 y 2, el reto es elegir hacia dónde numerar.',
        'En una dirección el metil cae en C4 y en la otra en C5.',
        'Gana el número menor, 4-metilciclohexeno.'
      ]
    },
    {
      id: 'cic-12', tipo: 'reaccion', nivel: 1,
      q: '¿Qué se obtiene?',
      reac: 'Ciclohexeno + H<sub>2</sub> <small>(Pt)</small> → ?',
      prod: 'C1CCCCC1',
      op: ['ciclohexano', 'benceno', 'hexano', 'ciclohexanol'], ok: 0,
      exp: [
        'Hidrogenación catalítica del doble enlace.',
        'El anillo no se abre, solo se satura.',
        'Ciclohexeno pasa a ciclohexano.'
      ]
    },
    {
      id: 'cic-13', tipo: 'reaccion', nivel: 2,
      q: '¿Cuál es el producto de la bromación del ciclohexeno?',
      reac: 'Ciclohexeno + Br<sub>2</sub> <small>(CCl<sub>4</sub>)</small> → ?',
      prod: 'Br[C@H]1[C@@H](CCCC1)Br',
      op: ['trans-1,2-dibromociclohexano', 'cis-1,2-dibromociclohexano', 'bromociclohexano', '1,1-dibromociclohexano'], ok: 0,
      exp: [
        'Se forma un ion bromonio por una cara del anillo.',
        'El Br<sup>−</sup> ataca por la cara opuesta, adición anti.',
        'Los dos Br quedan en lados opuestos, trans-1,2-dibromociclohexano.'
      ]
    },
    {
      id: 'cic-14', tipo: 'reaccion', nivel: 3,
      q: '¿Cuál es el producto principal?',
      reac: '1-metilciclohexeno + HBr → ?',
      prod: 'CC1(Br)CCCCC1',
      op: ['1-bromo-1-metilciclohexano', '1-bromo-2-metilciclohexano', '(bromometil)ciclohexano', 'metilciclohexano'], ok: 0,
      exp: [
        'Markovnikov, el H entra en el C del doble enlace que tiene un H.',
        'Queda un carbocatión terciario en el C que tiene el metil.',
        'El Br entra ahí, 1-bromo-1-metilciclohexano.'
      ]
    },
    {
      id: 'cic-15', tipo: 'reaccion', nivel: 2,
      q: '¿Qué le pasa al ciclopropano con hidrógeno?',
      reac: 'Ciclopropano + H<sub>2</sub> <small>(Ni, calor)</small> → ?',
      prod: 'CCC',
      op: ['propano', 'propeno', 'ciclopropeno', 'no reacciona'], ok: 0,
      exp: [
        'El ciclopropano tiene ángulos de 60°, mucha tensión.',
        'Esa tensión hace que el anillo se abra como si fuera un doble enlace.',
        'Se suma H<sub>2</sub> y queda propano.'
      ]
    },
    {
      id: 'cic-16', tipo: 'reaccion', nivel: 3,
      q: 'Hidratación ácida. ¿Producto principal?',
      reac: '1-metilciclohexeno + H<sub>2</sub>O <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      prod: 'CC1(O)CCCCC1',
      op: ['1-metilciclohexanol', '2-metilciclohexanol', 'ciclohexilmetanol', 'metilciclohexano'], ok: 0,
      exp: [
        'El H<sup>+</sup> entra en el C del doble enlace con más H.',
        'Se forma el carbocatión terciario donde está el metil.',
        'El agua ataca ahí, Markovnikov, 1-metilciclohexanol.'
      ]
    },
    {
      id: 'cic-17', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: 'ciclohexano', s: 'C1CCCCC1' },
        { t: 'ciclopentano', s: 'C1CCCC1' },
        { t: 'ciclobutano', s: 'C1CCC1' },
        { t: 'ciclopropano', s: 'C1CC1' }
      ],
      exp: [
        'Misma familia, manda el tamaño del anillo.',
        'Más carbonos, más fuerzas de London.',
        'Ciclohexano 81 °C, ciclopentano 49 °C, ciclobutano 12 °C, ciclopropano −33 °C.'
      ]
    },
    {
      id: 'cic-18', tipo: 'ordenar', nivel: 3,
      q: 'Ordena de <b>menor a mayor</b> tensión de anillo.',
      items: [
        { t: 'ciclohexano', s: 'C1CCCCC1' },
        { t: 'ciclopentano', s: 'C1CCCC1' },
        { t: 'ciclobutano', s: 'C1CCC1' },
        { t: 'ciclopropano', s: 'C1CC1' }
      ],
      exp: [
        'La tensión aparece cuando los ángulos se alejan de 109.5°.',
        'El ciclohexano en silla casi no tiene tensión, el ciclopentano muy poca.',
        'Ciclobutano (cerca de 90°) y ciclopropano (60°) son los más tensos.'
      ]
    },
    {
      id: 'cic-19', tipo: 'vf', nivel: 1,
      q: 'Un cicloalcano con un solo anillo tiene la misma fórmula general que un alqueno, C<sub>n</sub>H<sub>2n</sub>.',
      ok: true,
      exp: [
        'Verdadero. Cerrar el anillo quita 2 H, igual que un doble enlace.',
        'Por eso ciclohexano y 1-hexeno son isómeros, C<sub>6</sub>H<sub>12</sub>.',
        'Para distinguirlos se usa la reacción con Br<sub>2</sub>, solo el alqueno la decolora rápido.'
      ]
    },
    {
      id: 'cic-20', tipo: 'vf', nivel: 2,
      q: 'En la conformación de silla, el ciclohexano tiene ángulos cercanos a 109.5° y casi no tiene tensión.',
      ok: true,
      exp: [
        'Verdadero. El anillo no es plano, se pliega.',
        'En silla cada C mantiene ángulos casi tetraédricos.',
        'Por eso el anillo de 6 es tan común en la naturaleza.'
      ]
    },
    {
      id: 'cic-21', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>1,5-dimetilciclohexano</b>. ¿Cuál es el error?',
      mol: { s: 'CC1CCCC(C)C1', c: 'C<sub>6</sub>H<sub>10</sub>(CH<sub>3</sub>)<sub>2</sub>' },
      op: [
        'Se numeró por el camino largo, es 1,3-dimetilciclohexano',
        'Falta escribir ciclo',
        'Con dos metilos no se usan números',
        'Debe ser 1,2-dimetilciclohexano'
      ], ok: 0,
      exp: [
        'Desde un metil hay dos caminos alrededor del anillo.',
        'Por un lado el otro metil queda en 3 y por el otro en 5.',
        'Se elige el más bajo, 1,3-dimetilciclohexano.'
      ]
    },
    {
      id: 'cic-22', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>2-metilciclohexeno</b>. ¿Cuál es el error?',
      mol: { s: 'CC1=CCCCC1', c: 'C<sub>6</sub>H<sub>9</sub>–CH<sub>3</sub>' },
      op: [
        'El metil está en un C del doble enlace y debe ser el C1, es 1-metilciclohexeno',
        'El doble enlace debe tener los números 2 y 3',
        'Debe llamarse metilciclohexano',
        'Falta escribir el 1 del doble enlace, 2-metilciclohex-1-eno'
      ], ok: 0,
      exp: [
        'El doble enlace ocupa 1 y 2, pero cualquiera de sus dos C puede ser el 1.',
        'Se elige para que el metil reciba el número más bajo.',
        'Así el metil queda en 1, 1-metilciclohexeno.'
      ]
    },
    {
      id: 'cic-23', tipo: 'vf', nivel: 3,
      q: 'El ciclohexano es soluble en agua porque su anillo es más compacto que el hexano.',
      ok: false,
      exp: [
        'Falso. Sigue siendo un hidrocarburo no polar.',
        'No puede formar puentes de hidrógeno con el agua.',
        'Es insoluble en agua y se usa como disolvente no polar.'
      ]
    },
    {
      id: 'cic-24', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es el <b>ciclohexeno</b>?',
      nom: 'ciclohexeno',
      op: [
        { s: 'C1=CCCCC1', c: 'C<sub>6</sub>H<sub>10</sub>' },
        { s: 'C1CCCCC1', c: 'C<sub>6</sub>H<sub>12</sub>' },
        { s: 'c1ccccc1', c: 'C<sub>6</sub>H<sub>6</sub>' },
        { s: 'C1=CCCC1', c: 'C<sub>5</sub>H<sub>8</sub>' }
      ], ok: 0,
      exp: [
        'Hex indica 6 carbonos y ciclo un anillo.',
        'El sufijo -eno indica un doble enlace.',
        'Anillo de 6 con un solo doble enlace. Con tres alternados sería benceno.'
      ]
    }
  ]
});
