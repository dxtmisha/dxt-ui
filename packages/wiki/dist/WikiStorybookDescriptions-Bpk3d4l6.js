import { executeFunction as kr, isObjectNotArray as _r, Geo as Xr } from "@dxtmisha/functional";
import { w as $r } from "./wikiDescriptions-CDAK5PYQ.js";
import Lr from "react";
var b = { exports: {} }, g = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N;
function Fr() {
  if (N) return g;
  N = 1;
  var s = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(u, d, h) {
    var p = null;
    if (h !== void 0 && (p = "" + h), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      h = {};
      for (var m in d)
        m !== "key" && (h[m] = d[m]);
    } else h = d;
    return d = h.ref, {
      $$typeof: s,
      type: u,
      key: p,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return g.Fragment = n, g.jsx = o, g.jsxs = o, g;
}
var f = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E;
function Sr() {
  return E || (E = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === wr ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case v:
          return "Fragment";
        case pr:
          return "Profiler";
        case ur:
          return "StrictMode";
        case yr:
          return "Suspense";
        case br:
          return "SuspenseList";
        case Mr:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case jr:
            return "Portal";
          case gr:
            return (i.displayName || "Context") + ".Provider";
          case mr:
            return (i._context.displayName || "Context") + ".Consumer";
          case fr:
            var t = i.render;
            return i = i.displayName, i || (i = t.displayName || t.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case vr:
            return t = i.displayName || null, t !== null ? t : s(i.type) || "Memo";
          case L:
            t = i._payload, i = i._init;
            try {
              return s(i(t));
            } catch {
            }
        }
      return null;
    }
    function n(i) {
      return "" + i;
    }
    function o(i) {
      try {
        n(i);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var r = t.error, c = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return r.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), n(i);
      }
    }
    function u(i) {
      if (i === v) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === L)
        return "<...>";
      try {
        var t = s(i);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var i = M.A;
      return i === null ? null : i.getOwner();
    }
    function h() {
      return Error("react-stack-top-frame");
    }
    function p(i) {
      if (F.call(i, "key")) {
        var t = Object.getOwnPropertyDescriptor(i, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function m(i, t) {
      function r() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      r.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: r,
        configurable: !0
      });
    }
    function ar() {
      var i = s(this.type);
      return T[i] || (T[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function xr(i, t, r, c, x, a, C, D) {
      return r = a.ref, i = {
        $$typeof: $,
        type: i,
        key: t,
        props: a,
        _owner: x
      }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: ar
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function _(i, t, r, c, x, a, C, D) {
      var l = t.children;
      if (l !== void 0)
        if (c)
          if (Cr(l)) {
            for (c = 0; c < l.length; c++)
              X(l[c]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else X(l);
      if (F.call(t, "key")) {
        l = s(i);
        var j = Object.keys(t).filter(function(Dr) {
          return Dr !== "key";
        });
        c = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", A[l + c] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          l,
          j,
          l
        ), A[l + c] = !0);
      }
      if (l = null, r !== void 0 && (o(r), l = "" + r), p(t) && (o(t.key), l = "" + t.key), "key" in t) {
        r = {};
        for (var k in t)
          k !== "key" && (r[k] = t[k]);
      } else r = t;
      return l && m(
        r,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), xr(
        i,
        l,
        a,
        x,
        d(),
        r,
        C,
        D
      );
    }
    function X(i) {
      typeof i == "object" && i !== null && i.$$typeof === $ && i._store && (i._store.validated = 1);
    }
    var y = Lr, $ = Symbol.for("react.transitional.element"), jr = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), ur = Symbol.for("react.strict_mode"), pr = Symbol.for("react.profiler"), mr = Symbol.for("react.consumer"), gr = Symbol.for("react.context"), fr = Symbol.for("react.forward_ref"), yr = Symbol.for("react.suspense"), br = Symbol.for("react.suspense_list"), vr = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Mr = Symbol.for("react.activity"), wr = Symbol.for("react.client.reference"), M = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, Cr = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(i) {
        return i();
      }
    };
    var S, T = {}, P = y.react_stack_bottom_frame.bind(
      y,
      h
    )(), R = w(u(h)), A = {};
    f.Fragment = v, f.jsx = function(i, t, r, c, x) {
      var a = 1e4 > M.recentlyCreatedOwnerStacks++;
      return _(
        i,
        t,
        r,
        !1,
        c,
        x,
        a ? Error("react-stack-top-frame") : P,
        a ? w(u(i)) : R
      );
    }, f.jsxs = function(i, t, r, c, x) {
      var a = 1e4 > M.recentlyCreatedOwnerStacks++;
      return _(
        i,
        t,
        r,
        !0,
        c,
        x,
        a ? Error("react-stack-top-frame") : P,
        a ? w(u(i)) : R
      );
    };
  })()), f;
}
var I;
function Tr() {
  return I || (I = 1, process.env.NODE_ENV === "production" ? b.exports = Fr() : b.exports = Sr()), b.exports;
}
var e = Tr();
function B(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "click"
      })
    }), `
`, e.jsx(n.p, {
      children: "Component click event triggered by user interaction with the element."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onClick (event: MouseEvent, value: EventClickValue) {
    // click event handling
}

type EventClickValue = {
  /** Click location identifier, set through data-event-type attribute on the element */
  type: string
  /** Component value */
  value: any
  /** Additional event data */
  detail: Record<string, any> | undefined
}
`
      })
    })]
  });
}
function Pr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(B, {
      ...s
    })
  }) : B(s);
}
function U(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "click"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие клика компонента, возникающее при взаимодействии пользователя с элементом."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onClick (event: MouseEvent, value: EventClickValue) {
    // обработка события клика
}

type EventClickValue = {
  /** Идентификатор места нажатия, задается через атрибут data-event-type у элемента */
  type: string
  /** Значение компонента */
  value: any
  /** Дополнительные данные события */
  detail: Record<string, any> | undefined
}
`
      })
    })]
  });
}
function Rr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(U, {
      ...s
    })
  }) : U(s);
}
function O(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "clickLite"
      })
    }), `
`, e.jsx(n.p, {
      children: "Lightweight click event of the component, passing only data without the original DOM event."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onClickLite (value: EventClickValue) {
    // lightweight click event handling
}

type EventClickValue = {
  /** Click location identifier, set through data-event-type attribute on the element */
  type: string
  /** Component value */
  value: any
  /** Additional event data */
  detail: Record<string, any> | undefined
}
`
      })
    })]
  });
}
function Ar(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(O, {
      ...s
    })
  }) : O(s);
}
function W(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "clickLite"
      })
    }), `
`, e.jsx(n.p, {
      children: "Облегченное событие клика компонента, передающее только данные без оригинального DOM события."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onClickLite (value: EventClickValue) {
    // обработка облегченного события клика
}

type EventClickValue = {
  /** Идентификатор места нажатия, задается через атрибут data-event-type у элемента */
  type: string
  /** Значение компонента */
  value: any
  /** Дополнительные данные события */
  detail: Record<string, any> | undefined
}
`
      })
    })]
  });
}
function Nr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(W, {
      ...s
    })
  }) : W(s);
}
function V(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "bars"
      })
    }), `
`, e.jsx(n.p, {
      children: "Fires when a Bars item is clicked. Passes the native mouse event and a structured payload about the click."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onBars (
  event: MouseEvent,
  value: { type: string; value: any; detail?: Record<string, any> }
) {
  // handle toolbar button click
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Where:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "type"
        }), ' — click/button type (e.g., "back" for the Back button)']
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "value"
        }), " — arbitrary button value"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "detail"
        }), " — extra data if provided"]
      }), `
`]
    })]
  });
}
function Er(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(V, {
      ...s
    })
  }) : V(s);
}
function q(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "bars"
      })
    }), `
`, e.jsx(n.p, {
      children: "Срабатывает при клике по элементу панелей (Bars). Передаёт нативное событие мыши и полезную нагрузку о клике."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onBars (event: MouseEvent, value: { type: string; value: any; detail?: Record<string, any> }) {
  // обработка клика по кнопке панели
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Где:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "type"
        }), " — тип клика/кнопки (например, ", e.jsx(n.code, {
          children: '"back"'
        }), " для кнопки назад)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "value"
        }), " — произвольное значение кнопки"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "detail"
        }), " — дополнительные данные (если есть)"]
      }), `
`]
    })]
  });
}
function Ir(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(q, {
      ...s
    })
  }) : q(s);
}
function H(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "barsLite"
      })
    }), `
`, e.jsx(n.p, {
      children: "Fires when a Bars item is clicked in lite mode. Passes only the structured click payload."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onBarsLite (value: { type: string; value: any; detail?: Record<string, any> }) {
  // handle toolbar item click (lite)
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Where:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "type"
        }), ' — click/button type (e.g., "back")']
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "value"
        }), " — arbitrary button value"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "detail"
        }), " — extra data if provided"]
      }), `
`]
    })]
  });
}
function Br(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(H, {
      ...s
    })
  }) : H(s);
}
function z(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "barsLite"
      })
    }), `
`, e.jsx(n.p, {
      children: "Срабатывает при клике по элементу панелей (Bars) в облегчённом режиме. Передаёт только полезную нагрузку о клике."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onBarsLite (value: { type: string; value: any; detail?: Record<string, any> }) {
  // обработка клика по кнопке панели (lite)
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Где:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "type"
        }), " — тип клика/кнопки (например, ", e.jsx(n.code, {
          children: '"back"'
        }), ")"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "value"
        }), " — произвольное значение кнопки"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "detail"
        }), " — дополнительные данные (если есть)"]
      }), `
`]
    })]
  });
}
function Ur(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(z, {
      ...s
    })
  }) : z(s);
}
function Y(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "barsBack"
      })
    }), `
`, e.jsx(n.p, {
      children: 'Fires when the "Back" button in Bars is clicked. Passes only the structured click payload.'
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onBarsBack (value: { type: string; value: any; detail?: Record<string, any> }) {
  // handle Back button click
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Where:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "type"
        }), ' — click/button type (will be "back")']
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "value"
        }), " — arbitrary button value"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "detail"
        }), " — extra data if provided"]
      }), `
`]
    })]
  });
}
function Or(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Y, {
      ...s
    })
  }) : Y(s);
}
function G(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "barsBack"
      })
    }), `
`, e.jsx(n.p, {
      children: "Срабатывает при клике по кнопке «Назад» в панелях (Bars). Передаёт только полезную нагрузку о клике."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onBarsBack (value: { type: string; value: any; detail?: Record<string, any> }) {
  // обработка клика по кнопке «Назад»
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Где:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "type"
        }), " — тип клика/кнопки (значение будет ", e.jsx(n.code, {
          children: '"back"'
        }), ")"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "value"
        }), " — произвольное значение кнопки"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "detail"
        }), " — дополнительные данные (если есть)"]
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Используйте событие для реализации возврата/закрытия текущего контекста. Кнопку можно скрыть свойством ", e.jsx(n.code, {
        children: "barsBackHide"
      }), "."]
    })]
  });
}
function Wr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(G, {
      ...s
    })
  }) : G(s);
}
function J(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll position reaches or leaves the bottom boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarBottom (isBottom: boolean) {
    // handle reaching/leaving bottom boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isBottom"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true if scroll is at the bottom position, false — if it left the bottom position"]
      }), `
`]
    })]
  });
}
function Vr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(J, {
      ...s
    })
  }) : J(s);
}
function K(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при изменении состояния достижения нижней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarBottom (isBottom: boolean) {
    // обработка события достижения/покидания нижней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isBottom"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в нижней позиции, false — если покинул нижнюю позицию"]
      }), `
`]
    })]
  });
}
function qr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(K, {
      ...s
    })
  }) : K(s);
}
function Z(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarEdge"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll boundary state changes (top or bottom)."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarEdge (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) {
    // handle scroll boundary change event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isTop"
        }), " — ", e.jsx(n.code, {
          children: "boolean"
        }), " — true if scroll is at the top position"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isBottom"
        }), " — ", e.jsx(n.code, {
          children: "boolean"
        }), " — true if scroll is at the bottom position"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "edge"
        }), " — ", e.jsx(n.code, {
          children: "ScrollbarEdgeType"
        }), " — current active scroll boundary"]
      }), `
`]
    })]
  });
}
function Hr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Z, {
      ...s
    })
  }) : Z(s);
}
function Q(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarEdge"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при изменении состояния границ скролла (верхней или нижней)."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarEdge (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) {
    // обработка изменения состояния границ скролла
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isTop"
        }), " — ", e.jsx(n.code, {
          children: "boolean"
        }), " — true, если скролл в верхней позиции"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isBottom"
        }), " — ", e.jsx(n.code, {
          children: "boolean"
        }), " — true, если скролл в нижней позиции"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "edge"
        }), " — ", e.jsx(n.code, {
          children: "ScrollbarEdgeType"
        }), " — текущая активная граница скролла"]
      }), `
`]
    })]
  });
}
function zr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Q, {
      ...s
    })
  }) : Q(s);
}
function nn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarLeaveBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll leaves the bottom boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarLeaveBottom () {
    // handle leaving bottom boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Fires at the moment scrolling starts from the very bottom upwards."
    })]
  });
}
function Yr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(nn, {
      ...s
    })
  }) : nn(s);
}
function en(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarLeaveBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при покидании нижней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarLeaveBottom () {
    // обработка события покидания нижней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Срабатывает в момент начала прокрутки от самого низа контента вверх."
    })]
  });
}
function Gr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(en, {
      ...s
    })
  }) : en(s);
}
function sn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarLeaveTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll leaves the top boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarLeaveTop () {
    // handle leaving top boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "This event fires at the moment scrolling begins from the very top."
    })]
  });
}
function Jr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(sn, {
      ...s
    })
  }) : sn(s);
}
function tn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarLeaveTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при покидании верхней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarLeaveTop () {
    // обработка события покидания верхней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Срабатывает в момент начала прокрутки от самого верха контента."
    })]
  });
}
function Kr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(tn, {
      ...s
    })
  }) : tn(s);
}
function rn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarReachBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll reaches the bottom boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarReachBottom () {
    // handle reaching bottom boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "This event fires at the moment the very bottom of the content is reached."
    })]
  });
}
function Zr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(rn, {
      ...s
    })
  }) : rn(s);
}
function cn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarReachBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Срабатывает, когда скролл достигает нижней границы."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarReachBottom () {
    // обработка достижения нижней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Одноразовый момент в точке самого низа контента."
    })]
  });
}
function Qr(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(cn, {
      ...s
    })
  }) : cn(s);
}
function ln(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarReachTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll reaches the top boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarReachTop () {
    // handle reaching top boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "This event fires at the moment the very top of the content is reached."
    })]
  });
}
function nc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ln, {
      ...s
    })
  }) : ln(s);
}
function on(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarReachTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Срабатывает, когда скролл достигает верхней границы."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarReachTop () {
    // обработка достижения верхней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Это одноразовый момент в точке самого верха контента."
    })]
  });
}
function ec(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(on, {
      ...s
    })
  }) : on(s);
}
function dn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll position reaches or leaves the top boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarTop (isTop: boolean) {
    // handle reaching/leaving top boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isTop"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true if scroll is at the top position, false — if it left the top position"]
      }), `
`]
    })]
  });
}
function sc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(dn, {
      ...s
    })
  }) : dn(s);
}
function hn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "scrollbarTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при изменении состояния достижения верхней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onScrollbarTop (isTop: boolean) {
    // обработка события достижения/покидания верхней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isTop"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в верхней позиции, false — если покинул верхнюю позицию"]
      }), `
`]
    })]
  });
}
function ic(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(hn, {
      ...s
    })
  }) : hn(s);
}
function an(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "window"
      })
    }), `
`, e.jsx(n.p, {
      children: "Fires on Window state changes and passes a summary of parameters."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onWindow (options: {
  id: string
  element: HTMLDivElement
  control: HTMLElement
  open: boolean
}) {
  // handle window state change
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Where:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "id"
        }), " — unique window identifier"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "element"
        }), " — window DOM element"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "control"
        }), " — control/trigger DOM element"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "open"
        }), " — current open state (true/false)"]
      }), `
`]
    })]
  });
}
function tc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(an, {
      ...s
    })
  }) : an(s);
}
function xn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "window"
      })
    }), `
`, e.jsx(n.p, {
      children: "Срабатывает при изменении состояния окна (Window) и передаёт сводку параметров."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onWindow (options: {
  id: string
  element: HTMLDivElement
  control: HTMLElement
  open: boolean
}) {
  // обработка изменения состояния окна
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Где:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "id"
        }), " — уникальный идентификатор окна"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "element"
        }), " — DOM‑элемент окна"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "control"
        }), " — DOM‑элемент управляющей кнопки/контрола"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "open"
        }), " — текущее состояние открытия окна (true/false)"]
      }), `
`]
    })]
  });
}
function rc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(xn, {
      ...s
    })
  }) : xn(s);
}
const cc = {
  name: "Event",
  descriptions: {
    click: {
      en: Pr,
      ru: Rr
    },
    clickLite: {
      en: Ar,
      ru: Nr
    },
    bars: {
      en: Er,
      ru: Ir
    },
    barsLite: {
      en: Br,
      ru: Ur
    },
    barsBack: {
      en: Or,
      ru: Wr
    },
    scrollbarBottom: {
      en: Vr,
      ru: qr
    },
    scrollbarEdge: {
      en: Hr,
      ru: zr
    },
    scrollbarLeaveBottom: {
      en: Yr,
      ru: Gr
    },
    scrollbarLeaveTop: {
      en: Jr,
      ru: Kr
    },
    scrollbarReachBottom: {
      en: Zr,
      ru: Qr
    },
    scrollbarReachTop: {
      en: nc,
      ru: ec
    },
    scrollbarTop: {
      en: sc,
      ru: ic
    },
    window: {
      en: tc,
      ru: rc
    }
  }
};
function jn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "detail"
      })
    }), `
`, e.jsx(n.p, {
      children: "Additional component data."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type detail = Record<string, any> | undefined
`
      })
    })]
  });
}
function lc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(jn, {
      ...s
    })
  }) : jn(s);
}
function un(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "detail"
      })
    }), `
`, e.jsx(n.p, {
      children: "Дополнительные данные компонента."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type detail = Record<string, any> | undefined
`
      })
    })]
  });
}
function oc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(un, {
      ...s
    })
  }) : un(s);
}
function pn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "value"
      })
    }), `
`, e.jsx(n.p, {
      children: "Current component value."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type value = any
`
      })
    })]
  });
}
function dc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(pn, {
      ...s
    })
  }) : pn(s);
}
function mn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "value"
      })
    }), `
`, e.jsx(n.p, {
      children: "Текущее значение компонента."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type value = any
`
      })
    })]
  });
}
function hc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(mn, {
      ...s
    })
  }) : mn(s);
}
function gn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "isSelected"
      })
    }), `
`, e.jsx(n.p, {
      children: "Flag indicating whether there are selected items."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type isSelected = boolean
`
      })
    })]
  });
}
function ac(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(gn, {
      ...s
    })
  }) : gn(s);
}
function fn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "isSelected"
      })
    }), `
`, e.jsx(n.p, {
      children: "Флаг, показывающий наличие выбранных элементов."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type isSelected = boolean
`
      })
    })]
  });
}
function xc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(fn, {
      ...s
    })
  }) : fn(s);
}
function yn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "selectedList"
      })
    }), `
`, e.jsx(n.p, {
      children: "List of selected items."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type selectedList = any[]
`
      })
    })]
  });
}
function jc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(yn, {
      ...s
    })
  }) : yn(s);
}
function bn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "selectedList"
      })
    }), `
`, e.jsx(n.p, {
      children: "Список выбранных элементов."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type selectedList = any[]
`
      })
    })]
  });
}
function uc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(bn, {
      ...s
    })
  }) : bn(s);
}
function vn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "selectedNames"
      })
    }), `
`, e.jsx(n.p, {
      children: "List of labels (names) of selected items."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type selectedNames = string[]
`
      })
    })]
  });
}
function pc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(vn, {
      ...s
    })
  }) : vn(s);
}
function Mn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "selectedNames"
      })
    }), `
`, e.jsx(n.p, {
      children: "Список меток (имён) выбранных элементов."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type selectedNames = string[]
`
      })
    })]
  });
}
function mc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Mn, {
      ...s
    })
  }) : Mn(s);
}
function wn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "selectedValues"
      })
    }), `
`, e.jsx(n.p, {
      children: "Array of values of selected items."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type selectedValues = any[]
`
      })
    })]
  });
}
function gc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(wn, {
      ...s
    })
  }) : wn(s);
}
function Cn(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "selectedValues"
      })
    }), `
`, e.jsx(n.p, {
      children: "Массив значений выбранных элементов."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type selectedValues = any[]
`
      })
    })]
  });
}
function fc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Cn, {
      ...s
    })
  }) : Cn(s);
}
const yc = {
  name: "Expose",
  descriptions: {
    detail: {
      en: lc,
      ru: oc
    },
    value: {
      en: dc,
      ru: hc
    },
    isSelected: {
      en: ac,
      ru: xc
    },
    selectedList: {
      en: jc,
      ru: uc
    },
    selectedNames: {
      en: pc,
      ru: mc
    },
    selectedValues: {
      en: gc,
      ru: fc
    }
  }
};
function Dn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "caption"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Slot for passing caption content to the component. It's an alternative to the ", e.jsx(n.code, {
        children: "caption"
      }), " prop and allows passing elements instead of plain text."]
    }), `
`, e.jsx(n.p, {
      children: "This slot allows you to:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use an alternative to the ", e.jsx(n.code, {
          children: "caption"
        }), " property"]
      }), `
`, e.jsx(n.li, {
        children: "Pass elements instead of plain text"
      }), `
`, e.jsx(n.li, {
        children: "Use HTML or components in the caption"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "caption"
      }), " slot works as a replacement for the ", e.jsx(n.code, {
        children: "caption"
      }), " prop and allows passing any elements for more flexible caption content setup."]
    })]
  });
}
function bc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Dn, {
      ...s
    })
  }) : Dn(s);
}
function kn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "caption"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Слот для передачи содержимого подписи компонента. Является альтернативой props ", e.jsx(n.code, {
        children: "caption"
      }), " и позволяет передавать элементы вместо простого текста."]
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Использовать альтернативу свойству ", e.jsx(n.code, {
          children: "caption"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Передавать элементы вместо простого текста"
      }), `
`, e.jsx(n.li, {
        children: "Использовать HTML или компоненты в подписи"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Слот ", e.jsx(n.code, {
        children: "caption"
      }), " работает как замена props ", e.jsx(n.code, {
        children: "caption"
      }), " и позволяет передавать любые элементы для более гибкого задания подписи."]
    })]
  });
}
function vc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(kn, {
      ...s
    })
  }) : kn(s);
}
function _n(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "control"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for rendering the component’s control (trigger) element."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place a button, icon, or any interactive trigger"
      }), `
`, e.jsx(n.li, {
        children: "Receive control data via a scoped slot (if provided by the component)"
      }), `
`, e.jsx(n.li, {
        children: "Customize open/close logic and extra actions"
      }), `
`]
    })]
  });
}
function Mc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(_n, {
      ...s
    })
  }) : _n(s);
}
function Xn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "control"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для рендеринга элемента управления (триггера) компонента."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Разместить кнопку, иконку или любой триггер для взаимодействия"
      }), `
`, e.jsx(n.li, {
        children: "Получать данные контрола через scoped‑slot (если компонент их предоставляет)"
      }), `
`, e.jsx(n.li, {
        children: "Настроить логику открытия/закрытия и дополнительные действия"
      }), `
`]
    })]
  });
}
function wc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Xn, {
      ...s
    })
  }) : Xn(s);
}
function $n(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "default"
      })
    }), `
`, e.jsx(n.p, {
      children: "Main slot for placing content inside the component."
    }), `
`, e.jsx(n.p, {
      children: "This slot allows you to:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place any custom content inside the component"
      }), `
`, e.jsx(n.li, {
        children: "Pass text, HTML elements, or other Vue components"
      }), `
`, e.jsx(n.li, {
        children: "Customize the internal content of the component"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "default"
      }), " slot is the primary way to add content to the component and supports all standard Vue slot capabilities."]
    })]
  });
}
function Cc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx($n, {
      ...s
    })
  }) : $n(s);
}
function Ln(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "default"
      })
    }), `
`, e.jsx(n.p, {
      children: "Основной слот для размещения контента внутри компонента."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Размещать любой пользовательский контент внутри компонента"
      }), `
`, e.jsx(n.li, {
        children: "Передавать текст, HTML-элементы или другие Vue-компоненты"
      }), `
`, e.jsx(n.li, {
        children: "Настраивать внутреннее содержимое компонента"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Слот ", e.jsx(n.code, {
        children: "default"
      }), " является основным способом добавления контента в компонент и поддерживает все стандартные возможности Vue слотов."]
    })]
  });
}
function Dc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ln, {
      ...s
    })
  }) : Ln(s);
}
function Fn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "description"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Slot for passing description content to the component. It's an alternative to the ", e.jsx(n.code, {
        children: "description"
      }), " prop and allows passing elements instead of plain text."]
    }), `
`, e.jsx(n.p, {
      children: "This slot allows you to:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use an alternative to the ", e.jsx(n.code, {
          children: "description"
        }), " property"]
      }), `
`, e.jsx(n.li, {
        children: "Pass elements instead of plain text"
      }), `
`, e.jsx(n.li, {
        children: "Use HTML or components in the description"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "description"
      }), " slot works as a replacement for the ", e.jsx(n.code, {
        children: "description"
      }), " prop and allows passing any elements for more flexible description content setup."]
    })]
  });
}
function kc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Fn, {
      ...s
    })
  }) : Fn(s);
}
function Sn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "description"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Слот для передачи содержимого описания компонента. Является альтернативой props ", e.jsx(n.code, {
        children: "description"
      }), " и позволяет передавать элементы вместо простого текста."]
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Использовать альтернативу свойству ", e.jsx(n.code, {
          children: "description"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Передавать элементы вместо простого текста"
      }), `
`, e.jsx(n.li, {
        children: "Использовать HTML или компоненты в описании"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Слот ", e.jsx(n.code, {
        children: "description"
      }), " работает как замена props ", e.jsx(n.code, {
        children: "description"
      }), " и позволяет передавать любые элементы для более гибкого задания описания."]
    })]
  });
}
function _c(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Sn, {
      ...s
    })
  }) : Sn(s);
}
function Tn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "footer"
      })
    }), `
`, e.jsx(n.p, {
      children: "Footer slot for rendering the component’s bottom area."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place action buttons, hints, or status"
      }), `
`, e.jsx(n.li, {
        children: "Receive scoped data from the component (if available)"
      }), `
`, e.jsx(n.li, {
        children: "Customize the bottom area layout and styles"
      }), `
`]
    })]
  });
}
function Xc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Tn, {
      ...s
    })
  }) : Tn(s);
}
function Pn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "footer"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот подвала для отображения нижней области компонента."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Разместить кнопки действий, подсказки или статус"
      }), `
`, e.jsx(n.li, {
        children: "Получать данные из компонента через scoped‑slot (если доступны)"
      }), `
`, e.jsx(n.li, {
        children: "Настроить компоновку и стили нижней области"
      }), `
`]
    })]
  });
}
function $c(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Pn, {
      ...s
    })
  }) : Pn(s);
}
function Rn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "label"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Slot for passing label content to the component. It's an alternative to the ", e.jsx(n.code, {
        children: "label"
      }), " prop and allows passing elements instead of plain text."]
    }), `
`, e.jsx(n.p, {
      children: "This slot allows you to:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use an alternative to the ", e.jsx(n.code, {
          children: "label"
        }), " property"]
      }), `
`, e.jsx(n.li, {
        children: "Pass elements instead of plain text"
      }), `
`, e.jsx(n.li, {
        children: "Use HTML or components in the label"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "label"
      }), " slot works as a replacement for the ", e.jsx(n.code, {
        children: "label"
      }), " prop and allows passing any elements for more flexible label content setup."]
    })]
  });
}
function Lc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Rn, {
      ...s
    })
  }) : Rn(s);
}
function An(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "label"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Слот для передачи содержимого метки (label) компонента. Является альтернативой props ", e.jsx(n.code, {
        children: "label"
      }), " и позволяет передавать элементы вместо простого текста."]
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Использовать альтернативу свойству ", e.jsx(n.code, {
          children: "label"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Передавать элементы вместо простого текста"
      }), `
`, e.jsx(n.li, {
        children: "Использовать HTML или компоненты в метке"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Слот ", e.jsx(n.code, {
        children: "label"
      }), " работает как замена props ", e.jsx(n.code, {
        children: "label"
      }), " и позволяет передавать любые элементы для более гибкой настройки содержимого метки."]
    })]
  });
}
function Fc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(An, {
      ...s
    })
  }) : An(s);
}
function Nn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "prefix"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing content at the beginning of the component, before the main content."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Displayed on the left side of the component (or right in RTL mode)"
      }), `
`, e.jsx(n.li, {
        children: "Suitable for icons, numbers, indicators, or short labels"
      }), `
`, e.jsx(n.li, {
        children: "Does not affect the main structure of the component"
      }), `
`, e.jsx(n.li, {
        children: "Provides visual identification or additional information"
      }), `
`]
    })]
  });
}
function Sc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Nn, {
      ...s
    })
  }) : Nn(s);
}
function En(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "prefix"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения контента в начале компонента, перед основным содержимым."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Отображается в левой части компонента (или справа в RTL режиме)"
      }), `
`, e.jsx(n.li, {
        children: "Подходит для иконок, номеров, индикаторов или коротких меток"
      }), `
`, e.jsx(n.li, {
        children: "Не влияет на основную структуру компонента"
      }), `
`, e.jsx(n.li, {
        children: "Обеспечивает визуальную идентификацию или дополнительную информацию"
      }), `
`]
    })]
  });
}
function Tc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(En, {
      ...s
    })
  }) : En(s);
}
function In(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "suffix"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing content at the end of the component, after the main content."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Displayed on the right side of the component (or left in RTL mode)"
      }), `
`, e.jsx(n.li, {
        children: "Suitable for action icons, status indicators, or additional information"
      }), `
`, e.jsx(n.li, {
        children: "Does not affect the main structure of the component"
      }), `
`, e.jsx(n.li, {
        children: "Provides concluding information or functionality"
      }), `
`]
    })]
  });
}
function Pc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(In, {
      ...s
    })
  }) : In(s);
}
function Bn(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "suffix"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения контента в конце компонента, после основного содержимого."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Отображается в правой части компонента (или слева в RTL режиме)"
      }), `
`, e.jsx(n.li, {
        children: "Подходит для иконок действий, статусных индикаторов или дополнительной информации"
      }), `
`, e.jsx(n.li, {
        children: "Не влияет на основную структуру компонента"
      }), `
`, e.jsx(n.li, {
        children: "Обеспечивает завершающую информацию или функциональность"
      }), `
`]
    })]
  });
}
function Rc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Bn, {
      ...s
    })
  }) : Bn(s);
}
function Un(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "title"
      })
    }), `
`, e.jsx(n.p, {
      children: "Header slot for rendering the component’s title area."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Render a title, subtitle, or header actions"
      }), `
`, e.jsx(n.li, {
        children: "Receive scoped data from the component (if available)"
      }), `
`, e.jsx(n.li, {
        children: "Customize the header layout and style"
      }), `
`]
    })]
  });
}
function Ac(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Un, {
      ...s
    })
  }) : Un(s);
}
function On(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "title"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот заголовка для отображения шапки компонента."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Вывести заголовок, подзаголовок или дополнительные элементы шапки"
      }), `
`, e.jsx(n.li, {
        children: "Получать данные из компонента через scoped‑slot (если доступны)"
      }), `
`, e.jsx(n.li, {
        children: "Настроить оформление и состав шапки под задачу"
      }), `
`]
    })]
  });
}
function Nc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(On, {
      ...s
    })
  }) : On(s);
}
const Ec = {
  name: "Slot",
  descriptions: {
    caption: {
      en: bc,
      ru: vc
    },
    control: {
      en: Mc,
      ru: wc
    },
    default: {
      en: Cc,
      ru: Dc
    },
    description: {
      en: kc,
      ru: _c
    },
    footer: {
      en: Xc,
      ru: $c
    },
    label: {
      en: Lc,
      ru: Fc
    },
    prefix: {
      en: Sc,
      ru: Tc
    },
    suffix: {
      en: Pc,
      ru: Rc
    },
    title: {
      en: Ac,
      ru: Nc
    }
  }
};
function Wn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Adaptive Layout and Container Constraints"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "adaptive"
      }), " and ", e.jsx(n.code, {
        children: "container"
      }), " properties control component behavior at different screen sizes and container constraints. These properties allow creating flexible adaptive interfaces that display correctly on all devices."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "adaptive"
        }), " — Controls adaptive display behavior for different screen sizes and media queries. Allows the component to automatically adjust to different display conditions."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "container"
        }), " — Controls container-based layout behavior with adaptive width constraints and containment context. Enables a special container mode with width limitations."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Description"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "adaptive"
        }), " property provides automatic adaptation to various screen sizes with media query support for precise display control."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "container"
        }), " creates a container layout with automatic width constraints, adaptive behavior, and content centering."]
      }), `
`, e.jsxs(n.li, {
        children: ["Properties can be used together to create complex adaptive layouts, where ", e.jsx(n.code, {
          children: "container"
        }), " provides the structural foundation and ", e.jsx(n.code, {
          children: "adaptive"
        }), " adds flexible behavior."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use ", e.jsx(n.code, {
          children: "adaptive"
        }), " for components that should change their behavior depending on screen size."]
      }), `
`, e.jsxs(n.li, {
        children: ["Apply ", e.jsx(n.code, {
          children: "container"
        }), " for creating main blocks with limited width and centering."]
      }), `
`, e.jsx(n.li, {
        children: "Combine both properties to achieve maximum flexibility in adaptive layout."
      }), `
`]
    })]
  });
}
function Ic(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Wn, {
      ...s
    })
  }) : Wn(s);
}
function Vn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Адаптивная раскладка и контейнерные ограничения"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "adaptive"
      }), " и ", e.jsx(n.code, {
        children: "container"
      }), " управляют поведением компонентов при различных размерах экрана и контейнерных ограничениях. Эти свойства позволяют создавать гибкие адаптивные интерфейсы, которые корректно отображаются на всех устройствах."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "adaptive"
        }), " — Управляет адаптивным поведением отображения для различных размеров экрана и медиа-запросов. Позволяет компоненту автоматически подстраиваться под разные условия отображения."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "container"
        }), " — Управляет поведением контейнерной раскладки с адаптивными ограничениями ширины и контекстом сдерживания. Включает специальный режим контейнера с ограничениями по ширине."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Описание"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "adaptive"
        }), " обеспечивает автоматическую адаптацию под различные размеры экрана с поддержкой медиа-запросов для точного контроля отображения."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "container"
        }), " создает контейнерную раскладку с автоматическими ограничениями ширины, адаптивным поведением и центрированием содержимого."]
      }), `
`, e.jsxs(n.li, {
        children: ["Свойства могут использоваться совместно для создания сложных адаптивных раскладок, где ", e.jsx(n.code, {
          children: "container"
        }), " обеспечивает структурную основу, а ", e.jsx(n.code, {
          children: "adaptive"
        }), " добавляет гибкое поведение."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Используйте ", e.jsx(n.code, {
          children: "adaptive"
        }), " для компонентов, которые должны изменять свое поведение в зависимости от размера экрана."]
      }), `
`, e.jsxs(n.li, {
        children: ["Применяйте ", e.jsx(n.code, {
          children: "container"
        }), " для создания основных блоков с ограниченной шириной и центрированием."]
      }), `
`, e.jsx(n.li, {
        children: "Комбинируйте оба свойства для достижения максимальной гибкости в адаптивной верстке."
      }), `
`]
    })]
  });
}
function Bc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Vn, {
      ...s
    })
  }) : Vn(s);
}
function qn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Managing Component Palette"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "asPalette"
      }), " property applies the parent element's palette color to the component while preserving its base saturation."]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Use this property to automatically adapt components to the application's theme."
      }), `
`, e.jsx(n.li, {
        children: "Ensure the parent element has a valid palette class."
      }), `
`]
    })]
  });
}
function Uc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(qn, {
      ...s
    })
  }) : qn(s);
}
function Hn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление палитрой компонента"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "asPalette"
      }), " отвечает за изменение цвета компонента в соответствии с классом палитры его родителя, сохраняя базовую насыщенность цвета."]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Применяйте для автоматической адаптации компонентов к теме приложения."
      }), `
`, e.jsx(n.li, {
        children: "Убедитесь, что у родительского элемента задан корректный класс палитры."
      }), `
`]
    })]
  });
}
function Oc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Hn, {
      ...s
    })
  }) : Hn(s);
}
function zn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Managing Component Direction"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "dir"
      }), ` property controls the mirroring of the component based on the site's text direction (LTR/RTL).
It ensures the correct interface display for right-to-left languages.`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Use alongside your app's localization settings."
      }), `
`, e.jsx(n.li, {
        children: "Particularly useful for arrow icons that also need to flip when a direction changes."
      }), `
`, e.jsx(n.li, {
        children: "Verify third-party SVG icons as they might have preset directions."
      }), `
`]
    })]
  });
}
function Wc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(zn, {
      ...s
    })
  }) : zn(s);
}
function Yn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление направлением компонента"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "dir"
      }), ` отвечает за зеркальное отображение компонента в зависимости от направления сайта (LTR/RTL).
Это обеспечивает корректное отображение интерфейсов для языков с правосторонним письмом.`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Используйте вместе с настройками локализации приложения."
      }), `
`, e.jsx(n.li, {
        children: "Особенно полезно для стрелочных иконок, которые также нужно отразить при смене направления."
      }), `
`, e.jsx(n.li, {
        children: "Проверяйте отображение сторонних SVG-иконок, так как они могут иметь собственные направления."
      }), `
`]
    })]
  });
}
function Vc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Yn, {
      ...s
    })
  }) : Yn(s);
}
function Gn(s) {
  const n = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Skeleton Mode"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "isSkeleton"
      }), " property works in conjunction with the ", e.jsx(n.code, {
        children: "Skeleton"
      }), " component. When an element is a child of the ", e.jsx(n.code, {
        children: "Skeleton"
      }), " component and has the ", e.jsx(n.code, {
        children: "isSkeleton"
      }), " property, its display depends on the parent ", e.jsx(n.code, {
        children: "Skeleton"
      }), "'s state."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["When ", e.jsx(n.code, {
          children: "active=false"
        }), " on the ", e.jsx(n.code, {
          children: "Skeleton"
        }), " component, all child elements display normally, regardless of the ", e.jsx(n.code, {
          children: "isSkeleton"
        }), " value."]
      }), `
`, e.jsxs(n.li, {
        children: ["When ", e.jsx(n.code, {
          children: "active=true"
        }), " on the ", e.jsx(n.code, {
          children: "Skeleton"
        }), " component, all child elements enter skeleton mode, but behavior depends on ", e.jsx(n.code, {
          children: "isSkeleton"
        }), ":", `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: ["If the element has ", e.jsx(n.code, {
              children: "isSkeleton=true"
            }), " — the element displays as a skeleton"]
          }), `
`, e.jsxs(n.li, {
            children: ["If the element has ", e.jsx(n.code, {
              children: "isSkeleton=false"
            }), " — the element becomes invisible"]
          }), `
`]
        }), `
`]
      }), `
`]
    })]
  });
}
function qc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Gn, {
      ...s
    })
  }) : Gn(s);
}
function Jn(s) {
  const n = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Режим скелетона"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "isSkeleton"
      }), " работает в паре с компонентом ", e.jsx(n.code, {
        children: "Skeleton"
      }), ". Когда элемент является дочерним элементом компонента ", e.jsx(n.code, {
        children: "Skeleton"
      }), " и имеет свойство ", e.jsx(n.code, {
        children: "isSkeleton"
      }), ", его отображение зависит от состояния родительского ", e.jsx(n.code, {
        children: "Skeleton"
      }), "."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["При ", e.jsx(n.code, {
          children: "active=false"
        }), " у компонента ", e.jsx(n.code, {
          children: "Skeleton"
        }), " все дочерние элементы отображаются, как обычно, независимо от значения ", e.jsx(n.code, {
          children: "isSkeleton"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: ["При ", e.jsx(n.code, {
          children: "active=true"
        }), " у компонента ", e.jsx(n.code, {
          children: "Skeleton"
        }), " все дочерние элементы переходят в режим скелетона, но поведение зависит от ", e.jsx(n.code, {
          children: "isSkeleton"
        }), ":", `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: ["Если у элемента ", e.jsx(n.code, {
              children: "isSkeleton=true"
            }), " — элемент отображается как скелетон"]
          }), `
`, e.jsxs(n.li, {
            children: ["Если у элемента ", e.jsx(n.code, {
              children: "isSkeleton=false"
            }), " — элемент становится невидимым"]
          }), `
`]
        }), `
`]
      }), `
`]
    })]
  });
}
function Hc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Jn, {
      ...s
    })
  }) : Jn(s);
}
const zc = {
  name: "Style",
  descriptions: {
    adaptive: { en: Ic, ru: Bc },
    asPalette: { en: Uc, ru: Oc },
    dir: { en: Wc, ru: Vc },
    isSkeleton: { en: qc, ru: Hc }
  }
};
function Kn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Text Highlighting Properties"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "highlight"
      }), " and ", e.jsx(n.code, {
        children: "highlightLengthStart"
      }), " properties are designed to control text highlighting functionality in components."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "highlight"
        }), " — Text to highlight within the component content"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "highlightLengthStart"
        }), " — Minimum length of highlight value to start highlighting"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Property Relationships"
    }), `
`, e.jsxs(n.p, {
      children: ["The properties work together to provide intelligent text highlighting. ", e.jsx(n.code, {
        children: "highlight"
      }), " defines what to highlight, while ", e.jsx(n.code, {
        children: "highlightLengthStart"
      }), " controls when to start highlighting."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "highlight"
        }), " contains the text string that needs to be found and highlighted in the component"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "highlightLengthStart"
        }), " sets the minimum search string length to activate the highlighting function"]
      }), `
`, e.jsxs(n.li, {
        children: ["Highlighting is activated only when the length of ", e.jsx(n.code, {
          children: "highlight"
        }), " reaches the ", e.jsx(n.code, {
          children: "highlightLengthStart"
        }), " value"]
      }), `
`, e.jsx(n.li, {
        children: "This prevents unwanted highlighting when entering short search strings"
      }), `
`, e.jsx(n.li, {
        children: "Both properties ensure optimal user experience when working with search and filtering"
      }), `
`]
    })]
  });
}
function Yc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Kn, {
      ...s
    })
  }) : Kn(s);
}
function Zn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Свойства выделения текста"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "highlight"
      }), " и ", e.jsx(n.code, {
        children: "highlightLengthStart"
      }), " предназначены для управления выделением текста в компонентах."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "highlight"
        }), " — Текст для выделения в содержимом компоненте"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "highlightLengthStart"
        }), " — Минимальная длина значения highlight для начала выделения"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства работают совместно для обеспечения интеллектуального выделения текста. ", e.jsx(n.code, {
        children: "highlight"
      }), " определяет что выделять, а ", e.jsx(n.code, {
        children: "highlightLengthStart"
      }), " контролирует когда начинать выделение."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "highlight"
        }), " содержит строку текста, которую нужно найти и выделить в компоненте"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "highlightLengthStart"
        }), " устанавливает минимальную длину строки поиска для активации функции выделения"]
      }), `
`, e.jsxs(n.li, {
        children: ["Выделение активируется только когда длина ", e.jsx(n.code, {
          children: "highlight"
        }), " достигает значения ", e.jsx(n.code, {
          children: "highlightLengthStart"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Это предотвращает нежелательное выделение при вводе коротких строк поиска"
      }), `
`, e.jsx(n.li, {
        children: "Оба свойства обеспечивают оптимальный пользовательский опыт при работе с поиском и фильтрацией"
      }), `
`]
    })]
  });
}
function Gc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Zn, {
      ...s
    })
  }) : Zn(s);
}
function Qn(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Properties for text and number handling"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "label"
      }), ", ", e.jsx(n.code, {
        children: "labelMax"
      }), ", and ", e.jsx(n.code, {
        children: "formatting"
      }), " properties are designed to control the display of textual and numerical content in components."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "label"
        }), " — Text label or numeric value of the component"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "labelMax"
        }), " — Maximum length of a label text before truncation"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "formatting"
        }), " — Determines whether values should be formatted before display"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Functionality"
    }), `
`, e.jsx(n.p, {
      children: "These properties provide flexible content display management:"
    }), `
`, e.jsx(n.h4, {
      children: "Label processing"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "label"
        }), " can contain both textual and numeric values"]
      }), `
`, e.jsxs(n.li, {
        children: ["When a numeric value is passed to ", e.jsx(n.code, {
          children: "label"
        }), ", the ", e.jsx(n.code, {
          children: "toNumberByMax"
        }), " function is automatically applied"]
      }), `
`, e.jsx(n.li, {
        children: "Conversion occurs with consideration of maximum values and localization"
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "Length limitation"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "labelMax"
        }), " sets the maximum length of displayed text"]
      }), `
`, e.jsx(n.li, {
        children: "When the limit is exceeded, a text is truncated with an overflow indicator"
      }), `
`, e.jsx(n.li, {
        children: "Ensures consistent display across different contexts"
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "Value formatting"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "formatting"
        }), " controls whether formatting should be applied to values"]
      }), `
`, e.jsx(n.li, {
        children: "When formatting is enabled, numeric values are converted according to user locale"
      }), `
`, e.jsx(n.li, {
        children: "Supports automatic interface language detection"
      }), `
`]
    })]
  });
}
function Jc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Qn, {
      ...s
    })
  }) : Qn(s);
}
function ne(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Свойства для работы с текстом и числами"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "label"
      }), ", ", e.jsx(n.code, {
        children: "labelMax"
      }), " и ", e.jsx(n.code, {
        children: "formatting"
      }), " предназначены для управления отображением текстового и числового контента в компонентах."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "label"
        }), " — Текстовая метка или числовое значение компонента"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "labelMax"
        }), " — Максимальная длина текста метки перед обрезкой"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "formatting"
        }), " — Определяет необходимость форматирования значений перед отображением"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Функциональность"
    }), `
`, e.jsx(n.p, {
      children: "Эти свойства обеспечивают гибкое управление отображением контента:"
    }), `
`, e.jsx(n.h4, {
      children: "Обработка меток"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "label"
        }), " может содержать как текстовые, так и числовые значения"]
      }), `
`, e.jsxs(n.li, {
        children: ["При передаче числового значения в ", e.jsx(n.code, {
          children: "label"
        }), " автоматически применяется функция ", e.jsx(n.code, {
          children: "toNumberByMax"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Происходит преобразование с учетом максимальных значений и локализации"
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "Ограничение длины"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "labelMax"
        }), " устанавливает максимальную длину отображаемого текста"]
      }), `
`, e.jsx(n.li, {
        children: "При превышении лимита текст обрезается с добавлением индикатора переполнения"
      }), `
`, e.jsx(n.li, {
        children: "Обеспечивает консистентность отображения в различных контекстах"
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "Форматирование значений"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "formatting"
        }), " контролирует, нужно ли применять форматирование к значениям"]
      }), `
`, e.jsx(n.li, {
        children: "При включенном форматировании числовые значения преобразуются согласно локали пользователя"
      }), `
`, e.jsx(n.li, {
        children: "Поддерживается автоматическое определение языка интерфейса"
      }), `
`]
    })]
  });
}
function Kc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ne, {
      ...s
    })
  }) : ne(s);
}
function ee(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Value and Data Properties"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "value"
      }), " and ", e.jsx(n.code, {
        children: "detail"
      }), " properties are designed to transfer information when interacting with components."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "value"
        }), " — Main component value"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "detail"
        }), " — Additional data and contextual information"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Property Relationship"
    }), `
`, e.jsxs(n.p, {
      children: ["The properties complement each other, providing complete information about the component's state and context. ", e.jsx(n.code, {
        children: "value"
      }), " contains the main value, while ", e.jsx(n.code, {
        children: "detail"
      }), " extends it with additional data."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "value"
        }), " reflects the current state or value of the component"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "detail"
        }), " can contain metadata, identifiers, coordinates, or other auxiliary data"]
      }), `
`, e.jsx(n.li, {
        children: "Both properties work together to transfer structured information"
      }), `
`]
    })]
  });
}
function Zc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ee, {
      ...s
    })
  }) : ee(s);
}
function se(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Свойства значений и данных"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "value"
      }), " и ", e.jsx(n.code, {
        children: "detail"
      }), " предназначены для передачи информации при взаимодействии с компонентами."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "value"
        }), " — Основное значение компонента"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "detail"
        }), " — Дополнительные данные и контекстная информация"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства дополняют друг друга, предоставляя полную информацию о состоянии и контексте компонента. ", e.jsx(n.code, {
        children: "value"
      }), " содержит основное значение, а ", e.jsx(n.code, {
        children: "detail"
      }), " расширяет его дополнительными данными."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "value"
        }), " отражает текущее состояние или значение компонента"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "detail"
        }), " может содержать метаданные, идентификаторы, координаты или другие вспомогательные данные"]
      }), `
`, e.jsx(n.li, {
        children: "Оба свойства работают совместно для передачи структурированной информации"
      }), `
`]
    })]
  });
}
function Qc(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(se, {
      ...s
    })
  }) : se(s);
}
const nl = {
  name: "Value",
  descriptions: {
    highlight: { en: Yc, ru: Gc },
    labelNumber: { en: Jc, ru: Kc },
    value: { en: Zc, ru: Qc }
  }
};
function ie(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Description"
    }), `
`, e.jsx(n.p, {
      children: "The Badge component is a small visual indicator used to display status, count, or notifications on interface elements. It provides a compact way to convey important information without taking up much space."
    }), `
`, e.jsx(n.h3, {
      children: "Key Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Status indication"
        }), ": Display different states with color variants"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Content flexibility"
        }), ": Show text, numbers, or leave empty for dot indicator"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Smart overflow"
        }), ": Automatically handle large numbers with max value display"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Positioning"
        }), ": Flexible placement relative to parent elements"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Accessibility"
        }), ": Built-in support for screen readers and keyboard navigation"]
      }), `
`]
    })]
  });
}
function el(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ie, {
      ...s
    })
  }) : ie(s);
}
function te(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Описание"
    }), `
`, e.jsx(n.p, {
      children: "Компонент Badge представляет собой небольшой визуальный индикатор, используемый для отображения статуса, количества или уведомлений на элементах интерфейса. Он обеспечивает компактный способ передачи важной информации, не занимая много места."
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Индикация статуса"
        }), ": Отображение различных состояний с помощью цветовых вариантов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гибкость содержимого"
        }), ": Отображение текста, чисел или пустого индикатора-точки"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Умное переполнение"
        }), ": Автоматическая обработка больших чисел с отображением максимального значения"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Позиционирование"
        }), ": Гибкое размещение относительно родительских элементов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Доступность"
        }), ": Встроенная поддержка программ чтения с экрана и навигации с клавиатуры"]
      }), `
`]
    })]
  });
}
function sl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(te, {
      ...s
    })
  }) : te(s);
}
function re(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Dot Badge"
    }), `
`, e.jsx(n.p, {
      children: "The dot variant displays the badge as a small circular indicator without any text content, perfect for simple status notifications and presence indicators."
    }), `
`, e.jsx(n.h3, {
      children: "When to use"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Presence indicators"
        }), ": To show online/offline status or activity states"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Notification markers"
        }), ": For indicating new messages, updates, or alerts without specific counts"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Status dots"
        }), ": To display simple on/off or active/inactive states"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Minimalist design"
        }), ": When space is limited and only basic indication is needed"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Visual characteristics"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Compact size"
        }), ": Takes minimal space while maintaining visibility"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "No text content"
        }), ": Pure visual indicator without labels or numbers"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Clean appearance"
        }), ": Simple circular shape that integrates seamlessly"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Focus on state"
        }), ": Emphasizes status rather than specific information"]
      }), `
`]
    })]
  });
}
function il(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(re, {
      ...s
    })
  }) : re(s);
}
function ce(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Dot Badge"
    }), `
`, e.jsx(n.p, {
      children: "Точечный вариант отображает бейдж как небольшой круглый индикатор без текстового содержимого, идеально подходящий для простых уведомлений о статусе и индикаторов присутствия."
    }), `
`, e.jsx(n.h3, {
      children: "Когда использовать"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Индикаторы присутствия"
        }), ": Для отображения статуса онлайн/офлайн или состояний активности"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Маркеры уведомлений"
        }), ": Для обозначения новых сообщений, обновлений или предупреждений без конкретных чисел"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Точки статуса"
        }), ": Для отображения простых состояний включено/выключено или активно/неактивно"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Минималистичный дизайн"
        }), ": Когда пространство ограничено и нужно только базовое обозначение"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Визуальные характеристики"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Компактный размер"
        }), ": Занимает минимальное пространство, сохраняя видимость"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Без текстового содержимого"
        }), ": Чистый визуальный индикатор без меток или цифр"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Аккуратный внешний вид"
        }), ": Простая круглая форма, которая органично интегрируется"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Фокус на состоянии"
        }), ": Подчеркивает статус, а не конкретную информацию"]
      }), `
`]
    })]
  });
}
function tl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ce, {
      ...s
    })
  }) : ce(s);
}
function le(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Outline Badge"
    }), `
`, e.jsx(n.p, {
      children: "The outline variant provides a subtle badge style with transparent background and visible border, perfect for secondary information that needs to be noticeable but not dominant."
    }), `
`, e.jsx(n.h3, {
      children: "When to use"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Secondary information"
        }), ": When you need to display supplementary data without overwhelming the main content"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Status indicators"
        }), ": For showing neutral or informational states that don't require immediate attention"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Grouping elements"
        }), ": To categorize or tag content in a non-intrusive way"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Light theme compatibility"
        }), ": When working with light backgrounds where solid badges might be too heavy"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Visual characteristics"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Transparent background"
        }), ": Maintains the underlying design while adding informational value"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Visible border"
        }), ": Uses border styling to define the badge boundaries"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Subtle presence"
        }), ": Less visually prominent than primary or secondary filled variants"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Flexible appearance"
        }), ": Adapts well to different background colors and themes"]
      }), `
`]
    })]
  });
}
function rl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(le, {
      ...s
    })
  }) : le(s);
}
function oe(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Outline Badge"
    }), `
`, e.jsx(n.p, {
      children: "Контурный вариант обеспечивает тонкий стиль бейджа с прозрачным фоном и видимой границей, идеально подходящий для второстепенной информации, которая должна быть заметной, но не доминирующей."
    }), `
`, e.jsx(n.h3, {
      children: "Когда использовать"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Второстепенная информация"
        }), ": Когда нужно отобразить дополнительные данные, не перегружая основной контент"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Индикаторы статуса"
        }), ": Для отображения нейтральных или информационных состояний, не требующих немедленного внимания"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Группировка элементов"
        }), ": Для категоризации или маркировки контента ненавязчивым способом"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Совместимость со светлыми темами"
        }), ": При работе со светлыми фонами, где сплошные бейджи могут быть слишком тяжелыми"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Визуальные характеристики"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Прозрачный фон"
        }), ": Сохраняет базовый дизайн, добавляя информационную ценность"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Видимая граница"
        }), ": Использует стилизацию границы для определения границ бейджа"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Тонкое присутствие"
        }), ": Менее визуально заметный, чем основные или второстепенные заполненные варианты"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гибкий внешний вид"
        }), ": Хорошо адаптируется к различным цветам фона и темам"]
      }), `
`]
    })]
  });
}
function cl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(oe, {
      ...s
    })
  }) : oe(s);
}
function de(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Primary Badge"
    }), `
`, e.jsx(n.p, {
      children: "The primary variant is the most prominent badge style, designed to draw attention and indicate high-priority information or status."
    }), `
`, e.jsx(n.h3, {
      children: "When to use"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Critical notifications"
        }), ": When you need to highlight urgent or important information"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Status indicators"
        }), ": For showing active, enabled, or positive states"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Call-to-action elements"
        }), ": When the badge serves as an interactive element requiring user attention"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Brand emphasis"
        }), ": To maintain brand consistency with primary color schemes"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Visual characteristics"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "High contrast"
        }), ": Uses primary brand colors with strong contrast ratios for accessibility"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Bold appearance"
        }), ": More visually prominent than secondary or outline variants"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Enhanced visibility"
        }), ": Designed to stand out against various background colors"]
      }), `
`]
    })]
  });
}
function ll(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(de, {
      ...s
    })
  }) : de(s);
}
function he(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Primary Badge"
    }), `
`, e.jsx(n.p, {
      children: "Основной вариант — это наиболее заметный стиль бейджа, предназначенный для привлечения внимания и обозначения высокоприоритетной информации или статуса."
    }), `
`, e.jsx(n.h3, {
      children: "Когда использовать"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Критические уведомления"
        }), ": Когда нужно выделить срочную или важную информацию"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Индикаторы статуса"
        }), ": Для отображения активных, включенных или положительных состояний"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Элементы призыва к действию"
        }), ": Когда бейдж служит интерактивным элементом, требующим внимания пользователя"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Акцент бренда"
        }), ": Для поддержания согласованности бренда с основными цветовыми схемами"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Визуальные характеристики"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Высокий контраст"
        }), ": Использует основные цвета бренда с сильными контрастными соотношениями для доступности"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Яркий внешний вид"
        }), ": Более визуально заметный, чем второстепенные или контурные варианты"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Повышенная видимость"
        }), ": Разработан для выделения на различных цветах фона"]
      }), `
`]
    })]
  });
}
function ol(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(he, {
      ...s
    })
  }) : he(s);
}
function ae(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Secondary Badge"
    }), `
`, e.jsx(n.p, {
      children: "The secondary variant offers a balanced approach between primary and outline styles, providing moderate visual emphasis that supports the main content without competing for attention."
    }), `
`, e.jsx(n.h3, {
      children: "When to use"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Supporting information"
        }), ": When displaying important but non-critical data alongside primary content"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Status updates"
        }), ": For showing progress, warnings, or informational states that need visibility"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Content categorization"
        }), ": To organize and label content with moderate emphasis"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Hierarchical displays"
        }), ": When creating visual hierarchy where secondary elements need distinction"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Visual characteristics"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Moderate contrast"
        }), ": Balanced color treatment that's noticeable but not overwhelming"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Softer appearance"
        }), ": Less intense than primary variants while maintaining clear visibility"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Versatile styling"
        }), ": Works well in various contexts and color schemes"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Content harmony"
        }), ": Complements primary elements without creating visual competition"]
      }), `
`]
    })]
  });
}
function dl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ae, {
      ...s
    })
  }) : ae(s);
}
function xe(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Secondary Badge"
    }), `
`, e.jsx(n.p, {
      children: "Второстепенный вариант предлагает сбалансированный подход между основным и контурным стилями, обеспечивая умеренный визуальный акцент, который поддерживает основной контент, не конкурируя за внимание."
    }), `
`, e.jsx(n.h3, {
      children: "Когда использовать"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Поддерживающая информация"
        }), ": При отображении важных, но не критичных данных рядом с основным контентом"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Обновления статуса"
        }), ": Для отображения прогресса, предупреждений или информационных состояний, требующих видимости"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Категоризация контента"
        }), ": Для организации и маркировки контента с умеренным акцентом"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Иерархические отображения"
        }), ": При создании визуальной иерархии, где второстепенные элементы нуждаются в различении"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Визуальные характеристики"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Умеренный контраст"
        }), ": Сбалансированная цветовая обработка, которая заметна, но не подавляющая"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Более мягкий внешний вид"
        }), ": Менее интенсивный, чем основные варианты, при сохранении четкой видимости"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Универсальная стилизация"
        }), ": Хорошо работает в различных контекстах и цветовых схемах"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гармония контента"
        }), ": Дополняет основные элементы, не создавая визуальной конкуренции"]
      }), `
`]
    })]
  });
}
function hl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(xe, {
      ...s
    })
  }) : xe(s);
}
const al = {
  name: "Badge",
  descriptions: {
    badge: {
      en: el,
      ru: sl
    },
    dot: {
      en: il,
      ru: tl
    },
    outline: {
      en: rl,
      ru: cl
    },
    primary: {
      en: ll,
      ru: ol
    },
    secondary: {
      en: dl,
      ru: hl
    }
  }
};
function je(s) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "Bars is a top-level bar component for headers, toolbars, and contextual action bars. It provides a structured layout for titles, descriptions, back buttons, and interactive button sets with support for action mode for bulk operations."
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Application headers"
        }), " — Unified top bar for screens, sections, and pages with consistent navigation"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Toolbars"
        }), " — Placement of primary actions and functional interface elements"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Contextual actions"
        }), " — Special mode for bulk operations on selected items"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Structured navigation"
        }), " — Standardized back button behavior and screen transitions"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Core capabilities"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Text content"
        }), " — Primary label and secondary description with dynamic update support"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Navigation button"
        }), " — Configurable back button with hiding options and icon customization"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Action set"
        }), " — Button array (bars) for right-side placement with flexible configuration"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Action mode"
        }), " — Switching to action mode with separate labels, description, and button set"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Unified attributes"
        }), " — Shared settings for all buttons via buttonAttrs with event support"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Integration"
    }), `
`, e.jsx(n.p, {
      children: "Bars is designed for creating consistent headers and toolbars in applications. Use it as a foundation for screens when you need standardized navigation, action placement, and support for contextual operations with selected elements."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "This is a top-level UI component intended for direct use in application interfaces and design systems."
      }), `
`]
    })]
  });
}
function xl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(je, {
      ...s
    })
  }) : je(s);
}
function ue(s) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "Bars — компонент панели верхнего уровня для заголовков, панелей инструментов и контекстных панелей действий. Обеспечивает структурированный макет для заголовка, описания, кнопки назад и набора интерактивных кнопок с поддержкой режима действий для массовых операций."
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Заголовки приложений"
        }), " — Единый верхний бар для экранов, разделов и страниц с консистентной навигацией"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Панели инструментов"
        }), " — Размещение основных действий и функциональных элементов интерфейса"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Контекстные действия"
        }), " — Специальный режим для массовых операций над выбранными элементами"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Структурированная навигация"
        }), " — Стандартизированное поведение кнопки назад и переходов между экранами"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Текстовый контент"
        }), " — Основная метка (label) и дополнительное описание (description) с поддержкой динамического обновления"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Навигационная кнопка"
        }), " — Настраиваемая кнопка назад с возможностью скрытия и кастомизации иконок"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Набор действий"
        }), " — Массив кнопок (bars) для размещения справа с гибкой конфигурацией"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Режим действий"
        }), " — Переключение в action‑режим с отдельными метками, описанием и набором кнопок"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Единые атрибуты"
        }), " — Общие настройки для всех кнопок через buttonAttrs с поддержкой событий"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Интеграция"
    }), `
`, e.jsx(n.p, {
      children: "Bars предназначен для создания консистентных заголовков и панелей инструментов в приложениях. Используйте его в качестве основы для экранов, когда нужна стандартизированная навигация, размещение действий и поддержка контекстных операций с выделенными элементами."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Это UI‑компонент верхнего уровня, предназначенный для прямого использования в интерфейсах приложений и дизайн‑системах."
      }), `
`]
    })]
  });
}
function jl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ue, {
      ...s
    })
  }) : ue(s);
}
function pe(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Action mode"
    }), `
`, e.jsxs(n.p, {
      children: ["Properties that switch Bars into a contextual action bar when selecting items or entering bulk-edit mode: ", e.jsx(n.code, {
        children: "action"
      }), " activates the mode, ", e.jsx(n.code, {
        children: "actionLabel"
      }), " and ", e.jsx(n.code, {
        children: "actionDescription"
      }), " replace the main content, ", e.jsx(n.code, {
        children: "actionBars"
      }), " provides a specialized button set for operations."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `action?: boolean
actionLabel?: string | number
actionDescription?: string
actionBars?: Button[]
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "action"
          })
        }), " — Switches the bar into action context with full content replacement"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "actionLabel"
          })
        }), " — Primary action mode title (typically a count of selected items)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "actionDescription"
          })
        }), " — Additional description or instruction for the current action"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "actionBars"
          })
        }), " — Array of action buttons for operations on selected elements"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "When to use"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Item selection"
        }), " — User has selected one or more items in a list or table"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Bulk operations"
        }), " — Actions are needed on a group of selected objects"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Contextual menus"
        }), " — Replace the standard bar with specialized actions"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Temporary modes"
        }), " — Focus the interface on a specific task with exit capability"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Comparison"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsxs(n.strong, {
          children: [e.jsx(n.code, {
            children: "label"
          }), " vs ", e.jsx(n.code, {
            children: "actionLabel"
          })]
        }), " — Regular title is replaced with selection count or description"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsxs(n.strong, {
          children: [e.jsx(n.code, {
            children: "description"
          }), " vs ", e.jsx(n.code, {
            children: "actionDescription"
          })]
        }), " — Standard description becomes action instruction"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsxs(n.strong, {
          children: [e.jsx(n.code, {
            children: "bars"
          }), " vs ", e.jsx(n.code, {
            children: "actionBars"
          })]
        }), " — Regular buttons are replaced with context-specific ones"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Navigation"
        }), " — Back button becomes an exit button for leaving action mode"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Complete content replacement"
        }), " — All text areas and buttons are replaced with action variants"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Configuration preservation"
        }), " — Shared button attributes (buttonAttrs) apply to actionBars"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Unified styling"
        }), " — Action mode inherits all styling and behavior from the main component"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Programmatic control"
        }), " — Mode is controlled by external selection state"]
      }), `
`]
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Use short, clear labels in actionLabel and limit actionBars to 3–4 key actions for better user experience."
      }), `
`]
    })]
  });
}
function ul(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(pe, {
      ...s
    })
  }) : pe(s);
}
function me(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Режим действия"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства для переключения Bars в контекстную панель действий при выборе элементов или массовом редактировании: ", e.jsx(n.code, {
        children: "action"
      }), " активирует режим, ", e.jsx(n.code, {
        children: "actionLabel"
      }), " и ", e.jsx(n.code, {
        children: "actionDescription"
      }), " заменяют основной контент, ", e.jsx(n.code, {
        children: "actionBars"
      }), " предоставляет специализированный набор кнопок для операций."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `action?: boolean
actionLabel?: string | number
actionDescription?: string
actionBars?: Button[]
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "action"
          })
        }), " — Переключает панель в контекст действий с заменой всего контента"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "actionLabel"
          })
        }), " — Основной заголовок режима действий (обычно счётчик выбранных элементов)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "actionDescription"
          })
        }), " — Дополнительное описание или инструкция для текущего действия"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "actionBars"
          })
        }), " — Массив кнопок действий для операций над выбранными элементами"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Когда использовать"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Выбор элементов"
        }), " — Пользователь выделил один или несколько элементов в списке или таблице"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Массовые операции"
        }), " — Необходимы действия над группой выбранных объектов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Контекстные меню"
        }), " — Замена стандартной панели на специализированные действия"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Временные режимы"
        }), " — Фокусировка интерфейса на конкретной задаче с возможностью выхода"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Сравнение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsxs(n.strong, {
          children: [e.jsx(n.code, {
            children: "label"
          }), " vs ", e.jsx(n.code, {
            children: "actionLabel"
          })]
        }), " — Обычный заголовок заменяется на счётчик или описание выбора"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsxs(n.strong, {
          children: [e.jsx(n.code, {
            children: "description"
          }), " vs ", e.jsx(n.code, {
            children: "actionDescription"
          })]
        }), " — Стандартное описание сменяется инструкцией для действий"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsxs(n.strong, {
          children: [e.jsx(n.code, {
            children: "bars"
          }), " vs ", e.jsx(n.code, {
            children: "actionBars"
          })]
        }), " — Обычные кнопки заменяются специализированными для текущего контекста"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Навигация"
        }), " — Кнопка назад становится кнопкой выхода из режима действий"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Полная замена контента"
        }), " — Все текстовые области и кнопки заменяются action‑вариантами"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Сохранение конфигурации"
        }), " — Общие атрибуты кнопок (buttonAttrs) применяются к actionBars"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Единый стиль"
        }), " — Action‑режим наследует всю стилизацию и поведение основного компонента"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Программное управление"
        }), " — Режим контролируется внешним состоянием выбора элементов"]
      }), `
`]
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Используйте короткие, понятные метки в actionLabel и ограничивайте actionBars 3–4 ключевыми действиями для лучшего пользовательского опыта."
      }), `
`]
    })]
  });
}
function pl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(me, {
      ...s
    })
  }) : me(s);
}
function ge(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "bars"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for rendering the set of action buttons in the regular (non‑action) mode. It lets you fully customize the composition, order, and appearance of buttons aligned to the right of the label."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place any buttons/controls instead of the default set"
      }), `
`, e.jsx(n.li, {
        children: "Control ordering, grouping, and separators for actions"
      }), `
`, e.jsx(n.li, {
        children: "Pass custom attributes to icons and buttons via scoped props"
      }), `
`, e.jsx(n.li, {
        children: "Implement responsive behavior (collapse/hide actions on narrow screens)"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "bars"
      }), " area is typically right‑aligned and inherits sizing/spacing from the base Bars styles."]
    })]
  });
}
function ml(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ge, {
      ...s
    })
  }) : ge(s);
}
function fe(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "bars"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для рендеринга набора кнопок панели действий в обычном режиме. Позволяет полностью переопределить состав, порядок и внешний вид кнопок, которые располагаются справа от заголовка."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Размещать любые кнопки/элементы управления вместо стандартного набора"
      }), `
`, e.jsx(n.li, {
        children: "Управлять порядком, группировкой и разделителями для действий"
      }), `
`, e.jsx(n.li, {
        children: "Передавать собственные атрибуты иконкам и кнопкам через scoped‑props"
      }), `
`, e.jsx(n.li, {
        children: "Реализовывать адаптивное поведение (скрывать/сворачивать действия на узких экранах)"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Как правило, область ", e.jsx(n.code, {
        children: "bars"
      }), " выравнивается по правому краю панели и наследует размеры/отступы от базового стиля компонента Bars."]
    })]
  });
}
function gl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(fe, {
      ...s
    })
  }) : fe(s);
}
function ye(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "actionBars"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for rendering the set of action buttons in action mode. It lets you fully redefine specialized actions that appear when selection mode is active."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Define domain‑specific actions for selected items (e.g., share, move, delete)"
      }), `
`, e.jsx(n.li, {
        children: "Control ordering, grouping, and button state"
      }), `
`, e.jsx(n.li, {
        children: "Pass custom attributes to icons and buttons via scoped props"
      }), `
`, e.jsx(n.li, {
        children: "Implement responsive behavior and collapse secondary actions"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "actionBars"
      }), " area is shown instead of the regular ", e.jsx(n.code, {
        children: "bars"
      }), " when action mode is enabled and inherits sizing/spacing from the base Bars styles."]
    })]
  });
}
function fl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ye, {
      ...s
    })
  }) : ye(s);
}
function be(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "actionBars"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для рендеринга набора кнопок в режиме действий (action). Позволяет полностью переопределить специализированные действия, которые отображаются при активированном режиме выбора."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Определять доменно‑специфичные действия для выбранных элементов (например: поделиться, переместить, удалить)"
      }), `
`, e.jsx(n.li, {
        children: "Контролировать порядок, группировку и состояние кнопок"
      }), `
`, e.jsx(n.li, {
        children: "Передавать собственные атрибуты иконкам и кнопкам через scoped‑props"
      }), `
`, e.jsx(n.li, {
        children: "Реализовывать адаптивное поведение и сворачивание второстепенных действий"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Область ", e.jsx(n.code, {
        children: "actionBars"
      }), " отображается вместо обычного ", e.jsx(n.code, {
        children: "bars"
      }), ", когда включён режим action, и наследует размеры/отступы от базового стиля компонента Bars."]
    })]
  });
}
function yl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(be, {
      ...s
    })
  }) : be(s);
}
function ve(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Two-way binding (v-model)"
    }), `
`, e.jsxs(n.p, {
      children: ["The Bars component supports two-way binding for the ", e.jsx(n.code, {
        children: "action"
      }), " state using the ", e.jsx(n.code, {
        children: "v-model:action"
      }), " directive."]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsx(n.p, {
      children: "This allows you to synchronize the action mode of the bar with a local data property in your parent component."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<Bars v-model:action="isAction"/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "How it works"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "v-model:action"
      }), " is a shorthand for binding the ", e.jsx(n.code, {
        children: "action"
      }), " prop and listening to the ", e.jsx(n.code, {
        children: "update:action"
      }), " event."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: ':action=\\"isAction\\"'
          })
        }), " — The action mode is controlled by the ", e.jsx(n.code, {
          children: "isAction"
        }), " ref."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: '@update:action=\\"isAction = $event\\"'
          })
        }), " — When the internal state changes, the component emits an event to update the parent’s ", e.jsx(n.code, {
          children: "isAction"
        }), " ref."]
      }), `
`]
    })]
  });
}
function bl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ve, {
      ...s
    })
  }) : ve(s);
}
function Me(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Двусторонняя привязка (v-model)"
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент Bars поддерживает двустороннюю привязку для состояния ", e.jsx(n.code, {
        children: "action"
      }), " с использованием директивы ", e.jsx(n.code, {
        children: "v-model:action"
      }), "."]
    }), `
`, e.jsx(n.h3, {
      children: "Использование"
    }), `
`, e.jsx(n.p, {
      children: "Это позволяет синхронизировать режим действий панели с локальным свойством данных родительского компонента."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<Bars v-model:action="isAction"/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Как это работает"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.code, {
        children: "v-model:action"
      }), " — это сокращение для привязки свойства ", e.jsx(n.code, {
        children: "action"
      }), " и прослушивания события ", e.jsx(n.code, {
        children: "update:action"
      }), "."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: ':action="isAction"'
          })
        }), " — Режим действий управляется ref ", e.jsx(n.code, {
          children: "isAction"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: '@update:action="isAction = $event"'
          })
        }), " — Когда внутреннее состояние меняется, компонент генерирует событие для обновления ", e.jsx(n.code, {
          children: "isAction"
        }), " у родителя."]
      }), `
`]
    })]
  });
}
function vl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Me, {
      ...s
    })
  }) : Me(s);
}
const Ml = {
  name: "Bars",
  descriptions: {
    bars: {
      en: xl,
      ru: jl
    },
    action: {
      en: ul,
      ru: pl
    },
    "slot.bars": {
      en: ml,
      ru: gl
    },
    "slot.actionBars": {
      en: fl,
      ru: yl
    },
    "v-model": {
      en: bl,
      ru: vl
    }
  }
};
function we(s) {
  const n = {
    h2: "h2",
    p: "p",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Description"
    }), `
`, e.jsx(n.p, {
      children: "The Button component is an interactive element for user actions. It supports various visual styles, sizes, and states to create a consistent user interface."
    })]
  });
}
function wl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(we, {
      ...s
    })
  }) : we(s);
}
function Ce(s) {
  const n = {
    h2: "h2",
    p: "p",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Описание"
    }), `
`, e.jsx(n.p, {
      children: "Компонент Button представляет собой интерактивный элемент для выполнения действий пользователя. Он поддерживает различные визуальные стили, размеры и состояния для создания согласованного пользовательского интерфейса."
    })]
  });
}
function Cl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ce, {
      ...s
    })
  }) : Ce(s);
}
function De(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Primary Button Style"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "primary"
      }), " property activates the main visual style of the button, making it more prominent and drawing user attention to important actions."]
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Visual accent"
        }), " — Makes the button stand out among other interface elements"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Action hierarchy"
        }), " — Indicates the main or priority action on the page"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Enhanced visibility"
        }), " — Provides better distinction of important controls"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsx(n.p, {
      children: "The property is recommended for:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Main actions in forms (submit, save)"
      }), `
`, e.jsx(n.li, {
        children: "Call-to-Action buttons"
      }), `
`, e.jsx(n.li, {
        children: "Confirmation of important operations"
      }), `
`, e.jsx(n.li, {
        children: "Navigation to key sections"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Contrast"
        }), " — Automatically applies high-contrast colors for better visibility"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Accessibility"
        }), " — Complies with accessibility standards for users with disabilities"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Responsiveness"
        }), " — Maintains style across different screen sizes and devices"]
      }), `
`]
    })]
  });
}
function Dl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(De, {
      ...s
    })
  }) : De(s);
}
function ke(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Основной стиль кнопки"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "primary"
      }), " активирует основной визуальный стиль кнопки, делая её более заметной и акцентирующей внимание пользователя на важном действии."]
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Визуальный акцент"
        }), " — Выделяет кнопку среди других элементов интерфейса"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Иерархия действий"
        }), " — Указывает на основное или приоритетное действие на странице"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Улучшенная видимость"
        }), " — Обеспечивает лучшую различимость важных элементов управления"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsx(n.p, {
      children: "Свойство рекомендуется использовать для:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Основных действий в формах (отправка, сохранение)"
      }), `
`, e.jsx(n.li, {
        children: "Призывов к действию (Call-to-Action)"
      }), `
`, e.jsx(n.li, {
        children: "Подтверждения важных операций"
      }), `
`, e.jsx(n.li, {
        children: "Навигации к ключевым разделам"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Контрастность"
        }), " — Автоматически применяет высококонтрастные цвета для лучшей видимости"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Доступность"
        }), " — Соответствует стандартам доступности для пользователей с ограниченными возможностями"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Адаптивность"
        }), " — Сохраняет стиль при различных размерах экрана и устройствах"]
      }), `
`]
    })]
  });
}
function kl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ke, {
      ...s
    })
  }) : ke(s);
}
function _e(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Secondary Button Style"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "secondary"
      }), " property activates the secondary visual style of the button, which is less intrusive than the primary style and is used for alternative or less important actions."]
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Alternative actions"
        }), " — Provides the user with a choice of several actions"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Reduced visual load"
        }), " — Helps to avoid overloading the interface with accent elements"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Grouping actions"
        }), " — Used to group related but not primary actions"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsx(n.p, {
      children: "The property is recommended for:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Secondary actions in forms (cancel, reset)"
      }), `
`, e.jsx(n.li, {
        children: "Additional options or settings"
      }), `
`, e.jsx(n.li, {
        children: "Less priority actions on the page"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Moderate contrast"
        }), " — Uses colors with less contrast than the primary style"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Consistency"
        }), " — Harmoniously combines with the primary style and other elements"]
      }), `
`]
    })]
  });
}
function _l(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(_e, {
      ...s
    })
  }) : _e(s);
}
function Xe(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Второстепенный стиль кнопки"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "secondary"
      }), " активирует второстепенный визуальный стиль кнопки, который менее навязчив, чем основной, и используется для альтернативных или менее важных действий."]
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Альтернативные действия"
        }), " — Предоставляет пользователю выбор из нескольких действий"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Сниженная визуальная нагрузка"
        }), " — Помогает избежать перегрузки интерфейса акцентными элементами"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Группировка действий"
        }), " — Используется для группировки связанных, но не основных действий"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsx(n.p, {
      children: "Свойство рекомендуется использовать для:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Второстепенных действий в формах (отмена, сброс)"
      }), `
`, e.jsx(n.li, {
        children: "Дополнительных опций или настроек"
      }), `
`, e.jsx(n.li, {
        children: "Менее приоритетных действий на странице"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Умеренный контраст"
        }), " — Использует цвета с меньшим контрастом, чем основной стиль"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Согласованность"
        }), " — Гармонично сочетается с основным стилем и другими элементами"]
      }), `
`]
    })]
  });
}
function Xl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Xe, {
      ...s
    })
  }) : Xe(s);
}
function $e(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Outline Button Style"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "outline"
      }), " property applies an outline style to the button. This style is typically used for actions that should be less prominent than ", e.jsx(n.code, {
        children: "secondary"
      }), " but still accessible."]
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Additional actions"
        }), " — For actions that are not primary or secondary."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Minimalist design"
        }), " — Suitable for interfaces where minimal visual load is required."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Filter reset buttons."
      }), `
`, e.jsx(n.li, {
        children: "Secondary actions in cards or lists."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Transparent background"
        }), " — The button has a transparent background and a colored border."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Hover contrast"
        }), " — The background appears on hover for better feedback."]
      }), `
`]
    })]
  });
}
function $l(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx($e, {
      ...s
    })
  }) : $e(s);
}
function Le(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Контурный стиль кнопки"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "outline"
      }), " применяет контурный стиль к кнопке. Этот стиль обычно используется для действий, которые должны быть менее заметными, чем ", e.jsx(n.code, {
        children: "secondary"
      }), ", но все же доступными."]
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Дополнительные действия"
        }), " — Для действий, которые не являются основными или второстепенными."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Минималистичный дизайн"
        }), " — Подходит для интерфейсов, где требуется минимальная визуальная нагрузка."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Кнопки сброса фильтров."
      }), `
`, e.jsx(n.li, {
        children: "Второстепенные действия в карточках или списках."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Прозрачный фон"
        }), " — Кнопка имеет прозрачный фон и цветную рамку."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Контрастность при наведении"
        }), " — Фон появляется при наведении для лучшего отклика."]
      }), `
`]
    })]
  });
}
function Ll(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Le, {
      ...s
    })
  }) : Le(s);
}
function Fe(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Text Button Style"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "text"
      }), " property applies a text style to the button, making it look like a link. This style is used for the least intrusive actions."]
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Tertiary actions"
        }), " — For actions that should look like text but be interactive."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Unobtrusive design"
        }), " — Ideal for actions within text or where the button should not be distracting."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: '"Learn more" links.'
      }), `
`, e.jsx(n.li, {
        children: "Actions in a footer or menu."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "No background or border"
        }), " — The button looks like plain text."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Hover background"
        }), " — A background appears on hover for better feedback."]
      }), `
`]
    })]
  });
}
function Fl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Fe, {
      ...s
    })
  }) : Fe(s);
}
function Se(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Текстовый стиль кнопки"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "text"
      }), " применяет текстовый стиль к кнопке, делая ее похожей на ссылку. Этот стиль используется для наименее навязчивых действий."]
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Второстепенные действия"
        }), " — Для действий, которые должны выглядеть как текст, но быть интерактивными."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Ненавязчивый дизайн"
        }), " — Идеально подходит для действий внутри текста или там, где кнопка не должна отвлекать внимание."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: 'Ссылки "Узнать больше".'
      }), `
`, e.jsx(n.li, {
        children: "Действия в футере или в меню."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Без фона и рамки"
        }), " — Кнопка выглядит как обычный текст."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Фон при наведении"
        }), " — Появляется фон для лучшего отклика."]
      }), `
`]
    })]
  });
}
function Sl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Se, {
      ...s
    })
  }) : Se(s);
}
const Tl = {
  name: "Button",
  descriptions: {
    button: {
      en: wl,
      ru: Cl
    },
    primary: {
      en: Dl,
      ru: kl
    },
    secondary: {
      en: _l,
      ru: Xl
    },
    outline: {
      en: $l,
      ru: Ll
    },
    text: {
      en: Fl,
      ru: Sl
    }
  }
};
function Te(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Description"
    }), `
`, e.jsx(n.p, {
      children: "Versatile container component for displaying structured content with labels, descriptions, and actions. Cell provides consistent representation of information in lists, menus, and other interface elements."
    }), `
`, e.jsx(n.h3, {
      children: "Key Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Flexible content structure with support for labels, descriptions, and captions"
      }), `
`, e.jsx(n.li, {
        children: "Interactive states (selected, disabled, read-only)"
      }), `
`, e.jsx(n.li, {
        children: "Built-in icon and progress indicator support"
      }), `
`, e.jsx(n.li, {
        children: "Customizable dividers between elements"
      }), `
`, e.jsx(n.li, {
        children: "Dynamic behavior with hover effects"
      }), `
`, e.jsx(n.li, {
        children: "Skeleton system integration for loading states"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsx(n.p, {
      children: "Use Cell to create structured lists, settings, navigation menus, and other interface elements that require consistent information display. Particularly effective in mobile interfaces and responsive designs."
    })]
  });
}
function Pl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Te, {
      ...s
    })
  }) : Te(s);
}
function Pe(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Описание"
    }), `
`, e.jsx(n.p, {
      children: "Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями. Cell обеспечивает единообразное представление информации в списках, меню и других интерфейсных элементах."
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Гибкая структура контента с поддержкой меток, описаний и подписей"
      }), `
`, e.jsx(n.li, {
        children: "Интерактивные состояния (выбранный, отключенный, только для чтения)"
      }), `
`, e.jsx(n.li, {
        children: "Встроенная поддержка иконок и индикаторов прогресса"
      }), `
`, e.jsx(n.li, {
        children: "Настраиваемые разделители между элементами"
      }), `
`, e.jsx(n.li, {
        children: "Динамическое поведение с эффектами наведения"
      }), `
`, e.jsx(n.li, {
        children: "Интеграция с системой скелетонов для состояний загрузки"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsx(n.p, {
      children: "Используйте Cell для создания структурированных списков, настроек, меню навигации и других элементов интерфейса, где требуется единообразное отображение информации. Особенно эффективен в мобильных интерфейсах и адаптивных дизайнах."
    })]
  });
}
function Rl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Pe, {
      ...s
    })
  }) : Pe(s);
}
function Re(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "body"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing additional content at the bottom of the cell."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Adds information or controls below the main content"
      }), `
`, e.jsx(n.li, {
        children: "It Does not affect the main cell structure"
      }), `
`, e.jsx(n.li, {
        children: "Suitable for metadata, secondary actions, or details"
      }), `
`]
    })]
  });
}
function Al(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Re, {
      ...s
    })
  }) : Re(s);
}
function Ae(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "body"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения дополнительного контента в нижней части ячейки."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Добавляет информацию или элементы управления под основным содержимым"
      }), `
`, e.jsx(n.li, {
        children: "Не влияет на основную структуру ячейки"
      }), `
`, e.jsx(n.li, {
        children: "Подходит для метаданных, вторичных действий или деталей"
      }), `
`]
    })]
  });
}
function Nl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ae, {
      ...s
    })
  }) : Ae(s);
}
function Ne(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "trailing"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing control elements or indicators at the end of the cell."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Adds interactive elements on the right (switches, buttons, icons)"
      }), `
`, e.jsx(n.li, {
        children: "Suitable for actions or status display"
      }), `
`, e.jsx(n.li, {
        children: "Content is aligned to the right edge of the cell"
      }), `
`]
    })]
  });
}
function El(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ne, {
      ...s
    })
  }) : Ne(s);
}
function Ee(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "trailing"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения элементов управления или индикаторов в конце ячейки."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Добавляет интерактивные элементы справа (переключатели, кнопки, иконки)"
      }), `
`, e.jsx(n.li, {
        children: "Подходит для действий или отображения статуса"
      }), `
`, e.jsx(n.li, {
        children: "Контент выравнивается по правому краю"
      }), `
`]
    })]
  });
}
function Il(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ee, {
      ...s
    })
  }) : Ee(s);
}
const Bl = {
  name: "Cell",
  descriptions: {
    cell: {
      en: Pl,
      ru: Rl
    },
    "slot.body": {
      en: Al,
      ru: Nl
    },
    "slot.trailing": {
      en: El,
      ru: Il
    }
  }
};
function Ie(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Description"
    }), `
`, e.jsx(n.p, {
      children: "A compact element that represents an input, attribute, or action. Chips allow users to enter information, make selections, filter content, or trigger actions."
    }), `
`, e.jsx(n.h3, {
      children: "Key Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Display information in a compact format"
      }), `
`, e.jsx(n.li, {
        children: "Support for various states (selected, disabled)"
      }), `
`, e.jsx(n.li, {
        children: "Icon support capability"
      }), `
`, e.jsx(n.li, {
        children: "Adaptive behavior"
      }), `
`, e.jsx(n.li, {
        children: "Customizable styling"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsx(n.p, {
      children: "Use chips to display tags, filters, statuses, or other compact interface elements. They are particularly useful in lists, search forms, and filtering systems."
    })]
  });
}
function Ul(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ie, {
      ...s
    })
  }) : Ie(s);
}
function Be(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Описание"
    }), `
`, e.jsx(n.p, {
      children: "Компактный элемент, представляющий ввод, атрибут или действие. Чипы позволяют пользователям вводить информацию, делать выбор, фильтровать контент или запускать действия."
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Отображение информации в компактном формате"
      }), `
`, e.jsx(n.li, {
        children: "Поддержка различных состояний (выбранный, отключенный)"
      }), `
`, e.jsx(n.li, {
        children: "Возможность добавления иконок"
      }), `
`, e.jsx(n.li, {
        children: "Адаптивное поведение"
      }), `
`, e.jsx(n.li, {
        children: "Настраиваемая стилизация"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsx(n.p, {
      children: "Используйте чипы для отображения тегов, фильтров, статусов или других компактных элементов интерфейса. Они особенно полезны в списках, формах поиска и системах фильтрации."
    })]
  });
}
function Ol(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Be, {
      ...s
    })
  }) : Be(s);
}
function Ue(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Assistive Chips"
    }), `
`, e.jsx(n.p, {
      children: "Assistive chips are designed to help users complete tasks or provide additional information. They have a special appearance that emphasizes their supportive role in the interface."
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Visually distinct from standard chips"
      }), `
`, e.jsx(n.li, {
        children: "Used for hints and recommendations"
      }), `
`, e.jsx(n.li, {
        children: "Help guide users to appropriate actions"
      }), `
`, e.jsx(n.li, {
        children: "Can contain icons for better understanding"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsx(n.p, {
      children: "Use assistive chips for:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Auto-completion suggestions"
      }), `
`, e.jsx(n.li, {
        children: "System recommendations"
      }), `
`, e.jsx(n.li, {
        children: "Navigation hints"
      }), `
`, e.jsx(n.li, {
        children: "Helper actions in forms"
      }), `
`]
    })]
  });
}
function Wl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ue, {
      ...s
    })
  }) : Ue(s);
}
function Oe(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Assistive чипы"
    }), `
`, e.jsx(n.p, {
      children: "Assistive чипы предназначены для помощи пользователям в выполнении задач или предоставления дополнительной информации. Они имеют специальный внешний вид, который подчеркивает их вспомогательную роль в интерфейсе."
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Визуально отличаются от стандартных чипов"
      }), `
`, e.jsx(n.li, {
        children: "Используются для подсказок и рекомендаций"
      }), `
`, e.jsx(n.li, {
        children: "Помогают направлять пользователя к нужным действиям"
      }), `
`, e.jsx(n.li, {
        children: "Могут содержать иконки для лучшего понимания"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsx(n.p, {
      children: "Используйте assistive чипы для:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Предложения автодополнения"
      }), `
`, e.jsx(n.li, {
        children: "Рекомендаций системы"
      }), `
`, e.jsx(n.li, {
        children: "Подсказок по навигации"
      }), `
`, e.jsx(n.li, {
        children: "Вспомогательных действий в формах"
      }), `
`]
    })]
  });
}
function Vl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Oe, {
      ...s
    })
  }) : Oe(s);
}
function We(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Input Chips"
    }), `
`, e.jsx(n.p, {
      children: "Input chips represent discrete pieces of information entered by users, such as tags, contacts, or keywords. They have an appearance similar to input fields and are often used in form contexts."
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Style reminiscent of form elements"
      }), `
`, e.jsx(n.li, {
        children: "Usually contains user input"
      }), `
`, e.jsx(n.li, {
        children: "Can be removed or edited"
      }), `
`, e.jsx(n.li, {
        children: "Often grouped in sets"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsx(n.p, {
      children: "Use input chips for:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Displaying entered tags"
      }), `
`, e.jsx(n.li, {
        children: "Lists of selected items"
      }), `
`, e.jsx(n.li, {
        children: "Contacts or recipients"
      }), `
`, e.jsx(n.li, {
        children: "User-applied filters"
      }), `
`, e.jsx(n.li, {
        children: "Search keywords"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsx(n.p, {
      children: "Input chips work best for displaying data that users have actively entered or selected, making them interactive and editable."
    })]
  });
}
function ql(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(We, {
      ...s
    })
  }) : We(s);
}
function Ve(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Input чипы"
    }), `
`, e.jsx(n.p, {
      children: "Input чипы представляют собой дискретную информацию, введенную пользователем, такую как теги, контакты или ключевые слова. Они имеют внешний вид, похожий на поля ввода, и часто используются в контексте форм."
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Стиль, напоминающий элементы формы"
      }), `
`, e.jsx(n.li, {
        children: "Обычно содержат пользовательский ввод"
      }), `
`, e.jsx(n.li, {
        children: "Могут быть удалены или отредактированы"
      }), `
`, e.jsx(n.li, {
        children: "Часто группируются в наборы"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsx(n.p, {
      children: "Используйте input чипы для:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Отображения введенных тегов"
      }), `
`, e.jsx(n.li, {
        children: "Списка выбранных элементов"
      }), `
`, e.jsx(n.li, {
        children: "Контактов или получателей"
      }), `
`, e.jsx(n.li, {
        children: "Фильтров, примененных пользователем"
      }), `
`, e.jsx(n.li, {
        children: "Ключевых слов для поиска"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsx(n.p, {
      children: "Input чипы лучше всего подходят для отображения данных, которые пользователь активно вводил или выбирал, делая их интерактивными и редактируемыми."
    })]
  });
}
function Hl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ve, {
      ...s
    })
  }) : Ve(s);
}
const zl = {
  name: "Chip",
  descriptions: {
    chip: {
      en: Ul,
      ru: Ol
    },
    assistive: {
      en: Wl,
      ru: Vl
    },
    input: {
      en: ql,
      ru: Hl
    }
  }
};
function qe(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "Field is the base container for form controls that composes label, messages, counter, icons, and progress. It provides a unified skeleton and classes for consistent layout."
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Composition of subcomponents"
        }), " — FieldLabel, FieldMessage, FieldCounter, Progress, icons"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Unified scaffold"
        }), " — Wrapper template for the input area and helper zones (caption/prefix/suffix)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "State styles"
        }), " — Manages focus, disabled, readonly, selected, block"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Slot support"
        }), " — Integrates caption, prefix, suffix at the container level"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Core capabilities"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Validation highlighting"
        }), " — Based on ", e.jsx(n.code, {
          children: "validationMessage"
        }), " and a force show flag"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Character counter"
        }), " — Position toggle via ", e.jsx(n.code, {
          children: "counterTop"
        })]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Control icons"
        }), " — Cancel and navigation (arrows) with visibility flags"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Sizing helpers"
        }), " — Built-in FieldSize and FieldIcons"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Progress integration"
        }), " — Compact static progress for loading/status"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Integration"
    }), `
`, e.jsx(n.p, {
      children: "Use Field as a foundation for constructing any input fields. It easily integrates labels, icons, messages, and progress. The component handles markup, classes, and consistency; concrete inputs provide the input logic."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Field is a constructor wrapper: it doesn’t input data by itself, it organizes structure and auxiliary visuals."
      }), `
`]
    })]
  });
}
function Yl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(qe, {
      ...s
    })
  }) : qe(s);
}
function He(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "Field — базовый контейнер для полей формы, который собирает метку, сообщения, счётчик, иконки и прогресс. Обеспечивает единый каркас и классы для консистентной верстки."
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Композиция подкомпонентов"
        }), " — FieldLabel, FieldMessage, FieldCounter, Progress, иконки"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Единый каркас"
        }), " — Шаблон обёртки для поля ввода и вспомогательных зон (caption/prefix/suffix)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Стили состояния"
        }), " — Управление состояниями: focus, disabled, readonly, selected, block"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Поддержка слотов"
        }), " — Встраивание caption, prefix, suffix на уровне контейнера"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Подсветка валидации"
        }), " — На основе validationMessage и флага принудительного показа"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Счетчик символов"
        }), " — Переключение позиции счётчика через ", e.jsx(n.code, {
          children: "counterTop"
        })]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Иконки управления"
        }), " — Отмена и навигация (стрелки) с флагами видимости"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Интеграция размеров"
        }), " — Встроенные помощники FieldSize и FieldIcons"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Интеграция прогресса"
        }), " — Компактный статичный прогресс для загрузок/состояний"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Интеграция"
    }), `
`, e.jsx(n.p, {
      children: "Используйте Field как основу для конструирования любых полей ввода. В него легко интегрируются подписи, иконки, сообщения и прогресс. Компонент отвечает за разметку, классы и согласованность, а логику ввода реализуют конкретные инпуты."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Field — это оболочка-конструктор: он не вводит данные сам по себе, а организует структуру и отображение вспомогательных элементов."
      }), `
`]
    })]
  });
}
function Gl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(He, {
      ...s
    })
  }) : He(s);
}
function ze(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Cancel / clear mode"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "cancel"
      }), " and ", e.jsx(n.code, {
        children: "cancelShow"
      }), " properties control when a clear (cancel) icon is displayed."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "cancel"
        }), " — Display mode: ", e.jsx(n.code, {
          children: "auto"
        }), " or ", e.jsx(n.code, {
          children: "always"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "cancelShow"
        }), " — Condition flag used only in ", e.jsx(n.code, {
          children: "auto"
        }), " mode."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Behaviour"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "cancel = auto"
        }), ": Shown only if ", e.jsx(n.code, {
          children: "cancelShow"
        }), " is true, field is active (not disabled / readonly) and no arrow mode (carousel / stepper) is enabled."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "cancel = always"
        }), ": Forced display (still hidden if disabled / readonly or arrows active)."]
      }), `
`, e.jsxs(n.li, {
        children: ["In ", e.jsx(n.code, {
          children: "always"
        }), " mode ", e.jsx(n.code, {
          children: "cancelShow"
        }), " is ignored."]
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Typical usage: bind ", e.jsx(n.code, {
        children: "cancelShow"
      }), ' to a computed "has value" state.']
    })]
  });
}
function Jl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ze, {
      ...s
    })
  }) : ze(s);
}
function Ye(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Режим кнопки очистки (cancel)"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "cancel"
      }), " и ", e.jsx(n.code, {
        children: "cancelShow"
      }), " управляют отображением иконки очистки (cancel)."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "cancel"
        }), " — Режим отображения: ", e.jsx(n.code, {
          children: "auto"
        }), " или ", e.jsx(n.code, {
          children: "always"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "cancelShow"
        }), " — Условный флаг, используется только в режиме ", e.jsx(n.code, {
          children: "auto"
        }), "."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Поведение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "cancel = auto"
        }), ": Показ только если ", e.jsx(n.code, {
          children: "cancelShow = true"
        }), ", поле активно (не disabled / readonly) и не включён режим стрелок (carousel / stepper)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "cancel = always"
        }), ": Принудительный показ (кроме случаев disabled / readonly или активных стрелок)."]
      }), `
`, e.jsxs(n.li, {
        children: ["В режиме ", e.jsx(n.code, {
          children: "always"
        }), " значение ", e.jsx(n.code, {
          children: "cancelShow"
        }), " игнорируется."]
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Типичный сценарий: привязать ", e.jsx(n.code, {
        children: "cancelShow"
      }), ' к вычисляемому состоянию "есть значение".']
    })]
  });
}
function Kl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ye, {
      ...s
    })
  }) : Ye(s);
}
function Ge(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Navigation & alignment"
    }), `
`, e.jsxs(n.p, {
      children: ["The properties ", e.jsx(n.code, {
        children: "arrowCarousel"
      }), ", ", e.jsx(n.code, {
        children: "arrowStepper"
      }), ", ", e.jsx(n.code, {
        children: "disabledPrevious"
      }), ", ", e.jsx(n.code, {
        children: "disabledNext"
      }), ", and ", e.jsx(n.code, {
        children: "align"
      }), " control inline navigation controls and text alignment inside Field."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "arrowCarousel"
        }), " – Enables left/right navigation arrows (previous/next) using arrow icons."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "arrowStepper"
        }), " – Enables numeric step control (minus / plus). Mutually exclusive with ", e.jsx(n.code, {
          children: "arrowCarousel"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "disabledPrevious"
        }), " – Disables the left / minus control."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "disabledNext"
        }), " – Disables the right / plus control."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "align"
        }), " (", e.jsx(n.code, {
          children: "left | center | right"
        }), ") – Horizontal alignment for the input/content zone."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Interaction rules"
    }), `
`, e.jsxs(n.ol, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Only one mode is active: if ", e.jsx(n.code, {
          children: "arrowCarousel"
        }), " is true, stepper mode (", e.jsx(n.code, {
          children: "arrowStepper"
        }), ") is ignored and vice‑versa."]
      }), `
`, e.jsx(n.li, {
        children: "When an arrow mode is active, the cancel (clear) button is suppressed (takes priority space)."
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "disabledPrevious"
        }), " / ", e.jsx(n.code, {
          children: "disabledNext"
        }), " apply to the currently active arrow mode only."]
      }), `
`, e.jsxs(n.li, {
        children: ["Alignment (", e.jsx(n.code, {
          children: "align"
        }), ") affects the text/input area, not the arrow buttons (they stay at the edges defined by design)."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Typical usage"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Carousel navigation between items: ", e.jsx(n.code, {
          children: "arrowCarousel"
        }), " + manage ", e.jsx(n.code, {
          children: "disabledPrevious/disabledNext"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: ["Numeric increment/decrement: ", e.jsx(n.code, {
          children: "arrowStepper"
        }), " + internal value logic."]
      }), `
`, e.jsxs(n.li, {
        children: ["Centered value display with step controls: combine ", e.jsx(n.code, {
          children: "arrowStepper"
        }), " + ", e.jsx(n.code, {
          children: 'align="center"'
        }), "."]
      }), `
`]
    })]
  });
}
function Zl(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ge, {
      ...s
    })
  }) : Ge(s);
}
function Je(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Навигация и выравнивание"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "arrowCarousel"
      }), ", ", e.jsx(n.code, {
        children: "arrowStepper"
      }), ", ", e.jsx(n.code, {
        children: "disabledPrevious"
      }), ", ", e.jsx(n.code, {
        children: "disabledNext"
      }), " и ", e.jsx(n.code, {
        children: "align"
      }), " управляют встроенными элементами навигации и горизонтальным выравниванием содержимого внутри Field."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "arrowCarousel"
        }), " — Включает стрелки навигации (влево/вправо) для переключения элементов."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "arrowStepper"
        }), " — Включает числовые шаговые кнопки (минус / плюс). Взаимоисключимо с ", e.jsx(n.code, {
          children: "arrowCarousel"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "disabledPrevious"
        }), " — Отключает левую / минус кнопку."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "disabledNext"
        }), " — Отключает правую / плюс кнопку."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "align"
        }), " (", e.jsx(n.code, {
          children: "left | center | right"
        }), ") — Горизонтальное выравнивание области ввода/контента."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Правила взаимодействия"
    }), `
`, e.jsxs(n.ol, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Активен только один режим: если ", e.jsx(n.code, {
          children: "arrowCarousel = true"
        }), ", режим ", e.jsx(n.code, {
          children: "arrowStepper"
        }), " игнорируется и наоборот."]
      }), `
`, e.jsx(n.li, {
        children: "При активном режиме стрелок кнопка очистки (cancel) скрывается (приоритет области управления)."
      }), `
`, e.jsxs(n.li, {
        children: ["Флаги ", e.jsx(n.code, {
          children: "disabledPrevious"
        }), " / ", e.jsx(n.code, {
          children: "disabledNext"
        }), " относятся только к текущему активному режиму."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "align"
        }), " влияет на текст/контент, но не смещает сами кнопки навигации."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Типовые сценарии"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Переключение записей/экранов: ", e.jsx(n.code, {
          children: "arrowCarousel"
        }), " + управление ", e.jsx(n.code, {
          children: "disabledPrevious/disabledNext"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: ["Инкремент/декремент числа: ", e.jsx(n.code, {
          children: "arrowStepper"
        }), " + логика значения."]
      }), `
`, e.jsxs(n.li, {
        children: ["Центрированное значение со степперами: ", e.jsx(n.code, {
          children: "arrowStepper"
        }), " + ", e.jsx(n.code, {
          children: 'align="center"'
        }), "."]
      }), `
`]
    })]
  });
}
function Ql(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Je, {
      ...s
    })
  }) : Je(s);
}
function Ke(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "default"
      })
    }), `
`, e.jsx(n.p, {
      children: "Main input slot for Field – place the actual interactive control here."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Receives props: ", e.jsx(n.code, {
          children: "{ id, className, classHidden }"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Always bind both ", e.jsx(n.code, {
          children: ':id="id"'
        }), " and ", e.jsx(n.code, {
          children: ':class="className"'
        }), " to keep accessibility + styling"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "classHidden"
        }), " can be used for a hidden mirror / measurement input if needed"]
      }), `
`, e.jsx(n.li, {
        children: "Avoid extra wrapper elements to prevent layout / sizing breaks"
      }), `
`, e.jsxs(n.li, {
        children: ["Suitable for ", e.jsx(n.code, {
          children: "<input>"
        }), ", ", e.jsx(n.code, {
          children: "<textarea>"
        }), ", masked or custom input components"]
      }), `
`]
    })]
  });
}
function no(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ke, {
      ...s
    })
  }) : Ke(s);
}
function Ze(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "default"
      })
    }), `
`, e.jsx(n.p, {
      children: "Основной слот ввода Field — сюда помещается реальный интерактивный контрол."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Props: ", e.jsx(n.code, {
          children: "{ id, className, classHidden }"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Всегда привязывайте ", e.jsx(n.code, {
          children: ':id="id"'
        }), " и ", e.jsx(n.code, {
          children: ':class="className"'
        }), " (доступность + стили)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "classHidden"
        }), " можно использовать для скрытого зеркального / измерительного input"]
      }), `
`, e.jsx(n.li, {
        children: "Избегайте лишних обёрток, чтобы не ломать размеры и выравнивание"
      }), `
`, e.jsxs(n.li, {
        children: ["Подходит для ", e.jsx(n.code, {
          children: "<input>"
        }), ", ", e.jsx(n.code, {
          children: "<textarea>"
        }), ", маскированных или кастомных компонентов"]
      }), `
`]
    })]
  });
}
function eo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ze, {
      ...s
    })
  }) : Ze(s);
}
function Qe(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "leading"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing custom content at the start of the interactive field area (before the main input content flow)."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Positioned at the logical beginning (left in LTR, right in RTL)"
      }), `
`, e.jsx(n.li, {
        children: "Suitable for small icons, state indicators, lightweight buttons or badges"
      }), `
`, e.jsxs(n.li, {
        children: ["Receives the same control props object (", e.jsx(n.code, {
          children: "{ id, className, classHidden }"
        }), ") as the default slot"]
      }), `
`, e.jsx(n.li, {
        children: "Should remain compact; avoid breaking vertical rhythm or padding"
      }), `
`, e.jsxs(n.li, {
        children: ["Does not replace ", e.jsx(n.code, {
          children: "prefix"
        }), " — use ", e.jsx(n.code, {
          children: "prefix"
        }), " for semantic prefix text and ", e.jsx(n.code, {
          children: "leading"
        }), " for functional/auxiliary UI"]
      }), `
`]
    })]
  });
}
function so(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Qe, {
      ...s
    })
  }) : Qe(s);
}
function ns(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "leading"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения пользовательского контента в начале интерактивной области поля (до основного потока ввода)."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Располагается логически в начале (слева в LTR, справа в RTL)"
      }), `
`, e.jsx(n.li, {
        children: "Подходит для маленьких иконок, индикаторов состояния, лёгких кнопок или бейджей"
      }), `
`, e.jsxs(n.li, {
        children: ["Получает тот же объект props (", e.jsx(n.code, {
          children: "{ id, className, classHidden }"
        }), "), что и слот ", e.jsx(n.code, {
          children: "default"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Должен оставаться компактным; не нарушайте вертикальный ритм и отступы"
      }), `
`, e.jsxs(n.li, {
        children: ["Не заменяет ", e.jsx(n.code, {
          children: "prefix"
        }), " — используйте ", e.jsx(n.code, {
          children: "prefix"
        }), " для семантического текстового префикса, а ", e.jsx(n.code, {
          children: "leading"
        }), " — для функционального / вспомогательного UI"]
      }), `
`]
    })]
  });
}
function io(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ns, {
      ...s
    })
  }) : ns(s);
}
function es(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "trailing"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing custom content at the end of the interactive field area (after the main input content flow but before internal control icons)."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Positioned at the logical end (right in LTR, left in RTL)"
      }), `
`, e.jsx(n.li, {
        children: "Good for action icons (clear, open, toggle), counters, lightweight status badges"
      }), `
`, e.jsxs(n.li, {
        children: ["Receives the same control props object (", e.jsx(n.code, {
          children: "{ id, className, classHidden }"
        }), ") as the default slot"]
      }), `
`, e.jsx(n.li, {
        children: "Keep it concise; avoid large buttons that disrupt layout"
      }), `
`, e.jsxs(n.li, {
        children: ["Does not replace ", e.jsx(n.code, {
          children: "suffix"
        }), " — use ", e.jsx(n.code, {
          children: "suffix"
        }), " for semantic ending text, ", e.jsx(n.code, {
          children: "trailing"
        }), " for functional / dynamic UI"]
      }), `
`]
    })]
  });
}
function to(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(es, {
      ...s
    })
  }) : es(s);
}
function ss(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "trailing"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения пользовательского контента в конце интерактивной области поля (после основного содержимого ввода, но до внутренних управляющих иконок)."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Расположен логически в конце (справа в LTR, слева в RTL)"
      }), `
`, e.jsx(n.li, {
        children: "Подходит для иконок действий (очистка, открыть, переключить), счётчиков, небольших статусных бейджей"
      }), `
`, e.jsxs(n.li, {
        children: ["Получает тот же объект props (", e.jsx(n.code, {
          children: "{ id, className, classHidden }"
        }), "), что и слот ", e.jsx(n.code, {
          children: "default"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Должен быть компактным — избегайте крупных элементов, ломающих компоновку"
      }), `
`, e.jsxs(n.li, {
        children: ["Не заменяет ", e.jsx(n.code, {
          children: "suffix"
        }), " — используйте ", e.jsx(n.code, {
          children: "suffix"
        }), " для семантического завершающего текста, ", e.jsx(n.code, {
          children: "trailing"
        }), " — для функционального / динамического UI"]
      }), `
`]
    })]
  });
}
function ro(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ss, {
      ...s
    })
  }) : ss(s);
}
function is(s) {
  const n = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Value state (value & isValue)"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.code, {
        children: "Field"
      }), " separates actual input content from the ", e.jsx(n.em, {
        children: "visual filled state"
      }), "."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "value"
        }), " – Actual content (string / number, etc.) you pass into the inner ", e.jsx(n.code, {
          children: "<input>"
        }), " via the default slot. ", e.jsx(n.code, {
          children: "Field"
        }), " does not manage (no ", e.jsx(n.code, {
          children: "v-model"
        }), ") or mutate / validate it, ", e.jsx(n.strong, {
          children: "but"
        }), " it reads it reactively through a computed ", e.jsx(n.code, {
          children: "focusValue"
        }), " purely for visual purposes: displaying the current textual snapshot near the caption (scoreboardInput) and harmonizing layout with caption + extra controls. Priority when deriving ", e.jsx(n.code, {
          children: "focusValue"
        }), ": element with ", e.jsx(n.code, {
          children: "[data-length]"
        }), " → main ", e.jsx(n.code, {
          children: "<input>"
        }), " → ", e.jsx(n.code, {
          children: "props.value"
        }), " (string). This read does not drive business rules."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "isValue"
        }), " (", e.jsx(n.code, {
          children: "boolean"
        }), ") – Forces the visual “filled” state (floating / collapsed label + classes) even if the actual input is empty."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Interaction"
    }), `
`, e.jsxs(n.ol, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Non‑empty real input ⇒ filled appearance regardless of ", e.jsx(n.code, {
          children: "isValue"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: ["Empty real input + ", e.jsx(n.code, {
          children: "isValue = true"
        }), " ⇒ visually filled (preload, mask, delayed prefill cases)."]
      }), `
`, e.jsxs(n.li, {
        children: ["Empty real input + no / false ", e.jsx(n.code, {
          children: "isValue"
        }), " ⇒ visually empty."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "focusValue"
        }), " is used only to render inline mirrored text when caption zone is active and optionally to read length from ", e.jsx(n.code, {
          children: "[data-length]"
        }), " element; do not rely on it for validation or domain logic."]
      }), `
`, e.jsxs(n.li, {
        children: ["Validation, helper messages, counters (implemented externally) must use the real input value, not ", e.jsx(n.code, {
          children: "isValue"
        }), "."]
      }), `
`]
    }), `
`, e.jsxs(n.h3, {
      children: ["When to use ", e.jsx(n.code, {
        children: "isValue"
      })]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Preload “as if filled” look while fetching data."
      }), `
`, e.jsx(n.li, {
        children: "Masked / templated inputs needing a permanently floated label."
      }), `
`, e.jsx(n.li, {
        children: "Visual demos / stories without binding a real value yet."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Don’t overload ", e.jsx(n.code, {
          children: "isValue"
        }), " for logic; it’s strictly visual."]
      }), `
`, e.jsxs(n.li, {
        children: ["Keep reactive value handling outside (wrapper with ", e.jsx(n.code, {
          children: "v-model"
        }), "), treat ", e.jsx(n.code, {
          children: "Field"
        }), " as structural shell."]
      }), `
`, e.jsxs(n.li, {
        children: ["For length-sensitive styling add an attribute ", e.jsx(n.code, {
          children: "[data-length]"
        }), " to an inner element; priority: ", e.jsx(n.code, {
          children: "[data-length]"
        }), " → ", e.jsx(n.code, {
          children: "<input>"
        }), " → ", e.jsx(n.code, {
          children: "props.value"
        }), "."]
      }), `
`]
    })]
  });
}
function co(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(is, {
      ...s
    })
  }) : is(s);
}
function ts(s) {
  const n = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Состояние значения (value и isValue)"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.code, {
        children: "Field"
      }), " отделяет фактическое содержимое ввода от ", e.jsx(n.em, {
        children: "визуального состояния заполненности"
      }), "."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "value"
        }), " – Фактическое содержимое (строка/число и т.п.), которое вы передаёте во внутренний ", e.jsx(n.code, {
          children: "<input>"
        }), " через слот. ", e.jsx(n.code, {
          children: "Field"
        }), " не управляет значением (нет ", e.jsx(n.code, {
          children: "v-model"
        }), " и мутаций) и не валидирует его, ", e.jsx(n.strong, {
          children: "но"
        }), " считывает его ОДИН раз реактивно через вычисление ", e.jsx(n.code, {
          children: "focusValue"
        }), " для чисто визуальных целей: вывода «текущего» текста рядом с caption (scoreboardInput) и корректной работы комбинированной зоны caption/доборных элементов. Если передан ", e.jsx(n.code, {
          children: "props.value"
        }), " (строка) – используется он; иначе ищется реальный ", e.jsx(n.code, {
          children: "<input>"
        }), " или элемент с ", e.jsx(n.code, {
          children: "[data-length]"
        }), ". Это чтение не влияет на логику валидации и не изменяет значение."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "isValue"
        }), " (", e.jsx(n.code, {
          children: "boolean"
        }), ") – Принудительно включает «режим заполненности» (плавающая / сжатая метка, соответствующие классы), даже если реальный ", e.jsx(n.code, {
          children: "value"
        }), " пуст."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Взаимодействие"
    }), `
`, e.jsxs(n.ol, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Реальное непустое значение (через слот) всегда включает визуальное состояние «заполнено» независимо от ", e.jsx(n.code, {
          children: "isValue"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: ["Пустое значение + ", e.jsx(n.code, {
          children: "isValue = true"
        }), " ⇒ поле выглядит заполненным (прелоад, маска, отложенная подстановка)."]
      }), `
`, e.jsxs(n.li, {
        children: ["Пустое значение + отсутствие/", e.jsx(n.code, {
          children: "false"
        }), " у ", e.jsx(n.code, {
          children: "isValue"
        }), " ⇒ визуально пусто."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "focusValue"
        }), " используется только для отображения текста в зоне scoreboard при активном caption и (опционально) для считывания длины из элемента с ", e.jsx(n.code, {
          children: "[data-length]"
        }), "; не применять его для бизнес‑логики."]
      }), `
`, e.jsxs(n.li, {
        children: ["Валидация, helper‑сообщения и счётчик символов (если реализованы вовне) должны опираться на фактическое значение input, а не на ", e.jsx(n.code, {
          children: "isValue"
        }), "."]
      }), `
`]
    }), `
`, e.jsxs(n.h3, {
      children: ["Когда использовать ", e.jsx(n.code, {
        children: "isValue"
      })]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Предварительный показ «как будто заполнено», пока грузятся данные."
      }), `
`, e.jsx(n.li, {
        children: "Маскированные / шаблонные поля, где нужно зафиксировать плавающий label."
      }), `
`, e.jsx(n.li, {
        children: "Демо/сторис без передачи реального значения."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Не подменяйте бизнес‑логику через ", e.jsx(n.code, {
          children: "isValue"
        }), "; он только про визуал."]
      }), `
`, e.jsxs(n.li, {
        children: ["Если требуется реактивная работа с данными — управляйте значением во внешнем компоненте с ", e.jsx(n.code, {
          children: "v-model"
        }), ", а ", e.jsx(n.code, {
          children: "Field"
        }), " используйте как каркас."]
      }), `
`, e.jsxs(n.li, {
        children: ["Для корректного подсчёта длины можно пометить внутренний элемент атрибутом ", e.jsx(n.code, {
          children: "data-length"
        }), "; приоритет чтения: элемент с ", e.jsx(n.code, {
          children: "[data-length]"
        }), " → основной ", e.jsx(n.code, {
          children: "<input>"
        }), " → ", e.jsx(n.code, {
          children: "props.value"
        }), "."]
      }), `
`]
    })]
  });
}
function lo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ts, {
      ...s
    })
  }) : ts(s);
}
function rs(s) {
  const n = {
    code: "code",
    pre: "pre",
    ...s.components
  };
  return e.jsx(n.pre, {
    children: e.jsx(n.code, {
      className: "language-markdown",
      children: `## Width (width)

Property to control the horizontal size of the Field.

### Property
- **width** (\`string\`) — Accept ANY valid CSS value: "320px", "48rem", "50%", "min(100%,320px)", "clamp(240px,40vw,480px)" or a design token (e.g. "sm") if your design system resolves it. The value "custom" is an internal technical marker (normally not used directly).

### Behavior
- Not set: fluid (depends on container).
- With \`block\`: always 100% width.
- Any explicit value: applied directly (no extra wrapper logic).

### Examples
\`\`\`vue
<DesignField label="auto" />
<DesignField width="320px" label="320px" />
<DesignField width="50%" label="50%" />
<DesignField width="min(100%,320px)" label="min(...)" />
\`\`\`

### Notes
- Prefer parent layout (flex / grid) for responsiveness; use \`width\` for quick explicit sizing.
- Complex expressions (calc / min / clamp) are fine if valid CSS.
- \`block\` can override or take precedence if style specificity is higher.
`
    })
  });
}
function oo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(rs, {
      ...s
    })
  }) : rs(s);
}
function cs(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Ширина (width)"
    }), `
`, e.jsx(n.p, {
      children: "Свойство для управления горизонтальным размером Field."
    }), `
`, e.jsx(n.h3, {
      children: "Свойство"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "width"
        }), " (", e.jsx(n.code, {
          children: "string"
        }), ") — Передавайте ЛЮБОЕ валидное CSS‑значение: ", e.jsx(n.code, {
          children: '"320px"'
        }), ", ", e.jsx(n.code, {
          children: '"48rem"'
        }), ", ", e.jsx(n.code, {
          children: '"50%"'
        }), ", ", e.jsx(n.code, {
          children: '"min(100%,320px)"'
        }), ", ", e.jsx(n.code, {
          children: '"clamp(240px,40vw,480px)"'
        }), ", либо дизайн‑токен (например ", e.jsx(n.code, {
          children: '"sm"'
        }), ", если поддержан системой). Значение ", e.jsx(n.code, {
          children: '"custom"'
        }), " — внутренняя тех. метка (обычно не использовать)."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Поведение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Не задано: ширина «резиновая» (зависит от контейнера)."
      }), `
`, e.jsxs(n.li, {
        children: ["С ", e.jsx(n.code, {
          children: "block"
        }), ": всегда 100%."]
      }), `
`, e.jsx(n.li, {
        children: "Любое конкретное значение: применяется напрямую без доп. обёрток."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-vue",
        children: `<DesignField label="auto" />
<DesignField width="320px" label="320px" />
<DesignField width="50%" label="50%" />
<DesignField width="min(100%,320px)" label="min(...)" />
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Заметки"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Предпочтительнее управлять адаптивностью через родительский layout (flex / grid) и использовать width точечно."
      }), `
`, e.jsx(n.li, {
        children: "Сложные выражения (calc / min / clamp) поддерживаются, если валидны для CSS."
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "block"
        }), " может переопределить индивидуально заданную ширину при конфликте приоритетов стилей."]
      }), `
`]
    })]
  });
}
function ho(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(cs, {
      ...s
    })
  }) : cs(s);
}
const ao = {
  name: "Field",
  descriptions: {
    field: {
      en: Yl,
      ru: Gl
    },
    cancel: {
      en: Jl,
      ru: Kl
    },
    arrows: {
      en: Zl,
      ru: Ql
    },
    "slot.default": {
      en: no,
      ru: eo
    },
    "slot.leading": {
      en: so,
      ru: io
    },
    "slot.trailing": {
      en: to,
      ru: ro
    },
    value: {
      en: co,
      ru: lo
    },
    width: {
      en: oo,
      ru: ho
    }
  }
};
function ls(s) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "FieldCounter is a component that displays character count for form fields. Shows current character count and input limits."
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Character counting"
        }), " — Display current input character count"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Input limits"
        }), " — Show character restrictions"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Custom templates"
        }), " — Flexible display formats"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Auto visibility"
        }), " — Smart display management"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Core capabilities"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Real-time counting"
        }), " — Instant counter updates"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Limit management"
        }), " — Maximum character limit display"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Template rendering"
        }), " — Customizable formats with [c] and [m] placeholders"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Flexible values"
        }), " — Support for strings and numbers"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Integration"
    }), `
`, e.jsx(n.p, {
      children: "Use FieldCounter with text inputs and textareas to display character count and limit information."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "This component focuses on counter display and should be used alongside input fields."
      }), `
`]
    })]
  });
}
function xo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ls, {
      ...s
    })
  }) : ls(s);
}
function os(s) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "FieldCounter — компонент для отображения счетчика символов в полях форм. Показывает текущее количество символов и лимиты ввода."
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Счетчик символов"
        }), " — Отображение количества введенных символов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Лимиты ввода"
        }), " — Показ ограничений по количеству символов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Настраиваемые шаблоны"
        }), " — Гибкие форматы отображения"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Автоматическая видимость"
        }), " — Умное управление отображением"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Подсчет в реальном времени"
        }), " — Мгновенное обновление счетчика"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Управление лимитами"
        }), " — Отображение максимальных ограничений"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Шаблоны отображения"
        }), " — Настраиваемые форматы с заполнителями [c] и [m]"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гибкие значения"
        }), " — Поддержка строк и чисел"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Интеграция"
    }), `
`, e.jsx(n.p, {
      children: "Используйте FieldCounter с текстовыми полями и областями ввода для отображения информации о количестве символов и лимитах."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Компонент фокусируется на отображении счетчика и должен использоваться вместе с полями ввода."
      }), `
`]
    })]
  });
}
function jo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(os, {
      ...s
    })
  }) : os(s);
}
function ds(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Custom Templates"
    }), `
`, e.jsx(n.p, {
      children: "Use simple string templates with placeholders to format the counter."
    }), `
`, e.jsx(n.h3, {
      children: "Placeholders"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "[c]"
        }), " - current character count"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "[m]"
        }), " - maximum character limit"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Descriptive format -->
<FieldCounter
  :counter="75"
  :maxlength="150"
  template="Characters: [c] of [m]"
/>
`
      })
    })]
  });
}
function uo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ds, {
      ...s
    })
  }) : ds(s);
}
function hs(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Пользовательские шаблоны"
    }), `
`, e.jsx(n.p, {
      children: "Используйте простые строковые шаблоны с плейсхолдерами для форматирования счетчика."
    }), `
`, e.jsx(n.h3, {
      children: "Плейсхолдеры"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "[c]"
        }), " — текущее число символов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "[m]"
        }), " — максимальный лимит символов"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Описательный формат -->
<FieldCounter
  :counter="75"
  :maxlength="150"
  template="Символов: [c] из [m]"
/>
`
      })
    })]
  });
}
function po(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(hs, {
      ...s
    })
  }) : hs(s);
}
const mo = {
  name: "FieldCounter",
  descriptions: {
    fieldCounter: {
      en: xo,
      ru: jo
    },
    templates: {
      en: uo,
      ru: po
    }
  }
};
function as(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "FieldLabel is a component for displaying a field label and a required indicator."
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Field label"
        }), " — A caption for the input control"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Required marker"
        }), " — Shows a required state when needed"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Compatibility"
        }), " — Works together with FieldCounter and Progress"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Consistent style"
        }), " — Unified classes and spacing within form controls"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Key features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Simple usage"
        }), " — Just pass the ", e.jsx(n.code, {
          children: "label"
        }), " prop"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Required marker"
        }), " — Enable via the ", e.jsx(n.code, {
          children: "required"
        }), " prop"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Character counter"
        }), " — Renders when counter props (counter/maxlength) are provided"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Progress indicator"
        }), " — Can display progress (e.g., loading)"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Integration"
    }), `
`, e.jsx(n.p, {
      children: "Use FieldLabel as a part of composite input controls. When needed, add FieldCounter and Progress via corresponding props to make forms more informative."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "The component is responsible for rendering the label and does not affect input logic."
      }), `
`]
    })]
  });
}
function go(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(as, {
      ...s
    })
  }) : as(s);
}
function xs(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "FieldLabel — компонент для отображения текстовой метки поля и индикатора обязательности."
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Метка поля"
        }), " — Подпись к полю ввода"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Обязательность"
        }), " — Отображение маркера required при необходимости"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Совместимость"
        }), " — Используется вместе с FieldCounter и Progress"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Единый стиль"
        }), " — Согласованные классы и отступы в составе формы"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Простое подключение"
        }), " — Достаточно передать свойство ", e.jsx(n.code, {
          children: "label"
        })]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Маркер обязательности"
        }), " — Включается через свойство ", e.jsx(n.code, {
          children: "required"
        })]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Счетчик символов"
        }), " — Отображается при наличии свойств счётчика (counter/maxlength)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Индикатор процесса"
        }), " — Может показывать прогресс (например, загрузки)"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Интеграция"
    }), `
`, e.jsx(n.p, {
      children: "Используйте FieldLabel как часть составных контролов ввода. При необходимости добавляйте FieldCounter и Progress через соответствующие свойства, чтобы сделать форму информативнее."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Компонент отвечает за отображение метки и не влияет на логику ввода данных."
      }), `
`]
    })]
  });
}
function fo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(xs, {
      ...s
    })
  }) : xs(s);
}
const yo = {
  name: "FieldLabel",
  descriptions: {
    fieldLabel: {
      en: go,
      ru: fo
    }
  }
};
function js(s) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "FieldMessage is a component for displaying helper and validation messages below form fields."
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Helper message — a hint or guidance for the user under the field"
      }), `
`, e.jsx(n.li, {
        children: "Validation message — an error text shown on invalid input"
      }), `
`, e.jsx(n.li, {
        children: "Forced display — controlled via the forceShow property"
      }), `
`, e.jsx(n.li, {
        children: "Smart visibility — automatic logic based on provided values"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Key features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Message priority — validation message has priority over helper text"
      }), `
`, e.jsx(n.li, {
        children: "Flexible sources — supports both static and reactive values"
      }), `
`, e.jsx(n.li, {
        children: "Compatibility — works with input fields and character counter"
      }), `
`, e.jsx(n.li, {
        children: "Configurable rendering — via the design system and component attributes"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Integration"
    }), `
`, e.jsx(n.p, {
      children: "Use FieldMessage alongside input fields to show hints and errors, and together with FieldCounter for more informative forms."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "The component focuses on text messages and should be used with input controls."
      }), `
`]
    })]
  });
}
function bo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(js, {
      ...s
    })
  }) : js(s);
}
function us(s) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "FieldMessage — компонент для отображения вспомогательных и валидационных сообщений под полями формы."
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Вспомогательное сообщение"
        }), " — Подсказка пользователю под полем"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Сообщение валидации"
        }), " — Текст ошибки при некорректном вводе"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Принудительное отображение"
        }), " — Управление показом через свойство forceShow"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Автоматическая видимость"
        }), " — Умное управление отображением"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Приоритет сообщений"
        }), " — Сообщение об ошибке имеет приоритет над подсказкой"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гибкость источников"
        }), " — Поддержка статических и реактивных значений"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Совместимость"
        }), " — Используется с полями ввода и счетчиком символов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Настраиваемый вывод"
        }), " — Через дизайн‑систему и атрибуты компонента"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Интеграция"
    }), `
`, e.jsx(n.p, {
      children: "Используйте FieldMessage вместе с полями ввода для вывода подсказок и ошибок, а также в сочетании с FieldCounter для информативных форм."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Компонент фокусируется на отображении текстовых сообщений и должен использоваться совместно с контролами ввода."
      }), `
`]
    })]
  });
}
function vo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(us, {
      ...s
    })
  }) : us(s);
}
function ps(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "helper"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for rendering a helper (hint) message below an input field. It lets you fully override the text, markup, and styling of the hint, and optionally inject additional content."
    }), `
`, e.jsx(n.p, {
      children: "This slot allows you to:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Render custom markup instead of the default helper text"
      }), `
`, e.jsx(n.li, {
        children: "Add icons/links/formatting inside the message"
      }), `
`, e.jsx(n.li, {
        children: "Control visibility and states via scoped props"
      }), `
`, e.jsx(n.li, {
        children: "Localize and swap the text depending on context"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Typically, the ", e.jsx(n.code, {
        children: "helper"
      }), " area is placed under the input and inherits base spacing/typography from the design system. If a validation message is present at the same time, it has priority over the helper."]
    })]
  });
}
function Mo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ps, {
      ...s
    })
  }) : ps(s);
}
function ms(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "helper"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для рендеринга вспомогательного сообщения (подсказки) под полем ввода. Позволяет полностью переопределить текст, разметку и оформление подсказки, а также внедрять дополнительный контент при необходимости."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Выводить произвольную разметку вместо стандартного текста подсказки"
      }), `
`, e.jsx(n.li, {
        children: "Подключать иконки/ссылки/форматирование внутри сообщения"
      }), `
`, e.jsx(n.li, {
        children: "Управлять видимостью и состояниями сообщения через scoped‑props"
      }), `
`, e.jsx(n.li, {
        children: "Локализовать текст и подменять его в зависимости от контекста"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Как правило, область ", e.jsx(n.code, {
        children: "helper"
      }), " располагается ниже поля ввода и наследует базовые отступы/типографику дизайн‑системы. Если одновременно есть сообщение валидации, оно имеет приоритет над подсказкой."]
    })]
  });
}
function wo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ms, {
      ...s
    })
  }) : ms(s);
}
function gs(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "validation"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for rendering a validation (error) message below an input field. It lets you fully override the text, markup, and styling of the error message, and optionally add custom content."
    }), `
`, e.jsx(n.p, {
      children: "This slot allows you to:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Render custom markup instead of the default error text"
      }), `
`, e.jsx(n.li, {
        children: "Add icons/links/formatting inside the message"
      }), `
`, e.jsx(n.li, {
        children: "Control visibility and states via scoped props (e.g., error type)"
      }), `
`, e.jsx(n.li, {
        children: "Localize and swap the text depending on context"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Typically, the ", e.jsx(n.code, {
        children: "validation"
      }), " area is placed under the input and has higher priority than ", e.jsx(n.code, {
        children: "helper"
      }), " — if a validation message is present, it’s displayed instead of the helper."]
    })]
  });
}
function Co(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(gs, {
      ...s
    })
  }) : gs(s);
}
function fs(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "validation"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для рендеринга сообщения валидации (ошибки) под полем ввода. Позволяет полностью переопределить текст, разметку и оформление сообщения об ошибке, а также дополнить его собственным контентом."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Выводить произвольную разметку вместо стандартного текста ошибки"
      }), `
`, e.jsx(n.li, {
        children: "Добавлять иконки/ссылки/форматирование внутри сообщения"
      }), `
`, e.jsx(n.li, {
        children: "Управлять видимостью и состояниями через scoped‑props (например, тип ошибки)"
      }), `
`, e.jsx(n.li, {
        children: "Локализовать и подменять текст в зависимости от контекста"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Как правило, область ", e.jsx(n.code, {
        children: "validation"
      }), " располагается ниже поля ввода и имеет более высокий приоритет по сравнению с ", e.jsx(n.code, {
        children: "helper"
      }), " — если присутствует сообщение об ошибке, оно отображается вместо подсказки."]
    })]
  });
}
function Do(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(fs, {
      ...s
    })
  }) : fs(s);
}
const ko = {
  name: "FieldMessage",
  descriptions: {
    fieldMessage: {
      en: bo,
      ru: vo
    },
    "slot.helper": {
      en: Mo,
      ru: wo
    },
    "slot.validation": {
      en: Co,
      ru: Do
    }
  }
};
function ys(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Icon State Management"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "icon"
      }), ", ", e.jsx(n.code, {
        children: "iconActive"
      }), ", and ", e.jsx(n.code, {
        children: "active"
      }), " properties control the display of the icon based on its state. This allows for the creation of dynamic and interactive elements."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "icon"
          })
        }), " — The main icon displayed by default."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "iconActive"
          })
        }), " — The icon that is displayed when the component is in an active state (", e.jsx(n.code, {
          children: "active"
        }), " = ", e.jsx(n.code, {
          children: "true"
        }), ")."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "active"
          })
        }), " — A boolean property that toggles the component's state between normal and active."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Description"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "icon"
        }), " property is essential for displaying the icon."]
      }), `
`, e.jsxs(n.li, {
        children: ["If ", e.jsx(n.code, {
          children: "iconActive"
        }), " is not provided, there will be no visual change when the ", e.jsx(n.code, {
          children: "active"
        }), " state changes."]
      }), `
`, e.jsxs(n.li, {
        children: ["When ", e.jsx(n.code, {
          children: "active"
        }), " is set to ", e.jsx(n.code, {
          children: "true"
        }), ", the component will attempt to display the icon specified in ", e.jsx(n.code, {
          children: "iconActive"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "active"
        }), " property can be used to create toggles, indicators, and other interactive elements."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use ", e.jsx(n.code, {
          children: "iconActive"
        }), " to provide visual feedback upon user interaction (e.g., on click or selection)."]
      }), `
`, e.jsxs(n.li, {
        children: ["Ensure that ", e.jsx(n.code, {
          children: "icon"
        }), " and ", e.jsx(n.code, {
          children: "iconActive"
        }), " are visually distinct enough for the user to easily identify the state change."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage Example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Normal icon -->
<Icon icon="home" />

<!-- Active icon -->
<!-- \`favorite\` will be displayed because active=true -->
<Icon icon="favorite_border" iconActive="favorite" :active="true" />

<!-- Dynamic state toggle -->
<template>
  <Icon
    icon="visibility"
    iconActive="visibility_off"
    :active="isVisible"
    @click="isVisible = !isVisible"
  />
</template>
`
      })
    })]
  });
}
function _o(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ys, {
      ...s
    })
  }) : ys(s);
}
function bs(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление состоянием иконки"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "icon"
      }), ", ", e.jsx(n.code, {
        children: "iconActive"
      }), " и ", e.jsx(n.code, {
        children: "active"
      }), " отвечают за управление отображением иконки в зависимости от её состояния. Это позволяет создавать динамичные и интерактивные элементы."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "icon"
          })
        }), " — Основная иконка, отображаемая по умолчанию."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "iconActive"
          })
        }), " — Иконка, которая отображается, когда компонент находится в активном состоянии (", e.jsx(n.code, {
          children: "active"
        }), " = ", e.jsx(n.code, {
          children: "true"
        }), ")."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "active"
          })
        }), " — Булево свойство, которое переключает состояние компонента между обычным и активным."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Описание"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "icon"
        }), " является основным и обязательным для отображения иконки."]
      }), `
`, e.jsxs(n.li, {
        children: ["Если ", e.jsx(n.code, {
          children: "iconActive"
        }), " не задано, то при изменении состояния ", e.jsx(n.code, {
          children: "active"
        }), " визуально ничего не изменится."]
      }), `
`, e.jsxs(n.li, {
        children: ["Когда ", e.jsx(n.code, {
          children: "active"
        }), " установлено в ", e.jsx(n.code, {
          children: "true"
        }), ", компонент будет пытаться отобразить иконку, указанную в ", e.jsx(n.code, {
          children: "iconActive"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "active"
        }), " можно использовать для создания переключателей, индикаторов и других интерактивных элементов."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Используйте ", e.jsx(n.code, {
          children: "iconActive"
        }), " для обеспечения визуальной обратной связи при взаимодействии с пользователем (например, при нажатии или выборе)."]
      }), `
`, e.jsxs(n.li, {
        children: ["Убедитесь, что ", e.jsx(n.code, {
          children: "icon"
        }), " и ", e.jsx(n.code, {
          children: "iconActive"
        }), " достаточно различны визуально, чтобы пользователь мог легко определить изменение состояния."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Обычная иконка -->
<Icon icon="home" />

<!-- Активная иконка -->
<!-- Отобразится \`favorite\`, так как active=true -->
<Icon icon="favorite_border" iconActive="favorite" :active="true" />

<!-- Динамическое переключение состояния -->
<template>
  <Icon
    icon="visibility"
    iconActive="visibility_off"
    :active="isVisible"
    @click="isVisible = !isVisible"
  />
</template>
`
      })
    })]
  });
}
function Xo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(bs, {
      ...s
    })
  }) : bs(s);
}
function vs(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "isActive"
      })
    }), `
`, e.jsx(n.p, {
      children: "Computed property that determines whether the additional icon is active."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `readonly isActive: ComputedRef<boolean>
`
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Returns ", e.jsx(n.code, {
        children: "true"
      }), " only when both conditions are met:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "active"
        }), " property is set to ", e.jsx(n.code, {
          children: "true"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "iconActive"
        }), " property is defined (not empty)"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "This property is used internally by the component to control the display of primary and additional icons."
    })]
  });
}
function $o(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(vs, {
      ...s
    })
  }) : vs(s);
}
function Ms(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "isActive"
      })
    }), `
`, e.jsx(n.p, {
      children: "Вычисляемое свойство, которое определяет, активна ли дополнительная иконка."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `readonly isActive: ComputedRef<boolean>
`
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Возвращает ", e.jsx(n.code, {
        children: "true"
      }), " только когда выполняются оба условия:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "active"
        }), " установлено в ", e.jsx(n.code, {
          children: "true"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "iconActive"
        }), " задано (не пустое)"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Это свойство используется внутри компонента для управления отображением основной и дополнительной иконок."
    })]
  });
}
function Lo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ms, {
      ...s
    })
  }) : Ms(s);
}
const Fo = {
  name: "Icon",
  descriptions: {
    icon: {
      en: _o,
      ru: Xo
    },
    "expose.isActive": {
      en: $o,
      ru: Lo
    }
  }
};
function ws(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Property value"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "value"
      }), " property is responsible for the main content. It is a universal property that supports multiple types of values, making it as flexible as possible for various use cases."]
    }), `
`, e.jsx(n.h3, {
      children: "Supported value types"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Icon name"
        }), " — The name of a built-in or custom icon (if supported by the system)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "String (URL)"
        }), " — A direct link to an image file (e.g., PNG, JPG, SVG, GIF, WebP, etc.)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "File object"
        }), " — A JavaScript ", e.jsx(n.code, {
          children: "File"
        }), " object, for example, obtained from ", e.jsx(n.code, {
          children: '<input type="file">'
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "PDF link"
        }), " — A direct link to a PDF file (the PDF document itself will be displayed inside)."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Description"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "value"
        }), " property is ", e.jsx(n.strong, {
          children: "optional"
        }), ". If not set, nothing will be displayed."]
      }), `
`, e.jsxs(n.li, {
        children: ["When a ", e.jsx(n.code, {
          children: "File"
        }), " object is passed, the component will try to read and display the image or file preview."]
      }), `
`, e.jsx(n.li, {
        children: "If a PDF link is provided, the PDF document itself will be displayed inside (for example, with page navigation)."
      }), `
`, e.jsx(n.li, {
        children: "If an icon name is provided, the corresponding icon will be displayed."
      }), `
`, e.jsx(n.li, {
        children: "The property is reactive and can be updated dynamically."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "For the best performance, use optimized image formats (WebP, SVG, etc.)."
      }), `
`, e.jsx(n.li, {
        children: "Always validate the file type when accepting user uploads."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Icon by name -->
<Image value="icon-user" />

<!-- Image by URL -->
<Image value="https://example.com/image.png" />

<!-- Image from a File object -->
<input type="file" @change="onFileChange" />
<Image :value="selectedFile" />

<!-- PDF by link -->
<Image value="https://example.com/file.pdf" />
`
      })
    })]
  });
}
function So(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ws, {
      ...s
    })
  }) : ws(s);
}
function Cs(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Свойство value"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "value"
      }), ` отвечает за основной контент. Это универсальное свойство,
поддерживающее несколько типов значений, что делает его максимально гибким
для различных сценариев использования.`]
    }), `
`, e.jsx(n.h3, {
      children: "Поддерживаемые типы значений"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Имя иконки"
        }), " — Имя встроенной или пользовательской иконки (если поддерживается системой)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Строка (URL)"
        }), " — Прямая ссылка на файл изображения (например, PNG, JPG, SVG, GIF, WebP и др.)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Объект File"
        }), " — JavaScript-объект ", e.jsx(n.code, {
          children: "File"
        }), ", например, полученный из ", e.jsx(n.code, {
          children: '<input type="file">'
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Ссылка на PDF"
        }), " — Прямая ссылка на PDF-файл (будет отображён сам PDF-документ внутри)."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Описание"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "value"
        }), " ", e.jsx(n.strong, {
          children: "необязательное"
        }), ". Если оно не задано, изображение не будет отображено."]
      }), `
`, e.jsxs(n.li, {
        children: ["При передаче объекта ", e.jsx(n.code, {
          children: "File"
        }), " будет предпринята попытка прочитать и отобразить изображение или предпросмотр файла."]
      }), `
`, e.jsx(n.li, {
        children: "Если передана ссылка на PDF, будет отображён сам PDF-документ внутри (например, с возможностью просмотра страниц)."
      }), `
`, e.jsx(n.li, {
        children: "Если передано имя иконки, будет отображена соответствующая иконка."
      }), `
`, e.jsx(n.li, {
        children: "Свойство реактивно и может динамически обновляться."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Для лучшей производительности используйте оптимизированные форматы изображений (WebP, SVG и др.)."
      }), `
`, e.jsx(n.li, {
        children: "Всегда проверяйте тип файла при загрузке от пользователя."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Иконка по имени -->
<Image value="icon-user" />

<!-- Изображение по URL -->
<Image value="https://example.com/image.png" />

<!-- Изображение из объекта File -->
<input type="file" @change="onFileChange" />
<Image :value="selectedFile" />

<!-- PDF по ссылке -->
<Image value="https://example.com/file.pdf" />
`
      })
    })]
  });
}
function To(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Cs, {
      ...s
    })
  }) : Cs(s);
}
function Ds(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Image display control"
    }), `
`, e.jsx(n.h3, {
      children: "Description"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "size"
      }), ", ", e.jsx(n.code, {
        children: "coordinator"
      }), ", ", e.jsx(n.code, {
        children: "x"
      }), ", and ", e.jsx(n.code, {
        children: "y"
      }), " properties allow you to precisely control image scaling, visible area, and positioning within the container. Each parameter is responsible for its own aspect of display and can be used individually or together to achieve the desired visual effect."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "size"
        }), " — Defines the scaling and fill mode of the image inside the container. Possible values: ", e.jsx(n.code, {
          children: "auto"
        }), " (default), ", e.jsx(n.code, {
          children: "contain"
        }), " (fit completely), ", e.jsx(n.code, {
          children: "cover"
        }), " (fill the container, possibly cropping the image)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "coordinator"
        }), " — An array of four values that defines the visible area of the image: cropping from the left, top, right, and bottom, specified as percentages relative to the original image. Format: ", e.jsx(n.code, {
          children: "[left, top, right, bottom]"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "x"
        }), " — Horizontal offset (X axis) of the image relative to the container or selected area. Can be set in pixels, percentages, or other supported units."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "y"
        }), " — Vertical offset (Y axis) of the image relative to the container or selected area. Can be set in pixels, percentages, or other supported units."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use ", e.jsx(n.code, {
          children: "size"
        }), " to select the appropriate image display mode for your layout and task."]
      }), `
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "coordinator"
        }), " property is convenient for cropping or highlighting the desired part of the image."]
      }), `
`, e.jsxs(n.li, {
        children: ["Use the ", e.jsx(n.code, {
          children: "x"
        }), " and ", e.jsx(n.code, {
          children: "y"
        }), " parameters for precise image positioning within the container."]
      }), `
`, e.jsx(n.li, {
        children: "Combine parameters to achieve complex display effects."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Image with content mode -->
<Image value="image.png" size="contain" />

<!-- Cropping the image by coordinates -->
<Image value="image.png" :coordinator="[10, 20, 100, 80]" />

<!-- Shifting the image by X and Y -->
<Image value="image.png" x="15" y="-10" />
`
      })
    })]
  });
}
function Po(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ds, {
      ...s
    })
  }) : Ds(s);
}
function ks(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление отображением изображения"
    }), `
`, e.jsx(n.h3, {
      children: "Описание"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "size"
      }), ", ", e.jsx(n.code, {
        children: "coordinator"
      }), ", ", e.jsx(n.code, {
        children: "x"
      }), " и ", e.jsx(n.code, {
        children: "y"
      }), ` позволяют детально управлять масштабированием,
областью видимости и позиционированием изображения внутри контейнера.
Каждый параметр отвечает за свой аспект отображения и может использоваться как по отдельности,
так и совместно для достижения нужного визуального эффекта.`]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "size"
        }), ` — Определяет режим масштабирования и заполнения изображения внутри контейнера.
Возможные значения: `, e.jsx(n.code, {
          children: "auto"
        }), " (по умолчанию), ", e.jsx(n.code, {
          children: "contain"
        }), " (вписать полностью), ", e.jsx(n.code, {
          children: "cover"
        }), " (заполнить контейнер с возможной обрезкой)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "coordinator"
        }), " — Массив из четырёх значений, определяющий область изображения для отображения: обрезка слева, сверху, справа и снизу, задаётся в процентах относительно исходного изображения. Формат: ", e.jsx(n.code, {
          children: "[left, top, right, bottom]"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "x"
        }), " — Смещение изображения по горизонтали (ось X) относительно контейнера или выбранной области. Может быть задано в пикселях, процентах или других поддерживаемых единицах."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "y"
        }), " — Смещение изображения по вертикали (ось Y) относительно контейнера или выбранной области. Может быть задано в пикселях, процентах или других поддерживаемых единицах."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Используйте ", e.jsx(n.code, {
          children: "size"
        }), " для выбора подходящего режима отображения изображения в зависимости от задачи и макета."]
      }), `
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "coordinator"
        }), " удобно для реализации обрезки или выделения нужной части изображения."]
      }), `
`, e.jsxs(n.li, {
        children: ["Параметры ", e.jsx(n.code, {
          children: "x"
        }), " и ", e.jsx(n.code, {
          children: "y"
        }), " применяйте для точного позиционирования изображения внутри контейнера."]
      }), `
`, e.jsx(n.li, {
        children: "Комбинируйте параметры для достижения сложных эффектов отображения."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Изображение с режимом contain -->
<Image value="image.png" size="contain" />

<!-- Обрезка изображения по координатам -->
<Image value="image.png" :coordinator="[10, 20, 100, 80]" />

<!-- Смещение изображения по X и Y -->
<Image value="image.png" x="15" y="-10" />
`
      })
    })]
  });
}
function Ro(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ks, {
      ...s
    })
  }) : ks(s);
}
function _s(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Adaptive scaling and related properties"
    }), `
`, e.jsx(n.h3, {
      children: "Description"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "adaptive"
      }), " property enables automatic scaling and alignment of images. For correct operation, it is recommended to use it together with additional properties that allow you to precisely control the behavior and display of the image."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "adaptive"
        }), " — Enables adaptive scaling mode for the image relative to other elements with the same ", e.jsx(n.code, {
          children: "adaptive-group"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "object-width"
        }), " — The physical width of the object in the image (in millimeters, pixels, or other units). Used for scale calculation."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "object-height"
        }), " — The physical height of the object in the image. Can be used instead of or together with ", e.jsx(n.code, {
          children: "object-width"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "adaptive-group"
        }), " — Adaptivity group. Elements with the same value of this property will be scaled proportionally to each other."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "adaptive-always"
        }), " — If specified, scaling and calculations will always be performed, even if the element is hidden off-screen."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Always specify at least one of the parameters: ", e.jsx(n.code, {
          children: "object-width"
        }), " or ", e.jsx(n.code, {
          children: "object-height"
        }), " for correct adaptivity."]
      }), `
`, e.jsxs(n.li, {
        children: ["Use ", e.jsx(n.code, {
          children: "adaptive-group"
        }), " if you need to synchronize the scale of several images."]
      }), `
`, e.jsxs(n.li, {
        children: ["Use ", e.jsx(n.code, {
          children: "adaptive-always"
        }), " only when necessary to avoid unnecessary calculations."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Adaptive image with specified object width -->
<Image adaptive object-width="63.5" />

<!-- Adaptive image with height and group -->
<Image adaptive object-height="40" adaptive-group="products" />

<!-- Constant scaling regardless of visibility -->
<Image adaptive object-width="50" adaptive-always />
`
      })
    })]
  });
}
function Ao(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(_s, {
      ...s
    })
  }) : _s(s);
}
function Xs(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Адаптивное масштабирование и связанные параметры"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "adaptive"
      }), " включает режим автоматического масштабирования и выравнивания изображений. Для корректной работы рекомендуется использовать его совместно с дополнительными свойствами, которые позволяют точно управлять поведением и отображением изображения."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "adaptive"
        }), " — Включает режим адаптивного масштабирования изображения относительно других элементов с тем же ", e.jsx(n.code, {
          children: "adaptive-group"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "object-width"
        }), " — Физическая ширина объекта на изображении (в миллиметрах, пикселях или другой единице). Используется для расчёта масштаба."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "object-height"
        }), " — Физическая высота объекта на изображении. Может использоваться вместо или вместе с ", e.jsx(n.code, {
          children: "object-width"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "adaptive-group"
        }), " — Группа адаптивности. Элементы с одинаковым значением этого свойства будут масштабироваться пропорционально друг другу."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "adaptive-always"
        }), " — Если указано, масштабирование и расчёты будут выполняться всегда, даже если элемент скрыт за пределами экрана."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Описание"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "adaptive"
        }), " позволяет автоматически подбирать масштаб изображения, чтобы оно выглядело пропорционально с другими элементами в той же группе."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "object-width"
        }), " и ", e.jsx(n.code, {
          children: "object-height"
        }), " задают реальные размеры объекта на изображении, что необходимо для корректного расчёта масштаба."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "adaptive-group"
        }), " объединяет элементы в одну группу для совместного масштабирования."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "adaptive-always"
        }), " обеспечивает постоянные вычисления масштаба, даже если элемент временно скрыт."]
      }), `
`, e.jsx(n.li, {
        children: "Все свойства могут использоваться совместно для достижения нужного эффекта."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Всегда указывайте хотя бы один из параметров: ", e.jsx(n.code, {
          children: "object-width"
        }), " или ", e.jsx(n.code, {
          children: "object-height"
        }), " для корректной работы адаптивности."]
      }), `
`, e.jsxs(n.li, {
        children: ["Используйте ", e.jsx(n.code, {
          children: "adaptive-group"
        }), ", если требуется синхронизировать масштаб нескольких изображений."]
      }), `
`, e.jsxs(n.li, {
        children: ["Применяйте ", e.jsx(n.code, {
          children: "adaptive-always"
        }), " только при необходимости, чтобы избежать лишних вычислений."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Адаптивное изображение с указанием ширины объекта -->
<Image adaptive object-width="63.5" />

<!-- Адаптивное изображение с высотой и группой -->
<Image adaptive object-height="40" adaptive-group="products" />

<!-- Постоянное масштабирование вне зависимости от видимости -->
<Image adaptive object-width="50" adaptive-always />
`
      })
    })]
  });
}
function No(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Xs, {
      ...s
    })
  }) : Xs(s);
}
function $s(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "load"
      })
    }), `
`, e.jsxs(n.p, {
      children: [`Triggered after the image is loaded.
The handler receives an object `, e.jsx(n.code, {
        children: "ImageEventData"
      }), " with image data and source type."]
    })]
  });
}
function Eo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx($s, {
      ...s
    })
  }) : $s(s);
}
function Ls(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "load"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает после загрузки изображения."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onLoad (image: ImageEventData) {
  // обработка загруженного изображения
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "image"
        }), " — ", e.jsx(n.code, {
          children: "ImageEventData"
        }), " — данные изображения и тип источника"]
      }), `
`]
    })]
  });
}
function Io(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ls, {
      ...s
    })
  }) : Ls(s);
}
function Fs(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "type"
      })
    }), `
`, e.jsx(n.p, {
      children: "Type of the uploaded image."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `enum ImageTypeValue {
  pdf = 'pdf',
  file = 'file',
  image = 'image',
  flag = 'flag',
  color = 'color',
  public = 'public',
  filled = 'filled',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'two-tone',
  material = 'material',
  icon = 'icon'
}
`
      })
    })]
  });
}
function Bo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Fs, {
      ...s
    })
  }) : Fs(s);
}
function Ss(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "type"
      })
    }), `
`, e.jsx(n.p, {
      children: "Тип загруженного изображения."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `enum ImageTypeValue {
  pdf = 'pdf',
  file = 'file',
  image = 'image',
  flag = 'flag',
  color = 'color',
  public = 'public',
  filled = 'filled',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'two-tone',
  material = 'material',
  icon = 'icon'
}
`
      })
    })]
  });
}
function Uo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ss, {
      ...s
    })
  }) : Ss(s);
}
function Ts(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "data"
      })
    }), `
`, e.jsx(n.p, {
      children: "Information about the uploaded image, including its type and source."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `export type ImageEventItem = ImageItem | string | undefined
export type ImageItem = {
  image: HTMLImageElement
  src: string
  width: number
  height: number
}
`
      })
    })]
  });
}
function Oo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ts, {
      ...s
    })
  }) : Ts(s);
}
function Ps(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "data"
      })
    }), `
`, e.jsx(n.p, {
      children: "Информация о загруженном изображении, включая его тип и источник."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `export type ImageEventItem = ImageItem | string | undefined
export type ImageItem = {
  image: HTMLImageElement
  src: string
  width: number
  height: number
}
`
      })
    })]
  });
}
function Wo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ps, {
      ...s
    })
  }) : Ps(s);
}
const Vo = {
  name: "Image",
  descriptions: {
    value: {
      en: So,
      ru: To
    },
    size: {
      en: Po,
      ru: Ro
    },
    adaptive: {
      en: Ao,
      ru: No
    },
    "event.load": {
      en: Eo,
      ru: Io
    },
    "expose.type": {
      en: Bo,
      ru: Uo
    },
    "expose.data": {
      en: Oo,
      ru: Wo
    }
  }
};
function Rs(s) {
  const n = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "The List component is a powerful interactive list with support for hierarchical data, keyboard navigation, and search functionality. It is designed to display structured data with navigation capabilities, item selection, and interaction through keyboard and mouse."
    }), `
`, e.jsx(n.h2, {
      children: "Core Features"
    }), `
`, e.jsx(n.p, {
      children: "List supports various item types: regular items, groups, menus, separators, and subtitles. The component automatically handles complex hierarchical structures and provides intuitive navigation between elements."
    }), `
`, e.jsx(n.h2, {
      children: "Keyboard Navigation"
    }), `
`, e.jsx(n.p, {
      children: "The component supports full keyboard navigation:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "↑/↓"
        }), " - navigate between items"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Enter/→"
        }), " - open groups/menus or select item"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "←"
        }), " - close groups/menus"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Type text"
        }), " - search through items"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Backspace"
        }), " - clear search"]
      }), `
`]
    }), `
`, e.jsx(n.h2, {
      children: "Search and Highlighting"
    }), `
`, e.jsx(n.p, {
      children: "Built-in search functionality allows finding items in real-time with automatic highlighting of matches. Search works across the entire data hierarchy, including nested groups and menus."
    }), `
`, e.jsx(n.h2, {
      children: "Performance"
    }), `
`, e.jsx(n.p, {
      children: "For working with large datasets, the component provides a lightweight rendering mode that automatically activates when the specified threshold of item count is exceeded, ensuring high performance without losing functionality."
    })]
  });
}
function qo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Rs, {
      ...s
    })
  }) : Rs(s);
}
function As(s) {
  const n = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "Компонент List представляет собой мощный интерактивный список с поддержкой иерархических данных, клавиатурной навигации и функциональности поиска. Он предназначен для отображения структурированных данных с возможностью навигации, выбора элементов и взаимодействия через клавиатуру и мышь."
    }), `
`, e.jsx(n.h2, {
      children: "Основные возможности"
    }), `
`, e.jsx(n.p, {
      children: "List поддерживает различные типы элементов: обычные элементы, группы, меню, разделители и подзаголовки. Компонент автоматически обрабатывает сложные иерархические структуры и предоставляет интуитивную навигацию между элементами."
    }), `
`, e.jsx(n.h2, {
      children: "Навигация с клавиатуры"
    }), `
`, e.jsx(n.p, {
      children: "Компонент поддерживает полную навигацию с клавиатуры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "↑/↓"
        }), " - перемещение между элементами"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Enter/→"
        }), " - открытие групп/меню или выбор элемента"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "←"
        }), " - закрытие групп/меню"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Ввод текста"
        }), " - поиск по элементам"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Backspace"
        }), " - очистка поиска"]
      }), `
`]
    }), `
`, e.jsx(n.h2, {
      children: "Поиск и выделение"
    }), `
`, e.jsx(n.p, {
      children: "Встроенная функциональность поиска позволяет находить элементы в реальном времени с автоматическим выделением совпадений. Поиск работает по всей иерархии данных, включая вложенные группы и меню."
    }), `
`, e.jsx(n.h2, {
      children: "Производительность"
    }), `
`, e.jsx(n.p, {
      children: "Для работы с большими наборами данных компонент предоставляет облегченный режим рендеринга, который автоматически активируется при превышении заданного порога количества элементов, обеспечивая высокую производительность без потери функциональности."
    })]
  });
}
function Ho(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(As, {
      ...s
    })
  }) : As(s);
}
function Ns(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Lightweight list mode"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "lite"
      }), " and ", e.jsx(n.code, {
        children: "liteThreshold"
      }), " properties control the simplified (lightweight) rendering mode of the list."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "lite"
        }), " — Enables the lightweight rendering mode"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "liteThreshold"
        }), " — Item count threshold that is applied when ", e.jsx(n.code, {
          children: "lite"
        }), " is enabled"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Property relationship"
    }), `
`, e.jsx(n.p, {
      children: "The properties work together to decide when the simplified rendering should be applied:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["If ", e.jsx(n.code, {
          children: "lite = false"
        }), " (or not set), the list always renders in full mode and ", e.jsx(n.code, {
          children: "liteThreshold"
        }), " is ignored"]
      }), `
`, e.jsxs(n.li, {
        children: ["If ", e.jsx(n.code, {
          children: "lite = true"
        }), ", the component compares the total item count with ", e.jsx(n.code, {
          children: "liteThreshold"
        }), `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: ["When ", e.jsx(n.code, {
              children: "count <= liteThreshold"
            }), ", full mode is used (no simplification)"]
          }), `
`, e.jsxs(n.li, {
            children: ["When ", e.jsx(n.code, {
              children: "count > liteThreshold"
            }), ", lightweight mode turns on to reduce visual complexity and speed up rendering"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "This approach helps avoid unnecessary load with large datasets while keeping the familiar full rendering for short lists."
    })]
  });
}
function zo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ns, {
      ...s
    })
  }) : Ns(s);
}
function Es(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Облегчённый режим списка"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "lite"
      }), " и ", e.jsx(n.code, {
        children: "liteThreshold"
      }), " предназначены для управления облегчённым (упрощённым) отображением списка."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "lite"
        }), " — Включает облегчённый режим отображения"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "liteThreshold"
        }), " — Порог количества элементов, при превышении которого активируется упрощённый режим (когда ", e.jsx(n.code, {
          children: "lite"
        }), " включён)"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e.jsx(n.p, {
      children: "Свойства работают совместно и определяют, когда применять упрощённое отображение:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Если ", e.jsx(n.code, {
          children: "lite = false"
        }), " (или не задан), список всегда рендерится в полном режиме, а ", e.jsx(n.code, {
          children: "liteThreshold"
        }), " игнорируется"]
      }), `
`, e.jsxs(n.li, {
        children: ["Если ", e.jsx(n.code, {
          children: "lite = true"
        }), ", компонент сравнивает общее число элементов с ", e.jsx(n.code, {
          children: "liteThreshold"
        }), `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: ["При ", e.jsx(n.code, {
              children: "count <= liteThreshold"
            }), " используется полный режим (упрощение не требуется)"]
          }), `
`, e.jsxs(n.li, {
            children: ["При ", e.jsx(n.code, {
              children: "count > liteThreshold"
            }), " включается облегчённый режим для снижения визуальной сложности и ускорения рендера"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Такой подход предотвращает излишнюю нагрузку при больших объёмах данных и сохраняет привычное полное отображение для коротких списков."
    })]
  });
}
function Yo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Es, {
      ...s
    })
  }) : Es(s);
}
function Is(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "close"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event fired when the list requests closing of the active context (menu/group/window)."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onClose (): void {
  // handle list close
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "The event does not pass any parameters."
    })]
  });
}
function Go(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Is, {
      ...s
    })
  }) : Is(s);
}
function Bs(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "close"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при запросе закрытия активного контекста списка (меню/группы/окна)."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onClose (): void {
  // обработать закрытие списка
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие не передаёт параметры."
    })]
  });
}
function Jo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Bs, {
      ...s
    })
  }) : Bs(s);
}
function Us(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "slot: html"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["List supports named slots for items with ", e.jsx(n.code, {
        children: "type: 'html'"
      }), ". The slot name must match the item's ", e.jsx(n.code, {
        children: "value"
      }), "."]
    }), `
`, e.jsx(n.p, {
      children: "Usage rules"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["The list item must have ", e.jsx(n.code, {
          children: "type: 'html'"
        }), " and a string ", e.jsx(n.code, {
          children: "value"
        }), " used as the slot key"]
      }), `
`, e.jsx(n.li, {
        children: "If a slot with the same name exists, its content replaces the item rendering"
      }), `
`, e.jsxs(n.li, {
        children: ["If no slot exists, the component renders raw HTML from the item's ", e.jsx(n.code, {
          children: "label"
        }), " via ", e.jsx(n.code, {
          children: "innerHTML"
        })]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<List
  :list="[
    { type: 'html', value: 'promoBlock', label: '<strong>Fallback HTML</strong>' },
    { label: 'Regular item', value: 'item1' }
  ]"
>
  <template #promoBlock>
    <div class="custom-promo">Custom slot content</div>
  </template>
</List>
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Notes"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "The slot receives no props; use static content or app state"
      }), `
`, e.jsxs(n.li, {
        children: ["Prefer slots for Vue-rendered content; use ", e.jsx(n.code, {
          children: "label"
        }), " with HTML only for simple, trusted markup"]
      }), `
`]
    })]
  });
}
function Ko(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Us, {
      ...s
    })
  }) : Us(s);
}
function Os(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "slot: html"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент List поддерживает именованные слоты для элементов с ", e.jsx(n.code, {
        children: "type: 'html'"
      }), ". Имя слота должно совпадать со значением поля ", e.jsx(n.code, {
        children: "value"
      }), " у элемента."]
    }), `
`, e.jsx(n.p, {
      children: "Правила использования"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Элемент списка должен иметь ", e.jsx(n.code, {
          children: "type: 'html'"
        }), " и строковое поле ", e.jsx(n.code, {
          children: "value"
        }), ", которое используется как ключ слота"]
      }), `
`, e.jsx(n.li, {
        children: "Если слот с таким именем существует, его содержимое заменяет рендеринг элемента"
      }), `
`, e.jsxs(n.li, {
        children: ["Если слота нет, компонент рендерит HTML из поля ", e.jsx(n.code, {
          children: "label"
        }), " через ", e.jsx(n.code, {
          children: "innerHTML"
        })]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Пример"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<List
  :list="[
    { type: 'html', value: 'promoBlock', label: '<strong>Запасной HTML</strong>' },
    { label: 'Обычный элемент', value: 'item1' }
  ]"
>
  <template #promoBlock>
    <div class="custom-promo">Пользовательский контент слота</div>
  </template>
</List>
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Заметки"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Слот не получает пропсы; используйте статический контент или состояние приложения"
      }), `
`, e.jsxs(n.li, {
        children: ["Предпочитайте слоты для Vue-контента; используйте ", e.jsx(n.code, {
          children: "label"
        }), " с HTML только для простого и доверенного разметки"]
      }), `
`]
    })]
  });
}
function Zo(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Os, {
      ...s
    })
  }) : Os(s);
}
const Qo = {
  name: "List",
  descriptions: {
    list: {
      en: qo,
      ru: Ho
    },
    lite: {
      en: zo,
      ru: Yo
    },
    "event.close": {
      en: Go,
      ru: Jo
    },
    "slot.html": {
      en: Ko,
      ru: Zo
    }
  }
};
function Ws(s) {
  const n = {
    p: "p",
    ...s.components
  };
  return e.jsx(n.p, {
    children: "The ListGroup component is an auxiliary component for the List component, designed to group and organize list items with a collapsible structure. It provides hierarchical content organization with expand/collapse functionality, supports nested groups, and integrates seamlessly with the List component ecosystem."
  });
}
function nd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ws, {
      ...s
    })
  }) : Ws(s);
}
function Vs(s) {
  const n = {
    p: "p",
    ...s.components
  };
  return e.jsx(n.p, {
    children: "Компонент ListGroup представляет собой вспомогательный компонент для компонента List, предназначенный для группировки и организации элементов списка со сворачиваемой структурой. Он обеспечивает иерархическую организацию контента с возможностью сворачивания/разворачивания групп, поддерживает вложенные группы и интегрируется с экосистемой компонентов List."
  });
}
function ed(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Vs, {
      ...s
    })
  }) : Vs(s);
}
function qs(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "head"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing the group header content with toggle functionality."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Contains the clickable header element that controls group expansion/collapse"
      }), `
`, e.jsxs(n.li, {
        children: ["Receives ", e.jsx(n.code, {
          children: "open"
        }), " parameter indicating current group state"]
      }), `
`, e.jsx(n.li, {
        children: "Typically, contains group title, icon, and toggle controls"
      }), `
`, e.jsx(n.li, {
        children: "Manages the visual state of the group header"
      }), `
`]
    })]
  });
}
function sd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(qs, {
      ...s
    })
  }) : qs(s);
}
function Hs(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "head"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения содержимого заголовка группы с функциональностью переключения."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Содержит кликабельный элемент заголовка, который управляет разворачиванием/сворачиванием группы"
      }), `
`, e.jsxs(n.li, {
        children: ["Получает параметр ", e.jsx(n.code, {
          children: "open"
        }), ", указывающий текущее состояние группы"]
      }), `
`, e.jsx(n.li, {
        children: "Обычно содержит название группы, иконку и элементы управления переключением"
      }), `
`, e.jsx(n.li, {
        children: "Управляет визуальным состоянием заголовка группы"
      }), `
`]
    })]
  });
}
function id(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Hs, {
      ...s
    })
  }) : Hs(s);
}
function zs(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "list"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing the grouped list items content."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Contains all the list items that belong to this group"
      }), `
`, e.jsx(n.li, {
        children: "Content is shown/hidden based on group's open/closed state"
      }), `
`, e.jsx(n.li, {
        children: "Typically, contains ListItem components or nested ListGroup components"
      }), `
`, e.jsx(n.li, {
        children: "Supports hierarchical content organization with unlimited nesting levels"
      }), `
`]
    })]
  });
}
function td(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(zs, {
      ...s
    })
  }) : zs(s);
}
function Ys(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "list"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения содержимого сгруппированных элементов списка."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Содержит все элементы списка, принадлежащие данной группе"
      }), `
`, e.jsx(n.li, {
        children: "Содержимое показывается/скрывается в зависимости от открытого/закрытого состояния группы"
      }), `
`, e.jsx(n.li, {
        children: "Обычно содержит компоненты ListItem или вложенные компоненты ListGroup"
      }), `
`, e.jsx(n.li, {
        children: "Поддерживает иерархическую организацию контента с неограниченными уровнями вложенности"
      }), `
`]
    })]
  });
}
function rd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ys, {
      ...s
    })
  }) : Ys(s);
}
const cd = {
  name: "ListGroup",
  descriptions: {
    listGroup: {
      en: nd,
      ru: ed
    },
    "slot.head": {
      en: sd,
      ru: id
    },
    "slot.list": {
      en: td,
      ru: rd
    }
  }
};
function Gs(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Description"
    }), `
`, e.jsx(n.p, {
      children: "Versatile list item component for displaying structured content with labels, descriptions, and additional elements. ListItem provides consistent representation of elements in lists, menus, and navigation structures."
    }), `
`, e.jsx(n.h3, {
      children: "Key Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Multiple content areas: label, description, prefix, suffix, caption"
      }), `
`, e.jsx(n.li, {
        children: "Icon support with flexible positioning and alignment"
      }), `
`, e.jsx(n.li, {
        children: "Badge integration for status indicators"
      }), `
`, e.jsx(n.li, {
        children: "Interactive states: focus, selected, disabled, readonly"
      }), `
`, e.jsx(n.li, {
        children: "Progress and skeleton loading states"
      }), `
`, e.jsx(n.li, {
        children: "Ripple effect for enhanced user feedback"
      }), `
`, e.jsx(n.li, {
        children: "Flexible tag options: button, link, div, span"
      }), `
`, e.jsx(n.li, {
        children: "Built-in accessibility support"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsx(n.p, {
      children: "Use ListItem to create list elements, menu items, settings, and other interface elements that require structured information display. Particularly effective in mobile interfaces and lists with multiple selection."
    })]
  });
}
function ld(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Gs, {
      ...s
    })
  }) : Gs(s);
}
function Js(s) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Описание"
    }), `
`, e.jsx(n.p, {
      children: "Универсальный компонент элемента списка для отображения структурированного контента с метками, описаниями и дополнительными элементами. ListItem обеспечивает единообразное представление элементов в списках, меню и навигационных структурах."
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Множественные области контента: метка, описание, префикс, суффикс, заголовок"
      }), `
`, e.jsx(n.li, {
        children: "Поддержка иконок с гибким позиционированием и выравниванием"
      }), `
`, e.jsx(n.li, {
        children: "Интеграция значков для индикаторов статуса"
      }), `
`, e.jsx(n.li, {
        children: "Интерактивные состояния: фокус, выбранный, отключенный, только для чтения"
      }), `
`, e.jsx(n.li, {
        children: "Состояния загрузки с прогрессом и скелетоном"
      }), `
`, e.jsx(n.li, {
        children: "Эффект пульсации для улучшенной обратной связи"
      }), `
`, e.jsx(n.li, {
        children: "Гибкие варианты тегов: кнопка, ссылка, div, span"
      }), `
`, e.jsx(n.li, {
        children: "Встроенная поддержка доступности"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsx(n.p, {
      children: "Используйте ListItem для создания элементов списков, пунктов меню, настроек и других интерфейсных элементов, где требуется структурированное отображение информации. Особенно эффективен в мобильных интерфейсах и списках с множественным выбором."
    })]
  });
}
function od(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Js, {
      ...s
    })
  }) : Js(s);
}
function Ks(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "fill"
      })
    }), `
`, e.jsx(n.p, {
      children: "Property for setting a specific fill color of the list item element."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Accepts color values in any standard CSS format"
      }), `
`, e.jsxs(n.li, {
        children: ["Supports hex colors: ", e.jsx(n.code, {
          children: "#FF0000"
        }), ", ", e.jsx(n.code, {
          children: "#ffffff"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Supports RGB: ", e.jsx(n.code, {
          children: "rgb(255, 0, 0)"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Supports RGBA: ", e.jsx(n.code, {
          children: "rgba(255, 0, 0, 0.5)"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Supports named colors: ", e.jsx(n.code, {
          children: "red"
        }), ", ", e.jsx(n.code, {
          children: "blue"
        }), ", ", e.jsx(n.code, {
          children: "transparent"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Provides precise control over component background color"
      }), `
`]
    })]
  });
}
function dd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ks, {
      ...s
    })
  }) : Ks(s);
}
function Zs(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "fill"
      })
    }), `
`, e.jsx(n.p, {
      children: "Свойство для настройки конкретного цвета заливки элемента списка."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Принимает значения цветов в любом стандартном CSS формате"
      }), `
`, e.jsxs(n.li, {
        children: ["Поддерживает hex цвета: ", e.jsx(n.code, {
          children: "#FF0000"
        }), ", ", e.jsx(n.code, {
          children: "#ffffff"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Поддерживает RGB: ", e.jsx(n.code, {
          children: "rgb(255, 0, 0)"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Поддерживает RGBA: ", e.jsx(n.code, {
          children: "rgba(255, 0, 0, 0.5)"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Поддерживает именованные цвета: ", e.jsx(n.code, {
          children: "red"
        }), ", ", e.jsx(n.code, {
          children: "blue"
        }), ", ", e.jsx(n.code, {
          children: "transparent"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Обеспечивает точный контроль над цветом фона компонента"
      }), `
`]
    })]
  });
}
function hd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Zs, {
      ...s
    })
  }) : Zs(s);
}
function Qs(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "body"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing additional content at the bottom of the list item."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Adds information or controls below the main content"
      }), `
`, e.jsx(n.li, {
        children: "Does not affect the main structure of the list item"
      }), `
`, e.jsx(n.li, {
        children: "Suitable for metadata, secondary actions, or details"
      }), `
`]
    })]
  });
}
function ad(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Qs, {
      ...s
    })
  }) : Qs(s);
}
function ni(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "body"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения дополнительного контента в нижней части элемента списка."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Добавляет информацию или элементы управления под основным содержимым"
      }), `
`, e.jsx(n.li, {
        children: "Не влияет на основную структуру элемента списка"
      }), `
`, e.jsx(n.li, {
        children: "Подходит для метаданных, вторичных действий или деталей"
      }), `
`]
    })]
  });
}
function xd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ni, {
      ...s
    })
  }) : ni(s);
}
function ei(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "trailing"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for placing control elements or indicators at the end of the list item."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Adds interactive elements on the right (switches, buttons, icons)"
      }), `
`, e.jsx(n.li, {
        children: "Suitable for actions or status display"
      }), `
`, e.jsx(n.li, {
        children: "Content is aligned to the right edge"
      }), `
`]
    })]
  });
}
function jd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ei, {
      ...s
    })
  }) : ei(s);
}
function si(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "trailing"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для размещения элементов управления или индикаторов в конце элемента списка."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Добавляет интерактивные элементы справа (переключатели, кнопки, иконки)"
      }), `
`, e.jsx(n.li, {
        children: "Подходит для действий или отображения статуса"
      }), `
`, e.jsx(n.li, {
        children: "Контент выравнивается по правому краю"
      }), `
`]
    })]
  });
}
function ud(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(si, {
      ...s
    })
  }) : si(s);
}
const pd = {
  name: "ListItem",
  descriptions: {
    basic: {
      en: ld,
      ru: od
    },
    fill: {
      en: dd,
      ru: hd
    },
    "slot.body": {
      en: ad,
      ru: xd
    },
    "slot.trailing": {
      en: jd,
      ru: ud
    }
  }
};
function ii(s) {
  const n = {
    p: "p",
    ...s.components
  };
  return e.jsx(n.p, {
    children: "The ListMenu component is an auxiliary component for the List component, designed to create nested menus and organize navigation elements with expandable structure. It provides hierarchical menu organization with open/close submenu functionality, supports nested menu levels, and integrates seamlessly with the List component ecosystem."
  });
}
function md(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ii, {
      ...s
    })
  }) : ii(s);
}
function ti(s) {
  const n = {
    p: "p",
    ...s.components
  };
  return e.jsx(n.p, {
    children: "Компонент ListMenu представляет собой вспомогательный компонент для компонента List, предназначенный для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой. Он обеспечивает иерархическую организацию меню с возможностью открытия/закрытия подменю, поддерживает вложенные уровни меню и интегрируется с экосистемой компонентов List."
  });
}
function gd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ti, {
      ...s
    })
  }) : ti(s);
}
const fd = {
  name: "ListMenu",
  descriptions: {
    listMenu: {
      en: md,
      ru: gd
    }
  }
};
function ri(s) {
  const n = {
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "The Mask component provides structured data input with real-time automatic formatting. Allows creating convenient fields for phones, dates, bank cards and other formatted data."
    }), `
`, e.jsx(n.h3, {
      children: "Key features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Automatic formatting"
        }), ": Adds separators and symbols during typing"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Flexible templates"
        }), ": Support for single and multiple masks with automatic selection"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Error prevention"
        }), ": Restricts input to only allowed characters"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Validation integration"
        }), ": Works together with the data validation system"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Data type support"
        }), ": Built-in presets for numbers, currencies and dates"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsx(n.p, {
      children: "Use the component to create input fields with a defined structure: phone numbers, bank cards, dates, postal codes and any other data requiring a specific format."
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsx(n.p, {
      children: "Keep templates short and clear for the user. When supporting multiple formats, use an array of masks — the component will automatically select the most suitable template as the user types."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Define a pattern with special characters for input groups"
      }), `
`, e.jsx(n.li, {
        children: "Literals are auto-inserted during typing"
      }), `
`, e.jsx(n.li, {
        children: "Multiple patterns can be provided; the best match is selected dynamically"
      }), `
`, e.jsx(n.li, {
        children: "Works with validation, number/currency formats, and date/time helpers"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Tip: keep patterns short and explicit to improve usability."
    })]
  });
}
function yd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ri, {
      ...s
    })
  }) : ri(s);
}
function ci(s) {
  const n = {
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "Компонент Mask обеспечивает структурированный ввод данных с автоматическим форматированием в реальном времени. Позволяет создавать удобные поля для телефонов, дат, банковских карт и других форматированных данных."
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Автоматическое форматирование"
        }), ": Добавляет разделители и символы во время набора"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гибкие шаблоны"
        }), ": Поддержка одиночных и множественных масок с автоматическим выбором"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Предотвращение ошибок"
        }), ": Ограничивает ввод только допустимыми символами"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Интеграция с валидацией"
        }), ": Работает совместно с системой проверки данных"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Поддержка типов данных"
        }), ": Встроенные пресеты для чисел, валют и дат"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsx(n.p, {
      children: "Используйте компонент для создания полей ввода с заданной структурой: номера телефонов, банковские карты, даты, почтовые индексы и любые другие данные, требующие определённого формата."
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsx(n.p, {
      children: "Держите шаблоны короткими и понятными для пользователя. При поддержке нескольких форматов используйте массив масок — компонент автоматически выберет наиболее подходящий шаблон по мере ввода."
    })]
  });
}
function bd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ci, {
      ...s
    })
  }) : ci(s);
}
function li(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Date and time types"
    }), `
`, e.jsx(n.p, {
      children: "Date types in Mask provide automatic formatting and validation for date and time input with localization support."
    }), `
`, e.jsx(n.h3, {
      children: "Available types"
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Full formats:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "date"
        }), " — Full date (day-month-year)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "datetime"
        }), " — Date and time (day-month-year hours:minutes)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "full"
        }), " — Full date and time with seconds"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Time components:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "time"
        }), " — Time (hours:minutes:seconds)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "hour-minute"
        }), " — Hours and minutes"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "hour"
        }), " — Hours only"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "minute"
        }), " — Minutes only"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "second"
        }), " — Seconds only"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Date components:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "year"
        }), " — Year only"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "year-month"
        }), " — Year and month"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "month"
        }), " — Month only"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "day"
        }), " — Day only"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "day-month"
        }), " — Day and month"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Automatic mask generation based on locale"
      }), `
`, e.jsx(n.li, {
        children: "Date correctness validation (leap years, days in month)"
      }), `
`, e.jsx(n.li, {
        children: "Support for various display formats"
      }), `
`, e.jsxs(n.li, {
        children: ["Integration with ", e.jsx(n.code, {
          children: "language"
        }), " for localization"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Full date (Russian format: DD.MM.YYYY) -->
<Mask type="date" language="ru" />

<!-- US date format (MM/DD/YYYY) -->
<Mask type="date" language="en-US" />

<!-- Date and time -->
<Mask type="datetime" language="en-US" />

<!-- Time only (24-hour format) -->
<Mask type="time" language="en-US" />

<!-- Hours and minutes -->
<Mask type="hour-minute" />

<!-- Year only (YYYY) -->
<Mask type="year" />

<!-- Year and month -->
<Mask type="year-month" language="en-US" />

<!-- Day and month -->
<Mask type="day-month" language="en-US" />

<!-- Full date and time with seconds -->
<Mask type="full" language="en-US" />
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Localization"
    }), `
`, e.jsx(n.p, {
      children: "Formats automatically adapt to locale:"
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Russian locale (ru):"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "date: DD.MM.YYYY"
      }), `
`, e.jsx(n.li, {
        children: "datetime: DD.MM.YYYY HH:MM"
      }), `
`, e.jsx(n.li, {
        children: "time: HH:MM:SS"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "US locale (en-US):"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "date: MM/DD/YYYY"
      }), `
`, e.jsx(n.li, {
        children: "datetime: MM/DD/YYYY HH:MM"
      }), `
`, e.jsx(n.li, {
        children: "time: HH:MM:SS"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "European locale (de):"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "date: DD.MM.YYYY"
      }), `
`, e.jsx(n.li, {
        children: "datetime: DD.MM.YYYY HH:MM"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Validation"
    }), `
`, e.jsx(n.p, {
      children: "Date types automatically validate:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Correctness of numeric values for day, month, year"
      }), `
`, e.jsx(n.li, {
        children: "Number of days in month (including February in leap years)"
      }), `
`, e.jsx(n.li, {
        children: "Value ranges (months 01-12, days 01-31, hours 00-23)"
      }), `
`, e.jsx(n.li, {
        children: "Time format (24-hour format)"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "date"
        }), " — birth date fields, deadlines"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "datetime"
        }), " — event timestamps, schedules"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "time"
        }), " — start/end times, duration"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "year"
        }), " — release year, validity period"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "day-month"
        }), " — birthdays without year, holidays"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "hour-minute"
        }), " — working hours, transport schedules"]
      }), `
`]
    })]
  });
}
function vd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(li, {
      ...s
    })
  }) : li(s);
}
function oi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Типы дат и времени"
    }), `
`, e.jsx(n.p, {
      children: "Типы дат в Mask обеспечивают автоматическое форматирование и валидацию для ввода даты и времени с учётом локализации."
    }), `
`, e.jsx(n.h3, {
      children: "Доступные типы"
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Полные форматы:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "date"
        }), " — Полная дата (день-месяц-год)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "datetime"
        }), " — Дата и время (день-месяц-год часы:минуты)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "full"
        }), " — Полная дата и время с секундами"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Компоненты времени:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "time"
        }), " — Время (часы:минуты:секунды)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "hour-minute"
        }), " — Часы и минуты"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "hour"
        }), " — Только часы"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "minute"
        }), " — Только минуты"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "second"
        }), " — Только секунды"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Компоненты даты:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "year"
        }), " — Только год"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "year-month"
        }), " — Год и месяц"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "month"
        }), " — Только месяц"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "day"
        }), " — Только день"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "day-month"
        }), " — День и месяц"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Автоматическая генерация маски на основе локали"
      }), `
`, e.jsx(n.li, {
        children: "Валидация корректности даты (високосные годы, количество дней в месяце)"
      }), `
`, e.jsx(n.li, {
        children: "Поддержка различных форматов отображения"
      }), `
`, e.jsxs(n.li, {
        children: ["Интеграция с ", e.jsx(n.code, {
          children: "language"
        }), " для локализации"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Полная дата (русский формат: ДД.ММ.ГГГГ) -->
<Mask type="date" language="ru" />

<!-- Американский формат даты (ММ/ДД/ГГГГ) -->
<Mask type="date" language="en-US" />

<!-- Дата и время -->
<Mask type="datetime" language="ru" />

<!-- Только время (24-часовой формат) -->
<Mask type="time" language="ru" />

<!-- Часы и минуты -->
<Mask type="hour-minute" />

<!-- Только год (ГГГГ) -->
<Mask type="year" />

<!-- Год и месяц -->
<Mask type="year-month" language="ru" />

<!-- День и месяц -->
<Mask type="day-month" language="ru" />

<!-- Полная дата и время с секундами -->
<Mask type="full" language="ru" />
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Локализация"
    }), `
`, e.jsx(n.p, {
      children: "Форматы автоматически адаптируются к локали:"
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Русская локаль (ru):"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "date: ДД.ММ.ГГГГ"
      }), `
`, e.jsx(n.li, {
        children: "datetime: ДД.ММ.ГГГГ ЧЧ:ММ"
      }), `
`, e.jsx(n.li, {
        children: "time: ЧЧ:ММ:СС"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Американская локаль (en-US):"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "date: ММ/ДД/ГГГГ"
      }), `
`, e.jsx(n.li, {
        children: "datetime: ММ/ДД/ГГГГ ЧЧ:ММ"
      }), `
`, e.jsx(n.li, {
        children: "time: ЧЧ:ММ:СС"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "Европейская локаль (de):"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "date: ДД.ММ.ГГГГ"
      }), `
`, e.jsx(n.li, {
        children: "datetime: ДД.ММ.ГГГГ ЧЧ:ММ"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Валидация"
    }), `
`, e.jsx(n.p, {
      children: "Типы дат автоматически проверяют:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Корректность числовых значений для дня, месяца, года"
      }), `
`, e.jsx(n.li, {
        children: "Количество дней в месяце (включая февраль в високосных годах)"
      }), `
`, e.jsx(n.li, {
        children: "Диапазоны значений (месяцы 01-12, дни 01-31, часы 00-23)"
      }), `
`, e.jsx(n.li, {
        children: "Формат времени (24-часовой формат)"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "date"
        }), " — поля выбора даты рождения, крайних сроков"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "datetime"
        }), " — временные метки событий, расписания"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "time"
        }), " — время начала/окончания, продолжительность"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "year"
        }), " — год выпуска, период действия"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "day-month"
        }), " — дни рождения без года, праздники"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "hour-minute"
        }), " — время работы, расписание транспорта"]
      }), `
`]
    })]
  });
}
function Md(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(oi, {
      ...s
    })
  }) : oi(s);
}
function di(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Cursor Behavior Control"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "groupSave"
      }), " property controls cursor behavior when navigating between different special character groups in the mask. When set to ", e.jsx(n.code, {
        children: "true"
      }), " (default), it enables intelligent navigation that improves user experience when working with complex masks."]
    }), `
`, e.jsx(n.h3, {
      children: "Navigation Mechanism"
    }), `
`, e.jsx(n.p, {
      children: "During mask navigation, the system checks:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Current cursor position"
      }), `
`, e.jsx(n.li, {
        children: "Type of special character at current position"
      }), `
`, e.jsx(n.li, {
        children: "Type of the next special character"
      }), `
`, e.jsx(n.li, {
        children: "If characters belong to different groups, special movement logic is applied"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage Examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `// Standard behavior (default)
<Mask
  :mask="'***-###-XXX'"
  :special="['*', '#', 'X']"
  :groupSave="true"
/>

// Disable smart navigation
<Mask
  :mask="'***-###-XXX'"
  :special="['*', '#', 'X']"
  :groupSave="false"
/>

// Complex mask with multiple groups
<Mask
  :mask="'AAA-111-BBB-222'"
  :special="['A', '1', 'B', '2']"
  :groupSave="true"
/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "When to Use"
    }), `
`, e.jsx(n.h4, {
      children: "groupSave: true (recommended)"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "For masks with multiple group types"
      }), `
`, e.jsx(n.li, {
        children: "When smooth navigation between groups is needed"
      }), `
`, e.jsx(n.li, {
        children: "In most user interface scenarios"
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "groupSave: false"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "For simple masks with single symbol type"
      }), `
`, e.jsx(n.li, {
        children: "When standard cursor behavior is required"
      }), `
`, e.jsx(n.li, {
        children: "In specific cases with custom navigation logic"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Behavior Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["With ", e.jsx(n.strong, {
          children: "groupSave: true"
        }), ', cursor "understands" boundaries between groups']
      }), `
`, e.jsx(n.li, {
        children: "Improves navigation in masks like phone numbers with area codes"
      }), `
`, e.jsx(n.li, {
        children: "Works only with rubber (non-fixed) groups"
      }), `
`, e.jsx(n.li, {
        children: "Doesn't affect data validation or formatting"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Application"
    }), `
`, e.jsx(n.p, {
      children: "Use this property to create more intuitive input interfaces, especially when the mask contains multiple logically separated data groups (country code, area code, number, etc.)."
    })]
  });
}
function wd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(di, {
      ...s
    })
  }) : di(s);
}
function hi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление поведением курсора"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "groupSave"
      }), " управляет поведением курсора при навигации между различными группами специальных символов в маске. При значении ", e.jsx(n.code, {
        children: "true"
      }), " (по умолчанию) включается интеллектуальная навигация, которая улучшает пользовательский опыт при работе со сложными масками."]
    }), `
`, e.jsx(n.h3, {
      children: "Механизм работы"
    }), `
`, e.jsx(n.p, {
      children: "При навигации по маске система проверяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Текущую позицию курсора"
      }), `
`, e.jsx(n.li, {
        children: "Тип специального символа в текущей позиции"
      }), `
`, e.jsx(n.li, {
        children: "Тип следующего специального символа"
      }), `
`, e.jsx(n.li, {
        children: "Если символы относятся к разным группам, применяется особая логика перемещения"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `// Стандартное поведение (по умолчанию)
<Mask
  :mask="'***-###-XXX'"
  :special="['*', '#', 'X']"
  :groupSave="true"
/>

// Отключение умной навигации
<Mask
  :mask="'***-###-XXX'"
  :special="['*', '#', 'X']"
  :groupSave="false"
/>

// Сложная маска с множественными группами
<Mask
  :mask="'AAA-111-BBB-222'"
  :special="['A', '1', 'B', '2']"
  :groupSave="true"
/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Когда использовать"
    }), `
`, e.jsx(n.h4, {
      children: "groupSave: true (рекомендуется)"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Для масок с несколькими типами групп"
      }), `
`, e.jsx(n.li, {
        children: "Когда нужна плавная навигация между группами"
      }), `
`, e.jsx(n.li, {
        children: "В большинстве пользовательских интерфейсов"
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "groupSave: false"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Для простых масок с одним типом символов"
      }), `
`, e.jsx(n.li, {
        children: "Когда требуется стандартное поведение курсора"
      }), `
`, e.jsx(n.li, {
        children: "В специфических случаях с кастомной логикой навигации"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности поведения"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["При ", e.jsx(n.strong, {
          children: "groupSave: true"
        }), ' курсор "понимает" границы между группами']
      }), `
`, e.jsx(n.li, {
        children: "Улучшает навигацию в масках типа телефонных номеров с кодами"
      }), `
`, e.jsx(n.li, {
        children: "Работает только с резиновыми (не фиксированными) группами"
      }), `
`, e.jsx(n.li, {
        children: "Не влияет на валидацию или форматирование данных"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsx(n.p, {
      children: "Используйте это свойство для создания более интуитивных интерфейсов ввода, особенно когда маска содержит несколько логически разделённых групп данных (код страны, код города, номер и т.д.)."
    })]
  });
}
function Cd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(hi, {
      ...s
    })
  }) : hi(s);
}
function ai(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Mask template"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "mask"
      }), " property defines a template for structured data input with real-time automatic formatting. It provides guided user input with format error prevention."]
    }), `
`, e.jsx(n.h3, {
      children: "Key features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Automatic formatting"
        }), ": Adds separators and literal characters during typing"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Multiple templates"
        }), ": Support for mask arrays with automatic selection of the most suitable one"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Special characters"
        }), ": Customizable input positions through the ", e.jsx(n.code, {
          children: "special"
        }), " property"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Error prevention"
        }), ": Restricts input to only allowed characters in corresponding positions"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Validation integration"
        }), ": Works together with the data validation system through ", e.jsx(n.code, {
          children: "pattern"
        }), " and ", e.jsx(n.code, {
          children: "check"
        })]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Value type"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-typescript",
        children: `type MaskList = string | string[]
`
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "string"
        }), " — single mask for fixed format"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "string[]"
        }), " — array of masks to support multiple formats"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Mask syntax"
    }), `
`, e.jsx(n.p, {
      children: "The mask template uses two types of characters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Special characters"
        }), " (default ", e.jsx(n.code, {
          children: "*"
        }), ") — denote positions for user input"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Literal characters"
        }), " — inserted automatically and cannot be changed by the user"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `// Phone number
mask: "+1 *** *** ****"

// Credit card
mask: "**** **** **** ****"

// Date format
mask: "**/**/****"

// Multiple phone formats
mask: [
  "+1 *** *** ****",      // +1 999 123 4567
  "*** *** ****"          // 999 123 4567
]

// Postal code
mask: "******"
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Automatic mask selection"
    }), `
`, e.jsx(n.p, {
      children: "When using an array of masks, the system automatically selects the most suitable template based on the entered data:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `mask: [
  "+1 *** *** ****",      // Selected when typing +1
  "1 *** *** ****",       // Selected when typing 1
  "*** *** ****"          // Fallback option
]
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Interaction with other properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "special"
        }), " — defines which characters are considered special and their behavior"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "pattern"
        }), " — sets validation patterns for special character groups"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "check"
        }), " — applies additional validation to the complete value after mask completion"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "type"
        }), " — for built-in types (", e.jsx(n.code, {
          children: "currency"
        }), ", ", e.jsx(n.code, {
          children: "number"
        }), ", ", e.jsx(n.code, {
          children: "date"
        }), ") automatically generates corresponding masks"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Use clear separators to improve readability (spaces, dashes, parentheses)"
      }), `
`, e.jsx(n.li, {
        children: "When supporting multiple formats, place more specific masks first in the array"
      }), `
`, e.jsxs(n.li, {
        children: ["Combine with validation through ", e.jsx(n.code, {
          children: "pattern"
        }), " and ", e.jsx(n.code, {
          children: "check"
        }), " for complete input control"]
      }), `
`, e.jsxs(n.li, {
        children: ["For complex cases, configure special characters through the ", e.jsx(n.code, {
          children: "special"
        }), " property"]
      }), `
`]
    })]
  });
}
function Dd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ai, {
      ...s
    })
  }) : ai(s);
}
function xi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Шаблон маски"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "mask"
      }), " определяет шаблон для структурированного ввода данных с автоматическим форматированием в реальном времени. Обеспечивает направленный пользовательский ввод с предотвращением ошибок формата."]
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Автоматическое форматирование"
        }), ": Добавляет разделители и литеральные символы во время набора"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Множественные шаблоны"
        }), ": Поддержка массива масок с автоматическим выбором наиболее подходящей"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Специальные символы"
        }), ": Настраиваемые позиции для ввода через свойство ", e.jsx(n.code, {
          children: "special"
        })]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Предотвращение ошибок"
        }), ": Ограничивает ввод только допустимыми символами в соответствующих позициях"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Интеграция валидации"
        }), ": Совместная работа с системой проверки данных через ", e.jsx(n.code, {
          children: "pattern"
        }), " и ", e.jsx(n.code, {
          children: "check"
        })]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Тип значения"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-typescript",
        children: `type MaskList = string | string[]
`
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "string"
        }), " — одиночная маска для фиксированного формата"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "string[]"
        }), " — массив масок для поддержки множественных форматов"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Синтаксис маски"
    }), `
`, e.jsx(n.p, {
      children: "В шаблоне маски используются два типа символов:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Специальные символы"
        }), " (по умолчанию ", e.jsx(n.code, {
          children: "*"
        }), ") — обозначают позиции для пользовательского ввода"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Литеральные символы"
        }), " — вставляются автоматически и не могут быть изменены пользователем"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `// Российский телефон
mask: "+7 *** *** ** **"

// Банковская карта
mask: "**** **** **** ****"

// Дата в российском формате
mask: "**.**.****"

// Множественные форматы телефонов
mask: [
  "+7 *** *** ** **",     // +7 999 123 45 67
  "8 *** *** ** **"       // 8 999 123 45 67
]

// Почтовый индекс
mask: "******"
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Автоматический выбор маски"
    }), `
`, e.jsx(n.p, {
      children: "При использовании массива масок система автоматически выбирает наиболее подходящий шаблон на основе введённых данных:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `mask: [
  "+7 *** *** ** **",     // Выберется при вводе +7
  "8 *** *** ** **",      // Выберется при вводе 8
  "*** *** ** **"         // Резервный вариант
]
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Взаимодействие с другими свойствами"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "special"
        }), " — определяет, какие символы считаются специальными и их поведение"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "pattern"
        }), " — задаёт паттерны валидации для групп специальных символов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "check"
        }), " — применяет дополнительную валидацию к полному значению после заполнения маски"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "type"
        }), " — для встроенных типов (", e.jsx(n.code, {
          children: "currency"
        }), ", ", e.jsx(n.code, {
          children: "number"
        }), ", ", e.jsx(n.code, {
          children: "date"
        }), ") автоматически генерирует соответствующие маски"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Используйте понятные разделители для улучшения читаемости (пробелы, дефисы, скобки)"
      }), `
`, e.jsx(n.li, {
        children: "При поддержке нескольких форматов располагайте более специфичные маски первыми в массиве"
      }), `
`, e.jsxs(n.li, {
        children: ["Комбинируйте с валидацией через ", e.jsx(n.code, {
          children: "pattern"
        }), " и ", e.jsx(n.code, {
          children: "check"
        }), " для полного контроля ввода"]
      }), `
`, e.jsxs(n.li, {
        children: ["Для сложных случаев настраивайте специальные символы через свойство ", e.jsx(n.code, {
          children: "special"
        })]
      }), `
`]
    })]
  });
}
function kd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(xi, {
      ...s
    })
  }) : xi(s);
}
function ji(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Global character pattern (match)"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "match"
      }), " property defines a global pattern for allowed characters during input. Applied when a group doesn't override this rule with its own pattern."]
    }), `
`, e.jsx(n.h3, {
      children: "Validation priority"
    }), `
`, e.jsxs(n.ol, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Local group pattern"
        }), " (", e.jsx(n.code, {
          children: "special[GROUP].match"
        }), ")"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Global pattern"
        }), " (", e.jsx(n.code, {
          children: "match"
        }), ")"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Default"
        }), " (", e.jsx(n.code, {
          children: "/[0-9]/"
        }), ")"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Value types"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type MaskMatchItem = RegExp | string

match: /[A-F0-9]/        // RegExp object
match: "[A-F0-9]"        // String (converted to RegExp)
match: "\\\\d"             // With escaping
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- HEX characters -->
<Mask :mask="'***-***'" match="[A-F0-9]" />

<!-- Letters only -->
<Mask :mask="'***-***'" match="[A-Za-z]" />

<!-- Combined with groups -->
<Mask
  :mask="'***-###'"
  :special="{ '*': {}, '#': { match: '[A-Za-z]' } }"
  match="\\\\d"
/>
`
      })
    })]
  });
}
function _d(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ji, {
      ...s
    })
  }) : ji(s);
}
function ui(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Глобальный паттерн символов (match)"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "match"
      }), " задаёт глобальный паттерн допустимых символов при вводе. Применяется, когда группа не переопределяет это правило собственным паттерном."]
    }), `
`, e.jsx(n.h3, {
      children: "Приоритет проверки"
    }), `
`, e.jsxs(n.ol, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Локальный паттерн группы"
        }), " (", e.jsx(n.code, {
          children: "special[ГРУППА].match"
        }), ")"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Глобальный паттерн"
        }), " (", e.jsx(n.code, {
          children: "match"
        }), ")"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "По умолчанию"
        }), " (", e.jsx(n.code, {
          children: "/[0-9]/"
        }), ")"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Типы значений"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type MaskMatchItem = RegExp | string

match: /[A-F0-9]/        // RegExp объект
match: "[A-F0-9]"        // Строка (конвертируется в RegExp)
match: "\\\\d"             // С экранированием
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Примеры"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- HEX-символы -->
<Mask :mask="'***-***'" match="[A-F0-9]" />

<!-- Только буквы -->
<Mask :mask="'***-***'" match="[A-Za-z]" />

<!-- Комбинирование с группами -->
<Mask
  :mask="'***-###'"
  :special="{ '*': {}, '#': { match: '[A-Za-z]' } }"
  match="\\\\d"
/>
`
      })
    })]
  });
}
function Xd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ui, {
      ...s
    })
  }) : ui(s);
}
function pi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Numeric mask types"
    }), `
`, e.jsx(n.p, {
      children: "Numeric types in Mask provide specialized formatting and validation for working with numbers, currencies, and financial data."
    }), `
`, e.jsx(n.h3, {
      children: "Available types"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number"
        }), " — Simple numeric mask with rubber structure"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number-format"
        }), " — Formatted numbers with thousand separators and localization"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "currency"
        }), " — Currency mask with automatic currency symbol"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "number:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Rubber mask, numeric character validation"
      }), `
`, e.jsxs(n.li, {
        children: ["Support for negative values and ", e.jsx(n.code, {
          children: "min"
        }), "/", e.jsx(n.code, {
          children: "max"
        }), " constraints"]
      }), `
`, e.jsxs(n.li, {
        children: ["Decimal places configuration via ", e.jsx(n.code, {
          children: "fraction"
        })]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "number-format:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Automatic thousand separators"
      }), `
`, e.jsxs(n.li, {
        children: ["Format localization (depends on ", e.jsx(n.code, {
          children: "language"
        }), ")"]
      }), `
`, e.jsx(n.li, {
        children: "Rubber structure for large numbers"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "currency:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Automatic currency symbol and localized separators"
      }), `
`, e.jsxs(n.li, {
        children: ["Option to hide currency symbol (", e.jsx(n.code, {
          children: "currencyHide"
        }), ")"]
      }), `
`, e.jsx(n.li, {
        children: "Support for various currencies (RUB, USD, EUR)"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Decimal places configuration (fraction)"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "fraction"
      }), " property controls the number of digits after the decimal point:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number"
        }), " — exact number of digits (e.g., ", e.jsx(n.code, {
          children: ':fraction="2"'
        }), ")"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "true"
        }), " — automatic detection based on user input"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "false/0"
        }), " — no decimal places"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Simple number -->
<Mask type="number" />

<!-- Number with constraints -->
<Mask type="number" :min="0" :max="100" :fraction="1" />

<!-- Formatted number (Russian format: 1 234,56) -->
<Mask type="number-format" language="ru" :fraction="2" />

<!-- Formatted number (US format: 1,234.56) -->
<Mask type="number-format" language="en-US" :fraction="2" />

<!-- Currency with symbol ($1,234.56) -->
<Mask type="currency" currency="USD" language="en-US" />

<!-- Currency without symbol (1,234.56) -->
<Mask type="currency" currency="USD" :currencyHide="true" />

<!-- No decimal places -->
<Mask type="number-format" :fraction="0" />

<!-- High precision -->
<Mask type="number" :fraction="4" />
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Localization"
    }), `
`, e.jsx(n.p, {
      children: "Formats automatically adapt to locale:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "ru"
        }), ": space + comma (1 234,56)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "en-US"
        }), ": comma + dot (1,234.56)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "de"
        }), ": dot + comma (1.234.567,89)"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Validation"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Character filtering (only numbers and separators)"
      }), `
`, e.jsxs(n.li, {
        children: ["Value range via ", e.jsx(n.code, {
          children: "min"
        }), "/", e.jsx(n.code, {
          children: "max"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Compliance with local standards"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number"
        }), " — simple numeric fields, percentages, coefficients"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number-format"
        }), " — large numbers, quantitative indicators"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "currency"
        }), " — monetary amounts, product prices"]
      }), `
`]
    })]
  });
}
function $d(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(pi, {
      ...s
    })
  }) : pi(s);
}
function mi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Числовые типы масок"
    }), `
`, e.jsx(n.p, {
      children: "Числовые типы в Mask обеспечивают специализированное форматирование и валидацию для работы с числами, валютами и финансовыми данными."
    }), `
`, e.jsx(n.h3, {
      children: "Доступные типы"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number"
        }), " — Простая числовая маска с резиновой структурой"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number-format"
        }), " — Форматированные числа с разделителями разрядов и локализацией"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "currency"
        }), " — Валютная маска с автоматическим символом валюты"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "number:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Резиновая маска, валидация числовых символов"
      }), `
`, e.jsxs(n.li, {
        children: ["Поддержка отрицательных значений и ограничений ", e.jsx(n.code, {
          children: "min"
        }), "/", e.jsx(n.code, {
          children: "max"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["Настройка дробной части через ", e.jsx(n.code, {
          children: "fraction"
        })]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "number-format:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Автоматические разделители тысяч"
      }), `
`, e.jsxs(n.li, {
        children: ["Локализация формата (зависит от ", e.jsx(n.code, {
          children: "language"
        }), ")"]
      }), `
`, e.jsx(n.li, {
        children: "Резиновая структура для больших чисел"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "currency:"
      })
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Автоматический символ валюты и локализованные разделители"
      }), `
`, e.jsxs(n.li, {
        children: ["Опция скрытия символа валюты (", e.jsx(n.code, {
          children: "currencyHide"
        }), ")"]
      }), `
`, e.jsx(n.li, {
        children: "Поддержка различных валют (RUB, USD, EUR)"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Настройка дробной части (fraction)"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "fraction"
      }), " управляет количеством знаков после запятой:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "число"
        }), " — точное количество знаков (например, ", e.jsx(n.code, {
          children: ':fraction="2"'
        }), ")"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "true"
        }), " — автоматическое определение по вводу пользователя"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "false/0"
        }), " — без дробной части"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Простое число -->
<Mask type="number" />

<!-- Число с ограничениями -->
<Mask type="number" :min="0" :max="100" :fraction="1" />

<!-- Форматированное число (русский формат: 1 234,56) -->
<Mask type="number-format" language="ru" :fraction="2" />

<!-- Форматированное число (американский формат: 1,234.56) -->
<Mask type="number-format" language="en-US" :fraction="2" />

<!-- Валюта с символом (1 234,56 ₽) -->
<Mask type="currency" currency="RUB" language="ru" />

<!-- Валюта без символа (1,234.56) -->
<Mask type="currency" currency="USD" :currencyHide="true" />

<!-- Без дробной части -->
<Mask type="number-format" :fraction="0" />

<!-- Высокая точность -->
<Mask type="number" :fraction="4" />
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Локализация"
    }), `
`, e.jsx(n.p, {
      children: "Форматы автоматически адаптируются к локали:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "ru"
        }), ": пробел + запятая (1 234,56)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "en-US"
        }), ": запятая + точка (1,234.56)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "de"
        }), ": точка + запятая (1.234.567,89)"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Валидация"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Фильтрация символов (только числа и разделители)"
      }), `
`, e.jsxs(n.li, {
        children: ["Диапазон значений через ", e.jsx(n.code, {
          children: "min"
        }), "/", e.jsx(n.code, {
          children: "max"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Соответствие локальным стандартам"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number"
        }), " — простые числовые поля, проценты, коэффициенты"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number-format"
        }), " — большие числа, количественные показатели"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "currency"
        }), " — денежные суммы, цены товаров"]
      }), `
`]
    })]
  });
}
function Ld(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(mi, {
      ...s
    })
  }) : mi(s);
}
function gi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Validation and patterns"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "check"
      }), " and ", e.jsx(n.code, {
        children: "pattern"
      }), " properties are designed to control input validation and define allowed characters in the mask."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "pattern"
        }), " — Defines validation patterns for individual mask groups, specifying allowed characters and rules per group"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "check"
        }), " — Global validation pattern applied after mask completion for additional input checking"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "FieldPatternItemOrFunction type"
    }), `
`, e.jsxs(n.p, {
      children: ["Both ", e.jsx(n.code, {
        children: "pattern"
      }), " and ", e.jsx(n.code, {
        children: "check"
      }), " parameters have the ", e.jsx(n.code, {
        children: "FieldPatternItemOrFunction"
      }), " type and accept the following values:"]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type FieldPatternItemOrFunction =
  | string                                    // RegExp string
  | Partial<HTMLInputElement>                 // Object with input attributes
  | ((item: FieldMasks) => FieldPatternItem)  // Pattern generator function

interface FieldMasks {
  group: string      // Mask group name
  value: string      // Current group value
  maxLength: number  // Maximum group length
  full: boolean      // Group is fully filled
  end: boolean       // End of input
  // ...other mask properties
}
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Usage differences"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: "Pattern"
      }), " works at the mask group level:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Applied in real-time during character input"
      }), `
`, e.jsx(n.li, {
        children: "Each mask group (defined by special characters) gets its own pattern"
      }), `
`, e.jsx(n.li, {
        children: "Invalid characters are rejected before appearing in the field"
      }), `
`, e.jsx(n.li, {
        children: "Different groups can have different validation rules"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: "Check"
      }), " works with the complete value:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Runs only after the mask is fully completed"
      }), `
`, e.jsx(n.li, {
        children: "Applied to the entire entered value"
      }), `
`, e.jsx(n.li, {
        children: "Provides an additional validation layer for complex business logic"
      }), `
`, e.jsx(n.li, {
        children: "Used for final correctness verification"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `// Pattern for groups: digits only in phone number
pattern: "\\\\d"

// Pattern with function for different groups
pattern: (maskData) => {
  if (maskData.group === 'month') return "[0-1]\\\\d"
  if (maskData.group === 'day') return "[0-3]\\\\d"
  return "\\\\d"
}

// Check for card number validation using Luhn algorithm
check: (maskData) => {
  const cardNumber = maskData.value.replace(/\\s/g, '')
  return isValidLuhn(cardNumber)
    ? { valid: true }
    : { valid: false, message: "Invalid card number" }
}

// Check with RegExp for format validation
check: "^\\\\+1\\\\d{10}$"
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Property interaction"
    }), `
`, e.jsx(n.p, {
      children: "The properties work sequentially to ensure quality validation:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "pattern"
        }), " filters input at the character and group level, preventing incorrect input"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "check"
        }), " performs final validation of the complete value after mask completion"]
      }), `
`, e.jsx(n.li, {
        children: "Both properties are optional and can be used independently or together"
      }), `
`, e.jsx(n.li, {
        children: "When used together, they provide multi-level protection against incorrect data"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "This approach allows creating flexible and reliable input fields with detailed validation control at all stages of user interaction."
    })]
  });
}
function Fd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(gi, {
      ...s
    })
  }) : gi(s);
}
function fi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Валидация и паттерны"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "check"
      }), " и ", e.jsx(n.code, {
        children: "pattern"
      }), " предназначены для управления валидацией ввода и определения допустимых символов в маске."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "pattern"
        }), " — Определяет паттерны валидации для отдельных групп маски, задавая допустимые символы и правила по группам"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "check"
        }), " — Глобальный паттерн валидации, применяемый после завершения маски для дополнительной проверки ввода"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Тип FieldPatternItemOrFunction"
    }), `
`, e.jsxs(n.p, {
      children: ["Оба параметра ", e.jsx(n.code, {
        children: "pattern"
      }), " и ", e.jsx(n.code, {
        children: "check"
      }), " имеют тип ", e.jsx(n.code, {
        children: "FieldPatternItemOrFunction"
      }), " и принимают следующие значения:"]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type FieldPatternItemOrFunction =
  | string                                    // RegExp строка
  | Partial<HTMLInputElement>                 // Объект с атрибутами input
  | ((item: FieldMasks) => FieldPatternItem)  // Функция-генератор паттерна

interface FieldMasks {
  group: string      // Название группы маски
  value: string      // Текущее значение группы
  maxLength: number  // Максимальная длина группы
  full: boolean      // Группа заполнена полностью
  end: boolean       // Конец ввода
  // ...другие свойства маски
}
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Различия в применении"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: "Pattern"
      }), " работает на уровне групп маски:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Применяется в реальном времени при вводе символов"
      }), `
`, e.jsx(n.li, {
        children: "Каждая группа маски (определённая спецсимволами) получает свой паттерн"
      }), `
`, e.jsx(n.li, {
        children: "Недопустимые символы отклоняются до появления в поле"
      }), `
`, e.jsx(n.li, {
        children: "Разные группы могут иметь разные правила валидации"
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: "Check"
      }), " работает с полным значением:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Запускается только после полного заполнения маски"
      }), `
`, e.jsx(n.li, {
        children: "Применяется ко всему введённому значению"
      }), `
`, e.jsx(n.li, {
        children: "Обеспечивает дополнительный слой валидации для сложной бизнес-логики"
      }), `
`, e.jsx(n.li, {
        children: "Используется для финальной проверки корректности данных"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `// Pattern для групп: только цифры в телефонном номере
pattern: "\\\\d"

// Pattern с функцией для разных групп
pattern: (maskData) => {
  if (maskData.group === 'month') return "[0-1]\\\\d"
  if (maskData.group === 'day') return "[0-3]\\\\d"
  return "\\\\d"
}

// Check для валидации номера карты алгоритмом Луна
check: (maskData) => {
  const cardNumber = maskData.value.replace(/\\s/g, '')
  return isValidLuhn(cardNumber)
    ? { valid: true }
    : { valid: false, message: "Неверный номер карты" }
}

// Check с RegExp для проверки формата
check: "^\\\\+1\\\\d{10}$"
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e.jsx(n.p, {
      children: "Свойства работают последовательно для обеспечения качественной валидации:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "pattern"
        }), " фильтрует ввод на уровне символов и групп, предотвращая некорректный ввод"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "check"
        }), " выполняет финальную валидацию полного значения по завершении заполнения маски"]
      }), `
`, e.jsx(n.li, {
        children: "Оба свойства опциональны и могут использоваться независимо или совместно"
      }), `
`, e.jsx(n.li, {
        children: "При совместном использовании обеспечивают многоуровневую защиту от некорректных данных"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Такой подход позволяет создавать гибкие и надёжные поля ввода с детальным контролем валидации на всех этапах взаимодействия с пользователем."
    })]
  });
}
function Sd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(fi, {
      ...s
    })
  }) : fi(s);
}
function yi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Special characters (special)"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "special"
      }), " property defines special characters for mask groups and their advanced settings."]
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.p, {
      children: ["Special characters in a mask denote places where users can input data. The ", e.jsx(n.code, {
        children: "special"
      }), " property allows configuring the behavior of these input groups with additional capabilities."]
    }), `
`, e.jsx(n.h3, {
      children: "Value types"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type MaskSpecialProp = string | string[] | MaskSpecialList

// Extended group configuration
interface MaskSpecialItem {
  defaultValue?: string           // Default value
  rubber?: boolean               // Rubber group (variable length)
  transitionChar?: string | string[]  // Transition characters
  minLength?: number             // Minimum length
  maxLength?: number             // Maximum length
  match?: RegExp | string        // Validation pattern
  pattern?: FieldPatternItemOrFunction  // Validation pattern
  view?: string                  // Display character
}
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Usage methods"
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "1. Simple string (single special character)"
      })
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: '*'           // Symbol * denotes input places
// Mask: "***-***" → groups: *, *, *, *, *, *
`
      })
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "2. Character array (multiple group types)"
      })
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: ['*', '#', 'A']
// * - any characters, # - digits, A - letters
// Mask: "A**-###" → different group types
`
      })
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "3. Object with extended settings"
      })
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': {
    pattern: '\\\\d',        // Digits only
    view: '_',             // Show _ as placeholder
    rubber: false          // Fixed length
  },
  '#': {
    pattern: '[A-Z]',      // Uppercase letters only
    defaultValue: 'X',     // Default value
    rubber: true,          // Variable length
    minLength: 1,
    maxLength: 5
  }
}
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Rubber groups"
    }), `
`, e.jsx(n.p, {
      children: "Rubber groups allow entering a variable number of characters:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': {
    rubber: true,
    minLength: 2,
    maxLength: 8,
    pattern: '\\\\d'
  }
}
// Mask: "***-***" can accept 2 to 8 digits in each group
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Default values"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  'Y': { defaultValue: '2024' },    // Default year
  'M': { defaultValue: '01' },      // Default month
  'D': { defaultValue: '01' }       // Default day
}
// Mask: "DD/MM/YYYY" → autofill: "01/01/2024"
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Transition characters"
    }), `
`, e.jsx(n.p, {
      children: "Define characters that automatically move the cursor to the next group:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': {
    transitionChar: [' ', '-'],     // Space or dash moves forward
    pattern: '\\\\d'
  }
}
// When typing "123 " cursor automatically moves to next group
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Display (view)"
    }), `
`, e.jsx(n.p, {
      children: "Configure placeholder characters for unfilled positions:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': { view: '_' },       // Show underscores
  '#': { view: '0' }        // Show zeros
}
// Mask: "***-###" displays as "___-000"
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Integration with mask types"
    }), `
`, e.jsxs(n.p, {
      children: ["For built-in types (", e.jsx(n.code, {
        children: "currency"
      }), ", ", e.jsx(n.code, {
        children: "number"
      }), ", date/time) the system automatically generates corresponding special characters:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "currency/number"
        }), ": special characters for digits and decimal parts"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "date/time"
        }), ": characters for day, month, year, hours, minutes, seconds"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "text"
        }), ": uses settings from the ", e.jsx(n.code, {
          children: "special"
        }), " property"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Interaction with other properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "pattern"
        }), " — complements special characters with group patterns"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "check"
        }), " — applied after filling all special groups"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "mask"
        }), " — uses special characters to define input places"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Special characters are the foundation of the mask system, providing flexible definition of input groups with individual validation rules and behavior."
    })]
  });
}
function Td(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(yi, {
      ...s
    })
  }) : yi(s);
}
function bi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Специальные символы (special)"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "special"
      }), " определяет специальные символы для групп маски и их расширенные настройки."]
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.p, {
      children: ["Специальные символы в маске обозначают места, где пользователь может вводить данные. Свойство ", e.jsx(n.code, {
        children: "special"
      }), " позволяет настроить поведение этих групп ввода с дополнительными возможностями."]
    }), `
`, e.jsx(n.h3, {
      children: "Типы значений"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `type MaskSpecialProp = string | string[] | MaskSpecialList

// Расширенная конфигурация группы
interface MaskSpecialItem {
  defaultValue?: string           // Значение по умолчанию
  rubber?: boolean               // Резиновая группа (переменная длина)
  transitionChar?: string | string[]  // Символы перехода
  minLength?: number             // Минимальная длина
  maxLength?: number             // Максимальная длина
  match?: RegExp | string        // Паттерн проверки
  pattern?: FieldPatternItemOrFunction  // Паттерн валидации
  view?: string                  // Отображаемый символ
}
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Способы использования"
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "1. Простая строка (один специальный символ)"
      })
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: '*'           // Символ * обозначает места ввода
// Маска: "***-***" → группы: *, *, *, *, *, *
`
      })
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "2. Массив символов (несколько типов групп)"
      })
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: ['*', '#', 'A']
// * - любые символы, # - цифры, A - буквы
// Маска: "A**-###" → группы разных типов
`
      })
    }), `
`, e.jsx(n.p, {
      children: e.jsx(n.strong, {
        children: "3. Объект с расширенными настройками"
      })
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': {
    pattern: '\\\\d',        // Только цифры
    view: '_',             // Показывать _ как placeholder
    rubber: false          // Фиксированная длина
  },
  '#': {
    pattern: '[A-Z]',      // Только заглавные буквы
    defaultValue: 'X',     // Значение по умолчанию
    rubber: true,          // Переменная длина
    minLength: 1,
    maxLength: 5
  }
}
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Резиновые группы (rubber)"
    }), `
`, e.jsx(n.p, {
      children: "Резиновые группы позволяют вводить переменное количество символов:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': {
    rubber: true,
    minLength: 2,
    maxLength: 8,
    pattern: '\\\\d'
  }
}
// Маска: "***-***" может принять от 2 до 8 цифр в каждой группе
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Значения по умолчанию"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  'Y': { defaultValue: '2024' },    // Год по умолчанию
  'M': { defaultValue: '01' },      // Месяц по умолчанию
  'D': { defaultValue: '01' }       // День по умолчанию
}
// Маска: "DD/MM/YYYY" → автозаполнение: "01/01/2024"
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Символы перехода (transitionChar)"
    }), `
`, e.jsx(n.p, {
      children: "Определяют символы, которые автоматически переводят курсор к следующей группе:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': {
    transitionChar: [' ', '-'],     // Пробел или дефис переводят дальше
    pattern: '\\\\d'
  }
}
// При вводе "123 " курсор автоматически перейдёт к следующей группе
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Отображение (view)"
    }), `
`, e.jsx(n.p, {
      children: "Настройка placeholder-символов для незаполненных позиций:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': { view: '_' },       // Показывать подчёркивания
  '#': { view: '0' }        // Показывать нули
}
// Маска: "***-###" отображается как "___-000"
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Интеграция с типами маски"
    }), `
`, e.jsxs(n.p, {
      children: ["Для встроенных типов (", e.jsx(n.code, {
        children: "currency"
      }), ", ", e.jsx(n.code, {
        children: "number"
      }), ", дата/время) система автоматически генерирует соответствующие специальные символы:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "currency/number"
        }), ": специальные символы для разрядов и дробной части"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "date/time"
        }), ": символы для дня, месяца, года, часов, минут, секунд"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "text"
        }), ": использует настройки из свойства ", e.jsx(n.code, {
          children: "special"
        })]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Взаимодействие с другими свойствами"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "pattern"
        }), " — дополняет специальные символы групповыми паттернами"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "check"
        }), " — применяется после заполнения всех специальных групп"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "mask"
        }), " — использует специальные символы для определения мест ввода"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Специальные символы являются основой системы масок, обеспечивая гибкое определение групп ввода с индивидуальными правилами валидации и поведения."
    })]
  });
}
function Pd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(bi, {
      ...s
    })
  }) : bi(s);
}
function vi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Mask Types"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "type"
      }), " property defines the mask operation mode and automatically generates the appropriate structure for different data types."]
    }), `
`, e.jsx(n.h3, {
      children: "Type Categories"
    }), `
`, e.jsx(n.h4, {
      children: "Text Type"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "text"
        }), " — Basic text mask (default)"]
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Used to create custom masks using the ", e.jsx(n.code, {
        children: "mask"
      }), " property. All characters are processed as-is, without additional formatting."]
    }), `
`, e.jsx(n.h4, {
      children: "Numeric Types"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number"
        }), " — Simple numeric mask"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number-format"
        }), " — Numbers with thousand separators"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "currency"
        }), " — Currency formatting"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Automatically create rubber masks with validation, localization, and specialized formatting."
    }), `
`, e.jsx(n.h4, {
      children: "Date and Time Types"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "date"
        }), " — Full date"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "datetime"
        }), " — Date and time"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "time"
        }), " — Time"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "year"
        }), ", ", e.jsx(n.strong, {
          children: "month"
        }), ", ", e.jsx(n.strong, {
          children: "day"
        }), " — Date components"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "hour-minute"
        }), " — Time components"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Generate masks according to local formats with date correctness validation."
    }), `
`, e.jsx(n.h3, {
      children: "Automatic Generation"
    }), `
`, e.jsxs(n.p, {
      children: ["When using specialized types, the ", e.jsx(n.code, {
        children: "mask"
      }), " property is ignored — the mask is created automatically:"]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Text mask — requires explicit mask specification -->
<Mask :mask="'+1 *** *** ****'" type="text" />

<!-- Specialized types — mask generated automatically -->
<Mask type="date" language="en-US" />
<Mask type="currency" currency="USD" />
<Mask type="number-format" :fraction="2" />
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Type Selection"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "text"
        }), " — for phones, codes, custom formats"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Numeric types"
        }), " — for quantities, amounts, percentages"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Date types"
        }), " — for timestamps, periods, schedules"]
      }), `
`]
    })]
  });
}
function Rd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(vi, {
      ...s
    })
  }) : vi(s);
}
function Mi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Типы масок"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "type"
      }), " определяет режим работы маски и автоматически генерирует соответствующую структуру для различных типов данных."]
    }), `
`, e.jsx(n.h3, {
      children: "Категории типов"
    }), `
`, e.jsx(n.h4, {
      children: "Текстовый тип"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "text"
        }), " — Базовая текстовая маска (по умолчанию)"]
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Используется для создания произвольных масок с помощью свойства ", e.jsx(n.code, {
        children: "mask"
      }), ". Все символы обрабатываются как есть, без дополнительного форматирования."]
    }), `
`, e.jsx(n.h4, {
      children: "Числовые типы"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number"
        }), " — Простая числовая маска"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "number-format"
        }), " — Числа с разделителями разрядов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "currency"
        }), " — Валютное форматирование"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Автоматически создают резиновые маски с валидацией, локализацией и специальным форматированием."
    }), `
`, e.jsx(n.h4, {
      children: "Типы дат и времени"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "date"
        }), " — Полная дата"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "datetime"
        }), " — Дата и время"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "time"
        }), " — Время"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "year"
        }), ", ", e.jsx(n.strong, {
          children: "month"
        }), ", ", e.jsx(n.strong, {
          children: "day"
        }), " — Компоненты даты"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "hour-minute"
        }), " — Компоненты времени"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Генерируют маски согласно локальным форматам с валидацией корректности дат."
    }), `
`, e.jsx(n.h3, {
      children: "Автоматическая генерация"
    }), `
`, e.jsxs(n.p, {
      children: ["При использовании специализированных типов свойство ", e.jsx(n.code, {
        children: "mask"
      }), " игнорируется — маска создаётся автоматически:"]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Текстовая маска — требует явного указания mask -->
<Mask :mask="'+7 *** *** ** **'" type="text" />

<!-- Специализированные типы — mask генерируется автоматически -->
<Mask type="date" language="ru" />
<Mask type="currency" currency="RUB" />
<Mask type="number-format" :fraction="2" />
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Выбор типа"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "text"
        }), " — для телефонов, кодов, произвольных форматов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Числовые типы"
        }), " — для количества, сумм, процентов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Типы дат"
        }), " — для временных меток, периодов, расписаний"]
      }), `
`]
    })]
  });
}
function Ad(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Mi, {
      ...s
    })
  }) : Mi(s);
}
function wi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Mask Visibility Control"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "visible"
      }), " and ", e.jsx(n.code, {
        children: "visiblePartly"
      }), " properties control the display of mask placeholder characters and overall component visibility."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "visible"
        }), " — Primary property for controlling complete visibility of the mask component"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "visiblePartly"
        }), " — Controls partial visibility of mask placeholder characters"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "How it works"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: "visible"
      }), " controls complete visibility of the mask component. When set to ", e.jsx(n.code, {
        children: "false"
      }), ", hides the entire mask component including all placeholder characters."]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: "visiblePartly"
      }), " controls partial visibility of mask placeholder characters. When set to ", e.jsx(n.code, {
        children: "true"
      }), ", shows only filled positions while hiding empty placeholder characters."]
    }), `
`, e.jsx(n.h3, {
      children: "Usage Examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `// Complete mask hiding
<Mask
  :mask="'+1 (***) ***-****'"
  :visible="false"
/>

// Show only filled positions
<Mask
  :mask="'+1 (***) ***-****'"
  :visiblePartly="true"
/>

// Conditional display with partial visibility
<Mask
  :mask="'+1 (***) ***-****'"
  :visible="showMask"
  :visiblePartly="compactMode"
/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Behavior Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["When ", e.jsx(n.strong, {
          children: "visible: false"
        }), ", the mask component is completely hidden"]
      }), `
`, e.jsxs(n.li, {
        children: ["When ", e.jsx(n.strong, {
          children: "visiblePartly: true"
        }), ", only filled mask positions are displayed"]
      }), `
`, e.jsxs(n.li, {
        children: ["If ", e.jsx(n.strong, {
          children: "visible: false"
        }), ", the ", e.jsx(n.strong, {
          children: "visiblePartly"
        }), " property is ignored"]
      }), `
`, e.jsx(n.li, {
        children: "Visibility changes don't affect validation logic and data processing"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Application"
    }), `
`, e.jsx(n.p, {
      children: "Use these properties to create adaptive interfaces where the mask can be displayed conditionally or in abbreviated form depending on the usage context."
    })]
  });
}
function Nd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(wi, {
      ...s
    })
  }) : wi(s);
}
function Ci(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление видимостью маски"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "visible"
      }), " и ", e.jsx(n.code, {
        children: "visiblePartly"
      }), " управляют отображением символов-заполнителей маски и видимостью компонента в целом."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "visible"
        }), " — Основное свойство для управления полной видимостью компонента маски"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "visiblePartly"
        }), " — Управляет частичной видимостью символов-заполнителей маски"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Описание работы"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: "visible"
      }), " контролирует полную видимость компонента маски. При значении ", e.jsx(n.code, {
        children: "false"
      }), " скрывает весь компонент маски включая все символы-заполнители."]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: "visiblePartly"
      }), " управляет частичной видимостью символов-заполнителей. При значении ", e.jsx(n.code, {
        children: "true"
      }), " показывает только заполненные позиции, скрывая пустые символы-заполнители."]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `// Полное скрытие маски
<Mask
  :mask="'+1 (***) ***-****'"
  :visible="false"
/>

// Показ только заполненных позиций
<Mask
  :mask="'+1 (***) ***-****'"
  :visiblePartly="true"
/>

// Условное отображение с частичной видимостью
<Mask
  :mask="'+1 (***) ***-****'"
  :visible="showMask"
  :visiblePartly="compactMode"
/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Особенности поведения"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["При ", e.jsx(n.strong, {
          children: "visible: false"
        }), " компонент маски полностью скрыт"]
      }), `
`, e.jsxs(n.li, {
        children: ["При ", e.jsx(n.strong, {
          children: "visiblePartly: true"
        }), " отображаются только заполненные позиции маски"]
      }), `
`, e.jsxs(n.li, {
        children: ["Если ", e.jsx(n.strong, {
          children: "visible: false"
        }), ", то свойство ", e.jsx(n.strong, {
          children: "visiblePartly"
        }), " игнорируется"]
      }), `
`, e.jsx(n.li, {
        children: "Изменение видимости не влияет на логику валидации и обработку данных"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Применение"
    }), `
`, e.jsx(n.p, {
      children: "Используйте эти свойства для создания адаптивных интерфейсов, где маска может показываться условно или в сокращённом виде в зависимости от контекста использования."
    })]
  });
}
function Ed(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ci, {
      ...s
    })
  }) : Ci(s);
}
const Id = {
  name: "Mask",
  descriptions: {
    basic: {
      en: yd,
      ru: bd
    },
    dateTypes: {
      en: vd,
      ru: Md
    },
    groupSave: {
      en: wd,
      ru: Cd
    },
    mask: {
      en: Dd,
      ru: kd
    },
    match: {
      en: _d,
      ru: Xd
    },
    numberTypes: {
      en: $d,
      ru: Ld
    },
    pattern: {
      en: Fd,
      ru: Sd
    },
    special: {
      en: Td,
      ru: Pd
    },
    type: {
      en: Rd,
      ru: Ad
    },
    visible: {
      en: Nd,
      ru: Ed
    }
  }
};
function Di(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "AJAX Menu Loading"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "ajax"
      }), ", ", e.jsx(n.code, {
        children: "request"
      }), ", and ", e.jsx(n.code, {
        children: "cache"
      }), " properties are designed for managing asynchronous loading and caching of menu data."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "ajax"
        }), " — Enables remote data loading mode for the menu list (URL string or function)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "request"
        }), " — Object of type ", e.jsx(n.code, {
          children: "ApiFetch"
        }), " with HTTP request settings"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "cache"
        }), " — Enables/configures caching of loaded menu items"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Request Type"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "request"
      }), " parameter has type ", e.jsx(n.code, {
        children: "ApiFetch"
      }), " and accepts the following properties:"]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `interface ApiFetch {
  // Use base API URL
  api?: boolean
  // Relative request path
  path?: string
  // Full URL (ignores api)
  pathFull?: string
  // HTTP method
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  // Request data
  request?: FormData | Record<string, any> | string
  // Add authorization headers
  auth?: boolean
  // Custom headers
  headers?: Record<string, string> | null
  // Content-Type
  type?: string
  // Wrap response in data object
  toData?: boolean
  // Use global settings
  global?: boolean
  // Hide errors from user
  hideError?: boolean
  // Response handler
  queryReturn?: (response: Response) => Promise<any>
  // Additional fetch options
  init?: RequestInit
}
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Property Relationships"
    }), `
`, e.jsx(n.p, {
      children: "The properties work together to provide efficient data loading:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["If ", e.jsx(n.code, {
          children: "ajax = false"
        }), " (or not specified), the menu uses local data, and ", e.jsx(n.code, {
          children: "request"
        }), " and ", e.jsx(n.code, {
          children: "cache"
        }), " are ignored"]
      }), `
`, e.jsxs(n.li, {
        children: ["If ", e.jsx(n.code, {
          children: "ajax = true"
        }), " or specified as a URL string, network loading is activated:", `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "request"
            }), " defines HTTP request parameters (method, headers, request body)"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "cache"
            }), " manages saving and reusing received data"]
          }), `
`, e.jsxs(n.li, {
            children: ["When ", e.jsx(n.code, {
              children: "cache"
            }), " is enabled, subsequent menu openings use saved data instead of new requests"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "This approach reduces server load, speeds up interface response, and allows flexible configuration of data loading strategies for different usage scenarios."
    })]
  });
}
function Bd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Di, {
      ...s
    })
  }) : Di(s);
}
function ki(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "AJAX загрузка меню"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "ajax"
      }), ", ", e.jsx(n.code, {
        children: "request"
      }), " и ", e.jsx(n.code, {
        children: "cache"
      }), " предназначены для управления асинхронной загрузкой и кэшированием данных меню."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "ajax"
        }), " — Включает режим удалённой загрузки данных для списка меню (строка URL или функция)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "request"
        }), " — Объект типа ", e.jsx(n.code, {
          children: "ApiFetch"
        }), " с настройками HTTP-запроса"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "cache"
        }), " — Включает/настраивает кэширование загруженных элементов меню"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Тип request"
    }), `
`, e.jsxs(n.p, {
      children: ["Параметр ", e.jsx(n.code, {
        children: "request"
      }), " имеет тип ", e.jsx(n.code, {
        children: "ApiFetch"
      }), " и принимает следующие свойства:"]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `interface ApiFetch {
  // Использовать базовый API URL
  api?: boolean
  // Относительный путь запроса
  path?: string
  // Полный URL (игнорирует api)
  pathFull?: string
  // HTTP метод
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  // Данные запроса
  request?: FormData | Record<string, any> | string
  // Добавить авторизационные заголовки
  auth?: boolean
  // Пользовательские заголовки
  headers?: Record<string, string> | null
  // Content-Type
  type?: string
  // Обернуть ответ в data объект
  toData?: boolean
  // Использовать глобальные настройки
  global?: boolean
  // Скрыть ошибки от пользователя
  hideError?: boolean
  // Обработчик ответа
  queryReturn?: (response: Response) => Promise<any>
  // Дополнительные опции fetch
  init?: RequestInit
}
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e.jsx(n.p, {
      children: "Свойства работают совместно для обеспечения эффективной загрузки данных:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Если ", e.jsx(n.code, {
          children: "ajax = false"
        }), " (или не задан), меню использует локальные данные, а ", e.jsx(n.code, {
          children: "request"
        }), " и ", e.jsx(n.code, {
          children: "cache"
        }), " игнорируются"]
      }), `
`, e.jsxs(n.li, {
        children: ["Если ", e.jsx(n.code, {
          children: "ajax = true"
        }), " или задан как строка URL, активируется сетевая загрузка:"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "request"
        }), " определяет параметры HTTP-запроса (метод, заголовки, тело запроса)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "cache"
        }), " управляет сохранением и повторным использованием полученных данных"]
      }), `
`, e.jsxs(n.li, {
        children: ["При включённом ", e.jsx(n.code, {
          children: "cache"
        }), " повторные открытия меню используют сохранённые данные вместо новых запросов"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Такой подход снижает нагрузку на сервер, ускоряет отклик интерфейса и позволяет гибко настраивать стратегию загрузки данных для разных сценариев использования."
    })]
  });
}
function Ud(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ki, {
      ...s
    })
  }) : ki(s);
}
function _i(s) {
  const n = {
    p: "p",
    ...s.components
  };
  return e.jsx(n.p, {
    children: "The Menu component is a popup menu for navigation and actions. It combines Window (container and positioning), Bars (action toolbar), and List (items, groups, and nested submenus), providing keyboard navigation, nested structure support, a lightweight rendering mode (lite with liteThreshold), and controlled open/close behavior."
  });
}
function Od(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(_i, {
      ...s
    })
  }) : _i(s);
}
function Xi(s) {
  const n = {
    p: "p",
    ...s.components
  };
  return e.jsx(n.p, {
    children: "Компонент Menu — всплывающее меню для навигации и действий. Он объединяет возможности Window (контейнер и позиционирование), Bars (панель действий) и List (пункты, группы и вложенные подменю), обеспечивая клавиатурную навигацию, поддержку вложенной структуры, лёгкий режим рендеринга (lite с порогом liteThreshold) и управляемое открытие/закрытие."
  });
}
function Wd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Xi, {
      ...s
    })
  }) : Xi(s);
}
function $i(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "control"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot to render the Menu trigger/control."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place a button, icon, or any trigger for open/close"
      }), `
`, e.jsx(n.li, {
        children: "Receive control data via scoped slot (MenuControlItem)"
      }), `
`, e.jsx(n.li, {
        children: "Use selection state (isSelected, selectedNames, selectedValues)"
      }), `
`]
    })]
  });
}
function Vd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx($i, {
      ...s
    })
  }) : $i(s);
}
function Li(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "control"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для рендеринга элемента управления (триггера) Menu."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Разместить кнопку, иконку или любой триггер открытия/закрытия"
      }), `
`, e.jsx(n.li, {
        children: "Получать данные контрола через scoped‑slot (MenuControlItem)"
      }), `
`, e.jsx(n.li, {
        children: "Использовать признаки выбора (isSelected, selectedNames, selectedValues)"
      }), `
`]
    })]
  });
}
function qd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Li, {
      ...s
    })
  }) : Li(s);
}
function Fi(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "title"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for the Menu window title."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Display title, subtitle, status, or counters"
      }), `
`, e.jsx(n.li, {
        children: "Dynamically change content based on state"
      }), `
`, e.jsx(n.li, {
        children: "Access control data (MenuControlItem) if needed"
      }), `
`]
    })]
  });
}
function Hd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Fi, {
      ...s
    })
  }) : Fi(s);
}
function Si(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "title"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот заголовка окна Menu."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Отобразить заголовок, подзаголовок, статус или счётчики"
      }), `
`, e.jsx(n.li, {
        children: "Динамически менять контент в зависимости от состояния"
      }), `
`, e.jsx(n.li, {
        children: "Использовать данные контрола (MenuControlItem), если требуется"
      }), `
`]
    })]
  });
}
function zd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Si, {
      ...s
    })
  }) : Si(s);
}
function Ti(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "footer"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for the Menu window footer."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place actions, notes, or status information"
      }), `
`, e.jsx(n.li, {
        children: "Render contextual confirm/cancel buttons"
      }), `
`, e.jsx(n.li, {
        children: "Access control data (MenuControlItem) if needed"
      }), `
`]
    })]
  });
}
function Yd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ti, {
      ...s
    })
  }) : Ti(s);
}
function Pi(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "footer"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот подвала окна Menu."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Разместить действия, примечания или статусную информацию"
      }), `
`, e.jsx(n.li, {
        children: "Выводить контекстные кнопки подтверждения/отмены"
      }), `
`, e.jsx(n.li, {
        children: "Использовать данные контрола (MenuControlItem) при необходимости"
      }), `
`]
    })]
  });
}
function Gd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Pi, {
      ...s
    })
  }) : Pi(s);
}
function Ri(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "contextTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for the top contextual area of the Menu window."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place extra content above the list (search, filters, tips)"
      }), `
`, e.jsx(n.li, {
        children: "Show dynamic blocks depending on window/selection state"
      }), `
`, e.jsx(n.li, {
        children: "Access control data (MenuControlItem) if needed"
      }), `
`]
    })]
  });
}
function Jd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ri, {
      ...s
    })
  }) : Ri(s);
}
function Ai(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "contextTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот контекстной области сверху окна Menu."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Разместить дополнительный контент над списком (поиск, фильтры, подсказки)"
      }), `
`, e.jsx(n.li, {
        children: "Показать динамические блоки в зависимости от состояния окна/выбора"
      }), `
`, e.jsx(n.li, {
        children: "Использовать данные контрола (MenuControlItem) при необходимости"
      }), `
`]
    })]
  });
}
function Kd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ai, {
      ...s
    })
  }) : Ai(s);
}
function Ni(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "contextBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for the bottom contextual area of the Menu window."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place extra content below the list (hints, final actions)"
      }), `
`, e.jsx(n.li, {
        children: "Show dynamic blocks depending on window/selection state"
      }), `
`, e.jsx(n.li, {
        children: "Access control data (MenuControlItem) if needed"
      }), `
`]
    })]
  });
}
function Zd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ni, {
      ...s
    })
  }) : Ni(s);
}
function Ei(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "contextBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот контекстной области снизу окна Menu."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Разместить дополнительный контент под списком (подсказки, итоговые действия)"
      }), `
`, e.jsx(n.li, {
        children: "Показать динамические блоки в зависимости от состояния окна/выбора"
      }), `
`, e.jsx(n.li, {
        children: "Использовать данные контрола (MenuControlItem) при необходимости"
      }), `
`]
    })]
  });
}
function Qd(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ei, {
      ...s
    })
  }) : Ei(s);
}
const nh = {
  name: "Menu",
  descriptions: {
    ajax: {
      en: Bd,
      ru: Ud
    },
    menu: {
      en: Od,
      ru: Wd
    },
    "slot.control": {
      en: Vd,
      ru: qd
    },
    "slot.title": {
      en: Hd,
      ru: zd
    },
    "slot.footer": {
      en: Yd,
      ru: Gd
    },
    "slot.contextTop": {
      en: Jd,
      ru: Kd
    },
    "slot.contextBottom": {
      en: Zd,
      ru: Qd
    }
  }
};
function Ii(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Head position animation"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "animationHeadPosition"
      }), " property controls how the Head area behaves during show/hide animations."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `animationHeadPosition?: 'top' | 'toBottom'
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Values"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "top"
          })
        }), " — Keeps the Head at the top during transition (default)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "toBottom"
          })
        }), " — Animates the Head toward the bottom together with content"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "When to use"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Collapsing layouts"
        }), " — When the header should travel with expanding/collapsing content"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Smooth transitions"
        }), " — For creating more natural motion perception"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Content hierarchy"
        }), " — When header position affects content flow understanding"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Motion coordination"
        }), " — Synchronizes header movement with content animation"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Flexible positioning"
        }), " — Adapts to different layout requirements"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Performance optimized"
        }), " — Uses CSS transforms for smooth animations"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Limitations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsxs(n.strong, {
          children: ["When ", e.jsx(n.code, {
            children: "section"
          }), " is enabled"]
        }), " — If the ", e.jsx(n.code, {
          children: "section"
        }), " property is set to ", e.jsx(n.code, {
          children: "true"
        }), ", then ", e.jsx(n.code, {
          children: "animationHeadPosition"
        }), " is ignored and does not affect animation behavior"]
      }), `
`]
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsxs(n.p, {
        children: ["Combine with ", e.jsx(n.code, {
          children: "animationShow"
        }), " to fine‑tune the overall motion experience."]
      }), `
`]
    })]
  });
}
function eh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ii, {
      ...s
    })
  }) : Ii(s);
}
function Bi(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Анимация позиции заголовка"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "animationHeadPosition"
      }), " определяет поведение области Head во время анимаций показа/скрытия."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `animationHeadPosition?: 'top' | 'toBottom'
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Значения"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "top"
          })
        }), " — Сохраняет Head вверху во время перехода (по умолчанию)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "toBottom"
          })
        }), " — Анимирует Head вниз вместе с контентом"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Когда использовать"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Сворачиваемые макеты"
        }), " — Когда заголовок должен перемещаться вместе с разворачивающимся/сворачивающимся содержимым"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Плавные переходы"
        }), " — Для создания более естественного восприятия движения"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Иерархия контента"
        }), " — Когда позиция заголовка влияет на понимание потока содержимого"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Координация движения"
        }), " — Синхронизирует движение заголовка с анимацией контента"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гибкое позиционирование"
        }), " — Адаптируется к различным требованиям макета"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Оптимизация производительности"
        }), " — Использует CSS-трансформации для плавных анимаций"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Ограничения"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsxs(n.strong, {
          children: ["При включенном ", e.jsx(n.code, {
            children: "section"
          })]
        }), " — Если свойство ", e.jsx(n.code, {
          children: "section"
        }), " установлено в ", e.jsx(n.code, {
          children: "true"
        }), ", то ", e.jsx(n.code, {
          children: "animationHeadPosition"
        }), " игнорируется и не влияет на поведение анимации"]
      }), `
`]
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsxs(n.p, {
        children: ["Комбинируйте с ", e.jsx(n.code, {
          children: "animationShow"
        }), " для точной настройки общего восприятия движения."]
      }), `
`]
    })]
  });
}
function sh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Bi, {
      ...s
    })
  }) : Bi(s);
}
function Ui(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Helper Classes"
    }), `
`, e.jsx(n.p, {
      children: "The MotionTransform component provides a set of helper CSS classes to manage the states and styling of its elements."
    }), `
`, e.jsx(n.h3, {
      children: "State Classes"
    }), `
`, e.jsx(n.p, {
      children: "These classes are dynamically added to the component's root element to reflect its current state."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--open"
          })
        }), ": Indicates that the component is fully open and its content is visible."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--show"
          })
        }), ": Added when the component is visible or in the process of an open/close animation. Useful for managing transitions."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--window"
          })
        }), ": Applied when the component is operating in a window-like mode (e.g., with teleportation)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--click"
          })
        }), ": Added briefly on click for creating feedback effects."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Control Classes"
    }), `
`, e.jsx(n.p, {
      children: "These classes can be added to child elements to control the component's behavior."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--close"
          })
        }), ": Applied to an element that should trigger the closing of MotionTransform on click."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--none"
          })
        }), ": Disables the default behavior (e.g., open/close) for the element it is applied to."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--noneGlobal"
          })
        }), ": Globally disables MotionTransform-related events while this class is present on an element."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Element Classes"
    }), `
`, e.jsx(n.p, {
      children: "These classes are used for styling the internal parts of the component."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__context"
          })
        }), ": Class for the context element, which can be used for positioning."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__head"
          })
        }), ": Class for the header area, which often acts as a trigger."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__body"
          })
        }), ": Class for the content area that appears and disappears."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__backdrop"
          })
        }), ": Class for the backdrop element, which can be used to create an overlay effect."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__scrim"
          })
        }), ": Class for the scrim layer, often used in modal modes."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__clickNone"
          })
        }), ": Class for an element that should ignore clicks."]
      }), `
`]
    })]
  });
}
function ih(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ui, {
      ...s
    })
  }) : Ui(s);
}
function Oi(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Вспомогательные классы"
    }), `
`, e.jsx(n.p, {
      children: "Компонент MotionTransform предоставляет набор вспомогательных CSS-классов для управления состояниями и стилизации его элементов."
    }), `
`, e.jsx(n.h3, {
      children: "Классы состояний"
    }), `
`, e.jsx(n.p, {
      children: "Эти классы динамически добавляются к корневому элементу компонента для отражения его текущего состояния."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--open"
          })
        }), ": Указывает, что компонент полностью открыт и его содержимое видимо."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--show"
          })
        }), ": Добавляется, когда компонент видим или находится в процессе анимации открытия/закрытия. Полезен для управления переходами."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--window"
          })
        }), ": Применяется, когда компонент работает в режиме, подобном окну (например, с телепортацией)."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--click"
          })
        }), ": Добавляется на короткое время при клике на компонент, позволяя создавать эффекты обратной связи."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Классы управления"
    }), `
`, e.jsx(n.p, {
      children: "Эти классы можно добавлять к дочерним элементам для управления поведением компонента."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--close"
          })
        }), ": Применяется к элементу, который должен инициировать закрытие MotionTransform при клике."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--none"
          })
        }), ": Отключает стандартное поведение (например, открытие/закрытие) для элемента, на котором он установлен."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*--noneGlobal"
          })
        }), ": Глобально отключает события, связанные с MotionTransform, пока этот класс присутствует на элементе."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Классы элементов"
    }), `
`, e.jsx(n.p, {
      children: "Эти классы используются для стилизации внутренних частей компонента."
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__context"
          })
        }), ": Класс для контекстного элемента, который может использоваться для позиционирования."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__head"
          })
        }), ": Класс для области заголовка, которая часто выступает в роли триггера."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__body"
          })
        }), ": Класс для области содержимого, которая появляется и исчезает."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__backdrop"
          })
        }), ": Класс для элемента заднего фона, который может использоваться для создания эффекта наложения."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__scrim"
          })
        }), ": Класс для затемняющего слоя, часто используемого в модальных режимах."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "*__clickNone"
          })
        }), ": Класс для элемента, который должен игнорировать клики."]
      }), `
`]
    })]
  });
}
function th(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Oi, {
      ...s
    })
  }) : Oi(s);
}
function Wi(s) {
  const n = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "transform"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when MotionTransform state changes with full event context."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `@transform="onTransform"
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Handler signature:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `function onTransform (event: Event | undefined, options: MotionTransformEmitOptions)
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "event"
        }), " — the DOM event that triggered the change (if any)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "options"
        }), " — transform data: type, open state"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "transformLite"
      })
    }), `
`, e.jsx(n.p, {
      children: "Lightweight event that triggers when MotionTransform state changes without event context."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `@transform-lite="onTransformLite"
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Handler signature:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `function onTransformLite (options: MotionTransformEmitOptions)
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "options"
        }), " — transform data: type ('head' | 'body' | 'top' | 'script') and open state"]
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "MotionTransformEmitOptions"
    }), `
`, e.jsx(n.p, {
      children: "Object with transform state data passed to event handlers."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `MotionTransformEmitOptions: {
  type: 'head' | 'body' | 'top' | 'script'
  open: boolean
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Fields:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "type"
          })
        }), " — the area type that initiated the event:", `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "'head'"
            }), " — header area"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "'body'"
            }), " — content area"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "'top'"
            }), " — top area"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "'script'"
            }), " — programmatic change"]
          }), `
`]
        }), `
`]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "open"
          })
        }), " — current open state (true = open, false = closed)"]
      }), `
`]
    })]
  });
}
function rh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Wi, {
      ...s
    })
  }) : Wi(s);
}
function Vi(s) {
  const n = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "transform"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при изменении состояния MotionTransform с полным контекстом события."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `@transform="onTransform"
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Сигнатура обработчика:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `function onTransform (event: Event | undefined, options: MotionTransformEmitOptions)
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "event"
        }), " — DOM‑событие, которое вызвало изменение (если есть)"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "options"
        }), " — данные трансформации: тип, состояние открытия"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "transformLite"
      })
    }), `
`, e.jsx(n.p, {
      children: "Облегчённое событие, которое срабатывает при изменении состояния MotionTransform без контекста события."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `@transform-lite="onTransformLite"
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Сигнатура обработчика:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `function onTransformLite (options: MotionTransformEmitOptions)
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "options"
        }), " — данные трансформации: тип ('head' | 'body' | 'top' | 'script') и состояние открытия"]
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "MotionTransformEmitOptions"
    }), `
`, e.jsx(n.p, {
      children: "Объект с данными о состоянии трансформации, передаваемый в обработчики событий."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `MotionTransformEmitOptions: {
  type: 'head' | 'body' | 'top' | 'script'
  open: boolean
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Поля:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "type"
          })
        }), " — тип области, которая инициировала событие:", `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "'head'"
            }), " — область заголовка"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "'body'"
            }), " — область содержимого"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "'top'"
            }), " — верхняя область"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "'script'"
            }), " — программное изменение"]
          }), `
`]
        }), `
`]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "open"
          })
        }), " — текущее состояние открытия (true = открыто, false = закрыто)"]
      }), `
`]
    })]
  });
}
function ch(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Vi, {
      ...s
    })
  }) : Vi(s);
}
function qi(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "isShow"
      })
    }), `
`, e.jsx(n.p, {
      children: "Computed property that indicates whether the component is currently shown or being prepared for display."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `readonly isShow: ComputedRef<boolean>
`
      })
    })]
  });
}
function lh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(qi, {
      ...s
    })
  }) : qi(s);
}
function Hi(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "isShow"
      })
    }), `
`, e.jsx(n.p, {
      children: "Вычисляемое свойство, которое указывает, отображается ли компонент в данный момент или идет подготовка к отображению."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `readonly isShow: ComputedRef<boolean>
`
      })
    })]
  });
}
function oh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Hi, {
      ...s
    })
  }) : Hi(s);
}
function zi(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Ignore zones"
    }), `
`, e.jsxs(n.p, {
      children: ["Properties that exclude elements from outside-click checks and auto-close logic: ", e.jsx(n.code, {
        children: "ignore"
      }), " accepts a DOM element or selector, while ", e.jsx(n.code, {
        children: "ignoreSelector"
      }), " accepts any CSS selector for multiple/dynamic matches."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `ignore?: HTMLElement | string
ignoreSelector?: string
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "ignore"
          })
        }), " — Element reference or CSS selector to exclude from outside-click detection"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "ignoreSelector"
          })
        }), " — CSS selector that can match multiple elements for exclusion"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "When to use"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Trigger buttons"
        }), " — Prevent the trigger from closing the component when clicked"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Helper controls"
        }), " — Keep auxiliary UI elements from interfering with auto-close"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Nested interactive areas"
        }), " — Maintain functionality of embedded components"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Dynamic content"
        }), " — Handle elements that appear/disappear during interaction"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Comparison"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "ignore"
          })
        }), " — More precise, can reference a specific DOM element directly"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "ignoreSelector"
          })
        }), " — More flexible, can match multiple elements with a single selector"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Performance"
        }), " — ", e.jsx(n.code, {
          children: "ignore"
        }), " is faster for single elements, ", e.jsx(n.code, {
          children: "ignoreSelector"
        }), " is better for collections"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Event coordination"
        }), " — Both properties work together during outside-click evaluation"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Selector flexibility"
        }), " — Support for any valid CSS selector patterns"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Dynamic updates"
        }), " — Changes are reflected immediately in click detection"]
      }), `
`]
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Keep selectors specific to avoid unintended matches that could prevent auto-close functionality."
      }), `
`]
    })]
  });
}
function dh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(zi, {
      ...s
    })
  }) : zi(s);
}
function Yi(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Зоны игнорирования"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства для исключения элементов из проверок клика снаружи и логики автозакрытия: ", e.jsx(n.code, {
        children: "ignore"
      }), " принимает ссылку на DOM‑элемент или селектор, ", e.jsx(n.code, {
        children: "ignoreSelector"
      }), " — любой CSS‑селектор для множественных/динамических совпадений."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `ignore?: HTMLElement | string
ignoreSelector?: string
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "ignore"
          })
        }), " — Ссылка на элемент или CSS‑селектор для исключения из обнаружения внешних кликов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "ignoreSelector"
          })
        }), " — CSS‑селектор, который может соответствовать нескольким элементам для исключения"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Когда использовать"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Кнопки‑триггеры"
        }), " — Предотвращение закрытия компонента при клике на триггер"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Вспомогательные элементы"
        }), " — Сохранение функциональности дополнительных UI‑элементов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Вложенные интерактивные области"
        }), " — Поддержка функциональности встроенных компонентов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Динамический контент"
        }), " — Обработка элементов, которые появляются/исчезают во время взаимодействия"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Сравнение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "ignore"
          })
        }), " — Более точный, может ссылаться на конкретный DOM‑элемент напрямую"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: "ignoreSelector"
          })
        }), " — Более гибкий, может соответствовать нескольким элементам одним селектором"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Производительность"
        }), " — ", e.jsx(n.code, {
          children: "ignore"
        }), " быстрее для одиночных элементов, ", e.jsx(n.code, {
          children: "ignoreSelector"
        }), " лучше для коллекций"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Координация событий"
        }), " — Оба свойства работают вместе при оценке внешних кликов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гибкость селекторов"
        }), " — Поддержка любых валидных паттернов CSS‑селекторов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Динамические обновления"
        }), " — Изменения сразу отражаются в обнаружении кликов"]
      }), `
`]
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Делайте селекторы специфичными, чтобы избежать непреднамеренных совпадений, которые могут помешать функциональности автозакрытия."
      }), `
`]
    })]
  });
}
function hh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Yi, {
      ...s
    })
  }) : Yi(s);
}
function Gi(s) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "MotionTransform is a low-level utility that orchestrates element transforms, state transitions, and interaction flows for window-like UI. It centralizes open/show/teleport flags, measures size, updates CSS variables, and coordinates events for smooth, predictable motion."
    }), `
`, e.jsx(n.h3, {
      children: "Purpose"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Centralized motion control"
        }), " — Unified API for managing component visibility and animation states"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Event coordination"
        }), " — Handles click interactions, auto-close behavior, and ignore zones"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Performance optimization"
        }), " — Efficient DOM manipulation and CSS variable updates"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Developer experience"
        }), " — Clean separation between UI logic and motion mechanics"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Core capabilities"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "State management"
        }), " — Computed accessors for open, show, teleport with simple control API"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Element handling"
        }), " — DOM helpers for refs, portals, and class bindings"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Size coordination"
        }), " — Measurements and CSS variables to drive smooth transitions"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Event processing"
        }), " — Click/auto-close handling with configurable ignore zones"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Programmatic control"
        }), " — Imperative methods to open/close and synchronize component flows"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Integration"
    }), `
`, e.jsx(n.p, {
      children: "MotionTransform is designed as a foundational utility for component developers. Use it inside higher-level components when you need consistent behavior, predictable transitions, and clean separation between UI and motion logic."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "This is a low-level utility intended for component library development rather than direct application use."
      }), `
`]
    })]
  });
}
function ah(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Gi, {
      ...s
    })
  }) : Gi(s);
}
function Ji(s) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.p, {
      children: "MotionTransform — низкоуровневая утилита, которая управляет трансформациями элементов, переходами состояний и событиями взаимодействия для «оконного» поведения UI. Централизует флаги open/show/teleport, измеряет размеры, обновляет CSS‑переменные и координирует события для плавных анимаций."
    }), `
`, e.jsx(n.h3, {
      children: "Назначение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Централизованное управление движением"
        }), " — Единый API для управления видимостью компонентов и состояниями анимации"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Координация событий"
        }), " — Обрабатывает клики, поведение автозакрытия и зоны игнорирования"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Оптимизация производительности"
        }), " — Эффективная DOM‑манипуляция и обновление CSS‑переменных"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Удобство разработки"
        }), " — Чёткое разделение между UI‑логикой и механикой движения"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Управление состоянием"
        }), " — Вычисляемые аксессоры для open, show, teleport с простым API управления"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Работа с элементами"
        }), " — DOM‑помощники для ссылок, порталов и привязки классов"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Координация размеров"
        }), " — Измерения и CSS‑переменные для управления плавными переходами"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Обработка событий"
        }), " — Обработка кликов/автозакрытия с настраиваемыми зонами игнорирования"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Программное управление"
        }), " — Императивные методы для открытия/закрытия и синхронизации потоков компонентов"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Интеграция"
    }), `
`, e.jsx(n.p, {
      children: "MotionTransform предназначена как базовая утилита для разработчиков компонентов. Используйте её внутри компонентов верхнего уровня, когда нужна согласованность поведения, предсказуемые переходы и чёткое разделение UI и логики движения."
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsx(n.p, {
        children: "Это низкоуровневая утилита, предназначенная для разработки библиотек компонентов, а не для прямого использования в приложениях."
      }), `
`]
    })]
  });
}
function xh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ji, {
      ...s
    })
  }) : Ji(s);
}
function Ki(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "body"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for rendering the main content area that appears when the component is opened."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place any content like text, forms, lists, or other components"
      }), `
`, e.jsx(n.li, {
        children: "Receive component state data via scoped slot props"
      }), `
`, e.jsx(n.li, {
        children: "Access isOpen, isShow state and CSS classes for conditional styling"
      }), `
`, e.jsx(n.li, {
        children: "Create responsive layouts that adapt to the component's visibility"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "The body area is typically hidden/shown based on the component's open state and can include animations during transitions."
    })]
  });
}
function jh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ki, {
      ...s
    })
  }) : Ki(s);
}
function Zi(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "body"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для рендеринга основной области содержимого, которая появляется при открытии компонента."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Размещать любой контент, такой как текст, формы, списки или другие компоненты"
      }), `
`, e.jsx(n.li, {
        children: "Получать данные состояния компонента через scoped slot props"
      }), `
`, e.jsx(n.li, {
        children: "Получать доступ к состояниям isOpen, isShow и CSS‑классам для условной стилизации"
      }), `
`, e.jsx(n.li, {
        children: "Создавать адаптивные макеты, которые подстраиваются под видимость компонента"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Область body обычно скрывается/показывается в зависимости от состояния открытия компонента и может включать анимации во время переходов."
    })]
  });
}
function uh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Zi, {
      ...s
    })
  }) : Zi(s);
}
function Qi(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "head"
      })
    }), `
`, e.jsx(n.p, {
      children: "Slot for rendering the header area that serves as a trigger for opening/closing the component."
    }), `
`, e.jsx(n.p, {
      children: "This slot lets you:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Place interactive controls like buttons, titles, or icons"
      }), `
`, e.jsx(n.li, {
        children: "Receive component state data via scoped slot props"
      }), `
`, e.jsx(n.li, {
        children: "Control the visual presentation of the trigger area"
      }), `
`, e.jsx(n.li, {
        children: "Access isOpen, isShow state and CSS classes for styling"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "The head area typically handles click events to toggle the component's visibility state."
    })]
  });
}
function ph(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Qi, {
      ...s
    })
  }) : Qi(s);
}
function nt(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "head"
      })
    }), `
`, e.jsx(n.p, {
      children: "Слот для рендеринга области заголовка, которая служит триггером для открытия/закрытия компонента."
    }), `
`, e.jsx(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Размещать интерактивные элементы управления, такие как кнопки, заголовки или иконки"
      }), `
`, e.jsx(n.li, {
        children: "Получать данные состояния компонента через scoped slot props"
      }), `
`, e.jsx(n.li, {
        children: "Управлять визуальным представлением области триггера"
      }), `
`, e.jsx(n.li, {
        children: "Получать доступ к состояниям isOpen, isShow и CSS‑классам для стилизации"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Область head обычно обрабатывает события клика для переключения состояния видимости компонента."
    })]
  });
}
function mh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(nt, {
      ...s
    })
  }) : nt(s);
}
function et(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: "Slot parameters"
    }), `
`, e.jsxs(n.p, {
      children: ["Below is a detailed description of the parameters passed to the ", e.jsx(n.code, {
        children: "head"
      }), " and ", e.jsx(n.code, {
        children: "body"
      }), " slots of the MotionTransform component."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `// Component slot signatures
export interface MotionTransformSlots {
  /** Header slot */
  head?(props: MotionTransformControlItem): any
  /** Content slot */
  body?(props: MotionTransformControlItem): any
}

// Parameters passed into slots
export type MotionTransformControlItem = {
  /** Component open state */
  isOpen: ComputedRef<boolean>
  /** Visible or preparing to be shown */
  isShow: ComputedRef<boolean>
  /** Helper CSS classes for state styling */
  classes: MotionTransformClassList
}

// Available CSS classes for styling and controlling behavior
export type MotionTransformClassList = {
  // Visibility/window state classes
  show: string
  open: string
  window: string

  // Click and disabling behavior classes
  click: string
  none: string
  noneGlobal: string
  close: string
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Quick reference:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "isOpen — whether the component is open"
      }), `
`, e.jsx(n.li, {
        children: "isShow — true when the component is visible or in the preparation/transition phase"
      }), `
`, e.jsx(n.li, {
        children: "classes — an object with CSS classes to control states and behavior"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Usage example in slots:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-vue",
        children: `<MotionTransform>
  <template #head="{ isOpen, isShow, classes }">
    <button :class="classes.click">
      {{ isOpen ? 'Close' : 'Open' }}
    </button>
  </template>

  <template #body="{ isOpen, isShow, classes }">
    <div :class="classes.window" v-show="isShow">
      Main content of the component
    </div>
  </template>
</MotionTransform>
`
      })
    })]
  });
}
function gh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(et, {
      ...s
    })
  }) : et(s);
}
function st(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: "Параметры слотов"
    }), `
`, e.jsxs(n.p, {
      children: ["Ниже приведено подробное описание параметров, которые передаются в слоты ", e.jsx(n.code, {
        children: "head"
      }), " и ", e.jsx(n.code, {
        children: "body"
      }), " компонента MotionTransform."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `// Сигнатуры слотов компонента
export interface MotionTransformSlots {
  /** Слот шапки */
  head?(props: MotionTransformControlItem): any
  /** Слот содержимого */
  body?(props: MotionTransformControlItem): any
}

// Параметры, передаваемые в слоты
export type MotionTransformControlItem = {
  /** Состояние открытия компонента */
  isOpen: ComputedRef<boolean>
  /** Видимость или подготовка к показу */
  isShow: ComputedRef<boolean>
  /** Набор вспомогательных CSS‑классов для стилизации состояний */
  classes: MotionTransformClassList
}

// Список доступных CSS‑классов для стилизации и управления поведением
export type MotionTransformClassList = {
  // Классы состояний видимости/окна
  show: string
  open: string
  window: string

  // Классы поведения кликов и отключений
  click: string
  none: string
  noneGlobal: string
  close: string
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Кратко о параметрах:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "isOpen — указывает, открыт ли компонент"
      }), `
`, e.jsx(n.li, {
        children: "isShow — true, если компонент видим или находится в подготовке к показу (анимация)"
      }), `
`, e.jsx(n.li, {
        children: "classes — объект с CSS‑классами для управления состояниями и поведением"
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Пример использования в слотах:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-vue",
        children: `<MotionTransform>
  <template #head="{ isOpen, isShow, classes }">
    <button :class="classes.click">
      {{ isOpen ? 'Закрыть' : 'Открыть' }}
    </button>
  </template>

  <template #body="{ isOpen, isShow, classes }">
    <div :class="classes.window" v-show="isShow">
      Основной контент компонента
    </div>
  </template>
</MotionTransform>
`
      })
    })]
  });
}
function fh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(st, {
      ...s
    })
  }) : st(s);
}
function it(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Two-way binding (v-model)"
    }), `
`, e.jsxs(n.p, {
      children: ["The MotionTransform component supports two-way binding for the ", e.jsx(n.code, {
        children: "open"
      }), " state using the ", e.jsx(n.code, {
        children: "v-model:open"
      }), " directive."]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsx(n.p, {
      children: "This allows you to synchronize the component's visibility with a local data property in your parent component."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<MotionTransform v-model:open="isOpen"/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "How it works"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "v-model:open"
      }), " is a shorthand for binding the ", e.jsx(n.code, {
        children: "open"
      }), " prop and listening to the ", e.jsx(n.code, {
        children: "update:open"
      }), " event."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: ':open="isOpen"'
          })
        }), ": The component's visibility is controlled by the ", e.jsx(n.code, {
          children: "isOpen"
        }), " ref."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: '@update:open="isOpen = $event"'
          })
        }), ": When the component's internal state changes (e.g., by clicking the head), it emits an event to update the parent's ", e.jsx(n.code, {
          children: "isOpen"
        }), " ref."]
      }), `
`]
    })]
  });
}
function yh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(it, {
      ...s
    })
  }) : it(s);
}
function tt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Двусторонняя привязка (v-model)"
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент MotionTransform поддерживает двустороннюю привязку для состояния ", e.jsx(n.code, {
        children: "open"
      }), " с использованием директивы ", e.jsx(n.code, {
        children: "v-model:open"
      }), "."]
    }), `
`, e.jsx(n.h3, {
      children: "Использование"
    }), `
`, e.jsx(n.p, {
      children: "Это позволяет синхронизировать видимость компонента с локальным свойством данных в вашем родительском компоненте."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<MotionTransform v-model:open="isOpen"/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Как это работает"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.code, {
        children: "v-model:open"
      }), " является сокращением для привязки свойства ", e.jsx(n.code, {
        children: "open"
      }), " и прослушивания события ", e.jsx(n.code, {
        children: "update:open"
      }), "."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: ':open="isOpen"'
          })
        }), ": Видимость компонента управляется ", e.jsx(n.code, {
          children: "isOpen"
        }), " ref."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: e.jsx(n.code, {
            children: '@update:open="isOpen = $event"'
          })
        }), ": Когда внутреннее состояние компонента изменяется (например, при клике на заголовок), он генерирует событие для обновления ", e.jsx(n.code, {
          children: "isOpen"
        }), " ref родительского компонента."]
      }), `
`]
    })]
  });
}
function bh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(tt, {
      ...s
    })
  }) : tt(s);
}
const vh = {
  name: "MotionTransform",
  descriptions: {
    animationHeadPosition: {
      en: eh,
      ru: sh
    },
    classes: {
      en: ih,
      ru: th
    },
    events: {
      en: rh,
      ru: ch
    },
    "expose.isShow": {
      en: lh,
      ru: oh
    },
    ignore: {
      en: dh,
      ru: hh
    },
    motionTransform: {
      en: ah,
      ru: xh
    },
    "slot.body": {
      en: jh,
      ru: uh
    },
    "slot.head": {
      en: ph,
      ru: mh
    },
    "slot.params": {
      en: gh,
      ru: fh
    },
    "v-model": {
      en: yh,
      ru: bh
    }
  }
};
function rt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Circular Progress and Related Parameters"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "circular"
      }), " property enables circular progress indicator display mode. For optimal control over the appearance and behavior of circular progress, it is recommended to use it together with additional styling properties."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "circular"
        }), " — Enables circular progress display mode as a ring indicator."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "dense"
        }), " — Removes internal padding, allowing the indicator to be used in small elements where space is limited."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Description"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "circular"
        }), " property activates a ring progress indicator that fills around the circumference proportionally to the current value."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "dense"
        }), " removes padding, making the indicator more compact for placement in limited space."]
      }), `
`, e.jsx(n.li, {
        children: "Both properties work together to create a flexible and adaptive circular progress indicator."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use ", e.jsx(n.code, {
          children: "circular"
        }), " to display progress in compact interfaces or when a central focus is needed."]
      }), `
`, e.jsxs(n.li, {
        children: ["Apply ", e.jsx(n.code, {
          children: "dense"
        }), " in small elements where space-saving is important and padding needs to be removed."]
      }), `
`, e.jsx(n.li, {
        children: "Combine properties depending on available space and design requirements."
      }), `
`, e.jsx(n.li, {
        children: "Circular progress is particularly effective for displaying process completion."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage Example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Basic circular progress -->
<Progress circular />

<!-- Compact circular progress -->
<Progress circular dense />

<!-- Circular progress with specific value -->
<Progress circular :value="75" />

<!-- Compact circular progress with value -->
<Progress circular dense :value="50" />
`
      })
    })]
  });
}
function Mh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(rt, {
      ...s
    })
  }) : rt(s);
}
function ct(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Круглый прогресс и связанные параметры"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "circular"
      }), " включает режим круглого отображения индикатора прогресса. Для оптимального контроля над внешним видом и поведением круглого прогресса рекомендуется использовать его совместно с дополнительными свойствами стилизации."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "circular"
        }), " — Включает режим круглого отображения прогресса в виде кольцевого индикатора."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "dense"
        }), " — Убирает внутренние отступы, позволяя использовать индикатор в маленьких элементах, где мало места."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Описание"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "circular"
        }), " активирует кольцевой индикатор прогресса, который заполняется по окружности пропорционально текущему значению."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "dense"
        }), " убирает padding, делая индикатор более компактным для размещения в ограниченном пространстве."]
      }), `
`, e.jsx(n.li, {
        children: "Оба свойства работают совместно для создания гибкого и адаптивного круглого индикатора прогресса."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Используйте ", e.jsx(n.code, {
          children: "circular"
        }), " для отображения прогресса в компактных интерфейсах или когда нужен центральный фокус."]
      }), `
`, e.jsxs(n.li, {
        children: ["Применяйте ", e.jsx(n.code, {
          children: "dense"
        }), " в маленьких элементах, где важна экономия места и нужно убрать отступы."]
      }), `
`, e.jsx(n.li, {
        children: "Комбинируйте свойства в зависимости от доступного пространства и требований дизайна."
      }), `
`, e.jsx(n.li, {
        children: "Круглый прогресс особенно эффективен для отображения завершенности процессов."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Базовый круглый прогресс -->
<Progress circular />

<!-- Компактный круглый прогресс -->
<Progress circular dense />

<!-- Круглый прогресс с определенным значением -->
<Progress circular :value="75" />

<!-- Компактный круглый прогресс со значением -->
<Progress circular dense :value="50" />
`
      })
    })]
  });
}
function wh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ct, {
      ...s
    })
  }) : ct(s);
}
function lt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Progress Delay Management"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "delay"
      }), " and ", e.jsx(n.code, {
        children: "delayHide"
      }), " properties control timing parameters for showing and hiding the progress indicator. These properties allow creating a smoother user experience by avoiding flickers during fast operations."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "delay"
        }), " — Delay before showing the progress indicator in milliseconds. Defaults to 360 ms."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "delayHide"
        }), " — Delay before hiding the progress indicator in milliseconds. Defaults to 200 ms."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use the standard ", e.jsx(n.code, {
          children: 'delay="360"'
        }), " value for most cases - it's been proven in practice."]
      }), `
`, e.jsxs(n.li, {
        children: ["Increase ", e.jsx(n.code, {
          children: "delay"
        }), " for rapid operations where the indicator might interfere with perception."]
      }), `
`, e.jsxs(n.li, {
        children: ["Decrease ", e.jsx(n.code, {
          children: "delay"
        }), " for long operations where users need immediate feedback."]
      }), `
`, e.jsxs(n.li, {
        children: ["Adjust ", e.jsx(n.code, {
          children: "delayHide"
        }), " based on context—for critical operations you can increase the value."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage Example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Standard delays -->
<Progress delay="360" delayHide="200" />

<!-- Fast appearance for long operations -->
<Progress delay="100" delayHide="200" />

<!-- Slow appearance for fast operations -->
<Progress delay="800" delayHide="300" />

<!-- No delays -->
<Progress delay="0" delayHide="0" />
`
      })
    })]
  });
}
function Ch(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(lt, {
      ...s
    })
  }) : lt(s);
}
function ot(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление задержками прогресса"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "delay"
      }), " и ", e.jsx(n.code, {
        children: "delayHide"
      }), " контролируют временные параметры появления и скрытия индикатора прогресса. Эти свойства позволяют создавать более плавный пользовательский опыт, избегая мерцаний при быстрых операциях."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "delay"
        }), " — Задержка перед показом индикатора прогресса в миллисекундах. По умолчанию 360 мс."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "delayHide"
        }), " — Задержка перед скрытием индикатора прогресса в миллисекундах. По умолчанию 200 мс."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Используйте стандартное значение ", e.jsx(n.code, {
          children: 'delay="360"'
        }), " для большинства случаев - оно проверено на практике."]
      }), `
`, e.jsxs(n.li, {
        children: ["Увеличивайте ", e.jsx(n.code, {
          children: "delay"
        }), " для очень быстрых операций, где индикатор может помешать восприятию."]
      }), `
`, e.jsxs(n.li, {
        children: ["Уменьшайте ", e.jsx(n.code, {
          children: "delay"
        }), " для долгих операций, где пользователю важно видеть немедленную обратную связь."]
      }), `
`, e.jsxs(n.li, {
        children: ["Настраивайте ", e.jsx(n.code, {
          children: "delayHide"
        }), " в зависимости от контекста - для критичных операций можно увеличить значение."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Стандартные задержки -->
<Progress delay="360" delayHide="200" />

<!-- Быстрое появление для долгих операций -->
<Progress delay="100" delayHide="200" />

<!-- Медленное появление для быстрых операций -->
<Progress delay="800" delayHide="300" />

<!-- Без задержек -->
<Progress delay="0" delayHide="0" />
`
      })
    })]
  });
}
function Dh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ot, {
      ...s
    })
  }) : ot(s);
}
function dt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Linear Progress and Related Parameters"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "linear"
      }), " property enables linear progress indicator display mode. For complete control over the behavior and appearance of linear progress, it is recommended to use it together with additional positioning and styling properties."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "linear"
        }), " — Enables linear progress display mode as a horizontal bar."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "position"
        }), " — Defines the position of the linear indicator (", e.jsx(n.code, {
          children: "top"
        }), ", ", e.jsx(n.code, {
          children: "bottom"
        }), ", ", e.jsx(n.code, {
          children: "static"
        }), "). Defaults to ", e.jsx(n.code, {
          children: "top"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "point"
        }), " — Adds a point at the end of the progress indicator to emphasize the current position."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Description"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "linear"
        }), " property activates a horizontal progress bar that fills proportionally to the current value."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "position"
        }), " controls the indicator placement: ", e.jsx(n.code, {
          children: "top"
        }), " places it at the top of the container, ", e.jsx(n.code, {
          children: "bottom"
        }), " at the bottom, ", e.jsx(n.code, {
          children: "static"
        }), " in the normal document flows."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "point"
        }), " adds a visual marker at the end of the filled portion, making the current position more noticeable."]
      }), `
`, e.jsx(n.li, {
        children: "All properties work together to create a flexible and informative progress indicator."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use ", e.jsx(n.code, {
          children: 'position="top"'
        }), " or ", e.jsx(n.code, {
          children: 'position="bottom"'
        }), " to overlay progress on top of content."]
      }), `
`, e.jsxs(n.li, {
        children: ["Apply ", e.jsx(n.code, {
          children: 'position="static"'
        }), " when the indicator should take space in the document flow."]
      }), `
`, e.jsxs(n.li, {
        children: ["Add ", e.jsx(n.code, {
          children: "point"
        }), " for better visualization of current progress, especially with small values."]
      }), `
`, e.jsx(n.li, {
        children: "Combine properties depending on usage context and interface design."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage Example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Basic linear progress -->
<Progress linear />

<!-- Linear progress with bottom positioning -->
<Progress linear position="bottom" />

<!-- Linear progress with point in static position -->
<Progress linear position="static" point />

<!-- Full configuration with specific value -->
<Progress linear position="top" point :value="65" />
`
      })
    })]
  });
}
function kh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(dt, {
      ...s
    })
  }) : dt(s);
}
function ht(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Линейный прогресс и связанные параметры"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "linear"
      }), " включает режим линейного отображения индикатора прогресса. Для полного контроля над поведением и внешним видом линейного прогресса рекомендуется использовать его совместно с дополнительными свойствами позиционирования и стилизации."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "linear"
        }), " — Включает режим линейного отображения прогресса в виде горизонтальной полосы."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "position"
        }), " — Определяет позицию линейного индикатора (", e.jsx(n.code, {
          children: "top"
        }), ", ", e.jsx(n.code, {
          children: "bottom"
        }), ", ", e.jsx(n.code, {
          children: "static"
        }), "). По умолчанию ", e.jsx(n.code, {
          children: "top"
        }), "."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "point"
        }), " — Добавляет точку в конце индикатора прогресса для акцентирования текущего положения."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Описание"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Свойство ", e.jsx(n.code, {
          children: "linear"
        }), " активирует горизонтальную полосу прогресса, которая заполняется пропорционально текущему значению."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "position"
        }), " управляет расположением индикатора: ", e.jsx(n.code, {
          children: "top"
        }), " размещает его в верхней части контейнера, ", e.jsx(n.code, {
          children: "bottom"
        }), " — в нижней, ", e.jsx(n.code, {
          children: "static"
        }), " — в обычном потоке документа."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "point"
        }), " добавляет визуальный маркер на конце заполненной части, делая текущую позицию более заметной."]
      }), `
`, e.jsx(n.li, {
        children: "Все свойства работают совместно для создания гибкого и информативного индикатора прогресса."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Используйте ", e.jsx(n.code, {
          children: 'position="top"'
        }), " или ", e.jsx(n.code, {
          children: 'position="bottom"'
        }), " для наложения прогресса поверх контента."]
      }), `
`, e.jsxs(n.li, {
        children: ["Применяйте ", e.jsx(n.code, {
          children: 'position="static"'
        }), " когда индикатор должен занимать место в потоке документа."]
      }), `
`, e.jsxs(n.li, {
        children: ["Добавляйте ", e.jsx(n.code, {
          children: "point"
        }), " для лучшей визуализации текущего прогресса, особенно при небольших значениях."]
      }), `
`, e.jsx(n.li, {
        children: "Комбинируйте свойства в зависимости от контекста использования и дизайна интерфейса."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Базовый линейный прогресс -->
<Progress linear />

<!-- Линейный прогресс с позиционированием снизу -->
<Progress linear position="bottom" />

<!-- Линейный прогресс с точкой в статичной позиции -->
<Progress linear position="static" point />

<!-- Полная настройка с определенным значением -->
<Progress linear position="top" point :value="65" />
`
      })
    })]
  });
}
function _h(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ht, {
      ...s
    })
  }) : ht(s);
}
function at(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Progress Indicator"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "Progress"
      }), " component is designed to display the progress of operations, data loading, or any other processes that require visual representation of completion status."]
    }), `
`, e.jsx(n.h3, {
      children: "Key Features"
    }), `
`, e.jsx(n.p, {
      children: "The component supports various types of progress-display - linear and circular indicators, as well as point variants for minimal display. It can work with both determinate progress values and indeterminate states for operations with unknown execution time."
    }), `
`, e.jsx(n.p, {
      children: "Provides flexible positioning and styling options, including compact and inverted display variants. Supports delay settings for smooth appearance and hiding of the indicator."
    })]
  });
}
function Xh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(at, {
      ...s
    })
  }) : at(s);
}
function xt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Индикатор прогресса"
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент ", e.jsx(n.code, {
        children: "Progress"
      }), " предназначен для отображения прогресса выполнения операций, загрузки данных или любых других процессов, требующих визуального отображения состояния выполнения."]
    }), `
`, e.jsx(n.h3, {
      children: "Основные возможности"
    }), `
`, e.jsx(n.p, {
      children: "Компонент поддерживает различные типы отображения прогресса - линейные и круглые индикаторы, а также точечные варианты для минимального отображения. Может работать как с определенными значениями прогресса, так и с неопределенными состояниями для операций с неизвестным временем выполнения."
    }), `
`, e.jsx(n.p, {
      children: "Предоставляет гибкие возможности позиционирования и стилизации, включая компактные и инвертированные варианты отображения. Поддерживает настройку задержек для плавного появления и скрытия индикатора."
    })]
  });
}
function $h(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(xt, {
      ...s
    })
  }) : xt(s);
}
function jt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Progress Value Management"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "value"
      }), " and ", e.jsx(n.code, {
        children: "max"
      }), " properties work closely together to determine the state of process execution. They establish the current value and upper limit, forming a system for calculating the completion percentage of an operation."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "value"
        }), " — Current progress value. Determines what portion of the process has been completed"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "max"
        }), " — Maximum progress value. Defaults to 100, serves as the reference point for percentage calculations"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Property Relationship"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "value"
      }), " and ", e.jsx(n.code, {
        children: "max"
      }), " properties form a mathematical relationship to determine completion percentage: ", e.jsx(n.code, {
        children: "(value / max) * 100"
      }), ". This allows flexible adaptation of the component to various tasks and measurement scales."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Completion percentage is calculated automatically based on the value ratio"
      }), `
`, e.jsxs(n.li, {
        children: ["The ", e.jsx(n.code, {
          children: "value"
        }), " is automatically constrained to the range from 0 to ", e.jsx(n.code, {
          children: "max"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["When ", e.jsx(n.code, {
          children: "max"
        }), " changes, the percentage display is recalculated proportionally"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Features"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Flexible scale"
        }), " — Any numeric values can be used depending on the task"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Automatic normalization"
        }), " — Values are automatically adjusted to the allowable range"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Dynamic updates"
        }), " — Both properties can change in real-time"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Type compatibility"
        }), " — Support numeric values and string representations of numbers"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Use ", e.jsx(n.code, {
          children: 'max="100"'
        }), " for percentage display (default value)"]
      }), `
`, e.jsxs(n.li, {
        children: ["Set ", e.jsx(n.code, {
          children: "max"
        }), " equal to the actual number of steps in the process"]
      }), `
`, e.jsxs(n.li, {
        children: ["Update ", e.jsx(n.code, {
          children: "value"
        }), " gradually to create smooth animation"]
      }), `
`, e.jsxs(n.li, {
        children: ["Avoid zero and negative values for ", e.jsx(n.code, {
          children: "max"
        })]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage Examples"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Standard percentage scale -->
<Progress :value="75" :max="100" />

<!-- File loading progress -->
<Progress :value="loadedFiles" :max="totalFiles" />

<!-- Dynamic updates of both values -->
<Progress :value="currentStep" :max="totalSteps" />

<!-- Custom scale -->
<Progress :value="completedTasks" :max="1000" />
`
      })
    })]
  });
}
function Lh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(jt, {
      ...s
    })
  }) : jt(s);
}
function ut(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление значениями прогресса"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "value"
      }), " и ", e.jsx(n.code, {
        children: "max"
      }), " работают в тесной связке для определения состояния выполнения процесса. Они устанавливают текущее значение и верхний предел, образуя систему для расчета процента завершения операции."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "value"
        }), " — Текущее значение прогресса. Определяет, какая часть процесса уже выполнена"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "max"
        }), " — Максимальное значение прогресса. По умолчанию равно 100, служит точкой отсчета для расчета процентов"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойства ", e.jsx(n.code, {
        children: "value"
      }), " и ", e.jsx(n.code, {
        children: "max"
      }), " образуют математическое соотношение для определения процента выполнения: ", e.jsx(n.code, {
        children: "(value / max) * 100"
      }), ". Это позволяет гибко адаптировать компонент под различные задачи и шкалы измерения."]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Процент выполнения рассчитывается автоматически на основе соотношения значений"
      }), `
`, e.jsxs(n.li, {
        children: ["Значение ", e.jsx(n.code, {
          children: "value"
        }), " автоматически ограничивается диапазоном от 0 до ", e.jsx(n.code, {
          children: "max"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["При изменении ", e.jsx(n.code, {
          children: "max"
        }), " процентное отображение пересчитывается пропорционально"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Особенности"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Гибкая шкала"
        }), " — Можно использовать любые числовые значения в зависимости от задачи"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Автоматическая нормализация"
        }), " — Значения автоматически приводятся к допустимому диапазону"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Динамическое обновление"
        }), " — Оба свойства могут изменяться в реальном времени"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Совместимость типов"
        }), " — Поддерживают числовые значения и строковые представления чисел"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Используйте ", e.jsx(n.code, {
          children: 'max="100"'
        }), " для процентного отображения (значение по умолчанию)"]
      }), `
`, e.jsxs(n.li, {
        children: ["Устанавливайте ", e.jsx(n.code, {
          children: "max"
        }), " равным реальному количеству шагов в процессе"]
      }), `
`, e.jsxs(n.li, {
        children: ["Обновляйте ", e.jsx(n.code, {
          children: "value"
        }), " постепенно для создания плавной анимации"]
      }), `
`, e.jsxs(n.li, {
        children: ["Избегайте нулевых и отрицательных значений для ", e.jsx(n.code, {
          children: "max"
        })]
      }), `
`, e.jsxs(n.li, {
        children: ["При загрузке файлов указывайте в ", e.jsx(n.code, {
          children: "max"
        }), " размер файла, а в ", e.jsx(n.code, {
          children: "value"
        }), " - количество уже загруженных байт"]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Примеры использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Стандартная процентная шкала -->
<Progress :value="75" :max="100" />

<!-- Прогресс загрузки файлов -->
<Progress :value="loadedFiles" :max="totalFiles" />

<!-- Динамическое обновление обоих значений -->
<Progress :value="currentStep" :max="totalSteps" />

<!-- Пользовательская шкала -->
<Progress :value="completedTasks" :max="1000" />
`
      })
    })]
  });
}
function Fh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ut, {
      ...s
    })
  }) : ut(s);
}
const Sh = {
  name: "Progress",
  descriptions: {
    circular: {
      en: Mh,
      ru: wh
    },
    delays: {
      en: Ch,
      ru: Dh
    },
    linear: {
      en: kh,
      ru: _h
    },
    progress: {
      en: Xh,
      ru: $h
    },
    values: {
      en: Lh,
      ru: Fh
    }
  }
};
function pt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Ripple Wave Effect on Interaction"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "Ripple"
      }), " component creates an animated wave effect when clicking on an element, similar to Material Design ripple effect. This enhances user experience by providing visual feedback during interaction."]
    }), `
`, e.jsx(n.h3, {
      children: "How it Works"
    }), `
`, e.jsx(n.p, {
      children: "The component automatically tracks click events and creates an animated wave that expands from the touch point. The effect works by:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Detecting click coordinates relative to the element"
      }), `
`, e.jsx(n.li, {
        children: "Creating a temporary element with expansion animation"
      }), `
`, e.jsx(n.li, {
        children: "Automatically removing the element after animation completion"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Integration"
    }), `
`, e.jsxs(n.p, {
      children: ["The component should be placed inside an interactive element that needs the ripple effect. The parent element must have ", e.jsx(n.code, {
        children: "position: relative"
      }), " for correct effect positioning."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "disabled"
        }), " — Disables the ripple effect when set to ", e.jsx(n.code, {
          children: "true"
        })]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Use on buttons, cards, and other interactive elements"
      }), `
`, e.jsxs(n.li, {
        children: ["Ensure the parent element has ", e.jsx(n.code, {
          children: "position: relative"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Avoid using on elements that frequently change size"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage Example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Button with ripple effect -->
<button style="position: relative;">
  Click me
  <Ripple />
</button>

<!-- Disabled effect -->
<button style="position: relative;">
  No effect
  <Ripple :disabled="true" />
</button>

<!-- Card with effect -->
<div class="card" style="position: relative; cursor: pointer;">
  <h3>Interactive card</h3>
  <p>Card content</p>
  <Ripple />
</div>
`
      })
    })]
  });
}
function Th(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(pt, {
      ...s
    })
  }) : pt(s);
}
function mt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Эффект волны при взаимодействии"
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент ", e.jsx(n.code, {
        children: "Ripple"
      }), " создает анимированный эффект волны при клике по элементу, аналогичный эффекту Material Design. Это улучшает пользовательский опыт, предоставляя визуальную обратную связь при взаимодействии."]
    }), `
`, e.jsx(n.h3, {
      children: "Принцип работы"
    }), `
`, e.jsx(n.p, {
      children: "Компонент автоматически отслеживает события клика и создает анимированную волну, которая расширяется от точки касания. Эффект работает путем:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Определения координат клика относительно элемента"
      }), `
`, e.jsx(n.li, {
        children: "Создания временного элемента с анимацией расширения"
      }), `
`, e.jsx(n.li, {
        children: "Автоматического удаления элемента после завершения анимации"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Интеграция"
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент должен быть размещен внутри интерактивного элемента, к которому нужно добавить эффект волны. Родительский элемент должен иметь ", e.jsx(n.code, {
        children: "position: relative"
      }), " для корректного позиционирования эффекта."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "disabled"
        }), " — Отключает эффект волны при установке в ", e.jsx(n.code, {
          children: "true"
        })]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Используйте на кнопках, карточках и других интерактивных элементах"
      }), `
`, e.jsxs(n.li, {
        children: ["Убедитесь, что родительский элемент имеет ", e.jsx(n.code, {
          children: "position: relative"
        })]
      }), `
`, e.jsx(n.li, {
        children: "Не используйте на элементах, которые часто изменяют размер"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Кнопка с эффектом волны -->
<button style="position: relative;">
  Нажми меня
  <Ripple />
</button>

<!-- Отключенный эффект -->
<button style="position: relative;">
  Без эффекта
  <Ripple :disabled="true" />
</button>

<!-- Карточка с эффектом -->
<div class="card" style="position: relative; cursor: pointer;">
  <h3>Интерактивная карточка</h3>
  <p>Содержимое карточки</p>
  <Ripple />
</div>
`
      })
    })]
  });
}
function Ph(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(mt, {
      ...s
    })
  }) : mt(s);
}
const Rh = {
  name: "Ripple",
  descriptions: {
    ripple: {
      en: Th,
      ru: Ph
    }
  }
};
function gt(s) {
  const n = {
    h2: "h2",
    p: "p",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Description"
    }), `
`, e.jsx(n.p, {
      children: "Component for customizing scrollbar appearance and adding divider lines."
    })]
  });
}
function Ah(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(gt, {
      ...s
    })
  }) : gt(s);
}
function ft(s) {
  const n = {
    h2: "h2",
    p: "p",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Описание"
    }), `
`, e.jsx(n.p, {
      children: "Компонент для кастомизации внешнего вида скроллбара и добавления разделительных линий."
    })]
  });
}
function Nh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ft, {
      ...s
    })
  }) : ft(s);
}
function yt(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "bottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll position reaches or leaves the bottom boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onBottom (isBottom: boolean) {
    // handle reaching/leaving bottom boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isBottom"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true if scroll is at the bottom position, false if it left the bottom position"]
      }), `
`]
    })]
  });
}
function Eh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(yt, {
      ...s
    })
  }) : yt(s);
}
function bt(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "bottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при изменении состояния достижения нижней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onBottom (isBottom: boolean) {
    // обработка события достижения/покидания нижней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isBottom"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в нижней позиции, false - если покинул нижнюю позицию"]
      }), `
`]
    })]
  });
}
function Ih(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(bt, {
      ...s
    })
  }) : bt(s);
}
function vt(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "edge"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll boundary state changes (top or bottom)."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onEdge (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) {
    // handle scroll boundary change event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isTop"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true if scroll is at the top position"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isBottom"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true if scroll is at the bottom position"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "edge"
        }), " - ", e.jsx(n.code, {
          children: "ScrollbarEdgeType"
        }), " - current scroll boundary type"]
      }), `
`]
    })]
  });
}
function Bh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(vt, {
      ...s
    })
  }) : vt(s);
}
function Mt(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "edge"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при изменении состояния границ скролла (верхней или нижней)."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onEdge (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) {
    // обработка события изменения границ скролла
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isTop"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в верхней позиции"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isBottom"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в нижней позиции"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "edge"
        }), " - ", e.jsx(n.code, {
          children: "ScrollbarEdgeType"
        }), " - тип текущей границы скролла"]
      }), `
`]
    })]
  });
}
function Uh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Mt, {
      ...s
    })
  }) : Mt(s);
}
function wt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "leaveBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when leaving the bottom boundary of the scroll."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onLeaveBottom () {
    // handle leaving bottom boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "This event only fires at the moment when scrolling starts upward from the very bottom of the content."
    })]
  });
}
function Oh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(wt, {
      ...s
    })
  }) : wt(s);
}
function Ct(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "leaveBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при покидании нижней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onLeaveBottom () {
    // обработка события покидания нижней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Это событие срабатывает только в момент начала прокрутки от самого низа контента вверх."
    })]
  });
}
function Wh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ct, {
      ...s
    })
  }) : Ct(s);
}
function Dt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "leaveTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when leaving the top boundary of the scroll."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onLeaveTop () {
    // handle leaving top boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "This event only fires at the moment when scrolling starts from the very top of the content."
    })]
  });
}
function Vh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Dt, {
      ...s
    })
  }) : Dt(s);
}
function kt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "leaveTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при покидании верхней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onLeaveTop () {
    // обработка события покидания верхней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Это событие срабатывает только в момент начала прокрутки от самого верха контента."
    })]
  });
}
function qh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(kt, {
      ...s
    })
  }) : kt(s);
}
function _t(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "reachBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll reaches the bottom boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onReachBottom () {
    // handle reaching bottom boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "This event only fires at the moment when the very bottom of the content is reached."
    })]
  });
}
function Hh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(_t, {
      ...s
    })
  }) : _t(s);
}
function Xt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "reachBottom"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при достижении нижней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onReachBottom () {
    // обработка события достижения нижней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Это событие срабатывает только в момент достижения самого низа контента."
    })]
  });
}
function zh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Xt, {
      ...s
    })
  }) : Xt(s);
}
function $t(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "reachTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll reaches the top boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onReachTop () {
    // handle reaching top boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "This event only fires at the moment when the very top of the content is reached."
    })]
  });
}
function Yh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx($t, {
      ...s
    })
  }) : $t(s);
}
function Lt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "reachTop"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при достижении верхней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onReachTop () {
    // обработка события достижения верхней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Это событие срабатывает только в момент достижения самого верха контента."
    })]
  });
}
function Gh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Lt, {
      ...s
    })
  }) : Lt(s);
}
function Ft(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "top"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the scroll position reaches or leaves the top boundary."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onTop (isTop: boolean) {
    // handle reaching/leaving top boundary event
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isTop"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true if scroll is at the top position, false if it left the top position"]
      }), `
`]
    })]
  });
}
function Jh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ft, {
      ...s
    })
  }) : Ft(s);
}
function St(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "top"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при изменении состояния достижения верхней границы скролла."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onTop (isTop: boolean) {
    // обработка события достижения/покидания верхней границы
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "isTop"
        }), " - ", e.jsx(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в верхней позиции, false - если покинул верхнюю позицию"]
      }), `
`]
    })]
  });
}
function Kh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(St, {
      ...s
    })
  }) : St(s);
}
const Zh = {
  name: "Scrollbar",
  descriptions: {
    scrollbar: {
      en: Ah,
      ru: Nh
    },
    "event.top": {
      en: Jh,
      ru: Kh
    },
    "event.reachTop": {
      en: Yh,
      ru: Gh
    },
    "event.leaveTop": {
      en: Vh,
      ru: qh
    },
    "event.bottom": {
      en: Eh,
      ru: Ih
    },
    "event.reachBottom": {
      en: Hh,
      ru: zh
    },
    "event.leaveBottom": {
      en: Oh,
      ru: Wh
    },
    "event.edge": {
      en: Bh,
      ru: Uh
    }
  }
};
function Tt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Skeleton State Management"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "Skeleton"
      }), " component is used to display placeholders during content loading. The ", e.jsx(n.code, {
        children: "active"
      }), " property controls the visibility of all child elements within the component."]
    }), `
`, e.jsx(n.h3, {
      children: "Properties"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "active"
        }), " — Boolean property that activates skeleton mode and controls the visibility of child elements."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "How it works"
    }), `
`, e.jsxs(n.p, {
      children: ["When ", e.jsx(n.code, {
        children: "active"
      }), " is set to ", e.jsx(n.code, {
        children: "true"
      }), ", the Skeleton component hides all its child elements, ", e.jsx(n.strong, {
        children: "except"
      }), ":"]
    }), `
`, e.jsxs(n.ol, {
      children: [`
`, e.jsxs(n.li, {
        children: [`
`, e.jsx(n.p, {
          children: e.jsx(n.strong, {
            children: "Elements with special skeleton CSS classes:"
          })
        }), `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__text"
            }), " — for text placeholders"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__textVariant"
            }), " — alternative variant of text placeholders"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__background"
            }), " — for background placeholders"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__backgroundAfter"
            }), " — background placeholder via ::after pseudo-element"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__backgroundBefore"
            }), " — background placeholder via ::before pseudo-element"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__backgroundVariant"
            }), " — alternative variant of background placeholders"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__border"
            }), " — for border placeholders"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__borderVariant"
            }), " — alternative variant of border placeholders"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__none"
            }), " — elements that are always hidden in skeleton mode (even if they have other special classes)"]
          }), `
`]
        }), `
`]
      }), `
`, e.jsxs(n.li, {
        children: [`
`, e.jsx(n.p, {
          children: e.jsxs(n.strong, {
            children: ["Components with ", e.jsx(n.code, {
              children: "isSkeleton=true"
            }), " property"]
          })
        }), `
`]
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["When ", e.jsx(n.code, {
        children: "active"
      }), " is set to ", e.jsx(n.code, {
        children: "false"
      }), ", all child elements are displayed in normal mode."]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Use the component to improve user experience during data loading"
      }), `
`, e.jsx(n.li, {
        children: "Apply special skeleton classes to elements that should display as placeholders"
      }), `
`, e.jsx(n.li, {
        children: "Place placeholders where real content will appear"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Usage example"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Active skeleton -->
<Skeleton :active="true">
  <div class="skeleton__text">Visible text placeholder</div>
  <div class="skeleton__background">Visible background placeholder</div>
  <div>Hidden element</div>
  <ComponentWithSkeleton isSkeleton="true">Visible component</ComponentWithSkeleton>
</Skeleton>
`
      })
    })]
  });
}
function Qh(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Tt, {
      ...s
    })
  }) : Tt(s);
}
function Pt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Управление состоянием скелетона"
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент ", e.jsx(n.code, {
        children: "Skeleton"
      }), " используется для отображения заглушки во время загрузки контента. Свойство ", e.jsx(n.code, {
        children: "active"
      }), " управляет видимостью всех дочерних элементов компонента."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "active"
        }), " — Булево свойство, которое активирует режим скелетона и управляет видимостью дочерних элементов."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Принцип работы"
    }), `
`, e.jsxs(n.p, {
      children: ["Когда ", e.jsx(n.code, {
        children: "active"
      }), " установлено в ", e.jsx(n.code, {
        children: "true"
      }), ", компонент Skeleton скрывает все свои дочерние элементы, ", e.jsx(n.strong, {
        children: "кроме"
      }), ":"]
    }), `
`, e.jsxs(n.ol, {
      children: [`
`, e.jsxs(n.li, {
        children: [`
`, e.jsx(n.p, {
          children: e.jsx(n.strong, {
            children: "Элементов со специальными CSS-классами скелетона:"
          })
        }), `
`, e.jsxs(n.ul, {
          children: [`
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__text"
            }), " — для текстовых заглушек"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__textVariant"
            }), " — альтернативный вариант текстовых заглушек"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__background"
            }), " — для фоновых заглушек"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__backgroundAfter"
            }), " — фоновая заглушка через псевдоэлемент::after"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__backgroundBefore"
            }), " — фоновая заглушка через псевдоэлемент::before"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__backgroundVariant"
            }), " — альтернативный вариант фоновых заглушек"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__border"
            }), " — для границ заглушек"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__borderVariant"
            }), " — альтернативный вариант границ заглушек"]
          }), `
`, e.jsxs(n.li, {
            children: [e.jsx(n.code, {
              children: "skeleton__none"
            }), " — элементы, которые всегда скрыты в режиме скелетона (даже если у них есть другие специальные классы)"]
          }), `
`]
        }), `
`]
      }), `
`, e.jsxs(n.li, {
        children: [`
`, e.jsx(n.p, {
          children: e.jsxs(n.strong, {
            children: ["Компонентов со свойством ", e.jsx(n.code, {
              children: "isSkeleton=true"
            })]
          })
        }), `
`]
      }), `
`]
    }), `
`, e.jsxs(n.p, {
      children: ["Когда ", e.jsx(n.code, {
        children: "active"
      }), " установлено в ", e.jsx(n.code, {
        children: "false"
      }), ", все дочерние элементы отображаются в обычном режиме."]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Используйте компонент для улучшения пользовательского опыта во время загрузки данных"
      }), `
`, e.jsx(n.li, {
        children: "Применяйте специальные классы скелетона к элементам, которые должны отображаться как заглушки"
      }), `
`, e.jsx(n.li, {
        children: "Размещайте заглушки в местах, где будет появляться реальный контент"
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Пример использования"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<!-- Активный скелетон -->
<Skeleton :active="true">
  <div class="skeleton__text">Видимая текстовая заглушка</div>
  <div class="skeleton__background">Видимая фоновая заглушка</div>
  <div>Скрытый элемент</div>
  <ComponentWithSkeleton isSkeleton="true">Видимый компонент</ComponentWithSkeleton>
</Skeleton>
`
      })
    })]
  });
}
function na(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Pt, {
      ...s
    })
  }) : Pt(s);
}
function Rt(s) {
  const n = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "isActive"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "Skeleton"
      }), " component exports a computed property ", e.jsx(n.code, {
        children: "isActive"
      }), " that provides access to the current activation state of the skeleton."]
    }), `
`, e.jsx(n.h4, {
      children: "Description"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "isActive"
        }), " — A computed property of type ", e.jsx(n.code, {
          children: "ComputedRef<boolean>"
        }), " that reflects the current state of the component's ", e.jsx(n.code, {
          children: "active"
        }), " property."]
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "Purpose"
    }), `
`, e.jsxs(n.p, {
      children: ["The exported ", e.jsx(n.code, {
        children: "isActive"
      }), " value provides external access to the skeleton's activation state. This is useful for:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Synchronizing state with parent components"
      }), `
`, e.jsx(n.li, {
        children: "Creating dependent computations in the parent component"
      }), `
`, e.jsx(n.li, {
        children: "Programmatically controlling behavior of other elements based on skeleton state"
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "Usage"
    }), `
`, e.jsx(n.p, {
      children: "Access the exported value through a template reference:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<template>
  <div>
    <Skeleton ref="skeletonRef" :active="isLoading">
      <div class="skeleton__text">Loading content</div>
    </Skeleton>

    <p v-if="skeletonRef?.isActive">Loading...</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skeletonRef = ref()
const isLoading = ref(true)

// Programmatic state access
const checkSkeletonState = () => {
  if (skeletonRef.value?.isActive) {
    console.log('Skeleton is active')
  }
}
<\/script>
`
      })
    })]
  });
}
function ea(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Rt, {
      ...s
    })
  }) : Rt(s);
}
function At(s) {
  const n = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "isActive"
      })
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент ", e.jsx(n.code, {
        children: "Skeleton"
      }), " экспортирует вычисляемое свойство ", e.jsx(n.code, {
        children: "isActive"
      }), ", которое позволяет получить текущее состояние активности скелетона."]
    }), `
`, e.jsx(n.h4, {
      children: "Описание"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "isActive"
        }), " — Вычисляемое свойство типа ", e.jsx(n.code, {
          children: "ComputedRef<boolean>"
        }), ", которое отражает текущее состояние свойства ", e.jsx(n.code, {
          children: "active"
        }), " компонента."]
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "Назначение"
    }), `
`, e.jsxs(n.p, {
      children: ["Экспортируемое значение ", e.jsx(n.code, {
        children: "isActive"
      }), " предоставляет доступ к состоянию активности скелетона извне компонента. Это полезно для:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsx(n.li, {
        children: "Синхронизации состояния с родительскими компонентами"
      }), `
`, e.jsx(n.li, {
        children: "Создания зависимых вычислений в родительском компоненте"
      }), `
`, e.jsx(n.li, {
        children: "Программного контроля поведения других элементов в зависимости от состояния скелетона"
      }), `
`]
    }), `
`, e.jsx(n.h4, {
      children: "Использование"
    }), `
`, e.jsx(n.p, {
      children: "Получить доступ к экспортируемому значению можно через шаблонную ссылку:"
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<template>
  <div>
    <Skeleton ref="skeletonRef" :active="isLoading">
      <div class="skeleton__text">Загружаемый контент</div>
    </Skeleton>

    <p v-if="skeletonRef?.isActive">Идет загрузка...</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skeletonRef = ref()
const isLoading = ref(true)

// Программное получение состояния
const checkSkeletonState = () => {
  if (skeletonRef.value?.isActive) {
    console.log('Скелетон активен')
  }
}
<\/script>
`
      })
    })]
  });
}
function sa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(At, {
      ...s
    })
  }) : At(s);
}
const ia = {
  name: "Skeleton",
  descriptions: {
    active: {
      en: Qh,
      ru: na
    },
    "expose.isActive": {
      en: ea,
      ru: sa
    }
  }
};
function Nt(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Positioning direction"
    }), `
`, e.jsxs(n.p, {
      children: ["The ", e.jsx(n.code, {
        children: "axis"
      }), " property defines the primary guide for placing the window relative to the anchor element (", e.jsx(n.code, {
        children: "overElement"
      }), `) or the invocation area.
Default value: `, e.jsx(n.code, {
        children: "y"
      }), "."]
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsxs(n.p, {
        children: ["Works only in menu mode (", e.jsx(n.code, {
          children: 'adaptive="menu"'
        }), ")."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Values"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "x"
        }), " — Horizontal: places the window to the left or right of the anchor/cursor. The ", e.jsx(n.code, {
          children: "indent"
        }), " is applied horizontally."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "y"
        }), " — Vertical: places the window above or below the anchor/cursor. The ", e.jsx(n.code, {
          children: "indent"
        }), " is applied vertically."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "on"
        }), " — Over element: overlays the selected element/area and aligns to its center. When needed, internal scrolling adapts to keep the selected element visible."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Behavior"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Automatic side selection (left/right for ", e.jsx(n.code, {
          children: "x"
        }), ", top/bottom for ", e.jsx(n.code, {
          children: "y"
        }), ") based on available space. If space is limited on both sides, the window is centered in the available area."]
      }), `
`, e.jsx(n.li, {
        children: "Along the perpendicular direction the window fits into the viewport to avoid overflow."
      }), `
`, e.jsxs(n.li, {
        children: ["Context menu mode (", e.jsx(n.code, {
          children: "contextmenu = true"
        }), ") uses cursor coordinates instead of the anchor’s bounding box."]
      }), `
`, e.jsx(n.li, {
        children: "Respects viewport constraints and container paddings."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Recommendations"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "x"
        }), " — side menus, tooltips, and panels next to an element."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "y"
        }), " — dropdowns, menus, and hints opening above/below."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "on"
        }), " — popovers that overlay and focus a specific element in the content."]
      }), `
`]
    })]
  });
}
function ta(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Nt, {
      ...s
    })
  }) : Nt(s);
}
function Et(s) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Направление позиционирования"
    }), `
`, e.jsxs(n.p, {
      children: ["Свойство ", e.jsx(n.code, {
        children: "axis"
      }), " управляет основной направляющей для размещения окна относительно элемента‑якоря (", e.jsx(n.code, {
        children: "overElement"
      }), `) или области вызова.
Значение по умолчанию: `, e.jsx(n.code, {
        children: "y"
      }), "."]
    }), `
`, e.jsxs(n.blockquote, {
      children: [`
`, e.jsxs(n.p, {
        children: ["Работает только в режиме меню (", e.jsx(n.code, {
          children: 'adaptive="menu"'
        }), ")."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Значения"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "x"
        }), " — Горизонтально: окно располагается слева или справа от якоря/курсора. Отступ ", e.jsx(n.code, {
          children: "indent"
        }), " применяется по горизонтали."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "y"
        }), " — Вертикально: окно располагается сверху или снизу от якоря/курсора. Отступ ", e.jsx(n.code, {
          children: "indent"
        }), " применяется по вертикали."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "on"
        }), " — Поверх элемента: окно перекрывает выбранный элемент/область и ориентируется по его центру. При необходимости прокрутка содержимого подстраивается, чтобы выбранный элемент оставался видимым."]
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Поведение"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Автовыбор стороны (слева/справа для ", e.jsx(n.code, {
          children: "x"
        }), ", сверху/снизу для ", e.jsx(n.code, {
          children: "y"
        }), ") в зависимости от доступного пространства. При нехватке места окно центрируется в доступной области."]
      }), `
`, e.jsx(n.li, {
        children: "По перпендикулярному направлению окно вписывается во вьюпорт и не выходит за его пределы."
      }), `
`, e.jsxs(n.li, {
        children: ["Режим контекстного меню (", e.jsx(n.code, {
          children: "contextmenu = true"
        }), ") использует координаты курсора вместо прямоугольника якоря."]
      }), `
`, e.jsx(n.li, {
        children: "Учитываются ограничения вьюпорта и внутренние отступы контейнера."
      }), `
`]
    }), `
`, e.jsx(n.h3, {
      children: "Рекомендации"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "x"
        }), " — боковые меню, панели рядом с элементом, тултипы по бокам."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "y"
        }), " — выпадающие списки, меню и подсказки сверху/снизу."]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "on"
        }), " — поповеры, перекрывающие и фокусирующие конкретный элемент."]
      }), `
`]
    })]
  });
}
function ra(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Et, {
      ...s
    })
  }) : Et(s);
}
function It(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "CSS Classes for Behavior Control"
    }), `
`, e.jsx(n.p, {
      children: "The Window component uses a system of helper CSS classes to manage various window states and behaviors."
    }), `
`, e.jsx(n.h3, {
      children: "Blocking Classes"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--block"
        })
      }), ` - Class prevents the window from closing when clicking outside its boundaries.
Can be added to any element that is outside the current window.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--blockChildren"
        })
      }), ` - Class prevents the current window from closing.
Can be added to any element that is inside the current window.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--blockOther"
        })
      }), ` - Class prevents other windows from closing until the current one is closed.
Can be added to any element that is inside the current window.`]
    }), `
`, e.jsx(n.h3, {
      children: "Control Classes"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--close"
        })
      }), ` - Class applies to elements for closing the window (e.g., close button).
Can be added to any close control element.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--controlOpenOnly"
        })
      }), ` - Class applies to control elements that only open the window and never close it.
Can be added to any open control element.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--controlStatic"
        })
      }), ` - Class applies to control elements in static mode, preventing any actions.
Can be added to any control element that should remain static.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--static"
        })
      }), ` - Class applies to elements inside the window, canceling all actions.
Can be added to any element within the window.`]
    })]
  });
}
function ca(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(It, {
      ...s
    })
  }) : It(s);
}
function Bt(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "CSS классы для управления поведением"
    }), `
`, e.jsx(n.p, {
      children: "Компонент Window использует систему вспомогательных CSS классов для управления различными состояниями и поведением окна."
    }), `
`, e.jsx(n.h3, {
      children: "Классы блокировки"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--block"
        })
      }), ` - Класс предотвращает закрытие окна при клике за его пределами.
Класс можно добавить к любому элементу, который находится за пределами текущего окна.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--blockChildren"
        })
      }), ` - Класс предотвращает закрытие текущего окна.
Класс можно добавить к любому элементу, который находится внутри текущего окна.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--blockOther"
        })
      }), ` - Класс предотвращает закрытие других окон, пока не закрыто текущее.
Класс можно добавить к любому элементу, который находится внутри текущего окна.`]
    }), `
`, e.jsx(n.h3, {
      children: "Классы управления"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--close"
        })
      }), ` - Класс применяется к элементам для закрытия окна.
Класс можно добавить к любому элементу управления закрытием окна (например, кнопке закрытия).`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--controlOpenOnly"
        })
      }), ` - Класс применяется к элементам управления, которые только открывают окно и не закрывают его.
Класс можно добавить к любому элементу, отвечающему за открытие окна.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--controlStatic"
        })
      }), ` - Класс применяется к элементам управления в статическом режиме, предотвращая любые действия.
Класс можно добавить к любому элементу управления, который должен оставаться статическим.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "*--static"
        })
      }), ` - Класс применяется к элементам внутри окна, отменяя все действия.
Класс можно добавить к любому элементу внутри окна.`]
    })]
  });
}
function la(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Bt, {
      ...s
    })
  }) : Bt(s);
}
function Ut(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "window"
      })
    }), `
`, e.jsx(n.p, {
      children: "Event that triggers when the window state changes (open/close)."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onWindow (options: WindowEmitOptions) {
    // handle window state change
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Parameters:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "options"
        }), " — ", e.jsx(n.code, {
          children: "WindowEmitOptions"
        }), " — window data: id, elements, and the ", e.jsx(n.code, {
          children: "open"
        }), " flag"]
      }), `
`]
    })]
  });
}
function oa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ut, {
      ...s
    })
  }) : Ut(s);
}
function Ot(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "window"
      })
    }), `
`, e.jsx(n.p, {
      children: "Событие, которое срабатывает при изменении состояния окна (открытие/закрытие)."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function onWindow (options: WindowEmitOptions) {
    // обработка изменения состояния окна
}
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Параметры:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "options"
        }), " — ", e.jsx(n.code, {
          children: "WindowEmitOptions"
        }), " — данные окна: id, элементы и флаг ", e.jsx(n.code, {
          children: "open"
        })]
      }), `
`]
    })]
  });
}
function da(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ot, {
      ...s
    })
  }) : Ot(s);
}
function Wt(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "control"
      })
    }), `
`, e.jsx(n.p, {
      children: "Control item data for window management."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `const control: WindowControlItem
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Structure:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "class"
        }), " — ", e.jsx(n.code, {
          children: "string"
        }), " — CSS class for the trigger element"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "open"
        }), " — ", e.jsx(n.code, {
          children: "Ref<boolean>"
        }), " — reactive open state of the window"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "onclick"
        }), " — ", e.jsx(n.code, {
          children: "WindowEventClick"
        }), " — click handler for the control"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "oncontextmenu"
        }), " — ", e.jsx(n.code, {
          children: "WindowEventClick"
        }), " — context‑menu handler for the control"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "classesWindow"
        }), " — ", e.jsx(n.code, {
          children: "WindowClassesList"
        }), " — set of window CSS classes"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "binds"
        }), " — ", e.jsx(n.code, {
          children: "{ class: string; onclick: WindowEventClick; oncontextmenu: WindowEventClick }"
        }), " — ready‑to‑use bindings for ", e.jsx(n.code, {
          children: "v-bind"
        })]
      }), `
`]
    })]
  });
}
function ha(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Wt, {
      ...s
    })
  }) : Wt(s);
}
function Vt(s) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "control"
      })
    }), `
`, e.jsx(n.p, {
      children: "Данные элемента управления для управления окном."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `const control: WindowControlItem
`
      })
    }), `
`, e.jsx(n.p, {
      children: "Состав:"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "class"
        }), " — ", e.jsx(n.code, {
          children: "string"
        }), " — CSS‑класс для элемента‑триггера"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "open"
        }), " — ", e.jsx(n.code, {
          children: "Ref<boolean>"
        }), " — реактивное состояние открытия окна"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "onclick"
        }), " — ", e.jsx(n.code, {
          children: "WindowEventClick"
        }), " — обработчик клика по контролу"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "oncontextmenu"
        }), " — ", e.jsx(n.code, {
          children: "WindowEventClick"
        }), " — обработчик контекстного меню по контролу"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "classesWindow"
        }), " — ", e.jsx(n.code, {
          children: "WindowClassesList"
        }), " — набор CSS‑классов окна"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "binds"
        }), " — ", e.jsx(n.code, {
          children: "{ class: string; onclick: WindowEventClick; oncontextmenu: WindowEventClick }"
        }), " — готовые биндинги для ", e.jsx(n.code, {
          children: "v-bind"
        })]
      }), `
`]
    })]
  });
}
function aa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Vt, {
      ...s
    })
  }) : Vt(s);
}
function qt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "id"
      })
    }), `
`, e.jsx(n.p, {
      children: "Unique window identifier."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `const id: string
`
      })
    })]
  });
}
function xa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(qt, {
      ...s
    })
  }) : qt(s);
}
function Ht(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "id"
      })
    }), `
`, e.jsx(n.p, {
      children: "Уникальный идентификатор окна."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `const id: string
`
      })
    })]
  });
}
function ja(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Ht, {
      ...s
    })
  }) : Ht(s);
}
function zt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "open"
      })
    }), `
`, e.jsx(n.p, {
      children: "Reactive window visibility state."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `const open: Ref<boolean>
`
      })
    })]
  });
}
function ua(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(zt, {
      ...s
    })
  }) : zt(s);
}
function Yt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "open"
      })
    }), `
`, e.jsx(n.p, {
      children: "Реактивное состояние видимости окна."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `const open: Ref<boolean>
`
      })
    })]
  });
}
function pa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Yt, {
      ...s
    })
  }) : Yt(s);
}
function Gt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "setOpen"
      })
    }), `
`, e.jsx(n.p, {
      children: "Sets the window open state."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function setOpen(open: boolean): Promise<void>
`
      })
    })]
  });
}
function ma(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Gt, {
      ...s
    })
  }) : Gt(s);
}
function Jt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "setOpen"
      })
    }), `
`, e.jsx(n.p, {
      children: "Устанавливает состояние открытия окна."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function setOpen(open: boolean): Promise<void>
`
      })
    })]
  });
}
function ga(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Jt, {
      ...s
    })
  }) : Jt(s);
}
function Kt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "toClose"
      })
    }), `
`, e.jsx(n.p, {
      children: "Transition to closing state."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `function toClose(): Promise<void>
`
      })
    })]
  });
}
function fa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Kt, {
      ...s
    })
  }) : Kt(s);
}
function Zt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "toClose"
      })
    }), `
`, e.jsx(n.p, {
      children: "Переход в состояние закрытия."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `function toClose(): Promise<void>
`
      })
    })]
  });
}
function ya(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Zt, {
      ...s
    })
  }) : Zt(s);
}
function Qt(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "toOpen"
      })
    }), `
`, e.jsx(n.p, {
      children: "Transition to opening state."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `function toOpen(): Promise<void>
`
      })
    })]
  });
}
function ba(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(Qt, {
      ...s
    })
  }) : Qt(s);
}
function nr(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "toOpen"
      })
    }), `
`, e.jsx(n.p, {
      children: "Переход в состояние открытия."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        children: `function toOpen(): Promise<void>
`
      })
    })]
  });
}
function va(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(nr, {
      ...s
    })
  }) : nr(s);
}
function er(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "toggle"
      })
    }), `
`, e.jsx(n.p, {
      children: "Toggles the window visibility."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function toggle(): Promise<void>
`
      })
    })]
  });
}
function Ma(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(er, {
      ...s
    })
  }) : er(s);
}
function sr(s) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h3, {
      children: e.jsx(n.code, {
        children: "toggle"
      })
    }), `
`, e.jsx(n.p, {
      children: "Переключает видимость окна."
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-ts",
        children: `function toggle(): Promise<void>
`
      })
    })]
  });
}
function wa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(sr, {
      ...s
    })
  }) : sr(s);
}
function ir(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Lifecycle Hooks"
    }), `
`, e.jsx(n.p, {
      children: "The Window component provides a lifecycle hooks system for managing various stages of the window lifecycle."
    }), `
`, e.jsx(n.h3, {
      children: "Opening Hooks"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "preparation"
        })
      }), ` - Called during the window preparation phase before opening.
Allows executing preliminary setup and data initialization.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "beforeOpening"
        })
      }), ` - Called immediately before the window opening process begins.
Returning `, e.jsx(n.code, {
        children: "false"
      }), " prevents the window from opening."]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "opening"
        })
      }), ` - Called during the window opening process while animation is running.
Returning `, e.jsx(n.code, {
        children: "false"
      }), " interrupts the window opening process."]
    }), `
`, e.jsx(n.h3, {
      children: "Closing Hooks"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "beforeClosing"
        })
      }), ` - Called immediately before the window closing process begins.
Returning `, e.jsx(n.code, {
        children: "false"
      }), " prevents the window from closing."]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "closing"
        })
      }), ` - Called during the window closing process while animation is running.
Returning `, e.jsx(n.code, {
        children: "false"
      }), " interrupts the window closing process."]
    }), `
`, e.jsx(n.h3, {
      children: "Usage"
    }), `
`, e.jsxs(n.p, {
      children: ["All hooks are asynchronous functions and can return ", e.jsx(n.code, {
        children: "Promise<boolean>"
      }), " or ", e.jsx(n.code, {
        children: "boolean"
      }), ". Returning ", e.jsx(n.code, {
        children: "false"
      }), " stops the execution of the corresponding action."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-typescript",
        children: `{
  preparation: async () => {
    // Data preparation
    await loadData()
  },
  beforeOpening: () => {
    // Condition checking
    return userCanOpenWindow()
  },
  opening: () => {
    // Logic during opening
    return true
  },
  beforeClosing: () => {
    // Check before closing
    return confirmClose()
  },
  closing: () => {
    // Cleanup on closing
    cleanup()
    return true
  }
}
`
      })
    })]
  });
}
function Ca(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(ir, {
      ...s
    })
  }) : ir(s);
}
function tr(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Lifecycle хуки"
    }), `
`, e.jsx(n.p, {
      children: "Компонент Window предоставляет систему lifecycle-хуков для управления различными этапами жизненного цикла окна."
    }), `
`, e.jsx(n.h3, {
      children: "Хуки открытия"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "preparation"
        })
      }), ` - Вызывается на этапе подготовки окна перед открытием.
Позволяет выполнить предварительные настройки и инициализацию данных.`]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "beforeOpening"
        })
      }), ` - Вызывается непосредственно перед началом процесса открытия окна.
Возврат `, e.jsx(n.code, {
        children: "false"
      }), " предотвращает открытие окна."]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "opening"
        })
      }), ` - Вызывается в процессе открытия окна во время анимации.
Возврат `, e.jsx(n.code, {
        children: "false"
      }), " прерывает процесс открытия окна."]
    }), `
`, e.jsx(n.h3, {
      children: "Хуки закрытия"
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "beforeClosing"
        })
      }), ` - Вызывается непосредственно перед началом процесса закрытия окна.
Возврат `, e.jsx(n.code, {
        children: "false"
      }), " предотвращает закрытие окна."]
    }), `
`, e.jsxs(n.p, {
      children: [e.jsx(n.strong, {
        children: e.jsx(n.code, {
          children: "closing"
        })
      }), ` - Вызывается в процессе закрытия окна во время анимации.
Возврат `, e.jsx(n.code, {
        children: "false"
      }), " прерывает процесс закрытия окна."]
    }), `
`, e.jsx(n.h3, {
      children: "Использование"
    }), `
`, e.jsxs(n.p, {
      children: ["Все хуки являются асинхронными функциями и могут возвращать ", e.jsx(n.code, {
        children: "Promise<boolean>"
      }), " или ", e.jsx(n.code, {
        children: "boolean"
      }), ". Возврат ", e.jsx(n.code, {
        children: "false"
      }), " останавливает выполнение соответствующего действия."]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-typescript",
        children: `{
  preparation: async () => {
    // Подготовка данных
    await loadData()
  },
  beforeOpening: () => {
    // Проверка условий
    return userCanOpenWindow()
  },
  opening: () => {
    // Логика во время открытия
    return true
  },
  beforeClosing: () => {
    // Проверка перед закрытием
    return confirmClose()
  },
  closing: () => {
    // Очистка при закрытии
    cleanup()
    return true
  }
}
`
      })
    })]
  });
}
function Da(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(tr, {
      ...s
    })
  }) : tr(s);
}
function rr(s) {
  const n = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Static Mode (staticMode)"
    }), `
`, e.jsxs(n.p, {
      children: ["The Window component supports static mode operation through the ", e.jsx(n.code, {
        children: "staticMode"
      }), " property. In this mode, the window works as an embedded component without modal behavior:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Content displays immediately"
        }), " - window is not hidden and doesn't require activation"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Animations disabled"
        }), " - no appearance/disappearance effects"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Positioning disabled"
        }), " - window is embedded in document flow"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Works with adaptive"
        }), " - when ", e.jsx(n.code, {
          children: "adaptive"
        }), " property has one of static mode values (for example, ", e.jsx(n.code, {
          children: "static"
        }), "), static mode is enabled"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Static mode is especially useful for embedding window content directly into the interface without modal behavior."
    })]
  });
}
function ka(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(rr, {
      ...s
    })
  }) : rr(s);
}
function cr(s) {
  const n = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Статический режим (staticMode)"
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент Window поддерживает статический режим работы через свойство ", e.jsx(n.code, {
        children: "staticMode"
      }), ". В этом режиме окно работает как встроенный компонент без модального поведения:"]
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Содержимое отображается сразу"
        }), " - окно не скрывается и не требует активации"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Отключены анимации"
        }), " - нет эффектов появления/исчезновения"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Отключено позиционирование"
        }), " - окно встраивается в поток документа"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.strong, {
          children: "Работает с adaptive"
        }), " - когда свойство ", e.jsx(n.code, {
          children: "adaptive"
        }), " имеет один из статичных режимов (например, ", e.jsx(n.code, {
          children: "static"
        }), "), включается статичный режим"]
      }), `
`]
    }), `
`, e.jsx(n.p, {
      children: "Статический режим особенно полезен для встраивания содержимого окна непосредственно в интерфейс без модального поведения."
    })]
  });
}
function _a(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(cr, {
      ...s
    })
  }) : cr(s);
}
function lr(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Two-way binding (v-model)"
    }), `
`, e.jsxs(n.p, {
      children: ["The Window component supports two-way binding of the open state via the ", e.jsx(n.code, {
        children: "v-model"
      }), " directive."]
    }), `
`, e.jsx(n.h3, {
      children: "Props and events"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "open: boolean"
        }), " — window visibility state"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "update:open(boolean)"
        }), " — update event emitted when the state changes"]
      }), `
`]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<Window v-model:open="isOpen"/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Notes"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Programmatic control remains available via expose methods (", e.jsx(n.code, {
          children: "open"
        }), "/", e.jsx(n.code, {
          children: "toggle"
        }), "/", e.jsx(n.code, {
          children: "setOpen"
        }), ") and corresponding events."]
      }), `
`, e.jsxs(n.li, {
        children: ["If you need a static, always-mounted window (that ignores v-model), see the ", e.jsx(n.code, {
          children: "staticMode"
        }), " section."]
      }), `
`]
    })]
  });
}
function Xa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(lr, {
      ...s
    })
  }) : lr(s);
}
function or(s) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...s.components
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(n.h2, {
      children: "Двусторонняя привязка (v-model)"
    }), `
`, e.jsxs(n.p, {
      children: ["Компонент Window поддерживает двустороннюю привязку состояния открытия через директиву ", e.jsx(n.code, {
        children: "v-model"
      }), "."]
    }), `
`, e.jsx(n.h3, {
      children: "Свойства и события"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "open: boolean"
        }), " — состояние видимости окна"]
      }), `
`, e.jsxs(n.li, {
        children: [e.jsx(n.code, {
          children: "update:open(boolean)"
        }), " — событие обновления при изменении состояния"]
      }), `
`]
    }), `
`, e.jsx(n.pre, {
      children: e.jsx(n.code, {
        className: "language-html",
        children: `<Window v-model:open="isOpen"/>
`
      })
    }), `
`, e.jsx(n.h3, {
      children: "Заметки"
    }), `
`, e.jsxs(n.ul, {
      children: [`
`, e.jsxs(n.li, {
        children: ["Можно программно управлять окном через expose‑методы (", e.jsx(n.code, {
          children: "open"
        }), "/", e.jsx(n.code, {
          children: "toggle"
        }), "/", e.jsx(n.code, {
          children: "setOpen"
        }), ") и соответствующие события"]
      }), `
`, e.jsxs(n.li, {
        children: ["Если нужно статически смонтированное окно (игнорирующее v-model), см. раздел ", e.jsx(n.code, {
          children: "staticMode"
        })]
      }), `
`]
    })]
  });
}
function $a(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(or, {
      ...s
    })
  }) : or(s);
}
function dr(s) {
  const n = {
    p: "p",
    ...s.components
  };
  return e.jsx(n.p, {
    children: "The Window component is a universal modal window for displaying content over the main interface. It supports various positioning types, adaptive behavior, opening/closing animations, and integration with other design system components."
  });
}
function La(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(dr, {
      ...s
    })
  }) : dr(s);
}
function hr(s) {
  const n = {
    p: "p",
    ...s.components
  };
  return e.jsx(n.p, {
    children: "Компонент Window представляет собой универсальное модальное окно для отображения контента поверх основного интерфейса. Он поддерживает различные типы позиционирования, адаптивное поведение, анимации открытия/закрытия и интеграцию с другими компонентами системы дизайна."
  });
}
function Fa(s = {}) {
  const { wrapper: n } = s.components || {};
  return n ? e.jsx(n, {
    ...s,
    children: e.jsx(hr, {
      ...s
    })
  }) : hr(s);
}
const Sa = {
  name: "Window",
  descriptions: {
    axis: {
      en: ta,
      ru: ra
    },
    classes: {
      en: ca,
      ru: la
    },
    "event.window": {
      en: oa,
      ru: da
    },
    "expose.control": {
      en: ha,
      ru: aa
    },
    "expose.id": {
      en: xa,
      ru: ja
    },
    "expose.open": {
      en: ua,
      ru: pa
    },
    "expose.setOpen": {
      en: ma,
      ru: ga
    },
    "expose.toClose": {
      en: fa,
      ru: ya
    },
    "expose.toOpen": {
      en: ba,
      ru: va
    },
    "expose.toggle": {
      en: Ma,
      ru: wa
    },
    hooks: {
      en: Ca,
      ru: Da
    },
    staticMode: {
      en: ka,
      ru: _a
    },
    "v-model": {
      en: Xa,
      ru: $a
    },
    window: {
      en: La,
      ru: Fa
    }
  }
}, Ta = [
  cc,
  yc,
  Ec,
  zc,
  nl,
  al,
  Ml,
  Tl,
  Bl,
  zl,
  ao,
  mo,
  yo,
  ko,
  Fo,
  Vo,
  Qo,
  cd,
  pd,
  fd,
  Id,
  vh,
  nh,
  Sh,
  Rh,
  Zh,
  ia,
  Sa
];
class Na {
  item;
  mdx;
  /**
   * Constructor
   * @param name - Name of the component to find in the descriptions/ Имя компонента для поиска в описаниях
   */
  constructor(n) {
    this.item = $r.find((o) => o.name === n), this.mdx = Ta.find((o) => o.name === n);
  }
  /**
   * Get the description of the component
   *
   * Возвращает описание компонента
   * @return The description of the component or undefined if not found/ Описание компонента или undefined, если не найдено
   */
  getItem() {
    return this.item;
  }
  /**
   * Get an additional description of the component for a specific type
   *
   * Возвращает дополнительное описание компонента для конкретного типа
   * @param type - Type of the description to retrieve/ тип описания для получения
   */
  getDescriptionByType(n) {
    const o = this.mdx?.descriptions?.[n];
    return kr(o ? _r(o) ? o[Xr.getLanguage()] : o : "");
  }
}
export {
  Na as W,
  e as j
};
