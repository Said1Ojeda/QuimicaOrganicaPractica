// interfaz de la app de estudio
(function () {
  'use strict';

  var M = window.Motor;
  var app = document.getElementById('app');
  var NOMBRE = 'Hillary';
  var EXAMEN = new Date(2026, 10, 27, 19, 0, 0);

  // un color por familia de grupo funcional
  var FAMILIAS = {
    saturados: { nombre: 'Saturados', color: '#8fb3ff' },
    insaturados: { nombre: 'Insaturados', color: '#4ade80' },
    aromaticos: { nombre: 'Aromáticos', color: '#c084fc' },
    halogenados: { nombre: 'Halogenados', color: '#facc15' },
    oxigenados: { nombre: 'Alcoholes y éteres', color: '#22d3ee' },
    carbonilos: { nombre: 'Carbonilos', color: '#fb923c' },
    acidos: { nombre: 'Ácidos', color: '#f87171' }
  };

  var NIVELES = { 1: 'Fácil', 2: 'Medio', 3: 'Nivel examen' };
  var TIPOS = {
    nombre: 'Nombre IUPAC', escribir: 'Escribe el nombre', estructura: 'Elige la estructura',
    reaccion: 'Completa la reacción', grupo: 'Grupo funcional', ordenar: 'Ordena',
    vf: 'Verdadero o falso', error: 'Encuentra el error'
  };

  M.temas().forEach(function (t) { t.color = (FAMILIAS[t.familia] || FAMILIAS.saturados).color; });

  // utilidades de texto y html
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function mol(smiles, cond, clase) {
    if (!smiles) return '';
    return '<figure class="mol ' + (clase || '') + '"><svg data-smiles="' + esc(smiles) + '"></svg>' +
      (cond ? '<figcaption>' + cond + '</figcaption>' : '') + '</figure>';
  }

  function pintar(html) {
    app.innerHTML = html;
    window.scrollTo(0, 0);
    hidratar(app);
  }

  // dibuja todas las moleculas pendientes
  function hidratar(raiz) {
    var lista = raiz.querySelectorAll('svg[data-smiles]');
    for (var i = 0; i < lista.length; i++) M.dibujar(lista[i], lista[i].getAttribute('data-smiles'));
  }

  // cuenta regresiva al examen
  function textoCuenta() {
    var ms = EXAMEN - new Date();
    if (ms <= 0) return '¡Llegó el día! Tú puedes 💪';
    var d = Math.floor(ms / 864e5);
    var h = Math.floor(ms / 36e5) % 24;
    var m = Math.floor(ms / 6e4) % 60;
    var s = Math.floor(ms / 1e3) % 60;
    function dos(n) { return n < 10 ? '0' + n : n; }
    return '<b>' + d + '</b>d <b>' + dos(h) + '</b>h <b>' + dos(m) + '</b>m <b>' + dos(s) + '</b>s';
  }

  setInterval(function () {
    var c = document.getElementById('cuenta');
    if (c) c.innerHTML = textoCuenta();
  }, 1000);

  // navegacion por hash para que funcione el boton atras del celular
  var quiz = null;

  function ir(hash) {
    if (location.hash === hash) rutear();
    else location.hash = hash;
  }

  function rutear() {
    cerrarAyuda();
    var h = location.hash.replace(/^#/, '');
    var partes = h.split('/');
    if (quiz && partes[0] !== 'quiz') {
      if (quiz.modo === 'simulacro' && !quiz.terminado &&
          !window.confirm('¿Salir del simulacro? Se pierde este intento.')) {
        history.pushState(null, '', '#quiz');
        return;
      }
      detenerReloj();
      quiz = null;
    }
    if (!M.estado().bienvenida) return vistaBienvenida();
    if (partes[0] === 'tema' && M.tema(partes[1])) return vistaTema(partes[1], partes[2] || 'teoria');
    if (partes[0] === 'flash') return vistaFlash(partes[1] || '');
    if (partes[0] === 'guia') return vistaGuia();
    if (partes[0] === 'quiz' && quiz) return vistaPregunta();
    vistaArbol();
  }

  window.addEventListener('hashchange', rutear);

  // pantalla de bienvenida
  function vistaBienvenida() {
    pintar(
      '<section class="bienvenida">' +
      '<div class="semilla">🌱</div>' +
      '<h1>Hola, ' + NOMBRE + '</h1>' +
      '<p class="lead">Este es tu árbol de Química Orgánica. Cada tema es una rama y crece a medida que lo dominas.</p>' +
      '<div class="cuenta-grande"><span>Faltan para el examen</span><div id="cuenta">' + textoCuenta() + '</div></div>' +
      '<ul class="pasos-bienvenida">' +
      '<li><b>Todos los temas están abiertos.</b> Empieza por donde quieras.</li>' +
      '<li><b>¿Nunca has nombrado compuestos?</b> Lee primero la Guía IUPAC desde cero, está en el inicio.</li>' +
      '<li><b>Un tema queda dominado</b> cuando aciertas el 80% de sus ejercicios.</li>' +
      '<li><b>Lo que falles</b> se guarda en Repaso de errores hasta que lo aciertes 2 veces seguidas.</li>' +
      '</ul>' +
      '<button class="btn btn-grande" data-accion="empezar">Empezar</button>' +
      '</section>'
    );
  }

  // arbol principal
  function vistaArbol() {
    var fallos = M.cuantosFallos();
    var racha = M.racha();
    pintar(
      '<header class="cabecera">' +
      '<div class="fila-cab"><h1>Hola, ' + NOMBRE + ' 👋</h1>' +
      '<span class="racha" title="Días seguidos estudiando">🔥 ' + racha + (racha === 1 ? ' día' : ' días') + '</span></div>' +
      '<div class="cuenta"><span>Examen viernes 27, 7:00 pm</span><div id="cuenta">' + textoCuenta() + '</div></div>' +
      '<div class="global"><div class="barra"><i style="width:' + M.dominioGlobal() + '%"></i></div>' +
      '<span>' + M.dominioGlobal() + '% del árbol dominado</span></div>' +
      '</header>' +
      tarjetaSugerencia() +
      '<button class="sugerencia" style="--c:#60a5fa" data-ir="#guia"><span>📘</span><div><small>Antes de los ejercicios</small>' +
      '<b>Guía IUPAC desde cero</b><small>Cómo nombrar cualquier compuesto en 6 pasos</small></div><i>›</i></button>' +
      '<section class="modos">' +
      '<button class="modo" data-accion="repaso"' + (fallos ? '' : ' disabled') + '>' +
      '<span class="ico">🔁</span><b>Repaso de errores</b><small>' + (fallos ? fallos + ' pendientes' : 'Nada pendiente') + '</small></button>' +
      '<button class="modo" data-accion="flash"><span class="ico">🃏</span><b>Flashcards</b><small>Grupos, sufijos y reacciones</small></button>' +
      '<button class="modo" data-accion="relampago"><span class="ico">⚡</span><b>Relámpago</b><small>10 al azar de todo</small></button>' +
      '<button class="modo" data-accion="simulacro"><span class="ico">📝</span><b>Simulacro</b><small>' + textoSimulacro() + '</small></button>' +
      '</section>' +
      '<section class="arbol-caja"><h2>Tu árbol</h2><p class="sub">Toca una rama para estudiar ese tema</p>' + svgArbol() + '</section>' +
      '<section class="leyenda">' + Object.keys(FAMILIAS).map(function (k) {
        return '<span><i style="background:' + FAMILIAS[k].color + '"></i>' + FAMILIAS[k].nombre + '</span>';
      }).join('') + '</section>' +
      '<footer class="pie"><button class="btn btn-peligro" data-accion="reiniciar">Reiniciar progreso</button></footer>'
    );
  }

  function textoSimulacro() {
    var r = M.resumenSimulacros();
    if (!r) return '30 preguntas, 60 min';
    return 'Último ' + r.ultima + ' · mejor ' + r.mejor;
  }

  // sugiere el tema mas flojo para no perder tiempo eligiendo
  function tarjetaSugerencia() {
    var t = M.temaSugerido();
    if (!t) {
      return '<div class="sugerencia" style="--c:#4ade80"><span>🌳</span><div><b>¡Árbol completo!</b>' +
        '<small>Haz un simulacro para medirte.</small></div></div>';
    }
    return '<button class="sugerencia" style="--c:' + t.color + '" data-ir="#tema/' + t.id + '/practica">' +
      '<span>🎯</span><div><small>Te conviene practicar</small><b>' + esc(t.titulo) + '</b>' +
      '<small>' + M.dominio(t.id) + '% dominado</small></div><i>›</i></button>';
  }

  // dibuja el arbol con una rama por tema, el tema 1 abajo
  function svgArbol() {
    var ts = M.temas();
    var paso = 104;
    var alto = 190 + (ts.length - 1) * paso;
    var cx = 180;
    var partes = [];
    var crece = M.dominioGlobal();
    var arriba = alto - 110 - (ts.length - 1) * paso - 30;
    var largo = alto - 40 - arriba;

    partes.push('<ellipse cx="180" cy="' + (alto - 30) + '" rx="150" ry="16" fill="#1d2a22"/>');
    partes.push('<text x="180" y="' + (alto - 25) + '" class="t-suelo">Inicio</text>');
    partes.push('<line x1="' + cx + '" y1="' + (alto - 40) + '" x2="' + cx + '" y2="' + arriba + '" class="tronco"/>');
    if (crece) partes.push('<line x1="' + cx + '" y1="' + (alto - 40) + '" x2="' + cx + '" y2="' + (alto - 40 - largo * crece / 100) + '" class="tronco-vivo"/>');
    partes.push('<text x="180" y="' + (arriba - 14) + '" class="t-meta">🎓 Examen</text>');

    ts.forEach(function (t, i) {
      var y = alto - 110 - i * paso;
      var lado = i % 2 === 0 ? 1 : -1;
      var x = cx + lado * 100;
      var d = M.dominio(t.id);
      var hecho = M.dominado(t.id);
      var rama = 'M' + cx + ' ' + (y + 26) + ' Q ' + (cx + lado * 46) + ' ' + (y + 24) + ' ' + (x - lado * 28) + ' ' + y;
      var hojas = '';
      [25, 50, 75].forEach(function (u, k) {
        if (d >= u) {
          var hx = cx + lado * (22 + k * 20);
          var hy = y + 22 - k * 5;
          hojas += '<ellipse cx="' + hx + '" cy="' + (hy - 9) + '" rx="8" ry="4.5" fill="' + t.color + '" opacity=".85" transform="rotate(' + (-lado * 35) + ' ' + hx + ' ' + (hy - 9) + ')"/>';
        }
      });
      partes.push(
        '<g class="nodo' + (hecho ? ' hecho' : '') + '" data-tema="' + t.id + '" tabindex="0" role="button" aria-label="' + esc(t.titulo) + ', ' + d + '% dominado">' +
        '<path d="' + rama + '" class="rama"/>' +
        (d ? '<path d="' + rama + '" class="rama-viva" pathLength="100" style="stroke:' + t.color + ';stroke-dasharray:' + d + ' 100"/>' : '') +
        hojas +
        '<circle cx="' + x + '" cy="' + y + '" r="42" fill="transparent"/>' +
        '<circle cx="' + x + '" cy="' + y + '" r="28" class="nodo-fondo"/>' +
        (d ? '<circle cx="' + x + '" cy="' + y + '" r="28" class="nodo-anillo" pathLength="100" transform="rotate(-90 ' + x + ' ' + y + ')" style="stroke:' + t.color + ';stroke-dasharray:' + d + ' 100"/>' : '') +
        '<text x="' + x + '" y="' + (y + 6) + '" class="t-num">' + (hecho ? '✓' : t.n) + '</text>' +
        '<text x="' + x + '" y="' + (y + 46) + '" class="t-nombre">' + esc(t.corto || t.titulo) + '</text>' +
        '<text x="' + x + '" y="' + (y + 61) + '" class="t-pct">' + d + '%' + (hecho ? ' · dominado' : '') + '</text>' +
        '</g>'
      );
    });

    return '<svg class="arbol" viewBox="0 0 360 ' + alto + '" role="img" aria-label="Árbol de temas">' + partes.join('') + '</svg>';
  }

  // guia de nomenclatura desde cero
  function htmlRaices() {
    return '<div class="raices">' + window.GUIA.raices.map(function (r) {
      return '<span><b>' + r[0] + ' C</b>' + r[1] + '</span>';
    }).join('') + '</div>';
  }

  function vistaGuia() {
    var G = window.GUIA;
    M.bitacora('abrió la guía IUPAC', '', '', '');
    pintar(
      '<header class="cab-tema"><button class="volver" data-ir="#arbol">← Árbol</button><h1>Guía IUPAC desde cero</h1>' +
      '<small>Léela una vez con calma y vuelve cuando te trabes.</small></header>' +
      '<div class="tarjeta teoria"><h3>1. Cómo se arma un nombre</h3>' + G.intro.join('') + '</div>' +
      '<div class="tarjeta"><h3>2. La raíz cuenta carbonos</h3>' + htmlRaices() + '</div>' +
      '<div class="tarjeta"><h3>3. El sufijo dice la familia</h3>' +
      '<p class="sub">Ordenados de mayor a menor prioridad. Si hay dos grupos, el de arriba da el sufijo y el otro va como prefijo.</p>' +
      G.grupos.map(function (g, i) {
        return '<div class="grupo-fila"><span class="num">' + (i + 1) + '</span><div><b>' + g[0] + '</b> <span class="formula">' + g[1] + '</span>' +
          '<small>Sufijo ' + g[2] + ' · como prefijo ' + g[3] + '</small></div></div>';
      }).join('') + '</div>' +
      '<div class="tarjeta"><h3>4. Los 6 pasos para cualquier compuesto</h3><ol class="pasos">' +
      G.pasos.map(function (p) { return '<li><b>' + p.t + '.</b> ' + p.d + '</li>'; }).join('') + '</ol></div>' +
      '<div class="tarjeta ejemplo"><h3>5. Ejemplo completo</h3>' + mol(G.ejemplo.s, G.ejemplo.c) +
      '<ol class="pasos">' + G.ejemplo.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol></div>' +
      '<div class="tarjeta"><h3>6. Grupos que cuelgan (alquilos)</h3><div class="raices">' +
      G.alquilos.map(function (a) { return '<span><b>' + a[0] + '</b>' + a[1] + '</span>'; }).join('') + '</div></div>' +
      '<div class="tarjeta"><h3>7. Reglas de escritura</h3><ul class="lista">' +
      G.escritura.map(function (e) { return '<li>' + e + '</li>'; }).join('') + '</ul></div>' +
      '<div class="pie-tema"><button class="btn btn-grande" data-ir="#tema/alcanos/nombres">Seguir con alcanos →</button></div>'
    );
  }

  // hoja de ayuda dentro de una pregunta sin salir del ejercicio
  function abrirAyuda() {
    var ej = quiz.lista[quiz.i];
    var t = M.tema(ej.tema);
    M.bitacora('pidió ayuda', t.titulo, ej.id, '');
    var hoja = document.createElement('div');
    hoja.className = 'ayuda-fondo';
    hoja.innerHTML = '<div class="ayuda" role="dialog" aria-label="Ayuda">' +
      '<div class="ayuda-cab"><b>📖 Ayuda · ' + esc(t.titulo) + '</b><button class="volver" data-accion="cerrar-ayuda" aria-label="Cerrar">✕</button></div>' +
      '<h3>Cómo se nombra</h3><ol class="pasos">' + t.nomenclatura.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol>' +
      '<h3>Raíz según carbonos</h3>' + htmlRaices() +
      '<h3>Ejemplo resuelto</h3>' + mol(t.nomenclatura.ejemplos[0].s, t.nomenclatura.ejemplos[0].c) +
      '<p class="respuesta-ej">Nombre: <b>' + t.nomenclatura.ejemplos[0].nom + '</b></p>' +
      '<button class="btn btn-grande" data-accion="cerrar-ayuda">Volver a la pregunta</button></div>';
    document.body.appendChild(hoja);
    document.body.classList.add('sin-scroll');
    hidratar(hoja);
  }

  function cerrarAyuda() {
    var h = document.querySelector('.ayuda-fondo');
    if (h) h.remove();
    document.body.classList.remove('sin-scroll');
  }

  // pantalla de un tema
  var PESTANAS = [
    ['teoria', 'Teoría'], ['nombres', 'IUPAC'], ['reacciones', 'Reacciones'],
    ['propiedades', 'Propiedades'], ['errores', 'Errores típicos'], ['practica', 'Ejercicios']
  ];

  function vistaTema(id, pest) {
    var t = M.tema(id);
    var d = M.dominio(id);
    var cuerpo = {
      teoria: tabTeoria, nombres: tabNombres, reacciones: tabReacciones,
      propiedades: tabPropiedades, errores: tabErrores, practica: tabPractica
    }[pest] || tabTeoria;
    pintar(
      '<header class="cab-tema" style="--c:' + t.color + '">' +
      '<button class="volver" data-ir="#arbol">← Árbol</button>' +
      '<span class="chip" style="background:' + t.color + '22;color:' + t.color + '">' + FAMILIAS[t.familia].nombre + '</span>' +
      '<h1>' + t.n + '. ' + esc(t.titulo) + '</h1>' +
      '<div class="barra"><i style="width:' + d + '%;background:' + t.color + '"></i></div>' +
      '<small>' + d + '% dominado · ' + M.respondidos(id) + ' de ' + t.ejercicios.length + ' ejercicios intentados</small>' +
      '</header>' +
      '<p class="ruta">Ruta sugerida: Teoría → IUPAC → Reacciones → Propiedades → Errores típicos → Ejercicios</p>' +
      '<nav class="pestanas">' + PESTANAS.map(function (p) {
        return '<button data-ir="#tema/' + id + '/' + p[0] + '" class="' + (p[0] === pest ? 'activa' : '') + '"' +
          (p[0] === pest ? ' style="border-color:' + t.color + ';color:' + t.color + '"' : '') + '>' + p[1] + '</button>';
      }).join('') + '</nav>' +
      '<section class="contenido">' + cuerpo(t) + '</section>' +
      (pest !== 'practica' ? piePaso(t, pest) : '')
    );
  }

  // boton al siguiente paso de la ruta y boton de practicar
  function piePaso(t, pest) {
    var i = PESTANAS.map(function (p) { return p[0]; }).indexOf(pest);
    var sig = PESTANAS[i + 1];
    return '<div class="pie-tema acciones fila">' +
      '<button class="btn btn-sec" data-ir="#tema/' + t.id + '/' + sig[0] + '">' + sig[1] + ' →</button>' +
      '<button class="btn" style="background:' + t.color + '" data-ir="#tema/' + t.id + '/practica">Practicar</button></div>';
  }

  function tabTeoria(t) {
    return '<div class="tarjeta teoria">' + t.teoria.join('') + '</div>';
  }

  function tabNombres(t) {
    var n = t.nomenclatura;
    return '<button class="sugerencia" style="--c:#60a5fa" data-ir="#guia"><span>📘</span><div><small>¿Primera vez con IUPAC?</small>' +
      '<b>Empieza por la guía desde cero</b></div><i>›</i></button>' +
      '<div class="tarjeta"><h3>Paso a paso en ' + esc(t.titulo.toLowerCase()) + '</h3><ol class="pasos">' +
      n.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol></div>' +
      n.ejemplos.map(function (e, i) {
        return '<div class="tarjeta ejemplo"><h3>Ejemplo ' + (i + 1) + '</h3>' + mol(e.s, e.c) +
          '<ol class="pasos">' + e.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol>' +
          '<p class="respuesta-ej">Nombre: <b>' + e.nom + '</b></p></div>';
      }).join('');
  }

  function tabReacciones(t) {
    return t.reacciones.map(function (r) {
      return '<div class="tarjeta reaccion" style="--c:' + t.color + '"><h3>' + r.nombre + '</h3>' +
        '<dl><dt>Reactivos</dt><dd>' + r.reactivos + '</dd>' +
        '<dt>Condiciones</dt><dd>' + r.condiciones + '</dd>' +
        '<dt>Producto</dt><dd>' + r.producto + '</dd>' +
        '<dt>Regla</dt><dd><span class="regla">' + r.regla + '</span></dd></dl>' +
        (r.s ? mol(r.s, r.c) : '') + '</div>';
    }).join('');
  }

  function tabPropiedades(t) {
    return '<div class="tarjeta"><ul class="lista">' + t.propiedades.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div>';
  }

  function tabErrores(t) {
    return '<div class="tarjeta"><ul class="lista errores">' + t.errores.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div>';
  }

  function tabPractica(t) {
    var pendientes = t.ejercicios.filter(function (e) {
      var r = M.estado().res[e.id];
      return !(r && r.ok);
    }).length;
    var porNivel = [1, 2, 3].map(function (n) { return t.ejercicios.filter(function (e) { return e.nivel === n; }).length; });
    return '<div class="tarjeta"><p>Este tema tiene <b>' + t.ejercicios.length + ' ejercicios</b>: ' +
      porNivel[0] + ' fáciles, ' + porNivel[1] + ' medios y ' + porNivel[2] + ' de nivel examen.</p>' +
      '<p>Te faltan <b>' + pendientes + '</b> por acertar. Para dominarlo necesitas el ' + M.DOMINIO_MINIMO + '%.</p></div>' +
      '<div class="acciones">' +
      '<button class="btn btn-grande" style="background:' + t.color + '" data-accion="practica" data-tema="' + t.id + '" data-n="10">Ronda de 10</button>' +
      '<button class="btn btn-sec" data-accion="practica" data-tema="' + t.id + '" data-n="0">Todos los ejercicios (' + t.ejercicios.length + ')</button>' +
      (M.sesionFallosTema(t.id).length ? '<button class="btn btn-sec" data-accion="fallos-tema" data-tema="' + t.id + '">Repasar mis fallos de este tema (' + M.sesionFallosTema(t.id).length + ')</button>' : '') +
      '</div>';
  }

  // motor de preguntas en pantalla
  function iniciarQuiz(lista, modo, extra) {
    if (!lista.length) return;
    quiz = Object.assign({
      lista: lista, i: 0, modo: modo, aciertos: 0, registro: [],
      respondida: false, seleccion: null, orden: [], terminado: false, inicio: Date.now()
    }, extra || {});
    if (modo === 'simulacro') {
      quiz.limite = Date.now() + 60 * 60 * 1000;
      arrancarReloj();
    }
    prepararPregunta();
    M.bitacora('inicio de ronda', textoModo(), lista.length + ' preguntas', '');
    ir('#quiz');
  }

  function prepararPregunta() {
    var ej = quiz.lista[quiz.i];
    quiz.respondida = false;
    quiz.seleccion = null;
    quiz.orden = [];
    quiz.vista = ej.op ? M.barajar(ej.op.map(function (_, k) { return k; })) : null;
    quiz.vistaItems = ej.items ? M.barajar(ej.items.map(function (_, k) { return k; })) : null;
  }

  var reloj = null;
  function arrancarReloj() {
    detenerReloj();
    reloj = setInterval(function () {
      if (!quiz || quiz.modo !== 'simulacro') return detenerReloj();
      var resta = quiz.limite - Date.now();
      var el = document.getElementById('reloj');
      if (el) {
        var m = Math.max(0, Math.floor(resta / 6e4));
        var s = Math.max(0, Math.floor(resta / 1e3) % 60);
        el.textContent = '⏱ ' + m + ':' + (s < 10 ? '0' : '') + s;
        el.classList.toggle('poco', resta < 5 * 6e4);
      }
      if (resta <= 0) { detenerReloj(); terminarQuiz(); }
    }, 500);
  }
  function detenerReloj() { if (reloj) clearInterval(reloj); reloj = null; }

  function textoModo() {
    return {
      tema: M.tema(quiz.temaId) ? M.tema(quiz.temaId).titulo : 'Práctica',
      repaso: 'Repaso de errores', relampago: 'Relámpago', simulacro: 'Simulacro final'
    }[quiz.modo];
  }

  function vistaPregunta() {
    var ej = quiz.lista[quiz.i];
    var t = M.tema(ej.tema);
    var total = quiz.lista.length;
    var progreso = quiz.modo === 'repaso'
      ? 'Quedan ' + M.cuantosFallos()
      : (quiz.i + 1) + ' de ' + total;
    var html =
      '<header class="cab-quiz">' +
      '<button class="volver" data-accion="salir" aria-label="Salir">✕</button>' +
      '<div class="cab-quiz-centro"><b>' + textoModo() + '</b><small>' + progreso + '</small></div>' +
      (quiz.modo === 'simulacro' ? '<span id="reloj" class="reloj">⏱</span>' : '<span class="marcador">✓ ' + quiz.aciertos + '</span>') +
      '</header>' +
      (quiz.modo !== 'repaso' ? '<div class="barra fina"><i style="width:' + Math.round(quiz.i * 100 / total) + '%"></i></div>' : '') +
      '<article class="pregunta" id="pregunta" style="--c:' + t.color + '">' +
      '<div class="chips"><span class="chip" style="background:' + t.color + '22;color:' + t.color + '">' + esc(t.corto || t.titulo) + '</span>' +
      '<span class="chip nivel n' + ej.nivel + '">' + NIVELES[ej.nivel] + '</span>' +
      '<span class="chip tipo">' + TIPOS[ej.tipo] + '</span></div>' +
      '<h2 class="enunciado">' + ej.q + '</h2>' +
      (quiz.modo !== 'simulacro' ? '<button class="ayuda-btn" data-accion="ayuda">📖 ¿Cómo se hacía esto? Ver ayuda</button>' : '') +
      (ej.mol ? mol(ej.mol.s, ej.mol.c, 'grande') : '') +
      (ej.reac ? '<div class="ecuacion">' + ej.reac + '</div>' : '') +
      zonaRespuesta(ej) +
      '<div id="retro"></div>' +
      '</article>';
    pintar(html);
    if (quiz.modo === 'simulacro') arrancarReloj();
    var input = document.getElementById('escrito');
    if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') accion('revisar'); });
  }

  function zonaRespuesta(ej) {
    if (ej.tipo === 'vf') {
      return '<div class="opciones vf">' +
        '<button class="op" data-accion="elegir" data-v="v">Verdadero</button>' +
        '<button class="op" data-accion="elegir" data-v="f">Falso</button></div>' + botonSimulacro();
    }
    if (ej.tipo === 'escribir') {
      return '<div class="escribir"><input id="escrito" type="text" enterkeyhint="done" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe el nombre IUPAC" aria-label="Tu respuesta">' +
        '<small>Ejemplo de formato: 2,3-dimetilpentano</small>' +
        '<button class="btn btn-grande" data-accion="revisar">' + (quiz.modo === 'simulacro' ? 'Siguiente' : 'Revisar') + '</button></div>';
    }
    if (ej.tipo === 'ordenar') {
      return '<div class="opciones ordenar">' + quiz.vistaItems.map(function (k) {
        var it = ej.items[k];
        var pos = quiz.orden.indexOf(k);
        return '<button class="op item' + (pos >= 0 ? ' puesto' : '') + '" data-accion="ordenar" data-k="' + k + '">' +
          '<span class="badge">' + (pos >= 0 ? pos + 1 : '') + '</span><span class="txt">' + it.t + '</span>' +
          (it.c ? '<small>' + it.c + '</small>' : '') + '</button>';
      }).join('') + '</div>' +
        '<div class="acciones fila"><button class="btn btn-sec" data-accion="borrar-orden">Borrar</button>' +
        '<button class="btn" data-accion="revisar" ' + (quiz.orden.length === ej.items.length ? '' : 'disabled') + '>' +
        (quiz.modo === 'simulacro' ? 'Siguiente' : 'Revisar') + '</button></div>';
    }
    var conMol = ej.op.some(function (o) { return typeof o === 'object'; });
    return '<div class="opciones' + (conMol ? ' con-mol' : '') + '">' + quiz.vista.map(function (k) {
      var o = ej.op[k];
      var dentro = typeof o === 'object' ? mol(o.s, o.c) : '<span class="txt">' + o + '</span>';
      return '<button class="op" data-accion="elegir" data-k="' + k + '">' + dentro + '</button>';
    }).join('') + '</div>' + botonSimulacro();
  }

  function botonSimulacro() {
    if (quiz.modo !== 'simulacro') return '';
    return '<div class="acciones"><button class="btn btn-grande" data-accion="siguiente" id="sig" disabled>Siguiente</button></div>';
  }

  // procesa una respuesta
  function responder(valor) {
    var ej = quiz.lista[quiz.i];
    var ok = M.revisar(ej, valor);
    quiz.respondida = true;
    if (ok) quiz.aciertos++;
    quiz.registro.push({ ej: ej, ok: ok, valor: valor });
    var nuevo = M.registrar(ej.id, ok);
    M.bitacora('respuesta', M.tema(ej.tema).titulo, ej.id + ' · ' + TIPOS[ej.tipo] + ' · ' + NIVELES[ej.nivel] + ' · ' + textoModo(), ok ? 'bien' : 'mal');
    if (nuevo) M.bitacora('tema dominado', M.tema(nuevo).titulo, '', M.dominio(nuevo) + '%');

    if (quiz.modo === 'simulacro') return avanzar();

    marcarOpciones(ej, valor, ok);
    var correcta = '';
    if (!ok && ej.tipo === 'escribir') correcta = '<p>Respuesta correcta: <b>' + ej.resp[0] + '</b></p>';
    if (!ok && ej.tipo === 'ordenar') correcta = '<p>Orden correcto: <b>' + ej.items.map(function (x) { return x.t; }).join(' &gt; ') + '</b></p>';
    if (!ok && ej.tipo === 'vf') correcta = '<p>Era <b>' + (ej.ok ? 'Verdadero' : 'Falso') + '</b>.</p>';
    document.getElementById('retro').innerHTML =
      '<div class="retro ' + (ok ? 'bien' : 'mal') + '">' +
      '<h3>' + (ok ? frase(true) : frase(false)) + '</h3>' + correcta +
      '<ol class="pasos">' + ej.exp.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol>' +
      '<button class="btn btn-grande" data-accion="siguiente">' + (ultima() ? 'Ver resultado' : 'Siguiente') + '</button></div>';
    var art = document.getElementById('pregunta');
    art.classList.add(ok ? 'acierto' : 'fallo');
    if (ok) vibrar(30);
    document.getElementById('retro').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (quiz.modo === 'repaso') reencolar(ej);
    if (nuevo) celebrar(nuevo);
  }

  function ultima() {
    if (quiz.modo === 'repaso') return M.cuantosFallos() === 0 || quiz.i >= quiz.lista.length - 1;
    return quiz.i >= quiz.lista.length - 1;
  }

  // en repaso la pregunta vuelve a salir mas adelante hasta acertarla 2 veces seguidas
  function reencolar(ej) {
    if (!(ej.id in M.estado().fallos)) return;
    var pos = Math.min(quiz.lista.length, quiz.i + 4);
    quiz.lista.splice(pos, 0, ej);
  }

  var FRASES_BIEN = ['¡Eso es!', '¡Bien hecho!', '¡Exacto!', '¡Correcto!', '¡Muy bien!'];
  var FRASES_MAL = ['Casi. Mira por qué:', 'No pasa nada, así se aprende:', 'Ojo con esta:'];
  function frase(ok) {
    var l = ok ? FRASES_BIEN : FRASES_MAL;
    return l[Math.floor(Math.random() * l.length)];
  }

  function marcarOpciones(ej, valor, ok) {
    var botones = app.querySelectorAll('.op');
    for (var i = 0; i < botones.length; i++) {
      var b = botones[i];
      b.disabled = true;
      if (ej.tipo === 'vf') {
        var v = b.getAttribute('data-v') === 'v';
        if (v === ej.ok) b.classList.add('correcta');
        else if (v === valor) b.classList.add('incorrecta');
      } else if (ej.tipo !== 'ordenar') {
        var k = +b.getAttribute('data-k');
        if (k === ej.ok) b.classList.add('correcta');
        else if (k === valor) b.classList.add('incorrecta');
      } else {
        b.classList.add(ok ? 'correcta' : 'incorrecta');
      }
    }
    var extra = app.querySelectorAll('.escribir input, .escribir .btn, .acciones.fila .btn');
    for (var j = 0; j < extra.length; j++) extra[j].disabled = true;
    var inp = document.getElementById('escrito');
    if (inp) inp.classList.add(ok ? 'correcta' : 'incorrecta');
  }

  function avanzar() {
    if (quiz.modo === 'repaso' && M.cuantosFallos() === 0) return terminarQuiz();
    if (quiz.i >= quiz.lista.length - 1) return terminarQuiz();
    quiz.i++;
    prepararPregunta();
    vistaPregunta();
  }

  function terminarQuiz() {
    detenerReloj();
    quiz.terminado = true;
    var total = quiz.registro.length;
    if (quiz.modo === 'simulacro') total = quiz.lista.length;
    var nota = total ? Math.round(quiz.aciertos * 100 / total) : 0;
    var html = '<section class="resultado">';

    if (quiz.modo === 'simulacro') {
      var porTema = {};
      quiz.lista.forEach(function (ej, idx) {
        var r = quiz.registro[idx];
        porTema[ej.tema] = porTema[ej.tema] || { a: 0, n: 0 };
        porTema[ej.tema].n++;
        if (r && r.ok) porTema[ej.tema].a++;
      });
      var desglose = M.temas().filter(function (t) { return porTema[t.id]; }).map(function (t) {
        var p = porTema[t.id];
        return { id: t.id, a: p.a, n: p.n, pct: Math.round(p.a * 100 / p.n) };
      });
      M.guardarSimulacro(nota, desglose);
      M.bitacora('simulacro', 'Todos los temas',
        'Flojos ' + (desglose.filter(function (d) { return d.pct < 60; }).map(function (d) { return M.tema(d.id).corto; }).join(', ') || 'ninguno'),
        nota + '/100');
      var usado = Math.round((Date.now() - quiz.inicio) / 6e4);
      html += '<div class="nota ' + (nota >= 61 ? 'aprobada' : '') + '"><span>' + nota + '</span><small>/ 100</small></div>' +
        '<p class="lead">' + mensajeNota(nota) + '</p>' +
        '<p class="sub">' + quiz.aciertos + ' de ' + total + ' correctas · ' + usado + ' min usados</p>' +
        '<div class="tarjeta"><h3>Desglose por tema</h3>' + desglose.sort(function (a, b) { return a.pct - b.pct; }).map(function (d) {
          var t = M.tema(d.id);
          return '<div class="desglose' + (d.pct < 60 ? ' flojo' : '') + '"><span>' + esc(t.corto || t.titulo) + '</span>' +
            '<div class="barra"><i style="width:' + d.pct + '%;background:' + t.color + '"></i></div>' +
            '<b>' + d.a + '/' + d.n + '</b></div>';
        }).join('') + '<p class="sub">Los temas en rojo son los que más conviene repasar.</p></div>';
    } else {
      M.bitacora('fin de ronda', textoModo(), quiz.aciertos + ' de ' + total, nota + '%');
      html += '<div class="nota"><span>' + quiz.aciertos + '</span><small>/ ' + total + '</small></div>' +
        '<p class="lead">' + mensajeNota(nota) + '</p>';
    }

    var malas = quiz.registro.filter(function (r) { return !r.ok; });
    if (malas.length && quiz.modo !== 'repaso') {
      html += '<div class="tarjeta"><h3>Revisa tus errores</h3>' + malas.map(function (r) {
        return '<details class="revision"><summary>' + r.ej.q + '</summary>' +
          (r.ej.mol ? mol(r.ej.mol.s, r.ej.mol.c) : '') + (r.ej.reac ? '<div class="ecuacion">' + r.ej.reac + '</div>' : '') +
          respuestaCorrecta(r.ej) +
          '<ol class="pasos">' + r.ej.exp.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol></details>';
      }).join('') + '</div>';
    }

    html += '<div class="acciones">' +
      (M.cuantosFallos() ? '<button class="btn btn-grande" data-accion="repaso">Repasar errores (' + M.cuantosFallos() + ')</button>' : '') +
      (quiz.temaId ? '<button class="btn btn-sec" data-ir="#tema/' + quiz.temaId + '/practica">Volver al tema</button>' : '') +
      '<button class="btn btn-sec" data-accion="arbol">Volver al árbol</button></div></section>';
    pintar(html);
  }

  function respuestaCorrecta(ej) {
    if (ej.tipo === 'escribir') return '<p>Correcta: <b>' + ej.resp[0] + '</b></p>';
    if (ej.tipo === 'vf') return '<p>Correcta: <b>' + (ej.ok ? 'Verdadero' : 'Falso') + '</b></p>';
    if (ej.tipo === 'ordenar') return '<p>Orden: <b>' + ej.items.map(function (x) { return x.t; }).join(' &gt; ') + '</b></p>';
    var o = ej.op[ej.ok];
    return typeof o === 'object' ? '<p>Correcta</p>' + mol(o.s, o.c) : '<p>Correcta: <b>' + o + '</b></p>';
  }

  function mensajeNota(n) {
    if (n >= 90) return 'Excelente, vas lista para el examen.';
    if (n >= 75) return 'Muy bien. Afina los detalles y queda perfecto.';
    if (n >= 61) return 'Vas bien. Repasa lo que fallaste y sube más.';
    if (n >= 40) return 'Hay base. Enfócate en los temas más flojos.';
    return 'Todo suma. Repasa la teoría y vuelve a intentarlo.';
  }

  // flashcards
  var CATS = [['', 'Todas'], ['grupo', 'Grupos funcionales'], ['sufijo', 'Sufijos'], ['prefijo', 'Prefijos'], ['reaccion', 'Reacciones']];
  var flash = { lista: [], i: 0, cat: null, vuelta: false };

  function vistaFlash(cat) {
    if (flash.cat !== cat || !flash.lista.length) {
      flash = { lista: M.flashcards(cat), i: 0, cat: cat, vuelta: false };
    }
    var f = flash.lista[flash.i];
    pintar(
      '<header class="cab-tema"><button class="volver" data-ir="#arbol">← Árbol</button><h1>Flashcards</h1></header>' +
      '<nav class="pestanas cats">' + CATS.map(function (c) {
        return '<button data-ir="#flash/' + c[0] + '" class="' + (c[0] === cat ? 'activa' : '') + '">' + c[1] + '</button>';
      }).join('') + '</nav>' +
      (f ? '<p class="sub centro">' + (flash.i + 1) + ' de ' + flash.lista.length + ' · toca la tarjeta para voltearla</p>' +
        '<div class="flash' + (flash.vuelta ? ' vuelta' : '') + '" data-accion="voltear" style="--c:' + f.color + '" role="button" tabindex="0">' +
        '<div class="cara frente">' + (f.s ? mol(f.s) : '') + '<p>' + f.frente + '</p></div>' +
        '<div class="cara reverso"><p>' + f.reverso + '</p></div></div>' +
        '<div class="acciones fila"><button class="btn btn-sec" data-accion="flash-ant"' + (flash.i ? '' : ' disabled') + '>Anterior</button>' +
        '<button class="btn" data-accion="flash-sig">' + (flash.i < flash.lista.length - 1 ? 'Siguiente' : 'Barajar otra vez') + '</button></div>'
        : '<p class="sub centro">No hay tarjetas en esta categoría todavía.</p>')
    );
  }

  // celebraciones
  function vibrar(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* sin vibracion */ } }

  function celebrar(temaId) {
    var t = M.tema(temaId);
    var aviso = document.createElement('div');
    aviso.className = 'aviso';
    aviso.innerHTML = '🌳 ¡Dominaste <b>' + esc(t.titulo) + '</b>!';
    document.body.appendChild(aviso);
    setTimeout(function () { aviso.classList.add('fuera'); }, 2600);
    setTimeout(function () { aviso.remove(); }, 3200);
    confeti(t.color);
    vibrar([40, 60, 40]);
  }

  // confeti en un canvas fijo del tamano del viewport
  function confeti(color) {
    var c = document.createElement('canvas');
    c.className = 'confeti';
    var w = c.width = window.innerWidth;
    var h = c.height = window.innerHeight;
    document.body.appendChild(c);
    var ctx = c.getContext('2d');
    var colores = [color, '#ffffff', '#ffd84d', '#4ade80', '#c084fc'];
    var piezas = [];
    for (var i = 0; i < 140; i++) {
      piezas.push({
        x: Math.random() * w, y: -20 - Math.random() * h * 0.5,
        vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 4,
        r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
        s: 5 + Math.random() * 6, col: colores[i % colores.length]
      });
    }
    var inicio = performance.now();
    function cuadro(ahora) {
      ctx.clearRect(0, 0, w, h);
      piezas.forEach(function (p) {
        p.x += p.vx; p.y += p.vy; p.r += p.vr; p.vy += 0.04;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.col; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        ctx.restore();
      });
      if (ahora - inicio < 3500) requestAnimationFrame(cuadro);
      else c.remove();
    }
    requestAnimationFrame(cuadro);
  }

  // acciones de los botones
  var tiempoReinicio = null;

  function accion(nombre, el) {
    var ej = quiz && quiz.lista[quiz.i];
    switch (nombre) {
      case 'empezar':
        M.marcarBienvenida();
        ir('#arbol');
        break;
      case 'arbol':
        quiz = null;
        ir('#arbol');
        break;
      case 'repaso':
        quiz = null;
        iniciarQuiz(M.sesionRepaso(), 'repaso');
        break;
      case 'relampago':
        iniciarQuiz(M.sesionRelampago(), 'relampago');
        break;
      case 'simulacro':
        iniciarQuiz(M.sesionSimulacro(30), 'simulacro');
        break;
      case 'flash':
        M.bitacora('flashcards', '', '', '');
        ir('#flash/');
        break;
      case 'practica':
        var n = +el.getAttribute('data-n');
        var id = el.getAttribute('data-tema');
        iniciarQuiz(M.sesionTema(id, n || 0), 'tema', { temaId: id });
        break;
      case 'ayuda':
        abrirAyuda();
        break;
      case 'cerrar-ayuda':
        cerrarAyuda();
        break;
      case 'fallos-tema':
        var idf = el.getAttribute('data-tema');
        iniciarQuiz(M.sesionFallosTema(idf), 'tema', { temaId: idf });
        break;
      case 'elegir':
        if (quiz.respondida) return;
        var valor = el.hasAttribute('data-v') ? el.getAttribute('data-v') === 'v' : +el.getAttribute('data-k');
        if (quiz.modo === 'simulacro') {
          quiz.seleccion = valor;
          var ops = app.querySelectorAll('.op');
          for (var i = 0; i < ops.length; i++) ops[i].classList.toggle('elegida', ops[i] === el);
          document.getElementById('sig').disabled = false;
        } else {
          responder(valor);
        }
        break;
      case 'siguiente':
        if (quiz.modo === 'simulacro' && !quiz.respondida) return responder(quiz.seleccion);
        avanzar();
        break;
      case 'revisar':
        if (quiz.respondida) return;
        if (ej.tipo === 'escribir') {
          var txt = document.getElementById('escrito').value;
          if (!txt.trim()) return;
          responder(txt);
        } else if (ej.tipo === 'ordenar' && quiz.orden.length === ej.items.length) {
          responder(quiz.orden.slice());
        }
        break;
      case 'ordenar':
        if (quiz.respondida) return;
        var k = +el.getAttribute('data-k');
        var pos = quiz.orden.indexOf(k);
        if (pos >= 0) quiz.orden.splice(pos, 1);
        else quiz.orden.push(k);
        refrescarOrden(ej);
        break;
      case 'borrar-orden':
        if (quiz.respondida) return;
        quiz.orden = [];
        refrescarOrden(ej);
        break;
      case 'salir':
        ir('#arbol');
        break;
      case 'voltear':
        flash.vuelta = !flash.vuelta;
        el.classList.toggle('vuelta', flash.vuelta);
        break;
      case 'flash-sig':
        if (flash.i < flash.lista.length - 1) flash.i++;
        else { flash.lista = M.flashcards(flash.cat); flash.i = 0; }
        flash.vuelta = false;
        vistaFlash(flash.cat);
        break;
      case 'flash-ant':
        if (flash.i > 0) flash.i--;
        flash.vuelta = false;
        vistaFlash(flash.cat);
        break;
      case 'reiniciar':
        if (!tiempoReinicio) {
          el.textContent = '¿Segura? Toca otra vez para borrar todo';
          el.classList.add('armado');
          tiempoReinicio = setTimeout(function () {
            tiempoReinicio = null;
            el.textContent = 'Reiniciar progreso';
            el.classList.remove('armado');
          }, 4000);
        } else {
          clearTimeout(tiempoReinicio);
          tiempoReinicio = null;
          M.bitacora('reinició el progreso', '', '', M.dominioGlobal() + '% antes');
          M.reiniciar();
          vistaArbol();
        }
        break;
    }
  }

  // actualiza solo la zona de ordenar sin repintar la molecula
  function refrescarOrden(ej) {
    var botones = app.querySelectorAll('.ordenar .op');
    for (var i = 0; i < botones.length; i++) {
      var k = +botones[i].getAttribute('data-k');
      var pos = quiz.orden.indexOf(k);
      botones[i].classList.toggle('puesto', pos >= 0);
      botones[i].querySelector('.badge').textContent = pos >= 0 ? pos + 1 : '';
    }
    var rev = app.querySelector('.acciones.fila [data-accion="revisar"]');
    if (rev) rev.disabled = quiz.orden.length !== ej.items.length;
  }

  // las moleculas dentro de un detalle cerrado se dibujan al abrirlo
  document.addEventListener('toggle', function (e) {
    if (e.target.open) hidratar(e.target);
  }, true);

  // un solo escuchador para todos los clics
  document.addEventListener('click', function (e) {
    if (e.target.classList && e.target.classList.contains('ayuda-fondo')) return cerrarAyuda();
    var el = e.target.closest('[data-accion],[data-ir],[data-tema]');
    if (!el || el.disabled) return;
    if (el.hasAttribute('data-accion')) return accion(el.getAttribute('data-accion'), el);
    if (el.hasAttribute('data-ir')) return ir(el.getAttribute('data-ir'));
    if (el.classList.contains('nodo')) return ir('#tema/' + el.getAttribute('data-tema'));
  });

  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.nodo,.flash')) {
      e.preventDefault();
      e.target.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });

  M.bitacora('abrió la página', '', 'Racha ' + M.racha() + ' días', M.dominioGlobal() + '% del árbol');
  rutear();
})();
