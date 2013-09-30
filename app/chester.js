'use strict';function aa(a) {
  return function() {
    return this[a]
  }
}
var f, ba = this;
Math.floor(2147483648 * Math.random()).toString(36);
function k(a, b) {
  var c = a.split("."), d = ba;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for(var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
  }
}
function m(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ab = b.prototype;
  a.prototype = new c
}
;function ca(a, b) {
  this.width = a;
  this.height = b
}
ca.prototype.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
ca.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
function n(a) {
  this.length = a.length || a;
  for(var b = 0;b < this.length;b++) {
    this[b] = a[b] || 0
  }
}
n.prototype.BYTES_PER_ELEMENT = 8;
n.prototype.set = function(a, b) {
  b = b || 0;
  for(var c = 0;c < a.length && b + c < this.length;c++) {
    this[b + c] = a[c]
  }
};
n.prototype.toString = Array.prototype.join;
"undefined" == typeof Float64Array && (n.BYTES_PER_ELEMENT = 8, n.prototype.BYTES_PER_ELEMENT = n.prototype.BYTES_PER_ELEMENT, n.prototype.set = n.prototype.set, n.prototype.toString = n.prototype.toString, k("Float64Array", n));
function da(a) {
  this.length = a.length || a;
  for(var b = 0;b < this.length;b++) {
    this[b] = a[b] || 0
  }
}
da.prototype.BYTES_PER_ELEMENT = 4;
da.prototype.set = function(a, b) {
  b = b || 0;
  for(var c = 0;c < a.length && b + c < this.length;c++) {
    this[b + c] = a[c]
  }
};
da.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (da.BYTES_PER_ELEMENT = 4, da.prototype.BYTES_PER_ELEMENT = da.prototype.BYTES_PER_ELEMENT, da.prototype.set = da.prototype.set, da.prototype.toString = da.prototype.toString, k("Float32Array", da));
function ia(a) {
  var b = new Float32Array(3);
  ja(b, a);
  return b
}
function ka(a, b, c, d) {
  a[0] = b;
  a[1] = c;
  a[2] = d;
  return a
}
function ja(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2]
}
function la(a, b) {
  var c = a[0], d = a[1], e = a[2], c = 1 / Math.sqrt(c * c + d * d + e * e);
  b[0] = a[0] * c;
  b[1] = a[1] * c;
  b[2] = a[2] * c
}
function ma(a, b, c) {
  var d = a[0], e = a[1];
  a = a[2];
  var g = b[0], h = b[1];
  b = b[2];
  c[0] = e * b - a * h;
  c[1] = a * g - d * b;
  c[2] = d * h - e * g
}
;function na(a) {
  var b = new Float32Array(4);
  oa(b, a);
  return b
}
function oa(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = b[3]
}
;function pa() {
  return new Float32Array(16)
}
function qa(a, b, c, d, e, g, h, p, l, r, q, s, w, v, z, A, u) {
  a[0] = b;
  a[1] = c;
  a[2] = d;
  a[3] = e;
  a[4] = g;
  a[5] = h;
  a[6] = p;
  a[7] = l;
  a[8] = r;
  a[9] = q;
  a[10] = s;
  a[11] = w;
  a[12] = v;
  a[13] = z;
  a[14] = A;
  a[15] = u;
  return a
}
function ra(a, b, c) {
  a[b] = c[0];
  a[b + 4] = c[1];
  a[b + 8] = c[2];
  a[b + 12] = c[3]
}
function sa(a) {
  a[0] = 1;
  a[1] = 0;
  a[2] = 0;
  a[3] = 0;
  a[4] = 0;
  a[5] = 1;
  a[6] = 0;
  a[7] = 0;
  a[8] = 0;
  a[9] = 0;
  a[10] = 1;
  a[11] = 0;
  a[12] = 0;
  a[13] = 0;
  a[14] = 0;
  a[15] = 1;
  return a
}
function ta(a, b, c) {
  var d = a[0], e = a[1], g = a[2], h = a[3], p = a[4], l = a[5], r = a[6], q = a[7], s = a[8], w = a[9], v = a[10], z = a[11], A = a[12], u = a[13], B = a[14];
  a = a[15];
  var y = b[0], x = b[1], E = b[2], G = b[3], H = b[4], I = b[5], N = b[6], O = b[7], ea = b[8], fa = b[9], ga = b[10], ha = b[11], D = b[12], Va = b[13], Wa = b[14];
  b = b[15];
  c[0] = d * y + p * x + s * E + A * G;
  c[1] = e * y + l * x + w * E + u * G;
  c[2] = g * y + r * x + v * E + B * G;
  c[3] = h * y + q * x + z * E + a * G;
  c[4] = d * H + p * I + s * N + A * O;
  c[5] = e * H + l * I + w * N + u * O;
  c[6] = g * H + r * I + v * N + B * O;
  c[7] = h * H + q * I + z * N + a * O;
  c[8] = d * ea + p * fa + s * ga + A * ha;
  c[9] = e * ea + l * fa + w * ga + u * ha;
  c[10] = g * ea + r * fa + v * ga + B * ha;
  c[11] = h * ea + q * fa + z * ga + a * ha;
  c[12] = d * D + p * Va + s * Wa + A * b;
  c[13] = e * D + l * Va + w * Wa + u * b;
  c[14] = g * D + r * Va + v * Wa + B * b;
  c[15] = h * D + q * Va + z * Wa + a * b;
  return c
}
function ua(a, b, c) {
  var d = b[0], e = b[1];
  b = b[2];
  c[0] = d * a[0] + e * a[4] + b * a[8] + a[12];
  c[1] = d * a[1] + e * a[5] + b * a[9] + a[13];
  c[2] = d * a[2] + e * a[6] + b * a[10] + a[14];
  return c
}
function va(a, b, c, d) {
  var e = a[1] * b + a[5] * c + a[9] * d + a[13], g = a[2] * b + a[6] * c + a[10] * d + a[14], h = a[3] * b + a[7] * c + a[11] * d + a[15];
  a[12] = a[0] * b + a[4] * c + a[8] * d + a[12];
  a[13] = e;
  a[14] = g;
  a[15] = h;
  return a
}
function wa(a, b, c, d) {
  return qa(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, a[8] * d, a[9] * d, a[10] * d, a[11] * d, a[12], a[13], a[14], a[15])
}
function xa(a, b, c, d, e) {
  var g = a[0], h = a[1], p = a[2], l = a[3], r = a[4], q = a[5], s = a[6], w = a[7], v = a[8], z = a[9], A = a[10], u = a[11], B = Math.cos(b), y = Math.sin(b), x = 1 - B;
  b = c * c * x + B;
  var E = c * d * x + e * y, G = c * e * x - d * y, H = c * d * x - e * y, I = d * d * x + B, N = d * e * x + c * y, O = c * e * x + d * y;
  c = d * e * x - c * y;
  e = e * e * x + B;
  return qa(a, g * b + r * E + v * G, h * b + q * E + z * G, p * b + s * E + A * G, l * b + w * E + u * G, g * H + r * I + v * N, h * H + q * I + z * N, p * H + s * I + A * N, l * H + w * I + u * N, g * O + r * c + v * e, h * O + q * c + z * e, p * O + s * c + A * e, l * O + w * c + u * e, a[12], a[13], a[14], a[15])
}
new Float64Array(3);
new Float64Array(3);
var ya = [new Float64Array(4), new Float64Array(4), new Float64Array(4)];
new Float64Array(16);
function za(a, b) {
  this.x = void 0 !== a ? a : 0;
  this.y = void 0 !== b ? b : 0
}
za.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Aa(a, b) {
  this.x = a;
  this.y = b
}
m(Aa, za);
var t;
HTMLCanvasElement.Ab = new Aa(0, 0);
function Ba(a) {
  var b = Ca, c = b.getBoundingClientRect(), b = Da ? b.height / t : b.height, d = HTMLCanvasElement.Ab;
  a.changedTouches && (a = a.changedTouches[0]);
  d.x = a.clientX - c.left;
  d.y = b - (a.clientY - c.top);
  return d
}
(function(a) {
  "undefined" === typeof a.requestAnimationFrame && ("undefined" !== typeof a.webkitRequestAnimationFrame ? a.requestAnimationFrame = a.webkitRequestAnimationFrame : "undefined" !== typeof mozRequestAnimationFrame ? a.requestAnimationFrame = a.mozRequestAnimationFrame : "undefined" !== typeof msRequestAnimationFrame ? a.requestAnimationFrame = a.msRequestAnimationFrame : "undefined" !== typeof oRequestAnimationFrame ? a.requestAnimationFrame = a.oRequestAnimationFrame : (console.log("using setTimeout as requestAnimationFrame"), 
  a.requestAnimationFrame = function(a) {
    window.setTimeout(a, 1E3 / 60)
  }))
})(window);
var Ea = !1;
"undefined" !== typeof runScript && (Ea = !0, ta = _mat4mul, ua = _mat4mulvec3, va = _mat4translate, xa = _mat4rotate, wa = _mat4scale);
var Fa = {useGoogleAnalytics:!1, projection:"3d", webglMode:!0, usesOffscreenBuffer:!1, basePath:"", canvasOriginTopLeft:!1, backgroundColor:[0, 0, 0, 1], useHighDPI:!0, highDPIPrefix:"@__PR__x"}, Ga = "3d", C = !0, Ha = "", Ia = !1, F = na([0, 0, 0, 1]), J = null, Ja = !1, Ka = {}, La = null, Ma = null, Na = null, Ca = null, Oa = !1, Da = !1, K = {}, Pa = {}, Qa = {}, Ra = {}, Sa = Date.now(), Ta = 0, Ua = {hc:0, kc:1, lc:2, ic:3, jc:4}, Xa = null, L = [];
function Ya(a) {
  var b = Ka[a], c = J;
  if(a != La) {
    La = a;
    c.useProgram(b.v);
    for(var d in b.b) {
      c.enableVertexAttribArray(b.b[d])
    }
  }
  return b
}
function Za(a) {
  var b = 0, c = 0;
  try {
    if(Fa.useHighDPI && window.devicePixelRatio && 1 < window.devicePixelRatio) {
      var d = window.devicePixelRatio, b = a.width, c = a.height;
      a.style.width = a.width + "px";
      a.style.height = a.height + "px";
      a.width = a.clientWidth * d;
      a.height = a.clientHeight * d;
      Da = !0;
      t = window.devicePixelRatio;
      console.log("using HighDPI resolution (devicePixelRatio: " + d + ")")
    }else {
      b = a.width, c = a.height
    }
    Ca = a;
    C && ("undefined" !== typeof WebGLDebugUtils && (a = WebGLDebugUtils.makeLostContextSimulatingCanvas(a)), J = a.getContext("experimental-webgl", {alpha:!0, antialias:!1, preserveDrawingBuffer:!0, premultipliedAlpha:!1}), a.addEventListener("webglcontextlost", function(a) {
      a.preventDefault();
      cancelAnimationFrame($a)
    }, !1), a.addEventListener("webglcontextrestored", function(a) {
      a.preventDefault();
      ab()
    }, !1))
  }catch(e) {
    console.log("ERROR: " + e)
  }
  if(!J) {
    J = a.getContext("2d");
    if(!J) {
      throw"Error initializing graphic context!";
    }
    C = Fa.webglMode = !1
  }
  J.Ga = b;
  J.fa = c;
  bb()
}
function ab() {
  if(C) {
    cb();
    for(var a in K.texture) {
      var b = K.texture[a];
      b.data.I = J.createTexture();
      db(b.data)
    }
    var c = function(a) {
      a.ha(null, a.q);
      for(var b in a.children) {
        c(a.children[b])
      }
    };
    c(Na)
  }
  eb();
  La = null;
  fb()
}
function cb() {
  var a = J;
  gb("default", function(b) {
    a.bindAttribLocation(b.v, 0, "aVertexPosition");
    a.bindAttribLocation(b.v, 1, "aVertexColor");
    b.b = {vertexPositionAttribute:0, vertexColorAttribute:1}
  }, function(b) {
    b.Y = a.getUniformLocation(b.v, "uMVPMatrix")
  });
  gb("texture", function(b) {
    a.bindAttribLocation(b.v, 0, "aVertexPosition");
    a.bindAttribLocation(b.v, 1, "aVertexColor");
    a.bindAttribLocation(b.v, 2, "aTextureCoord");
    b.b = {vertexPositionAttribute:0, vertexColorAttribute:1, textureCoordAttribute:2}
  }, function(b) {
    b.Y = a.getUniformLocation(b.v, "uMVPMatrix");
    b.tb = a.getUniformLocation(b.v, "uSampler")
  })
}
function gb(a, b, c) {
  var d = J, e = hb(a, "frag"), g = hb(a, "vert"), h = d.createShader(d.FRAGMENT_SHADER);
  d.shaderSource(h, e);
  d.compileShader(h);
  if(d.getShaderParameter(h, d.COMPILE_STATUS) || d.isContextLost()) {
    if(e = d.createShader(d.VERTEX_SHADER), d.shaderSource(e, g), d.compileShader(e), d.getShaderParameter(e, d.COMPILE_STATUS) || d.isContextLost()) {
      var g = d.createProgram(), p = {v:g};
      d.attachShader(g, h);
      d.attachShader(g, e);
      b(p);
      d.linkProgram(g);
      d.getProgramParameter(g, d.LINK_STATUS) || d.isContextLost() || console.log("problem linking shader");
      d.useProgram(g);
      c(p);
      Ka[a] = p
    }else {
      console.log("problem compiling vertex shader " + a + " (" + d.getShaderInfoLog(e) + "):\n" + g)
    }
  }else {
    console.log("problem compiling fragment shader " + a + " (" + d.getShaderInfoLog(h) + "):\n" + e)
  }
}
function hb(a, b) {
  var c = "";
  if("default" == a || "texture" == a) {
    c = "frag" == b ? "default" == a ? "#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec4 vColor;\nvoid main(void) {\n    gl_FragColor = vColor;\n}" : "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvoid main(void) {\n    vec4 textureColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = textureColor * vColor;\n}" : "default" == a ? "#ifdef GL_ES\nprecision mediump float;\n#endif\nattribute vec3 aVertexPosition;\nattribute vec4 aVertexColor;\nuniform mat4 uMVPMatrix;\nvarying vec4 vColor;\nvoid main(void) {\n    gl_Position = uMVPMatrix * vec4(aVertexPosition, 1.0);\n    gl_PointSize = 1.0;\n    vColor = aVertexColor;\n}" : 
    "#ifdef GL_ES\nprecision mediump float;\n#endif\nattribute vec3 aVertexPosition;\nattribute vec4 aVertexColor;\nattribute vec2 aTextureCoord;\nuniform mat4 uMVPMatrix;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvoid main(void) {\n    gl_Position = uMVPMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vColor = aVertexColor;\n}"
  }else {
    var d = new XMLHttpRequest;
    d.open("GET", Ha + "shaders/" + a + "." + b, !1);
    d.onreadystatechange = function() {
      4 == d.readyState && 200 == d.status ? c = d.responseText : 4 == d.readyState && console.log("error getting the shader data")
    };
    d.send()
  }
  return c
}
function M(a, b, c, d) {
  "function" == typeof c && (d = c, c = null);
  b = "object" == typeof b ? {dataType:b.dataType, url:b.url, name:b.name || b.url, va:b.va || !1} : {url:b, name:c || b};
  K[a] || (K[a] = {});
  var e;
  c = Fa.highDPIPrefix.replace("__PR__", "" + t);
  e = RegExp(c + "\\..+$");
  Da && !b.va && null === b.url.match(e) && (e = b.url.match(/(\..+$)/)) && Da && (b.url = b.url.replace(/(\..+$)/, c + "$1"));
  c = K[a];
  e = b.name;
  if(!c[e]) {
    c[e] = {data:null, name:e, status:"try", M:[]}, d && c[e].M.push(d), M(a, b)
  }else {
    if("loading" == c[e].status) {
      d && c[e].M.push(d)
    }else {
      if("loaded" == c[e].status) {
        d && d(null, c[e].data)
      }else {
        if("try" == c[e].status) {
          c[e].status = "loading";
          if(Qa[a]) {
            Qa[a](a, b)
          }else {
            Qa["default"](a, b)
          }
          d && c[e].M.push(d)
        }
      }
    }
  }
}
function ib(a, b) {
  var c = Ra[a], d, e;
  c || (Ra[a] = [], c = Ra[a]);
  b && c.push(b);
  var g = !0;
  if("all" == a) {
    for(var h in K) {
      d = K[h];
      for(e in d) {
        if("loaded" != d[e].status) {
          g = !1;
          break
        }
      }
      if(!g) {
        break
      }
    }
  }else {
    for(e in d = K[a], d) {
      if("loaded" != d[e].status) {
        g = !1;
        break
      }
    }
  }
  if(g) {
    for(;d = c.shift();) {
      d()
    }
  }
}
function jb(a, b) {
  return b ? K[a][b].data : null
}
function kb(a, b) {
  return b ? b in K[a] : !1
}
function db(a) {
  var b = J, c = !0;
  try {
    var d = 0;
    b.activeTexture(b.TEXTURE0);
    b.bindTexture(b.TEXTURE_2D, a.I);
    b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a);
    d = b.getError();
    d !== b.NO_ERROR && d != b.CONTEXT_LOST_WEBGL && (console.log("gl error " + d), c = !1);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
    b.bindTexture(b.TEXTURE_2D, null)
  }catch(e) {
    console.log("got some error: ", e), c = !1
  }
  return c
}
function lb(a, b, c) {
  K[c][a.name].data = b;
  return!0
}
function mb(a, b) {
  C && !b.I && (b.I = J.createTexture());
  K.texture[a.name].data = b;
  return C ? db(b) : !0
}
function nb(a, b) {
  var c = new Image, d = b.url, e = b.name, g = Fa.highDPIPrefix.replace("__PR__", "" + t), h = RegExp(g + "\\..+$");
  c.src = "";
  c.addEventListener("load", function() {
    var g = K.texture[e];
    if(Pa[a](b, c)) {
      g.status = "loaded";
      g.ob = !(!d.match(h) || !Da);
      for(var l;l = g.M.shift();) {
        l(null, g.data)
      }
      ib(a);
      ib("all")
    }else {
      g.status = "try", M(a, b)
    }
  }, !1);
  c.addEventListener("error", function(a) {
    var c = K.texture[e];
    if("error" === a.type && Da && d.match(h)) {
      b.url = d.replace("@" + t + "x", ""), b.va = !0, c.status = "try", M("texture", b)
    }else {
      c.status = "error";
      for(var g;g = c.M.shift();) {
        g({url:e, type:a.type}, c.data)
      }
    }
  }, !0);
  d.match(/^http(s)?:/) ? (c.crossOrigin = "anonymous", c.src = d) : d.match(/^data:/) ? c.src = d : c.src = Ha + d
}
function ob(a, b) {
  var c = b.url, d = c, e = b.name, g = RegExp("@" + t + "x\\..+$");
  c.match(/^http(s)?:\/\//) || (d = Ha + c);
  var h = new XMLHttpRequest;
  h.open("GET", d);
  h.withCredentials = !0;
  h.onreadystatechange = function() {
    var d = K[a][e];
    if(4 == h.readyState && 200 == h.status) {
      if((Pa[a] || Pa["default"])(b, h.response, a)) {
        d.status = "loaded";
        for(var l;l = d.M.shift();) {
          l(null, d.data)
        }
        ib(a);
        ib("all")
      }else {
        d.status = "try", M(a, b)
      }
    }else {
      if(4 == h.readyState) {
        if(404 == h.status && Da && c.match(g)) {
          b.url = c.replace("@" + t + "x", ""), b.va = !0, d.status = "try", M(a, b)
        }else {
          for(console.log("Error loading asset " + c);l = d.M.shift();) {
            l({url:c, type:h.status}, d.data)
          }
        }
      }
    }
  };
  h.send()
}
function eb() {
  var a = J;
  if(C) {
    a.clearColor(F[0], F[1], F[2], F[3]);
    a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
    a.enable(a.BLEND);
    a.disable(a.DEPTH_TEST);
    var b = a.Ga, c = a.fa;
    a.viewport(0, 0, Ca.width, Ca.height);
    Ma = pa();
    Ga = Fa.projection;
    if("2d" == Ga) {
      console.log("setting up 2d projection (" + b + "," + c + ")"), qa(Ma, 2 / (b - 0), 0, 0, 0, 0, 2 / (c - 0), 0, 0, 0, 0, -2 / 2048, 0, -(b + 0) / (b - 0), -(c + 0) / (c - 0), -0, 1)
    }else {
      if("3d" == Ga) {
        console.log("setting up 3d projection (" + b + "," + c + ")");
        var d = c / 1.1566;
        var a = pa(), e = b / c, g = 60 * Math.PI / 180 / 2, h = Math.sin(g);
        0 != h && 0 != e && (g = Math.cos(g) / h, a = qa(a, g / e, 0, 0, 0, 0, g, 0, 0, 0, 0, -1500.5 / 1499.5, -1, 0, 0, -1500 / 1499.5, 0));
        d = [b / 2, c / 2, d];
        e = [b / 2, c / 2, 0];
        b = pa();
        c = ya[0];
        c[0] = e[0] - d[0];
        c[1] = e[1] - d[1];
        c[2] = e[2] - d[2];
        la(c, c);
        c[3] = 0;
        e = ya[1];
        ma(c, [0, 1, 0], e);
        la(e, e);
        e[3] = 0;
        g = ya[2];
        ma(e, c, g);
        la(g, g);
        g[3] = 0;
        c[0] = -c[0];
        c[1] = -c[1];
        c[2] = -c[2];
        ra(b, 0, e);
        ra(b, 1, g);
        ra(b, 2, c);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[15] = 1;
        va(b, -d[0], -d[1], -d[2]);
        ta(a, b, Ma)
      }else {
        throw"Invalid projection: " + Ga;
      }
    }
  }
}
function pb() {
  var a = J;
  C ? a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT) : (a.setTransform(1, 0, 0, 1, 0, 0), a.fillStyle = F, a.clearRect(0, 0, a.Ga, a.fa), a.fillRect(0, 0, a.Ga, a.fa));
  if(Na && (Na.J(), !Na.K)) {
    Na.onEnterScene()
  }
  a = Date.now();
  Ta = a - Sa;
  Sa = a
}
function bb() {
  Ea ? (_touchBeganListeners.push(qb), _touchMovedListeners.push(rb), _touchEndedListeners.push(sb)) : "undefined" !== typeof navigator && navigator.platform.match(/iPhone|iPad/) ? (document.addEventListener("touchstart", qb, !1), document.addEventListener("touchmove", function(a) {
    rb(a);
    a.preventDefault()
  }, !1), document.addEventListener("touchend", sb, !1)) : ($(Ca).mousedown(qb), $(Ca).mousemove(rb), $(Ca).mouseup(sb), $(Ca).mouseenter(tb), $(Ca).mouseleave(ub))
}
var vb = new Float32Array(3);
function wb(a, b) {
  vb[0] = a;
  vb[1] = b;
  vb[2] = 0
}
function qb(a) {
  a = Ba(a);
  var b = L.length;
  wb(a.x, a.y);
  for(a = b - 1;0 <= a && !0 !== L[a].call(null, vb, 0);a--) {
  }
}
function rb(a) {
  a = Ba(a);
  var b = L.length;
  wb(a.x, a.y);
  for(a = b - 1;0 <= a && !0 !== L[a].call(null, vb, 1);a--) {
  }
}
function sb(a) {
  a = Ba(a);
  var b = L.length;
  wb(a.x, a.y);
  for(a = b - 1;0 <= a && !0 !== L[a].call(null, vb, 2);a--) {
  }
}
function tb(a) {
  a = Ba(a);
  var b = L.length;
  wb(a.x, a.y);
  for(a = b - 1;0 <= a && !0 !== L[a].call(null, vb, 3);a--) {
  }
}
function ub(a) {
  a = Ba(a);
  var b = L.length;
  wb(a.x, a.y);
  for(a = b - 1;0 <= a && !0 !== L[a].call(null, vb, 4);a--) {
  }
}
var $a = null;
function fb() {
  Ja || (Xa && Xa.begin(), pb(), P.dc(Ta), Xa && Xa.end(), $a = requestAnimationFrame(fb, Ca))
}
function Q() {
  return 2 * Math.random() - 1
}
function xb(a) {
  C ? (oa(F, a), J.clearColor(F[0], F[1], F[2], F[3])) : F = "rgba(" + 255 * a[0] + ", " + 255 * a[1] + ", " + 255 * a[2] + ", " + a[3] + ")"
}
k("chesterGL.version", "0.3");
k("chesterGL.settings", Fa);
k("chesterGL.mouseEvents", Ua);
k("chesterGL.onFakeWebGL", Ea);
Ua.UP = 2;
Ua.DOWN = 0;
Ua.MOVE = 1;
Ua.ENTER = 3;
Ua.LEAVE = 4;
k("chesterGL.viewportSize", function() {
  return new ca(J.Ga, J.fa)
});
k("chesterGL.setup", function(a) {
  a = Ea ? new FakeCanvas(innerWidth, innerHeight) : document.getElementById(a);
  Ga = Fa.projection;
  C = Fa.webglMode;
  Ha = Fa.basePath;
  Ia = Fa.canvasOriginTopLeft;
  Za(a);
  C && cb();
  xb(Fa.backgroundColor);
  if(!Ea) {
    a = window.location.search.substring(1).split("&");
    for(var b in a) {
      var c = a[b].split("=");
      "_cdbg" == c[0] && "1" == c[1] && (Oa = !0, console.log("debug mode on"))
    }
  }
  Pa.texture = mb;
  Pa["default"] = lb;
  Qa.texture = nb;
  Qa["default"] = ob;
  "undefined" !== typeof Stats && (console.log("chesterGL: adding stats"), Xa = new Stats, Xa.setMode(1), Ea || (Xa.domElement.style.position = "absolute", Xa.domElement.style.left = "0px", Xa.domElement.style.top = "0px", document.body.appendChild(Xa.domElement)), k("chesterGL.stats", Xa))
});
k("chesterGL.canvasResized", ab);
k("chesterGL.initShader", gb);
k("chesterGL.registerAssetHandler", function(a, b) {
  Pa[a] = b
});
k("chesterGL.loadAsset", M);
k("chesterGL.assetsLoaded", ib);
k("chesterGL.getAsset", jb);
k("chesterGL.hasAsset", kb);
k("chesterGL.setupPerspective", eb);
k("chesterGL.setRunningScene", function(a) {
  if(Na && Na != a) {
    Na.onExitScene()
  }
  a.type == R.SCENE && (Na = a)
});
k("chesterGL.drawScene", pb);
k("chesterGL.run", fb);
k("chesterGL.togglePause", function() {
  Ja ? (Ja = !1, Sa = Date.now(), fb()) : Ja = !0
});
k("chesterGL.isPaused", function() {
  return Ja
});
k("chesterGL.setPause", function(a) {
  Ja && !a ? (Ja = a, Sa = Date.now(), fb()) : Ja = a
});
k("chesterGL.getRunningScene", function() {
  return Na
});
k("chesterGL.getCurrentContext", function() {
  return J
});
k("chesterGL.addMouseHandler", function(a) {
  -1 == L.indexOf(a) && L.push(a)
});
k("chesterGL.removeMouseHandler", function(a) {
  a = L.indexOf(a);
  0 <= a && L.splice(a, 1)
});
k("chesterGL.setBackgroundColor", xb);
k("chesterGL.getBackgroundColor", function() {
  return F
});
function S(a, b, c) {
  this.type = b || R.STANDALONE;
  c && (this.parent = c);
  this.children = [];
  this.k = T.DEFAULT;
  this.ba(0, 0);
  this.type == R.STANDALONE && this.Wa([1, 1, 1, 1]);
  a && ("string" === typeof a && kb("texture", a) ? this.ea(a) : this.ca(a));
  this.P(0, 0, 0);
  this.ma(0.5, 0.5);
  !C || c && c.type == R.BLOCKGROUP || (this.ha(), this.o = new Float32Array(36));
  this.d = pa();
  this.A = pa();
  this.d = sa(pa());
  this.Ha = [];
  this.R = []
}
var T = {DEFAULT:0, TEXTURE:1}, yb = ["default", "texture"], R = {STANDALONE:0, BLOCKGROUP:1, SCENE:2, TMXBLOCK:3, PARTICLE:4, PRIMITIVE:5}, zb = Math.PI / 180, Ab = 180 / Math.PI, Bb = 1 * zb, Cb = new Float32Array(4);
Cb[0] = 0;
Cb[1] = 0;
Cb[2] = 1;
Cb[3] = 1;
var Db = new ca(0, 0);
f = S.prototype;
f.title = "";
f.jb = !1;
f.d = null;
f.A = null;
f.visible = !0;
f.K = !1;
f.Q = 0;
f.f = !1;
f.G = !1;
f.H = !1;
f.qa = 0;
f.p = null;
f.o = null;
f.position = null;
f.m = null;
f.g = null;
f.color = null;
f.c = null;
f.rotation = 0;
f.aa = 1;
f.Ea = 1;
f.update = null;
f.frame = null;
f.parent = null;
f.children = null;
f.Ha = null;
f.R = null;
f.s = !1;
function Eb(a) {
  if(0 < a.g.width) {
    var b = new U(1, 1);
    a.append(b);
    b.Sb = a.parent && a.parent.type == R.BLOCKGROUP ? 1 : 0;
    b.vb(function() {
      var a = this.parent.g, b = a.width / 2, a = a.height / 2, b = [[-b, -a, 0], [-b, a, 0], [b, a, 0], [b, -a, 0]];
      this.Sb ? this.sa(b, [1, 0, 0, 1], !0) : this.sa(b, [1, 1, 1, 1], !0)
    })
  }
  a.jb = !0
}
f.ha = function() {
  C && (this.p = J.createBuffer(), this.f = this.H = !0)
};
f.Vb = function() {
  this.K = !0;
  for(var a in this.children) {
    this.children[a].onEnterScene()
  }
};
f.Wb = function() {
  this.K = !1;
  for(var a in this.children) {
    this.children[a].onExitScene()
  }
  for(var b in P.B) {
    P.B[b].a == this && P.zb(b)
  }
};
f.ca = function(a, b) {
  if("string" === typeof a) {
    var c = Fb.wa(a);
    if(!c) {
      throw"Invalid frame name: " + a;
    }
    a = c.frame;
    this.ea(c.c, a)
  }else {
    this.frame ? oa(this.frame, a) : this.frame = na(a), b ? this.ba(a[2] / t, a[3] / t) : this.ba(a[2], a[3])
  }
  this.H = !0;
  return this
};
f.wa = aa("frame");
f.ba = function(a, b) {
  this.g = new ca(a, b);
  this.H = !0;
  return this
};
f.Lb = aa("g");
f.na = function(a, b) {
  this.aa = a;
  this.Ea = 2 == arguments.length ? b : this.aa;
  this.f = !0;
  return this
};
f.Ob = aa("aa");
f.Wa = function(a) {
  this.color ? oa(this.color, a) : this.color = na(a);
  this.G = !0;
  return this
};
f.Kb = aa("color");
f.Hb = function() {
  return this.color[3]
};
f.Zb = function(a) {
  if(!this.color) {
    throw"Need to set the color before alpha";
  }
  this.color[3] = a;
  this.G = !0;
  return this
};
f.P = function(a, b, c) {
  if(this.position) {
    1 == arguments.length ? ja(this.position, a) : ka(this.position, a, b, c)
  }else {
    var d;
    1 == arguments.length ? d = ia(a) : (d = new Float32Array(3), ka(d, a, b, c));
    this.position = d
  }
  this.f = !0;
  return this
};
f.Bb = function(a, b, c) {
  if(!this.position) {
    throw"call setPosition before adjusting it!";
  }
  this.position[0] += a || 0;
  this.position[1] += b || 0;
  this.position[2] += c || 0;
  this.f = !0
};
f.ma = function(a, b) {
  this.m = new Aa(a, b);
  return this
};
f.Ib = aa("m");
f.Mb = aa("position");
f.Gb = function() {
  var a = ia(this.position), b = this.d, c = pa();
  c[0] = b[0];
  c[1] = b[1];
  c[2] = b[2];
  c[3] = b[3];
  c[4] = b[4];
  c[5] = b[5];
  c[6] = b[6];
  c[7] = b[7];
  c[8] = b[8];
  c[9] = b[9];
  c[10] = b[10];
  c[11] = b[11];
  c[12] = b[12];
  c[13] = b[13];
  c[14] = b[14];
  c[15] = b[15];
  for(b = this.parent;b;) {
    ta(b.d, c, c), b = b.parent
  }
  ua(c, a, a);
  return a
};
var V = new Float32Array(16);
f = S.prototype;
f.ec = function(a, b) {
  b = b || a;
  var c = this.d, d = c[0], e = c[1], g = c[2], h = c[3], p = c[4], l = c[5], r = c[6], q = c[7], s = c[8], w = c[9], v = c[10], z = c[11], A = c[12], u = c[13], B = c[14], c = c[15], y = d * l - e * p, x = d * r - g * p, E = d * q - h * p, G = e * r - g * l, H = e * q - h * l, I = g * q - h * r, N = s * u - w * A, O = s * B - v * A, ea = s * c - z * A, fa = w * B - v * u, ga = w * c - z * u, ha = v * c - z * B, D = y * ha - x * ga + E * fa + G * ea - H * O + I * N;
  0 != D && (D = 1 / D, V[0] = (l * ha - r * ga + q * fa) * D, V[1] = (-e * ha + g * ga - h * fa) * D, V[2] = (u * I - B * H + c * G) * D, V[3] = (-w * I + v * H - z * G) * D, V[4] = (-p * ha + r * ea - q * O) * D, V[5] = (d * ha - g * ea + h * O) * D, V[6] = (-A * I + B * E - c * x) * D, V[7] = (s * I - v * E + z * x) * D, V[8] = (p * ga - l * ea + q * N) * D, V[9] = (-d * ga + e * ea - h * N) * D, V[10] = (A * H - u * E + c * y) * D, V[11] = (-s * H + w * E - z * y) * D, V[12] = (-p * fa + l * 
  O - r * N) * D, V[13] = (d * fa - e * O + g * N) * D, V[14] = (-A * G + u * x - B * y) * D, V[15] = (s * G - w * x + v * y) * D);
  ua(V, a, b);
  b[0] += this.g.width * this.m.x;
  b[1] += this.g.height * this.m.y;
  return b
};
f.Jb = function() {
  var a = this.position, b = this.g.width, c = this.g.height;
  return[a[0] - b / 2, a[1] - c / 2, b, c]
};
f.ea = function(a, b) {
  if(a == this.c && (!b || this.frame == b)) {
    return this
  }
  this.c = a;
  this.k = T.TEXTURE;
  M("texture", a, null, function(a, d) {
    this.ca(b || [0, 0, d.width, d.height], Da && K.texture[this.c].ob)
  }.bind(this));
  return this
};
f.Pb = aa("c");
f.Xa = function(a) {
  this.rotation = a;
  this.f = !0;
  return this
};
f.Nb = aa("rotation");
f.vb = function(a) {
  this.update = a;
  return this
};
f.cc = function(a) {
  if(a !== this.Q && (this.Q = a, this.parent)) {
    a = this.parent;
    var b = a.children.indexOf(this);
    if(0 <= b) {
      a.children.splice(b, 1);
      var b = !1, c;
      for(c in a.children) {
        if(a.children[c].Q > this.Q) {
          a.children.splice(c, 0, this);
          b = !0;
          break
        }
      }
      b || a.children.push(this)
    }
  }
  return this
};
f.Qb = aa("Q");
f.bc = function(a) {
  this.visible = a;
  return this
};
f.Tb = aa("visible");
f.append = function(a) {
  for(var b in arguments) {
    var c = arguments[b];
    if(c.parent) {
      throw"can't add a block twice!";
    }
    if(this.s) {
      this.Ha.push(c)
    }else {
      var d = !1, e;
      for(e in this.children) {
        if(this.children[e].Q > c.Q) {
          this.children.splice(e, 0, c);
          d = !0;
          break
        }
      }
      d || this.children.push(c);
      c.parent = this
    }
    if(this.K) {
      c.onEnterScene()
    }
  }
  return this
};
f.remove = function(a) {
  if(!a.parent || a.parent != this) {
    throw"not our child!";
  }
  if(this.s) {
    this.R.push(a)
  }else {
    var b = this.children.indexOf(a);
    0 <= b && (this.children.splice(b, 1), a.parent = null)
  }
  if(this.K) {
    a.onExitScene()
  }
  return this
};
f.detach = function() {
  this.parent && this.parent.remove(this)
};
f.Da = function() {
  if(this.s) {
    this.R.push("all")
  }else {
    for(var a = 0, a = 0;a < this.children.length;a++) {
      this.children[a].parent = null
    }
    this.children.length = 0
  }
};
var Gb = [new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3)];
S.prototype.transform = function() {
  var a = J, b, c, d = this.parent && this.parent.type == R.BLOCKGROUP, e = this.g ? (0.5 - this.m.x) * this.g.width : 0, g = this.g ? (0.5 - this.m.y) * this.g.height : 0;
  if(this.f || this.parent && this.parent.f) {
    this.f = !0, b = this.position[0], c = this.position[1], C && Ia && (c = a.fa / 2 - c), sa(this.d), va(this.d, b, c, this.position[2]), xa(this.d, -1 * this.rotation, 0, 0, 1), wa(this.d, this.aa, this.Ea, 1), (b = this.parent ? this.parent.d : null) && !d && ta(b, this.d, this.d)
  }
  if(this.type != R.BLOCKGROUP && this.type != R.PRIMITIVE && (b = this.o, C)) {
    d || !this.H && !this.G || a.bindBuffer(a.ARRAY_BUFFER, this.p);
    if(this.H || this.f) {
      var h = 0.5 * this.g.width, p = 0.5 * this.g.height, l = this.position[2];
      c = 36 * this.qa;
      if(d) {
        var r = ka(Gb[0], h + e, p + g, l), q = ka(Gb[1], -h + e, p + g, l), s = ka(Gb[2], h + e, -p + g, l), e = ka(Gb[3], -h + e, -p + g, l);
        ua(this.d, r, r);
        ua(this.d, q, q);
        ua(this.d, e, e);
        ua(this.d, s, s);
        b[c] = e[0];
        b[c + 1] = e[1];
        b[c + 2] = l;
        b[c + 9] = q[0];
        b[c + 1 + 9] = q[1];
        b[c + 2 + 9] = l;
        b[c + 18] = s[0];
        b[c + 1 + 18] = s[1];
        b[c + 2 + 18] = l;
        b[c + 27] = r[0];
        b[c + 1 + 27] = r[1]
      }else {
        b[c] = -h + e, b[c + 1] = -p + g, b[c + 2] = l, b[c + 9] = -h + e, b[c + 1 + 9] = p + g, b[c + 2 + 9] = l, b[c + 18] = h + e, b[c + 1 + 18] = -p + g, b[c + 2 + 18] = l, b[c + 27] = h + e, b[c + 1 + 27] = p + g
      }
      b[c + 2 + 27] = l;
      this.k == T.TEXTURE && (e = jb("texture", this.c), l = e.width, r = e.height, e = this.frame[0] / l, g = this.frame[1] / r, l = this.frame[2] / l, r = this.frame[3] / r, c += 3, b[c] = e, b[c + 1] = g + r, b[c + 9] = e, b[c + 1 + 9] = g, b[c + 18] = e + l, b[c + 1 + 18] = g + r, b[c + 27] = e + l, b[c + 1 + 27] = g)
    }
    if(this.G) {
      for(c = 5 + 36 * this.qa, e = this.color, g = 0;4 > g;g++) {
        b[c + 9 * g] = e[0], b[c + 1 + 9 * g] = e[1], b[c + 2 + 9 * g] = e[2], b[c + 3 + 9 * g] = e[3]
      }
    }
    C && (!d && (this.H || this.G)) && a.bufferData(a.ARRAY_BUFFER, this.o, a.STATIC_DRAW)
  }
};
S.prototype.J = function() {
  this.s = !0;
  Oa && !this.jb && Eb(this);
  this.update && this.update(Ta);
  if(this.visible) {
    this.transform();
    this.parent && this.parent.type == R.BLOCKGROUP || this.$();
    for(var a = this.children, b = a.length, c = 0;c < b;c++) {
      a[c].J()
    }
    for(this.s = this.H = this.G = this.f = !1;a = this.Ha.shift();) {
      this.append(a)
    }
    for(;a = this.R.shift();) {
      "all" === a ? this.Da() : this.remove(a)
    }
  }else {
    this.s = !1
  }
};
S.prototype.$ = function() {
  if(this.type != R.SCENE) {
    var a, b;
    if(C) {
      a = J;
      var c = Ya(yb[this.k]);
      a.bindBuffer(a.ARRAY_BUFFER, this.p);
      a.vertexAttribPointer(c.b.vertexPositionAttribute, 3, a.FLOAT, !1, 36, 0);
      a.vertexAttribPointer(c.b.vertexColorAttribute, 4, a.FLOAT, !1, 36, 20);
      this.k != T.DEFAULT && this.k == T.TEXTURE && (b = jb("texture", this.c), a.vertexAttribPointer(c.b.textureCoordAttribute, 2, a.FLOAT, !1, 36, 12), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, b.I), a.uniform1i(c.tb, 0));
      (this.f || this.parent && this.parent.f) && ta(Ma, this.d, this.A);
      a.uniformMatrix4fv(c.Y, !1, this.A);
      a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
    }else {
      a = J;
      b = this.d;
      var d = c = 0;
      this.g && (c = this.g.width, d = this.g.height);
      a.globalAlpha = this.color[3];
      Ia ? a.setTransform(b[0], b[4], b[1], b[5], b[12] + (0.5 - this.m.x) * c, b[13] + (0.5 - this.m.y) * d) : a.setTransform(b[0], b[4], b[1], b[5], b[12] + (0.5 - this.m.x) * c, a.fa - (b[13] + (0.5 - this.m.y) * d));
      if(1 == this.k) {
        b = jb("texture", this.c);
        var e = this.frame;
        a.drawImage(b, e[0], e[1], e[2], e[3], -c / 2, -d / 2, c, d)
      }else {
        b = [];
        for(e = 0;4 > e;e++) {
          b[e] = 255 * this.color[e]
        }
        a.fillStyle = "rgba(" + b.join(",") + ")";
        a.fillRect(-c / 2, -d / 2, c, d)
      }
    }
  }
};
k("chesterGL.Block", S);
k("chesterGL.Block.FullFrame", Cb);
k("chesterGL.Block.SizeZero", Db);
k("chesterGL.Block.TYPE", R);
k("chesterGL.Block.PROGRAM", T);
k("chesterGL.Block.PROGRAM_NAME", yb);
k("chesterGL.Block.DEG_TO_RAD", zb);
k("chesterGL.Block.RAD_TO_DEG", Ab);
k("chesterGL.Block.ONE_DEG", Bb);
S.prototype.title = S.prototype.title;
S.prototype.onEnterScene = S.prototype.Vb;
S.prototype.onExitScene = S.prototype.Wb;
S.prototype.children = S.prototype.children;
S.prototype.append = S.prototype.append;
S.prototype.remove = S.prototype.remove;
S.prototype.removeAll = S.prototype.Da;
S.prototype.detach = S.prototype.detach;
S.prototype.getBoundingBox = S.prototype.Jb;
S.prototype.setPosition = S.prototype.P;
S.prototype.getPosition = S.prototype.Mb;
S.prototype.adjustPosition = S.prototype.Bb;
S.prototype.toLocal = S.prototype.ec;
S.prototype.setAnchorPoint = S.prototype.ma;
S.prototype.getAnchorPoint = S.prototype.Ib;
S.prototype.getAbsolutePosition = S.prototype.Gb;
S.prototype.setRotation = S.prototype.Xa;
S.prototype.getRotation = S.prototype.Nb;
S.prototype.setColor = S.prototype.Wa;
S.prototype.getColor = S.prototype.Kb;
S.prototype.getAlpha = S.prototype.Hb;
S.prototype.setAlpha = S.prototype.Zb;
S.prototype.setFrame = S.prototype.ca;
S.prototype.getFrame = S.prototype.wa;
S.prototype.setContentSize = S.prototype.ba;
S.prototype.getContentSize = S.prototype.Lb;
S.prototype.setTexture = S.prototype.ea;
S.prototype.getTexture = S.prototype.Pb;
S.prototype.setScale = S.prototype.na;
S.prototype.getScale = S.prototype.Ob;
S.prototype.setUpdate = S.prototype.vb;
S.prototype.setVisible = S.prototype.bc;
S.prototype.isVisible = S.prototype.Tb;
S.prototype.setZOrder = S.prototype.cc;
S.prototype.getZOrder = S.prototype.Qb;
function W(a, b) {
  if(!C) {
    throw"BlockGroup only works on WebGL mode";
  }
  S.call(this, null, R.BLOCKGROUP);
  a ? (this.c = a, this.k = T.TEXTURE) : this.k = T.DEFAULT;
  this.X = b || 10;
  this.ha()
}
m(W, S);
f = W.prototype;
f.X = 0;
f.ya = !1;
f.xa = null;
f.q = null;
f.ha = function(a, b) {
  var c = J;
  this.p || (this.p = c.createBuffer());
  this.xa || (this.xa = c.createBuffer());
  var c = new Float32Array(36 * this.X), d = new Uint16Array(6 * this.X);
  a && c.set(a);
  b && d.set(b);
  this.o = c;
  this.q = d
};
f.Ka = function(a) {
  var b = new S(a, R.STANDALONE, this);
  this.c && b.ea(this.c, a);
  return b
};
f.append = function(a) {
  for(var b in arguments) {
    var c = arguments[b];
    if(c.parent != this) {
      throw"Invalid child: can only add children created with BlockGroup.create";
    }
    this.children.length >= this.X && (this.X *= 2, this.ha(this.o, this.q));
    if(!this.c) {
      this.c = c.c
    }else {
      if(this.c != c.c) {
        throw"Invalid child: only can add child with the same texture";
      }
    }
    this.children.push(c);
    c.qa = this.children.length - 1;
    c.o = this.o;
    this.ya = !0
  }
  return this
};
f.remove = function(a) {
  if(a.parent != this) {
    throw"Invalid child";
  }
  if(this.s) {
    this.R.push(a)
  }else {
    var b = this.children.indexOf(a);
    if(0 < b) {
      for(a = this.children.splice(b, 1), a[0].parent = null;b < this.children.length;b++) {
        a = this.children[b], a.qa = b, a.f = !0, a.G = !0
      }
    }
    this.ya = !0
  }
  return this
};
f.J = function() {
  this.s = !0;
  this.update && this.update(Ta);
  if(this.visible) {
    this.transform();
    for(var a = this.children, b = a.length, c = 0;c < b;c++) {
      a[c].J()
    }
    a = J;
    a.bindBuffer(a.ARRAY_BUFFER, this.p);
    a.bufferData(a.ARRAY_BUFFER, this.o, a.STATIC_DRAW);
    if(this.ya) {
      var d, a = (this.q[-1] || -1) + 1;
      d = d || Math.max(this.children.length, 1);
      for(b = 0;b < d;b++) {
        c = 6 * b, this.q[c + 0] = a, this.q[c + 1] = a + 1, this.q[c + 2] = a + 2, this.q[c + 3] = a + 2, this.q[c + 4] = a + 1, this.q[c + 5] = a + 3, a += 4
      }
      d = J;
      d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.xa);
      d.bufferData(d.ELEMENT_ARRAY_BUFFER, this.q, d.STATIC_DRAW);
      this.ya = !1
    }
    this.$();
    for(this.s = this.H = this.G = this.f = !1;d = this.R.shift();) {
      "all" === d ? this.Da() : this.remove(d)
    }
  }else {
    this.s = !1
  }
};
f.$ = function(a) {
  var b = J, c = Ya(yb[this.k]);
  a = a || this.children.length;
  b.bindBuffer(b.ARRAY_BUFFER, this.p);
  b.vertexAttribPointer(c.b.vertexPositionAttribute, 3, b.FLOAT, !1, 36, 0);
  if(this.k != T.DEFAULT && this.k == T.TEXTURE) {
    var d = jb("texture", this.c);
    b.vertexAttribPointer(c.b.textureCoordAttribute, 2, b.FLOAT, !1, 36, 12);
    b.activeTexture(b.TEXTURE0);
    b.bindTexture(b.TEXTURE_2D, d.I);
    b.uniform1i(c.tb, 0)
  }
  b.vertexAttribPointer(c.b.vertexColorAttribute, 4, b.FLOAT, !1, 36, 20);
  b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.xa);
  (this.f || this.parent && this.parent.f) && ta(Ma, this.d, this.A);
  b.uniformMatrix4fv(c.Y, !1, this.A);
  b.drawElements(b.TRIANGLES, 6 * a, b.UNSIGNED_SHORT, 0)
};
k("chesterGL.BlockGroup", W);
W.prototype.createBlock = W.prototype.Ka;
W.prototype.append = W.prototype.append;
W.prototype.remove = W.prototype.remove;
function X(a, b, c) {
  a = a || "";
  W.call(this, b + ".png", Math.max(255, a.length));
  this.maxWidth = c || 0;
  this.Wa([0, 0, 0, 0]);
  c = K.texture[b + ".png"];
  b = jb("txt", b + ".fnt").split(/\n|\r/);
  var d, e, g;
  this.S = {};
  this.L = {};
  this.za = c.ob;
  for(d in b) {
    if(c = b[d].match(/chars count=(\d+)/), !c) {
      if(c = b[d].split(/\s+/), "common" === c[0]) {
        var h = {};
        for(e = 1;e < c.length;e++) {
          g = c[e].split("="), 2 == g.length && (h[g[0]] = parseInt(g[1], 10))
        }
        this.Xb = h
      }else {
        if("char" === c[0]) {
          h = {};
          for(e = 1;e < c.length;e++) {
            g = c[e].split("="), 2 == g.length && (h[g[0]] = parseInt(g[1], 10))
          }
          h.id ? this.S[h.id] = h : console.log("BMFontLabel: invalid char at line " + (d + 1))
        }else {
          if("kerning" === c[0]) {
            h = {};
            for(e = 1;e < c.length;e++) {
              g = c[e].split("="), 2 == g.length && (h[g[0]] = parseInt(g[1], 10))
            }
            this.L[h.first] = this.L[h.first] || {};
            this.L[h.first][h.second] = h.amount
          }
        }
      }
    }
  }
  this.da(a)
}
m(X, W);
X.prototype.ma = function(a, b) {
  X.ab.ma.call(this, a, b);
  this.da(this.text);
  return this
};
X.prototype.nb = function(a) {
  "string" === typeof a && (a = a.charCodeAt(0));
  var b = this.S[a];
  if(b) {
    return[b.x, b.y, b.width, b.height]
  }
  throw"Invalid character '" + a + "' for BMFont";
};
X.prototype.da = function(a) {
  var b, c;
  if(null !== a && void 0 !== a) {
    this.text = a;
    this.Da();
    b = a;
    var d = 0, e = 0;
    c = 1;
    var g, h = 0;
    for(g = 0;g < b.length;g++) {
      var p = b.charCodeAt(g);
      if(10 == p || 13 == p) {
        d = Math.max(d, e), e = 0, c++
      }else {
        if(this.S[p]) {
          var l = this.S[p], r = 0;
          0 < h && this.L[h] && (r = this.L[h][p] || 0);
          h = l.xadvance + r;
          e += this.za ? h / t : h;
          h = p
        }
      }
    }
    b = d = Math.max(d, e);
    d = this.Xb.lineHeight;
    r = 0;
    g = -b * this.m.x * (this.za ? t : 1);
    p = -(c * d * this.m.y);
    0 < this.maxWidth && b > this.maxWidth ? this.na(this.maxWidth / b) : this.na(1);
    a = a.split(/\n|\r/).reverse().join("\n");
    for(e = 0;e < a.length;e++) {
      if(h = a.charCodeAt(e), 10 == h || 13 == h) {
        g = -b * this.m.x, p += d
      }else {
        if(this.S[h]) {
          l = 0;
          0 < r && this.L[r] && (l = this.L[r][h] || 0);
          var q = this.nb(h), r = this.S[h], q = this.Ka(q), s = p + (d - r.yoffset) - 0.5 * r.height, w = g + r.xoffset + 0.5 * r.width + l;
          this.za ? q.P(~~(w / t), ~~(s / t), 0) : q.P(~~w, ~~s, 0);
          g += r.xadvance + l;
          this.append(q)
        }else {
          throw"Invalid charcode " + h + " for text " + a + " (" + a.length + ")";
        }
        r = h
      }
    }
    this.za ? this.ba(b, c * d / t) : this.ba(b, c * d)
  }
};
k("chesterGL.BMFontLabelBlock", X);
k("chesterGL.BMFontLabelBlock.loadFont", function(a) {
  M("txt", a + ".fnt");
  M("texture", a + ".png")
});
X.prototype.setText = X.prototype.da;
X.prototype.setAnchorPoint = X.prototype.ma;
X.prototype.getFrameForChar = X.prototype.nb;
function Hb(a) {
  S.call(this, null, 4);
  var b = this;
  M("texture", a.texture, null, function() {
    b.qb(a)
  })
}
m(Hb, S);
var Ib = !1;
function Jb() {
  gb("particles", function(a) {
    var b = J;
    a.Y = b.getUniformLocation(a, "uMVPMatrix");
    a.fc = b.getUniformLocation(a, "uSampler");
    a.gc = b.getUniformLocation(a, "u_time");
    a.b = {a_startPosition:b.getAttribLocation(a, "a_startPosition"), a_lifetime:b.getAttribLocation(a, "a_lifetime"), a_startTime:b.getAttribLocation(a, "a_startTime"), a_startSize:b.getAttribLocation(a, "a_startSize"), a_endSize:b.getAttribLocation(a, "a_endSize"), a_speed:b.getAttribLocation(a, "a_speed"), a_startColor:b.getAttribLocation(a, "a_startColor"), a_endColor:b.getAttribLocation(a, "a_endColor")};
    a.gb = !1;
    a = b.getError();
    0 !== a && console.log("gl error: " + a)
  });
  Ib = !0
}
f = Hb.prototype;
f.n = !0;
f.rb = null;
f.kb = 0;
f.U = 0;
f.O = 0;
f.N = 0;
f.duration = 0;
f.Pa = 0;
f.pb = 0;
f.oa = null;
f.pa = null;
f.Ca = null;
f.ia = null;
f.ja = null;
f.Aa = null;
f.Ba = null;
f.xb = 0;
f.yb = 0;
f.lb = 0;
f.mb = 0;
f.Ua = !1;
f.elapsedTime = 0;
f.Ja = ["SRC_ALPHA", "ONE_MINUS_SRC_ALPHA"];
f.qb = function(a) {
  this.k = -1;
  Ib || Jb();
  this.rb = a.texture;
  this.N = a.maxParticles;
  this.duration = 1E3 * parseFloat(a.duration);
  this.Pa = 1E3 * parseFloat(a.lifetime);
  this.pb = 1E3 * parseFloat(a.lifetimeVariance);
  this.oa = na(a.startColor);
  this.pa = na(a.startColorVariance);
  this.ia = na(a.endColor);
  this.ja = na(a.endColorVariance);
  this.Ca = ia(a.positionVariance);
  this.Aa = ia(a.speed);
  this.Ba = ia(a.speedVariance);
  this.xb = parseFloat(a.startSize);
  this.yb = parseFloat(a.startSizeVariance);
  this.lb = parseFloat(a.endSize);
  this.mb = parseFloat(a.endSizeVariance);
  this.elapsedTime = 0;
  this.Ja = a.blendOptions.slice(0);
  this.n = !0;
  this.p || (this.p = J.createBuffer());
  this.o = new Float32Array(18 * this.N);
  a = Ya("particles");
  for(var b = J, c = 0;c < this.N;c++) {
    Kb(this, c)
  }
  b.uniform1i(a.fc, 0);
  Lb(this, a);
  this.O = this.U = this.elapsedTime = 0;
  this.kb = this.N / Math.abs(this.Pa)
};
function Kb(a, b, c, d) {
  var e = a.o;
  e[18 * b + 0] = c || -1;
  e[18 * b + 1] = d || 0;
  e[18 * b + 2] = a.xb + a.yb * Q();
  e[18 * b + 3] = a.lb + a.mb * Q();
  e[18 * b + 4] = a.Aa[0] + a.Ba[0] * Q();
  e[18 * b + 5] = a.Aa[1] + a.Ba[1] * Q();
  e[18 * b + 6] = a.Aa[2] + a.Ba[2] * Q();
  e[18 * b + 7] = Q() * a.Ca[0];
  e[18 * b + 8] = Q() * a.Ca[1];
  e[18 * b + 9] = Q() * a.Ca[2];
  e[18 * b + 10] = Math.max(0, Math.min(1, a.oa[0] + Q() * a.pa[0]));
  e[18 * b + 11] = Math.max(0, Math.min(1, a.oa[1] + Q() * a.pa[1]));
  e[18 * b + 12] = Math.max(0, Math.min(1, a.oa[2] + Q() * a.pa[2]));
  e[18 * b + 13] = Math.max(0, Math.min(1, a.oa[3] + Q() * a.pa[3]));
  e[18 * b + 14] = Math.max(0, Math.min(1, a.ia[0] + Q() * a.ja[0]));
  e[18 * b + 15] = Math.max(0, Math.min(1, a.ia[1] + Q() * a.ja[1]));
  e[18 * b + 16] = Math.max(0, Math.min(1, a.ia[2] + Q() * a.ja[2]));
  e[18 * b + 17] = Math.max(0, Math.min(1, a.ia[3] + Q() * a.ja[3]))
}
function Lb(a, b) {
  var c = J;
  c.bindBuffer(c.ARRAY_BUFFER, a.p);
  b.gb || (c.vertexAttribPointer(b.b.a_lifetime, 1, c.FLOAT, !1, 72, 0), c.vertexAttribPointer(b.b.a_startTime, 1, c.FLOAT, !1, 72, 4), c.vertexAttribPointer(b.b.a_startSize, 1, c.FLOAT, !1, 72, 8), c.vertexAttribPointer(b.b.a_endSize, 1, c.FLOAT, !1, 72, 12), c.vertexAttribPointer(b.b.a_speed, 3, c.FLOAT, !1, 72, 16), c.vertexAttribPointer(b.b.a_startPosition, 3, c.FLOAT, !1, 72, 28), c.vertexAttribPointer(b.b.a_startColor, 4, c.FLOAT, !1, 72, 40), c.vertexAttribPointer(b.b.a_endColor, 4, c.FLOAT, 
  !1, 72, 56), b.gb = !0);
  c.bufferData(c.ARRAY_BUFFER, a.o, c.STATIC_DRAW)
}
var Mb = new Float32Array(18);
Hb.prototype.update = function(a) {
  if(Ya("particles")) {
    this.elapsedTime += a;
    var b = 1 / this.kb;
    for(this.U += a;this.O < this.N && this.U > b && this.n;) {
      a = Math.abs(this.Pa + this.pb * Q()), Kb(this, this.O++, a, this.elapsedTime), this.Ua = !0, this.U -= b
    }
    for(b = 0;b < this.N;b++) {
      a = this.o;
      var c = 18 * b;
      if(0 < a[c] && a[c] + a[c + 1] <= this.elapsedTime && b != this.O - 1) {
        var d = a.subarray(c, c + 18);
        Mb.set(d);
        Mb[0] = -1;
        d = a.subarray(c + 18, 18 * this.O);
        a.set(d, c);
        a.set(Mb, 18 * (this.O - 1));
        this.O--
      }
    }
    0 < this.duration && this.elapsedTime > this.duration && (this.n = !1)
  }
};
Hb.prototype.$ = function() {
  var a = Ya("particles");
  if(a) {
    var b = J, c = jb("texture", this.rb);
    b.blendFunc(b[this.Ja[0]], b[this.Ja[1]]);
    b.uniform1f(a.gc, this.elapsedTime);
    b.activeTexture(b.TEXTURE0);
    b.bindTexture(b.TEXTURE_2D, c.I);
    this.Ua ? (Lb(this, a), this.Ua = !1) : b.bindBuffer(b.ARRAY_BUFFER, this.p);
    (this.f || this.parent && this.parent.f) && ta(Ma, this.d, this.A);
    b.uniformMatrix4fv(a.Y, !1, this.A);
    b.drawArrays(b.POINTS, 0, this.N);
    b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA)
  }
};
k("chesterGL.GPUParticleSystem", Hb);
Hb.loadShaders = Jb;
Hb.prototype.loadProperties = Hb.prototype.qb;
function Y(a, b) {
  this.totalTime = a;
  this.a = b;
  this.j = 0
}
f = Y.prototype;
f.ga = 0;
f.a = null;
f.totalTime = 0;
f.j = 0;
f.t = !1;
f.n = !1;
f.next = null;
f.update = function(a) {
  this.n && (this.j += a, 0 <= this.totalTime && this.j >= this.totalTime && (this.stop(), this.next && this.a.sb(this.next)))
};
f.$b = function(a) {
  return this.next = a
};
f.ac = function(a) {
  this.n || (this.totalTime = a)
};
f.e = function() {
  this.n = !0
};
f.stop = function() {
  this.t = !0;
  this.n = !1
};
f.pause = function() {
  this.n = !1
};
f.Va = function() {
  this.n = !0
};
f.K = function() {
  return!0 === this.n
};
f.reset = function() {
  this.t = this.n = !1;
  this.j = 0
};
function Z(a, b, c, d) {
  Y.call(this, b, d);
  this.ra = ia(a);
  this.W = void 0 !== c ? !0 === c : !0;
  this.Ya = new Float32Array(3);
  this.ka = new Float32Array(3)
}
m(Z, Y);
Z.prototype.ra = null;
Z.prototype.ka = null;
Z.prototype.W = !0;
Z.prototype.Ya = null;
var Nb = new Float32Array(3);
Z.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  a = this.a;
  var b = Math.min(1, this.j / this.totalTime), c = this.Ya, d = this.ka, e = c[0], g = c[1], c = c[2];
  Nb[0] = (d[0] - e) * b + e;
  Nb[1] = (d[1] - g) * b + g;
  Nb[2] = (d[2] - c) * b + c;
  a.P(Nb[0], Nb[1], Nb[2])
};
Z.prototype.e = function() {
  Y.prototype.e.call(this);
  if(!this.a) {
    throw"invalid move action! - no block";
  }
  if(this.W) {
    var a = this.ra, b = this.a.position, c = this.ka;
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2]
  }else {
    ja(this.ka, this.ra)
  }
  ja(this.Ya, this.a.position)
};
Z.prototype.stop = function() {
  Y.prototype.stop.call(this);
  this.j >= this.totalTime && this.a.P(this.ka)
};
Z.prototype.reverse = function() {
  if(!this.W) {
    throw"This only works on relative movements";
  }
  var a = [], b = this.ra;
  a[0] = -b[0];
  a[1] = -b[1];
  a[2] = -b[2];
  return new Z(a, this.totalTime, !0)
};
function Ob(a, b, c, d, e) {
  Y.call(this, c, e);
  this.W = d;
  this.La = a;
  this.Ma = b;
  this.$a = this.Za = this.ua = this.ta = 0
}
m(Ob, Y);
Ob.prototype.e = function() {
  Y.prototype.e.call(this);
  if(!this.a) {
    throw"invalid scale action - no block provided";
  }
  this.W ? (this.ta = this.a.aa + this.La, this.ua = this.a.Ea + this.Ma) : (this.ta = this.La, this.ua = this.Ma);
  this.Za = this.a.aa;
  this.$a = this.a.Ea
};
Ob.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  a = this.a;
  var b = Math.min(1, this.j / this.totalTime);
  a.na(this.Za + b * (this.ta - this.Za), this.$a + b * (this.ua - this.$a))
};
Ob.prototype.stop = function() {
  Y.prototype.stop.call(this);
  this.j >= this.totalTime && this.a.na(this.ta, this.ua)
};
Ob.prototype.reverse = function() {
  if(!this.W) {
    throw"This only works on relative movements";
  }
  return new Ob(-this.La, -this.Ma, this.totalTime, !0)
};
function Pb(a, b, c) {
  this.hb = a;
  this.fb = c;
  Y.call(this, b || 0)
}
m(Pb, Y);
Pb.prototype.hb = null;
Pb.prototype.fb = null;
Pb.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  this.t && this.hb.call(null, this.fb)
};
function Qb(a) {
  if(1 > arguments.length) {
    throw"you need at least one action to create a sequence";
  }
  var b = 0;
  this.l = [];
  for(var c in arguments) {
    b += arguments[c].totalTime, this.l.push(arguments[c])
  }
  this.la = this.l[0].totalTime;
  Y.call(this, b)
}
m(Qb, Y);
f = Qb.prototype;
f.l = null;
f.C = 0;
f.e = function() {
  Y.prototype.e.call(this);
  this.la = this.l[0].totalTime;
  this.l[0].a = this.a;
  this.l[0].e()
};
f.reset = function() {
  Qb.ab.reset.call(this);
  this.C = 0;
  this.la = this.l[0].totalTime;
  for(var a = this.totalTime = 0;a < this.l.length;a++) {
    this.l[a].reset(), this.totalTime += this.l[a].totalTime
  }
};
f.update = function(a) {
  Qb.ab.update.call(this, a);
  var b = this.l[this.C];
  b.update(a);
  if(this.j >= this.la) {
    for(b.t || b.update(1E3), this.C++;this.C < this.l.length;) {
      b = this.l[this.C];
      b.a = this.a;
      b.e();
      this.la += b.totalTime;
      if(0 < b.totalTime) {
        break
      }
      b.update(1);
      if(0 === this.C) {
        break
      }
      this.C += 1
    }
  }
};
function Rb(a, b) {
  this.Sa = b || 1;
  this.cb = 0;
  this.action = a;
  Y.call(this, a.totalTime)
}
m(Rb, Y);
f = Rb.prototype;
f.Sa = 0;
f.cb = 0;
f.action = null;
f.e = function() {
  Y.prototype.e.call(this);
  this.action.a = this.a;
  this.action.e()
};
f.update = function(a) {
  Y.prototype.update.call(this, a);
  this.action.update(a);
  this.t && this.action.t && (0 > this.Sa || this.cb < this.Sa) && (this.cb++, this.reset(), this.action.reset(), this.e())
};
function Sb(a, b, c, d) {
  Y.call(this, c, d);
  this.param = a;
  this.Fa = b;
  this.V = "object" === typeof a
}
m(Sb, Y);
Sb.prototype.e = function() {
  Y.prototype.e.call(this);
  if(this.V) {
    this.r = "string" === typeof this.param.getter ? this.a[this.param.getter]() : this.param.getter.call(this.a)
  }else {
    var a = this.a[this.param];
    if(!a) {
      throw"Invalid ElasticAction param!";
    }
    this.r = a
  }
};
Sb.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  var b = Math.min(1, this.j / this.totalTime);
  a = this.a;
  b = this.r + b * (this.Fa - this.r);
  this.V ? "string" === typeof this.param.setter ? a[this.param.setter].call(a, b) : this.param.setter.call(a, b) : a[this.param] = b
};
function Tb(a, b, c, d) {
  Y.call(this, c, d);
  this.param = a;
  this.Fa = b;
  this.V = "object" === typeof a
}
m(Tb, Y);
Tb.prototype.e = function() {
  Y.prototype.e.call(this);
  var a;
  if(this.V) {
    a = this.a[this.param.getter]()
  }else {
    if(a = this.a[this.param], !a) {
      throw"Invalid ElasticAction param!";
    }
  }
  this.Ia = !1;
  a instanceof Array ? (this.r = a.slice(0), this.Ia = !0) : a instanceof Float32Array ? (this.r = new Float32Array(a), this.Ia = !0) : this.r = a
};
Tb.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  a = Math.min(1, this.j / this.totalTime);
  var b = 0.5 * Math.pow(1 - a, 3) + 0.06 * 3 * Math.pow(1 - a, 2) * a + 2.2 * 3 * (1 - a) * Math.pow(a, 2) + 1.5 * Math.pow(a, 3) - 0.5;
  a = this.a;
  if(this.Ia) {
    for(var c = [], d = this.r.length, e = 0;e < d;e++) {
      c[e] = this.r[e] + b * (this.Fa[e] - this.r[e])
    }
    this.V ? a[this.param.setter].apply(a, c) : a[this.param] = c
  }else {
    b = this.r + b * (this.Fa - this.r), this.V ? a[this.param.setter].call(a, b) : a[this.param] = b
  }
};
function Ub(a, b, c, d) {
  this.delay = a;
  a *= b.length;
  !0 === c && (a = -1);
  Y.call(this, a, d);
  this.wb = !0 === c;
  this.frames = b.slice(0)
}
m(Ub, Y);
f = Ub.prototype;
f.T = 0;
f.delay = 0;
f.frames = null;
f.wb = !1;
f.update = function(a) {
  Y.prototype.update.call(this, a);
  a = this.a;
  this.t ? (this.T = this.frames.length - 1, a.ca(this.frames[this.T])) : this.j >= this.delay * this.T && (a.ca(this.frames[this.T++]), this.T == this.frames.length && (this.wb ? this.j = this.T = 0 : this.t = !0))
};
function Vb(a, b, c, d) {
  this.eb = a;
  this.ib = b;
  Y.call(this, c, d)
}
m(Vb, Y);
Vb.prototype.eb = 0;
Vb.prototype.ib = 0;
Vb.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  this.t ? this.a.Xa(0) : this.a.Xa(this.eb * Math.sin(2 * (this.j / 1E3 * this.ib) * Math.PI / (this.totalTime / 1E3)))
};
var P = {B:{}, Rb:0, ub:function(a) {
  a.ga && P.B.hasOwnProperty(a.ga) || (a.ga = P.Rb++, P.B[a.ga] = a);
  a.e();
  return a.ga
}, zb:function(a) {
  P.B.hasOwnProperty(a) && delete P.B[a]
}, dc:function(a) {
  if(!P.paused) {
    for(var b in P.B) {
      var c = P.B[b];
      c.n && c.update(a);
      c.t && delete P.B[b]
    }
  }
}, pause:function() {
  P.paused = !0
}, Va:function() {
  P.paused = !1
}};
S.prototype.sb = function(a) {
  a.a = this;
  return P.ub(a)
};
k("chesterGL.ActionManager", P);
k("chesterGL.MoveAction", Z);
k("chesterGL.ScaleAction", Ob);
k("chesterGL.CallbackAction", Pb);
k("chesterGL.SequenceAction", Qb);
k("chesterGL.RepeatAction", Rb);
k("chesterGL.AnimateAction", Ub);
k("chesterGL.WiggleAction", Vb);
k("chesterGL.ElasticAction", Tb);
k("chesterGL.ParametricAction", Sb);
P.scheduleAction = P.ub;
P.unscheduleAction = P.zb;
P.pause = P.pause;
P.resume = P.Va;
S.prototype.runAction = S.prototype.sb;
Y.prototype.setNext = Y.prototype.$b;
Y.prototype.stop = Y.prototype.stop;
Y.prototype.reset = Y.prototype.reset;
Y.prototype.begin = Y.prototype.e;
Y.prototype.pause = Y.prototype.pause;
Y.prototype.resume = Y.prototype.Va;
Y.prototype.setTotalTime = Y.prototype.ac;
Y.prototype.isRunning = Y.prototype.K;
Z.prototype.reverse = Z.prototype.reverse;
Ob.prototype.reverse = Ob.prototype.reverse;
var Fb = {frames:{}, Yb:function(a) {
  "string" === typeof a && (a = JSON.parse(a));
  if(a.meta && "1.0" == a.meta.version) {
    var b = a.meta.image;
    M("texture", b, null, function() {
      var c = a.frames, d;
      for(d in c) {
        var e = c[d], g = {frame:{}, c:""};
        g.frame = [e.frame.x, e.frame.y, e.frame.w, e.frame.h];
        e.sourceSize && (g.sourceSize = {width:e.sourceSize.w, height:e.sourceSize.h});
        g.c = b;
        Fb.frames[d] = g
      }
    })
  }else {
    throw"Unkown json data";
  }
}, Fb:function(a, b) {
  K.frameset[a.name].data = b;
  return!0
}, wa:function(a) {
  return Fb.frames[a]
}, Ub:function(a) {
  M("frameset", {url:a, dataType:"json"}, null, function(a, c) {
    Fb.Yb(c)
  })
}};
Pa.frameset = Fb.Fb;
k("chesterGL.BlockFrames", Fb);
Fb.getFrame = Fb.wa;
Fb.loadFrames = Fb.Ub;
function U(a, b) {
  if(!C) {
    throw"PrimitiveBlock only works on WebGL mode";
  }
  this.Ra = a || 500;
  this.Qa = b || 500;
  S.call(this, null, R.PRIMITIVE);
  var c = J;
  this.Oa = c.createBuffer();
  this.u = new Float32Array(7 * this.Ra);
  this.Na = c.createBuffer();
  this.i = new Float32Array(14 * this.Qa);
  this.k = T.DEFAULT
}
m(U, S);
f = U.prototype;
f.Oa = null;
f.u = null;
f.Na = null;
f.i = null;
f.Qa = 0;
f.D = 0;
f.Ra = 0;
f.F = 0;
f.Z = [];
f.Db = function(a, b, c) {
  if(this.F < this.Ra) {
    var d = 7 * this.F;
    c = c || [1, 1, 1, 1];
    this.u[d + 0] = a;
    this.u[d + 1] = b;
    this.u[d + 2] = 0;
    this.u[d + 3] = c[0];
    this.u[d + 4] = c[1];
    this.u[d + 5] = c[2];
    this.u[d + 6] = c[3];
    this.F++
  }else {
    throw"too many points!";
  }
};
f.Cb = function(a, b, c, d, e) {
  if(this.D < this.Qa) {
    var g = 14 * this.D;
    e = e || [1, 1, 1, 1];
    this.i[g + 0] = a;
    this.i[g + 1] = b;
    this.i[g + 2] = 0;
    this.i[g + 3] = e[0];
    this.i[g + 4] = e[1];
    this.i[g + 5] = e[2];
    this.i[g + 6] = e[3];
    this.i[g + 7] = c;
    this.i[g + 8] = d;
    this.i[g + 9] = 0;
    this.i[g + 10] = e[0];
    this.i[g + 11] = e[1];
    this.i[g + 12] = e[2];
    this.i[g + 13] = e[3];
    this.D++
  }else {
    throw"too many lines!";
  }
};
f.sa = function(a, b, c, d) {
  b = b || [1, 1, 1, 1];
  c = c || !1;
  d = d || !1;
  for(var e = a.length, g = J, h = new Float32Array(7 * a.length), p = g.createBuffer(), l = 0;l < e;l++) {
    var r = a[l];
    h[7 * l + 0] = r[0];
    h[7 * l + 1] = r[1];
    h[7 * l + 2] = r[2];
    h[7 * l + 3] = b[0];
    h[7 * l + 4] = b[1];
    h[7 * l + 5] = b[2];
    h[7 * l + 6] = b[3]
  }
  g.bindBuffer(g.ARRAY_BUFFER, p);
  g.bufferData(g.ARRAY_BUFFER, h, g.STATIC_DRAW);
  this.Z.unshift([h, p, c, d])
};
f.Eb = function(a, b, c, d, e, g) {
  c /= 2;
  d /= 2;
  this.sa([[a - c, b - d, 0], [a - c, b + d, 0], [a + c, b + d, 0], [a + c, b - d, 0]], e, !0, g)
};
f.J = function() {
  this.D = this.F = 0;
  0 < this.Z.length && (this.Z = []);
  S.prototype.J.call(this)
};
f.$ = function() {
  var a = J, b = Ya(yb[this.k]);
  if(0 < this.F || 0 < this.D || 0 < this.Z.length) {
    ta(Ma, this.d, this.A), a.uniformMatrix4fv(b.Y, !1, this.A)
  }
  if(0 < this.F) {
    var c = J, d = 7 * this.F;
    c.bindBuffer(c.ARRAY_BUFFER, this.Oa);
    c.bufferData(c.ARRAY_BUFFER, this.u.subarray(0, d), c.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, this.Oa);
    a.vertexAttribPointer(b.b.vertexPositionAttribute, 3, a.FLOAT, !1, 28, 0);
    a.vertexAttribPointer(b.b.vertexColorAttribute, 4, a.FLOAT, !1, 28, 12);
    a.drawArrays(a.POINTS, 0, this.F)
  }
  0 < this.D && (c = J, d = 14 * this.D, c.bindBuffer(c.ARRAY_BUFFER, this.Na), c.bufferData(c.ARRAY_BUFFER, this.i.subarray(0, d), c.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.Na), a.vertexAttribPointer(b.b.vertexPositionAttribute, 3, a.FLOAT, !1, 28, 0), a.vertexAttribPointer(b.b.vertexColorAttribute, 4, a.FLOAT, !1, 28, 12), a.drawArrays(a.LINES, 0, 2 * this.D));
  c = this.Z.length;
  if(0 < c) {
    for(d = 0;d < c;d++) {
      var e = this.Z[d];
      a.bindBuffer(a.ARRAY_BUFFER, e[1]);
      a.vertexAttribPointer(b.b.vertexPositionAttribute, 3, a.FLOAT, !1, 28, 0);
      a.vertexAttribPointer(b.b.vertexColorAttribute, 4, a.FLOAT, !1, 28, 12);
      e[2] ? a.drawArrays(a.LINE_LOOP, 0, e[0].length / 7) : a.drawArrays(a.LINE_STRIP, 0, e[0].length / 7)
    }
  }
};
k("chesterGL.PrimitiveBlock", U);
U.prototype.drawPoint = U.prototype.Db;
U.prototype.drawLine = U.prototype.Cb;
U.prototype.drawPolygon = U.prototype.sa;
U.prototype.drawRectangle = U.prototype.Eb;
var Wb, Xb, Yb, Zb;
function $b() {
  return ba.navigator ? ba.navigator.userAgent : null
}
Zb = Yb = Xb = Wb = !1;
var ac;
if(ac = $b()) {
  var bc = ba.navigator;
  Wb = 0 == ac.indexOf("Opera");
  Xb = !Wb && -1 != ac.indexOf("MSIE");
  Yb = !Wb && -1 != ac.indexOf("WebKit");
  Zb = !Wb && !Yb && "Gecko" == bc.product
}
var cc = Xb, dc = Zb, ec = Yb;
var fc;
if(Wb && ba.opera) {
  var gc = ba.opera.version;
  "function" == typeof gc && gc()
}else {
  dc ? fc = /rv\:([^\);]+)(\)|;)/ : cc ? fc = /MSIE\s+([^\);]+)(\)|;)/ : ec && (fc = /WebKit\/(\S+)/), fc && fc.exec($b())
}
;var hc = null, ic = null;
function jc(a) {
  a = kc[a];
  if(!a) {
    throw"Invalid map - make sure you call loadTMX first";
  }
  S.call(this, null, R.TMXBLOCK);
  for(var b = 0;b < a.layers.length;b++) {
    for(var c = a.layers[b], d = C ? new W(null, c.blocks.length) : new S, e = null, g = 0;g < c.blocks.length;g++) {
      var h = c.blocks[g];
      e || (e = lc(a.tilesets, h.gid), d.ea(e.texture));
      var p;
      C ? p = d.Ka(h.frame) : (p = new S(h.frame), p.ea(e.texture));
      p.P(h.position);
      d.append(p)
    }
    this.append(d)
  }
}
m(jc, S);
jc.prototype.$ = function() {
};
var kc = {};
function lc(a, b) {
  for(var c = a[0], d = 1;d < a.length;d++) {
    var e = a[d];
    b >= e.firstgid && (c = e)
  }
  return c
}
Pa.tmx = function(a, b) {
  K.tmx[a.name].data = b;
  return!0
};
k("chesterGL.TMXBlock", jc);
jc.loadTMX = function(a) {
  M("tmx", {url:a, dataType:"xml"}, null, function(b, c) {
    var d = {}, e = $(c).find("map"), g = e.attr("orientation");
    d.tilesets = [];
    e.find("tileset").each(function(a, b) {
      var c = $(b);
      if("obstruction" != c.attr("name")) {
        var e = {};
        e.tileSize = new ca(parseInt(c.attr("tilewidth"), 10), parseInt(c.attr("tileheight"), 10));
        c.attr("spacing") && (e.spacing = parseInt(c.attr("spacing"), 10));
        c.attr("margin") && (e.margin = parseInt(c.attr("margin"), 10));
        var g = c.find("image").first();
        e.imgSize = new ca(parseInt(g.attr("width"), 10), parseInt(g.attr("height"), 10));
        e.texture = g.attr("source");
        e.firstgid = parseInt(c.attr("firstgid"), 10);
        d.tilesets.push(e)
      }
    });
    d.mapTileSize = new ca(parseInt(e.attr("tilewidth"), 10), parseInt(e.attr("tileheight"), 10));
    d.layers = [];
    e.find("layer").each(function(a, b) {
      if("0" != $(b).attr("visible")) {
        var c = {blocks:[]}, e = new ca(parseInt($(b).attr("width"), 10), parseInt($(b).attr("height"), 10)), q = $(b).find("data").first();
        if(q) {
          if("base64" != q.attr("encoding") || q.attr("compression")) {
            throw"Invalid TMX Data";
          }
          var s = q.text().trim();
          if(!hc) {
            for(hc = {}, ic = {}, q = 0;65 > q;q++) {
              hc[q] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(q), ic[hc[q]] = q
            }
          }
          for(var w = ic, q = [], v = 0;v < s.length;) {
            var z = w[s.charAt(v++)], A = v < s.length ? w[s.charAt(v)] : 0;
            ++v;
            var u = v < s.length ? w[s.charAt(v)] : 0;
            ++v;
            var B = v < s.length ? w[s.charAt(v)] : 0;
            ++v;
            if(null == z || null == A || null == u || null == B) {
              throw Error();
            }
            q.push(z << 2 | A >> 4);
            64 != u && (q.push(A << 4 & 240 | u >> 2), 64 != B && q.push(u << 6 & 192 | B))
          }
          s = 0;
          w = null;
          for(v = 0;v < e.height;v++) {
            for(z = 0;z < e.width;z++) {
              var y = q[s + 3] << 24 | q[s + 2] << 16 | q[s + 1] << 8 | q[s + 0] >>> 0;
              if(0 !== y) {
                w || (w = lc(d.tilesets, y));
                A = {};
                A.gid = y;
                var x = w.margin || 0, E = w.spacing || 0, u = w.tileSize, G = w.imgSize, B = d.mapTileSize, H = parseInt((G.width - 2 * x + E) / (u.width + E), 10), y = y - w.firstgid, I = y % H * (u.width + E) + x, G = G.height - u.height - x - E - parseInt(y / H, 10) * (u.height + E) + x, H = u.width, E = u.height, x = y = new Float32Array(4);
                x[0] = I;
                x[1] = G;
                x[2] = H;
                x[3] = E;
                A.frame = y;
                if("orthogonal" == g) {
                  I = z * B.width + u.width / 2, u = (e.height - v - 1) * B.height + u.height / 2
                }else {
                  if("isometric" == g) {
                    I = B.width / 2 * (e.width + z - v - 1) + u.width / 2, u = B.height / 2 * (2 * e.height - z - v - 2) + u.height / 2
                  }else {
                    throw"Invalid orientation";
                  }
                }
                A.position = [I, u, 0];
                c.blocks.push(A)
              }
              s += 4
            }
          }
        }else {
          throw"No data for layer!";
        }
        d.layers.push(c)
      }
    });
    kc[a] = d
  })
};
function mc(a, b, c) {
  b = b || "20px sans-serif";
  c = c || "White";
  var d = document.createElement("canvas");
  this.canvas = d;
  this.context = d.getContext("2d");
  this.context.textBaseline = "bottom";
  this.font = b;
  this.fillStyle = c;
  if(b = b.match(/(\d+)px/)) {
    this.bb = parseInt(b[1], 10)
  }else {
    throw"Invalid text height - use the form NNpx";
  }
  this.c = Math.random() + ".canvas";
  K.texture || (K.texture = {});
  K.texture[this.c] = d;
  S.call(this, nc(this, a));
  this.da(a, !1);
  this.k = T.TEXTURE
}
m(mc, S);
f = mc.prototype;
f.canvas = null;
f.context = null;
f.Ta = !1;
f.text = "";
f.bb = 0;
f.font = "";
f.fillStyle = "";
f.da = function(a, b) {
  this.text = a;
  oc(this);
  b || (this.ca(nc(this)), this.Ta = !0)
};
function oc(a) {
  var b = a.context, c = a.canvas;
  b.clearRect(0, 0, c.width, c.height);
  b.fillText(a.text, 0, c.height);
  c.I || (c.I = J.createTexture(), K.texture[a.c].data = c);
  db(c);
  a.Ta = !1
}
function nc(a, b) {
  var c = a.context, d = a.canvas;
  c.font = a.font;
  c.fillStyle = a.fillStyle;
  b && (a.text = b);
  var e = c.measureText(a.text).width;
  d.width = e;
  d.height = a.bb;
  c.font = a.font;
  c.fillStyle = a.fillStyle;
  c.textBaseline = "bottom";
  return[0, 0, e, a.bb]
}
f.J = function() {
  this.Ta && oc(this);
  S.prototype.J.call(this)
};
k("chesterGL.LabelBlock", mc);
mc.prototype.setText = mc.prototype.da;

//@ sourceMappingURL=chester.js.map
