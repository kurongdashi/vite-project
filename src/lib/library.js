!(function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r(require("lodash")))
    : "function" == typeof define && define.amd
    ? define(["lodash"], r)
    : "object" == typeof exports
    ? (exports.library = r(require("lodash")))
    : (e.library = r(e.lodash));
})(self, (e) =>
  (() => {
    "use strict";
    var r = {
        467: (r) => {
          r.exports = e;
        },
      },
      o = {};
    function t(e) {
      var n = o[e];
      if (void 0 !== n) return n.exports;
      var u = (o[e] = { exports: {} });
      return r[e](u, u.exports, t), u.exports;
    }
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
      (t.d = (e, r) => {
        for (var o in r)
          t.o(r, o) &&
            !t.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
      }),
      (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (t.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        t.r(n), t.d(n, { add: () => o, join: () => u, print: () => d });
        var e = t(467),
          r = t.n(e);
        function o(...e) {
          return e.reduce((e, r) => e + r);
        }
        function u(e, o) {
          return r().join([e, o]);
        }
        function d(e) {
          return console.log("输出一段文字：" + e), "输出一段文字：" + e;
        }
      })(),
      n
    );
  })()
);
