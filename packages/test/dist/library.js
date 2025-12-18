var b = Object.defineProperty;
var f = (e, t, s) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var m = (e, t, s) => f(e, typeof t != "symbol" ? t + "" : t, s);
import { defineComponent as l, createElementBlock as i, openBlock as r, toDisplayString as u, computed as d, normalizeClass as h, createCommentVNode as a, createElementVNode as v, renderSlot as c, createBlock as p } from "vue";
import { writeClipboardData as T } from "@dxtmisha/functional";
const k = { class: "ui-test-button" }, y = /* @__PURE__ */ l({
  __name: "UiTestButton",
  props: {
    label: {}
  },
  setup(e) {
    return (t, s) => (r(), i("button", k, u(e.label), 1));
  }
}), U = {
  key: 0,
  class: "ui-test-container__label"
}, $ = {
  key: 1,
  class: "ui-test-container__description"
}, g = { class: "ui-test-container__context" }, C = /* @__PURE__ */ l({
  name: "C2TestContainer",
  __name: "UiTestContainer",
  props: {
    label: {},
    description: {},
    isDark: { type: Boolean }
  },
  setup(e) {
    const t = e, s = d(() => ({
      "ui-test-container--dark": t.isDark
    }));
    return (n, o) => (r(), i("div", {
      class: h([s.value, "ui-test-container"])
    }, [
      e.label ? (r(), i("div", U, u(e.label), 1)) : a("", !0),
      e.description ? (r(), i("div", $, u(e.description), 1)) : a("", !0),
      v("div", g, [
        c(n.$slots, "default")
      ])
    ], 2));
  }
}), B = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, o] of t)
    s[n] = o;
  return s;
}, x = {}, w = { class: "ui-test-group" };
function q(e, t) {
  return r(), i("div", w, [
    c(e.$slots, "default")
  ]);
}
const z = /* @__PURE__ */ B(x, [["render", q]]), _ = /* @__PURE__ */ l({
  __name: "UiTestLabel",
  props: {
    label: {}
  },
  setup(e) {
    const t = e, s = () => T(String(t.label)).then();
    return (n, o) => (r(), i("div", {
      class: "ui-test-label",
      onClick: s
    }, u(e.label), 1));
  }
}), D = /* @__PURE__ */ l({
  __name: "UiTestItemFull",
  props: {
    label: {},
    isFlex: { type: Boolean, default: !0 },
    isPadding: { type: Boolean },
    background: { type: Boolean, default: !0 },
    rounded: { type: Boolean, default: !0 },
    inverse: { type: Boolean }
  },
  setup(e) {
    const t = e, s = d(() => ({
      "ui-test-item-full--flex": t.isFlex,
      "ui-test-item-full--padding": t.isPadding,
      "ui-test-item-full--background": t.background,
      "ui-test-item-full--rounded": t.rounded,
      "ui-test-item-full--inverse": t.inverse
    }));
    return (n, o) => (r(), i("div", {
      class: h([s.value, "ui-test-item-full"])
    }, [
      e.label ? (r(), p(_, {
        key: 0,
        label: e.label
      }, null, 8, ["label"])) : a("", !0),
      c(n.$slots, "default")
    ], 2));
  }
}), E = /* @__PURE__ */ l({
  __name: "UiTestItemSquared",
  props: {
    label: {},
    size: {}
  },
  setup(e) {
    const t = e, s = d(() => ({
      [`ui-test-item-squared--size--${t.size}`]: t.size
    }));
    return (n, o) => (r(), i("div", {
      class: h([s.value, "ui-test-item-squared"])
    }, [
      e.label ? (r(), p(_, {
        key: 0,
        label: e.label
      }, null, 8, ["label"])) : a("", !0),
      c(n.$slots, "default")
    ], 2));
  }
}), S = { class: "ui-test-title" }, F = /* @__PURE__ */ l({
  name: "C2TestTitle",
  __name: "UiTestTitle",
  props: {
    title: {}
  },
  setup(e) {
    return (t, s) => (r(), i("div", S, u(e.title), 1));
  }
});
class V {
  constructor() {
    m(this, "result", 0);
  }
  /**
   * Gets the current result.
   *
   * Получает текущий результат.
   */
  getResult() {
    return this.result;
  }
  /**
   * Sets the initial value.
   *
   * Устанавливает начальное значение.
   * @param value - The initial value / Начальное значение
   */
  setValue(t) {
    return this.result = t, this;
  }
  /**
   * Adds a number to the current result.
   *
   * Добавляет число к текущему результату.
   * @param value - The number to add / Число для сложения
   */
  add(t) {
    return this.result += t, this;
  }
  /**
   * Subtracts a number from the current result.
   *
   * Вычитает число из текущего результата.
   * @param value - The number to subtract / Число для вычитания
   */
  subtract(t) {
    return this.result -= t, this;
  }
  /**
   * Multiplies the current result by a number.
   *
   * Умножает текущий результат на число.
   * @param value - The number to multiply by / Число для умножения
   */
  multiply(t) {
    return this.result *= t, this;
  }
  /**
   * Divides the current result by a number.
   *
   * Делит текущий результат на число.
   * @param value - The number to divide by / Число для деления
   * @throws {Error} When dividing by zero / При делении на ноль
   */
  divide(t) {
    if (t === 0)
      throw new Error("Division by zero is not allowed");
    return this.result /= t, this;
  }
  /**
   * Raises the current result to a power.
   *
   * Возводит текущий результат в степень.
   * @param exponent - The exponent / Показатель степени
   */
  power(t) {
    return this.result = Math.pow(this.result, t), this;
  }
  /**
   * Calculates the square root of the current result.
   *
   * Вычисляет квадратный корень из текущего результата.
   * @throws {Error} When result is negative / Когда результат отрицательный
   */
  sqrt() {
    if (this.result < 0)
      throw new Error("Cannot calculate square root of negative number");
    return this.result = Math.sqrt(this.result), this;
  }
  /**
   * Resets the calculator to zero.
   *
   * Сбрасывает калькулятор на ноль.
   */
  reset() {
    return this.result = 0, this;
  }
  /**
   * Checks if the result is even.
   *
   * Проверяет, является ли результат чётным.
   */
  isEven() {
    return this.result % 2 === 0;
  }
  /**
   * Checks if the result is odd.
   *
   * Проверяет, является ли результат нечётным.
   */
  isOdd() {
    return this.result % 2 !== 0;
  }
  /**
   * Checks if the result is positive.
   *
   * Проверяет, является ли результат положительным.
   */
  isPositive() {
    return this.result > 0;
  }
  /**
   * Checks if the result is negative.
   *
   * Проверяет, является ли результат отрицательным.
   */
  isNegative() {
    return this.result < 0;
  }
  /**
   * Checks if the result is zero.
   *
   * Проверяет, является ли результат нулём.
   */
  isZero() {
    return this.result === 0;
  }
}
const G = y, L = C, M = z, O = D, R = E, Z = _, j = F;
export {
  V as Calculator,
  G as UiTestButton,
  L as UiTestContainer,
  M as UiTestGroup,
  O as UiTestItemFull,
  R as UiTestItemSquared,
  Z as UiTestLabel,
  j as UiTestTitle
};
