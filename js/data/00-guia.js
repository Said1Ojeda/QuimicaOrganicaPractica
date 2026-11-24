// guia de nomenclatura IUPAC desde cero
window.GUIA = {
  intro: [
    '<p><b>IUPAC</b> es el sistema oficial para ponerle nombre a los compuestos. La idea es que cada nombre describa una sola molécula, así cualquiera puede dibujarla solo con leerlo.</p>',
    '<p>Todo nombre se arma con <b>tres piezas</b>, siempre en este orden:</p>',
    '<div class="partes"><span class="p1">sustituyentes</span><span class="p2">raíz</span><span class="p3">sufijo</span></div>',
    '<p class="centro"><b>3-metil</b> + <b>pent</b> + <b>ano</b> = 3-metilpentano</p>',
    '<ul>',
    '<li>La <b>raíz</b> dice cuántos carbonos tiene la cadena principal.</li>',
    '<li>El <b>sufijo</b> dice qué familia es (alcano, alcohol, cetona...).</li>',
    '<li>Los <b>sustituyentes</b> son los grupos que cuelgan de la cadena, con el número del carbono donde están.</li>',
    '</ul>'
  ],

  raices: [
    ['1', 'met'], ['2', 'et'], ['3', 'prop'], ['4', 'but'], ['5', 'pent'],
    ['6', 'hex'], ['7', 'hept'], ['8', 'oct'], ['9', 'non'], ['10', 'dec']
  ],

  // de mayor a menor prioridad para elegir el grupo principal
  grupos: [
    ['Ácido carboxílico', '–COOH', 'ácido ...-oico', 'carboxi'],
    ['Aldehído', '–CHO', '-al', 'formil u oxo'],
    ['Cetona', 'C=O en medio', '-ona', 'oxo'],
    ['Alcohol', '–OH', '-ol', 'hidroxi'],
    ['Alqueno', 'C=C', '-eno', 'no aplica'],
    ['Alquino', 'C≡C', '-ino', 'no aplica'],
    ['Alcano', 'solo C–C', '-ano', 'alquil (metil, etil)'],
    ['Éter', 'R–O–R', 'se nombra como alcoxi', 'metoxi, etoxi'],
    ['Halógeno', '–F, –Cl, –Br, –I', 'solo prefijo', 'fluoro, cloro, bromo, yodo']
  ],

  pasos: [
    { t: 'Identifica el grupo funcional', d: 'Mira qué hay además de C e H. Ese grupo decide el sufijo. Si hay varios, manda el de más arriba en la tabla de prioridad.' },
    { t: 'Encuentra la cadena principal', d: 'Es la cadena de carbonos más larga que contiene al grupo funcional (o al doble o triple enlace). Puede doblar esquinas, no tiene que ser la que se ve recta.' },
    { t: 'Numera la cadena', d: 'Empieza por el extremo que le da el número más bajo al grupo funcional. Si no hay grupo funcional, al primer sustituyente que encuentres.' },
    { t: 'Nombra los sustituyentes', d: 'Cada rama es un sustituyente: un CH<sub>3</sub> es metil, un CH<sub>2</sub>CH<sub>3</sub> es etil, un Cl es cloro. Ponle su número.' },
    { t: 'Ordena alfabéticamente', d: 'Los sustituyentes van en orden alfabético. Si se repiten usa di, tri, tetra, pero esos prefijos no cuentan para el orden.' },
    { t: 'Arma el nombre', d: 'Sustituyentes + raíz + sufijo. Números separados por comas entre sí y por guion de las letras. Todo junto, sin espacios.' }
  ],

  ejemplo: {
    s: 'CCC(C)CC(C)O',
    c: 'CH<sub>3</sub>–CH(OH)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
    pasos: [
      '<b>Grupo funcional:</b> hay un –OH, es un alcohol. Sufijo <b>-ol</b>.',
      '<b>Cadena principal:</b> la más larga con el C del OH tiene 6 carbonos. Raíz <b>hex</b>.',
      '<b>Numeración:</b> desde la izquierda el OH queda en C2, desde la derecha en C5. Se elige la izquierda.',
      '<b>Sustituyentes:</b> sobra un CH<sub>3</sub> colgando del C4, es un <b>4-metil</b>.',
      '<b>Nombre:</b> 4-metil + hexan + 2-ol = <b>4-metil-2-hexanol</b>, también se escribe 4-metilhexan-2-ol.'
    ]
  },

  escritura: [
    'Entre números va <b>coma</b>, 2,3-dimetil.',
    'Entre número y letra va <b>guion</b>, 2-metil.',
    'Sin espacios, todo junto, 2-metilbutano y no 2-metil butano.',
    'Un sustituyente repetido lleva un número por cada vez que aparece, 2,2-dimetil y no 2-dimetil.',
    'En alcoholes, alquenos y cetonas se aceptan dos estilos, 2-butanol o butan-2-ol.'
  ],

  alquilos: [
    ['metil', 'CH<sub>3</sub>–'], ['etil', 'CH<sub>3</sub>CH<sub>2</sub>–'], ['propil', 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>–'],
    ['isopropil', '(CH<sub>3</sub>)<sub>2</sub>CH–'], ['terc-butil', '(CH<sub>3</sub>)<sub>3</sub>C–'], ['fenil', 'C<sub>6</sub>H<sub>5</sub>–']
  ]
};
