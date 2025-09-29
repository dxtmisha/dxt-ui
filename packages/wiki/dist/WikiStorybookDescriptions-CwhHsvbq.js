import { executeFunction as Tr, isObjectNotArray as Pr, Geo as Fr } from "@dxtmisha/functional";
import { w as Ar } from "./wikiDescriptions-CDAK5PYQ.js";
import { jsx as e, jsxs as t, Fragment as r } from "/Volumes/T7/Git/dxt-ui/node_modules/react/jsx-runtime.js";
function l(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "click"
      })
    }), `
`, e(n.p, {
      children: "Component click event triggered by user interaction with the element."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Nr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(l, {
      ...i
    })
  }) : l(i);
}
function o(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "click"
      })
    }), `
`, e(n.p, {
      children: "Событие клика компонента, возникающее при взаимодействии пользователя с элементом."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Ir(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(o, {
      ...i
    })
  }) : o(i);
}
function d(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "clickLite"
      })
    }), `
`, e(n.p, {
      children: "Lightweight click event of the component, passing only data without the original DOM event."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Rr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(d, {
      ...i
    })
  }) : d(i);
}
function h(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "clickLite"
      })
    }), `
`, e(n.p, {
      children: "Облегченное событие клика компонента, передающее только данные без оригинального DOM события."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Br(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(h, {
      ...i
    })
  }) : h(i);
}
function a(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "bars"
      })
    }), `
`, e(n.p, {
      children: "Fires when a Bars item is clicked. Passes the native mouse event and a structured payload about the click."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.p, {
      children: "Where:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "type"
        }), ' — click/button type (e.g., "back" for the Back button)']
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "value"
        }), " — arbitrary button value"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "detail"
        }), " — extra data if provided"]
      }), `
`]
    })]
  });
}
function Er(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(a, {
      ...i
    })
  }) : a(i);
}
function s(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "bars"
      })
    }), `
`, e(n.p, {
      children: "Срабатывает при клике по элементу панелей (Bars). Передаёт нативное событие мыши и полезную нагрузку о клике."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onBars (event: MouseEvent, value: { type: string; value: any; detail?: Record<string, any> }) {
  // обработка клика по кнопке панели
}
`
      })
    }), `
`, e(n.p, {
      children: "Где:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "type"
        }), " — тип клика/кнопки (например, ", e(n.code, {
          children: '"back"'
        }), " для кнопки назад)"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "value"
        }), " — произвольное значение кнопки"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "detail"
        }), " — дополнительные данные (если есть)"]
      }), `
`]
    })]
  });
}
function Ur(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(s, {
      ...i
    })
  }) : s(i);
}
function u(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "barsLite"
      })
    }), `
`, e(n.p, {
      children: "Fires when a Bars item is clicked in lite mode. Passes only the structured click payload."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onBarsLite (value: { type: string; value: any; detail?: Record<string, any> }) {
  // handle toolbar item click (lite)
}
`
      })
    }), `
`, e(n.p, {
      children: "Where:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "type"
        }), ' — click/button type (e.g., "back")']
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "value"
        }), " — arbitrary button value"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "detail"
        }), " — extra data if provided"]
      }), `
`]
    })]
  });
}
function Hr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(u, {
      ...i
    })
  }) : u(i);
}
function p(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "barsLite"
      })
    }), `
`, e(n.p, {
      children: "Срабатывает при клике по элементу панелей (Bars) в облегчённом режиме. Передаёт только полезную нагрузку о клике."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onBarsLite (value: { type: string; value: any; detail?: Record<string, any> }) {
  // обработка клика по кнопке панели (lite)
}
`
      })
    }), `
`, e(n.p, {
      children: "Где:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "type"
        }), " — тип клика/кнопки (например, ", e(n.code, {
          children: '"back"'
        }), ")"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "value"
        }), " — произвольное значение кнопки"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "detail"
        }), " — дополнительные данные (если есть)"]
      }), `
`]
    })]
  });
}
function Wr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(p, {
      ...i
    })
  }) : p(i);
}
function m(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "barsBack"
      })
    }), `
`, e(n.p, {
      children: 'Fires when the "Back" button in Bars is clicked. Passes only the structured click payload.'
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onBarsBack (value: { type: string; value: any; detail?: Record<string, any> }) {
  // handle Back button click
}
`
      })
    }), `
`, e(n.p, {
      children: "Where:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "type"
        }), ' — click/button type (will be "back")']
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "value"
        }), " — arbitrary button value"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "detail"
        }), " — extra data if provided"]
      }), `
`]
    })]
  });
}
function Vr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(m, {
      ...i
    })
  }) : m(i);
}
function g(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "barsBack"
      })
    }), `
`, e(n.p, {
      children: "Срабатывает при клике по кнопке «Назад» в панелях (Bars). Передаёт только полезную нагрузку о клике."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onBarsBack (value: { type: string; value: any; detail?: Record<string, any> }) {
  // обработка клика по кнопке «Назад»
}
`
      })
    }), `
`, e(n.p, {
      children: "Где:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "type"
        }), " — тип клика/кнопки (значение будет ", e(n.code, {
          children: '"back"'
        }), ")"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "value"
        }), " — произвольное значение кнопки"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "detail"
        }), " — дополнительные данные (если есть)"]
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Используйте событие для реализации возврата/закрытия текущего контекста. Кнопку можно скрыть свойством ", e(n.code, {
        children: "barsBackHide"
      }), "."]
    })]
  });
}
function qr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(g, {
      ...i
    })
  }) : g(i);
}
function f(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarBottom"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll position reaches or leaves the bottom boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarBottom (isBottom: boolean) {
    // handle reaching/leaving bottom boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isBottom"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true if scroll is at the bottom position, false — if it left the bottom position"]
      }), `
`]
    })]
  });
}
function zr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(f, {
      ...i
    })
  }) : f(i);
}
function y(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarBottom"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при изменении состояния достижения нижней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarBottom (isBottom: boolean) {
    // обработка события достижения/покидания нижней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isBottom"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в нижней позиции, false — если покинул нижнюю позицию"]
      }), `
`]
    })]
  });
}
function Or(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(y, {
      ...i
    })
  }) : y(i);
}
function b(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarEdge"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll boundary state changes (top or bottom)."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarEdge (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) {
    // handle scroll boundary change event
}
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isTop"
        }), " — ", e(n.code, {
          children: "boolean"
        }), " — true if scroll is at the top position"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "isBottom"
        }), " — ", e(n.code, {
          children: "boolean"
        }), " — true if scroll is at the bottom position"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "edge"
        }), " — ", e(n.code, {
          children: "ScrollbarEdgeType"
        }), " — current active scroll boundary"]
      }), `
`]
    })]
  });
}
function jr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(b, {
      ...i
    })
  }) : b(i);
}
function v(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarEdge"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при изменении состояния границ скролла (верхней или нижней)."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarEdge (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) {
    // обработка изменения состояния границ скролла
}
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isTop"
        }), " — ", e(n.code, {
          children: "boolean"
        }), " — true, если скролл в верхней позиции"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "isBottom"
        }), " — ", e(n.code, {
          children: "boolean"
        }), " — true, если скролл в нижней позиции"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "edge"
        }), " — ", e(n.code, {
          children: "ScrollbarEdgeType"
        }), " — текущая активная граница скролла"]
      }), `
`]
    })]
  });
}
function Yr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(v, {
      ...i
    })
  }) : v(i);
}
function M(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarLeaveBottom"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll leaves the bottom boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarLeaveBottom () {
    // handle leaving bottom boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "Fires at the moment scrolling starts from the very bottom upwards."
    })]
  });
}
function Gr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(M, {
      ...i
    })
  }) : M(i);
}
function w(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarLeaveBottom"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при покидании нижней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarLeaveBottom () {
    // обработка события покидания нижней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Срабатывает в момент начала прокрутки от самого низа контента вверх."
    })]
  });
}
function Kr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(w, {
      ...i
    })
  }) : w(i);
}
function C(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarLeaveTop"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll leaves the top boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarLeaveTop () {
    // handle leaving top boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "This event fires at the moment scrolling begins from the very top."
    })]
  });
}
function Jr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(C, {
      ...i
    })
  }) : C(i);
}
function D(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarLeaveTop"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при покидании верхней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarLeaveTop () {
    // обработка события покидания верхней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Срабатывает в момент начала прокрутки от самого верха контента."
    })]
  });
}
function Zr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(D, {
      ...i
    })
  }) : D(i);
}
function x(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarReachBottom"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll reaches the bottom boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarReachBottom () {
    // handle reaching bottom boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "This event fires at the moment the very bottom of the content is reached."
    })]
  });
}
function Qr(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(x, {
      ...i
    })
  }) : x(i);
}
function k(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarReachBottom"
      })
    }), `
`, e(n.p, {
      children: "Срабатывает, когда скролл достигает нижней границы."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarReachBottom () {
    // обработка достижения нижней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Одноразовый момент в точке самого низа контента."
    })]
  });
}
function nc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(k, {
      ...i
    })
  }) : k(i);
}
function _(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarReachTop"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll reaches the top boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarReachTop () {
    // handle reaching top boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "This event fires at the moment the very top of the content is reached."
    })]
  });
}
function ec(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(_, {
      ...i
    })
  }) : _(i);
}
function X(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarReachTop"
      })
    }), `
`, e(n.p, {
      children: "Срабатывает, когда скролл достигает верхней границы."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarReachTop () {
    // обработка достижения верхней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Это одноразовый момент в точке самого верха контента."
    })]
  });
}
function ic(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(X, {
      ...i
    })
  }) : X(i);
}
function $(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarTop"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll position reaches or leaves the top boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarTop (isTop: boolean) {
    // handle reaching/leaving top boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isTop"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true if scroll is at the top position, false — if it left the top position"]
      }), `
`]
    })]
  });
}
function tc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e($, {
      ...i
    })
  }) : $(i);
}
function L(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "scrollbarTop"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при изменении состояния достижения верхней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onScrollbarTop (isTop: boolean) {
    // обработка события достижения/покидания верхней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isTop"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в верхней позиции, false — если покинул верхнюю позицию"]
      }), `
`]
    })]
  });
}
function rc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(L, {
      ...i
    })
  }) : L(i);
}
function S(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "window"
      })
    }), `
`, e(n.p, {
      children: "Fires on Window state changes and passes a summary of parameters."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.p, {
      children: "Where:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "id"
        }), " — unique window identifier"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "element"
        }), " — window DOM element"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "control"
        }), " — control/trigger DOM element"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "open"
        }), " — current open state (true/false)"]
      }), `
`]
    })]
  });
}
function cc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(S, {
      ...i
    })
  }) : S(i);
}
function T(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "window"
      })
    }), `
`, e(n.p, {
      children: "Срабатывает при изменении состояния окна (Window) и передаёт сводку параметров."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.p, {
      children: "Где:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "id"
        }), " — уникальный идентификатор окна"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "element"
        }), " — DOM‑элемент окна"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "control"
        }), " — DOM‑элемент управляющей кнопки/контрола"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "open"
        }), " — текущее состояние открытия окна (true/false)"]
      }), `
`]
    })]
  });
}
function lc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(T, {
      ...i
    })
  }) : T(i);
}
const oc = {
  name: "Event",
  descriptions: {
    click: {
      en: Nr,
      ru: Ir
    },
    clickLite: {
      en: Rr,
      ru: Br
    },
    bars: {
      en: Er,
      ru: Ur
    },
    barsLite: {
      en: Hr,
      ru: Wr
    },
    barsBack: {
      en: Vr,
      ru: qr
    },
    scrollbarBottom: {
      en: zr,
      ru: Or
    },
    scrollbarEdge: {
      en: jr,
      ru: Yr
    },
    scrollbarLeaveBottom: {
      en: Gr,
      ru: Kr
    },
    scrollbarLeaveTop: {
      en: Jr,
      ru: Zr
    },
    scrollbarReachBottom: {
      en: Qr,
      ru: nc
    },
    scrollbarReachTop: {
      en: ec,
      ru: ic
    },
    scrollbarTop: {
      en: tc,
      ru: rc
    },
    window: {
      en: cc,
      ru: lc
    }
  }
};
function P(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "detail"
      })
    }), `
`, e(n.p, {
      children: "Additional component data."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type detail = Record<string, any> | undefined
`
      })
    })]
  });
}
function dc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(P, {
      ...i
    })
  }) : P(i);
}
function F(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "detail"
      })
    }), `
`, e(n.p, {
      children: "Дополнительные данные компонента."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type detail = Record<string, any> | undefined
`
      })
    })]
  });
}
function hc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(F, {
      ...i
    })
  }) : F(i);
}
function A(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "value"
      })
    }), `
`, e(n.p, {
      children: "Current component value."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type value = any
`
      })
    })]
  });
}
function ac(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(A, {
      ...i
    })
  }) : A(i);
}
function N(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "value"
      })
    }), `
`, e(n.p, {
      children: "Текущее значение компонента."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type value = any
`
      })
    })]
  });
}
function sc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(N, {
      ...i
    })
  }) : N(i);
}
function I(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "isSelected"
      })
    }), `
`, e(n.p, {
      children: "Flag indicating whether there are selected items."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type isSelected = boolean
`
      })
    })]
  });
}
function uc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(I, {
      ...i
    })
  }) : I(i);
}
function R(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "isSelected"
      })
    }), `
`, e(n.p, {
      children: "Флаг, показывающий наличие выбранных элементов."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type isSelected = boolean
`
      })
    })]
  });
}
function pc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(R, {
      ...i
    })
  }) : R(i);
}
function B(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "selectedList"
      })
    }), `
`, e(n.p, {
      children: "List of selected items."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type selectedList = any[]
`
      })
    })]
  });
}
function mc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(B, {
      ...i
    })
  }) : B(i);
}
function E(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "selectedList"
      })
    }), `
`, e(n.p, {
      children: "Список выбранных элементов."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type selectedList = any[]
`
      })
    })]
  });
}
function gc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(E, {
      ...i
    })
  }) : E(i);
}
function U(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "selectedNames"
      })
    }), `
`, e(n.p, {
      children: "List of labels (names) of selected items."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type selectedNames = string[]
`
      })
    })]
  });
}
function fc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(U, {
      ...i
    })
  }) : U(i);
}
function H(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "selectedNames"
      })
    }), `
`, e(n.p, {
      children: "Список меток (имён) выбранных элементов."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type selectedNames = string[]
`
      })
    })]
  });
}
function yc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(H, {
      ...i
    })
  }) : H(i);
}
function W(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "selectedValues"
      })
    }), `
`, e(n.p, {
      children: "Array of values of selected items."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type selectedValues = any[]
`
      })
    })]
  });
}
function bc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(W, {
      ...i
    })
  }) : W(i);
}
function V(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "selectedValues"
      })
    }), `
`, e(n.p, {
      children: "Массив значений выбранных элементов."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type selectedValues = any[]
`
      })
    })]
  });
}
function vc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(V, {
      ...i
    })
  }) : V(i);
}
const Mc = {
  name: "Expose",
  descriptions: {
    detail: {
      en: dc,
      ru: hc
    },
    value: {
      en: ac,
      ru: sc
    },
    isSelected: {
      en: uc,
      ru: pc
    },
    selectedList: {
      en: mc,
      ru: gc
    },
    selectedNames: {
      en: fc,
      ru: yc
    },
    selectedValues: {
      en: bc,
      ru: vc
    }
  }
};
function q(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "caption"
      })
    }), `
`, t(n.p, {
      children: ["Slot for passing caption content to the component. It's an alternative to the ", e(n.code, {
        children: "caption"
      }), " prop and allows passing elements instead of plain text."]
    }), `
`, e(n.p, {
      children: "This slot allows you to:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use an alternative to the ", e(n.code, {
          children: "caption"
        }), " property"]
      }), `
`, e(n.li, {
        children: "Pass elements instead of plain text"
      }), `
`, e(n.li, {
        children: "Use HTML or components in the caption"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "caption"
      }), " slot works as a replacement for the ", e(n.code, {
        children: "caption"
      }), " prop and allows passing any elements for more flexible caption content setup."]
    })]
  });
}
function wc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(q, {
      ...i
    })
  }) : q(i);
}
function z(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "caption"
      })
    }), `
`, t(n.p, {
      children: ["Слот для передачи содержимого подписи компонента. Является альтернативой props ", e(n.code, {
        children: "caption"
      }), " и позволяет передавать элементы вместо простого текста."]
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Использовать альтернативу свойству ", e(n.code, {
          children: "caption"
        })]
      }), `
`, e(n.li, {
        children: "Передавать элементы вместо простого текста"
      }), `
`, e(n.li, {
        children: "Использовать HTML или компоненты в подписи"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Слот ", e(n.code, {
        children: "caption"
      }), " работает как замена props ", e(n.code, {
        children: "caption"
      }), " и позволяет передавать любые элементы для более гибкого задания подписи."]
    })]
  });
}
function Cc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(z, {
      ...i
    })
  }) : z(i);
}
function O(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "control"
      })
    }), `
`, e(n.p, {
      children: "Slot for rendering the component’s control (trigger) element."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place a button, icon, or any interactive trigger"
      }), `
`, e(n.li, {
        children: "Receive control data via a scoped slot (if provided by the component)"
      }), `
`, e(n.li, {
        children: "Customize open/close logic and extra actions"
      }), `
`]
    })]
  });
}
function Dc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(O, {
      ...i
    })
  }) : O(i);
}
function j(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "control"
      })
    }), `
`, e(n.p, {
      children: "Слот для рендеринга элемента управления (триггера) компонента."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Разместить кнопку, иконку или любой триггер для взаимодействия"
      }), `
`, e(n.li, {
        children: "Получать данные контрола через scoped‑slot (если компонент их предоставляет)"
      }), `
`, e(n.li, {
        children: "Настроить логику открытия/закрытия и дополнительные действия"
      }), `
`]
    })]
  });
}
function xc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(j, {
      ...i
    })
  }) : j(i);
}
function Y(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "default"
      })
    }), `
`, e(n.p, {
      children: "Main slot for placing content inside the component."
    }), `
`, e(n.p, {
      children: "This slot allows you to:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place any custom content inside the component"
      }), `
`, e(n.li, {
        children: "Pass text, HTML elements, or other Vue components"
      }), `
`, e(n.li, {
        children: "Customize the internal content of the component"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "default"
      }), " slot is the primary way to add content to the component and supports all standard Vue slot capabilities."]
    })]
  });
}
function kc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Y, {
      ...i
    })
  }) : Y(i);
}
function G(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "default"
      })
    }), `
`, e(n.p, {
      children: "Основной слот для размещения контента внутри компонента."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Размещать любой пользовательский контент внутри компонента"
      }), `
`, e(n.li, {
        children: "Передавать текст, HTML-элементы или другие Vue-компоненты"
      }), `
`, e(n.li, {
        children: "Настраивать внутреннее содержимое компонента"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Слот ", e(n.code, {
        children: "default"
      }), " является основным способом добавления контента в компонент и поддерживает все стандартные возможности Vue слотов."]
    })]
  });
}
function _c(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(G, {
      ...i
    })
  }) : G(i);
}
function K(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "description"
      })
    }), `
`, t(n.p, {
      children: ["Slot for passing description content to the component. It's an alternative to the ", e(n.code, {
        children: "description"
      }), " prop and allows passing elements instead of plain text."]
    }), `
`, e(n.p, {
      children: "This slot allows you to:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use an alternative to the ", e(n.code, {
          children: "description"
        }), " property"]
      }), `
`, e(n.li, {
        children: "Pass elements instead of plain text"
      }), `
`, e(n.li, {
        children: "Use HTML or components in the description"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "description"
      }), " slot works as a replacement for the ", e(n.code, {
        children: "description"
      }), " prop and allows passing any elements for more flexible description content setup."]
    })]
  });
}
function Xc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(K, {
      ...i
    })
  }) : K(i);
}
function J(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "description"
      })
    }), `
`, t(n.p, {
      children: ["Слот для передачи содержимого описания компонента. Является альтернативой props ", e(n.code, {
        children: "description"
      }), " и позволяет передавать элементы вместо простого текста."]
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Использовать альтернативу свойству ", e(n.code, {
          children: "description"
        })]
      }), `
`, e(n.li, {
        children: "Передавать элементы вместо простого текста"
      }), `
`, e(n.li, {
        children: "Использовать HTML или компоненты в описании"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Слот ", e(n.code, {
        children: "description"
      }), " работает как замена props ", e(n.code, {
        children: "description"
      }), " и позволяет передавать любые элементы для более гибкого задания описания."]
    })]
  });
}
function $c(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(J, {
      ...i
    })
  }) : J(i);
}
function Z(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "footer"
      })
    }), `
`, e(n.p, {
      children: "Footer slot for rendering the component’s bottom area."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place action buttons, hints, or status"
      }), `
`, e(n.li, {
        children: "Receive scoped data from the component (if available)"
      }), `
`, e(n.li, {
        children: "Customize the bottom area layout and styles"
      }), `
`]
    })]
  });
}
function Lc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Z, {
      ...i
    })
  }) : Z(i);
}
function Q(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "footer"
      })
    }), `
`, e(n.p, {
      children: "Слот подвала для отображения нижней области компонента."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Разместить кнопки действий, подсказки или статус"
      }), `
`, e(n.li, {
        children: "Получать данные из компонента через scoped‑slot (если доступны)"
      }), `
`, e(n.li, {
        children: "Настроить компоновку и стили нижней области"
      }), `
`]
    })]
  });
}
function Sc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Q, {
      ...i
    })
  }) : Q(i);
}
function nn(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "label"
      })
    }), `
`, t(n.p, {
      children: ["Slot for passing label content to the component. It's an alternative to the ", e(n.code, {
        children: "label"
      }), " prop and allows passing elements instead of plain text."]
    }), `
`, e(n.p, {
      children: "This slot allows you to:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use an alternative to the ", e(n.code, {
          children: "label"
        }), " property"]
      }), `
`, e(n.li, {
        children: "Pass elements instead of plain text"
      }), `
`, e(n.li, {
        children: "Use HTML or components in the label"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "label"
      }), " slot works as a replacement for the ", e(n.code, {
        children: "label"
      }), " prop and allows passing any elements for more flexible label content setup."]
    })]
  });
}
function Tc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(nn, {
      ...i
    })
  }) : nn(i);
}
function en(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "label"
      })
    }), `
`, t(n.p, {
      children: ["Слот для передачи содержимого метки (label) компонента. Является альтернативой props ", e(n.code, {
        children: "label"
      }), " и позволяет передавать элементы вместо простого текста."]
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Использовать альтернативу свойству ", e(n.code, {
          children: "label"
        })]
      }), `
`, e(n.li, {
        children: "Передавать элементы вместо простого текста"
      }), `
`, e(n.li, {
        children: "Использовать HTML или компоненты в метке"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Слот ", e(n.code, {
        children: "label"
      }), " работает как замена props ", e(n.code, {
        children: "label"
      }), " и позволяет передавать любые элементы для более гибкой настройки содержимого метки."]
    })]
  });
}
function Pc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(en, {
      ...i
    })
  }) : en(i);
}
function tn(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "prefix"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing content at the beginning of the component, before the main content."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Displayed on the left side of the component (or right in RTL mode)"
      }), `
`, e(n.li, {
        children: "Suitable for icons, numbers, indicators, or short labels"
      }), `
`, e(n.li, {
        children: "Does not affect the main structure of the component"
      }), `
`, e(n.li, {
        children: "Provides visual identification or additional information"
      }), `
`]
    })]
  });
}
function Fc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(tn, {
      ...i
    })
  }) : tn(i);
}
function rn(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "prefix"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения контента в начале компонента, перед основным содержимым."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Отображается в левой части компонента (или справа в RTL режиме)"
      }), `
`, e(n.li, {
        children: "Подходит для иконок, номеров, индикаторов или коротких меток"
      }), `
`, e(n.li, {
        children: "Не влияет на основную структуру компонента"
      }), `
`, e(n.li, {
        children: "Обеспечивает визуальную идентификацию или дополнительную информацию"
      }), `
`]
    })]
  });
}
function Ac(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(rn, {
      ...i
    })
  }) : rn(i);
}
function cn(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "suffix"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing content at the end of the component, after the main content."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Displayed on the right side of the component (or left in RTL mode)"
      }), `
`, e(n.li, {
        children: "Suitable for action icons, status indicators, or additional information"
      }), `
`, e(n.li, {
        children: "Does not affect the main structure of the component"
      }), `
`, e(n.li, {
        children: "Provides concluding information or functionality"
      }), `
`]
    })]
  });
}
function Nc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(cn, {
      ...i
    })
  }) : cn(i);
}
function ln(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "suffix"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения контента в конце компонента, после основного содержимого."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Отображается в правой части компонента (или слева в RTL режиме)"
      }), `
`, e(n.li, {
        children: "Подходит для иконок действий, статусных индикаторов или дополнительной информации"
      }), `
`, e(n.li, {
        children: "Не влияет на основную структуру компонента"
      }), `
`, e(n.li, {
        children: "Обеспечивает завершающую информацию или функциональность"
      }), `
`]
    })]
  });
}
function Ic(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ln, {
      ...i
    })
  }) : ln(i);
}
function on(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "title"
      })
    }), `
`, e(n.p, {
      children: "Header slot for rendering the component’s title area."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Render a title, subtitle, or header actions"
      }), `
`, e(n.li, {
        children: "Receive scoped data from the component (if available)"
      }), `
`, e(n.li, {
        children: "Customize the header layout and style"
      }), `
`]
    })]
  });
}
function Rc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(on, {
      ...i
    })
  }) : on(i);
}
function dn(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "title"
      })
    }), `
`, e(n.p, {
      children: "Слот заголовка для отображения шапки компонента."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Вывести заголовок, подзаголовок или дополнительные элементы шапки"
      }), `
`, e(n.li, {
        children: "Получать данные из компонента через scoped‑slot (если доступны)"
      }), `
`, e(n.li, {
        children: "Настроить оформление и состав шапки под задачу"
      }), `
`]
    })]
  });
}
function Bc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(dn, {
      ...i
    })
  }) : dn(i);
}
const Ec = {
  name: "Slot",
  descriptions: {
    caption: {
      en: wc,
      ru: Cc
    },
    control: {
      en: Dc,
      ru: xc
    },
    default: {
      en: kc,
      ru: _c
    },
    description: {
      en: Xc,
      ru: $c
    },
    footer: {
      en: Lc,
      ru: Sc
    },
    label: {
      en: Tc,
      ru: Pc
    },
    prefix: {
      en: Fc,
      ru: Ac
    },
    suffix: {
      en: Nc,
      ru: Ic
    },
    title: {
      en: Rc,
      ru: Bc
    }
  }
};
function hn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Adaptive Layout and Container Constraints"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "adaptive"
      }), " and ", e(n.code, {
        children: "container"
      }), " properties control component behavior at different screen sizes and container constraints. These properties allow creating flexible adaptive interfaces that display correctly on all devices."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "adaptive"
        }), " — Controls adaptive display behavior for different screen sizes and media queries. Allows the component to automatically adjust to different display conditions."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "container"
        }), " — Controls container-based layout behavior with adaptive width constraints and containment context. Enables a special container mode with width limitations."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Description"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "adaptive"
        }), " property provides automatic adaptation to various screen sizes with media query support for precise display control."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "container"
        }), " creates a container layout with automatic width constraints, adaptive behavior, and content centering."]
      }), `
`, t(n.li, {
        children: ["Properties can be used together to create complex adaptive layouts, where ", e(n.code, {
          children: "container"
        }), " provides the structural foundation and ", e(n.code, {
          children: "adaptive"
        }), " adds flexible behavior."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use ", e(n.code, {
          children: "adaptive"
        }), " for components that should change their behavior depending on screen size."]
      }), `
`, t(n.li, {
        children: ["Apply ", e(n.code, {
          children: "container"
        }), " for creating main blocks with limited width and centering."]
      }), `
`, e(n.li, {
        children: "Combine both properties to achieve maximum flexibility in adaptive layout."
      }), `
`]
    })]
  });
}
function Uc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(hn, {
      ...i
    })
  }) : hn(i);
}
function an(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Адаптивная раскладка и контейнерные ограничения"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "adaptive"
      }), " и ", e(n.code, {
        children: "container"
      }), " управляют поведением компонентов при различных размерах экрана и контейнерных ограничениях. Эти свойства позволяют создавать гибкие адаптивные интерфейсы, которые корректно отображаются на всех устройствах."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "adaptive"
        }), " — Управляет адаптивным поведением отображения для различных размеров экрана и медиа-запросов. Позволяет компоненту автоматически подстраиваться под разные условия отображения."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "container"
        }), " — Управляет поведением контейнерной раскладки с адаптивными ограничениями ширины и контекстом сдерживания. Включает специальный режим контейнера с ограничениями по ширине."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Описание"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "adaptive"
        }), " обеспечивает автоматическую адаптацию под различные размеры экрана с поддержкой медиа-запросов для точного контроля отображения."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "container"
        }), " создает контейнерную раскладку с автоматическими ограничениями ширины, адаптивным поведением и центрированием содержимого."]
      }), `
`, t(n.li, {
        children: ["Свойства могут использоваться совместно для создания сложных адаптивных раскладок, где ", e(n.code, {
          children: "container"
        }), " обеспечивает структурную основу, а ", e(n.code, {
          children: "adaptive"
        }), " добавляет гибкое поведение."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Используйте ", e(n.code, {
          children: "adaptive"
        }), " для компонентов, которые должны изменять свое поведение в зависимости от размера экрана."]
      }), `
`, t(n.li, {
        children: ["Применяйте ", e(n.code, {
          children: "container"
        }), " для создания основных блоков с ограниченной шириной и центрированием."]
      }), `
`, e(n.li, {
        children: "Комбинируйте оба свойства для достижения максимальной гибкости в адаптивной верстке."
      }), `
`]
    })]
  });
}
function Hc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(an, {
      ...i
    })
  }) : an(i);
}
function sn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Managing Component Palette"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "asPalette"
      }), " property applies the parent element's palette color to the component while preserving its base saturation."]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Use this property to automatically adapt components to the application's theme."
      }), `
`, e(n.li, {
        children: "Ensure the parent element has a valid palette class."
      }), `
`]
    })]
  });
}
function Wc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(sn, {
      ...i
    })
  }) : sn(i);
}
function un(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление палитрой компонента"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "asPalette"
      }), " отвечает за изменение цвета компонента в соответствии с классом палитры его родителя, сохраняя базовую насыщенность цвета."]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Применяйте для автоматической адаптации компонентов к теме приложения."
      }), `
`, e(n.li, {
        children: "Убедитесь, что у родительского элемента задан корректный класс палитры."
      }), `
`]
    })]
  });
}
function Vc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(un, {
      ...i
    })
  }) : un(i);
}
function pn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Managing Component Direction"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "dir"
      }), ` property controls the mirroring of the component based on the site's text direction (LTR/RTL).
It ensures the correct interface display for right-to-left languages.`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Use alongside your app's localization settings."
      }), `
`, e(n.li, {
        children: "Particularly useful for arrow icons that also need to flip when a direction changes."
      }), `
`, e(n.li, {
        children: "Verify third-party SVG icons as they might have preset directions."
      }), `
`]
    })]
  });
}
function qc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(pn, {
      ...i
    })
  }) : pn(i);
}
function mn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление направлением компонента"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "dir"
      }), ` отвечает за зеркальное отображение компонента в зависимости от направления сайта (LTR/RTL).
Это обеспечивает корректное отображение интерфейсов для языков с правосторонним письмом.`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Используйте вместе с настройками локализации приложения."
      }), `
`, e(n.li, {
        children: "Особенно полезно для стрелочных иконок, которые также нужно отразить при смене направления."
      }), `
`, e(n.li, {
        children: "Проверяйте отображение сторонних SVG-иконок, так как они могут иметь собственные направления."
      }), `
`]
    })]
  });
}
function zc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(mn, {
      ...i
    })
  }) : mn(i);
}
function gn(i) {
  const n = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Skeleton Mode"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "isSkeleton"
      }), " property works in conjunction with the ", e(n.code, {
        children: "Skeleton"
      }), " component. When an element is a child of the ", e(n.code, {
        children: "Skeleton"
      }), " component and has the ", e(n.code, {
        children: "isSkeleton"
      }), " property, its display depends on the parent ", e(n.code, {
        children: "Skeleton"
      }), "'s state."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["When ", e(n.code, {
          children: "active=false"
        }), " on the ", e(n.code, {
          children: "Skeleton"
        }), " component, all child elements display normally, regardless of the ", e(n.code, {
          children: "isSkeleton"
        }), " value."]
      }), `
`, t(n.li, {
        children: ["When ", e(n.code, {
          children: "active=true"
        }), " on the ", e(n.code, {
          children: "Skeleton"
        }), " component, all child elements enter skeleton mode, but behavior depends on ", e(n.code, {
          children: "isSkeleton"
        }), ":", `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: ["If the element has ", e(n.code, {
              children: "isSkeleton=true"
            }), " — the element displays as a skeleton"]
          }), `
`, t(n.li, {
            children: ["If the element has ", e(n.code, {
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
function Oc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(gn, {
      ...i
    })
  }) : gn(i);
}
function fn(i) {
  const n = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Режим скелетона"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "isSkeleton"
      }), " работает в паре с компонентом ", e(n.code, {
        children: "Skeleton"
      }), ". Когда элемент является дочерним элементом компонента ", e(n.code, {
        children: "Skeleton"
      }), " и имеет свойство ", e(n.code, {
        children: "isSkeleton"
      }), ", его отображение зависит от состояния родительского ", e(n.code, {
        children: "Skeleton"
      }), "."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["При ", e(n.code, {
          children: "active=false"
        }), " у компонента ", e(n.code, {
          children: "Skeleton"
        }), " все дочерние элементы отображаются, как обычно, независимо от значения ", e(n.code, {
          children: "isSkeleton"
        }), "."]
      }), `
`, t(n.li, {
        children: ["При ", e(n.code, {
          children: "active=true"
        }), " у компонента ", e(n.code, {
          children: "Skeleton"
        }), " все дочерние элементы переходят в режим скелетона, но поведение зависит от ", e(n.code, {
          children: "isSkeleton"
        }), ":", `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: ["Если у элемента ", e(n.code, {
              children: "isSkeleton=true"
            }), " — элемент отображается как скелетон"]
          }), `
`, t(n.li, {
            children: ["Если у элемента ", e(n.code, {
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
function jc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(fn, {
      ...i
    })
  }) : fn(i);
}
const Yc = {
  name: "Style",
  descriptions: {
    adaptive: { en: Uc, ru: Hc },
    asPalette: { en: Wc, ru: Vc },
    dir: { en: qc, ru: zc },
    isSkeleton: { en: Oc, ru: jc }
  }
};
function yn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Text Highlighting Properties"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "highlight"
      }), " and ", e(n.code, {
        children: "highlightLengthStart"
      }), " properties are designed to control text highlighting functionality in components."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "highlight"
        }), " — Text to highlight within the component content"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "highlightLengthStart"
        }), " — Minimum length of highlight value to start highlighting"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Property Relationships"
    }), `
`, t(n.p, {
      children: ["The properties work together to provide intelligent text highlighting. ", e(n.code, {
        children: "highlight"
      }), " defines what to highlight, while ", e(n.code, {
        children: "highlightLengthStart"
      }), " controls when to start highlighting."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "highlight"
        }), " contains the text string that needs to be found and highlighted in the component"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "highlightLengthStart"
        }), " sets the minimum search string length to activate the highlighting function"]
      }), `
`, t(n.li, {
        children: ["Highlighting is activated only when the length of ", e(n.code, {
          children: "highlight"
        }), " reaches the ", e(n.code, {
          children: "highlightLengthStart"
        }), " value"]
      }), `
`, e(n.li, {
        children: "This prevents unwanted highlighting when entering short search strings"
      }), `
`, e(n.li, {
        children: "Both properties ensure optimal user experience when working with search and filtering"
      }), `
`]
    })]
  });
}
function Gc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(yn, {
      ...i
    })
  }) : yn(i);
}
function bn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Свойства выделения текста"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "highlight"
      }), " и ", e(n.code, {
        children: "highlightLengthStart"
      }), " предназначены для управления выделением текста в компонентах."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "highlight"
        }), " — Текст для выделения в содержимом компоненте"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "highlightLengthStart"
        }), " — Минимальная длина значения highlight для начала выделения"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, t(n.p, {
      children: ["Свойства работают совместно для обеспечения интеллектуального выделения текста. ", e(n.code, {
        children: "highlight"
      }), " определяет что выделять, а ", e(n.code, {
        children: "highlightLengthStart"
      }), " контролирует когда начинать выделение."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "highlight"
        }), " содержит строку текста, которую нужно найти и выделить в компоненте"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "highlightLengthStart"
        }), " устанавливает минимальную длину строки поиска для активации функции выделения"]
      }), `
`, t(n.li, {
        children: ["Выделение активируется только когда длина ", e(n.code, {
          children: "highlight"
        }), " достигает значения ", e(n.code, {
          children: "highlightLengthStart"
        })]
      }), `
`, e(n.li, {
        children: "Это предотвращает нежелательное выделение при вводе коротких строк поиска"
      }), `
`, e(n.li, {
        children: "Оба свойства обеспечивают оптимальный пользовательский опыт при работе с поиском и фильтрацией"
      }), `
`]
    })]
  });
}
function Kc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(bn, {
      ...i
    })
  }) : bn(i);
}
function vn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Properties for text and number handling"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "label"
      }), ", ", e(n.code, {
        children: "labelMax"
      }), ", and ", e(n.code, {
        children: "formatting"
      }), " properties are designed to control the display of textual and numerical content in components."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "label"
        }), " — Text label or numeric value of the component"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "labelMax"
        }), " — Maximum length of a label text before truncation"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "formatting"
        }), " — Determines whether values should be formatted before display"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Functionality"
    }), `
`, e(n.p, {
      children: "These properties provide flexible content display management:"
    }), `
`, e(n.h4, {
      children: "Label processing"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "label"
        }), " can contain both textual and numeric values"]
      }), `
`, t(n.li, {
        children: ["When a numeric value is passed to ", e(n.code, {
          children: "label"
        }), ", the ", e(n.code, {
          children: "toNumberByMax"
        }), " function is automatically applied"]
      }), `
`, e(n.li, {
        children: "Conversion occurs with consideration of maximum values and localization"
      }), `
`]
    }), `
`, e(n.h4, {
      children: "Length limitation"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "labelMax"
        }), " sets the maximum length of displayed text"]
      }), `
`, e(n.li, {
        children: "When the limit is exceeded, a text is truncated with an overflow indicator"
      }), `
`, e(n.li, {
        children: "Ensures consistent display across different contexts"
      }), `
`]
    }), `
`, e(n.h4, {
      children: "Value formatting"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "formatting"
        }), " controls whether formatting should be applied to values"]
      }), `
`, e(n.li, {
        children: "When formatting is enabled, numeric values are converted according to user locale"
      }), `
`, e(n.li, {
        children: "Supports automatic interface language detection"
      }), `
`]
    })]
  });
}
function Jc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(vn, {
      ...i
    })
  }) : vn(i);
}
function Mn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Свойства для работы с текстом и числами"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "label"
      }), ", ", e(n.code, {
        children: "labelMax"
      }), " и ", e(n.code, {
        children: "formatting"
      }), " предназначены для управления отображением текстового и числового контента в компонентах."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "label"
        }), " — Текстовая метка или числовое значение компонента"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "labelMax"
        }), " — Максимальная длина текста метки перед обрезкой"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "formatting"
        }), " — Определяет необходимость форматирования значений перед отображением"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Функциональность"
    }), `
`, e(n.p, {
      children: "Эти свойства обеспечивают гибкое управление отображением контента:"
    }), `
`, e(n.h4, {
      children: "Обработка меток"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "label"
        }), " может содержать как текстовые, так и числовые значения"]
      }), `
`, t(n.li, {
        children: ["При передаче числового значения в ", e(n.code, {
          children: "label"
        }), " автоматически применяется функция ", e(n.code, {
          children: "toNumberByMax"
        })]
      }), `
`, e(n.li, {
        children: "Происходит преобразование с учетом максимальных значений и локализации"
      }), `
`]
    }), `
`, e(n.h4, {
      children: "Ограничение длины"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "labelMax"
        }), " устанавливает максимальную длину отображаемого текста"]
      }), `
`, e(n.li, {
        children: "При превышении лимита текст обрезается с добавлением индикатора переполнения"
      }), `
`, e(n.li, {
        children: "Обеспечивает консистентность отображения в различных контекстах"
      }), `
`]
    }), `
`, e(n.h4, {
      children: "Форматирование значений"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "formatting"
        }), " контролирует, нужно ли применять форматирование к значениям"]
      }), `
`, e(n.li, {
        children: "При включенном форматировании числовые значения преобразуются согласно локали пользователя"
      }), `
`, e(n.li, {
        children: "Поддерживается автоматическое определение языка интерфейса"
      }), `
`]
    })]
  });
}
function Zc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Mn, {
      ...i
    })
  }) : Mn(i);
}
function wn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Value and Data Properties"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "value"
      }), " and ", e(n.code, {
        children: "detail"
      }), " properties are designed to transfer information when interacting with components."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "value"
        }), " — Main component value"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "detail"
        }), " — Additional data and contextual information"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Property Relationship"
    }), `
`, t(n.p, {
      children: ["The properties complement each other, providing complete information about the component's state and context. ", e(n.code, {
        children: "value"
      }), " contains the main value, while ", e(n.code, {
        children: "detail"
      }), " extends it with additional data."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "value"
        }), " reflects the current state or value of the component"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "detail"
        }), " can contain metadata, identifiers, coordinates, or other auxiliary data"]
      }), `
`, e(n.li, {
        children: "Both properties work together to transfer structured information"
      }), `
`]
    })]
  });
}
function Qc(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(wn, {
      ...i
    })
  }) : wn(i);
}
function Cn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Свойства значений и данных"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "value"
      }), " и ", e(n.code, {
        children: "detail"
      }), " предназначены для передачи информации при взаимодействии с компонентами."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "value"
        }), " — Основное значение компонента"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "detail"
        }), " — Дополнительные данные и контекстная информация"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, t(n.p, {
      children: ["Свойства дополняют друг друга, предоставляя полную информацию о состоянии и контексте компонента. ", e(n.code, {
        children: "value"
      }), " содержит основное значение, а ", e(n.code, {
        children: "detail"
      }), " расширяет его дополнительными данными."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "value"
        }), " отражает текущее состояние или значение компонента"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "detail"
        }), " может содержать метаданные, идентификаторы, координаты или другие вспомогательные данные"]
      }), `
`, e(n.li, {
        children: "Оба свойства работают совместно для передачи структурированной информации"
      }), `
`]
    })]
  });
}
function nl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Cn, {
      ...i
    })
  }) : Cn(i);
}
const el = {
  name: "Value",
  descriptions: {
    highlight: { en: Gc, ru: Kc },
    labelNumber: { en: Jc, ru: Zc },
    value: { en: Qc, ru: nl }
  }
};
function Dn(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Description"
    }), `
`, e(n.p, {
      children: "The Badge component is a small visual indicator used to display status, count, or notifications on interface elements. It provides a compact way to convey important information without taking up much space."
    }), `
`, e(n.h3, {
      children: "Key Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Status indication"
        }), ": Display different states with color variants"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Content flexibility"
        }), ": Show text, numbers, or leave empty for dot indicator"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Smart overflow"
        }), ": Automatically handle large numbers with max value display"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Positioning"
        }), ": Flexible placement relative to parent elements"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Accessibility"
        }), ": Built-in support for screen readers and keyboard navigation"]
      }), `
`]
    })]
  });
}
function il(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Dn, {
      ...i
    })
  }) : Dn(i);
}
function xn(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Описание"
    }), `
`, e(n.p, {
      children: "Компонент Badge представляет собой небольшой визуальный индикатор, используемый для отображения статуса, количества или уведомлений на элементах интерфейса. Он обеспечивает компактный способ передачи важной информации, не занимая много места."
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Индикация статуса"
        }), ": Отображение различных состояний с помощью цветовых вариантов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гибкость содержимого"
        }), ": Отображение текста, чисел или пустого индикатора-точки"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Умное переполнение"
        }), ": Автоматическая обработка больших чисел с отображением максимального значения"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Позиционирование"
        }), ": Гибкое размещение относительно родительских элементов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Доступность"
        }), ": Встроенная поддержка программ чтения с экрана и навигации с клавиатуры"]
      }), `
`]
    })]
  });
}
function tl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(xn, {
      ...i
    })
  }) : xn(i);
}
function kn(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Dot Badge"
    }), `
`, e(n.p, {
      children: "The dot variant displays the badge as a small circular indicator without any text content, perfect for simple status notifications and presence indicators."
    }), `
`, e(n.h3, {
      children: "When to use"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Presence indicators"
        }), ": To show online/offline status or activity states"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Notification markers"
        }), ": For indicating new messages, updates, or alerts without specific counts"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Status dots"
        }), ": To display simple on/off or active/inactive states"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Minimalist design"
        }), ": When space is limited and only basic indication is needed"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Visual characteristics"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Compact size"
        }), ": Takes minimal space while maintaining visibility"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "No text content"
        }), ": Pure visual indicator without labels or numbers"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Clean appearance"
        }), ": Simple circular shape that integrates seamlessly"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Focus on state"
        }), ": Emphasizes status rather than specific information"]
      }), `
`]
    })]
  });
}
function rl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(kn, {
      ...i
    })
  }) : kn(i);
}
function _n(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Dot Badge"
    }), `
`, e(n.p, {
      children: "Точечный вариант отображает бейдж как небольшой круглый индикатор без текстового содержимого, идеально подходящий для простых уведомлений о статусе и индикаторов присутствия."
    }), `
`, e(n.h3, {
      children: "Когда использовать"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Индикаторы присутствия"
        }), ": Для отображения статуса онлайн/офлайн или состояний активности"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Маркеры уведомлений"
        }), ": Для обозначения новых сообщений, обновлений или предупреждений без конкретных чисел"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Точки статуса"
        }), ": Для отображения простых состояний включено/выключено или активно/неактивно"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Минималистичный дизайн"
        }), ": Когда пространство ограничено и нужно только базовое обозначение"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Визуальные характеристики"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Компактный размер"
        }), ": Занимает минимальное пространство, сохраняя видимость"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Без текстового содержимого"
        }), ": Чистый визуальный индикатор без меток или цифр"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Аккуратный внешний вид"
        }), ": Простая круглая форма, которая органично интегрируется"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Фокус на состоянии"
        }), ": Подчеркивает статус, а не конкретную информацию"]
      }), `
`]
    })]
  });
}
function cl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(_n, {
      ...i
    })
  }) : _n(i);
}
function Xn(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Outline Badge"
    }), `
`, e(n.p, {
      children: "The outline variant provides a subtle badge style with transparent background and visible border, perfect for secondary information that needs to be noticeable but not dominant."
    }), `
`, e(n.h3, {
      children: "When to use"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Secondary information"
        }), ": When you need to display supplementary data without overwhelming the main content"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Status indicators"
        }), ": For showing neutral or informational states that don't require immediate attention"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Grouping elements"
        }), ": To categorize or tag content in a non-intrusive way"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Light theme compatibility"
        }), ": When working with light backgrounds where solid badges might be too heavy"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Visual characteristics"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Transparent background"
        }), ": Maintains the underlying design while adding informational value"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Visible border"
        }), ": Uses border styling to define the badge boundaries"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Subtle presence"
        }), ": Less visually prominent than primary or secondary filled variants"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Flexible appearance"
        }), ": Adapts well to different background colors and themes"]
      }), `
`]
    })]
  });
}
function ll(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Xn, {
      ...i
    })
  }) : Xn(i);
}
function $n(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Outline Badge"
    }), `
`, e(n.p, {
      children: "Контурный вариант обеспечивает тонкий стиль бейджа с прозрачным фоном и видимой границей, идеально подходящий для второстепенной информации, которая должна быть заметной, но не доминирующей."
    }), `
`, e(n.h3, {
      children: "Когда использовать"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Второстепенная информация"
        }), ": Когда нужно отобразить дополнительные данные, не перегружая основной контент"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Индикаторы статуса"
        }), ": Для отображения нейтральных или информационных состояний, не требующих немедленного внимания"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Группировка элементов"
        }), ": Для категоризации или маркировки контента ненавязчивым способом"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Совместимость со светлыми темами"
        }), ": При работе со светлыми фонами, где сплошные бейджи могут быть слишком тяжелыми"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Визуальные характеристики"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Прозрачный фон"
        }), ": Сохраняет базовый дизайн, добавляя информационную ценность"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Видимая граница"
        }), ": Использует стилизацию границы для определения границ бейджа"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Тонкое присутствие"
        }), ": Менее визуально заметный, чем основные или второстепенные заполненные варианты"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гибкий внешний вид"
        }), ": Хорошо адаптируется к различным цветам фона и темам"]
      }), `
`]
    })]
  });
}
function ol(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e($n, {
      ...i
    })
  }) : $n(i);
}
function Ln(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Primary Badge"
    }), `
`, e(n.p, {
      children: "The primary variant is the most prominent badge style, designed to draw attention and indicate high-priority information or status."
    }), `
`, e(n.h3, {
      children: "When to use"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Critical notifications"
        }), ": When you need to highlight urgent or important information"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Status indicators"
        }), ": For showing active, enabled, or positive states"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Call-to-action elements"
        }), ": When the badge serves as an interactive element requiring user attention"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Brand emphasis"
        }), ": To maintain brand consistency with primary color schemes"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Visual characteristics"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "High contrast"
        }), ": Uses primary brand colors with strong contrast ratios for accessibility"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Bold appearance"
        }), ": More visually prominent than secondary or outline variants"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Enhanced visibility"
        }), ": Designed to stand out against various background colors"]
      }), `
`]
    })]
  });
}
function dl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ln, {
      ...i
    })
  }) : Ln(i);
}
function Sn(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Primary Badge"
    }), `
`, e(n.p, {
      children: "Основной вариант — это наиболее заметный стиль бейджа, предназначенный для привлечения внимания и обозначения высокоприоритетной информации или статуса."
    }), `
`, e(n.h3, {
      children: "Когда использовать"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Критические уведомления"
        }), ": Когда нужно выделить срочную или важную информацию"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Индикаторы статуса"
        }), ": Для отображения активных, включенных или положительных состояний"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Элементы призыва к действию"
        }), ": Когда бейдж служит интерактивным элементом, требующим внимания пользователя"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Акцент бренда"
        }), ": Для поддержания согласованности бренда с основными цветовыми схемами"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Визуальные характеристики"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Высокий контраст"
        }), ": Использует основные цвета бренда с сильными контрастными соотношениями для доступности"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Яркий внешний вид"
        }), ": Более визуально заметный, чем второстепенные или контурные варианты"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Повышенная видимость"
        }), ": Разработан для выделения на различных цветах фона"]
      }), `
`]
    })]
  });
}
function hl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Sn, {
      ...i
    })
  }) : Sn(i);
}
function Tn(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Secondary Badge"
    }), `
`, e(n.p, {
      children: "The secondary variant offers a balanced approach between primary and outline styles, providing moderate visual emphasis that supports the main content without competing for attention."
    }), `
`, e(n.h3, {
      children: "When to use"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Supporting information"
        }), ": When displaying important but non-critical data alongside primary content"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Status updates"
        }), ": For showing progress, warnings, or informational states that need visibility"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Content categorization"
        }), ": To organize and label content with moderate emphasis"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Hierarchical displays"
        }), ": When creating visual hierarchy where secondary elements need distinction"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Visual characteristics"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Moderate contrast"
        }), ": Balanced color treatment that's noticeable but not overwhelming"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Softer appearance"
        }), ": Less intense than primary variants while maintaining clear visibility"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Versatile styling"
        }), ": Works well in various contexts and color schemes"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Content harmony"
        }), ": Complements primary elements without creating visual competition"]
      }), `
`]
    })]
  });
}
function al(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Tn, {
      ...i
    })
  }) : Tn(i);
}
function Pn(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Secondary Badge"
    }), `
`, e(n.p, {
      children: "Второстепенный вариант предлагает сбалансированный подход между основным и контурным стилями, обеспечивая умеренный визуальный акцент, который поддерживает основной контент, не конкурируя за внимание."
    }), `
`, e(n.h3, {
      children: "Когда использовать"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Поддерживающая информация"
        }), ": При отображении важных, но не критичных данных рядом с основным контентом"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Обновления статуса"
        }), ": Для отображения прогресса, предупреждений или информационных состояний, требующих видимости"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Категоризация контента"
        }), ": Для организации и маркировки контента с умеренным акцентом"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Иерархические отображения"
        }), ": При создании визуальной иерархии, где второстепенные элементы нуждаются в различении"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Визуальные характеристики"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Умеренный контраст"
        }), ": Сбалансированная цветовая обработка, которая заметна, но не подавляющая"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Более мягкий внешний вид"
        }), ": Менее интенсивный, чем основные варианты, при сохранении четкой видимости"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Универсальная стилизация"
        }), ": Хорошо работает в различных контекстах и цветовых схемах"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гармония контента"
        }), ": Дополняет основные элементы, не создавая визуальной конкуренции"]
      }), `
`]
    })]
  });
}
function sl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Pn, {
      ...i
    })
  }) : Pn(i);
}
const ul = {
  name: "Badge",
  descriptions: {
    badge: {
      en: il,
      ru: tl
    },
    dot: {
      en: rl,
      ru: cl
    },
    outline: {
      en: ll,
      ru: ol
    },
    primary: {
      en: dl,
      ru: hl
    },
    secondary: {
      en: al,
      ru: sl
    }
  }
};
function Fn(i) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "Bars is a top-level bar component for headers, toolbars, and contextual action bars. It provides a structured layout for titles, descriptions, back buttons, and interactive button sets with support for action mode for bulk operations."
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Application headers"
        }), " — Unified top bar for screens, sections, and pages with consistent navigation"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Toolbars"
        }), " — Placement of primary actions and functional interface elements"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Contextual actions"
        }), " — Special mode for bulk operations on selected items"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Structured navigation"
        }), " — Standardized back button behavior and screen transitions"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Core capabilities"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Text content"
        }), " — Primary label and secondary description with dynamic update support"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Navigation button"
        }), " — Configurable back button with hiding options and icon customization"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Action set"
        }), " — Button array (bars) for right-side placement with flexible configuration"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Action mode"
        }), " — Switching to action mode with separate labels, description, and button set"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Unified attributes"
        }), " — Shared settings for all buttons via buttonAttrs with event support"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Integration"
    }), `
`, e(n.p, {
      children: "Bars is designed for creating consistent headers and toolbars in applications. Use it as a foundation for screens when you need standardized navigation, action placement, and support for contextual operations with selected elements."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "This is a top-level UI component intended for direct use in application interfaces and design systems."
      }), `
`]
    })]
  });
}
function pl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Fn, {
      ...i
    })
  }) : Fn(i);
}
function An(i) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "Bars — компонент панели верхнего уровня для заголовков, панелей инструментов и контекстных панелей действий. Обеспечивает структурированный макет для заголовка, описания, кнопки назад и набора интерактивных кнопок с поддержкой режима действий для массовых операций."
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Заголовки приложений"
        }), " — Единый верхний бар для экранов, разделов и страниц с консистентной навигацией"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Панели инструментов"
        }), " — Размещение основных действий и функциональных элементов интерфейса"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Контекстные действия"
        }), " — Специальный режим для массовых операций над выбранными элементами"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Структурированная навигация"
        }), " — Стандартизированное поведение кнопки назад и переходов между экранами"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Текстовый контент"
        }), " — Основная метка (label) и дополнительное описание (description) с поддержкой динамического обновления"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Навигационная кнопка"
        }), " — Настраиваемая кнопка назад с возможностью скрытия и кастомизации иконок"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Набор действий"
        }), " — Массив кнопок (bars) для размещения справа с гибкой конфигурацией"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Режим действий"
        }), " — Переключение в action‑режим с отдельными метками, описанием и набором кнопок"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Единые атрибуты"
        }), " — Общие настройки для всех кнопок через buttonAttrs с поддержкой событий"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Интеграция"
    }), `
`, e(n.p, {
      children: "Bars предназначен для создания консистентных заголовков и панелей инструментов в приложениях. Используйте его в качестве основы для экранов, когда нужна стандартизированная навигация, размещение действий и поддержка контекстных операций с выделенными элементами."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Это UI‑компонент верхнего уровня, предназначенный для прямого использования в интерфейсах приложений и дизайн‑системах."
      }), `
`]
    })]
  });
}
function ml(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(An, {
      ...i
    })
  }) : An(i);
}
function Nn(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Action mode"
    }), `
`, t(n.p, {
      children: ["Properties that switch Bars into a contextual action bar when selecting items or entering bulk-edit mode: ", e(n.code, {
        children: "action"
      }), " activates the mode, ", e(n.code, {
        children: "actionLabel"
      }), " and ", e(n.code, {
        children: "actionDescription"
      }), " replace the main content, ", e(n.code, {
        children: "actionBars"
      }), " provides a specialized button set for operations."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `action?: boolean
actionLabel?: string | number
actionDescription?: string
actionBars?: Button[]
`
      })
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "action"
          })
        }), " — Switches the bar into action context with full content replacement"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "actionLabel"
          })
        }), " — Primary action mode title (typically a count of selected items)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "actionDescription"
          })
        }), " — Additional description or instruction for the current action"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "actionBars"
          })
        }), " — Array of action buttons for operations on selected elements"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "When to use"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Item selection"
        }), " — User has selected one or more items in a list or table"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Bulk operations"
        }), " — Actions are needed on a group of selected objects"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Contextual menus"
        }), " — Replace the standard bar with specialized actions"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Temporary modes"
        }), " — Focus the interface on a specific task with exit capability"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Comparison"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [t(n.strong, {
          children: [e(n.code, {
            children: "label"
          }), " vs ", e(n.code, {
            children: "actionLabel"
          })]
        }), " — Regular title is replaced with selection count or description"]
      }), `
`, t(n.li, {
        children: [t(n.strong, {
          children: [e(n.code, {
            children: "description"
          }), " vs ", e(n.code, {
            children: "actionDescription"
          })]
        }), " — Standard description becomes action instruction"]
      }), `
`, t(n.li, {
        children: [t(n.strong, {
          children: [e(n.code, {
            children: "bars"
          }), " vs ", e(n.code, {
            children: "actionBars"
          })]
        }), " — Regular buttons are replaced with context-specific ones"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Navigation"
        }), " — Back button becomes an exit button for leaving action mode"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Complete content replacement"
        }), " — All text areas and buttons are replaced with action variants"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Configuration preservation"
        }), " — Shared button attributes (buttonAttrs) apply to actionBars"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Unified styling"
        }), " — Action mode inherits all styling and behavior from the main component"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Programmatic control"
        }), " — Mode is controlled by external selection state"]
      }), `
`]
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Use short, clear labels in actionLabel and limit actionBars to 3–4 key actions for better user experience."
      }), `
`]
    })]
  });
}
function gl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Nn, {
      ...i
    })
  }) : Nn(i);
}
function In(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Режим действия"
    }), `
`, t(n.p, {
      children: ["Свойства для переключения Bars в контекстную панель действий при выборе элементов или массовом редактировании: ", e(n.code, {
        children: "action"
      }), " активирует режим, ", e(n.code, {
        children: "actionLabel"
      }), " и ", e(n.code, {
        children: "actionDescription"
      }), " заменяют основной контент, ", e(n.code, {
        children: "actionBars"
      }), " предоставляет специализированный набор кнопок для операций."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `action?: boolean
actionLabel?: string | number
actionDescription?: string
actionBars?: Button[]
`
      })
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "action"
          })
        }), " — Переключает панель в контекст действий с заменой всего контента"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "actionLabel"
          })
        }), " — Основной заголовок режима действий (обычно счётчик выбранных элементов)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "actionDescription"
          })
        }), " — Дополнительное описание или инструкция для текущего действия"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "actionBars"
          })
        }), " — Массив кнопок действий для операций над выбранными элементами"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Когда использовать"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Выбор элементов"
        }), " — Пользователь выделил один или несколько элементов в списке или таблице"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Массовые операции"
        }), " — Необходимы действия над группой выбранных объектов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Контекстные меню"
        }), " — Замена стандартной панели на специализированные действия"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Временные режимы"
        }), " — Фокусировка интерфейса на конкретной задаче с возможностью выхода"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Сравнение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [t(n.strong, {
          children: [e(n.code, {
            children: "label"
          }), " vs ", e(n.code, {
            children: "actionLabel"
          })]
        }), " — Обычный заголовок заменяется на счётчик или описание выбора"]
      }), `
`, t(n.li, {
        children: [t(n.strong, {
          children: [e(n.code, {
            children: "description"
          }), " vs ", e(n.code, {
            children: "actionDescription"
          })]
        }), " — Стандартное описание сменяется инструкцией для действий"]
      }), `
`, t(n.li, {
        children: [t(n.strong, {
          children: [e(n.code, {
            children: "bars"
          }), " vs ", e(n.code, {
            children: "actionBars"
          })]
        }), " — Обычные кнопки заменяются специализированными для текущего контекста"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Навигация"
        }), " — Кнопка назад становится кнопкой выхода из режима действий"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Полная замена контента"
        }), " — Все текстовые области и кнопки заменяются action‑вариантами"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Сохранение конфигурации"
        }), " — Общие атрибуты кнопок (buttonAttrs) применяются к actionBars"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Единый стиль"
        }), " — Action‑режим наследует всю стилизацию и поведение основного компонента"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Программное управление"
        }), " — Режим контролируется внешним состоянием выбора элементов"]
      }), `
`]
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Используйте короткие, понятные метки в actionLabel и ограничивайте actionBars 3–4 ключевыми действиями для лучшего пользовательского опыта."
      }), `
`]
    })]
  });
}
function fl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(In, {
      ...i
    })
  }) : In(i);
}
function Rn(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "bars"
      })
    }), `
`, e(n.p, {
      children: "Slot for rendering the set of action buttons in the regular (non‑action) mode. It lets you fully customize the composition, order, and appearance of buttons aligned to the right of the label."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place any buttons/controls instead of the default set"
      }), `
`, e(n.li, {
        children: "Control ordering, grouping, and separators for actions"
      }), `
`, e(n.li, {
        children: "Pass custom attributes to icons and buttons via scoped props"
      }), `
`, e(n.li, {
        children: "Implement responsive behavior (collapse/hide actions on narrow screens)"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "bars"
      }), " area is typically right‑aligned and inherits sizing/spacing from the base Bars styles."]
    })]
  });
}
function yl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Rn, {
      ...i
    })
  }) : Rn(i);
}
function Bn(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "bars"
      })
    }), `
`, e(n.p, {
      children: "Слот для рендеринга набора кнопок панели действий в обычном режиме. Позволяет полностью переопределить состав, порядок и внешний вид кнопок, которые располагаются справа от заголовка."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Размещать любые кнопки/элементы управления вместо стандартного набора"
      }), `
`, e(n.li, {
        children: "Управлять порядком, группировкой и разделителями для действий"
      }), `
`, e(n.li, {
        children: "Передавать собственные атрибуты иконкам и кнопкам через scoped‑props"
      }), `
`, e(n.li, {
        children: "Реализовывать адаптивное поведение (скрывать/сворачивать действия на узких экранах)"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Как правило, область ", e(n.code, {
        children: "bars"
      }), " выравнивается по правому краю панели и наследует размеры/отступы от базового стиля компонента Bars."]
    })]
  });
}
function bl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Bn, {
      ...i
    })
  }) : Bn(i);
}
function En(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "actionBars"
      })
    }), `
`, e(n.p, {
      children: "Slot for rendering the set of action buttons in action mode. It lets you fully redefine specialized actions that appear when selection mode is active."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Define domain‑specific actions for selected items (e.g., share, move, delete)"
      }), `
`, e(n.li, {
        children: "Control ordering, grouping, and button state"
      }), `
`, e(n.li, {
        children: "Pass custom attributes to icons and buttons via scoped props"
      }), `
`, e(n.li, {
        children: "Implement responsive behavior and collapse secondary actions"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "actionBars"
      }), " area is shown instead of the regular ", e(n.code, {
        children: "bars"
      }), " when action mode is enabled and inherits sizing/spacing from the base Bars styles."]
    })]
  });
}
function vl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(En, {
      ...i
    })
  }) : En(i);
}
function Un(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "actionBars"
      })
    }), `
`, e(n.p, {
      children: "Слот для рендеринга набора кнопок в режиме действий (action). Позволяет полностью переопределить специализированные действия, которые отображаются при активированном режиме выбора."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Определять доменно‑специфичные действия для выбранных элементов (например: поделиться, переместить, удалить)"
      }), `
`, e(n.li, {
        children: "Контролировать порядок, группировку и состояние кнопок"
      }), `
`, e(n.li, {
        children: "Передавать собственные атрибуты иконкам и кнопкам через scoped‑props"
      }), `
`, e(n.li, {
        children: "Реализовывать адаптивное поведение и сворачивание второстепенных действий"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Область ", e(n.code, {
        children: "actionBars"
      }), " отображается вместо обычного ", e(n.code, {
        children: "bars"
      }), ", когда включён режим action, и наследует размеры/отступы от базового стиля компонента Bars."]
    })]
  });
}
function Ml(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Un, {
      ...i
    })
  }) : Un(i);
}
function Hn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Two-way binding (v-model)"
    }), `
`, t(n.p, {
      children: ["The Bars component supports two-way binding for the ", e(n.code, {
        children: "action"
      }), " state using the ", e(n.code, {
        children: "v-model:action"
      }), " directive."]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, e(n.p, {
      children: "This allows you to synchronize the action mode of the bar with a local data property in your parent component."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-html",
        children: `<Bars v-model:action="isAction"/>
`
      })
    }), `
`, e(n.h3, {
      children: "How it works"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "v-model:action"
      }), " is a shorthand for binding the ", e(n.code, {
        children: "action"
      }), " prop and listening to the ", e(n.code, {
        children: "update:action"
      }), " event."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: ':action=\\"isAction\\"'
          })
        }), " — The action mode is controlled by the ", e(n.code, {
          children: "isAction"
        }), " ref."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: '@update:action=\\"isAction = $event\\"'
          })
        }), " — When the internal state changes, the component emits an event to update the parent’s ", e(n.code, {
          children: "isAction"
        }), " ref."]
      }), `
`]
    })]
  });
}
function wl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Hn, {
      ...i
    })
  }) : Hn(i);
}
function Wn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Двусторонняя привязка (v-model)"
    }), `
`, t(n.p, {
      children: ["Компонент Bars поддерживает двустороннюю привязку для состояния ", e(n.code, {
        children: "action"
      }), " с использованием директивы ", e(n.code, {
        children: "v-model:action"
      }), "."]
    }), `
`, e(n.h3, {
      children: "Использование"
    }), `
`, e(n.p, {
      children: "Это позволяет синхронизировать режим действий панели с локальным свойством данных родительского компонента."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-html",
        children: `<Bars v-model:action="isAction"/>
`
      })
    }), `
`, e(n.h3, {
      children: "Как это работает"
    }), `
`, t(n.p, {
      children: [e(n.code, {
        children: "v-model:action"
      }), " — это сокращение для привязки свойства ", e(n.code, {
        children: "action"
      }), " и прослушивания события ", e(n.code, {
        children: "update:action"
      }), "."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: ':action="isAction"'
          })
        }), " — Режим действий управляется ref ", e(n.code, {
          children: "isAction"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: '@update:action="isAction = $event"'
          })
        }), " — Когда внутреннее состояние меняется, компонент генерирует событие для обновления ", e(n.code, {
          children: "isAction"
        }), " у родителя."]
      }), `
`]
    })]
  });
}
function Cl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Wn, {
      ...i
    })
  }) : Wn(i);
}
const Dl = {
  name: "Bars",
  descriptions: {
    bars: {
      en: pl,
      ru: ml
    },
    action: {
      en: gl,
      ru: fl
    },
    "slot.bars": {
      en: yl,
      ru: bl
    },
    "slot.actionBars": {
      en: vl,
      ru: Ml
    },
    "v-model": {
      en: wl,
      ru: Cl
    }
  }
};
function Vn(i) {
  const n = {
    h2: "h2",
    p: "p",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Description"
    }), `
`, e(n.p, {
      children: "The Button component is an interactive element for user actions. It supports various visual styles, sizes, and states to create a consistent user interface."
    })]
  });
}
function xl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Vn, {
      ...i
    })
  }) : Vn(i);
}
function qn(i) {
  const n = {
    h2: "h2",
    p: "p",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Описание"
    }), `
`, e(n.p, {
      children: "Компонент Button представляет собой интерактивный элемент для выполнения действий пользователя. Он поддерживает различные визуальные стили, размеры и состояния для создания согласованного пользовательского интерфейса."
    })]
  });
}
function kl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(qn, {
      ...i
    })
  }) : qn(i);
}
function zn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Primary Button Style"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "primary"
      }), " property activates the main visual style of the button, making it more prominent and drawing user attention to important actions."]
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Visual accent"
        }), " — Makes the button stand out among other interface elements"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Action hierarchy"
        }), " — Indicates the main or priority action on the page"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Enhanced visibility"
        }), " — Provides better distinction of important controls"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, e(n.p, {
      children: "The property is recommended for:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Main actions in forms (submit, save)"
      }), `
`, e(n.li, {
        children: "Call-to-Action buttons"
      }), `
`, e(n.li, {
        children: "Confirmation of important operations"
      }), `
`, e(n.li, {
        children: "Navigation to key sections"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Contrast"
        }), " — Automatically applies high-contrast colors for better visibility"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Accessibility"
        }), " — Complies with accessibility standards for users with disabilities"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Responsiveness"
        }), " — Maintains style across different screen sizes and devices"]
      }), `
`]
    })]
  });
}
function _l(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(zn, {
      ...i
    })
  }) : zn(i);
}
function On(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Основной стиль кнопки"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "primary"
      }), " активирует основной визуальный стиль кнопки, делая её более заметной и акцентирующей внимание пользователя на важном действии."]
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Визуальный акцент"
        }), " — Выделяет кнопку среди других элементов интерфейса"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Иерархия действий"
        }), " — Указывает на основное или приоритетное действие на странице"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Улучшенная видимость"
        }), " — Обеспечивает лучшую различимость важных элементов управления"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, e(n.p, {
      children: "Свойство рекомендуется использовать для:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Основных действий в формах (отправка, сохранение)"
      }), `
`, e(n.li, {
        children: "Призывов к действию (Call-to-Action)"
      }), `
`, e(n.li, {
        children: "Подтверждения важных операций"
      }), `
`, e(n.li, {
        children: "Навигации к ключевым разделам"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Контрастность"
        }), " — Автоматически применяет высококонтрастные цвета для лучшей видимости"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Доступность"
        }), " — Соответствует стандартам доступности для пользователей с ограниченными возможностями"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Адаптивность"
        }), " — Сохраняет стиль при различных размерах экрана и устройствах"]
      }), `
`]
    })]
  });
}
function Xl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(On, {
      ...i
    })
  }) : On(i);
}
function jn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Secondary Button Style"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "secondary"
      }), " property activates the secondary visual style of the button, which is less intrusive than the primary style and is used for alternative or less important actions."]
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Alternative actions"
        }), " — Provides the user with a choice of several actions"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Reduced visual load"
        }), " — Helps to avoid overloading the interface with accent elements"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Grouping actions"
        }), " — Used to group related but not primary actions"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, e(n.p, {
      children: "The property is recommended for:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Secondary actions in forms (cancel, reset)"
      }), `
`, e(n.li, {
        children: "Additional options or settings"
      }), `
`, e(n.li, {
        children: "Less priority actions on the page"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Moderate contrast"
        }), " — Uses colors with less contrast than the primary style"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Consistency"
        }), " — Harmoniously combines with the primary style and other elements"]
      }), `
`]
    })]
  });
}
function $l(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(jn, {
      ...i
    })
  }) : jn(i);
}
function Yn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Второстепенный стиль кнопки"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "secondary"
      }), " активирует второстепенный визуальный стиль кнопки, который менее навязчив, чем основной, и используется для альтернативных или менее важных действий."]
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Альтернативные действия"
        }), " — Предоставляет пользователю выбор из нескольких действий"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Сниженная визуальная нагрузка"
        }), " — Помогает избежать перегрузки интерфейса акцентными элементами"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Группировка действий"
        }), " — Используется для группировки связанных, но не основных действий"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, e(n.p, {
      children: "Свойство рекомендуется использовать для:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Второстепенных действий в формах (отмена, сброс)"
      }), `
`, e(n.li, {
        children: "Дополнительных опций или настроек"
      }), `
`, e(n.li, {
        children: "Менее приоритетных действий на странице"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Умеренный контраст"
        }), " — Использует цвета с меньшим контрастом, чем основной стиль"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Согласованность"
        }), " — Гармонично сочетается с основным стилем и другими элементами"]
      }), `
`]
    })]
  });
}
function Ll(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Yn, {
      ...i
    })
  }) : Yn(i);
}
function Gn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Outline Button Style"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "outline"
      }), " property applies an outline style to the button. This style is typically used for actions that should be less prominent than ", e(n.code, {
        children: "secondary"
      }), " but still accessible."]
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Additional actions"
        }), " — For actions that are not primary or secondary."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Minimalist design"
        }), " — Suitable for interfaces where minimal visual load is required."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Filter reset buttons."
      }), `
`, e(n.li, {
        children: "Secondary actions in cards or lists."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Transparent background"
        }), " — The button has a transparent background and a colored border."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Hover contrast"
        }), " — The background appears on hover for better feedback."]
      }), `
`]
    })]
  });
}
function Sl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Gn, {
      ...i
    })
  }) : Gn(i);
}
function Kn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Контурный стиль кнопки"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "outline"
      }), " применяет контурный стиль к кнопке. Этот стиль обычно используется для действий, которые должны быть менее заметными, чем ", e(n.code, {
        children: "secondary"
      }), ", но все же доступными."]
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Дополнительные действия"
        }), " — Для действий, которые не являются основными или второстепенными."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Минималистичный дизайн"
        }), " — Подходит для интерфейсов, где требуется минимальная визуальная нагрузка."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Кнопки сброса фильтров."
      }), `
`, e(n.li, {
        children: "Второстепенные действия в карточках или списках."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Прозрачный фон"
        }), " — Кнопка имеет прозрачный фон и цветную рамку."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Контрастность при наведении"
        }), " — Фон появляется при наведении для лучшего отклика."]
      }), `
`]
    })]
  });
}
function Tl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Kn, {
      ...i
    })
  }) : Kn(i);
}
function Jn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Text Button Style"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "text"
      }), " property applies a text style to the button, making it look like a link. This style is used for the least intrusive actions."]
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Tertiary actions"
        }), " — For actions that should look like text but be interactive."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Unobtrusive design"
        }), " — Ideal for actions within text or where the button should not be distracting."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: '"Learn more" links.'
      }), `
`, e(n.li, {
        children: "Actions in a footer or menu."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "No background or border"
        }), " — The button looks like plain text."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Hover background"
        }), " — A background appears on hover for better feedback."]
      }), `
`]
    })]
  });
}
function Pl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Jn, {
      ...i
    })
  }) : Jn(i);
}
function Zn(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Текстовый стиль кнопки"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "text"
      }), " применяет текстовый стиль к кнопке, делая ее похожей на ссылку. Этот стиль используется для наименее навязчивых действий."]
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Второстепенные действия"
        }), " — Для действий, которые должны выглядеть как текст, но быть интерактивными."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Ненавязчивый дизайн"
        }), " — Идеально подходит для действий внутри текста или там, где кнопка не должна отвлекать внимание."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: 'Ссылки "Узнать больше".'
      }), `
`, e(n.li, {
        children: "Действия в футере или в меню."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Без фона и рамки"
        }), " — Кнопка выглядит как обычный текст."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Фон при наведении"
        }), " — Появляется фон для лучшего отклика."]
      }), `
`]
    })]
  });
}
function Fl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Zn, {
      ...i
    })
  }) : Zn(i);
}
const Al = {
  name: "Button",
  descriptions: {
    button: {
      en: xl,
      ru: kl
    },
    primary: {
      en: _l,
      ru: Xl
    },
    secondary: {
      en: $l,
      ru: Ll
    },
    outline: {
      en: Sl,
      ru: Tl
    },
    text: {
      en: Pl,
      ru: Fl
    }
  }
};
function Qn(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Description"
    }), `
`, e(n.p, {
      children: "Versatile container component for displaying structured content with labels, descriptions, and actions. Cell provides consistent representation of information in lists, menus, and other interface elements."
    }), `
`, e(n.h3, {
      children: "Key Features"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Flexible content structure with support for labels, descriptions, and captions"
      }), `
`, e(n.li, {
        children: "Interactive states (selected, disabled, read-only)"
      }), `
`, e(n.li, {
        children: "Built-in icon and progress indicator support"
      }), `
`, e(n.li, {
        children: "Customizable dividers between elements"
      }), `
`, e(n.li, {
        children: "Dynamic behavior with hover effects"
      }), `
`, e(n.li, {
        children: "Skeleton system integration for loading states"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, e(n.p, {
      children: "Use Cell to create structured lists, settings, navigation menus, and other interface elements that require consistent information display. Particularly effective in mobile interfaces and responsive designs."
    })]
  });
}
function Nl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Qn, {
      ...i
    })
  }) : Qn(i);
}
function ne(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Описание"
    }), `
`, e(n.p, {
      children: "Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями. Cell обеспечивает единообразное представление информации в списках, меню и других интерфейсных элементах."
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Гибкая структура контента с поддержкой меток, описаний и подписей"
      }), `
`, e(n.li, {
        children: "Интерактивные состояния (выбранный, отключенный, только для чтения)"
      }), `
`, e(n.li, {
        children: "Встроенная поддержка иконок и индикаторов прогресса"
      }), `
`, e(n.li, {
        children: "Настраиваемые разделители между элементами"
      }), `
`, e(n.li, {
        children: "Динамическое поведение с эффектами наведения"
      }), `
`, e(n.li, {
        children: "Интеграция с системой скелетонов для состояний загрузки"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, e(n.p, {
      children: "Используйте Cell для создания структурированных списков, настроек, меню навигации и других элементов интерфейса, где требуется единообразное отображение информации. Особенно эффективен в мобильных интерфейсах и адаптивных дизайнах."
    })]
  });
}
function Il(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ne, {
      ...i
    })
  }) : ne(i);
}
function ee(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "body"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing additional content at the bottom of the cell."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Adds information or controls below the main content"
      }), `
`, e(n.li, {
        children: "It Does not affect the main cell structure"
      }), `
`, e(n.li, {
        children: "Suitable for metadata, secondary actions, or details"
      }), `
`]
    })]
  });
}
function Rl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ee, {
      ...i
    })
  }) : ee(i);
}
function ie(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "body"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения дополнительного контента в нижней части ячейки."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Добавляет информацию или элементы управления под основным содержимым"
      }), `
`, e(n.li, {
        children: "Не влияет на основную структуру ячейки"
      }), `
`, e(n.li, {
        children: "Подходит для метаданных, вторичных действий или деталей"
      }), `
`]
    })]
  });
}
function Bl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ie, {
      ...i
    })
  }) : ie(i);
}
function te(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "trailing"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing control elements or indicators at the end of the cell."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Adds interactive elements on the right (switches, buttons, icons)"
      }), `
`, e(n.li, {
        children: "Suitable for actions or status display"
      }), `
`, e(n.li, {
        children: "Content is aligned to the right edge of the cell"
      }), `
`]
    })]
  });
}
function El(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(te, {
      ...i
    })
  }) : te(i);
}
function re(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "trailing"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения элементов управления или индикаторов в конце ячейки."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Добавляет интерактивные элементы справа (переключатели, кнопки, иконки)"
      }), `
`, e(n.li, {
        children: "Подходит для действий или отображения статуса"
      }), `
`, e(n.li, {
        children: "Контент выравнивается по правому краю"
      }), `
`]
    })]
  });
}
function Ul(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(re, {
      ...i
    })
  }) : re(i);
}
const Hl = {
  name: "Cell",
  descriptions: {
    cell: {
      en: Nl,
      ru: Il
    },
    "slot.body": {
      en: Rl,
      ru: Bl
    },
    "slot.trailing": {
      en: El,
      ru: Ul
    }
  }
};
function ce(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Description"
    }), `
`, e(n.p, {
      children: "A compact element that represents an input, attribute, or action. Chips allow users to enter information, make selections, filter content, or trigger actions."
    }), `
`, e(n.h3, {
      children: "Key Features"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Display information in a compact format"
      }), `
`, e(n.li, {
        children: "Support for various states (selected, disabled)"
      }), `
`, e(n.li, {
        children: "Icon support capability"
      }), `
`, e(n.li, {
        children: "Adaptive behavior"
      }), `
`, e(n.li, {
        children: "Customizable styling"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, e(n.p, {
      children: "Use chips to display tags, filters, statuses, or other compact interface elements. They are particularly useful in lists, search forms, and filtering systems."
    })]
  });
}
function Wl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ce, {
      ...i
    })
  }) : ce(i);
}
function le(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Описание"
    }), `
`, e(n.p, {
      children: "Компактный элемент, представляющий ввод, атрибут или действие. Чипы позволяют пользователям вводить информацию, делать выбор, фильтровать контент или запускать действия."
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Отображение информации в компактном формате"
      }), `
`, e(n.li, {
        children: "Поддержка различных состояний (выбранный, отключенный)"
      }), `
`, e(n.li, {
        children: "Возможность добавления иконок"
      }), `
`, e(n.li, {
        children: "Адаптивное поведение"
      }), `
`, e(n.li, {
        children: "Настраиваемая стилизация"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, e(n.p, {
      children: "Используйте чипы для отображения тегов, фильтров, статусов или других компактных элементов интерфейса. Они особенно полезны в списках, формах поиска и системах фильтрации."
    })]
  });
}
function Vl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(le, {
      ...i
    })
  }) : le(i);
}
function oe(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Assistive Chips"
    }), `
`, e(n.p, {
      children: "Assistive chips are designed to help users complete tasks or provide additional information. They have a special appearance that emphasizes their supportive role in the interface."
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Visually distinct from standard chips"
      }), `
`, e(n.li, {
        children: "Used for hints and recommendations"
      }), `
`, e(n.li, {
        children: "Help guide users to appropriate actions"
      }), `
`, e(n.li, {
        children: "Can contain icons for better understanding"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, e(n.p, {
      children: "Use assistive chips for:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Auto-completion suggestions"
      }), `
`, e(n.li, {
        children: "System recommendations"
      }), `
`, e(n.li, {
        children: "Navigation hints"
      }), `
`, e(n.li, {
        children: "Helper actions in forms"
      }), `
`]
    })]
  });
}
function ql(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(oe, {
      ...i
    })
  }) : oe(i);
}
function de(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Assistive чипы"
    }), `
`, e(n.p, {
      children: "Assistive чипы предназначены для помощи пользователям в выполнении задач или предоставления дополнительной информации. Они имеют специальный внешний вид, который подчеркивает их вспомогательную роль в интерфейсе."
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Визуально отличаются от стандартных чипов"
      }), `
`, e(n.li, {
        children: "Используются для подсказок и рекомендаций"
      }), `
`, e(n.li, {
        children: "Помогают направлять пользователя к нужным действиям"
      }), `
`, e(n.li, {
        children: "Могут содержать иконки для лучшего понимания"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, e(n.p, {
      children: "Используйте assistive чипы для:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Предложения автодополнения"
      }), `
`, e(n.li, {
        children: "Рекомендаций системы"
      }), `
`, e(n.li, {
        children: "Подсказок по навигации"
      }), `
`, e(n.li, {
        children: "Вспомогательных действий в формах"
      }), `
`]
    })]
  });
}
function zl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(de, {
      ...i
    })
  }) : de(i);
}
function he(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Input Chips"
    }), `
`, e(n.p, {
      children: "Input chips represent discrete pieces of information entered by users, such as tags, contacts, or keywords. They have an appearance similar to input fields and are often used in form contexts."
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Style reminiscent of form elements"
      }), `
`, e(n.li, {
        children: "Usually contains user input"
      }), `
`, e(n.li, {
        children: "Can be removed or edited"
      }), `
`, e(n.li, {
        children: "Often grouped in sets"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, e(n.p, {
      children: "Use input chips for:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Displaying entered tags"
      }), `
`, e(n.li, {
        children: "Lists of selected items"
      }), `
`, e(n.li, {
        children: "Contacts or recipients"
      }), `
`, e(n.li, {
        children: "User-applied filters"
      }), `
`, e(n.li, {
        children: "Search keywords"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, e(n.p, {
      children: "Input chips work best for displaying data that users have actively entered or selected, making them interactive and editable."
    })]
  });
}
function Ol(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(he, {
      ...i
    })
  }) : he(i);
}
function ae(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Input чипы"
    }), `
`, e(n.p, {
      children: "Input чипы представляют собой дискретную информацию, введенную пользователем, такую как теги, контакты или ключевые слова. Они имеют внешний вид, похожий на поля ввода, и часто используются в контексте форм."
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Стиль, напоминающий элементы формы"
      }), `
`, e(n.li, {
        children: "Обычно содержат пользовательский ввод"
      }), `
`, e(n.li, {
        children: "Могут быть удалены или отредактированы"
      }), `
`, e(n.li, {
        children: "Часто группируются в наборы"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, e(n.p, {
      children: "Используйте input чипы для:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Отображения введенных тегов"
      }), `
`, e(n.li, {
        children: "Списка выбранных элементов"
      }), `
`, e(n.li, {
        children: "Контактов или получателей"
      }), `
`, e(n.li, {
        children: "Фильтров, примененных пользователем"
      }), `
`, e(n.li, {
        children: "Ключевых слов для поиска"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, e(n.p, {
      children: "Input чипы лучше всего подходят для отображения данных, которые пользователь активно вводил или выбирал, делая их интерактивными и редактируемыми."
    })]
  });
}
function jl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ae, {
      ...i
    })
  }) : ae(i);
}
const Yl = {
  name: "Chip",
  descriptions: {
    chip: {
      en: Wl,
      ru: Vl
    },
    assistive: {
      en: ql,
      ru: zl
    },
    input: {
      en: Ol,
      ru: jl
    }
  }
};
function se(i) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "Field is the base container for form controls that composes label, messages, counter, icons, and progress. It provides a unified skeleton and classes for consistent layout."
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Composition of subcomponents"
        }), " — FieldLabel, FieldMessage, FieldCounter, Progress, icons"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Unified scaffold"
        }), " — Wrapper template for the input area and helper zones (caption/prefix/suffix)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "State styles"
        }), " — Manages focus, disabled, readonly, selected, block"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Slot support"
        }), " — Integrates caption, prefix, suffix at the container level"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Core capabilities"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Validation highlighting"
        }), " — Based on ", e(n.code, {
          children: "validationMessage"
        }), " and a force show flag"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Character counter"
        }), " — Position toggle via ", e(n.code, {
          children: "counterTop"
        })]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Control icons"
        }), " — Cancel and navigation (arrows) with visibility flags"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Sizing helpers"
        }), " — Built-in FieldSize and FieldIcons"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Progress integration"
        }), " — Compact static progress for loading/status"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Integration"
    }), `
`, e(n.p, {
      children: "Use Field as a foundation for constructing any input fields. It easily integrates labels, icons, messages, and progress. The component handles markup, classes, and consistency; concrete inputs provide the input logic."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Field is a constructor wrapper: it doesn’t input data by itself, it organizes structure and auxiliary visuals."
      }), `
`]
    })]
  });
}
function Gl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(se, {
      ...i
    })
  }) : se(i);
}
function ue(i) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "Field — базовый контейнер для полей формы, который собирает метку, сообщения, счётчик, иконки и прогресс. Обеспечивает единый каркас и классы для консистентной верстки."
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Композиция подкомпонентов"
        }), " — FieldLabel, FieldMessage, FieldCounter, Progress, иконки"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Единый каркас"
        }), " — Шаблон обёртки для поля ввода и вспомогательных зон (caption/prefix/suffix)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Стили состояния"
        }), " — Управление состояниями: focus, disabled, readonly, selected, block"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Поддержка слотов"
        }), " — Встраивание caption, prefix, suffix на уровне контейнера"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Подсветка валидации"
        }), " — На основе validationMessage и флага принудительного показа"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Счетчик символов"
        }), " — Переключение позиции счётчика через ", e(n.code, {
          children: "counterTop"
        })]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Иконки управления"
        }), " — Отмена и навигация (стрелки) с флагами видимости"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Интеграция размеров"
        }), " — Встроенные помощники FieldSize и FieldIcons"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Интеграция прогресса"
        }), " — Компактный статичный прогресс для загрузок/состояний"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Интеграция"
    }), `
`, e(n.p, {
      children: "Используйте Field как основу для конструирования любых полей ввода. В него легко интегрируются подписи, иконки, сообщения и прогресс. Компонент отвечает за разметку, классы и согласованность, а логику ввода реализуют конкретные инпуты."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Field — это оболочка-конструктор: он не вводит данные сам по себе, а организует структуру и отображение вспомогательных элементов."
      }), `
`]
    })]
  });
}
function Kl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ue, {
      ...i
    })
  }) : ue(i);
}
function pe(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Cancel / clear mode"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "cancel"
      }), " and ", e(n.code, {
        children: "cancelShow"
      }), " properties control when a clear (cancel) icon is displayed."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "cancel"
        }), " — Display mode: ", e(n.code, {
          children: "auto"
        }), " or ", e(n.code, {
          children: "always"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "cancelShow"
        }), " — Condition flag used only in ", e(n.code, {
          children: "auto"
        }), " mode."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Behaviour"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "cancel = auto"
        }), ": Shown only if ", e(n.code, {
          children: "cancelShow"
        }), " is true, field is active (not disabled / readonly) and no arrow mode (carousel / stepper) is enabled."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "cancel = always"
        }), ": Forced display (still hidden if disabled / readonly or arrows active)."]
      }), `
`, t(n.li, {
        children: ["In ", e(n.code, {
          children: "always"
        }), " mode ", e(n.code, {
          children: "cancelShow"
        }), " is ignored."]
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Typical usage: bind ", e(n.code, {
        children: "cancelShow"
      }), ' to a computed "has value" state.']
    })]
  });
}
function Jl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(pe, {
      ...i
    })
  }) : pe(i);
}
function me(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Режим кнопки очистки (cancel)"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "cancel"
      }), " и ", e(n.code, {
        children: "cancelShow"
      }), " управляют отображением иконки очистки (cancel)."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "cancel"
        }), " — Режим отображения: ", e(n.code, {
          children: "auto"
        }), " или ", e(n.code, {
          children: "always"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "cancelShow"
        }), " — Условный флаг, используется только в режиме ", e(n.code, {
          children: "auto"
        }), "."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Поведение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "cancel = auto"
        }), ": Показ только если ", e(n.code, {
          children: "cancelShow = true"
        }), ", поле активно (не disabled / readonly) и не включён режим стрелок (carousel / stepper)."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "cancel = always"
        }), ": Принудительный показ (кроме случаев disabled / readonly или активных стрелок)."]
      }), `
`, t(n.li, {
        children: ["В режиме ", e(n.code, {
          children: "always"
        }), " значение ", e(n.code, {
          children: "cancelShow"
        }), " игнорируется."]
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Типичный сценарий: привязать ", e(n.code, {
        children: "cancelShow"
      }), ' к вычисляемому состоянию "есть значение".']
    })]
  });
}
function Zl(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(me, {
      ...i
    })
  }) : me(i);
}
function ge(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Navigation & alignment"
    }), `
`, t(n.p, {
      children: ["The properties ", e(n.code, {
        children: "arrowCarousel"
      }), ", ", e(n.code, {
        children: "arrowStepper"
      }), ", ", e(n.code, {
        children: "disabledPrevious"
      }), ", ", e(n.code, {
        children: "disabledNext"
      }), ", and ", e(n.code, {
        children: "align"
      }), " control inline navigation controls and text alignment inside Field."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "arrowCarousel"
        }), " – Enables left/right navigation arrows (previous/next) using arrow icons."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "arrowStepper"
        }), " – Enables numeric step control (minus / plus). Mutually exclusive with ", e(n.code, {
          children: "arrowCarousel"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "disabledPrevious"
        }), " – Disables the left / minus control."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "disabledNext"
        }), " – Disables the right / plus control."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "align"
        }), " (", e(n.code, {
          children: "left | center | right"
        }), ") – Horizontal alignment for the input/content zone."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Interaction rules"
    }), `
`, t(n.ol, {
      children: [`
`, t(n.li, {
        children: ["Only one mode is active: if ", e(n.code, {
          children: "arrowCarousel"
        }), " is true, stepper mode (", e(n.code, {
          children: "arrowStepper"
        }), ") is ignored and vice‑versa."]
      }), `
`, e(n.li, {
        children: "When an arrow mode is active, the cancel (clear) button is suppressed (takes priority space)."
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "disabledPrevious"
        }), " / ", e(n.code, {
          children: "disabledNext"
        }), " apply to the currently active arrow mode only."]
      }), `
`, t(n.li, {
        children: ["Alignment (", e(n.code, {
          children: "align"
        }), ") affects the text/input area, not the arrow buttons (they stay at the edges defined by design)."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Typical usage"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Carousel navigation between items: ", e(n.code, {
          children: "arrowCarousel"
        }), " + manage ", e(n.code, {
          children: "disabledPrevious/disabledNext"
        }), "."]
      }), `
`, t(n.li, {
        children: ["Numeric increment/decrement: ", e(n.code, {
          children: "arrowStepper"
        }), " + internal value logic."]
      }), `
`, t(n.li, {
        children: ["Centered value display with step controls: combine ", e(n.code, {
          children: "arrowStepper"
        }), " + ", e(n.code, {
          children: 'align="center"'
        }), "."]
      }), `
`]
    })]
  });
}
function Ql(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ge, {
      ...i
    })
  }) : ge(i);
}
function fe(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Навигация и выравнивание"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "arrowCarousel"
      }), ", ", e(n.code, {
        children: "arrowStepper"
      }), ", ", e(n.code, {
        children: "disabledPrevious"
      }), ", ", e(n.code, {
        children: "disabledNext"
      }), " и ", e(n.code, {
        children: "align"
      }), " управляют встроенными элементами навигации и горизонтальным выравниванием содержимого внутри Field."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "arrowCarousel"
        }), " — Включает стрелки навигации (влево/вправо) для переключения элементов."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "arrowStepper"
        }), " — Включает числовые шаговые кнопки (минус / плюс). Взаимоисключимо с ", e(n.code, {
          children: "arrowCarousel"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "disabledPrevious"
        }), " — Отключает левую / минус кнопку."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "disabledNext"
        }), " — Отключает правую / плюс кнопку."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "align"
        }), " (", e(n.code, {
          children: "left | center | right"
        }), ") — Горизонтальное выравнивание области ввода/контента."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Правила взаимодействия"
    }), `
`, t(n.ol, {
      children: [`
`, t(n.li, {
        children: ["Активен только один режим: если ", e(n.code, {
          children: "arrowCarousel = true"
        }), ", режим ", e(n.code, {
          children: "arrowStepper"
        }), " игнорируется и наоборот."]
      }), `
`, e(n.li, {
        children: "При активном режиме стрелок кнопка очистки (cancel) скрывается (приоритет области управления)."
      }), `
`, t(n.li, {
        children: ["Флаги ", e(n.code, {
          children: "disabledPrevious"
        }), " / ", e(n.code, {
          children: "disabledNext"
        }), " относятся только к текущему активному режиму."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "align"
        }), " влияет на текст/контент, но не смещает сами кнопки навигации."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Типовые сценарии"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Переключение записей/экранов: ", e(n.code, {
          children: "arrowCarousel"
        }), " + управление ", e(n.code, {
          children: "disabledPrevious/disabledNext"
        }), "."]
      }), `
`, t(n.li, {
        children: ["Инкремент/декремент числа: ", e(n.code, {
          children: "arrowStepper"
        }), " + логика значения."]
      }), `
`, t(n.li, {
        children: ["Центрированное значение со степперами: ", e(n.code, {
          children: "arrowStepper"
        }), " + ", e(n.code, {
          children: 'align="center"'
        }), "."]
      }), `
`]
    })]
  });
}
function no(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(fe, {
      ...i
    })
  }) : fe(i);
}
function ye(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "default"
      })
    }), `
`, e(n.p, {
      children: "Main input slot for Field – place the actual interactive control here."
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Receives props: ", e(n.code, {
          children: "{ id, className, classHidden }"
        })]
      }), `
`, t(n.li, {
        children: ["Always bind both ", e(n.code, {
          children: ':id="id"'
        }), " and ", e(n.code, {
          children: ':class="className"'
        }), " to keep accessibility + styling"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "classHidden"
        }), " can be used for a hidden mirror / measurement input if needed"]
      }), `
`, e(n.li, {
        children: "Avoid extra wrapper elements to prevent layout / sizing breaks"
      }), `
`, t(n.li, {
        children: ["Suitable for ", e(n.code, {
          children: "<input>"
        }), ", ", e(n.code, {
          children: "<textarea>"
        }), ", masked or custom input components"]
      }), `
`]
    })]
  });
}
function eo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ye, {
      ...i
    })
  }) : ye(i);
}
function be(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "default"
      })
    }), `
`, e(n.p, {
      children: "Основной слот ввода Field — сюда помещается реальный интерактивный контрол."
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Props: ", e(n.code, {
          children: "{ id, className, classHidden }"
        })]
      }), `
`, t(n.li, {
        children: ["Всегда привязывайте ", e(n.code, {
          children: ':id="id"'
        }), " и ", e(n.code, {
          children: ':class="className"'
        }), " (доступность + стили)"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "classHidden"
        }), " можно использовать для скрытого зеркального / измерительного input"]
      }), `
`, e(n.li, {
        children: "Избегайте лишних обёрток, чтобы не ломать размеры и выравнивание"
      }), `
`, t(n.li, {
        children: ["Подходит для ", e(n.code, {
          children: "<input>"
        }), ", ", e(n.code, {
          children: "<textarea>"
        }), ", маскированных или кастомных компонентов"]
      }), `
`]
    })]
  });
}
function io(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(be, {
      ...i
    })
  }) : be(i);
}
function ve(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "leading"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing custom content at the start of the interactive field area (before the main input content flow)."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Positioned at the logical beginning (left in LTR, right in RTL)"
      }), `
`, e(n.li, {
        children: "Suitable for small icons, state indicators, lightweight buttons or badges"
      }), `
`, t(n.li, {
        children: ["Receives the same control props object (", e(n.code, {
          children: "{ id, className, classHidden }"
        }), ") as the default slot"]
      }), `
`, e(n.li, {
        children: "Should remain compact; avoid breaking vertical rhythm or padding"
      }), `
`, t(n.li, {
        children: ["Does not replace ", e(n.code, {
          children: "prefix"
        }), " — use ", e(n.code, {
          children: "prefix"
        }), " for semantic prefix text and ", e(n.code, {
          children: "leading"
        }), " for functional/auxiliary UI"]
      }), `
`]
    })]
  });
}
function to(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ve, {
      ...i
    })
  }) : ve(i);
}
function Me(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "leading"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения пользовательского контента в начале интерактивной области поля (до основного потока ввода)."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Располагается логически в начале (слева в LTR, справа в RTL)"
      }), `
`, e(n.li, {
        children: "Подходит для маленьких иконок, индикаторов состояния, лёгких кнопок или бейджей"
      }), `
`, t(n.li, {
        children: ["Получает тот же объект props (", e(n.code, {
          children: "{ id, className, classHidden }"
        }), "), что и слот ", e(n.code, {
          children: "default"
        })]
      }), `
`, e(n.li, {
        children: "Должен оставаться компактным; не нарушайте вертикальный ритм и отступы"
      }), `
`, t(n.li, {
        children: ["Не заменяет ", e(n.code, {
          children: "prefix"
        }), " — используйте ", e(n.code, {
          children: "prefix"
        }), " для семантического текстового префикса, а ", e(n.code, {
          children: "leading"
        }), " — для функционального / вспомогательного UI"]
      }), `
`]
    })]
  });
}
function ro(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Me, {
      ...i
    })
  }) : Me(i);
}
function we(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "trailing"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing custom content at the end of the interactive field area (after the main input content flow but before internal control icons)."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Positioned at the logical end (right in LTR, left in RTL)"
      }), `
`, e(n.li, {
        children: "Good for action icons (clear, open, toggle), counters, lightweight status badges"
      }), `
`, t(n.li, {
        children: ["Receives the same control props object (", e(n.code, {
          children: "{ id, className, classHidden }"
        }), ") as the default slot"]
      }), `
`, e(n.li, {
        children: "Keep it concise; avoid large buttons that disrupt layout"
      }), `
`, t(n.li, {
        children: ["Does not replace ", e(n.code, {
          children: "suffix"
        }), " — use ", e(n.code, {
          children: "suffix"
        }), " for semantic ending text, ", e(n.code, {
          children: "trailing"
        }), " for functional / dynamic UI"]
      }), `
`]
    })]
  });
}
function co(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(we, {
      ...i
    })
  }) : we(i);
}
function Ce(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "trailing"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения пользовательского контента в конце интерактивной области поля (после основного содержимого ввода, но до внутренних управляющих иконок)."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Расположен логически в конце (справа в LTR, слева в RTL)"
      }), `
`, e(n.li, {
        children: "Подходит для иконок действий (очистка, открыть, переключить), счётчиков, небольших статусных бейджей"
      }), `
`, t(n.li, {
        children: ["Получает тот же объект props (", e(n.code, {
          children: "{ id, className, classHidden }"
        }), "), что и слот ", e(n.code, {
          children: "default"
        })]
      }), `
`, e(n.li, {
        children: "Должен быть компактным — избегайте крупных элементов, ломающих компоновку"
      }), `
`, t(n.li, {
        children: ["Не заменяет ", e(n.code, {
          children: "suffix"
        }), " — используйте ", e(n.code, {
          children: "suffix"
        }), " для семантического завершающего текста, ", e(n.code, {
          children: "trailing"
        }), " — для функционального / динамического UI"]
      }), `
`]
    })]
  });
}
function lo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ce, {
      ...i
    })
  }) : Ce(i);
}
function De(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Value state (value & isValue)"
    }), `
`, t(n.p, {
      children: [e(n.code, {
        children: "Field"
      }), " separates actual input content from the ", e(n.em, {
        children: "visual filled state"
      }), "."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "value"
        }), " – Actual content (string / number, etc.) you pass into the inner ", e(n.code, {
          children: "<input>"
        }), " via the default slot. ", e(n.code, {
          children: "Field"
        }), " does not manage (no ", e(n.code, {
          children: "v-model"
        }), ") or mutate / validate it, ", e(n.strong, {
          children: "but"
        }), " it reads it reactively through a computed ", e(n.code, {
          children: "focusValue"
        }), " purely for visual purposes: displaying the current textual snapshot near the caption (scoreboardInput) and harmonizing layout with caption + extra controls. Priority when deriving ", e(n.code, {
          children: "focusValue"
        }), ": element with ", e(n.code, {
          children: "[data-length]"
        }), " → main ", e(n.code, {
          children: "<input>"
        }), " → ", e(n.code, {
          children: "props.value"
        }), " (string). This read does not drive business rules."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "isValue"
        }), " (", e(n.code, {
          children: "boolean"
        }), ") – Forces the visual “filled” state (floating / collapsed label + classes) even if the actual input is empty."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Interaction"
    }), `
`, t(n.ol, {
      children: [`
`, t(n.li, {
        children: ["Non‑empty real input ⇒ filled appearance regardless of ", e(n.code, {
          children: "isValue"
        }), "."]
      }), `
`, t(n.li, {
        children: ["Empty real input + ", e(n.code, {
          children: "isValue = true"
        }), " ⇒ visually filled (preload, mask, delayed prefill cases)."]
      }), `
`, t(n.li, {
        children: ["Empty real input + no / false ", e(n.code, {
          children: "isValue"
        }), " ⇒ visually empty."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "focusValue"
        }), " is used only to render inline mirrored text when caption zone is active and optionally to read length from ", e(n.code, {
          children: "[data-length]"
        }), " element; do not rely on it for validation or domain logic."]
      }), `
`, t(n.li, {
        children: ["Validation, helper messages, counters (implemented externally) must use the real input value, not ", e(n.code, {
          children: "isValue"
        }), "."]
      }), `
`]
    }), `
`, t(n.h3, {
      children: ["When to use ", e(n.code, {
        children: "isValue"
      })]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Preload “as if filled” look while fetching data."
      }), `
`, e(n.li, {
        children: "Masked / templated inputs needing a permanently floated label."
      }), `
`, e(n.li, {
        children: "Visual demos / stories without binding a real value yet."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Don’t overload ", e(n.code, {
          children: "isValue"
        }), " for logic; it’s strictly visual."]
      }), `
`, t(n.li, {
        children: ["Keep reactive value handling outside (wrapper with ", e(n.code, {
          children: "v-model"
        }), "), treat ", e(n.code, {
          children: "Field"
        }), " as structural shell."]
      }), `
`, t(n.li, {
        children: ["For length-sensitive styling add an attribute ", e(n.code, {
          children: "[data-length]"
        }), " to an inner element; priority: ", e(n.code, {
          children: "[data-length]"
        }), " → ", e(n.code, {
          children: "<input>"
        }), " → ", e(n.code, {
          children: "props.value"
        }), "."]
      }), `
`]
    })]
  });
}
function oo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(De, {
      ...i
    })
  }) : De(i);
}
function xe(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Состояние значения (value и isValue)"
    }), `
`, t(n.p, {
      children: [e(n.code, {
        children: "Field"
      }), " отделяет фактическое содержимое ввода от ", e(n.em, {
        children: "визуального состояния заполненности"
      }), "."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "value"
        }), " – Фактическое содержимое (строка/число и т.п.), которое вы передаёте во внутренний ", e(n.code, {
          children: "<input>"
        }), " через слот. ", e(n.code, {
          children: "Field"
        }), " не управляет значением (нет ", e(n.code, {
          children: "v-model"
        }), " и мутаций) и не валидирует его, ", e(n.strong, {
          children: "но"
        }), " считывает его ОДИН раз реактивно через вычисление ", e(n.code, {
          children: "focusValue"
        }), " для чисто визуальных целей: вывода «текущего» текста рядом с caption (scoreboardInput) и корректной работы комбинированной зоны caption/доборных элементов. Если передан ", e(n.code, {
          children: "props.value"
        }), " (строка) – используется он; иначе ищется реальный ", e(n.code, {
          children: "<input>"
        }), " или элемент с ", e(n.code, {
          children: "[data-length]"
        }), ". Это чтение не влияет на логику валидации и не изменяет значение."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "isValue"
        }), " (", e(n.code, {
          children: "boolean"
        }), ") – Принудительно включает «режим заполненности» (плавающая / сжатая метка, соответствующие классы), даже если реальный ", e(n.code, {
          children: "value"
        }), " пуст."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Взаимодействие"
    }), `
`, t(n.ol, {
      children: [`
`, t(n.li, {
        children: ["Реальное непустое значение (через слот) всегда включает визуальное состояние «заполнено» независимо от ", e(n.code, {
          children: "isValue"
        }), "."]
      }), `
`, t(n.li, {
        children: ["Пустое значение + ", e(n.code, {
          children: "isValue = true"
        }), " ⇒ поле выглядит заполненным (прелоад, маска, отложенная подстановка)."]
      }), `
`, t(n.li, {
        children: ["Пустое значение + отсутствие/", e(n.code, {
          children: "false"
        }), " у ", e(n.code, {
          children: "isValue"
        }), " ⇒ визуально пусто."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "focusValue"
        }), " используется только для отображения текста в зоне scoreboard при активном caption и (опционально) для считывания длины из элемента с ", e(n.code, {
          children: "[data-length]"
        }), "; не применять его для бизнес‑логики."]
      }), `
`, t(n.li, {
        children: ["Валидация, helper‑сообщения и счётчик символов (если реализованы вовне) должны опираться на фактическое значение input, а не на ", e(n.code, {
          children: "isValue"
        }), "."]
      }), `
`]
    }), `
`, t(n.h3, {
      children: ["Когда использовать ", e(n.code, {
        children: "isValue"
      })]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Предварительный показ «как будто заполнено», пока грузятся данные."
      }), `
`, e(n.li, {
        children: "Маскированные / шаблонные поля, где нужно зафиксировать плавающий label."
      }), `
`, e(n.li, {
        children: "Демо/сторис без передачи реального значения."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Не подменяйте бизнес‑логику через ", e(n.code, {
          children: "isValue"
        }), "; он только про визуал."]
      }), `
`, t(n.li, {
        children: ["Если требуется реактивная работа с данными — управляйте значением во внешнем компоненте с ", e(n.code, {
          children: "v-model"
        }), ", а ", e(n.code, {
          children: "Field"
        }), " используйте как каркас."]
      }), `
`, t(n.li, {
        children: ["Для корректного подсчёта длины можно пометить внутренний элемент атрибутом ", e(n.code, {
          children: "data-length"
        }), "; приоритет чтения: элемент с ", e(n.code, {
          children: "[data-length]"
        }), " → основной ", e(n.code, {
          children: "<input>"
        }), " → ", e(n.code, {
          children: "props.value"
        }), "."]
      }), `
`]
    })]
  });
}
function ho(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(xe, {
      ...i
    })
  }) : xe(i);
}
function ke(i) {
  const n = {
    code: "code",
    pre: "pre",
    ...i.components
  };
  return e(n.pre, {
    children: e(n.code, {
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
function ao(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ke, {
      ...i
    })
  }) : ke(i);
}
function _e(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Ширина (width)"
    }), `
`, e(n.p, {
      children: "Свойство для управления горизонтальным размером Field."
    }), `
`, e(n.h3, {
      children: "Свойство"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "width"
        }), " (", e(n.code, {
          children: "string"
        }), ") — Передавайте ЛЮБОЕ валидное CSS‑значение: ", e(n.code, {
          children: '"320px"'
        }), ", ", e(n.code, {
          children: '"48rem"'
        }), ", ", e(n.code, {
          children: '"50%"'
        }), ", ", e(n.code, {
          children: '"min(100%,320px)"'
        }), ", ", e(n.code, {
          children: '"clamp(240px,40vw,480px)"'
        }), ", либо дизайн‑токен (например ", e(n.code, {
          children: '"sm"'
        }), ", если поддержан системой). Значение ", e(n.code, {
          children: '"custom"'
        }), " — внутренняя тех. метка (обычно не использовать)."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Поведение"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Не задано: ширина «резиновая» (зависит от контейнера)."
      }), `
`, t(n.li, {
        children: ["С ", e(n.code, {
          children: "block"
        }), ": всегда 100%."]
      }), `
`, e(n.li, {
        children: "Любое конкретное значение: применяется напрямую без доп. обёрток."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Примеры"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-vue",
        children: `<DesignField label="auto" />
<DesignField width="320px" label="320px" />
<DesignField width="50%" label="50%" />
<DesignField width="min(100%,320px)" label="min(...)" />
`
      })
    }), `
`, e(n.h3, {
      children: "Заметки"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Предпочтительнее управлять адаптивностью через родительский layout (flex / grid) и использовать width точечно."
      }), `
`, e(n.li, {
        children: "Сложные выражения (calc / min / clamp) поддерживаются, если валидны для CSS."
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "block"
        }), " может переопределить индивидуально заданную ширину при конфликте приоритетов стилей."]
      }), `
`]
    })]
  });
}
function so(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(_e, {
      ...i
    })
  }) : _e(i);
}
const uo = {
  name: "Field",
  descriptions: {
    field: {
      en: Gl,
      ru: Kl
    },
    cancel: {
      en: Jl,
      ru: Zl
    },
    arrows: {
      en: Ql,
      ru: no
    },
    "slot.default": {
      en: eo,
      ru: io
    },
    "slot.leading": {
      en: to,
      ru: ro
    },
    "slot.trailing": {
      en: co,
      ru: lo
    },
    value: {
      en: oo,
      ru: ho
    },
    width: {
      en: ao,
      ru: so
    }
  }
};
function Xe(i) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "FieldCounter is a component that displays character count for form fields. Shows current character count and input limits."
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Character counting"
        }), " — Display current input character count"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Input limits"
        }), " — Show character restrictions"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Custom templates"
        }), " — Flexible display formats"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Auto visibility"
        }), " — Smart display management"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Core capabilities"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Real-time counting"
        }), " — Instant counter updates"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Limit management"
        }), " — Maximum character limit display"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Template rendering"
        }), " — Customizable formats with [c] and [m] placeholders"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Flexible values"
        }), " — Support for strings and numbers"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Integration"
    }), `
`, e(n.p, {
      children: "Use FieldCounter with text inputs and textareas to display character count and limit information."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "This component focuses on counter display and should be used alongside input fields."
      }), `
`]
    })]
  });
}
function po(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Xe, {
      ...i
    })
  }) : Xe(i);
}
function $e(i) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "FieldCounter — компонент для отображения счетчика символов в полях форм. Показывает текущее количество символов и лимиты ввода."
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Счетчик символов"
        }), " — Отображение количества введенных символов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Лимиты ввода"
        }), " — Показ ограничений по количеству символов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Настраиваемые шаблоны"
        }), " — Гибкие форматы отображения"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Автоматическая видимость"
        }), " — Умное управление отображением"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Подсчет в реальном времени"
        }), " — Мгновенное обновление счетчика"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Управление лимитами"
        }), " — Отображение максимальных ограничений"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Шаблоны отображения"
        }), " — Настраиваемые форматы с заполнителями [c] и [m]"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гибкие значения"
        }), " — Поддержка строк и чисел"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Интеграция"
    }), `
`, e(n.p, {
      children: "Используйте FieldCounter с текстовыми полями и областями ввода для отображения информации о количестве символов и лимитах."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Компонент фокусируется на отображении счетчика и должен использоваться вместе с полями ввода."
      }), `
`]
    })]
  });
}
function mo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e($e, {
      ...i
    })
  }) : $e(i);
}
function Le(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Custom Templates"
    }), `
`, e(n.p, {
      children: "Use simple string templates with placeholders to format the counter."
    }), `
`, e(n.h3, {
      children: "Placeholders"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "[c]"
        }), " - current character count"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "[m]"
        }), " - maximum character limit"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function go(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Le, {
      ...i
    })
  }) : Le(i);
}
function Se(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Пользовательские шаблоны"
    }), `
`, e(n.p, {
      children: "Используйте простые строковые шаблоны с плейсхолдерами для форматирования счетчика."
    }), `
`, e(n.h3, {
      children: "Плейсхолдеры"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "[c]"
        }), " — текущее число символов"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "[m]"
        }), " — максимальный лимит символов"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Примеры"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function fo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Se, {
      ...i
    })
  }) : Se(i);
}
const yo = {
  name: "FieldCounter",
  descriptions: {
    fieldCounter: {
      en: po,
      ru: mo
    },
    templates: {
      en: go,
      ru: fo
    }
  }
};
function Te(i) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "FieldLabel is a component for displaying a field label and a required indicator."
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Field label"
        }), " — A caption for the input control"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Required marker"
        }), " — Shows a required state when needed"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Compatibility"
        }), " — Works together with FieldCounter and Progress"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Consistent style"
        }), " — Unified classes and spacing within form controls"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Key features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Simple usage"
        }), " — Just pass the ", e(n.code, {
          children: "label"
        }), " prop"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Required marker"
        }), " — Enable via the ", e(n.code, {
          children: "required"
        }), " prop"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Character counter"
        }), " — Renders when counter props (counter/maxlength) are provided"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Progress indicator"
        }), " — Can display progress (e.g., loading)"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Integration"
    }), `
`, e(n.p, {
      children: "Use FieldLabel as a part of composite input controls. When needed, add FieldCounter and Progress via corresponding props to make forms more informative."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "The component is responsible for rendering the label and does not affect input logic."
      }), `
`]
    })]
  });
}
function bo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Te, {
      ...i
    })
  }) : Te(i);
}
function Pe(i) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "FieldLabel — компонент для отображения текстовой метки поля и индикатора обязательности."
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Метка поля"
        }), " — Подпись к полю ввода"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Обязательность"
        }), " — Отображение маркера required при необходимости"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Совместимость"
        }), " — Используется вместе с FieldCounter и Progress"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Единый стиль"
        }), " — Согласованные классы и отступы в составе формы"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Простое подключение"
        }), " — Достаточно передать свойство ", e(n.code, {
          children: "label"
        })]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Маркер обязательности"
        }), " — Включается через свойство ", e(n.code, {
          children: "required"
        })]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Счетчик символов"
        }), " — Отображается при наличии свойств счётчика (counter/maxlength)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Индикатор процесса"
        }), " — Может показывать прогресс (например, загрузки)"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Интеграция"
    }), `
`, e(n.p, {
      children: "Используйте FieldLabel как часть составных контролов ввода. При необходимости добавляйте FieldCounter и Progress через соответствующие свойства, чтобы сделать форму информативнее."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Компонент отвечает за отображение метки и не влияет на логику ввода данных."
      }), `
`]
    })]
  });
}
function vo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Pe, {
      ...i
    })
  }) : Pe(i);
}
const Mo = {
  name: "FieldLabel",
  descriptions: {
    fieldLabel: {
      en: bo,
      ru: vo
    }
  }
};
function Fe(i) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "FieldMessage is a component for displaying helper and validation messages below form fields."
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Helper message — a hint or guidance for the user under the field"
      }), `
`, e(n.li, {
        children: "Validation message — an error text shown on invalid input"
      }), `
`, e(n.li, {
        children: "Forced display — controlled via the forceShow property"
      }), `
`, e(n.li, {
        children: "Smart visibility — automatic logic based on provided values"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Key features"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Message priority — validation message has priority over helper text"
      }), `
`, e(n.li, {
        children: "Flexible sources — supports both static and reactive values"
      }), `
`, e(n.li, {
        children: "Compatibility — works with input fields and character counter"
      }), `
`, e(n.li, {
        children: "Configurable rendering — via the design system and component attributes"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Integration"
    }), `
`, e(n.p, {
      children: "Use FieldMessage alongside input fields to show hints and errors, and together with FieldCounter for more informative forms."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "The component focuses on text messages and should be used with input controls."
      }), `
`]
    })]
  });
}
function wo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Fe, {
      ...i
    })
  }) : Fe(i);
}
function Ae(i) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "FieldMessage — компонент для отображения вспомогательных и валидационных сообщений под полями формы."
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Вспомогательное сообщение"
        }), " — Подсказка пользователю под полем"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Сообщение валидации"
        }), " — Текст ошибки при некорректном вводе"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Принудительное отображение"
        }), " — Управление показом через свойство forceShow"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Автоматическая видимость"
        }), " — Умное управление отображением"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Приоритет сообщений"
        }), " — Сообщение об ошибке имеет приоритет над подсказкой"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гибкость источников"
        }), " — Поддержка статических и реактивных значений"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Совместимость"
        }), " — Используется с полями ввода и счетчиком символов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Настраиваемый вывод"
        }), " — Через дизайн‑систему и атрибуты компонента"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Интеграция"
    }), `
`, e(n.p, {
      children: "Используйте FieldMessage вместе с полями ввода для вывода подсказок и ошибок, а также в сочетании с FieldCounter для информативных форм."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Компонент фокусируется на отображении текстовых сообщений и должен использоваться совместно с контролами ввода."
      }), `
`]
    })]
  });
}
function Co(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ae, {
      ...i
    })
  }) : Ae(i);
}
function Ne(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "helper"
      })
    }), `
`, e(n.p, {
      children: "Slot for rendering a helper (hint) message below an input field. It lets you fully override the text, markup, and styling of the hint, and optionally inject additional content."
    }), `
`, e(n.p, {
      children: "This slot allows you to:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Render custom markup instead of the default helper text"
      }), `
`, e(n.li, {
        children: "Add icons/links/formatting inside the message"
      }), `
`, e(n.li, {
        children: "Control visibility and states via scoped props"
      }), `
`, e(n.li, {
        children: "Localize and swap the text depending on context"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Typically, the ", e(n.code, {
        children: "helper"
      }), " area is placed under the input and inherits base spacing/typography from the design system. If a validation message is present at the same time, it has priority over the helper."]
    })]
  });
}
function Do(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ne, {
      ...i
    })
  }) : Ne(i);
}
function Ie(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "helper"
      })
    }), `
`, e(n.p, {
      children: "Слот для рендеринга вспомогательного сообщения (подсказки) под полем ввода. Позволяет полностью переопределить текст, разметку и оформление подсказки, а также внедрять дополнительный контент при необходимости."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Выводить произвольную разметку вместо стандартного текста подсказки"
      }), `
`, e(n.li, {
        children: "Подключать иконки/ссылки/форматирование внутри сообщения"
      }), `
`, e(n.li, {
        children: "Управлять видимостью и состояниями сообщения через scoped‑props"
      }), `
`, e(n.li, {
        children: "Локализовать текст и подменять его в зависимости от контекста"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Как правило, область ", e(n.code, {
        children: "helper"
      }), " располагается ниже поля ввода и наследует базовые отступы/типографику дизайн‑системы. Если одновременно есть сообщение валидации, оно имеет приоритет над подсказкой."]
    })]
  });
}
function xo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ie, {
      ...i
    })
  }) : Ie(i);
}
function Re(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "validation"
      })
    }), `
`, e(n.p, {
      children: "Slot for rendering a validation (error) message below an input field. It lets you fully override the text, markup, and styling of the error message, and optionally add custom content."
    }), `
`, e(n.p, {
      children: "This slot allows you to:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Render custom markup instead of the default error text"
      }), `
`, e(n.li, {
        children: "Add icons/links/formatting inside the message"
      }), `
`, e(n.li, {
        children: "Control visibility and states via scoped props (e.g., error type)"
      }), `
`, e(n.li, {
        children: "Localize and swap the text depending on context"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Typically, the ", e(n.code, {
        children: "validation"
      }), " area is placed under the input and has higher priority than ", e(n.code, {
        children: "helper"
      }), " — if a validation message is present, it’s displayed instead of the helper."]
    })]
  });
}
function ko(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Re, {
      ...i
    })
  }) : Re(i);
}
function Be(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "validation"
      })
    }), `
`, e(n.p, {
      children: "Слот для рендеринга сообщения валидации (ошибки) под полем ввода. Позволяет полностью переопределить текст, разметку и оформление сообщения об ошибке, а также дополнить его собственным контентом."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Выводить произвольную разметку вместо стандартного текста ошибки"
      }), `
`, e(n.li, {
        children: "Добавлять иконки/ссылки/форматирование внутри сообщения"
      }), `
`, e(n.li, {
        children: "Управлять видимостью и состояниями через scoped‑props (например, тип ошибки)"
      }), `
`, e(n.li, {
        children: "Локализовать и подменять текст в зависимости от контекста"
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Как правило, область ", e(n.code, {
        children: "validation"
      }), " располагается ниже поля ввода и имеет более высокий приоритет по сравнению с ", e(n.code, {
        children: "helper"
      }), " — если присутствует сообщение об ошибке, оно отображается вместо подсказки."]
    })]
  });
}
function _o(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Be, {
      ...i
    })
  }) : Be(i);
}
const Xo = {
  name: "FieldMessage",
  descriptions: {
    fieldMessage: {
      en: wo,
      ru: Co
    },
    "slot.helper": {
      en: Do,
      ru: xo
    },
    "slot.validation": {
      en: ko,
      ru: _o
    }
  }
};
function Ee(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Icon State Management"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "icon"
      }), ", ", e(n.code, {
        children: "iconActive"
      }), ", and ", e(n.code, {
        children: "active"
      }), " properties control the display of the icon based on its state. This allows for the creation of dynamic and interactive elements."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "icon"
          })
        }), " — The main icon displayed by default."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "iconActive"
          })
        }), " — The icon that is displayed when the component is in an active state (", e(n.code, {
          children: "active"
        }), " = ", e(n.code, {
          children: "true"
        }), ")."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "active"
          })
        }), " — A boolean property that toggles the component's state between normal and active."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Description"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "icon"
        }), " property is essential for displaying the icon."]
      }), `
`, t(n.li, {
        children: ["If ", e(n.code, {
          children: "iconActive"
        }), " is not provided, there will be no visual change when the ", e(n.code, {
          children: "active"
        }), " state changes."]
      }), `
`, t(n.li, {
        children: ["When ", e(n.code, {
          children: "active"
        }), " is set to ", e(n.code, {
          children: "true"
        }), ", the component will attempt to display the icon specified in ", e(n.code, {
          children: "iconActive"
        }), "."]
      }), `
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "active"
        }), " property can be used to create toggles, indicators, and other interactive elements."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use ", e(n.code, {
          children: "iconActive"
        }), " to provide visual feedback upon user interaction (e.g., on click or selection)."]
      }), `
`, t(n.li, {
        children: ["Ensure that ", e(n.code, {
          children: "icon"
        }), " and ", e(n.code, {
          children: "iconActive"
        }), " are visually distinct enough for the user to easily identify the state change."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage Example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function $o(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ee, {
      ...i
    })
  }) : Ee(i);
}
function Ue(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление состоянием иконки"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "icon"
      }), ", ", e(n.code, {
        children: "iconActive"
      }), " и ", e(n.code, {
        children: "active"
      }), " отвечают за управление отображением иконки в зависимости от её состояния. Это позволяет создавать динамичные и интерактивные элементы."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "icon"
          })
        }), " — Основная иконка, отображаемая по умолчанию."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "iconActive"
          })
        }), " — Иконка, которая отображается, когда компонент находится в активном состоянии (", e(n.code, {
          children: "active"
        }), " = ", e(n.code, {
          children: "true"
        }), ")."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "active"
          })
        }), " — Булево свойство, которое переключает состояние компонента между обычным и активным."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Описание"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "icon"
        }), " является основным и обязательным для отображения иконки."]
      }), `
`, t(n.li, {
        children: ["Если ", e(n.code, {
          children: "iconActive"
        }), " не задано, то при изменении состояния ", e(n.code, {
          children: "active"
        }), " визуально ничего не изменится."]
      }), `
`, t(n.li, {
        children: ["Когда ", e(n.code, {
          children: "active"
        }), " установлено в ", e(n.code, {
          children: "true"
        }), ", компонент будет пытаться отобразить иконку, указанную в ", e(n.code, {
          children: "iconActive"
        }), "."]
      }), `
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "active"
        }), " можно использовать для создания переключателей, индикаторов и других интерактивных элементов."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Используйте ", e(n.code, {
          children: "iconActive"
        }), " для обеспечения визуальной обратной связи при взаимодействии с пользователем (например, при нажатии или выборе)."]
      }), `
