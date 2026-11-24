// tema 2 alquenos
(window.TEMAS = window.TEMAS || []).push({
  id: 'alquenos',
  n: 2,
  titulo: 'Alquenos',
  corto: 'Alquenos',
  familia: 'insaturados',

  teoria: [
    '<p><b>Alquenos</b> son hidrocarburos con al menos un <b>doble enlace C=C</b>. Con un solo doble enlace y cadena abierta cumplen <span class="formula">C<sub>n</sub>H<sub>2n</sub></span>.</p>',
    '<ul>',
    '<li>Los C del doble enlace son <b>sp²</b>, planos, con ángulos de 120°.</li>',
    '<li>El doble enlace es un enlace σ más un enlace <b>π</b>. El π es rico en electrones, por eso los alquenos hacen <b>adiciones electrofílicas</b>.</li>',
    '<li>Sufijo <b>-eno</b>. Con dos dobles enlaces <b>-dieno</b>.</li>',
    '<li>El doble enlace no gira. Si cada C del doble enlace tiene dos grupos distintos hay isomería <b>cis-trans</b> (o E/Z).</li>',
    '<li><b>Markovnikov</b>: al sumar HX, el H va al C del doble enlace que ya tiene más H y el X al más sustituido.</li>',
    '</ul>',
    '<div class="nota-caja">Se obtienen por <b>eliminación</b> desde alcoholes o haluros. Ahí manda <b>Zaitsev</b>, sale el alqueno más sustituido.</div>'
  ],

  nomenclatura: {
    pasos: [
      '<b>Cadena principal</b>: la más larga que contenga el doble enlace, aunque exista otra más larga sin él.',
      '<b>Numeración</b>: desde el extremo más cercano al doble enlace. Su localizador es el número menor de sus dos carbonos.',
      '<b>Sustituyentes</b>: se nombran con su número y en orden alfabético, como en alcanos.',
      '<b>Nombre</b>: localizador del doble enlace y sufijo -eno. Se acepta 1-buteno y también but-1-eno.',
      '<b>Isomería</b>: si aplica, antepón cis o trans. Cis tiene los grupos iguales del mismo lado.'
    ],
    ejemplos: [
      {
        s: 'C=CC(C)CC',
        c: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        nom: '3-metil-1-penteno',
        pasos: [
          'Cadena más larga con el doble enlace: 5 carbonos, <b>penteno</b>.',
          'Se numera desde el CH<sub>2</sub>= para que el doble enlace quede en 1.',
          'El metil queda en el C3.',
          'Nombre 3-metil-1-penteno, también 3-metilpent-1-eno.'
        ]
      },
      {
        s: 'C/C=C/CC',
        c: 'CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>3</sub> (trans)',
        nom: 'trans-2-penteno',
        pasos: [
          'Cadena de 5 carbonos con un doble enlace, <b>penteno</b>.',
          'Desde la izquierda el doble enlace empieza en C2, desde la derecha en C3. Gana 2.',
          'Cada C del doble enlace tiene un H y un grupo alquilo, hay isomería geométrica.',
          'Los grupos alquilo quedan en lados opuestos, es <b>trans</b>.'
        ]
      }
    ]
  },

  reacciones: [
    {
      nombre: 'Hidrogenación catalítica',
      reactivos: 'Alqueno + H<sub>2</sub>',
      condiciones: 'Pt, Pd o Ni',
      producto: 'Alcano',
      regla: 'Adición sin, los dos H entran por la misma cara'
    },
    {
      nombre: 'Halogenación',
      reactivos: 'Alqueno + Br<sub>2</sub> o Cl<sub>2</sub>',
      condiciones: 'CCl<sub>4</sub>, sin luz',
      producto: '1,2-dihaloalcano (dihaluro vecinal)',
      regla: 'Adición anti, decolora el bromo'
    },
    {
      nombre: 'Hidrohalogenación',
      reactivos: 'Alqueno + HCl, HBr o HI',
      condiciones: 'Sin peróxidos',
      producto: 'Haloalcano con X en el C más sustituido',
      regla: 'Markovnikov',
      s: 'CC(Br)C',
      c: 'Propeno + HBr da 2-bromopropano'
    },
    {
      nombre: 'HBr con peróxidos',
      reactivos: 'Alqueno + HBr',
      condiciones: 'Peróxidos (ROOR) o luz',
      producto: 'Bromoalcano con Br en el C menos sustituido',
      regla: 'Anti-Markovnikov, solo con HBr',
      s: 'CCCBr',
      c: 'Propeno + HBr con peróxidos da 1-bromopropano'
    },
    {
      nombre: 'Hidratación ácida',
      reactivos: 'Alqueno + H<sub>2</sub>O',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub> diluido',
      producto: 'Alcohol con OH en el C más sustituido',
      regla: 'Markovnikov'
    },
    {
      nombre: 'Oxidación suave',
      reactivos: 'Alqueno + KMnO<sub>4</sub>',
      condiciones: 'Diluido, frío, medio básico',
      producto: '1,2-diol (glicol)',
      regla: 'Oxidación, prueba de Baeyer, el morado se vuelve café'
    },
    {
      nombre: 'Deshidratación de alcoholes (obtención)',
      reactivos: 'Alcohol',
      condiciones: 'H<sub>2</sub>SO<sub>4</sub> concentrado y calor',
      producto: 'Alqueno + H<sub>2</sub>O',
      regla: 'Eliminación, Zaitsev'
    },
    {
      nombre: 'Deshidrohalogenación (obtención)',
      reactivos: 'Haloalcano + KOH',
      condiciones: 'Etanol y calor',
      producto: 'Alqueno + KX + H<sub>2</sub>O',
      regla: 'Eliminación, Zaitsev'
    }
  ],

  propiedades: [
    '<b>Punto de ebullición</b>: muy parecido al del alcano de igual número de C y sube con la cadena. Eteno −104 °C, propeno −47 °C, 1-buteno −6 °C, 1-penteno 30 °C.',
    '<b>Isómeros cis y trans</b>: el cis suele hervir un poco más alto porque tiene un pequeño momento dipolar. El trans es más estable y funde más alto por ser más simétrico.',
    '<b>Solubilidad</b>: no polares, insolubles en agua y solubles en disolventes orgánicos.',
    '<b>Reactividad</b>: mucho más reactivos que los alcanos por el enlace π.',
    '<b>Estabilidad</b>: un alqueno más sustituido es más estable. Por eso Zaitsev da el alqueno con más grupos alquilo.'
  ],

  errores: [
    'Elegir la cadena más larga aunque no tenga el doble enlace. Primero manda el doble enlace.',
    'Numerar para favorecer al sustituyente. El doble enlace tiene prioridad sobre los sustituyentes en la numeración.',
    'Poner Markovnikov al revés. El H va al C que ya tiene más H.',
    'Usar anti-Markovnikov con HCl o HI. El efecto de peróxidos solo funciona con HBr.',
    'Decir que el 1-buteno tiene isomería cis-trans. Su C1 tiene dos H iguales, no hay isomería.',
    'En eliminación, elegir el alqueno menos sustituido. Por Zaitsev sale el más sustituido.'
  ],

  flash: [
    { cat: 'grupo', frente: 'Alqueno', reverso: 'Doble enlace C=C<br><b>C<sub>n</sub>H<sub>2n</sub></b><br>Sufijo -eno' },
    { cat: 'sufijo', frente: 'Sufijo <b>-eno</b>', reverso: 'Alqueno<br>Ejemplo propeno CH<sub>2</sub>=CH–CH<sub>3</sub>' },
    { cat: 'sufijo', frente: 'Sufijo <b>-dieno</b>', reverso: 'Dos dobles enlaces<br>Ejemplo 1,3-butadieno' },
    { cat: 'prefijo', frente: '<b>cis</b> y <b>trans</b>', reverso: 'Cis, grupos del mismo lado del doble enlace<br>Trans, en lados opuestos' },
    { cat: 'reaccion', frente: 'Alqueno + HX', reverso: 'Markovnikov<br>H al C con más H, X al más sustituido' },
    { cat: 'reaccion', frente: 'Alqueno + HBr con peróxidos', reverso: 'Anti-Markovnikov<br>Br al C con más H' },
    { cat: 'reaccion', frente: 'Alqueno + Br<sub>2</sub>', reverso: 'Dihaluro vecinal, adición anti<br>Prueba de insaturación' },
    { cat: 'reaccion', frente: 'Alcohol + H<sub>2</sub>SO<sub>4</sub> y calor', reverso: 'Deshidratación<br>Alqueno más sustituido, Zaitsev' },
    { cat: 'reaccion', frente: 'Alqueno + KMnO<sub>4</sub> frío y diluido', reverso: '1,2-diol<br>El morado pasa a café' }
  ],

  ejercicios: [
    {
      id: 'alq-01', tipo: 'nombre', nivel: 1,
      q: '¿Cuál es el nombre IUPAC de este alqueno?',
      mol: { s: 'C=CCC', c: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['1-buteno', '3-buteno', '2-buteno', 'butano'], ok: 0,
      exp: [
        'Cadena de 4 carbonos con un doble enlace, buteno.',
        'Se numera desde el extremo más cercano al doble enlace, queda entre C1 y C2.',
        'El localizador es el menor, 1-buteno o but-1-eno.'
      ]
    },
    {
      id: 'alq-02', tipo: 'escribir', nivel: 1,
      q: 'Escribe el nombre IUPAC (sin cis ni trans).',
      mol: { s: 'CC=CC', c: 'CH<sub>3</sub>–CH=CH–CH<sub>3</sub>' },
      resp: ['2-buteno', 'but-2-eno'],
      exp: [
        'Cadena de 4 carbonos, buteno.',
        'El doble enlace está entre C2 y C3 desde cualquier extremo.',
        'Nombre 2-buteno o but-2-eno.'
      ]
    },
    {
      id: 'alq-03', tipo: 'estructura', nivel: 1,
      q: '¿Cuál es la estructura del <b>2-metilpropeno</b>?',
      nom: '2-metilpropeno',
      op: [
        { s: 'C=C(C)C', c: 'CH<sub>2</sub>=C(CH<sub>3</sub>)–CH<sub>3</sub>' },
        { s: 'C=CCC', c: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'CC=CC', c: 'CH<sub>3</sub>–CH=CH–CH<sub>3</sub>' },
        { s: 'CC(C)C', c: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>' }
      ], ok: 0,
      exp: [
        'Propeno es CH<sub>2</sub>=CH–CH<sub>3</sub>.',
        'El metil va en el C2, que es un carbono del doble enlace.',
        'En propeno el doble enlace siempre está en 1, por eso no se escribe el 1.'
      ]
    },
    {
      id: 'alq-04', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC correcto?',
      mol: { s: 'C=CC(C)C', c: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>3</sub>' },
      op: ['3-metil-1-buteno', '2-metil-3-buteno', '3-metil-2-buteno', '2-metil-1-buteno'], ok: 0,
      exp: [
        'Cadena de 4 C con el doble enlace, buteno.',
        'El doble enlace manda en la numeración, queda en 1.',
        'Así el metil cae en el C3, 3-metil-1-buteno.'
      ]
    },
    {
      id: 'alq-05', tipo: 'escribir', nivel: 2,
      q: 'Escribe el nombre IUPAC de este compuesto.',
      mol: { s: 'CC(C)=CCC', c: 'CH<sub>3</sub>–C(CH<sub>3</sub>)=CH–CH<sub>2</sub>–CH<sub>3</sub>' },
      resp: ['2-metil-2-penteno', '2-metilpent-2-eno'],
      exp: [
        'Cadena más larga con el doble enlace, 5 carbonos.',
        'Desde la izquierda el doble enlace queda en 2, desde la derecha en 3. Gana 2.',
        'El metil cae en el C2, 2-metil-2-penteno.'
      ]
    },
    {
      id: 'alq-06', tipo: 'nombre', nivel: 3,
      q: '¿Cuál es el nombre según la regla de que la cadena principal debe contener el doble enlace?',
      mol: { s: 'C=C(CC)CCC', c: 'CH<sub>2</sub>=C(CH<sub>2</sub>CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: ['2-etil-1-penteno', '2-propil-1-buteno', '4-etil-4-penteno', '2-etil-2-penteno'], ok: 0,
      exp: [
        'La cadena que contiene los dos C del doble enlace y es más larga va por el propilo, son 5 C.',
        'Por el etil solo serían 4 C, así que el etil queda como sustituyente.',
        'Doble enlace en 1 y etil en 2, 2-etil-1-penteno.'
      ]
    },
    {
      id: 'alq-07', tipo: 'estructura', nivel: 2,
      q: '¿Cuál es el <b>trans-2-buteno</b>?',
      nom: 'trans-2-buteno',
      op: [
        { s: 'C/C=C/C', c: 'CH<sub>3</sub> en lados opuestos' },
        { s: 'C/C=C\\C', c: 'CH<sub>3</sub> del mismo lado' },
        { s: 'C=CCC', c: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub>' },
        { s: 'C=C(C)C', c: 'CH<sub>2</sub>=C(CH<sub>3</sub>)<sub>2</sub>' }
      ], ok: 0,
      exp: [
        '2-buteno es CH<sub>3</sub>–CH=CH–CH<sub>3</sub>.',
        'Trans significa que los dos CH<sub>3</sub> están en lados opuestos del doble enlace.',
        'En la fórmula esqueletal se ve como un zigzag.'
      ]
    },
    {
      id: 'alq-08', tipo: 'vf', nivel: 2,
      q: 'El 2-buteno presenta isomería cis-trans, pero el 1-buteno no.',
      ok: true,
      exp: [
        'Verdadero. Para tener cis-trans cada C del doble enlace necesita dos grupos distintos.',
        'En el 2-buteno cada C tiene un H y un CH<sub>3</sub>.',
        'En el 1-buteno el C1 tiene dos H iguales.'
      ]
    },
    {
      id: 'alq-09', tipo: 'reaccion', nivel: 1,
      q: '¿Qué producto se obtiene?',
      reac: 'CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub> <small>(Pt)</small> → ?',
      prod: 'CC',
      op: ['etano', 'etanol', 'etino', 'metano'], ok: 0,
      exp: [
        'Hidrogenación catalítica, el H<sub>2</sub> se suma al doble enlace.',
        'Cada C gana un H y el doble enlace pasa a simple.',
        'Eteno se convierte en etano.'
      ]
    },
    {
      id: 'alq-10', tipo: 'reaccion', nivel: 2,
      q: '¿Cuál es el producto principal?',
      reac: 'CH<sub>3</sub>–CH=CH<sub>2</sub> + HBr → ?',
      prod: 'CC(Br)C',
      op: ['2-bromopropano', '1-bromopropano', '1,2-dibromopropano', 'propano'], ok: 0,
      exp: [
        'Sin peróxidos se aplica Markovnikov.',
        'El H se une al CH<sub>2</sub>, que ya tiene más H, y se forma el carbocatión secundario, más estable.',
        'El Br entra en el C2, 2-bromopropano.'
      ]
    },
    {
      id: 'alq-11', tipo: 'reaccion', nivel: 3,
      q: '¿Cuál es el producto principal con peróxidos?',
      reac: 'CH<sub>3</sub>–CH=CH<sub>2</sub> + HBr <small>(ROOR)</small> → ?',
      prod: 'CCCBr',
      op: ['1-bromopropano', '2-bromopropano', '1,2-dibromopropano', '2-propanol'], ok: 0,
      exp: [
        'Con peróxidos el mecanismo es por radicales.',
        'El Br· se une primero al C terminal para dejar el radical secundario, más estable.',
        'Resultado anti-Markovnikov, 1-bromopropano.'
      ]
    },
    {
      id: 'alq-12', tipo: 'reaccion', nivel: 2,
      q: '¿Qué se forma al adicionar bromo al propeno?',
      reac: 'CH<sub>3</sub>–CH=CH<sub>2</sub> + Br<sub>2</sub> <small>(CCl<sub>4</sub>)</small> → ?',
      prod: 'CC(Br)CBr',
      op: ['1,2-dibromopropano', '2-bromopropano', '1,3-dibromopropano', '1-bromopropeno'], ok: 0,
      exp: [
        'Cada átomo de Br se une a uno de los C del doble enlace.',
        'Los C del doble enlace son el 1 y el 2.',
        'Queda 1,2-dibromopropano. El color rojo del bromo desaparece.'
      ]
    },
    {
      id: 'alq-13', tipo: 'reaccion', nivel: 3,
      q: 'Hidratación ácida del 2-metilpropeno. ¿Producto principal?',
      reac: 'CH<sub>2</sub>=C(CH<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>O <small>(H<sub>2</sub>SO<sub>4</sub>)</small> → ?',
      prod: 'CC(C)(C)O',
      op: ['2-metil-2-propanol', '2-metil-1-propanol', '2-butanol', '2-metilpropanal'], ok: 0,
      exp: [
        'El H<sup>+</sup> entra en el CH<sub>2</sub> y deja un carbocatión terciario.',
        'El agua ataca ese carbono terciario, Markovnikov.',
        'Se forma el alcohol terciario 2-metil-2-propanol.'
      ]
    },
    {
      id: 'alq-14', tipo: 'reaccion', nivel: 3,
      q: 'Eliminación con base. ¿Cuál es el alqueno principal?',
      reac: 'CH<sub>3</sub>–CHBr–CH<sub>2</sub>–CH<sub>3</sub> + KOH <small>(etanol, calor)</small> → ?',
      prod: 'CC=CC',
      op: ['2-buteno', '1-buteno', '2-butanol', 'butano'], ok: 0,
      exp: [
        'KOH en etanol con calor favorece la eliminación, no la sustitución.',
        'Se pierden el Br y un H del carbono vecino.',
        'Por Zaitsev sale el alqueno más sustituido, 2-buteno.'
      ]
    },
    {
      id: 'alq-15', tipo: 'reaccion', nivel: 3,
      q: 'Deshidratación del 2-metil-2-butanol. ¿Producto principal?',
      reac: '(CH<sub>3</sub>)<sub>2</sub>C(OH)–CH<sub>2</sub>–CH<sub>3</sub> <small>(H<sub>2</sub>SO<sub>4</sub>, calor)</small> → ?',
      prod: 'CC=C(C)C',
      op: ['2-metil-2-buteno', '2-metil-1-buteno', '3-metil-1-buteno', '2-metilbutano'], ok: 0,
      exp: [
        'Sale el OH y un H vecino, se forma un doble enlace.',
        'Hay dos opciones, hacia el CH<sub>3</sub> o hacia el CH<sub>2</sub>.',
        'Zaitsev elige el más sustituido, con tres grupos alquilo en el doble enlace, 2-metil-2-buteno.'
      ]
    },
    {
      id: 'alq-16', tipo: 'reaccion', nivel: 2,
      q: '¿Qué produce el eteno con KMnO<sub>4</sub> diluido y frío?',
      reac: 'CH<sub>2</sub>=CH<sub>2</sub> + KMnO<sub>4</sub> <small>(frío, diluido)</small> → ?',
      prod: 'OCCO',
      op: ['1,2-etanodiol', 'etanol', 'ácido acético', 'etano'], ok: 0,
      exp: [
        'Es una oxidación suave del doble enlace.',
        'Cada C del doble enlace recibe un OH.',
        'Se forma un diol, 1,2-etanodiol o etilenglicol.'
      ]
    },
    {
      id: 'alq-17', tipo: 'grupo', nivel: 1,
      q: '¿A qué familia pertenece este compuesto?',
      mol: { s: 'CC=CC', c: 'CH<sub>3</sub>–CH=CH–CH<sub>3</sub>' },
      op: ['Alqueno', 'Alcano', 'Alquino', 'Alcohol'], ok: 0,
      exp: [
        'Tiene un doble enlace entre carbonos.',
        'No tiene O ni triple enlace.',
        'Es el 2-buteno, C<sub>4</sub>H<sub>8</sub>, que cumple C<sub>n</sub>H<sub>2n</sub>.'
      ]
    },
    {
      id: 'alq-18', tipo: 'ordenar', nivel: 2,
      q: 'Ordena de <b>mayor a menor</b> punto de ebullición.',
      items: [
        { t: '1-penteno', s: 'C=CCCC' },
        { t: '1-buteno', s: 'C=CCC' },
        { t: 'propeno', s: 'C=CC' },
        { t: 'eteno', s: 'C=C' }
      ],
      exp: [
        'Son de la misma familia, así que manda el tamaño.',
        'Más carbonos, más fuerzas de London.',
        '1-penteno 30 °C, 1-buteno −6 °C, propeno −47 °C, eteno −104 °C.'
      ]
    },
    {
      id: 'alq-19', tipo: 'vf', nivel: 1,
      q: 'Un alqueno de cadena abierta con un solo doble enlace cumple C<sub>n</sub>H<sub>2n</sub>.',
      ok: true,
      exp: [
        'Verdadero. El doble enlace quita 2 hidrógenos respecto al alcano.',
        'C<sub>n</sub>H<sub>2n+2</sub> menos 2 H da C<sub>n</sub>H<sub>2n</sub>.',
        'Ejemplo, propeno C<sub>3</sub>H<sub>6</sub>.'
      ]
    },
    {
      id: 'alq-20', tipo: 'error', nivel: 2,
      q: 'Este compuesto se nombró <b>3-penteno</b>. ¿Cuál es el error?',
      mol: { s: 'CCC=CC', c: 'CH<sub>3</sub>–CH<sub>2</sub>–CH=CH–CH<sub>3</sub>' },
      op: [
        'Se numeró desde el extremo lejano al doble enlace, es 2-penteno',
        'La cadena tiene solo 4 carbonos',
        'El sufijo debe ser -ano',
        'Falta un sustituyente metil'
      ], ok: 0,
      exp: [
        'El doble enlace debe recibir el número más bajo.',
        'Desde la derecha empieza en el C2, desde la izquierda en el C3.',
        'Nombre correcto 2-penteno o pent-2-eno.'
      ]
    },
    {
      id: 'alq-21', tipo: 'error', nivel: 3,
      q: 'Este compuesto se nombró <b>2-etil-1-propeno</b>. ¿Cuál es el error?',
      mol: { s: 'C=C(C)CC', c: 'CH<sub>2</sub>=C(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>' },
      op: [
        'La cadena más larga con el doble enlace tiene 4 C, el nombre es 2-metil-1-buteno',
        'El etil debe ir en el C3',
        'Se debía numerar desde el otro extremo, 2-etil-2-propeno',
        'No hay error'
      ], ok: 0,
      exp: [
        'Siguiendo el etil, la cadena que incluye el doble enlace tiene 4 carbonos.',
        'Doble enlace en 1 y el metil restante en el C2.',
        'Igual que en alcanos, un etil en el C2 indica que no se eligió la cadena más larga.'
      ]
    },
    {
      id: 'alq-22', tipo: 'vf', nivel: 3,
      q: 'En la adición de HBr con peróxidos, el Br termina en el carbono del doble enlace que tenía más hidrógenos.',
      ok: true,
      exp: [
        'Verdadero. Es el resultado anti-Markovnikov.',
        'El radical Br· se une al C terminal para formar el radical más estable.',
        'Después el H se une al otro carbono.'
      ]
    },
    {
      id: 'alq-23', tipo: 'nombre', nivel: 2,
      q: '¿Cuál es el nombre IUPAC de este alqueno?',
      mol: { s: 'CC=C(C)C', c: 'CH<sub>3</sub>–CH=C(CH<sub>3</sub>)–CH<sub>3</sub>' },
      op: ['2-metil-2-buteno', '3-metil-2-buteno', '2-metil-3-buteno', '3-metil-1-buteno'], ok: 0,
      exp: [
        'Cadena de 4 C con el doble enlace, buteno.',
        'El doble enlace queda en 2 desde cualquier extremo.',
        'Hay empate, entonces se da el número menor al metil, queda en 2.'
      ]
    },
    {
      id: 'alq-24', tipo: 'escribir', nivel: 3,
      q: 'Escribe el nombre IUPAC de este dieno.',
      mol: { s: 'C=CC=C', c: 'CH<sub>2</sub>=CH–CH=CH<sub>2</sub>' },
      resp: ['1,3-butadieno', 'buta-1,3-dieno'],
      exp: [
        'Cadena de 4 C con dos dobles enlaces.',
        'Los dobles enlaces empiezan en C1 y C3.',
        'Dos dobles enlaces dan el sufijo dieno, 1,3-butadieno o buta-1,3-dieno.'
      ]
    }
  ]
});
