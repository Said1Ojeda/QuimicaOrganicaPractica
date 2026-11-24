// motor de ejercicios, progreso y dibujo de moleculas
(function () {
  'use strict';

  var CLAVE = 'qop-progreso-v1';
  var DOMINIO_MINIMO = 80;
  var memoria = null;

  // estado inicial del progreso
  function estadoVacio() {
    return {
      res: {},
      fallos: {},
      racha: { dias: 0, ultimo: '' },
      dominados: {},
      bienvenida: false,
      simulacros: []
    };
  }

  // lee el progreso, si localStorage falla usa memoria
  function cargar() {
    try {
      var texto = localStorage.getItem(CLAVE);
      if (texto) return Object.assign(estadoVacio(), JSON.parse(texto));
    } catch (e) { /* sin acceso a localStorage */ }
    return memoria || estadoVacio();
  }

  function guardar() {
    memoria = estado;
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) { /* modo privado o lleno */ }
  }

  var estado = cargar();

  // indice de temas y ejercicios
  function temas() {
    return (window.TEMAS || []).slice().sort(function (a, b) { return a.n - b.n; });
  }

  var indice = null;
  function mapa() {
    if (indice) return indice;
    indice = {};
    temas().forEach(function (t) {
      t.ejercicios.forEach(function (e) { e.tema = t.id; indice[e.id] = e; });
    });
    return indice;
  }

  function tema(id) {
    return temas().filter(function (t) { return t.id === id; })[0];
  }

  // utilidades
  function barajar(lista) {
    var a = lista.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }

  function hoy() {
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  function ayer() {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  // quita tildes, espacios y unifica guiones para comparar nombres
  function normalizar(texto) {
    return String(texto || '')
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[‐-―−]/g, '-')
      .replace(/\s+/g, '')
      .replace(/(\d)[.;](?=\d)/g, '$1,')
      .replace(/[.]+$/, '');
  }

  // decide si una respuesta es correcta segun el tipo
  function revisar(ej, respuesta) {
    if (ej.tipo === 'escribir') {
      var r = normalizar(respuesta);
      return ej.resp.some(function (ok) { return normalizar(ok) === r; });
    }
    if (ej.tipo === 'ordenar') {
      return respuesta.length === ej.items.length &&
        respuesta.every(function (v, i) { return v === i; });
    }
    if (ej.tipo === 'vf') return respuesta === ej.ok;
    return respuesta === ej.ok;
  }

  // racha de dias seguidos estudiando
  function tocarRacha() {
    var h = hoy();
    if (estado.racha.ultimo === h) return;
    estado.racha.dias = estado.racha.ultimo === ayer() ? estado.racha.dias + 1 : 1;
    estado.racha.ultimo = h;
  }

  function racha() {
    var u = estado.racha.ultimo;
    if (u !== hoy() && u !== ayer()) return 0;
    return estado.racha.dias;
  }

  // guarda un intento y actualiza repaso de errores
  // devuelve el id del tema si se acaba de dominar
  function registrar(id, correcto) {
    var r = estado.res[id] || { ok: false, n: 0, a: 0 };
    r.n += 1;
    if (correcto) r.a += 1;
    r.ok = correcto;
    estado.res[id] = r;

    if (!correcto) {
      estado.fallos[id] = 0;
    } else if (id in estado.fallos) {
      estado.fallos[id] += 1;
      if (estado.fallos[id] >= 2) delete estado.fallos[id];
    }

    tocarRacha();

    var ej = mapa()[id];
    var nuevo = null;
    if (ej && !estado.dominados[ej.tema] && dominio(ej.tema) >= DOMINIO_MINIMO) {
      estado.dominados[ej.tema] = true;
      nuevo = ej.tema;
    }
    guardar();
    return nuevo;
  }

  // porcentaje de ejercicios del tema cuya ultima respuesta fue correcta
  function dominio(temaId) {
    var t = tema(temaId);
    if (!t || !t.ejercicios.length) return 0;
    var bien = t.ejercicios.filter(function (e) {
      return estado.res[e.id] && estado.res[e.id].ok;
    }).length;
    return Math.round(bien * 100 / t.ejercicios.length);
  }

  function respondidos(temaId) {
    return tema(temaId).ejercicios.filter(function (e) { return estado.res[e.id]; }).length;
  }

  function dominado(temaId) { return dominio(temaId) >= DOMINIO_MINIMO; }

  function dominioGlobal() {
    var ts = temas();
    if (!ts.length) return 0;
    var suma = ts.reduce(function (s, t) { return s + dominio(t.id); }, 0);
    return Math.round(suma / ts.length);
  }

  // sesiones de practica

  // primero lo que no ha acertado, luego lo demas
  function sesionTema(temaId, cuantos) {
    var lista = tema(temaId).ejercicios;
    var pendientes = barajar(lista.filter(function (e) { return !(estado.res[e.id] && estado.res[e.id].ok); }));
    var hechos = barajar(lista.filter(function (e) { return estado.res[e.id] && estado.res[e.id].ok; }));
    return pendientes.concat(hechos).slice(0, cuantos || lista.length);
  }

  function sesionRepaso() {
    var m = mapa();
    return barajar(Object.keys(estado.fallos).filter(function (id) { return m[id]; }).map(function (id) { return m[id]; }));
  }

  function sesionFallosTema(temaId) {
    return sesionRepaso().filter(function (e) { return e.tema === temaId; });
  }

  // tema con menor dominio para sugerirlo en el inicio
  function temaSugerido() {
    var ts = temas().filter(function (t) { return !dominado(t.id); });
    if (!ts.length) return null;
    return ts.sort(function (a, b) { return dominio(a.id) - dominio(b.id) || a.n - b.n; })[0];
  }

  function resumenSimulacros() {
    var l = estado.simulacros;
    if (!l.length) return null;
    return {
      ultima: l[l.length - 1].nota,
      mejor: Math.max.apply(null, l.map(function (x) { return x.nota; })),
      veces: l.length
    };
  }

  function cuantosFallos() {
    var m = mapa();
    return Object.keys(estado.fallos).filter(function (id) { return m[id]; }).length;
  }

  function sesionRelampago() {
    var todos = Object.keys(mapa()).map(function (id) { return mapa()[id]; });
    return barajar(todos).slice(0, 10);
  }

  // reparte 30 preguntas entre todos los temas con mezcla de niveles
  function sesionSimulacro(total) {
    total = total || 30;
    var ts = temas();
    var base = Math.floor(total / ts.length);
    var extra = total - base * ts.length;
    var orden = barajar(ts);
    var salida = [];
    orden.forEach(function (t, i) {
      var cupo = base + (i < extra ? 1 : 0);
      var porNivel = [3, 2, 1].map(function (n) {
        return barajar(t.ejercicios.filter(function (e) { return e.nivel === n; }));
      });
      var k = 0;
      while (cupo > 0 && porNivel.some(function (l) { return l.length; })) {
        var l = porNivel[k % 3];
        if (l.length) { salida.push(l.pop()); cupo--; }
        k++;
      }
    });
    return barajar(salida);
  }

  function guardarSimulacro(nota, desglose) {
    estado.simulacros.push({ fecha: Date.now(), nota: nota, desglose: desglose });
    if (estado.simulacros.length > 10) estado.simulacros.shift();
    guardar();
  }

  // flashcards de todos los temas filtradas por categoria
  function flashcards(cat) {
    var salida = [];
    temas().forEach(function (t) {
      (t.flash || []).forEach(function (f) {
        if (!cat || f.cat === cat) salida.push(Object.assign({ tema: t.id, color: t.color }, f));
      });
    });
    return barajar(salida);
  }

  function reiniciar() {
    var vio = estado.bienvenida;
    estado = estadoVacio();
    estado.bienvenida = vio;
    guardar();
  }

  function marcarBienvenida() { estado.bienvenida = true; guardar(); }

  // dibujo de moleculas con SmilesDrawer
  var dibujante = null;
  var TEMA_MOL = {
    FOREGROUND: '#e8edf5', BACKGROUND: 'transparent', C: '#e8edf5', O: '#ff7a6b',
    N: '#6cb8ff', F: '#7be0a0', CL: '#5fe0c8', BR: '#ffae6b', I: '#c69bff',
    P: '#ffae6b', S: '#ffd84d', B: '#ffae6b', SI: '#ffae6b', H: '#aab4c3'
  };

  function dibujar(svg, smiles) {
    if (!window.SmilesDrawer) {
      svg.outerHTML = '<p class="mol-error">No se pudo cargar el dibujo</p>';
      return;
    }
    if (!dibujante) {
      dibujante = new window.SmilesDrawer.SvgDrawer({
        width: 280, height: 170, bondThickness: 1.6, bondLength: 26,
        fontSizeLarge: 10, fontSizeSmall: 6, padding: 16, compactDrawing: false,
        themes: { hill: TEMA_MOL }
      });
    }
    window.SmilesDrawer.parse(smiles, function (arbol) {
      try {
        dibujante.draw(arbol, svg, 'hill');
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.style.width = '';
        svg.style.height = '';
      } catch (e) { svg.outerHTML = '<p class="mol-error">' + smiles + '</p>'; }
    }, function () { svg.outerHTML = '<p class="mol-error">' + smiles + '</p>'; });
  }

  window.Motor = {
    temas: temas, tema: tema, mapa: mapa, barajar: barajar,
    normalizar: normalizar, revisar: revisar, registrar: registrar,
    dominio: dominio, dominado: dominado, dominioGlobal: dominioGlobal, respondidos: respondidos,
    sesionTema: sesionTema, sesionRepaso: sesionRepaso, sesionRelampago: sesionRelampago,
    sesionSimulacro: sesionSimulacro, guardarSimulacro: guardarSimulacro,
    cuantosFallos: cuantosFallos, sesionFallosTema: sesionFallosTema,
    temaSugerido: temaSugerido, resumenSimulacros: resumenSimulacros, flashcards: flashcards, racha: racha,
    reiniciar: reiniciar, marcarBienvenida: marcarBienvenida,
    estado: function () { return estado; }, dibujar: dibujar,
    DOMINIO_MINIMO: DOMINIO_MINIMO
  };
})();