`, t(n.li, {
        children: ["Убедитесь, что ", e(n.code, {
          children: "icon"
        }), " и ", e(n.code, {
          children: "iconActive"
        }), " достаточно различны визуально, чтобы пользователь мог легко определить изменение состояния."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Lo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ue, {
      ...i
    })
  }) : Ue(i);
}
function He(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "isActive"
      })
    }), `
`, e(n.p, {
      children: "Computed property that determines whether the additional icon is active."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `readonly isActive: ComputedRef<boolean>
`
      })
    }), `
`, t(n.p, {
      children: ["Returns ", e(n.code, {
        children: "true"
      }), " only when both conditions are met:"]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "active"
        }), " property is set to ", e(n.code, {
          children: "true"
        })]
      }), `
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "iconActive"
        }), " property is defined (not empty)"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "This property is used internally by the component to control the display of primary and additional icons."
    })]
  });
}
function So(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(He, {
      ...i
    })
  }) : He(i);
}
function We(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "isActive"
      })
    }), `
`, e(n.p, {
      children: "Вычисляемое свойство, которое определяет, активна ли дополнительная иконка."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `readonly isActive: ComputedRef<boolean>
`
      })
    }), `
`, t(n.p, {
      children: ["Возвращает ", e(n.code, {
        children: "true"
      }), " только когда выполняются оба условия:"]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "active"
        }), " установлено в ", e(n.code, {
          children: "true"
        })]
      }), `
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "iconActive"
        }), " задано (не пустое)"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Это свойство используется внутри компонента для управления отображением основной и дополнительной иконок."
    })]
  });
}
function To(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(We, {
      ...i
    })
  }) : We(i);
}
const Po = {
  name: "Icon",
  descriptions: {
    icon: {
      en: $o,
      ru: Lo
    },
    "expose.isActive": {
      en: So,
      ru: To
    }
  }
};
function Ve(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Property value"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "value"
      }), " property is responsible for the main content. It is a universal property that supports multiple types of values, making it as flexible as possible for various use cases."]
    }), `
