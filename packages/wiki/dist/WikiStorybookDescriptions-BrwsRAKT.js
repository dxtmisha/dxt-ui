import { t as e } from "./wikiDescriptions-Cv4WzSNL.js";
import { Geo as t, executeFunction as n, isObjectNotArray as r } from "@dxtmisha/functional";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Source as ee } from "@storybook/addon-docs/blocks";
//#region \0@oxc-project+runtime@0.123.0/helpers/typeof.js
function s(e) {
	"@babel/helpers - typeof";
	return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, s(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/toPrimitive.js
function te(e, t) {
	if (s(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (s(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/toPropertyKey.js
function ne(e) {
	var t = te(e, "string");
	return s(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/defineProperty.js
function c(e, t, n) {
	return (t = ne(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/media/mdx/event/events.actions.en.mdx
function l(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "actions" }) }),
		"\n",
		a(t.p, { children: "Event fires when clicking on an action button in the Actions component, passing the original DOM event and click data." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: MouseEvent" }), " — original DOM mouse event"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "EventClickValue structure:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type: string" }),
				" — action/button type (e.g., ",
				a(t.code, { children: "'confirm'" }),
				", ",
				a(t.code, { children: "'cancel'" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: any" }), " — arbitrary button value"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — additional event data"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleActions = (event, value) => {\n  console.log('DOM event:', event)\n  console.log('Action type:', value.type)\n  console.log('Value:', value.value)\n  console.log('Details:', value.detail)\n\n  if (value.type === 'confirm') {\n    console.log('Confirm button pressed')\n  }\n}\n<\/script>\n\n<template>\n  <Actions @actions=\"handleActions\" :list=\"[\n    { text: 'Cancel', type: 'cancel' },\n    { text: 'Confirm', type: 'confirm' }\n  ]\" />\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "actionsLite" }) }),
		"\n",
		a(t.p, { children: "Event fires when clicking on an action button in the Actions component, passing only data without the original DOM event (lightweight version)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Actions component can be hidden with ",
				a(t.code, { children: "actionsHide" }),
				" property."
			] }),
			"\n"
		] })
	] });
}
function re(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(l, { ...e })
	}) : l(e);
}
//#endregion
//#region src/media/mdx/event/events.actions.ru.mdx
function u(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "actions" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике на кнопку действия в компоненте Actions, передавая оригинальное DOM событие и данные о клике." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: MouseEvent" }), " — оригинальное DOM событие мыши"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура EventClickValue:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type: string" }),
				" — тип действия/кнопки (например, ",
				a(t.code, { children: "'confirm'" }),
				", ",
				a(t.code, { children: "'cancel'" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: any" }), " — произвольное значение кнопки"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — дополнительные данные события"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleActions = (event, value) => {\n  console.log('DOM событие:', event)\n  console.log('Тип действия:', value.type)\n  console.log('Значение:', value.value)\n  console.log('Детали:', value.detail)\n\n  if (value.type === 'confirm') {\n    console.log('Нажата кнопка \"Подтвердить\"')\n  }\n}\n<\/script>\n\n<template>\n  <Actions @actions=\"handleActions\" :list=\"[\n    { text: 'Отмена', type: 'cancel' },\n    { text: 'Подтвердить', type: 'confirm' }\n  ]\" />\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "actionsLite" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике на кнопку действия в компоненте Actions, передавая только данные без оригинального DOM события (облегченная версия)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Компонент Actions можно скрыть свойством ",
				a(t.code, { children: "actionsHide" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function ie(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(u, { ...e })
	}) : u(e);
}
//#endregion
//#region src/media/mdx/event/events.bars.en.mdx
function d(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "bars" }) }),
		"\n",
		a(t.p, { children: "Event fires when clicking on a Bars panel element, passing the original DOM event and click data." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: MouseEvent" }), " — original DOM mouse event"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "EventClickValue structure:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type: string" }),
				" — click/button type (e.g., ",
				a(t.code, { children: "'back'" }),
				" for back button)"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: any" }), " — arbitrary button value"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — additional event data"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleBars = (event, value) => {\n  console.log('DOM event:', event)\n  console.log('Button type:', value.type)\n  console.log('Value:', value.value)\n  console.log('Details:', value.detail)\n\n  if (value.type === 'back') {\n    console.log('Back button pressed')\n  }\n}\n<\/script>\n\n<template>\n  <Bars @bars=\"handleBars\">\n    <button data-event-type=\"back\">Back</button>\n  </Bars>\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "barsLite" }) }),
		"\n",
		a(t.p, { children: "Event fires when clicking on a Bars panel element, passing only data without the original DOM event (lightweight version)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "barsBack" }) }),
		"\n",
		a(t.p, { children: "Event fires when the \"Back\" button in Bars panel is clicked, passing only click data." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Back button can be hidden with ",
				a(t.code, { children: "barsBackHide" }),
				" property."
			] }),
			"\n"
		] })
	] });
}
function ae(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(d, { ...e })
	}) : d(e);
}
//#endregion
//#region src/media/mdx/event/events.bars.ru.mdx
function f(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "bars" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике на элемент панели Bars, передавая оригинальное DOM событие и данные о клике." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: MouseEvent" }), " — оригинальное DOM событие мыши"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура EventClickValue:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type: string" }),
				" — тип клика/кнопки (например, ",
				a(t.code, { children: "'back'" }),
				" для кнопки назад)"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: any" }), " — произвольное значение кнопки"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — дополнительные данные события"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleBars = (event, value) => {\n  console.log('DOM событие:', event)\n  console.log('Тип кнопки:', value.type)\n  console.log('Значение:', value.value)\n  console.log('Детали:', value.detail)\n\n  if (value.type === 'back') {\n    console.log('Нажата кнопка \"Назад\"')\n  }\n}\n<\/script>\n\n<template>\n  <Bars @bars=\"handleBars\">\n    <button data-event-type=\"back\">Назад</button>\n  </Bars>\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "barsLite" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике на элемент панели Bars, передавая только данные без оригинального DOM события (облегченная версия)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "barsBack" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике по кнопке «Назад» в панели Bars, передавая только данные о клике." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Кнопку «Назад» можно скрыть свойством ",
				a(t.code, { children: "barsBackHide" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function oe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(f, { ...e })
	}) : f(e);
}
//#endregion
//#region src/media/mdx/event/events.beforeinput.en.mdx
function p(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "beforeinput" }) }),
		"\n",
		a(t.p, { children: "Event fires before the value in the input field changes, allowing you to prevent or modify data input." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: InputEvent" }), " — original DOM input event"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Input type examples (inputType):" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "insertText" }), " — text input"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "insertFromPaste" }), " — paste from clipboard"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "deleteContentBackward" }), " — delete character backward (Backspace)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "deleteContentForward" }), " — delete character forward (Delete)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "insertLineBreak" }), " — insert line break"] }),
			"\n"
		] })
	] });
}
function se(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(p, { ...e })
	}) : p(e);
}
//#endregion
//#region src/media/mdx/event/events.beforeinput.ru.mdx
function m(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "beforeinput" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает перед изменением значения в поле ввода, позволяя предотвратить или модифицировать ввод данных." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: InputEvent" }), " — оригинальное DOM событие ввода"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Примеры типов ввода (inputType):" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "insertText" }), " — ввод текста"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "insertFromPaste" }), " — вставка из буфера обмена"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "deleteContentBackward" }), " — удаление символа назад (Backspace)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "deleteContentForward" }), " — удаление символа вперед (Delete)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "insertLineBreak" }), " — вставка переноса строки"] }),
			"\n"
		] })
	] });
}
function ce(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(m, { ...e })
	}) : m(e);
}
//#endregion
//#region src/media/mdx/event/events.click.en.mdx
function h(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "click" }) }),
		"\n",
		a(t.p, { children: "Event fires when clicking on the component, passing the original DOM event and component data." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: MouseEvent" }), " — original DOM mouse event"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — object with component data"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "EventClickValue structure:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type: string" }),
				" — click location identifier, set through ",
				a(t.code, { children: "data-event-type" }),
				" attribute on the element"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: any" }), " — component value"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — additional event data"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleClick = (event, value) => {\n  console.log('DOM event:', event)\n  console.log('Click type:', value.type)\n  console.log('Value:', value.value)\n  console.log('Details:', value.detail)\n}\n<\/script>\n\n<template>\n  <Component @click=\"handleClick\">\n    <button data-event-type=\"action\">Click me</button>\n  </Component>\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "clickLite" }) }),
		"\n",
		a(t.p, { children: "Event fires when clicking on the component, passing only data without the original DOM event (lightweight version)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — object with component data"] }),
			"\n"
		] })
	] });
}
function le(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(h, { ...e })
	}) : h(e);
}
//#endregion
//#region src/media/mdx/event/events.click.ru.mdx
function g(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "click" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике на компонент, передавая оригинальное DOM событие и данные компонента." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: MouseEvent" }), " — оригинальное DOM событие мыши"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — объект с данными компонента"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура EventClickValue:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type: string" }),
				" — идентификатор места нажатия, задается через атрибут ",
				a(t.code, { children: "data-event-type" }),
				" у элемента"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: any" }), " — значение компонента"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — дополнительные данные события"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleClick = (event, value) => {\n  console.log('DOM событие:', event)\n  console.log('Тип клика:', value.type)\n  console.log('Значение:', value.value)\n  console.log('Детали:', value.detail)\n}\n<\/script>\n\n<template>\n  <Component @click=\"handleClick\">\n    <button data-event-type=\"action\">Нажми меня</button>\n  </Component>\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "clickLite" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике на компонент, передавая только данные без оригинального DOM события (облегченная версия)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: EventClickValue" }), " — объект с данными компонента"] }),
			"\n"
		] })
	] });
}
function ue(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(g, { ...e })
	}) : g(e);
}
//#endregion
//#region src/media/mdx/event/events.focus.en.mdx
function _(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "focus" }) }),
		"\n",
		a(t.p, { children: "Event fires when the input element receives focus, passing the original DOM event." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: FocusEvent" }), " — original DOM focus event"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "blur" }) }),
		"\n",
		a(t.p, { children: "Event fires when the input element loses focus, passing the original DOM event." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: FocusEvent" }), " — original DOM blur event"] }),
			"\n"
		] })
	] });
}
function de(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(_, { ...e })
	}) : _(e);
}
//#endregion
//#region src/media/mdx/event/events.focus.ru.mdx
function v(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "focus" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при получении фокуса элементом ввода, передавая оригинальное DOM событие." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: FocusEvent" }), " — оригинальное DOM событие фокуса"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "blur" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при потере фокуса элементом ввода, передавая оригинальное DOM событие." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: FocusEvent" }), " — оригинальное DOM событие потери фокуса"] }),
			"\n"
		] })
	] });
}
function fe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(v, { ...e })
	}) : v(e);
}
//#endregion
//#region src/media/mdx/event/events.input.en.mdx
function y(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "input" }) }),
		"\n",
		a(t.p, { children: "Event fires when the value in the input field changes, passing the original DOM event and validation data." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: InputEvent" }), " — original DOM input event"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: FieldValidationItem" }), " — object with validation data"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "FieldValidationItem structure:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "group: string | undefined" }), " — mask group key"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "input: HTMLInputElement | HTMLTextAreaElement | undefined" }), " — related input element"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "pattern: FieldPatternItemOrFunction | undefined" }), " — validation pattern used"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "type: string | undefined" }), " — custom type"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "status: boolean | undefined" }), " — validation success status"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "required: boolean | undefined" }), " — field required flag"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "isFull: boolean | undefined" }), " — value completion flag"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "validationMessage: string | undefined" }), " — error message text"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "validity: ValidityState | undefined" }), " — native validity state"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "validityMessage: string | undefined" }), " — custom validity message"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: any" }), " — original value"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "valueInput: any | undefined" }), " — entered value"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — additional data"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleInput = (event, value) => {\n  console.log('DOM event:', event)\n  console.log('Value:', value.value)\n  console.log('Validation:', value.status)\n  console.log('Complete:', value.isFull)\n\n  if (!value.status) {\n    console.log('Error:', value.validationMessage)\n  }\n}\n<\/script>\n\n<template>\n  <Mask\n    mask=\"+1 (***) ***-****\"\n    @input=\"handleInput\"\n  />\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "inputLite" }) }),
		"\n",
		a(t.p, { children: "Event fires when the value in the input field changes, passing only validation data without the original DOM event (lightweight version)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: FieldValidationItem" }), " — object with validation data"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "change" }) }),
		"\n",
		a(t.p, { children: "Event fires when input is completed and focus is lost, passing the original DOM event and validation data." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: InputEvent" }), " — original DOM input event"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: FieldValidationItem" }), " — object with validation data"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "FieldValidationItem structure:" }),
			" same as for ",
			a(t.code, { children: "input" }),
			" event"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleChange = (event, value) => {\n  console.log('DOM event:', event)\n  console.log('Final value:', value.value)\n\n  if (value.status && value.isFull) {\n    // Submit data to server\n    submitForm(value.value)\n  }\n}\n<\/script>\n\n<template>\n  <Mask\n    mask=\"+1 (***) ***-****\"\n    @change=\"handleChange\"\n  />\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "changeLite" }) }),
		"\n",
		a(t.p, { children: "Event fires when input is completed and focus is lost, passing only validation data without the original DOM event (lightweight version)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: FieldValidationItem" }), " — object with validation data"] }),
			"\n"
		] })
	] });
}
function pe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(y, { ...e })
	}) : y(e);
}
//#endregion
//#region src/media/mdx/event/events.input.ru.mdx
function b(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "input" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении значения в поле ввода, передавая оригинальное DOM событие и данные валидации." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: InputEvent" }), " — оригинальное DOM событие ввода"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: FieldValidationItem" }), " — объект с данными валидации"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура FieldValidationItem:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "group: string | undefined" }), " — ключ группы маски"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "input: HTMLInputElement | HTMLTextAreaElement | undefined" }), " — связанный элемент ввода"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "pattern: FieldPatternItemOrFunction | undefined" }), " — используемый паттерн валидации"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "type: string | undefined" }), " — произвольный тип"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "status: boolean | undefined" }), " — статус успешности валидации"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "required: boolean | undefined" }), " — флаг обязательности поля"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "isFull: boolean | undefined" }), " — флаг полноты заполнения значения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "validationMessage: string | undefined" }), " — текст сообщения об ошибке"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "validity: ValidityState | undefined" }), " — нативное состояние валидности"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "validityMessage: string | undefined" }), " — кастомное сообщение валидности"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: any" }), " — исходное значение"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "valueInput: any | undefined" }), " — введённое значение"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — дополнительные данные"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleInput = (event, value) => {\n  console.log('DOM событие:', event)\n  console.log('Значение:', value.value)\n  console.log('Валидация:', value.status)\n  console.log('Заполнено:', value.isFull)\n\n  if (!value.status) {\n    console.log('Ошибка:', value.validationMessage)\n  }\n}\n<\/script>\n\n<template>\n  <Component\n    @input=\"handleInput\"\n  />\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "inputLite" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении значения в поле ввода, передавая только данные валидации без оригинального DOM события (облегченная версия)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: FieldValidationItem" }), " — объект с данными валидации"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "change" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при завершении ввода и потере фокуса, передавая оригинальное DOM событие и данные валидации." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: InputEvent" }), " — оригинальное DOM событие ввода"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: FieldValidationItem" }), " — объект с данными валидации"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Структура FieldValidationItem:" }),
			" такая же как у события ",
			a(t.code, { children: "input" })
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleChange = (event, value) => {\n  console.log('DOM событие:', event)\n  console.log('Финальное значение:', value.value)\n\n  if (value.status && value.isFull) {\n    // Отправка данных на сервер\n    submitForm(value.value)\n  }\n}\n<\/script>\n\n<template>\n  <Component\n    @change=\"handleChange\"\n  />\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "changeLite" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при завершении ввода и потере фокуса, передавая только данные валидации без оригинального DOM события (облегченная версия)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value: FieldValidationItem" }), " — объект с данными валидации"] }),
			"\n"
		] })
	] });
}
function me(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(b, { ...e })
	}) : b(e);
}
//#endregion
//#region src/media/mdx/event/events.inputStandard.en.mdx
function x(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "input" }) }),
		"\n",
		a(t.p, { children: "Event fires when the value in the input field changes, passing the original DOM event." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: InputEvent" }), " — original DOM input event"] }),
			"\n"
		] })
	] });
}
function he(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(x, { ...e })
	}) : x(e);
}
//#endregion
//#region src/media/mdx/event/events.inputStandard.ru.mdx
function S(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "input" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении значения в поле ввода, передавая оригинальное DOM событие." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: InputEvent" }), " — оригинальное DOM событие ввода"] }),
			"\n"
		] })
	] });
}
function ge(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(S, { ...e })
	}) : S(e);
}
//#endregion
//#region src/media/mdx/event/events.keyboard.en.mdx
function C(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "keydown" }) }),
		"\n",
		a(t.p, { children: "Event fires when a key is pressed in the input field, passing the original DOM keyboard event." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: KeyboardEvent" }), " — original DOM keyboard event"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "keyup" }) }),
		"\n",
		a(t.p, { children: "Event fires when a key is released in the input field, passing the original DOM keyboard event." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: KeyboardEvent" }), " — original DOM keyboard event"] }),
			"\n"
		] })
	] });
}
function _e(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(C, { ...e })
	}) : C(e);
}
//#endregion
//#region src/media/mdx/event/events.keyboard.ru.mdx
function w(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "keydown" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при нажатии клавиши в поле ввода, передавая оригинальное DOM событие клавиатуры." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: KeyboardEvent" }), " — оригинальное DOM событие клавиатуры"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "keyup" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при отпускании клавиши в поле ввода, передавая оригинальное DOM событие клавиатуры." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: KeyboardEvent" }), " — оригинальное DOM событие клавиатуры"] }),
			"\n"
		] })
	] });
}
function ve(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(w, { ...e })
	}) : w(e);
}
//#endregion
//#region src/media/mdx/event/events.paste.en.mdx
function T(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "paste" }) }),
		"\n",
		a(t.p, { children: "Event fires when data is pasted from clipboard into the input field, passing the original DOM event." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: ClipboardEvent" }), " — original DOM clipboard event"] }),
			"\n"
		] })
	] });
}
function ye(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(T, { ...e })
	}) : T(e);
}
//#endregion
//#region src/media/mdx/event/events.paste.ru.mdx
function E(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "paste" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при вставке данных из буфера обмена в поле ввода, передавая оригинальное DOM событие." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: ClipboardEvent" }), " — оригинальное DOM событие буфера обмена"] }),
			"\n"
		] })
	] });
}
function be(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(E, { ...e })
	}) : E(e);
}
//#endregion
//#region src/media/mdx/event/events.reset.en.mdx
function D(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "reset" }) }),
		"\n",
		a(t.p, { children: "Event fires when the component value is reset, passing the original DOM event." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: Event" }), " — original DOM event"] }),
			"\n"
		] })
	] });
}
function xe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(D, { ...e })
	}) : D(e);
}
//#endregion
//#region src/media/mdx/event/events.reset.ru.mdx
function O(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "reset" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при сбросе значения компонента, передавая оригинальное DOM событие." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: Event" }), " — оригинальное DOM событие"] }),
			"\n"
		] })
	] });
}
function Se(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(O, { ...e })
	}) : O(e);
}
//#endregion
//#region src/media/mdx/event/wikiMdxEvent.ts
var Ce = {
	name: "Event",
	descriptions: {
		actions: {
			en: re,
			ru: ie
		},
		bars: {
			en: ae,
			ru: oe
		},
		beforeinput: {
			en: se,
			ru: ce
		},
		click: {
			en: le,
			ru: ue
		},
		focus: {
			en: de,
			ru: fe
		},
		input: {
			en: pe,
			ru: me
		},
		"input-standard": {
			en: he,
			ru: ge
		},
		keyboard: {
			en: _e,
			ru: ve
		},
		paste: {
			en: ye,
			ru: be
		},
		reset: {
			en: xe,
			ru: Se
		}
	}
};
//#endregion
//#region src/media/mdx/expose/expose.checkValidity.en.mdx
function k(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "checkValidity(): boolean" }),
			" — Checks whether the component's value satisfies its validation constraints. Returns ",
			a(t.code, { children: "true" }),
			" if valid, otherwise ",
			a(t.code, { children: "false" }),
			"."
		] }),
		"\n"
	] });
}
function we(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(k, { ...e })
	}) : k(e);
}
//#endregion
//#region src/media/mdx/expose/expose.checkValidity.ru.mdx
function A(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "checkValidity(): boolean" }),
			" — Проверяет, удовлетворяет ли значение компонента его ограничениям проверки. Возвращает ",
			a(t.code, { children: "true" }),
			", если оно действительно, в противном случае ",
			a(t.code, { children: "false" }),
			"."
		] }),
		"\n"
	] });
}
function Te(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(A, { ...e })
	}) : A(e);
}
//#endregion
//#region src/media/mdx/expose/expose.clear.en.mdx
function j(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "clear(): void" }), " — Clears the component value by default and focuses the input field."] }),
		"\n"
	] });
}
function Ee(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(j, { ...e })
	}) : j(e);
}
//#endregion
//#region src/media/mdx/expose/expose.clear.ru.mdx
function M(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "clear(): void" }), " — Очищает значение компонента до значения по умолчанию и устанавливает фокус на поле ввода."] }),
		"\n"
	] });
}
function De(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(M, { ...e })
	}) : M(e);
}
//#endregion
//#region src/media/mdx/expose/expose.descriptionId.en.mdx
function N(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "descriptionId: string" }),
			" — Unique identifier for the description element. Used for accessibility attributes like ",
			a(t.code, { children: "aria-describedby" }),
			"."
		] }),
		"\n"
	] });
}
function Oe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(N, { ...e })
	}) : N(e);
}
//#endregion
//#region src/media/mdx/expose/expose.descriptionId.ru.mdx
function P(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "descriptionId: string" }),
			" — Уникальный идентификатор элемента описания. Используется для атрибутов доступности, таких как ",
			a(t.code, { children: "aria-describedby" }),
			"."
		] }),
		"\n"
	] });
}
function ke(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(P, { ...e })
	}) : P(e);
}
//#endregion
//#region src/media/mdx/expose/expose.detail.en.mdx
function F(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — Additional component data."] }),
		"\n"
	] });
}
function Ae(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(F, { ...e })
	}) : F(e);
}
//#endregion
//#region src/media/mdx/expose/expose.detail.ru.mdx
function I(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "detail: Record<string, any> | undefined" }), " — Дополнительные данные компонента."] }),
		"\n"
	] });
}
function je(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(I, { ...e })
	}) : I(e);
}
//#endregion
//#region src/media/mdx/expose/expose.id.en.mdx
function L(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "id: string" }),
			" — Unique identifier for the component element. Used as the DOM element's ",
			a(t.code, { children: "id" }),
			" attribute."
		] }),
		"\n"
	] });
}
function Me(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(L, { ...e })
	}) : L(e);
}
//#endregion
//#region src/media/mdx/expose/expose.id.ru.mdx
function R(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "id: string" }),
			" — Уникальный идентификатор элемента компонента. Используется в качестве атрибута ",
			a(t.code, { children: "id" }),
			" DOM-элемента."
		] }),
		"\n"
	] });
}
function Ne(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(R, { ...e })
	}) : R(e);
}
//#endregion
//#region src/media/mdx/expose/expose.labelId.en.mdx
function z(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "labelId: string" }),
			" — Unique identifier for the label element. Used for accessibility attributes like ",
			a(t.code, { children: "aria-labelledby" }),
			"."
		] }),
		"\n"
	] });
}
function Pe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(z, { ...e })
	}) : z(e);
}
//#endregion
//#region src/media/mdx/expose/expose.labelId.ru.mdx
function B(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "labelId: string" }),
			" — Уникальный идентификатор элемента метки. Используется для атрибутов доступности, таких как ",
			a(t.code, { children: "aria-labelledby" }),
			"."
		] }),
		"\n"
	] });
}
function Fe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(B, { ...e })
	}) : B(e);
}
//#endregion
//#region src/media/mdx/expose/expose.open.en.mdx
function V(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "open: ComputedRef<boolean>" }), " — Reactive open/close state of the component."] }),
		"\n"
	] });
}
function Ie(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(V, { ...e })
	}) : V(e);
}
//#endregion
//#region src/media/mdx/expose/expose.open.ru.mdx
function H(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "open: ComputedRef<boolean>" }), " — Реактивное состояние открытия/закрытия компонента."] }),
		"\n"
	] });
}
function Le(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(H, { ...e })
	}) : H(e);
}
//#endregion
//#region src/media/mdx/expose/expose.selected.en.mdx
function U(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "isSelected: ComputedRef<boolean>" }), " — Computed property indicating whether there are selected items in the component."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "selectedList: Ref<any[]>" }), " — Reactive list of selected component items."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "selectedNames: Ref<string[]>" }), " — Reactive list of labels (names) of selected items."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "selectedValues: Ref<any[]>" }), " — Reactive array of values of selected items."] }),
		"\n"
	] });
}
function Re(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(U, { ...e })
	}) : U(e);
}
//#endregion
//#region src/media/mdx/expose/expose.selected.ru.mdx
function W(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "isSelected: ComputedRef<boolean>" }), " — Вычисляемое свойство, указывающее наличие выбранных элементов в компоненте."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "selectedList: Ref<any[]>" }), " — Реактивный список выбранных элементов компонента."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "selectedNames: Ref<string[]>" }), " — Реактивный список меток (имён) выбранных элементов."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "selectedValues: Ref<any[]>" }), " — Реактивный массив значений выбранных элементов."] }),
		"\n"
	] });
}
function ze(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(W, { ...e })
	}) : W(e);
}
//#endregion
//#region src/media/mdx/expose/expose.validationMessage.en.mdx
function G(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "validationMessage: string" }), " — Returns a validation error message describing why the component's value fails validation. If the value is valid, it returns an empty string."] }),
		"\n"
	] });
}
function Be(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(G, { ...e })
	}) : G(e);
}
//#endregion
//#region src/media/mdx/expose/expose.validationMessage.ru.mdx
function K(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "validationMessage: string" }), " — Возвращает сообщение об ошибке проверки, в котором описывается, почему значение компонента не прошло проверку. Если значение действительно, возвращается пустая строка."] }),
		"\n"
	] });
}
function Ve(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(K, { ...e })
	}) : K(e);
}
//#endregion
//#region src/media/mdx/expose/expose.value.en.mdx
function q(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "value: any" }), " — Current component value."] }),
		"\n"
	] });
}
function He(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(q, { ...e })
	}) : q(e);
}
//#endregion
//#region src/media/mdx/expose/expose.value.ru.mdx
function J(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "value: any" }), " — Текущее значение компонента."] }),
		"\n"
	] });
}
function Ue(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(J, { ...e })
	}) : J(e);
}
//#endregion
//#region src/media/mdx/expose/wikiMdxExpose.ts
var We = {
	name: "Expose",
	descriptions: {
		checkValidity: {
			en: we,
			ru: Te
		},
		clear: {
			en: Ee,
			ru: De
		},
		descriptionId: {
			en: Oe,
			ru: ke
		},
		detail: {
			en: Ae,
			ru: je
		},
		id: {
			en: Me,
			ru: Ne
		},
		labelId: {
			en: Pe,
			ru: Fe
		},
		open: {
			en: Ie,
			ru: Le
		},
		selected: {
			en: Re,
			ru: ze
		},
		validationMessage: {
			en: Be,
			ru: Ve
		},
		value: {
			en: He,
			ru: Ue
		}
	}
};
//#endregion
//#region src/media/mdx/slot/body.en.mdx
function Y(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "body: VNode" }), " — Slot for the main content of the component."] }),
		"\n"
	] });
}
function Ge(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Y, { ...e })
	}) : Y(e);
}
//#endregion
//#region src/media/mdx/slot/body.ru.mdx
function X(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "body: VNode" }), " — Слот для основного содержимого компонента."] }),
		"\n"
	] });
}
function Ke(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(X, { ...e })
	}) : X(e);
}
//#endregion
//#region src/media/mdx/slot/caption.en.mdx
function Z(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "caption: VNode" }), " — Slot for placing a caption or additional explanatory text for the component."] }),
		"\n"
	] });
}
function qe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Z, { ...e })
	}) : Z(e);
}
//#endregion
//#region src/media/mdx/slot/caption.ru.mdx
function Q(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "caption: VNode" }), " — Слот для размещения подписи или дополнительного пояснительного текста к компоненту."] }),
		"\n"
	] });
}
function Je(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Q, { ...e })
	}) : Q(e);
}
//#endregion
//#region src/media/mdx/slot/control.en.mdx
function $(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "control(props: ControlItem): VNode" }), " — Slot for placing component control elements (buttons, switches, etc.)."] }),
		"\n"
	] });
}
function Ye(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($, { ...e })
	}) : $(e);
}
//#endregion
//#region src/media/mdx/slot/control.ru.mdx
function Xe(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "control(props: ControlItem): VNode" }), " — Слот для размещения элементов управления компонентом (кнопки, переключатели и т.д.)."] }),
		"\n"
	] });
}
function Ze(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Xe, { ...e })
	}) : Xe(e);
}
//#endregion
//#region src/media/mdx/slot/default.en.mdx
function Qe(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "default: VNode" }), " — Main slot for placing the primary component content."] }),
		"\n"
	] });
}
function $e(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Qe, { ...e })
	}) : Qe(e);
}
//#endregion
//#region src/media/mdx/slot/default.ru.mdx
function et(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "default: VNode" }), " — Основной слот для размещения главного содержимого компонента."] }),
		"\n"
	] });
}
function tt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(et, { ...e })
	}) : et(e);
}
//#endregion
//#region src/media/mdx/slot/description.en.mdx
function nt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "description: VNode" }), " — Slot for placing component description or additional information."] }),
		"\n"
	] });
}
function rt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(nt, { ...e })
	}) : nt(e);
}
//#endregion
//#region src/media/mdx/slot/description.ru.mdx
function it(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "description: VNode" }), " — Слот для размещения описания компонента или дополнительной информации."] }),
		"\n"
	] });
}
function at(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(it, { ...e })
	}) : it(e);
}
//#endregion
//#region src/media/mdx/slot/footer.en.mdx
function ot(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "footer(props: ControlItem): VNode" }), " — Slot for placing content at the bottom of the component."] }),
		"\n"
	] });
}
function st(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ot, { ...e })
	}) : ot(e);
}
//#endregion
//#region src/media/mdx/slot/footer.ru.mdx
function ct(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "footer(props: ControlItem): VNode" }), " — Слот для размещения содержимого в нижней части компонента."] }),
		"\n"
	] });
}
function lt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ct, { ...e })
	}) : ct(e);
}
//#endregion
//#region src/media/mdx/slot/headline.en.mdx
function ut(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "headline: VNode" }), " — Slot for placing custom headline content."] }),
		"\n"
	] });
}
function dt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ut, { ...e })
	}) : ut(e);
}
//#endregion
//#region src/media/mdx/slot/headline.ru.mdx
function ft(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "headline: VNode" }), " — Слот для размещения пользовательского содержимого заголовка."] }),
		"\n"
	] });
}
function pt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ft, { ...e })
	}) : ft(e);
}
//#endregion
//#region src/media/mdx/slot/label.en.mdx
function mt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "label: VNode" }), " — Slot for placing custom label content instead of text value."] }),
		"\n"
	] });
}
function ht(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(mt, { ...e })
	}) : mt(e);
}
//#endregion
//#region src/media/mdx/slot/label.ru.mdx
function gt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "label: VNode" }), " — Слот для размещения пользовательского содержимого метки компонента вместо текстового значения."] }),
		"\n"
	] });
}
function _t(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(gt, { ...e })
	}) : gt(e);
}
//#endregion
//#region src/media/mdx/slot/leading.en.mdx
function vt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "leading: any" }), " — Slot for placing content at the start of the interactive field area, before the main input element."] }),
		"\n"
	] });
}
function yt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vt, { ...e })
	}) : vt(e);
}
//#endregion
//#region src/media/mdx/slot/leading.ru.mdx
function bt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "leading: any" }), " — Слот для размещения контента в начале интерактивной области поля, перед основным элементом ввода."] }),
		"\n"
	] });
}
function xt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bt, { ...e })
	}) : bt(e);
}
//#endregion
//#region src/media/mdx/slot/prefix.en.mdx
function St(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "prefix: VNode" }), " — Slot for placing content at the beginning of the component, before the main content."] }),
		"\n"
	] });
}
function Ct(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(St, { ...e })
	}) : St(e);
}
//#endregion
//#region src/media/mdx/slot/prefix.ru.mdx
function wt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "prefix: VNode" }), " — Слот для размещения контента в начале компонента, перед основным содержимым."] }),
		"\n"
	] });
}
function Tt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wt, { ...e })
	}) : wt(e);
}
//#endregion
//#region src/media/mdx/slot/secondary.en.mdx
function Et(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "secondary: VNode" }), " — Slot for placing secondary content or additional component elements."] }),
		"\n"
	] });
}
function Dt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Et, { ...e })
	}) : Et(e);
}
//#endregion
//#region src/media/mdx/slot/secondary.ru.mdx
function Ot(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "secondary: VNode" }), " — Слот для размещения вторичного содержимого или дополнительных элементов компонента."] }),
		"\n"
	] });
}
function kt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ot, { ...e })
	}) : Ot(e);
}
//#endregion
//#region src/media/mdx/slot/suffix.en.mdx
function At(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "suffix: VNode" }), " — Slot for placing content at the end of the component, after the main content."] }),
		"\n"
	] });
}
function jt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(At, { ...e })
	}) : At(e);
}
//#endregion
//#region src/media/mdx/slot/suffix.ru.mdx
function Mt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "suffix: VNode" }), " — Слот для размещения контента в конце компонента, после основного содержимого."] }),
		"\n"
	] });
}
function Nt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Mt, { ...e })
	}) : Mt(e);
}
//#endregion
//#region src/media/mdx/slot/trailing.en.mdx
function Pt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "trailing: any" }), " — Slot for placing content at the end of the interactive field area, after the main input element."] }),
		"\n"
	] });
}
function Ft(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Pt, { ...e })
	}) : Pt(e);
}
//#endregion
//#region src/media/mdx/slot/trailing.ru.mdx
function It(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "trailing: any" }), " — Слот для размещения контента в конце интерактивной области поля, после основного элемента ввода."] }),
		"\n"
	] });
}
function Lt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(It, { ...e })
	}) : It(e);
}
//#endregion
//#region src/media/mdx/slot/wikiMdxSlot.ts
var Rt = {
	name: "Slot",
	descriptions: {
		body: {
			en: Ge,
			ru: Ke
		},
		caption: {
			en: qe,
			ru: Je
		},
		control: {
			en: Ye,
			ru: Ze
		},
		default: {
			en: $e,
			ru: tt
		},
		description: {
			en: rt,
			ru: at
		},
		footer: {
			en: st,
			ru: lt
		},
		headline: {
			en: dt,
			ru: pt
		},
		label: {
			en: ht,
			ru: _t
		},
		leading: {
			en: yt,
			ru: xt
		},
		prefix: {
			en: Ct,
			ru: Tt
		},
		secondary: {
			en: Dt,
			ru: kt
		},
		suffix: {
			en: jt,
			ru: Nt
		},
		trailing: {
			en: Ft,
			ru: Lt
		}
	}
};
//#endregion
//#region src/media/mdx/style/adaptive.en.mdx
function zt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Adaptive Behavior" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "adaptive" }),
			" and ",
			a(t.code, { children: "container" }),
			" properties are designed to control component behavior at different screen sizes and container constraints."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "adaptive" }), " — controls adaptive behavior for different screen sizes and media queries"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "container" }), " — controls container layout with adaptive width constraints"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: ",
			a(t.code, { children: "adaptive" }),
			" provides automatic component adaptation to different screen sizes with media query support for precise display control. ",
			a(t.code, { children: "container" }),
			" creates a container layout with automatic width constraints, adaptive behavior, and content centering. Both properties can be used together to create complex adaptive layouts, where ",
			a(t.code, { children: "container" }),
			" provides the structural foundation and ",
			a(t.code, { children: "adaptive" }),
			" adds flexible behavior for different devices."
		] })
	] });
}
function Bt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zt, { ...e })
	}) : zt(e);
}
//#endregion
//#region src/media/mdx/style/adaptive.ru.mdx
function Vt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Адаптивное поведение" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "adaptive" }),
			" и ",
			a(t.code, { children: "container" }),
			" предназначены для управления поведением компонентов при различных размерах экрана и контейнерных ограничениях."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "adaptive" }), " — управляет адаптивным поведением для различных размеров экрана и медиа-запросов"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "container" }), " — управляет контейнерной раскладкой с адаптивными ограничениями ширины"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: ",
			a(t.code, { children: "adaptive" }),
			" обеспечивает автоматическую адаптацию компонента под различные размеры экрана с поддержкой медиа-запросов для точного контроля отображения. ",
			a(t.code, { children: "container" }),
			" создает контейнерную раскладку с автоматическими ограничениями ширины, адаптивным поведением и центрированием содержимого. Оба свойства могут использоваться вместе для создания сложных адаптивных раскладок, где ",
			a(t.code, { children: "container" }),
			" обеспечивает структурную основу, а ",
			a(t.code, { children: "adaptive" }),
			" добавляет гибкое поведение для разных устройств."
		] })
	] });
}
function Ht(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vt, { ...e })
	}) : Vt(e);
}
//#endregion
//#region src/media/mdx/style/asPalette.en.mdx
function Ut(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Color Palette" }),
		"\n",
		o(t.p, { children: [
			"Property ",
			a(t.code, { children: "asPalette" }),
			" enables color scheme inheritance from the parent element while maintaining base saturation."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Usage:" }) }),
		"\n",
		a(t.p, { children: "Allows automatic color adaptation to placement context. The element adopts the parent's color palette without losing its saturation characteristics." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " (default) — uses its own color scheme"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — inherits palette from parent element"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Inherit palette from parent -->\n<Component asPalette />\n"
		}) })
	] });
}
function Wt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ut, { ...e })
	}) : Ut(e);
}
//#endregion
//#region src/media/mdx/style/asPalette.ru.mdx
function Gt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Цветовая палитра" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "asPalette" }),
			" активирует наследование цветовой схемы от родительского элемента с сохранением базовой насыщенности."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Применение:" }) }),
		"\n",
		a(t.p, { children: "Позволяет автоматически адаптировать цвета к контексту размещения. Элемент принимает цветовую палитру родителя, не теряя своих характеристик насыщенности." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " (по умолчанию) — используется собственная цветовая схема"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — наследует палитру от родительского элемента"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Наследование палитры от родителя -->\n<Component asPalette />\n"
		}) })
	] });
}
function Kt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gt, { ...e })
	}) : Gt(e);
}
//#endregion
//#region src/media/mdx/style/dir.en.mdx
function qt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Direction" }),
		"\n",
		o(t.p, { children: [
			"Property ",
			a(t.code, { children: "dir" }),
			" controls mirroring of the element based on text direction (LTR/RTL)."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Usage:" }) }),
		"\n",
		a(t.p, { children: "Automatically inverts the visual representation when switching between left-to-right and right-to-left languages. Especially important for elements containing directional graphic symbols (arrows, pointers)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " (default) — standard display"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — enables text direction adaptation"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Text direction adaptation -->\n<Component dir />\n"
		}) })
	] });
}
function Jt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(qt, { ...e })
	}) : qt(e);
}
//#endregion
//#region src/media/mdx/style/dir.ru.mdx
function Yt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Направление" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "dir" }),
			" управляет зеркальным отображением элемента в зависимости от направления текста (LTR/RTL)."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Применение:" }) }),
		"\n",
		a(t.p, { children: "Автоматически инвертирует визуальное представление при переключении между языками с левосторонним и правосторонним письмом. Особенно важно для элементов, содержащих направленные графические символы (стрелки, указатели)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " (по умолчанию) — стандартное отображение"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — включает адаптацию к направлению текста"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Адаптация под направление текста -->\n<Component dir />\n"
		}) })
	] });
}
function Xt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Yt, { ...e })
	}) : Yt(e);
}
//#endregion
//#region src/media/mdx/style/isSkeleton.en.mdx
function Zt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Skeleton mode" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "isSkeleton" }),
			" property defines element behavior when interacting with the parent Skeleton component."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — element displays as skeleton when Skeleton is in active state"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " — element becomes invisible when Skeleton is in active state"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Works in conjunction with the Skeleton component to control visibility and display mode of child elements. When parent Skeleton has ",
			a(t.code, { children: "active=false" }),
			", all child elements display normally regardless of ",
			a(t.code, { children: "isSkeleton" }),
			" value. When ",
			a(t.code, { children: "active=true" }),
			", elements with ",
			a(t.code, { children: "isSkeleton=true" }),
			" are shown as skeleton placeholders, while elements with ",
			a(t.code, { children: "isSkeleton=false" }),
			" are completely hidden."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Element will display as skeleton -->\n<Skeleton active>\n  <Component isSkeleton text=\"Loading...\" />\n</Skeleton>\n\n<!-- Element will be hidden -->\n<Skeleton active>\n  <Component :isSkeleton=\"false\" text=\"Hidden text\" />\n</Skeleton>\n"
		}) })
	] });
}
function Qt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Zt, { ...e })
	}) : Zt(e);
}
//#endregion
//#region src/media/mdx/style/isSkeleton.ru.mdx
function $t(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Режим скелетона" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "isSkeleton" }),
			" определяет поведение элемента при взаимодействии с родительским компонентом Skeleton."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — элемент отображается как скелетон при активном состоянии Skeleton"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " — элемент становится невидимым при активном состоянии Skeleton"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Работает в паре с компонентом Skeleton для управления видимостью и режимом отображения дочерних элементов. При ",
			a(t.code, { children: "active=false" }),
			" у родительского Skeleton все дочерние элементы отображаются нормально независимо от значения ",
			a(t.code, { children: "isSkeleton" }),
			". При ",
			a(t.code, { children: "active=true" }),
			" элементы с ",
			a(t.code, { children: "isSkeleton=true" }),
			" показываются как скелетон-заглушки, а элементы с ",
			a(t.code, { children: "isSkeleton=false" }),
			" скрываются полностью."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Элемент будет отображаться как скелетон -->\n<Skeleton active>\n  <Component isSkeleton text=\"Загрузка...\" />\n</Skeleton>\n\n<!-- Элемент будет скрыт -->\n<Skeleton active>\n  <Component :isSkeleton=\"false\" text=\"Скрытый текст\" />\n</Skeleton>\n"
		}) })
	] });
}
function en(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($t, { ...e })
	}) : $t(e);
}
//#endregion
//#region src/media/mdx/style/wikiMdxStyle.ts
var tn = {
	name: "Style",
	descriptions: {
		adaptive: {
			en: Bt,
			ru: Ht
		},
		asPalette: {
			en: Wt,
			ru: Kt
		},
		dir: {
			en: Jt,
			ru: Xt
		},
		isSkeleton: {
			en: Qt,
			ru: en
		}
	}
};
//#endregion
//#region src/media/mdx/value/highlight.en.mdx
function nn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Managing search and highlighting" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "highlight" }),
			" and ",
			a(t.code, { children: "highlightLengthStart" }),
			" properties work together to control match highlighting when searching through list items. They set the search string and minimum query length for activating visual highlighting of found fragments."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "highlight" }), " — search string for finding and highlighting in list items"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "highlightLengthStart" }),
				" — minimum search string length to start highlighting, defaults to ",
				a(t.code, { children: "2" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Match highlighting is activated automatically: when the ",
			a(t.code, { children: "highlight" }),
			" length is less than ",
			a(t.code, { children: "highlightLengthStart" }),
			", search works but visual highlighting is not applied. When the minimum length is reached, the component begins highlighting found fragments across the entire list hierarchy. Search works in real-time and considers nested items in groups and menus. Use ",
			a(t.code, { children: "highlightLengthStart" }),
			" to prevent excessive highlighting with short queries."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Standard search with highlighting from 2 characters -->\n<List :list=\"items\" highlight=\"text\" />\n\n<!-- Search with highlighting from 3 characters -->\n<List :list=\"items\" highlight=\"abc\" :highlightLengthStart=\"3\" />\n\n<!-- Dynamic search with v-model -->\n<List :list=\"items\" :highlight=\"searchQuery\" :highlightLengthStart=\"1\" />\n\n<!-- Search without minimum threshold -->\n<List :list=\"products\" :highlight=\"filter\" :highlightLengthStart=\"0\" />\n"
		}) })
	] });
}
function rn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(nn, { ...e })
	}) : nn(e);
}
//#endregion
//#region src/media/mdx/value/highlight.ru.mdx
function an(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление поиском и выделением" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "highlight" }),
			" и ",
			a(t.code, { children: "highlightLengthStart" }),
			" работают в связке для управления подсветкой совпадений при поиске по элементам списка. Они устанавливают строку поиска и минимальную длину запроса для активации визуального выделения найденных фрагментов."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "highlight" }), " — строка для поиска и подсветки в элементах списка"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "highlightLengthStart" }),
				" — минимальная длина строки поиска для начала выделения, по умолчанию ",
				a(t.code, { children: "2" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Выделение совпадений активируется автоматически: когда длина ",
			a(t.code, { children: "highlight" }),
			" меньше ",
			a(t.code, { children: "highlightLengthStart" }),
			", поиск работает, но визуальное выделение не применяется. При достижении минимальной длины компонент начинает подсвечивать найденные фрагменты во всей иерархии списка. Поиск работает в реальном времени и учитывает вложенные элементы в группах и меню. Используйте ",
			a(t.code, { children: "highlightLengthStart" }),
			" для предотвращения чрезмерного выделения при коротких запросах."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Стандартный поиск с выделением от 2 символов -->\n<List :list=\"items\" highlight=\"текст\" />\n\n<!-- Поиск с выделением от 3 символов -->\n<List :list=\"items\" highlight=\"abc\" :highlightLengthStart=\"3\" />\n\n<!-- Динамический поиск с v-model -->\n<List :list=\"items\" :highlight=\"searchQuery\" :highlightLengthStart=\"1\" />\n\n<!-- Поиск без минимального порога -->\n<List :list=\"products\" :highlight=\"filter\" :highlightLengthStart=\"0\" />\n"
		}) })
	] });
}
function on(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(an, { ...e })
	}) : an(e);
}
//#endregion
//#region src/media/mdx/value/labelNumber.en.mdx
function sn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Working with text labels and numbers" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "label" }),
			", ",
			a(t.code, { children: "labelMax" }),
			", and ",
			a(t.code, { children: "formatting" }),
			" properties are designed to manage the display of textual and numerical content in interface components."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "label" }), " — text label or numeric value to display"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "labelMax" }), " — maximum value for numeric labels (adds \"+\" indicator when exceeded)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "formatting" }), " — enables formatting of numeric values according to user locale"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together for flexible content management: ",
			a(t.code, { children: "label" }),
			" accepts both textual and numeric values. When a number is passed, automatic processing is applied with localization consideration. The ",
			a(t.code, { children: "labelMax" }),
			" property limits the display of large numbers — when the value is exceeded, a \"+\" symbol is added (e.g., \"99+\"). The ",
			a(t.code, { children: "formatting" }),
			" property controls number formatting according to user regional settings, ensuring correct display of separators and numeric formats."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst count = ref(5)\nconst largeNumber = ref(1234)\n<\/script>\n\n<template>\n  <!-- Basic usage with text -->\n  <Component label=\"Text\" />\n\n  <!-- Numeric value -->\n  <Component :label=\"count\" />\n\n  <!-- Maximum value limitation -->\n  <Component :label=\"150\" :label-max=\"99\" />\n  <!-- Displays: 99+ -->\n\n  <!-- With number formatting -->\n  <Component\n    :label=\"largeNumber\"\n    :formatting=\"true\"\n  />\n  <!-- Displays: 1,234 (depending on locale) -->\n\n  <!-- Combined usage -->\n  <Component\n    :label=\"999\"\n    :label-max=\"99\"\n    :formatting=\"true\"\n  />\n  <!-- Displays: 99+ -->\n</template>\n"
		}) })
	] });
}
function cn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(sn, { ...e })
	}) : sn(e);
}
//#endregion
//#region src/media/mdx/value/labelNumber.ru.mdx
function ln(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Работа с текстовыми метками и числами" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "label" }),
			", ",
			a(t.code, { children: "labelMax" }),
			" и ",
			a(t.code, { children: "formatting" }),
			" предназначены для управления отображением текстового и числового контента в компонентах интерфейса."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "label" }), " — текстовая метка или числовое значение для отображения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "labelMax" }), " — максимальное значение для числовых меток (при превышении добавляется индикатор \"+\")"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "formatting" }), " — включает форматирование числовых значений согласно локали пользователя"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно для гибкого управления контентом: ",
			a(t.code, { children: "label" }),
			" принимает как текстовые, так и числовые значения. При передаче числа применяется автоматическая обработка с учётом локализации. Свойство ",
			a(t.code, { children: "labelMax" }),
			" ограничивает отображение больших чисел — при превышении значения добавляется символ \"+\" (например, \"99+\"). Свойство ",
			a(t.code, { children: "formatting" }),
			" контролирует форматирование чисел согласно региональным настройкам пользователя, обеспечивая корректное отображение разделителей и числовых форматов."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst count = ref(5)\nconst largeNumber = ref(1234)\n<\/script>\n\n<template>\n  <!-- Базовое использование с текстом -->\n  <Component label=\"Текст\" />\n\n  <!-- Числовое значение -->\n  <Component :label=\"count\" />\n\n  <!-- Ограничение максимального значения -->\n  <Component :label=\"150\" :label-max=\"99\" />\n  <!-- Отобразит: 99+ -->\n\n  <!-- С форматированием чисел -->\n  <Component\n    :label=\"largeNumber\"\n    :formatting=\"true\"\n  />\n  <!-- Отобразит: 1 234 (в зависимости от локали) -->\n\n  <!-- Комбинированное использование -->\n  <Component\n    :label=\"999\"\n    :label-max=\"99\"\n    :formatting=\"true\"\n  />\n  <!-- Отобразит: 99+ -->\n</template>\n"
		}) })
	] });
}
function un(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ln, { ...e })
	}) : ln(e);
}
//#endregion
//#region src/media/mdx/value/value.en.mdx
function dn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Value and Data Passing" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "value" }),
			" and ",
			a(t.code, { children: "detail" }),
			" properties are designed to transfer information when interacting with components and handling events."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value" }), " — main component value (string, number, object)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail" }), " — additional data and contextual information"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: ",
			a(t.code, { children: "value" }),
			" contains the main component value, which is passed during events and accessible via the expose API. ",
			a(t.code, { children: "detail" }),
			" extends ",
			a(t.code, { children: "value" }),
			" with additional data such as metadata, identifiers, or other auxiliary information. Both properties are available for programmatic reading and passed in component events, providing complete information about the state and context during interaction."
		] })
	] });
}
function fn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(dn, { ...e })
	}) : dn(e);
}
//#endregion
//#region src/media/mdx/value/value.ru.mdx
function pn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Передача значений и данных" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "value" }),
			" и ",
			a(t.code, { children: "detail" }),
			" предназначены для передачи информации при взаимодействии с компонентами и обработке событий."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value" }), " — основное значение компонента (строка, число, объект)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "detail" }), " — дополнительные данные и контекстная информация"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: ",
			a(t.code, { children: "value" }),
			" содержит основное значение компонента, которое передаётся при событиях и доступно через expose API. ",
			a(t.code, { children: "detail" }),
			" расширяет ",
			a(t.code, { children: "value" }),
			" дополнительными данными, такими как метаданные, идентификаторы или другая вспомогательная информация. Оба свойства доступны для программного чтения и передаются в события компонента, обеспечивая полную информацию о состоянии и контексте при взаимодействии."
		] })
	] });
}
function mn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(pn, { ...e })
	}) : pn(e);
}
//#endregion
//#region src/media/mdx/value/v-model.en.mdx
function hn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Managing value via v-model" }),
		"\n",
		o(t.p, { children: [
			"Two-way value binding using ",
			a(t.code, { children: "v-model" }),
			" (component uses standard ",
			a(t.code, { children: "modelValue" }),
			")."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "modelValue: string | number" }), " — current value"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('')\n<\/script>\n\n<template>\n  <div>\n    <button @click=\"value = 'Example'\">Set value</button>\n    <button @click=\"value = ''\">Clear</button>\n  </div>\n\n  <Component v-model=\"value\" />\n\n  <div>Current value: {{ value }}</div>\n</template>\n"
		}) })
	] });
}
function gn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(hn, { ...e })
	}) : hn(e);
}
//#endregion
//#region src/media/mdx/value/v-model.ru.mdx
function _n(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление значением через v-model" }),
		"\n",
		o(t.p, { children: [
			"Двусторонняя привязка значения через ",
			a(t.code, { children: "v-model" }),
			" (компонент использует стандартный ",
			a(t.code, { children: "modelValue" }),
			")."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "modelValue: string | number" }), " — текущее значение"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('')\n<\/script>\n\n<template>\n  <div>\n    <button @click=\"value = 'Пример'\">Установить значение</button>\n    <button @click=\"value = ''\">Очистить</button>\n  </div>\n\n  <Component v-model=\"value\" />\n\n  <div>Текущее значение: {{ value }}</div>\n</template>\n"
		}) })
	] });
}
function vn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(_n, { ...e })
	}) : _n(e);
}
//#endregion
//#region src/media/mdx/value/v-model-selected.en.mdx
function yn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Managing selection via v-model:selected" }),
		"\n",
		o(t.p, { children: [
			"Two-way binding for selected value using ",
			a(t.code, { children: "v-model:selected" }),
			" (component uses ",
			a(t.code, { children: "modelSelected" }),
			")."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "modelSelected: string | number | string[] | number[] | undefined" }), " — current selected value"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('')\n<\/script>\n\n<template>\n  <div>\n    <button @click=\"selected = 'option1'\">Select Option 1</button>\n    <button @click=\"selected = 'option2'\">Select Option 2</button>\n    <button @click=\"selected = undefined\">Clear</button>\n  </div>\n\n  <Component v-model:selected=\"selected\" :list=\"['Option 1', 'Option 2', 'Option 3']\" />\n\n  <div>Current selected value: {{ selected }}</div>\n</template>\n"
		}) })
	] });
}
function bn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(yn, { ...e })
	}) : yn(e);
}
//#endregion
//#region src/media/mdx/value/v-model-selected.ru.mdx
function xn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление выбором через v-model:selected" }),
		"\n",
		o(t.p, { children: [
			"Двусторонняя привязка выбранного значения через ",
			a(t.code, { children: "v-model:selected" }),
			" (компонент использует ",
			a(t.code, { children: "modelSelected" }),
			")."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "modelSelected: string | number | string[] | number[] | undefined" }), " — текущее выбранное значение"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('')\n<\/script>\n\n<template>\n  <div>\n    <button @click=\"selected = 'option1'\">Выбрать Option 1</button>\n    <button @click=\"selected = 'option2'\">Выбрать Option 2</button>\n    <button @click=\"selected = undefined\">Очистить</button>\n  </div>\n\n  <Component v-model:selected=\"selected\" :list=\"['Option 1', 'Option 2', 'Option 3']\" />\n\n  <div>Текущее выбранное значение: {{ selected }}</div>\n</template>\n"
		}) })
	] });
}
function Sn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(xn, { ...e })
	}) : xn(e);
}
//#endregion
//#region src/media/mdx/value/wikiMdxValue.ts
var Cn = {
	name: "Value",
	descriptions: {
		highlight: {
			en: rn,
			ru: on
		},
		labelNumber: {
			en: cn,
			ru: un
		},
		"v-model": {
			en: gn,
			ru: vn
		},
		"v-model:selected": {
			en: bn,
			ru: Sn
		},
		value: {
			en: fn,
			ru: mn
		}
	}
};
//#endregion
//#region src/media/mdx/Accordion/accordion.en.mdx
function wn(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "Expandable container for organizing content with smooth opening and closing animations, simplifying information structuring in the interface." }),
		"\n",
		a(t.p, { children: "Accordion allows creating expandable sections with automatic animations, interactive header, and state management via v-model. The component supports padding configuration, visual dividers, and content customization through slots." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Smooth expand and collapse animations" }),
			"\n",
			a(t.li, { children: "Header with label, description, and icons" }),
			"\n",
			a(t.li, { children: "State management via v-model:open" }),
			"\n",
			a(t.li, { children: "Programmatic control (toggle, toOpen, toClose)" }),
			"\n",
			a(t.li, { children: "Internal padding configuration (padding)" }),
			"\n",
			a(t.li, { children: "Visual divider between sections" }),
			"\n",
			a(t.li, { children: "Customization via head and default slots" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "FAQ sections" }),
			"\n",
			a(t.li, { children: "Settings panels" }),
			"\n",
			a(t.li, { children: "Product filters" }),
			"\n",
			a(t.li, { children: "Information blocks" }),
			"\n",
			a(t.li, { children: "Menus with subsections" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n  <!-- Basic accordion -->\n  <Accordion label=\"Question 1\">\n    <p>Answer to the question.</p>\n  </Accordion>\n\n  <!-- With state management -->\n  <Accordion\n    v-model:open=\"isOpen\"\n    label=\"Settings\"\n    icon=\"settings\"\n  >\n    <p>Settings content.</p>\n  </Accordion>\n\n  <!-- With custom header -->\n  <Accordion>\n    <template #head>\n      <div>Custom header</div>\n    </template>\n    <template #default>\n      <p>Section content.</p>\n    </template>\n  </Accordion>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Accordion is a component for creating expandable sections with animation support, state management, and flexible customization." }),
			"\n"
		] })
	] });
}
function Tn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wn, { ...e })
	}) : wn(e);
}
//#endregion
//#region src/media/mdx/Accordion/accordion.ru.mdx
function En(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Раскрывающийся контейнер для организации контента с плавными анимациями открытия и закрытия, упрощающий структурирование информации в интерфейсе." }),
		"\n",
		a(t.p, { children: "Accordion позволяет создавать раскрывающиеся секции с автоматическими анимациями, интерактивным заголовком и возможностью управления через v-model. Компонент поддерживает настройку отступов, визуальных разделителей и кастомизацию содержимого через слоты." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Плавные анимации раскрытия и сворачивания" }),
			"\n",
			a(t.li, { children: "Заголовок с меткой, описанием и иконками" }),
			"\n",
			a(t.li, { children: "Управление состоянием через v-model:open" }),
			"\n",
			a(t.li, { children: "Программное управление (toggle, toOpen, toClose)" }),
			"\n",
			a(t.li, { children: "Настройка внутренних отступов (padding)" }),
			"\n",
			a(t.li, { children: "Визуальный разделитель между секциями" }),
			"\n",
			a(t.li, { children: "Кастомизация через слоты head и default" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "FAQ секции" }),
			"\n",
			a(t.li, { children: "Панели настроек" }),
			"\n",
			a(t.li, { children: "Фильтры товаров" }),
			"\n",
			a(t.li, { children: "Информационные блоки" }),
			"\n",
			a(t.li, { children: "Меню с подразделами" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n  <!-- Базовый аккордеон -->\n  <Accordion label=\"Вопрос 1\">\n    <p>Ответ на вопрос.</p>\n  </Accordion>\n\n  <!-- С управлением состоянием -->\n  <Accordion\n    v-model:open=\"isOpen\"\n    label=\"Настройки\"\n    icon=\"settings\"\n  >\n    <p>Содержимое настроек.</p>\n  </Accordion>\n\n  <!-- С кастомным заголовком -->\n  <Accordion>\n    <template #head>\n      <div>Свой заголовок</div>\n    </template>\n    <template #default>\n      <p>Содержимое секции.</p>\n    </template>\n  </Accordion>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Accordion — компонент для создания раскрывающихся секций с поддержкой анимаций, управления состоянием и гибкой кастомизации." }),
			"\n"
		] })
	] });
}
function Dn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(En, { ...e })
	}) : En(e);
}
//#endregion
//#region src/media/mdx/Accordion/slots.en.mdx
function On(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "default(props: MotionTransformControlItem): any" }), " — Slot for placing the main accordion content that appears when the section is expanded."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "MotionTransformControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "isOpen: ComputedRef<boolean>" }), " — reactive open state."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "isShow: ComputedRef<boolean>" }), " — visible or preparing to show."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classes: MotionTransformClassList" }), " — helper CSS classes."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "idControl: string" }), " — identifier for the control element."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "idBody: string" }), " — identifier for the body element."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: AriaRoleControlPropsInclude" }), " — binding attributes for accessibility."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function kn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(On, { ...e })
	}) : On(e);
}
//#endregion
//#region src/media/mdx/Accordion/slots.ru.mdx
function An(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "default(props: MotionTransformControlItem): any" }), " — Слот для размещения основного содержимого аккордеона, которое появляется при раскрытии секции."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "MotionTransformControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "isOpen: ComputedRef<boolean>" }), " — реактивное состояние открытия."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "isShow: ComputedRef<boolean>" }), " — видим либо готовится к показу."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classes: MotionTransformClassList" }), " — вспомогательные CSS‑классы."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "idControl: string" }), " — идентификатор элемента управления."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "idBody: string" }), " — идентификатор элемента тела."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: AriaRoleControlPropsInclude" }), " — атрибуты привязки для доступности."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function jn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(An, { ...e })
	}) : An(e);
}
//#endregion
//#region src/media/mdx/Accordion/wikiMdxAccordion.ts
var Mn = {
	name: "Accordion",
	descriptions: {
		accordion: {
			en: Tn,
			ru: Dn
		},
		slots: {
			en: kn,
			ru: jn
		}
	}
};
//#endregion
//#region src/media/mdx/Actions/actions.en.mdx
function Nn(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Container for organizing action buttons with support for primary and secondary grouping, various alignment modes, and adaptive behavior." }),
		"\n",
		a(t.p, { children: "Actions centralizes the management of interactive button placement in dialogs, forms, and panels, automatically distributes space between groups, supports flexible adaptation to available space, and provides a unified API for creating consistent action sets. It serves as a fundamental component for building user interfaces with clear button hierarchy." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Core capabilities:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Button grouping (primary group via list, secondary via listSecondary)" }),
			"\n",
			a(t.li, { children: "Alignment control (left, right, center, block, none)" }),
			"\n",
			a(t.li, { children: "Adaptive behavior through flexible property (adaptive/container)" }),
			"\n",
			a(t.li, { children: "Automatic spacer between button groups" }),
			"\n",
			a(t.li, { children: "Separate attribute configuration (buttonAttrs, buttonSecondaryAttrs)" }),
			"\n",
			a(t.li, { children: "Slot support for custom content (default, secondary)" }),
			"\n",
			a(t.li, { children: "Integration with Button component with all its features" }),
			"\n",
			a(t.li, { children: "Flexible layout with automatic transition to block mode" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Action panels in dialogs and modal windows" }),
			"\n",
			a(t.li, { children: "Button sets in forms (cancel, save, apply)" }),
			"\n",
			a(t.li, { children: "Control panels with primary and auxiliary actions" }),
			"\n",
			a(t.li, { children: "Adaptive interfaces with automatic restructuring on mobile devices" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { Actions } from '@dxtmisha/constructor'\n\nconst isLoading = ref(false)\n\nconst handleSave = async () => {\n  isLoading.value = true\n  await saveData()\n  isLoading.value = false\n}\n<\/script>\n\n<template>\n  <Actions\n    align=\"right\"\n    :list=\"[\n      { label: 'Cancel' },\n      { label: 'Save', primary: true, loading: isLoading }\n    ]\"\n  />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Actions is a smart container: it automatically manages button placement, adapts to screen size, and provides visual hierarchy between primary and secondary actions." }),
			"\n"
		] })
	] });
}
function Pn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Nn, { ...e })
	}) : Nn(e);
}
//#endregion
//#region src/media/mdx/Actions/actions.ru.mdx
function Fn(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Контейнер для организации кнопок действий с поддержкой основной и вторичной группировки, различных режимов выравнивания и адаптивного поведения." }),
		"\n",
		a(t.p, { children: "Actions централизует управление расположением интерактивных кнопок в диалогах, формах и панелях, автоматически распределяет пространство между группами, поддерживает гибкую адаптацию к доступному месту и предоставляет единый API для создания консистентных наборов действий. Является фундаментальным компонентом для построения пользовательских интерфейсов с четкой иерархией кнопок." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Группировка кнопок (основная группа через list, вторичная через listSecondary)" }),
			"\n",
			a(t.li, { children: "Управление выравниванием (left, right, center, block, none)" }),
			"\n",
			a(t.li, { children: "Адаптивное поведение через свойство flexible (adaptive/container)" }),
			"\n",
			a(t.li, { children: "Автоматический спейсер между группами кнопок" }),
			"\n",
			a(t.li, { children: "Раздельная настройка атрибутов (buttonAttrs, buttonSecondaryAttrs)" }),
			"\n",
			a(t.li, { children: "Поддержка слотов для кастомного контента (default, secondary)" }),
			"\n",
			a(t.li, { children: "Интеграция с компонентом Button со всеми его возможностями" }),
			"\n",
			a(t.li, { children: "Гибкая раскладка с автоматическим переходом в блочный режим" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Панели действий в диалоговых окнах и модальных окнах" }),
			"\n",
			a(t.li, { children: "Наборы кнопок в формах (отмена, сохранение, применение)" }),
			"\n",
			a(t.li, { children: "Панели управления с основными и дополнительными действиями" }),
			"\n",
			a(t.li, { children: "Адаптивные интерфейсы с автоматической перестройкой на мобильных устройствах" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { Actions } from '@dxtmisha/constructor'\n\nconst isLoading = ref(false)\n\nconst handleSave = async () => {\n  isLoading.value = true\n  await saveData()\n  isLoading.value = false\n}\n<\/script>\n\n<template>\n  <Actions\n    align=\"right\"\n    :list=\"[\n      { label: 'Отмена' },\n      { label: 'Сохранить', primary: true, loading: isLoading }\n    ]\"\n  />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Actions — это умный контейнер: он автоматически управляет расположением кнопок, адаптируется к размеру экрана и обеспечивает визуальную иерархию между основными и вторичными действиями." }),
			"\n"
		] })
	] });
}
function In(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fn, { ...e })
	}) : Fn(e);
}
//#endregion
//#region src/media/mdx/Actions/flexible.en.mdx
function Ln(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Adaptive layout behavior" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "flexible" }),
			" property determines automatic switching to block mode when space is limited."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'adaptive'" }), " — uses media queries to determine breakpoint"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'container'" }), " — uses container queries to adapt to parent size"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Automatically applies ",
			a(t.code, { children: "align=\"block\"" }),
			" property when available space becomes smaller than a defined breakpoint. With ",
			a(t.code, { children: "adaptive" }),
			" it tracks screen width through media queries, with ",
			a(t.code, { children: "container" }),
			" it adapts to parent container size. Suitable for creating adaptive interfaces that display correctly on both desktop and mobile devices without additional code."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Automatic transition on narrow screens -->\n<Actions flexible=\"adaptive\" :list=\"[...]\" />\n\n<!-- Adapts to parent size -->\n<Actions flexible=\"container\" :list=\"[...]\" />\n"
		}) })
	] });
}
function Rn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ln, { ...e })
	}) : Ln(e);
}
//#endregion
//#region src/media/mdx/Actions/flexible.ru.mdx
function zn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Адаптивное поведение раскладки" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "flexible" }),
			" определяет автоматическое переключение раскладки в блочный режим при нехватке места."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'adaptive'" }), " — использует медиа-запросы для определения точки перехода"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'container'" }), " — использует container queries для адаптации к размеру родителя"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Автоматически применяет свойство ",
			a(t.code, { children: "align=\"block\"" }),
			" когда доступное пространство становится меньше определенного брейкпоинта. При ",
			a(t.code, { children: "adaptive" }),
			" отслеживает ширину экрана через медиа-запросы, при ",
			a(t.code, { children: "container" }),
			" адаптируется к размеру родительского контейнера. Подходит для создания адаптивных интерфейсов, которые корректно отображаются как на десктопе, так и на мобильных устройствах без дополнительного кода."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Автоматический переход на узких экранах -->\n<Actions flexible=\"adaptive\" :list=\"[...]\" />\n\n<!-- Адаптация к размеру родителя -->\n<Actions flexible=\"container\" :list=\"[...]\" />\n"
		}) })
	] });
}
function Bn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zn, { ...e })
	}) : zn(e);
}
//#endregion
//#region src/media/mdx/Actions/list.en.mdx
function Vn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Managing action button groups" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "list" }),
			" and ",
			a(t.code, { children: "listSecondary" }),
			" properties work together to organize buttons in the Actions container. They manage the rendering of primary and secondary button groups with automatic attribute application and visual separation."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "list" }), " — array of configurations for primary action buttons (Cancel, Save, Apply)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "listSecondary" }), " — array of configurations for secondary buttons (Delete, Reset, Export)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Each array element represents an object with button configuration, supporting all Button component properties (label, icon, disabled, primary, loading, and others). The component automatically applies base attributes from ",
			a(t.code, { children: "buttonAttrs" }),
			" to primary buttons and from ",
			a(t.code, { children: "buttonSecondaryAttrs" }),
			" to secondary ones. Secondary buttons are positioned separately with an automatic spacer and are hidden in ",
			a(t.code, { children: "align=\"center\"" }),
			" and ",
			a(t.code, { children: "align=\"block\"" }),
			" modes. Use ",
			a(t.code, { children: "list" }),
			" for primary actions and ",
			a(t.code, { children: "listSecondary" }),
			" for destructive or less important operations."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Primary buttons -->\n<Actions\n  :list=\"[\n    { label: 'Cancel', onClick: () => close() },\n    { label: 'Save', primary: true, onClick: () => save() }\n  ]\"\n/>\n\n<!-- Primary and secondary buttons -->\n<Actions\n  :list=\"[\n    { label: 'Cancel' },\n    { label: 'Save', primary: true }\n  ]\"\n  :list-secondary=\"[\n    { label: 'Delete', text: true, icon: 'delete', palette: 'error' }\n  ]\"\n/>\n\n<!-- Buttons with dynamic state -->\n<Actions\n  :list=\"[\n    { label: 'Cancel', disabled: isProcessing },\n    { label: 'Save', primary: true, loading: isLoading }\n  ]\"\n  :button-attrs=\"{ size: 'medium' }\"\n/>\n\n<!-- Secondary buttons with settings -->\n<Actions\n  :list=\"[{ label: 'Close' }]\"\n  :list-secondary=\"[\n    { label: 'Export', icon: 'download' },\n    { label: 'Help', icon: 'help' }\n  ]\"\n  :button-secondary-attrs=\"{ size: 'small', text: true }\"\n/>\n"
		}) })
	] });
}
function Hn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vn, { ...e })
	}) : Vn(e);
}
//#endregion
//#region src/media/mdx/Actions/list.ru.mdx
function Un(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление группами кнопок действий" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "list" }),
			" и ",
			a(t.code, { children: "listSecondary" }),
			" работают в связке для организации кнопок в контейнере Actions. Они управляют рендерингом основной и вторичной групп кнопок с автоматическим применением атрибутов и визуальным разделением."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "list" }), " — массив конфигураций для основных кнопок действий (Отмена, Сохранить, Применить)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "listSecondary" }), " — массив конфигураций для вторичных кнопок (Удалить, Сбросить, Экспорт)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Каждый элемент массива представляет собой объект с конфигурацией кнопки, поддерживающий все свойства компонента Button (label, icon, disabled, primary, loading и другие). Компонент автоматически применяет базовые атрибуты из ",
			a(t.code, { children: "buttonAttrs" }),
			" к основным кнопкам и из ",
			a(t.code, { children: "buttonSecondaryAttrs" }),
			" к вторичным. Вторичные кнопки располагаются отдельно с автоматическим спейсером и скрываются в режимах ",
			a(t.code, { children: "align=\"center\"" }),
			" и ",
			a(t.code, { children: "align=\"block\"" }),
			". Используйте ",
			a(t.code, { children: "list" }),
			" для основных действий и ",
			a(t.code, { children: "listSecondary" }),
			" для деструктивных или менее важных операций."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Основные кнопки -->\n<Actions\n  :list=\"[\n    { label: 'Отмена', onClick: () => close() },\n    { label: 'Сохранить', primary: true, onClick: () => save() }\n  ]\"\n/>\n\n<!-- Основные и вторичные кнопки -->\n<Actions\n  :list=\"[\n    { label: 'Отмена' },\n    { label: 'Сохранить', primary: true }\n  ]\"\n  :list-secondary=\"[\n    { label: 'Удалить', text: true, icon: 'delete', palette: 'error' }\n  ]\"\n/>\n\n<!-- Кнопки с динамическим состоянием -->\n<Actions\n  :list=\"[\n    { label: 'Отмена', disabled: isProcessing },\n    { label: 'Сохранить', primary: true, loading: isLoading }\n  ]\"\n  :button-attrs=\"{ size: 'medium' }\"\n/>\n\n<!-- Вторичные кнопки с настройками -->\n<Actions\n  :list=\"[{ label: 'Закрыть' }]\"\n  :list-secondary=\"[\n    { label: 'Экспорт', icon: 'download' },\n    { label: 'Справка', icon: 'help' }\n  ]\"\n  :button-secondary-attrs=\"{ size: 'small', text: true }\"\n/>\n"
		}) })
	] });
}
function Wn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Un, { ...e })
	}) : Un(e);
}
//#endregion
//#region src/media/mdx/Actions/wikiMdxActions.ts
var Gn = {
	name: "Actions",
	descriptions: {
		actions: {
			en: Pn,
			ru: In
		},
		flexible: {
			en: Rn,
			ru: Bn
		},
		list: {
			en: Hn,
			ru: Wn
		}
	}
};
//#endregion
//#region src/media/mdx/ActionSheet/actionSheet.en.mdx
function Kn(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating mobile-optimized action panels that slide up from the bottom of the screen with smooth animation." }),
		"\n",
		o(t.p, { children: [
			"ActionSheet is a specialized wrapper over the Window component with a preset ",
			a(t.code, { children: "actionSheet" }),
			" adaptive mode. The component automatically positions itself at the bottom of the screen and slides up when opened, following iOS and Material Design mobile interface patterns. Supports swipe gestures for closing, integration with the Bars component for the header, and automatic focus management."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Positioning at the bottom of the screen with slide-up animation" }),
			"\n",
			a(t.li, { children: "Touch gesture support for closing by swiping down" }),
			"\n",
			a(t.li, { children: "Integration with Bars for header display" }),
			"\n",
			a(t.li, { children: "Automatic background blocking when opened" }),
			"\n",
			a(t.li, { children: "Closing by clicking on overlay or close button" }),
			"\n",
			a(t.li, { children: "Lifecycle events (opening, closing)" }),
			"\n",
			a(t.li, { children: "Slot support for content customization" }),
			"\n",
			a(t.li, { children: "Adaptive height based on content size" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Action menus for mobile applications" }),
			"\n",
			a(t.li, { children: "Option and selection lists" }),
			"\n",
			a(t.li, { children: "Forms and filters on mobile devices" }),
			"\n",
			a(t.li, { children: "Context menus for touch interfaces" }),
			"\n",
			a(t.li, { children: "Confirmations and notifications" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n\nconst handleAction = (action) => {\n  console.log('Selected action:', action)\n  isOpen.value = false\n}\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Open Actions</button>\n\n  <ActionSheet\n    v-model:open=\"isOpen\"\n    :touchClose=\"true\"\n  >\n    <template #title>\n      <h3>Choose Action</h3>\n    </template>\n\n    <template #default>\n      <div class=\"action-list\">\n        <button @click=\"handleAction('share')\">Share</button>\n        <button @click=\"handleAction('copy')\">Copy Link</button>\n        <button @click=\"handleAction('download')\">Download</button>\n      </div>\n    </template>\n\n    <template #footer>\n      <button @click=\"isOpen = false\">Cancel</button>\n    </template>\n  </ActionSheet>\n</template>\n"
		}) })
	] });
}
function qn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Kn, { ...e })
	}) : Kn(e);
}
//#endregion
//#region src/media/mdx/ActionSheet/actionSheet.ru.mdx
function Jn(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания мобильно-оптимизированных панелей действий, выдвигающихся снизу экрана с плавной анимацией." }),
		"\n",
		o(t.p, { children: [
			"ActionSheet представляет собой специализированную обертку над компонентом Window с предустановленным адаптивным режимом ",
			a(t.code, { children: "actionSheet" }),
			". Компонент автоматически позиционируется внизу экрана и выдвигается вверх при открытии, следуя паттернам мобильных интерфейсов iOS и Material Design. Поддерживает жесты свайпа для закрытия, интеграцию с компонентом Bars для заголовка и автоматическое управление фокусом."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Позиционирование внизу экрана с анимацией выдвижения" }),
			"\n",
			a(t.li, { children: "Поддержка touch-жестов для закрытия свайпом вниз" }),
			"\n",
			a(t.li, { children: "Интеграция с Bars для отображения заголовка" }),
			"\n",
			a(t.li, { children: "Автоматическая блокировка фона при открытии" }),
			"\n",
			a(t.li, { children: "Закрытие по клику на overlay или кнопке закрытия" }),
			"\n",
			a(t.li, { children: "События жизненного цикла (открытие, закрытие)" }),
			"\n",
			a(t.li, { children: "Поддержка слотов для кастомизации контента" }),
			"\n",
			a(t.li, { children: "Адаптивная высота под размер контента" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Меню действий для мобильных приложений" }),
			"\n",
			a(t.li, { children: "Списки опций и выборов" }),
			"\n",
			a(t.li, { children: "Формы и фильтры на мобильных устройствах" }),
			"\n",
			a(t.li, { children: "Контекстные меню для touch-интерфейсов" }),
			"\n",
			a(t.li, { children: "Подтверждения и уведомления" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n\nconst handleAction = (action) => {\n  console.log('Выбрано действие:', action)\n  isOpen.value = false\n}\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Открыть действия</button>\n\n  <ActionSheet\n    v-model:open=\"isOpen\"\n    :touchClose=\"true\"\n  >\n    <template #title>\n      <h3>Выберите действие</h3>\n    </template>\n\n    <template #default>\n      <div class=\"action-list\">\n        <button @click=\"handleAction('share')\">Поделиться</button>\n        <button @click=\"handleAction('copy')\">Копировать ссылку</button>\n        <button @click=\"handleAction('download')\">Скачать</button>\n      </div>\n    </template>\n\n    <template #footer>\n      <button @click=\"isOpen = false\">Отмена</button>\n    </template>\n  </ActionSheet>\n</template>\n"
		}) })
	] });
}
function Yn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Jn, { ...e })
	}) : Jn(e);
}
//#endregion
//#region src/media/mdx/ActionSheet/touchClose.en.mdx
function Xn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Touch Close Gesture" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "touchClose" }),
			" property enables closing the ActionSheet with a swipe-down gesture."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — enables closing by swiping down (default)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " — disables gesture closing"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "When enabled, a special tab indicator (drag handle) is displayed in the header area, which users can pull down to close the panel. This follows iOS and Material Design mobile interface patterns, providing intuitive interaction on touch devices." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- With gesture closing enabled -->\n<ActionSheet :touchClose=\"true\" />\n\n<!-- Without gesture closing -->\n<ActionSheet :touchClose=\"false\" />\n"
		}) }),
		"\n",
		a(t.p, { children: "The closing gesture is triggered by swiping down in the header area. The component automatically manages touch events and closing animation, ensuring smooth follow-through with the user's finger movement." })
	] });
}
function Zn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Xn, { ...e })
	}) : Xn(e);
}
//#endregion
//#region src/media/mdx/ActionSheet/touchClose.ru.mdx
function Qn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Закрытие жестом" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "touchClose" }),
			" включает возможность закрытия ActionSheet жестом свайпа вниз."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — включает закрытие свайпом вниз (по умолчанию)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " — отключает закрытие жестом"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "При включенном свойстве в области заголовка отображается специальная tab-полоска (индикатор перетаскивания), за которую пользователь может потянуть вниз для закрытия панели. Это следует паттернам мобильных интерфейсов iOS и Material Design, обеспечивая интуитивное взаимодействие на сенсорных устройствах." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- С возможностью закрытия жестом -->\n<ActionSheet :touchClose=\"true\" />\n\n<!-- Без возможности закрытия жестом -->\n<ActionSheet :touchClose=\"false\" />\n"
		}) }),
		"\n",
		a(t.p, { children: "Жест закрытия срабатывает при свайпе вниз в области заголовка. Компонент автоматически управляет touch-событиями и анимацией закрытия, обеспечивая плавное следование за пальцем пользователя." })
	] });
}
function $n(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Qn, { ...e })
	}) : Qn(e);
}
//#endregion
//#region src/media/mdx/ActionSheet/wikiMdxActionSheet.ts
var er = {
	name: "ActionSheet",
	descriptions: {
		actionSheet: {
			en: qn,
			ru: Yn
		},
		touchClose: {
			en: Zn,
			ru: $n
		}
	}
};
//#endregion
//#region src/media/mdx/Anchor/anchor.en.mdx
function tr(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating anchor links with smooth scrolling and URL copying capabilities." }),
		"\n",
		a(t.p, { children: "Anchor provides interactive anchor links for navigating through page sections. The component automatically handles clicks, updates the URL address, supports smooth scrolling with customizable offset, and integrates with Tooltip for displaying copy notifications. It can work both in regular navigation mode and in link copying mode to clipboard." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Smooth scrolling to target element with configurable parameters" }),
			"\n",
			a(t.li, { children: "Automatic navigation on page load based on URL hash" }),
			"\n",
			a(t.li, { children: "Copy mode for copying full link to clipboard" }),
			"\n",
			a(t.li, { children: "Tooltip integration for copy notifications" }),
			"\n",
			a(t.li, { children: "Icon support for visual styling" }),
			"\n",
			a(t.li, { children: "Hidden anchors for creating invisible navigation points" }),
			"\n",
			a(t.li, { children: "URL updates via history API without page reload" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Navigation through documentation sections and long pages" }),
			"\n",
			a(t.li, { children: "Anchors for headings with copy link button" }),
			"\n",
			a(t.li, { children: "Table of contents and page navigation menu" }),
			"\n",
			a(t.li, { children: "\"Share link to section\" buttons" }),
			"\n",
			a(t.li, { children: "Creating invisible anchor points for programmatic navigation" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Regular anchor -->\n  <Anchor name=\"section-1\" text=\"Go to section\" />\n\n  <!-- With copy mode -->\n  <Anchor name=\"section-2\" text=\"Copy link\" isCopy />\n\n  <!-- Hidden anchor -->\n  <Anchor name=\"section-3\" hide />\n</template>\n"
		}) })
	] });
}
function nr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(tr, { ...e })
	}) : tr(e);
}
//#endregion
//#region src/media/mdx/Anchor/anchor.ru.mdx
function rr(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания якорных ссылок с плавной прокруткой и возможностью копирования URL." }),
		"\n",
		a(t.p, { children: "Anchor предоставляет интерактивные якорные ссылки для навигации по разделам страницы. Компонент автоматически обрабатывает клики, обновляет URL-адрес, поддерживает плавную прокрутку с настраиваемым отступом и интегрируется с Tooltip для отображения уведомлений при копировании. Может работать как в режиме обычной навигации, так и в режиме копирования ссылки в буфер обмена." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Плавная прокрутка к целевому элементу с настройкой параметров" }),
			"\n",
			a(t.li, { children: "Автоматическая навигация при загрузке страницы по хешу в URL" }),
			"\n",
			a(t.li, { children: "Режим копирования полной ссылки в буфер обмена" }),
			"\n",
			a(t.li, { children: "Интеграция с Tooltip для уведомлений о копировании" }),
			"\n",
			a(t.li, { children: "Поддержка иконок для визуального оформления" }),
			"\n",
			a(t.li, { children: "Скрытые якоря для создания невидимых точек навигации" }),
			"\n",
			a(t.li, { children: "Обновление URL через history API без перезагрузки страницы" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Навигация по разделам документации и длинных страниц" }),
			"\n",
			a(t.li, { children: "Якоря для заголовков с кнопкой копирования ссылки" }),
			"\n",
			a(t.li, { children: "Оглавление и меню навигации по странице" }),
			"\n",
			a(t.li, { children: "Кнопки \"Поделиться ссылкой на раздел\"" }),
			"\n",
			a(t.li, { children: "Создание невидимых якорных точек для программной навигации" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Обычный якорь -->\n  <Anchor name=\"section-1\" text=\"Перейти к разделу\" />\n\n  <!-- С копированием -->\n  <Anchor name=\"section-2\" text=\"Скопировать ссылку\" isCopy />\n\n  <!-- Скрытый якорь -->\n  <Anchor name=\"section-3\" hide />\n</template>\n"
		}) })
	] });
}
function ir(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(rr, { ...e })
	}) : rr(e);
}
//#endregion
//#region src/media/mdx/Anchor/expose.go.en.mdx
function ar(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "go(): void" }),
			" — Method for scrolling the page to the current anchor element. Uses scroll settings (",
			a(t.code, { children: "behavior" }),
			", ",
			a(t.code, { children: "block" }),
			", ",
			a(t.code, { children: "inline" }),
			", ",
			a(t.code, { children: "shift" }),
			") and updates the page URL."
		] }),
		"\n"
	] });
}
function or(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ar, { ...e })
	}) : ar(e);
}
//#endregion
//#region src/media/mdx/Anchor/expose.go.ru.mdx
function sr(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "go(): void" }),
			" — Метод для прокрутки страницы к текущему элементу якоря. Использует настройки прокрутки (",
			a(t.code, { children: "behavior" }),
			", ",
			a(t.code, { children: "block" }),
			", ",
			a(t.code, { children: "inline" }),
			", ",
			a(t.code, { children: "shift" }),
			") и обновляет URL страницы."
		] }),
		"\n"
	] });
}
function cr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(sr, { ...e })
	}) : sr(e);
}
//#endregion
//#region src/media/mdx/Anchor/hide.en.mdx
function lr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Hidden anchors" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "hide" }),
			" property creates an invisible anchor point for programmatic navigation without visual representation."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "hide" }),
				" — hides the visual representation of the component (default ",
				a(t.code, { children: "false" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "name" }), " — anchor name for navigation (required property)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"When ",
			a(t.code, { children: "hide" }),
			" is enabled, the component renders as a hidden ",
			a(t.code, { children: "<a name=\"...\">" }),
			" element without text, icons, or styling. This is useful for creating invisible navigation points that can be programmatically scrolled to or used as target elements for other anchors. The hidden anchor remains in the DOM and is accessible for navigation via URL hash or scroll methods."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Hidden anchor in section -->\n  <section>\n    <Anchor name=\"section-start\" hide />\n    <h2>Section heading</h2>\n  </section>\n\n  <!-- Combination of hidden and visible -->\n  <h3>\n    <Anchor name=\"heading\" hide />\n    Heading\n    <Anchor name=\"heading\" isCopy iconTag=\"link\" />\n  </h3>\n</template>\n"
		}) })
	] });
}
function ur(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(lr, { ...e })
	}) : lr(e);
}
//#endregion
//#region src/media/mdx/Anchor/hide.ru.mdx
function dr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Скрытые якоря" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "hide" }),
			" создаёт невидимую якорную точку для программной навигации без визуального представления."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "hide" }),
				" — скрывает визуальное представление компонента (по умолчанию ",
				a(t.code, { children: "false" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "name" }), " — имя якоря для навигации (обязательное свойство)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"При включённом ",
			a(t.code, { children: "hide" }),
			" компонент рендерится как скрытый элемент ",
			a(t.code, { children: "<a name=\"...\">" }),
			" без текста, иконок и стилей оформления. Это полезно для создания невидимых точек навигации, к которым можно программно прокручивать страницу или использовать их как целевые элементы для других якорей. Скрытый якорь остаётся в DOM и доступен для навигации через URL хеш или методы прокрутки."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Скрытый якорь в секции -->\n  <section>\n    <Anchor name=\"section-start\" hide />\n    <h2>Заголовок раздела</h2>\n  </section>\n\n  <!-- Комбинация скрытого и видимого -->\n  <h3>\n    <Anchor name=\"heading\" hide />\n    Заголовок\n    <Anchor name=\"heading\" isCopy iconTag=\"link\" />\n  </h3>\n</template>\n"
		}) })
	] });
}
function fr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(dr, { ...e })
	}) : dr(e);
}
//#endregion
//#region src/media/mdx/Anchor/isCopy.en.mdx
function pr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Copy link" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "isCopy" }),
			" property switches the component to anchor link copying mode to clipboard."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isCopy" }),
				" — enables link copying mode (default ",
				a(t.code, { children: "false" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconTag" }), " — icon displayed in copy mode"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconContentCopy" }), " — icon shown after successful copy"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "delayHide" }),
				" — delay before hiding notification in milliseconds (default ",
				a(t.code, { children: "3072" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"When ",
			a(t.code, { children: "isCopy" }),
			" is enabled, clicking the component doesn't scroll to the anchor but copies the full link (including origin and pathname) to clipboard. After copying, a Tooltip with notification automatically opens and closes after the time specified in ",
			a(t.code, { children: "delayHide" }),
			". The icon changes from ",
			a(t.code, { children: "iconTag" }),
			" to ",
			a(t.code, { children: "iconContentCopy" }),
			" for visual confirmation of the action."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Basic mode -->\n  <Anchor name=\"section\" text=\"Copy link\" isCopy />\n\n  <!-- With custom icons -->\n  <Anchor name=\"heading\" isCopy iconTag=\"share\" iconContentCopy=\"check\" />\n</template>\n"
		}) })
	] });
}
function mr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(pr, { ...e })
	}) : pr(e);
}
//#endregion
//#region src/media/mdx/Anchor/isCopy.ru.mdx
function hr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Копирование ссылки" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "isCopy" }),
			" переключает компонент в режим копирования ссылки на якорь в буфер обмена."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isCopy" }),
				" — включает режим копирования ссылки (по умолчанию ",
				a(t.code, { children: "false" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconTag" }), " — иконка, отображаемая в режиме копирования"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconContentCopy" }), " — иконка, показываемая после успешного копирования"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "delayHide" }),
				" — задержка перед скрытием уведомления в миллисекундах (по умолчанию ",
				a(t.code, { children: "3072" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"При включённом ",
			a(t.code, { children: "isCopy" }),
			" клик по компоненту не выполняет прокрутку к якорю, а копирует полную ссылку (включая origin и pathname) в буфер обмена. После копирования автоматически открывается Tooltip с уведомлением, который закрывается через время, указанное в ",
			a(t.code, { children: "delayHide" }),
			". Иконка меняется с ",
			a(t.code, { children: "iconTag" }),
			" на ",
			a(t.code, { children: "iconContentCopy" }),
			" для визуального подтверждения действия."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Базовый режим -->\n  <Anchor name=\"section\" text=\"Скопировать ссылку\" isCopy />\n\n  <!-- С кастомными иконками -->\n  <Anchor name=\"heading\" isCopy iconTag=\"share\" iconContentCopy=\"check\" />\n</template>\n"
		}) })
	] });
}
function gr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(hr, { ...e })
	}) : hr(e);
}
//#endregion
//#region src/media/mdx/Anchor/scroll.en.mdx
function _r(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Scroll Settings" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "behavior" }),
			", ",
			a(t.code, { children: "block" }),
			", ",
			a(t.code, { children: "inline" }),
			", and ",
			a(t.code, { children: "shift" }),
			" properties control the scrolling behavior to the element when navigating via an anchor."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "behavior" }),
				" — defines the scroll transition animation (",
				a(t.code, { children: "auto" }),
				", ",
				a(t.code, { children: "smooth" }),
				", ",
				a(t.code, { children: "instant" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "block" }),
				" — vertical alignment of the element (",
				a(t.code, { children: "start" }),
				", ",
				a(t.code, { children: "center" }),
				", ",
				a(t.code, { children: "end" }),
				", ",
				a(t.code, { children: "nearest" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "inline" }),
				" — horizontal alignment of the element (",
				a(t.code, { children: "start" }),
				", ",
				a(t.code, { children: "center" }),
				", ",
				a(t.code, { children: "end" }),
				", ",
				a(t.code, { children: "nearest" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "shift" }), " — scroll offset from the top edge (in pixels)"] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				a(t.strong, { children: "Note:" }),
				" If the ",
				a(t.code, { children: "shift" }),
				" property is set, the component uses ",
				a(t.code, { children: "window.scrollTo" }),
				" instead of ",
				a(t.code, { children: "element.scrollIntoView" }),
				". In this case, the ",
				a(t.code, { children: "block" }),
				" and ",
				a(t.code, { children: "inline" }),
				" properties are ignored, and scrolling is always aligned to the top edge of the element with the specified offset."
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "These properties allow you to customize exactly how the page scrolls to the target element. For example, you can enable smooth scrolling or change the positioning of the element on the screen after scrolling." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <Anchor\n    href=\"#target\"\n    behavior=\"smooth\"\n    block=\"center\"\n    inline=\"nearest\"\n  >\n    Go to element\n  </Anchor>\n\n  <Anchor\n    href=\"#target\"\n    :shift=\"100\"\n  >\n    Go with offset\n  </Anchor>\n</template>\n"
		}) })
	] });
}
function vr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(_r, { ...e })
	}) : _r(e);
}
//#endregion
//#region src/media/mdx/Anchor/scroll.ru.mdx
function yr(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Настройка прокрутки" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "behavior" }),
			", ",
			a(t.code, { children: "block" }),
			", ",
			a(t.code, { children: "inline" }),
			" и ",
			a(t.code, { children: "shift" }),
			" управляют поведением прокрутки к элементу при переходе по якорю."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "behavior" }),
				" — определяет анимацию прокрутки (",
				a(t.code, { children: "auto" }),
				", ",
				a(t.code, { children: "smooth" }),
				", ",
				a(t.code, { children: "instant" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "block" }),
				" — вертикальное выравнивание элемента (",
				a(t.code, { children: "start" }),
				", ",
				a(t.code, { children: "center" }),
				", ",
				a(t.code, { children: "end" }),
				", ",
				a(t.code, { children: "nearest" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "inline" }),
				" — горизонтальное выравнивание элемента (",
				a(t.code, { children: "start" }),
				", ",
				a(t.code, { children: "center" }),
				", ",
				a(t.code, { children: "end" }),
				", ",
				a(t.code, { children: "nearest" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "shift" }), " — смещение прокрутки от верхнего края (в пикселях)"] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				a(t.strong, { children: "Примечание:" }),
				" Если задано свойство ",
				a(t.code, { children: "shift" }),
				", компонент использует ",
				a(t.code, { children: "window.scrollTo" }),
				" вместо ",
				a(t.code, { children: "element.scrollIntoView" }),
				". В этом случае свойства ",
				a(t.code, { children: "block" }),
				" и ",
				a(t.code, { children: "inline" }),
				" игнорируются, и прокрутка всегда выполняется к верхней границе элемента с учетом указанного смещения."
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Эти свойства позволяют настроить, как именно страница будет прокручиваться к целевому элементу. Например, можно сделать плавную прокрутку или изменить позиционирование элемента на экране после прокрутки." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <Anchor\n    href=\"#target\"\n    behavior=\"smooth\"\n    block=\"center\"\n    inline=\"nearest\"\n  >\n    Перейти к элементу\n  </Anchor>\n\n  <Anchor\n    href=\"#target\"\n    :shift=\"100\"\n  >\n    Перейти со смещением\n  </Anchor>\n</template>\n"
		}) })
	] });
}
function br(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(yr, { ...e })
	}) : yr(e);
}
//#endregion
//#region src/media/mdx/Anchor/wikiMdxAnchor.ts
var xr = {
	name: "Anchor",
	descriptions: {
		anchor: {
			en: nr,
			ru: ir
		},
		"expose.go": {
			en: or,
			ru: cr
		},
		hide: {
			en: ur,
			ru: fr
		},
		isCopy: {
			en: mr,
			ru: gr
		},
		scroll: {
			en: vr,
			ru: br
		}
	}
};
//#endregion
//#region src/media/mdx/Arrow/arrow.en.mdx
function Sr(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for displaying a graphical indicator (arrow) used to visually link floating elements to their target." }),
		"\n",
		a(t.p, { children: "Arrow provides automatic or manual positioning of the indicator. It is often used within Tooltip, Popover, and Dropdown components to indicate the direction towards the trigger or target element. The component supports adaptation to various sizes and styles, and can dynamically update its position." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic and manual positioning (top, bottom, left, right)" }),
			"\n",
			a(t.li, { children: "Support for inverted style" }),
			"\n",
			a(t.li, { children: "Binding to a target element (elementTarget)" }),
			"\n",
			a(t.li, { children: "Dynamic position updates" }),
			"\n",
			a(t.li, { children: "Customizable SVG arrow graphics" }),
			"\n",
			a(t.li, { children: "Integration with positioning components" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Indicators in tooltips" }),
			"\n",
			a(t.li, { children: "Arrows in dropdown menus and popovers" }),
			"\n",
			a(t.li, { children: "Visual links in tour guides" }),
			"\n",
			a(t.li, { children: "Directional indicators in the interface" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { Arrow } from 'dxt-ui'\n<\/script>\n\n<template>\n  <div class=\"relative p-4 border rounded\">\n    Content with arrow\n    <Arrow position=\"top\" />\n  </div>\n</template>\n"
		}) })
	] });
}
function Cr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sr, { ...e })
	}) : Sr(e);
}
//#endregion
//#region src/media/mdx/Arrow/arrow.ru.mdx
function wr(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для отображения графического указателя (стрелки), используемого для визуальной связи всплывающих элементов с их целью." }),
		"\n",
		a(t.p, { children: "Arrow обеспечивает автоматическое или ручное позиционирование указателя. Часто применяется в составе компонентов Tooltip, Popover и Dropdown для указания направления на триггер или целевой элемент. Компонент поддерживает адаптацию под различные размеры и стили, а также может динамически обновлять свое положение." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическое и ручное позиционирование (top, bottom, left, right)" }),
			"\n",
			a(t.li, { children: "Поддержка инвертированного стиля" }),
			"\n",
			a(t.li, { children: "Привязка к целевому элементу (elementTarget)" }),
			"\n",
			a(t.li, { children: "Динамическое обновление положения" }),
			"\n",
			a(t.li, { children: "Настраиваемая SVG-графика стрелки" }),
			"\n",
			a(t.li, { children: "Интеграция с компонентами позиционирования" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Указатели во всплывающих подсказках" }),
			"\n",
			a(t.li, { children: "Стрелки в выпадающих меню и поповерах" }),
			"\n",
			a(t.li, { children: "Визуальные связи в пошаговых руководствах" }),
			"\n",
			a(t.li, { children: "Индикаторы направления в интерфейсе" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { Arrow } from 'dxt-ui'\n<\/script>\n\n<template>\n  <div class=\"relative p-4 border rounded\">\n    Контент с указателем\n    <Arrow position=\"top\" />\n  </div>\n</template>\n"
		}) })
	] });
}
function Tr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wr, { ...e })
	}) : wr(e);
}
//#endregion
//#region src/media/mdx/Arrow/wikiMdxArrow.ts
var Er = {
	name: "Arrow",
	descriptions: { arrow: {
		en: Cr,
		ru: Tr
	} }
};
//#endregion
//#region src/media/mdx/Badge/badge.en.mdx
function Dr(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "Compact visual indicator for displaying status, notification counts, or markers on interface elements with support for various display modes and automatic overflow management." }),
		"\n",
		a(t.p, { children: "Badge provides a universal solution for creating informative indicators with flexible content configuration, positioning, and appearance. The component supports displaying text, numbers with maximum value limits, icons, and dot indicators, automatically hides when content is absent, and integrates with the slot system for customization." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Multiple display modes (text, numbers, icons, dot indicator)" }),
			"\n",
			a(t.li, { children: "Automatic overflow management with maximum value configuration" }),
			"\n",
			a(t.li, { children: "Flexible positioning relative to parent elements (overlap, vertical, horizontal)" }),
			"\n",
			a(t.li, { children: "Automatic hiding when content is absent (dot, icon, label)" }),
			"\n",
			a(t.li, { children: "Integration with LabelNumberInclude for numeric value processing" }),
			"\n",
			a(t.li, { children: "Icon support through IconInclude" }),
			"\n",
			a(t.li, { children: "Color variants for different status types" }),
			"\n",
			a(t.li, { children: "Visibility control via hide property" }),
			"\n",
			a(t.li, { children: "Customization through slots for complete content control" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Unread notification count indicators" }),
			"\n",
			a(t.li, { children: "Status markers on user avatars (online/offline)" }),
			"\n",
			a(t.li, { children: "Item counters in shopping carts or lists" }),
			"\n",
			a(t.li, { children: "New message indicators in chats" }),
			"\n",
			a(t.li, { children: "Status markers on product cards" }),
			"\n",
			a(t.li, { children: "Visual hints about available updates" }),
			"\n",
			a(t.li, { children: "Numeric indicators on tabs and menu items" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst cartCount = ref(5)\nconst unreadMessages = ref(127)\nconst isOnline = ref(true)\n\nconst addToCart = () => {\n  cartCount.value++\n}\n<\/script>\n\n<template>\n  <div class=\"badge-examples\">\n    <!-- Basic badge with number -->\n    <div style=\"position: relative; display: inline-block;\">\n      <IconButton icon=\"shopping_cart\" @click=\"addToCart\"/>\n      <Badge :label=\"cartCount\"/>\n    </div>\n\n    <!-- Badge with maximum value limit -->\n    <div style=\"position: relative; display: inline-block;\">\n      <IconButton icon=\"notifications\"/>\n      <Badge :label=\"unreadMessages\" :label-max=\"99\"/>\n    </div>\n\n    <!-- Dot status indicator -->\n    <div style=\"position: relative; display: inline-block;\">\n      <Avatar src=\"/user-avatar.jpg\"/>\n      <Badge\n        dot\n        :selected=\"isOnline\"\n        overlap=\"circular\"\n      />\n    </div>\n\n    <!-- Badge with icon and text -->\n    <div style=\"position: relative; display: inline-block;\">\n      <Button>Profile</Button>\n      <Badge\n        icon=\"verified\"\n        label=\"Pro\"\n        overlap=\"static\"\n      />\n    </div>\n\n    <!-- Badge with custom positioning -->\n    <div style=\"position: relative; display: inline-block;\">\n      <Card>Content</Card>\n      <Badge\n        label=\"New\"\n        vertical=\"bottom\"\n        horizontal=\"left\"\n      />\n    </div>\n  </div>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Badge is designed as a universal UI component for creating compact visual indicators with comprehensive support for various content types, automatic display management, and flexible positioning settings." }),
			"\n"
		] })
	] });
}
function Or(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Dr, { ...e })
	}) : Dr(e);
}
//#endregion
//#region src/media/mdx/Badge/badge.ru.mdx
function kr(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Компактный визуальный индикатор для отображения статуса, количества уведомлений или маркеров на элементах интерфейса с поддержкой различных режимов отображения и автоматическим управлением переполнением." }),
		"\n",
		a(t.p, { children: "Badge предоставляет универсальное решение для создания информативных индикаторов с гибкой настройкой содержимого, позиционирования и внешнего вида. Компонент поддерживает отображение текста, чисел с ограничением максимального значения, иконок и точечных индикаторов, автоматически скрывается при отсутствии контента и интегрируется с системой слотов для кастомизации." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Множественные режимы отображения (текст, числа, иконки, точечный индикатор)" }),
			"\n",
			a(t.li, { children: "Автоматическое управление переполнением с настройкой максимального значения" }),
			"\n",
			a(t.li, { children: "Гибкое позиционирование относительно родительских элементов (overlap, vertical, horizontal)" }),
			"\n",
			a(t.li, { children: "Автоматическое скрытие при отсутствии контента (dot, icon, label)" }),
			"\n",
			a(t.li, { children: "Интеграция с LabelNumberInclude для обработки числовых значений" }),
			"\n",
			a(t.li, { children: "Поддержка иконок через IconInclude" }),
			"\n",
			a(t.li, { children: "Цветовые варианты для различных типов статуса" }),
			"\n",
			a(t.li, { children: "Управление видимостью через свойство hide" }),
			"\n",
			a(t.li, { children: "Кастомизация через слоты для полного контроля над содержимым" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Индикаторы количества непрочитанных уведомлений" }),
			"\n",
			a(t.li, { children: "Маркеры статуса на аватарах пользователей (онлайн/оффлайн)" }),
			"\n",
			a(t.li, { children: "Счетчики элементов в корзине или списках" }),
			"\n",
			a(t.li, { children: "Индикаторы новых сообщений в чатах" }),
			"\n",
			a(t.li, { children: "Статусные маркеры на карточках товаров" }),
			"\n",
			a(t.li, { children: "Визуальные подсказки о наличии обновлений" }),
			"\n",
			a(t.li, { children: "Числовые индикаторы на вкладках и пунктах меню" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst cartCount = ref(5)\nconst unreadMessages = ref(127)\nconst isOnline = ref(true)\n\nconst addToCart = () => {\n  cartCount.value++\n}\n<\/script>\n\n<template>\n  <div class=\"badge-examples\">\n    <!-- Базовый бейдж с числом -->\n    <div style=\"position: relative; display: inline-block;\">\n      <IconButton icon=\"shopping_cart\" @click=\"addToCart\"/>\n      <Badge :label=\"cartCount\"/>\n    </div>\n\n    <!-- Бейдж с ограничением максимального значения -->\n    <div style=\"position: relative; display: inline-block;\">\n      <IconButton icon=\"notifications\"/>\n      <Badge :label=\"unreadMessages\" :label-max=\"99\"/>\n    </div>\n\n    <!-- Точечный индикатор статуса -->\n    <div style=\"position: relative; display: inline-block;\">\n      <Avatar src=\"/user-avatar.jpg\"/>\n      <Badge\n        dot\n        :selected=\"isOnline\"\n        overlap=\"circular\"\n      />\n    </div>\n\n    <!-- Бейдж с иконкой и текстом -->\n    <div style=\"position: relative; display: inline-block;\">\n      <Button>Профиль</Button>\n      <Badge\n        icon=\"verified\"\n        label=\"Pro\"\n        overlap=\"static\"\n      />\n    </div>\n\n    <!-- Бейдж с кастомным позиционированием -->\n    <div style=\"position: relative; display: inline-block;\">\n      <Card>Контент</Card>\n      <Badge\n        label=\"Новое\"\n        vertical=\"bottom\"\n        horizontal=\"left\"\n      />\n    </div>\n  </div>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Badge разработан как универсальный UI-компонент для создания компактных визуальных индикаторов с комплексной поддержкой различных типов контента, автоматическим управлением отображением и гибкими настройками позиционирования." }),
			"\n"
		] })
	] });
}
function Ar(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(kr, { ...e })
	}) : kr(e);
}
//#endregion
//#region src/media/mdx/Badge/dot.en.mdx
function jr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Dot indicator" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "dot" }),
			" property transforms Badge into a compact circular indicator without text content, used for simple visual status notifications."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — displays Badge as a dot indicator"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " — displays Badge in standard mode with content (default)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Creates a minimalist visual marker for indicating states, activity, or notifications without displaying specific values. Ideal for user presence indicators (online/offline), unread notification markers, and status dots on interface elements. When the ",
			a(t.code, { children: "dot" }),
			" property is activated, any text content or numeric values are ignored, displaying only the color indicator."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Standard Badge with content -->\n<Badge label=\"5\" />\n\n<!-- Dot indicator -->\n<Badge dot />\n\n<!-- Dot indicator for online status -->\n<Badge dot :selected=\"isOnline\" overlap=\"circular\" />\n"
		}) })
	] });
}
function Mr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(jr, { ...e })
	}) : jr(e);
}
//#endregion
//#region src/media/mdx/Badge/dot.ru.mdx
function Nr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Точечный индикатор" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "dot" }),
			" преобразует Badge в компактный круглый индикатор без текстового содержимого, используемый для простых визуальных уведомлений о статусе."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — отображает Badge как точечный индикатор"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " — отображает Badge в стандартном режиме с контентом (по умолчанию)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Создает минималистичный визуальный маркер для индикации состояний, активности или уведомлений без отображения конкретных значений. Идеально подходит для индикаторов присутствия пользователей (онлайн/оффлайн), маркеров непрочитанных уведомлений и статусных точек на элементах интерфейса. При активации свойства ",
			a(t.code, { children: "dot" }),
			" любое текстовое содержимое или числовые значения игнорируются, отображается только цветовой индикатор."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Стандартный Badge с контентом -->\n<Badge label=\"5\" />\n\n<!-- Точечный индикатор -->\n<Badge dot />\n\n<!-- Точечный индикатор статуса онлайн -->\n<Badge dot :selected=\"isOnline\" overlap=\"circular\" />\n"
		}) })
	] });
}
function Pr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Nr, { ...e })
	}) : Nr(e);
}
//#endregion
//#region src/media/mdx/Badge/outline.en.mdx
function Fr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Outline badges (outline)" }),
		"\n",
		o(t.p, { children: [
			"The Badge component supports outline mode via the ",
			a(t.code, { children: "outline" }),
			" property. In this mode, badges have a minimalist visual style with transparent background and colored border:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Minimalist design" }), " - suitable for interfaces requiring reduced visual load"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Transparent background" }), " - maintains clean appearance when displaying secondary information"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Subtle presence" }), " - less visually prominent than filled variants"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Flexible adaptation" }), " - works well with various background colors and themes"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Outline mode is especially useful for creating secondary indicators, informational labels, and status markers that should be noticeable but not dominant in the interface's visual hierarchy." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Badge outline overlap=\"static\">99+</Badge>\n<Badge outline overlap=\"static\" icon=\"info\">Info</Badge>\n<Badge outline dot overlap=\"static\"/>\n"
		}) })
	] });
}
function Ir(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fr, { ...e })
	}) : Fr(e);
}
//#endregion
//#region src/media/mdx/Badge/outline.ru.mdx
function Lr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Контурные бейджи (outline)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Badge поддерживает контурный режим через свойство ",
			a(t.code, { children: "outline" }),
			". В этом режиме бейджи имеют минималистичный визуальный стиль с прозрачным фоном и цветной границей:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Минималистичный дизайн" }), " - подходит для интерфейсов, требующих сниженной визуальной нагрузки"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Прозрачный фон" }), " - поддерживает чистый внешний вид при отображении второстепенной информации"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Тонкое присутствие" }), " - менее визуально заметный, чем заполненные варианты"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Гибкая адаптация" }), " - хорошо работает с различными цветами фона и темами"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Outline режим особенно полезен для создания второстепенных индикаторов, информационных меток и статусных маркеров, которые должны быть заметными, но не доминирующими в визуальной иерархии интерфейса." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Badge outline overlap=\"static\">99+</Badge>\n<Badge outline overlap=\"static\" icon=\"info\">Инфо</Badge>\n<Badge outline dot overlap=\"static\"/>\n"
		}) })
	] });
}
function Rr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Lr, { ...e })
	}) : Lr(e);
}
//#endregion
//#region src/media/mdx/Badge/primary.en.mdx
function zr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Primary badges (primary)" }),
		"\n",
		o(t.p, { children: [
			"The Badge component supports primary mode via the ",
			a(t.code, { children: "primary" }),
			" property. In this mode, badges have the most prominent visual style with bright brand colors:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "High contrast" }), " - uses primary brand colors for maximum visibility"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Bold appearance" }), " - draws attention to important information"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Enhanced visibility" }), " - designed to stand out against various backgrounds"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Accessibility support" }), " - strong contrast ratios for readability"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Primary mode is especially useful for creating critical notification indicators, active statuses, and high-priority markers that require immediate user attention in the interface." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Badge primary overlap=\"static\">5</Badge>\n<Badge primary overlap=\"static\" icon=\"warning\">Important</Badge>\n<Badge primary dot overlap=\"static\"/>\n"
		}) })
	] });
}
function Br(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zr, { ...e })
	}) : zr(e);
}
//#endregion
//#region src/media/mdx/Badge/primary.ru.mdx
function Vr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Основные бейджи (primary)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Badge поддерживает основной режим через свойство ",
			a(t.code, { children: "primary" }),
			". В этом режиме бейджи имеют наиболее заметный визуальный стиль с яркими цветами бренда:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Высокий контраст" }), " - использует основные цвета бренда для максимальной видимости"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Яркий внешний вид" }), " - привлекает внимание к важной информации"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Повышенная видимость" }), " - разработан для выделения на различных фонах"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Поддержка доступности" }), " - сильные контрастные соотношения для читаемости"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Primary режим особенно полезен для создания критических индикаторов уведомлений, активных статусов и высокоприоритетных маркеров, которые требуют немедленного внимания пользователя в интерфейсе." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Badge primary overlap=\"static\">5</Badge>\n<Badge primary overlap=\"static\" icon=\"warning\">Важно</Badge>\n<Badge primary dot overlap=\"static\"/>\n"
		}) })
	] });
}
function Hr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vr, { ...e })
	}) : Vr(e);
}
//#endregion
//#region src/media/mdx/Badge/secondary.en.mdx
function Ur(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Secondary badges (secondary)" }),
		"\n",
		o(t.p, { children: [
			"The Badge component supports secondary mode via the ",
			a(t.code, { children: "secondary" }),
			" property. In this mode, badges have a balanced visual style between primary and outline variants:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Moderate contrast" }), " - balanced color treatment for noticeability without overwhelming"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Softer appearance" }), " - less intense than primary while maintaining clear visibility"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Versatile styling" }), " - works well in various interface contexts"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Content harmony" }), " - complements primary elements without visual competition"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Secondary mode is especially useful for creating supporting information indicators, status updates, and categorical labels that are important but don't require critical attention in the visual hierarchy." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Badge secondary overlap=\"static\">12</Badge>\n<Badge secondary overlap=\"static\" icon=\"info\">Updated</Badge>\n<Badge secondary dot overlap=\"static\"/>\n"
		}) })
	] });
}
function Wr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ur, { ...e })
	}) : Ur(e);
}
//#endregion
//#region src/media/mdx/Badge/secondary.ru.mdx
function Gr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Второстепенные бейджи (secondary)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Badge поддерживает второстепенный режим через свойство ",
			a(t.code, { children: "secondary" }),
			". В этом режиме бейджи имеют сбалансированный визуальный стиль между primary и outline вариантами:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Умеренный контраст" }), " - сбалансированная цветовая обработка для заметности без подавления"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Более мягкий внешний вид" }), " - менее интенсивный, чем primary, сохраняя четкую видимость"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Универсальная стилизация" }), " - хорошо работает в различных контекстах интерфейса"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Гармония контента" }), " - дополняет основные элементы без визуальной конкуренции"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Secondary режим особенно полезен для создания поддерживающих индикаторов информации, статусных обновлений и категориальных меток, которые важны, но не требуют критического внимания в визуальной иерархии." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Badge secondary overlap=\"static\">12</Badge>\n<Badge secondary overlap=\"static\" icon=\"info\">Обновлено</Badge>\n<Badge secondary dot overlap=\"static\"/>\n"
		}) })
	] });
}
function Kr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gr, { ...e })
	}) : Gr(e);
}
//#endregion
//#region src/media/mdx/Badge/wikiMdxBadge.ts
var qr = {
	name: "Badge",
	descriptions: {
		badge: {
			en: Or,
			ru: Ar
		},
		dot: {
			en: Mr,
			ru: Pr
		},
		outline: {
			en: Ir,
			ru: Rr
		},
		primary: {
			en: Br,
			ru: Hr
		},
		secondary: {
			en: Wr,
			ru: Kr
		}
	}
};
//#endregion
//#region src/media/mdx/Bars/bars.en.mdx
function Jr(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "Versatile bar component for application headers, toolbars, and contextual action bars with support for navigation, action buttons, and bulk operation modes." }),
		"\n",
		a(t.p, { children: "Bars provides a comprehensive solution for creating consistent top-level interface elements with structured layout for titles, descriptions, back navigation, and interactive button sets. The component integrates action mode switching for contextual operations, unified button configuration, and skeleton loading states for creating modern application headers and toolbars." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Structured text hierarchy (label and description with dynamic updates)" }),
			"\n",
			a(t.li, { children: "Configurable back button with navigation and close icon switching" }),
			"\n",
			a(t.li, { children: "Flexible button arrays (bars) for primary actions on the right side" }),
			"\n",
			a(t.li, { children: "Action mode with separate content and button set for bulk operations" }),
			"\n",
			a(t.li, { children: "Two-way binding (v-model:action) for state synchronization" }),
			"\n",
			a(t.li, { children: "Unified button attributes (buttonAttrs) for consistent styling" }),
			"\n",
			a(t.li, { children: "Event handling for click interactions and navigation" }),
			"\n",
			a(t.li, { children: "Skeleton system integration for loading states" }),
			"\n",
			a(t.li, { children: "Icon customization for back and close buttons" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Application screen headers with navigation and actions" }),
			"\n",
			a(t.li, { children: "Toolbar panels for sections and pages" }),
			"\n",
			a(t.li, { children: "Contextual action bars for selected item operations" }),
			"\n",
			a(t.li, { children: "Search headers with filter and sort controls" }),
			"\n",
			a(t.li, { children: "Settings screens with back navigation" }),
			"\n",
			a(t.li, { children: "List headers with bulk action support" }),
			"\n",
			a(t.li, { children: "Multi-selection interfaces with action mode" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst actionMode = ref(false)\nconst selectedCount = ref(0)\n\nconst handleSearch = () => {\n  console.log('Search clicked')\n}\n\nconst handleFilter = () => {\n  console.log('Filter clicked')\n}\n\nconst handleDelete = () => {\n  console.log('Delete selected items')\n  actionMode.value = false\n  selectedCount.value = 0\n}\n<\/script>\n\n<template>\n  <div class=\"app-layout\">\n    <!-- Standard header with navigation and actions -->\n    <Bars\n      label=\"Messages\"\n      description=\"Your conversations\"\n      icon-back=\"arrow_back\"\n      :bars=\"[\n        { icon: 'search', onClick: handleSearch },\n        { icon: 'filter_list', onClick: handleFilter },\n        { icon: 'more_vert' }\n      ]\"\n    />\n\n    <!-- Header with action mode for bulk operations -->\n    <Bars\n      v-model:action=\"actionMode\"\n      label=\"Contacts\"\n      description=\"Manage your contacts\"\n      :action-label=\"`${selectedCount} selected`\"\n      action-description=\"Choose an action\"\n      icon-back=\"arrow_back\"\n      icon-close=\"close\"\n      :bars=\"[\n        { icon: 'add' },\n        { icon: 'search' }\n      ]\"\n      :action-bars=\"[\n        { icon: 'share' },\n        { icon: 'delete', onClick: handleDelete }\n      ]\"\n    />\n\n    <!-- Toolbar with custom button attributes -->\n    <Bars\n      label=\"Settings\"\n      :button-attrs=\"{ secondary: true }\"\n      :bars=\"[\n        { icon: 'sync', label: 'Sync' },\n        { icon: 'info', label: 'Info' }\n      ]\"\n    />\n  </div>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Bars is designed as a top-level UI component for creating consistent application headers, toolbars, and contextual action interfaces with comprehensive navigation, action management, and bulk operation support." }),
			"\n"
		] })
	] });
}
function Yr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Jr, { ...e })
	}) : Jr(e);
}
//#endregion
//#region src/media/mdx/Bars/bars.ru.mdx
function Xr(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Универсальный компонент панели для заголовков приложений, панелей инструментов и контекстных панелей действий с поддержкой навигации, кнопок действий и режимов массовых операций." }),
		"\n",
		a(t.p, { children: "Bars предоставляет комплексное решение для создания согласованных элементов интерфейса верхнего уровня со структурированным макетом для заголовков, описаний, обратной навигации и интерактивных наборов кнопок. Компонент интегрирует переключение режима действий для контекстных операций, единую конфигурацию кнопок и состояния загрузки скелетонов для создания современных заголовков приложений и панелей инструментов." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Структурированная текстовая иерархия (метка и описание с динамическим обновлением)" }),
			"\n",
			a(t.li, { children: "Настраиваемая кнопка назад с навигацией и переключением иконки закрытия" }),
			"\n",
			a(t.li, { children: "Гибкие массивы кнопок (bars) для основных действий справа" }),
			"\n",
			a(t.li, { children: "Режим действий с отдельным контентом и набором кнопок для массовых операций" }),
			"\n",
			a(t.li, { children: "Двусторонняя привязка (v-model:action) для синхронизации состояния" }),
			"\n",
			a(t.li, { children: "Единые атрибуты кнопок (buttonAttrs) для согласованной стилизации" }),
			"\n",
			a(t.li, { children: "Обработка событий для взаимодействий кликов и навигации" }),
			"\n",
			a(t.li, { children: "Интеграция системы скелетонов для состояний загрузки" }),
			"\n",
			a(t.li, { children: "Кастомизация иконок для кнопок назад и закрытия" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Заголовки экранов приложения с навигацией и действиями" }),
			"\n",
			a(t.li, { children: "Панели инструментов для разделов и страниц" }),
			"\n",
			a(t.li, { children: "Контекстные панели действий для операций с выбранными элементами" }),
			"\n",
			a(t.li, { children: "Заголовки поиска с элементами управления фильтрами и сортировкой" }),
			"\n",
			a(t.li, { children: "Экраны настроек с обратной навигацией" }),
			"\n",
			a(t.li, { children: "Заголовки списков с поддержкой массовых действий" }),
			"\n",
			a(t.li, { children: "Интерфейсы множественного выбора с режимом действий" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst actionMode = ref(false)\nconst selectedCount = ref(0)\n\nconst handleSearch = () => {\n  console.log('Нажат поиск')\n}\n\nconst handleFilter = () => {\n  console.log('Нажат фильтр')\n}\n\nconst handleDelete = () => {\n  console.log('Удалить выбранные элементы')\n  actionMode.value = false\n  selectedCount.value = 0\n}\n<\/script>\n\n<template>\n  <div class=\"app-layout\">\n    <!-- Стандартный заголовок с навигацией и действиями -->\n    <Bars\n      label=\"Сообщения\"\n      description=\"Ваши беседы\"\n      icon-back=\"arrow_back\"\n      :bars=\"[\n        { icon: 'search', onClick: handleSearch },\n        { icon: 'filter_list', onClick: handleFilter },\n        { icon: 'more_vert' }\n      ]\"\n    />\n\n    <!-- Заголовок с режимом действий для массовых операций -->\n    <Bars\n      v-model:action=\"actionMode\"\n      label=\"Контакты\"\n      description=\"Управление контактами\"\n      :action-label=\"`Выбрано: ${selectedCount}`\"\n      action-description=\"Выберите действие\"\n      icon-back=\"arrow_back\"\n      icon-close=\"close\"\n      :bars=\"[\n        { icon: 'add' },\n        { icon: 'search' }\n      ]\"\n      :action-bars=\"[\n        { icon: 'share' },\n        { icon: 'delete', onClick: handleDelete }\n      ]\"\n    />\n\n    <!-- Панель инструментов с пользовательскими атрибутами кнопок -->\n    <Bars\n      label=\"Настройки\"\n      :button-attrs=\"{ secondary: true }\"\n      :bars=\"[\n        { icon: 'sync', label: 'Синхр.' },\n        { icon: 'info', label: 'Инфо' }\n      ]\"\n    />\n  </div>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Bars разработан как UI-компонент верхнего уровня для создания согласованных заголовков приложений, панелей инструментов и контекстных интерфейсов действий с комплексной поддержкой навигации, управления действиями и массовых операций." }),
			"\n"
		] })
	] });
}
function Zr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Xr, { ...e })
	}) : Xr(e);
}
//#endregion
//#region src/media/mdx/Bars/action.en.mdx
function Qr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Action mode" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "action" }),
			", ",
			a(t.code, { children: "actionLabel" }),
			", ",
			a(t.code, { children: "actionDescription" }),
			", and ",
			a(t.code, { children: "actionBars" }),
			" are designed for switching Bars into contextual action mode when selecting items or performing bulk operations."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "action" }), " — activates action mode with full content replacement"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "actionLabel" }), " — primary title for action mode (typically count of selected items)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "actionDescription" }), " — additional description or instruction for current action"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "actionBars" }), " — array of action buttons for operations on selected elements"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: when ",
			a(t.code, { children: "action = true" }),
			", the component replaces standard content (label, description, bars) with action variants (actionLabel, actionDescription, actionBars). The back button automatically transforms into an exit button (iconClose) for leaving action mode. All shared button attributes from ",
			a(t.code, { children: "buttonAttrs" }),
			" apply to ",
			a(t.code, { children: "actionBars" }),
			", maintaining consistent styling. Action mode is typically controlled by external selection state and is used for temporary focused operations with the ability to exit back to normal view."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref, computed } from 'vue'\n\nconst selectedItems = ref([])\nconst actionMode = computed(() => selectedItems.value.length > 0)\n\nconst handleSelect = (id) => {\n  const index = selectedItems.value.indexOf(id)\n  if (index > -1) {\n    selectedItems.value.splice(index, 1)\n  } else {\n    selectedItems.value.push(id)\n  }\n}\n\nconst handleShare = () => {\n  console.log('Share selected:', selectedItems.value)\n}\n\nconst handleDelete = () => {\n  console.log('Delete selected:', selectedItems.value)\n  selectedItems.value = []\n}\n<\/script>\n\n<template>\n  <!-- Standard mode with regular navigation -->\n  <Bars\n    :action=\"actionMode\"\n    label=\"Contacts\"\n    description=\"Manage your contacts\"\n    icon-back=\"arrow_back\"\n    icon-close=\"close\"\n    :bars=\"[\n      { icon: 'add', label: 'Add' },\n      { icon: 'search', label: 'Search' }\n    ]\"\n    :action-label=\"`${selectedItems.length} selected`\"\n    action-description=\"Choose an action to apply\"\n    :action-bars=\"[\n      { icon: 'share', onClick: handleShare },\n      { icon: 'delete', onClick: handleDelete }\n    ]\"\n  />\n\n  <!-- Action mode always active -->\n  <Bars\n    action\n    action-label=\"5 items selected\"\n    action-description=\"Select an action\"\n    icon-close=\"close\"\n    :action-bars=\"[\n      { icon: 'edit', label: 'Edit' },\n      { icon: 'archive', label: 'Archive' },\n      { icon: 'delete', label: 'Delete' }\n    ]\"\n  />\n\n  <!-- With v-model for two-way binding -->\n  <Bars\n    v-model:action=\"actionMode\"\n    label=\"Messages\"\n    :action-label=\"`${selectedItems.length} messages`\"\n    :action-bars=\"[\n      { icon: 'mark_email_read' },\n      { icon: 'delete' }\n    ]\"\n  />\n</template>\n"
		}) })
	] });
}
function $r(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Qr, { ...e })
	}) : Qr(e);
}
//#endregion
//#region src/media/mdx/Bars/action.ru.mdx
function ei(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Режим действий" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "action" }),
			", ",
			a(t.code, { children: "actionLabel" }),
			", ",
			a(t.code, { children: "actionDescription" }),
			" и ",
			a(t.code, { children: "actionBars" }),
			" предназначены для переключения Bars в контекстный режим действий при выборе элементов или выполнении массовых операций."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "action" }), " — активирует режим действий с полной заменой контента"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "actionLabel" }), " — основной заголовок для режима действий (обычно счётчик выбранных элементов)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "actionDescription" }), " — дополнительное описание или инструкция для текущего действия"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "actionBars" }), " — массив кнопок действий для операций над выбранными элементами"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: когда ",
			a(t.code, { children: "action = true" }),
			", компонент заменяет стандартный контент (label, description, bars) на варианты для действий (actionLabel, actionDescription, actionBars). Кнопка назад автоматически трансформируется в кнопку выхода (iconClose) для возврата из режима действий. Все общие атрибуты кнопок из ",
			a(t.code, { children: "buttonAttrs" }),
			" применяются к ",
			a(t.code, { children: "actionBars" }),
			", сохраняя согласованную стилизацию. Режим действий обычно контролируется внешним состоянием выбора и используется для временных фокусированных операций с возможностью выхода обратно в обычный вид."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref, computed } from 'vue'\n\nconst selectedItems = ref([])\nconst actionMode = computed(() => selectedItems.value.length > 0)\n\nconst handleSelect = (id) => {\n  const index = selectedItems.value.indexOf(id)\n  if (index > -1) {\n    selectedItems.value.splice(index, 1)\n  } else {\n    selectedItems.value.push(id)\n  }\n}\n\nconst handleShare = () => {\n  console.log('Поделиться выбранными:', selectedItems.value)\n}\n\nconst handleDelete = () => {\n  console.log('Удалить выбранные:', selectedItems.value)\n  selectedItems.value = []\n}\n<\/script>\n\n<template>\n  <!-- Стандартный режим с обычной навигацией -->\n  <Bars\n    :action=\"actionMode\"\n    label=\"Контакты\"\n    description=\"Управление контактами\"\n    icon-back=\"arrow_back\"\n    icon-close=\"close\"\n    :bars=\"[\n      { icon: 'add', label: 'Добавить' },\n      { icon: 'search', label: 'Поиск' }\n    ]\"\n    :action-label=\"`Выбрано: ${selectedItems.length}`\"\n    action-description=\"Выберите действие\"\n    :action-bars=\"[\n      { icon: 'share', onClick: handleShare },\n      { icon: 'delete', onClick: handleDelete }\n    ]\"\n  />\n\n  <!-- Режим действий всегда активен -->\n  <Bars\n    action\n    action-label=\"Выбрано 5 элементов\"\n    action-description=\"Выберите действие\"\n    icon-close=\"close\"\n    :action-bars=\"[\n      { icon: 'edit', label: 'Изменить' },\n      { icon: 'archive', label: 'Архивировать' },\n      { icon: 'delete', label: 'Удалить' }\n    ]\"\n  />\n\n  <!-- С v-model для двусторонней привязки -->\n  <Bars\n    v-model:action=\"actionMode\"\n    label=\"Сообщения\"\n    :action-label=\"`Сообщений: ${selectedItems.length}`\"\n    :action-bars=\"[\n      { icon: 'mark_email_read' },\n      { icon: 'delete' }\n    ]\"\n  />\n</template>\n"
		}) })
	] });
}
function ti(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ei, { ...e })
	}) : ei(e);
}
//#endregion
//#region src/media/mdx/Bars/slots.en.mdx
function ni(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "bars: any" }), " — Slot for placing action buttons in regular mode."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "actionBars: any" }), " — Slot for placing buttons in action mode."] }),
		"\n"
	] });
}
function ri(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ni, { ...e })
	}) : ni(e);
}
//#endregion
//#region src/media/mdx/Bars/slots.ru.mdx
function ii(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "bars: any" }), " — Слот для размещения кнопок панели действий в обычном режиме."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "actionBars: any" }), " — Слот для размещения кнопок в режиме действий (action mode)."] }),
		"\n"
	] });
}
function ai(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ii, { ...e })
	}) : ii(e);
}
//#endregion
//#region src/media/mdx/Bars/v-model.en.mdx
function oi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "State management via v-model" }),
		"\n",
		o(t.p, { children: [
			"Two-way binding of action mode state via ",
			a(t.code, { children: "v-model:action" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "action: boolean" }), " — action mode state of the bar"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isAction = ref(false)\n<\/script>\n\n<template>\n  <button @click=\"isAction = true\">Enable action mode</button>\n\n  <Bars v-model:action=\"isAction\">\n    <template #bars>\n      <Button>Regular button</Button>\n    </template>\n    <template #actionBars>\n      <Button>Action button</Button>\n      <Button @click=\"isAction = false\">Close</Button>\n    </template>\n  </Bars>\n</template>\n"
		}) })
	] });
}
function si(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(oi, { ...e })
	}) : oi(e);
}
//#endregion
//#region src/media/mdx/Bars/v-model.ru.mdx
function ci(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		o(t.p, { children: [
			"Двусторонняя привязка состояния action-режима через ",
			a(t.code, { children: "v-model:action" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "action: boolean" }), " — состояние action-режима панели"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isAction = ref(false)\n<\/script>\n\n<template>\n  <button @click=\"isAction = true\">Включить action-режим</button>\n\n  <Bars v-model:action=\"isAction\">\n    <template #bars>\n      <Button>Обычная кнопка</Button>\n    </template>\n    <template #actionBars>\n      <Button>Action-кнопка</Button>\n      <Button @click=\"isAction = false\">Закрыть</Button>\n    </template>\n  </Bars>\n</template>\n"
		}) })
	] });
}
function li(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ci, { ...e })
	}) : ci(e);
}
//#endregion
//#region src/media/mdx/Bars/wikiMdxBars.ts
var ui = {
	name: "Bars",
	descriptions: {
		bars: {
			en: Yr,
			ru: Zr
		},
		action: {
			en: $r,
			ru: ti
		},
		slots: {
			en: ri,
			ru: ai
		},
		"v-model": {
			en: si,
			ru: li
		}
	}
};
//#endregion
//#region src/media/mdx/Block/block.en.mdx
function di(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "A versatile structural component that serves as a container with support for labels, descriptions, captions, icons, and headlines." }),
		"\n",
		a(t.p, { children: "Block provides a flexible foundation for building complex interface components, allowing you to combine various information elements into a single unit. The component supports HTML tag customization and provides slots for content customization." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Display of headline, label, description, and caption" }),
			"\n",
			a(t.li, { children: "Icon support" }),
			"\n",
			a(t.li, { children: "Customizable HTML tag" }),
			"\n",
			a(t.li, { children: "Flexible layout for content organization" }),
			"\n",
			a(t.li, { children: "Slot support for functionality extension" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Content cards" }),
			"\n",
			a(t.li, { children: "List items" }),
			"\n",
			a(t.li, { children: "Information blocks" }),
			"\n",
			a(t.li, { children: "Sections with headers and descriptions" }),
			"\n",
			a(t.li, { children: "Basic building block for other components" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <Block\n    headline=\"Block Headline\"\n    label=\"Label\"\n    description=\"Block description with detailed information\"\n    caption=\"Caption\"\n    icon=\"info\"\n  >\n    Main block content\n  </Block>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Block is a fundamental component for creating structured interfaces." }),
			"\n"
		] })
	] });
}
function fi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(di, { ...e })
	}) : di(e);
}
//#endregion
//#region src/media/mdx/Block/block.ru.mdx
function pi(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков." }),
		"\n",
		a(t.p, { children: "Block обеспечивает гибкую основу для построения сложных компонентов интерфейса, позволяя комбинировать различные информационные элементы в едином блоке. Компонент поддерживает настройку HTML-тега и предоставляет слоты для кастомизации контента." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Отображение заголовка, метки, описания и подписи" }),
			"\n",
			a(t.li, { children: "Поддержка иконок" }),
			"\n",
			a(t.li, { children: "Настраиваемый HTML-тег" }),
			"\n",
			a(t.li, { children: "Гибкая компоновка для организации контента" }),
			"\n",
			a(t.li, { children: "Поддержка слотов для расширения функциональности" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Карточки контента" }),
			"\n",
			a(t.li, { children: "Элементы списков" }),
			"\n",
			a(t.li, { children: "Информационные блоки" }),
			"\n",
			a(t.li, { children: "Секции с заголовками и описаниями" }),
			"\n",
			a(t.li, { children: "Базовый строительный блок для других компонентов" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <Block\n    headline=\"Заголовок блока\"\n    label=\"Метка\"\n    description=\"Описание блока с подробной информацией\"\n    caption=\"Подпись\"\n    icon=\"info\"\n  >\n    Основной контент блока\n  </Block>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Block является фундаментальным компонентом для создания структурированных интерфейсов." }),
			"\n"
		] })
	] });
}
function mi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(pi, { ...e })
	}) : pi(e);
}
//#endregion
//#region src/media/mdx/Block/differences.en.mdx
function hi(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		pre: "pre",
		strong: "strong",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Differences between Page, Section, Block, and Group" }),
		"\n",
		o(t.p, { children: [
			"All components are built on top of ",
			a(t.strong, { children: "Block" }),
			" and differ in semantics and header levels:"
		] }),
		"\n",
		a(t.h3, { children: "Page" }),
		"\n",
		o(t.p, { children: [
			"This is the root structural component that serves as the main wrapper for all page content. Its primary purpose is to define the main theme and semantically link content to the first-level heading. Its main difference is its uniqueness (used once per page); therefore, choose it as the primary container when creating a new page (",
			a(t.code, { children: "<main>" }),
			", ",
			a(t.code, { children: "h1" }),
			")."
		] }),
		"\n",
		a(t.h3, { children: "Section" }),
		"\n",
		o(t.p, { children: [
			"A container for major thematic division of the page into independent semantic blocks. It is needed for logical partitioning of content into parts like \"About Us\" or \"Services\". Unlike Block and Group, it carries higher semantic weight, so use it to form the page structure and highlight its main sections (",
			a(t.code, { children: "<section>" }),
			", ",
			a(t.code, { children: "h2" }),
			")."
		] }),
		"\n",
		a(t.h3, { children: "Block" }),
		"\n",
		o(t.p, { children: [
			"A universal and highly flexible building block for grouping any related content. It is the base element for creating independent functional units, cards, or informational inserts. Use it in any scenario where you need to organize content without strict adherence to global page divisions (",
			a(t.code, { children: "<div>" }),
			", ",
			a(t.code, { children: "h3" }),
			")."
		] }),
		"\n",
		a(t.h3, { children: "Group" }),
		"\n",
		o(t.p, { children: [
			"An auxiliary component for combining small thematic elements into logical groups. Its main goal is to structure details, such as form fields or sub-sections within a card. It ranks at the bottom of the hierarchy and is used for fine-tuning content structure within larger blocks or sections (",
			a(t.code, { children: "<div>" }),
			", ",
			a(t.code, { children: "h4" }),
			")."
		] }),
		"\n",
		a(t.h3, { children: "Hierarchy Example" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Page headline=\"User Account\">\n  <Section label=\"User Profile\" description=\"Manage personal data\" icon=\"person\">\n    <Block label=\"Basic Information\">\n      <p>Configure your display name and bio for other users.</p>\n      \n      <Group label=\"Contact Details\">\n        <p>Email: user@example.com</p>\n        <p>Phone: +7 (999) 000-00-00</p>\n      </Group>\n    </Block>\n    \n    <Block label=\"Security\" description=\"Password and authentication settings\">\n      <p>Regular password updates improve your account security.</p>\n    </Block>\n  </Section>\n\n  <Section label=\"Notifications\" icon=\"notifications\">\n    <Block label=\"Subscriptions\">\n      <Group label=\"Email\">\n        <p>Weekly news and promotions.</p>\n      </Group>\n      <Group label=\"SMS\">\n        <p>Critical system messages only.</p>\n      </Group>\n    </Block>\n  </Section>\n</Page>\n"
		}) })
	] });
}
function gi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(hi, { ...e })
	}) : hi(e);
}
//#endregion
//#region src/media/mdx/Block/differences.ru.mdx
function _i(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		pre: "pre",
		strong: "strong",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Различия между Page, Section, Block и Group" }),
		"\n",
		o(t.p, { children: [
			"Все компоненты построены на базе ",
			a(t.strong, { children: "Block" }),
			" и различаются семантикой и уровнями заголовков:"
		] }),
		"\n",
		a(t.h3, { children: "Page" }),
		"\n",
		o(t.p, { children: [
			"Это корневой структурный компонент, который служит главной оберткой для всего контента страницы. Он предназначен для определения основной темы и семантической привязки содержимого к заголовку первого уровня. Его главное отличие — уникальность (используется один раз), поэтому выбирайте его как основной контейнер при создании новой страницы (",
			a(t.code, { children: "<main>" }),
			", ",
			a(t.code, { children: "h1" }),
			")."
		] }),
		"\n",
		a(t.h3, { children: "Section" }),
		"\n",
		o(t.p, { children: [
			"Раздел для крупного тематического деления страницы на независимые смысловые блоки. Он нужен для логического разграничения контента на такие части, как «О нас» или «Услуги». В отличие от Block и Group, имеет более высокую семантическую значимость, поэтому используйте его для формирования скелета страницы и выделения её основных разделов (",
			a(t.code, { children: "<section>" }),
			", ",
			a(t.code, { children: "h2" }),
			")."
		] }),
		"\n",
		a(t.h3, { children: "Block" }),
		"\n",
		o(t.p, { children: [
			"Универсальный и максимально гибкий строительный блок для группировки любого связанного контента. Это базовый элемент для создания независимых функциональных единиц, карточек или информационных вставок. Используйте его в любых сценариях, где требуется организовать контент без строгой привязки к глобальным разделам страницы (",
			a(t.code, { children: "<div>" }),
			", ",
			a(t.code, { children: "h3" }),
			")."
		] }),
		"\n",
		a(t.h3, { children: "Group" }),
		"\n",
		o(t.p, { children: [
			"Вспомогательный компонент для объединения мелких тематических элементов в логические группы. Его основная цель — структурирование деталей, таких как поля формы или подразделы внутри карточки. Он находится внизу иерархии и применяется для тонкой настройки структуры контента внутри более крупных блоков или секций (",
			a(t.code, { children: "<div>" }),
			", ",
			a(t.code, { children: "h4" }),
			")."
		] }),
		"\n",
		a(t.h3, { children: "Пример иерархии" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Page headline=\"Личный кабинет\">\n  <Section label=\"Профиль пользователя\" description=\"Управление персональными данными\" icon=\"person\">\n    <Block label=\"Основная информация\">\n      <p>Настройте свое отображаемое имя и биографию для других пользователей.</p>\n      \n      <Group label=\"Контактные данные\">\n        <p>Email: user@example.com</p>\n        <p>Телефон: +7 (999) 000-00-00</p>\n      </Group>\n    </Block>\n    \n    <Block label=\"Безопасность\" description=\"Настройки пароля и аутентификации\">\n      <p>Регулярное обновление пароля повышает защищенность вашего аккаунта.</p>\n    </Block>\n  </Section>\n\n  <Section label=\"Уведомления\" icon=\"notifications\">\n    <Block label=\"Рассылки\">\n      <Group label=\"Email\">\n        <p>Еженедельные новости и акции.</p>\n      </Group>\n      <Group label=\"SMS\">\n        <p>Только критические системные сообщения.</p>\n      </Group>\n    </Block>\n  </Section>\n</Page>\n"
		}) })
	] });
}
function vi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(_i, { ...e })
	}) : _i(e);
}
//#endregion
//#region src/media/mdx/Block/wikiMdxBlock.ts
var yi = {
	name: "Block",
	descriptions: {
		block: {
			en: fi,
			ru: mi
		},
		differences: {
			en: gi,
			ru: vi
		}
	}
};
//#endregion
//#region src/media/mdx/Button/button.en.mdx
function bi(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "Interactive button component for triggering user actions with support for multiple visual variants, states, and accessibility features." }),
		"\n",
		a(t.p, { children: "Button provides a comprehensive solution for creating consistent, accessible action elements with built-in support for icons, loading states, ripple effects, and skeleton placeholders. The component integrates visual variants (primary, secondary, outline, text), state management (focus, hover, disabled, selected), and adaptive behavior for responsive interfaces." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Multiple visual variants (primary, secondary, outline, text)" }),
			"\n",
			a(t.li, { children: "Comprehensive state support (focus, hover, active, disabled, selected, readonly)" }),
			"\n",
			a(t.li, { children: "Built-in icon positioning (leading and trailing)" }),
			"\n",
			a(t.li, { children: "Progress indicator integration for loading states" }),
			"\n",
			a(t.li, { children: "Ripple effect for tactile feedback" }),
			"\n",
			a(t.li, { children: "Skeleton system for loading placeholders" }),
			"\n",
			a(t.li, { children: "Adaptive and responsive behavior options" }),
			"\n",
			a(t.li, { children: "Full accessibility support (ARIA, keyboard navigation)" }),
			"\n",
			a(t.li, { children: "Customizable through design tokens" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Primary actions in forms and dialogs" }),
			"\n",
			a(t.li, { children: "Navigation and menu items" }),
			"\n",
			a(t.li, { children: "Toolbars and action bars" }),
			"\n",
			a(t.li, { children: "Call-to-action elements" }),
			"\n",
			a(t.li, { children: "Icon-only action buttons" }),
			"\n",
			a(t.li, { children: "Loading state indicators" }),
			"\n",
			a(t.li, { children: "Confirmation and cancellation actions" }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Button is designed as a universal interactive element with comprehensive state management, visual variants, and accessibility features for creating consistent action interfaces." }),
			"\n"
		] })
	] });
}
function xi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bi, { ...e })
	}) : bi(e);
}
//#endregion
//#region src/media/mdx/Button/button.ru.mdx
function Si(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Интерактивный компонент кнопки для инициирования действий пользователя с поддержкой множественных визуальных вариантов, состояний и функций доступности." }),
		"\n",
		a(t.p, { children: "Button предоставляет комплексное решение для создания согласованных, доступных элементов действий со встроенной поддержкой иконок, состояний загрузки, эффектов ripple и плейсхолдеров-скелетонов. Компонент интегрирует визуальные варианты (primary, secondary, outline, text), управление состояниями (focus, hover, disabled, selected) и адаптивное поведение для отзывчивых интерфейсов." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Множественные визуальные варианты (primary, secondary, outline, text)" }),
			"\n",
			a(t.li, { children: "Комплексная поддержка состояний (focus, hover, active, disabled, selected, readonly)" }),
			"\n",
			a(t.li, { children: "Встроенное позиционирование иконок (в начале и в конце)" }),
			"\n",
			a(t.li, { children: "Интеграция индикатора прогресса для состояний загрузки" }),
			"\n",
			a(t.li, { children: "Эффект ripple для тактильной обратной связи" }),
			"\n",
			a(t.li, { children: "Система скелетонов для плейсхолдеров загрузки" }),
			"\n",
			a(t.li, { children: "Опции адаптивного и отзывчивого поведения" }),
			"\n",
			a(t.li, { children: "Полная поддержка доступности (ARIA, клавиатурная навигация)" }),
			"\n",
			a(t.li, { children: "Настройка через токены дизайна" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Основные действия в формах и диалогах" }),
			"\n",
			a(t.li, { children: "Элементы навигации и меню" }),
			"\n",
			a(t.li, { children: "Панели инструментов и действий" }),
			"\n",
			a(t.li, { children: "Элементы призыва к действию" }),
			"\n",
			a(t.li, { children: "Кнопки только с иконками" }),
			"\n",
			a(t.li, { children: "Индикаторы состояния загрузки" }),
			"\n",
			a(t.li, { children: "Действия подтверждения и отмены" }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Button разработан как универсальный интерактивный элемент с комплексным управлением состояниями, визуальными вариантами и функциями доступности для создания согласованных интерфейсов действий." }),
			"\n"
		] })
	] });
}
function Ci(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Si, { ...e })
	}) : Si(e);
}
//#endregion
//#region src/media/mdx/Button/primary.en.mdx
function wi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Primary buttons" }),
		"\n",
		o(t.p, { children: [
			"Button component supports primary mode through the ",
			a(t.code, { children: "primary" }),
			" property. In this mode, buttons have a distinctive visual style for the most important actions:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Visual emphasis" }), " - stands out prominently among other interface elements"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Action hierarchy" }), " - indicates the main or priority action on the page"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "High contrast" }), " - automatically applies high-contrast colors for better visibility"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Icon support" }), " - enhances understanding of purpose through visual elements"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Primary mode is especially useful for creating main call-to-action buttons, form submissions, and confirmation actions that require user attention and should be immediately recognizable in the interface." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Button primary icon=\"send\">Submit</Button>\n<Button primary icon=\"save\">Save</Button>\n<Button primary>Confirm</Button>\n"
		}) })
	] });
}
function Ti(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wi, { ...e })
	}) : wi(e);
}
//#endregion
//#region src/media/mdx/Button/primary.ru.mdx
function Ei(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Основные кнопки (primary)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Button поддерживает основной режим через свойство ",
			a(t.code, { children: "primary" }),
			". В этом режиме кнопки имеют выделяющийся визуальный стиль для самых важных действий:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Визуальный акцент" }), " - выделяются заметно среди других элементов интерфейса"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Иерархия действий" }), " - указывают на основное или приоритетное действие на странице"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Высокая контрастность" }), " - автоматически применяются высококонтрастные цвета для лучшей видимости"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Поддержка иконок" }), " - улучшают понимание назначения через визуальные элементы"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Primary режим особенно полезен для создания основных кнопок призыва к действию, отправки форм и подтверждающих действий, которые требуют внимания пользователя и должны быть сразу узнаваемы в интерфейсе." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Button primary icon=\"send\">Отправить</Button>\n<Button primary icon=\"save\">Сохранить</Button>\n<Button primary>Подтвердить</Button>\n"
		}) })
	] });
}
function Di(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ei, { ...e })
	}) : Ei(e);
}
//#endregion
//#region src/media/mdx/Button/secondary.en.mdx
function Oi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Secondary buttons" }),
		"\n",
		o(t.p, { children: [
			"Button component supports secondary mode through the ",
			a(t.code, { children: "secondary" }),
			" property. In this mode, buttons have a less prominent visual style for alternative or supporting actions:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Moderate emphasis" }), " - less intrusive than primary buttons while remaining clear"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Action alternatives" }), " - provides users with alternative choices without overwhelming them"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Balanced contrast" }), " - uses colors with moderate contrast for better visual hierarchy"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Icon support" }), " - maintains consistency with other button variants through visual elements"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Secondary mode is especially useful for creating cancel buttons, reset actions, and alternative choices that support the main flow without competing for primary attention in the interface." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Button secondary icon=\"close\">Cancel</Button>\n<Button secondary icon=\"refresh\">Reset</Button>\n<Button secondary>Skip</Button>\n"
		}) })
	] });
}
function ki(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Oi, { ...e })
	}) : Oi(e);
}
//#endregion
//#region src/media/mdx/Button/secondary.ru.mdx
function Ai(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Второстепенные кнопки (secondary)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Button поддерживает второстепенный режим через свойство ",
			a(t.code, { children: "secondary" }),
			". В этом режиме кнопки имеют менее заметный визуальный стиль для альтернативных или поддерживающих действий:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Умеренный акцент" }), " - менее навязчивы чем основные кнопки, оставаясь при этом понятными"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Альтернативные действия" }), " - предоставляют пользователям альтернативный выбор без перегрузки"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Сбалансированная контрастность" }), " - используют цвета с умеренным контрастом для лучшей визуальной иерархии"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Поддержка иконок" }), " - поддерживают согласованность с другими вариантами кнопок через визуальные элементы"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Secondary режим особенно полезен для создания кнопок отмены, действий сброса и альтернативных вариантов выбора, которые поддерживают основной поток без конкуренции за первичное внимание в интерфейсе." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Button secondary icon=\"close\">Отмена</Button>\n<Button secondary icon=\"refresh\">Сброс</Button>\n<Button secondary>Пропустить</Button>\n"
		}) })
	] });
}
function ji(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ai, { ...e })
	}) : Ai(e);
}
//#endregion
//#region src/media/mdx/Button/outline.en.mdx
function Mi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Outline buttons" }),
		"\n",
		o(t.p, { children: [
			"Button component supports outline mode through the ",
			a(t.code, { children: "outline" }),
			" property. In this mode, buttons have a minimalist visual style with transparent background and colored border:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Minimalist design" }), " - suitable for interfaces requiring reduced visual load"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Transparent background" }), " - maintains clean appearance while remaining interactive"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Hover feedback" }), " - background appears on hover for better user interaction"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Icon support" }), " - works seamlessly with icons for enhanced clarity"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Outline mode is especially useful for creating tertiary actions, filter controls, and secondary options in cards or lists that need to be accessible without excessive visual noise." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Button outline icon=\"filter\">Filter</Button>\n<Button outline icon=\"sort\">Sort</Button>\n<Button outline>More options</Button>\n"
		}) })
	] });
}
function Ni(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Mi, { ...e })
	}) : Mi(e);
}
//#endregion
//#region src/media/mdx/Button/outline.ru.mdx
function Pi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Контурные кнопки (outline)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Button поддерживает контурный режим через свойство ",
			a(t.code, { children: "outline" }),
			". В этом режиме кнопки имеют минималистичный визуальный стиль с прозрачным фоном и цветной границей:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Минималистичный дизайн" }), " - подходит для интерфейсов, требующих сниженной визуальной нагрузки"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Прозрачный фон" }), " - поддерживает чистый внешний вид, оставаясь интерактивными"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Обратная связь при наведении" }), " - фон появляется при наведении для лучшего взаимодействия с пользователем"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Поддержка иконок" }), " - бесшовно работает с иконками для улучшенной ясности"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Outline режим особенно полезен для создания третичных действий, элементов управления фильтрами и второстепенных опций в карточках или списках, которые должны быть доступны без излишнего визуального шума." }),
		"\n",
		a(ee, {
			code: "\n<Button outline icon=\"filter\">Фильтр</Button>\n<Button outline icon=\"sort\">Сортировка</Button>\n<Button outline>Дополнительно</Button>\n",
			language: "html"
		}),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Button outline icon=\"filter\">Фильтр</Button>\n<Button outline icon=\"sort\">Сортировка</Button>\n<Button outline>Дополнительно</Button>\n"
		}) })
	] });
}
function Fi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Pi, { ...e })
	}) : Pi(e);
}
//#endregion
//#region src/media/mdx/Button/text.en.mdx
function Ii(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Text buttons" }),
		"\n",
		o(t.p, { children: [
			"Button component supports text mode through the ",
			a(t.code, { children: "text" }),
			" property. In this mode, buttons have a minimalist text-only style resembling links for the most unobtrusive actions:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Unobtrusive design" }), " - looks like plain text while remaining interactive"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "No background or border" }), " - maintains clean appearance without visual weight"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Hover feedback" }), " - subtle background appears on hover for better interaction clarity"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Icon support" }), " - seamlessly integrates icons while maintaining minimal visual impact"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Text mode is especially useful for creating tertiary actions, inline navigation links, and supplementary options within text content or footers that need to be accessible without drawing excessive attention." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Button text icon=\"info\">Learn more</Button>\n<Button text icon=\"help\">Help</Button>\n<Button text>Read details</Button>\n"
		}) })
	] });
}
function Li(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ii, { ...e })
	}) : Ii(e);
}
//#endregion
//#region src/media/mdx/Button/text.ru.mdx
function Ri(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Текстовые кнопки (text)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Button поддерживает текстовый режим через свойство ",
			a(t.code, { children: "text" }),
			". В этом режиме кнопки имеют минималистичный текстовый стиль, напоминающий ссылки, для самых ненавязчивых действий:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Ненавязчивый дизайн" }), " - выглядит как обычный текст, оставаясь интерактивным"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Без фона и рамки" }), " - поддерживает чистый внешний вид без визуальной нагрузки"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Обратная связь при наведении" }), " - тонкий фон появляется при наведении для лучшей ясности взаимодействия"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Поддержка иконок" }), " - бесшовно интегрирует иконки, сохраняя минимальное визуальное воздействие"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Text режим особенно полезен для создания третичных действий, встроенных навигационных ссылок и дополнительных опций внутри текстового контента или футеров, которые должны быть доступны без привлечения чрезмерного внимания." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Button text icon=\"info\">Узнать больше</Button>\n<Button text icon=\"help\">Справка</Button>\n<Button text>Читать детали</Button>\n"
		}) })
	] });
}
function zi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ri, { ...e })
	}) : Ri(e);
}
//#endregion
//#region src/media/mdx/Button/wikiMdxButton.ts
var Bi = {
	name: "Button",
	descriptions: {
		button: {
			en: xi,
			ru: Ci
		},
		primary: {
			en: Ti,
			ru: Di
		},
		secondary: {
			en: ki,
			ru: ji
		},
		outline: {
			en: Ni,
			ru: Fi
		},
		text: {
			en: Li,
			ru: zi
		}
	}
};
//#endregion
//#region src/media/mdx/Cell/cell.en.mdx
function Vi(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "Universal container component for displaying structured content with labels, descriptions, and interactive actions in lists and interface elements." }),
		"\n",
		a(t.p, { children: "Cell provides a consistent way to represent information blocks with support for text hierarchy (label, description, caption), interactive states, icons, and progress indicators. The component integrates ripple effects, skeleton states, and flexible content positioning for creating modern interface lists." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Structured content hierarchy (label, description, caption)" }),
			"\n",
			a(t.li, { children: "Interactive states (focus, selected, disabled, readonly)" }),
			"\n",
			a(t.li, { children: "Built-in icon and progress indicator support" }),
			"\n",
			a(t.li, { children: "Ripple effect integration for tactile feedback" }),
			"\n",
			a(t.li, { children: "Skeleton system for loading states" }),
			"\n",
			a(t.li, { children: "Customizable dividers and dynamic behavior" }),
			"\n",
			a(t.li, { children: "Flexible slot system for custom content" }),
			"\n",
			a(t.li, { children: "Optimized for list and menu interfaces" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "List items in navigation menus and settings" }),
			"\n",
			a(t.li, { children: "Contact cards and profile entries" }),
			"\n",
			a(t.li, { children: "Action sheets and selection lists" }),
			"\n",
			a(t.li, { children: "Settings panels and configuration items" }),
			"\n",
			a(t.li, { children: "Data tables and structured information displays" }),
			"\n",
			a(t.li, { children: "Mobile-first interface components" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(false)\nconst loading = ref(false)\n\nconst handleClick = () => {\n  console.log('Cell clicked')\n  selected.value = !selected.value\n}\n<\/script>\n\n<template>\n  <Cell\n    label=\"Notification Settings\"\n    description=\"Manage how you receive notifications\"\n    caption=\"Updated today\"\n    icon=\"notifications\"\n    :selected=\"selected\"\n    :skeleton=\"loading\"\n    @click=\"handleClick\"\n  >\n    <template #trailing>\n      <Icon name=\"chevron_right\" />\n    </template>\n  </Cell>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Cell is designed as a universal building block for creating consistent list-based interfaces with rich content and interactive states." }),
			"\n"
		] })
	] });
}
function Hi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vi, { ...e })
	}) : Vi(e);
}
//#endregion
//#region src/media/mdx/Cell/cell.ru.mdx
function Ui(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и интерактивными действиями в списках и элементах интерфейса." }),
		"\n",
		a(t.p, { children: "Cell обеспечивает единообразное представление информационных блоков с поддержкой текстовой иерархии (метка, описание, подпись), интерактивных состояний, иконок и индикаторов прогресса. Компонент интегрирует эффекты ripple, состояния скелетонов и гибкое позиционирование контента для создания современных интерфейсных списков." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Структурированная иерархия контента (метка, описание, подпись)" }),
			"\n",
			a(t.li, { children: "Интерактивные состояния (focus, selected, disabled, readonly)" }),
			"\n",
			a(t.li, { children: "Встроенная поддержка иконок и индикаторов прогресса" }),
			"\n",
			a(t.li, { children: "Интеграция эффекта ripple для тактильной обратной связи" }),
			"\n",
			a(t.li, { children: "Система скелетонов для состояний загрузки" }),
			"\n",
			a(t.li, { children: "Настраиваемые разделители и динамическое поведение" }),
			"\n",
			a(t.li, { children: "Гибкая система слотов для пользовательского контента" }),
			"\n",
			a(t.li, { children: "Оптимизирован для списковых и меню интерфейсов" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Элементы списков в меню навигации и настройках" }),
			"\n",
			a(t.li, { children: "Карточки контактов и профильные записи" }),
			"\n",
			a(t.li, { children: "Списки действий и выбора элементов" }),
			"\n",
			a(t.li, { children: "Панели настроек и элементы конфигурации" }),
			"\n",
			a(t.li, { children: "Таблицы данных и структурированные информационные блоки" }),
			"\n",
			a(t.li, { children: "Компоненты интерфейса mobile-first" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(false)\nconst loading = ref(false)\n\nconst handleClick = () => {\n  console.log('Ячейка нажата')\n  selected.value = !selected.value\n}\n<\/script>\n\n<template>\n  <Cell\n    label=\"Настройки уведомлений\"\n    description=\"Управление способами получения уведомлений\"\n    caption=\"Обновлено сегодня\"\n    icon=\"notifications\"\n    :selected=\"selected\"\n    :skeleton=\"loading\"\n    @click=\"handleClick\"\n  >\n    <template #trailing>\n      <Icon name=\"chevron_right\" />\n    </template>\n  </Cell>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Cell разработан как универсальный строительный блок для создания единообразных списковых интерфейсов с богатым контентом и интерактивными состояниями." }),
			"\n"
		] })
	] });
}
function Wi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ui, { ...e })
	}) : Ui(e);
}
//#endregion
//#region src/media/mdx/Cell/slots.en.mdx
function Gi(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "trailing(props: CellClassesSub): any" }), " — Slot for placing control elements or indicators at the end of the cell (icons, switches, buttons)."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "body(props: CellClassesSub): any" }), " — Slot for placing additional content at the bottom of the cell (metadata, secondary actions, details)."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "CellClassesSub:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [
					a(t.code, { children: "label: string" }),
					" — CSS class for the label element (",
					a(t.code, { children: "{className}__label" }),
					")."
				] }),
				"\n",
				o(t.li, { children: [
					a(t.code, { children: "description: string" }),
					" — CSS class for the description element (",
					a(t.code, { children: "{className}__description" }),
					")."
				] }),
				"\n",
				o(t.li, { children: [
					a(t.code, { children: "caption: string" }),
					" — CSS class for the caption element (",
					a(t.code, { children: "{className}__caption" }),
					")."
				] }),
				"\n",
				o(t.li, { children: [
					a(t.code, { children: "trailing: string" }),
					" — CSS class for the trailing area element (",
					a(t.code, { children: "{className}__trailing" }),
					")."
				] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Ki(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gi, { ...e })
	}) : Gi(e);
}
//#endregion
//#region src/media/mdx/Cell/slots.ru.mdx
function qi(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "trailing(props: CellClassesSub): any" }), " — Слот для размещения элементов управления или индикаторов в конце ячейки (иконки, переключатели, кнопки)."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "body(props: CellClassesSub): any" }), " — Слот для размещения дополнительного контента в нижней части ячейки (метаданные, вторичные действия, детали)."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "CellClassesSub:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [
					a(t.code, { children: "label: string" }),
					" — CSS-класс для элемента метки (",
					a(t.code, { children: "{className}__label" }),
					")."
				] }),
				"\n",
				o(t.li, { children: [
					a(t.code, { children: "description: string" }),
					" — CSS-класс для элемента описания (",
					a(t.code, { children: "{className}__description" }),
					")."
				] }),
				"\n",
				o(t.li, { children: [
					a(t.code, { children: "caption: string" }),
					" — CSS-класс для элемента подписи (",
					a(t.code, { children: "{className}__caption" }),
					")."
				] }),
				"\n",
				o(t.li, { children: [
					a(t.code, { children: "trailing: string" }),
					" — CSS-класс для элемента области trailing (",
					a(t.code, { children: "{className}__trailing" }),
					")."
				] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Ji(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(qi, { ...e })
	}) : qi(e);
}
//#endregion
//#region src/media/mdx/Cell/wikiMdxCell.ts
var Yi = {
	name: "Cell",
	descriptions: {
		cell: {
			en: Hi,
			ru: Wi
		},
		slots: {
			en: Ki,
			ru: Ji
		}
	}
};
//#endregion
//#region src/media/mdx/Checkbox/checkbox.en.mdx
function Xi(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating interactive checkboxes with support for multiple selection, validation, and state customization." }),
		"\n",
		a(t.p, { children: "Checkbox manages the selection state of elements (checked, unchecked, indeterminate state), supports validation, form integration, customizable icons, and transition animations. The component automatically handles state changes, focus management, and event generation during user interaction." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Three states: checked, unchecked, indeterminate" }),
			"\n",
			a(t.li, { children: "Built-in validation with custom error messages" }),
			"\n",
			a(t.li, { children: "Support for labels and descriptions" }),
			"\n",
			a(t.li, { children: "Customizable icons for different states" }),
			"\n",
			a(t.li, { children: "Form integration via name and value attributes" }),
			"\n",
			a(t.li, { children: "Disabled, loading, and skeleton states" }),
			"\n",
			a(t.li, { children: "Ripple effect on interaction" }),
			"\n",
			a(t.li, { children: "Adaptive layout and styling" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Agreement with terms and policies" }),
			"\n",
			a(t.li, { children: "Multiple item selection from lists" }),
			"\n",
			a(t.li, { children: "Settings and feature toggles" }),
			"\n",
			a(t.li, { children: "Forms with checkboxes for confirmation" }),
			"\n",
			a(t.li, { children: "Group selection with parent indeterminate state" }),
			"\n"
		] })
	] });
}
function Zi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Xi, { ...e })
	}) : Xi(e);
}
//#endregion
//#region src/media/mdx/Checkbox/checkbox.ru.mdx
function Qi(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания интерактивных чекбоксов с поддержкой множественного выбора, валидации и настройки состояний." }),
		"\n",
		a(t.p, { children: "Checkbox управляет состоянием выбора элементов (отмечен, не отмечен, неопределённое состояние), поддерживает валидацию, интеграцию с формами, настраиваемые иконки и анимацию переходов. Компонент автоматически обрабатывает изменение состояний, управление фокусом и генерацию событий при взаимодействии пользователя." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Три состояния: отмечен, не отмечен, неопределённое (indeterminate)" }),
			"\n",
			a(t.li, { children: "Встроенная валидация с пользовательскими сообщениями об ошибках" }),
			"\n",
			a(t.li, { children: "Поддержка меток (label) и описания (description)" }),
			"\n",
			a(t.li, { children: "Настраиваемые иконки для разных состояний" }),
			"\n",
			a(t.li, { children: "Интеграция с формами через name и value" }),
			"\n",
			a(t.li, { children: "Состояния disabled, loading и skeleton" }),
			"\n",
			a(t.li, { children: "Эффект ripple при взаимодействии" }),
			"\n",
			a(t.li, { children: "Адаптивная раскладка и стилизация" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Согласие с условиями и политиками" }),
			"\n",
			a(t.li, { children: "Множественный выбор элементов из списка" }),
			"\n",
			a(t.li, { children: "Настройки и переключение функций" }),
			"\n",
			a(t.li, { children: "Формы с чекбоксами для подтверждения" }),
			"\n",
			a(t.li, { children: "Групповой выбор с родительским indeterminate состоянием" }),
			"\n"
		] })
	] });
}
function $i(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Qi, { ...e })
	}) : Qi(e);
}
//#endregion
//#region src/media/mdx/Checkbox/indeterminate.en.mdx
function ea(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Indeterminate state" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "indeterminate" }),
			" property controls the third checkbox state — indeterminate (partially selected). This state is visually displayed as a horizontal line instead of a checkmark."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "indeterminate" }), " — enables the indeterminate state of the checkbox"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconIndeterminate" }), " — custom icon for the indeterminate state"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "value" }),
				" — remains ",
				a(t.code, { children: "null" }),
				" or a special value in the indeterminate state"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "The indeterminate state is typically used for parent checkboxes in a group when only some child elements are selected." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref, computed } from 'vue'\n\nconst items = ref([\n  { id: 1, label: 'Item 1', checked: true },\n  { id: 2, label: 'Item 2', checked: false },\n  { id: 3, label: 'Item 3', checked: true }\n])\n\nconst allChecked = computed({\n  get: () => items.value.every(item => item.checked),\n  set: (value) => {\n    items.value.forEach(item => item.checked = value)\n  }\n})\n\nconst indeterminate = computed(() => {\n  const checkedCount = items.value.filter(item => item.checked).length\n  return checkedCount > 0 && checkedCount < items.value.length\n})\n<\/script>\n\n<template>\n  <!-- Parent checkbox with partial selection indicator -->\n  <Checkbox\n    v-model=\"allChecked\"\n    :indeterminate=\"indeterminate\"\n    label=\"Select all\"\n  />\n\n  <!-- Child checkboxes -->\n  <div style=\"margin-left: 24px\">\n    <Checkbox\n      v-for=\"item in items\"\n      :key=\"item.id\"\n      v-model=\"item.checked\"\n      :label=\"item.label\"\n    />\n  </div>\n\n  <!-- Using with custom icon -->\n  <Checkbox\n    indeterminate\n    iconIndeterminate=\"remove\"\n    label=\"Partially selected\"\n  />\n</template>\n"
		}) })
	] });
}
function ta(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ea, { ...e })
	}) : ea(e);
}
//#endregion
//#region src/media/mdx/Checkbox/indeterminate.ru.mdx
function na(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Неопределённое состояние" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "indeterminate" }),
			" управляет третьим состоянием чекбокса — неопределённым (частично выбранным). Это состояние визуально отображается как горизонтальная линия вместо галочки."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "indeterminate" }), " — включает неопределённое состояние чекбокса"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconIndeterminate" }), " — пользовательская иконка для неопределённого состояния"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "value" }),
				" — остается ",
				a(t.code, { children: "null" }),
				" или специальное значение в неопределённом состоянии"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Неопределённое состояние обычно используется для родительских чекбоксов в группе, когда выбраны только некоторые дочерние элементы." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref, computed } from 'vue'\n\nconst items = ref([\n  { id: 1, label: 'Пункт 1', checked: true },\n  { id: 2, label: 'Пункт 2', checked: false },\n  { id: 3, label: 'Пункт 3', checked: true }\n])\n\nconst allChecked = computed({\n  get: () => items.value.every(item => item.checked),\n  set: (value) => {\n    items.value.forEach(item => item.checked = value)\n  }\n})\n\nconst indeterminate = computed(() => {\n  const checkedCount = items.value.filter(item => item.checked).length\n  return checkedCount > 0 && checkedCount < items.value.length\n})\n<\/script>\n\n<template>\n  <!-- Родительский чекбокс с индикатором частичного выбора -->\n  <Checkbox\n    v-model=\"allChecked\"\n    :indeterminate=\"indeterminate\"\n    label=\"Выбрать все\"\n  />\n\n  <!-- Дочерние чекбоксы -->\n  <div style=\"margin-left: 24px\">\n    <Checkbox\n      v-for=\"item in items\"\n      :key=\"item.id\"\n      v-model=\"item.checked\"\n      :label=\"item.label\"\n    />\n  </div>\n\n  <!-- Использование с пользовательской иконкой -->\n  <Checkbox\n    indeterminate\n    iconIndeterminate=\"remove\"\n    label=\"Частично выбрано\"\n  />\n</template>\n"
		}) })
	] });
}
function ra(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(na, { ...e })
	}) : na(e);
}
//#endregion
//#region src/media/mdx/Checkbox/value.en.mdx
function ia(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Value Management" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "value" }),
			", ",
			a(t.code, { children: "valueVariant" }),
			", and ",
			a(t.code, { children: "valueVariantHide" }),
			" properties are designed for managing checkbox values during form submission and two-way data binding."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value" }), " — current checkbox state (true/false or custom values)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "valueVariant" }), " — value passed when checkbox is checked"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "valueVariantHide" }), " — value passed when checkbox is unchecked (default: \"0\")"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: ",
			a(t.code, { children: "value" }),
			" determines the current checkbox state and works with ",
			a(t.code, { children: "v-model" }),
			" for two-way binding. ",
			a(t.code, { children: "valueVariant" }),
			" allows setting a custom value for the checked state (e.g., \"yes\", \"1\", \"active\"), which will be passed during form submission. ",
			a(t.code, { children: "valueVariantHide" }),
			" automatically creates a hidden input field with the specified value, which is submitted when the checkbox is unchecked, ensuring data presence in the form even with an inactive checkbox."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst agreed = ref(false)\nconst formData = ref({})\n\nconst handleSubmit = () => {\n  console.log('Form data:', formData.value)\n}\n<\/script>\n\n<template>\n  <!-- Standard usage with boolean -->\n  <Checkbox\n    v-model=\"agreed\"\n    name=\"terms\"\n    label=\"I agree to the terms\"\n  />\n  <!-- value: true/false -->\n\n  <!-- Custom values for form -->\n  <Checkbox\n    name=\"subscribe\"\n    label=\"Subscribe to newsletter\"\n    valueVariant=\"yes\"\n    valueVariantHide=\"no\"\n  />\n  <!-- When checked sends: subscribe=yes -->\n  <!-- When unchecked sends: subscribe=no -->\n\n  <!-- Numeric values -->\n  <Checkbox\n    name=\"notification\"\n    label=\"Enable notifications\"\n    valueVariant=\"1\"\n    valueVariantHide=\"0\"\n  />\n  <!-- When checked sends: notification=1 -->\n  <!-- When unchecked sends: notification=0 -->\n\n  <!-- Without hidden value -->\n  <Checkbox\n    name=\"optional\"\n    label=\"Optional setting\"\n    valueVariant=\"enabled\"\n    :valueVariantHide=\"null\"\n  />\n  <!-- Only sent when checked: optional=enabled -->\n  <!-- When unchecked field is not sent -->\n</template>\n"
		}) })
	] });
}
function aa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ia, { ...e })
	}) : ia(e);
}
//#endregion
//#region src/media/mdx/Checkbox/value.ru.mdx
function oa(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление значениями" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "value" }),
			", ",
			a(t.code, { children: "valueVariant" }),
			" и ",
			a(t.code, { children: "valueVariantHide" }),
			" предназначены для управления значениями чекбокса при отправке форм и работе с двусторонней привязкой данных."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value" }), " — текущее состояние чекбокса (true/false или пользовательские значения)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "valueVariant" }), " — значение, которое передаётся при отмеченном чекбоксе"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "valueVariantHide" }), " — значение, которое передаётся при неотмеченном чекбоксе (по умолчанию: \"0\")"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: ",
			a(t.code, { children: "value" }),
			" определяет текущее состояние чекбокса и работает с ",
			a(t.code, { children: "v-model" }),
			" для двусторонней привязки. ",
			a(t.code, { children: "valueVariant" }),
			" позволяет установить пользовательское значение для отмеченного состояния (например, \"yes\", \"1\", \"active\"), которое будет передано при отправке формы. ",
			a(t.code, { children: "valueVariantHide" }),
			" автоматически создаёт скрытое поле input с указанным значением, которое отправляется, когда чекбокс не отмечен, обеспечивая наличие данных в форме даже при неактивном чекбоксе."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst agreed = ref(false)\nconst formData = ref({})\n\nconst handleSubmit = () => {\n  console.log('Form data:', formData.value)\n}\n<\/script>\n\n<template>\n  <!-- Стандартное использование с boolean -->\n  <Checkbox\n    v-model=\"agreed\"\n    name=\"terms\"\n    label=\"Согласен с условиями\"\n  />\n  <!-- value: true/false -->\n\n  <!-- Пользовательские значения для формы -->\n  <Checkbox\n    name=\"subscribe\"\n    label=\"Подписаться на рассылку\"\n    valueVariant=\"yes\"\n    valueVariantHide=\"no\"\n  />\n  <!-- При отметке отправит: subscribe=yes -->\n  <!-- Без отметки отправит: subscribe=no -->\n\n  <!-- Числовые значения -->\n  <Checkbox\n    name=\"notification\"\n    label=\"Включить уведомления\"\n    valueVariant=\"1\"\n    valueVariantHide=\"0\"\n  />\n  <!-- При отметке отправит: notification=1 -->\n  <!-- Без отметки отправит: notification=0 -->\n\n  <!-- Без скрытого значения -->\n  <Checkbox\n    name=\"optional\"\n    label=\"Опциональная настройка\"\n    valueVariant=\"enabled\"\n    :valueVariantHide=\"null\"\n  />\n  <!-- Отправляется только при отметке: optional=enabled -->\n  <!-- Без отметки поле не отправляется -->\n</template>\n"
		}) })
	] });
}
function sa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(oa, { ...e })
	}) : oa(e);
}
//#endregion
//#region src/media/mdx/Checkbox/wikiMdxCheckbox.ts
var ca = {
	name: "Checkbox",
	descriptions: {
		checkbox: {
			en: Zi,
			ru: $i
		},
		indeterminate: {
			en: ta,
			ru: ra
		},
		value: {
			en: aa,
			ru: sa
		}
	}
};
//#endregion
//#region src/media/mdx/Chip/chip.en.mdx
function la(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "Compact interactive element for representing input, attributes, actions, and filters in the user interface." }),
		"\n",
		a(t.p, { children: "Chip provides a unified component for displaying discrete information in a compact format with support for selection states, icons, adaptive behavior, and various visual variants (input, assistive). Inherits Button functionality while adding specialized styling and semantics for working with tags, filters, statuses, and user input. Ensures a consistent API for creating interactive chips with support for clicks, disabled/selected states, and icon integration." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Core capabilities:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Button inheritance (icons, progress, click events)" }),
			"\n",
			a(t.li, { children: "Visual variants (input, assistive) for different contexts" }),
			"\n",
			a(t.li, { children: "State management (selected, disabled, focus, readonly)" }),
			"\n",
			a(t.li, { children: "Adaptive behavior (adaptive, container) for different screen sizes" }),
			"\n",
			a(t.li, { children: "Customizable text alignment (textAlign: left/center/right)" }),
			"\n",
			a(t.li, { children: "Icon support (icon, iconTrailing) and progress indicator" }),
			"\n",
			a(t.li, { children: "Skeleton state integration for loading" }),
			"\n",
			a(t.li, { children: "Value and detail passing for element identification" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Tags and labels for content categorization" }),
			"\n",
			a(t.li, { children: "Filters in search interfaces and catalogs" }),
			"\n",
			a(t.li, { children: "Displaying user-entered data (emails, contacts)" }),
			"\n",
			a(t.li, { children: "Statuses and state indicators" }),
			"\n",
			a(t.li, { children: "Assistive elements (hints, recommendations)" }),
			"\n",
			a(t.li, { children: "Selectable options in forms and lists" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedFilters = ref(['active', 'verified'])\nconst tags = ref(['Vue', 'TypeScript', 'UI'])\n\nconst toggleFilter = (filter) => {\n  const index = selectedFilters.value.indexOf(filter)\n  if (index > -1) {\n    selectedFilters.value.splice(index, 1)\n  } else {\n    selectedFilters.value.push(filter)\n  }\n}\n<\/script>\n\n<template>\n  <!-- Basic chip -->\n  <Chip>Standard</Chip>\n\n  <!-- Input chip for user input -->\n  <Chip input icon=\"person\">Contact</Chip>\n\n  <!-- Assistive chip for hints -->\n  <Chip assistive icon=\"lightbulb\">Recommendation</Chip>\n\n  <!-- Filters with selection state -->\n  <Chip\n    v-for=\"filter in ['active', 'pending', 'verified']\"\n    :key=\"filter\"\n    :selected=\"selectedFilters.includes(filter)\"\n    @click=\"toggleFilter(filter)\"\n  >\n    {{ filter }}\n  </Chip>\n\n  <!-- With data passing -->\n  <Chip\n    value=\"filter-tag\"\n    :detail=\"{ category: 'status', type: 'active' }\"\n    @click=\"handleChipClick\"\n  >\n    Active\n  </Chip>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Chip inherits all Button functionality, including events, icons, and progress indicators, while adding specialized styling for compact interface elements." }),
			"\n"
		] })
	] });
}
function ua(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(la, { ...e })
	}) : la(e);
}
//#endregion
//#region src/media/mdx/Chip/chip.ru.mdx
function da(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Компактный интерактивный элемент для представления ввода, атрибутов, действий и фильтров в пользовательском интерфейсе." }),
		"\n",
		a(t.p, { children: "Chip предоставляет унифицированный компонент для отображения дискретной информации в компактном формате с поддержкой состояний выбора, иконок, адаптивного поведения и различных визуальных вариантов (input, assistive). Наследует функциональность Button, добавляя специализированную стилизацию и семантику для работы с тегами, фильтрами, статусами и пользовательским вводом. Обеспечивает согласованный API для создания интерактивных чипов с поддержкой кликов, состояния disabled/selected и интеграцией иконок." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Наследование от Button (иконки, прогресс, события клика)" }),
			"\n",
			a(t.li, { children: "Визуальные варианты (input, assistive) для разных контекстов" }),
			"\n",
			a(t.li, { children: "Управление состояниями (selected, disabled, focus, readonly)" }),
			"\n",
			a(t.li, { children: "Адаптивное поведение (adaptive, container) для разных размеров экрана" }),
			"\n",
			a(t.li, { children: "Настраиваемое выравнивание текста (textAlign: left/center/right)" }),
			"\n",
			a(t.li, { children: "Поддержка иконок (icon, iconTrailing) и прогресс-индикатора" }),
			"\n",
			a(t.li, { children: "Интеграция скелетон-состояния для загрузки" }),
			"\n",
			a(t.li, { children: "Передача value и detail для идентификации элементов" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Теги и метки для категоризации контента" }),
			"\n",
			a(t.li, { children: "Фильтры в поисковых интерфейсах и каталогах" }),
			"\n",
			a(t.li, { children: "Отображение введенных пользователем данных (email, контакты)" }),
			"\n",
			a(t.li, { children: "Статусы и индикаторы состояния" }),
			"\n",
			a(t.li, { children: "Вспомогательные элементы (подсказки, рекомендации)" }),
			"\n",
			a(t.li, { children: "Выбираемые опции в формах и списках" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedFilters = ref(['active', 'verified'])\nconst tags = ref(['Vue', 'TypeScript', 'UI'])\n\nconst toggleFilter = (filter) => {\n  const index = selectedFilters.value.indexOf(filter)\n  if (index > -1) {\n    selectedFilters.value.splice(index, 1)\n  } else {\n    selectedFilters.value.push(filter)\n  }\n}\n<\/script>\n\n<template>\n  <!-- Базовый чип -->\n  <Chip>Стандарт</Chip>\n\n  <!-- Input чип для пользовательского ввода -->\n  <Chip input icon=\"person\">Контакт</Chip>\n\n  <!-- Assistive чип для подсказок -->\n  <Chip assistive icon=\"lightbulb\">Рекомендация</Chip>\n\n  <!-- Фильтры с состоянием выбора -->\n  <Chip\n    v-for=\"filter in ['active', 'pending', 'verified']\"\n    :key=\"filter\"\n    :selected=\"selectedFilters.includes(filter)\"\n    @click=\"toggleFilter(filter)\"\n  >\n    {{ filter }}\n  </Chip>\n\n  <!-- С передачей данных -->\n  <Chip\n    value=\"filter-tag\"\n    :detail=\"{ category: 'status', type: 'active' }\"\n    @click=\"handleChipClick\"\n  >\n    Активный\n  </Chip>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Chip наследует всю функциональность Button, включая события, иконки и прогресс-индикаторы, добавляя специализированную стилизацию для компактных элементов интерфейса." }),
			"\n"
		] })
	] });
}
function fa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(da, { ...e })
	}) : da(e);
}
//#endregion
//#region src/media/mdx/Chip/assistive.en.mdx
function pa(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Assistive chips (assistive)" }),
		"\n",
		o(t.p, { children: [
			"The Chip component supports assistive mode through the ",
			a(t.code, { children: "assistive" }),
			" property. In this mode, chips have a special visual style to help users complete tasks:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Distinctive style" }), " - visually stand out among other elements"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Hints and recommendations" }), " - suggest action options or auto-completion"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "User guidance" }), " - help navigate the interface"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Icon support" }), " - improve understanding of purpose through visual elements"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Assistive mode is especially useful for creating hint systems, recommendations, and helper actions that guide users to the right solutions without excessive visual noise." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Chip assistive icon=\"lightbulb\">Recommendation</Chip>\n<Chip assistive icon=\"check\">Hint</Chip>\n<Chip assistive>Auto-complete</Chip>\n"
		}) })
	] });
}
function ma(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(pa, { ...e })
	}) : pa(e);
}
//#endregion
//#region src/media/mdx/Chip/assistive.ru.mdx
function ha(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Вспомогательные чипы (assistive)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Chip поддерживает вспомогательный режим через свойство ",
			a(t.code, { children: "assistive" }),
			". В этом режиме чипы имеют специальный визуальный стиль для помощи пользователям в выполнении задач:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Отличительный стиль" }), " - визуально выделяются среди других элементов"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Подсказки и рекомендации" }), " - предлагают варианты действий или автодополнения"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Направление пользователя" }), " - помогают ориентироваться в интерфейсе"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Поддержка иконок" }), " - улучшают понимание назначения через визуальные элементы"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Assistive режим особенно полезен для создания систем подсказок, рекомендаций и вспомогательных действий, которые направляют пользователя к нужным решениям без излишнего визуального шума." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Chip assistive icon=\"lightbulb\">Рекомендация</Chip>\n<Chip assistive icon=\"check\">Подсказка</Chip>\n<Chip assistive>Автодополнение</Chip>\n"
		}) })
	] });
}
function ga(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ha, { ...e })
	}) : ha(e);
}
//#endregion
//#region src/media/mdx/Chip/input.en.mdx
function _a(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Input chips (input)" }),
		"\n",
		o(t.p, { children: [
			"The Chip component supports input mode through the ",
			a(t.code, { children: "input" }),
			" property. In this mode, chips have an input field style and represent discrete information entered by the user:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Form-like appearance" }), " - visually resemble input elements"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "User data" }), " - display tags, contacts, keywords"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Interactivity" }), " - can be removed or edited"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Grouping" }), " - often used in sets for multiple selections"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Input mode is especially useful for displaying data that users have actively entered or selected, making them visually distinct from static interface elements." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Chip input icon=\"person\">Contact</Chip>\n<Chip input icon=\"tag\">Tag</Chip>\n<Chip input selected>Selected</Chip>\n"
		}) })
	] });
}
function va(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(_a, { ...e })
	}) : _a(e);
}
//#endregion
//#region src/media/mdx/Chip/input.ru.mdx
function ya(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Input чипы (input)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Chip поддерживает режим input через свойство ",
			a(t.code, { children: "input" }),
			". В этом режиме чипы имеют стиль полей ввода и представляют дискретную информацию, введенную пользователем:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Внешний вид формы" }), " - визуально напоминают элементы ввода"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Пользовательские данные" }), " - отображают теги, контакты, ключевые слова"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Интерактивность" }), " - могут быть удалены или отредактированы"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Группировка" }), " - часто используются в наборах для множественного выбора"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Input режим особенно полезен для отображения данных, которые пользователь активно вводил или выбирал, делая их визуально отличимыми от статических элементов интерфейса." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<Chip input icon=\"person\">Контакт</Chip>\n<Chip input icon=\"tag\">Тег</Chip>\n<Chip input selected>Выбранный</Chip>\n"
		}) })
	] });
}
function ba(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ya, { ...e })
	}) : ya(e);
}
//#endregion
//#region src/media/mdx/Chip/wikiMdxChip.ts
var xa = {
	name: "Chip",
	descriptions: {
		chip: {
			en: ua,
			ru: fa
		},
		assistive: {
			en: ma,
			ru: ga
		},
		input: {
			en: va,
			ru: ba
		}
	}
};
//#endregion
//#region src/media/mdx/ChipGroup/chipGroup.en.mdx
function Sa(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for managing a collection of chips with selection functionality and flexible data binding." }),
		"\n",
		a(t.p, { children: "ChipGroup renders multiple Chip components from a data array, handles single or multiple selection states, and provides customization options for each chip. The component supports dynamic list rendering, conditional icon display based on selection, and flexible data structure mapping through key properties." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Single or multiple item selection" }),
			"\n",
			a(t.li, { children: "Dynamic list rendering from data array" }),
			"\n",
			a(t.li, { children: "Customizable chip appearance through chipAttrs" }),
			"\n",
			a(t.li, { children: "Conditional icon display based on selection state" }),
			"\n",
			a(t.li, { children: "Flexible data binding with keyLabel and keyValue" }),
			"\n",
			a(t.li, { children: "Event handling for user interactions" }),
			"\n",
			a(t.li, { children: "Support for complex data structures" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Filter chips for search and filtering" }),
			"\n",
			a(t.li, { children: "Tag selection in forms" }),
			"\n",
			a(t.li, { children: "Category selection interfaces" }),
			"\n",
			a(t.li, { children: "Multiple choice options" }),
			"\n",
			a(t.li, { children: "Status or type selectors" }),
			"\n",
			a(t.li, { children: "Dynamic lists with selection" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['option1'])\n\nconst options = [\n  { value: 'option1', label: 'Option 1', icon: 'star' },\n  { value: 'option2', label: 'Option 2', icon: 'favorite' },\n  { value: 'option3', label: 'Option 3', icon: 'bookmark' }\n]\n\nconst handleClick = (event) => {\n  console.log('Chip clicked:', event)\n}\n<\/script>\n\n<template>\n  <ChipGroup\n    v-model:selected=\"selected\"\n    :list=\"options\"\n    key-value=\"value\"\n    key-label=\"label\"\n    :icon-when-selected=\"true\"\n    @click=\"handleClick\"\n  />\n</template>\n"
		}) })
	] });
}
function Ca(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sa, { ...e })
	}) : Sa(e);
}
//#endregion
//#region src/media/mdx/ChipGroup/chipGroup.ru.mdx
function wa(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для управления коллекцией чипов с функциональностью выбора и гибким связыванием данных." }),
		"\n",
		a(t.p, { children: "ChipGroup отображает множество компонентов Chip из массива данных, управляет одиночным или множественным выбором и предоставляет возможности настройки каждого чипа. Компонент поддерживает динамический рендеринг списка, условное отображение иконок в зависимости от выбора и гибкое сопоставление структуры данных через ключевые свойства." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Одиночный или множественный выбор элементов" }),
			"\n",
			a(t.li, { children: "Динамический рендеринг списка из массива данных" }),
			"\n",
			a(t.li, { children: "Настраиваемый внешний вид чипов через chipAttrs" }),
			"\n",
			a(t.li, { children: "Условное отображение иконок в зависимости от состояния выбора" }),
			"\n",
			a(t.li, { children: "Гибкое связывание данных через keyLabel и keyValue" }),
			"\n",
			a(t.li, { children: "Обработка событий для взаимодействия пользователя" }),
			"\n",
			a(t.li, { children: "Поддержка сложных структур данных" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Фильтр-чипы для поиска и фильтрации" }),
			"\n",
			a(t.li, { children: "Выбор тегов в формах" }),
			"\n",
			a(t.li, { children: "Интерфейсы выбора категорий" }),
			"\n",
			a(t.li, { children: "Варианты множественного выбора" }),
			"\n",
			a(t.li, { children: "Селекторы статусов или типов" }),
			"\n",
			a(t.li, { children: "Динамические списки с выбором" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['option1'])\n\nconst options = [\n  { value: 'option1', label: 'Опция 1', icon: 'star' },\n  { value: 'option2', label: 'Опция 2', icon: 'favorite' },\n  { value: 'option3', label: 'Опция 3', icon: 'bookmark' }\n]\n\nconst handleClick = (event) => {\n  console.log('Чип нажат:', event)\n}\n<\/script>\n\n<template>\n  <ChipGroup\n    v-model:selected=\"selected\"\n    :list=\"options\"\n    key-value=\"value\"\n    key-label=\"label\"\n    :icon-when-selected=\"true\"\n    @click=\"handleClick\"\n  />\n</template>\n"
		}) })
	] });
}
function Ta(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wa, { ...e })
	}) : wa(e);
}
//#endregion
//#region src/media/mdx/ChipGroup/selected.en.mdx
function Ea(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Selection Management" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "selected" }),
			" and ",
			a(t.code, { children: "iconWhenSelected" }),
			" are designed for managing chip selection state."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "selected" }),
				" — identifier(s) of selected item (string, number, array of strings/numbers, or ",
				a(t.code, { children: "undefined" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconWhenSelected" }), " — shows chip icons only when item is selected (default: icons always visible)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "selected" }),
			" property determines which chips will be highlighted. Accepts a single value for single selection or an array of values for multiple selection. Values are matched with list items by their index or value if the list contains simple data types."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['option1'])\n<\/script>\n\n<template>\n  <!-- Simple array selection -->\n  <ChipGroup\n    v-model:selected=\"selected\"\n    :list=\"['Option 1', 'Option 2']\"\n  />\n\n  <!-- Object array with keys -->\n  <ChipGroup\n    v-model:selected=\"selected\"\n    :list=\"[\n      { id: 'option1', name: 'First Option' },\n      { id: 'option2', name: 'Second Option' }\n    ]\"\n    key-value=\"id\"\n    key-label=\"name\"\n  />\n\n  <!-- Icons only when selected -->\n  <ChipGroup\n    v-model:selected=\"selected\"\n    :list=\"[\n      { id: 'option1', name: 'Option 1', icon: 'check' },\n      { id: 'option2', name: 'Option 2', icon: 'check' }\n    ]\"\n    key-value=\"id\"\n    key-label=\"name\"\n    :icon-when-selected=\"true\"\n  />\n</template>\n"
		}) })
	] });
}
function Da(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ea, { ...e })
	}) : Ea(e);
}
//#endregion
//#region src/media/mdx/ChipGroup/selected.ru.mdx
function Oa(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление выбором" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "selected" }),
			" и ",
			a(t.code, { children: "iconWhenSelected" }),
			" предназначены для управления состоянием выбора чипов."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "selected" }),
				" — идентификатор(ы) выбранного элемента (строка, число, массив строк/чисел или ",
				a(t.code, { children: "undefined" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconWhenSelected" }), " — показывает иконки чипов только при выборе элемента (по умолчанию: иконки всегда видимы)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "selected" }),
			" определяет, какие чипы будут выделены. Принимает одно значение для единичного выбора или массив значений для множественного выбора. Значения сопоставляются с элементами списка по их индексу или значению, если список содержит простые типы данных."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['option1'])\n<\/script>\n\n<template>\n  <!-- Выбор из простого массива -->\n  <ChipGroup\n    v-model:selected=\"selected\"\n    :list=\"['Опция 1', 'Опция 2']\"\n  />\n\n  <!-- Массив объектов с ключами -->\n  <ChipGroup\n    v-model:selected=\"selected\"\n    :list=\"[\n      { id: 'option1', name: 'Первая опция' },\n      { id: 'option2', name: 'Вторая опция' }\n    ]\"\n    key-value=\"id\"\n    key-label=\"name\"\n  />\n\n  <!-- Иконки только при выборе -->\n  <ChipGroup\n    v-model:selected=\"selected\"\n    :list=\"[\n      { id: 'option1', name: 'Опция 1', icon: 'check' },\n      { id: 'option2', name: 'Опция 2', icon: 'check' }\n    ]\"\n    key-value=\"id\"\n    key-label=\"name\"\n    :icon-when-selected=\"true\"\n  />\n</template>\n"
		}) })
	] });
}
function ka(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Oa, { ...e })
	}) : Oa(e);
}
//#endregion
//#region src/media/mdx/ChipGroup/wikiMdxChipGroup.ts
var Aa = {
	name: "ChipGroup",
	descriptions: {
		chipGroup: {
			en: Ca,
			ru: Ta
		},
		selected: {
			en: Da,
			ru: ka
		}
	}
};
//#endregion
//#region src/media/mdx/Dialog/dialog.en.mdx
function ja(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating modal dialog windows with icon support, titles, and predefined action buttons." }),
		"\n",
		a(t.p, { children: "Dialog is a specialized wrapper over the Modal component with additional capabilities for displaying informational messages, confirmations, and notifications. The component automatically displays an information block with icon, title, and description, and provides predefined OK and Close buttons. Supports success and error states with automatic icon switching, image positioning, and full content customization." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Modal window with centering and background blocking" }),
			"\n",
			a(t.li, { children: "Icon support with automatic switching for success/error states" }),
			"\n",
			a(t.li, { children: "Information block with icon, title, and description" }),
			"\n",
			a(t.li, { children: "Predefined OK and Close buttons with customization options" }),
			"\n",
			a(t.li, { children: "Image positioning at top or left" }),
			"\n",
			a(t.li, { children: "Integration with Window, Bars, Actions, Icon components" }),
			"\n",
			a(t.li, { children: "Closing by ESC key and overlay click" }),
			"\n",
			a(t.li, { children: "ok and close events for handling user actions" }),
			"\n",
			a(t.li, { children: "Slot support for content customization" }),
			"\n",
			a(t.li, { children: "Responsive design for mobile devices" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "User action confirmations" }),
			"\n",
			a(t.li, { children: "Success or error notifications" }),
			"\n",
			a(t.li, { children: "Informational messages" }),
			"\n",
			a(t.li, { children: "Warnings and alerts" }),
			"\n",
			a(t.li, { children: "Simple forms with minimal fields" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\nconst showSuccess = ref(false)\n\nconst handleConfirm = () => {\n  console.log('Action confirmed')\n  isOpen.value = false\n  showSuccess.value = true\n}\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Open Dialog</button>\n\n  <Dialog\n    v-model:open=\"isOpen\"\n    label=\"Confirmation\"\n    description=\"Are you sure you want to perform this action?\"\n    @ok=\"handleConfirm\"\n    @close=\"isOpen = false\"\n  >\n    <template #default>\n      <div class=\"additional-info\">\n        Additional information can be placed here.\n      </div>\n    </template>\n  </Dialog>\n\n  <Dialog\n    v-model:open=\"showSuccess\"\n    :success=\"true\"\n    label=\"Success\"\n    description=\"Your action has been completed successfully.\"\n    :buttonClose=\"null\"\n  />\n</template>\n"
		}) })
	] });
}
function Ma(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ja, { ...e })
	}) : ja(e);
}
//#endregion
//#region src/media/mdx/Dialog/dialog.ru.mdx
function Na(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания модальных диалоговых окон с поддержкой иконок, заголовков и предустановленных кнопок действий." }),
		"\n",
		a(t.p, { children: "Dialog представляет собой специализированную обертку над компонентом Modal с дополнительными возможностями для отображения информационных сообщений, подтверждений и уведомлений. Компонент автоматически отображает информационный блок с иконкой, заголовком и описанием, а также предоставляет предустановленные кнопки OK и Закрыть. Поддерживает состояния успеха и ошибки с автоматическим переключением иконок, позиционирование изображения и полную кастомизацию контента." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Модальное окно с центрированием и блокировкой фона" }),
			"\n",
			a(t.li, { children: "Поддержка иконок с автоматическим переключением для состояний успеха/ошибки" }),
			"\n",
			a(t.li, { children: "Информационный блок с иконкой, заголовком и описанием" }),
			"\n",
			a(t.li, { children: "Предустановленные кнопки OK и Закрыть с возможностью кастомизации" }),
			"\n",
			a(t.li, { children: "Позиционирование изображения сверху или слева" }),
			"\n",
			a(t.li, { children: "Интеграция с компонентами Window, Bars, Actions, Icon" }),
			"\n",
			a(t.li, { children: "Закрытие по ESC и клику на overlay" }),
			"\n",
			a(t.li, { children: "События ok и close для обработки действий пользователя" }),
			"\n",
			a(t.li, { children: "Поддержка слотов для кастомизации контента" }),
			"\n",
			a(t.li, { children: "Адаптивный дизайн для мобильных устройств" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Подтверждения действий пользователя" }),
			"\n",
			a(t.li, { children: "Уведомления об успехе или ошибке" }),
			"\n",
			a(t.li, { children: "Информационные сообщения" }),
			"\n",
			a(t.li, { children: "Предупреждения и алерты" }),
			"\n",
			a(t.li, { children: "Простые формы с минимальным количеством полей" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\nconst showSuccess = ref(false)\n\nconst handleConfirm = () => {\n  console.log('Действие подтверждено')\n  isOpen.value = false\n  showSuccess.value = true\n}\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Открыть диалог</button>\n\n  <Dialog\n    v-model:open=\"isOpen\"\n    label=\"Подтверждение\"\n    description=\"Вы уверены, что хотите выполнить это действие?\"\n    @ok=\"handleConfirm\"\n    @close=\"isOpen = false\"\n  >\n    <template #default>\n      <div class=\"additional-info\">\n        Дополнительная информация может быть размещена здесь.\n      </div>\n    </template>\n  </Dialog>\n\n  <Dialog\n    v-model:open=\"showSuccess\"\n    :success=\"true\"\n    label=\"Успешно\"\n    description=\"Ваше действие выполнено успешно.\"\n    :buttonClose=\"null\"\n  />\n</template>\n"
		}) })
	] });
}
function Pa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Na, { ...e })
	}) : Na(e);
}
//#endregion
//#region src/media/mdx/Dialog/states.en.mdx
function Fa(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Success and error states" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "success" }),
			", ",
			a(t.code, { children: "error" }),
			", ",
			a(t.code, { children: "iconSuccess" }),
			" and ",
			a(t.code, { children: "iconError" }),
			" are designed to control the visual state of the dialog and automatically display corresponding icons."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "success" }), " — sets the dialog to success state with automatic icon"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "error" }), " — sets the dialog to error state with automatic icon"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconSuccess" }), " — sets the icon for success state (default 'check_circle')"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconError" }), " — sets the icon for error state (default 'error')"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: if ",
			a(t.code, { children: "success" }),
			" or ",
			a(t.code, { children: "error" }),
			" are not set or equal to ",
			a(t.code, { children: "false" }),
			", the dialog is displayed in a neutral state. When ",
			a(t.code, { children: "success=\"true\"" }),
			" is activated, the component automatically displays the success icon from ",
			a(t.code, { children: "iconSuccess" }),
			". When ",
			a(t.code, { children: "error=\"true\"" }),
			" is activated, the error icon from ",
			a(t.code, { children: "iconError" }),
			" is displayed. Properties ",
			a(t.code, { children: "iconSuccess" }),
			" and ",
			a(t.code, { children: "iconError" }),
			" allow overriding standard icons with custom ones, providing flexibility in visual design of dialog messages."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst showSuccess = ref(false)\nconst showError = ref(false)\n<\/script>\n\n<template>\n  <!-- Success dialog -->\n  <Dialog\n    v-model:open=\"showSuccess\"\n    :success=\"true\"\n    label=\"Operation completed\"\n    description=\"Your changes have been saved successfully.\"\n  />\n\n  <!-- Error dialog -->\n  <Dialog\n    v-model:open=\"showError\"\n    :error=\"true\"\n    label=\"Operation failed\"\n    description=\"Unable to complete the operation. Please try again.\"\n  />\n\n  <!-- With custom icons -->\n  <Dialog\n    v-model:open=\"showSuccess\"\n    :success=\"true\"\n    iconSuccess=\"done_all\"\n    label=\"All done\"\n    description=\"Process completed successfully.\"\n  />\n\n  <!-- Error with custom icon -->\n  <Dialog\n    v-model:open=\"showError\"\n    :error=\"true\"\n    iconError=\"warning\"\n    label=\"Warning\"\n    description=\"Issues detected during data processing.\"\n  />\n</template>\n"
		}) })
	] });
}
function Ia(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fa, { ...e })
	}) : Fa(e);
}
//#endregion
//#region src/media/mdx/Dialog/states.ru.mdx
function La(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Состояния успеха и ошибки" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "success" }),
			", ",
			a(t.code, { children: "error" }),
			", ",
			a(t.code, { children: "iconSuccess" }),
			" и ",
			a(t.code, { children: "iconError" }),
			" предназначены для управления визуальным состоянием диалога и автоматического отображения соответствующих иконок."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "success" }), " — переводит диалог в состояние успеха с автоматической иконкой"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "error" }), " — переводит диалог в состояние ошибки с автоматической иконкой"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconSuccess" }), " — задаёт иконку для состояния успеха (по умолчанию 'check_circle')"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "iconError" }), " — задаёт иконку для состояния ошибки (по умолчанию 'error')"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: если ",
			a(t.code, { children: "success" }),
			" или ",
			a(t.code, { children: "error" }),
			" не заданы или равны ",
			a(t.code, { children: "false" }),
			", диалог отображается в нейтральном состоянии. При активации ",
			a(t.code, { children: "success=\"true\"" }),
			", компонент автоматически отображает иконку успеха из ",
			a(t.code, { children: "iconSuccess" }),
			". При активации ",
			a(t.code, { children: "error=\"true\"" }),
			", отображается иконка ошибки из ",
			a(t.code, { children: "iconError" }),
			". Свойства ",
			a(t.code, { children: "iconSuccess" }),
			" и ",
			a(t.code, { children: "iconError" }),
			" позволяют переопределить стандартные иконки на пользовательские, обеспечивая гибкость визуального оформления диалоговых сообщений."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst showSuccess = ref(false)\nconst showError = ref(false)\n<\/script>\n\n<template>\n  <!-- Диалог успеха -->\n  <Dialog\n    v-model:open=\"showSuccess\"\n    :success=\"true\"\n    label=\"Операция выполнена\"\n    description=\"Ваши изменения успешно сохранены.\"\n  />\n\n  <!-- Диалог ошибки -->\n  <Dialog\n    v-model:open=\"showError\"\n    :error=\"true\"\n    label=\"Ошибка выполнения\"\n    description=\"Не удалось выполнить операцию. Попробуйте ещё раз.\"\n  />\n\n  <!-- С пользовательскими иконками -->\n  <Dialog\n    v-model:open=\"showSuccess\"\n    :success=\"true\"\n    iconSuccess=\"done_all\"\n    label=\"Всё готово\"\n    description=\"Процесс завершён успешно.\"\n  />\n\n  <!-- Ошибка с кастомной иконкой -->\n  <Dialog\n    v-model:open=\"showError\"\n    :error=\"true\"\n    iconError=\"warning\"\n    label=\"Внимание\"\n    description=\"Обнаружены проблемы при обработке данных.\"\n  />\n</template>\n"
		}) })
	] });
}
function Ra(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(La, { ...e })
	}) : La(e);
}
//#endregion
//#region src/media/mdx/Dialog/buttons.en.mdx
function za(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Action buttons" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "buttonOk" }),
			", ",
			a(t.code, { children: "buttonClose" }),
			", and ",
			a(t.code, { children: "actionsList" }),
			" control action buttons in the dialog window through the built-in Actions component."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "buttonOk" }), " — confirmation button"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "buttonClose" }), " — close button"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "clickOkAndClose" }), " — automatic dialog closing when OK button is clicked"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "actionsList" }), " — direct access to the Actions component button list"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"With ",
			a(t.code, { children: "clickOkAndClose=\"true\"" }),
			" OK button automatically closes the dialog after clicking."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <!-- Basic usage -->\n  <Dialog\n    buttonOk=\"Confirm\"\n    buttonClose=\"Cancel\"\n    label=\"Delete file\"\n    @ok=\"handleDelete\"\n  />\n\n  <!-- Hide close button -->\n  <Dialog\n    buttonOk=\"Got it\"\n    :buttonClose=\"null\"\n    label=\"Information\"\n  />\n\n  <!-- Using actionsList -->\n  <Dialog\n    :actionsList=\"[\n      { label: 'Save', onClick: handleSave },\n      { label: 'Cancel', outline: true, onClick: handleCancel }\n    ]\"\n    label=\"Save\"\n  />\n</template>\n"
		}) })
	] });
}
function Ba(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(za, { ...e })
	}) : za(e);
}
//#endregion
//#region src/media/mdx/Dialog/buttons.ru.mdx
function Va(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Кнопки действий" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "buttonOk" }),
			", ",
			a(t.code, { children: "buttonClose" }),
			" и ",
			a(t.code, { children: "actionsList" }),
			" управляют кнопками действий в диалоговом окне через встроенный компонент Actions."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "buttonOk" }), " — кнопка подтверждения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "buttonClose" }), " — кнопка закрытия"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "clickOkAndClose" }), " — автоматическое закрытие диалога при нажатии кнопки OK"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "actionsList" }), " — прямой доступ к списку кнопок компонента Actions"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"При ",
			a(t.code, { children: "clickOkAndClose=\"true\"" }),
			" кнопка OK автоматически закрывает диалог после нажатия."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <!-- Базовое использование -->\n  <Dialog\n    buttonOk=\"Подтвердить\"\n    buttonClose=\"Отмена\"\n    label=\"Удаление файла\"\n    @ok=\"handleDelete\"\n  />\n\n  <!-- Скрытие кнопки закрытия -->\n  <Dialog\n    buttonOk=\"Понятно\"\n    :buttonClose=\"null\"\n    label=\"Информация\"\n  />\n\n  <!-- Использование actionsList -->\n  <Dialog\n    :actionsList=\"[\n      { label: 'Сохранить', onClick: handleSave },\n      { label: 'Отмена', outline: true, onClick: handleCancel }\n    ]\"\n    label=\"Сохранение\"\n  />\n</template>\n"
		}) })
	] });
}
function Ha(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Va, { ...e })
	}) : Va(e);
}
//#endregion
//#region src/media/mdx/Dialog/events.en.mdx
function Ua(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		p: "p",
		pre: "pre",
		strong: "strong",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "ok" }) }),
		"\n",
		a(t.p, { children: "Event fires when the confirmation (OK) button in the dialog is clicked." }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Parameters:" }), "\nEvent does not pass parameters."] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst showDialog = ref(false)\n\nconst handleOk = () => {\n  console.log('User confirmed action')\n  showDialog.value = false\n  // Execute action after confirmation\n}\n<\/script>\n\n<template>\n  <Dialog\n    v-model:open=\"showDialog\"\n    buttonOk=\"Confirm\"\n    label=\"Delete file\"\n    description=\"Are you sure you want to delete this file?\"\n    @ok=\"handleOk\"\n  />\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "close" }) }),
		"\n",
		a(t.p, { children: "Event fires when the close button in the dialog is clicked." }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Parameters:" }), "\nEvent does not pass parameters."] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst showDialog = ref(false)\n\nconst handleClose = () => {\n  console.log('User cancelled action')\n  showDialog.value = false\n}\n<\/script>\n\n<template>\n  <Dialog\n    v-model:open=\"showDialog\"\n    buttonClose=\"Cancel\"\n    label=\"Confirmation\"\n    @close=\"handleClose\"\n  />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Buttons can be configured via ",
				a(t.code, { children: "buttonOk" }),
				" and ",
				a(t.code, { children: "buttonClose" }),
				" properties, or hidden by passing ",
				a(t.code, { children: "null" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function Wa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ua, { ...e })
	}) : Ua(e);
}
//#endregion
//#region src/media/mdx/Dialog/events.ru.mdx
function Ga(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		p: "p",
		pre: "pre",
		strong: "strong",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "ok" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике на кнопку подтверждения (OK) в диалоговом окне." }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Параметры:" }), "\nСобытие не передаёт параметров."] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst showDialog = ref(false)\n\nconst handleOk = () => {\n  console.log('Пользователь подтвердил действие')\n  showDialog.value = false\n  // Выполнение действия после подтверждения\n}\n<\/script>\n\n<template>\n  <Dialog\n    v-model:open=\"showDialog\"\n    buttonOk=\"Подтвердить\"\n    label=\"Удаление файла\"\n    description=\"Вы действительно хотите удалить этот файл?\"\n    @ok=\"handleOk\"\n  />\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "close" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при клике на кнопку закрытия в диалоговом окне." }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Параметры:" }), "\nСобытие не передаёт параметров."] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst showDialog = ref(false)\n\nconst handleClose = () => {\n  console.log('Пользователь отменил действие')\n  showDialog.value = false\n}\n<\/script>\n\n<template>\n  <Dialog\n    v-model:open=\"showDialog\"\n    buttonClose=\"Отмена\"\n    label=\"Подтверждение\"\n    @close=\"handleClose\"\n  />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Кнопки можно настроить через свойства ",
				a(t.code, { children: "buttonOk" }),
				" и ",
				a(t.code, { children: "buttonClose" }),
				", либо скрыть, передав ",
				a(t.code, { children: "null" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function Ka(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ga, { ...e })
	}) : Ga(e);
}
//#endregion
//#region src/media/mdx/Dialog/wikiMdxDialog.ts
var qa = {
	name: "Dialog",
	descriptions: {
		dialog: {
			en: Ma,
			ru: Pa
		},
		states: {
			en: Ia,
			ru: Ra
		},
		buttons: {
			en: Ba,
			ru: Ha
		},
		events: {
			en: Wa,
			ru: Ka
		}
	}
};
//#endregion
//#region src/media/mdx/Dummy/dummy.en.mdx
function Ja(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "A basic Dummy placeholder component for interface prototyping and visual testing. Allows you to quickly create blocks of specific sizes and colors." }),
		"\n",
		a(t.p, { children: "Dummy is designed as a tool for developers to help structure views before actual components are implemented." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Size customization via the size property" }),
			"\n",
			a(t.li, { children: "Color scheme configuration via the palette property" }),
			"\n",
			a(t.li, { children: "Use as a space filler in layouts" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Prototyping grids and layouts" }),
			"\n",
			a(t.li, { children: "Visual testing of spacing and alignment" }),
			"\n",
			a(t.li, { children: "Placeholders for components not yet implemented" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\n<\/script>\n\n<template>\n  <div class=\"dummy-examples\" style=\"display: flex; gap: 16px; flex-direction: column;\">\n    <!-- Basic Dummy -->\n    <Dummy />\n\n    <!-- Custom Size and Palette -->\n    <Dummy size=\"lg\" palette=\"blue\" />\n\n    <!-- Small Red Dummy -->\n    <Dummy size=\"sm\" palette=\"red\" />\n  </div>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Dummy is designed as a universal utility component for visual planning of interface structure." }),
			"\n"
		] })
	] });
}
function Ya(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ja, { ...e })
	}) : Ja(e);
}
//#endregion
//#region src/media/mdx/Dummy/dummy.ru.mdx
function Xa(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Базовый компонент-заглушка (Dummy) для прототипирования и визуального тестирования интерфейсов. Позволяет быстро создавать блоки определенных размеров и цветов." }),
		"\n",
		a(t.p, { children: "Dummy разработан как инструмент для разработчиков, помогающий структурировать интерфейсы до внедрения реальных компонентов." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Настройка размеров через свойство size" }),
			"\n",
			a(t.li, { children: "Установка цветовых схем через свойство palette" }),
			"\n",
			a(t.li, { children: "Использование в качестве заполнителя пространства в макетах" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Прототипирование сеток и макетов" }),
			"\n",
			a(t.li, { children: "Визуальное тестирование отступов и выравнивания" }),
			"\n",
			a(t.li, { children: "Заглушки для еще не реализованных компонентов" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\n<\/script>\n\n<template>\n  <div class=\"dummy-examples\" style=\"display: flex; gap: 16px; flex-direction: column;\">\n    <!-- Базовая заглушка -->\n    <Dummy />\n\n    <!-- Настройка размера и палитры -->\n    <Dummy size=\"lg\" palette=\"blue\" />\n\n    <!-- Маленькая красная заглушка -->\n    <Dummy size=\"sm\" palette=\"red\" />\n  </div>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Dummy разработан как универсальный вспомогательный компонент для визуального планирования структуры интерфейса." }),
			"\n"
		] })
	] });
}
function Za(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Xa, { ...e })
	}) : Xa(e);
}
//#endregion
//#region src/media/mdx/Dummy/wikiMdxDummy.ts
var Qa = {
	name: "Dummy",
	descriptions: { dummy: {
		en: Ya,
		ru: Za
	} }
};
//#endregion
//#region src/media/mdx/Field/field.en.mdx
function $a(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Base container for form controls that composes label, messages, counter, icons, and progress into a unified structure." }),
		"\n",
		a(t.p, { children: "Field centralizes the visual representation management of input fields, handles focus and validation states, coordinates auxiliary element positioning, and provides a consistent API for building any type of inputs. It serves as the fundamental foundation for creating consistent forms with slot support, control icons, and subcomponent integration." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Core capabilities:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Subcomponent composition (FieldLabel, FieldMessage, FieldCounter, Progress)" }),
			"\n",
			a(t.li, { children: "State management (focus, disabled, readonly, selected, block)" }),
			"\n",
			a(t.li, { children: "Slot coordination (caption, prefix, suffix, leading, trailing)" }),
			"\n",
			a(t.li, { children: "Validation highlighting based on validationMessage and forceShowMessage" }),
			"\n",
			a(t.li, { children: "Control icons with customizable visibility (cancel, arrows)" }),
			"\n",
			a(t.li, { children: "Flexible counter positioning via counterTop" }),
			"\n",
			a(t.li, { children: "Built-in helpers for sizing and icons (FieldSize, FieldIcons)" }),
			"\n",
			a(t.li, { children: "Loading progress integration and skeleton state" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Base container for Input, Select, Textarea, and other form controls" }),
			"\n",
			a(t.li, { children: "Building custom form components with unified styling" }),
			"\n",
			a(t.li, { children: "Creating fields with validation and character counters" }),
			"\n",
			a(t.li, { children: "Developing component libraries with consistent UI" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { Field } from '@dxtmisha/constructor'\n\nconst value = ref('')\n\n// Field provides structure and management\n<\/script>\n\n<template>\n  <Field\n    label=\"Username\"\n    helper-message=\"Enter your name\"\n    :counter=\"value.length\"\n    counter-max=\"50\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        v-model=\"value\"\n        maxlength=\"50\"\n      />\n    </template>\n  </Field>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Field is a constructor container: it does not handle data input directly, but organizes structure, classes, and auxiliary element display for any type of input fields." }),
			"\n"
		] })
	] });
}
function eo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($a, { ...e })
	}) : $a(e);
}
//#endregion
//#region src/media/mdx/Field/field.ru.mdx
function to(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Базовый контейнер для полей формы, который композирует метку, сообщения, счётчик, иконки и прогресс в единую структуру." }),
		"\n",
		a(t.p, { children: "Field централизует управление визуальным представлением полей ввода, обрабатывает состояния фокуса и валидации, координирует расположение вспомогательных элементов и предоставляет согласованный API для построения любых типов инпутов. Является фундаментальной основой для создания консистентных форм с поддержкой слотов, иконок управления и интеграцией подкомпонентов." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Композиция подкомпонентов (FieldLabel, FieldMessage, FieldCounter, Progress)" }),
			"\n",
			a(t.li, { children: "Управление состояниями (focus, disabled, readonly, selected, block)" }),
			"\n",
			a(t.li, { children: "Координация слотов (caption, prefix, suffix, leading, trailing)" }),
			"\n",
			a(t.li, { children: "Подсветка валидации на основе validationMessage и forceShowMessage" }),
			"\n",
			a(t.li, { children: "Иконки управления с настраиваемой видимостью (cancel, arrows)" }),
			"\n",
			a(t.li, { children: "Гибкое позиционирование счётчика через counterTop" }),
			"\n",
			a(t.li, { children: "Встроенные помощники для размеров и иконок (FieldSize, FieldIcons)" }),
			"\n",
			a(t.li, { children: "Интеграция прогресса загрузки и скелетон-состояния" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Базовый контейнер для Input, Select, Textarea и других полей ввода" }),
			"\n",
			a(t.li, { children: "Построение кастомных компонентов форм с единым стилем" }),
			"\n",
			a(t.li, { children: "Создание полей с валидацией и счётчиками символов" }),
			"\n",
			a(t.li, { children: "Разработка библиотек компонентов с консистентным UI" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { Field } from '@dxtmisha/constructor'\n\nconst value = ref('')\n\n// Field предоставляет структуру и управление\n<\/script>\n\n<template>\n  <Field\n    label=\"Имя пользователя\"\n    helper-message=\"Введите ваше имя\"\n    :counter=\"value.length\"\n    counter-max=\"50\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        v-model=\"value\"\n        maxlength=\"50\"\n      />\n    </template>\n  </Field>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Field — это контейнер-конструктор: он не обрабатывает ввод данных напрямую, а организует структуру, классы и отображение вспомогательных элементов для любых типов полей ввода." }),
			"\n"
		] })
	] });
}
function no(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(to, { ...e })
	}) : to(e);
}
//#endregion
//#region src/media/mdx/Field/cancel.en.mdx
function ro(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Clear button" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "cancel" }),
			" and ",
			a(t.code, { children: "cancelShow" }),
			" are designed to control the display of the field clear icon."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "cancel" }),
				" — clear button display mode (",
				a(t.code, { children: "auto" }),
				" or ",
				a(t.code, { children: "always" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "cancelShow" }),
				" — conditional visibility flag, used only in ",
				a(t.code, { children: "auto" }),
				" mode"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: if ",
			a(t.code, { children: "cancel" }),
			" is set to ",
			a(t.code, { children: "auto" }),
			", the clear icon is displayed only when the conditions ",
			a(t.code, { children: "cancelShow = true" }),
			" are met, the field is active (not ",
			a(t.code, { children: "disabled" }),
			"/",
			a(t.code, { children: "readonly" }),
			"), and arrow mode (",
			a(t.code, { children: "arrowCarousel" }),
			"/",
			a(t.code, { children: "arrowStepper" }),
			") is not enabled. When ",
			a(t.code, { children: "cancel = always" }),
			", the icon is displayed forcibly (except for ",
			a(t.code, { children: "disabled" }),
			"/",
			a(t.code, { children: "readonly" }),
			" or active arrows), the ",
			a(t.code, { children: "cancelShow" }),
			" value is ignored. Arrow modes take priority over the clear button — when navigation is active, cancel is hidden regardless of settings."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref, computed } from 'vue'\n\nconst value = ref('')\nconst hasValue = computed(() => value.value.length > 0)\n<\/script>\n\n<template>\n  <!-- Automatic mode with condition -->\n  <Field\n    label=\"Search\"\n    cancel=\"auto\"\n    :cancel-show=\"hasValue\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n\n  <!-- Forced display -->\n  <Field\n    label=\"Filter\"\n    cancel=\"always\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n\n  <!-- With event handler -->\n  <Field\n    label=\"Input\"\n    cancel=\"auto\"\n    :cancel-show=\"hasValue\"\n    @click=\"value = ''\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n</template>\n"
		}) })
	] });
}
function io(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ro, { ...e })
	}) : ro(e);
}
//#endregion
//#region src/media/mdx/Field/cancel.ru.mdx
function ao(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Кнопка очистки" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "cancel" }),
			" и ",
			a(t.code, { children: "cancelShow" }),
			" предназначены для управления отображением иконки очистки поля."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "cancel" }),
				" — режим отображения кнопки очистки (",
				a(t.code, { children: "auto" }),
				" или ",
				a(t.code, { children: "always" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "cancelShow" }),
				" — условный флаг видимости, используется только в режиме ",
				a(t.code, { children: "auto" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: если ",
			a(t.code, { children: "cancel" }),
			" установлен в ",
			a(t.code, { children: "auto" }),
			", иконка очистки отображается только при выполнении условий ",
			a(t.code, { children: "cancelShow = true" }),
			", поле активно (не ",
			a(t.code, { children: "disabled" }),
			"/",
			a(t.code, { children: "readonly" }),
			") и не включён режим стрелок (",
			a(t.code, { children: "arrowCarousel" }),
			"/",
			a(t.code, { children: "arrowStepper" }),
			"). При ",
			a(t.code, { children: "cancel = always" }),
			" иконка отображается принудительно (кроме случаев ",
			a(t.code, { children: "disabled" }),
			"/",
			a(t.code, { children: "readonly" }),
			" или активных стрелок), значение ",
			a(t.code, { children: "cancelShow" }),
			" игнорируется. Режимы стрелок имеют приоритет над кнопкой очистки — при активной навигации cancel скрывается независимо от настроек."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref, computed } from 'vue'\n\nconst value = ref('')\nconst hasValue = computed(() => value.value.length > 0)\n<\/script>\n\n<template>\n  <!-- Автоматический режим с условием -->\n  <Field\n    label=\"Поиск\"\n    cancel=\"auto\"\n    :cancel-show=\"hasValue\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n\n  <!-- Принудительный показ -->\n  <Field\n    label=\"Фильтр\"\n    cancel=\"always\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n\n  <!-- С обработчиком события -->\n  <Field\n    label=\"Ввод\"\n    cancel=\"auto\"\n    :cancel-show=\"hasValue\"\n    @click=\"value = ''\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n</template>\n"
		}) })
	] });
}
function oo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ao, { ...e })
	}) : ao(e);
}
//#endregion
//#region src/media/mdx/Field/arrows.en.mdx
function so(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Navigation and arrows" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "arrowCarousel" }),
			", ",
			a(t.code, { children: "arrowStepper" }),
			", ",
			a(t.code, { children: "arrowAlign" }),
			", ",
			a(t.code, { children: "disabledPrevious" }),
			", and ",
			a(t.code, { children: "disabledNext" }),
			" are designed to control built-in navigation elements."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "arrowCarousel" }), " — enables navigation arrows (left/right) for switching elements"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "arrowStepper" }), " — enables numeric step buttons (minus/plus)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "arrowAlign" }),
				" — controls horizontal position of navigation arrows (",
				a(t.code, { children: "left" }),
				", ",
				a(t.code, { children: "center" }),
				", ",
				a(t.code, { children: "right" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "disabledPrevious" }), " — disables the left button (back/minus)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "disabledNext" }), " — disables the right button (forward/plus)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: only one arrow mode is active — if ",
			a(t.code, { children: "arrowCarousel = true" }),
			", the ",
			a(t.code, { children: "arrowStepper" }),
			" mode is ignored and vice versa. When navigation mode is active, the clear button (",
			a(t.code, { children: "cancel" }),
			") is automatically hidden, as the control area takes priority. The ",
			a(t.code, { children: "disabledPrevious" }),
			" and ",
			a(t.code, { children: "disabledNext" }),
			" flags apply only to the currently active arrow mode."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst currentIndex = ref(0)\nconst items = ['Item 1', 'Item 2', 'Item 3']\nconst count = ref(5)\n<\/script>\n\n<template>\n  <!-- Carousel with navigation -->\n  <Field\n    label=\"Item\"\n    arrow-carousel\n    :disabled-previous=\"currentIndex === 0\"\n    :disabled-next=\"currentIndex === items.length - 1\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        :value=\"items[currentIndex]\"\n        readonly\n      />\n    </template>\n  </Field>\n\n  <!-- Numeric stepper -->\n  <Field\n    label=\"Quantity\"\n    arrow-stepper\n    :disabled-previous=\"count <= 0\"\n    :disabled-next=\"count >= 99\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        :value=\"count\"\n        readonly\n      />\n    </template>\n  </Field>\n\n  <!-- Stepper with left-aligned arrows -->\n  <Field\n    label=\"Value\"\n    arrow-stepper\n    arrow-align=\"left\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        :value=\"count\"\n        readonly\n      />\n    </template>\n  </Field>\n\n  <!-- Stepper with centered arrows -->\n  <Field\n    label=\"Value\"\n    arrow-stepper\n    arrow-align=\"center\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        :value=\"count\"\n        readonly\n      />\n    </template>\n  </Field>\n</template>\n"
		}) })
	] });
}
function co(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(so, { ...e })
	}) : so(e);
}
//#endregion
//#region src/media/mdx/Field/arrows.ru.mdx
function lo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Навигация и стрелки" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "arrowCarousel" }),
			", ",
			a(t.code, { children: "arrowStepper" }),
			", ",
			a(t.code, { children: "arrowAlign" }),
			", ",
			a(t.code, { children: "disabledPrevious" }),
			" и ",
			a(t.code, { children: "disabledNext" }),
			" предназначены для управления встроенными элементами навигации."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "arrowCarousel" }), " — включает стрелки навигации (влево/вправо) для переключения элементов"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "arrowStepper" }), " — включает числовые шаговые кнопки (минус/плюс)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "arrowAlign" }),
				" — управляет горизонтальным расположением стрелок навигации (",
				a(t.code, { children: "left" }),
				", ",
				a(t.code, { children: "center" }),
				", ",
				a(t.code, { children: "right" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "disabledPrevious" }), " — отключает левую кнопку (назад/минус)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "disabledNext" }), " — отключает правую кнопку (вперёд/плюс)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: активен только один режим стрелок — если ",
			a(t.code, { children: "arrowCarousel = true" }),
			", режим ",
			a(t.code, { children: "arrowStepper" }),
			" игнорируется и наоборот. При активном режиме навигации кнопка очистки (",
			a(t.code, { children: "cancel" }),
			") автоматически скрывается, так как область управления имеет приоритет. Флаги ",
			a(t.code, { children: "disabledPrevious" }),
			" и ",
			a(t.code, { children: "disabledNext" }),
			" применяются только к текущему активному режиму стрелок."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst currentIndex = ref(0)\nconst items = ['Item 1', 'Item 2', 'Item 3']\nconst count = ref(5)\n<\/script>\n\n<template>\n  <!-- Карусель с навигацией -->\n  <Field\n    label=\"Элемент\"\n    arrow-carousel\n    :disabled-previous=\"currentIndex === 0\"\n    :disabled-next=\"currentIndex === items.length - 1\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        :value=\"items[currentIndex]\"\n        readonly\n      />\n    </template>\n  </Field>\n\n  <!-- Числовой степпер -->\n  <Field\n    label=\"Количество\"\n    arrow-stepper\n    :disabled-previous=\"count <= 0\"\n    :disabled-next=\"count >= 99\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        :value=\"count\"\n        readonly\n      />\n    </template>\n  </Field>\n\n  <!-- Степпер со стрелками слева -->\n  <Field\n    label=\"Значение\"\n    arrow-stepper\n    arrow-align=\"left\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        :value=\"count\"\n        readonly\n      />\n    </template>\n  </Field>\n\n  <!-- Степпер с центрированными стрелками -->\n  <Field\n    label=\"Значение\"\n    arrow-stepper\n    arrow-align=\"center\"\n  >\n    <template #default=\"{ id, className }\">\n      <input\n        :id=\"id\"\n        :class=\"className\"\n        :value=\"count\"\n        readonly\n      />\n    </template>\n  </Field>\n</template>\n"
		}) })
	] });
}
function uo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(lo, { ...e })
	}) : lo(e);
}
//#endregion
//#region src/media/mdx/Field/value.en.mdx
function fo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Value state" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "value" }),
			" and ",
			a(t.code, { children: "isValue" }),
			" are designed to control the visual filled state of the field independently of the actual content."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value" }), " — actual field content (string/number) passed to the inner element via slot"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "isValue" }), " — forcibly activates the visual \"filled\" state even when the value is empty"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: ",
			a(t.code, { children: "Field" }),
			" reads ",
			a(t.code, { children: "value" }),
			" reactively through ",
			a(t.code, { children: "focusValue" }),
			" for visual purposes (displaying text in scoreboard, caption handling), but does not manage it directly or validate it. If the real value is non-empty, the field automatically receives the visual \"filled\" state regardless of ",
			a(t.code, { children: "isValue" }),
			". When the value is empty, the ",
			a(t.code, { children: "isValue = true" }),
			" flag forcibly activates the visual filled mode (floating label, corresponding classes), which is useful for preloads, masks, or delayed data insertion."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('')\nconst isLoading = ref(true)\n<\/script>\n\n<template>\n  <!-- Normal behavior -->\n  <Field label=\"Name\">\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n\n  <!-- Forced \"filled\" state -->\n  <Field\n    label=\"Email\"\n    :value=\"value\"\n    :is-value=\"true\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n\n  <!-- Preload with visual state -->\n  <Field\n    label=\"Data\"\n    :is-value=\"isLoading\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n</template>\n"
		}) })
	] });
}
function po(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(fo, { ...e })
	}) : fo(e);
}
//#endregion
//#region src/media/mdx/Field/value.ru.mdx
function mo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Состояние значения" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "value" }),
			" и ",
			a(t.code, { children: "isValue" }),
			" предназначены для управления визуальным состоянием заполненности поля независимо от фактического содержимого."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value" }), " — фактическое содержимое поля (строка/число), передаваемое во внутренний элемент через слот"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "isValue" }), " — принудительно активирует визуальное состояние \"заполнено\" даже при пустом значении"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: ",
			a(t.code, { children: "Field" }),
			" считывает ",
			a(t.code, { children: "value" }),
			" реактивно через ",
			a(t.code, { children: "focusValue" }),
			" для визуальных целей (отображение текста в scoreboard, работа с caption), но не управляет им напрямую и не валидирует. Если реальное значение непустое, поле автоматически получает визуальное состояние \"заполнено\" независимо от ",
			a(t.code, { children: "isValue" }),
			". При пустом значении флаг ",
			a(t.code, { children: "isValue = true" }),
			" принудительно активирует визуальный режим заполненности (плавающая метка, соответствующие классы), что полезно для прелоадов, масок или отложенной подстановки данных."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('')\nconst isLoading = ref(true)\n<\/script>\n\n<template>\n  <!-- Обычное поведение -->\n  <Field label=\"Имя\">\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n\n  <!-- Принудительное состояние \"заполнено\" -->\n  <Field\n    label=\"Email\"\n    :value=\"value\"\n    :is-value=\"true\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n\n  <!-- Прелоад с визуальным состоянием -->\n  <Field\n    label=\"Данные\"\n    :is-value=\"isLoading\"\n  >\n    <template #default=\"{ id, className }\">\n      <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n    </template>\n  </Field>\n</template>\n"
		}) })
	] });
}
function ho(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(mo, { ...e })
	}) : mo(e);
}
//#endregion
//#region src/media/mdx/Field/width.en.mdx
function go(e) {
	let t = {
		code: "code",
		pre: "pre",
		...e.components
	};
	return a(t.pre, { children: a(t.code, {
		className: "language-markdown",
		children: "## Field width\n\nProperty `width` defines the horizontal size of the Field container.\n\n**Possible values:**\n\n- any valid CSS value (`'320px'`, `'48rem'`, `'50%'`, `'min(100%,320px)'`, `'clamp(240px,40vw,480px)'`)\n- design system tokens (e.g., `'sm'`, `'md'`, `'lg'` if supported)\n- `'custom'` — internal technical marker (not used directly)\n\nControls the fixed or relative width of the field, applying the value directly without additional wrappers. When the property is not set, the width remains flexible and depends on the parent container. When the `block` property is active (set to `true`), the field takes 100% width regardless of the specified `width` value, with block mode taking priority.\n\n```html\n<!-- Automatic width -->\n<Field label=\"auto\" />\n\n<!-- Fixed width -->\n<Field width=\"320px\" label=\"320px\" />\n\n<!-- Relative width -->\n<Field width=\"50%\" label=\"50%\" />\n\n<!-- CSS functions -->\n<Field width=\"min(100%, 320px)\" label=\"min(...)\" />\n<Field width=\"clamp(240px, 40vw, 480px)\" label=\"clamp(...)\" />\n```\n"
	}) });
}
function _o(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(go, { ...e })
	}) : go(e);
}
//#endregion
//#region src/media/mdx/Field/width.ru.mdx
function vo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Ширина поля" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "width" }),
			" определяет горизонтальный размер контейнера Field."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"любое валидное CSS-значение (",
				a(t.code, { children: "'320px'" }),
				", ",
				a(t.code, { children: "'48rem'" }),
				", ",
				a(t.code, { children: "'50%'" }),
				", ",
				a(t.code, { children: "'min(100%,320px)'" }),
				", ",
				a(t.code, { children: "'clamp(240px,40vw,480px)'" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				"дизайн-токены системы (например, ",
				a(t.code, { children: "'sm'" }),
				", ",
				a(t.code, { children: "'md'" }),
				", ",
				a(t.code, { children: "'lg'" }),
				" при поддержке)"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'custom'" }), " — внутренняя техническая метка (не используется напрямую)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Контролирует фиксированную или относительную ширину поля, применяя значение напрямую без дополнительных обёрток. При отсутствии свойства ширина остаётся гибкой и зависит от родительского контейнера. При активном свойстве ",
			a(t.code, { children: "block" }),
			" (установлено в ",
			a(t.code, { children: "true" }),
			") поле занимает 100% ширины независимо от заданного значения ",
			a(t.code, { children: "width" }),
			", приоритет имеет блочный режим."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Автоматическая ширина -->\n<Field label=\"auto\" />\n\n<!-- Фиксированная ширина -->\n<Field width=\"320px\" label=\"320px\" />\n\n<!-- Относительная ширина -->\n<Field width=\"50%\" label=\"50%\" />\n\n<!-- CSS-функции -->\n<Field width=\"min(100%, 320px)\" label=\"min(...)\" />\n<Field width=\"clamp(240px, 40vw, 480px)\" label=\"clamp(...)\" />\n"
		}) })
	] });
}
function yo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vo, { ...e })
	}) : vo(e);
}
//#endregion
//#region src/media/mdx/Field/slots.en.mdx
function bo(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "default(props: FieldControl): any" }), " — Default slot for the main input element."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "leading(props: FieldControl): any" }), " — Slot for displaying content before the input area."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "trailing(props: FieldControl): any" }), " — Slot for displaying content after the input area."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "FieldControl:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "id: string" }), " — unique identifier for binding label and input."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "className: string" }), " — CSS classes for the visible input area."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classHidden: string" }), " — CSS classes for the hidden native input element."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classForFocus: string" }), " — CSS classes applied when the field is focused."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: Record<string, any>" }), " — properties bound to the input element."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function xo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bo, { ...e })
	}) : bo(e);
}
//#endregion
//#region src/media/mdx/Field/slots.ru.mdx
function So(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "default(props: FieldControl): any" }), " — Слот по умолчанию для основного элемента ввода (input, select, textarea)."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "leading(props: FieldControl): any" }), " — Слот для отображения контента перед областью ввода."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "trailing(props: FieldControl): any" }), " — Слот для отображения контента после области ввода."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "FieldControl:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "id: string" }), " — уникальный идентификатор элемента для связывания label и input."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "className: string" }), " — CSS-классы для видимой зоны ввода."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classHidden: string" }), " — CSS-классы для скрытого нативного элемента ввода."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classForFocus: string" }), " — CSS-классы, применяемые при фокусировке на поле."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: Record<string, any>" }), " — свойства, привязанные к элементу ввода."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Co(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(So, { ...e })
	}) : So(e);
}
//#endregion
//#region src/media/mdx/Field/wikiMdxField.ts
var wo = {
	name: "Field",
	descriptions: {
		arrows: {
			en: co,
			ru: uo
		},
		cancel: {
			en: io,
			ru: oo
		},
		field: {
			en: eo,
			ru: no
		},
		slots: {
			en: xo,
			ru: Co
		},
		value: {
			en: po,
			ru: ho
		},
		width: {
			en: _o,
			ru: yo
		}
	}
};
//#endregion
//#region src/media/mdx/FieldCounter/fieldCounter.en.mdx
function To(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for displaying character count and input limits in form fields with customizable formatting templates." }),
		"\n",
		a(t.p, { children: "FieldCounter provides visual feedback about the number of entered characters, automatically formats display depending on the presence of a maximum limit, and supports flexible customization through templates with placeholders. The component integrates with text fields and text areas, providing users with information about restrictions and remaining input space." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Display current number of entered characters" }),
			"\n",
			a(t.li, { children: "Automatic maximum limit display when present" }),
			"\n",
			a(t.li, { children: "Flexible formatting templates with [c] and [m] placeholders" }),
			"\n",
			a(t.li, { children: "Automatic format detection (50 / 100 or just 50)" }),
			"\n",
			a(t.li, { children: "Support for string and numeric counter and maxlength values" }),
			"\n",
			a(t.li, { children: "Smart visibility management via counterShow property" }),
			"\n",
			a(t.li, { children: "Compact display for space efficiency" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Text fields with character count limits" }),
			"\n",
			a(t.li, { children: "Multi-line text areas (textarea) for descriptions" }),
			"\n",
			a(t.li, { children: "Comment input fields with limits" }),
			"\n",
			a(t.li, { children: "Forms with minimum/maximum length requirements" }),
			"\n",
			a(t.li, { children: "SMS editors with character counting" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Basic counter -->\n  <Component :counter=\"10\" />\n\n  <!-- With limit -->\n  <Component :counter=\"10\" :maxlength=\"100\" />\n\n  <!-- Custom template -->\n  <Component :counter=\"5\" :maxlength=\"50\" template=\"[c] of [m]\" />\n</template>\n"
		}) })
	] });
}
function Eo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(To, { ...e })
	}) : To(e);
}
//#endregion
//#region src/media/mdx/FieldCounter/fieldCounter.ru.mdx
function Do(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для отображения счетчика символов и лимитов ввода в полях форм с поддержкой настраиваемых шаблонов форматирования." }),
		"\n",
		a(t.p, { children: "FieldCounter обеспечивает визуальную обратную связь о количестве введенных символов, автоматически форматирует отображение в зависимости от наличия максимального лимита и поддерживает гибкую настройку через шаблоны с плейсхолдерами. Компонент интегрируется с текстовыми полями и областями ввода, предоставляя пользователю информацию об ограничениях и оставшемся месте для ввода." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Отображение текущего количества введенных символов" }),
			"\n",
			a(t.li, { children: "Автоматический показ максимального лимита при его наличии" }),
			"\n",
			a(t.li, { children: "Гибкие шаблоны форматирования с плейсхолдерами [c] и [m]" }),
			"\n",
			a(t.li, { children: "Автоматическое определение формата (50 / 100 или просто 50)" }),
			"\n",
			a(t.li, { children: "Поддержка строковых и числовых значений counter и maxlength" }),
			"\n",
			a(t.li, { children: "Умное управление видимостью через свойство counterShow" }),
			"\n",
			a(t.li, { children: "Компактное отображение для экономии пространства" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Текстовые поля с ограничением по количеству символов" }),
			"\n",
			a(t.li, { children: "Многострочные текстовые области (textarea) для описаний" }),
			"\n",
			a(t.li, { children: "Поля ввода комментариев с лимитами" }),
			"\n",
			a(t.li, { children: "Формы с требованиями к минимальной/максимальной длине" }),
			"\n",
			a(t.li, { children: "SMS-редакторы с подсчетом символов" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Базовый счетчик -->\n  <Component :counter=\"10\" />\n\n  <!-- С лимитом -->\n  <Component :counter=\"10\" :maxlength=\"100\" />\n\n  <!-- Кастомный шаблон -->\n  <Component :counter=\"5\" :maxlength=\"50\" template=\"[c] / [m]\" />\n</template>\n"
		}) })
	] });
}
function Oo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Do, { ...e })
	}) : Do(e);
}
//#endregion
//#region src/media/mdx/FieldCounter/templates.en.mdx
function ko(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Custom Display Templates" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "template" }),
			" property allows you to customize the counter display format using placeholders."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Available placeholders:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "[c]" }), " — current number of entered characters"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "[m]" }), " — maximum character limit"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Uses string interpolation to replace placeholders with actual counter values. Supports HTML markup inside the template for customizing styles of individual parts. When no template is provided, the component automatically determines the format: displays \"50 / 100\" when ",
			a(t.code, { children: "maxlength" }),
			" is present or just \"50\" when it's absent."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Descriptive format -->\n<FieldCounter\n  :counter=\"75\"\n  :maxlength=\"150\"\n  template=\"Characters: [c] of [m]\"\n/>\n\n<!-- Compact format -->\n<FieldCounter\n  :counter=\"42\"\n  :maxlength=\"100\"\n  template=\"[c]/[m]\"\n/>\n\n<!-- With HTML for styling -->\n<FieldCounter\n  :counter=\"75\"\n  :maxlength=\"150\"\n  template=\"<b>[c]</b> of <i>[m]</i> characters\"\n/>\n\n<!-- Current counter only with text -->\n<FieldCounter\n  :counter=\"42\"\n  template=\"Characters entered: [c]\"\n/>\n"
		}) })
	] });
}
function Ao(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ko, { ...e })
	}) : ko(e);
}
//#endregion
//#region src/media/mdx/FieldCounter/templates.ru.mdx
function jo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Настраиваемые шаблоны отображения" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "template" }),
			" позволяет настроить формат отображения счетчика символов с использованием плейсхолдеров."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Доступные плейсхолдеры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "[c]" }), " — текущее количество введенных символов"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "[m]" }), " — максимальный лимит символов"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Использует строковую интерполяцию для замены плейсхолдеров на актуальные значения счетчика. Поддерживает HTML-разметку внутри шаблона для кастомизации стилей отдельных частей. При отсутствии шаблона компонент автоматически определяет формат: отображает \"50 / 100\" при наличии ",
			a(t.code, { children: "maxlength" }),
			" или просто \"50\" при его отсутствии."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Описательный формат -->\n<FieldCounter\n  :counter=\"75\"\n  :maxlength=\"150\"\n  template=\"Символов: [c] из [m]\"\n/>\n\n<!-- Компактный формат -->\n<FieldCounter\n  :counter=\"42\"\n  :maxlength=\"100\"\n  template=\"[c]/[m]\"\n/>\n\n<!-- С HTML для стилизации -->\n<FieldCounter\n  :counter=\"75\"\n  :maxlength=\"150\"\n  template=\"<b>[c]</b> из <i>[m]</i> символов\"\n/>\n\n<!-- Только текущий счетчик с текстом -->\n<FieldCounter\n  :counter=\"42\"\n  template=\"Введено символов: [c]\"\n/>\n"
		}) })
	] });
}
function Mo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(jo, { ...e })
	}) : jo(e);
}
//#endregion
//#region src/media/mdx/FieldCounter/wikiMdxFieldCounter.ts
var No = {
	name: "FieldCounter",
	descriptions: {
		fieldCounter: {
			en: Eo,
			ru: Oo
		},
		templates: {
			en: Ao,
			ru: Mo
		}
	}
};
//#endregion
//#region src/media/mdx/FieldLabel/fieldLabel.en.mdx
function Po(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for displaying input field labels with support for required indicator, character counter, and progress indicator." }),
		"\n",
		a(t.p, { children: "FieldLabel provides uniform display of form field captions, automatically integrates with FieldCounter for character counting and Progress for loading indication. The component supports skeleton loading, customizable slots, and ensures consistent visual styling of form elements." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Text label display for input fields" }),
			"\n",
			a(t.li, { children: "Required field indicator (required marker)" }),
			"\n",
			a(t.li, { children: "FieldCounter integration for character counting" }),
			"\n",
			a(t.li, { children: "Built-in Progress indicator support" }),
			"\n",
			a(t.li, { children: "Skeleton loading support for pending states" }),
			"\n",
			a(t.li, { children: "Flexible customization via slots (leading, trailing)" }),
			"\n",
			a(t.li, { children: "Consistent spacing and styles within forms" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Labels for text fields and textareas" }),
			"\n",
			a(t.li, { children: "Forms with required fields" }),
			"\n",
			a(t.li, { children: "Fields with character count limits" }),
			"\n",
			a(t.li, { children: "Forms with file upload progress indication" }),
			"\n",
			a(t.li, { children: "Dynamic forms with skeleton loading" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Basic label -->\n  <Component label=\"Username\" />\n\n  <!-- Required field label -->\n  <Component label=\"Email\" required />\n\n  <!-- With progress and counter -->\n  <Component\n    label=\"Loading\"\n    :progress=\"45\"\n    :counter=\"10\"\n    :maxlength=\"100\"\n  />\n</template>\n"
		}) })
	] });
}
function Fo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Po, { ...e })
	}) : Po(e);
}
//#endregion
//#region src/media/mdx/FieldLabel/fieldLabel.ru.mdx
function Io(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для отображения меток полей ввода с поддержкой индикатора обязательности, счетчика символов и прогресс-индикатора." }),
		"\n",
		a(t.p, { children: "FieldLabel предоставляет единообразное отображение подписей к полям форм, автоматически интегрируется с FieldCounter для подсчета символов и Progress для индикации загрузки. Компонент поддерживает скелетон-загрузку, настраиваемые слоты и обеспечивает согласованное визуальное оформление элементов формы." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Отображение текстовой метки для полей ввода" }),
			"\n",
			a(t.li, { children: "Индикатор обязательности поля (required marker)" }),
			"\n",
			a(t.li, { children: "Интеграция со счетчиком символов FieldCounter" }),
			"\n",
			a(t.li, { children: "Встроенная поддержка прогресс-индикатора Progress" }),
			"\n",
			a(t.li, { children: "Поддержка скелетон-загрузки для состояния ожидания" }),
			"\n",
			a(t.li, { children: "Гибкая настройка через слоты (leading, trailing)" }),
			"\n",
			a(t.li, { children: "Единообразные отступы и стили в составе форм" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Подписи к текстовым полям и textarea" }),
			"\n",
			a(t.li, { children: "Формы с обязательными полями" }),
			"\n",
			a(t.li, { children: "Поля с ограничением количества символов" }),
			"\n",
			a(t.li, { children: "Формы с индикацией процесса загрузки файлов" }),
			"\n",
			a(t.li, { children: "Динамические формы со скелетон-загрузкой" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Базовая метка -->\n  <Component label=\"Username\" />\n\n  <!-- Обязательное поле -->\n  <Component label=\"Email\" required />\n\n  <!-- С прогрессом и счетчиком -->\n  <Component\n    label=\"Загрузка\"\n    :progress=\"45\"\n    :counter=\"10\"\n    :maxlength=\"100\"\n  />\n</template>\n"
		}) })
	] });
}
function Lo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Io, { ...e })
	}) : Io(e);
}
//#endregion
//#region src/media/mdx/FieldLabel/wikiMdxFieldLabel.ts
var Ro = {
	name: "FieldLabel",
	descriptions: { fieldLabel: {
		en: Fo,
		ru: Lo
	} }
};
//#endregion
//#region src/media/mdx/FieldMessage/fieldMessage.en.mdx
function zo(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for displaying helper and validation messages below form fields." }),
		"\n",
		a(t.p, { children: "FieldMessage centralizes management of text hints and error messages in forms. The component automatically determines display priority (validation errors take precedence over hints), supports forced display via forceShow, and integrates with input fields and character counters. It provides a flexible slot system for customization and works with both static and reactive values." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Two message types: helper and validation" }),
			"\n",
			a(t.li, { children: "Message priority — validation message overrides helper message" }),
			"\n",
			a(t.li, { children: "Smart visibility — automatic display logic based on provided values" }),
			"\n",
			a(t.li, { children: "Forced display via forceShow property" }),
			"\n",
			a(t.li, { children: "Flexible sources — support for static and reactive values" }),
			"\n",
			a(t.li, { children: "Integration with FieldCounter for complex forms" }),
			"\n",
			a(t.li, { children: "Customizable rendering through design system and slots" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Helper hints below input fields" }),
			"\n",
			a(t.li, { children: "Displaying validation errors in forms" }),
			"\n",
			a(t.li, { children: "Dynamic messages with reactive content" }),
			"\n",
			a(t.li, { children: "Complex forms with counters and validation" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Helper message -->\n  <Component helper=\"Enter your name\" />\n\n  <!-- Validation message -->\n  <Component validation=\"Minimum 3 characters\" />\n\n  <!-- Slots -->\n  <Component>\n    <template #helper>💡 Hint</template>\n    <template #validation>⚠️ Error</template>\n  </Component>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "The component focuses on text messages and should be used together with input control elements." }),
			"\n"
		] })
	] });
}
function Bo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zo, { ...e })
	}) : zo(e);
}
//#endregion
//#region src/media/mdx/FieldMessage/fieldMessage.ru.mdx
function Vo(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для отображения вспомогательных и валидационных сообщений под полями формы." }),
		"\n",
		a(t.p, { children: "FieldMessage централизует управление текстовыми подсказками и сообщениями об ошибках в формах. Компонент автоматически определяет приоритет отображения (ошибки валидации выше подсказок), поддерживает принудительное показ через forceShow и интегрируется с полями ввода и счетчиками символов. Предоставляет гибкую систему слотов для кастомизации и работает как со статическими, так и с реактивными значениями." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Два типа сообщений: вспомогательное (helper) и валидационное (validation)" }),
			"\n",
			a(t.li, { children: "Приоритет сообщений — валидационное сообщение перекрывает вспомогательное" }),
			"\n",
			a(t.li, { children: "Умная видимость — автоматическая логика отображения на основе переданных значений" }),
			"\n",
			a(t.li, { children: "Принудительное отображение через свойство forceShow" }),
			"\n",
			a(t.li, { children: "Гибкие источники — поддержка статических и реактивных значений" }),
			"\n",
			a(t.li, { children: "Интеграция с FieldCounter для комплексных форм" }),
			"\n",
			a(t.li, { children: "Настраиваемый рендеринг через систему дизайна и слоты" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Вспомогательные подсказки под полями ввода" }),
			"\n",
			a(t.li, { children: "Отображение ошибок валидации в формах" }),
			"\n",
			a(t.li, { children: "Динамические сообщения с реактивным контентом" }),
			"\n",
			a(t.li, { children: "Комплексные формы с счетчиками и валидацией" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Подсказка -->\n  <Component helper=\"Введите ваше имя\" />\n\n  <!-- Ошибка валидации -->\n  <Component validation=\"Минимум 3 символа\" />\n\n  <!-- Слоты -->\n  <Component>\n    <template #helper>💡 Подсказка</template>\n    <template #validation>⚠️ Ошибка</template>\n  </Component>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Компонент фокусируется на текстовых сообщениях и должен использоваться совместно с элементами управления вводом." }),
			"\n"
		] })
	] });
}
function Ho(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vo, { ...e })
	}) : Vo(e);
}
//#endregion
//#region src/media/mdx/FieldMessage/slots.en.mdx
function Uo(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "helper(props: FieldMessageSlot): any" }), " — Slot for custom helper message content."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "validation(props: FieldMessageSlot): any" }), " — Slot for custom validation message content."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "FieldMessageSlot:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "message: string" }), " — current message (helper or validation)."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "helperMessage: string" }), " — helper message text."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "validationMessage: string" }), " — validation message text."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Wo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Uo, { ...e })
	}) : Uo(e);
}
//#endregion
//#region src/media/mdx/FieldMessage/slots.ru.mdx
function Go(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "helper(props: FieldMessageSlot): any" }), " — Слот для пользовательского содержимого вспомогательного сообщения."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "validation(props: FieldMessageSlot): any" }), " — Слот для пользовательского содержимого сообщения валидации."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "FieldMessageSlot:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "message: string" }), " — текущее сообщение (вспомогательное или валидация)."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "helperMessage: string" }), " — текст вспомогательного сообщения."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "validationMessage: string" }), " — текст сообщения валидации."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Ko(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Go, { ...e })
	}) : Go(e);
}
//#endregion
//#region src/media/mdx/FieldMessage/wikiMdxFieldMessage.ts
var qo = {
	name: "FieldMessage",
	descriptions: {
		fieldMessage: {
			en: Bo,
			ru: Ho
		},
		slots: {
			en: Wo,
			ru: Ko
		}
	}
};
//#endregion
//#region src/media/mdx/Grid/grid.en.mdx
function Jo(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Layout component for creating grid structures with customizable columns." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Flexible grid system (defaults to 12 columns)" }),
			"\n",
			a(t.li, { children: "Gap customization" }),
			"\n",
			a(t.li, { children: "Responsive layout building" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\n<\/script>\n\n<template>\n  <Grid>\n    <GridItem columnBase=\"6\">Item 1</GridItem>\n    <GridItem columnBase=\"6\">Item 2</GridItem>\n  </Grid>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Grid is the foundation for creating aligned and structured layouts across different screen sizes." }),
			"\n"
		] })
	] });
}
function Yo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Jo, { ...e })
	}) : Jo(e);
}
//#endregion
//#region src/media/mdx/Grid/grid.ru.mdx
function Xo(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Компонент макета для создания сеточных структур с настраиваемыми колонками." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Гибкая сеточная система (по умолчанию 12 колонок)" }),
			"\n",
			a(t.li, { children: "Настройка отступов между элементами" }),
			"\n",
			a(t.li, { children: "Создание адаптивных интерфейсов" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\n<\/script>\n\n<template>\n  <Grid>\n    <GridItem columnBase=\"6\">Элемент 1</GridItem>\n    <GridItem columnBase=\"6\">Элемент 2</GridItem>\n  </Grid>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Grid является основой для создания упорядоченных и структурированных макетов для различных размеров экранов." }),
			"\n"
		] })
	] });
}
function Zo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Xo, { ...e })
	}) : Xo(e);
}
//#endregion
//#region src/media/mdx/Grid/wikiMdxGrid.ts
var Qo = {
	name: "Grid",
	descriptions: { grid: {
		en: Yo,
		ru: Zo
	} }
};
//#endregion
//#region src/media/mdx/GridItem/gridItem.en.mdx
function $o(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Individual item within a Grid component. Controls how many columns the element should take across different screen sizes." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Customizable column span (1 to 12)" }),
			"\n",
			a(t.li, { children: "Built-in responsive support for all major breakpoints" }),
			"\n",
			a(t.li, { children: "Granular control over layout density" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\n<\/script>\n\n<template>\n  <Grid>\n    <!-- Full width on mobile, half on desktop -->\n    <GridItem base=\"12\" md=\"6\">Item 1</GridItem>\n    <GridItem base=\"12\" md=\"6\">Item 2</GridItem>\n\n    <!-- Different spans for different screen sizes -->\n    <GridItem base=\"12\" sm=\"6\" lg=\"3\">Responsive item</GridItem>\n  </Grid>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "GridItem allows for granular control over element sizing within a Grid container, enabling complex responsive layouts with zero custom CSS." }),
			"\n"
		] })
	] });
}
function es(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($o, { ...e })
	}) : $o(e);
}
//#endregion
//#region src/media/mdx/GridItem/gridItem.ru.mdx
function ts(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Отдельный элемент внутри компонента Grid. Управляет тем, сколько колонок должен занимать элемент на различных размерах экрана." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Настраиваемый охват колонок (от 1 до 12)" }),
			"\n",
			a(t.li, { children: "Встроенная поддержка адаптивности для всех основных брейкпоинтов" }),
			"\n",
			a(t.li, { children: "Детальный контроль над плотностью макета" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\n<\/script>\n\n<template>\n  <Grid>\n    <!-- Полная ширина на мобильных, половина на десктопе -->\n    <GridItem base=\"12\" md=\"6\">Элемент 1</GridItem>\n    <GridItem base=\"12\" md=\"6\">Элемент 2</GridItem>\n\n    <!-- Различный охват для разных размеров экрана -->\n    <GridItem base=\"12\" sm=\"6\" lg=\"3\">Адаптивный элемент</GridItem>\n  </Grid>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "GridItem обеспечивает детальный контроль над размером элементов внутри контейнера Grid, позволяя создавать сложные адаптивные макеты без написания дополнительного CSS." }),
			"\n"
		] })
	] });
}
function ns(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ts, { ...e })
	}) : ts(e);
}
//#endregion
//#region src/media/mdx/GridItem/wikiMdxGridItem.ts
var rs = {
	name: "GridItem",
	descriptions: { gridItem: {
		en: es,
		ru: ns
	} }
};
//#endregion
//#region src/media/mdx/Group/group.en.mdx
function is(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "A structural component designed to group related content with support for headers, descriptions, and flexible layout options. It is a semantic alias for the Block component, with a default header level of h4." }),
		"\n",
		a(t.p, { children: "Group provides a standardized way to organize information within a page or another component, ensuring a consistent visual hierarchy. It inherits all the capabilities of the Block component, including support for icons, captions, and slot-based customization." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Standardized grouping of content using ",
				a(t.code, { children: "<div>" }),
				" tag"
			] }),
			"\n",
			o(t.li, { children: [
				"Support for titles (",
				a(t.code, { children: "h4" }),
				" by default), labels, descriptions, and captions"
			] }),
			"\n",
			a(t.li, { children: "Icon support" }),
			"\n",
			a(t.li, { children: "Fully inherits Block component capabilities" }),
			"\n",
			a(t.li, { children: "Flexible layout for content organization" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Subsections within a page" }),
			"\n",
			a(t.li, { children: "Grouping elements within a card or modal" }),
			"\n",
			a(t.li, { children: "Organizing complex forms into thematic areas" }),
			"\n",
			a(t.li, { children: "Creating structured content blocks with smaller headers" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <Group\n    headline=\"Group Headline\"\n    label=\"Group Label\"\n    description=\"Detailed description for the group content\"\n    caption=\"Auxiliary text\"\n    icon=\"folder\"\n  >\n    Main group content goes here\n  </Group>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Group is an ideal choice for creating semantic sub-structures within your application." }),
			"\n"
		] })
	] });
}
function as(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(is, { ...e })
	}) : is(e);
}
//#endregion
//#region src/media/mdx/Group/group.ru.mdx
function os(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Структурный компонент, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. Это семантический псевдоним компонента Block с уровнем заголовка h4 по умолчанию." }),
		"\n",
		a(t.p, { children: "Group обеспечивает стандартизированный способ организации информации внутри страницы или другого компонента, гарантируя согласованную визуальную иерархию. Он наследует все возможности компонента Block, включая поддержку иконок, подписей и кастомизацию на основе слотов." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: ["Стандартизированная группировка контента с использованием тега ", a(t.code, { children: "<div>" })] }),
			"\n",
			o(t.li, { children: [
				"Поддержка заголовков (",
				a(t.code, { children: "h4" }),
				" по умолчанию), меток, описаний и подписей"
			] }),
			"\n",
			a(t.li, { children: "Поддержка иконок" }),
			"\n",
			a(t.li, { children: "Полностью наследует возможности компонента Block" }),
			"\n",
			a(t.li, { children: "Гибкая компоновка для организации контента" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Подразделы внутри страницы" }),
			"\n",
			a(t.li, { children: "Группировка элементов внутри карточки или модального окна" }),
			"\n",
			a(t.li, { children: "Организация сложных форм в тематические области" }),
			"\n",
			a(t.li, { children: "Создание структурированных блоков контента с заголовками меньшего уровня" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <Group\n    headline=\"Заголовок группы\"\n    label=\"Метка группы\"\n    description=\"Подробное описание для содержимого группы\"\n    caption=\"Вспомогательный текст\"\n    icon=\"folder\"\n  >\n    Основной контент группы располагается здесь\n  </Group>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Group является идеальным выбором для создания семантических подструктур в вашем приложении." }),
			"\n"
		] })
	] });
}
function ss(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(os, { ...e })
	}) : os(e);
}
//#endregion
//#region src/media/mdx/Group/wikiMdxGroup.ts
var cs = {
	name: "Group",
	descriptions: { group: {
		en: as,
		ru: ss
	} }
};
//#endregion
//#region src/media/mdx/HorizontalScroll/expose.toSelected.en.mdx
function ls(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "toSelected(): void" }), " — A method for programmatically scrolling the container to the selected element."] }),
		"\n"
	] });
}
function us(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ls, { ...e })
	}) : ls(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/expose.toSelected.ru.mdx
function ds(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "toSelected(): void" }), " — Метод для программной прокрутки контейнера к выбранному элементу."] }),
		"\n"
	] });
}
function fs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ds, { ...e })
	}) : ds(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/horizontalScroll.en.mdx
function ps(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating a horizontally scrollable container with support for smooth scrolling and automatic positioning." }),
		"\n",
		a(t.p, { children: "HorizontalScroll provides a convenient way to display content that exceeds the screen width, such as image galleries, card lists, or navigation menus. The component supports automatic scrolling to the selected element upon initialization and provides methods for programmatic scroll control." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Horizontal content scrolling" }),
			"\n",
			a(t.li, { children: "Smooth scrolling" }),
			"\n",
			a(t.li, { children: "Automatic scrolling to the active element on load" }),
			"\n",
			a(t.li, { children: "Support for custom container tags" }),
			"\n",
			a(t.li, { children: "Slot with bindings (binds) for child elements" }),
			"\n",
			a(t.li, { children: "Scrollbar visibility control (flush mode)" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Image and media galleries" }),
			"\n",
			a(t.li, { children: "Horizontal product card lists" }),
			"\n",
			a(t.li, { children: "Scrollable navigation menus (tabs)" }),
			"\n",
			a(t.li, { children: "Tag or category lists" }),
			"\n",
			a(t.li, { children: "Timelines and step sequences" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst items = ref([\n  { id: 1, title: 'Item 1' },\n  { id: 2, title: 'Item 2' },\n  { id: 3, title: 'Item 3' },\n  { id: 4, title: 'Item 4' },\n  { id: 5, title: 'Item 5' }\n])\n<\/script>\n\n<template>\n  <HorizontalScroll>\n    <template #default=\"{ binds }\">\n      <div\n        v-for=\"item in items\"\n        :key=\"item.id\"\n        v-bind=\"binds\"\n        class=\"scroll-item\"\n      >\n        {{ item.title }}\n      </div>\n    </template>\n  </HorizontalScroll>\n</template>\n\n<style scoped>\n.scroll-item {\n  min-width: 150px;\n  height: 100px;\n  margin-right: 16px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>\n"
		}) })
	] });
}
function ms(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ps, { ...e })
	}) : ps(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/horizontalScroll.ru.mdx
function hs(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания горизонтально прокручиваемого контейнера с поддержкой плавного скролла и автоматического позиционирования." }),
		"\n",
		a(t.p, { children: "HorizontalScroll предоставляет удобный способ отображения контента, который не помещается по ширине экрана, например, галерей изображений, списков карточек или навигационных меню. Компонент поддерживает автоматическую прокрутку к выбранному элементу при инициализации и предоставляет методы для программного управления скроллом." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Горизонтальная прокрутка контента" }),
			"\n",
			a(t.li, { children: "Плавный скролл (smooth scrolling)" }),
			"\n",
			a(t.li, { children: "Автоматическая прокрутка к активному элементу при загрузке" }),
			"\n",
			a(t.li, { children: "Поддержка пользовательских тегов для контейнера" }),
			"\n",
			a(t.li, { children: "Слот с передачей привязок (binds) для дочерних элементов" }),
			"\n",
			a(t.li, { children: "Управление видимостью скроллбара (flush режим)" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Галереи изображений и медиа-контента" }),
			"\n",
			a(t.li, { children: "Горизонтальные списки карточек товаров" }),
			"\n",
			a(t.li, { children: "Навигационные меню с прокруткой (табы)" }),
			"\n",
			a(t.li, { children: "Списки тегов или категорий" }),
			"\n",
			a(t.li, { children: "Таймлайны и последовательности шагов" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst items = ref([\n  { id: 1, title: 'Элемент 1' },\n  { id: 2, title: 'Элемент 2' },\n  { id: 3, title: 'Элемент 3' },\n  { id: 4, title: 'Элемент 4' },\n  { id: 5, title: 'Элемент 5' }\n])\n<\/script>\n\n<template>\n  <HorizontalScroll>\n    <template #default=\"{ binds }\">\n      <div\n        v-for=\"item in items\"\n        :key=\"item.id\"\n        v-bind=\"binds\"\n        class=\"scroll-item\"\n      >\n        {{ item.title }}\n      </div>\n    </template>\n  </HorizontalScroll>\n</template>\n\n<style scoped>\n.scroll-item {\n  min-width: 150px;\n  height: 100px;\n  margin-right: 16px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>\n"
		}) })
	] });
}
function gs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(hs, { ...e })
	}) : hs(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/selected.en.mdx
function _s(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Selected Element" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "selected" }),
			" property allows you to control the visual state of the component, indicating that it is in a selected or active state."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected" }), " — a boolean value determining whether the element is selected"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"When the ",
			a(t.code, { children: "selected" }),
			" property is set to ",
			a(t.code, { children: "true" }),
			", a special class (usually ",
			a(t.code, { children: "--selected" }),
			") is added to the component, which changes its appearance (e.g., background color, border, or text) to highlight it among other elements. This is useful for implementing selection lists, active input fields, or other interactive elements where it is necessary to visually indicate the user's current choice."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isSelected = ref(true)\n<\/script>\n\n<template>\n  <!-- Selected state -->\n  <Textarea\n    v-model=\"value\"\n    :selected=\"isSelected\"\n    label=\"Active field\"\n  />\n\n  <!-- Normal state -->\n  <Textarea\n    v-model=\"value2\"\n    :selected=\"false\"\n    label=\"Normal field\"\n  />\n</template>\n"
		}) })
	] });
}
function vs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(_s, { ...e })
	}) : _s(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/selected.ru.mdx
function ys(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Выбранный элемент" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "selected" }),
			" позволяет управлять визуальным состоянием компонента, указывая, что он находится в выбранном или активном состоянии."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected" }), " — булево значение, определяющее, выбран ли элемент"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Когда свойство ",
			a(t.code, { children: "selected" }),
			" установлено в ",
			a(t.code, { children: "true" }),
			", к компоненту добавляется специальный класс (обычно ",
			a(t.code, { children: "--selected" }),
			"), который изменяет его внешний вид (например, цвет фона, границы или текста), чтобы выделить его среди других элементов. Это полезно для реализации списков выбора, активных полей ввода или других интерактивных элементов, где необходимо визуально обозначить текущий выбор пользователя."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isSelected = ref(true)\n<\/script>\n\n<template>\n  <!-- Выбранное состояние -->\n  <Textarea\n    v-model=\"value\"\n    :selected=\"isSelected\"\n    label=\"Активное поле\"\n  />\n\n  <!-- Обычное состояние -->\n  <Textarea\n    v-model=\"value2\"\n    :selected=\"false\"\n    label=\"Обычное поле\"\n  />\n</template>\n"
		}) })
	] });
}
function bs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ys, { ...e })
	}) : ys(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/wikiMdxHorizontalScroll.ts
var xs = {
	name: "HorizontalScroll",
	descriptions: {
		"expose.toSelected": {
			en: us,
			ru: fs
		},
		horizontalScroll: {
			en: ms,
			ru: gs
		},
		selected: {
			en: vs,
			ru: bs
		}
	}
};
//#endregion
//#region src/media/mdx/Icon/icon.en.mdx
function Ss(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Icon State Management" }),
		"\n",
		a(t.p, { children: "A component for displaying icons with support for active state, rotation, loading, and skeleton integration." }),
		"\n",
		a(t.p, { children: "Icon provides a unified interface for working with icons in the design system, supporting both the main icon and an alternative for the active state. The component automatically manages switching between icons, handles loading events, and integrates with the skeleton system to display loading states." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Display of main and active icons with smooth transitions" }),
			"\n",
			a(t.li, { children: "Icon rotation at a specified angle" }),
			"\n",
			a(t.li, { children: "Disabled and hide states for visibility control" }),
			"\n",
			a(t.li, { children: "Image loading events for icons" }),
			"\n",
			a(t.li, { children: "Integration with Skeleton for loading states" }),
			"\n",
			a(t.li, { children: "Support within other components (Button, Cell, Chip, Field)" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Icons in buttons and navigation elements" }),
			"\n",
			a(t.li, { children: "Interactive icons with state changes" }),
			"\n",
			a(t.li, { children: "State indicators in forms and lists" }),
			"\n",
			a(t.li, { children: "Decorative interface elements with animation" }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Properties" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: a(t.code, { children: "icon" }) }), " — The main icon displayed by default."] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "iconActive" }) }),
				" — The icon that is displayed when the component is in an active state (",
				a(t.code, { children: "active" }),
				" = ",
				a(t.code, { children: "true" }),
				")."
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: a(t.code, { children: "active" }) }), " — A boolean property that toggles the component's state between normal and active."] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Description" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"The ",
				a(t.code, { children: "icon" }),
				" property is essential for displaying the icon."
			] }),
			"\n",
			o(t.li, { children: [
				"If ",
				a(t.code, { children: "iconActive" }),
				" is not provided, there will be no visual change when the ",
				a(t.code, { children: "active" }),
				" state changes."
			] }),
			"\n",
			o(t.li, { children: [
				"When ",
				a(t.code, { children: "active" }),
				" is set to ",
				a(t.code, { children: "true" }),
				", the component will attempt to display the icon specified in ",
				a(t.code, { children: "iconActive" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				"The ",
				a(t.code, { children: "active" }),
				" property can be used to create toggles, indicators, and other interactive elements."
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Recommendations" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Use ",
				a(t.code, { children: "iconActive" }),
				" to provide visual feedback upon user interaction (e.g., on click or selection)."
			] }),
			"\n",
			o(t.li, { children: [
				"Ensure that ",
				a(t.code, { children: "icon" }),
				" and ",
				a(t.code, { children: "iconActive" }),
				" are visually distinct enough for the user to easily identify the state change."
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Usage Example" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { D1Icon } from '@dxtmisha/d1'\n\nconst isActive = ref(false)\n<\/script>\n\n<template>\n  <!-- Normal icon -->\n  <D1Icon icon=\"home\" />\n\n  <!-- Active icon -->\n  <!-- `favorite` will be displayed because active=true -->\n  <D1Icon icon=\"favorite_border\" icon-active=\"favorite\" :active=\"true\" />\n\n  <!-- Dynamic state toggle -->\n  <D1Icon\n    icon=\"visibility\"\n    icon-active=\"visibility_off\"\n    :active=\"isVisible\"\n    @click=\"isVisible = !isVisible\"\n  />\n\n  <D1Icon\n    icon=\"home\"\n    icon-active=\"favorite\"\n    :active=\"isActive\"\n    turn=\"90\"\n    @load=\"onIconLoad\"\n  />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"The Icon component can be used both standalone and as part of other UI components through the ",
				a(t.code, { children: "icon" }),
				", ",
				a(t.code, { children: "icon-trailing" }),
				", and ",
				a(t.code, { children: "icon-active" }),
				" properties."
			] }),
			"\n"
		] })
	] });
}
function Cs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ss, { ...e })
	}) : Ss(e);
}
//#endregion
//#region src/media/mdx/Icon/icon.ru.mdx
function ws(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Icon" }),
		"\n",
		a(t.p, { children: "Компонент для отображения иконок с поддержкой активного состояния, поворота, загрузки и интеграции со скелетоном." }),
		"\n",
		a(t.p, { children: "Icon предоставляет унифицированный интерфейс для работы с иконками в дизайн-системе, поддерживая как основную иконку, так и альтернативную для активного состояния. Компонент автоматически управляет переключением между иконками, обрабатывает события загрузки и интегрируется с системой скелетонов для отображения состояния загрузки." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Отображение основной и активной иконки с плавным переключением" }),
			"\n",
			a(t.li, { children: "Поворот иконки на заданный угол" }),
			"\n",
			a(t.li, { children: "Состояния disabled и hide для управления видимостью" }),
			"\n",
			a(t.li, { children: "События загрузки изображений иконок" }),
			"\n",
			a(t.li, { children: "Интеграция со Skeleton для состояний загрузки" }),
			"\n",
			a(t.li, { children: "Поддержка в составе других компонентов (Button, Cell, Chip, Field)" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Иконки в кнопках и навигационных элементах" }),
			"\n",
			a(t.li, { children: "Интерактивные иконки с изменением состояния" }),
			"\n",
			a(t.li, { children: "Индикаторы состояния в формах и списках" }),
			"\n",
			a(t.li, { children: "Декоративные элементы интерфейса с анимацией" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { D1Icon } from '@dxtmisha/d1'\n\nconst isActive = ref(false)\n<\/script>\n\n<template>\n  <D1Icon\n    icon=\"home\"\n    icon-active=\"favorite\"\n    :active=\"isActive\"\n    turn=\"90\"\n    @load=\"onIconLoad\"\n  />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Компонент Icon может использоваться как самостоятельно, так и в составе других UI-компонентов через свойства ",
				a(t.code, { children: "icon" }),
				", ",
				a(t.code, { children: "icon-trailing" }),
				" и ",
				a(t.code, { children: "icon-active" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function Ts(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ws, { ...e })
	}) : ws(e);
}
//#endregion
//#region src/media/mdx/Icon/expose.isActive.en.mdx
function Es(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "isActive: ComputedRef<boolean>" }),
			" — Computed state indicating whether the alternative representation is active (when both ",
			a(t.code, { children: "active" }),
			" and ",
			a(t.code, { children: "iconActive" }),
			" are set)."
		] }),
		"\n"
	] });
}
function Ds(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Es, { ...e })
	}) : Es(e);
}
//#endregion
//#region src/media/mdx/Icon/expose.isActive.ru.mdx
function Os(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "isActive: ComputedRef<boolean>" }),
			" — Вычисляемое состояние, указывающее активно ли альтернативное представление (когда одновременно установлены ",
			a(t.code, { children: "active" }),
			" и ",
			a(t.code, { children: "iconActive" }),
			")."
		] }),
		"\n"
	] });
}
function ks(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Os, { ...e })
	}) : Os(e);
}
//#endregion
//#region src/media/mdx/Icon/wikiMdxIcon.ts
var As = {
	name: "Icon",
	descriptions: {
		icon: {
			en: Cs,
			ru: Ts
		},
		"expose.isActive": {
			en: Ds,
			ru: ks
		}
	}
};
//#endregion
//#region src/media/mdx/Image/image.en.mdx
function js(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Universal component for displaying images, icons, flags, and PDF documents with advanced size, positioning, and adaptability controls." }),
		"\n",
		o(t.p, { children: [
			"Image provides a flexible API for working with various types of visual content. The component automatically detects the source type (image, icon, color, file), selects the optimal rendering method (",
			a(t.code, { children: "<img>" }),
			", ",
			a(t.code, { children: "background-image" }),
			", ",
			a(t.code, { children: "<picture>" }),
			", ",
			a(t.code, { children: "<object>" }),
			", or icon font), and supports advanced cropping and adaptation features."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Support for multiple source types (URL, File, PDF, Material Icons, flags, colors)" }),
			"\n",
			a(t.li, { children: "Flexible rendering with automatic choice between background and img tag" }),
			"\n",
			a(t.li, { children: "Adaptive scaling with aspect ratio preservation and srcset support" }),
			"\n",
			a(t.li, { children: "Display control via fill modes and coordinate cropping" }),
			"\n",
			a(t.li, { children: "Styling support with masks and color filling" }),
			"\n",
			a(t.li, { children: "Integration with Material Symbols and system flags" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Responsive images with picture and srcset" }),
			"\n",
			a(t.li, { children: "Interface icons (Material Design or SVG masks)" }),
			"\n",
			a(t.li, { children: "User avatars with automatic cropping" }),
			"\n",
			a(t.li, { children: "Previews of uploaded files and PDF documents" }),
			"\n",
			a(t.li, { children: "Background images with complex positioning" }),
			"\n",
			a(t.li, { children: "Displaying country flags via CSS sprites" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { Image } from '@dxtmisha/constructor'\n\nconst imageUrl = ref('https://example.com/image.jpg')\n<\/script>\n\n<template>\n  <!-- Background image with cropping -->\n  <Image\n    :value=\"imageUrl\"\n    size=\"cover\"\n    :coordinator=\"[10, 10, 10, 10]\"\n  />\n\n  <!-- SEO-friendly image -->\n  <Image\n    :value=\"imageUrl\"\n    tag-img\n    alt=\"Description\"\n  />\n\n  <!-- Material Design Icon -->\n  <Image value=\"filled-home\" />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "The component automatically manages content type and optimizes display based on the source." }),
			"\n"
		] })
	] });
}
function Ms(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(js, { ...e })
	}) : js(e);
}
//#endregion
//#region src/media/mdx/Image/image.ru.mdx
function Ns(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Универсальный компонент для отображения изображений, иконок, флагов и PDF-документов с расширенными возможностями управления размером, позиционированием и адаптивностью." }),
		"\n",
		o(t.p, { children: [
			"Image предоставляет гибкий API для работы с различными типами визуального контента. Компонент автоматически определяет тип источника (изображение, иконка, цвет, файл), выбирает оптимальный способ рендеринга (",
			a(t.code, { children: "<img>" }),
			", ",
			a(t.code, { children: "background-image" }),
			", ",
			a(t.code, { children: "<picture>" }),
			", ",
			a(t.code, { children: "<object>" }),
			" или иконочный шрифт) и поддерживает продвинутые функции кадрирования и адаптации."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Поддержка множества типов источников (URL, File, PDF, Material Icons, флаги, цвета)" }),
			"\n",
			a(t.li, { children: "Гибкий рендеринг с автоматическим выбором между фоном и тегом img" }),
			"\n",
			a(t.li, { children: "Адаптивное масштабирование с сохранением пропорций и поддержкой srcset" }),
			"\n",
			a(t.li, { children: "Управление отображением через режимы заполнения и координатное кадрирование" }),
			"\n",
			a(t.li, { children: "Стилизация с поддержкой масок и заливки цветом" }),
			"\n",
			a(t.li, { children: "Интеграция с Material Symbols и системными флагами" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Адаптивные изображения с picture и srcset" }),
			"\n",
			a(t.li, { children: "Иконки интерфейса (Material Design или SVG маски)" }),
			"\n",
			a(t.li, { children: "Аватары пользователей с автоматическим кадрированием" }),
			"\n",
			a(t.li, { children: "Превью загружаемых файлов и PDF документов" }),
			"\n",
			a(t.li, { children: "Фоновые изображения со сложным позиционированием" }),
			"\n",
			a(t.li, { children: "Отображение флагов стран через CSS спрайты" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { Image } from '@dxtmisha/constructor'\n\nconst imageUrl = ref('https://example.com/image.jpg')\n<\/script>\n\n<template>\n  <!-- Фоновое изображение с кадрированием -->\n  <Image\n    :value=\"imageUrl\"\n    size=\"cover\"\n    :coordinator=\"[10, 10, 10, 10]\"\n  />\n\n  <!-- SEO-дружественное изображение -->\n  <Image\n    :value=\"imageUrl\"\n    tag-img\n    alt=\"Описание\"\n  />\n\n  <!-- Иконка Material Design -->\n  <Image value=\"filled-home\" />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Компонент автоматически управляет типом контента и оптимизирует отображение в зависимости от источника." }),
			"\n"
		] })
	] });
}
function Ps(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ns, { ...e })
	}) : Ns(e);
}
//#endregion
//#region src/media/mdx/Image/value.en.mdx
function Fs(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Main value" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "value" }),
			" property defines the image content. This universal property supports multiple source types for maximum flexibility."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Supported types:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Icon name" }), " — built-in or custom icon from the design system"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Image URL" }), " — direct link to file (PNG, JPG, SVG, GIF, WebP, etc.)"] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "File object" }),
				" — JavaScript File object obtained from ",
				a(t.code, { children: "<input type=\"file\">" })
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "PDF document" }), " — direct link to PDF file with automatic display"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "The component automatically detects the source type and selects the optimal display method. When passing a File object, the content is read and previewed. The property is reactive and supports dynamic updates." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Icon by name -->\n<Image value=\"icon-user\" />\n\n<!-- Image by URL -->\n<Image value=\"https://example.com/image.png\" />\n\n<!-- User file -->\n<Image :value=\"fileFromInput\" />\n"
		}) })
	] });
}
function Is(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fs, { ...e })
	}) : Fs(e);
}
//#endregion
//#region src/media/mdx/Image/value.ru.mdx
function Ls(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Основное значение" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "value" }),
			" определяет контент изображения. Это универсальное свойство, поддерживающее несколько типов источников для максимальной гибкости."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Поддерживаемые типы:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Имя иконки" }), " — встроенная или пользовательская иконка из системы дизайна"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "URL изображения" }), " — прямая ссылка на файл (PNG, JPG, SVG, GIF, WebP и др.)"] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Объект File" }),
				" — JavaScript-объект File, полученный из ",
				a(t.code, { children: "<input type=\"file\">" })
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "PDF-документ" }), " — прямая ссылка на PDF-файл с автоматическим отображением"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Компонент автоматически определяет тип источника и выбирает оптимальный способ отображения. При передаче объекта File происходит чтение и предпросмотр содержимого. Свойство реактивно и поддерживает динамическое обновление." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Иконка по имени -->\n<Image value=\"icon-user\" />\n\n<!-- Изображение по URL -->\n<Image value=\"https://example.com/image.png\" />\n\n<!-- Файл от пользователя -->\n<Image :value=\"fileFromInput\" />\n"
		}) })
	] });
}
function Rs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ls, { ...e })
	}) : Ls(e);
}
//#endregion
//#region src/media/mdx/Image/size.en.mdx
function zs(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Image display control" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "size" }),
			", ",
			a(t.code, { children: "coordinator" }),
			", ",
			a(t.code, { children: "x" }),
			", and ",
			a(t.code, { children: "y" }),
			" properties allow you to precisely control image scaling, visible area, and positioning within the container."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "size" }),
				" — scaling and fill mode of the image (",
				a(t.code, { children: "auto" }),
				", ",
				a(t.code, { children: "contain" }),
				", ",
				a(t.code, { children: "cover" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "coordinator" }),
				" — array of coordinates for cropping the display area ",
				a(t.code, { children: "[left, top, right, bottom]" }),
				" in percentages"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "x" }), " — horizontal offset of the image (pixels, percentages)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "y" }), " — vertical offset of the image (pixels, percentages)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together or individually. The ",
			a(t.code, { children: "size" }),
			" value defines the scaling mode: ",
			a(t.code, { children: "auto" }),
			" uses the original size, ",
			a(t.code, { children: "contain" }),
			" fits the image completely, ",
			a(t.code, { children: "cover" }),
			" fills the container with possible cropping. The ",
			a(t.code, { children: "coordinator" }),
			" property sets the visible area by cropping the image at specified coordinates. The ",
			a(t.code, { children: "x" }),
			" and ",
			a(t.code, { children: "y" }),
			" parameters shift the image relative to the container for precise positioning."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Scaling mode -->\n<Image value=\"image.png\" size=\"contain\" />\n\n<!-- Cropping by coordinates -->\n<Image value=\"image.png\" :coordinator=\"[10, 20, 100, 80]\" />\n\n<!-- Position offset -->\n<Image value=\"image.png\" x=\"15\" y=\"-10\" />\n\n<!-- Combined parameters -->\n<Image\n  value=\"image.png\"\n  size=\"cover\"\n  :coordinator=\"[0, 0, 100, 50]\"\n  x=\"10\"\n  y=\"5\"\n/>\n"
		}) })
	] });
}
function Bs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zs, { ...e })
	}) : zs(e);
}
//#endregion
//#region src/media/mdx/Image/size.ru.mdx
function Vs(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление отображением изображения" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "size" }),
			", ",
			a(t.code, { children: "coordinator" }),
			", ",
			a(t.code, { children: "x" }),
			" и ",
			a(t.code, { children: "y" }),
			" позволяют детально управлять масштабированием, областью видимости и позиционированием изображения внутри контейнера."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "size" }),
				" — режим масштабирования и заполнения изображения (",
				a(t.code, { children: "auto" }),
				", ",
				a(t.code, { children: "contain" }),
				", ",
				a(t.code, { children: "cover" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "coordinator" }),
				" — массив координат для обрезки области отображения ",
				a(t.code, { children: "[left, top, right, bottom]" }),
				" в процентах"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "x" }), " — смещение изображения по горизонтали (пиксели, проценты)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "y" }), " — смещение изображения по вертикали (пиксели, проценты)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно или по отдельности. Значение ",
			a(t.code, { children: "size" }),
			" определяет режим масштабирования: ",
			a(t.code, { children: "auto" }),
			" использует исходный размер, ",
			a(t.code, { children: "contain" }),
			" вписывает изображение полностью, ",
			a(t.code, { children: "cover" }),
			" заполняет контейнер с возможной обрезкой. Свойство ",
			a(t.code, { children: "coordinator" }),
			" задаёт видимую область, обрезая изображение по указанным координатам. Параметры ",
			a(t.code, { children: "x" }),
			" и ",
			a(t.code, { children: "y" }),
			" смещают изображение относительно контейнера для точного позиционирования."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Режим масштабирования -->\n<Image value=\"image.png\" size=\"contain\" />\n\n<!-- Обрезка по координатам -->\n<Image value=\"image.png\" :coordinator=\"[10, 20, 100, 80]\" />\n\n<!-- Смещение позиции -->\n<Image value=\"image.png\" x=\"15\" y=\"-10\" />\n\n<!-- Комбинация параметров -->\n<Image\n  value=\"image.png\"\n  size=\"cover\"\n  :coordinator=\"[0, 0, 100, 50]\"\n  x=\"10\"\n  y=\"5\"\n/>\n"
		}) })
	] });
}
function Hs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vs, { ...e })
	}) : Vs(e);
}
//#endregion
//#region src/media/mdx/Image/adaptive.en.mdx
function Us(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Adaptive scaling" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "adaptive" }),
			", ",
			a(t.code, { children: "adaptiveGroup" }),
			", ",
			a(t.code, { children: "adaptiveAlways" }),
			", ",
			a(t.code, { children: "objectWidth" }),
			", and ",
			a(t.code, { children: "objectHeight" }),
			" properties control automatic image scaling to ensure visual consistency of physical object sizes across different images."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "adaptive" }), " — enables adaptive scaling mode"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "adaptiveGroup" }),
				" — group name for scale synchronization (default ",
				a(t.code, { children: "'basic'" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "objectWidth" }), " — physical width of the object in the image in millimeters"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "objectHeight" }), " — physical height of the object in the image in millimeters"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "adaptiveAlways" }), " — perform calculations even for invisible elements"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together to ensure proportional display of images with objects of different physical sizes. When ",
			a(t.code, { children: "adaptive" }),
			" is activated, the component starts tracking element dimensions and comparing them with other images in the same group, automatically selecting the optimal scale for each element."
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "objectWidth" }),
			" or ",
			a(t.code, { children: "objectHeight" }),
			" properties specify the real physical dimensions of the object in the image in millimeters. These values are necessary for calculating the scaling coefficient — the component uses them to determine how much to enlarge or reduce the image so that objects in different images appear the same size. It is sufficient to specify only one property — either width or height."
		] }),
		"\n",
		o(t.p, { children: [
			"The component automatically determines which axis (horizontal or vertical) to scale on, based on available dimensions and image proportions. If ",
			a(t.code, { children: "objectWidth" }),
			" is specified, scaling will occur horizontally, if ",
			a(t.code, { children: "objectHeight" }),
			" — vertically. This allows flexible work with images of different orientations."
		] }),
		"\n",
		o(t.p, { children: [
			"Elements with the same ",
			a(t.code, { children: "adaptiveGroup" }),
			" value scale synchronously, ensuring consistent visual object sizes across all images in the group. This is especially useful when displaying product galleries or comparison tables where maintaining visual size correspondence is important."
		] }),
		"\n",
		o(t.p, { children: [
			"For performance optimization, scaling calculations are performed only for visible elements within the viewport plus a small margin. If an element is outside the visible area, calculations are paused until the element appears on screen. The ",
			a(t.code, { children: "adaptiveAlways" }),
			" property disables this optimization and forces the component to constantly recalculate the scale regardless of element visibility."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst phone1 = ref('/images/phone-model-a.png')\nconst phone2 = ref('/images/phone-model-b.png')\nconst phone3 = ref('/images/phone-model-c.png')\n<\/script>\n\n<template>\n  <!-- Basic usage with object width -->\n  <Image\n    :value=\"phone1\"\n    adaptive\n    object-width=\"76.2\"\n  />\n\n  <!-- Multiple images in one group -->\n  <Image\n    :value=\"phone1\"\n    adaptive\n    adaptive-group=\"phones\"\n    object-width=\"76.2\"\n  />\n  <Image\n    :value=\"phone2\"\n    adaptive\n    adaptive-group=\"phones\"\n    object-width=\"71.9\"\n  />\n  <Image\n    :value=\"phone3\"\n    adaptive\n    adaptive-group=\"phones\"\n    object-width=\"129.9\"\n  />\n\n  <!-- With height instead of width -->\n  <Image\n    adaptive\n    object-height=\"154.8\"\n    :value=\"phone1\"\n  />\n\n  <!-- Constant scaling -->\n  <Image\n    adaptive\n    adaptive-always\n    object-width=\"76.2\"\n    :value=\"phone1\"\n  />\n</template>\n"
		}) })
	] });
}
function Ws(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Us, { ...e })
	}) : Us(e);
}
//#endregion
//#region src/media/mdx/Image/adaptive.ru.mdx
function Gs(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Адаптивное масштабирование" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "adaptive" }),
			", ",
			a(t.code, { children: "adaptiveGroup" }),
			", ",
			a(t.code, { children: "adaptiveAlways" }),
			", ",
			a(t.code, { children: "objectWidth" }),
			" и ",
			a(t.code, { children: "objectHeight" }),
			" управляют автоматическим масштабированием изображений для обеспечения визуального соответствия физических размеров объектов на разных изображениях."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "adaptive" }), " — включает режим адаптивного масштабирования"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "adaptiveGroup" }),
				" — название группы для синхронизации масштаба (по умолчанию ",
				a(t.code, { children: "'basic'" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "objectWidth" }), " — физическая ширина объекта на изображении в миллиметрах"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "objectHeight" }), " — физическая высота объекта на изображении в миллиметрах"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "adaptiveAlways" }), " — выполнять расчёты даже для невидимых элементов"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно для обеспечения пропорционального отображения изображений с объектами разных физических размеров. При активации ",
			a(t.code, { children: "adaptive" }),
			" компонент начинает отслеживать размеры элемента и сравнивать их с другими изображениями в той же группе, автоматически подбирая оптимальный масштаб для каждого элемента."
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "objectWidth" }),
			" или ",
			a(t.code, { children: "objectHeight" }),
			" задают реальные физические размеры объекта на изображении в миллиметрах. Эти значения необходимы для расчёта коэффициента масштабирования — компонент использует их для определения, во сколько раз нужно увеличить или уменьшить изображение, чтобы объекты на разных изображениях выглядели одинакового размера. Достаточно указать только одно из свойств — либо ширину, либо высоту."
		] }),
		"\n",
		o(t.p, { children: [
			"Компонент автоматически определяет, по какой оси (горизонтальной или вертикальной) производить масштабирование, основываясь на доступных размерах и пропорциях изображения. Если указан ",
			a(t.code, { children: "objectWidth" }),
			", масштабирование будет происходить по горизонтали, если ",
			a(t.code, { children: "objectHeight" }),
			" — по вертикали. Это позволяет гибко работать с изображениями разных ориентаций."
		] }),
		"\n",
		o(t.p, { children: [
			"Элементы с одинаковым значением ",
			a(t.code, { children: "adaptiveGroup" }),
			" масштабируются синхронно, обеспечивая одинаковый визуальный размер объектов на всех изображениях группы. Это особенно полезно при отображении галерей продуктов или сравнительных таблиц, где важно сохранить визуальное соответствие размеров."
		] }),
		"\n",
		o(t.p, { children: [
			"Для оптимизации производительности расчёты масштабирования выполняются только для видимых элементов в пределах области просмотра (viewport) плюс небольшой запас. Если элемент находится за пределами видимой области, расчёты приостанавливаются до момента, когда элемент появится на экране. Свойство ",
			a(t.code, { children: "adaptiveAlways" }),
			" отключает эту оптимизацию и заставляет компонент постоянно пересчитывать масштаб независимо от видимости элемента."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst phone1 = ref('/images/phone-model-a.png')\nconst phone2 = ref('/images/phone-model-b.png')\nconst phone3 = ref('/images/phone-model-c.png')\n<\/script>\n\n<template>\n  <!-- Базовое использование с шириной объекта -->\n  <Image\n    :value=\"phone1\"\n    adaptive\n    object-width=\"76.2\"\n  />\n\n  <!-- Несколько изображений в одной группе -->\n  <Image\n    :value=\"phone1\"\n    adaptive\n    adaptive-group=\"phones\"\n    object-width=\"76.2\"\n  />\n  <Image\n    :value=\"phone2\"\n    adaptive\n    adaptive-group=\"phones\"\n    object-width=\"71.9\"\n  />\n  <Image\n    :value=\"phone3\"\n    adaptive\n    adaptive-group=\"phones\"\n    object-width=\"129.9\"\n  />\n\n  <!-- С высотой вместо ширины -->\n  <Image\n    adaptive\n    object-height=\"154.8\"\n    :value=\"phone1\"\n  />\n\n  <!-- Постоянное масштабирование -->\n  <Image\n    adaptive\n    adaptive-always\n    object-width=\"76.2\"\n    :value=\"phone1\"\n  />\n</template>\n"
		}) })
	] });
}
function Ks(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gs, { ...e })
	}) : Gs(e);
}
//#endregion
//#region src/media/mdx/Image/img-tag.en.mdx
function qs(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Using the img tag" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "tagImg" }),
			", ",
			a(t.code, { children: "srcset" }),
			", ",
			a(t.code, { children: "picture" }),
			", ",
			a(t.code, { children: "alt" }),
			", ",
			a(t.code, { children: "lazy" }),
			", ",
			a(t.code, { children: "preloadOffset" }),
			" and ",
			a(t.code, { children: "fetchPriority" }),
			" properties are designed to control the image display mode using the HTML ",
			a(t.code, { children: "<img>" }),
			" tag instead of a background image."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "tagImg" }),
				" — use the ",
				a(t.code, { children: "<img>" }),
				" tag instead of a background image"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "srcset" }), " — set of image sources for different screen resolutions"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "picture" }),
				" — sources for different display conditions using the ",
				a(t.code, { children: "<picture>" }),
				" tag"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "alt" }), " — alternative text for the image"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "lazy" }), " — enables lazy loading of the image"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "preloadOffset" }),
				" — offset for image preloading (default ",
				a(t.code, { children: "1024px" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "fetchPriority" }),
				" — image loading priority (",
				a(t.code, { children: "low" }),
				", ",
				a(t.code, { children: "high" }),
				", ",
				a(t.code, { children: "auto" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"The properties work together: if ",
			a(t.code, { children: "tagImg" }),
			" is not set or equals ",
			a(t.code, { children: "false" }),
			", the image is displayed as a CSS background via ",
			a(t.code, { children: "background-image" }),
			". When ",
			a(t.code, { children: "tagImg" }),
			" is activated (value ",
			a(t.code, { children: "true" }),
			"), the component uses the semantic HTML ",
			a(t.code, { children: "<img>" }),
			" tag, providing better accessibility and SEO optimization. The ",
			a(t.code, { children: "alt" }),
			" property defines alternative text that is displayed when the image is unavailable and is used by screen readers for people with disabilities."
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "srcset" }),
			" property allows you to provide multiple versions of an image for different pixel densities and screen sizes. It accepts a string in the standard ",
			a(t.code, { children: "srcset" }),
			" attribute format or an object where keys are width descriptors (numbers or strings like ",
			a(t.code, { children: "'2x'" }),
			") and values are image URLs. When using numeric keys, the ",
			a(t.code, { children: "w" }),
			" suffix (width descriptor) is automatically added. The browser automatically selects the optimal image based on screen size and pixel density."
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "picture" }),
			" property enables the use of the HTML ",
			a(t.code, { children: "<picture>" }),
			" tag for art direction — when you need to load different images depending on screen size or other media query conditions. It accepts an object where keys are media conditions (such as screen width in pixels) and values are image URLs, or an array of objects with ",
			a(t.code, { children: "<source>" }),
			" attributes. When using an object, media queries like ",
			a(t.code, { children: "(width >= 768px)" }),
			" are automatically generated. The ",
			a(t.code, { children: "<picture>" }),
			" tag provides more flexible control over image selection compared to ",
			a(t.code, { children: "srcset" }),
			", allowing you to load images with different aspect ratios or content for various viewing conditions."
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "lazy" }),
			" property activates native browser lazy loading via the ",
			a(t.code, { children: "loading=\"lazy\"" }),
			" attribute. Images with this attribute are loaded only when approaching the visible screen area, which significantly speeds up initial page load and reduces traffic consumption. It is especially effective for pages with a large number of images or long lists."
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "preloadOffset" }),
			" property defines the pixel offset for preloading images when using lazy loading. The default value is ",
			a(t.code, { children: "1024px" }),
			", which means the image starts loading 1024 pixels before it enters the visible area. This ensures smooth image loading without delays during scrolling. You can specify either a numeric value or a string with a unit of measurement."
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "fetchPriority" }),
			" property allows you to control the browser's image loading priority. It accepts three values: ",
			a(t.code, { children: "high" }),
			" — high priority for critical images (such as hero images or main banners), ",
			a(t.code, { children: "low" }),
			" — low priority for secondary images, ",
			a(t.code, { children: "auto" }),
			" — the browser determines the priority automatically (default value). Proper use of this property helps optimize page loading by ensuring fast loading of important content."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst productImage = ref('/images/product.jpg')\n<\/script>\n\n<template>\n  <!-- Basic usage -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Product description\"\n  />\n\n  <!-- With lazy loading -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Product\"\n    lazy\n  />\n\n  <!-- With srcset object -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Responsive image\"\n    :srcset=\"{\n      '1x': '/images/product.jpg',\n      '2x': '/images/product@2x.jpg'\n    }\"\n  />\n\n  <!-- With picture for different screen sizes -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Responsive image for different devices\"\n    :picture=\"{\n      768: '/images/product-tablet.jpg',\n      1024: '/images/product-desktop.jpg'\n    }\"\n  />\n\n  <!-- With preload offset configuration -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Image with early preload\"\n    lazy\n    preload-offset=\"2048px\"\n  />\n\n  <!-- With high loading priority -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Main page image\"\n    fetch-priority=\"high\"\n  />\n\n  <!-- Complex example -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Responsive product image\"\n    lazy\n    preload-offset=\"1536px\"\n    fetch-priority=\"low\"\n    :srcset=\"{\n      '1x': '/images/product.jpg',\n      '2x': '/images/product@2x.jpg',\n      '3x': '/images/product@3x.jpg'\n    }\"\n  />\n</template>\n"
		}) })
	] });
}
function Js(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(qs, { ...e })
	}) : qs(e);
}
//#endregion
//#region src/media/mdx/Image/img-tag.ru.mdx
function Ys(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Использование тега img" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "tagImg" }),
			", ",
			a(t.code, { children: "srcset" }),
			", ",
			a(t.code, { children: "picture" }),
			", ",
			a(t.code, { children: "alt" }),
			", ",
			a(t.code, { children: "lazy" }),
			", ",
			a(t.code, { children: "preloadOffset" }),
			" и ",
			a(t.code, { children: "fetchPriority" }),
			" предназначены для управления режимом отображения изображения через HTML-тег ",
			a(t.code, { children: "<img>" }),
			" вместо фонового изображения."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "tagImg" }),
				" — использовать тег ",
				a(t.code, { children: "<img>" }),
				" вместо фонового изображения"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "srcset" }), " — набор источников изображения для разных разрешений экрана"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "picture" }),
				" — источники для разных условий отображения с использованием тега ",
				a(t.code, { children: "<picture>" })
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "alt" }), " — альтернативный текст для изображения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "lazy" }), " — включает ленивую загрузку изображения"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "preloadOffset" }),
				" — смещение для предзагрузки изображения (по умолчанию ",
				a(t.code, { children: "1024px" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "fetchPriority" }),
				" — приоритет загрузки изображения (",
				a(t.code, { children: "low" }),
				", ",
				a(t.code, { children: "high" }),
				", ",
				a(t.code, { children: "auto" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: если ",
			a(t.code, { children: "tagImg" }),
			" не задан или равен ",
			a(t.code, { children: "false" }),
			", изображение отображается как CSS-фон через ",
			a(t.code, { children: "background-image" }),
			". При активации ",
			a(t.code, { children: "tagImg" }),
			" (значение ",
			a(t.code, { children: "true" }),
			"), компонент использует семантический HTML-тег ",
			a(t.code, { children: "<img>" }),
			", обеспечивая лучшую доступность и SEO-оптимизацию. Свойство ",
			a(t.code, { children: "alt" }),
			" определяет альтернативный текст, который отображается при недоступности изображения и используется программами чтения с экрана для людей с ограниченными возможностями."
		] }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "srcset" }),
			" позволяет предоставить несколько версий изображения для разных плотностей пикселей и размеров экрана. Принимает строку в формате стандартного атрибута ",
			a(t.code, { children: "srcset" }),
			" или объект, где ключи — это дескрипторы ширины (числа или строки вроде ",
			a(t.code, { children: "'2x'" }),
			"), а значения — URL изображений. При использовании числовых ключей автоматически добавляется суффикс ",
			a(t.code, { children: "w" }),
			" (width descriptor). Браузер самостоятельно выбирает оптимальное изображение на основе размера экрана и плотности пикселей."
		] }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "picture" }),
			" позволяет использовать HTML-тег ",
			a(t.code, { children: "<picture>" }),
			" для art direction — когда требуется загружать разные изображения в зависимости от размера экрана или других условий медиа-запросов. Принимает объект, где ключи — это медиа-условия (например, ширина экрана в пикселях), а значения — URL изображений, или массив объектов с атрибутами ",
			a(t.code, { children: "<source>" }),
			". При использовании объекта автоматически генерируются медиа-запросы вида ",
			a(t.code, { children: "(width >= 768px)" }),
			". Тег ",
			a(t.code, { children: "<picture>" }),
			" обеспечивает более гибкий контроль над выбором изображения по сравнению с ",
			a(t.code, { children: "srcset" }),
			", позволяя загружать изображения разных пропорций или содержания для различных условий просмотра."
		] }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "lazy" }),
			" активирует нативную ленивую загрузку браузера через атрибут ",
			a(t.code, { children: "loading=\"lazy\"" }),
			". Изображения с этим атрибутом загружаются только при приближении к видимой области экрана, что значительно ускоряет начальную загрузку страницы и снижает потребление трафика. Особенно эффективно для страниц с большим количеством изображений или длинных списков."
		] }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "preloadOffset" }),
			" определяет смещение в пикселях для предварительной загрузки изображений при использовании ленивой загрузки. По умолчанию установлено значение ",
			a(t.code, { children: "1024px" }),
			", что означает начало загрузки изображения за 1024 пикселя до того, как оно попадет в видимую область. Это обеспечивает плавную загрузку изображений без задержек при прокрутке. Можно указать как числовое значение, так и строку с единицей измерения."
		] }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "fetchPriority" }),
			" позволяет управлять приоритетом загрузки изображения браузером. Принимает три значения: ",
			a(t.code, { children: "high" }),
			" — высокий приоритет для критически важных изображений (например, главный баннер или hero-изображение), ",
			a(t.code, { children: "low" }),
			" — низкий приоритет для второстепенных изображений, ",
			a(t.code, { children: "auto" }),
			" — браузер самостоятельно определяет приоритет (значение по умолчанию). Правильное использование этого свойства помогает оптимизировать загрузку страницы, обеспечивая быструю загрузку важного контента."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst productImage = ref('/images/product.jpg')\n<\/script>\n\n<template>\n  <!-- Базовое использование -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Описание продукта\"\n  />\n\n  <!-- С ленивой загрузкой -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Товар\"\n    lazy\n  />\n\n  <!-- С srcset объектом -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Адаптивное изображение\"\n    :srcset=\"{\n      '1x': '/images/product.jpg',\n      '2x': '/images/product@2x.jpg'\n    }\"\n  />\n\n  <!-- С picture для разных размеров экрана -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Адаптивное изображение для разных устройств\"\n    :picture=\"{\n      768: '/images/product-tablet.jpg',\n      1024: '/images/product-desktop.jpg'\n    }\"\n  />\n\n  <!-- С настройкой предзагрузки -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Изображение с ранней предзагрузкой\"\n    lazy\n    preload-offset=\"2048px\"\n  />\n\n  <!-- С высоким приоритетом загрузки -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Главное изображение страницы\"\n    fetch-priority=\"high\"\n  />\n\n  <!-- Комплексный пример -->\n  <Image\n    :value=\"productImage\"\n    tag-img\n    alt=\"Адаптивное изображение товара\"\n    lazy\n    preload-offset=\"1536px\"\n    fetch-priority=\"low\"\n    :srcset=\"{\n      '1x': '/images/product.jpg',\n      '2x': '/images/product@2x.jpg',\n      '3x': '/images/product@3x.jpg'\n    }\"\n  />\n</template>\n"
		}) })
	] });
}
function Xs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ys, { ...e })
	}) : Ys(e);
}
//#endregion
//#region src/media/mdx/Image/flag.en.mdx
function Zs(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Flags" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "Image" }),
			" component supports displaying country flags. A special format for the ",
			a(t.code, { children: "value" }),
			" property is used for this purpose."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Formats:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "flag-xx" }),
				" — standard flag (where ",
				a(t.code, { children: "xx" }),
				" is the ISO 3166-1 alpha-2 country code)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "f-xx" }),
				" — compressed flag (where ",
				a(t.code, { children: "xx" }),
				" is the ISO 3166-1 alpha-2 country code)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic flag type detection by prefix" }),
			"\n",
			a(t.li, { children: "Support for all countries according to ISO 3166-1 alpha-2 standard" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Standard US flag -->\n  <Image value=\"flag-us\" />\n\n  <!-- Compressed Germany flag -->\n  <Image value=\"f-de\" />\n</template>\n"
		}) })
	] });
}
function Qs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Zs, { ...e })
	}) : Zs(e);
}
//#endregion
//#region src/media/mdx/Image/flag.ru.mdx
function $s(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Флаги" }),
		"\n",
		o(t.p, { children: [
			"Компонент ",
			a(t.code, { children: "Image" }),
			" поддерживает отображение флагов стран. Для этого используется специальный формат значения свойства ",
			a(t.code, { children: "value" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Форматы:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "flag-xx" }),
				" — стандартный флаг (где ",
				a(t.code, { children: "xx" }),
				" — код страны ISO 3166-1 alpha-2)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "f-xx" }),
				" — сжатый флаг (где ",
				a(t.code, { children: "xx" }),
				" — код страны ISO 3166-1 alpha-2)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическое определение типа флага по префиксу" }),
			"\n",
			a(t.li, { children: "Поддержка всех стран по стандарту ISO 3166-1 alpha-2" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Стандартный флаг США -->\n  <Image value=\"flag-us\" />\n\n  <!-- Сжатый флаг Германии -->\n  <Image value=\"f-de\" />\n</template>\n"
		}) })
	] });
}
function ec(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($s, { ...e })
	}) : $s(e);
}
//#endregion
//#region src/media/mdx/Image/event.load.en.mdx
function tc(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "load" }) }),
		"\n",
		a(t.p, { children: "Event fires after the image is loaded." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "image: ImageEventData" }), " — object with image data"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "ImageEventData structure:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type: ImageTypeItem" }),
				" — image type (",
				a(t.code, { children: "'image'" }),
				", ",
				a(t.code, { children: "'icon'" }),
				", ",
				a(t.code, { children: "'pdf'" }),
				", ",
				a(t.code, { children: "'file'" }),
				", ",
				a(t.code, { children: "'flag'" }),
				", ",
				a(t.code, { children: "'color'" }),
				", etc.)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "image: ImageEventItem" }),
				" — image data (",
				a(t.code, { children: "ImageItem" }),
				" object, URL string, or ",
				a(t.code, { children: "undefined" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "ImageItem structure (when image is an object):" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "width: number" }), " — image width"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "height: number" }), " — image height"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "image: HTMLImageElement" }), " — image DOM element"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "src: string" }), " — image source (URL)"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleLoad = (data) => {\n  console.log('Image type:', data.type)\n\n  if (typeof data.image === 'object' && data.image) {\n    console.log('Width:', data.image.width)\n    console.log('Height:', data.image.height)\n    console.log('URL:', data.image.src)\n  } else {\n    console.log('Image URL:', data.image)\n  }\n}\n<\/script>\n\n<template>\n  <Image\n    src=\"/path/to/image.jpg\"\n    @load=\"handleLoad\"\n  />\n</template>\n"
		}) })
	] });
}
function nc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(tc, { ...e })
	}) : tc(e);
}
//#endregion
//#region src/media/mdx/Image/event.load.ru.mdx
function rc(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "load" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает после загрузки изображения." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "image: ImageEventData" }), " — объект с данными изображения"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура ImageEventData:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type: ImageTypeItem" }),
				" — тип изображения (",
				a(t.code, { children: "'image'" }),
				", ",
				a(t.code, { children: "'icon'" }),
				", ",
				a(t.code, { children: "'pdf'" }),
				", ",
				a(t.code, { children: "'file'" }),
				", ",
				a(t.code, { children: "'flag'" }),
				", ",
				a(t.code, { children: "'color'" }),
				" и др.)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "image: ImageEventItem" }),
				" — данные изображения (объект ",
				a(t.code, { children: "ImageItem" }),
				", строка URL или ",
				a(t.code, { children: "undefined" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура ImageItem (если image - объект):" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "width: number" }), " — ширина изображения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "height: number" }), " — высота изображения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "image: HTMLImageElement" }), " — DOM элемент изображения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "src: string" }), " — источник изображения (URL)"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleLoad = (data) => {\n  console.log('Тип изображения:', data.type)\n\n  if (typeof data.image === 'object' && data.image) {\n    console.log('Ширина:', data.image.width)\n    console.log('Высота:', data.image.height)\n    console.log('URL:', data.image.src)\n  } else {\n    console.log('URL изображения:', data.image)\n  }\n}\n<\/script>\n\n<template>\n  <Image\n    src=\"/path/to/image.jpg\"\n    @load=\"handleLoad\"\n  />\n</template>\n"
		}) })
	] });
}
function ic(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(rc, { ...e })
	}) : rc(e);
}
//#endregion
//#region src/media/mdx/Image/expose.en.mdx
function ac(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "type: ComputedRef<ImageTypeItem>" }), " — Type of the loaded image."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				a(t.strong, { children: "ImageTypeItem values:" }),
				"\n",
				a(t.code, { children: "pdf" }),
				", ",
				a(t.code, { children: "file" }),
				", ",
				a(t.code, { children: "array" }),
				", ",
				a(t.code, { children: "image" }),
				", ",
				a(t.code, { children: "flag" }),
				", ",
				a(t.code, { children: "flag-compressed" }),
				", ",
				a(t.code, { children: "color" }),
				", ",
				a(t.code, { children: "public" }),
				", ",
				a(t.code, { children: "filled" }),
				", ",
				a(t.code, { children: "outlined" }),
				", ",
				a(t.code, { children: "round" }),
				", ",
				a(t.code, { children: "sharp" }),
				", ",
				a(t.code, { children: "two-tone" }),
				", ",
				a(t.code, { children: "material" }),
				", ",
				a(t.code, { children: "icon" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "data: Ref<ImageEventItem>" }), " — Information about the loaded image, including its source and metadata."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "ImageEventItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "src: string" }), " — source URL."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "width: number" }), " — image width."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "height: number" }), " — image height."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "image: HTMLImageElement" }), " — DOM element of the image."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function oc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ac, { ...e })
	}) : ac(e);
}
//#endregion
//#region src/media/mdx/Image/expose.ru.mdx
function sc(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "type: ComputedRef<ImageTypeItem>" }), " — Тип загруженного изображения."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				a(t.strong, { children: "Значения ImageTypeItem:" }),
				"\n",
				a(t.code, { children: "pdf" }),
				", ",
				a(t.code, { children: "file" }),
				", ",
				a(t.code, { children: "array" }),
				", ",
				a(t.code, { children: "image" }),
				", ",
				a(t.code, { children: "flag" }),
				", ",
				a(t.code, { children: "flag-compressed" }),
				", ",
				a(t.code, { children: "color" }),
				", ",
				a(t.code, { children: "public" }),
				", ",
				a(t.code, { children: "filled" }),
				", ",
				a(t.code, { children: "outlined" }),
				", ",
				a(t.code, { children: "round" }),
				", ",
				a(t.code, { children: "sharp" }),
				", ",
				a(t.code, { children: "two-tone" }),
				", ",
				a(t.code, { children: "material" }),
				", ",
				a(t.code, { children: "icon" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "data: Ref<ImageEventItem>" }), " — Информация о загруженном изображении, включая его источник и метаданные."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "ImageEventItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "src: string" }), " — URL-источник."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "width: number" }), " — ширина изображения."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "height: number" }), " — высота изображения."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "image: HTMLImageElement" }), " — DOM-элемент изображения."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function cc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(sc, { ...e })
	}) : sc(e);
}
//#endregion
//#region src/media/mdx/Image/wikiMdxImage.ts
var lc = {
	name: "Image",
	descriptions: {
		image: {
			en: Ms,
			ru: Ps
		},
		value: {
			en: Is,
			ru: Rs
		},
		size: {
			en: Bs,
			ru: Hs
		},
		adaptive: {
			en: Ws,
			ru: Ks
		},
		"img-tag": {
			en: Js,
			ru: Xs
		},
		flag: {
			en: Qs,
			ru: ec
		},
		"event.load": {
			en: nc,
			ru: ic
		},
		expose: {
			en: oc,
			ru: cc
		}
	}
};
//#endregion
//#region src/media/mdx/Input/currency.en.mdx
function uc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Currency Formatting" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "type" }),
			", ",
			a(t.code, { children: "currency" }),
			", ",
			a(t.code, { children: "currencyHide" }),
			", ",
			a(t.code, { children: "language" }),
			", and ",
			a(t.code, { children: "fraction" }),
			" are designed to manage currency value formatting with automatic currency symbol insertion and localization."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type" }),
				" — input type (set to ",
				a(t.code, { children: "currency" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "currency" }),
				" — currency code (e.g., ",
				a(t.code, { children: "USD" }),
				", ",
				a(t.code, { children: "EUR" }),
				", ",
				a(t.code, { children: "RUB" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "currencyHide" }), " — hides currency symbol in the input field"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "language" }),
				" — locale code for formatting (e.g., ",
				a(t.code, { children: "ru-RU" }),
				", ",
				a(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "fraction" }),
				" — number of decimal places (default ",
				a(t.code, { children: "2" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: ",
			a(t.code, { children: "type=\"currency\"" }),
			" automatically activates currency formatting mode with two decimal places. ",
			a(t.code, { children: "currency" }),
			" defines the symbol appended to the formatted number (",
			a(t.code, { children: "$" }),
			", ",
			a(t.code, { children: "€" }),
			", ",
			a(t.code, { children: "₽" }),
			"). When ",
			a(t.code, { children: "currencyHide" }),
			" is set, currency symbol is not displayed, but number formatting is preserved. Property ",
			a(t.code, { children: "language" }),
			" affects thousand separators, decimal separator, and currency symbol position. Number of decimal places can be changed via ",
			a(t.code, { children: "fraction" }),
			", overriding the default value."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nconst value = ref('1234.56')\n<\/script>\n\n<template>\n  <!-- Standard currency input -->\n  <Input v-model=\"value\" type=\"currency\" currency=\"USD\" language=\"en-US\" label=\"Price\" />\n\n  <!-- Currency with Russian locale -->\n  <Input v-model=\"value\" type=\"currency\" currency=\"RUB\" language=\"ru-RU\" label=\"Salary\" />\n\n  <!-- Currency without symbol -->\n  <Input v-model=\"value\" type=\"currency\" currency=\"EUR\" currency-hide language=\"de-DE\" label=\"Amount\" />\n\n  <!-- Currency with three decimals -->\n  <Input v-model=\"value\" type=\"currency\" currency=\"USD\" language=\"en-US\" :fraction=\"3\" label=\"Precise Amount\" />\n\n  <!-- Number formatting only -->\n  <Input v-model=\"value\" type=\"number-format\" language=\"ru-RU\" label=\"Number\" />\n</template>\n"
		}) })
	] });
}
function dc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(uc, { ...e })
	}) : uc(e);
}
//#endregion
//#region src/media/mdx/Input/currency.ru.mdx
function fc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Работа с валютой" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "type" }),
			", ",
			a(t.code, { children: "currency" }),
			", ",
			a(t.code, { children: "currencyHide" }),
			", ",
			a(t.code, { children: "language" }),
			" и ",
			a(t.code, { children: "fraction" }),
			" предназначены для управления форматированием денежных значений с автоматической подстановкой символа валюты и локализацией."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type" }),
				" — тип инпута (устанавливается значение ",
				a(t.code, { children: "currency" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "currency" }),
				" — код валюты (например, ",
				a(t.code, { children: "USD" }),
				", ",
				a(t.code, { children: "EUR" }),
				", ",
				a(t.code, { children: "RUB" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "currencyHide" }), " — скрывает символ валюты в поле ввода"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "language" }),
				" — код локали для форматирования (например, ",
				a(t.code, { children: "ru-RU" }),
				", ",
				a(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "fraction" }),
				" — количество знаков после запятой (по умолчанию ",
				a(t.code, { children: "2" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: ",
			a(t.code, { children: "type=\"currency\"" }),
			" автоматически активирует режим валютного форматирования с двумя знаками после запятой. ",
			a(t.code, { children: "currency" }),
			" определяет символ, который добавляется к отформатированному числу (",
			a(t.code, { children: "$" }),
			", ",
			a(t.code, { children: "€" }),
			", ",
			a(t.code, { children: "₽" }),
			"). При установке ",
			a(t.code, { children: "currencyHide" }),
			" символ валюты не отображается, но форматирование числа сохраняется. Свойство ",
			a(t.code, { children: "language" }),
			" влияет на разделители тысяч, десятичный разделитель и позицию символа валюты. Количество десятичных знаков можно изменить через ",
			a(t.code, { children: "fraction" }),
			", перезаписав значение по умолчанию."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nconst value = ref('1234.56')\n<\/script>\n\n<template>\n  <!-- Стандартный валютный инпут -->\n  <Input v-model=\"value\" type=\"currency\" currency=\"USD\" language=\"en-US\" label=\"Цена\" />\n\n  <!-- Валюта с русской локалью -->\n  <Input v-model=\"value\" type=\"currency\" currency=\"RUB\" language=\"ru-RU\" label=\"Зарплата\" />\n\n  <!-- Валюта без символа -->\n  <Input v-model=\"value\" type=\"currency\" currency=\"EUR\" currency-hide language=\"de-DE\" label=\"Сумма\" />\n\n  <!-- Валюта с тремя знаками -->\n  <Input v-model=\"value\" type=\"currency\" currency=\"USD\" language=\"en-US\" :fraction=\"3\" label=\"Точная сумма\" />\n\n  <!-- Только числовое форматирование -->\n  <Input v-model=\"value\" type=\"number-format\" language=\"ru-RU\" label=\"Число\" />\n</template>\n"
		}) })
	] });
}
function pc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(fc, { ...e })
	}) : fc(e);
}
//#endregion
//#region src/media/mdx/Input/date.en.mdx
function mc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Date and Time Formatting" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "type" }),
			", ",
			a(t.code, { children: "language" }),
			", and ",
			a(t.code, { children: "mask" }),
			" are designed to manage date and time input and formatting with automatic localization and masking."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type" }),
				" — input type (set to one of: ",
				a(t.code, { children: "date" }),
				", ",
				a(t.code, { children: "datetime" }),
				", ",
				a(t.code, { children: "year-month" }),
				", ",
				a(t.code, { children: "time" }),
				", ",
				a(t.code, { children: "hour-minute" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "language" }),
				" — locale code for formatting (e.g., ",
				a(t.code, { children: "ru-RU" }),
				", ",
				a(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "mask" }), " — custom input mask (optional)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "min" }), " — minimum allowed date/time value"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "max" }), " — maximum allowed date/time value"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: ",
			a(t.code, { children: "type=\"date\"" }),
			" automatically activates date input mode with localized formatting. ",
			a(t.code, { children: "language" }),
			" determines the order of date components (day/month/year or month/day/year) and separators. ",
			a(t.code, { children: "type=\"datetime\"" }),
			" adds time input to the date. Types ",
			a(t.code, { children: "year-month" }),
			", ",
			a(t.code, { children: "time" }),
			", and ",
			a(t.code, { children: "hour-minute" }),
			" allow input of specific components only. Properties ",
			a(t.code, { children: "min" }),
			" and ",
			a(t.code, { children: "max" }),
			" restrict the range of allowed values. You can override the automatic mask via the ",
			a(t.code, { children: "mask" }),
			" property for custom formatting."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nconst dateValue = ref('2024-03-15')\nconst datetimeValue = ref('2024-03-15T14:30:00')\nconst timeValue = ref('14:30')\nconst yearMonthValue = ref('2024-03')\n<\/script>\n\n<template>\n  <!-- Standard date input -->\n  <Input v-model=\"dateValue\" type=\"date\" language=\"en-US\" label=\"Date\" />\n\n  <!-- Date with Russian locale -->\n  <Input v-model=\"dateValue\" type=\"date\" language=\"ru-RU\" label=\"Дата\" />\n\n  <!-- Date and time -->\n  <Input v-model=\"datetimeValue\" type=\"datetime\" language=\"en-US\" label=\"Date and Time\" />\n\n  <!-- Time only -->\n  <Input v-model=\"timeValue\" type=\"time\" language=\"en-US\" label=\"Time\" />\n\n  <!-- Hours and minutes -->\n  <Input v-model=\"timeValue\" type=\"hour-minute\" language=\"en-US\" label=\"Hours:Minutes\" />\n\n  <!-- Year and month -->\n  <Input v-model=\"yearMonthValue\" type=\"year-month\" language=\"en-US\" label=\"Period\" />\n\n  <!-- Date with constraints -->\n  <Input\n    v-model=\"dateValue\"\n    type=\"date\"\n    language=\"en-US\"\n    min=\"2024-01-01\"\n    max=\"2024-12-31\"\n    label=\"Date in 2024\"\n  />\n</template>\n"
		}) })
	] });
}
function hc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(mc, { ...e })
	}) : mc(e);
}
//#endregion
//#region src/media/mdx/Input/date.ru.mdx
function gc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Работа с датой и временем" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "type" }),
			", ",
			a(t.code, { children: "language" }),
			" и ",
			a(t.code, { children: "mask" }),
			" предназначены для управления вводом и форматированием значений даты и времени с автоматической локализацией и маскированием."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type" }),
				" — тип инпута (устанавливается одно из значений: ",
				a(t.code, { children: "date" }),
				", ",
				a(t.code, { children: "datetime" }),
				", ",
				a(t.code, { children: "year-month" }),
				", ",
				a(t.code, { children: "time" }),
				", ",
				a(t.code, { children: "hour-minute" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "language" }),
				" — код локали для форматирования (например, ",
				a(t.code, { children: "ru-RU" }),
				", ",
				a(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "mask" }), " — пользовательская маска для ввода (опционально)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "min" }), " — минимальное допустимое значение даты/времени"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "max" }), " — максимальное допустимое значение даты/времени"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: ",
			a(t.code, { children: "type=\"date\"" }),
			" автоматически активирует режим ввода даты с локализованным форматированием. ",
			a(t.code, { children: "language" }),
			" определяет порядок компонентов даты (день/месяц/год или месяц/день/год) и разделители. ",
			a(t.code, { children: "type=\"datetime\"" }),
			" добавляет к дате ввод времени. Типы ",
			a(t.code, { children: "year-month" }),
			", ",
			a(t.code, { children: "time" }),
			" и ",
			a(t.code, { children: "hour-minute" }),
			" позволяют вводить только определённые компоненты. Свойства ",
			a(t.code, { children: "min" }),
			" и ",
			a(t.code, { children: "max" }),
			" ограничивают диапазон допустимых значений. Можно переопределить автоматическую маску через свойство ",
			a(t.code, { children: "mask" }),
			" для кастомного форматирования."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nconst dateValue = ref('2024-03-15')\nconst datetimeValue = ref('2024-03-15T14:30:00')\nconst timeValue = ref('14:30')\nconst yearMonthValue = ref('2024-03')\n<\/script>\n\n<template>\n  <!-- Стандартный ввод даты -->\n  <Input v-model=\"dateValue\" type=\"date\" language=\"ru-RU\" label=\"Дата\" />\n\n  <!-- Дата с английской локалью -->\n  <Input v-model=\"dateValue\" type=\"date\" language=\"en-US\" label=\"Date\" />\n\n  <!-- Дата и время -->\n  <Input v-model=\"datetimeValue\" type=\"datetime\" language=\"ru-RU\" label=\"Дата и время\" />\n\n  <!-- Только время -->\n  <Input v-model=\"timeValue\" type=\"time\" language=\"ru-RU\" label=\"Время\" />\n\n  <!-- Часы и минуты -->\n  <Input v-model=\"timeValue\" type=\"hour-minute\" language=\"ru-RU\" label=\"Часы:Минуты\" />\n\n  <!-- Год и месяц -->\n  <Input v-model=\"yearMonthValue\" type=\"year-month\" language=\"ru-RU\" label=\"Период\" />\n\n  <!-- Дата с ограничениями -->\n  <Input\n    v-model=\"dateValue\"\n    type=\"date\"\n    language=\"ru-RU\"\n    min=\"2024-01-01\"\n    max=\"2024-12-31\"\n    label=\"Дата в 2024 году\"\n  />\n</template>\n"
		}) })
	] });
}
function _c(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(gc, { ...e })
	}) : gc(e);
}
//#endregion
//#region src/media/mdx/Input/input.en.mdx
function vc(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Text input field component with validation, masking and formatting support." }),
		"\n",
		a(t.p, { children: "Input provides a flexible interface for entering various types of data: text, numbers, email, passwords, phones, URLs, dates and time. The component automatically applies appropriate validation, formatting and keyboard based on the specified type. Supports masking for structured input (phones, dates, custom patterns), currency and number formatting, password visibility control and integration with the Field component for consistent styling." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Multiple input types (text, number, email, password, tel, url, date, time and more)" }),
			"\n",
			a(t.li, { children: "Built-in validation with custom messages" }),
			"\n",
			a(t.li, { children: "Masking for formatted input" }),
			"\n",
			a(t.li, { children: "Currency and number formatting with localization" }),
			"\n",
			a(t.li, { children: "Password visibility toggle" }),
			"\n",
			a(t.li, { children: "Prefix and suffix for additional context" }),
			"\n",
			a(t.li, { children: "Character counter for length limits" }),
			"\n",
			a(t.li, { children: "Navigation arrows for numeric values" }),
			"\n",
			a(t.li, { children: "Autocomplete and spellcheck support" }),
			"\n",
			a(t.li, { children: "Clear button for value reset" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Registration and login forms" }),
			"\n",
			a(t.li, { children: "Contact information fields (email, phone)" }),
			"\n",
			a(t.li, { children: "Numeric fields (quantity, price, age)" }),
			"\n",
			a(t.li, { children: "Password fields with visibility toggle" }),
			"\n",
			a(t.li, { children: "Search fields with quick clear" }),
			"\n",
			a(t.li, { children: "Formatted input (phones, dates, cards)" }),
			"\n",
			a(t.li, { children: "Currency fields with automatic formatting" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst email = ref('')\nconst password = ref('')\n\nconst handleInput = (event, validation) => {\n  console.log('Input value:', validation.value)\n  console.log('Valid:', validation.status)\n}\n<\/script>\n\n<template>\n  <div class=\"form\">\n    <Input\n      v-model=\"email\"\n      type=\"email\"\n      label=\"Email\"\n      placeholder=\"example@mail.com\"\n      required\n      @input=\"handleInput\"\n    />\n\n    <Input\n      v-model=\"password\"\n      type=\"password\"\n      label=\"Password\"\n      placeholder=\"Enter password\"\n      minlength=\"8\"\n      required\n      iconVisibility=\"visibility\"\n      iconVisibilityOff=\"visibility_off\"\n    />\n\n    <Input\n      type=\"currency\"\n      label=\"Price\"\n      currency=\"USD\"\n      language=\"en-US\"\n    />\n  </div>\n</template>\n"
		}) }),
		"\n",
		a(t.p, { children: "Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования." }),
		"\n",
		a(t.p, { children: "Input предоставляет гибкий интерфейс для ввода данных различных типов: текст, числа, email, пароли, телефоны, URL, даты и время. Компонент автоматически применяет соответствующую валидацию, форматирование и клавиатуру в зависимости от указанного типа. Поддерживает маскирование для структурированного ввода (телефоны, даты, кастомные паттерны), форматирование валют и чисел, управление видимостью пароля и интеграцию с компонентом Field для единообразной стилизации." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Множественные типы ввода (text, number, email, password, tel, url, date, time и другие)" }),
			"\n",
			a(t.li, { children: "Встроенная валидация с пользовательскими сообщениями" }),
			"\n",
			a(t.li, { children: "Маскирование для форматированного ввода" }),
			"\n",
			a(t.li, { children: "Форматирование валюты и чисел с локализацией" }),
			"\n",
			a(t.li, { children: "Переключатель видимости пароля" }),
			"\n",
			a(t.li, { children: "Префикс и суффикс для дополнительного контекста" }),
			"\n",
			a(t.li, { children: "Счётчик символов для ограничения длины" }),
			"\n",
			a(t.li, { children: "Стрелки навигации для числовых значений" }),
			"\n",
			a(t.li, { children: "Поддержка автозаполнения и проверки орфографии" }),
			"\n",
			a(t.li, { children: "Кнопка очистки значения" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Формы регистрации и авторизации" }),
			"\n",
			a(t.li, { children: "Поля ввода контактных данных (email, телефон)" }),
			"\n",
			a(t.li, { children: "Числовые поля (количество, цена, возраст)" }),
			"\n",
			a(t.li, { children: "Поля для ввода паролей с переключением видимости" }),
			"\n",
			a(t.li, { children: "Поля поиска с быстрой очисткой" }),
			"\n",
			a(t.li, { children: "Форматированный ввод (телефоны, даты, карты)" }),
			"\n",
			a(t.li, { children: "Валютные поля с автоматическим форматированием" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst email = ref('')\nconst password = ref('')\n\nconst handleInput = (event, validation) => {\n  console.log('Введённое значение:', validation.value)\n  console.log('Валидно:', validation.status)\n}\n<\/script>\n\n<template>\n  <div class=\"form\">\n    <Input\n      v-model=\"email\"\n      type=\"email\"\n      label=\"Email\"\n      placeholder=\"example@mail.com\"\n      required\n      @input=\"handleInput\"\n    />\n\n    <Input\n      v-model=\"password\"\n      type=\"password\"\n      label=\"Пароль\"\n      placeholder=\"Введите пароль\"\n      minlength=\"8\"\n      required\n      iconVisibility=\"visibility\"\n      iconVisibilityOff=\"visibility_off\"\n    />\n\n    <Input\n      type=\"currency\"\n      label=\"Цена\"\n      currency=\"RUB\"\n      language=\"ru-RU\"\n    />\n  </div>\n</template>\n"
		}) })
	] });
}
function yc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vc, { ...e })
	}) : vc(e);
}
//#endregion
//#region src/media/mdx/Input/input.ru.mdx
function bc(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования." }),
		"\n",
		a(t.p, { children: "Input предоставляет гибкий интерфейс для ввода данных различных типов: текст, числа, email, пароли, телефоны, URL, даты и время. Компонент автоматически применяет соответствующую валидацию, форматирование и клавиатуру в зависимости от указанного типа. Поддерживает маскирование для структурированного ввода (телефоны, даты, кастомные паттерны), форматирование валют и чисел, управление видимостью пароля и интеграцию с компонентом Field для единообразной стилизации." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Множественные типы ввода (text, number, email, password, tel, url, date, time и другие)" }),
			"\n",
			a(t.li, { children: "Встроенная валидация с пользовательскими сообщениями" }),
			"\n",
			a(t.li, { children: "Маскирование для форматированного ввода" }),
			"\n",
			a(t.li, { children: "Форматирование валюты и чисел с локализацией" }),
			"\n",
			a(t.li, { children: "Переключатель видимости пароля" }),
			"\n",
			a(t.li, { children: "Префикс и суффикс для дополнительного контекста" }),
			"\n",
			a(t.li, { children: "Счётчик символов для ограничения длины" }),
			"\n",
			a(t.li, { children: "Стрелки навигации для числовых значений" }),
			"\n",
			a(t.li, { children: "Поддержка автозаполнения и проверки орфографии" }),
			"\n",
			a(t.li, { children: "Кнопка очистки значения" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Формы регистрации и авторизации" }),
			"\n",
			a(t.li, { children: "Поля ввода контактных данных (email, телефон)" }),
			"\n",
			a(t.li, { children: "Числовые поля (количество, цена, возраст)" }),
			"\n",
			a(t.li, { children: "Поля для ввода паролей с переключением видимости" }),
			"\n",
			a(t.li, { children: "Поля поиска с быстрой очисткой" }),
			"\n",
			a(t.li, { children: "Форматированный ввод (телефоны, даты, карты)" }),
			"\n",
			a(t.li, { children: "Валютные поля с автоматическим форматированием" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst email = ref('')\nconst password = ref('')\n\nconst handleInput = (event, validation) => {\n  console.log('Введённое значение:', validation.value)\n  console.log('Валидно:', validation.status)\n}\n<\/script>\n\n<template>\n  <div class=\"form\">\n    <Input\n      v-model=\"email\"\n      type=\"email\"\n      label=\"Email\"\n      placeholder=\"example@mail.com\"\n      required\n      @input=\"handleInput\"\n    />\n\n    <Input\n      v-model=\"password\"\n      type=\"password\"\n      label=\"Пароль\"\n      placeholder=\"Введите пароль\"\n      minlength=\"8\"\n      required\n      iconVisibility=\"visibility\"\n      iconVisibilityOff=\"visibility_off\"\n    />\n\n    <Input\n      type=\"currency\"\n      label=\"Цена\"\n      currency=\"RUB\"\n      language=\"ru-RU\"\n    />\n  </div>\n</template>\n"
		}) })
	] });
}
function xc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bc, { ...e })
	}) : bc(e);
}
//#endregion
//#region src/media/mdx/Input/mask.en.mdx
function Sc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Input Masking" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "mask" }),
			", ",
			a(t.code, { children: "maskVisible" }),
			", ",
			a(t.code, { children: "maskNone" }),
			", and ",
			a(t.code, { children: "maskAttrs" }),
			" are designed to manage formatted input with automatic separator insertion and character control at specified positions."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "mask" }),
				" — mask template as a string (e.g., ",
				a(t.code, { children: "+1 (***) ***-****" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "maskVisible" }),
				" — controls placeholder characters display (default ",
				a(t.code, { children: "true" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "maskNone" }), " — completely disables the mask"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "maskAttrs" }), " — object with extended mask settings"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: ",
			a(t.code, { children: "mask" }),
			" defines the formatting structure, where special character (default ",
			a(t.code, { children: "*" }),
			") defines positions for digit input, and other characters (spaces, brackets, hyphens) are automatically inserted as fixed separators. ",
			a(t.code, { children: "maskVisible" }),
			" controls the display of unfilled positions, where when set to ",
			a(t.code, { children: "true" }),
			" they are displayed with placeholder characters ",
			a(t.code, { children: "_" }),
			", and when ",
			a(t.code, { children: "false" }),
			" only entered characters with separators are shown. ",
			a(t.code, { children: "maskNone" }),
			" allows completely disabling masking logic, converting the field to a regular text input. ",
			a(t.code, { children: "maskAttrs" }),
			" provides access to extended settings, allowing configuration of special characters (",
			a(t.code, { children: "special" }),
			"), regular expressions for validation (",
			a(t.code, { children: "match" }),
			"), custom placeholder characters (",
			a(t.code, { children: "view" }),
			"), validation patterns (",
			a(t.code, { children: "pattern" }),
			"), and rubber groups (",
			a(t.code, { children: "rubber" }),
			")."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nconst value = ref('')\n<\/script>\n\n<template>\n  <!-- US Phone -->\n  <Input v-model=\"value\" type=\"tel\" mask=\"+1 (###) ###-####\" placeholder=\"+1 (555) 000-0000\" label=\"Phone\" />\n\n  <!-- Credit Card -->\n  <Input v-model=\"value\" type=\"text\" mask=\"#### #### #### ####\" placeholder=\"0000 0000 0000 0000\" label=\"Card\" />\n\n  <!-- Without placeholder display -->\n  <Input v-model=\"value\" type=\"tel\" mask=\"+1 (###) ###-####\" :mask-visible=\"false\" label=\"No placeholder\" />\n</template>\n"
		}) })
	] });
}
function Cc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sc, { ...e })
	}) : Sc(e);
}
//#endregion
//#region src/media/mdx/Input/mask.ru.mdx
function wc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Маскирование ввода" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "mask" }),
			", ",
			a(t.code, { children: "maskVisible" }),
			", ",
			a(t.code, { children: "maskNone" }),
			" и ",
			a(t.code, { children: "maskAttrs" }),
			" предназначены для управления форматированным вводом с автоматической подстановкой разделителей и контролем символов в заданных позициях."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "mask" }),
				" — шаблон маски в виде строки (например, ",
				a(t.code, { children: "+1 (***) ***-****" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "maskVisible" }),
				" — управляет отображением символов-заполнителей (по умолчанию ",
				a(t.code, { children: "true" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "maskNone" }), " — полностью отключает маску"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "maskAttrs" }), " — объект с расширенными настройками маски"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: ",
			a(t.code, { children: "mask" }),
			" определяет структуру форматирования, где специальный символ (по умолчанию ",
			a(t.code, { children: "*" }),
			") определяет позиции для ввода цифр, а остальные символы (пробелы, скобки, дефисы) автоматически подставляются как фиксированные разделители. ",
			a(t.code, { children: "maskVisible" }),
			" управляет отображением незаполненных позиций, где при значении ",
			a(t.code, { children: "true" }),
			" они отображаются символами-заполнителями ",
			a(t.code, { children: "_" }),
			", а при ",
			a(t.code, { children: "false" }),
			" показываются только введённые символы с разделителями. ",
			a(t.code, { children: "maskNone" }),
			" позволяет полностью отключить логику маскирования, превращая поле в обычный текстовый инпут. ",
			a(t.code, { children: "maskAttrs" }),
			" обеспечивает доступ к расширенным настройкам, позволяя настраивать специальные символы (",
			a(t.code, { children: "special" }),
			"), регулярные выражения для проверки (",
			a(t.code, { children: "match" }),
			"), кастомные символы-заполнители (",
			a(t.code, { children: "view" }),
			"), паттерны валидации (",
			a(t.code, { children: "pattern" }),
			") и резиновые группы (",
			a(t.code, { children: "rubber" }),
			")."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nconst value = ref('')\n<\/script>\n\n<template>\n  <!-- Телефон США -->\n  <Input v-model=\"value\" type=\"tel\" mask=\"+1 (###) ###-####\" placeholder=\"+1 (555) 000-0000\" label=\"Телефон\" />\n\n  <!-- Кредитная карта -->\n  <Input v-model=\"value\" type=\"text\" mask=\"#### #### #### ####\" placeholder=\"0000 0000 0000 0000\" label=\"Карта\" />\n\n  <!-- Без отображения символов-заполнителей -->\n  <Input v-model=\"value\" type=\"tel\" mask=\"+1 (###) ###-####\" :mask-visible=\"false\" label=\"Без заполнителя\" />\n</template>\n"
		}) })
	] });
}
function Tc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wc, { ...e })
	}) : wc(e);
}
//#endregion
//#region src/media/mdx/Input/number.en.mdx
function Ec(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Working with Numbers" }),
		"\n",
		o(t.p, { children: [
			"Properties ",
			a(t.code, { children: "type" }),
			", ",
			a(t.code, { children: "fraction" }),
			", ",
			a(t.code, { children: "language" }),
			", ",
			a(t.code, { children: "min" }),
			", ",
			a(t.code, { children: "max" }),
			", ",
			a(t.code, { children: "step" }),
			", ",
			a(t.code, { children: "arrow" }),
			", ",
			a(t.code, { children: "arrowStep" }),
			", and ",
			a(t.code, { children: "align" }),
			" are designed to manage numeric value input and formatting with localization support and interactive control elements."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type" }),
				" — input type (",
				a(t.code, { children: "number" }),
				" or ",
				a(t.code, { children: "number-format" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "fraction" }),
				" — number of decimal places (number, ",
				a(t.code, { children: "true" }),
				" for dynamic fractional part)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "language" }),
				" — locale code for formatting (e.g., ",
				a(t.code, { children: "ru-RU" }),
				", ",
				a(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "min" }), " — minimum allowed value"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "max" }), " — maximum allowed value"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "step" }), " — step size for keyboard input"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "arrow" }),
				" — control arrows type (",
				a(t.code, { children: "auto" }),
				", ",
				a(t.code, { children: "stepper" }),
				", ",
				a(t.code, { children: "carousel" }),
				", ",
				a(t.code, { children: "none" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "arrowStep" }), " — step size for arrow clicks"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "align" }),
				" — arrows placement (",
				a(t.code, { children: "left" }),
				", ",
				a(t.code, { children: "center" }),
				", ",
				a(t.code, { children: "right" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: ",
			a(t.code, { children: "type" }),
			" defines the base input mode, where ",
			a(t.code, { children: "number" }),
			" activates simple numeric input with basic validation without formatting, and ",
			a(t.code, { children: "number-format" }),
			" enables automatic formatting with thousands separators and decimal places depending on locale. ",
			a(t.code, { children: "language" }),
			" defines regional rules for thousands separators (space, comma, period) and decimal separator (period or comma). Properties ",
			a(t.code, { children: "min" }),
			" and ",
			a(t.code, { children: "max" }),
			" activate built-in range validation. ",
			a(t.code, { children: "step" }),
			" defines increment/decrement magnitude when using arrow keys up/down and Page Up/Down. Properties ",
			a(t.code, { children: "arrow" }),
			" and ",
			a(t.code, { children: "arrowStep" }),
			" add visual control elements (± buttons or < > arrows) with customizable step size, where if ",
			a(t.code, { children: "arrowStep" }),
			" is not specified, ",
			a(t.code, { children: "step" }),
			" value is used. ",
			a(t.code, { children: "align" }),
			" controls arrows placement in the input field."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nconst value = ref('1234567.89')\n<\/script>\n\n<template>\n  <!-- Simple numeric input -->\n  <Input v-model=\"value\" type=\"number\" label=\"Number\" />\n\n  <!-- Formatted number with locale -->\n  <Input v-model=\"value\" type=\"number-format\" language=\"en-US\" label=\"Formatted\" />\n\n  <!-- With range constraints -->\n  <Input v-model=\"value\" type=\"number\" :min=\"0\" :max=\"100\" label=\"From 0 to 100\" />\n\n  <!-- With step and stepper arrows -->\n  <Input v-model=\"value\" type=\"number\" arrow=\"stepper\" :step=\"5\" :arrow-step=\"10\" label=\"Step 5/10\" />\n\n  <!-- With center alignment -->\n  <Input v-model=\"value\" type=\"number-format\" align=\"center\" :fraction=\"2\" label=\"Centered\" />\n</template>\n"
		}) })
	] });
}
function Dc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ec, { ...e })
	}) : Ec(e);
}
//#endregion
//#region src/media/mdx/Input/number.ru.mdx
function Oc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Работа с числами" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "type" }),
			", ",
			a(t.code, { children: "fraction" }),
			", ",
			a(t.code, { children: "language" }),
			", ",
			a(t.code, { children: "min" }),
			", ",
			a(t.code, { children: "max" }),
			", ",
			a(t.code, { children: "step" }),
			", ",
			a(t.code, { children: "arrow" }),
			", ",
			a(t.code, { children: "arrowStep" }),
			" и ",
			a(t.code, { children: "align" }),
			" предназначены для управления вводом и форматированием числовых значений с поддержкой локализации и интерактивных элементов управления."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "type" }),
				" — тип инпута (",
				a(t.code, { children: "number" }),
				" или ",
				a(t.code, { children: "number-format" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "fraction" }),
				" — количество знаков после запятой (число, ",
				a(t.code, { children: "true" }),
				" для динамической дробной части)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "language" }),
				" — код локали для форматирования (например, ",
				a(t.code, { children: "ru-RU" }),
				", ",
				a(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "min" }), " — минимальное допустимое значение"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "max" }), " — максимальное допустимое значение"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "step" }), " — шаг изменения при клавиатурном вводе"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "arrow" }),
				" — тип управляющих стрелок (",
				a(t.code, { children: "auto" }),
				", ",
				a(t.code, { children: "stepper" }),
				", ",
				a(t.code, { children: "carousel" }),
				", ",
				a(t.code, { children: "none" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "arrowStep" }), " — шаг изменения при нажатии на стрелки"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "align" }),
				" — расположение стрелок (",
				a(t.code, { children: "left" }),
				", ",
				a(t.code, { children: "center" }),
				", ",
				a(t.code, { children: "right" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: ",
			a(t.code, { children: "type" }),
			" определяет базовый режим ввода, где ",
			a(t.code, { children: "number" }),
			" активирует простой числовой ввод с базовой валидацией без форматирования, а ",
			a(t.code, { children: "number-format" }),
			" включает автоматическое форматирование с разделителями тысяч и десятичными знаками в зависимости от локали. ",
			a(t.code, { children: "language" }),
			" определяет региональные правила для разделителей тысяч (пробел, запятая, точка) и десятичного разделителя (точка или запятая). Свойства ",
			a(t.code, { children: "min" }),
			" и ",
			a(t.code, { children: "max" }),
			" активируют встроенную валидацию диапазона. ",
			a(t.code, { children: "step" }),
			" определяет величину инкремента/декремента при использовании клавиш стрелок вверх/вниз и Page Up/Down. Свойства ",
			a(t.code, { children: "arrow" }),
			" и ",
			a(t.code, { children: "arrowStep" }),
			" добавляют визуальные элементы управления (кнопки ± или стрелки < >) с настраиваемым шагом изменения, где если ",
			a(t.code, { children: "arrowStep" }),
			" не указан, используется значение ",
			a(t.code, { children: "step" }),
			". ",
			a(t.code, { children: "align" }),
			" управляет расположением стрелок в поле ввода."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nconst value = ref('1234567.89')\n<\/script>\n\n<template>\n  <!-- Простой числовой ввод -->\n  <Input v-model=\"value\" type=\"number\" label=\"Число\" />\n\n  <!-- Форматированное число с локалью -->\n  <Input v-model=\"value\" type=\"number-format\" language=\"ru-RU\" label=\"Форматированное\" />\n\n  <!-- С ограничениями диапазона -->\n  <Input v-model=\"value\" type=\"number\" :min=\"0\" :max=\"100\" label=\"От 0 до 100\" />\n\n  <!-- С шагом и стрелками stepper -->\n  <Input v-model=\"value\" type=\"number\" arrow=\"stepper\" :step=\"5\" :arrow-step=\"10\" label=\"Шаг 5/10\" />\n\n  <!-- С выравниванием по центру -->\n  <Input v-model=\"value\" type=\"number-format\" align=\"center\" :fraction=\"2\" label=\"По центру\" />\n</template>\n"
		}) })
	] });
}
function kc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Oc, { ...e })
	}) : Oc(e);
}
//#endregion
//#region src/media/mdx/Input/type.en.mdx
function Ac(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Input Field Type" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "type" }),
			" property defines the type and behavior of the Input field."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Available values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'text'" }), " — standard text field (default value)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'search'" }), " — search field with quick clear functionality"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'number'" }), " — numeric field with basic number validation"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'number-format'" }), " — numeric field with formatting (thousands separators)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'currency'" }), " — field for currency input with currency formatting"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'email'" }), " — field for email input with corresponding validation"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'password'" }), " — field for password input (hides characters)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'datetime'" }), " — field for date and time input"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'date'" }), " — field for date input"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'year-month'" }), " — field for year and month input"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'time'" }), " — field for time input"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'hour-minute'" }), " — field for hours and minutes input"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'tel'" }), " — field for telephone number input"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'url'" }), " — field for web address input with URL validation"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'checkbox'" }), " — checkbox (used for boolean values)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'radio'" }), " — radio button (used for selecting one option from a group)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Each type activates corresponding validation, formatting, and input mechanisms. For the ",
			a(t.code, { children: "password" }),
			" type, a visibility toggle function is available through a special icon. Types ",
			a(t.code, { children: "number" }),
			", ",
			a(t.code, { children: "number-format" }),
			", and ",
			a(t.code, { children: "currency" }),
			" automatically enable formatting and restrict input to numeric values only. Types ",
			a(t.code, { children: "email" }),
			", ",
			a(t.code, { children: "tel" }),
			", and ",
			a(t.code, { children: "url" }),
			" apply built-in HTML5 validation and set the appropriate ",
			a(t.code, { children: "inputMode" }),
			" for mobile keyboards. Date and time related types (",
			a(t.code, { children: "datetime" }),
			", ",
			a(t.code, { children: "date" }),
			", ",
			a(t.code, { children: "year-month" }),
			", ",
			a(t.code, { children: "time" }),
			", ",
			a(t.code, { children: "hour-minute" }),
			") activate special input masks and value formatting."
		] })
	] });
}
function jc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ac, { ...e })
	}) : Ac(e);
}
//#endregion
//#region src/media/mdx/Input/type.ru.mdx
function Mc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Тип поля ввода" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "type" }),
			" определяет тип и поведение поля ввода Input."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'text'" }), " — обычное текстовое поле (значение по умолчанию)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'search'" }), " — поле для поиска с возможностью быстрой очистки"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'number'" }), " — числовое поле с базовой валидацией чисел"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'number-format'" }), " — числовое поле с форматированием (разделители тысяч)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'currency'" }), " — поле для ввода денежных значений с форматированием валюты"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'email'" }), " — поле для ввода электронной почты с соответствующей валидацией"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'password'" }), " — поле для ввода пароля (скрывает символы)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'datetime'" }), " — поле для ввода даты и времени"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'date'" }), " — поле для ввода даты"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'year-month'" }), " — поле для ввода года и месяца"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'time'" }), " — поле для ввода времени"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'hour-minute'" }), " — поле для ввода часов и минут"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'tel'" }), " — поле для ввода телефонного номера"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'url'" }), " — поле для ввода веб-адреса с валидацией URL"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'checkbox'" }), " — чекбокс (используется для булевых значений)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'radio'" }), " — радиокнопка (используется для выбора одного варианта из группы)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Каждый тип активирует соответствующие механизмы валидации, форматирования и ввода. Для типа ",
			a(t.code, { children: "password" }),
			" доступна функция переключения видимости через специальную иконку. Типы ",
			a(t.code, { children: "number" }),
			", ",
			a(t.code, { children: "number-format" }),
			" и ",
			a(t.code, { children: "currency" }),
			" автоматически включают форматирование и ограничивают ввод только числовыми значениями. Типы ",
			a(t.code, { children: "email" }),
			", ",
			a(t.code, { children: "tel" }),
			" и ",
			a(t.code, { children: "url" }),
			" применяют встроенную HTML5-валидацию и устанавливают соответствующий ",
			a(t.code, { children: "inputMode" }),
			" для мобильных клавиатур. Типы, связанные с датой и временем (",
			a(t.code, { children: "datetime" }),
			", ",
			a(t.code, { children: "date" }),
			", ",
			a(t.code, { children: "year-month" }),
			", ",
			a(t.code, { children: "time" }),
			", ",
			a(t.code, { children: "hour-minute" }),
			"), активируют специальные маски ввода и форматирование значений."
		] })
	] });
}
function Nc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Mc, { ...e })
	}) : Mc(e);
}
//#endregion
//#region src/media/mdx/Input/wikiMdxInput.ts
var Pc = {
	name: "Input",
	descriptions: {
		currency: {
			en: dc,
			ru: pc
		},
		date: {
			en: hc,
			ru: _c
		},
		input: {
			en: yc,
			ru: xc
		},
		mask: {
			en: Cc,
			ru: Tc
		},
		number: {
			en: Dc,
			ru: kc
		},
		type: {
			en: jc,
			ru: Nc
		}
	}
};
//#endregion
//#region src/media/mdx/List/list.en.mdx
function Fc(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "A component for creating interactive lists with support for hierarchical data, keyboard navigation, and search functionality." }),
		"\n",
		a(t.p, { children: "List manages the display of structured data with navigation capabilities, item selection, and interaction through keyboard and mouse. The component supports various item types (regular items, groups, menus, dividers, subtitles, HTML content), automatically handles complex hierarchical structures, and provides intuitive navigation. The built-in search system works in real-time with match highlighting across the entire data hierarchy." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Various item types (item, group, menu, line, subtitle, html)" }),
			"\n",
			a(t.li, { children: "Hierarchical structure with nested groups and menus" }),
			"\n",
			a(t.li, { children: "Full keyboard navigation (↑/↓, Enter, →, ←)" }),
			"\n",
			a(t.li, { children: "Built-in real-time search with match highlighting" }),
			"\n",
			a(t.li, { children: "Item selection control via v-model:selected" }),
			"\n",
			a(t.li, { children: "Focus control via v-model:focus" }),
			"\n",
			a(t.li, { children: "Lightweight mode for large lists (lite)" }),
			"\n",
			a(t.li, { children: "Display axis configuration (x/y) and dividers" }),
			"\n",
			a(t.li, { children: "Click and menu close events" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Navigation menus and option lists" }),
			"\n",
			a(t.li, { children: "Dropdown lists with hierarchical structure" }),
			"\n",
			a(t.li, { children: "Product and category catalogs" }),
			"\n",
			a(t.li, { children: "Settings lists with grouping" }),
			"\n",
			a(t.li, { children: "Context menus with submenus" }),
			"\n",
			a(t.li, { children: "File and folder lists" }),
			"\n",
			a(t.li, { children: "Filters with multiple selection" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['item2'])\nconst focus = ref(null)\n\nconst listData = ref([\n  { label: 'First item', value: 'item1' },\n  { label: 'Second item', value: 'item2' },\n  { type: 'line' },\n  { type: 'subtitle', label: 'Item group' },\n  {\n    label: 'Group with submenu',\n    value: 'group1',\n    type: 'group',\n    list: [\n      { label: 'Nested item 1', value: 'nested1' },\n      { label: 'Nested item 2', value: 'nested2' }\n    ]\n  }\n])\n\nconst handleClick = (event) => {\n  console.log('Item clicked:', event.detail.value)\n}\n<\/script>\n\n<template>\n  <List\n    v-model:selected=\"selected\"\n    v-model:focus=\"focus\"\n    :list=\"listData\"\n    highlight=\"text\"\n    @click=\"handleClick\"\n  />\n</template>\n"
		}) })
	] });
}
function Ic(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fc, { ...e })
	}) : Fc(e);
}
//#endregion
//#region src/media/mdx/List/list.ru.mdx
function Lc(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания интерактивных списков с поддержкой иерархических данных, клавиатурной навигации и функциональности поиска." }),
		"\n",
		a(t.p, { children: "List управляет отображением структурированных данных с возможностью навигации, выбора элементов и взаимодействия через клавиатуру и мышь. Компонент поддерживает различные типы элементов (обычные элементы, группы, меню, разделители, подзаголовки, HTML-контент), автоматически обрабатывает сложные иерархические структуры и предоставляет интуитивную навигацию. Встроенная система поиска работает в реальном времени с выделением совпадений по всей иерархии данных." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Различные типы элементов (item, group, menu, line, subtitle, html)" }),
			"\n",
			a(t.li, { children: "Иерархическая структура с вложенными группами и меню" }),
			"\n",
			a(t.li, { children: "Полная клавиатурная навигация (↑/↓, Enter, →, ←)" }),
			"\n",
			a(t.li, { children: "Встроенный поиск в реальном времени с подсветкой совпадений" }),
			"\n",
			a(t.li, { children: "Управление выбором элементов через v-model:selected" }),
			"\n",
			a(t.li, { children: "Управление фокусом через v-model:focus" }),
			"\n",
			a(t.li, { children: "Облегченный режим для больших списков (lite)" }),
			"\n",
			a(t.li, { children: "Настройка осей отображения (x/y) и разделителей" }),
			"\n",
			a(t.li, { children: "События клика и закрытия меню" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Навигационные меню и списки опций" }),
			"\n",
			a(t.li, { children: "Выпадающие списки с иерархической структурой" }),
			"\n",
			a(t.li, { children: "Каталоги товаров и категорий" }),
			"\n",
			a(t.li, { children: "Списки настроек с группировкой" }),
			"\n",
			a(t.li, { children: "Контекстные меню с подменю" }),
			"\n",
			a(t.li, { children: "Списки файлов и папок" }),
			"\n",
			a(t.li, { children: "Фильтры с множественным выбором" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['item2'])\nconst focus = ref(null)\n\nconst listData = ref([\n  { label: 'Первый элемент', value: 'item1' },\n  { label: 'Второй элемент', value: 'item2' },\n  { type: 'line' },\n  { type: 'subtitle', label: 'Группа элементов' },\n  {\n    label: 'Группа с подменю',\n    value: 'group1',\n    type: 'group',\n    list: [\n      { label: 'Вложенный элемент 1', value: 'nested1' },\n      { label: 'Вложенный элемент 2', value: 'nested2' }\n    ]\n  }\n])\n\nconst handleClick = (event) => {\n  console.log('Клик по элементу:', event.detail.value)\n}\n<\/script>\n\n<template>\n  <List\n    v-model:selected=\"selected\"\n    v-model:focus=\"focus\"\n    :list=\"listData\"\n    highlight=\"text\"\n    @click=\"handleClick\"\n  />\n</template>\n"
		}) })
	] });
}
function Rc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Lc, { ...e })
	}) : Lc(e);
}
//#endregion
//#region src/media/mdx/List/lite.en.mdx
function zc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Managing list performance" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "lite" }),
			" and ",
			a(t.code, { children: "liteThreshold" }),
			" properties work together to optimize rendering of large lists. They enable a lightweight display mode that reduces visual complexity and improves performance when the threshold number of items is exceeded."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "lite" }), " — enables lightweight list display mode"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "liteThreshold" }), " — item count threshold for activating simplified mode, defaults to configuration value"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Display mode is determined automatically: when ",
			a(t.code, { children: "lite=false" }),
			", the list always renders in full mode. When ",
			a(t.code, { children: "lite=true" }),
			", the component compares the total item count with ",
			a(t.code, { children: "liteThreshold" }),
			". If the item count does not exceed the threshold, full mode with extended visualization is used. When the threshold is exceeded, lightweight mode is activated to reduce rendering load. Use ",
			a(t.code, { children: "lite" }),
			" for working with dynamic data of variable size."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Automatic mode switching -->\n<List :list=\"items\" :lite=\"true\" :liteThreshold=\"50\" />\n\n<!-- Always full mode -->\n<List :list=\"items\" :lite=\"false\" />\n\n<!-- Lightweight mode for large catalogs -->\n<List :list=\"products\" :lite=\"true\" :liteThreshold=\"100\" />\n\n<!-- Custom threshold for mobile devices -->\n<List :list=\"data\" :lite=\"true\" :liteThreshold=\"30\" />\n"
		}) })
	] });
}
function Bc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zc, { ...e })
	}) : zc(e);
}
//#endregion
//#region src/media/mdx/List/lite.ru.mdx
function Vc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление производительностью списка" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "lite" }),
			" и ",
			a(t.code, { children: "liteThreshold" }),
			" работают в связке для оптимизации рендеринга больших списков. Они включают облегченный режим отображения, который снижает визуальную сложность и ускоряет производительность при превышении порогового количества элементов."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "lite" }), " — включает облегченный режим отображения списка"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "liteThreshold" }), " — порог количества элементов для активации упрощенного режима, по умолчанию зависит от конфигурации"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Режим отображения определяется автоматически: при ",
			a(t.code, { children: "lite=false" }),
			" список всегда рендерится в полном режиме. При ",
			a(t.code, { children: "lite=true" }),
			" компонент сравнивает общее количество элементов с ",
			a(t.code, { children: "liteThreshold" }),
			". Если количество элементов не превышает порог, используется полный режим с расширенной визуализацией. При превышении порога включается облегченный режим для снижения нагрузки на рендеринг. Используйте ",
			a(t.code, { children: "lite" }),
			" для работы с динамическими данными переменного размера."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Автоматическое переключение режима -->\n<List :list=\"items\" :lite=\"true\" :liteThreshold=\"50\" />\n\n<!-- Всегда полный режим -->\n<List :list=\"items\" :lite=\"false\" />\n\n<!-- Облегченный режим для больших каталогов -->\n<List :list=\"products\" :lite=\"true\" :liteThreshold=\"100\" />\n\n<!-- Пользовательский порог для мобильных устройств -->\n<List :list=\"data\" :lite=\"true\" :liteThreshold=\"30\" />\n"
		}) })
	] });
}
function Hc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vc, { ...e })
	}) : Vc(e);
}
//#endregion
//#region src/media/mdx/List/event.close.en.mdx
function Uc(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "close" }) }),
		"\n",
		a(t.p, { children: "Event fires when attempting to close the list after navigation has reached the root level." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "When it fires:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Pressing the ",
				a(t.strong, { children: "Escape" }),
				" key at the root level of the list"
			] }),
			"\n",
			o(t.li, { children: [
				"Pressing the ",
				a(t.strong, { children: "←" }),
				" (left arrow) key when there are no open submenus/groups"
			] }),
			"\n",
			a(t.li, { children: "Attempting to navigate back when there are no nested items" }),
			"\n"
		] })
	] });
}
function Wc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Uc, { ...e })
	}) : Uc(e);
}
//#endregion
//#region src/media/mdx/List/event.close.ru.mdx
function Gc(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "close" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при попытке закрыть список, когда навигация достигла корневого уровня." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Когда срабатывает:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Нажатие клавиши ",
				a(t.strong, { children: "Escape" }),
				" на корневом уровне списка"
			] }),
			"\n",
			o(t.li, { children: [
				"Нажатие клавиши ",
				a(t.strong, { children: "←" }),
				" (стрелка влево), когда нет открытых подменю/групп"
			] }),
			"\n",
			a(t.li, { children: "Попытка навигации назад при отсутствии вложенных элементов" }),
			"\n"
		] })
	] });
}
function Kc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gc, { ...e })
	}) : Gc(e);
}
//#endregion
//#region src/media/mdx/List/slot.html.en.mdx
function qc(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "[value]: any" }),
			" — Dynamic slot for rendering custom content (Vue components or HTML) when item ",
			a(t.code, { children: "type" }),
			" is ",
			a(t.code, { children: "'html'" }),
			". Item's ",
			a(t.code, { children: "value" }),
			" is used as slot name."
		] }),
		"\n"
	] });
}
function Jc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(qc, { ...e })
	}) : qc(e);
}
//#endregion
//#region src/media/mdx/List/slot.html.ru.mdx
function Yc(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "[value]: any" }),
			" — Динамический слот для рендеринга пользовательского контента (Vue-компонентов или HTML), когда ",
			a(t.code, { children: "type" }),
			" элемента равен ",
			a(t.code, { children: "'html'" }),
			". Поле ",
			a(t.code, { children: "value" }),
			" элемента используется как имя слота."
		] }),
		"\n"
	] });
}
function Xc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Yc, { ...e })
	}) : Yc(e);
}
//#endregion
//#region src/media/mdx/List/wikiMdxList.ts
var Zc = {
	name: "List",
	descriptions: {
		list: {
			en: Ic,
			ru: Rc
		},
		lite: {
			en: Bc,
			ru: Hc
		},
		"event.close": {
			en: Wc,
			ru: Kc
		},
		"slot.html": {
			en: Jc,
			ru: Xc
		}
	}
};
//#endregion
//#region src/media/mdx/ListGroup/listGroup.en.mdx
function Qc(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for grouping and organizing list items with collapsible structure." }),
		"\n",
		a(t.p, { children: "ListGroup is an auxiliary component for List, managing hierarchical content organization with expand/collapse functionality. The component integrates with MotionTransform for smooth animations, supports unlimited nesting levels, and provides convenient navigation through structured data." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Hierarchical content organization with unlimited nesting" }),
			"\n",
			a(t.li, { children: "Expand/collapse animations via MotionTransform" }),
			"\n",
			a(t.li, { children: "State management via props or internal state" }),
			"\n",
			a(t.li, { children: "Automatic group content visibility control" }),
			"\n",
			a(t.li, { children: "Integration with List component ecosystem" }),
			"\n",
			a(t.li, { children: "Customization support via head and list slots" }),
			"\n",
			a(t.li, { children: "Group state change events" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Grouping list items by categories" }),
			"\n",
			a(t.li, { children: "Creating tree-like navigation structures" }),
			"\n",
			a(t.li, { children: "Organizing settings and options by sections" }),
			"\n",
			a(t.li, { children: "Multi-level menus and catalogs" }),
			"\n",
			a(t.li, { children: "FAQ sections with expandable answers" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst items = [\n  { text: 'Item 1', value: '1' },\n  { text: 'Item 2', value: '2' },\n  { text: 'Item 3', value: '3' }\n]\n\nconst isOpen = ref(true)\n<\/script>\n\n<template>\n  <List>\n    <ListGroup v-model:open=\"isOpen\">\n      <template #head=\"{ open }\">\n        <div class=\"group-header\">\n          <span>{{ open ? '▼' : '▶' }}</span>\n          <span>Group Items</span>\n        </div>\n      </template>\n\n      <template #list>\n        <ListItem\n          v-for=\"item in items\"\n          :key=\"item.value\"\n          :text=\"item.text\"\n        />\n      </template>\n    </ListGroup>\n  </List>\n</template>\n"
		}) })
	] });
}
function $c(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Qc, { ...e })
	}) : Qc(e);
}
//#endregion
//#region src/media/mdx/ListGroup/listGroup.ru.mdx
function el(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для группировки и организации элементов списка со сворачиваемой структурой." }),
		"\n",
		a(t.p, { children: "ListGroup является вспомогательным компонентом для List, управляющим иерархической организацией контента с возможностью разворачивания/сворачивания групп. Компонент интегрируется с MotionTransform для плавных анимаций, поддерживает неограниченную вложенность групп и обеспечивает удобную навигацию по структурированным данным." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Иерархическая организация контента с неограниченной вложенностью" }),
			"\n",
			a(t.li, { children: "Анимации разворачивания/сворачивания групп через MotionTransform" }),
			"\n",
			a(t.li, { children: "Управление состоянием открытия через props или внутренний state" }),
			"\n",
			a(t.li, { children: "Автоматическое управление видимостью содержимого группы" }),
			"\n",
			a(t.li, { children: "Интеграция с экосистемой компонентов List" }),
			"\n",
			a(t.li, { children: "Поддержка кастомизации через слоты head и list" }),
			"\n",
			a(t.li, { children: "События изменения состояния группы" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Группировка элементов списка по категориям" }),
			"\n",
			a(t.li, { children: "Создание древовидных структур навигации" }),
			"\n",
			a(t.li, { children: "Организация настроек и опций по разделам" }),
			"\n",
			a(t.li, { children: "Многоуровневые меню и каталоги" }),
			"\n",
			a(t.li, { children: "FAQ секции с раскрывающимися ответами" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst items = [\n  { text: 'Элемент 1', value: '1' },\n  { text: 'Элемент 2', value: '2' },\n  { text: 'Элемент 3', value: '3' }\n]\n\nconst isOpen = ref(true)\n<\/script>\n\n<template>\n  <List>\n    <ListGroup v-model:open=\"isOpen\">\n      <template #head=\"{ open }\">\n        <div class=\"group-header\">\n          <span>{{ open ? '▼' : '▶' }}</span>\n          <span>Группа элементов</span>\n        </div>\n      </template>\n\n      <template #list>\n        <ListItem\n          v-for=\"item in items\"\n          :key=\"item.value\"\n          :text=\"item.text\"\n        />\n      </template>\n    </ListGroup>\n  </List>\n</template>\n"
		}) })
	] });
}
function tl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(el, { ...e })
	}) : el(e);
}
//#endregion
//#region src/media/mdx/ListGroup/slots.en.mdx
function nl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "head(open: boolean): any" }), " — Slot for placing the header content with toggle functionality."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "list: any" }), " — Slot for placing the list content."] }),
		"\n"
	] });
}
function rl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(nl, { ...e })
	}) : nl(e);
}
//#endregion
//#region src/media/mdx/ListGroup/slots.ru.mdx
function il(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "head(open: boolean): any" }), " — Слот для размещения содержимого заголовка с функциональностью переключения."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "list: any" }), " — Слот для размещения содержимого списка."] }),
		"\n"
	] });
}
function al(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(il, { ...e })
	}) : il(e);
}
//#endregion
//#region src/media/mdx/ListGroup/wikiMdxListGroup.ts
var ol = {
	name: "ListGroup",
	descriptions: {
		listGroup: {
			en: $c,
			ru: tl
		},
		slots: {
			en: rl,
			ru: al
		}
	}
};
//#endregion
//#region src/media/mdx/ListItem/basic.en.mdx
function sl(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating interactive list items with flexible content structure and multiple display areas." }),
		"\n",
		a(t.p, { children: "ListItem provides uniform presentation of items in lists, menus, and navigation structures. The component supports labels, descriptions, icons, status badges, interactive states (focus, selection, disabled), loading with progress and skeleton, and ripple effect for enhanced feedback." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Multiple content areas (label, description, prefix, suffix, caption)" }),
			"\n",
			a(t.li, { children: "Icon support with flexible positioning and alignment" }),
			"\n",
			a(t.li, { children: "Badge integration for status indicators" }),
			"\n",
			a(t.li, { children: "Interactive states (focus, selected, disabled, readonly)" }),
			"\n",
			a(t.li, { children: "Loading states with progress and skeleton" }),
			"\n",
			a(t.li, { children: "Ripple effect for visual feedback" }),
			"\n",
			a(t.li, { children: "Flexible tag variants (button, link, div, span)" }),
			"\n",
			a(t.li, { children: "Built-in accessibility support" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "List items and navigation menus" }),
			"\n",
			a(t.li, { children: "Settings and configuration options" }),
			"\n",
			a(t.li, { children: "Lists with multiple selection" }),
			"\n",
			a(t.li, { children: "Contact lists and catalogs" }),
			"\n",
			a(t.li, { children: "Mobile interfaces and action lists" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst items = ref([\n  { text: 'List item 1', value: '1', selected: false },\n  { text: 'List item 2', value: '2', selected: true },\n  { text: 'List item 3', value: '3', selected: false }\n])\n\nconst handleClick = (item) => {\n  item.selected = !item.selected\n  console.log('Item selected:', item.text)\n}\n<\/script>\n\n<template>\n  <List>\n    <ListItem\n      v-for=\"item in items\"\n      :key=\"item.value\"\n      :text=\"item.text\"\n      :selected=\"item.selected\"\n      @click=\"handleClick(item)\"\n    >\n      <template #prefix>\n        <Icon name=\"check\" v-if=\"item.selected\" />\n      </template>\n    </ListItem>\n  </List>\n</template>\n"
		}) })
	] });
}
function cl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(sl, { ...e })
	}) : sl(e);
}
//#endregion
//#region src/media/mdx/ListItem/basic.ru.mdx
function ll(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания интерактивных элементов списков с гибкой структурой контента и множественными областями отображения." }),
		"\n",
		a(t.p, { children: "ListItem обеспечивает единообразное представление элементов в списках, меню и навигационных структурах. Компонент поддерживает метки, описания, иконки, значки состояния, интерактивные состояния (фокус, выбор, отключение), загрузку с прогрессом и скелетоном, а также эффект пульсации для улучшенной обратной связи." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Множественные области контента (метка, описание, префикс, суффикс, заголовок)" }),
			"\n",
			a(t.li, { children: "Поддержка иконок с гибким позиционированием и выравниванием" }),
			"\n",
			a(t.li, { children: "Интеграция значков для индикаторов статуса" }),
			"\n",
			a(t.li, { children: "Интерактивные состояния (фокус, выбранный, отключенный, только чтение)" }),
			"\n",
			a(t.li, { children: "Состояния загрузки с прогрессом и скелетоном" }),
			"\n",
			a(t.li, { children: "Эффект пульсации для визуальной обратной связи" }),
			"\n",
			a(t.li, { children: "Гибкие варианты тегов (button, link, div, span)" }),
			"\n",
			a(t.li, { children: "Встроенная поддержка доступности" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Элементы списков и меню навигации" }),
			"\n",
			a(t.li, { children: "Пункты настроек и конфигурации" }),
			"\n",
			a(t.li, { children: "Списки с множественным выбором" }),
			"\n",
			a(t.li, { children: "Контактные списки и каталоги" }),
			"\n",
			a(t.li, { children: "Мобильные интерфейсы и action lists" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst items = ref([\n  { text: 'Элемент списка 1', value: '1', selected: false },\n  { text: 'Элемент списка 2', value: '2', selected: true },\n  { text: 'Элемент списка 3', value: '3', selected: false }\n])\n\nconst handleClick = (item) => {\n  item.selected = !item.selected\n  console.log('Элемент выбран:', item.text)\n}\n<\/script>\n\n<template>\n  <List>\n    <ListItem\n      v-for=\"item in items\"\n      :key=\"item.value\"\n      :text=\"item.text\"\n      :selected=\"item.selected\"\n      @click=\"handleClick(item)\"\n    >\n      <template #prefix>\n        <Icon name=\"check\" v-if=\"item.selected\" />\n      </template>\n    </ListItem>\n  </List>\n</template>\n"
		}) })
	] });
}
function ul(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ll, { ...e })
	}) : ll(e);
}
//#endregion
//#region src/media/mdx/ListItem/fill.en.mdx
function dl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Element fill color" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "fill" }),
			" property defines the background color of the list item element, allowing precise control over the component's visual styling."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Hex colors: ",
				a(t.code, { children: "#FF0000" }),
				", ",
				a(t.code, { children: "#ffffff" }),
				", ",
				a(t.code, { children: "#3498db" })
			] }),
			"\n",
			o(t.li, { children: [
				"RGB: ",
				a(t.code, { children: "rgb(255, 0, 0)" }),
				", ",
				a(t.code, { children: "rgb(52, 152, 219)" })
			] }),
			"\n",
			o(t.li, { children: [
				"RGBA: ",
				a(t.code, { children: "rgba(255, 0, 0, 0.5)" }),
				", ",
				a(t.code, { children: "rgba(0, 0, 0, 0.1)" })
			] }),
			"\n",
			o(t.li, { children: [
				"Named colors: ",
				a(t.code, { children: "red" }),
				", ",
				a(t.code, { children: "blue" }),
				", ",
				a(t.code, { children: "green" }),
				", ",
				a(t.code, { children: "transparent" })
			] }),
			"\n",
			o(t.li, { children: [
				"HSL/HSLA: ",
				a(t.code, { children: "hsl(0, 100%, 50%)" }),
				", ",
				a(t.code, { children: "hsla(210, 70%, 53%, 0.8)" })
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Accepts any standard CSS color format. The property provides a flexible way to customize the visual presentation of list items, allowing you to create color schemes and highlight important elements. The value is applied as background-color to the component's root element." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Red background -->\n<ListItem fill=\"#FF0000\" text=\"Item with red background\" />\n\n<!-- Semi-transparent blue -->\n<ListItem fill=\"rgba(52, 152, 219, 0.3)\" text=\"Semi-transparent item\" />\n\n<!-- Named color -->\n<ListItem fill=\"lightblue\" text=\"Light blue item\" />\n"
		}) })
	] });
}
function fl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(dl, { ...e })
	}) : dl(e);
}
//#endregion
//#region src/media/mdx/ListItem/fill.ru.mdx
function pl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Цвет заливки элемента" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "fill" }),
			" определяет цвет фона элемента списка, позволяя точно контролировать визуальное оформление компонента."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Hex-цвета: ",
				a(t.code, { children: "#FF0000" }),
				", ",
				a(t.code, { children: "#ffffff" }),
				", ",
				a(t.code, { children: "#3498db" })
			] }),
			"\n",
			o(t.li, { children: [
				"RGB: ",
				a(t.code, { children: "rgb(255, 0, 0)" }),
				", ",
				a(t.code, { children: "rgb(52, 152, 219)" })
			] }),
			"\n",
			o(t.li, { children: [
				"RGBA: ",
				a(t.code, { children: "rgba(255, 0, 0, 0.5)" }),
				", ",
				a(t.code, { children: "rgba(0, 0, 0, 0.1)" })
			] }),
			"\n",
			o(t.li, { children: [
				"Именованные цвета: ",
				a(t.code, { children: "red" }),
				", ",
				a(t.code, { children: "blue" }),
				", ",
				a(t.code, { children: "green" }),
				", ",
				a(t.code, { children: "transparent" })
			] }),
			"\n",
			o(t.li, { children: [
				"HSL/HSLA: ",
				a(t.code, { children: "hsl(0, 100%, 50%)" }),
				", ",
				a(t.code, { children: "hsla(210, 70%, 53%, 0.8)" })
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Принимает любой стандартный CSS-формат цвета. Свойство предоставляет гибкий способ настройки визуального представления элементов списка, позволяя создавать цветовые схемы и выделять важные элементы. Значение применяется как background-color к корневому элементу компонента." }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Красный фон -->\n<ListItem fill=\"#FF0000\" text=\"Элемент с красным фоном\" />\n\n<!-- Полупрозрачный синий -->\n<ListItem fill=\"rgba(52, 152, 219, 0.3)\" text=\"Полупрозрачный элемент\" />\n\n<!-- Именованный цвет -->\n<ListItem fill=\"lightblue\" text=\"Светло-голубой элемент\" />\n"
		}) })
	] });
}
function ml(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(pl, { ...e })
	}) : pl(e);
}
//#endregion
//#region src/media/mdx/ListItem/slots.en.mdx
function hl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "body: any" }), " — Slot for placing additional content at the bottom of the list item."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "trailing: any" }), " — Slot for placing controls or indicators at the end of the list item."] }),
		"\n"
	] });
}
function gl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(hl, { ...e })
	}) : hl(e);
}
//#endregion
//#region src/media/mdx/ListItem/slots.ru.mdx
function _l(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "body: any" }), " — Слот для размещения дополнительного контента в нижней части элемента списка."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "trailing: any" }), " — Слот для размещения элементов управления или индикаторов в конце элемента списка."] }),
		"\n"
	] });
}
function vl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(_l, { ...e })
	}) : _l(e);
}
//#endregion
//#region src/media/mdx/ListItem/wikiMdxListItem.ts
var yl = {
	name: "ListItem",
	descriptions: {
		basic: {
			en: cl,
			ru: ul
		},
		fill: {
			en: fl,
			ru: ml
		},
		slots: {
			en: gl,
			ru: vl
		}
	}
};
//#endregion
//#region src/media/mdx/ListMenu/listMenu.en.mdx
function bl(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating nested menus and organizing navigation elements with expandable structure." }),
		"\n",
		a(t.p, { children: "ListMenu is an auxiliary component for List, managing hierarchical menu structure with open/close submenu functionality. The component integrates with Window for positioning dropdown submenus, supports multiple nesting levels, and provides smooth navigation through tree-like data structures." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Hierarchical menu organization with unlimited nesting" }),
			"\n",
			a(t.li, { children: "Open/close submenu state management" }),
			"\n",
			a(t.li, { children: "Integration with Window for dropdown menu positioning" }),
			"\n",
			a(t.li, { children: "Support for horizontal and vertical positioning axes" }),
			"\n",
			a(t.li, { children: "Automatic click and navigation handling" }),
			"\n",
			a(t.li, { children: "Adaptive submenu behavior" }),
			"\n",
			a(t.li, { children: "Menu item open/close events" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Navigation menus with subsections" }),
			"\n",
			a(t.li, { children: "Multi-level catalogs and categories" }),
			"\n",
			a(t.li, { children: "Tree-like data structures" }),
			"\n",
			a(t.li, { children: "Context menus with submenus" }),
			"\n",
			a(t.li, { children: "Navigation panels with grouping" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst menuItems = ref([\n  {\n    text: 'Home',\n    value: 'home'\n  },\n  {\n    text: 'Products',\n    value: 'products',\n    sublist: [\n      { text: 'Category 1', value: 'cat1' },\n      { text: 'Category 2', value: 'cat2' }\n    ]\n  },\n  {\n    text: 'About',\n    value: 'about'\n  }\n])\n<\/script>\n\n<template>\n  <List :items=\"menuItems\">\n    <template #item=\"{ item }\">\n      <ListMenu\n        v-if=\"item.sublist\"\n        :items=\"item.sublist\"\n        :axis=\"'y'\"\n      >\n        <template #default>\n          {{ item.text }}\n        </template>\n      </ListMenu>\n      <div v-else>{{ item.text }}</div>\n    </template>\n  </List>\n</template>\n"
		}) })
	] });
}
function xl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bl, { ...e })
	}) : bl(e);
}
//#endregion
//#region src/media/mdx/ListMenu/listMenu.ru.mdx
function Sl(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой." }),
		"\n",
		a(t.p, { children: "ListMenu является вспомогательным компонентом для List, управляющим иерархической структурой меню с возможностью открытия/закрытия подменю. Компонент интегрируется с Window для позиционирования выпадающих подменю, поддерживает множественные уровни вложенности и обеспечивает плавную навигацию по древовидной структуре данных." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Иерархическая организация меню с неограниченной вложенностью" }),
			"\n",
			a(t.li, { children: "Управление состоянием открытия/закрытия подменю" }),
			"\n",
			a(t.li, { children: "Интеграция с Window для позиционирования выпадающих меню" }),
			"\n",
			a(t.li, { children: "Поддержка горизонтальной и вертикальной осей позиционирования" }),
			"\n",
			a(t.li, { children: "Автоматическая обработка кликов и навигации" }),
			"\n",
			a(t.li, { children: "Адаптивное поведение подменю" }),
			"\n",
			a(t.li, { children: "События открытия/закрытия элементов меню" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Навигационные меню с подразделами" }),
			"\n",
			a(t.li, { children: "Многоуровневые каталоги и категории" }),
			"\n",
			a(t.li, { children: "Древовидные структуры данных" }),
			"\n",
			a(t.li, { children: "Контекстные меню с подменю" }),
			"\n",
			a(t.li, { children: "Панели навигации с группировкой" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst menuItems = ref([\n  {\n    text: 'Главная',\n    value: 'home'\n  },\n  {\n    text: 'Продукты',\n    value: 'products',\n    sublist: [\n      { text: 'Категория 1', value: 'cat1' },\n      { text: 'Категория 2', value: 'cat2' }\n    ]\n  },\n  {\n    text: 'О нас',\n    value: 'about'\n  }\n])\n<\/script>\n\n<template>\n  <List :items=\"menuItems\">\n    <template #item=\"{ item }\">\n      <ListMenu\n        v-if=\"item.sublist\"\n        :items=\"item.sublist\"\n        :axis=\"'y'\"\n      >\n        <template #default>\n          {{ item.text }}\n        </template>\n      </ListMenu>\n      <div v-else>{{ item.text }}</div>\n    </template>\n  </List>\n</template>\n"
		}) })
	] });
}
function Cl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sl, { ...e })
	}) : Sl(e);
}
//#endregion
//#region src/media/mdx/ListMenu/wikiMdxListMenu.ts
var wl = {
	name: "ListMenu",
	descriptions: { listMenu: {
		en: xl,
		ru: Cl
	} }
};
//#endregion
//#region src/media/mdx/Mask/basic.en.mdx
function Tl(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "A component for creating input fields with automatic data formatting according to a specified pattern in real-time." }),
		"\n",
		o(t.p, { children: [
			"Mask provides structured input with support for various formats (phones, bank cards, dates, currencies, numbers). The component automatically adds separators and literal characters during typing, restricts input to only allowed characters, supports multiple patterns with automatic selection of the most suitable one, works together with the validation system through ",
			a(t.code, { children: "pattern" }),
			" and ",
			a(t.code, { children: "check" }),
			", and provides built-in mask types for common data formats."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic formatting with separator addition" }),
			"\n",
			a(t.li, { children: "Flexible templates with support for single and multiple masks" }),
			"\n",
			a(t.li, { children: "Built-in types: text, number, number-format, currency, date, time" }),
			"\n",
			o(t.li, { children: [
				"Customizable special characters via ",
				a(t.code, { children: "special" }),
				" property"
			] }),
			"\n",
			a(t.li, { children: "Input error prevention with character restriction" }),
			"\n",
			o(t.li, { children: [
				"Integration with validation system through ",
				a(t.code, { children: "pattern" }),
				" and ",
				a(t.code, { children: "check" })
			] }),
			"\n",
			a(t.li, { children: "Alignment support (left/right) and direction (ltr/rtl)" }),
			"\n",
			a(t.li, { children: "Rubber groups with dynamic length" }),
			"\n",
			a(t.li, { children: "Visibility control for unfilled characters" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Phone number input fields" }),
			"\n",
			a(t.li, { children: "Bank card numbers and CVV codes" }),
			"\n",
			a(t.li, { children: "Dates and times in various formats" }),
			"\n",
			a(t.li, { children: "Postal codes and identifiers" }),
			"\n",
			a(t.li, { children: "Currency amounts with formatting" }),
			"\n",
			a(t.li, { children: "Numeric values with separators" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst phone = ref('')\nconst cardNumber = ref('')\nconst date = ref('')\nconst amount = ref('')\n\nconst handleInput = (value) => {\n  console.log('Entered value:', value)\n}\n<\/script>\n\n<template>\n  <!-- Russian phone -->\n  <Mask\n    v-model=\"phone\"\n    mask=\"+7 *** *** ** **\"\n    placeholder=\"Enter phone number\"\n    @input=\"handleInput\"\n  />\n\n  <!-- Bank card -->\n  <Mask\n    v-model=\"cardNumber\"\n    mask=\"**** **** **** ****\"\n    placeholder=\"0000 0000 0000 0000\"\n  />\n\n  <!-- Multiple phone formats -->\n  <Mask\n    v-model=\"phone\"\n    :mask=\"['+7 *** *** ** **', '8 *** *** ** **']\"\n  />\n\n  <!-- Date with built-in type -->\n  <Mask\n    v-model=\"date\"\n    type=\"date\"\n    pattern=\"DD.MM.YYYY\"\n  />\n\n  <!-- Currency -->\n  <Mask\n    v-model=\"amount\"\n    type=\"currency\"\n    currency=\"RUB\"\n  />\n</template>\n"
		}) })
	] });
}
function El(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Tl, { ...e })
	}) : Tl(e);
}
//#endregion
//#region src/media/mdx/Mask/basic.ru.mdx
function Dl(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания полей ввода с автоматическим форматированием данных по заданному шаблону в реальном времени." }),
		"\n",
		o(t.p, { children: [
			"Mask обеспечивает структурированный ввод с поддержкой различных форматов (телефоны, банковские карты, даты, валюты, числа). Компонент автоматически добавляет разделители и литеральные символы во время набора, ограничивает ввод только допустимыми символами, поддерживает множественные шаблоны с автоматическим выбором наиболее подходящего, работает совместно с системой валидации через ",
			a(t.code, { children: "pattern" }),
			" и ",
			a(t.code, { children: "check" }),
			", и предоставляет встроенные типы масок для распространенных форматов данных."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическое форматирование с добавлением разделителей" }),
			"\n",
			a(t.li, { children: "Гибкие шаблоны с поддержкой одиночных и множественных масок" }),
			"\n",
			a(t.li, { children: "Встроенные типы: text, number, number-format, currency, date, time" }),
			"\n",
			o(t.li, { children: ["Настраиваемые специальные символы через свойство ", a(t.code, { children: "special" })] }),
			"\n",
			a(t.li, { children: "Предотвращение ошибок ввода с ограничением символов" }),
			"\n",
			o(t.li, { children: [
				"Интеграция с системой валидации через ",
				a(t.code, { children: "pattern" }),
				" и ",
				a(t.code, { children: "check" })
			] }),
			"\n",
			a(t.li, { children: "Поддержка выравнивания (left/right) и направления (ltr/rtl)" }),
			"\n",
			a(t.li, { children: "Резиновые группы с динамической длиной" }),
			"\n",
			a(t.li, { children: "Управление видимостью незаполненных символов" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Поля ввода телефонных номеров" }),
			"\n",
			a(t.li, { children: "Номера банковских карт и CVV-кодов" }),
			"\n",
			a(t.li, { children: "Даты и время в различных форматах" }),
			"\n",
			a(t.li, { children: "Почтовые индексы и коды" }),
			"\n",
			a(t.li, { children: "Валютные суммы с форматированием" }),
			"\n",
			a(t.li, { children: "Числовые значения с разделителями" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst phone = ref('')\nconst cardNumber = ref('')\nconst date = ref('')\nconst amount = ref('')\n\nconst handleInput = (value) => {\n  console.log('Введено значение:', value)\n}\n<\/script>\n\n<template>\n  <!-- Российский телефон -->\n  <Mask\n    v-model=\"phone\"\n    mask=\"+7 *** *** ** **\"\n    placeholder=\"Введите номер телефона\"\n    @input=\"handleInput\"\n  />\n\n  <!-- Банковская карта -->\n  <Mask\n    v-model=\"cardNumber\"\n    mask=\"**** **** **** ****\"\n    placeholder=\"0000 0000 0000 0000\"\n  />\n\n  <!-- Множественные форматы телефонов -->\n  <Mask\n    v-model=\"phone\"\n    :mask=\"['+7 *** *** ** **', '8 *** *** ** **']\"\n  />\n\n  <!-- Дата с встроенным типом -->\n  <Mask\n    v-model=\"date\"\n    type=\"date\"\n    pattern=\"DD.MM.YYYY\"\n  />\n\n  <!-- Валюта -->\n  <Mask\n    v-model=\"amount\"\n    type=\"currency\"\n    currency=\"RUB\"\n  />\n</template>\n"
		}) })
	] });
}
function Ol(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Dl, { ...e })
	}) : Dl(e);
}
//#endregion
//#region src/media/mdx/Mask/dateTypes.en.mdx
function kl(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Date and time types" }),
		"\n",
		a(t.p, { children: "Date types in Mask provide automatic formatting and validation for date and time input with localization support." }),
		"\n",
		o(t.p, { children: [
			"All date types automatically create masks according to regional settings, ignoring the ",
			a(t.code, { children: "mask" }),
			" property. The mask is determined by locale via ",
			a(t.code, { children: "language" }),
			" (DD.MM.YYYY for ru). Validation checks for correct numbers, days in month, and value ranges."
		] }),
		"\n",
		a(t.h3, { children: "Types" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "date" }), " — full date in locale format (MM/DD/YYYY for US)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "datetime" }), " — date and time (HH:MM) separated by space"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "full" }), " — full date and time with seconds (HH:MM:SS)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "time" }), " — time in HH:MM:SS format"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "hour-minute" }), " — hours and minutes (HH:MM)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "hour" }),
				", ",
				a(t.code, { children: "minute" }),
				", ",
				a(t.code, { children: "second" }),
				" — separate time components"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "year" }),
				", ",
				a(t.code, { children: "month" }),
				", ",
				a(t.code, { children: "day" }),
				" — separate date components"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "year-month" }),
				", ",
				a(t.code, { children: "day-month" }),
				" — date component combinations"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Localization" }),
		"\n",
		o(t.p, { children: [
			"Formats adapt via the ",
			a(t.code, { children: "language" }),
			" property:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "ru" }),
				", ",
				a(t.code, { children: "de" }),
				" — DD.MM.YYYY (31.12.2024)"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "en-US" }), " — MM/DD/YYYY (12/31/2024)"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Examples" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- US date format -->\n<Mask type=\"date\" language=\"en-US\" />\n\n<!-- Full date and time -->\n<Mask type=\"datetime\" language=\"en-US\" />\n\n<!-- Russian date format -->\n<Mask type=\"date\" language=\"ru\" />\n\n<!-- Time only -->\n<Mask type=\"time\" />\n"
		}) })
	] });
}
function Al(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(kl, { ...e })
	}) : kl(e);
}
//#endregion
//#region src/media/mdx/Mask/dateTypes.ru.mdx
function jl(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Типы дат и времени" }),
		"\n",
		a(t.p, { children: "Типы дат в Mask обеспечивают автоматическое форматирование и валидацию для ввода даты и времени с учётом локализации." }),
		"\n",
		o(t.p, { children: [
			"Все типы дат автоматически создают маски согласно региональным настройкам, игнорируя свойство ",
			a(t.code, { children: "mask" }),
			". Маска определяется локалью через ",
			a(t.code, { children: "language" }),
			" (DD.MM.YYYY для ru). Валидация проверяет корректность чисел, дней в месяце и диапазонов."
		] }),
		"\n",
		a(t.h3, { children: "Типы" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "date" }), " — полная дата в формате локали (DD.MM.YYYY для ru)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "datetime" }), " — дата и время (HH:MM) через пробел"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "full" }), " — полная дата и время с секундами (HH:MM:SS)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "time" }), " — время в формате HH:MM:SS"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "hour-minute" }), " — часы и минуты (HH:MM)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "hour" }),
				", ",
				a(t.code, { children: "minute" }),
				", ",
				a(t.code, { children: "second" }),
				" — компоненты времени"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "year" }),
				", ",
				a(t.code, { children: "month" }),
				", ",
				a(t.code, { children: "day" }),
				" — компоненты даты"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "year-month" }),
				", ",
				a(t.code, { children: "day-month" }),
				" — комбинации даты"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Локализация" }),
		"\n",
		o(t.p, { children: [
			"Форматы адаптируются через свойство ",
			a(t.code, { children: "language" }),
			":"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "ru" }),
				", ",
				a(t.code, { children: "de" }),
				" — DD.MM.YYYY (31.12.2024)"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "en-US" }), " — MM/DD/YYYY (12/31/2024)"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Примеры" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Русский формат даты -->\n<Mask type=\"date\" language=\"ru\" />\n\n<!-- Полная дата и время -->\n<Mask type=\"datetime\" language=\"ru\" />\n\n<!-- Английский формат даты -->\n<Mask type=\"date\" language=\"en-US\" />\n\n<!-- Только время -->\n<Mask type=\"time\" />\n"
		}) })
	] });
}
function Ml(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(jl, { ...e })
	}) : jl(e);
}
//#endregion
//#region src/media/mdx/Mask/expose.en.mdx
function Nl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "value: Ref<string>" }), " — Final formatted mask value."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "valueBasic: Ref<string>" }), " — Basic mask value without formatting (only entered characters)."] }),
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "set(value: string): boolean" }),
			" — Sets new value and reinitializes the mask. Returns ",
			a(t.code, { children: "true" }),
			" if changed."
		] }),
		"\n"
	] });
}
function Pl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Nl, { ...e })
	}) : Nl(e);
}
//#endregion
//#region src/media/mdx/Mask/expose.ru.mdx
function Fl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "value: Ref<string>" }), " — Итоговое отформатированное значение маски."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "valueBasic: Ref<string>" }), " — Базовое значение маски без форматирования (только введённые символы)."] }),
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "set(value: string): boolean" }),
			" — Устанавливает новое значение и переинициализирует маску. Возвращает ",
			a(t.code, { children: "true" }),
			", если значение было изменено."
		] }),
		"\n"
	] });
}
function Il(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fl, { ...e })
	}) : Fl(e);
}
//#endregion
//#region src/media/mdx/Mask/groupSave.en.mdx
function Ll(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Preserving groups on deletion" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "groupSave" }),
			" property controls behavior when deleting characters in a mask with multiple types of special characters."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — preserves group separation on deletion (default)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " — allows characters from different groups to mix on deletion"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"With ",
			a(t.code, { children: "groupSave: true" }),
			" and different groups ahead, the character is not physically deleted but marked with a deletion marker, preserving the mask structure. With ",
			a(t.code, { children: "false" }),
			", characters are deleted completely, which can lead to \"collapsing\" of groups and loss of structure. Only works for fixed (non-rubber) groups of special characters."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Preserve group structure (default) -->\n<Mask\n  mask=\"***-###\"\n  :special=\"['*', '#']\"\n  groupSave\n/>\n\n<!-- Without structure preservation -->\n<Mask\n  mask=\"***-###\"\n  :special=\"['*', '#']\"\n  :groupSave=\"false\"\n/>\n"
		}) })
	] });
}
function Rl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ll, { ...e })
	}) : Ll(e);
}
//#endregion
//#region src/media/mdx/Mask/groupSave.ru.mdx
function zl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Сохранение групп при удалении" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "groupSave" }),
			" управляет поведением при удалении символов в маске с несколькими типами специальных символов."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — сохраняет разделение групп при удалении (по умолчанию)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "false" }), " — позволяет символам из разных групп смешиваться при удалении"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"При ",
			a(t.code, { children: "groupSave: true" }),
			" и наличии разных групп впереди символ не удаляется физически, а помечается маркером удаления, сохраняя структуру маски. При ",
			a(t.code, { children: "false" }),
			" символы удаляются полностью, что может привести к \"схлопыванию\" групп и потере структуры. Работает только для фиксированных (не резиновых) групп специальных символов."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Сохранение структуры групп (по умолчанию) -->\n<Mask\n  mask=\"***-###\"\n  :special=\"['*', '#']\"\n  groupSave\n/>\n\n<!-- Без сохранения структуры -->\n<Mask\n  mask=\"***-###\"\n  :special=\"['*', '#']\"\n  :groupSave=\"false\"\n/>\n"
		}) })
	] });
}
function Bl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zl, { ...e })
	}) : zl(e);
}
//#endregion
//#region src/media/mdx/Mask/mask.en.mdx
function Vl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Mask template" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "mask" }),
			" property defines a template for structured data input with automatic real-time formatting."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "string" }), " — single mask for fixed format"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "string[]" }), " — array of masks to support multiple formats with automatic selection"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"The template uses two types of characters: special characters (default ",
			a(t.code, { children: "*" }),
			") denote positions for user input, while literal characters are inserted automatically and cannot be changed. The component automatically adds separators during typing and restricts input to only allowed characters in corresponding positions. When using an array of masks, the system automatically selects the most suitable template based on entered data. Works together with the validation system through ",
			a(t.code, { children: "pattern" }),
			" and ",
			a(t.code, { children: "check" }),
			" properties. For built-in types (",
			a(t.code, { children: "currency" }),
			", ",
			a(t.code, { children: "number" }),
			", ",
			a(t.code, { children: "date" }),
			"), masks are generated automatically based on regional settings."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Russian phone -->\n<Mask mask=\"+7 *** *** ** **\" />\n\n<!-- Bank card -->\n<Mask mask=\"**** **** **** ****\" />\n\n<!-- Multiple formats -->\n<Mask :mask=\"['+7 *** *** ** **', '8 *** *** ** **']\" />\n"
		}) })
	] });
}
function Hl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vl, { ...e })
	}) : Vl(e);
}
//#endregion
//#region src/media/mdx/Mask/mask.ru.mdx
function Ul(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Шаблон маски" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "mask" }),
			" определяет шаблон для структурированного ввода данных с автоматическим форматированием в реальном времени."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "string" }), " — одиночная маска для фиксированного формата"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "string[]" }), " — массив масок для поддержки множественных форматов с автоматическим выбором"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"В шаблоне используются два типа символов: специальные символы (по умолчанию ",
			a(t.code, { children: "*" }),
			") обозначают позиции для пользовательского ввода, а литеральные символы вставляются автоматически и не могут быть изменены. Компонент автоматически добавляет разделители во время набора и ограничивает ввод только допустимыми символами в соответствующих позициях. При использовании массива масок система автоматически выбирает наиболее подходящий шаблон на основе введённых данных. Работает совместно с системой валидации через свойства ",
			a(t.code, { children: "pattern" }),
			" и ",
			a(t.code, { children: "check" }),
			". Для встроенных типов (",
			a(t.code, { children: "currency" }),
			", ",
			a(t.code, { children: "number" }),
			", ",
			a(t.code, { children: "date" }),
			") маски генерируются автоматически на основе региональных настроек."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Российский телефон -->\n<Mask mask=\"+7 *** *** ** **\" />\n\n<!-- Банковская карта -->\n<Mask mask=\"**** **** **** ****\" />\n\n<!-- Множественные форматы -->\n<Mask :mask=\"['+7 *** *** ** **', '8 *** *** ** **']\" />\n"
		}) })
	] });
}
function Wl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ul, { ...e })
	}) : Ul(e);
}
//#endregion
//#region src/media/mdx/Mask/match.en.mdx
function Gl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Input character validation" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "match" }),
			" property defines a regular expression for checking the validity of entered characters."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "RegExp" }),
				" — regular expression (default ",
				a(t.code, { children: "/[0-9]/" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "string" }), " — string converted to regular expression"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Checks each character during input. Characters that don't match the expression are ignored. Local ",
			a(t.code, { children: "match" }),
			" in group settings (",
			a(t.code, { children: "special[group].match" }),
			") takes priority over global. Differs from ",
			a(t.code, { children: "pattern" }),
			" in that ",
			a(t.code, { children: "match" }),
			" is a simple regular expression check, while ",
			a(t.code, { children: "pattern" }),
			" can be a function with access to mask state."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Digits only (default) -->\n<Mask mask=\"***-***\" />\n\n<!-- HEX characters -->\n<Mask mask=\"***-***\" :match=\"/[A-F0-9]/i\" />\n\n<!-- Different rules for groups -->\n<Mask\n  mask=\"***-###\"\n  match=\"\\\\d\"\n  :special=\"{\n    '*': {},\n    '#': { match: /[A-Z]/ }\n  }\"\n/>\n"
		}) })
	] });
}
function Kl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gl, { ...e })
	}) : Gl(e);
}
//#endregion
//#region src/media/mdx/Mask/match.ru.mdx
function ql(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Валидация вводимых символов" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "match" }),
			" определяет регулярное выражение для проверки допустимости вводимых символов."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "RegExp" }),
				" — регулярное выражение (по умолчанию ",
				a(t.code, { children: "/[0-9]/" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "string" }), " — строка, преобразуется в регулярное выражение"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Проверяет каждый символ при вводе. Символы, не соответствующие выражению, игнорируются. Локальный ",
			a(t.code, { children: "match" }),
			" в настройках группы (",
			a(t.code, { children: "special[группа].match" }),
			") имеет приоритет над глобальным. Отличается от ",
			a(t.code, { children: "pattern" }),
			" тем, что ",
			a(t.code, { children: "match" }),
			" — простая проверка регулярным выражением, а ",
			a(t.code, { children: "pattern" }),
			" может быть функцией с доступом к состоянию маски."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Только цифры (по умолчанию) -->\n<Mask mask=\"***-***\" />\n\n<!-- HEX-символы -->\n<Mask mask=\"***-***\" :match=\"/[A-F0-9]/i\" />\n\n<!-- Разные правила для групп -->\n<Mask\n  mask=\"***-###\"\n  match=\"\\\\d\"\n  :special=\"{\n    '*': {},\n    '#': { match: /[A-Z]/ }\n  }\"\n/>\n"
		}) })
	] });
}
function Jl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ql, { ...e })
	}) : ql(e);
}
//#endregion
//#region src/media/mdx/Mask/numberTypes.en.mdx
function Yl(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Numeric mask types" }),
		"\n",
		a(t.p, { children: "Numeric types in Mask provide specialized formatting and validation for working with numbers, currencies, and financial data." }),
		"\n",
		o(t.p, { children: [
			"Numeric types automatically create rubber masks with variable length, ignoring the ",
			a(t.code, { children: "mask" }),
			" property. Negative values and ",
			a(t.code, { children: "min" }),
			"/",
			a(t.code, { children: "max" }),
			" constraints are supported. Thousand separators and decimal places (via the ",
			a(t.code, { children: "fraction" }),
			" parameter) adapt based on the selected locale."
		] }),
		"\n",
		a(t.h3, { children: "Types" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "number" }), " — simple numeric mask without formatting"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "number-format" }), " — numbers with automatic thousand separators"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "currency" }), " — currency with symbol (₽, $, €) and formatting"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Property fraction" }),
		"\n",
		a(t.p, { children: "Defines the number of decimal places:" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "number" }),
				" — fixed number of digits (e.g., ",
				a(t.code, { children: "2" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — auto-detection from input"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "false" }),
				", ",
				a(t.code, { children: "0" }),
				" — integers only"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Localization" }),
		"\n",
		o(t.p, { children: [
			"Formats adapt via the ",
			a(t.code, { children: "language" }),
			" property:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "ru" }),
				" — ",
				a(t.code, { children: "1 234,56" }),
				" (space and comma)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "en-US" }),
				" — ",
				a(t.code, { children: "1,234.56" }),
				" (comma and dot)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "de" }),
				" — ",
				a(t.code, { children: "1.234,56" }),
				" (dot and comma)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Examples" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Formatted number -->\n<Mask type=\"number-format\" language=\"en-US\" :fraction=\"2\" />\n\n<!-- Currency -->\n<Mask type=\"currency\" currency=\"USD\" language=\"en-US\" />\n\n<!-- Currency without symbol -->\n<Mask type=\"currency\" currency=\"USD\" :currencyHide=\"true\" />\n"
		}) })
	] });
}
function Xl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Yl, { ...e })
	}) : Yl(e);
}
//#endregion
//#region src/media/mdx/Mask/numberTypes.ru.mdx
function Zl(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Числовые типы масок" }),
		"\n",
		a(t.p, { children: "Числовые типы в Mask обеспечивают специализированное форматирование и валидацию для работы с числами, валютами и финансовыми данными." }),
		"\n",
		o(t.p, { children: [
			"Числовые типы автоматически создают резиновые маски переменной длины, игнорируя свойство ",
			a(t.code, { children: "mask" }),
			". Поддерживаются отрицательные значения и ограничения ",
			a(t.code, { children: "min" }),
			"/",
			a(t.code, { children: "max" }),
			". Разделители разрядов и дробной части (параметр ",
			a(t.code, { children: "fraction" }),
			") адаптируются под выбранную локаль."
		] }),
		"\n",
		a(t.h3, { children: "Типы" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "number" }), " — простая числовая маска без форматирования"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "number-format" }), " — числа с автоматическими разделителями разрядов"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "currency" }), " — валюта с символом (₽, $, €) и форматированием"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Свойство fraction" }),
		"\n",
		a(t.p, { children: "Определяет количество знаков после запятой:" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "number" }),
				" — фиксированное количество знаков (например, ",
				a(t.code, { children: "2" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "true" }), " — автоопределение по вводу"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "false" }),
				", ",
				a(t.code, { children: "0" }),
				" — только целые числа"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Локализация" }),
		"\n",
		o(t.p, { children: [
			"Форматы адаптируются через свойство ",
			a(t.code, { children: "language" }),
			":"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "ru" }),
				" — ",
				a(t.code, { children: "1 234,56" }),
				" (пробел и запятая)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "en-US" }),
				" — ",
				a(t.code, { children: "1,234.56" }),
				" (запятая и точка)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "de" }),
				" — ",
				a(t.code, { children: "1.234,56" }),
				" (точка и запятая)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Примеры" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Форматированное число -->\n<Mask type=\"number-format\" language=\"ru\" :fraction=\"2\" />\n\n<!-- Валюта -->\n<Mask type=\"currency\" currency=\"RUB\" language=\"ru\" />\n\n<!-- Валюта без символа -->\n<Mask type=\"currency\" currency=\"USD\" :currencyHide=\"true\" />\n"
		}) })
	] });
}
function Ql(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Zl, { ...e })
	}) : Zl(e);
}
//#endregion
//#region src/media/mdx/Mask/pattern.en.mdx
function $l(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Validation and patterns" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "pattern" }),
			" and ",
			a(t.code, { children: "check" }),
			" properties are designed for managing input validation in the mask."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "pattern" }), " — defines validation patterns for individual mask groups, checking entered values"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "check" }), " — global validation pattern applied after the mask is fully completed"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work sequentially: ",
			a(t.code, { children: "pattern" }),
			" validates entered values at the mask group level, highlighting validation errors after input. Characters are entered into the field, but when they don't match the pattern, an error message is displayed. Each group (defined by special characters) receives its own pattern. After the mask is fully filled, ",
			a(t.code, { children: "check" }),
			" performs final validation of the entire value, providing an additional layer of verification for complex business logic. Both properties are optional and can be used independently or together for multi-level protection against incorrect data."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst phone = ref('')\nconst cardNumber = ref('')\n<\/script>\n\n<template>\n  <!-- Pattern for groups: digits only -->\n  <Mask\n    v-model=\"phone\"\n    mask=\"+7 (***) ***-**-**\"\n    pattern=\"\\\\d\"\n  />\n\n  <!-- Pattern with function for different groups -->\n  <Mask\n    v-model=\"phone\"\n    mask=\"DD/MM/YYYY\"\n    :special=\"{\n      'D': {\n        pattern: (masks) => {\n          const value = masks['D']?.value || ''\n          if (value === '0') return '[1-9]'\n          if (value === '3') return '[0-1]'\n          return '\\\\d'\n        }\n      },\n      'M': {\n        pattern: (masks) => {\n          const value = masks['M']?.value || ''\n          if (value === '0') return '[1-9]'\n          if (value === '1') return '[0-2]'\n          return '\\\\d'\n        }\n      },\n      'Y': { pattern: '\\\\d' }\n    }\"\n  />\n\n  <!-- Check for final validation -->\n  <Mask\n    v-model=\"cardNumber\"\n    mask=\"**** **** **** ****\"\n    pattern=\"\\\\d\"\n    :check=\"(maskData) => {\n      const number = maskData.value.replace(/\\s/g, '')\n      return isValidLuhn(number) ? {} : {\n        validationMessage: 'Invalid card number'\n      }\n    }\"\n  />\n</template>\n"
		}) })
	] });
}
function eu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($l, { ...e })
	}) : $l(e);
}
//#endregion
//#region src/media/mdx/Mask/pattern.ru.mdx
function tu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Валидация и паттерны" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "pattern" }),
			" и ",
			a(t.code, { children: "check" }),
			" предназначены для управления валидацией ввода в маске."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "pattern" }), " — определяет паттерны валидации для отдельных групп маски, проверяя введённые значения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "check" }), " — глобальный паттерн валидации, применяемый после полного заполнения маски"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают последовательно: ",
			a(t.code, { children: "pattern" }),
			" проверяет введённые значения на уровне групп маски, подсвечивая ошибки валидации после ввода. Символы вводятся в поле, но при несоответствии паттерну отображается сообщение об ошибке. Каждая группа (определённая специальными символами) получает свой паттерн. После полного заполнения маски ",
			a(t.code, { children: "check" }),
			" выполняет финальную валидацию всего значения, обеспечивая дополнительный слой проверки для сложной бизнес-логики. Оба свойства опциональны и могут использоваться независимо или совместно для многоуровневой защиты от некорректных данных."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst phone = ref('')\nconst cardNumber = ref('')\n<\/script>\n\n<template>\n  <!-- Pattern для групп: только цифры -->\n  <Mask\n    v-model=\"phone\"\n    mask=\"+7 (***) ***-**-**\"\n    pattern=\"\\\\d\"\n  />\n\n  <!-- Pattern с функцией для разных групп -->\n  <Mask\n    v-model=\"phone\"\n    mask=\"DD/MM/YYYY\"\n    :special=\"{\n      'D': {\n        pattern: (masks) => {\n          const value = masks['D']?.value || ''\n          if (value === '0') return '[1-9]'\n          if (value === '3') return '[0-1]'\n          return '\\\\d'\n        }\n      },\n      'M': {\n        pattern: (masks) => {\n          const value = masks['M']?.value || ''\n          if (value === '0') return '[1-9]'\n          if (value === '1') return '[0-2]'\n          return '\\\\d'\n        }\n      },\n      'Y': { pattern: '\\\\d' }\n    }\"\n  />\n\n  <!-- Check для финальной валидации -->\n  <Mask\n    v-model=\"cardNumber\"\n    mask=\"**** **** **** ****\"\n    pattern=\"\\\\d\"\n    :check=\"(maskData) => {\n      const number = maskData.value.replace(/\\s/g, '')\n      return isValidLuhn(number) ? {} : {\n        validationMessage: 'Неверный номер карты'\n      }\n    }\"\n  />\n</template>\n"
		}) })
	] });
}
function nu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(tu, { ...e })
	}) : tu(e);
}
//#endregion
//#region src/media/mdx/Mask/special.en.mdx
function ru(e) {
	let t = {
		a: "a",
		code: "code",
		em: "em",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Special characters" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "special" }),
			" property defines special characters to denote user input positions in the mask and configure their extended behavior."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "string" }),
				" — single special character (default ",
				a(t.code, { children: "'*'" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "string[]" }), " — array of special characters for different group types"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "MaskSpecialList" }), " — object with extended configuration for each character"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Special characters in the mask template denote positions where users can enter data, unlike literal characters that are inserted automatically." }),
		"\n",
		o(t.p, { children: [
			"When using a simple string (e.g., ",
			a(t.code, { children: "special=\"*\"" }),
			"), all input positions in the mask are restricted by the same validation rules."
		] }),
		"\n",
		o(t.p, { children: [
			"An array of characters (e.g., ",
			a(t.code, { children: "special=\"['*', 'A', '#']\"" }),
			") allows creating different group types with individual constraints: one group for digits, another for letters, a third for special characters."
		] }),
		"\n",
		o(t.p, { children: [
			"Object notation ",
			a(t.code, { children: "MaskSpecialList" }),
			" (see ",
			a(t.a, {
				href: "#maskspeciallist",
				children: "detailed description below"
			}),
			") provides maximum flexibility. Each special character is configured separately with the ability to set default values, rubber groups with variable length, auto-transition characters, and custom validation."
		] }),
		"\n",
		o(t.p, { children: [
			"For built-in types (",
			a(t.code, { children: "currency" }),
			", ",
			a(t.code, { children: "number" }),
			", ",
			a(t.code, { children: "date" }),
			", ",
			a(t.code, { children: "time" }),
			"), the system automatically generates special characters considering regional settings, ignoring the user-defined ",
			a(t.code, { children: "special" }),
			" value."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Simple special character -->\n<Mask mask=\"***-***\" special=\"*\" />\n\n<!-- Multiple group types -->\n<Mask mask=\"AA*-###\" :special=\"['A', '*', '#']\" />\n\n<!-- Extended configuration -->\n<Mask\n  mask=\"***-***\"\n  :special=\"{\n    '*': {\n      pattern: '\\\\d',\n      view: '_',\n      rubber: true,\n      minLength: 2,\n      maxLength: 8,\n      transitionChar: ' '\n    }\n  }\"\n/>\n\n<!-- Groups with default values -->\n<Mask\n  mask=\"DD/MM/YYYY\"\n  :special=\"{\n    'D': { defaultValue: '01', pattern: '\\\\d' },\n    'M': { defaultValue: '01', pattern: '\\\\d' },\n    'Y': { defaultValue: '2024', pattern: '\\\\d' }\n  }\"\n/>\n"
		}) }),
		"\n",
		a(t.h2, { children: "MaskSpecialList" }),
		"\n",
		o(t.p, { children: [
			a(t.code, { children: "MaskSpecialList" }),
			" is an extended configuration object that allows for fine-tuned control over the behavior of each special character in the mask. Each key in the object corresponds to one of the characters defined in the ",
			a(t.code, { children: "special" }),
			" property (or the default ",
			a(t.code, { children: "*" }),
			" character)."
		] }),
		"\n",
		a(t.h3, { children: "MaskSpecialItem Properties" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "defaultValue?: string" }),
				" — ",
				a(t.strong, { children: "initial value" }),
				". Automatically populates the group on initialization. The user can modify it if the ",
				a(t.code, { children: "match" }),
				" rules allow."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "rubber?: boolean" }),
				" — ",
				a(t.strong, { children: "rubber mode" }),
				". Enables dynamic length for the group. In the mask template, such a group is typically represented by one or more identical characters."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "transitionChar?: string | string[]" }),
				" — ",
				a(t.strong, { children: "transition character" }),
				". A specific character (e.g., space or dot) that triggers an immediate focus shift to the next part of the mask upon entry. Only for ",
				a(t.code, { children: "rubber: true" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "minLength?: number" }),
				" — ",
				a(t.strong, { children: "minimum length" }),
				". Used to validate whether the group has been sufficiently filled."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "maxLength?: number" }),
				" — ",
				a(t.strong, { children: "maximum length" }),
				". The limit for expansion in \"rubber\" groups."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "match?: RegExp | string" }),
				" — ",
				a(t.strong, { children: "input filter" }),
				". A regular expression that checks ",
				a(t.em, { children: "each individual" }),
				" character as it is typed. Default: ",
				a(t.code, { children: "[0-9]" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "pattern?: string | Function" }),
				" — ",
				a(t.strong, { children: "group validator" }),
				". A rule for validating the entire accumulated string in the group. Can be a string (regex) or a function receiving mask data."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "view?: string" }),
				" — ",
				a(t.strong, { children: "visual placeholder" }),
				". The character the user sees in empty slots of this group. Default: ",
				a(t.code, { children: "_" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "How to Work with MaskSpecialList" }),
		"\n",
		o(t.p, { children: [
			"For effective use of ",
			a(t.code, { children: "MaskSpecialList" }),
			", follow these simple rules:"
		] }),
		"\n",
		o(t.ol, { children: [
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Character Mapping" }),
				": Every key in the ",
				a(t.code, { children: "MaskSpecialList" }),
				" object must be a character you used in your ",
				a(t.code, { children: "mask" }),
				" template. For example, if the mask is ",
				a(t.code, { children: "AAA-***" }),
				", you can configure group ",
				a(t.code, { children: "A" }),
				" for letters and ",
				a(t.code, { children: "*" }),
				" for digits."
			] }),
			"\n",
			o(t.li, { children: [
				o(t.strong, { children: [
					"Filter Configuration (",
					a(t.code, { children: "match" }),
					")"
				] }),
				": Use ",
				a(t.code, { children: "match" }),
				" to restrict the types of characters a user can physically type. This stops letters from being entered where numbers are expected at the earliest possible stage."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Use Rubber Groups" }),
				": If a field's length is unknown in advance (like a phone extension), set ",
				a(t.code, { children: "rubber: true" }),
				". This allows the mask to expand as the user types."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Manage Transitions" }),
				": For a better user experience, define a ",
				a(t.code, { children: "transitionChar" }),
				" (like a space or dot). This allows users to manually finish the current group and jump to the next one without filling the entire length."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Default Values" }),
				": If part of the data is frequently repeated (like the current year), use ",
				a(t.code, { children: "defaultValue" }),
				". This reduces the number of actions required from the user."
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Example" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst value = ref('')\n<\/script>\n\n<template>\n  <!-- Example of a rubber mask for an IP address -->\n  <Mask\n    v-model=\"value\"\n    mask=\"*.#.#.#\"\n    :special=\"{\n      '*': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\\\d{1,3}' },\n      '#': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\\\d{1,3}' }\n    }\"\n  />\n\n  <!-- Example of a mask with different group types and default values -->\n  <Mask\n    mask=\"AAA-****\"\n    :special=\"{\n      'A': { match: /[A-Z]/, view: 'A' },\n      '*': { defaultValue: '0000', match: /[0-9]/, view: '0' }\n    }\"\n  />\n</template>\n"
		}) })
	] });
}
function iu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ru, { ...e })
	}) : ru(e);
}
//#endregion
//#region src/media/mdx/Mask/special.ru.mdx
function au(e) {
	let t = {
		a: "a",
		code: "code",
		em: "em",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Специальные символы" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "special" }),
			" определяет специальные символы для обозначения мест пользовательского ввода в маске и настройку их расширенного поведения."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "string" }),
				" — одиночный специальный символ (по умолчанию ",
				a(t.code, { children: "'*'" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "string[]" }), " — массив специальных символов для разных типов групп"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "MaskSpecialList" }), " — объект с расширенной конфигурацией каждого символа"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Специальные символы в шаблоне маски обозначают позиции, где пользователь может вводить данные, в отличие от литеральных символов, которые вставляются автоматически." }),
		"\n",
		o(t.p, { children: [
			"При использовании простой строки (например, ",
			a(t.code, { children: "special=\"*\"" }),
			") все места ввода в маске ограничиваются одинаковыми правилами валидации."
		] }),
		"\n",
		o(t.p, { children: [
			"Массив символов (например, ",
			a(t.code, { children: "special=\"['*', 'A', '#']\"" }),
			") позволяет создавать разные типы групп с индивидуальными ограничениями: одна группа для цифр, другая для букв, третья для специальных символов."
		] }),
		"\n",
		o(t.p, { children: [
			"Объектная нотация ",
			a(t.code, { children: "MaskSpecialList" }),
			" (см. ",
			a(t.a, {
				href: "#maskspeciallist",
				children: "детальное описание ниже"
			}),
			") предоставляет максимальную гибкость. Каждый специальный символ настраивается отдельно с возможностью задать значения по умолчанию, резиновые группы переменной длины, символы автоперехода и кастомную валидацию."
		] }),
		"\n",
		o(t.p, { children: [
			"Для встроенных типов (",
			a(t.code, { children: "currency" }),
			", ",
			a(t.code, { children: "number" }),
			", ",
			a(t.code, { children: "date" }),
			", ",
			a(t.code, { children: "time" }),
			") система автоматически генерирует специальные символы с учётом региональных настроек, игнорируя пользовательское значение ",
			a(t.code, { children: "special" }),
			"."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Простой специальный символ -->\n<Mask mask=\"***-***\" special=\"*\" />\n\n<!-- Несколько типов групп -->\n<Mask mask=\"AA*-###\" :special=\"['A', '*', '#']\" />\n\n<!-- Расширенная конфигурация -->\n<Mask\n  mask=\"***-***\"\n  :special=\"{\n    '*': {\n      pattern: '\\\\d',\n      view: '_',\n      rubber: true,\n      minLength: 2,\n      maxLength: 8,\n      transitionChar: ' '\n    }\n  }\"\n/>\n\n<!-- Группы с значениями по умолчанию -->\n<Mask\n  mask=\"DD/MM/YYYY\"\n  :special=\"{\n    'D': { defaultValue: '01', pattern: '\\\\d' },\n    'M': { defaultValue: '01', pattern: '\\\\d' },\n    'Y': { defaultValue: '2024', pattern: '\\\\d' }\n  }\"\n/>\n"
		}) }),
		"\n",
		a(t.h2, { children: "MaskSpecialList" }),
		"\n",
		o(t.p, { children: [
			a(t.code, { children: "MaskSpecialList" }),
			" — это объект расширенной конфигурации, который позволяет детально настроить поведение каждого специального символа в маске. Каждый ключ в объекте соответствует одному из символов, определённых в свойстве ",
			a(t.code, { children: "special" }),
			" (или символу ",
			a(t.code, { children: "*" }),
			" по умолчанию)."
		] }),
		"\n",
		a(t.h3, { children: "Свойства MaskSpecialItem" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "defaultValue?: string" }),
				" — ",
				a(t.strong, { children: "начальное значение" }),
				". Автоматически заполняет группу при инициализации. Пользователь может изменить его, если это разрешено правилами ",
				a(t.code, { children: "match" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "rubber?: boolean" }),
				" — ",
				a(t.strong, { children: "резиновый режим" }),
				". Позволяет группе изменять свою длину. В шаблоне маски такая группа обычно представлена одним или несколькими одинаковыми символами."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "transitionChar?: string | string[]" }),
				" — ",
				a(t.strong, { children: "символ перехода" }),
				". Конкретный символ (например, пробел или точка), при вводе которого фокус немедленно переходит к следующей части маски. Только для ",
				a(t.code, { children: "rubber: true" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "minLength?: number" }),
				" — ",
				a(t.strong, { children: "минимальная длина" }),
				". Используется для валидации полноты заполнения группы."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "maxLength?: number" }),
				" — ",
				a(t.strong, { children: "максимальная длина" }),
				". Лимит расширения для «резиновых» групп."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "match?: RegExp | string" }),
				" — ",
				a(t.strong, { children: "фильтр ввода" }),
				". Регулярное выражение, проверяющее ",
				a(t.em, { children: "каждый отдельный" }),
				" символ при нажатии клавиши. По умолчанию: ",
				a(t.code, { children: "[0-9]" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "pattern?: string | Function" }),
				" — ",
				a(t.strong, { children: "валидатор группы" }),
				". Правило для проверки всей накопленной строки в группе. Может быть строкой (regex) или функцией, принимающей данные маски."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "view?: string" }),
				" — ",
				a(t.strong, { children: "визуальный плейсхолдер" }),
				". Тот символ, который видит пользователь в пустых ячейках этой группы. По умолчанию: ",
				a(t.code, { children: "_" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Как работать с MaskSpecialList" }),
		"\n",
		o(t.p, { children: [
			"Для эффективного использования ",
			a(t.code, { children: "MaskSpecialList" }),
			" придерживайтесь следующих правил:"
		] }),
		"\n",
		o(t.ol, { children: [
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Сопоставление символов" }),
				": Каждый ключ в объекте ",
				a(t.code, { children: "MaskSpecialList" }),
				" должен быть символом, который вы использовали в шаблоне ",
				a(t.code, { children: "mask" }),
				". Например, если маска ",
				a(t.code, { children: "AAA-***" }),
				", вы можете настроить группу ",
				a(t.code, { children: "A" }),
				" для букв и ",
				a(t.code, { children: "*" }),
				" для цифр."
			] }),
			"\n",
			o(t.li, { children: [
				o(t.strong, { children: [
					"Настройка фильтров (",
					a(t.code, { children: "match" }),
					")"
				] }),
				": Используйте ",
				a(t.code, { children: "match" }),
				" для ограничения типов символов, которые пользователь в принципе может нажать. Это предотвращает ввод букв там, где нужны цифры, на самом раннем этапе."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Использование резиновых групп" }),
				": Если длина поля заранее неизвестна (например, добавочный номер телефона), установите ",
				a(t.code, { children: "rubber: true" }),
				". Это позволит маске расширяться по мере ввода."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Управление переходом" }),
				": Для удобства пользователя задавайте ",
				a(t.code, { children: "transitionChar" }),
				" (например, пробел или точку). Это позволяет пользователю вручную завершить ввод в текущей группе и переключиться на следующую, не дожидаясь заполнения всей длины."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Значения по умолчанию" }),
				": Если часть данных часто повторяется (например, текущий год), используйте ",
				a(t.code, { children: "defaultValue" }),
				". Это уменьшит количество действий пользователя."
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Пример" }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst value = ref('')\n<\/script>\n\n<template>\n  <!-- Пример резиновой маски для IP-адреса -->\n  <Mask\n    v-model=\"value\"\n    mask=\"*.#.#.#\"\n    :special=\"{\n      '*': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\\\d{1,3}' },\n      '#': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\\\d{1,3}' }\n    }\"\n  />\n\n  <!-- Пример маски с разными типами групп и значениями по умолчанию -->\n  <Mask\n    mask=\"AAA-****\"\n    :special=\"{\n      'A': { match: /[A-Z]/, view: 'A' },\n      '*': { defaultValue: '0000', match: /[0-9]/, view: '0' }\n    }\"\n  />\n</template>\n"
		}) })
	] });
}
function ou(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(au, { ...e })
	}) : au(e);
}
//#endregion
//#region src/media/mdx/Mask/type.en.mdx
function su(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Mask types" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "type" }),
			" property defines the mask operation mode and automatically generates the appropriate structure for different data types."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'text'" }), " — basic text mask (default)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "'number'" }),
				", ",
				a(t.code, { children: "'number-format'" }),
				", ",
				a(t.code, { children: "'currency'" }),
				" — numeric types with validation and localization"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "'date'" }),
				", ",
				a(t.code, { children: "'datetime'" }),
				", ",
				a(t.code, { children: "'time'" }),
				", ",
				a(t.code, { children: "'year'" }),
				", ",
				a(t.code, { children: "'month'" }),
				", ",
				a(t.code, { children: "'day'" }),
				", ",
				a(t.code, { children: "'hour-minute'" }),
				" — date and time types"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"When using ",
			a(t.code, { children: "text" }),
			", explicit structure specification via the ",
			a(t.code, { children: "mask" }),
			" property is required. Specialized numeric types automatically create rubber masks with thousand separators, validation, and formatting according to regional settings (",
			a(t.code, { children: "language" }),
			"). Date types generate masks according to local formats with validation of entered values correctness. When a specialized type is activated, the ",
			a(t.code, { children: "mask" }),
			" property is ignored, and the mask structure is formed automatically based on ",
			a(t.code, { children: "language" }),
			", ",
			a(t.code, { children: "currency" }),
			", and ",
			a(t.code, { children: "fraction" }),
			"."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Text mask -->\n<Mask mask=\"+1 (***) ***-****\" type=\"text\" />\n\n<!-- Currency mask -->\n<Mask type=\"currency\" currency=\"USD\" language=\"en-US\" />\n\n<!-- Date mask -->\n<Mask type=\"date\" language=\"en-US\" />\n"
		}) })
	] });
}
function cu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(su, { ...e })
	}) : su(e);
}
//#endregion
//#region src/media/mdx/Mask/type.ru.mdx
function lu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Типы масок" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "type" }),
			" определяет режим работы маски и автоматически генерирует соответствующую структуру для различных типов данных."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'text'" }), " — базовая текстовая маска (по умолчанию)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "'number'" }),
				", ",
				a(t.code, { children: "'number-format'" }),
				", ",
				a(t.code, { children: "'currency'" }),
				" — числовые типы с валидацией и локализацией"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "'date'" }),
				", ",
				a(t.code, { children: "'datetime'" }),
				", ",
				a(t.code, { children: "'time'" }),
				", ",
				a(t.code, { children: "'year'" }),
				", ",
				a(t.code, { children: "'month'" }),
				", ",
				a(t.code, { children: "'day'" }),
				", ",
				a(t.code, { children: "'hour-minute'" }),
				" — типы дат и времени"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"При использовании ",
			a(t.code, { children: "text" }),
			" требуется явное указание структуры через свойство ",
			a(t.code, { children: "mask" }),
			". Специализированные числовые типы автоматически создают резиновые маски с разделителями разрядов, валидацией и форматированием согласно региональным настройкам (",
			a(t.code, { children: "language" }),
			"). Типы дат генерируют маски по локальным форматам с проверкой корректности введённых значений. При активации специализированного типа свойство ",
			a(t.code, { children: "mask" }),
			" игнорируется, а структура маски формируется автоматически на основе ",
			a(t.code, { children: "language" }),
			", ",
			a(t.code, { children: "currency" }),
			" и ",
			a(t.code, { children: "fraction" }),
			"."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Текстовая маска -->\n<Mask mask=\"+7 (***) ***-**-**\" type=\"text\" />\n\n<!-- Валютная маска -->\n<Mask type=\"currency\" currency=\"RUB\" language=\"ru\" />\n\n<!-- Маска даты -->\n<Mask type=\"date\" language=\"ru\" />\n"
		}) })
	] });
}
function uu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(lu, { ...e })
	}) : lu(e);
}
//#endregion
//#region src/media/mdx/Mask/visible.en.mdx
function du(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Mask visibility control" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "visible" }),
			" and ",
			a(t.code, { children: "visiblePartly" }),
			" properties are designed for managing the display of mask placeholder characters and overall component visibility."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "visible" }), " — controls complete visibility of the mask component"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "visiblePartly" }), " — controls partial visibility of placeholder characters"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: when ",
			a(t.code, { children: "visible: false" }),
			", the mask component is completely hidden, including all placeholder characters. When ",
			a(t.code, { children: "visiblePartly: true" }),
			" is activated, only filled mask positions are displayed, hiding empty placeholder characters. If ",
			a(t.code, { children: "visible" }),
			" is set to ",
			a(t.code, { children: "false" }),
			", the ",
			a(t.code, { children: "visiblePartly" }),
			" property is ignored. Visibility changes don't affect validation logic and data processing, allowing creation of adaptive interfaces with conditional or abbreviated mask display."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst showMask = ref(true)\nconst compactMode = ref(false)\n<\/script>\n\n<template>\n  <!-- Complete mask hiding -->\n  <Mask\n    mask=\"+1 (***) ***-****\"\n    :visible=\"false\"\n  />\n\n  <!-- Show only filled positions -->\n  <Mask\n    mask=\"+1 (***) ***-****\"\n    :visiblePartly=\"true\"\n  />\n\n  <!-- Conditional display with partial visibility -->\n  <Mask\n    mask=\"+1 (***) ***-****\"\n    :visible=\"showMask\"\n    :visiblePartly=\"compactMode\"\n  />\n</template>\n"
		}) })
	] });
}
function fu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(du, { ...e })
	}) : du(e);
}
//#endregion
//#region src/media/mdx/Mask/visible.ru.mdx
function pu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление видимостью маски" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "visible" }),
			" и ",
			a(t.code, { children: "visiblePartly" }),
			" предназначены для управления отображением символов-заполнителей маски и видимостью компонента в целом."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "visible" }), " — управляет полной видимостью компонента маски"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "visiblePartly" }), " — управляет частичной видимостью символов-заполнителей"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: при ",
			a(t.code, { children: "visible: false" }),
			" компонент маски полностью скрыт, включая все символы-заполнители. При активации ",
			a(t.code, { children: "visiblePartly: true" }),
			" отображаются только заполненные позиции маски, скрывая пустые символы-заполнители. Если ",
			a(t.code, { children: "visible" }),
			" установлен в ",
			a(t.code, { children: "false" }),
			", то свойство ",
			a(t.code, { children: "visiblePartly" }),
			" игнорируется. Изменение видимости не влияет на логику валидации и обработку данных, позволяя создавать адаптивные интерфейсы с условным или сокращённым отображением маски."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst showMask = ref(true)\nconst compactMode = ref(false)\n<\/script>\n\n<template>\n  <!-- Полное скрытие маски -->\n  <Mask\n    mask=\"+7 (***) ***-**-**\"\n    :visible=\"false\"\n  />\n\n  <!-- Показ только заполненных позиций -->\n  <Mask\n    mask=\"+7 (***) ***-**-**\"\n    :visiblePartly=\"true\"\n  />\n\n  <!-- Условное отображение с частичной видимостью -->\n  <Mask\n    mask=\"+7 (***) ***-**-**\"\n    :visible=\"showMask\"\n    :visiblePartly=\"compactMode\"\n  />\n</template>\n"
		}) })
	] });
}
function mu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(pu, { ...e })
	}) : pu(e);
}
//#endregion
//#region src/media/mdx/Mask/wikiMdxMask.ts
var hu = {
	name: "Mask",
	descriptions: {
		basic: {
			en: El,
			ru: Ol
		},
		dateTypes: {
			en: Al,
			ru: Ml
		},
		expose: {
			en: Pl,
			ru: Il
		},
		groupSave: {
			en: Rl,
			ru: Bl
		},
		mask: {
			en: Hl,
			ru: Wl
		},
		match: {
			en: Kl,
			ru: Jl
		},
		numberTypes: {
			en: Xl,
			ru: Ql
		},
		pattern: {
			en: eu,
			ru: nu
		},
		special: {
			en: iu,
			ru: ou
		},
		type: {
			en: cu,
			ru: uu
		},
		visible: {
			en: fu,
			ru: mu
		}
	}
};
//#endregion
//#region src/media/mdx/Menu/ajax.en.mdx
function gu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "AJAX Menu Loading" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "ajax" }),
			", ",
			a(t.code, { children: "request" }),
			", and ",
			a(t.code, { children: "cache" }),
			" properties are designed for managing asynchronous loading and caching of menu data."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "ajax" }), " — enables remote data loading mode (URL string or function)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "request" }),
				" — object of type ",
				a(t.code, { children: "ApiFetch" }),
				" with HTTP request settings"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "cache" }), " — enables caching of loaded menu items"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Properties work together: if ",
			a(t.code, { children: "ajax" }),
			" is not specified or equals ",
			a(t.code, { children: "false" }),
			", the menu uses local data. When ",
			a(t.code, { children: "ajax" }),
			" is activated (URL string or ",
			a(t.code, { children: "true" }),
			"), ",
			a(t.code, { children: "request" }),
			" defines HTTP request parameters (method, headers, body), and ",
			a(t.code, { children: "cache" }),
			" manages data persistence. When ",
			a(t.code, { children: "cache" }),
			" is enabled, repeated menu openings use saved data instead of new requests, reducing server load."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n  <!-- Loading with URL -->\n  <Menu\n    v-model:open=\"isOpen\"\n    ajax=\"/api/menu-items\"\n    :cache=\"true\"\n  />\n\n  <!-- With request settings -->\n  <Menu\n    v-model:open=\"isOpen\"\n    ajax=\"/api/menu\"\n    :request=\"{\n      method: 'POST',\n      headers: { 'X-Custom': 'value' },\n      auth: true\n    }\"\n    :cache=\"true\"\n  />\n\n  <!-- Loading function -->\n  <Menu\n    v-model:open=\"isOpen\"\n    :ajax=\"async () => {\n      const response = await fetch('/api/menu')\n      return response.json()\n    }\"\n  />\n</template>\n"
		}) })
	] });
}
function _u(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(gu, { ...e })
	}) : gu(e);
}
//#endregion
//#region src/media/mdx/Menu/ajax.ru.mdx
function vu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "AJAX загрузка меню" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "ajax" }),
			", ",
			a(t.code, { children: "request" }),
			" и ",
			a(t.code, { children: "cache" }),
			" предназначены для управления асинхронной загрузкой и кэшированием данных меню."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "ajax" }), " — включает режим удалённой загрузки данных (строка URL или функция)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "request" }),
				" — объект типа ",
				a(t.code, { children: "ApiFetch" }),
				" с настройками HTTP-запроса"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "cache" }), " — включает кэширование загруженных элементов меню"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойства работают совместно: если ",
			a(t.code, { children: "ajax" }),
			" не задан или равен ",
			a(t.code, { children: "false" }),
			", меню использует локальные данные. При активации ",
			a(t.code, { children: "ajax" }),
			" (строка URL или ",
			a(t.code, { children: "true" }),
			"), ",
			a(t.code, { children: "request" }),
			" определяет параметры HTTP-запроса (метод, заголовки, тело), а ",
			a(t.code, { children: "cache" }),
			" управляет сохранением данных. При включённом ",
			a(t.code, { children: "cache" }),
			" повторные открытия меню используют сохранённые данные вместо новых запросов, снижая нагрузку на сервер."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n  <!-- Загрузка с URL -->\n  <Menu\n    v-model:open=\"isOpen\"\n    ajax=\"/api/menu-items\"\n    :cache=\"true\"\n  />\n\n  <!-- С настройками запроса -->\n  <Menu\n    v-model:open=\"isOpen\"\n    ajax=\"/api/menu\"\n    :request=\"{\n      method: 'POST',\n      headers: { 'X-Custom': 'value' },\n      auth: true\n    }\"\n    :cache=\"true\"\n  />\n\n  <!-- Функция загрузки -->\n  <Menu\n    v-model:open=\"isOpen\"\n    :ajax=\"async () => {\n      const response = await fetch('/api/menu')\n      return response.json()\n    }\"\n  />\n</template>\n"
		}) })
	] });
}
function yu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vu, { ...e })
	}) : vu(e);
}
//#endregion
//#region src/media/mdx/Menu/event.updateValue.en.mdx
function bu(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "updateValue" }) }),
		"\n",
		a(t.p, { children: "Event fires when the selected value in the menu changes." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value?: NumberOrStringOrBoolean" }), " — new selected value"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleUpdateValue = (value) => {\n  console.log('New value:', value)\n  console.log('Value type:', typeof value)\n}\n<\/script>\n\n<template>\n  <Menu\n    :isSelectedByValue=\"true\"\n    @updateValue=\"handleUpdateValue\"\n  >\n    <template #default>\n      <MenuItem value=\"item1\">Menu Item 1</MenuItem>\n      <MenuItem value=\"item2\">Menu Item 2</MenuItem>\n      <MenuItem value=\"item3\">Menu Item 3</MenuItem>\n    </template>\n  </Menu>\n</template>\n"
		}) })
	] });
}
function xu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bu, { ...e })
	}) : bu(e);
}
//#endregion
//#region src/media/mdx/Menu/event.updateValue.ru.mdx
function Su(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "updateValue" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении выбранного значения в меню." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value?: NumberOrStringOrBoolean" }), " — новое выбранное значение"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleUpdateValue = (value) => {\n  console.log('Новое значение:', value)\n  console.log('Тип значения:', typeof value)\n}\n<\/script>\n\n<template>\n  <Menu\n    :isSelectedByValue=\"true\"\n    @updateValue=\"handleUpdateValue\"\n  >\n    <template #default>\n      <MenuItem value=\"item1\">Пункт меню 1</MenuItem>\n      <MenuItem value=\"item2\">Пункт меню 2</MenuItem>\n      <MenuItem value=\"item3\">Пункт меню 3</MenuItem>\n    </template>\n  </Menu>\n</template>\n"
		}) })
	] });
}
function Cu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Su, { ...e })
	}) : Su(e);
}
//#endregion
//#region src/media/mdx/Menu/expose.navigation.en.mdx
function wu(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "previous(): void" }),
			" — Moves selection to the previous menu item based on the ",
			a(t.code, { children: "step" }),
			" property value."
		] }),
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "next(): void" }),
			" — Moves selection to the next menu item based on the ",
			a(t.code, { children: "step" }),
			" property value."
		] }),
		"\n"
	] });
}
function Tu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wu, { ...e })
	}) : wu(e);
}
//#endregion
//#region src/media/mdx/Menu/expose.navigation.ru.mdx
function Eu(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "previous(): void" }),
			" — Перемещает выбор на предыдущий элемент меню на основе значения свойства ",
			a(t.code, { children: "step" }),
			"."
		] }),
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "next(): void" }),
			" — Перемещает выбор на следующий элемент меню на основе значения свойства ",
			a(t.code, { children: "step" }),
			"."
		] }),
		"\n"
	] });
}
function Du(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Eu, { ...e })
	}) : Eu(e);
}
//#endregion
//#region src/media/mdx/Menu/menu.en.mdx
function Ou(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating popup menus, dropdown lists, and context menus with navigation and action support." }),
		"\n",
		a(t.p, { children: "Menu combines the functionality of Window (positioning and visibility management), Bars (action and tool panel), and List (displaying items, groups, and nested submenus). The component provides keyboard navigation, nested structure support, asynchronous data loading, optimized rendering mode for large lists, and full control over open/close state." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Integration of Window, Bars, and List components" }),
			"\n",
			a(t.li, { children: "Keyboard navigation through menu items" }),
			"\n",
			a(t.li, { children: "Nested submenus with unlimited depth" }),
			"\n",
			a(t.li, { children: "Asynchronous data loading via AJAX" }),
			"\n",
			a(t.li, { children: "Lite mode for optimizing large lists (liteThreshold)" }),
			"\n",
			a(t.li, { children: "Search and filtering of menu items" }),
			"\n",
			a(t.li, { children: "Management of selected items (selected)" }),
			"\n",
			a(t.li, { children: "Flexible positioning relative to anchor" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Navigation dropdown menus" }),
			"\n",
			a(t.li, { children: "Right-click context menus" }),
			"\n",
			a(t.li, { children: "Action and operation menus" }),
			"\n",
			a(t.li, { children: "Selectors with search and filtering" }),
			"\n",
			a(t.li, { children: "Multi-level navigation menus" }),
			"\n",
			a(t.li, { children: "Menus with dynamic data loading" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\nconst menuItems = ref([\n  { label: 'Create', value: 'create', icon: 'add' },\n  { label: 'Edit', value: 'edit', icon: 'edit' },\n  { label: 'Delete', value: 'delete', icon: 'delete' },\n  {\n    label: 'Export',\n    value: 'export',\n    children: [\n      { label: 'PDF', value: 'pdf' },\n      { label: 'Excel', value: 'excel' },\n      { label: 'CSV', value: 'csv' }\n    ]\n  }\n])\n\nconst handleClick = (value) => {\n  console.log('Selected item:', value)\n  isOpen.value = false\n}\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Open menu</button>\n\n  <Menu\n    v-model:open=\"isOpen\"\n    :list=\"menuItems\"\n    @click=\"handleClick\"\n  >\n    <template #control=\"{ onclick }\">\n      <button @click=\"onclick\">Actions</button>\n    </template>\n  </Menu>\n</template>\n"
		}) })
	] });
}
function ku(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ou, { ...e })
	}) : Ou(e);
}
//#endregion
//#region src/media/mdx/Menu/menu.ru.mdx
function Au(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания всплывающих меню, выпадающих списков и контекстных меню с поддержкой навигации и действий." }),
		"\n",
		a(t.p, { children: "Menu объединяет функциональность Window (позиционирование и управление видимостью), Bars (панель действий и инструментов) и List (отображение пунктов, групп и вложенных подменю). Компонент обеспечивает клавиатурную навигацию, поддержку вложенной структуры, асинхронную загрузку данных, режим оптимизированного рендеринга для больших списков и полный контроль над состоянием открытия/закрытия." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Интеграция Window, Bars и List компонентов" }),
			"\n",
			a(t.li, { children: "Клавиатурная навигация по пунктам меню" }),
			"\n",
			a(t.li, { children: "Вложенные подменю с неограниченной глубиной" }),
			"\n",
			a(t.li, { children: "Асинхронная загрузка данных через AJAX" }),
			"\n",
			a(t.li, { children: "Режим lite для оптимизации больших списков (liteThreshold)" }),
			"\n",
			a(t.li, { children: "Поиск и фильтрация пунктов меню" }),
			"\n",
			a(t.li, { children: "Управление выбранными элементами (selected)" }),
			"\n",
			a(t.li, { children: "Гибкое позиционирование относительно якоря" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Выпадающие меню навигации" }),
			"\n",
			a(t.li, { children: "Контекстные меню по правому клику" }),
			"\n",
			a(t.li, { children: "Меню действий и операций" }),
			"\n",
			a(t.li, { children: "Селекторы с поиском и фильтрацией" }),
			"\n",
			a(t.li, { children: "Многоуровневые навигационные меню" }),
			"\n",
			a(t.li, { children: "Меню с динамической загрузкой данных" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\nconst menuItems = ref([\n  { label: 'Создать', value: 'create', icon: 'add' },\n  { label: 'Редактировать', value: 'edit', icon: 'edit' },\n  { label: 'Удалить', value: 'delete', icon: 'delete' },\n  {\n    label: 'Экспорт',\n    value: 'export',\n    children: [\n      { label: 'PDF', value: 'pdf' },\n      { label: 'Excel', value: 'excel' },\n      { label: 'CSV', value: 'csv' }\n    ]\n  }\n])\n\nconst handleClick = (value) => {\n  console.log('Выбран пункт:', value)\n  isOpen.value = false\n}\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Открыть меню</button>\n\n  <Menu\n    v-model:open=\"isOpen\"\n    :list=\"menuItems\"\n    @click=\"handleClick\"\n  >\n    <template #control=\"{ onclick }\">\n      <button @click=\"onclick\">Действия</button>\n    </template>\n  </Menu>\n</template>\n"
		}) })
	] });
}
function ju(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Au, { ...e })
	}) : Au(e);
}
//#endregion
//#region src/media/mdx/Menu/navigation.en.mdx
function Mu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Menu item navigation" }),
		"\n",
		o(t.p, { children: [
			"Methods ",
			a(t.code, { children: "previous()" }),
			" and ",
			a(t.code, { children: "next()" }),
			" are designed for programmatic movement through menu items based on current selection and the ",
			a(t.code, { children: "step" }),
			" property."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Methods:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "previous()" }),
				" — moves selection to the previous item (backwards by ",
				a(t.code, { children: "step" }),
				" positions)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "next()" }),
				" — moves selection to the next item (forwards by ",
				a(t.code, { children: "step" }),
				" positions)"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "step" }), " — number of items to skip during navigation (default: 1)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"The methods work together with reactive ",
			a(t.code, { children: "selected" }),
			" state: calling ",
			a(t.code, { children: "previous()" }),
			" or ",
			a(t.code, { children: "next()" }),
			" automatically calculates the new position relative to the currently selected item. If no item is selected, the methods select the first available item. When reaching list boundaries (first or last item), navigation stops at the boundary item, preventing overflow beyond the list."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst menuRef = ref()\nconst selected = ref('item2')\n<\/script>\n\n<template>\n  <!-- Call via ref -->\n  <button @click=\"menuRef?.previous()\">Previous</button>\n  <button @click=\"menuRef?.next()\">Next</button>\n\n  <Menu\n    ref=\"menuRef\"\n    v-model:selected=\"selected\"\n    :list=\"[\n      { label: 'Item 1', value: 'item1' },\n      { label: 'Item 2', value: 'item2' },\n      { label: 'Item 3', value: 'item3' }\n    ]\"\n    :step=\"1\"\n  />\n\n  <!-- Navigation in control slot -->\n  <Menu v-model:selected=\"selected\" :list=\"items\">\n    <template #control=\"{ previous, next, selectedNames }\">\n      <button @click=\"previous\">◀</button>\n      <span>{{ selectedNames[0] }}</span>\n      <button @click=\"next\">▶</button>\n    </template>\n  </Menu>\n\n  <!-- With custom step -->\n  <Menu\n    ref=\"menuRef\"\n    v-model:selected=\"selected\"\n    :list=\"items\"\n    :step=\"2\"\n  />\n</template>\n"
		}) })
	] });
}
function Nu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Mu, { ...e })
	}) : Mu(e);
}
//#endregion
//#region src/media/mdx/Menu/navigation.ru.mdx
function Pu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Навигация по элементам меню" }),
		"\n",
		o(t.p, { children: [
			"Методы ",
			a(t.code, { children: "previous()" }),
			" и ",
			a(t.code, { children: "next()" }),
			" предназначены для программного перемещения по элементам меню на основе текущего выбора и свойства ",
			a(t.code, { children: "step" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Методы:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "previous()" }),
				" — перемещает выбор на предыдущий элемент (назад на ",
				a(t.code, { children: "step" }),
				" позиций)"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "next()" }),
				" — перемещает выбор на следующий элемент (вперед на ",
				a(t.code, { children: "step" }),
				" позиций)"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "step" }), " — количество элементов для пропуска при навигации (по умолчанию: 1)"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Методы работают совместно с реактивным состоянием ",
			a(t.code, { children: "selected" }),
			": при вызове ",
			a(t.code, { children: "previous()" }),
			" или ",
			a(t.code, { children: "next()" }),
			" происходит автоматический расчёт новой позиции относительно текущего выделенного элемента. Если элемент не выбран, методы выбирают первый доступный элемент. При достижении границ списка (первый или последний элемент) навигация останавливается на граничном элементе, предотвращая выход за пределы списка."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst menuRef = ref()\nconst selected = ref('item2')\n<\/script>\n\n<template>\n  <!-- Вызов через ref -->\n  <button @click=\"menuRef?.previous()\">Назад</button>\n  <button @click=\"menuRef?.next()\">Вперед</button>\n\n  <Menu\n    ref=\"menuRef\"\n    v-model:selected=\"selected\"\n    :list=\"[\n      { label: 'Элемент 1', value: 'item1' },\n      { label: 'Элемент 2', value: 'item2' },\n      { label: 'Элемент 3', value: 'item3' }\n    ]\"\n    :step=\"1\"\n  />\n\n  <!-- Навигация в слоте control -->\n  <Menu v-model:selected=\"selected\" :list=\"items\">\n    <template #control=\"{ previous, next, selectedNames }\">\n      <button @click=\"previous\">◀</button>\n      <span>{{ selectedNames[0] }}</span>\n      <button @click=\"next\">▶</button>\n    </template>\n  </Menu>\n\n  <!-- С пользовательским шагом -->\n  <Menu\n    ref=\"menuRef\"\n    v-model:selected=\"selected\"\n    :list=\"items\"\n    :step=\"2\"\n  />\n</template>\n"
		}) })
	] });
}
function Fu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Pu, { ...e })
	}) : Pu(e);
}
//#endregion
//#region src/media/mdx/Menu/slots.en.mdx
function Iu(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "title(props: MenuControlItem): any" }), " — Slot for placing the menu window title."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "footer(props: MenuControlItem): any" }), " — Slot for placing content in the bottom part of the menu window."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "contextTop(props: MenuControlItem): any" }), " — Slot for placing contextual area above the menu list."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "contextBottom(props: MenuControlItem): any" }), " — Slot for placing contextual area below the menu list."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "MenuControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "loading: Ref<boolean>" }), " — reactive state of menu data loading."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — reactive state of menu open/close."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "isSelected: ComputedRef<boolean>" }), " — presence of selected items."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "selectedList: Ref<any[]>" }), " — list of selected items."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "selectedNames: Ref<string[]>" }), " — labels of selected items."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "selectedValues: Ref<any[]>" }), " — values of selected items."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onclick: (event) => Promise<void>" }), " — click handler for opening/closing menu."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "oncontextmenu: (event) => Promise<void>" }), " — context menu handler."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Lu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Iu, { ...e })
	}) : Iu(e);
}
//#endregion
//#region src/media/mdx/Menu/slots.ru.mdx
function Ru(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "title(props: MenuControlItem): any" }), " — Слот для размещения заголовка окна меню."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "footer(props: MenuControlItem): any" }), " — Слот для размещения содержимого в нижней части окна меню."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "contextTop(props: MenuControlItem): any" }), " — Слот для размещения контекстной области над списком меню."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "contextBottom(props: MenuControlItem): any" }), " — Слот для размещения контекстной области под списком меню."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "MenuControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "loading: Ref<boolean>" }), " — состояние загрузки данных меню."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — состояние открытия меню."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "isSelected: ComputedRef<boolean>" }), " — наличие выбранных элементов."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "selectedList: Ref<any[]>" }), " — список выбранных элементов."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "selectedNames: Ref<string[]>" }), " — метки выбранных элементов."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "selectedValues: Ref<any[]>" }), " — значения выбранных элементов."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onclick: (event) => Promise<void>" }), " — обработчик клика для открытия/закрытия меню."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "oncontextmenu: (event) => Promise<void>" }), " — обработчик контекстного меню."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function zu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ru, { ...e })
	}) : Ru(e);
}
//#endregion
//#region src/media/mdx/Menu/slots.control.en.mdx
function Bu(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "control(props: MenuControlItem): any" }), " — Slot for placing the menu control element (trigger)."] }),
		"\n"
	] });
}
function Vu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Bu, { ...e })
	}) : Bu(e);
}
//#endregion
//#region src/media/mdx/Menu/slots.control.ru.mdx
function Hu(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "control(props: MenuControlItem): any" }), " — Слот для размещения элемента управления (триггера) меню."] }),
		"\n"
	] });
}
function Uu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Hu, { ...e })
	}) : Hu(e);
}
//#endregion
//#region src/media/mdx/Menu/wikiMdxMenu.ts
var Wu = {
	name: "Menu",
	descriptions: {
		ajax: {
			en: _u,
			ru: yu
		},
		"event.updateValue": {
			en: xu,
			ru: Cu
		},
		"expose.navigation": {
			en: Tu,
			ru: Du
		},
		menu: {
			en: ku,
			ru: ju
		},
		navigation: {
			en: Nu,
			ru: Fu
		},
		slots: {
			en: Lu,
			ru: zu
		},
		slotsControl: {
			en: Vu,
			ru: Uu
		}
	}
};
//#endregion
//#region src/media/mdx/Modal/differences.en.mdx
function Gu(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		hr: "hr",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Differences between Modal, ActionSheet and Dialog" }),
		"\n",
		o(t.p, { children: [
			"All three components are built on top of ",
			a(t.strong, { children: "Window" }),
			", but have different purposes and behaviors:"
		] }),
		"\n",
		a(t.h3, { children: "Modal" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Modal" }), " — a modal window with centered positioning for content requiring immediate user attention."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Uses ",
				a(t.code, { children: "adaptive: 'modal'" }),
				" Window mode"
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Centered positioning" }), " by default"] }),
			"\n",
			a(t.li, { children: "Semi-transparent overlay blocks interaction with the main interface" }),
			"\n",
			o(t.li, { children: [
				"Closes on ESC key and click outside (unless ",
				a(t.code, { children: "persistent" }),
				" is set)"
			] }),
			"\n",
			a(t.li, { children: "Supports slots for title, content, and footer" }),
			"\n",
			a(t.li, { children: "Integrated with Bars and Actions components" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Action confirmation dialogs" }),
			"\n",
			a(t.li, { children: "Create/edit record forms" }),
			"\n",
			a(t.li, { children: "Warnings and informational messages" }),
			"\n",
			a(t.li, { children: "Viewing detailed information" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "ActionSheet" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "ActionSheet" }), " — a modal panel with a set of actions appearing from the bottom of the screen (on mobile devices) or as a context menu."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Uses ",
				a(t.code, { children: "adaptive: 'actionSheet'" }),
				" Window mode"
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Bottom positioning" }), " on mobile devices"] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Swipe down gesture" }),
				" support for closing (",
				a(t.code, { children: "touchClose" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				"Automatically adds dividers between items (",
				a(t.code, { children: "divider: true" }),
				")"
			] }),
			"\n",
			a(t.li, { children: "Adaptive behavior: can transform into modal on larger screens" }),
			"\n",
			a(t.li, { children: "Specialized for action lists" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Action menus for objects (edit, delete, share)" }),
			"\n",
			a(t.li, { children: "Selecting an option from a list" }),
			"\n",
			a(t.li, { children: "Context menus on mobile devices" }),
			"\n",
			a(t.li, { children: "Actions requiring quick access" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "Dialog" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Dialog" }), " — a component for dialog windows with simplified API."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Usually an even more simplified wrapper over Modal" }),
			"\n",
			a(t.li, { children: "May have preset styles for system dialogs" }),
			"\n",
			a(t.li, { children: "Often used for simple confirmations (yes/no, OK/Cancel)" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Simple confirmations (alert, confirm)" }),
			"\n",
			a(t.li, { children: "System notifications" }),
			"\n",
			a(t.li, { children: "Quick dialogs without complex content" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "Choosing a component" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Use Modal" }), " when you need to display a form, detailed information, or content requiring user attention"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Use ActionSheet" }), " when you need to offer a list of actions, especially on mobile devices"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Use Dialog" }), " when you need a simple confirmation or system notification"] }),
			"\n"
		] }),
		"\n",
		a(t.h2, { children: "Разница между Modal, ActionSheet и Dialog" }),
		"\n",
		o(t.p, { children: [
			"Все три компонента построены на базе ",
			a(t.strong, { children: "Window" }),
			", но имеют различное назначение и поведение:"
		] }),
		"\n",
		a(t.h3, { children: "Modal" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Modal" }), " — модальное окно с центрированным позиционированием для контента, требующего немедленного внимания пользователя."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Использует ",
				a(t.code, { children: "adaptive: 'modal'" }),
				" режим Window"
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Центрированное позиционирование" }), " по умолчанию"] }),
			"\n",
			a(t.li, { children: "Полупрозрачный оверлей блокирует взаимодействие с основным интерфейсом" }),
			"\n",
			o(t.li, { children: [
				"Закрывается по ESC и клику вне области (если не установлен ",
				a(t.code, { children: "persistent" }),
				")"
			] }),
			"\n",
			a(t.li, { children: "Поддерживает слоты для заголовка, контента и футера" }),
			"\n",
			a(t.li, { children: "Интегрирован с компонентами Bars и Actions" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Диалоги подтверждения действий" }),
			"\n",
			a(t.li, { children: "Формы создания/редактирования записей" }),
			"\n",
			a(t.li, { children: "Предупреждения и информационные сообщения" }),
			"\n",
			a(t.li, { children: "Просмотр детальной информации" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "ActionSheet" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "ActionSheet" }), " — модальная панель с набором действий, появляющаяся снизу экрана (на мобильных устройствах) или в виде контекстного меню."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Использует ",
				a(t.code, { children: "adaptive: 'actionSheet'" }),
				" режим Window"
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Позиционирование снизу" }), " экрана на мобильных устройствах"] }),
			"\n",
			o(t.li, { children: [
				"Поддержка ",
				a(t.strong, { children: "жеста свайпа вниз" }),
				" для закрытия (",
				a(t.code, { children: "touchClose" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				"Автоматически добавляет разделители между элементами (",
				a(t.code, { children: "divider: true" }),
				")"
			] }),
			"\n",
			a(t.li, { children: "Адаптивное поведение: может трансформироваться в modal на больших экранах" }),
			"\n",
			a(t.li, { children: "Специализирован для списков действий" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Меню действий с объектом (редактировать, удалить, поделиться)" }),
			"\n",
			a(t.li, { children: "Выбор опции из списка" }),
			"\n",
			a(t.li, { children: "Контекстные меню на мобильных устройствах" }),
			"\n",
			a(t.li, { children: "Действия, требующие быстрого доступа" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "Dialog" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Dialog" }), " — компонент для диалоговых окон с упрощенным API (если реализован в вашей системе)."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Обычно является еще более упрощенной оберткой над Modal" }),
			"\n",
			a(t.li, { children: "Может иметь предустановленные стили для системных диалогов" }),
			"\n",
			a(t.li, { children: "Часто используется для простых подтверждений (да/нет, ОК/Отмена)" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Простые подтверждения (alert, confirm)" }),
			"\n",
			a(t.li, { children: "Системные уведомления" }),
			"\n",
			a(t.li, { children: "Быстрые диалоги без сложного контента" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "Выбор компонента" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Используйте Modal" }), ", когда нужно показать форму, детальную информацию или контент, требующий внимания пользователя"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Используйте ActionSheet" }), ", когда нужно предложить список действий, особенно на мобильных устройствах"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Используйте Dialog" }), ", когда нужно простое подтверждение или системное уведомление"] }),
			"\n"
		] })
	] });
}
function Ku(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gu, { ...e })
	}) : Gu(e);
}
//#endregion
//#region src/media/mdx/Modal/differences.ru.mdx
function qu(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		hr: "hr",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Разница между Modal, ActionSheet и Dialog" }),
		"\n",
		o(t.p, { children: [
			"Все три компонента построены на базе ",
			a(t.strong, { children: "Window" }),
			", но имеют различное назначение и поведение:"
		] }),
		"\n",
		a(t.h3, { children: "Modal" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Modal" }), " — модальное окно с центрированным позиционированием для контента, требующего немедленного внимания пользователя."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Использует ",
				a(t.code, { children: "adaptive: 'modal'" }),
				" режим Window"
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Центрированное позиционирование" }), " по умолчанию"] }),
			"\n",
			a(t.li, { children: "Полупрозрачный оверлей блокирует взаимодействие с основным интерфейсом" }),
			"\n",
			o(t.li, { children: [
				"Закрывается по ESC и клику вне области (если не установлен ",
				a(t.code, { children: "persistent" }),
				")"
			] }),
			"\n",
			a(t.li, { children: "Поддерживает слоты для заголовка, контента и футера" }),
			"\n",
			a(t.li, { children: "Интегрирован с компонентами Bars и Actions" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Диалоги подтверждения действий" }),
			"\n",
			a(t.li, { children: "Формы создания/редактирования записей" }),
			"\n",
			a(t.li, { children: "Предупреждения и информационные сообщения" }),
			"\n",
			a(t.li, { children: "Просмотр детальной информации" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "ActionSheet" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "ActionSheet" }), " — модальная панель с набором действий, появляющаяся снизу экрана (на мобильных устройствах) или в виде контекстного меню."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Использует ",
				a(t.code, { children: "adaptive: 'actionSheet'" }),
				" режим Window"
			] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Позиционирование снизу" }), " экрана на мобильных устройствах"] }),
			"\n",
			o(t.li, { children: [
				"Поддержка ",
				a(t.strong, { children: "жеста свайпа вниз" }),
				" для закрытия (",
				a(t.code, { children: "touchClose" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				"Автоматически добавляет разделители между элементами (",
				a(t.code, { children: "divider: true" }),
				")"
			] }),
			"\n",
			a(t.li, { children: "Адаптивное поведение: может трансформироваться в modal на больших экранах" }),
			"\n",
			a(t.li, { children: "Специализирован для списков действий" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Меню действий с объектом (редактировать, удалить, поделиться)" }),
			"\n",
			a(t.li, { children: "Выбор опции из списка" }),
			"\n",
			a(t.li, { children: "Контекстные меню на мобильных устройствах" }),
			"\n",
			a(t.li, { children: "Действия, требующие быстрого доступа" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "Dialog" }),
		"\n",
		o(t.p, { children: [a(t.strong, { children: "Dialog" }), " — компонент для диалоговых окон с упрощенным API."] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Обычно является еще более упрощенной оберткой над Modal" }),
			"\n",
			a(t.li, { children: "Может иметь предустановленные стили для системных диалогов" }),
			"\n",
			a(t.li, { children: "Часто используется для простых подтверждений (да/нет, ОК/Отмена)" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Простые подтверждения (alert, confirm)" }),
			"\n",
			a(t.li, { children: "Системные уведомления" }),
			"\n",
			a(t.li, { children: "Быстрые диалоги без сложного контента" }),
			"\n"
		] }),
		"\n",
		a(t.hr, {}),
		"\n",
		a(t.h3, { children: "Выбор компонента" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Используйте Modal" }), ", когда нужно показать форму, детальную информацию или контент, требующий внимания пользователя"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Используйте ActionSheet" }), ", когда нужно предложить список действий, особенно на мобильных устройствах"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Используйте Dialog" }), ", когда нужно простое подтверждение или системное уведомление"] }),
			"\n"
		] })
	] });
}
function Ju(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(qu, { ...e })
	}) : qu(e);
}
//#endregion
//#region src/media/mdx/Modal/modal.en.mdx
function Yu(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "A simplified wrapper over the Window component for creating modal dialogs with preconfigured centered positioning settings." }),
		"\n",
		o(t.p, { children: [
			"Modal is a specialized component that uses Window with a fixed ",
			a(t.code, { children: "adaptive: 'modal'" }),
			" mode. It is designed to display content that requires immediate user attention, blocking interaction with the main interface. The component automatically centers content, adds a semi-transparent backdrop (overlay), and manages focus."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Centered positioning by default" }),
			"\n",
			a(t.li, { children: "Semi-transparent overlay with background blocking" }),
			"\n",
			a(t.li, { children: "Control via v-model:open" }),
			"\n",
			a(t.li, { children: "Close on ESC key and click outside" }),
			"\n",
			a(t.li, { children: "Integration with Scrollbar for long content" }),
			"\n",
			a(t.li, { children: "Slots for title, content, and footer" }),
			"\n",
			a(t.li, { children: "Lifecycle events (preparation, opening, closing)" }),
			"\n",
			a(t.li, { children: "Close button with customizable icon" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Differences from Window:" }) }),
		"\n",
		o(t.p, { children: [
			"Modal is a Window with preset ",
			a(t.code, { children: "adaptive: 'modal'" }),
			", which simplifies usage for standard dialog windows without explicitly specifying the adaptive mode."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Action confirmation dialogs" }),
			"\n",
			a(t.li, { children: "Create/edit forms" }),
			"\n",
			a(t.li, { children: "Warnings and informational messages" }),
			"\n",
			a(t.li, { children: "Viewing detailed information" }),
			"\n",
			a(t.li, { children: "Multi-step wizards" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isModalOpen = ref(false)\n\nconst handleBeforeClosing = async () => {\n  // Check before closing\n  return confirm('Close modal window?')\n}\n<\/script>\n\n<template>\n  <button @click=\"isModalOpen = true\">Open Modal</button>\n\n  <Modal\n    v-model:open=\"isModalOpen\"\n    :beforeClosing=\"handleBeforeClosing\"\n    closeButton\n  >\n    <template #title>\n      <h2>Confirm Action</h2>\n    </template>\n\n    <template #default>\n      <p>Are you sure you want to perform this action?</p>\n      <p>This action cannot be undone.</p>\n    </template>\n\n    <template #footer=\"{ classesModal }\">\n      <button :class=\"classesModal.close\">Cancel</button>\n      <button @click=\"performAction\">Confirm</button>\n    </template>\n  </Modal>\n</template>\n"
		}) })
	] });
}
function Xu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Yu, { ...e })
	}) : Yu(e);
}
//#endregion
//#region src/media/mdx/Modal/modal.ru.mdx
function Zu(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Упрощенная обертка над компонентом Window для создания модальных диалогов с предустановленными настройками центрированного позиционирования." }),
		"\n",
		o(t.p, { children: [
			"Modal является специализированным компонентом, который использует Window с фиксированным режимом ",
			a(t.code, { children: "adaptive: 'modal'" }),
			". Он предназначен для отображения контента, требующего немедленного внимания пользователя, с блокировкой взаимодействия с основным интерфейсом. Компонент автоматически центрирует содержимое, добавляет полупрозрачный фон (overlay) и управляет фокусом."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Центрированное позиционирование по умолчанию" }),
			"\n",
			a(t.li, { children: "Полупрозрачный оверлей с блокировкой фона" }),
			"\n",
			a(t.li, { children: "Управление через v-model:open" }),
			"\n",
			a(t.li, { children: "Закрытие по ESC и клику вне области" }),
			"\n",
			a(t.li, { children: "Интеграция со Scrollbar для длинного контента" }),
			"\n",
			a(t.li, { children: "Слоты для заголовка, содержимого и футера" }),
			"\n",
			a(t.li, { children: "События жизненного цикла (preparation, opening, closing)" }),
			"\n",
			a(t.li, { children: "Кнопка закрытия с настраиваемой иконкой" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Отличия от Window:" }) }),
		"\n",
		o(t.p, { children: [
			"Modal - это Window с предустановленным ",
			a(t.code, { children: "adaptive: 'modal'" }),
			", что упрощает использование для стандартных диалоговых окон без необходимости явно указывать режим адаптивности."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Диалоги подтверждения действий" }),
			"\n",
			a(t.li, { children: "Формы создания/редактирования" }),
			"\n",
			a(t.li, { children: "Предупреждения и информационные сообщения" }),
			"\n",
			a(t.li, { children: "Просмотр детальной информации" }),
			"\n",
			a(t.li, { children: "Многошаговые мастера (wizards)" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isModalOpen = ref(false)\n\nconst handleBeforeClosing = async () => {\n  // Проверка перед закрытием\n  return confirm('Закрыть модальное окно?')\n}\n<\/script>\n\n<template>\n  <button @click=\"isModalOpen = true\">Открыть модальное окно</button>\n\n  <Modal\n    v-model:open=\"isModalOpen\"\n    :beforeClosing=\"handleBeforeClosing\"\n    closeButton\n  >\n    <template #title>\n      <h2>Подтверждение действия</h2>\n    </template>\n\n    <template #default>\n      <p>Вы уверены, что хотите выполнить это действие?</p>\n      <p>Это действие нельзя будет отменить.</p>\n    </template>\n\n    <template #footer=\"{ classesModal }\">\n      <button :class=\"classesModal.close\">Отмена</button>\n      <button @click=\"performAction\">Подтвердить</button>\n    </template>\n  </Modal>\n</template>\n"
		}) })
	] });
}
function Qu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Zu, { ...e })
	}) : Zu(e);
}
//#endregion
//#region src/media/mdx/Modal/wikiMdxModal.ts
var $u = {
	name: "Modal",
	descriptions: {
		differences: {
			en: Ku,
			ru: Ju
		},
		modal: {
			en: Xu,
			ru: Qu
		}
	}
};
//#endregion
//#region src/media/mdx/MotionAxis/classes.en.mdx
function ed(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Scroll Management during Animation" }),
		"\n",
		a(t.p, { children: "The component automatically manages scroll visibility during transition animations to prevent content jumps." }),
		"\n",
		a(t.h3, { children: "Usage" }),
		"\n",
		o(t.p, { children: [
			"To enable this feature, add the ",
			a(t.code, { children: "*__scroll" }),
			" class to the parent container that has scrolling."
		] }),
		"\n",
		o(t.ol, { children: [
			"\n",
			a(t.li, { children: "Wrap the component in a scrollable container." }),
			"\n",
			o(t.li, { children: [
				"Add the ",
				a(t.code, { children: "*__scroll" }),
				" class to this container (where ",
				a(t.code, { children: "*" }),
				" is the component class name, e.g., ",
				a(t.code, { children: "d1-tabs__scroll" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<div class=\"d1-tabs__scroll\">\n  <Tabs ... />\n</div>\n"
		}) }),
		"\n",
		o(t.p, { children: [
			"During the animation, the component will automatically add the ",
			a(t.code, { children: "*__scroll--hidden" }),
			" class (which applies ",
			a(t.code, { children: "overflow: hidden" }),
			") to this container, and remove it after the animation ends."
		] })
	] });
}
function td(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ed, { ...e })
	}) : ed(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/classes.ru.mdx
function nd(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление скроллом при анимации" }),
		"\n",
		a(t.p, { children: "Компонент автоматически управляет видимостью скролла во время анимации перехода, чтобы предотвратить \"скачки\" контента." }),
		"\n",
		a(t.h3, { children: "Использование" }),
		"\n",
		o(t.p, { children: [
			"Для активации этой функции необходимо добавить класс ",
			a(t.code, { children: "*__scroll" }),
			" родительскому контейнеру, который имеет прокрутку."
		] }),
		"\n",
		o(t.ol, { children: [
			"\n",
			a(t.li, { children: "Оберните компонент в контейнер с прокруткой." }),
			"\n",
			o(t.li, { children: [
				"Добавьте этому контейнеру класс ",
				a(t.code, { children: "*__scroll" }),
				" (где ",
				a(t.code, { children: "*" }),
				" — имя класса компонента, например ",
				a(t.code, { children: "d1-tabs__scroll" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<div class=\"d1-tabs__scroll\">\n  <Tabs ... />\n</div>\n"
		}) }),
		"\n",
		o(t.p, { children: [
			"Во время анимации компонент автоматически добавит класс ",
			a(t.code, { children: "*__scroll--hidden" }),
			" (который применяет ",
			a(t.code, { children: "overflow: hidden" }),
			") к этому контейнеру, а после завершения анимации удалит его."
		] })
	] });
}
function rd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(nd, { ...e })
	}) : nd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/event.en.mdx
function id(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "start" }) }),
		"\n",
		a(t.p, { children: "Event triggered at the beginning of the transition animation." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number" }), " — identifier of the slide to which the transition starts"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "end" }) }),
		"\n",
		a(t.p, { children: "Event triggered after the transition animation completes." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number" }), " — identifier of the slide on which the transition ended"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "motionAxis" }) }),
		"\n",
		a(t.p, { children: "Event triggered at the beginning and end of the transition animation." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "options: MotionAxisEmitOptions" }), " — object with event parameters"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Structure MotionAxisEmitOptions:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "type: 'start' | 'end'" }), " — event type"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number" }), " — identifier of the selected slide"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "previous: string | number" }), " — identifier of the previous slide"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "preparation: string | number" }), " — identifier of the slide being prepared"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "active: string | number" }), " — identifier of the active slide"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleStart = (selected) => {\n  console.log('Animation started to slide:', selected)\n}\n\nconst handleEnd = (selected) => {\n  console.log('Animation ended on slide:', selected)\n}\n\nconst handleMotionAxis = (options) => {\n  console.log('MotionAxis event:', options)\n}\n<\/script>\n\n<template>\n  <MotionAxis\n    @start=\"handleStart\"\n    @end=\"handleEnd\"\n    @motionAxis=\"handleMotionAxis\"\n  >\n    <!-- Slides -->\n  </MotionAxis>\n</template>\n"
		}) })
	] });
}
function ad(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(id, { ...e })
	}) : id(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/event.ru.mdx
function od(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "start" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает в начале анимации перехода." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number" }), " — идентификатор слайда, к которому начинается переход"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "end" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает после завершения анимации перехода." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number" }), " — идентификатор слайда, на котором завершился переход"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "motionAxis" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает в начале и в конце анимации перехода." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "options: MotionAxisEmitOptions" }), " — объект с параметрами события"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура MotionAxisEmitOptions:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "type: 'start' | 'end'" }), " — тип события"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number" }), " — идентификатор выбранного слайда"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "previous: string | number" }), " — идентификатор предыдущего слайда"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "preparation: string | number" }), " — идентификатор подготавливаемого слайда"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "active: string | number" }), " — идентификатор активного слайда"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleStart = (selected) => {\n  console.log('Начало анимации к слайду:', selected)\n}\n\nconst handleEnd = (selected) => {\n  console.log('Завершение анимации на слайде:', selected)\n}\n\nconst handleMotionAxis = (options) => {\n  console.log('Событие MotionAxis:', options)\n}\n<\/script>\n\n<template>\n  <MotionAxis\n    @start=\"handleStart\"\n    @end=\"handleEnd\"\n    @motionAxis=\"handleMotionAxis\"\n  >\n    <!-- Слайды -->\n  </MotionAxis>\n</template>\n"
		}) })
	] });
}
function sd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(od, { ...e })
	}) : od(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/expose.en.mdx
function cd(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "back(): void" }), " — Transition to the previous slide."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "next(): void" }), " — Transition to the next slide."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "to(selected: string | number): void" }), " — Transition to the specified slide."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "top(selected: string | number): void" }), " — Transition to the slide with animation from the top."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "right(selected: string | number): void" }), " — Transition to the slide with animation from the right."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "bottom(selected: string | number): void" }), " — Transition to the slide with animation from the bottom."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "left(selected: string | number): void" }), " — Transition to the slide with animation from the left."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "down(selected: string | number): void" }), " — Transition to the slide with animation downwards."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "up(selected: string | number): void" }), " — Transition to the slide with animation upwards."] }),
		"\n"
	] });
}
function ld(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(cd, { ...e })
	}) : cd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/expose.ru.mdx
function ud(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "back(): void" }), " — Переход к предыдущему слайду."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "next(): void" }), " — Переход к следующему слайду."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "to(selected: string | number): void" }), " — Переход к указанному слайду."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "top(selected: string | number): void" }), " — Переход к слайду с анимацией сверху."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "right(selected: string | number): void" }), " — Переход к слайду с анимацией справа."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "bottom(selected: string | number): void" }), " — Переход к слайду с анимацией снизу."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "left(selected: string | number): void" }), " — Переход к слайду с анимацией слева."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "down(selected: string | number): void" }), " — Переход к слайду с анимацией вниз."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "up(selected: string | number): void" }), " — Переход к слайду с анимацией вверх."] }),
		"\n"
	] });
}
function dd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ud, { ...e })
	}) : ud(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/motionAxis.en.mdx
function fd(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for organizing transitions between elements (slides)." }),
		"\n",
		a(t.p, { children: "MotionAxis allows animating content changes along X, Y, Z axes with slide effects. Supports automatic animation direction detection, container height management, and lazy loading (DOM)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Slide transition animation along X, Y, Z axes" }),
			"\n",
			a(t.li, { children: "Automatic or manual direction control (next/back)" }),
			"\n",
			a(t.li, { children: "Smooth container height animation to fit content" }),
			"\n",
			a(t.li, { children: "Slide lifecycle management in DOM (inDom, inDomSlide)" }),
			"\n",
			a(t.li, { children: "Slot support for each slide" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Sliders and carousels" }),
			"\n",
			a(t.li, { children: "Step-by-step forms (wizards)" }),
			"\n",
			a(t.li, { children: "Tab switching with animation" }),
			"\n",
			a(t.li, { children: "Image galleries" }),
			"\n",
			a(t.li, { children: "Onboarding screens" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('slide1')\n<\/script>\n\n<template>\n  <div class=\"buttons\">\n    <button @click=\"selected = 'slide1'\">Slide 1</button>\n    <button @click=\"selected = 'slide2'\">Slide 2</button>\n  </div>\n\n  <MotionAxis :selected=\"selected\">\n    <template #slide1>\n      <div class=\"slide\">Slide 1 Content</div>\n    </template>\n    <template #slide2>\n      <div class=\"slide\">Slide 2 Content</div>\n    </template>\n  </MotionAxis>\n</template>\n"
		}) })
	] });
}
function pd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(fd, { ...e })
	}) : fd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/motionAxis.ru.mdx
function md(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для организации переходов между элементами (слайдами)." }),
		"\n",
		a(t.p, { children: "MotionAxis позволяет анимировать смену контента по осям X, Y, Z с эффектами сдвига. Поддерживает автоматическое определение направления анимации, управление высотой контейнера и ленивую загрузку (DOM)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Анимация смены слайдов по осям X, Y, Z" }),
			"\n",
			a(t.li, { children: "Автоматическое или ручное управление направлением (вперед/назад)" }),
			"\n",
			a(t.li, { children: "Плавная анимация высоты контейнера под контент" }),
			"\n",
			a(t.li, { children: "Управление жизненным циклом слайдов в DOM (inDom, inDomSlide)" }),
			"\n",
			a(t.li, { children: "Поддержка слотов для каждого слайда" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Слайдеры и карусели" }),
			"\n",
			a(t.li, { children: "Пошаговые формы (wizards)" }),
			"\n",
			a(t.li, { children: "Переключение вкладок с анимацией" }),
			"\n",
			a(t.li, { children: "Галереи изображений" }),
			"\n",
			a(t.li, { children: "Онбординг экраны" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('slide1')\n<\/script>\n\n<template>\n  <div class=\"buttons\">\n    <button @click=\"selected = 'slide1'\">Слайд 1</button>\n    <button @click=\"selected = 'slide2'\">Слайд 2</button>\n  </div>\n\n  <MotionAxis :selected=\"selected\">\n    <template #slide1>\n      <div class=\"slide\">Контент слайда 1</div>\n    </template>\n    <template #slide2>\n      <div class=\"slide\">Контент слайда 2</div>\n    </template>\n  </MotionAxis>\n</template>\n"
		}) })
	] });
}
function hd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(md, { ...e })
	}) : md(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/slots.en.mdx
function gd(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "[name]: any" }),
			" — Slot for slide content. The slot name corresponds to the value passed to the ",
			a(t.code, { children: "selected" }),
			" property."
		] }),
		"\n"
	] });
}
function _d(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(gd, { ...e })
	}) : gd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/slots.ru.mdx
function vd(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [
			a(t.code, { children: "[name]: any" }),
			" — Слот для содержимого слайда. Имя слота соответствует значению, передаваемому в свойство ",
			a(t.code, { children: "selected" }),
			"."
		] }),
		"\n"
	] });
}
function yd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vd, { ...e })
	}) : vd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/v-model.en.mdx
function bd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "State Management via v-model" }),
		"\n",
		o(t.p, { children: [
			"Two-way binding of the selected slide via ",
			a(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number" }), " — identifier of the selected slide"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('slide1')\n<\/script>\n\n<template>\n  <div class=\"buttons\">\n    <button @click=\"selected = 'slide1'\">Slide 1</button>\n    <button @click=\"selected = 'slide2'\">Slide 2</button>\n  </div>\n\n  <MotionAxis v-model:selected=\"selected\">\n    <template #slide1>\n      <div>Slide 1 Content</div>\n    </template>\n    <template #slide2>\n      <div>Slide 2 Content</div>\n    </template>\n  </MotionAxis>\n</template>\n"
		}) })
	] });
}
function xd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bd, { ...e })
	}) : bd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/v-model.ru.mdx
function Sd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		o(t.p, { children: [
			"Двусторонняя привязка выбранного слайда через ",
			a(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number" }), " — идентификатор выбранного слайда"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('slide1')\n<\/script>\n\n<template>\n  <div class=\"buttons\">\n    <button @click=\"selected = 'slide1'\">Слайд 1</button>\n    <button @click=\"selected = 'slide2'\">Слайд 2</button>\n  </div>\n\n  <MotionAxis v-model:selected=\"selected\">\n    <template #slide1>\n      <div>Контент слайда 1</div>\n    </template>\n    <template #slide2>\n      <div>Контент слайда 2</div>\n    </template>\n  </MotionAxis>\n</template>\n"
		}) })
	] });
}
function Cd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sd, { ...e })
	}) : Sd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/wikiMdxMotionAxis.ts
var wd = {
	name: "MotionAxis",
	descriptions: {
		classes: {
			en: td,
			ru: rd
		},
		events: {
			en: ad,
			ru: sd
		},
		expose: {
			en: ld,
			ru: dd
		},
		motionAxis: {
			en: pd,
			ru: hd
		},
		slots: {
			en: _d,
			ru: yd
		},
		"v-model": {
			en: xd,
			ru: Cd
		}
	}
};
//#endregion
//#region src/media/mdx/MotionTransform/animationHeadPosition.en.mdx
function Td(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Head position animation" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "animationHeadPosition" }),
			" property controls how the Head area behaves during show/hide animations."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'top'" }), " — keeps the Head at the top during transition (default)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'toBottom'" }), " — animates the Head toward the bottom together with content"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Synchronizes header movement with content animation using CSS transforms for smooth transitions. Suitable for collapsing layouts when the header should travel with expanding content. When the ",
			a(t.code, { children: "section" }),
			" property is enabled (set to ",
			a(t.code, { children: "true" }),
			"), the ",
			a(t.code, { children: "animationHeadPosition" }),
			" parameter is ignored and does not affect animation behavior."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Head stays at top -->\n<MotionTransform animationHeadPosition=\"top\" />\n\n<!-- Head moves down with content -->\n<MotionTransform animationHeadPosition=\"toBottom\" />\n"
		}) })
	] });
}
function Ed(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Td, { ...e })
	}) : Td(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/animationHeadPosition.ru.mdx
function Dd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Анимация позиции заголовка" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "animationHeadPosition" }),
			" определяет поведение области Head во время анимаций показа/скрытия."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'top'" }), " — сохраняет Head вверху во время перехода (по умолчанию)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'toBottom'" }), " — анимирует Head вниз вместе с контентом"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Синхронизирует движение заголовка с анимацией контента, используя CSS-трансформации для плавных переходов. Подходит для сворачиваемых макетов, когда заголовок должен перемещаться вместе с разворачивающимся содержимым. При включенном свойстве ",
			a(t.code, { children: "section" }),
			" (установлено в ",
			a(t.code, { children: "true" }),
			") параметр ",
			a(t.code, { children: "animationHeadPosition" }),
			" игнорируется и не влияет на поведение анимации."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Head остается вверху -->\n<MotionTransform animationHeadPosition=\"top\" />\n\n<!-- Head движется вниз с контентом -->\n<MotionTransform animationHeadPosition=\"toBottom\" />\n"
		}) })
	] });
}
function Od(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Dd, { ...e })
	}) : Dd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/classes.en.mdx
function kd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "CSS Classes for Behavior Control" }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "State classes:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--open" }), " — component is fully open and its content is visible"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--show" }), " — component is visible or in the process of open/close animation"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--window" }), " — component operates in window mode (with teleportation)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--click" }), " — added briefly on click for feedback effects"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Control classes:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--close" }), " — applied to element to trigger MotionTransform closing on click"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--none" }), " — disables default behavior (open/close) for the element"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--noneGlobal" }), " — globally disables MotionTransform events"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Element classes:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__context" }), " — class for context element for positioning"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__head" }), " — class for header area that acts as a trigger"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__body" }), " — class for content area that appears and disappears"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__backdrop" }), " — class for backdrop element to create overlay effect"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__scrim" }), " — class for scrim layer in modal modes"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__clickNone" }), " — class for element that ignores clicks"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Where ",
			a(t.code, { children: "*" }),
			" is the component class name (e.g., ",
			a(t.code, { children: "d1-motion-transform" }),
			", ",
			a(t.code, { children: "m3-motion-transform" }),
			")."
		] })
	] });
}
function Ad(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(kd, { ...e })
	}) : kd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/classes.ru.mdx
function jd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "CSS классы для управления поведением" }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Классы состояний:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--open" }), " — компонент полностью открыт и его содержимое видимо"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--show" }), " — компонент видим или находится в процессе анимации открытия/закрытия"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--window" }), " — компонент работает в режиме окна (с телепортацией)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--click" }), " — добавляется на короткое время при клике для эффектов обратной связи"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Классы управления:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--close" }), " — применяется к элементу для закрытия MotionTransform при клике"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--none" }), " — отключает стандартное поведение (открытие/закрытие) для элемента"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--noneGlobal" }), " — глобально отключает события MotionTransform"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Классы элементов:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__context" }), " — класс для контекстного элемента для позиционирования"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__head" }), " — класс для области заголовка, которая выступает в роли триггера"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__body" }), " — класс для области содержимого, которая появляется и исчезает"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__backdrop" }), " — класс для элемента заднего фона для создания эффекта наложения"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__scrim" }), " — класс для затемняющего слоя в модальных режимах"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__clickNone" }), " — класс для элемента, который игнорирует клики"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Где ",
			a(t.code, { children: "*" }),
			" — название класса компонента (например, ",
			a(t.code, { children: "d1-motion-transform" }),
			", ",
			a(t.code, { children: "m3-motion-transform" }),
			")."
		] })
	] });
}
function Md(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(jd, { ...e })
	}) : jd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/events.en.mdx
function Nd(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "transform" }) }),
		"\n",
		a(t.p, { children: "Event fires when MotionTransform state changes with full event context." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: Event | undefined" }), " — DOM event that triggered the change (if any)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "options: MotionTransformEmitOptions" }), " — object with transform data"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "MotionTransformEmitOptions structure:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "type: 'head' | 'body' | 'top' | 'script'" }), " — area type that initiated the event"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "open: boolean" }),
				" — current open state (",
				a(t.code, { children: "true" }),
				" - open, ",
				a(t.code, { children: "false" }),
				" - closed)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleTransform = (event, options) => {\n  console.log('Event:', event)\n  console.log('Type:', options.type)\n  console.log('Open state:', options.open)\n}\n<\/script>\n\n<template>\n  <Component @transform=\"handleTransform\">\n    <template #head>\n      <div>Header</div>\n    </template>\n    <template #body>\n      <p>Content</p>\n    </template>\n  </Component>\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "transformLite" }) }),
		"\n",
		a(t.p, { children: "Event fires when MotionTransform state changes without DOM event context (lightweight version)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "options: MotionTransformEmitOptions" }), " — object with transform data"] }),
			"\n"
		] })
	] });
}
function Pd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Nd, { ...e })
	}) : Nd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/events.ru.mdx
function Fd(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "transform" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния MotionTransform с полным контекстом события." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "event: Event | undefined" }), " — DOM-событие, которое вызвало изменение (если есть)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "options: MotionTransformEmitOptions" }), " — объект с данными трансформации"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура MotionTransformEmitOptions:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "type: 'head' | 'body' | 'top' | 'script'" }), " — тип области, которая инициировала событие"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "open: boolean" }),
				" — текущее состояние открытия (",
				a(t.code, { children: "true" }),
				" - открыто, ",
				a(t.code, { children: "false" }),
				" - закрыто)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleTransform = (event, options) => {\n  console.log('Событие:', event)\n  console.log('Тип:', options.type)\n  console.log('Состояние открытия:', options.open)\n}\n<\/script>\n\n<template>\n  <Component @transform=\"handleTransform\">\n    <template #head>\n      <div>Заголовок</div>\n    </template>\n    <template #body>\n      <p>Содержимое</p>\n    </template>\n  </Component>\n</template>\n"
		}) }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "transformLite" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния MotionTransform без контекста DOM-события (облегчённая версия)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "options: MotionTransformEmitOptions" }), " — объект с данными трансформации"] }),
			"\n"
		] })
	] });
}
function Id(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fd, { ...e })
	}) : Fd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/expose.en.mdx
function Ld(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — reactive open state."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "isShow: ComputedRef<boolean>" }), " — computed visibility state."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "setOpen(open: boolean): void" }), " — sets the open state."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "toOpen(): void" }), " — transitions to the open state."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "toClose(): void" }), " — transitions to the close state."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "toggle(): void" }), " — toggles the open state."] }),
		"\n"
	] });
}
function Rd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ld, { ...e })
	}) : Ld(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/expose.ru.mdx
function zd(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — реактивное состояние открытия."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "isShow: ComputedRef<boolean>" }), " — вычисляемое состояние видимости."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "setOpen(open: boolean): void" }), " — устанавливает состояние открытия."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "toOpen(): void" }), " — переводит в состояние открытия."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "toClose(): void" }), " — переводит в состояние закрытия."] }),
		"\n",
		o(t.li, { children: [a(t.code, { children: "toggle(): void" }), " — переключает состояние открытия."] }),
		"\n"
	] });
}
function Bd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zd, { ...e })
	}) : zd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/expose.motionTransformElement.en.mdx
function Vd(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>" }), " — Reactive reference to the nested MotionTransform component's expose API, providing programmatic access to control methods."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "Methods via motionTransformElement.value:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — reactive open state"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "isShow: ComputedRef<boolean>" }), " — computed visibility state"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "setOpen(open: boolean): void" }), " — set open state"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "toOpen(): void" }), " — open component"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "toClose(): void" }), " — close component"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "toggle(): void" }), " — toggle state"] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Hd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vd, { ...e })
	}) : Vd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/expose.motionTransformElement.ru.mdx
function Ud(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>" }), " — Реактивная ссылка на expose API вложенного компонента MotionTransform, предоставляющая программный доступ к методам управления."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "Методы через motionTransformElement.value:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — реактивное состояние открытия"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "isShow: ComputedRef<boolean>" }), " — вычисляемое состояние видимости"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "setOpen(open: boolean): void" }), " — установить состояние открытия"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "toOpen(): void" }), " — открыть компонент"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "toClose(): void" }), " — закрыть компонент"] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "toggle(): void" }), " — переключить состояние"] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Wd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ud, { ...e })
	}) : Ud(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/ignore.en.mdx
function Gd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Ignore zones" }),
		"\n",
		a(t.p, { children: "Properties that exclude elements from outside-click checks and auto-close logic." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "ignore" }), " — DOM element reference or CSS selector to exclude from outside-click detection"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "ignoreSelector" }), " — CSS selector to exclude multiple elements simultaneously"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Both properties work together during outside-click evaluation. ",
			a(t.code, { children: "ignore" }),
			" is more precise and faster for single elements, can reference a specific DOM element directly. ",
			a(t.code, { children: "ignoreSelector" }),
			" is more flexible, can match multiple elements with a single selector, better suited for dynamic content. Use for trigger buttons, helper controls, and nested interactive areas."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst triggerButton = ref()\n<\/script>\n\n<template>\n  <!-- Ignoring specific element -->\n  <MotionTransform :ignore=\"triggerButton\" />\n\n  <!-- Ignoring by selector -->\n  <MotionTransform ignoreSelector=\".trigger-button\" />\n\n  <!-- Combining both properties -->\n  <MotionTransform\n    :ignore=\"triggerButton\"\n    ignoreSelector=\".helper-controls\"\n  />\n</template>\n"
		}) })
	] });
}
function Kd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gd, { ...e })
	}) : Gd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/ignore.ru.mdx
function qd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Зоны игнорирования" }),
		"\n",
		a(t.p, { children: "Свойства для исключения элементов из проверок клика снаружи и логики автозакрытия." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "ignore" }), " — ссылка на DOM-элемент или CSS-селектор для исключения из обнаружения внешних кликов"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "ignoreSelector" }), " — CSS-селектор для исключения нескольких элементов одновременно"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Оба свойства работают вместе при оценке внешних кликов. ",
			a(t.code, { children: "ignore" }),
			" более точный и быстрее для одиночных элементов, может ссылаться на конкретный DOM-элемент напрямую. ",
			a(t.code, { children: "ignoreSelector" }),
			" более гибкий, может соответствовать нескольким элементам одним селектором, лучше подходит для динамического контента. Используйте для кнопок-триггеров, вспомогательных элементов и вложенных интерактивных областей."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst triggerButton = ref()\n<\/script>\n\n<template>\n  <!-- Игнорирование конкретного элемента -->\n  <MotionTransform :ignore=\"triggerButton\" />\n\n  <!-- Игнорирование по селектору -->\n  <MotionTransform ignoreSelector=\".trigger-button\" />\n\n  <!-- Комбинация обоих свойств -->\n  <MotionTransform\n    :ignore=\"triggerButton\"\n    ignoreSelector=\".helper-controls\"\n  />\n</template>\n"
		}) })
	] });
}
function Jd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(qd, { ...e })
	}) : qd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/motionTransform.en.mdx
function Yd(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Low-level utility for managing element transforms, state transitions, and interaction flows in components with window-like behavior." }),
		"\n",
		a(t.p, { children: "MotionTransform centralizes management of open/show/teleport states, measures element sizes, updates CSS variables, and coordinates events to create smooth and predictable animations. Provides unified API for component visibility control, click handling, and automatic closing with support for ignore zones." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Centralized state management (open, show, teleport)" }),
			"\n",
			a(t.li, { children: "Click event and auto-close coordination" }),
			"\n",
			a(t.li, { children: "Size measurement and CSS variable updates" }),
			"\n",
			a(t.li, { children: "DOM helpers for working with refs, portals, and classes" }),
			"\n",
			a(t.li, { children: "Programmatic control through imperative methods" }),
			"\n",
			a(t.li, { children: "Configurable event ignore zones" }),
			"\n",
			a(t.li, { children: "Optimized DOM manipulation" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Base utility for Window, Menu, Dialog components" }),
			"\n",
			a(t.li, { children: "Managing open/close animations" }),
			"\n",
			a(t.li, { children: "State coordination in popup elements" }),
			"\n",
			a(t.li, { children: "Component library development with window-like behavior" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { MotionTransform } from '@dxtmisha/constructor'\n\nconst element = ref()\nconst elementContext = ref()\n\nconst motion = new MotionTransform(\n  { open: false, autoClose: true },\n  // ...other params\n)\n\n// Programmatic control\nmotion.go.toOpen()\nmotion.go.toClose()\n\n// State access\nconst isOpen = motion.state.isOpen\nconst isShow = motion.state.isShow\n<\/script>\n\n<template>\n  <div ref=\"element\">\n    <!-- Content with managed transform -->\n  </div>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "This is a low-level utility for component library development, not intended for direct use in applications." }),
			"\n"
		] })
	] });
}
function Xd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Yd, { ...e })
	}) : Yd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/motionTransform.ru.mdx
function Zd(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Низкоуровневая утилита для управления трансформациями элементов, переходами состояний и потоками взаимодействия в компонентах с оконным поведением." }),
		"\n",
		a(t.p, { children: "MotionTransform централизует управление состояниями открытия/отображения/телепортации, измеряет размеры элементов, обновляет CSS-переменные и координирует события для создания плавных и предсказуемых анимаций. Предоставляет единый API для работы с видимостью компонентов, обработки кликов и автоматического закрытия с поддержкой игнорируемых зон." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Централизованное управление состояниями (open, show, teleport)" }),
			"\n",
			a(t.li, { children: "Координация событий кликов и автозакрытия" }),
			"\n",
			a(t.li, { children: "Измерение размеров и обновление CSS-переменных" }),
			"\n",
			a(t.li, { children: "DOM-хелперы для работы с refs, порталами и классами" }),
			"\n",
			a(t.li, { children: "Программное управление через императивные методы" }),
			"\n",
			a(t.li, { children: "Настраиваемые зоны игнорирования событий" }),
			"\n",
			a(t.li, { children: "Оптимизированная работа с DOM" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Базовая утилита для компонентов Window, Menu, Dialog" }),
			"\n",
			a(t.li, { children: "Управление анимациями открытия/закрытия" }),
			"\n",
			a(t.li, { children: "Координация состояний в всплывающих элементах" }),
			"\n",
			a(t.li, { children: "Разработка библиотек компонентов с оконным поведением" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\nimport { MotionTransform } from '@dxtmisha/constructor'\n\nconst element = ref()\nconst elementContext = ref()\n\nconst motion = new MotionTransform(\n  { open: false, autoClose: true },\n  // ...other params\n)\n\n// Программное управление\nmotion.go.toOpen()\nmotion.go.toClose()\n\n// Доступ к состояниям\nconst isOpen = motion.state.isOpen\nconst isShow = motion.state.isShow\n<\/script>\n\n<template>\n  <div ref=\"element\">\n    <!-- Контент с управляемой трансформацией -->\n  </div>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Это низкоуровневая утилита для разработки библиотек компонентов, не предназначенная для прямого использования в приложениях." }),
			"\n"
		] })
	] });
}
function Qd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Zd, { ...e })
	}) : Zd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/slots.en.mdx
function $d(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "control(props: MotionTransformControlItem): any" }), " — Slot for placing the trigger element that controls the animation."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "default: any" }), " — Slot for placing the content that will be animated."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "MotionTransformControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "onclick: (event) => void" }), " — handler for opening/closing the transformed element."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function ef(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($d, { ...e })
	}) : $d(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/slots.ru.mdx
function tf(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "control(props: MotionTransformControlItem): any" }), " — Слот для размещения триггерного элемента, управляющего анимацией."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "default: any" }), " — Слот для размещения контента, который будет анимирован."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "MotionTransformControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "onclick: (event) => void" }), " — обработчик открытия/закрытия трансформируемого элемента."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function nf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(tf, { ...e })
	}) : tf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/v-model.en.mdx
function rf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "State Management via v-model" }),
		"\n",
		o(t.p, { children: [
			"Two-way binding of component open state via ",
			a(t.code, { children: "v-model:open" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "open: boolean" }), " — component open state"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Open</button>\n  <Component v-model:open=\"isOpen\"/>\n</template>\n"
		}) })
	] });
}
function af(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(rf, { ...e })
	}) : rf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/v-model.ru.mdx
function of(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		o(t.p, { children: [
			"Двусторонняя привязка состояния открытия компонента через ",
			a(t.code, { children: "v-model:open" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "open: boolean" }), " — состояние открытия компонента"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Открыть</button>\n  <Component v-model:open=\"isOpen\"/>\n</template>\n"
		}) })
	] });
}
function sf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(of, { ...e })
	}) : of(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/wikiMdxMotionTransform.ts
var cf = {
	name: "MotionTransform",
	descriptions: {
		animationHeadPosition: {
			en: Ed,
			ru: Od
		},
		classes: {
			en: Ad,
			ru: Md
		},
		events: {
			en: Pd,
			ru: Id
		},
		expose: {
			en: Rd,
			ru: Bd
		},
		"expose.motionTransformElement": {
			en: Hd,
			ru: Wd
		},
		ignore: {
			en: Kd,
			ru: Jd
		},
		motionTransform: {
			en: Xd,
			ru: Qd
		},
		slots: {
			en: ef,
			ru: nf
		},
		"v-model": {
			en: af,
			ru: sf
		}
	}
};
//#endregion
//#region src/media/mdx/Page/page.en.mdx
function lf(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: [
			"A top-level semantic container component designed to wrap the main content of a page. It uses the ",
			a(t.code, { children: "<main>" }),
			" tag by default."
		] }),
		"\n",
		o(t.p, { children: [
			"Page provides capabilities for displaying main headlines, labels, descriptions, captions, and icons. The main purpose of the component is to designate the unique part of the document's content, which is critical for accessibility and SEO. The headline is rendered as ",
			a(t.code, { children: "<h1>" }),
			" by default."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Semantic wrapper for main content (",
				a(t.code, { children: "<main>" }),
				" tag)"
			] }),
			"\n",
			o(t.li, { children: [
				"Support for main headlines (default ",
				a(t.code, { children: "<h1>" }),
				"), labels, descriptions, and captions"
			] }),
			"\n",
			a(t.li, { children: "Support for icons" }),
			"\n",
			a(t.li, { children: "Customizable layout and spacing" }),
			"\n",
			a(t.li, { children: "Full support for slots for content customization" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Wrapper for unique page content" }),
			"\n",
			a(t.li, { children: "Main application screen" }),
			"\n",
			a(t.li, { children: "Article or documentation page" }),
			"\n",
			a(t.li, { children: "Root element for routed components (views)" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <Page\n    headline=\"Main Page Title\"\n    label=\"Category\"\n    description=\"Brief description of the page content\"\n  >\n    <p>Unique page content...</p>\n  </Page>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Page should be used once per page (or per active view) and should not include repeated navigation elements." }),
			"\n"
		] })
	] });
}
function uf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(lf, { ...e })
	}) : lf(e);
}
//#endregion
//#region src/media/mdx/Page/page.ru.mdx
function df(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: [
			"Семантический компонент-контейнер верхнего уровня, предназначенный для обертки основного содержимого страницы. По умолчанию использует тег ",
			a(t.code, { children: "<main>" }),
			"."
		] }),
		"\n",
		o(t.p, { children: [
			"Page предоставляет возможности для отображения главных заголовков, меток, описаний, подписей и иконок. Основное назначение компонента — обозначение уникальной части содержимого документа, что критически важно для доступности (accessibility) и SEO. Заголовок по умолчанию рендерится как ",
			a(t.code, { children: "<h1>" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Семантическая обертка основного контента (тег ",
				a(t.code, { children: "<main>" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				"Поддержка главных заголовков (по умолчанию ",
				a(t.code, { children: "<h1>" }),
				"), меток, описаний и подписей"
			] }),
			"\n",
			a(t.li, { children: "Поддержка иконок" }),
			"\n",
			a(t.li, { children: "Настраиваемый макет и отступы" }),
			"\n",
			a(t.li, { children: "Полная поддержка слотов для кастомизации контента" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Обертка для уникального контента страницы" }),
			"\n",
			a(t.li, { children: "Главный экран приложения" }),
			"\n",
			a(t.li, { children: "Страница статьи или документации" }),
			"\n",
			a(t.li, { children: "Корневой элемент для маршрутизируемых компонентов (views)" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <Page\n    headline=\"Главный заголовок страницы\"\n    label=\"Категория\"\n    description=\"Краткое описание содержимого страницы\"\n  >\n    <p>Уникальный контент страницы...</p>\n  </Page>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Page должен использоваться один раз на странице (или в активном view) и не должен включать повторяющиеся элементы навигации." }),
			"\n"
		] })
	] });
}
function ff(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(df, { ...e })
	}) : df(e);
}
//#endregion
//#region src/media/mdx/Page/wikiMdxPage.ts
var pf = {
	name: "Page",
	descriptions: { block: {
		en: uf,
		ru: ff
	} }
};
//#endregion
//#region src/media/mdx/Progress/circular.en.mdx
function mf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Circular Progress and Related Parameters" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "circular" }),
			" property enables circular progress indicator display mode as a ring indicator. For optimal control over appearance and behavior, it is recommended to use it together with additional properties."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "circular" }), " — enables circular progress display mode"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "dense" }), " — removes internal padding for compact placement in small elements"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "circular" }),
			" property activates a ring progress indicator that fills around the circumference proportionally to the current value. ",
			a(t.code, { children: "dense" }),
			" removes padding, making the indicator more compact for placement in limited space."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Basic circular progress -->\n<Progress circular />\n\n<!-- Compact circular progress -->\n<Progress circular dense />\n\n<!-- With specific value -->\n<Progress circular :value=\"75\" />\n\n<!-- Compact with value -->\n<Progress circular dense :value=\"50\" />\n"
		}) })
	] });
}
function hf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(mf, { ...e })
	}) : mf(e);
}
//#endregion
//#region src/media/mdx/Progress/circular.ru.mdx
function gf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Круглый прогресс и связанные параметры" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "circular" }),
			" включает режим круглого отображения индикатора прогресса в виде кольцевого индикатора. Для оптимального контроля над внешним видом и поведением рекомендуется использовать его совместно с дополнительными свойствами."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "circular" }), " — включает режим круглого отображения прогресса"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "dense" }), " — убирает внутренние отступы для компактного размещения в маленьких элементах"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "circular" }),
			" активирует кольцевой индикатор прогресса, который заполняется по окружности пропорционально текущему значению. ",
			a(t.code, { children: "dense" }),
			" убирает padding, делая индикатор более компактным для размещения в ограниченном пространстве."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Базовый круглый прогресс -->\n<Progress circular />\n\n<!-- Компактный круглый прогресс -->\n<Progress circular dense />\n\n<!-- С определенным значением -->\n<Progress circular :value=\"75\" />\n\n<!-- Компактный со значением -->\n<Progress circular dense :value=\"50\" />\n"
		}) })
	] });
}
function _f(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(gf, { ...e })
	}) : gf(e);
}
//#endregion
//#region src/media/mdx/Progress/delays.en.mdx
function vf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Progress Delay Management" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "delay" }),
			" and ",
			a(t.code, { children: "delayHide" }),
			" properties control timing parameters for showing and hiding the progress indicator. These properties allow creating a smoother user experience by avoiding flickers during fast operations."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "delay" }),
				" — delay before showing the indicator in milliseconds, defaults to ",
				a(t.code, { children: "360" })
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "delayHide" }),
				" — delay before hiding the indicator in milliseconds, defaults to ",
				a(t.code, { children: "200" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"The standard ",
			a(t.code, { children: "delay=\"360\"" }),
			" value is proven in practice and suitable for most cases. Increase ",
			a(t.code, { children: "delay" }),
			" for rapid operations where the indicator might interfere with perception. Decrease for long operations where immediate feedback is important."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Standard delays -->\n<Progress delay=\"360\" delayHide=\"200\" />\n\n<!-- Fast appearance -->\n<Progress delay=\"100\" delayHide=\"200\" />\n\n<!-- Slow appearance -->\n<Progress delay=\"800\" delayHide=\"300\" />\n\n<!-- No delays -->\n<Progress delay=\"0\" delayHide=\"0\" />\n"
		}) })
	] });
}
function yf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vf, { ...e })
	}) : vf(e);
}
//#endregion
//#region src/media/mdx/Progress/delays.ru.mdx
function bf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление задержками прогресса" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "delay" }),
			" и ",
			a(t.code, { children: "delayHide" }),
			" контролируют временные параметры появления и скрытия индикатора прогресса. Эти свойства позволяют создавать более плавный пользовательский опыт, избегая мерцаний при быстрых операциях."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "delay" }),
				" — задержка перед показом индикатора в миллисекундах, по умолчанию ",
				a(t.code, { children: "360" })
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "delayHide" }),
				" — задержка перед скрытием индикатора в миллисекундах, по умолчанию ",
				a(t.code, { children: "200" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Стандартное значение ",
			a(t.code, { children: "delay=\"360\"" }),
			" проверено на практике и подходит для большинства случаев. Увеличивайте ",
			a(t.code, { children: "delay" }),
			" для очень быстрых операций, где индикатор может помешать восприятию. Уменьшайте для долгих операций, где важна немедленная обратная связь."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Стандартные задержки -->\n<Progress delay=\"360\" delayHide=\"200\" />\n\n<!-- Быстрое появление -->\n<Progress delay=\"100\" delayHide=\"200\" />\n\n<!-- Медленное появление -->\n<Progress delay=\"800\" delayHide=\"300\" />\n\n<!-- Без задержек -->\n<Progress delay=\"0\" delayHide=\"0\" />\n"
		}) })
	] });
}
function xf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bf, { ...e })
	}) : bf(e);
}
//#endregion
//#region src/media/mdx/Progress/linear.en.mdx
function Sf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Linear Progress and Related Parameters" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "linear" }),
			" property enables linear progress indicator display mode as a horizontal bar. For complete control over behavior and appearance, it is recommended to use it together with additional properties."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "linear" }), " — enables linear progress display mode"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "position" }),
				" — defines the indicator position (",
				a(t.code, { children: "'top'" }),
				", ",
				a(t.code, { children: "'bottom'" }),
				", ",
				a(t.code, { children: "'static'" }),
				"), defaults to ",
				a(t.code, { children: "'top'" })
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "point" }), " — adds a point at the end of the indicator to emphasize the current position"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "linear" }),
			" property activates a horizontal progress bar that fills proportionally to the current value. ",
			a(t.code, { children: "position" }),
			" controls the placement: ",
			a(t.code, { children: "'top'" }),
			" places it at the top of the container, ",
			a(t.code, { children: "'bottom'" }),
			" at the bottom, ",
			a(t.code, { children: "'static'" }),
			" in the normal document flow. ",
			a(t.code, { children: "point" }),
			" adds a visual marker at the end of the filled portion."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Basic linear progress -->\n<Progress linear />\n\n<!-- With bottom positioning -->\n<Progress linear position=\"bottom\" />\n\n<!-- With point in static position -->\n<Progress linear position=\"static\" point />\n\n<!-- With specific value -->\n<Progress linear position=\"top\" point :value=\"65\" />\n"
		}) })
	] });
}
function Cf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sf, { ...e })
	}) : Sf(e);
}
//#endregion
//#region src/media/mdx/Progress/linear.ru.mdx
function wf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Линейный прогресс и связанные параметры" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "linear" }),
			" включает режим линейного отображения индикатора прогресса в виде горизонтальной полосы. Для полного контроля над поведением и внешним видом рекомендуется использовать его совместно с дополнительными свойствами."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "linear" }), " — включает режим линейного отображения прогресса"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "position" }),
				" — определяет позицию индикатора (",
				a(t.code, { children: "'top'" }),
				", ",
				a(t.code, { children: "'bottom'" }),
				", ",
				a(t.code, { children: "'static'" }),
				"), по умолчанию ",
				a(t.code, { children: "'top'" })
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "point" }), " — добавляет точку в конце индикатора для акцентирования текущего положения"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "linear" }),
			" активирует горизонтальную полосу прогресса, которая заполняется пропорционально текущему значению. ",
			a(t.code, { children: "position" }),
			" управляет расположением: ",
			a(t.code, { children: "'top'" }),
			" размещает индикатор в верхней части контейнера, ",
			a(t.code, { children: "'bottom'" }),
			" — в нижней, ",
			a(t.code, { children: "'static'" }),
			" — в обычном потоке документа. ",
			a(t.code, { children: "point" }),
			" добавляет визуальный маркер на конце заполненной части."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Базовый линейный прогресс -->\n<Progress linear />\n\n<!-- С позиционированием снизу -->\n<Progress linear position=\"bottom\" />\n\n<!-- С точкой в статичной позиции -->\n<Progress linear position=\"static\" point />\n\n<!-- С определенным значением -->\n<Progress linear position=\"top\" point :value=\"65\" />\n"
		}) })
	] });
}
function Tf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wf, { ...e })
	}) : wf(e);
}
//#endregion
//#region src/media/mdx/Progress/progress.en.mdx
function Ef(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for visual representation of operation progress, data loading, and long-running processes." }),
		"\n",
		a(t.p, { children: "Progress provides flexible options for indicating completion status: linear and circular progress bars, minimalist point indicators. The component automatically manages visibility with customizable appearance and hiding delays, supports both determinate progress values and indeterminate states for operations with unknown completion time." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Linear and circular progress indicators" }),
			"\n",
			a(t.li, { children: "Point variants for minimal display" }),
			"\n",
			a(t.li, { children: "Determinate mode with specific values (0-100%)" }),
			"\n",
			a(t.li, { children: "Indeterminate mode for unknown execution time" }),
			"\n",
			a(t.li, { children: "Flexible positioning (top, bottom, static)" }),
			"\n",
			a(t.li, { children: "Customizable appearance and hiding delays" }),
			"\n",
			a(t.li, { children: "Compact and inverted display modes" }),
			"\n",
			a(t.li, { children: "Automatic visibility management" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Indicating data loading from server" }),
			"\n",
			a(t.li, { children: "Displaying file upload progress" }),
			"\n",
			a(t.li, { children: "Visualizing multi-step operation execution" }),
			"\n",
			a(t.li, { children: "Global page loading indicators" }),
			"\n",
			a(t.li, { children: "Progress bars in forms and wizards" }),
			"\n",
			a(t.li, { children: "Background process indication" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst progress = ref(0)\nconst loading = ref(false)\n\nconst startLoading = () => {\n  loading.value = true\n  progress.value = 0\n\n  const interval = setInterval(() => {\n    progress.value += 10\n    if (progress.value >= 100) {\n      clearInterval(interval)\n      loading.value = false\n    }\n  }, 500)\n}\n<\/script>\n\n<template>\n  <button @click=\"startLoading\">Start Loading</button>\n\n  <!-- Linear indicator with determinate value -->\n  <Progress\n    :visible=\"loading\"\n    :value=\"progress\"\n    linear\n    position=\"top\"\n  />\n\n  <!-- Circular indicator -->\n  <Progress\n    :visible=\"loading\"\n    :value=\"progress\"\n    circular\n  />\n\n  <!-- Indeterminate indicator -->\n  <Progress\n    :visible=\"loading\"\n    linear\n    indeterminate=\"type1\"\n  />\n</template>\n"
		}) })
	] });
}
function Df(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ef, { ...e })
	}) : Ef(e);
}
//#endregion
//#region src/media/mdx/Progress/progress.ru.mdx
function Of(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для визуального отображения прогресса выполнения операций, загрузки данных и длительных процессов." }),
		"\n",
		a(t.p, { children: "Progress предоставляет гибкие варианты индикации состояния выполнения: линейные и круговые прогресс-бары, минималистичные точечные индикаторы. Компонент автоматически управляет видимостью с настраиваемыми задержками появления и скрытия, поддерживает как определенные значения прогресса, так и неопределенные состояния для операций с неизвестным временем завершения." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Линейные и круговые индикаторы прогресса" }),
			"\n",
			a(t.li, { children: "Точечные варианты для минимального отображения" }),
			"\n",
			a(t.li, { children: "Детерминированный режим с конкретными значениями (0-100%)" }),
			"\n",
			a(t.li, { children: "Индетерминированный режим для неизвестного времени выполнения" }),
			"\n",
			a(t.li, { children: "Гибкое позиционирование (top, bottom, static)" }),
			"\n",
			a(t.li, { children: "Настройка задержек появления и скрытия" }),
			"\n",
			a(t.li, { children: "Компактный и инвертированный режимы отображения" }),
			"\n",
			a(t.li, { children: "Автоматическое управление видимостью" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Индикация загрузки данных с сервера" }),
			"\n",
			a(t.li, { children: "Отображение прогресса загрузки файлов" }),
			"\n",
			a(t.li, { children: "Визуализация выполнения многоэтапных операций" }),
			"\n",
			a(t.li, { children: "Глобальные индикаторы загрузки страницы" }),
			"\n",
			a(t.li, { children: "Прогресс-бары в формах и мастерах" }),
			"\n",
			a(t.li, { children: "Индикация фоновых процессов" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst progress = ref(0)\nconst loading = ref(false)\n\nconst startLoading = () => {\n  loading.value = true\n  progress.value = 0\n\n  const interval = setInterval(() => {\n    progress.value += 10\n    if (progress.value >= 100) {\n      clearInterval(interval)\n      loading.value = false\n    }\n  }, 500)\n}\n<\/script>\n\n<template>\n  <button @click=\"startLoading\">Начать загрузку</button>\n\n  <!-- Линейный индикатор с определенным значением -->\n  <Progress\n    :visible=\"loading\"\n    :value=\"progress\"\n    linear\n    position=\"top\"\n  />\n\n  <!-- Круговой индикатор -->\n  <Progress\n    :visible=\"loading\"\n    :value=\"progress\"\n    circular\n  />\n\n  <!-- Неопределенный индикатор -->\n  <Progress\n    :visible=\"loading\"\n    linear\n    indeterminate=\"type1\"\n  />\n</template>\n"
		}) })
	] });
}
function kf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Of, { ...e })
	}) : Of(e);
}
//#endregion
//#region src/media/mdx/Progress/values.en.mdx
function Af(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Progress Value Management" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "value" }),
			" and ",
			a(t.code, { children: "max" }),
			" properties work together to determine the state of process execution. They establish the current value and upper limit for calculating the completion percentage of an operation."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value" }), " — current progress value (what portion of the process has been completed)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "max" }),
				" — maximum progress value, defaults to ",
				a(t.code, { children: "100" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Completion percentage is calculated automatically: ",
			a(t.code, { children: "(value / max) * 100" }),
			". The ",
			a(t.code, { children: "value" }),
			" is automatically constrained to the range from 0 to ",
			a(t.code, { children: "max" }),
			". When ",
			a(t.code, { children: "max" }),
			" changes, the percentage display is recalculated proportionally. Use ",
			a(t.code, { children: "max=\"100\"" }),
			" for percentage display or set it equal to the actual number of steps in the process."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Standard percentage scale -->\n<Progress :value=\"75\" :max=\"100\" />\n\n<!-- File loading progress -->\n<Progress :value=\"loadedFiles\" :max=\"totalFiles\" />\n\n<!-- Dynamic updates -->\n<Progress :value=\"currentStep\" :max=\"totalSteps\" />\n\n<!-- Custom scale -->\n<Progress :value=\"completedTasks\" :max=\"1000\" />\n"
		}) })
	] });
}
function jf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Af, { ...e })
	}) : Af(e);
}
//#endregion
//#region src/media/mdx/Progress/values.ru.mdx
function Mf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление значениями прогресса" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "value" }),
			" и ",
			a(t.code, { children: "max" }),
			" работают в связке для определения состояния выполнения процесса. Они устанавливают текущее значение и верхний предел для расчета процента завершения операции."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "value" }), " — текущее значение прогресса (какая часть процесса выполнена)"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "max" }),
				" — максимальное значение прогресса, по умолчанию ",
				a(t.code, { children: "100" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Процент выполнения рассчитывается автоматически: ",
			a(t.code, { children: "(value / max) * 100" }),
			". Значение ",
			a(t.code, { children: "value" }),
			" автоматически ограничивается диапазоном от 0 до ",
			a(t.code, { children: "max" }),
			". При изменении ",
			a(t.code, { children: "max" }),
			" процентное отображение пересчитывается пропорционально. Используйте ",
			a(t.code, { children: "max=\"100\"" }),
			" для процентного отображения или устанавливайте равным реальному количеству шагов в процессе."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<!-- Стандартная процентная шкала -->\n<Progress :value=\"75\" :max=\"100\" />\n\n<!-- Прогресс загрузки файлов -->\n<Progress :value=\"loadedFiles\" :max=\"totalFiles\" />\n\n<!-- Динамическое обновление -->\n<Progress :value=\"currentStep\" :max=\"totalSteps\" />\n\n<!-- Пользовательская шкала -->\n<Progress :value=\"completedTasks\" :max=\"1000\" />\n"
		}) })
	] });
}
function Nf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Mf, { ...e })
	}) : Mf(e);
}
//#endregion
//#region src/media/mdx/Progress/wikiMdxProgress.ts
var Pf = {
	name: "Progress",
	descriptions: {
		circular: {
			en: hf,
			ru: _f
		},
		delays: {
			en: yf,
			ru: xf
		},
		linear: {
			en: Cf,
			ru: Tf
		},
		progress: {
			en: Df,
			ru: kf
		},
		values: {
			en: jf,
			ru: Nf
		}
	}
};
//#endregion
//#region src/media/mdx/Ripple/ripple.en.mdx
function Ff(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating animated wave effect on element click." }),
		"\n",
		a(t.p, { children: "Ripple provides visual feedback during user interaction with interactive elements, automatically tracking clicks and generating an animated wave expanding from the touch point. The effect enhances user experience by making the interface more responsive and modern." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic click event tracking" }),
			"\n",
			a(t.li, { children: "Wave animation from touch point" }),
			"\n",
			o(t.li, { children: [
				"Control via ",
				a(t.code, { children: "disabled" }),
				" property"
			] }),
			"\n",
			a(t.li, { children: "Automatic animation removal after completion" }),
			"\n",
			a(t.li, { children: "Support for any interactive elements" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Buttons and links" }),
			"\n",
			a(t.li, { children: "Cards and lists" }),
			"\n",
			a(t.li, { children: "Toggles and checkboxes" }),
			"\n",
			a(t.li, { children: "Menu and navigation elements" }),
			"\n",
			a(t.li, { children: "Interactive icons" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Button with ripple effect -->\n  <button style=\"position: relative;\">\n    Click me\n    <Ripple />\n  </button>\n\n  <!-- Disabled effect -->\n  <button style=\"position: relative;\">\n    No effect\n    <Ripple :disabled=\"true\" />\n  </button>\n\n  <!-- Card with effect -->\n  <div class=\"card\" style=\"position: relative; cursor: pointer;\">\n    <h3>Interactive card</h3>\n    <p>Card content</p>\n    <Ripple />\n  </div>\n</template>\n"
		}) })
	] });
}
function If(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ff, { ...e })
	}) : Ff(e);
}
//#endregion
//#region src/media/mdx/Ripple/ripple.ru.mdx
function Lf(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания анимированного эффекта волны при клике на элемент." }),
		"\n",
		a(t.p, { children: "Ripple создает визуальную обратную связь при взаимодействии пользователя с интерактивными элементами, автоматически отслеживая клики и генерируя анимированную волну, расширяющуюся от точки касания. Эффект улучшает пользовательский опыт, делая интерфейс более отзывчивым и современным." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическое отслеживание событий клика" }),
			"\n",
			a(t.li, { children: "Анимация волны от точки касания" }),
			"\n",
			o(t.li, { children: ["Управление через свойство ", a(t.code, { children: "disabled" })] }),
			"\n",
			a(t.li, { children: "Автоматическое удаление анимации после завершения" }),
			"\n",
			a(t.li, { children: "Поддержка любых интерактивных элементов" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Кнопки и ссылки" }),
			"\n",
			a(t.li, { children: "Карточки и списки" }),
			"\n",
			a(t.li, { children: "Переключатели и чекбоксы" }),
			"\n",
			a(t.li, { children: "Элементы меню и навигации" }),
			"\n",
			a(t.li, { children: "Интерактивные иконки" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Кнопка с эффектом волны -->\n  <button style=\"position: relative;\">\n    Нажми меня\n    <Ripple />\n  </button>\n\n  <!-- Отключенный эффект -->\n  <button style=\"position: relative;\">\n    Без эффекта\n    <Ripple :disabled=\"true\" />\n  </button>\n\n  <!-- Карточка с эффектом -->\n  <div class=\"card\" style=\"position: relative; cursor: pointer;\">\n    <h3>Интерактивная карточка</h3>\n    <p>Содержимое карточки</p>\n    <Ripple />\n  </div>\n</template>\n"
		}) })
	] });
}
function Rf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Lf, { ...e })
	}) : Lf(e);
}
//#endregion
//#region src/media/mdx/Ripple/wikiMdxRipple.ts
var zf = {
	name: "Ripple",
	descriptions: { ripple: {
		en: If,
		ru: Rf
	} }
};
//#endregion
//#region src/media/mdx/Scrollbar/emits.en.mdx
function Bf(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "top" }) }),
		"\n",
		a(t.p, { children: "Event fires when the top scroll boundary state changes." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isTop: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				" if scroll is at the top position"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "reachTop" }) }),
		"\n",
		a(t.p, { children: "Event fires when the top scroll boundary is reached." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "leaveTop" }) }),
		"\n",
		a(t.p, { children: "Event fires when leaving the top scroll boundary." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "bottom" }) }),
		"\n",
		a(t.p, { children: "Event fires when the bottom scroll boundary state changes." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isBottom: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				" if scroll is at the bottom position"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "reachBottom" }) }),
		"\n",
		a(t.p, { children: "Event fires when the bottom scroll boundary is reached." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "leaveBottom" }) }),
		"\n",
		a(t.p, { children: "Event fires when leaving the bottom scroll boundary." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "edge" }) }),
		"\n",
		a(t.p, { children: "Event fires when any scroll boundary state changes." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isTop: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				" if scroll is at the top position"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isBottom: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				" if scroll is at the bottom position"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "edge: 'top' | 'bottom'" }), " — type of boundary that changed"] }),
			"\n"
		] })
	] });
}
function Vf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Bf, { ...e })
	}) : Bf(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/emits.ru.mdx
function Hf(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "top" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния достижения верхней границы скролла." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isTop: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				", если скролл находится в верхней позиции"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "reachTop" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при достижении верхней границы скролла." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "leaveTop" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при покидании верхней границы скролла." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "bottom" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния достижения нижней границы скролла." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isBottom: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				", если скролл находится в нижней позиции"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "reachBottom" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при достижении нижней границы скролла." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "leaveBottom" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при покидании нижней границы скролла." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "edge" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния любой из границ скролла." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isTop: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				", если скролл находится в верхней позиции"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isBottom: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				", если скролл находится в нижней позиции"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "edge: 'top' | 'bottom'" }), " — тип границы, которая изменилась"] }),
			"\n"
		] })
	] });
}
function Uf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Hf, { ...e })
	}) : Hf(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/emits-include.en.mdx
function Wf(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "scrollbarTop" }) }),
		"\n",
		a(t.p, { children: "Event fires when the top scroll boundary state changes (for use in parent components)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isTop: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				" if scroll is at the top position"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarReachTop" }) }),
		"\n",
		a(t.p, { children: "Event fires when the top scroll boundary is reached (for use in parent components)." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarLeaveTop" }) }),
		"\n",
		a(t.p, { children: "Event fires when leaving the top scroll boundary (for use in parent components)." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarBottom" }) }),
		"\n",
		a(t.p, { children: "Event fires when the bottom scroll boundary state changes (for use in parent components)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isBottom: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				" if scroll is at the bottom position"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarReachBottom" }) }),
		"\n",
		a(t.p, { children: "Event fires when the bottom scroll boundary is reached (for use in parent components)." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarLeaveBottom" }) }),
		"\n",
		a(t.p, { children: "Event fires when leaving the bottom scroll boundary (for use in parent components)." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarEdge" }) }),
		"\n",
		a(t.p, { children: "Event fires when any scroll boundary state changes (for use in parent components)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isTop: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				" if scroll is at the top position"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isBottom: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				" if scroll is at the bottom position"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "edge: 'top' | 'bottom'" }), " — type of boundary that changed"] }),
			"\n"
		] })
	] });
}
function Gf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Wf, { ...e })
	}) : Wf(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/emits-include.ru.mdx
function Kf(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "scrollbarTop" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния достижения верхней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isTop: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				", если скролл находится в верхней позиции"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarReachTop" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при достижении верхней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarLeaveTop" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при покидании верхней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarBottom" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния достижения нижней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isBottom: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				", если скролл находится в нижней позиции"
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarReachBottom" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при достижении нижней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarLeaveBottom" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при покидании нижней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "scrollbarEdge" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния любой из границ скролла (для использования в родительских компонентах)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isTop: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				", если скролл находится в верхней позиции"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "isBottom: boolean" }),
				" — ",
				a(t.code, { children: "true" }),
				", если скролл находится в нижней позиции"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "edge: 'top' | 'bottom'" }), " — тип границы, которая изменилась"] }),
			"\n"
		] })
	] });
}
function qf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Kf, { ...e })
	}) : Kf(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/scrollbar.en.mdx
function Jf(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for customizing scrollbar appearance and managing visual dividers at scrollable area boundaries." }),
		"\n",
		a(t.p, { children: "Scrollbar hides the browser's standard scrollbar and provides visual feedback when reaching the top or bottom of content through divider lines. The component automatically detects scrollbar width and adapts display for systems without visible scrollbars (e.g., macOS with trackpad)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Hide browser's standard scrollbar" }),
			"\n",
			a(t.li, { children: "Display dividers when reaching content boundaries" }),
			"\n",
			a(t.li, { children: "Independent control of top and bottom dividers" }),
			"\n",
			a(t.li, { children: "Inversion of divider display logic" }),
			"\n",
			a(t.li, { children: "Events for tracking scroll position" }),
			"\n",
			o(t.li, { children: [
				"Support for infinite scroll via ",
				a(t.code, { children: "reachBottom" }),
				" events"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Lists with data loading on scroll" }),
			"\n",
			a(t.li, { children: "Modal windows and dropdown menus with scrollable content" }),
			"\n",
			a(t.li, { children: "Fixed-height areas with vertical scrolling" }),
			"\n",
			a(t.li, { children: "Visual content separation during scrolling" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleReachBottom = () => {\n  // Load more data\n  loadMoreItems()\n}\n<\/script>\n\n<template>\n  <Scrollbar\n    divider\n    @reach-bottom=\"handleReachBottom\"\n  >\n    <div class=\"content\">\n      <!-- Scrollable content -->\n    </div>\n  </Scrollbar>\n</template>\n"
		}) })
	] });
}
function Yf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Jf, { ...e })
	}) : Jf(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/scrollbar.ru.mdx
function Xf(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для кастомизации внешнего вида полосы прокрутки и управления визуальными разделителями на границах прокручиваемой области." }),
		"\n",
		a(t.p, { children: "Scrollbar скрывает стандартную полосу прокрутки браузера и предоставляет визуальную обратную связь при достижении верхней или нижней границы контента через разделительные линии. Компонент автоматически определяет ширину скроллбара и адаптирует отображение для систем без видимых полос прокрутки (например, macOS с трекпадом)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Скрытие стандартной полосы прокрутки браузера" }),
			"\n",
			a(t.li, { children: "Отображение разделителей при достижении границ контента" }),
			"\n",
			a(t.li, { children: "Независимое управление верхним и нижним разделителями" }),
			"\n",
			a(t.li, { children: "Инверсия логики отображения разделителей" }),
			"\n",
			a(t.li, { children: "События для отслеживания позиции скролла" }),
			"\n",
			o(t.li, { children: ["Поддержка бесконечной прокрутки через события ", a(t.code, { children: "reachBottom" })] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Списки с подгрузкой данных при скролле" }),
			"\n",
			a(t.li, { children: "Модальные окна и выпадающие меню с прокручиваемым содержимым" }),
			"\n",
			a(t.li, { children: "Области с фиксированной высотой и вертикальной прокруткой" }),
			"\n",
			a(t.li, { children: "Визуальное разделение контента при прокрутке" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleReachBottom = () => {\n  // Загрузка дополнительных данных\n  loadMoreItems()\n}\n<\/script>\n\n<template>\n  <Scrollbar\n    divider\n    @reach-bottom=\"handleReachBottom\"\n  >\n    <div class=\"content\">\n      <!-- Прокручиваемое содержимое -->\n    </div>\n  </Scrollbar>\n</template>\n"
		}) })
	] });
}
function Zf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Xf, { ...e })
	}) : Xf(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/wikiMdxScrollbar.ts
var Qf = {
	name: "Scrollbar",
	descriptions: {
		emits: {
			en: Vf,
			ru: Uf
		},
		"emits-include": {
			en: Gf,
			ru: qf
		},
		scrollbar: {
			en: Yf,
			ru: Zf
		}
	}
};
//#endregion
//#region src/media/mdx/Section/section.en.mdx
function $f(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: [
			"A semantic container component designed for grouping related content. It uses the ",
			a(t.code, { children: "<section>" }),
			" tag by default."
		] }),
		"\n",
		o(t.p, { children: [
			"Section provides capabilities for displaying headlines, labels, descriptions, captions, and icons. The main purpose of the component is to designate thematic sections of a document, which improves the semantics and accessibility of the page. The headline is rendered as ",
			a(t.code, { children: "<h2>" }),
			" by default."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Semantic content grouping (",
				a(t.code, { children: "<section>" }),
				" tag)"
			] }),
			"\n",
			o(t.li, { children: [
				"Support for headlines (default ",
				a(t.code, { children: "<h2>" }),
				"), labels, descriptions, and captions"
			] }),
			"\n",
			a(t.li, { children: "Support for icons" }),
			"\n",
			a(t.li, { children: "Customizable layout and spacing" }),
			"\n",
			a(t.li, { children: "Full support for slots for content customization" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Thematic page sections" }),
			"\n",
			a(t.li, { children: "Content grouping in articles" }),
			"\n",
			a(t.li, { children: "Information blocks with second-level headings" }),
			"\n",
			a(t.li, { children: "Landing page sections" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <Section\n    headline=\"Section Headline\"\n    label=\"Label\"\n    description=\"Description of this section's content\"\n  >\n    <p>Main section content...</p>\n  </Section>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Section is the semantically correct choice for dividing a page into large logical blocks." }),
			"\n"
		] })
	] });
}
function ep(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($f, { ...e })
	}) : $f(e);
}
//#endregion
//#region src/media/mdx/Section/section.ru.mdx
function tp(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: [
			"Семантический компонент-контейнер, предназначенный для группировки связанного контента. По умолчанию использует тег ",
			a(t.code, { children: "<section>" }),
			"."
		] }),
		"\n",
		o(t.p, { children: [
			"Section предоставляет возможности для отображения заголовков, меток, описаний, подписей и иконок. Основное назначение компонента — обозначение тематических разделов документа, что улучшает семантику и доступность страницы. Заголовок по умолчанию рендерится как ",
			a(t.code, { children: "<h2>" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				"Семантическая группировка контента (тег ",
				a(t.code, { children: "<section>" }),
				")"
			] }),
			"\n",
			o(t.li, { children: [
				"Поддержка заголовков (по умолчанию ",
				a(t.code, { children: "<h2>" }),
				"), меток, описаний и подписей"
			] }),
			"\n",
			a(t.li, { children: "Поддержка иконок" }),
			"\n",
			a(t.li, { children: "Настраиваемый макет и отступы" }),
			"\n",
			a(t.li, { children: "Полная поддержка слотов для кастомизации контента" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Тематические разделы страницы" }),
			"\n",
			a(t.li, { children: "Группировка контента в статьях" }),
			"\n",
			a(t.li, { children: "Информационные блоки с заголовками второго уровня" }),
			"\n",
			a(t.li, { children: "Секции лэндингов" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n  <Section\n    headline=\"Заголовок секции\"\n    label=\"Метка\"\n    description=\"Описание содержимого данной секции\"\n  >\n    <p>Основной контент секции...</p>\n  </Section>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Section — это семантически верный выбор для разделения страницы на крупные логические блоки." }),
			"\n"
		] })
	] });
}
function np(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(tp, { ...e })
	}) : tp(e);
}
//#endregion
//#region src/media/mdx/Section/wikiMdxSection.ts
var rp = {
	name: "Section",
	descriptions: { section: {
		en: ep,
		ru: np
	} }
};
//#endregion
//#region src/media/mdx/Select/select.en.mdx
function ip(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating dropdown selection lists with search, filtering, multiple selection, and validation support." }),
		"\n",
		a(t.p, { children: "Select is a complete selection element that combines Field, Menu, SelectValue, and Input components to create an advanced selection interface. The component automatically displays selected values as text or chips (for multiple selection), provides built-in search and option filtering, supports AJAX data loading with caching. It integrates with all Field component features including validation, labels, counters, and messages." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Single or multiple value selection" }),
			"\n",
			a(t.li, { children: "Built-in search and real-time option filtering" }),
			"\n",
			a(t.li, { children: "AJAX data loading with caching support" }),
			"\n",
			a(t.li, { children: "Editable selected value mode (editValue)" }),
			"\n",
			a(t.li, { children: "Validation with standard Field features" }),
			"\n",
			a(t.li, { children: "Keyboard navigation and accessibility support" }),
			"\n",
			a(t.li, { children: "Automatic display of selected values (text or chips)" }),
			"\n",
			a(t.li, { children: "Maximum number of selected items limitation" }),
			"\n",
			a(t.li, { children: "Icon support for dropdown arrow and search" }),
			"\n",
			a(t.li, { children: "Auto-close control for multiple selection" }),
			"\n",
			a(t.li, { children: "Integration with Field, Menu, SelectValue, Input components" }),
			"\n",
			a(t.li, { children: "Customization via slots and attributes" }),
			"\n",
			a(t.li, { children: "Responsive design for mobile devices" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Selecting values from a predefined list of options" }),
			"\n",
			a(t.li, { children: "Filtering and searching in large data lists" }),
			"\n",
			a(t.li, { children: "Multiple item selection with quantity limitation" }),
			"\n",
			a(t.li, { children: "Selection with AJAX data loading from server" }),
			"\n",
			a(t.li, { children: "Forms with validation of selected values" }),
			"\n",
			a(t.li, { children: "Combo boxes with editing capability" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedCountry = ref('us')\nconst selectedLanguages = ref(['js', 'ts'])\n\nconst countries = [\n  { label: 'Russia', value: 'ru' },\n  { label: 'USA', value: 'us' },\n  { label: 'Germany', value: 'de' }\n]\n\nconst languages = [\n  { label: 'JavaScript', value: 'js' },\n  { label: 'TypeScript', value: 'ts' },\n  { label: 'Python', value: 'py' }\n]\n<\/script>\n\n<template>\n  <!-- Simple selection -->\n  <Select\n    v-model=\"selectedCountry\"\n    label=\"Country\"\n    placeholder=\"Choose a country\"\n    :option=\"countries\"\n  />\n\n  <!-- Multiple selection -->\n  <Select\n    v-model=\"selectedLanguages\"\n    label=\"Programming languages\"\n    :multiple=\"true\"\n    :max=\"3\"\n    helper-message=\"Select up to 3 languages\"\n    :option=\"languages\"\n  />\n</template>\n"
		}) })
	] });
}
function ap(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ip, { ...e })
	}) : ip(e);
}
//#endregion
//#region src/media/mdx/Select/select.ru.mdx
function op(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания выпадающих списков выбора с поддержкой поиска, фильтрации, множественного выбора и валидации." }),
		"\n",
		a(t.p, { children: "Select представляет собой полнофункциональный элемент выбора, объединяющий компоненты Field, Menu, SelectValue и Input для создания продвинутого интерфейса выбора. Компонент автоматически отображает выбранные значения в виде текста или чипов (для множественного выбора), предоставляет встроенный поиск и фильтрацию опций, поддерживает AJAX загрузку данных с кешированием. Интегрируется со всеми возможностями компонента Field, включая валидацию, подписи, счётчики и сообщения." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Одиночный или множественный выбор значений" }),
			"\n",
			a(t.li, { children: "Встроенный поиск и фильтрация опций в реальном времени" }),
			"\n",
			a(t.li, { children: "AJAX загрузка данных с поддержкой кеширования" }),
			"\n",
			a(t.li, { children: "Режим редактирования выбранного значения (editValue)" }),
			"\n",
			a(t.li, { children: "Валидация со стандартными функциями Field" }),
			"\n",
			a(t.li, { children: "Клавиатурная навигация и поддержка accessibility" }),
			"\n",
			a(t.li, { children: "Автоматическое отображение выбранных значений (текст или чипы)" }),
			"\n",
			a(t.li, { children: "Ограничение максимального количества выбранных элементов" }),
			"\n",
			a(t.li, { children: "Поддержка иконок для стрелки выпадающего списка и поиска" }),
			"\n",
			a(t.li, { children: "Управление автозакрытием для множественного выбора" }),
			"\n",
			a(t.li, { children: "Интеграция с компонентами Field, Menu, SelectValue, Input" }),
			"\n",
			a(t.li, { children: "Кастомизация через слоты и атрибуты" }),
			"\n",
			a(t.li, { children: "Адаптивный дизайн для мобильных устройств" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Выбор значений из предопределённого списка опций" }),
			"\n",
			a(t.li, { children: "Фильтрация и поиск в больших списках данных" }),
			"\n",
			a(t.li, { children: "Множественный выбор элементов с ограничением количества" }),
			"\n",
			a(t.li, { children: "Выбор с AJAX загрузкой данных с сервера" }),
			"\n",
			a(t.li, { children: "Формы с валидацией выбранных значений" }),
			"\n",
			a(t.li, { children: "Комбо-боксы с возможностью редактирования" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedCountry = ref('ru')\nconst selectedLanguages = ref(['js', 'ts'])\n\nconst countries = [\n  { label: 'Россия', value: 'ru' },\n  { label: 'США', value: 'us' },\n  { label: 'Германия', value: 'de' }\n]\n\nconst languages = [\n  { label: 'JavaScript', value: 'js' },\n  { label: 'TypeScript', value: 'ts' },\n  { label: 'Python', value: 'py' }\n]\n<\/script>\n\n<template>\n  <!-- Простой выбор -->\n  <Select\n    v-model=\"selectedCountry\"\n    label=\"Страна\"\n    placeholder=\"Выберите страну\"\n    :option=\"countries\"\n  />\n\n  <!-- Множественный выбор -->\n  <Select\n    v-model=\"selectedLanguages\"\n    label=\"Языки программирования\"\n    :multiple=\"true\"\n    :max=\"3\"\n    helper-message=\"Выберите до 3 языков\"\n    :option=\"languages\"\n  />\n</template>\n"
		}) })
	] });
}
function sp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(op, { ...e })
	}) : op(e);
}
//#endregion
//#region src/media/mdx/Select/wikiMdxSelect.ts
var cp = {
	name: "Select",
	descriptions: { select: {
		en: ap,
		ru: sp
	} }
};
//#endregion
//#region src/media/mdx/SelectValue/selectValue.en.mdx
function lp(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for displaying selected values in selection controls with support for single and multiple modes." }),
		"\n",
		a(t.p, { children: "SelectValue manages the visualization of selected items, automatically switching between text display for single selection and chips for multiple selection. The component integrates with the event system to handle user actions, supports icon display, placeholders, and cancel buttons for selections." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic switching between single and multiple selection modes" }),
			"\n",
			a(t.li, { children: "Chip rendering with customizable appearance for multiple selections" }),
			"\n",
			a(t.li, { children: "Placeholder support for empty state" }),
			"\n",
			a(t.li, { children: "Icon display in selected items" }),
			"\n",
			a(t.li, { children: "Cancel buttons for removing individual selections" }),
			"\n",
			a(t.li, { children: "Integration with Chip component for element styling" }),
			"\n",
			a(t.li, { children: "Handling disabled and readonly states" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Displaying selected options in selects and comboboxes" }),
			"\n",
			a(t.li, { children: "Visualizing multiple selections in lists" }),
			"\n",
			a(t.li, { children: "Showing active filters with removal capability" }),
			"\n",
			a(t.li, { children: "Displaying tags and categories" }),
			"\n",
			a(t.li, { children: "Representing selected elements in forms" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedSingle = ref([\n  { label: 'JavaScript', value: 'js', icon: 'code', index: '1' }\n])\n\nconst selectedMultiple = ref([\n  { label: 'React', value: 'react', icon: 'favorite', index: '1' },\n  { label: 'Vue.js', value: 'vue', icon: 'star', index: '2' }\n])\n\nconst handleClick = (event) => {\n  console.log('Element clicked:', event)\n}\n<\/script>\n\n<template>\n  <!-- Single selection -->\n  <SelectValue\n    :value=\"selectedSingle\"\n    :icon-show=\"true\"\n    @click=\"handleClick\"\n  />\n\n  <!-- Multiple selection with chips -->\n  <SelectValue\n    :value=\"selectedMultiple\"\n    :multiple=\"true\"\n    :icon-show=\"true\"\n    icon-cancel=\"close\"\n    @click=\"handleClick\"\n  />\n\n  <!-- With placeholder -->\n  <SelectValue\n    placeholder=\"Select a value\"\n  />\n</template>\n"
		}) })
	] });
}
function up(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(lp, { ...e })
	}) : lp(e);
}
//#endregion
//#region src/media/mdx/SelectValue/selectValue.ru.mdx
function dp(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для отображения выбранных значений в элементах управления выбором с поддержкой одиночного и множественного режимов." }),
		"\n",
		a(t.p, { children: "SelectValue управляет визуализацией выбранных элементов, автоматически переключаясь между текстовым отображением для одиночного выбора и чипами для множественного. Компонент интегрируется с системой событий для обработки действий пользователя, поддерживает отображение иконок, плейсхолдеров и кнопок отмены выбора." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическое переключение между режимами одиночного и множественного выбора" }),
			"\n",
			a(t.li, { children: "Рендеринг чипов с настраиваемым внешним видом для множественного выбора" }),
			"\n",
			a(t.li, { children: "Поддержка плейсхолдера для пустого состояния" }),
			"\n",
			a(t.li, { children: "Отображение иконок в выбранных элементах" }),
			"\n",
			a(t.li, { children: "Кнопки отмены для удаления отдельных выборов" }),
			"\n",
			a(t.li, { children: "Интеграция с Chip компонентом для стилизации элементов" }),
			"\n",
			a(t.li, { children: "Обработка состояний disabled и readonly" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Отображение выбранных опций в селектах и комбобоксах" }),
			"\n",
			a(t.li, { children: "Визуализация множественного выбора в списках" }),
			"\n",
			a(t.li, { children: "Показ активных фильтров с возможностью удаления" }),
			"\n",
			a(t.li, { children: "Отображение тегов и категорий" }),
			"\n",
			a(t.li, { children: "Представление выбранных элементов в формах" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedSingle = ref([\n  { label: 'JavaScript', value: 'js', icon: 'code', index: '1' }\n])\n\nconst selectedMultiple = ref([\n  { label: 'React', value: 'react', icon: 'favorite', index: '1' },\n  { label: 'Vue.js', value: 'vue', icon: 'star', index: '2' }\n])\n\nconst handleClick = (event) => {\n  console.log('Клик по элементу:', event)\n}\n<\/script>\n\n<template>\n  <!-- Одиночный выбор -->\n  <SelectValue\n    :value=\"selectedSingle\"\n    :icon-show=\"true\"\n    @click=\"handleClick\"\n  />\n\n  <!-- Множественный выбор с чипами -->\n  <SelectValue\n    :value=\"selectedMultiple\"\n    :multiple=\"true\"\n    :icon-show=\"true\"\n    icon-cancel=\"close\"\n    @click=\"handleClick\"\n  />\n\n  <!-- С плейсхолдером -->\n  <SelectValue\n    placeholder=\"Выберите значение\"\n  />\n</template>\n"
		}) })
	] });
}
function fp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(dp, { ...e })
	}) : dp(e);
}
//#endregion
//#region src/media/mdx/SelectValue/wikiMdxSelectValue.ts
var pp = {
	name: "SelectValue",
	descriptions: { selectValue: {
		en: up,
		ru: fp
	} }
};
//#endregion
//#region src/media/mdx/Skeleton/skeleton.en.mdx
function mp(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating animated interface placeholders during content loading." }),
		"\n",
		o(t.p, { children: [
			"Skeleton provides smooth transitions between loading state and real content display. The component automatically manages child element visibility through the ",
			a(t.code, { children: "active" }),
			" property and supports a CSS class system for creating various types of placeholders."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic content visibility management" }),
			"\n",
			a(t.li, { children: "Support for special CSS classes for placeholders" }),
			"\n",
			o(t.li, { children: [
				"Component integration via ",
				a(t.code, { children: "isSkeleton" }),
				" flag"
			] }),
			"\n",
			a(t.li, { children: "Flexible placeholder types (text, background, borders)" }),
			"\n",
			a(t.li, { children: "Animated loading effects" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Product and user card placeholders" }),
			"\n",
			a(t.li, { children: "List and table skeletons" }),
			"\n",
			a(t.li, { children: "Image and avatar placeholders" }),
			"\n",
			a(t.li, { children: "Text blocks during loading" }),
			"\n",
			a(t.li, { children: "Complex forms with multiple fields" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isLoading = ref(true)\n\nsetTimeout(() => {\n  isLoading.value = false\n}, 2000)\n<\/script>\n\n<template>\n  <Skeleton :active=\"isLoading\">\n    <!-- Placeholders visible during loading -->\n    <div class=\"skeleton__background avatar\"></div>\n    <div class=\"skeleton__text title\"></div>\n    <div class=\"skeleton__textVariant subtitle\"></div>\n\n    <!-- Real content -->\n    <img src=\"/avatar.jpg\" alt=\"User avatar\" />\n    <h3>{{ user.name }}</h3>\n    <p>{{ user.description }}</p>\n  </Skeleton>\n</template>\n"
		}) })
	] });
}
function hp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(mp, { ...e })
	}) : mp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/skeleton.ru.mdx
function gp(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания анимированных заглушек интерфейса во время загрузки контента." }),
		"\n",
		o(t.p, { children: [
			"Skeleton обеспечивает плавный переход между состоянием загрузки и отображением реального контента. Компонент автоматически управляет видимостью дочерних элементов через свойство ",
			a(t.code, { children: "active" }),
			" и поддерживает систему CSS-классов для создания различных типов заглушек."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическое управление видимостью контента" }),
			"\n",
			a(t.li, { children: "Поддержка специальных CSS-классов для заглушек" }),
			"\n",
			o(t.li, { children: ["Работа с компонентами через флаг ", a(t.code, { children: "isSkeleton" })] }),
			"\n",
			a(t.li, { children: "Гибкая настройка типов заглушек (текст, фон, границы)" }),
			"\n",
			a(t.li, { children: "Анимированные эффекты загрузки" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Заглушки карточек товаров и пользователей" }),
			"\n",
			a(t.li, { children: "Скелетоны списков и таблиц" }),
			"\n",
			a(t.li, { children: "Заглушки изображений и аватаров" }),
			"\n",
			a(t.li, { children: "Текстовые блоки во время загрузки" }),
			"\n",
			a(t.li, { children: "Сложные формы с множественными полями" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isLoading = ref(true)\n\nsetTimeout(() => {\n  isLoading.value = false\n}, 2000)\n<\/script>\n\n<template>\n  <Skeleton :active=\"isLoading\">\n    <!-- Заглушки, видимые во время загрузки -->\n    <div class=\"skeleton__background avatar\"></div>\n    <div class=\"skeleton__text title\"></div>\n    <div class=\"skeleton__textVariant subtitle\"></div>\n\n    <!-- Реальный контент -->\n    <img src=\"/avatar.jpg\" alt=\"Аватар пользователя\" />\n    <h3>{{ user.name }}</h3>\n    <p>{{ user.description }}</p>\n  </Skeleton>\n</template>\n"
		}) })
	] });
}
function _p(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(gp, { ...e })
	}) : gp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/expose.isActive.en.mdx
function vp(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "isActive: ComputedRef<boolean>" }), " — Computed state indicating whether the skeleton background animation is active."] }),
		"\n"
	] });
}
function yp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vp, { ...e })
	}) : vp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/expose.isActive.ru.mdx
function bp(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "isActive: ComputedRef<boolean>" }), " — Вычисляемое состояние, указывающее активна ли фоновая анимация скелетона."] }),
		"\n"
	] });
}
function xp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bp, { ...e })
	}) : bp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/classes.en.mdx
function Sp(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "CSS Classes for Display Control" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__text" }), " — main class for text skeleton"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__textVariant" }), " — text class variant for additional styling"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__background" }), " — main background class for skeleton"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "*__backgroundAfter" }),
				" — background class for ",
				a(t.code, { children: "::after" }),
				" pseudo-element"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "*__backgroundBefore" }),
				" — background class for ",
				a(t.code, { children: "::before" }),
				" pseudo-element"
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__backgroundVariant" }), " — background class variant"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__border" }), " — class for skeleton border styling"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__borderVariant" }), " — border class variant"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__none" }), " — class to disable skeleton display"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Where ",
			a(t.code, { children: "*" }),
			" is the component class name (e.g., ",
			a(t.code, { children: "d1-skeleton" }),
			", ",
			a(t.code, { children: "m3-skeleton" }),
			")."
		] })
	] });
}
function Cp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sp, { ...e })
	}) : Sp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/classes.ru.mdx
function wp(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "CSS классы для управления отображением" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__text" }), " — основной класс для текстового скелета"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__textVariant" }), " — вариант текстового класса для дополнительной стилизации"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__background" }), " — основной фоновый класс скелета"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "*__backgroundAfter" }),
				" — фоновый класс для псевдоэлемента ",
				a(t.code, { children: "::after" })
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "*__backgroundBefore" }),
				" — фоновый класс для псевдоэлемента ",
				a(t.code, { children: "::before" })
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__backgroundVariant" }), " — вариант фонового класса"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__border" }), " — класс для стилизации границ скелета"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__borderVariant" }), " — вариант класса границ"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*__none" }), " — класс для отключения отображения скелета"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Где ",
			a(t.code, { children: "*" }),
			" — название класса компонента (например, ",
			a(t.code, { children: "d1-skeleton" }),
			", ",
			a(t.code, { children: "m3-skeleton" }),
			")."
		] })
	] });
}
function Tp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wp, { ...e })
	}) : wp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/wikiMdxSkeleton.ts
var Ep = {
	name: "Skeleton",
	descriptions: {
		active: {
			en: hp,
			ru: _p
		},
		"expose.isActive": {
			en: yp,
			ru: xp
		},
		classes: {
			en: Cp,
			ru: Tp
		}
	}
};
//#endregion
//#region src/media/mdx/Snackbar/adaptation.en.mdx
function Dp(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Adaptation and Behavior" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "all" }),
			", ",
			a(t.code, { children: "full" }),
			", and ",
			a(t.code, { children: "limit" }),
			" property group allows for fine-tuning notification behavior for different device types and data volumes."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "all" }), " — displays all active notifications without automatically hiding them in a stack."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "full" }), " — enables full-screen or full-width display, which is a standard pattern for mobile devices."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "limit" }), " — limits the maximum number of simultaneously visible notifications, preventing screen clutter."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"These properties are intended solely for configuring behavior and adaptation for different screen sizes. It is recommended to define these values in the ",
				a(t.code, { children: "properties.json" }),
				" configuration file."
			] }),
			"\n"
		] })
	] });
}
function Op(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Dp, { ...e })
	}) : Dp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/adaptation.ru.mdx
function kp(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Адаптация и поведение" }),
		"\n",
		o(t.p, { children: [
			"Группа свойств ",
			a(t.code, { children: "all" }),
			", ",
			a(t.code, { children: "full" }),
			" и ",
			a(t.code, { children: "limit" }),
			" позволяет тонко настроить поведение уведомлений для различных типов устройств и объемов данных."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "all" }), " — отображает все активные уведомления без автоматического скрытия их в стек."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "full" }), " — включает полноэкранное или полноширинное отображение, что является стандартным паттерном для мобильных устройств."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "limit" }), " — ограничивает максимальное количество одновременно видимых уведомлений, предотвращая загромождение экрана."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Данные свойства предназначены исключительно для настройки поведения и адаптации под различные экраны. Рекомендуется задавать эти значения в конфигурационном файле ",
				a(t.code, { children: "properties.json" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function Ap(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(kp, { ...e })
	}) : kp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/add.en.mdx
function jp(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Adding Notifications" }),
		"\n",
		o(t.p, { children: [
			"The primary interaction with the ",
			a(t.code, { children: "Snackbar" }),
			" component occurs through the ",
			a(t.code, { children: "add" }),
			" method, which is used to dynamically push new messages into the queue."
		] }),
		"\n",
		a(t.h3, { children: "Method add()" }),
		"\n",
		o(t.p, { children: [
			"The component instance (via ",
			a(t.code, { children: "ref" }),
			") provides a ",
			a(t.code, { children: "data" }),
			" object containing the ",
			a(t.code, { children: "add(item: SnackbarValue)" }),
			" method. The ",
			a(t.code, { children: "item" }),
			" parameter determines the configuration and behavior of the new notification."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-typescript",
			children: "snackbar.value?.data.add({\n  data: {\n    label: 'Notification Title',\n    description: 'Description of the occurring event'\n  }\n})\n"
		}) }),
		"\n",
		a(t.h3, { children: "SnackbarValue Structure" }),
		"\n",
		a(t.p, { children: "The configuration object includes the following properties:" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "data" }) }),
				" (",
				a(t.code, { children: "SnackbarItemProps" }),
				") — Properties for the rendered component (by default ",
				a(t.code, { children: "SnackbarItem" }),
				"). This is where you pass information like ",
				a(t.code, { children: "label" }),
				", ",
				a(t.code, { children: "description" }),
				", ",
				a(t.code, { children: "icon" }),
				", action buttons, and other visual data."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "component" }) }),
				" (",
				a(t.code, { children: "any" }),
				") — Allows for passing a custom Vue component to be rendered instead of the standard ",
				a(t.code, { children: "SnackbarItem" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "highPriority" }) }),
				" (",
				a(t.code, { children: "boolean" }),
				") — If ",
				a(t.code, { children: "true" }),
				", the notification is displayed in a separate priority container (usually pinned to the top or the start of the list)."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "delay" }) }),
				" (",
				a(t.code, { children: "number" }),
				") — Individual lifespan of the notification in milliseconds. If omitted, the global ",
				a(t.code, { children: "delay" }),
				" value from the ",
				a(t.code, { children: "Snackbar" }),
				" settings is used."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "value" }) }),
				" (",
				a(t.code, { children: "string" }),
				") — A unique key for the notification. If omitted, it is generated automatically. Used for manual removal of the message via the ",
				a(t.code, { children: "remove(value)" }),
				" method."
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Custom Components" }),
		"\n",
		o(t.p, { children: [
			"For notifications with non-standard layouts, you can pass your own component via the ",
			a(t.code, { children: "component" }),
			" property. All properties specified in the ",
			a(t.code, { children: "data" }),
			" object will be passed to your component as ",
			a(t.code, { children: "props" }),
			"."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-typescript",
			children: "import MyAlert from './MyAlert.vue'\n\nsnackbar.value?.data.add({\n  component: MyAlert,\n  data: {\n    title: 'Warning!',\n    message: 'This is a message with custom styling'\n  }\n})\n"
		}) }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "highPriority" }),
			" property is recommended for critical system notifications or authorization errors, ensuring they reliably catch the user's attention and are displayed separately from the general message flow."
		] })
	] });
}
function Mp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(jp, { ...e })
	}) : jp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/add.ru.mdx
function Np(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Добавление уведомлений" }),
		"\n",
		o(t.p, { children: [
			"Основной метод взаимодействия с компонентом ",
			a(t.code, { children: "Snackbar" }),
			" — добавление новых сообщений в очередь."
		] }),
		"\n",
		a(t.h3, { children: "Метод add()" }),
		"\n",
		o(t.p, { children: [
			"Через инстанс компонента (",
			a(t.code, { children: "ref" }),
			") доступен объект ",
			a(t.code, { children: "data" }),
			", предоставляющий метод ",
			a(t.code, { children: "add(item: SnackbarValue)" }),
			". Параметр ",
			a(t.code, { children: "item" }),
			" определяет конфигурацию и поведение добавляемого уведомления."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-typescript",
			children: "snackbar.value?.data.add({\n  data: {\n    label: 'Заголовок уведомления',\n    description: 'Описание происходящего события'\n  }\n})\n"
		}) }),
		"\n",
		a(t.h3, { children: "Структура SnackbarValue" }),
		"\n",
		a(t.p, { children: "Объект конфигурации включает следующие свойства:" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "data" }) }),
				" (",
				a(t.code, { children: "SnackbarItemProps" }),
				") — параметры для отображаемого компонента (по умолчанию ",
				a(t.code, { children: "SnackbarItem" }),
				"). Здесь передаются заголовок (",
				a(t.code, { children: "label" }),
				"), описание (",
				a(t.code, { children: "description" }),
				"), иконка (",
				a(t.code, { children: "icon" }),
				"), кнопки действий и прочие визуальные данные."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "component" }) }),
				" (",
				a(t.code, { children: "any" }),
				") — позволяет передать пользовательский Vue-компонент для рендеринга вместо стандартного ",
				a(t.code, { children: "SnackbarItem" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "highPriority" }) }),
				" (",
				a(t.code, { children: "boolean" }),
				") — при значении ",
				a(t.code, { children: "true" }),
				" уведомление отображается в отдельном приоритетном контейнере (обычно закрепленном сверху или в начале списка)."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "delay" }) }),
				" (",
				a(t.code, { children: "number" }),
				") — индивидуальное время жизни уведомления в миллисекундах. Если не указано, используется глобальное значение ",
				a(t.code, { children: "delay" }),
				" из настроек ",
				a(t.code, { children: "Snackbar" }),
				"."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: a(t.code, { children: "value" }) }),
				" (",
				a(t.code, { children: "string" }),
				") — уникальный ключ уведомления. Если не передан, генерируется автоматически. Необходим для ручного удаления сообщения через метод ",
				a(t.code, { children: "remove(value)" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Использование кастомных компонентов" }),
		"\n",
		o(t.p, { children: [
			"Для вывода уведомлений с нестандартной версткой можно передать свой компонент через свойство ",
			a(t.code, { children: "component" }),
			". При этом все свойства, указанные в объекте ",
			a(t.code, { children: "data" }),
			", будут переданы в ваш компонент как ",
			a(t.code, { children: "props" }),
			"."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-typescript",
			children: "import MyAlert from './MyAlert.vue'\n\nsnackbar.value?.data.add({\n  component: MyAlert,\n  data: {\n    title: 'Внимание!',\n    message: 'Это сообщение в кастомном стиле'\n  }\n})\n"
		}) }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "highPriority" }),
			" рекомендуется использовать для критических системных уведомлений или ошибок авторизации, чтобы они гарантированно привлекали внимание пользователя и отображались отдельно от общего потока сообщений."
		] })
	] });
}
function Pp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Np, { ...e })
	}) : Np(e);
}
//#endregion
//#region src/media/mdx/Snackbar/position.en.mdx
function Fp(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Positioning" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "vertical" }),
			", ",
			a(t.code, { children: "horizontal" }),
			" and ",
			a(t.code, { children: "origin" }),
			" property group allows for determining the exact position of notifications on the screen and their entrance direction."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "vertical" }),
				" — defines the position along the vertical axis (",
				a(t.code, { children: "top" }),
				", ",
				a(t.code, { children: "bottom" }),
				")."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "horizontal" }),
				" — manages the horizontal position of notifications and their width (",
				a(t.code, { children: "right" }),
				", ",
				a(t.code, { children: "left" }),
				", ",
				a(t.code, { children: "block" }),
				")."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "origin" }),
				" — sets the direction from which the notification will slide in (",
				a(t.code, { children: "topToBottom" }),
				", ",
				a(t.code, { children: "bottomToTop" }),
				", ",
				a(t.code, { children: "rightToLeft" }),
				", ",
				a(t.code, { children: "leftToRight" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"These properties are intended solely for configuring behavior and adaptation for different screen sizes. It is recommended to define these values in the ",
				a(t.code, { children: "properties.json" }),
				" configuration file."
			] }),
			"\n"
		] })
	] });
}
function Ip(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fp, { ...e })
	}) : Fp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/position.ru.mdx
function Lp(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Позиционирование" }),
		"\n",
		o(t.p, { children: [
			"Группа свойств ",
			a(t.code, { children: "vertical" }),
			", ",
			a(t.code, { children: "horizontal" }),
			" и ",
			a(t.code, { children: "origin" }),
			" позволяет определить точное местоположение уведомлений на экране и направление их появления."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "vertical" }),
				" — определяет положение по вертикали (",
				a(t.code, { children: "top" }),
				", ",
				a(t.code, { children: "bottom" }),
				")."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "horizontal" }),
				" — определяет положение по горизонтали (",
				a(t.code, { children: "right" }),
				", ",
				a(t.code, { children: "left" }),
				", ",
				a(t.code, { children: "block" }),
				")."
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "origin" }),
				" — задает направление анимации появления (",
				a(t.code, { children: "topToBottom" }),
				", ",
				a(t.code, { children: "bottomToTop" }),
				", ",
				a(t.code, { children: "rightToLeft" }),
				", ",
				a(t.code, { children: "leftToRight" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Данные свойства предназначены исключительно для настройки поведения и адаптации под различные экраны. Рекомендуется задавать эти значения в конфигурационном файле ",
				a(t.code, { children: "properties.json" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function Rp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Lp, { ...e })
	}) : Lp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/snackbar.en.mdx
function zp(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		a(t.p, { children: "A component used to display temporary notifications (snackbars) in various parts of the screen. Snackbars provide brief messages about app processes at the bottom or top of the screen." }),
		"\n",
		a(t.p, { children: "Snackbar manages a message queue, automatically hiding notifications after a specified time or upon user interaction." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Flexible positioning (top/bottom, left/right/block)" }),
			"\n",
			a(t.li, { children: "Configurable auto-hide delay (default 8 seconds)" }),
			"\n",
			a(t.li, { children: "Supports different entrance animations based on position" }),
			"\n",
			a(t.li, { children: "Active notification list management" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Confirming user actions (e.g., \"File saved erfolgreich\")" }),
			"\n",
			a(t.li, { children: "Informing about errors or warnings" }),
			"\n",
			a(t.li, { children: "Real-time system notifications" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst snackbar = ref(null)\n\nconst addMessage = () => {\n  snackbar.value?.data.add({\n    label: 'Notification Title',\n    description: 'Description of the event that occurred in the app.',\n    button: 'Ok'\n  })\n}\n<\/script>\n\n<template>\n  <Button label=\"Show Notification\" @click=\"addMessage\" />\n\n  <Snackbar\n    ref=\"snackbar\"\n    vertical=\"bottom\"\n    horizontal=\"right\"\n  />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "It is recommended to use Snackbar for non-critical information that does not require immediate user action." }),
			"\n"
		] })
	] });
}
function Bp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zp, { ...e })
	}) : zp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/snackbar.ru.mdx
function Vp(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		a(t.p, { children: "Компонент для отображения временных уведомлений (снекбаров) в различных частях экрана. Снекбары используются для предоставления кратких сообщений о процессах приложения в нижней или верхней части экрана." }),
		"\n",
		a(t.p, { children: "Snackbar управляет очередью сообщений, автоматически скрывая их по истечении заданного времени или при взаимодействии пользователя." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Гибкое позиционирование (сверху/снизу, слева/справа/по центру)" }),
			"\n",
			a(t.li, { children: "Настраиваемая задержка автоматического скрытия (по умолчанию 8 секунд)" }),
			"\n",
			a(t.li, { children: "Поддержка различных анимаций появления в зависимости от позиции" }),
			"\n",
			a(t.li, { children: "Управление списком активных уведомлений" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Подтверждение действий пользователя (например, \"Файл успешно сохранен\")" }),
			"\n",
			a(t.li, { children: "Информирование об ошибках или предупреждениях" }),
			"\n",
			a(t.li, { children: "Системные уведомления в реальном времени" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst snackbar = ref(null)\n\nconst addMessage = () => {\n  snackbar.value?.data.add({\n    label: 'Заголовок уведомления',\n    description: 'Описание события, которое произошло в приложении.',\n    button: 'Ок'\n  })\n}\n<\/script>\n\n<template>\n  <Button label=\"Показать уведомление\" @click=\"addMessage\" />\n\n  <Snackbar\n    ref=\"snackbar\"\n    vertical=\"bottom\"\n    horizontal=\"right\"\n  />\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: "Рекомендуется использовать Snackbar для второстепенной информации, которая не требует немедленного обязательного действия со стороны пользователя." }),
			"\n"
		] })
	] });
}
function Hp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vp, { ...e })
	}) : Vp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/event.show.en.mdx
function Up(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "show" }) }),
		"\n",
		a(t.p, { children: "The event fires when a notification is displayed in the list." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "When triggered:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "A new notification has been successfully added to the list" }),
			"\n",
			a(t.li, { children: "The notification has become visible to the user" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Arguments:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "value" }),
				": ",
				a(t.code, { children: "string" }),
				" — Unique identifier of the notification"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "item" }),
				": ",
				a(t.code, { children: "SnackbarValue" }),
				" — Notification data object"
			] }),
			"\n"
		] })
	] });
}
function Wp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Up, { ...e })
	}) : Up(e);
}
//#endregion
//#region src/media/mdx/Snackbar/event.show.ru.mdx
function Gp(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "show" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при отображении уведомления в списке." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Когда срабатывает:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Новое уведомление успешно добавлено в список" }),
			"\n",
			a(t.li, { children: "Уведомление стало видимым пользователю" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "value" }),
				": ",
				a(t.code, { children: "string" }),
				" — Уникальный идентификатор уведомления"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "item" }),
				": ",
				a(t.code, { children: "SnackbarValue" }),
				" — Объект данных уведомления"
			] }),
			"\n"
		] })
	] });
}
function Kp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gp, { ...e })
	}) : Gp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/event.hide.en.mdx
function qp(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "hide" }) }),
		"\n",
		a(t.p, { children: "The event fires when a notification is hidden from the list." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "When triggered:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "The notification display time has expired (automatic hiding)" }),
			"\n",
			a(t.li, { children: "The user or program initiated the removal of the notification" }),
			"\n",
			a(t.li, { children: "The notification list has been cleared" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Arguments:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "value" }),
				": ",
				a(t.code, { children: "string" }),
				" — Unique identifier of the notification"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "item" }),
				": ",
				a(t.code, { children: "SnackbarValue" }),
				" — Notification data object"
			] }),
			"\n"
		] })
	] });
}
function Jp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(qp, { ...e })
	}) : qp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/event.hide.ru.mdx
function Yp(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "hide" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при скрытии уведомления из списка." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Когда срабатывает:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Время отображения уведомления истекло (автоматическое скрытие)" }),
			"\n",
			a(t.li, { children: "Пользователь или программа инициировали удаление уведомления" }),
			"\n",
			a(t.li, { children: "Список уведомлений был очищен" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "value" }),
				": ",
				a(t.code, { children: "string" }),
				" — Уникальный идентификатор уведомления"
			] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "item" }),
				": ",
				a(t.code, { children: "SnackbarValue" }),
				" — Объект данных уведомления"
			] }),
			"\n"
		] })
	] });
}
function Xp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Yp, { ...e })
	}) : Yp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.isItem.en.mdx
function Zp(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "isItem: ComputedRef<boolean>" }), " — Computed state indicating whether there are messages in the queue to be displayed."] }),
		"\n"
	] });
}
function Qp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Zp, { ...e })
	}) : Zp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.isItem.ru.mdx
function $p(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "isItem: ComputedRef<boolean>" }), " — Вычисляемое состояние, указывающее, есть ли в очереди сообщения для отображения."] }),
		"\n"
	] });
}
function em(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($p, { ...e })
	}) : $p(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.add.en.mdx
function tm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "add(item: SnackbarValue): void" }), " — Method for adding a new notification to the queue."] }),
		"\n"
	] });
}
function nm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(tm, { ...e })
	}) : tm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.add.ru.mdx
function rm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "add(item: SnackbarValue): void" }), " — Метод для добавления нового уведомления в очередь."] }),
		"\n"
	] });
}
function im(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(rm, { ...e })
	}) : rm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.remove.en.mdx
function am(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "remove(value: string): void" }), " — Method for removing a notification by its identifier."] }),
		"\n"
	] });
}
function om(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(am, { ...e })
	}) : am(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.remove.ru.mdx
function sm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "remove(value: string): void" }), " — Метод для удаления уведомления по его идентификатору."] }),
		"\n"
	] });
}
function cm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(sm, { ...e })
	}) : sm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.clear.en.mdx
function lm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "clear(): void" }), " — Method for completely clearing the notification queue."] }),
		"\n"
	] });
}
function um(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(lm, { ...e })
	}) : lm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.clear.ru.mdx
function dm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return o(t.ul, { children: [
		"\n",
		o(t.li, { children: [a(t.code, { children: "clear(): void" }), " — Метод для полной очистки очереди уведомлений."] }),
		"\n"
	] });
}
function fm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(dm, { ...e })
	}) : dm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/wikiMdxSnackbar.ts
var pm = {
	name: "Snackbar",
	descriptions: {
		snackbar: {
			en: Bp,
			ru: Hp
		},
		adaptation: {
			en: Op,
			ru: Ap
		},
		add: {
			en: Mp,
			ru: Pp
		},
		position: {
			en: Ip,
			ru: Rp
		},
		"event.show": {
			en: Wp,
			ru: Kp
		},
		"event.hide": {
			en: Jp,
			ru: Xp
		},
		"expose.isItem": {
			en: Qp,
			ru: em
		},
		"expose.add": {
			en: nm,
			ru: im
		},
		"expose.remove": {
			en: om,
			ru: cm
		},
		"expose.clear": {
			en: um,
			ru: fm
		}
	}
};
//#endregion
//#region src/media/mdx/SnackbarItem/snackbarItem.en.mdx
function mm(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: [
			"The component represents an individual notification card inside the ",
			a(t.code, { children: "Snackbar" }),
			". It is responsible for the visual presentation of a message, including titles, text, icons, and actions."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Displays labels, descriptions, and main text" }),
			"\n",
			a(t.li, { children: "Supports both leading and trailing icons" }),
			"\n",
			a(t.li, { children: "Default close button (cross)" }),
			"\n",
			a(t.li, { children: "Supports an additional action button" }),
			"\n",
			a(t.li, { children: "Flexible configuration via slots for complex content" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Displaying short text messages" }),
			"\n",
			a(t.li, { children: "Notifications with \"Undo\" or \"Retry\" buttons" }),
			"\n",
			a(t.li, { children: "Cards with status icons (Success, Error, Info)" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Basic Usage -->\n  <SnackbarItem\n    label=\"Message sent successfully\"\n    icon=\"check\"\n  />\n\n  <!-- With Action Button -->\n  <SnackbarItem\n    description=\"Your subscription expires in 3 days.\"\n    button=\"Renew\"\n    @click=\"onRenew\"\n  />\n\n  <!-- With Custom Content -->\n  <SnackbarItem>\n    <div class=\"custom-content\">\n      <strong>Attention!</strong>\n      <p>An unexpected server error occurred.</p>\n    </div>\n  </SnackbarItem>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"SnackbarItem is typically not used on its own but is rendered automatically by the ",
				a(t.code, { children: "Snackbar" }),
				" component based on a provided list of data."
			] }),
			"\n"
		] })
	] });
}
function hm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(mm, { ...e })
	}) : mm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/snackbarItem.ru.mdx
function gm(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: [
			"Компонент представляет собой отдельную карточку уведомления внутри ",
			a(t.code, { children: "Snackbar" }),
			". Он отвечает за визуальное представление сообщения, включая заголовок, текст, иконки и действия."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Отображение меток (label), описаний (description) и основного текста" }),
			"\n",
			a(t.li, { children: "Поддержка иконок (начальной и конечной)" }),
			"\n",
			a(t.li, { children: "Кнопка закрытия (крестик) по умолчанию" }),
			"\n",
			a(t.li, { children: "Поддержка дополнительного действия (кнопка)" }),
			"\n",
			a(t.li, { children: "Гибкая настройка через слоты для сложного контента" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Отображение короткого текстового сообщения" }),
			"\n",
			a(t.li, { children: "Уведомление с кнопкой \"Отмена\" или \"Повторить\"" }),
			"\n",
			a(t.li, { children: "Карточка с иконкой статуса (Success, Error, Info)" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Базовое использование -->\n  <SnackbarItem\n    label=\"Сообщение успешно отправлено\"\n    icon=\"check\"\n  />\n\n  <!-- С кнопкой действия -->\n  <SnackbarItem\n    description=\"Ваша подписка истекает через 3 дня.\"\n    button=\"Продлить\"\n    @click=\"onRenew\"\n  />\n\n  <!-- С пользовательским контентом -->\n  <SnackbarItem>\n    <div class=\"custom-content\">\n      <strong>Внимание!</strong>\n      <p>Произошла непредвиденная ошибка на сервере.</p>\n    </div>\n  </SnackbarItem>\n</template>\n"
		}) }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"SnackbarItem обычно не используется самостоятельно, а рендерится автоматически компонентом ",
				a(t.code, { children: "Snackbar" }),
				" на основе переданного списка данных."
			] }),
			"\n"
		] })
	] });
}
function _m(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(gm, { ...e })
	}) : gm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/component.en.mdx
function vm(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Custom Component" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "component" }),
			" and ",
			a(t.code, { children: "componentProps" }),
			" properties allow you to insert a custom Vue component inside the SnackbarItem. This is useful when the standard fields (label, description) are not enough to display complex content."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "component" }), " — accepts a component object or its name."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "componentProps" }), " — an object with props that will be passed to the component."] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "The component is rendered inside a special container with the main content area class, ensuring proper padding and styling." })
	] });
}
function ym(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vm, { ...e })
	}) : vm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/component.ru.mdx
function bm(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Кастомный компонент" }),
		"\n",
		o(t.p, { children: [
			"Свойства ",
			a(t.code, { children: "component" }),
			" и ",
			a(t.code, { children: "componentProps" }),
			" позволяют вставлять пользовательский Vue-компонент внутрь SnackbarItem. Это полезно, когда стандартных полей (label, description) недостаточно для отображения сложного контента."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Особенности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "component" }), " — принимает объект компонента или его имя."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "componentProps" }), " — объект с входными параметрами, которые будут переданы в компонент."] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Компонент рендерится внутри специального контейнера с классом основной области контента, что обеспечивает правильные отступы и стилизацию." })
	] });
}
function xm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bm, { ...e })
	}) : bm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/html.en.mdx
function Sm(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		p: "p",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "HTML Content" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "html" }),
			" property allows you to insert arbitrary HTML code directly into the body of the SnackbarItem."
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"[!WARNING]\nUsing the ",
				a(t.code, { children: "html" }),
				" property is not recommended. It can be unsafe and may lead to XSS vulnerabilities. Consider using the ",
				a(t.code, { children: "component" }),
				" property or slots for safer and more flexible rendering of complex content."
			] }),
			"\n"
		] })
	] });
}
function Cm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sm, { ...e })
	}) : Sm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/html.ru.mdx
function wm(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		p: "p",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "HTML-контент" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "html" }),
			" позволяет вставлять произвольный HTML-код непосредственно в тело SnackbarItem."
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"[!WARNING]\nИспользование свойства ",
				a(t.code, { children: "html" }),
				" не рекомендуется. Это может быть небезопасно и привести к XSS-уязвимостям. Рассмотрите возможность использования свойства ",
				a(t.code, { children: "component" }),
				" или слотов для более безопасного и гибкого рендеринга сложного содержимого."
			] }),
			"\n"
		] })
	] });
}
function Tm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wm, { ...e })
	}) : wm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/event.close.en.mdx
function Em(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "close" }) }),
		"\n",
		a(t.p, { children: "The event is triggered when the element is closed (clicking the close button or programmatic closing)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "value: string | undefined" }),
				" — element identification (the value of the ",
				a(t.code, { children: "value" }),
				" property)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst onClose = (value) => {\n  console.log('Element closed:', value)\n}\n<\/script>\n\n<template>\n  <SnackbarItem value=\"item-1\" @close=\"onClose\" />\n</template>\n"
		}) })
	] });
}
function Dm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Em, { ...e })
	}) : Em(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/event.close.ru.mdx
function Om(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "close" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при закрытии элемента (нажатии на кнопку закрытия или программном закрытии)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "value: string | undefined" }),
				" — идентификатор элемента (значение свойства ",
				a(t.code, { children: "value" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst onClose = (value) => {\n  console.log('Элемент закрыт:', value)\n}\n<\/script>\n\n<template>\n  <SnackbarItem value=\"item-1\" @close=\"onClose\" />\n</template>\n"
		}) })
	] });
}
function km(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Om, { ...e })
	}) : Om(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/role.en.mdx
function Am(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "ARIA Role" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "role" }),
			" property allows you to override the default ARIA role for the notification element. The default role is ",
			a(t.code, { children: "status" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "When to use:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "status" }), " (default) — used for messages that contain advisory information not requiring immediate action. Assistive technologies (screen readers) will announce such a message when the user is idle."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "alert" }), " — use for critical errors or warnings requiring immediate attention. Screen readers will interrupt the current task to announce this notification."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "log" }), " — use if notifications represent a sequential log of events."] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Standard notification -->\n  <SnackbarItem label=\"Download complete\" role=\"status\" />\n\n  <!-- Critical error -->\n  <SnackbarItem label=\"Connection error!\" role=\"alert\" />\n</template>\n"
		}) })
	] });
}
function jm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Am, { ...e })
	}) : Am(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/role.ru.mdx
function Mm(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "ARIA роль" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "role" }),
			" позволяет переопределить стандартную ARIA-роль для элемента уведомления. По умолчанию используется роль ",
			a(t.code, { children: "status" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Когда использовать:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "status" }), " (по умолчанию) — используйте для сообщений, которые содержат вспомогательную информацию, не требующую немедленного действия. Ассистивные технологии (экранные дикторы) озвучат такое сообщение, когда пользователь будет свободен."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "alert" }), " — используйте для критических ошибок или предупреждений, требующих немедленного внимания. Экранные дикторы прервут текущую задачу, чтобы озвучить это уведомление."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "log" }), " — используйте, если уведомления представляют собой последовательный лог событий."] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<template>\n  <!-- Стандартное уведомление -->\n  <SnackbarItem label=\"Загрузка завершена\" role=\"status\" />\n\n  <!-- Критическая ошибка -->\n  <SnackbarItem label=\"Ошибка соединения!\" role=\"alert\" />\n</template>\n"
		}) })
	] });
}
function Nm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Mm, { ...e })
	}) : Mm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/wikiMdxSnackbarItem.ts
var Pm = {
	name: "SnackbarItem",
	descriptions: {
		snackbarItem: {
			en: hm,
			ru: _m
		},
		component: {
			en: ym,
			ru: xm
		},
		html: {
			en: Cm,
			ru: Tm
		},
		eventClose: {
			en: Dm,
			ru: km
		},
		role: {
			en: jm,
			ru: Nm
		}
	}
};
//#endregion
//#region src/media/mdx/TabItem/tabItem.en.mdx
function Fm(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "A versatile component for creating tabs, menu items, and navigation links with icon and badge support." }),
		"\n",
		a(t.p, { children: "TabItem combines the functionality of a button, link, and list item. It supports various states (active, disabled), can display icons to the left and right of the text, and integrates with the Badge component to show notifications or counters. The component automatically manages ARIA attributes to ensure accessibility." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Displaying a label and icons (icon, iconTrailing)" }),
			"\n",
			a(t.li, { children: "Built-in badge support for counters" }),
			"\n",
			a(t.li, { children: "Managing selection state (selected) and activity" }),
			"\n",
			a(t.li, { children: "Navigation support via href (link) or to (router-link)" }),
			"\n",
			a(t.li, { children: "Customizable root tag (button, a, div, li)" }),
			"\n",
			a(t.li, { children: "Ripple effect on click" }),
			"\n",
			a(t.li, { children: "Skeleton support for loading state" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Tabs in navigation bars" }),
			"\n",
			a(t.li, { children: "Dropdown menu items" }),
			"\n",
			a(t.li, { children: "Selection lists (select options)" }),
			"\n",
			a(t.li, { children: "Sidebar navigation menus" }),
			"\n",
			a(t.li, { children: "Links with icons and counters" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst activeTab = ref('home')\n<\/script>\n\n<template>\n  <div class=\"tabs\">\n    <TabItem\n      label=\"Home\"\n      icon=\"home\"\n      :selected=\"activeTab === 'home'\"\n      @click=\"activeTab = 'home'\"\n    />\n    <TabItem\n      label=\"Messages\"\n      icon=\"mail\"\n      badge=\"5\"\n      :selected=\"activeTab === 'messages'\"\n      @click=\"activeTab = 'messages'\"\n    />\n    <TabItem\n      label=\"Settings\"\n      icon=\"settings\"\n      disabled\n    />\n  </div>\n</template>\n"
		}) })
	] });
}
function Im(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fm, { ...e })
	}) : Fm(e);
}
//#endregion
//#region src/media/mdx/TabItem/tabItem.ru.mdx
function Lm(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Универсальный компонент для создания вкладок, элементов меню и навигационных ссылок с поддержкой иконок и бейджей." }),
		"\n",
		a(t.p, { children: "TabItem объединяет в себе функциональность кнопки, ссылки и элемента списка. Он поддерживает различные состояния (активное, отключенное), может отображать иконки слева и справа от текста, а также интегрируется с компонентом Badge для отображения уведомлений или счетчиков. Компонент автоматически управляет ARIA-атрибутами для обеспечения доступности." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Отображение метки (label) и иконок (icon, iconTrailing)" }),
			"\n",
			a(t.li, { children: "Встроенная поддержка бейджа (badge) для счетчиков" }),
			"\n",
			a(t.li, { children: "Управление состоянием выбора (selected) и активности" }),
			"\n",
			a(t.li, { children: "Поддержка навигации через href (ссылка) или to (router-link)" }),
			"\n",
			a(t.li, { children: "Настраиваемый корневой тег (button, a, div, li)" }),
			"\n",
			a(t.li, { children: "Эффект ряби (ripple) при клике" }),
			"\n",
			a(t.li, { children: "Поддержка скелетона (skeleton) для состояния загрузки" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Вкладки в навигационных панелях" }),
			"\n",
			a(t.li, { children: "Элементы выпадающих меню" }),
			"\n",
			a(t.li, { children: "Списки выбора (select options)" }),
			"\n",
			a(t.li, { children: "Боковое меню навигации" }),
			"\n",
			a(t.li, { children: "Ссылки с иконками и счетчиками" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst activeTab = ref('home')\n<\/script>\n\n<template>\n  <TabItem\n      label=\"Главная\"\n      icon=\"home\"\n      :selected=\"activeTab === 'home'\"\n      @click=\"activeTab = 'home'\"\n    />\n</template>\n"
		}) })
	] });
}
function Rm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Lm, { ...e })
	}) : Lm(e);
}
//#endregion
//#region src/media/mdx/TabItem/wikiMdxTabItem.ts
var zm = {
	name: "TabItem",
	descriptions: { tabItem: {
		en: Im,
		ru: Rm
	} }
};
//#endregion
//#region src/media/mdx/Tabs/tabs.en.mdx
function Bm(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating tabs with navigation and animated content switching." }),
		"\n",
		a(t.p, { children: "Tabs combines a navigation bar (TabsNavigation) and a content area (MotionAxis), ensuring synchronized switching between tabs. The component supports horizontal scrolling of headers, various display styles, and content transition animations." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic synchronization of the selected tab and content" }),
			"\n",
			a(t.li, { children: "Horizontal scrolling support for a large number of tabs" }),
			"\n",
			a(t.li, { children: "Animated transitions between content panels" }),
			"\n",
			a(t.li, { children: "Flexible customization of tab appearance (icons, labels)" }),
			"\n",
			a(t.li, { children: "State management via v-model:selected" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Organizing page content by categories" }),
			"\n",
			a(t.li, { children: "Switching between different data views" }),
			"\n",
			a(t.li, { children: "Navigation within modal windows or cards" }),
			"\n",
			a(t.li, { children: "Creating step-by-step wizards" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('tab1')\nconst tabs = [\n  { text: 'Tab 1', value: 'tab1' },\n  { text: 'Tab 2', value: 'tab2' },\n  { text: 'Tab 3', value: 'tab3' }\n]\n<\/script>\n\n<template>\n  <Tabs\n    v-model:selected=\"selected\"\n    :list=\"tabs\"\n  >\n    <template #default=\"{ item }\">\n      <div class=\"p-4\">\n        Content for {{ item.text }}\n      </div>\n    </template>\n  </Tabs>\n</template>\n"
		}) })
	] });
}
function Vm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Bm, { ...e })
	}) : Bm(e);
}
//#endregion
//#region src/media/mdx/Tabs/tabs.ru.mdx
function Hm(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания вкладок с навигацией и анимированным переключением контента." }),
		"\n",
		a(t.p, { children: "Tabs объединяет навигационную панель (TabsNavigation) и область контента (MotionAxis), обеспечивая синхронизированное переключение между вкладками. Компонент поддерживает горизонтальную прокрутку заголовков, различные стили отображения и анимацию смены содержимого." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическая синхронизация выбранной вкладки и контента" }),
			"\n",
			a(t.li, { children: "Поддержка горизонтальной прокрутки для большого количества вкладок" }),
			"\n",
			a(t.li, { children: "Анимированные переходы между панелями контента" }),
			"\n",
			a(t.li, { children: "Гибкая настройка внешнего вида вкладок (иконки, метки)" }),
			"\n",
			a(t.li, { children: "Управление состоянием через v-model:selected" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Организация контента на странице по категориям" }),
			"\n",
			a(t.li, { children: "Переключение между различными видами данных" }),
			"\n",
			a(t.li, { children: "Навигация внутри модальных окон или карточек" }),
			"\n",
			a(t.li, { children: "Создание пошаговых мастеров (wizards)" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('tab1')\nconst tabs = [\n  { text: 'Вкладка 1', value: 'tab1' },\n  { text: 'Вкладка 2', value: 'tab2' },\n  { text: 'Вкладка 3', value: 'tab3' }\n]\n<\/script>\n\n<template>\n  <Tabs\n    v-model:selected=\"selected\"\n    :list=\"tabs\"\n  >\n    <template #default=\"{ item }\">\n      <div class=\"p-4\">\n        Контент для {{ item.text }}\n      </div>\n    </template>\n  </Tabs>\n</template>\n"
		}) })
	] });
}
function Um(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Hm, { ...e })
	}) : Hm(e);
}
//#endregion
//#region src/media/mdx/Tabs/v-model.en.mdx
function Wm(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "State Management via v-model" }),
		"\n",
		o(t.p, { children: [
			"Two-way binding of the selected tab via ",
			a(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: any" }), " — the value of the selected tab"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\n<\/script>\n\n<template>\n  <Tabs\n    v-model:selected=\"selectedTab\"\n    :tabs=\"[\n      { label: 'Home', value: 'home' },\n      { label: 'Profile', value: 'profile' }\n    ]\"\n  >\n    <template #home>Home Content</template>\n    <template #profile>Profile Content</template>\n  </Tabs>\n</template>\n"
		}) })
	] });
}
function Gm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Wm, { ...e })
	}) : Wm(e);
}
//#endregion
//#region src/media/mdx/Tabs/v-model.ru.mdx
function Km(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		o(t.p, { children: [
			"Двусторонняя привязка выбранной вкладки через ",
			a(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: any" }), " — значение выбранной вкладки"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\n<\/script>\n\n<template>\n  <Tabs\n    v-model:selected=\"selectedTab\"\n    :tabs=\"[\n      { label: 'Home', value: 'home' },\n      { label: 'Profile', value: 'profile' }\n    ]\"\n  >\n    <template #home>Home Content</template>\n    <template #profile>Profile Content</template>\n  </Tabs>\n</template>\n"
		}) })
	] });
}
function qm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Km, { ...e })
	}) : Km(e);
}
//#endregion
//#region src/media/mdx/Tabs/wikiMdxTabs.ts
var Jm = {
	name: "Tabs",
	descriptions: {
		tabs: {
			en: Vm,
			ru: Um
		},
		"v-model": {
			en: Gm,
			ru: qm
		}
	}
};
//#endregion
//#region src/media/mdx/TabsNavigation/tabsNavigation.en.mdx
function Ym(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating horizontal navigation with tabs." }),
		"\n",
		a(t.p, { children: "TabsNavigation manages a list of tabs, their selection, and scrolling. It supports various display styles, keyboard control, and responsiveness." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Horizontal scrolling of tabs" }),
			"\n",
			o(t.li, { children: ["Management of the selected tab via ", a(t.code, { children: "v-model:selected" })] }),
			"\n",
			a(t.li, { children: "Support for various data types (array of objects or object)" }),
			"\n",
			a(t.li, { children: "Customization of appearance (tags, attributes, dividers)" }),
			"\n",
			a(t.li, { children: "Keyboard navigation support (arrows, Enter, Space)" }),
			"\n",
			a(t.li, { children: "Animation of the active tab indicator" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Navigation between page sections" }),
			"\n",
			a(t.li, { children: "Switching data display views" }),
			"\n",
			a(t.li, { children: "Content filtering by categories" }),
			"\n",
			a(t.li, { children: "Main application menu (tab style)" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\nconst tabs = [\n  { label: 'Home', value: 'home', icon: 'home' },\n  { label: 'Profile', value: 'profile', icon: 'person' },\n  { label: 'Settings', value: 'settings', icon: 'settings' }\n]\n<\/script>\n\n<template>\n  <TabsNavigation\n    v-model:selected=\"selectedTab\"\n    :list=\"tabs\"\n    horizontal-scroll-align=\"center\"\n  />\n</template>\n"
		}) })
	] });
}
function Xm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Ym, { ...e })
	}) : Ym(e);
}
//#endregion
//#region src/media/mdx/TabsNavigation/tabsNavigation.ru.mdx
function Zm(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания горизонтальной навигации с вкладками." }),
		"\n",
		a(t.p, { children: "TabsNavigation управляет списком вкладок, их выбором и прокруткой. Поддерживает различные стили отображения, управление с клавиатуры и адаптивность." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Горизонтальная прокрутка вкладок" }),
			"\n",
			o(t.li, { children: ["Управление выбранной вкладкой через ", a(t.code, { children: "v-model:selected" })] }),
			"\n",
			a(t.li, { children: "Поддержка различных типов данных (массив объектов или объект)" }),
			"\n",
			a(t.li, { children: "Настройка внешнего вида (теги, атрибуты, разделители)" }),
			"\n",
			a(t.li, { children: "Поддержка клавиатурной навигации (стрелки, Enter, Пробел)" }),
			"\n",
			a(t.li, { children: "Анимация индикатора активной вкладки" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Навигация между разделами страницы" }),
			"\n",
			a(t.li, { children: "Переключение видов отображения данных" }),
			"\n",
			a(t.li, { children: "Фильтрация контента по категориям" }),
			"\n",
			a(t.li, { children: "Главное меню приложения (в стиле вкладок)" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\nconst tabs = [\n  { label: 'Главная', value: 'home', icon: 'home' },\n  { label: 'Профиль', value: 'profile', icon: 'person' },\n  { label: 'Настройки', value: 'settings', icon: 'settings' }\n]\n<\/script>\n\n<template>\n  <TabsNavigation\n    v-model:selected=\"selectedTab\"\n    :list=\"tabs\"\n    horizontal-scroll-align=\"center\"\n  />\n</template>\n"
		}) })
	] });
}
function Qm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Zm, { ...e })
	}) : Zm(e);
}
//#endregion
//#region src/media/mdx/TabsNavigation/v-model.en.mdx
function $m(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "State Management via v-model" }),
		"\n",
		o(t.p, { children: [
			"Two-way binding of the selected tab via ",
			a(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number | array" }), " — value of the selected tab (or tabs)"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\nconst tabs = [\n  { label: 'Home', value: 'home' },\n  { label: 'Profile', value: 'profile' }\n]\n<\/script>\n\n<template>\n  <p>Selected: {{ selectedTab }}</p>\n\n  <TabsNavigation\n    v-model:selected=\"selectedTab\"\n    :list=\"tabs\"\n  />\n</template>\n"
		}) })
	] });
}
function eh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($m, { ...e })
	}) : $m(e);
}
//#endregion
//#region src/media/mdx/TabsNavigation/v-model.ru.mdx
function th(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		o(t.p, { children: [
			"Двусторонняя привязка выбранной вкладки через ",
			a(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "selected: string | number | array" }), " — значение выбранной вкладки (или вкладок)"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\nconst tabs = [\n  { label: 'Главная', value: 'home' },\n  { label: 'Профиль', value: 'profile' }\n]\n<\/script>\n\n<template>\n  <p>Выбрано: {{ selectedTab }}</p>\n\n  <TabsNavigation\n    v-model:selected=\"selectedTab\"\n    :list=\"tabs\"\n  />\n</template>\n"
		}) })
	] });
}
function nh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(th, { ...e })
	}) : th(e);
}
//#endregion
//#region src/media/mdx/TabsNavigation/wikiMdxTabsNavigation.ts
var rh = {
	name: "TabsNavigation",
	descriptions: {
		tabsNavigation: {
			en: Xm,
			ru: Qm
		},
		"v-model": {
			en: eh,
			ru: nh
		}
	}
};
//#endregion
//#region src/media/mdx/Textarea/autosize.en.mdx
function ih(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Automatic Resizing" }),
		"\n",
		o(t.p, { children: [
			"The ",
			a(t.code, { children: "autosize" }),
			" property controls the automatic resizing of the textarea height based on its content."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Properties:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "autosize" }),
				" — enables automatic resizing mode (default is ",
				a(t.code, { children: "true" }),
				")."
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "rows" }), " — number of visible rows (HTML attribute)."] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"When ",
			a(t.code, { children: "autosize" }),
			" is enabled, the ",
			a(t.code, { children: "Textarea" }),
			" will dynamically adjust its height to fit all entered text."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst text = ref('')\n<\/script>\n\n<template>\n  <!-- Default automatic resizing -->\n  <Textarea\n    v-model=\"text\"\n    label=\"Comment\"\n    placeholder=\"Enter text...\"\n  />\n\n  <!-- Disabled auto-resizing -->\n  <Textarea\n    v-model=\"text\"\n    label=\"Fixed size\"\n    :autosize=\"false\"\n    rows=\"5\"\n  />\n</template>\n"
		}) })
	] });
}
function ah(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ih, { ...e })
	}) : ih(e);
}
//#endregion
//#region src/media/mdx/Textarea/autosize.ru.mdx
function oh(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Автоматическое изменение размера" }),
		"\n",
		o(t.p, { children: [
			"Свойство ",
			a(t.code, { children: "autosize" }),
			" управляет автоматическим изменением высоты текстового поля в зависимости от содержимого."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Свойства:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "autosize" }),
				" — включает режим автоматического изменения размера (по умолчанию ",
				a(t.code, { children: "true" }),
				")."
			] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "rows" }), " — количество видимых строк (атрибут HTML)."] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Когда ",
			a(t.code, { children: "autosize" }),
			" включен, ",
			a(t.code, { children: "Textarea" }),
			" будет динамически изменять свою высоту, чтобы вместить весь введенный текст."
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst text = ref('')\n<\/script>\n\n<template>\n  <!-- Автоматическое изменение размера по умолчанию -->\n  <Textarea\n    v-model=\"text\"\n    label=\"Комментарий\"\n    placeholder=\"Введите текст...\"\n  />\n\n  <!-- Отключенное авто-изменение размера -->\n  <Textarea\n    v-model=\"text\"\n    label=\"Фиксированный размер\"\n    :autosize=\"false\"\n    rows=\"5\"\n  />\n</template>\n"
		}) })
	] });
}
function sh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(oh, { ...e })
	}) : oh(e);
}
//#endregion
//#region src/media/mdx/Textarea/textarea.en.mdx
function ch(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Multi-line text input component with support for auto-sizing, validation, and advanced styling." }),
		"\n",
		a(t.p, { children: "Textarea provides a convenient interface for entering large amounts of text. The component automatically adjusts its height to fit the content, supports character limits, icons, labels, and helper messages. Integrates with the form validation system." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic height adjustment (autosize)" }),
			"\n",
			a(t.li, { children: "Validation support and error display" }),
			"\n",
			a(t.li, { children: "Built-in character counter" }),
			"\n",
			a(t.li, { children: "Support for icons, prefixes, and suffixes" }),
			"\n",
			a(t.li, { children: "Floating or static label" }),
			"\n",
			a(t.li, { children: "States: active, disabled, read-only, loading" }),
			"\n",
			a(t.li, { children: "Theme and size customization" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Comment and feedback fields" }),
			"\n",
			a(t.li, { children: "Contact forms" }),
			"\n",
			a(t.li, { children: "Description or biography editors" }),
			"\n",
			a(t.li, { children: "Address or note input" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst comment = ref('')\n<\/script>\n\n<template>\n  <Textarea\n    v-model=\"comment\"\n    label=\"Your comment\"\n    placeholder=\"Enter text...\"\n    autosize\n    counter\n    :maxlength=\"500\"\n  />\n</template>\n"
		}) })
	] });
}
function lh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ch, { ...e })
	}) : ch(e);
}
//#endregion
//#region src/media/mdx/Textarea/textarea.ru.mdx
function uh(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент многострочного ввода текста с поддержкой автоматического изменения размера, валидации и расширенной стилизации." }),
		"\n",
		a(t.p, { children: "Textarea предоставляет удобный интерфейс для ввода больших объемов текста. Компонент автоматически подстраивает высоту под содержимое, поддерживает ограничение количества символов, отображение иконок, меток и вспомогательных сообщений. Интегрируется с системой валидации форм." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическое изменение высоты (autosize)" }),
			"\n",
			a(t.li, { children: "Поддержка валидации и отображение ошибок" }),
			"\n",
			a(t.li, { children: "Встроенный счетчик символов" }),
			"\n",
			a(t.li, { children: "Поддержка иконок, префиксов и суффиксов" }),
			"\n",
			a(t.li, { children: "Плавающая или статическая метка (label)" }),
			"\n",
			a(t.li, { children: "Состояния: активное, отключенное, только для чтения, загрузка" }),
			"\n",
			a(t.li, { children: "Настройка темы и размеров" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Поля для комментариев и отзывов" }),
			"\n",
			a(t.li, { children: "Формы обратной связи" }),
			"\n",
			a(t.li, { children: "Редакторы описания или биографии" }),
			"\n",
			a(t.li, { children: "Ввод адреса или заметок" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst comment = ref('')\n<\/script>\n\n<template>\n  <Textarea\n    v-model=\"comment\"\n    label=\"Ваш комментарий\"\n    placeholder=\"Введите текст...\"\n    autosize\n    counter\n    :maxlength=\"500\"\n  />\n</template>\n"
		}) })
	] });
}
function dh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(uh, { ...e })
	}) : uh(e);
}
//#endregion
//#region src/media/mdx/Textarea/wikiMdxTextarea.ts
var fh = {
	name: "Textarea",
	descriptions: {
		autosize: {
			en: ah,
			ru: sh
		},
		textarea: {
			en: lh,
			ru: dh
		}
	}
};
//#endregion
//#region src/media/mdx/TextareaAutosize/textarea-autosize.en.mdx
function ph(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Text field component that automatically adjusts its height based on content." }),
		"\n",
		a(t.p, { children: "TextareaAutosize provides a multi-line text field that dynamically changes its height depending on the amount of entered text. The component uses a hidden clone element for precise height calculation, taking into account all padding and styles of the original textarea. This ensures smooth and natural behavior when entering text without manual height adjustment." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic height adjustment based on content" }),
			"\n",
			a(t.li, { children: "Precise size calculation considering padding and styles" }),
			"\n",
			a(t.li, { children: "Smooth height transitions on content change" }),
			"\n",
			a(t.li, { children: "Optional autosize toggle for fixed height" }),
			"\n",
			a(t.li, { children: "Support for all standard textarea attributes" }),
			"\n",
			a(t.li, { children: "Reactive value binding with input events" }),
			"\n",
			a(t.li, { children: "Optimized performance through requestAnimationFrame" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Comment and review fields" }),
			"\n",
			a(t.li, { children: "Feedback forms with long texts" }),
			"\n",
			a(t.li, { children: "Description and notes editors" }),
			"\n",
			a(t.li, { children: "Chats and messengers" }),
			"\n",
			a(t.li, { children: "Forms with dynamic content" }),
			"\n",
			a(t.li, { children: "Multi-line fields in adaptive interfaces" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst message = ref('')\n\nconst handleInput = (event) => {\n  console.log('Current value:', event.target.value)\n}\n<\/script>\n\n<template>\n  <div class=\"form\">\n    <TextareaAutosize\n      v-model=\"message\"\n      :inputAttrs=\"{\n        placeholder: 'Enter your message...',\n        maxlength: 500\n      }\"\n      @input=\"handleInput\"\n    />\n\n    <TextareaAutosize\n      value=\"Text field with fixed height\"\n      :autosize=\"false\"\n      :inputAttrs=\"{\n        placeholder: 'Height does not change',\n        rows: 3\n      }\"\n    />\n\n    <TextareaAutosize\n      :inputAttrs=\"{\n        placeholder: 'Comment',\n        'aria-label': 'Comment field',\n        required: true\n      }\"\n    />\n  </div>\n</template>\n"
		}) })
	] });
}
function mh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ph, { ...e })
	}) : ph(e);
}
//#endregion
//#region src/media/mdx/TextareaAutosize/textarea-autosize.ru.mdx
function hh(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент текстового поля с автоматической подстройкой высоты под содержимое." }),
		"\n",
		a(t.p, { children: "TextareaAutosize предоставляет многострочное текстовое поле, которое динамически изменяет свою высоту в зависимости от объёма введённого текста. Компонент использует скрытый элемент-клон для точного расчёта необходимой высоты, учитывая все отступы и стили исходного textarea. Это обеспечивает плавное и естественное поведение при вводе текста без ручной настройки высоты." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическая подстройка высоты под содержимое" }),
			"\n",
			a(t.li, { children: "Точный расчёт размера с учётом padding и стилей" }),
			"\n",
			a(t.li, { children: "Плавные переходы высоты при изменении контента" }),
			"\n",
			a(t.li, { children: "Опциональное отключение autosize для фиксированной высоты" }),
			"\n",
			a(t.li, { children: "Поддержка всех стандартных атрибутов textarea" }),
			"\n",
			a(t.li, { children: "Реактивная привязка значения с событиями input" }),
			"\n",
			a(t.li, { children: "Оптимизированная производительность через requestAnimationFrame" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Поля для комментариев и отзывов" }),
			"\n",
			a(t.li, { children: "Формы обратной связи с длинными текстами" }),
			"\n",
			a(t.li, { children: "Редакторы описаний и заметок" }),
			"\n",
			a(t.li, { children: "Чаты и мессенджеры" }),
			"\n",
			a(t.li, { children: "Формы с динамическим контентом" }),
			"\n",
			a(t.li, { children: "Многострочные поля в адаптивных интерфейсах" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst message = ref('')\n\nconst handleInput = (event) => {\n  console.log('Текущее значение:', event.target.value)\n}\n<\/script>\n\n<template>\n  <div class=\"form\">\n    <TextareaAutosize\n      v-model=\"message\"\n      :inputAttrs=\"{\n        placeholder: 'Введите ваше сообщение...',\n        maxlength: 500\n      }\"\n      @input=\"handleInput\"\n    />\n\n    <TextareaAutosize\n      value=\"Текстовое поле с фиксированной высотой\"\n      :autosize=\"false\"\n      :inputAttrs=\"{\n        placeholder: 'Высота не изменяется',\n        rows: 3\n      }\"\n    />\n\n    <TextareaAutosize\n      :inputAttrs=\"{\n        placeholder: 'Комментарий',\n        'aria-label': 'Поле комментария',\n        required: true\n      }\"\n    />\n  </div>\n</template>\n"
		}) })
	] });
}
function gh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(hh, { ...e })
	}) : hh(e);
}
//#endregion
//#region src/media/mdx/TextareaAutosize/wikiMdxTextareaAutosize.ts
var _h = {
	name: "TextareaAutosize",
	descriptions: { "textarea-autosize": {
		en: mh,
		ru: gh
	} }
};
//#endregion
//#region src/media/mdx/Tooltip/tooltip.en.mdx
function vh(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for displaying pop-up tooltips that provide additional information about an element on hover or focus." }),
		"\n",
		a(t.p, { children: "Tooltip is automatically positioned relative to the target element and can contain a text description or custom content. The component supports configuring show and hide delays, and can be equipped with an indicator (arrow) for visual connection." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key Features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Automatic positioning" }),
			"\n",
			a(t.li, { children: "Support for an indicator (arrow)" }),
			"\n",
			a(t.li, { children: "Configuration of delays (delay, delayHide)" }),
			"\n",
			a(t.li, { children: "Visibility control via properties or events" }),
			"\n",
			a(t.li, { children: "Slot support for content customization" }),
			"\n",
			a(t.li, { children: "Adaptability and accessibility" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Explanations for icons and buttons" }),
			"\n",
			a(t.li, { children: "Displaying full text for truncated elements" }),
			"\n",
			a(t.li, { children: "Contextual hints for input fields" }),
			"\n",
			a(t.li, { children: "Additional information in the interface" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { Tooltip } from 'dxt-ui'\n<\/script>\n\n<template>\n  <div class=\"p-4\">\n    <Tooltip label=\"Tooltip text\">\n      <button>Hover me</button>\n    </Tooltip>\n  </div>\n</template>\n"
		}) })
	] });
}
function yh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(vh, { ...e })
	}) : vh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/tooltip.ru.mdx
function bh(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для отображения всплывающих подсказок, предоставляющих дополнительную информацию об элементе при наведении или фокусировке." }),
		"\n",
		a(t.p, { children: "Tooltip автоматически позиционируется относительно целевого элемента и может содержать текстовое описание или произвольный контент. Компонент поддерживает настройку задержек появления и скрытия, а также может быть оснащен указателем (стрелкой) для визуальной связи." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Автоматическое позиционирование" }),
			"\n",
			a(t.li, { children: "Поддержка указателя (стрелки)" }),
			"\n",
			a(t.li, { children: "Настройка задержек (delay, delayHide)" }),
			"\n",
			a(t.li, { children: "Управление видимостью через свойства или события" }),
			"\n",
			a(t.li, { children: "Поддержка слотов для кастомизации контента" }),
			"\n",
			a(t.li, { children: "Адаптивность и доступность" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Пояснения к иконкам и кнопкам" }),
			"\n",
			a(t.li, { children: "Отображение полного текста для сокращенных элементов" }),
			"\n",
			a(t.li, { children: "Контекстные подсказки для полей ввода" }),
			"\n",
			a(t.li, { children: "Дополнительная информация в интерфейсе" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { Tooltip } from 'dxt-ui'\n<\/script>\n\n<template>\n  <div class=\"p-4\">\n    <Tooltip label=\"Подсказка\">\n      <button>Наведи на меня</button>\n    </Tooltip>\n  </div>\n</template>\n"
		}) })
	] });
}
function xh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(bh, { ...e })
	}) : bh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/event.tooltip.en.mdx
function Sh(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "tooltip" }) }),
		"\n",
		a(t.p, { children: "The event is triggered when the visibility state changes (open/close)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "open: boolean" }),
				" — open state (",
				a(t.code, { children: "true" }),
				" - open, ",
				a(t.code, { children: "false" }),
				" - closed)"
			] }),
			"\n"
		] })
	] });
}
function Ch(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Sh, { ...e })
	}) : Sh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/event.tooltip.ru.mdx
function wh(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "tooltip" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния видимости (открытие/закрытие)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "open: boolean" }),
				" — состояние открытия (",
				a(t.code, { children: "true" }),
				" - открыто, ",
				a(t.code, { children: "false" }),
				" - закрыто)"
			] }),
			"\n"
		] })
	] });
}
function Th(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(wh, { ...e })
	}) : wh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/slot.control.en.mdx
function Eh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "control(props: TooltipControlItem): any" }), " — Slot for the control element that triggers the tooltip."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "TooltipControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — open state."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: object" }), " — properties for the control element (class, onclick, onmouseover, onmouseout)."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Dh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Eh, { ...e })
	}) : Eh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/slot.control.ru.mdx
function Oh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "control(props: TooltipControlItem): any" }), " — Слот для элемента управления, вызывающего подсказку."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "TooltipControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — состояние открытия."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: object" }), " — свойства для элемента управления (class, onclick, onmouseover, onmouseout)."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function kh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Oh, { ...e })
	}) : Oh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/wikiMdxTooltip.ts
var Ah = {
	name: "Tooltip",
	descriptions: {
		tooltip: {
			en: yh,
			ru: xh
		},
		"event.tooltip": {
			en: Ch,
			ru: Th
		},
		"slot.control": {
			en: Dh,
			ru: kh
		}
	}
};
//#endregion
//#region src/media/mdx/Window/axis.en.mdx
function jh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Positioning Direction (axis)" }),
		"\n",
		o(t.p, { children: [
			"Controls the axis of window placement relative to the anchor element. Default: ",
			a(t.code, { children: "y" }),
			"."
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Applies only in menu mode (",
				a(t.code, { children: "adaptive=\"menu\"" }),
				" or ",
				a(t.code, { children: "adaptive=\"menuWindow\"" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Possible values:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'x'" }), " — horizontal axis (left or right of anchor)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'y'" }), " — vertical axis (top or bottom of anchor)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'on'" }), " — over anchor (window centers on element)"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Behavior" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Component automatically selects the placement side with the most available space" }),
			"\n",
			o(t.li, { children: [
				"When using context menu (",
				a(t.code, { children: "contextmenu" }),
				"), positioning occurs from cursor coordinates"
			] }),
			"\n",
			a(t.li, { children: "Window always stays within visible screen area (viewport)" }),
			"\n",
			o(t.li, { children: [
				"Indent from anchor is set via ",
				a(t.code, { children: "indent" }),
				" property (default 4px)"
			] }),
			"\n"
		] })
	] });
}
function Mh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(jh, { ...e })
	}) : jh(e);
}
//#endregion
//#region src/media/mdx/Window/axis.ru.mdx
function Nh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Направление позиционирования (axis)" }),
		"\n",
		o(t.p, { children: [
			"Управляет осью размещения окна относительно элемента-якоря. По умолчанию: ",
			a(t.code, { children: "y" }),
			"."
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			o(t.p, { children: [
				"Применяется только в режиме меню (",
				a(t.code, { children: "adaptive=\"menu\"" }),
				" или ",
				a(t.code, { children: "adaptive=\"menuWindow\"" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "'x'" }), " — горизонтальная ось (слева или справа от якоря)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'y'" }), " — вертикальная ось (сверху или снизу от якоря)"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "'on'" }), " — поверх якоря (окно центрируется над элементом)"] }),
			"\n"
		] }),
		"\n",
		a(t.h3, { children: "Поведение" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Компонент автоматически выбирает сторону размещения с наибольшим доступным пространством" }),
			"\n",
			o(t.li, { children: [
				"При использовании контекстного меню (",
				a(t.code, { children: "contextmenu" }),
				") позиционирование происходит от координат курсора"
			] }),
			"\n",
			a(t.li, { children: "Окно всегда остается в пределах видимой области экрана (viewport)" }),
			"\n",
			o(t.li, { children: [
				"Отступ от якоря задается через свойство ",
				a(t.code, { children: "indent" }),
				" (по умолчанию 4px)"
			] }),
			"\n"
		] })
	] });
}
function Ph(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Nh, { ...e })
	}) : Nh(e);
}
//#endregion
//#region src/media/mdx/Window/classes.en.mdx
function Fh(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "CSS Classes for Behavior Control" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--block" }), " — prevents window from closing when clicking outside its boundaries"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--blockChildren" }), " — prevents current window from closing"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--blockOther" }), " — prevents other windows from closing until current one is closed"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--close" }), " — applies to elements for closing the window"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--controlOpenOnly" }), " — applies to control elements that only open the window"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--controlStatic" }), " — applies to control elements in static mode"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--static" }), " — applies to elements inside window, canceling all actions"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Where ",
			a(t.code, { children: "*" }),
			" is the component class name (e.g., ",
			a(t.code, { children: "d1-window" }),
			", ",
			a(t.code, { children: "m3-window" }),
			")."
		] })
	] });
}
function Ih(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Fh, { ...e })
	}) : Fh(e);
}
//#endregion
//#region src/media/mdx/Window/classes.ru.mdx
function Lh(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "CSS классы для управления поведением" }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--block" }), " — предотвращает закрытие окна при клике вне его границ"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--blockChildren" }), " — предотвращает закрытие текущего окна"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--blockOther" }), " — предотвращает закрытие других окон до закрытия текущего"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--close" }), " — применяется к элементам для закрытия окна"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--controlOpenOnly" }), " — применяется к элементам управления, которые только открывают окно"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--controlStatic" }), " — применяется к элементам управления в статическом режиме"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "*--static" }), " — применяется к элементам внутри окна, отменяя все действия"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: [
			"Где ",
			a(t.code, { children: "*" }),
			" — название класса компонента (например, ",
			a(t.code, { children: "d1-window" }),
			", ",
			a(t.code, { children: "m3-window" }),
			")."
		] })
	] });
}
function Rh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Lh, { ...e })
	}) : Lh(e);
}
//#endregion
//#region src/media/mdx/Window/event.window.en.mdx
function zh(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "window" }) }),
		"\n",
		a(t.p, { children: "Event fires when the window state changes (open/close)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "options: WindowEmitOptions" }), " — object with window data"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "WindowEmitOptions structure:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "id: string" }), " — unique window identifier"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "element: HTMLDivElement" }), " — window DOM element"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "control: HTMLElement" }), " — control DOM element"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "open: boolean" }),
				" — window open state (",
				a(t.code, { children: "true" }),
				" - open, ",
				a(t.code, { children: "false" }),
				" - closed)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleWindow = (options) => {\n  console.log('Window ID:', options.id)\n  console.log('Window is open:', options.open)\n  console.log('Window element:', options.element)\n  console.log('Control element:', options.control)\n}\n<\/script>\n\n<template>\n  <Component @window=\"handleWindow\">\n    <template #default>\n      <p>Window content</p>\n    </template>\n  </Component>\n</template>\n"
		}) })
	] });
}
function Bh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(zh, { ...e })
	}) : zh(e);
}
//#endregion
//#region src/media/mdx/Window/event.window.ru.mdx
function Vh(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h3, { children: a(t.code, { children: "window" }) }),
		"\n",
		a(t.p, { children: "Событие срабатывает при изменении состояния окна (открытие/закрытие)." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "options: WindowEmitOptions" }), " — объект с данными окна"] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Структура WindowEmitOptions:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "id: string" }), " — уникальный идентификатор окна"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "element: HTMLDivElement" }), " — DOM элемент окна"] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "control: HTMLElement" }), " — DOM элемент управления"] }),
			"\n",
			o(t.li, { children: [
				a(t.code, { children: "open: boolean" }),
				" — состояние открытия окна (",
				a(t.code, { children: "true" }),
				" - открыто, ",
				a(t.code, { children: "false" }),
				" - закрыто)"
			] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nconst handleWindow = (options) => {\n  console.log('ID окна:', options.id)\n  console.log('Окно открыто:', options.open)\n  console.log('Элемент окна:', options.element)\n  console.log('Элемент управления:', options.control)\n}\n<\/script>\n\n<template>\n  <Component @window=\"handleWindow\">\n    <template #default>\n      <p>Содержимое окна</p>\n    </template>\n  </Component>\n</template>\n"
		}) })
	] });
}
function Hh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Vh, { ...e })
	}) : Vh(e);
}
//#endregion
//#region src/media/mdx/Window/expose.en.mdx
function Uh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "id: string" }), " — Unique identifier of the window."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — Reactive state of window visibility."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "control: WindowControlItem" }), " — Control item data for window management."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "WindowControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — reactive open state."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "class: string" }), " — window CSS class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onclick: WindowEventClick" }), " — click event handler."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onKeydown: WindowEventClick" }), " — keydown event handler."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "oncontextmenu: WindowEventClick" }), " — context menu event handler."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classesWindow: WindowClassesList" }), " — list of CSS classes for window styling."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: Record<string, any>" }), " — binding properties for the control element."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "setOpen(open: boolean): Promise<void>" }), " — Sets window open state."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "toOpen(): Promise<void>" }), " — Transition to opening state."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "toClose(): Promise<void>" }), " — Transition to closing state."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "toggle(): Promise<void>" }), " — Toggles window visibility (opens if closed, closes if open)."] }),
			"\n"
		] })
	] });
}
function Wh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Uh, { ...e })
	}) : Uh(e);
}
//#endregion
//#region src/media/mdx/Window/expose.ru.mdx
function Gh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "id: string" }), " — Уникальный идентификатор окна."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — Реактивное состояние видимости окна."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "control: WindowControlItem" }), " — Данные элемента управления для управления окном."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "WindowControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — реактивное состояние открытия."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "class: string" }), " — CSS-класс окна."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onclick: WindowEventClick" }), " — обработчик события клика."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onKeydown: WindowEventClick" }), " — обработчик события нажатия клавиши."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "oncontextmenu: WindowEventClick" }), " — обработчик события контекстного меню."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classesWindow: WindowClassesList" }), " — список CSS-классов для стилизации окна."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: Record<string, any>" }), " — свойства привязки для элемента управления."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "setOpen(open: boolean): Promise<void>" }), " — Устанавливает состояние открытия окна."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "toOpen(): Promise<void>" }), " — Переход в состояние открытия окна."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "toClose(): Promise<void>" }), " — Переход в состояние закрытия окна."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "toggle(): Promise<void>" }), " — Переключает видимость окна (открывает, если закрыто, и закрывает, если открыто)."] }),
			"\n"
		] })
	] });
}
function Kh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Gh, { ...e })
	}) : Gh(e);
}
//#endregion
//#region src/media/mdx/Window/hooks.en.mdx
function qh(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		strong: "strong",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Lifecycle Hooks" }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "preparation" }) }),
		"\n",
		a(t.p, { children: "Called before the opening/closing process begins. Used for preparing elements and data." }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Type:" }),
			" ",
			a(t.code, { children: "() => void | Promise<void>" })
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "beforeOpening" }) }),
		"\n",
		o(t.p, { children: [
			"Called before opening the window. Returning ",
			a(t.code, { children: "false" }),
			" cancels opening."
		] }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Type:" }),
			" ",
			a(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "beforeClosing" }) }),
		"\n",
		o(t.p, { children: [
			"Called before closing the window. Returning ",
			a(t.code, { children: "false" }),
			" cancels closing."
		] }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Type:" }),
			" ",
			a(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "opening" }) }),
		"\n",
		a(t.p, { children: "Called after the window finishes opening (after animation)." }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Type:" }),
			" ",
			a(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "closing" }) }),
		"\n",
		a(t.p, { children: "Called after the window finishes closing (after animation)." }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Type:" }),
			" ",
			a(t.code, { children: "() => boolean | Promise<boolean>" })
		] })
	] });
}
function Jh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(qh, { ...e })
	}) : qh(e);
}
//#endregion
//#region src/media/mdx/Window/hooks.ru.mdx
function Yh(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		strong: "strong",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Хуки жизненного цикла" }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "preparation" }) }),
		"\n",
		a(t.p, { children: "Вызывается перед началом процесса открытия/закрытия. Используется для подготовки элементов и данных." }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Тип:" }),
			" ",
			a(t.code, { children: "() => void | Promise<void>" })
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "beforeOpening" }) }),
		"\n",
		o(t.p, { children: [
			"Вызывается перед открытием окна. Возврат ",
			a(t.code, { children: "false" }),
			" отменяет открытие."
		] }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Тип:" }),
			" ",
			a(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "beforeClosing" }) }),
		"\n",
		o(t.p, { children: [
			"Вызывается перед закрытием окна. Возврат ",
			a(t.code, { children: "false" }),
			" отменяет закрытие."
		] }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Тип:" }),
			" ",
			a(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "opening" }) }),
		"\n",
		a(t.p, { children: "Вызывается после завершения открытия окна (после анимации)." }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Тип:" }),
			" ",
			a(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		a(t.h3, { children: a(t.code, { children: "closing" }) }),
		"\n",
		a(t.p, { children: "Вызывается после завершения закрытия окна (после анимации)." }),
		"\n",
		o(t.p, { children: [
			a(t.strong, { children: "Тип:" }),
			" ",
			a(t.code, { children: "() => boolean | Promise<boolean>" })
		] })
	] });
}
function Xh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Yh, { ...e })
	}) : Yh(e);
}
//#endregion
//#region src/media/mdx/Window/slots.en.mdx
function Zh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "control(props: WindowControlItem): any" }), " — Slot for placing window control elements (close buttons, minimize, etc.)."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "title(props: WindowControlItem): any" }), " — Slot for placing window title in the header."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "footer(props: WindowControlItem): any" }), " — Slot for placing content at the bottom of the window (action buttons, info, etc.)."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "default(props: WindowControlItem): any" }), " — Main slot for placing the primary window content."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "WindowControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — reactive open state."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "class: string" }), " — window CSS class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onclick: WindowEventClick" }), " — click event handler."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onKeydown: WindowEventClick" }), " — keydown event handler."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "oncontextmenu: WindowEventClick" }), " — context menu event handler."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classesWindow: WindowClassesList" }), " — list of CSS classes for window styling."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: Record<string, any>" }), " — binding properties for the control element."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "WindowClassesList:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "block: string" }), " — main block class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "blockChildren: string" }), " — block children class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "blockOther: string" }), " — block other windows class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "close: string" }), " — close button class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "static: string" }), " — static positioning class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "control: string" }), " — control element class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "controlId: string" }), " — control ID class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "controlStatic: string" }), " — static control class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "controlOpenOnly: string" }), " — open-only control class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "controlActive: string" }), " — active control class."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "persistent: string" }), " — persistent window class."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "WindowEventClick:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "(event: MouseEvent & TouchEvent | KeyboardEvent) => Promise<void>" }), " — window event click handler."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Qh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(Zh, { ...e })
	}) : Zh(e);
}
//#endregion
//#region src/media/mdx/Window/slots.ru.mdx
function $h(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "control(props: WindowControlItem): any" }), " — Слот управления для размещения элементов управления окном (кнопки закрытия, сворачивания и т.д.)."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "title(props: WindowControlItem): any" }), " — Слот заголовка для размещения заголовка окна в шапке."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "footer(props: WindowControlItem): any" }), " — Слот подвала для размещения содержимого в нижней части окна (кнопки действий, инфо и т.д.)."] }),
			"\n",
			o(t.li, { children: [a(t.code, { children: "default(props: WindowControlItem): any" }), " — Основной слот для размещения главного содержимого окна."] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "WindowControlItem:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "open: Ref<boolean>" }), " — реактивное состояние открытия."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "class: string" }), " — CSS-класс окна."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onclick: WindowEventClick" }), " — обработчик события клика."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "onKeydown: WindowEventClick" }), " — обработчик события нажатия клавиши."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "oncontextmenu: WindowEventClick" }), " — обработчик события контекстного меню."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "classesWindow: WindowClassesList" }), " — список CSS-классов для стилизации окна."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "binds: Record<string, any>" }), " — свойства привязки для элемента управления."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "WindowClassesList:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "block: string" }), " — основной класс блока."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "blockChildren: string" }), " — класс дочерних элементов блока."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "blockOther: string" }), " — класс блокировки других окон."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "close: string" }), " — класс кнопки закрытия."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "static: string" }), " — класс статического позиционирования."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "control: string" }), " — класс элемента управления."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "controlId: string" }), " — класс ID управления."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "controlStatic: string" }), " — класс статического управления."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "controlOpenOnly: string" }), " — класс управления только для открытого состояния."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "controlActive: string" }), " — класс активного управления."] }),
				"\n",
				o(t.li, { children: [a(t.code, { children: "persistent: string" }), " — класс постоянного окна."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		o(t.blockquote, { children: [
			"\n",
			a(t.p, { children: a(t.strong, { children: "WindowEventClick:" }) }),
			"\n",
			o(t.ul, { children: [
				"\n",
				o(t.li, { children: [a(t.code, { children: "(event: MouseEvent & TouchEvent | KeyboardEvent) => Promise<void>" }), " — обработчик события клика окна."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function eg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a($h, { ...e })
	}) : $h(e);
}
//#endregion
//#region src/media/mdx/Window/staticMode.en.mdx
function tg(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Static Mode (staticMode)" }),
		"\n",
		o(t.p, { children: [
			"The Window component supports static mode operation through the ",
			a(t.code, { children: "staticMode" }),
			" property. In this mode, the window works as an embedded component without modal behavior:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Content displays immediately" }), " - window is not hidden and doesn't require activation"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Animations disabled" }), " - no appearance/disappearance effects"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Positioning disabled" }), " - window is embedded in document flow"] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Works with adaptive" }),
				" - when ",
				a(t.code, { children: "adaptive" }),
				" property has one of static mode values (for example, ",
				a(t.code, { children: "static" }),
				"), static mode is enabled"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Static mode is especially useful for embedding window content directly into the interface without modal behavior." })
	] });
}
function ng(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(tg, { ...e })
	}) : tg(e);
}
//#endregion
//#region src/media/mdx/Window/staticMode.ru.mdx
function rg(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Статический режим (staticMode)" }),
		"\n",
		o(t.p, { children: [
			"Компонент Window поддерживает статический режим работы через свойство ",
			a(t.code, { children: "staticMode" }),
			". В этом режиме окно работает как встроенный компонент без модального поведения:"
		] }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Содержимое отображается сразу" }), " - окно не скрывается и не требует активации"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Отключены анимации" }), " - нет эффектов появления/исчезновения"] }),
			"\n",
			o(t.li, { children: [a(t.strong, { children: "Отключено позиционирование" }), " - окно встраивается в поток документа"] }),
			"\n",
			o(t.li, { children: [
				a(t.strong, { children: "Работает с adaptive" }),
				" - когда свойство ",
				a(t.code, { children: "adaptive" }),
				" имеет один из статичных режимов (например, ",
				a(t.code, { children: "static" }),
				"), включается статичный режим"
			] }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: "Статический режим особенно полезен для встраивания содержимого окна непосредственно в интерфейс без модального поведения." })
	] });
}
function ig(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(rg, { ...e })
	}) : rg(e);
}
//#endregion
//#region src/media/mdx/Window/v-model.en.mdx
function ag(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "State Management via v-model" }),
		"\n",
		o(t.p, { children: [
			"Two-way binding of window open state via ",
			a(t.code, { children: "v-model:open" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Parameters:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "open: boolean" }), " — window open state"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Open</button>\n\n  <Window v-model:open=\"isOpen\">\n    <template #default>\n      <p>Window content</p>\n      <button @click=\"isOpen = false\">Close</button>\n    </template>\n  </Window>\n</template>\n"
		}) })
	] });
}
function og(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(ag, { ...e })
	}) : ag(e);
}
//#endregion
//#region src/media/mdx/Window/v-model.ru.mdx
function sg(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		o(t.p, { children: [
			"Двусторонняя привязка состояния открытия окна через ",
			a(t.code, { children: "v-model:open" }),
			"."
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Параметры:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			o(t.li, { children: [a(t.code, { children: "open: boolean" }), " — состояние открытия окна"] }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Открыть</button>\n\n  <Window v-model:open=\"isOpen\">\n    <template #default>\n      <p>Содержимое окна</p>\n      <button @click=\"isOpen = false\">Закрыть</button>\n    </template>\n  </Window>\n</template>\n"
		}) })
	] });
}
function cg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(sg, { ...e })
	}) : sg(e);
}
//#endregion
//#region src/media/mdx/Window/window.en.mdx
function lg(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Component for creating modal windows, dialogs, and popup elements with flexible positioning and adaptive behavior." }),
		"\n",
		a(t.p, { children: "Window manages content display on top of the main interface, supports various positioning types (modal windows, dropdown menus, action sheets), open/close animations, and event system integration. The component automatically handles outside clicks, focus management, and adaptation to different screen sizes." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Key features:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Flexible positioning (center, edges, screen corners)" }),
			"\n",
			a(t.li, { children: "Adaptive modes (modal, menu, actionSheet, static)" }),
			"\n",
			a(t.li, { children: "Open/close animations with origin customization" }),
			"\n",
			a(t.li, { children: "State management via v-model or expose methods" }),
			"\n",
			a(t.li, { children: "Scrollbar integration for scrollable content" }),
			"\n",
			a(t.li, { children: "Background interaction blocking (persistent mode)" }),
			"\n",
			a(t.li, { children: "Window lifecycle events" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Common use cases:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Modal windows for forms and confirmations" }),
			"\n",
			a(t.li, { children: "Dropdown menus and context menus" }),
			"\n",
			a(t.li, { children: "Side panels and drawer components" }),
			"\n",
			a(t.li, { children: "Action sheets for mobile interfaces" }),
			"\n",
			a(t.li, { children: "Tooltips and dialogs" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n\nconst handleWindow = (options) => {\n  console.log('Window state:', options.open ? 'open' : 'closed')\n}\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Open Window</button>\n\n  <Window\n    v-model:open=\"isOpen\"\n    adaptive=\"modal\"\n    @window=\"handleWindow\"\n  >\n    <template #title>\n      <h2>Window Title</h2>\n    </template>\n\n    <template #default>\n      <p>Modal window content</p>\n    </template>\n\n    <template #footer>\n      <button @click=\"isOpen = false\">Close</button>\n    </template>\n  </Window>\n</template>\n"
		}) })
	] });
}
function ug(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(lg, { ...e })
	}) : lg(e);
}
//#endregion
//#region src/media/mdx/Window/window.ru.mdx
function dg(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return o(i, { children: [
		a(t.p, { children: "Компонент для создания модальных окон, диалогов и всплывающих элементов с гибким позиционированием и адаптивным поведением." }),
		"\n",
		a(t.p, { children: "Window управляет отображением контента поверх основного интерфейса, поддерживает различные типы позиционирования (модальные окна, выпадающие меню, action sheets), анимации открытия/закрытия и интеграцию с системой событий. Компонент автоматически обрабатывает клики вне области, управление фокусом и адаптацию под различные размеры экранов." }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Гибкое позиционирование (центр, края, углы экрана)" }),
			"\n",
			a(t.li, { children: "Адаптивные режимы (modal, menu, actionSheet, static)" }),
			"\n",
			a(t.li, { children: "Анимации открытия/закрытия с настройкой origin" }),
			"\n",
			a(t.li, { children: "Управление состоянием через v-model или expose методы" }),
			"\n",
			a(t.li, { children: "Интеграция со Scrollbar для прокручиваемого контента" }),
			"\n",
			a(t.li, { children: "Блокировка взаимодействия с фоном (persistent режим)" }),
			"\n",
			a(t.li, { children: "События жизненного цикла окна" }),
			"\n"
		] }),
		"\n",
		a(t.p, { children: a(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		o(t.ul, { children: [
			"\n",
			a(t.li, { children: "Модальные окна для форм и подтверждений" }),
			"\n",
			a(t.li, { children: "Выпадающие меню и контекстные меню" }),
			"\n",
			a(t.li, { children: "Боковые панели и drawer компоненты" }),
			"\n",
			a(t.li, { children: "Action sheets для мобильных интерфейсов" }),
			"\n",
			a(t.li, { children: "Всплывающие подсказки и диалоги" }),
			"\n"
		] }),
		"\n",
		a(t.pre, { children: a(t.code, {
			className: "language-html",
			children: "<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n\nconst handleWindow = (options) => {\n  console.log('Состояние окна:', options.open ? 'открыто' : 'закрыто')\n}\n<\/script>\n\n<template>\n  <button @click=\"isOpen = true\">Открыть окно</button>\n\n  <Window\n    v-model:open=\"isOpen\"\n    adaptive=\"modal\"\n    @window=\"handleWindow\"\n  >\n    <template #title>\n      <h2>Заголовок окна</h2>\n    </template>\n\n    <template #default>\n      <p>Содержимое модального окна</p>\n    </template>\n\n    <template #footer>\n      <button @click=\"isOpen = false\">Закрыть</button>\n    </template>\n  </Window>\n</template>\n"
		}) })
	] });
}
function fg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? a(t, {
		...e,
		children: a(dg, { ...e })
	}) : dg(e);
}
//#endregion
//#region src/media/mdx/wikiMdx.ts
var pg = [
	Ce,
	We,
	Rt,
	tn,
	Cn,
	Mn,
	Gn,
	er,
	xr,
	Er,
	qr,
	ui,
	yi,
	Bi,
	Yi,
	ca,
	xa,
	Aa,
	qa,
	Qa,
	wo,
	No,
	Ro,
	qo,
	Qo,
	rs,
	cs,
	xs,
	As,
	lc,
	Pc,
	Zc,
	ol,
	yl,
	wl,
	hu,
	Wu,
	$u,
	wd,
	cf,
	pf,
	Pf,
	zf,
	Qf,
	rp,
	cp,
	pp,
	Ep,
	pm,
	Pm,
	zm,
	Jm,
	rh,
	fh,
	_h,
	Ah,
	{
		name: "Window",
		descriptions: {
			axis: {
				en: Mh,
				ru: Ph
			},
			classes: {
				en: Ih,
				ru: Rh
			},
			"event.window": {
				en: Bh,
				ru: Hh
			},
			expose: {
				en: Wh,
				ru: Kh
			},
			hooks: {
				en: Jh,
				ru: Xh
			},
			slots: {
				en: Qh,
				ru: eg
			},
			staticMode: {
				en: ng,
				ru: ig
			},
			"v-model": {
				en: og,
				ru: cg
			},
			window: {
				en: ug,
				ru: fg
			}
		}
	}
], mg = class {
	constructor(t) {
		c(this, "item", void 0), c(this, "mdx", void 0), this.item = e.find((e) => e.name === t), this.mdx = pg.find((e) => e.name === t);
	}
	getItem() {
		return this.item;
	}
	getDescriptionByType(e) {
		var i;
		let a = (i = this.mdx) == null || (i = i.descriptions) == null ? void 0 : i[e];
		return n(a ? r(a) ? a[t.getLanguage()] : a : "");
	}
};
//#endregion
export { c as n, mg as t };
