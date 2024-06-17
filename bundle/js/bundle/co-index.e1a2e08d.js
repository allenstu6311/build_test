(function () {
  var n = {
      1495: function () {},
      2143: function () {},
      4595: function (n, t, r) {
        "use strict";
        var e = r(6848),
          o = function () {
            var n = this,
              t = n._self._c;
            return t("div", [n._v(" 123 "), t("router-view")], 1);
          },
          u = [],
          i = r(1656),
          c = {},
          f = (0, i.A)(c, o, u, !1, null, null, null),
          l = f.exports,
          s = r(6178),
          a = function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t(
              "div",
              [
                t("h1", [n._v("co-home")]),
                t("router-link", { attrs: { to: "/bundle/co-index/about" } }, [
                  n._v("about"),
                ]),
                t("router-view"),
              ],
              1
            );
          },
          v = [],
          p = r(2143),
          d = r.n(p),
          h = d(),
          _ = (0, i.A)(h, a, v, !1, null, null, null),
          b = _.exports,
          y = function () {
            var n = this;
            n._self._c, n._self._setupProxy;
            return n._m(0);
          },
          x = [
            function () {
              var n = this,
                t = n._self._c;
              n._self._setupProxy;
              return t("div", [t("h1", [n._v("關於我們")])]);
            },
          ],
          w = r(1495),
          O = r.n(w),
          g = O(),
          m = (0, i.A)(g, y, x, !1, null, null, null),
          A = m.exports;
        console.log("router"), e.Ay.use(s.Ay);
        const j = [
            { path: "/bundle/co-index", component: b },
            { path: "/bundle/co-index/about", component: A },
          ],
          k = new s.Ay({ mode: "history", routes: j });
        var P = k;
        (e.Ay.config.productionTip = !1),
          new e.Ay({ render: (n) => n(l), router: P }).$mount("#app");
      },
    },
    t = {};
  function r(e) {
    var o = t[e];
    if (void 0 !== o) return o.exports;
    var u = (t[e] = { exports: {} });
    return n[e].call(u.exports, u, u.exports, r), u.exports;
  }
  (r.m = n),
    (function () {
      var n = [];
      r.O = function (t, e, o, u) {
        if (!e) {
          var i = 1 / 0;
          for (s = 0; s < n.length; s++) {
            (e = n[s][0]), (o = n[s][1]), (u = n[s][2]);
            for (var c = !0, f = 0; f < e.length; f++)
              (!1 & u || i >= u) &&
              Object.keys(r.O).every(function (n) {
                return r.O[n](e[f]);
              })
                ? e.splice(f--, 1)
                : ((c = !1), u < i && (i = u));
            if (c) {
              n.splice(s--, 1);
              var l = o();
              void 0 !== l && (t = l);
            }
          }
          return t;
        }
        u = u || 0;
        for (var s = n.length; s > 0 && n[s - 1][2] > u; s--) n[s] = n[s - 1];
        n[s] = [e, o, u];
      };
    })(),
    (function () {
      r.n = function (n) {
        var t =
          n && n.__esModule
            ? function () {
                return n["default"];
              }
            : function () {
                return n;
              };
        return r.d(t, { a: t }), t;
      };
    })(),
    (function () {
      r.d = function (n, t) {
        for (var e in t)
          r.o(t, e) &&
            !r.o(n, e) &&
            Object.defineProperty(n, e, { enumerable: !0, get: t[e] });
      };
    })(),
    (function () {
      r.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (n) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      r.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      };
    })(),
    (function () {
      var n = { 135: 0 };
      r.O.j = function (t) {
        return 0 === n[t];
      };
      var t = function (t, e) {
          var o,
            u,
            i = e[0],
            c = e[1],
            f = e[2],
            l = 0;
          if (
            i.some(function (t) {
              return 0 !== n[t];
            })
          ) {
            for (o in c) r.o(c, o) && (r.m[o] = c[o]);
            if (f) var s = f(r);
          }
          for (t && t(e); l < i.length; l++)
            (u = i[l]), r.o(n, u) && n[u] && n[u][0](), (n[u] = 0);
          return r.O(s);
        },
        e = (self["webpackChunkvue2"] = self["webpackChunkvue2"] || []);
      e.forEach(t.bind(null, 0)), (e.push = t.bind(null, e.push.bind(e)));
    })();
  var e = r.O(void 0, [504], function () {
    return r(4595);
  });
  e = r.O(e);
})();
//# sourceMappingURL=co-index.e1a2e08d.js.map