`, e(n.h3, {
      children: "Supported value types"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Icon name"
        }), " — The name of a built-in or custom icon (if supported by the system)."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "String (URL)"
        }), " — A direct link to an image file (e.g., PNG, JPG, SVG, GIF, WebP, etc.)."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "File object"
        }), " — A JavaScript ", e(n.code, {
          children: "File"
        }), " object, for example, obtained from ", e(n.code, {
          children: '<input type="file">'
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "PDF link"
        }), " — A direct link to a PDF file (the PDF document itself will be displayed inside)."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Description"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "value"
        }), " property is ", e(n.strong, {
          children: "optional"
        }), ". If not set, nothing will be displayed."]
      }), `
`, t(n.li, {
        children: ["When a ", e(n.code, {
          children: "File"
        }), " object is passed, the component will try to read and display the image or file preview."]
      }), `
`, e(n.li, {
        children: "If a PDF link is provided, the PDF document itself will be displayed inside (for example, with page navigation)."
      }), `
`, e(n.li, {
        children: "If an icon name is provided, the corresponding icon will be displayed."
      }), `
`, e(n.li, {
        children: "The property is reactive and can be updated dynamically."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "For the best performance, use optimized image formats (WebP, SVG, etc.)."
      }), `
`, e(n.li, {
        children: "Always validate the file type when accepting user uploads."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Fo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ve, {
      ...i
    })
  }) : Ve(i);
}
function qe(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Свойство value"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "value"
      }), ` отвечает за основной контент. Это универсальное свойство,
поддерживающее несколько типов значений, что делает его максимально гибким
для различных сценариев использования.`]
    }), `
`, e(n.h3, {
      children: "Поддерживаемые типы значений"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Имя иконки"
        }), " — Имя встроенной или пользовательской иконки (если поддерживается системой)."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Строка (URL)"
        }), " — Прямая ссылка на файл изображения (например, PNG, JPG, SVG, GIF, WebP и др.)."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Объект File"
        }), " — JavaScript-объект ", e(n.code, {
          children: "File"
        }), ", например, полученный из ", e(n.code, {
          children: '<input type="file">'
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Ссылка на PDF"
        }), " — Прямая ссылка на PDF-файл (будет отображён сам PDF-документ внутри)."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Описание"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "value"
        }), " ", e(n.strong, {
          children: "необязательное"
        }), ". Если оно не задано, изображение не будет отображено."]
      }), `
`, t(n.li, {
        children: ["При передаче объекта ", e(n.code, {
          children: "File"
        }), " будет предпринята попытка прочитать и отобразить изображение или предпросмотр файла."]
      }), `
`, e(n.li, {
        children: "Если передана ссылка на PDF, будет отображён сам PDF-документ внутри (например, с возможностью просмотра страниц)."
      }), `
`, e(n.li, {
        children: "Если передано имя иконки, будет отображена соответствующая иконка."
      }), `
`, e(n.li, {
        children: "Свойство реактивно и может динамически обновляться."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Для лучшей производительности используйте оптимизированные форматы изображений (WebP, SVG и др.)."
      }), `
`, e(n.li, {
        children: "Всегда проверяйте тип файла при загрузке от пользователя."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Ao(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(qe, {
      ...i
    })
  }) : qe(i);
}
function ze(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Image display control"
    }), `
`, e(n.h3, {
      children: "Description"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "size"
      }), ", ", e(n.code, {
        children: "coordinator"
      }), ", ", e(n.code, {
        children: "x"
      }), ", and ", e(n.code, {
        children: "y"
      }), " properties allow you to precisely control image scaling, visible area, and positioning within the container. Each parameter is responsible for its own aspect of display and can be used individually or together to achieve the desired visual effect."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "size"
        }), " — Defines the scaling and fill mode of the image inside the container. Possible values: ", e(n.code, {
          children: "auto"
        }), " (default), ", e(n.code, {
          children: "contain"
        }), " (fit completely), ", e(n.code, {
          children: "cover"
        }), " (fill the container, possibly cropping the image)."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "coordinator"
        }), " — An array of four values that defines the visible area of the image: cropping from the left, top, right, and bottom, specified as percentages relative to the original image. Format: ", e(n.code, {
          children: "[left, top, right, bottom]"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "x"
        }), " — Horizontal offset (X axis) of the image relative to the container or selected area. Can be set in pixels, percentages, or other supported units."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "y"
        }), " — Vertical offset (Y axis) of the image relative to the container or selected area. Can be set in pixels, percentages, or other supported units."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use ", e(n.code, {
          children: "size"
        }), " to select the appropriate image display mode for your layout and task."]
      }), `
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "coordinator"
        }), " property is convenient for cropping or highlighting the desired part of the image."]
      }), `
`, t(n.li, {
        children: ["Use the ", e(n.code, {
          children: "x"
        }), " and ", e(n.code, {
          children: "y"
        }), " parameters for precise image positioning within the container."]
      }), `
`, e(n.li, {
        children: "Combine parameters to achieve complex display effects."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function No(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ze, {
      ...i
    })
  }) : ze(i);
}
function Oe(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление отображением изображения"
    }), `
`, e(n.h3, {
      children: "Описание"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "size"
      }), ", ", e(n.code, {
        children: "coordinator"
      }), ", ", e(n.code, {
        children: "x"
      }), " и ", e(n.code, {
        children: "y"
      }), ` позволяют детально управлять масштабированием,
областью видимости и позиционированием изображения внутри контейнера.
Каждый параметр отвечает за свой аспект отображения и может использоваться как по отдельности,
так и совместно для достижения нужного визуального эффекта.`]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "size"
        }), ` — Определяет режим масштабирования и заполнения изображения внутри контейнера.
Возможные значения: `, e(n.code, {
          children: "auto"
        }), " (по умолчанию), ", e(n.code, {
          children: "contain"
        }), " (вписать полностью), ", e(n.code, {
          children: "cover"
        }), " (заполнить контейнер с возможной обрезкой)."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "coordinator"
        }), " — Массив из четырёх значений, определяющий область изображения для отображения: обрезка слева, сверху, справа и снизу, задаётся в процентах относительно исходного изображения. Формат: ", e(n.code, {
          children: "[left, top, right, bottom]"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "x"
        }), " — Смещение изображения по горизонтали (ось X) относительно контейнера или выбранной области. Может быть задано в пикселях, процентах или других поддерживаемых единицах."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "y"
        }), " — Смещение изображения по вертикали (ось Y) относительно контейнера или выбранной области. Может быть задано в пикселях, процентах или других поддерживаемых единицах."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Используйте ", e(n.code, {
          children: "size"
        }), " для выбора подходящего режима отображения изображения в зависимости от задачи и макета."]
      }), `
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "coordinator"
        }), " удобно для реализации обрезки или выделения нужной части изображения."]
      }), `
`, t(n.li, {
        children: ["Параметры ", e(n.code, {
          children: "x"
        }), " и ", e(n.code, {
          children: "y"
        }), " применяйте для точного позиционирования изображения внутри контейнера."]
      }), `
`, e(n.li, {
        children: "Комбинируйте параметры для достижения сложных эффектов отображения."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Io(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Oe, {
      ...i
    })
  }) : Oe(i);
}
function je(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Adaptive scaling and related properties"
    }), `
`, e(n.h3, {
      children: "Description"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "adaptive"
      }), " property enables automatic scaling and alignment of images. For correct operation, it is recommended to use it together with additional properties that allow you to precisely control the behavior and display of the image."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "adaptive"
        }), " — Enables adaptive scaling mode for the image relative to other elements with the same ", e(n.code, {
          children: "adaptive-group"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "object-width"
        }), " — The physical width of the object in the image (in millimeters, pixels, or other units). Used for scale calculation."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "object-height"
        }), " — The physical height of the object in the image. Can be used instead of or together with ", e(n.code, {
          children: "object-width"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "adaptive-group"
        }), " — Adaptivity group. Elements with the same value of this property will be scaled proportionally to each other."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "adaptive-always"
        }), " — If specified, scaling and calculations will always be performed, even if the element is hidden off-screen."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Always specify at least one of the parameters: ", e(n.code, {
          children: "object-width"
        }), " or ", e(n.code, {
          children: "object-height"
        }), " for correct adaptivity."]
      }), `
`, t(n.li, {
        children: ["Use ", e(n.code, {
          children: "adaptive-group"
        }), " if you need to synchronize the scale of several images."]
      }), `
`, t(n.li, {
        children: ["Use ", e(n.code, {
          children: "adaptive-always"
        }), " only when necessary to avoid unnecessary calculations."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Ro(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(je, {
      ...i
    })
  }) : je(i);
}
function Ye(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Адаптивное масштабирование и связанные параметры"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "adaptive"
      }), " включает режим автоматического масштабирования и выравнивания изображений. Для корректной работы рекомендуется использовать его совместно с дополнительными свойствами, которые позволяют точно управлять поведением и отображением изображения."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "adaptive"
        }), " — Включает режим адаптивного масштабирования изображения относительно других элементов с тем же ", e(n.code, {
          children: "adaptive-group"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "object-width"
        }), " — Физическая ширина объекта на изображении (в миллиметрах, пикселях или другой единице). Используется для расчёта масштаба."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "object-height"
        }), " — Физическая высота объекта на изображении. Может использоваться вместо или вместе с ", e(n.code, {
          children: "object-width"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "adaptive-group"
        }), " — Группа адаптивности. Элементы с одинаковым значением этого свойства будут масштабироваться пропорционально друг другу."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "adaptive-always"
        }), " — Если указано, масштабирование и расчёты будут выполняться всегда, даже если элемент скрыт за пределами экрана."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Описание"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "adaptive"
        }), " позволяет автоматически подбирать масштаб изображения, чтобы оно выглядело пропорционально с другими элементами в той же группе."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "object-width"
        }), " и ", e(n.code, {
          children: "object-height"
        }), " задают реальные размеры объекта на изображении, что необходимо для корректного расчёта масштаба."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "adaptive-group"
        }), " объединяет элементы в одну группу для совместного масштабирования."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "adaptive-always"
        }), " обеспечивает постоянные вычисления масштаба, даже если элемент временно скрыт."]
      }), `
`, e(n.li, {
        children: "Все свойства могут использоваться совместно для достижения нужного эффекта."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Всегда указывайте хотя бы один из параметров: ", e(n.code, {
          children: "object-width"
        }), " или ", e(n.code, {
          children: "object-height"
        }), " для корректной работы адаптивности."]
      }), `
`, t(n.li, {
        children: ["Используйте ", e(n.code, {
          children: "adaptive-group"
        }), ", если требуется синхронизировать масштаб нескольких изображений."]
      }), `
`, t(n.li, {
        children: ["Применяйте ", e(n.code, {
          children: "adaptive-always"
        }), " только при необходимости, чтобы избежать лишних вычислений."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Bo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ye, {
      ...i
    })
  }) : Ye(i);
}
function Ge(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "load"
      })
    }), `
`, t(n.p, {
      children: [`Triggered after the image is loaded.
The handler receives an object `, e(n.code, {
        children: "ImageEventData"
      }), " with image data and source type."]
    })]
  });
}
function Eo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ge, {
      ...i
    })
  }) : Ge(i);
}
function Ke(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "load"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает после загрузки изображения."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onLoad (image: ImageEventData) {
  // обработка загруженного изображения
}
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "image"
        }), " — ", e(n.code, {
          children: "ImageEventData"
        }), " — данные изображения и тип источника"]
      }), `
`]
    })]
  });
}
function Uo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ke, {
      ...i
    })
  }) : Ke(i);
}
function Je(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "type"
      })
    }), `
`, e(n.p, {
      children: "Type of the uploaded image."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Ho(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Je, {
      ...i
    })
  }) : Je(i);
}
function Ze(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "type"
      })
    }), `
`, e(n.p, {
      children: "Тип загруженного изображения."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Wo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ze, {
      ...i
    })
  }) : Ze(i);
}
function Qe(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "data"
      })
    }), `
`, e(n.p, {
      children: "Information about the uploaded image, including its type and source."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Vo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Qe, {
      ...i
    })
  }) : Qe(i);
}
function ni(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "data"
      })
    }), `
`, e(n.p, {
      children: "Информация о загруженном изображении, включая его тип и источник."
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function qo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ni, {
      ...i
    })
  }) : ni(i);
}
const zo = {
  name: "Image",
  descriptions: {
    value: {
      en: Fo,
      ru: Ao
    },
    size: {
      en: No,
      ru: Io
    },
    adaptive: {
      en: Ro,
      ru: Bo
    },
    "event.load": {
      en: Eo,
      ru: Uo
    },
    "expose.type": {
      en: Ho,
      ru: Wo
    },
    "expose.data": {
      en: Vo,
      ru: qo
    }
  }
};
function ei(i) {
  const n = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "The List component is a powerful interactive list with support for hierarchical data, keyboard navigation, and search functionality. It is designed to display structured data with navigation capabilities, item selection, and interaction through keyboard and mouse."
    }), `
`, e(n.h2, {
      children: "Core Features"
    }), `
`, e(n.p, {
      children: "List supports various item types: regular items, groups, menus, separators, and subtitles. The component automatically handles complex hierarchical structures and provides intuitive navigation between elements."
    }), `
`, e(n.h2, {
      children: "Keyboard Navigation"
    }), `
`, e(n.p, {
      children: "The component supports full keyboard navigation:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "↑/↓"
        }), " - navigate between items"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Enter/→"
        }), " - open groups/menus or select item"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "←"
        }), " - close groups/menus"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Type text"
        }), " - search through items"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Backspace"
        }), " - clear search"]
      }), `
`]
    }), `
`, e(n.h2, {
      children: "Search and Highlighting"
    }), `
`, e(n.p, {
      children: "Built-in search functionality allows finding items in real-time with automatic highlighting of matches. Search works across the entire data hierarchy, including nested groups and menus."
    }), `
`, e(n.h2, {
      children: "Performance"
    }), `
`, e(n.p, {
      children: "For working with large datasets, the component provides a lightweight rendering mode that automatically activates when the specified threshold of item count is exceeded, ensuring high performance without losing functionality."
    })]
  });
}
function Oo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ei, {
      ...i
    })
  }) : ei(i);
}
function ii(i) {
  const n = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "Компонент List представляет собой мощный интерактивный список с поддержкой иерархических данных, клавиатурной навигации и функциональности поиска. Он предназначен для отображения структурированных данных с возможностью навигации, выбора элементов и взаимодействия через клавиатуру и мышь."
    }), `
`, e(n.h2, {
      children: "Основные возможности"
    }), `
`, e(n.p, {
      children: "List поддерживает различные типы элементов: обычные элементы, группы, меню, разделители и подзаголовки. Компонент автоматически обрабатывает сложные иерархические структуры и предоставляет интуитивную навигацию между элементами."
    }), `
`, e(n.h2, {
      children: "Навигация с клавиатуры"
    }), `
`, e(n.p, {
      children: "Компонент поддерживает полную навигацию с клавиатуры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "↑/↓"
        }), " - перемещение между элементами"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Enter/→"
        }), " - открытие групп/меню или выбор элемента"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "←"
        }), " - закрытие групп/меню"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Ввод текста"
        }), " - поиск по элементам"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Backspace"
        }), " - очистка поиска"]
      }), `
`]
    }), `
`, e(n.h2, {
      children: "Поиск и выделение"
    }), `
`, e(n.p, {
      children: "Встроенная функциональность поиска позволяет находить элементы в реальном времени с автоматическим выделением совпадений. Поиск работает по всей иерархии данных, включая вложенные группы и меню."
    }), `
`, e(n.h2, {
      children: "Производительность"
    }), `
`, e(n.p, {
      children: "Для работы с большими наборами данных компонент предоставляет облегченный режим рендеринга, который автоматически активируется при превышении заданного порога количества элементов, обеспечивая высокую производительность без потери функциональности."
    })]
  });
}
function jo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ii, {
      ...i
    })
  }) : ii(i);
}
function ti(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Lightweight list mode"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "lite"
      }), " and ", e(n.code, {
        children: "liteThreshold"
      }), " properties control the simplified (lightweight) rendering mode of the list."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "lite"
        }), " — Enables the lightweight rendering mode"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "liteThreshold"
        }), " — Item count threshold that is applied when ", e(n.code, {
          children: "lite"
        }), " is enabled"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Property relationship"
    }), `
`, e(n.p, {
      children: "The properties work together to decide when the simplified rendering should be applied:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["If ", e(n.code, {
          children: "lite = false"
        }), " (or not set), the list always renders in full mode and ", e(n.code, {
          children: "liteThreshold"
        }), " is ignored"]
      }), `
`, t(n.li, {
        children: ["If ", e(n.code, {
          children: "lite = true"
        }), ", the component compares the total item count with ", e(n.code, {
          children: "liteThreshold"
        }), `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: ["When ", e(n.code, {
              children: "count <= liteThreshold"
            }), ", full mode is used (no simplification)"]
          }), `
`, t(n.li, {
            children: ["When ", e(n.code, {
              children: "count > liteThreshold"
            }), ", lightweight mode turns on to reduce visual complexity and speed up rendering"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, e(n.p, {
      children: "This approach helps avoid unnecessary load with large datasets while keeping the familiar full rendering for short lists."
    })]
  });
}
function Yo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ti, {
      ...i
    })
  }) : ti(i);
}
function ri(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Облегчённый режим списка"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "lite"
      }), " и ", e(n.code, {
        children: "liteThreshold"
      }), " предназначены для управления облегчённым (упрощённым) отображением списка."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "lite"
        }), " — Включает облегчённый режим отображения"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "liteThreshold"
        }), " — Порог количества элементов, при превышении которого активируется упрощённый режим (когда ", e(n.code, {
          children: "lite"
        }), " включён)"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e(n.p, {
      children: "Свойства работают совместно и определяют, когда применять упрощённое отображение:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Если ", e(n.code, {
          children: "lite = false"
        }), " (или не задан), список всегда рендерится в полном режиме, а ", e(n.code, {
          children: "liteThreshold"
        }), " игнорируется"]
      }), `
`, t(n.li, {
        children: ["Если ", e(n.code, {
          children: "lite = true"
        }), ", компонент сравнивает общее число элементов с ", e(n.code, {
          children: "liteThreshold"
        }), `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: ["При ", e(n.code, {
              children: "count <= liteThreshold"
            }), " используется полный режим (упрощение не требуется)"]
          }), `
`, t(n.li, {
            children: ["При ", e(n.code, {
              children: "count > liteThreshold"
            }), " включается облегчённый режим для снижения визуальной сложности и ускорения рендера"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Такой подход предотвращает излишнюю нагрузку при больших объёмах данных и сохраняет привычное полное отображение для коротких списков."
    })]
  });
}
function Go(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ri, {
      ...i
    })
  }) : ri(i);
}
function ci(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "close"
      })
    }), `
`, e(n.p, {
      children: "Event fired when the list requests closing of the active context (menu/group/window)."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onClose (): void {
  // handle list close
}
`
      })
    }), `
`, e(n.p, {
      children: "The event does not pass any parameters."
    })]
  });
}
function Ko(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ci, {
      ...i
    })
  }) : ci(i);
}
function li(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "close"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при запросе закрытия активного контекста списка (меню/группы/окна)."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onClose (): void {
  // обработать закрытие списка
}
`
      })
    }), `
`, e(n.p, {
      children: "Событие не передаёт параметры."
    })]
  });
}
function Jo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(li, {
      ...i
    })
  }) : li(i);
}
function oi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "slot: html"
      })
    }), `
`, t(n.p, {
      children: ["List supports named slots for items with ", e(n.code, {
        children: "type: 'html'"
      }), ". The slot name must match the item's ", e(n.code, {
        children: "value"
      }), "."]
    }), `
`, e(n.p, {
      children: "Usage rules"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["The list item must have ", e(n.code, {
          children: "type: 'html'"
        }), " and a string ", e(n.code, {
          children: "value"
        }), " used as the slot key"]
      }), `
`, e(n.li, {
        children: "If a slot with the same name exists, its content replaces the item rendering"
      }), `
`, t(n.li, {
        children: ["If no slot exists, the component renders raw HTML from the item's ", e(n.code, {
          children: "label"
        }), " via ", e(n.code, {
          children: "innerHTML"
        })]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.p, {
      children: "Notes"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "The slot receives no props; use static content or app state"
      }), `
`, t(n.li, {
        children: ["Prefer slots for Vue-rendered content; use ", e(n.code, {
          children: "label"
        }), " with HTML only for simple, trusted markup"]
      }), `
`]
    })]
  });
}
function Zo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(oi, {
      ...i
    })
  }) : oi(i);
}
function di(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "slot: html"
      })
    }), `
`, t(n.p, {
      children: ["Компонент List поддерживает именованные слоты для элементов с ", e(n.code, {
        children: "type: 'html'"
      }), ". Имя слота должно совпадать со значением поля ", e(n.code, {
        children: "value"
      }), " у элемента."]
    }), `
`, e(n.p, {
      children: "Правила использования"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Элемент списка должен иметь ", e(n.code, {
          children: "type: 'html'"
        }), " и строковое поле ", e(n.code, {
          children: "value"
        }), ", которое используется как ключ слота"]
      }), `
`, e(n.li, {
        children: "Если слот с таким именем существует, его содержимое заменяет рендеринг элемента"
      }), `
`, t(n.li, {
        children: ["Если слота нет, компонент рендерит HTML из поля ", e(n.code, {
          children: "label"
        }), " через ", e(n.code, {
          children: "innerHTML"
        })]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Пример"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.p, {
      children: "Заметки"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Слот не получает пропсы; используйте статический контент или состояние приложения"
      }), `
`, t(n.li, {
        children: ["Предпочитайте слоты для Vue-контента; используйте ", e(n.code, {
          children: "label"
        }), " с HTML только для простого и доверенного разметки"]
      }), `
`]
    })]
  });
}
function Qo(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(di, {
      ...i
    })
  }) : di(i);
}
const nd = {
  name: "List",
  descriptions: {
    list: {
      en: Oo,
      ru: jo
    },
    lite: {
      en: Yo,
      ru: Go
    },
    "event.close": {
      en: Ko,
      ru: Jo
    },
    "slot.html": {
      en: Zo,
      ru: Qo
    }
  }
};
function hi(i) {
  const n = {
    p: "p",
    ...i.components
  };
  return e(n.p, {
    children: "The ListGroup component is an auxiliary component for the List component, designed to group and organize list items with a collapsible structure. It provides hierarchical content organization with expand/collapse functionality, supports nested groups, and integrates seamlessly with the List component ecosystem."
  });
}
function ed(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(hi, {
      ...i
    })
  }) : hi(i);
}
function ai(i) {
  const n = {
    p: "p",
    ...i.components
  };
  return e(n.p, {
    children: "Компонент ListGroup представляет собой вспомогательный компонент для компонента List, предназначенный для группировки и организации элементов списка со сворачиваемой структурой. Он обеспечивает иерархическую организацию контента с возможностью сворачивания/разворачивания групп, поддерживает вложенные группы и интегрируется с экосистемой компонентов List."
  });
}
function id(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ai, {
      ...i
    })
  }) : ai(i);
}
function si(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "head"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing the group header content with toggle functionality."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Contains the clickable header element that controls group expansion/collapse"
      }), `
`, t(n.li, {
        children: ["Receives ", e(n.code, {
          children: "open"
        }), " parameter indicating current group state"]
      }), `
`, e(n.li, {
        children: "Typically, contains group title, icon, and toggle controls"
      }), `
`, e(n.li, {
        children: "Manages the visual state of the group header"
      }), `
`]
    })]
  });
}
function td(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(si, {
      ...i
    })
  }) : si(i);
}
function ui(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "head"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения содержимого заголовка группы с функциональностью переключения."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Содержит кликабельный элемент заголовка, который управляет разворачиванием/сворачиванием группы"
      }), `
`, t(n.li, {
        children: ["Получает параметр ", e(n.code, {
          children: "open"
        }), ", указывающий текущее состояние группы"]
      }), `
`, e(n.li, {
        children: "Обычно содержит название группы, иконку и элементы управления переключением"
      }), `
`, e(n.li, {
        children: "Управляет визуальным состоянием заголовка группы"
      }), `
`]
    })]
  });
}
function rd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ui, {
      ...i
    })
  }) : ui(i);
}
function pi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "list"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing the grouped list items content."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Contains all the list items that belong to this group"
      }), `
`, e(n.li, {
        children: "Content is shown/hidden based on group's open/closed state"
      }), `
`, e(n.li, {
        children: "Typically, contains ListItem components or nested ListGroup components"
      }), `
`, e(n.li, {
        children: "Supports hierarchical content organization with unlimited nesting levels"
      }), `
`]
    })]
  });
}
function cd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(pi, {
      ...i
    })
  }) : pi(i);
}
function mi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "list"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения содержимого сгруппированных элементов списка."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Содержит все элементы списка, принадлежащие данной группе"
      }), `
`, e(n.li, {
        children: "Содержимое показывается/скрывается в зависимости от открытого/закрытого состояния группы"
      }), `
`, e(n.li, {
        children: "Обычно содержит компоненты ListItem или вложенные компоненты ListGroup"
      }), `
`, e(n.li, {
        children: "Поддерживает иерархическую организацию контента с неограниченными уровнями вложенности"
      }), `
`]
    })]
  });
}
function ld(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(mi, {
      ...i
    })
  }) : mi(i);
}
const od = {
  name: "ListGroup",
  descriptions: {
    listGroup: {
      en: ed,
      ru: id
    },
    "slot.head": {
      en: td,
      ru: rd
    },
    "slot.list": {
      en: cd,
      ru: ld
    }
  }
};
function gi(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Description"
    }), `
`, e(n.p, {
      children: "Versatile list item component for displaying structured content with labels, descriptions, and additional elements. ListItem provides consistent representation of elements in lists, menus, and navigation structures."
    }), `
`, e(n.h3, {
      children: "Key Features"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Multiple content areas: label, description, prefix, suffix, caption"
      }), `
`, e(n.li, {
        children: "Icon support with flexible positioning and alignment"
      }), `
`, e(n.li, {
        children: "Badge integration for status indicators"
      }), `
`, e(n.li, {
        children: "Interactive states: focus, selected, disabled, readonly"
      }), `
`, e(n.li, {
        children: "Progress and skeleton loading states"
      }), `
`, e(n.li, {
        children: "Ripple effect for enhanced user feedback"
      }), `
`, e(n.li, {
        children: "Flexible tag options: button, link, div, span"
      }), `
`, e(n.li, {
        children: "Built-in accessibility support"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, e(n.p, {
      children: "Use ListItem to create list elements, menu items, settings, and other interface elements that require structured information display. Particularly effective in mobile interfaces and lists with multiple selection."
    })]
  });
}
function dd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(gi, {
      ...i
    })
  }) : gi(i);
}
function fi(i) {
  const n = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Описание"
    }), `
`, e(n.p, {
      children: "Универсальный компонент элемента списка для отображения структурированного контента с метками, описаниями и дополнительными элементами. ListItem обеспечивает единообразное представление элементов в списках, меню и навигационных структурах."
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Множественные области контента: метка, описание, префикс, суффикс, заголовок"
      }), `
`, e(n.li, {
        children: "Поддержка иконок с гибким позиционированием и выравниванием"
      }), `
`, e(n.li, {
        children: "Интеграция значков для индикаторов статуса"
      }), `
`, e(n.li, {
        children: "Интерактивные состояния: фокус, выбранный, отключенный, только для чтения"
      }), `
`, e(n.li, {
        children: "Состояния загрузки с прогрессом и скелетоном"
      }), `
`, e(n.li, {
        children: "Эффект пульсации для улучшенной обратной связи"
      }), `
`, e(n.li, {
        children: "Гибкие варианты тегов: кнопка, ссылка, div, span"
      }), `
`, e(n.li, {
        children: "Встроенная поддержка доступности"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, e(n.p, {
      children: "Используйте ListItem для создания элементов списков, пунктов меню, настроек и других интерфейсных элементов, где требуется структурированное отображение информации. Особенно эффективен в мобильных интерфейсах и списках с множественным выбором."
    })]
  });
}
function hd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(fi, {
      ...i
    })
  }) : fi(i);
}
function yi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "fill"
      })
    }), `
`, e(n.p, {
      children: "Property for setting a specific fill color of the list item element."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Accepts color values in any standard CSS format"
      }), `
`, t(n.li, {
        children: ["Supports hex colors: ", e(n.code, {
          children: "#FF0000"
        }), ", ", e(n.code, {
          children: "#ffffff"
        })]
      }), `
`, t(n.li, {
        children: ["Supports RGB: ", e(n.code, {
          children: "rgb(255, 0, 0)"
        })]
      }), `
`, t(n.li, {
        children: ["Supports RGBA: ", e(n.code, {
          children: "rgba(255, 0, 0, 0.5)"
        })]
      }), `
`, t(n.li, {
        children: ["Supports named colors: ", e(n.code, {
          children: "red"
        }), ", ", e(n.code, {
          children: "blue"
        }), ", ", e(n.code, {
          children: "transparent"
        })]
      }), `
`, e(n.li, {
        children: "Provides precise control over component background color"
      }), `
`]
    })]
  });
}
function ad(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(yi, {
      ...i
    })
  }) : yi(i);
}
function bi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "fill"
      })
    }), `
`, e(n.p, {
      children: "Свойство для настройки конкретного цвета заливки элемента списка."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Принимает значения цветов в любом стандартном CSS формате"
      }), `
`, t(n.li, {
        children: ["Поддерживает hex цвета: ", e(n.code, {
          children: "#FF0000"
        }), ", ", e(n.code, {
          children: "#ffffff"
        })]
      }), `
`, t(n.li, {
        children: ["Поддерживает RGB: ", e(n.code, {
          children: "rgb(255, 0, 0)"
        })]
      }), `
`, t(n.li, {
        children: ["Поддерживает RGBA: ", e(n.code, {
          children: "rgba(255, 0, 0, 0.5)"
        })]
      }), `
`, t(n.li, {
        children: ["Поддерживает именованные цвета: ", e(n.code, {
          children: "red"
        }), ", ", e(n.code, {
          children: "blue"
        }), ", ", e(n.code, {
          children: "transparent"
        })]
      }), `
`, e(n.li, {
        children: "Обеспечивает точный контроль над цветом фона компонента"
      }), `
`]
    })]
  });
}
function sd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(bi, {
      ...i
    })
  }) : bi(i);
}
function vi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "body"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing additional content at the bottom of the list item."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Adds information or controls below the main content"
      }), `
`, e(n.li, {
        children: "Does not affect the main structure of the list item"
      }), `
`, e(n.li, {
        children: "Suitable for metadata, secondary actions, or details"
      }), `
`]
    })]
  });
}
function ud(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(vi, {
      ...i
    })
  }) : vi(i);
}
function Mi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "body"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения дополнительного контента в нижней части элемента списка."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Добавляет информацию или элементы управления под основным содержимым"
      }), `
`, e(n.li, {
        children: "Не влияет на основную структуру элемента списка"
      }), `
`, e(n.li, {
        children: "Подходит для метаданных, вторичных действий или деталей"
      }), `
`]
    })]
  });
}
function pd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Mi, {
      ...i
    })
  }) : Mi(i);
}
function wi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "trailing"
      })
    }), `
`, e(n.p, {
      children: "Slot for placing control elements or indicators at the end of the list item."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Adds interactive elements on the right (switches, buttons, icons)"
      }), `
`, e(n.li, {
        children: "Suitable for actions or status display"
      }), `
`, e(n.li, {
        children: "Content is aligned to the right edge"
      }), `
`]
    })]
  });
}
function md(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(wi, {
      ...i
    })
  }) : wi(i);
}
function Ci(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "trailing"
      })
    }), `
`, e(n.p, {
      children: "Слот для размещения элементов управления или индикаторов в конце элемента списка."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Добавляет интерактивные элементы справа (переключатели, кнопки, иконки)"
      }), `
`, e(n.li, {
        children: "Подходит для действий или отображения статуса"
      }), `
`, e(n.li, {
        children: "Контент выравнивается по правому краю"
      }), `
`]
    })]
  });
}
function gd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ci, {
      ...i
    })
  }) : Ci(i);
}
const fd = {
  name: "ListItem",
  descriptions: {
    basic: {
      en: dd,
      ru: hd
    },
    fill: {
      en: ad,
      ru: sd
    },
    "slot.body": {
      en: ud,
      ru: pd
    },
    "slot.trailing": {
      en: md,
      ru: gd
    }
  }
};
function Di(i) {
  const n = {
    p: "p",
    ...i.components
  };
  return e(n.p, {
    children: "The ListMenu component is an auxiliary component for the List component, designed to create nested menus and organize navigation elements with expandable structure. It provides hierarchical menu organization with open/close submenu functionality, supports nested menu levels, and integrates seamlessly with the List component ecosystem."
  });
}
function yd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Di, {
      ...i
    })
  }) : Di(i);
}
function xi(i) {
  const n = {
    p: "p",
    ...i.components
  };
  return e(n.p, {
    children: "Компонент ListMenu представляет собой вспомогательный компонент для компонента List, предназначенный для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой. Он обеспечивает иерархическую организацию меню с возможностью открытия/закрытия подменю, поддерживает вложенные уровни меню и интегрируется с экосистемой компонентов List."
  });
}
function bd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(xi, {
      ...i
    })
  }) : xi(i);
}
const vd = {
  name: "ListMenu",
  descriptions: {
    listMenu: {
      en: yd,
      ru: bd
    }
  }
};
function ki(i) {
  const n = {
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "The Mask component provides structured data input with real-time automatic formatting. Allows creating convenient fields for phones, dates, bank cards and other formatted data."
    }), `
`, e(n.h3, {
      children: "Key features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Automatic formatting"
        }), ": Adds separators and symbols during typing"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Flexible templates"
        }), ": Support for single and multiple masks with automatic selection"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Error prevention"
        }), ": Restricts input to only allowed characters"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Validation integration"
        }), ": Works together with the data validation system"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Data type support"
        }), ": Built-in presets for numbers, currencies and dates"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, e(n.p, {
      children: "Use the component to create input fields with a defined structure: phone numbers, bank cards, dates, postal codes and any other data requiring a specific format."
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, e(n.p, {
      children: "Keep templates short and clear for the user. When supporting multiple formats, use an array of masks — the component will automatically select the most suitable template as the user types."
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Define a pattern with special characters for input groups"
      }), `
`, e(n.li, {
        children: "Literals are auto-inserted during typing"
      }), `
`, e(n.li, {
        children: "Multiple patterns can be provided; the best match is selected dynamically"
      }), `
`, e(n.li, {
        children: "Works with validation, number/currency formats, and date/time helpers"
      }), `
`]
    }), `
`, e(n.p, {
      children: "Tip: keep patterns short and explicit to improve usability."
    })]
  });
}
function Md(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ki, {
      ...i
    })
  }) : ki(i);
}
function _i(i) {
  const n = {
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "Компонент Mask обеспечивает структурированный ввод данных с автоматическим форматированием в реальном времени. Позволяет создавать удобные поля для телефонов, дат, банковских карт и других форматированных данных."
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Автоматическое форматирование"
        }), ": Добавляет разделители и символы во время набора"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гибкие шаблоны"
        }), ": Поддержка одиночных и множественных масок с автоматическим выбором"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Предотвращение ошибок"
        }), ": Ограничивает ввод только допустимыми символами"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Интеграция с валидацией"
        }), ": Работает совместно с системой проверки данных"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Поддержка типов данных"
        }), ": Встроенные пресеты для чисел, валют и дат"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, e(n.p, {
      children: "Используйте компонент для создания полей ввода с заданной структурой: номера телефонов, банковские карты, даты, почтовые индексы и любые другие данные, требующие определённого формата."
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, e(n.p, {
      children: "Держите шаблоны короткими и понятными для пользователя. При поддержке нескольких форматов используйте массив масок — компонент автоматически выберет наиболее подходящий шаблон по мере ввода."
    })]
  });
}
function wd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(_i, {
      ...i
    })
  }) : _i(i);
}
function Xi(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Date and time types"
    }), `
`, e(n.p, {
      children: "Date types in Mask provide automatic formatting and validation for date and time input with localization support."
    }), `
`, e(n.h3, {
      children: "Available types"
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Full formats:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "date"
        }), " — Full date (day-month-year)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "datetime"
        }), " — Date and time (day-month-year hours:minutes)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "full"
        }), " — Full date and time with seconds"]
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Time components:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "time"
        }), " — Time (hours:minutes:seconds)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "hour-minute"
        }), " — Hours and minutes"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "hour"
        }), " — Hours only"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "minute"
        }), " — Minutes only"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "second"
        }), " — Seconds only"]
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Date components:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "year"
        }), " — Year only"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "year-month"
        }), " — Year and month"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "month"
        }), " — Month only"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "day"
        }), " — Day only"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "day-month"
        }), " — Day and month"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Automatic mask generation based on locale"
      }), `
`, e(n.li, {
        children: "Date correctness validation (leap years, days in month)"
      }), `
`, e(n.li, {
        children: "Support for various display formats"
      }), `
`, t(n.li, {
        children: ["Integration with ", e(n.code, {
          children: "language"
        }), " for localization"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Localization"
    }), `
`, e(n.p, {
      children: "Formats automatically adapt to locale:"
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Russian locale (ru):"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "date: DD.MM.YYYY"
      }), `
`, e(n.li, {
        children: "datetime: DD.MM.YYYY HH:MM"
      }), `
`, e(n.li, {
        children: "time: HH:MM:SS"
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "US locale (en-US):"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "date: MM/DD/YYYY"
      }), `
`, e(n.li, {
        children: "datetime: MM/DD/YYYY HH:MM"
      }), `
`, e(n.li, {
        children: "time: HH:MM:SS"
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "European locale (de):"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "date: DD.MM.YYYY"
      }), `
`, e(n.li, {
        children: "datetime: DD.MM.YYYY HH:MM"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Validation"
    }), `
`, e(n.p, {
      children: "Date types automatically validate:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Correctness of numeric values for day, month, year"
      }), `
`, e(n.li, {
        children: "Number of days in month (including February in leap years)"
      }), `
`, e(n.li, {
        children: "Value ranges (months 01-12, days 01-31, hours 00-23)"
      }), `
`, e(n.li, {
        children: "Time format (24-hour format)"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "date"
        }), " — birth date fields, deadlines"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "datetime"
        }), " — event timestamps, schedules"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "time"
        }), " — start/end times, duration"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "year"
        }), " — release year, validity period"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "day-month"
        }), " — birthdays without year, holidays"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "hour-minute"
        }), " — working hours, transport schedules"]
      }), `
`]
    })]
  });
}
function Cd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Xi, {
      ...i
    })
  }) : Xi(i);
}
function $i(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Типы дат и времени"
    }), `
`, e(n.p, {
      children: "Типы дат в Mask обеспечивают автоматическое форматирование и валидацию для ввода даты и времени с учётом локализации."
    }), `
`, e(n.h3, {
      children: "Доступные типы"
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Полные форматы:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "date"
        }), " — Полная дата (день-месяц-год)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "datetime"
        }), " — Дата и время (день-месяц-год часы:минуты)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "full"
        }), " — Полная дата и время с секундами"]
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Компоненты времени:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "time"
        }), " — Время (часы:минуты:секунды)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "hour-minute"
        }), " — Часы и минуты"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "hour"
        }), " — Только часы"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "minute"
        }), " — Только минуты"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "second"
        }), " — Только секунды"]
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Компоненты даты:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "year"
        }), " — Только год"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "year-month"
        }), " — Год и месяц"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "month"
        }), " — Только месяц"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "day"
        }), " — Только день"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "day-month"
        }), " — День и месяц"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Автоматическая генерация маски на основе локали"
      }), `
`, e(n.li, {
        children: "Валидация корректности даты (високосные годы, количество дней в месяце)"
      }), `
`, e(n.li, {
        children: "Поддержка различных форматов отображения"
      }), `
`, t(n.li, {
        children: ["Интеграция с ", e(n.code, {
          children: "language"
        }), " для локализации"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Примеры"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Локализация"
    }), `
`, e(n.p, {
      children: "Форматы автоматически адаптируются к локали:"
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Русская локаль (ru):"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "date: ДД.ММ.ГГГГ"
      }), `
`, e(n.li, {
        children: "datetime: ДД.ММ.ГГГГ ЧЧ:ММ"
      }), `
`, e(n.li, {
        children: "time: ЧЧ:ММ:СС"
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Американская локаль (en-US):"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "date: ММ/ДД/ГГГГ"
      }), `
`, e(n.li, {
        children: "datetime: ММ/ДД/ГГГГ ЧЧ:ММ"
      }), `
`, e(n.li, {
        children: "time: ЧЧ:ММ:СС"
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "Европейская локаль (de):"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "date: ДД.ММ.ГГГГ"
      }), `
`, e(n.li, {
        children: "datetime: ДД.ММ.ГГГГ ЧЧ:ММ"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Валидация"
    }), `
`, e(n.p, {
      children: "Типы дат автоматически проверяют:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Корректность числовых значений для дня, месяца, года"
      }), `
`, e(n.li, {
        children: "Количество дней в месяце (включая февраль в високосных годах)"
      }), `
`, e(n.li, {
        children: "Диапазоны значений (месяцы 01-12, дни 01-31, часы 00-23)"
      }), `
`, e(n.li, {
        children: "Формат времени (24-часовой формат)"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "date"
        }), " — поля выбора даты рождения, крайних сроков"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "datetime"
        }), " — временные метки событий, расписания"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "time"
        }), " — время начала/окончания, продолжительность"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "year"
        }), " — год выпуска, период действия"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "day-month"
        }), " — дни рождения без года, праздники"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "hour-minute"
        }), " — время работы, расписание транспорта"]
      }), `
`]
    })]
  });
}
function Dd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e($i, {
      ...i
    })
  }) : $i(i);
}
function Li(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Cursor Behavior Control"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "groupSave"
      }), " property controls cursor behavior when navigating between different special character groups in the mask. When set to ", e(n.code, {
        children: "true"
      }), " (default), it enables intelligent navigation that improves user experience when working with complex masks."]
    }), `
`, e(n.h3, {
      children: "Navigation Mechanism"
    }), `
`, e(n.p, {
      children: "During mask navigation, the system checks:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Current cursor position"
      }), `
`, e(n.li, {
        children: "Type of special character at current position"
      }), `
`, e(n.li, {
        children: "Type of the next special character"
      }), `
`, e(n.li, {
        children: "If characters belong to different groups, special movement logic is applied"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage Examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "When to Use"
    }), `
`, e(n.h4, {
      children: "groupSave: true (recommended)"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "For masks with multiple group types"
      }), `
`, e(n.li, {
        children: "When smooth navigation between groups is needed"
      }), `
`, e(n.li, {
        children: "In most user interface scenarios"
      }), `
`]
    }), `
`, e(n.h4, {
      children: "groupSave: false"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "For simple masks with single symbol type"
      }), `
`, e(n.li, {
        children: "When standard cursor behavior is required"
      }), `
`, e(n.li, {
        children: "In specific cases with custom navigation logic"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Behavior Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["With ", e(n.strong, {
          children: "groupSave: true"
        }), ', cursor "understands" boundaries between groups']
      }), `
`, e(n.li, {
        children: "Improves navigation in masks like phone numbers with area codes"
      }), `
`, e(n.li, {
        children: "Works only with rubber (non-fixed) groups"
      }), `
`, e(n.li, {
        children: "Doesn't affect data validation or formatting"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Application"
    }), `
`, e(n.p, {
      children: "Use this property to create more intuitive input interfaces, especially when the mask contains multiple logically separated data groups (country code, area code, number, etc.)."
    })]
  });
}
function xd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Li, {
      ...i
    })
  }) : Li(i);
}
function Si(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление поведением курсора"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "groupSave"
      }), " управляет поведением курсора при навигации между различными группами специальных символов в маске. При значении ", e(n.code, {
        children: "true"
      }), " (по умолчанию) включается интеллектуальная навигация, которая улучшает пользовательский опыт при работе со сложными масками."]
    }), `
`, e(n.h3, {
      children: "Механизм работы"
    }), `
`, e(n.p, {
      children: "При навигации по маске система проверяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Текущую позицию курсора"
      }), `
`, e(n.li, {
        children: "Тип специального символа в текущей позиции"
      }), `
`, e(n.li, {
        children: "Тип следующего специального символа"
      }), `
`, e(n.li, {
        children: "Если символы относятся к разным группам, применяется особая логика перемещения"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Примеры использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Когда использовать"
    }), `
`, e(n.h4, {
      children: "groupSave: true (рекомендуется)"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Для масок с несколькими типами групп"
      }), `
`, e(n.li, {
        children: "Когда нужна плавная навигация между группами"
      }), `
`, e(n.li, {
        children: "В большинстве пользовательских интерфейсов"
      }), `
`]
    }), `
`, e(n.h4, {
      children: "groupSave: false"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Для простых масок с одним типом символов"
      }), `
`, e(n.li, {
        children: "Когда требуется стандартное поведение курсора"
      }), `
`, e(n.li, {
        children: "В специфических случаях с кастомной логикой навигации"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности поведения"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["При ", e(n.strong, {
          children: "groupSave: true"
        }), ' курсор "понимает" границы между группами']
      }), `
`, e(n.li, {
        children: "Улучшает навигацию в масках типа телефонных номеров с кодами"
      }), `
`, e(n.li, {
        children: "Работает только с резиновыми (не фиксированными) группами"
      }), `
`, e(n.li, {
        children: "Не влияет на валидацию или форматирование данных"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, e(n.p, {
      children: "Используйте это свойство для создания более интуитивных интерфейсов ввода, особенно когда маска содержит несколько логически разделённых групп данных (код страны, код города, номер и т.д.)."
    })]
  });
}
function kd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Si, {
      ...i
    })
  }) : Si(i);
}
function Ti(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Mask template"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "mask"
      }), " property defines a template for structured data input with real-time automatic formatting. It provides guided user input with format error prevention."]
    }), `
`, e(n.h3, {
      children: "Key features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Automatic formatting"
        }), ": Adds separators and literal characters during typing"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Multiple templates"
        }), ": Support for mask arrays with automatic selection of the most suitable one"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Special characters"
        }), ": Customizable input positions through the ", e(n.code, {
          children: "special"
        }), " property"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Error prevention"
        }), ": Restricts input to only allowed characters in corresponding positions"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Validation integration"
        }), ": Works together with the data validation system through ", e(n.code, {
          children: "pattern"
        }), " and ", e(n.code, {
          children: "check"
        })]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Value type"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-typescript",
        children: `type MaskList = string | string[]
`
      })
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "string"
        }), " — single mask for fixed format"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "string[]"
        }), " — array of masks to support multiple formats"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Mask syntax"
    }), `
`, e(n.p, {
      children: "The mask template uses two types of characters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Special characters"
        }), " (default ", e(n.code, {
          children: "*"
        }), ") — denote positions for user input"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Literal characters"
        }), " — inserted automatically and cannot be changed by the user"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Automatic mask selection"
    }), `
`, e(n.p, {
      children: "When using an array of masks, the system automatically selects the most suitable template based on the entered data:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-javascript",
        children: `mask: [
  "+1 *** *** ****",      // Selected when typing +1
  "1 *** *** ****",       // Selected when typing 1
  "*** *** ****"          // Fallback option
]
`
      })
    }), `
`, e(n.h3, {
      children: "Interaction with other properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "special"
        }), " — defines which characters are considered special and their behavior"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "pattern"
        }), " — sets validation patterns for special character groups"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "check"
        }), " — applies additional validation to the complete value after mask completion"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "type"
        }), " — for built-in types (", e(n.code, {
          children: "currency"
        }), ", ", e(n.code, {
          children: "number"
        }), ", ", e(n.code, {
          children: "date"
        }), ") automatically generates corresponding masks"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Use clear separators to improve readability (spaces, dashes, parentheses)"
      }), `
`, e(n.li, {
        children: "When supporting multiple formats, place more specific masks first in the array"
      }), `
`, t(n.li, {
        children: ["Combine with validation through ", e(n.code, {
          children: "pattern"
        }), " and ", e(n.code, {
          children: "check"
        }), " for complete input control"]
      }), `
`, t(n.li, {
        children: ["For complex cases, configure special characters through the ", e(n.code, {
          children: "special"
        }), " property"]
      }), `
`]
    })]
  });
}
function _d(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ti, {
      ...i
    })
  }) : Ti(i);
}
function Pi(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Шаблон маски"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "mask"
      }), " определяет шаблон для структурированного ввода данных с автоматическим форматированием в реальном времени. Обеспечивает направленный пользовательский ввод с предотвращением ошибок формата."]
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Автоматическое форматирование"
        }), ": Добавляет разделители и литеральные символы во время набора"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Множественные шаблоны"
        }), ": Поддержка массива масок с автоматическим выбором наиболее подходящей"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Специальные символы"
        }), ": Настраиваемые позиции для ввода через свойство ", e(n.code, {
          children: "special"
        })]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Предотвращение ошибок"
        }), ": Ограничивает ввод только допустимыми символами в соответствующих позициях"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Интеграция валидации"
        }), ": Совместная работа с системой проверки данных через ", e(n.code, {
          children: "pattern"
        }), " и ", e(n.code, {
          children: "check"
        })]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Тип значения"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-typescript",
        children: `type MaskList = string | string[]
`
      })
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "string"
        }), " — одиночная маска для фиксированного формата"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "string[]"
        }), " — массив масок для поддержки множественных форматов"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Синтаксис маски"
    }), `
`, e(n.p, {
      children: "В шаблоне маски используются два типа символов:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Специальные символы"
        }), " (по умолчанию ", e(n.code, {
          children: "*"
        }), ") — обозначают позиции для пользовательского ввода"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Литеральные символы"
        }), " — вставляются автоматически и не могут быть изменены пользователем"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Примеры использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Автоматический выбор маски"
    }), `
`, e(n.p, {
      children: "При использовании массива масок система автоматически выбирает наиболее подходящий шаблон на основе введённых данных:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-javascript",
        children: `mask: [
  "+7 *** *** ** **",     // Выберется при вводе +7
  "8 *** *** ** **",      // Выберется при вводе 8
  "*** *** ** **"         // Резервный вариант
]
`
      })
    }), `
`, e(n.h3, {
      children: "Взаимодействие с другими свойствами"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "special"
        }), " — определяет, какие символы считаются специальными и их поведение"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "pattern"
        }), " — задаёт паттерны валидации для групп специальных символов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "check"
        }), " — применяет дополнительную валидацию к полному значению после заполнения маски"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "type"
        }), " — для встроенных типов (", e(n.code, {
          children: "currency"
        }), ", ", e(n.code, {
          children: "number"
        }), ", ", e(n.code, {
          children: "date"
        }), ") автоматически генерирует соответствующие маски"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Используйте понятные разделители для улучшения читаемости (пробелы, дефисы, скобки)"
      }), `
`, e(n.li, {
        children: "При поддержке нескольких форматов располагайте более специфичные маски первыми в массиве"
      }), `
`, t(n.li, {
        children: ["Комбинируйте с валидацией через ", e(n.code, {
          children: "pattern"
        }), " и ", e(n.code, {
          children: "check"
        }), " для полного контроля ввода"]
      }), `
`, t(n.li, {
        children: ["Для сложных случаев настраивайте специальные символы через свойство ", e(n.code, {
          children: "special"
        })]
      }), `
`]
    })]
  });
}
function Xd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Pi, {
      ...i
    })
  }) : Pi(i);
}
function Fi(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Global character pattern (match)"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "match"
      }), " property defines a global pattern for allowed characters during input. Applied when a group doesn't override this rule with its own pattern."]
    }), `
`, e(n.h3, {
      children: "Validation priority"
    }), `
`, t(n.ol, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Local group pattern"
        }), " (", e(n.code, {
          children: "special[GROUP].match"
        }), ")"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Global pattern"
        }), " (", e(n.code, {
          children: "match"
        }), ")"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Default"
        }), " (", e(n.code, {
          children: "/[0-9]/"
        }), ")"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Value types"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type MaskMatchItem = RegExp | string

match: /[A-F0-9]/        // RegExp object
match: "[A-F0-9]"        // String (converted to RegExp)
match: "\\\\d"             // With escaping
`
      })
    }), `
`, e(n.h3, {
      children: "Examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function $d(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Fi, {
      ...i
    })
  }) : Fi(i);
}
function Ai(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Глобальный паттерн символов (match)"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "match"
      }), " задаёт глобальный паттерн допустимых символов при вводе. Применяется, когда группа не переопределяет это правило собственным паттерном."]
    }), `
`, e(n.h3, {
      children: "Приоритет проверки"
    }), `
`, t(n.ol, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Локальный паттерн группы"
        }), " (", e(n.code, {
          children: "special[ГРУППА].match"
        }), ")"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Глобальный паттерн"
        }), " (", e(n.code, {
          children: "match"
        }), ")"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "По умолчанию"
        }), " (", e(n.code, {
          children: "/[0-9]/"
        }), ")"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Типы значений"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `type MaskMatchItem = RegExp | string

match: /[A-F0-9]/        // RegExp объект
match: "[A-F0-9]"        // Строка (конвертируется в RegExp)
match: "\\\\d"             // С экранированием
`
      })
    }), `
`, e(n.h3, {
      children: "Примеры"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Ld(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ai, {
      ...i
    })
  }) : Ai(i);
}
function Ni(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Numeric mask types"
    }), `
`, e(n.p, {
      children: "Numeric types in Mask provide specialized formatting and validation for working with numbers, currencies, and financial data."
    }), `
`, e(n.h3, {
      children: "Available types"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "number"
        }), " — Simple numeric mask with rubber structure"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "number-format"
        }), " — Formatted numbers with thousand separators and localization"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "currency"
        }), " — Currency mask with automatic currency symbol"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "number:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Rubber mask, numeric character validation"
      }), `
`, t(n.li, {
        children: ["Support for negative values and ", e(n.code, {
          children: "min"
        }), "/", e(n.code, {
          children: "max"
        }), " constraints"]
      }), `
`, t(n.li, {
        children: ["Decimal places configuration via ", e(n.code, {
          children: "fraction"
        })]
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "number-format:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Automatic thousand separators"
      }), `
`, t(n.li, {
        children: ["Format localization (depends on ", e(n.code, {
          children: "language"
        }), ")"]
      }), `
`, e(n.li, {
        children: "Rubber structure for large numbers"
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "currency:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Automatic currency symbol and localized separators"
      }), `
`, t(n.li, {
        children: ["Option to hide currency symbol (", e(n.code, {
          children: "currencyHide"
        }), ")"]
      }), `
`, e(n.li, {
        children: "Support for various currencies (RUB, USD, EUR)"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Decimal places configuration (fraction)"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "fraction"
      }), " property controls the number of digits after the decimal point:"]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "number"
        }), " — exact number of digits (e.g., ", e(n.code, {
          children: ':fraction="2"'
        }), ")"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "true"
        }), " — automatic detection based on user input"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "false/0"
        }), " — no decimal places"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Localization"
    }), `
`, e(n.p, {
      children: "Formats automatically adapt to locale:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "ru"
        }), ": space + comma (1 234,56)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "en-US"
        }), ": comma + dot (1,234.56)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "de"
        }), ": dot + comma (1.234.567,89)"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Validation"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Character filtering (only numbers and separators)"
      }), `
`, t(n.li, {
        children: ["Value range via ", e(n.code, {
          children: "min"
        }), "/", e(n.code, {
          children: "max"
        })]
      }), `
`, e(n.li, {
        children: "Compliance with local standards"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "number"
        }), " — simple numeric fields, percentages, coefficients"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "number-format"
        }), " — large numbers, quantitative indicators"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "currency"
        }), " — monetary amounts, product prices"]
      }), `
`]
    })]
  });
}
function Sd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ni, {
      ...i
    })
  }) : Ni(i);
}
function Ii(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Числовые типы масок"
    }), `
`, e(n.p, {
      children: "Числовые типы в Mask обеспечивают специализированное форматирование и валидацию для работы с числами, валютами и финансовыми данными."
    }), `
`, e(n.h3, {
      children: "Доступные типы"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "number"
        }), " — Простая числовая маска с резиновой структурой"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "number-format"
        }), " — Форматированные числа с разделителями разрядов и локализацией"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "currency"
        }), " — Валютная маска с автоматическим символом валюты"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "number:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Резиновая маска, валидация числовых символов"
      }), `
`, t(n.li, {
        children: ["Поддержка отрицательных значений и ограничений ", e(n.code, {
          children: "min"
        }), "/", e(n.code, {
          children: "max"
        })]
      }), `
`, t(n.li, {
        children: ["Настройка дробной части через ", e(n.code, {
          children: "fraction"
        })]
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "number-format:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Автоматические разделители тысяч"
      }), `
`, t(n.li, {
        children: ["Локализация формата (зависит от ", e(n.code, {
          children: "language"
        }), ")"]
      }), `
`, e(n.li, {
        children: "Резиновая структура для больших чисел"
      }), `
`]
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "currency:"
      })
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Автоматический символ валюты и локализованные разделители"
      }), `
`, t(n.li, {
        children: ["Опция скрытия символа валюты (", e(n.code, {
          children: "currencyHide"
        }), ")"]
      }), `
`, e(n.li, {
        children: "Поддержка различных валют (RUB, USD, EUR)"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Настройка дробной части (fraction)"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "fraction"
      }), " управляет количеством знаков после запятой:"]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "число"
        }), " — точное количество знаков (например, ", e(n.code, {
          children: ':fraction="2"'
        }), ")"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "true"
        }), " — автоматическое определение по вводу пользователя"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "false/0"
        }), " — без дробной части"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Примеры"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Локализация"
    }), `
`, e(n.p, {
      children: "Форматы автоматически адаптируются к локали:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "ru"
        }), ": пробел + запятая (1 234,56)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "en-US"
        }), ": запятая + точка (1,234.56)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "de"
        }), ": точка + запятая (1.234.567,89)"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Валидация"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Фильтрация символов (только числа и разделители)"
      }), `
`, t(n.li, {
        children: ["Диапазон значений через ", e(n.code, {
          children: "min"
        }), "/", e(n.code, {
          children: "max"
        })]
      }), `
`, e(n.li, {
        children: "Соответствие локальным стандартам"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "number"
        }), " — простые числовые поля, проценты, коэффициенты"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "number-format"
        }), " — большие числа, количественные показатели"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "currency"
        }), " — денежные суммы, цены товаров"]
      }), `
`]
    })]
  });
}
function Td(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ii, {
      ...i
    })
  }) : Ii(i);
}
function Ri(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Validation and patterns"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "check"
      }), " and ", e(n.code, {
        children: "pattern"
      }), " properties are designed to control input validation and define allowed characters in the mask."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "pattern"
        }), " — Defines validation patterns for individual mask groups, specifying allowed characters and rules per group"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "check"
        }), " — Global validation pattern applied after mask completion for additional input checking"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "FieldPatternItemOrFunction type"
    }), `
`, t(n.p, {
      children: ["Both ", e(n.code, {
        children: "pattern"
      }), " and ", e(n.code, {
        children: "check"
      }), " parameters have the ", e(n.code, {
        children: "FieldPatternItemOrFunction"
      }), " type and accept the following values:"]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Usage differences"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: "Pattern"
      }), " works at the mask group level:"]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Applied in real-time during character input"
      }), `
`, e(n.li, {
        children: "Each mask group (defined by special characters) gets its own pattern"
      }), `
`, e(n.li, {
        children: "Invalid characters are rejected before appearing in the field"
      }), `
`, e(n.li, {
        children: "Different groups can have different validation rules"
      }), `
`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: "Check"
      }), " works with the complete value:"]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Runs only after the mask is fully completed"
      }), `
`, e(n.li, {
        children: "Applied to the entire entered value"
      }), `
`, e(n.li, {
        children: "Provides an additional validation layer for complex business logic"
      }), `
`, e(n.li, {
        children: "Used for final correctness verification"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Property interaction"
    }), `
`, e(n.p, {
      children: "The properties work sequentially to ensure quality validation:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "pattern"
        }), " filters input at the character and group level, preventing incorrect input"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "check"
        }), " performs final validation of the complete value after mask completion"]
      }), `
`, e(n.li, {
        children: "Both properties are optional and can be used independently or together"
      }), `
`, e(n.li, {
        children: "When used together, they provide multi-level protection against incorrect data"
      }), `
`]
    }), `
`, e(n.p, {
      children: "This approach allows creating flexible and reliable input fields with detailed validation control at all stages of user interaction."
    })]
  });
}
function Pd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ri, {
      ...i
    })
  }) : Ri(i);
}
function Bi(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Валидация и паттерны"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "check"
      }), " и ", e(n.code, {
        children: "pattern"
      }), " предназначены для управления валидацией ввода и определения допустимых символов в маске."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "pattern"
        }), " — Определяет паттерны валидации для отдельных групп маски, задавая допустимые символы и правила по группам"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "check"
        }), " — Глобальный паттерн валидации, применяемый после завершения маски для дополнительной проверки ввода"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Тип FieldPatternItemOrFunction"
    }), `
`, t(n.p, {
      children: ["Оба параметра ", e(n.code, {
        children: "pattern"
      }), " и ", e(n.code, {
        children: "check"
      }), " имеют тип ", e(n.code, {
        children: "FieldPatternItemOrFunction"
      }), " и принимают следующие значения:"]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Различия в применении"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: "Pattern"
      }), " работает на уровне групп маски:"]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Применяется в реальном времени при вводе символов"
      }), `
`, e(n.li, {
        children: "Каждая группа маски (определённая спецсимволами) получает свой паттерн"
      }), `
`, e(n.li, {
        children: "Недопустимые символы отклоняются до появления в поле"
      }), `
`, e(n.li, {
        children: "Разные группы могут иметь разные правила валидации"
      }), `
`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: "Check"
      }), " работает с полным значением:"]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Запускается только после полного заполнения маски"
      }), `
`, e(n.li, {
        children: "Применяется ко всему введённому значению"
      }), `
`, e(n.li, {
        children: "Обеспечивает дополнительный слой валидации для сложной бизнес-логики"
      }), `
`, e(n.li, {
        children: "Используется для финальной проверки корректности данных"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Примеры использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e(n.p, {
      children: "Свойства работают последовательно для обеспечения качественной валидации:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "pattern"
        }), " фильтрует ввод на уровне символов и групп, предотвращая некорректный ввод"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "check"
        }), " выполняет финальную валидацию полного значения по завершении заполнения маски"]
      }), `
`, e(n.li, {
        children: "Оба свойства опциональны и могут использоваться независимо или совместно"
      }), `
`, e(n.li, {
        children: "При совместном использовании обеспечивают многоуровневую защиту от некорректных данных"
      }), `
`]
    }), `
`, e(n.p, {
      children: "Такой подход позволяет создавать гибкие и надёжные поля ввода с детальным контролем валидации на всех этапах взаимодействия с пользователем."
    })]
  });
}
function Fd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Bi, {
      ...i
    })
  }) : Bi(i);
}
function Ei(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Special characters (special)"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "special"
      }), " property defines special characters for mask groups and their advanced settings."]
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.p, {
      children: ["Special characters in a mask denote places where users can input data. The ", e(n.code, {
        children: "special"
      }), " property allows configuring the behavior of these input groups with additional capabilities."]
    }), `
`, e(n.h3, {
      children: "Value types"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Usage methods"
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "1. Simple string (single special character)"
      })
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-javascript",
        children: `special: '*'           // Symbol * denotes input places
// Mask: "***-***" → groups: *, *, *, *, *, *
`
      })
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "2. Character array (multiple group types)"
      })
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-javascript",
        children: `special: ['*', '#', 'A']
// * - any characters, # - digits, A - letters
// Mask: "A**-###" → different group types
`
      })
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "3. Object with extended settings"
      })
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Rubber groups"
    }), `
`, e(n.p, {
      children: "Rubber groups allow entering a variable number of characters:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Default values"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Transition characters"
    }), `
`, e(n.p, {
      children: "Define characters that automatically move the cursor to the next group:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Display (view)"
    }), `
`, e(n.p, {
      children: "Configure placeholder characters for unfilled positions:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': { view: '_' },       // Show underscores
  '#': { view: '0' }        // Show zeros
}
// Mask: "***-###" displays as "___-000"
`
      })
    }), `
`, e(n.h3, {
      children: "Integration with mask types"
    }), `
`, t(n.p, {
      children: ["For built-in types (", e(n.code, {
        children: "currency"
      }), ", ", e(n.code, {
        children: "number"
      }), ", date/time) the system automatically generates corresponding special characters:"]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "currency/number"
        }), ": special characters for digits and decimal parts"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "date/time"
        }), ": characters for day, month, year, hours, minutes, seconds"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "text"
        }), ": uses settings from the ", e(n.code, {
          children: "special"
        }), " property"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Interaction with other properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "pattern"
        }), " — complements special characters with group patterns"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "check"
        }), " — applied after filling all special groups"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "mask"
        }), " — uses special characters to define input places"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Special characters are the foundation of the mask system, providing flexible definition of input groups with individual validation rules and behavior."
    })]
  });
}
function Ad(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ei, {
      ...i
    })
  }) : Ei(i);
}
function Ui(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Специальные символы (special)"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "special"
      }), " определяет специальные символы для групп маски и их расширенные настройки."]
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.p, {
      children: ["Специальные символы в маске обозначают места, где пользователь может вводить данные. Свойство ", e(n.code, {
        children: "special"
      }), " позволяет настроить поведение этих групп ввода с дополнительными возможностями."]
    }), `
`, e(n.h3, {
      children: "Типы значений"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Способы использования"
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "1. Простая строка (один специальный символ)"
      })
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-javascript",
        children: `special: '*'           // Символ * обозначает места ввода
// Маска: "***-***" → группы: *, *, *, *, *, *
`
      })
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "2. Массив символов (несколько типов групп)"
      })
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-javascript",
        children: `special: ['*', '#', 'A']
// * - любые символы, # - цифры, A - буквы
// Маска: "A**-###" → группы разных типов
`
      })
    }), `
`, e(n.p, {
      children: e(n.strong, {
        children: "3. Объект с расширенными настройками"
      })
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Резиновые группы (rubber)"
    }), `
`, e(n.p, {
      children: "Резиновые группы позволяют вводить переменное количество символов:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Значения по умолчанию"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Символы перехода (transitionChar)"
    }), `
`, e(n.p, {
      children: "Определяют символы, которые автоматически переводят курсор к следующей группе:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Отображение (view)"
    }), `
`, e(n.p, {
      children: "Настройка placeholder-символов для незаполненных позиций:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-javascript",
        children: `special: {
  '*': { view: '_' },       // Показывать подчёркивания
  '#': { view: '0' }        // Показывать нули
}
// Маска: "***-###" отображается как "___-000"
`
      })
    }), `
`, e(n.h3, {
      children: "Интеграция с типами маски"
    }), `
`, t(n.p, {
      children: ["Для встроенных типов (", e(n.code, {
        children: "currency"
      }), ", ", e(n.code, {
        children: "number"
      }), ", дата/время) система автоматически генерирует соответствующие специальные символы:"]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "currency/number"
        }), ": специальные символы для разрядов и дробной части"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "date/time"
        }), ": символы для дня, месяца, года, часов, минут, секунд"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "text"
        }), ": использует настройки из свойства ", e(n.code, {
          children: "special"
        })]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Взаимодействие с другими свойствами"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "pattern"
        }), " — дополняет специальные символы групповыми паттернами"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "check"
        }), " — применяется после заполнения всех специальных групп"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "mask"
        }), " — использует специальные символы для определения мест ввода"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Специальные символы являются основой системы масок, обеспечивая гибкое определение групп ввода с индивидуальными правилами валидации и поведения."
    })]
  });
}
function Nd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ui, {
      ...i
    })
  }) : Ui(i);
}
function Hi(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Mask Types"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "type"
      }), " property defines the mask operation mode and automatically generates the appropriate structure for different data types."]
    }), `
`, e(n.h3, {
      children: "Type Categories"
    }), `
`, e(n.h4, {
      children: "Text Type"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "text"
        }), " — Basic text mask (default)"]
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Used to create custom masks using the ", e(n.code, {
        children: "mask"
      }), " property. All characters are processed as-is, without additional formatting."]
    }), `
`, e(n.h4, {
      children: "Numeric Types"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "number"
        }), " — Simple numeric mask"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "number-format"
        }), " — Numbers with thousand separators"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "currency"
        }), " — Currency formatting"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Automatically create rubber masks with validation, localization, and specialized formatting."
    }), `
`, e(n.h4, {
      children: "Date and Time Types"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "date"
        }), " — Full date"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "datetime"
        }), " — Date and time"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "time"
        }), " — Time"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "year"
        }), ", ", e(n.strong, {
          children: "month"
        }), ", ", e(n.strong, {
          children: "day"
        }), " — Date components"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "hour-minute"
        }), " — Time components"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Generate masks according to local formats with date correctness validation."
    }), `
`, e(n.h3, {
      children: "Automatic Generation"
    }), `
`, t(n.p, {
      children: ["When using specialized types, the ", e(n.code, {
        children: "mask"
      }), " property is ignored — the mask is created automatically:"]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Type Selection"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "text"
        }), " — for phones, codes, custom formats"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Numeric types"
        }), " — for quantities, amounts, percentages"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Date types"
        }), " — for timestamps, periods, schedules"]
      }), `
`]
    })]
  });
}
function Id(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Hi, {
      ...i
    })
  }) : Hi(i);
}
function Wi(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Типы масок"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "type"
      }), " определяет режим работы маски и автоматически генерирует соответствующую структуру для различных типов данных."]
    }), `
`, e(n.h3, {
      children: "Категории типов"
    }), `
`, e(n.h4, {
      children: "Текстовый тип"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "text"
        }), " — Базовая текстовая маска (по умолчанию)"]
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Используется для создания произвольных масок с помощью свойства ", e(n.code, {
        children: "mask"
      }), ". Все символы обрабатываются как есть, без дополнительного форматирования."]
    }), `
`, e(n.h4, {
      children: "Числовые типы"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "number"
        }), " — Простая числовая маска"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "number-format"
        }), " — Числа с разделителями разрядов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "currency"
        }), " — Валютное форматирование"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Автоматически создают резиновые маски с валидацией, локализацией и специальным форматированием."
    }), `
`, e(n.h4, {
      children: "Типы дат и времени"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "date"
        }), " — Полная дата"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "datetime"
        }), " — Дата и время"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "time"
        }), " — Время"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "year"
        }), ", ", e(n.strong, {
          children: "month"
        }), ", ", e(n.strong, {
          children: "day"
        }), " — Компоненты даты"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "hour-minute"
        }), " — Компоненты времени"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Генерируют маски согласно локальным форматам с валидацией корректности дат."
    }), `
`, e(n.h3, {
      children: "Автоматическая генерация"
    }), `
`, t(n.p, {
      children: ["При использовании специализированных типов свойство ", e(n.code, {
        children: "mask"
      }), " игнорируется — маска создаётся автоматически:"]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Выбор типа"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "text"
        }), " — для телефонов, кодов, произвольных форматов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Числовые типы"
        }), " — для количества, сумм, процентов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Типы дат"
        }), " — для временных меток, периодов, расписаний"]
      }), `
`]
    })]
  });
}
function Rd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Wi, {
      ...i
    })
  }) : Wi(i);
}
function Vi(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Mask Visibility Control"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "visible"
      }), " and ", e(n.code, {
        children: "visiblePartly"
      }), " properties control the display of mask placeholder characters and overall component visibility."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "visible"
        }), " — Primary property for controlling complete visibility of the mask component"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "visiblePartly"
        }), " — Controls partial visibility of mask placeholder characters"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "How it works"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: "visible"
      }), " controls complete visibility of the mask component. When set to ", e(n.code, {
        children: "false"
      }), ", hides the entire mask component including all placeholder characters."]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: "visiblePartly"
      }), " controls partial visibility of mask placeholder characters. When set to ", e(n.code, {
        children: "true"
      }), ", shows only filled positions while hiding empty placeholder characters."]
    }), `
`, e(n.h3, {
      children: "Usage Examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Behavior Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["When ", e(n.strong, {
          children: "visible: false"
        }), ", the mask component is completely hidden"]
      }), `
`, t(n.li, {
        children: ["When ", e(n.strong, {
          children: "visiblePartly: true"
        }), ", only filled mask positions are displayed"]
      }), `
`, t(n.li, {
        children: ["If ", e(n.strong, {
          children: "visible: false"
        }), ", the ", e(n.strong, {
          children: "visiblePartly"
        }), " property is ignored"]
      }), `
`, e(n.li, {
        children: "Visibility changes don't affect validation logic and data processing"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Application"
    }), `
`, e(n.p, {
      children: "Use these properties to create adaptive interfaces where the mask can be displayed conditionally or in abbreviated form depending on the usage context."
    })]
  });
}
function Bd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Vi, {
      ...i
    })
  }) : Vi(i);
}
function qi(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление видимостью маски"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "visible"
      }), " и ", e(n.code, {
        children: "visiblePartly"
      }), " управляют отображением символов-заполнителей маски и видимостью компонента в целом."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "visible"
        }), " — Основное свойство для управления полной видимостью компонента маски"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "visiblePartly"
        }), " — Управляет частичной видимостью символов-заполнителей маски"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Описание работы"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: "visible"
      }), " контролирует полную видимость компонента маски. При значении ", e(n.code, {
        children: "false"
      }), " скрывает весь компонент маски включая все символы-заполнители."]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: "visiblePartly"
      }), " управляет частичной видимостью символов-заполнителей. При значении ", e(n.code, {
        children: "true"
      }), " показывает только заполненные позиции, скрывая пустые символы-заполнители."]
    }), `
`, e(n.h3, {
      children: "Примеры использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Особенности поведения"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["При ", e(n.strong, {
          children: "visible: false"
        }), " компонент маски полностью скрыт"]
      }), `
`, t(n.li, {
        children: ["При ", e(n.strong, {
          children: "visiblePartly: true"
        }), " отображаются только заполненные позиции маски"]
      }), `
`, t(n.li, {
        children: ["Если ", e(n.strong, {
          children: "visible: false"
        }), ", то свойство ", e(n.strong, {
          children: "visiblePartly"
        }), " игнорируется"]
      }), `
`, e(n.li, {
        children: "Изменение видимости не влияет на логику валидации и обработку данных"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Применение"
    }), `
`, e(n.p, {
      children: "Используйте эти свойства для создания адаптивных интерфейсов, где маска может показываться условно или в сокращённом виде в зависимости от контекста использования."
    })]
  });
}
function Ed(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(qi, {
      ...i
    })
  }) : qi(i);
}
const Ud = {
  name: "Mask",
  descriptions: {
    basic: {
      en: Md,
      ru: wd
    },
    dateTypes: {
      en: Cd,
      ru: Dd
    },
    groupSave: {
      en: xd,
      ru: kd
    },
    mask: {
      en: _d,
      ru: Xd
    },
    match: {
      en: $d,
      ru: Ld
    },
    numberTypes: {
      en: Sd,
      ru: Td
    },
    pattern: {
      en: Pd,
      ru: Fd
    },
    special: {
      en: Ad,
      ru: Nd
    },
    type: {
      en: Id,
      ru: Rd
    },
    visible: {
      en: Bd,
      ru: Ed
    }
  }
};
function zi(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "AJAX Menu Loading"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "ajax"
      }), ", ", e(n.code, {
        children: "request"
      }), ", and ", e(n.code, {
        children: "cache"
      }), " properties are designed for managing asynchronous loading and caching of menu data."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "ajax"
        }), " — Enables remote data loading mode for the menu list (URL string or function)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "request"
        }), " — Object of type ", e(n.code, {
          children: "ApiFetch"
        }), " with HTTP request settings"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "cache"
        }), " — Enables/configures caching of loaded menu items"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Request Type"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "request"
      }), " parameter has type ", e(n.code, {
        children: "ApiFetch"
      }), " and accepts the following properties:"]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Property Relationships"
    }), `
`, e(n.p, {
      children: "The properties work together to provide efficient data loading:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["If ", e(n.code, {
          children: "ajax = false"
        }), " (or not specified), the menu uses local data, and ", e(n.code, {
          children: "request"
        }), " and ", e(n.code, {
          children: "cache"
        }), " are ignored"]
      }), `
`, t(n.li, {
        children: ["If ", e(n.code, {
          children: "ajax = true"
        }), " or specified as a URL string, network loading is activated:", `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: [e(n.code, {
              children: "request"
            }), " defines HTTP request parameters (method, headers, request body)"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "cache"
            }), " manages saving and reusing received data"]
          }), `
`, t(n.li, {
            children: ["When ", e(n.code, {
              children: "cache"
            }), " is enabled, subsequent menu openings use saved data instead of new requests"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, e(n.p, {
      children: "This approach reduces server load, speeds up interface response, and allows flexible configuration of data loading strategies for different usage scenarios."
    })]
  });
}
function Hd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(zi, {
      ...i
    })
  }) : zi(i);
}
function Oi(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "AJAX загрузка меню"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "ajax"
      }), ", ", e(n.code, {
        children: "request"
      }), " и ", e(n.code, {
        children: "cache"
      }), " предназначены для управления асинхронной загрузкой и кэшированием данных меню."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "ajax"
        }), " — Включает режим удалённой загрузки данных для списка меню (строка URL или функция)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "request"
        }), " — Объект типа ", e(n.code, {
          children: "ApiFetch"
        }), " с настройками HTTP-запроса"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "cache"
        }), " — Включает/настраивает кэширование загруженных элементов меню"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Тип request"
    }), `
`, t(n.p, {
      children: ["Параметр ", e(n.code, {
        children: "request"
      }), " имеет тип ", e(n.code, {
        children: "ApiFetch"
      }), " и принимает следующие свойства:"]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, e(n.p, {
      children: "Свойства работают совместно для обеспечения эффективной загрузки данных:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Если ", e(n.code, {
          children: "ajax = false"
        }), " (или не задан), меню использует локальные данные, а ", e(n.code, {
          children: "request"
        }), " и ", e(n.code, {
          children: "cache"
        }), " игнорируются"]
      }), `
`, t(n.li, {
        children: ["Если ", e(n.code, {
          children: "ajax = true"
        }), " или задан как строка URL, активируется сетевая загрузка:"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "request"
        }), " определяет параметры HTTP-запроса (метод, заголовки, тело запроса)"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "cache"
        }), " управляет сохранением и повторным использованием полученных данных"]
      }), `
`, t(n.li, {
        children: ["При включённом ", e(n.code, {
          children: "cache"
        }), " повторные открытия меню используют сохранённые данные вместо новых запросов"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Такой подход снижает нагрузку на сервер, ускоряет отклик интерфейса и позволяет гибко настраивать стратегию загрузки данных для разных сценариев использования."
    })]
  });
}
function Wd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Oi, {
      ...i
    })
  }) : Oi(i);
}
function ji(i) {
  const n = {
    p: "p",
    ...i.components
  };
  return e(n.p, {
    children: "The Menu component is a popup menu for navigation and actions. It combines Window (container and positioning), Bars (action toolbar), and List (items, groups, and nested submenus), providing keyboard navigation, nested structure support, a lightweight rendering mode (lite with liteThreshold), and controlled open/close behavior."
  });
}
function Vd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ji, {
      ...i
    })
  }) : ji(i);
}
function Yi(i) {
  const n = {
    p: "p",
    ...i.components
  };
  return e(n.p, {
    children: "Компонент Menu — всплывающее меню для навигации и действий. Он объединяет возможности Window (контейнер и позиционирование), Bars (панель действий) и List (пункты, группы и вложенные подменю), обеспечивая клавиатурную навигацию, поддержку вложенной структуры, лёгкий режим рендеринга (lite с порогом liteThreshold) и управляемое открытие/закрытие."
  });
}
function qd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Yi, {
      ...i
    })
  }) : Yi(i);
}
function Gi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "control"
      })
    }), `
`, e(n.p, {
      children: "Slot to render the Menu trigger/control."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place a button, icon, or any trigger for open/close"
      }), `
`, e(n.li, {
        children: "Receive control data via scoped slot (MenuControlItem)"
      }), `
`, e(n.li, {
        children: "Use selection state (isSelected, selectedNames, selectedValues)"
      }), `
`]
    })]
  });
}
function zd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Gi, {
      ...i
    })
  }) : Gi(i);
}
function Ki(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "control"
      })
    }), `
`, e(n.p, {
      children: "Слот для рендеринга элемента управления (триггера) Menu."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Разместить кнопку, иконку или любой триггер открытия/закрытия"
      }), `
`, e(n.li, {
        children: "Получать данные контрола через scoped‑slot (MenuControlItem)"
      }), `
`, e(n.li, {
        children: "Использовать признаки выбора (isSelected, selectedNames, selectedValues)"
      }), `
`]
    })]
  });
}
function Od(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ki, {
      ...i
    })
  }) : Ki(i);
}
function Ji(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "title"
      })
    }), `
`, e(n.p, {
      children: "Slot for the Menu window title."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Display title, subtitle, status, or counters"
      }), `
`, e(n.li, {
        children: "Dynamically change content based on state"
      }), `
`, e(n.li, {
        children: "Access control data (MenuControlItem) if needed"
      }), `
`]
    })]
  });
}
function jd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ji, {
      ...i
    })
  }) : Ji(i);
}
function Zi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "title"
      })
    }), `
`, e(n.p, {
      children: "Слот заголовка окна Menu."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Отобразить заголовок, подзаголовок, статус или счётчики"
      }), `
`, e(n.li, {
        children: "Динамически менять контент в зависимости от состояния"
      }), `
`, e(n.li, {
        children: "Использовать данные контрола (MenuControlItem), если требуется"
      }), `
`]
    })]
  });
}
function Yd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Zi, {
      ...i
    })
  }) : Zi(i);
}
function Qi(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "footer"
      })
    }), `
`, e(n.p, {
      children: "Slot for the Menu window footer."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place actions, notes, or status information"
      }), `
`, e(n.li, {
        children: "Render contextual confirm/cancel buttons"
      }), `
`, e(n.li, {
        children: "Access control data (MenuControlItem) if needed"
      }), `
`]
    })]
  });
}
function Gd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Qi, {
      ...i
    })
  }) : Qi(i);
}
function nt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "footer"
      })
    }), `
`, e(n.p, {
      children: "Слот подвала окна Menu."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Разместить действия, примечания или статусную информацию"
      }), `
`, e(n.li, {
        children: "Выводить контекстные кнопки подтверждения/отмены"
      }), `
`, e(n.li, {
        children: "Использовать данные контрола (MenuControlItem) при необходимости"
      }), `
`]
    })]
  });
}
function Kd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(nt, {
      ...i
    })
  }) : nt(i);
}
function et(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "contextTop"
      })
    }), `
`, e(n.p, {
      children: "Slot for the top contextual area of the Menu window."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place extra content above the list (search, filters, tips)"
      }), `
`, e(n.li, {
        children: "Show dynamic blocks depending on window/selection state"
      }), `
`, e(n.li, {
        children: "Access control data (MenuControlItem) if needed"
      }), `
`]
    })]
  });
}
function Jd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(et, {
      ...i
    })
  }) : et(i);
}
function it(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "contextTop"
      })
    }), `
`, e(n.p, {
      children: "Слот контекстной области сверху окна Menu."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Разместить дополнительный контент над списком (поиск, фильтры, подсказки)"
      }), `
`, e(n.li, {
        children: "Показать динамические блоки в зависимости от состояния окна/выбора"
      }), `
`, e(n.li, {
        children: "Использовать данные контрола (MenuControlItem) при необходимости"
      }), `
`]
    })]
  });
}
function Zd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(it, {
      ...i
    })
  }) : it(i);
}
function tt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "contextBottom"
      })
    }), `
`, e(n.p, {
      children: "Slot for the bottom contextual area of the Menu window."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place extra content below the list (hints, final actions)"
      }), `
`, e(n.li, {
        children: "Show dynamic blocks depending on window/selection state"
      }), `
`, e(n.li, {
        children: "Access control data (MenuControlItem) if needed"
      }), `
`]
    })]
  });
}
function Qd(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(tt, {
      ...i
    })
  }) : tt(i);
}
function rt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "contextBottom"
      })
    }), `
`, e(n.p, {
      children: "Слот контекстной области снизу окна Menu."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Разместить дополнительный контент под списком (подсказки, итоговые действия)"
      }), `
`, e(n.li, {
        children: "Показать динамические блоки в зависимости от состояния окна/выбора"
      }), `
`, e(n.li, {
        children: "Использовать данные контрола (MenuControlItem) при необходимости"
      }), `
`]
    })]
  });
}
function nh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(rt, {
      ...i
    })
  }) : rt(i);
}
const eh = {
  name: "Menu",
  descriptions: {
    ajax: {
      en: Hd,
      ru: Wd
    },
    menu: {
      en: Vd,
      ru: qd
    },
    "slot.control": {
      en: zd,
      ru: Od
    },
    "slot.title": {
      en: jd,
      ru: Yd
    },
    "slot.footer": {
      en: Gd,
      ru: Kd
    },
    "slot.contextTop": {
      en: Jd,
      ru: Zd
    },
    "slot.contextBottom": {
      en: Qd,
      ru: nh
    }
  }
};
function ct(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Head position animation"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "animationHeadPosition"
      }), " property controls how the Head area behaves during show/hide animations."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `animationHeadPosition?: 'top' | 'toBottom'
`
      })
    }), `
`, e(n.h3, {
      children: "Values"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "top"
          })
        }), " — Keeps the Head at the top during transition (default)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "toBottom"
          })
        }), " — Animates the Head toward the bottom together with content"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "When to use"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Collapsing layouts"
        }), " — When the header should travel with expanding/collapsing content"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Smooth transitions"
        }), " — For creating more natural motion perception"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Content hierarchy"
        }), " — When header position affects content flow understanding"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Motion coordination"
        }), " — Synchronizes header movement with content animation"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Flexible positioning"
        }), " — Adapts to different layout requirements"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Performance optimized"
        }), " — Uses CSS transforms for smooth animations"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Limitations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [t(n.strong, {
          children: ["When ", e(n.code, {
            children: "section"
          }), " is enabled"]
        }), " — If the ", e(n.code, {
          children: "section"
        }), " property is set to ", e(n.code, {
          children: "true"
        }), ", then ", e(n.code, {
          children: "animationHeadPosition"
        }), " is ignored and does not affect animation behavior"]
      }), `
`]
    }), `
`, t(n.blockquote, {
      children: [`
`, t(n.p, {
        children: ["Combine with ", e(n.code, {
          children: "animationShow"
        }), " to fine‑tune the overall motion experience."]
      }), `
`]
    })]
  });
}
function ih(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ct, {
      ...i
    })
  }) : ct(i);
}
function lt(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Анимация позиции заголовка"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "animationHeadPosition"
      }), " определяет поведение области Head во время анимаций показа/скрытия."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `animationHeadPosition?: 'top' | 'toBottom'
`
      })
    }), `
`, e(n.h3, {
      children: "Значения"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "top"
          })
        }), " — Сохраняет Head вверху во время перехода (по умолчанию)"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "toBottom"
          })
        }), " — Анимирует Head вниз вместе с контентом"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Когда использовать"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Сворачиваемые макеты"
        }), " — Когда заголовок должен перемещаться вместе с разворачивающимся/сворачивающимся содержимым"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Плавные переходы"
        }), " — Для создания более естественного восприятия движения"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Иерархия контента"
        }), " — Когда позиция заголовка влияет на понимание потока содержимого"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Координация движения"
        }), " — Синхронизирует движение заголовка с анимацией контента"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гибкое позиционирование"
        }), " — Адаптируется к различным требованиям макета"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Оптимизация производительности"
        }), " — Использует CSS-трансформации для плавных анимаций"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Ограничения"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [t(n.strong, {
          children: ["При включенном ", e(n.code, {
            children: "section"
          })]
        }), " — Если свойство ", e(n.code, {
          children: "section"
        }), " установлено в ", e(n.code, {
          children: "true"
        }), ", то ", e(n.code, {
          children: "animationHeadPosition"
        }), " игнорируется и не влияет на поведение анимации"]
      }), `
`]
    }), `
`, t(n.blockquote, {
      children: [`
`, t(n.p, {
        children: ["Комбинируйте с ", e(n.code, {
          children: "animationShow"
        }), " для точной настройки общего восприятия движения."]
      }), `
`]
    })]
  });
}
function th(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(lt, {
      ...i
    })
  }) : lt(i);
}
function ot(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Helper Classes"
    }), `
`, e(n.p, {
      children: "The MotionTransform component provides a set of helper CSS classes to manage the states and styling of its elements."
    }), `
`, e(n.h3, {
      children: "State Classes"
    }), `
`, e(n.p, {
      children: "These classes are dynamically added to the component's root element to reflect its current state."
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--open"
          })
        }), ": Indicates that the component is fully open and its content is visible."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--show"
          })
        }), ": Added when the component is visible or in the process of an open/close animation. Useful for managing transitions."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--window"
          })
        }), ": Applied when the component is operating in a window-like mode (e.g., with teleportation)."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--click"
          })
        }), ": Added briefly on click for creating feedback effects."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Control Classes"
    }), `
`, e(n.p, {
      children: "These classes can be added to child elements to control the component's behavior."
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--close"
          })
        }), ": Applied to an element that should trigger the closing of MotionTransform on click."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--none"
          })
        }), ": Disables the default behavior (e.g., open/close) for the element it is applied to."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--noneGlobal"
          })
        }), ": Globally disables MotionTransform-related events while this class is present on an element."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Element Classes"
    }), `
`, e(n.p, {
      children: "These classes are used for styling the internal parts of the component."
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__context"
          })
        }), ": Class for the context element, which can be used for positioning."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__head"
          })
        }), ": Class for the header area, which often acts as a trigger."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__body"
          })
        }), ": Class for the content area that appears and disappears."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__backdrop"
          })
        }), ": Class for the backdrop element, which can be used to create an overlay effect."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__scrim"
          })
        }), ": Class for the scrim layer, often used in modal modes."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__clickNone"
          })
        }), ": Class for an element that should ignore clicks."]
      }), `
`]
    })]
  });
}
function rh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ot, {
      ...i
    })
  }) : ot(i);
}
function dt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Вспомогательные классы"
    }), `
`, e(n.p, {
      children: "Компонент MotionTransform предоставляет набор вспомогательных CSS-классов для управления состояниями и стилизации его элементов."
    }), `
`, e(n.h3, {
      children: "Классы состояний"
    }), `
`, e(n.p, {
      children: "Эти классы динамически добавляются к корневому элементу компонента для отражения его текущего состояния."
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--open"
          })
        }), ": Указывает, что компонент полностью открыт и его содержимое видимо."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--show"
          })
        }), ": Добавляется, когда компонент видим или находится в процессе анимации открытия/закрытия. Полезен для управления переходами."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--window"
          })
        }), ": Применяется, когда компонент работает в режиме, подобном окну (например, с телепортацией)."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--click"
          })
        }), ": Добавляется на короткое время при клике на компонент, позволяя создавать эффекты обратной связи."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Классы управления"
    }), `
`, e(n.p, {
      children: "Эти классы можно добавлять к дочерним элементам для управления поведением компонента."
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--close"
          })
        }), ": Применяется к элементу, который должен инициировать закрытие MotionTransform при клике."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--none"
          })
        }), ": Отключает стандартное поведение (например, открытие/закрытие) для элемента, на котором он установлен."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*--noneGlobal"
          })
        }), ": Глобально отключает события, связанные с MotionTransform, пока этот класс присутствует на элементе."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Классы элементов"
    }), `
`, e(n.p, {
      children: "Эти классы используются для стилизации внутренних частей компонента."
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__context"
          })
        }), ": Класс для контекстного элемента, который может использоваться для позиционирования."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__head"
          })
        }), ": Класс для области заголовка, которая часто выступает в роли триггера."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__body"
          })
        }), ": Класс для области содержимого, которая появляется и исчезает."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__backdrop"
          })
        }), ": Класс для элемента заднего фона, который может использоваться для создания эффекта наложения."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__scrim"
          })
        }), ": Класс для затемняющего слоя, часто используемого в модальных режимах."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "*__clickNone"
          })
        }), ": Класс для элемента, который должен игнорировать клики."]
      }), `
`]
    })]
  });
}
function ch(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(dt, {
      ...i
    })
  }) : dt(i);
}
function ht(i) {
  const n = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "transform"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when MotionTransform state changes with full event context."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `@transform="onTransform"
`
      })
    }), `
`, e(n.p, {
      children: "Handler signature:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `function onTransform (event: Event | undefined, options: MotionTransformEmitOptions)
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "event"
        }), " — the DOM event that triggered the change (if any)"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "options"
        }), " — transform data: type, open state"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: e(n.code, {
        children: "transformLite"
      })
    }), `
`, e(n.p, {
      children: "Lightweight event that triggers when MotionTransform state changes without event context."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `@transform-lite="onTransformLite"
`
      })
    }), `
`, e(n.p, {
      children: "Handler signature:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `function onTransformLite (options: MotionTransformEmitOptions)
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "options"
        }), " — transform data: type ('head' | 'body' | 'top' | 'script') and open state"]
      }), `
`]
    }), `
`, e(n.h4, {
      children: "MotionTransformEmitOptions"
    }), `
`, e(n.p, {
      children: "Object with transform state data passed to event handlers."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `MotionTransformEmitOptions: {
  type: 'head' | 'body' | 'top' | 'script'
  open: boolean
}
`
      })
    }), `
`, e(n.p, {
      children: "Fields:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "type"
          })
        }), " — the area type that initiated the event:", `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: [e(n.code, {
              children: "'head'"
            }), " — header area"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "'body'"
            }), " — content area"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "'top'"
            }), " — top area"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "'script'"
            }), " — programmatic change"]
          }), `
`]
        }), `
`]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "open"
          })
        }), " — current open state (true = open, false = closed)"]
      }), `
`]
    })]
  });
}
function lh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ht, {
      ...i
    })
  }) : ht(i);
}
function at(i) {
  const n = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "transform"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при изменении состояния MotionTransform с полным контекстом события."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `@transform="onTransform"
`
      })
    }), `
`, e(n.p, {
      children: "Сигнатура обработчика:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `function onTransform (event: Event | undefined, options: MotionTransformEmitOptions)
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "event"
        }), " — DOM‑событие, которое вызвало изменение (если есть)"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "options"
        }), " — данные трансформации: тип, состояние открытия"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: e(n.code, {
        children: "transformLite"
      })
    }), `
`, e(n.p, {
      children: "Облегчённое событие, которое срабатывает при изменении состояния MotionTransform без контекста события."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `@transform-lite="onTransformLite"
`
      })
    }), `
`, e(n.p, {
      children: "Сигнатура обработчика:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `function onTransformLite (options: MotionTransformEmitOptions)
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "options"
        }), " — данные трансформации: тип ('head' | 'body' | 'top' | 'script') и состояние открытия"]
      }), `
`]
    }), `
`, e(n.h4, {
      children: "MotionTransformEmitOptions"
    }), `
`, e(n.p, {
      children: "Объект с данными о состоянии трансформации, передаваемый в обработчики событий."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `MotionTransformEmitOptions: {
  type: 'head' | 'body' | 'top' | 'script'
  open: boolean
}
`
      })
    }), `
`, e(n.p, {
      children: "Поля:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "type"
          })
        }), " — тип области, которая инициировала событие:", `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: [e(n.code, {
              children: "'head'"
            }), " — область заголовка"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "'body'"
            }), " — область содержимого"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "'top'"
            }), " — верхняя область"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "'script'"
            }), " — программное изменение"]
          }), `
`]
        }), `
`]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "open"
          })
        }), " — текущее состояние открытия (true = открыто, false = закрыто)"]
      }), `
`]
    })]
  });
}
function oh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(at, {
      ...i
    })
  }) : at(i);
}
function st(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "isShow"
      })
    }), `
`, e(n.p, {
      children: "Computed property that indicates whether the component is currently shown or being prepared for display."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `readonly isShow: ComputedRef<boolean>
`
      })
    })]
  });
}
function dh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(st, {
      ...i
    })
  }) : st(i);
}
function ut(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "isShow"
      })
    }), `
`, e(n.p, {
      children: "Вычисляемое свойство, которое указывает, отображается ли компонент в данный момент или идет подготовка к отображению."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `readonly isShow: ComputedRef<boolean>
`
      })
    })]
  });
}
function hh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ut, {
      ...i
    })
  }) : ut(i);
}
function pt(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Ignore zones"
    }), `
`, t(n.p, {
      children: ["Properties that exclude elements from outside-click checks and auto-close logic: ", e(n.code, {
        children: "ignore"
      }), " accepts a DOM element or selector, while ", e(n.code, {
        children: "ignoreSelector"
      }), " accepts any CSS selector for multiple/dynamic matches."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `ignore?: HTMLElement | string
ignoreSelector?: string
`
      })
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "ignore"
          })
        }), " — Element reference or CSS selector to exclude from outside-click detection"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "ignoreSelector"
          })
        }), " — CSS selector that can match multiple elements for exclusion"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "When to use"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Trigger buttons"
        }), " — Prevent the trigger from closing the component when clicked"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Helper controls"
        }), " — Keep auxiliary UI elements from interfering with auto-close"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Nested interactive areas"
        }), " — Maintain functionality of embedded components"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Dynamic content"
        }), " — Handle elements that appear/disappear during interaction"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Comparison"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "ignore"
          })
        }), " — More precise, can reference a specific DOM element directly"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "ignoreSelector"
          })
        }), " — More flexible, can match multiple elements with a single selector"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Performance"
        }), " — ", e(n.code, {
          children: "ignore"
        }), " is faster for single elements, ", e(n.code, {
          children: "ignoreSelector"
        }), " is better for collections"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Event coordination"
        }), " — Both properties work together during outside-click evaluation"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Selector flexibility"
        }), " — Support for any valid CSS selector patterns"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Dynamic updates"
        }), " — Changes are reflected immediately in click detection"]
      }), `
`]
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Keep selectors specific to avoid unintended matches that could prevent auto-close functionality."
      }), `
`]
    })]
  });
}
function ah(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(pt, {
      ...i
    })
  }) : pt(i);
}
function mt(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Зоны игнорирования"
    }), `
`, t(n.p, {
      children: ["Свойства для исключения элементов из проверок клика снаружи и логики автозакрытия: ", e(n.code, {
        children: "ignore"
      }), " принимает ссылку на DOM‑элемент или селектор, ", e(n.code, {
        children: "ignoreSelector"
      }), " — любой CSS‑селектор для множественных/динамических совпадений."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `ignore?: HTMLElement | string
ignoreSelector?: string
`
      })
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "ignore"
          })
        }), " — Ссылка на элемент или CSS‑селектор для исключения из обнаружения внешних кликов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "ignoreSelector"
          })
        }), " — CSS‑селектор, который может соответствовать нескольким элементам для исключения"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Когда использовать"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Кнопки‑триггеры"
        }), " — Предотвращение закрытия компонента при клике на триггер"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Вспомогательные элементы"
        }), " — Сохранение функциональности дополнительных UI‑элементов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Вложенные интерактивные области"
        }), " — Поддержка функциональности встроенных компонентов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Динамический контент"
        }), " — Обработка элементов, которые появляются/исчезают во время взаимодействия"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Сравнение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "ignore"
          })
        }), " — Более точный, может ссылаться на конкретный DOM‑элемент напрямую"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: "ignoreSelector"
          })
        }), " — Более гибкий, может соответствовать нескольким элементам одним селектором"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Производительность"
        }), " — ", e(n.code, {
          children: "ignore"
        }), " быстрее для одиночных элементов, ", e(n.code, {
          children: "ignoreSelector"
        }), " лучше для коллекций"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Координация событий"
        }), " — Оба свойства работают вместе при оценке внешних кликов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гибкость селекторов"
        }), " — Поддержка любых валидных паттернов CSS‑селекторов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Динамические обновления"
        }), " — Изменения сразу отражаются в обнаружении кликов"]
      }), `
`]
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Делайте селекторы специфичными, чтобы избежать непреднамеренных совпадений, которые могут помешать функциональности автозакрытия."
      }), `
`]
    })]
  });
}
function sh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(mt, {
      ...i
    })
  }) : mt(i);
}
function gt(i) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "MotionTransform is a low-level utility that orchestrates element transforms, state transitions, and interaction flows for window-like UI. It centralizes open/show/teleport flags, measures size, updates CSS variables, and coordinates events for smooth, predictable motion."
    }), `
`, e(n.h3, {
      children: "Purpose"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Centralized motion control"
        }), " — Unified API for managing component visibility and animation states"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Event coordination"
        }), " — Handles click interactions, auto-close behavior, and ignore zones"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Performance optimization"
        }), " — Efficient DOM manipulation and CSS variable updates"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Developer experience"
        }), " — Clean separation between UI logic and motion mechanics"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Core capabilities"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "State management"
        }), " — Computed accessors for open, show, teleport with simple control API"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Element handling"
        }), " — DOM helpers for refs, portals, and class bindings"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Size coordination"
        }), " — Measurements and CSS variables to drive smooth transitions"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Event processing"
        }), " — Click/auto-close handling with configurable ignore zones"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Programmatic control"
        }), " — Imperative methods to open/close and synchronize component flows"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Integration"
    }), `
`, e(n.p, {
      children: "MotionTransform is designed as a foundational utility for component developers. Use it inside higher-level components when you need consistent behavior, predictable transitions, and clean separation between UI and motion logic."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "This is a low-level utility intended for component library development rather than direct application use."
      }), `
`]
    })]
  });
}
function uh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(gt, {
      ...i
    })
  }) : gt(i);
}
function ft(i) {
  const n = {
    blockquote: "blockquote",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.p, {
      children: "MotionTransform — низкоуровневая утилита, которая управляет трансформациями элементов, переходами состояний и событиями взаимодействия для «оконного» поведения UI. Централизует флаги open/show/teleport, измеряет размеры, обновляет CSS‑переменные и координирует события для плавных анимаций."
    }), `
`, e(n.h3, {
      children: "Назначение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Централизованное управление движением"
        }), " — Единый API для управления видимостью компонентов и состояниями анимации"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Координация событий"
        }), " — Обрабатывает клики, поведение автозакрытия и зоны игнорирования"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Оптимизация производительности"
        }), " — Эффективная DOM‑манипуляция и обновление CSS‑переменных"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Удобство разработки"
        }), " — Чёткое разделение между UI‑логикой и механикой движения"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Управление состоянием"
        }), " — Вычисляемые аксессоры для open, show, teleport с простым API управления"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Работа с элементами"
        }), " — DOM‑помощники для ссылок, порталов и привязки классов"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Координация размеров"
        }), " — Измерения и CSS‑переменные для управления плавными переходами"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Обработка событий"
        }), " — Обработка кликов/автозакрытия с настраиваемыми зонами игнорирования"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Программное управление"
        }), " — Императивные методы для открытия/закрытия и синхронизации потоков компонентов"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Интеграция"
    }), `
`, e(n.p, {
      children: "MotionTransform предназначена как базовая утилита для разработчиков компонентов. Используйте её внутри компонентов верхнего уровня, когда нужна согласованность поведения, предсказуемые переходы и чёткое разделение UI и логики движения."
    }), `
`, t(n.blockquote, {
      children: [`
`, e(n.p, {
        children: "Это низкоуровневая утилита, предназначенная для разработки библиотек компонентов, а не для прямого использования в приложениях."
      }), `
`]
    })]
  });
}
function ph(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ft, {
      ...i
    })
  }) : ft(i);
}
function yt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "body"
      })
    }), `
`, e(n.p, {
      children: "Slot for rendering the main content area that appears when the component is opened."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place any content like text, forms, lists, or other components"
      }), `
`, e(n.li, {
        children: "Receive component state data via scoped slot props"
      }), `
`, e(n.li, {
        children: "Access isOpen, isShow state and CSS classes for conditional styling"
      }), `
`, e(n.li, {
        children: "Create responsive layouts that adapt to the component's visibility"
      }), `
`]
    }), `
`, e(n.p, {
      children: "The body area is typically hidden/shown based on the component's open state and can include animations during transitions."
    })]
  });
}
function mh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(yt, {
      ...i
    })
  }) : yt(i);
}
function bt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "body"
      })
    }), `
`, e(n.p, {
      children: "Слот для рендеринга основной области содержимого, которая появляется при открытии компонента."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Размещать любой контент, такой как текст, формы, списки или другие компоненты"
      }), `
`, e(n.li, {
        children: "Получать данные состояния компонента через scoped slot props"
      }), `
`, e(n.li, {
        children: "Получать доступ к состояниям isOpen, isShow и CSS‑классам для условной стилизации"
      }), `
`, e(n.li, {
        children: "Создавать адаптивные макеты, которые подстраиваются под видимость компонента"
      }), `
`]
    }), `
`, e(n.p, {
      children: "Область body обычно скрывается/показывается в зависимости от состояния открытия компонента и может включать анимации во время переходов."
    })]
  });
}
function gh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(bt, {
      ...i
    })
  }) : bt(i);
}
function vt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "head"
      })
    }), `
`, e(n.p, {
      children: "Slot for rendering the header area that serves as a trigger for opening/closing the component."
    }), `
`, e(n.p, {
      children: "This slot lets you:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Place interactive controls like buttons, titles, or icons"
      }), `
`, e(n.li, {
        children: "Receive component state data via scoped slot props"
      }), `
`, e(n.li, {
        children: "Control the visual presentation of the trigger area"
      }), `
`, e(n.li, {
        children: "Access isOpen, isShow state and CSS classes for styling"
      }), `
`]
    }), `
`, e(n.p, {
      children: "The head area typically handles click events to toggle the component's visibility state."
    })]
  });
}
function fh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(vt, {
      ...i
    })
  }) : vt(i);
}
function Mt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "head"
      })
    }), `
`, e(n.p, {
      children: "Слот для рендеринга области заголовка, которая служит триггером для открытия/закрытия компонента."
    }), `
`, e(n.p, {
      children: "Этот слот позволяет:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Размещать интерактивные элементы управления, такие как кнопки, заголовки или иконки"
      }), `
`, e(n.li, {
        children: "Получать данные состояния компонента через scoped slot props"
      }), `
`, e(n.li, {
        children: "Управлять визуальным представлением области триггера"
      }), `
`, e(n.li, {
        children: "Получать доступ к состояниям isOpen, isShow и CSS‑классам для стилизации"
      }), `
`]
    }), `
`, e(n.p, {
      children: "Область head обычно обрабатывает события клика для переключения состояния видимости компонента."
    })]
  });
}
function yh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Mt, {
      ...i
    })
  }) : Mt(i);
}
function wt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: "Slot parameters"
    }), `
`, t(n.p, {
      children: ["Below is a detailed description of the parameters passed to the ", e(n.code, {
        children: "head"
      }), " and ", e(n.code, {
        children: "body"
      }), " slots of the MotionTransform component."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.p, {
      children: "Quick reference:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "isOpen — whether the component is open"
      }), `
`, e(n.li, {
        children: "isShow — true when the component is visible or in the preparation/transition phase"
      }), `
`, e(n.li, {
        children: "classes — an object with CSS classes to control states and behavior"
      }), `
`]
    }), `
`, e(n.p, {
      children: "Usage example in slots:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function bh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(wt, {
      ...i
    })
  }) : wt(i);
}
function Ct(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: "Параметры слотов"
    }), `
`, t(n.p, {
      children: ["Ниже приведено подробное описание параметров, которые передаются в слоты ", e(n.code, {
        children: "head"
      }), " и ", e(n.code, {
        children: "body"
      }), " компонента MotionTransform."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
`, e(n.p, {
      children: "Кратко о параметрах:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "isOpen — указывает, открыт ли компонент"
      }), `
`, e(n.li, {
        children: "isShow — true, если компонент видим или находится в подготовке к показу (анимация)"
      }), `
`, e(n.li, {
        children: "classes — объект с CSS‑классами для управления состояниями и поведением"
      }), `
`]
    }), `
`, e(n.p, {
      children: "Пример использования в слотах:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function vh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ct, {
      ...i
    })
  }) : Ct(i);
}
function Dt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Two-way binding (v-model)"
    }), `
`, t(n.p, {
      children: ["The MotionTransform component supports two-way binding for the ", e(n.code, {
        children: "open"
      }), " state using the ", e(n.code, {
        children: "v-model:open"
      }), " directive."]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, e(n.p, {
      children: "This allows you to synchronize the component's visibility with a local data property in your parent component."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-html",
        children: `<MotionTransform v-model:open="isOpen"/>
`
      })
    }), `
`, e(n.h3, {
      children: "How it works"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "v-model:open"
      }), " is a shorthand for binding the ", e(n.code, {
        children: "open"
      }), " prop and listening to the ", e(n.code, {
        children: "update:open"
      }), " event."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: ':open="isOpen"'
          })
        }), ": The component's visibility is controlled by the ", e(n.code, {
          children: "isOpen"
        }), " ref."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: '@update:open="isOpen = $event"'
          })
        }), ": When the component's internal state changes (e.g., by clicking the head), it emits an event to update the parent's ", e(n.code, {
          children: "isOpen"
        }), " ref."]
      }), `
`]
    })]
  });
}
function Mh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Dt, {
      ...i
    })
  }) : Dt(i);
}
function xt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Двусторонняя привязка (v-model)"
    }), `
`, t(n.p, {
      children: ["Компонент MotionTransform поддерживает двустороннюю привязку для состояния ", e(n.code, {
        children: "open"
      }), " с использованием директивы ", e(n.code, {
        children: "v-model:open"
      }), "."]
    }), `
`, e(n.h3, {
      children: "Использование"
    }), `
`, e(n.p, {
      children: "Это позволяет синхронизировать видимость компонента с локальным свойством данных в вашем родительском компоненте."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-html",
        children: `<MotionTransform v-model:open="isOpen"/>
`
      })
    }), `
`, e(n.h3, {
      children: "Как это работает"
    }), `
`, t(n.p, {
      children: [e(n.code, {
        children: "v-model:open"
      }), " является сокращением для привязки свойства ", e(n.code, {
        children: "open"
      }), " и прослушивания события ", e(n.code, {
        children: "update:open"
      }), "."]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: ':open="isOpen"'
          })
        }), ": Видимость компонента управляется ", e(n.code, {
          children: "isOpen"
        }), " ref."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: e(n.code, {
            children: '@update:open="isOpen = $event"'
          })
        }), ": Когда внутреннее состояние компонента изменяется (например, при клике на заголовок), он генерирует событие для обновления ", e(n.code, {
          children: "isOpen"
        }), " ref родительского компонента."]
      }), `
`]
    })]
  });
}
function wh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(xt, {
      ...i
    })
  }) : xt(i);
}
const Ch = {
  name: "MotionTransform",
  descriptions: {
    animationHeadPosition: {
      en: ih,
      ru: th
    },
    classes: {
      en: rh,
      ru: ch
    },
    events: {
      en: lh,
      ru: oh
    },
    "expose.isShow": {
      en: dh,
      ru: hh
    },
    ignore: {
      en: ah,
      ru: sh
    },
    motionTransform: {
      en: uh,
      ru: ph
    },
    "slot.body": {
      en: mh,
      ru: gh
    },
    "slot.head": {
      en: fh,
      ru: yh
    },
    "slot.params": {
      en: bh,
      ru: vh
    },
    "v-model": {
      en: Mh,
      ru: wh
    }
  }
};
function kt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Circular Progress and Related Parameters"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "circular"
      }), " property enables circular progress indicator display mode. For optimal control over the appearance and behavior of circular progress, it is recommended to use it together with additional styling properties."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "circular"
        }), " — Enables circular progress display mode as a ring indicator."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "dense"
        }), " — Removes internal padding, allowing the indicator to be used in small elements where space is limited."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Description"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "circular"
        }), " property activates a ring progress indicator that fills around the circumference proportionally to the current value."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "dense"
        }), " removes padding, making the indicator more compact for placement in limited space."]
      }), `
`, e(n.li, {
        children: "Both properties work together to create a flexible and adaptive circular progress indicator."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use ", e(n.code, {
          children: "circular"
        }), " to display progress in compact interfaces or when a central focus is needed."]
      }), `
`, t(n.li, {
        children: ["Apply ", e(n.code, {
          children: "dense"
        }), " in small elements where space-saving is important and padding needs to be removed."]
      }), `
`, e(n.li, {
        children: "Combine properties depending on available space and design requirements."
      }), `
`, e(n.li, {
        children: "Circular progress is particularly effective for displaying process completion."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage Example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Dh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(kt, {
      ...i
    })
  }) : kt(i);
}
function _t(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Круглый прогресс и связанные параметры"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "circular"
      }), " включает режим круглого отображения индикатора прогресса. Для оптимального контроля над внешним видом и поведением круглого прогресса рекомендуется использовать его совместно с дополнительными свойствами стилизации."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "circular"
        }), " — Включает режим круглого отображения прогресса в виде кольцевого индикатора."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "dense"
        }), " — Убирает внутренние отступы, позволяя использовать индикатор в маленьких элементах, где мало места."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Описание"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "circular"
        }), " активирует кольцевой индикатор прогресса, который заполняется по окружности пропорционально текущему значению."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "dense"
        }), " убирает padding, делая индикатор более компактным для размещения в ограниченном пространстве."]
      }), `
`, e(n.li, {
        children: "Оба свойства работают совместно для создания гибкого и адаптивного круглого индикатора прогресса."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Используйте ", e(n.code, {
          children: "circular"
        }), " для отображения прогресса в компактных интерфейсах или когда нужен центральный фокус."]
      }), `
`, t(n.li, {
        children: ["Применяйте ", e(n.code, {
          children: "dense"
        }), " в маленьких элементах, где важна экономия места и нужно убрать отступы."]
      }), `
`, e(n.li, {
        children: "Комбинируйте свойства в зависимости от доступного пространства и требований дизайна."
      }), `
`, e(n.li, {
        children: "Круглый прогресс особенно эффективен для отображения завершенности процессов."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function xh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(_t, {
      ...i
    })
  }) : _t(i);
}
function Xt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Progress Delay Management"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "delay"
      }), " and ", e(n.code, {
        children: "delayHide"
      }), " properties control timing parameters for showing and hiding the progress indicator. These properties allow creating a smoother user experience by avoiding flickers during fast operations."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "delay"
        }), " — Delay before showing the progress indicator in milliseconds. Defaults to 360 ms."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "delayHide"
        }), " — Delay before hiding the progress indicator in milliseconds. Defaults to 200 ms."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use the standard ", e(n.code, {
          children: 'delay="360"'
        }), " value for most cases - it's been proven in practice."]
      }), `
`, t(n.li, {
        children: ["Increase ", e(n.code, {
          children: "delay"
        }), " for rapid operations where the indicator might interfere with perception."]
      }), `
`, t(n.li, {
        children: ["Decrease ", e(n.code, {
          children: "delay"
        }), " for long operations where users need immediate feedback."]
      }), `
`, t(n.li, {
        children: ["Adjust ", e(n.code, {
          children: "delayHide"
        }), " based on context—for critical operations you can increase the value."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage Example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function kh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Xt, {
      ...i
    })
  }) : Xt(i);
}
function $t(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление задержками прогресса"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "delay"
      }), " и ", e(n.code, {
        children: "delayHide"
      }), " контролируют временные параметры появления и скрытия индикатора прогресса. Эти свойства позволяют создавать более плавный пользовательский опыт, избегая мерцаний при быстрых операциях."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "delay"
        }), " — Задержка перед показом индикатора прогресса в миллисекундах. По умолчанию 360 мс."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "delayHide"
        }), " — Задержка перед скрытием индикатора прогресса в миллисекундах. По умолчанию 200 мс."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Используйте стандартное значение ", e(n.code, {
          children: 'delay="360"'
        }), " для большинства случаев - оно проверено на практике."]
      }), `
`, t(n.li, {
        children: ["Увеличивайте ", e(n.code, {
          children: "delay"
        }), " для очень быстрых операций, где индикатор может помешать восприятию."]
      }), `
`, t(n.li, {
        children: ["Уменьшайте ", e(n.code, {
          children: "delay"
        }), " для долгих операций, где пользователю важно видеть немедленную обратную связь."]
      }), `
`, t(n.li, {
        children: ["Настраивайте ", e(n.code, {
          children: "delayHide"
        }), " в зависимости от контекста - для критичных операций можно увеличить значение."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function _h(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e($t, {
      ...i
    })
  }) : $t(i);
}
function Lt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Linear Progress and Related Parameters"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "linear"
      }), " property enables linear progress indicator display mode. For complete control over the behavior and appearance of linear progress, it is recommended to use it together with additional positioning and styling properties."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "linear"
        }), " — Enables linear progress display mode as a horizontal bar."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "position"
        }), " — Defines the position of the linear indicator (", e(n.code, {
          children: "top"
        }), ", ", e(n.code, {
          children: "bottom"
        }), ", ", e(n.code, {
          children: "static"
        }), "). Defaults to ", e(n.code, {
          children: "top"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "point"
        }), " — Adds a point at the end of the progress indicator to emphasize the current position."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Description"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "linear"
        }), " property activates a horizontal progress bar that fills proportionally to the current value."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "position"
        }), " controls the indicator placement: ", e(n.code, {
          children: "top"
        }), " places it at the top of the container, ", e(n.code, {
          children: "bottom"
        }), " at the bottom, ", e(n.code, {
          children: "static"
        }), " in the normal document flows."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "point"
        }), " adds a visual marker at the end of the filled portion, making the current position more noticeable."]
      }), `
`, e(n.li, {
        children: "All properties work together to create a flexible and informative progress indicator."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use ", e(n.code, {
          children: 'position="top"'
        }), " or ", e(n.code, {
          children: 'position="bottom"'
        }), " to overlay progress on top of content."]
      }), `
`, t(n.li, {
        children: ["Apply ", e(n.code, {
          children: 'position="static"'
        }), " when the indicator should take space in the document flow."]
      }), `
`, t(n.li, {
        children: ["Add ", e(n.code, {
          children: "point"
        }), " for better visualization of current progress, especially with small values."]
      }), `
`, e(n.li, {
        children: "Combine properties depending on usage context and interface design."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage Example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Xh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Lt, {
      ...i
    })
  }) : Lt(i);
}
function St(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Линейный прогресс и связанные параметры"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "linear"
      }), " включает режим линейного отображения индикатора прогресса. Для полного контроля над поведением и внешним видом линейного прогресса рекомендуется использовать его совместно с дополнительными свойствами позиционирования и стилизации."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "linear"
        }), " — Включает режим линейного отображения прогресса в виде горизонтальной полосы."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "position"
        }), " — Определяет позицию линейного индикатора (", e(n.code, {
          children: "top"
        }), ", ", e(n.code, {
          children: "bottom"
        }), ", ", e(n.code, {
          children: "static"
        }), "). По умолчанию ", e(n.code, {
          children: "top"
        }), "."]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "point"
        }), " — Добавляет точку в конце индикатора прогресса для акцентирования текущего положения."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Описание"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Свойство ", e(n.code, {
          children: "linear"
        }), " активирует горизонтальную полосу прогресса, которая заполняется пропорционально текущему значению."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "position"
        }), " управляет расположением индикатора: ", e(n.code, {
          children: "top"
        }), " размещает его в верхней части контейнера, ", e(n.code, {
          children: "bottom"
        }), " — в нижней, ", e(n.code, {
          children: "static"
        }), " — в обычном потоке документа."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "point"
        }), " добавляет визуальный маркер на конце заполненной части, делая текущую позицию более заметной."]
      }), `
`, e(n.li, {
        children: "Все свойства работают совместно для создания гибкого и информативного индикатора прогресса."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Используйте ", e(n.code, {
          children: 'position="top"'
        }), " или ", e(n.code, {
          children: 'position="bottom"'
        }), " для наложения прогресса поверх контента."]
      }), `
`, t(n.li, {
        children: ["Применяйте ", e(n.code, {
          children: 'position="static"'
        }), " когда индикатор должен занимать место в потоке документа."]
      }), `
`, t(n.li, {
        children: ["Добавляйте ", e(n.code, {
          children: "point"
        }), " для лучшей визуализации текущего прогресса, особенно при небольших значениях."]
      }), `
`, e(n.li, {
        children: "Комбинируйте свойства в зависимости от контекста использования и дизайна интерфейса."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function $h(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(St, {
      ...i
    })
  }) : St(i);
}
function Tt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Progress Indicator"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "Progress"
      }), " component is designed to display the progress of operations, data loading, or any other processes that require visual representation of completion status."]
    }), `
`, e(n.h3, {
      children: "Key Features"
    }), `
`, e(n.p, {
      children: "The component supports various types of progress-display - linear and circular indicators, as well as point variants for minimal display. It can work with both determinate progress values and indeterminate states for operations with unknown execution time."
    }), `
`, e(n.p, {
      children: "Provides flexible positioning and styling options, including compact and inverted display variants. Supports delay settings for smooth appearance and hiding of the indicator."
    })]
  });
}
function Lh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Tt, {
      ...i
    })
  }) : Tt(i);
}
function Pt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Индикатор прогресса"
    }), `
`, t(n.p, {
      children: ["Компонент ", e(n.code, {
        children: "Progress"
      }), " предназначен для отображения прогресса выполнения операций, загрузки данных или любых других процессов, требующих визуального отображения состояния выполнения."]
    }), `
`, e(n.h3, {
      children: "Основные возможности"
    }), `
`, e(n.p, {
      children: "Компонент поддерживает различные типы отображения прогресса - линейные и круглые индикаторы, а также точечные варианты для минимального отображения. Может работать как с определенными значениями прогресса, так и с неопределенными состояниями для операций с неизвестным временем выполнения."
    }), `
`, e(n.p, {
      children: "Предоставляет гибкие возможности позиционирования и стилизации, включая компактные и инвертированные варианты отображения. Поддерживает настройку задержек для плавного появления и скрытия индикатора."
    })]
  });
}
function Sh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Pt, {
      ...i
    })
  }) : Pt(i);
}
function Ft(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Progress Value Management"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "value"
      }), " and ", e(n.code, {
        children: "max"
      }), " properties work closely together to determine the state of process execution. They establish the current value and upper limit, forming a system for calculating the completion percentage of an operation."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "value"
        }), " — Current progress value. Determines what portion of the process has been completed"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "max"
        }), " — Maximum progress value. Defaults to 100, serves as the reference point for percentage calculations"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Property Relationship"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "value"
      }), " and ", e(n.code, {
        children: "max"
      }), " properties form a mathematical relationship to determine completion percentage: ", e(n.code, {
        children: "(value / max) * 100"
      }), ". This allows flexible adaptation of the component to various tasks and measurement scales."]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Completion percentage is calculated automatically based on the value ratio"
      }), `
`, t(n.li, {
        children: ["The ", e(n.code, {
          children: "value"
        }), " is automatically constrained to the range from 0 to ", e(n.code, {
          children: "max"
        })]
      }), `
`, t(n.li, {
        children: ["When ", e(n.code, {
          children: "max"
        }), " changes, the percentage display is recalculated proportionally"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Features"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Flexible scale"
        }), " — Any numeric values can be used depending on the task"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Automatic normalization"
        }), " — Values are automatically adjusted to the allowable range"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Dynamic updates"
        }), " — Both properties can change in real-time"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Type compatibility"
        }), " — Support numeric values and string representations of numbers"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Use ", e(n.code, {
          children: 'max="100"'
        }), " for percentage display (default value)"]
      }), `
`, t(n.li, {
        children: ["Set ", e(n.code, {
          children: "max"
        }), " equal to the actual number of steps in the process"]
      }), `
`, t(n.li, {
        children: ["Update ", e(n.code, {
          children: "value"
        }), " gradually to create smooth animation"]
      }), `
`, t(n.li, {
        children: ["Avoid zero and negative values for ", e(n.code, {
          children: "max"
        })]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage Examples"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Th(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ft, {
      ...i
    })
  }) : Ft(i);
}
function At(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление значениями прогресса"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "value"
      }), " и ", e(n.code, {
        children: "max"
      }), " работают в тесной связке для определения состояния выполнения процесса. Они устанавливают текущее значение и верхний предел, образуя систему для расчета процента завершения операции."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "value"
        }), " — Текущее значение прогресса. Определяет, какая часть процесса уже выполнена"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "max"
        }), " — Максимальное значение прогресса. По умолчанию равно 100, служит точкой отсчета для расчета процентов"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Взаимосвязь свойств"
    }), `
`, t(n.p, {
      children: ["Свойства ", e(n.code, {
        children: "value"
      }), " и ", e(n.code, {
        children: "max"
      }), " образуют математическое соотношение для определения процента выполнения: ", e(n.code, {
        children: "(value / max) * 100"
      }), ". Это позволяет гибко адаптировать компонент под различные задачи и шкалы измерения."]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Процент выполнения рассчитывается автоматически на основе соотношения значений"
      }), `
`, t(n.li, {
        children: ["Значение ", e(n.code, {
          children: "value"
        }), " автоматически ограничивается диапазоном от 0 до ", e(n.code, {
          children: "max"
        })]
      }), `
`, t(n.li, {
        children: ["При изменении ", e(n.code, {
          children: "max"
        }), " процентное отображение пересчитывается пропорционально"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Особенности"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Гибкая шкала"
        }), " — Можно использовать любые числовые значения в зависимости от задачи"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Автоматическая нормализация"
        }), " — Значения автоматически приводятся к допустимому диапазону"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Динамическое обновление"
        }), " — Оба свойства могут изменяться в реальном времени"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Совместимость типов"
        }), " — Поддерживают числовые значения и строковые представления чисел"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Используйте ", e(n.code, {
          children: 'max="100"'
        }), " для процентного отображения (значение по умолчанию)"]
      }), `
`, t(n.li, {
        children: ["Устанавливайте ", e(n.code, {
          children: "max"
        }), " равным реальному количеству шагов в процессе"]
      }), `
`, t(n.li, {
        children: ["Обновляйте ", e(n.code, {
          children: "value"
        }), " постепенно для создания плавной анимации"]
      }), `
`, t(n.li, {
        children: ["Избегайте нулевых и отрицательных значений для ", e(n.code, {
          children: "max"
        })]
      }), `
`, t(n.li, {
        children: ["При загрузке файлов указывайте в ", e(n.code, {
          children: "max"
        }), " размер файла, а в ", e(n.code, {
          children: "value"
        }), " - количество уже загруженных байт"]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Примеры использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Ph(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(At, {
      ...i
    })
  }) : At(i);
}
const Fh = {
  name: "Progress",
  descriptions: {
    circular: {
      en: Dh,
      ru: xh
    },
    delays: {
      en: kh,
      ru: _h
    },
    linear: {
      en: Xh,
      ru: $h
    },
    progress: {
      en: Lh,
      ru: Sh
    },
    values: {
      en: Th,
      ru: Ph
    }
  }
};
function Nt(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Ripple Wave Effect on Interaction"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "Ripple"
      }), " component creates an animated wave effect when clicking on an element, similar to Material Design ripple effect. This enhances user experience by providing visual feedback during interaction."]
    }), `
`, e(n.h3, {
      children: "How it Works"
    }), `
`, e(n.p, {
      children: "The component automatically tracks click events and creates an animated wave that expands from the touch point. The effect works by:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Detecting click coordinates relative to the element"
      }), `
`, e(n.li, {
        children: "Creating a temporary element with expansion animation"
      }), `
`, e(n.li, {
        children: "Automatically removing the element after animation completion"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Integration"
    }), `
`, t(n.p, {
      children: ["The component should be placed inside an interactive element that needs the ripple effect. The parent element must have ", e(n.code, {
        children: "position: relative"
      }), " for correct effect positioning."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "disabled"
        }), " — Disables the ripple effect when set to ", e(n.code, {
          children: "true"
        })]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Use on buttons, cards, and other interactive elements"
      }), `
`, t(n.li, {
        children: ["Ensure the parent element has ", e(n.code, {
          children: "position: relative"
        })]
      }), `
`, e(n.li, {
        children: "Avoid using on elements that frequently change size"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage Example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Ah(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Nt, {
      ...i
    })
  }) : Nt(i);
}
function It(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Эффект волны при взаимодействии"
    }), `
`, t(n.p, {
      children: ["Компонент ", e(n.code, {
        children: "Ripple"
      }), " создает анимированный эффект волны при клике по элементу, аналогичный эффекту Material Design. Это улучшает пользовательский опыт, предоставляя визуальную обратную связь при взаимодействии."]
    }), `
`, e(n.h3, {
      children: "Принцип работы"
    }), `
`, e(n.p, {
      children: "Компонент автоматически отслеживает события клика и создает анимированную волну, которая расширяется от точки касания. Эффект работает путем:"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Определения координат клика относительно элемента"
      }), `
`, e(n.li, {
        children: "Создания временного элемента с анимацией расширения"
      }), `
`, e(n.li, {
        children: "Автоматического удаления элемента после завершения анимации"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Интеграция"
    }), `
`, t(n.p, {
      children: ["Компонент должен быть размещен внутри интерактивного элемента, к которому нужно добавить эффект волны. Родительский элемент должен иметь ", e(n.code, {
        children: "position: relative"
      }), " для корректного позиционирования эффекта."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "disabled"
        }), " — Отключает эффект волны при установке в ", e(n.code, {
          children: "true"
        })]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Используйте на кнопках, карточках и других интерактивных элементах"
      }), `
`, t(n.li, {
        children: ["Убедитесь, что родительский элемент имеет ", e(n.code, {
          children: "position: relative"
        })]
      }), `
`, e(n.li, {
        children: "Не используйте на элементах, которые часто изменяют размер"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function Nh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(It, {
      ...i
    })
  }) : It(i);
}
const Ih = {
  name: "Ripple",
  descriptions: {
    ripple: {
      en: Ah,
      ru: Nh
    }
  }
};
function Rt(i) {
  const n = {
    h2: "h2",
    p: "p",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Description"
    }), `
`, e(n.p, {
      children: "Component for customizing scrollbar appearance and adding divider lines."
    })]
  });
}
function Rh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Rt, {
      ...i
    })
  }) : Rt(i);
}
function Bt(i) {
  const n = {
    h2: "h2",
    p: "p",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Описание"
    }), `
`, e(n.p, {
      children: "Компонент для кастомизации внешнего вида скроллбара и добавления разделительных линий."
    })]
  });
}
function Bh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Bt, {
      ...i
    })
  }) : Bt(i);
}
function Et(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "bottom"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll position reaches or leaves the bottom boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onBottom (isBottom: boolean) {
    // handle reaching/leaving bottom boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isBottom"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true if scroll is at the bottom position, false if it left the bottom position"]
      }), `
`]
    })]
  });
}
function Eh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Et, {
      ...i
    })
  }) : Et(i);
}
function Ut(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "bottom"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при изменении состояния достижения нижней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onBottom (isBottom: boolean) {
    // обработка события достижения/покидания нижней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isBottom"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в нижней позиции, false - если покинул нижнюю позицию"]
      }), `
`]
    })]
  });
}
function Uh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ut, {
      ...i
    })
  }) : Ut(i);
}
function Ht(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "edge"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll boundary state changes (top or bottom)."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onEdge (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) {
    // handle scroll boundary change event
}
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isTop"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true if scroll is at the top position"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "isBottom"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true if scroll is at the bottom position"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "edge"
        }), " - ", e(n.code, {
          children: "ScrollbarEdgeType"
        }), " - current scroll boundary type"]
      }), `
`]
    })]
  });
}
function Hh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ht, {
      ...i
    })
  }) : Ht(i);
}
function Wt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "edge"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при изменении состояния границ скролла (верхней или нижней)."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onEdge (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) {
    // обработка события изменения границ скролла
}
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isTop"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в верхней позиции"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "isBottom"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в нижней позиции"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "edge"
        }), " - ", e(n.code, {
          children: "ScrollbarEdgeType"
        }), " - тип текущей границы скролла"]
      }), `
`]
    })]
  });
}
function Wh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Wt, {
      ...i
    })
  }) : Wt(i);
}
function Vt(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "leaveBottom"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when leaving the bottom boundary of the scroll."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onLeaveBottom () {
    // handle leaving bottom boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "This event only fires at the moment when scrolling starts upward from the very bottom of the content."
    })]
  });
}
function Vh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Vt, {
      ...i
    })
  }) : Vt(i);
}
function qt(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "leaveBottom"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при покидании нижней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onLeaveBottom () {
    // обработка события покидания нижней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Это событие срабатывает только в момент начала прокрутки от самого низа контента вверх."
    })]
  });
}
function qh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(qt, {
      ...i
    })
  }) : qt(i);
}
function zt(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "leaveTop"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when leaving the top boundary of the scroll."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onLeaveTop () {
    // handle leaving top boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "This event only fires at the moment when scrolling starts from the very top of the content."
    })]
  });
}
function zh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(zt, {
      ...i
    })
  }) : zt(i);
}
function Ot(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "leaveTop"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при покидании верхней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onLeaveTop () {
    // обработка события покидания верхней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Это событие срабатывает только в момент начала прокрутки от самого верха контента."
    })]
  });
}
function Oh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Ot, {
      ...i
    })
  }) : Ot(i);
}
function jt(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "reachBottom"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll reaches the bottom boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onReachBottom () {
    // handle reaching bottom boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "This event only fires at the moment when the very bottom of the content is reached."
    })]
  });
}
function jh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(jt, {
      ...i
    })
  }) : jt(i);
}
function Yt(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "reachBottom"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при достижении нижней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onReachBottom () {
    // обработка события достижения нижней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Это событие срабатывает только в момент достижения самого низа контента."
    })]
  });
}
function Yh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Yt, {
      ...i
    })
  }) : Yt(i);
}
function Gt(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "reachTop"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll reaches the top boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onReachTop () {
    // handle reaching top boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "This event only fires at the moment when the very top of the content is reached."
    })]
  });
}
function Gh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Gt, {
      ...i
    })
  }) : Gt(i);
}
function Kt(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "reachTop"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при достижении верхней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onReachTop () {
    // обработка события достижения верхней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Это событие срабатывает только в момент достижения самого верха контента."
    })]
  });
}
function Kh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Kt, {
      ...i
    })
  }) : Kt(i);
}
function Jt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "top"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the scroll position reaches or leaves the top boundary."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onTop (isTop: boolean) {
    // handle reaching/leaving top boundary event
}
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isTop"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true if scroll is at the top position, false if it left the top position"]
      }), `
`]
    })]
  });
}
function Jh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Jt, {
      ...i
    })
  }) : Jt(i);
}
function Zt(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "top"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при изменении состояния достижения верхней границы скролла."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onTop (isTop: boolean) {
    // обработка события достижения/покидания верхней границы
}
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "isTop"
        }), " - ", e(n.code, {
          children: "boolean"
        }), " - true, если скролл находится в верхней позиции, false - если покинул верхнюю позицию"]
      }), `
`]
    })]
  });
}
function Zh(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Zt, {
      ...i
    })
  }) : Zt(i);
}
const Qh = {
  name: "Scrollbar",
  descriptions: {
    scrollbar: {
      en: Rh,
      ru: Bh
    },
    "event.top": {
      en: Jh,
      ru: Zh
    },
    "event.reachTop": {
      en: Gh,
      ru: Kh
    },
    "event.leaveTop": {
      en: zh,
      ru: Oh
    },
    "event.bottom": {
      en: Eh,
      ru: Uh
    },
    "event.reachBottom": {
      en: jh,
      ru: Yh
    },
    "event.leaveBottom": {
      en: Vh,
      ru: qh
    },
    "event.edge": {
      en: Hh,
      ru: Wh
    }
  }
};
function Qt(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Skeleton State Management"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "Skeleton"
      }), " component is used to display placeholders during content loading. The ", e(n.code, {
        children: "active"
      }), " property controls the visibility of all child elements within the component."]
    }), `
`, e(n.h3, {
      children: "Properties"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "active"
        }), " — Boolean property that activates skeleton mode and controls the visibility of child elements."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "How it works"
    }), `
`, t(n.p, {
      children: ["When ", e(n.code, {
        children: "active"
      }), " is set to ", e(n.code, {
        children: "true"
      }), ", the Skeleton component hides all its child elements, ", e(n.strong, {
        children: "except"
      }), ":"]
    }), `
`, t(n.ol, {
      children: [`
`, t(n.li, {
        children: [`
`, e(n.p, {
          children: e(n.strong, {
            children: "Elements with special skeleton CSS classes:"
          })
        }), `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__text"
            }), " — for text placeholders"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__textVariant"
            }), " — alternative variant of text placeholders"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__background"
            }), " — for background placeholders"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__backgroundAfter"
            }), " — background placeholder via ::after pseudo-element"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__backgroundBefore"
            }), " — background placeholder via ::before pseudo-element"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__backgroundVariant"
            }), " — alternative variant of background placeholders"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__border"
            }), " — for border placeholders"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__borderVariant"
            }), " — alternative variant of border placeholders"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__none"
            }), " — elements that are always hidden in skeleton mode (even if they have other special classes)"]
          }), `
`]
        }), `
`]
      }), `
`, t(n.li, {
        children: [`
`, e(n.p, {
          children: t(n.strong, {
            children: ["Components with ", e(n.code, {
              children: "isSkeleton=true"
            }), " property"]
          })
        }), `
`]
      }), `
`]
    }), `
`, t(n.p, {
      children: ["When ", e(n.code, {
        children: "active"
      }), " is set to ", e(n.code, {
        children: "false"
      }), ", all child elements are displayed in normal mode."]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Use the component to improve user experience during data loading"
      }), `
`, e(n.li, {
        children: "Apply special skeleton classes to elements that should display as placeholders"
      }), `
`, e(n.li, {
        children: "Place placeholders where real content will appear"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Usage example"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function na(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Qt, {
      ...i
    })
  }) : Qt(i);
}
function nr(i) {
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
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Управление состоянием скелетона"
    }), `
`, t(n.p, {
      children: ["Компонент ", e(n.code, {
        children: "Skeleton"
      }), " используется для отображения заглушки во время загрузки контента. Свойство ", e(n.code, {
        children: "active"
      }), " управляет видимостью всех дочерних элементов компонента."]
    }), `
`, e(n.h3, {
      children: "Свойства"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "active"
        }), " — Булево свойство, которое активирует режим скелетона и управляет видимостью дочерних элементов."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Принцип работы"
    }), `
`, t(n.p, {
      children: ["Когда ", e(n.code, {
        children: "active"
      }), " установлено в ", e(n.code, {
        children: "true"
      }), ", компонент Skeleton скрывает все свои дочерние элементы, ", e(n.strong, {
        children: "кроме"
      }), ":"]
    }), `
`, t(n.ol, {
      children: [`
`, t(n.li, {
        children: [`
`, e(n.p, {
          children: e(n.strong, {
            children: "Элементов со специальными CSS-классами скелетона:"
          })
        }), `
`, t(n.ul, {
          children: [`
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__text"
            }), " — для текстовых заглушек"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__textVariant"
            }), " — альтернативный вариант текстовых заглушек"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__background"
            }), " — для фоновых заглушек"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__backgroundAfter"
            }), " — фоновая заглушка через псевдоэлемент::after"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__backgroundBefore"
            }), " — фоновая заглушка через псевдоэлемент::before"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__backgroundVariant"
            }), " — альтернативный вариант фоновых заглушек"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__border"
            }), " — для границ заглушек"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__borderVariant"
            }), " — альтернативный вариант границ заглушек"]
          }), `
`, t(n.li, {
            children: [e(n.code, {
              children: "skeleton__none"
            }), " — элементы, которые всегда скрыты в режиме скелетона (даже если у них есть другие специальные классы)"]
          }), `
`]
        }), `
`]
      }), `
`, t(n.li, {
        children: [`
`, e(n.p, {
          children: t(n.strong, {
            children: ["Компонентов со свойством ", e(n.code, {
              children: "isSkeleton=true"
            })]
          })
        }), `
`]
      }), `
`]
    }), `
`, t(n.p, {
      children: ["Когда ", e(n.code, {
        children: "active"
      }), " установлено в ", e(n.code, {
        children: "false"
      }), ", все дочерние элементы отображаются в обычном режиме."]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Используйте компонент для улучшения пользовательского опыта во время загрузки данных"
      }), `
`, e(n.li, {
        children: "Применяйте специальные классы скелетона к элементам, которые должны отображаться как заглушки"
      }), `
`, e(n.li, {
        children: "Размещайте заглушки в местах, где будет появляться реальный контент"
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Пример использования"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function ea(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(nr, {
      ...i
    })
  }) : nr(i);
}
function er(i) {
  const n = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "isActive"
      })
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "Skeleton"
      }), " component exports a computed property ", e(n.code, {
        children: "isActive"
      }), " that provides access to the current activation state of the skeleton."]
    }), `
`, e(n.h4, {
      children: "Description"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "isActive"
        }), " — A computed property of type ", e(n.code, {
          children: "ComputedRef<boolean>"
        }), " that reflects the current state of the component's ", e(n.code, {
          children: "active"
        }), " property."]
      }), `
`]
    }), `
`, e(n.h4, {
      children: "Purpose"
    }), `
`, t(n.p, {
      children: ["The exported ", e(n.code, {
        children: "isActive"
      }), " value provides external access to the skeleton's activation state. This is useful for:"]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Synchronizing state with parent components"
      }), `
`, e(n.li, {
        children: "Creating dependent computations in the parent component"
      }), `
`, e(n.li, {
        children: "Programmatically controlling behavior of other elements based on skeleton state"
      }), `
`]
    }), `
`, e(n.h4, {
      children: "Usage"
    }), `
`, e(n.p, {
      children: "Access the exported value through a template reference:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function ia(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(er, {
      ...i
    })
  }) : er(i);
}
function ir(i) {
  const n = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "isActive"
      })
    }), `
`, t(n.p, {
      children: ["Компонент ", e(n.code, {
        children: "Skeleton"
      }), " экспортирует вычисляемое свойство ", e(n.code, {
        children: "isActive"
      }), ", которое позволяет получить текущее состояние активности скелетона."]
    }), `
`, e(n.h4, {
      children: "Описание"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "isActive"
        }), " — Вычисляемое свойство типа ", e(n.code, {
          children: "ComputedRef<boolean>"
        }), ", которое отражает текущее состояние свойства ", e(n.code, {
          children: "active"
        }), " компонента."]
      }), `
`]
    }), `
`, e(n.h4, {
      children: "Назначение"
    }), `
`, t(n.p, {
      children: ["Экспортируемое значение ", e(n.code, {
        children: "isActive"
      }), " предоставляет доступ к состоянию активности скелетона извне компонента. Это полезно для:"]
    }), `
`, t(n.ul, {
      children: [`
`, e(n.li, {
        children: "Синхронизации состояния с родительскими компонентами"
      }), `
`, e(n.li, {
        children: "Создания зависимых вычислений в родительском компоненте"
      }), `
`, e(n.li, {
        children: "Программного контроля поведения других элементов в зависимости от состояния скелетона"
      }), `
`]
    }), `
`, e(n.h4, {
      children: "Использование"
    }), `
`, e(n.p, {
      children: "Получить доступ к экспортируемому значению можно через шаблонную ссылку:"
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function ta(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ir, {
      ...i
    })
  }) : ir(i);
}
const ra = {
  name: "Skeleton",
  descriptions: {
    active: {
      en: na,
      ru: ea
    },
    "expose.isActive": {
      en: ia,
      ru: ta
    }
  }
};
function tr(i) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Positioning direction"
    }), `
`, t(n.p, {
      children: ["The ", e(n.code, {
        children: "axis"
      }), " property defines the primary guide for placing the window relative to the anchor element (", e(n.code, {
        children: "overElement"
      }), `) or the invocation area.
Default value: `, e(n.code, {
        children: "y"
      }), "."]
    }), `
`, t(n.blockquote, {
      children: [`
`, t(n.p, {
        children: ["Works only in menu mode (", e(n.code, {
          children: 'adaptive="menu"'
        }), ")."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Values"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "x"
        }), " — Horizontal: places the window to the left or right of the anchor/cursor. The ", e(n.code, {
          children: "indent"
        }), " is applied horizontally."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "y"
        }), " — Vertical: places the window above or below the anchor/cursor. The ", e(n.code, {
          children: "indent"
        }), " is applied vertically."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "on"
        }), " — Over element: overlays the selected element/area and aligns to its center. When needed, internal scrolling adapts to keep the selected element visible."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Behavior"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Automatic side selection (left/right for ", e(n.code, {
          children: "x"
        }), ", top/bottom for ", e(n.code, {
          children: "y"
        }), ") based on available space. If space is limited on both sides, the window is centered in the available area."]
      }), `
`, e(n.li, {
        children: "Along the perpendicular direction the window fits into the viewport to avoid overflow."
      }), `
`, t(n.li, {
        children: ["Context menu mode (", e(n.code, {
          children: "contextmenu = true"
        }), ") uses cursor coordinates instead of the anchor’s bounding box."]
      }), `
`, e(n.li, {
        children: "Respects viewport constraints and container paddings."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Recommendations"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "x"
        }), " — side menus, tooltips, and panels next to an element."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "y"
        }), " — dropdowns, menus, and hints opening above/below."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "on"
        }), " — popovers that overlay and focus a specific element in the content."]
      }), `
`]
    })]
  });
}
function ca(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(tr, {
      ...i
    })
  }) : tr(i);
}
function rr(i) {
  const n = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Направление позиционирования"
    }), `
`, t(n.p, {
      children: ["Свойство ", e(n.code, {
        children: "axis"
      }), " управляет основной направляющей для размещения окна относительно элемента‑якоря (", e(n.code, {
        children: "overElement"
      }), `) или области вызова.
Значение по умолчанию: `, e(n.code, {
        children: "y"
      }), "."]
    }), `
`, t(n.blockquote, {
      children: [`
`, t(n.p, {
        children: ["Работает только в режиме меню (", e(n.code, {
          children: 'adaptive="menu"'
        }), ")."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Значения"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "x"
        }), " — Горизонтально: окно располагается слева или справа от якоря/курсора. Отступ ", e(n.code, {
          children: "indent"
        }), " применяется по горизонтали."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "y"
        }), " — Вертикально: окно располагается сверху или снизу от якоря/курсора. Отступ ", e(n.code, {
          children: "indent"
        }), " применяется по вертикали."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "on"
        }), " — Поверх элемента: окно перекрывает выбранный элемент/область и ориентируется по его центру. При необходимости прокрутка содержимого подстраивается, чтобы выбранный элемент оставался видимым."]
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Поведение"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Автовыбор стороны (слева/справа для ", e(n.code, {
          children: "x"
        }), ", сверху/снизу для ", e(n.code, {
          children: "y"
        }), ") в зависимости от доступного пространства. При нехватке места окно центрируется в доступной области."]
      }), `
`, e(n.li, {
        children: "По перпендикулярному направлению окно вписывается во вьюпорт и не выходит за его пределы."
      }), `
`, t(n.li, {
        children: ["Режим контекстного меню (", e(n.code, {
          children: "contextmenu = true"
        }), ") использует координаты курсора вместо прямоугольника якоря."]
      }), `
`, e(n.li, {
        children: "Учитываются ограничения вьюпорта и внутренние отступы контейнера."
      }), `
`]
    }), `
`, e(n.h3, {
      children: "Рекомендации"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "x"
        }), " — боковые меню, панели рядом с элементом, тултипы по бокам."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "y"
        }), " — выпадающие списки, меню и подсказки сверху/снизу."]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "on"
        }), " — поповеры, перекрывающие и фокусирующие конкретный элемент."]
      }), `
`]
    })]
  });
}
function la(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(rr, {
      ...i
    })
  }) : rr(i);
}
function cr(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "CSS Classes for Behavior Control"
    }), `
`, e(n.p, {
      children: "The Window component uses a system of helper CSS classes to manage various window states and behaviors."
    }), `
`, e(n.h3, {
      children: "Blocking Classes"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--block"
        })
      }), ` - Class prevents the window from closing when clicking outside its boundaries.
Can be added to any element that is outside the current window.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--blockChildren"
        })
      }), ` - Class prevents the current window from closing.
Can be added to any element that is inside the current window.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--blockOther"
        })
      }), ` - Class prevents other windows from closing until the current one is closed.
Can be added to any element that is inside the current window.`]
    }), `
`, e(n.h3, {
      children: "Control Classes"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--close"
        })
      }), ` - Class applies to elements for closing the window (e.g., close button).
Can be added to any close control element.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--controlOpenOnly"
        })
      }), ` - Class applies to control elements that only open the window and never close it.
Can be added to any open control element.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--controlStatic"
        })
      }), ` - Class applies to control elements in static mode, preventing any actions.
Can be added to any control element that should remain static.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--static"
        })
      }), ` - Class applies to elements inside the window, canceling all actions.
Can be added to any element within the window.`]
    })]
  });
}
function oa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(cr, {
      ...i
    })
  }) : cr(i);
}
function lr(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "CSS классы для управления поведением"
    }), `
`, e(n.p, {
      children: "Компонент Window использует систему вспомогательных CSS классов для управления различными состояниями и поведением окна."
    }), `
`, e(n.h3, {
      children: "Классы блокировки"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--block"
        })
      }), ` - Класс предотвращает закрытие окна при клике за его пределами.
Класс можно добавить к любому элементу, который находится за пределами текущего окна.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--blockChildren"
        })
      }), ` - Класс предотвращает закрытие текущего окна.
Класс можно добавить к любому элементу, который находится внутри текущего окна.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--blockOther"
        })
      }), ` - Класс предотвращает закрытие других окон, пока не закрыто текущее.
Класс можно добавить к любому элементу, который находится внутри текущего окна.`]
    }), `
`, e(n.h3, {
      children: "Классы управления"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--close"
        })
      }), ` - Класс применяется к элементам для закрытия окна.
Класс можно добавить к любому элементу управления закрытием окна (например, кнопке закрытия).`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--controlOpenOnly"
        })
      }), ` - Класс применяется к элементам управления, которые только открывают окно и не закрывают его.
Класс можно добавить к любому элементу, отвечающему за открытие окна.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--controlStatic"
        })
      }), ` - Класс применяется к элементам управления в статическом режиме, предотвращая любые действия.
Класс можно добавить к любому элементу управления, который должен оставаться статическим.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "*--static"
        })
      }), ` - Класс применяется к элементам внутри окна, отменяя все действия.
Класс можно добавить к любому элементу внутри окна.`]
    })]
  });
}
function da(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(lr, {
      ...i
    })
  }) : lr(i);
}
function or(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "window"
      })
    }), `
`, e(n.p, {
      children: "Event that triggers when the window state changes (open/close)."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onWindow (options: WindowEmitOptions) {
    // handle window state change
}
`
      })
    }), `
`, e(n.p, {
      children: "Parameters:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "options"
        }), " — ", e(n.code, {
          children: "WindowEmitOptions"
        }), " — window data: id, elements, and the ", e(n.code, {
          children: "open"
        }), " flag"]
      }), `
`]
    })]
  });
}
function ha(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(or, {
      ...i
    })
  }) : or(i);
}
function dr(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "window"
      })
    }), `
`, e(n.p, {
      children: "Событие, которое срабатывает при изменении состояния окна (открытие/закрытие)."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function onWindow (options: WindowEmitOptions) {
    // обработка изменения состояния окна
}
`
      })
    }), `
`, e(n.p, {
      children: "Параметры:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "options"
        }), " — ", e(n.code, {
          children: "WindowEmitOptions"
        }), " — данные окна: id, элементы и флаг ", e(n.code, {
          children: "open"
        })]
      }), `
`]
    })]
  });
}
function aa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(dr, {
      ...i
    })
  }) : dr(i);
}
function hr(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "control"
      })
    }), `
`, e(n.p, {
      children: "Control item data for window management."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `const control: WindowControlItem
`
      })
    }), `
`, e(n.p, {
      children: "Structure:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "class"
        }), " — ", e(n.code, {
          children: "string"
        }), " — CSS class for the trigger element"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "open"
        }), " — ", e(n.code, {
          children: "Ref<boolean>"
        }), " — reactive open state of the window"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "onclick"
        }), " — ", e(n.code, {
          children: "WindowEventClick"
        }), " — click handler for the control"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "oncontextmenu"
        }), " — ", e(n.code, {
          children: "WindowEventClick"
        }), " — context‑menu handler for the control"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "classesWindow"
        }), " — ", e(n.code, {
          children: "WindowClassesList"
        }), " — set of window CSS classes"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "binds"
        }), " — ", e(n.code, {
          children: "{ class: string; onclick: WindowEventClick; oncontextmenu: WindowEventClick }"
        }), " — ready‑to‑use bindings for ", e(n.code, {
          children: "v-bind"
        })]
      }), `
`]
    })]
  });
}
function sa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(hr, {
      ...i
    })
  }) : hr(i);
}
function ar(i) {
  const n = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "control"
      })
    }), `
`, e(n.p, {
      children: "Данные элемента управления для управления окном."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `const control: WindowControlItem
`
      })
    }), `
`, e(n.p, {
      children: "Состав:"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "class"
        }), " — ", e(n.code, {
          children: "string"
        }), " — CSS‑класс для элемента‑триггера"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "open"
        }), " — ", e(n.code, {
          children: "Ref<boolean>"
        }), " — реактивное состояние открытия окна"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "onclick"
        }), " — ", e(n.code, {
          children: "WindowEventClick"
        }), " — обработчик клика по контролу"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "oncontextmenu"
        }), " — ", e(n.code, {
          children: "WindowEventClick"
        }), " — обработчик контекстного меню по контролу"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "classesWindow"
        }), " — ", e(n.code, {
          children: "WindowClassesList"
        }), " — набор CSS‑классов окна"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "binds"
        }), " — ", e(n.code, {
          children: "{ class: string; onclick: WindowEventClick; oncontextmenu: WindowEventClick }"
        }), " — готовые биндинги для ", e(n.code, {
          children: "v-bind"
        })]
      }), `
`]
    })]
  });
}
function ua(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ar, {
      ...i
    })
  }) : ar(i);
}
function sr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "id"
      })
    }), `
`, e(n.p, {
      children: "Unique window identifier."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `const id: string
`
      })
    })]
  });
}
function pa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(sr, {
      ...i
    })
  }) : sr(i);
}
function ur(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "id"
      })
    }), `
`, e(n.p, {
      children: "Уникальный идентификатор окна."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `const id: string
`
      })
    })]
  });
}
function ma(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(ur, {
      ...i
    })
  }) : ur(i);
}
function pr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "open"
      })
    }), `
`, e(n.p, {
      children: "Reactive window visibility state."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `const open: Ref<boolean>
`
      })
    })]
  });
}
function ga(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(pr, {
      ...i
    })
  }) : pr(i);
}
function mr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "open"
      })
    }), `
`, e(n.p, {
      children: "Реактивное состояние видимости окна."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `const open: Ref<boolean>
`
      })
    })]
  });
}
function fa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(mr, {
      ...i
    })
  }) : mr(i);
}
function gr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "setOpen"
      })
    }), `
`, e(n.p, {
      children: "Sets the window open state."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function setOpen(open: boolean): Promise<void>
`
      })
    })]
  });
}
function ya(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(gr, {
      ...i
    })
  }) : gr(i);
}
function fr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "setOpen"
      })
    }), `
`, e(n.p, {
      children: "Устанавливает состояние открытия окна."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function setOpen(open: boolean): Promise<void>
`
      })
    })]
  });
}
function ba(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(fr, {
      ...i
    })
  }) : fr(i);
}
function yr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "toClose"
      })
    }), `
`, e(n.p, {
      children: "Transition to closing state."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `function toClose(): Promise<void>
`
      })
    })]
  });
}
function va(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(yr, {
      ...i
    })
  }) : yr(i);
}
function br(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "toClose"
      })
    }), `
`, e(n.p, {
      children: "Переход в состояние закрытия."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `function toClose(): Promise<void>
`
      })
    })]
  });
}
function Ma(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(br, {
      ...i
    })
  }) : br(i);
}
function vr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "toOpen"
      })
    }), `
`, e(n.p, {
      children: "Transition to opening state."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `function toOpen(): Promise<void>
`
      })
    })]
  });
}
function wa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(vr, {
      ...i
    })
  }) : vr(i);
}
function Mr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "toOpen"
      })
    }), `
`, e(n.p, {
      children: "Переход в состояние открытия."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        children: `function toOpen(): Promise<void>
`
      })
    })]
  });
}
function Ca(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Mr, {
      ...i
    })
  }) : Mr(i);
}
function wr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "toggle"
      })
    }), `
`, e(n.p, {
      children: "Toggles the window visibility."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function toggle(): Promise<void>
`
      })
    })]
  });
}
function Da(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(wr, {
      ...i
    })
  }) : wr(i);
}
function Cr(i) {
  const n = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...i.components
  };
  return t(r, {
    children: [e(n.h3, {
      children: e(n.code, {
        children: "toggle"
      })
    }), `
`, e(n.p, {
      children: "Переключает видимость окна."
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-ts",
        children: `function toggle(): Promise<void>
`
      })
    })]
  });
}
function xa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Cr, {
      ...i
    })
  }) : Cr(i);
}
function Dr(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Lifecycle Hooks"
    }), `
`, e(n.p, {
      children: "The Window component provides a lifecycle hooks system for managing various stages of the window lifecycle."
    }), `
`, e(n.h3, {
      children: "Opening Hooks"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "preparation"
        })
      }), ` - Called during the window preparation phase before opening.
Allows executing preliminary setup and data initialization.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "beforeOpening"
        })
      }), ` - Called immediately before the window opening process begins.
Returning `, e(n.code, {
        children: "false"
      }), " prevents the window from opening."]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "opening"
        })
      }), ` - Called during the window opening process while animation is running.
Returning `, e(n.code, {
        children: "false"
      }), " interrupts the window opening process."]
    }), `
`, e(n.h3, {
      children: "Closing Hooks"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "beforeClosing"
        })
      }), ` - Called immediately before the window closing process begins.
Returning `, e(n.code, {
        children: "false"
      }), " prevents the window from closing."]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "closing"
        })
      }), ` - Called during the window closing process while animation is running.
Returning `, e(n.code, {
        children: "false"
      }), " interrupts the window closing process."]
    }), `
`, e(n.h3, {
      children: "Usage"
    }), `
`, t(n.p, {
      children: ["All hooks are asynchronous functions and can return ", e(n.code, {
        children: "Promise<boolean>"
      }), " or ", e(n.code, {
        children: "boolean"
      }), ". Returning ", e(n.code, {
        children: "false"
      }), " stops the execution of the corresponding action."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function ka(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Dr, {
      ...i
    })
  }) : Dr(i);
}
function xr(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Lifecycle хуки"
    }), `
`, e(n.p, {
      children: "Компонент Window предоставляет систему lifecycle-хуков для управления различными этапами жизненного цикла окна."
    }), `
`, e(n.h3, {
      children: "Хуки открытия"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "preparation"
        })
      }), ` - Вызывается на этапе подготовки окна перед открытием.
Позволяет выполнить предварительные настройки и инициализацию данных.`]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "beforeOpening"
        })
      }), ` - Вызывается непосредственно перед началом процесса открытия окна.
Возврат `, e(n.code, {
        children: "false"
      }), " предотвращает открытие окна."]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "opening"
        })
      }), ` - Вызывается в процессе открытия окна во время анимации.
Возврат `, e(n.code, {
        children: "false"
      }), " прерывает процесс открытия окна."]
    }), `
`, e(n.h3, {
      children: "Хуки закрытия"
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "beforeClosing"
        })
      }), ` - Вызывается непосредственно перед началом процесса закрытия окна.
Возврат `, e(n.code, {
        children: "false"
      }), " предотвращает закрытие окна."]
    }), `
`, t(n.p, {
      children: [e(n.strong, {
        children: e(n.code, {
          children: "closing"
        })
      }), ` - Вызывается в процессе закрытия окна во время анимации.
Возврат `, e(n.code, {
        children: "false"
      }), " прерывает процесс закрытия окна."]
    }), `
`, e(n.h3, {
      children: "Использование"
    }), `
`, t(n.p, {
      children: ["Все хуки являются асинхронными функциями и могут возвращать ", e(n.code, {
        children: "Promise<boolean>"
      }), " или ", e(n.code, {
        children: "boolean"
      }), ". Возврат ", e(n.code, {
        children: "false"
      }), " останавливает выполнение соответствующего действия."]
    }), `
`, e(n.pre, {
      children: e(n.code, {
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
function _a(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(xr, {
      ...i
    })
  }) : xr(i);
}
function kr(i) {
  const n = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Static Mode (staticMode)"
    }), `
`, t(n.p, {
      children: ["The Window component supports static mode operation through the ", e(n.code, {
        children: "staticMode"
      }), " property. In this mode, the window works as an embedded component without modal behavior:"]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Content displays immediately"
        }), " - window is not hidden and doesn't require activation"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Animations disabled"
        }), " - no appearance/disappearance effects"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Positioning disabled"
        }), " - window is embedded in document flow"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Works with adaptive"
        }), " - when ", e(n.code, {
          children: "adaptive"
        }), " property has one of static mode values (for example, ", e(n.code, {
          children: "static"
        }), "), static mode is enabled"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Static mode is especially useful for embedding window content directly into the interface without modal behavior."
    })]
  });
}
function Xa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(kr, {
      ...i
    })
  }) : kr(i);
}
function _r(i) {
  const n = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Статический режим (staticMode)"
    }), `
`, t(n.p, {
      children: ["Компонент Window поддерживает статический режим работы через свойство ", e(n.code, {
        children: "staticMode"
      }), ". В этом режиме окно работает как встроенный компонент без модального поведения:"]
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.strong, {
          children: "Содержимое отображается сразу"
        }), " - окно не скрывается и не требует активации"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Отключены анимации"
        }), " - нет эффектов появления/исчезновения"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Отключено позиционирование"
        }), " - окно встраивается в поток документа"]
      }), `
`, t(n.li, {
        children: [e(n.strong, {
          children: "Работает с adaptive"
        }), " - когда свойство ", e(n.code, {
          children: "adaptive"
        }), " имеет один из статичных режимов (например, ", e(n.code, {
          children: "static"
        }), "), включается статичный режим"]
      }), `
`]
    }), `
`, e(n.p, {
      children: "Статический режим особенно полезен для встраивания содержимого окна непосредственно в интерфейс без модального поведения."
    })]
  });
}
function $a(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(_r, {
      ...i
    })
  }) : _r(i);
}
function Xr(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Two-way binding (v-model)"
    }), `
`, t(n.p, {
      children: ["The Window component supports two-way binding of the open state via the ", e(n.code, {
        children: "v-model"
      }), " directive."]
    }), `
`, e(n.h3, {
      children: "Props and events"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "open: boolean"
        }), " — window visibility state"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "update:open(boolean)"
        }), " — update event emitted when the state changes"]
      }), `
`]
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-html",
        children: `<Window v-model:open="isOpen"/>
`
      })
    }), `
`, e(n.h3, {
      children: "Notes"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Programmatic control remains available via expose methods (", e(n.code, {
          children: "open"
        }), "/", e(n.code, {
          children: "toggle"
        }), "/", e(n.code, {
          children: "setOpen"
        }), ") and corresponding events."]
      }), `
`, t(n.li, {
        children: ["If you need a static, always-mounted window (that ignores v-model), see the ", e(n.code, {
          children: "staticMode"
        }), " section."]
      }), `
`]
    })]
  });
}
function La(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Xr, {
      ...i
    })
  }) : Xr(i);
}
function $r(i) {
  const n = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...i.components
  };
  return t(r, {
    children: [e(n.h2, {
      children: "Двусторонняя привязка (v-model)"
    }), `
`, t(n.p, {
      children: ["Компонент Window поддерживает двустороннюю привязку состояния открытия через директиву ", e(n.code, {
        children: "v-model"
      }), "."]
    }), `
`, e(n.h3, {
      children: "Свойства и события"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: [e(n.code, {
          children: "open: boolean"
        }), " — состояние видимости окна"]
      }), `
`, t(n.li, {
        children: [e(n.code, {
          children: "update:open(boolean)"
        }), " — событие обновления при изменении состояния"]
      }), `
`]
    }), `
`, e(n.pre, {
      children: e(n.code, {
        className: "language-html",
        children: `<Window v-model:open="isOpen"/>
`
      })
    }), `
`, e(n.h3, {
      children: "Заметки"
    }), `
`, t(n.ul, {
      children: [`
`, t(n.li, {
        children: ["Можно программно управлять окном через expose‑методы (", e(n.code, {
          children: "open"
        }), "/", e(n.code, {
          children: "toggle"
        }), "/", e(n.code, {
          children: "setOpen"
        }), ") и соответствующие события"]
      }), `
`, t(n.li, {
        children: ["Если нужно статически смонтированное окно (игнорирующее v-model), см. раздел ", e(n.code, {
          children: "staticMode"
        })]
      }), `
`]
    })]
  });
}
function Sa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e($r, {
      ...i
    })
  }) : $r(i);
}
function Lr(i) {
  const n = {
    p: "p",
    ...i.components
  };
  return e(n.p, {
    children: "The Window component is a universal modal window for displaying content over the main interface. It supports various positioning types, adaptive behavior, opening/closing animations, and integration with other design system components."
  });
}
function Ta(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Lr, {
      ...i
    })
  }) : Lr(i);
}
function Sr(i) {
  const n = {
    p: "p",
    ...i.components
  };
  return e(n.p, {
    children: "Компонент Window представляет собой универсальное модальное окно для отображения контента поверх основного интерфейса. Он поддерживает различные типы позиционирования, адаптивное поведение, анимации открытия/закрытия и интеграцию с другими компонентами системы дизайна."
  });
}
function Pa(i = {}) {
  const { wrapper: n } = i.components || {};
  return n ? e(n, {
    ...i,
    children: e(Sr, {
      ...i
    })
  }) : Sr(i);
}
const Fa = {
  name: "Window",
  descriptions: {
    axis: {
      en: ca,
      ru: la
    },
    classes: {
      en: oa,
      ru: da
    },
    "event.window": {
      en: ha,
      ru: aa
    },
    "expose.control": {
      en: sa,
      ru: ua
    },
    "expose.id": {
      en: pa,
      ru: ma
    },
    "expose.open": {
      en: ga,
      ru: fa
    },
    "expose.setOpen": {
      en: ya,
      ru: ba
    },
    "expose.toClose": {
      en: va,
      ru: Ma
    },
    "expose.toOpen": {
      en: wa,
      ru: Ca
    },
    "expose.toggle": {
      en: Da,
      ru: xa
    },
    hooks: {
      en: ka,
      ru: _a
    },
    staticMode: {
      en: Xa,
      ru: $a
    },
    "v-model": {
      en: La,
      ru: Sa
    },
    window: {
      en: Ta,
      ru: Pa
    }
  }
}, Aa = [
  oc,
  Mc,
  Ec,
  Yc,
  el,
  ul,
  Dl,
  Al,
  Hl,
  Yl,
  uo,
  yo,
  Mo,
  Xo,
  Po,
  zo,
  nd,
  od,
  fd,
  vd,
  Ud,
  Ch,
  eh,
  Fh,
  Ih,
  Qh,
  ra,
  Fa
];
class Ba {
  item;
  mdx;
  /**
   * Constructor
   * @param name - Name of the component to find in the descriptions/ Имя компонента для поиска в описаниях
   */
  constructor(n) {
    this.item = Ar.find((c) => c.name === n), this.mdx = Aa.find((c) => c.name === n);
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
    const c = this.mdx?.descriptions?.[n];
    return Tr(c ? Pr(c) ? c[Fr.getLanguage()] : c : "");
  }
}
export {
  Ba as W
};
