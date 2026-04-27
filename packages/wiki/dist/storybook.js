import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./wikiDescriptions-BZUZKBrK.js";
import { Geo as n, executeFunction as ee, isObjectNotArray as te } from "@dxtmisha/functional";
import "react";
import { Canvas as r, Controls as ne, Source as i, Subtitle as re, Title as ie } from "@storybook/addon-docs/blocks";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/documentation/storybook/StorybookMain.tsx
var ae = ({ name: e, description: t, story: n }) => /* @__PURE__ */ s(a, { children: [
	/* @__PURE__ */ o(ie, { children: e }),
	/* @__PURE__ */ o(re, { children: t }),
	/* @__PURE__ */ o(r, { of: n }),
	/* @__PURE__ */ o(ne, { of: n })
] });
//#endregion
//#region src/media/mdx/event/events.actions.en.mdx
function c(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "actions" }) }),
		"\n",
		o(t.p, { children: "Event fires when clicking on an action button in the Actions component, passing the original DOM event and click data." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: MouseEvent" }), " — original DOM mouse event"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "EventClickValue structure:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type: string" }),
				" — action/button type (e.g., ",
				o(t.code, { children: "'confirm'" }),
				", ",
				o(t.code, { children: "'cancel'" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: any" }), " — arbitrary button value"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — additional event data"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleActions = (event, value) => {\nconsole.log('DOM event:', event)\nconsole.log('Action type:', value.type)\nconsole.log('Value:', value.value)\nconsole.log('Details:', value.detail)\n\nif (value.type === 'confirm') {\n  console.log('Confirm button pressed')\n}\n}\n<\/script>\n\n<template>\n<Actions @actions=\"handleActions\" :list=\"[\n  { text: 'Cancel', type: 'cancel' },\n  { text: 'Confirm', type: 'confirm' }\n]\" />\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "actionsLite" }) }),
		"\n",
		o(t.p, { children: "Event fires when clicking on an action button in the Actions component, passing only data without the original DOM event (lightweight version)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Actions component can be hidden with ",
				o(t.code, { children: "actionsHide" }),
				" property."
			] }),
			"\n"
		] })
	] });
}
function oe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(c, { ...e })
	}) : c(e);
}
//#endregion
//#region src/media/mdx/event/events.actions.ru.mdx
function l(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "actions" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике на кнопку действия в компоненте Actions, передавая оригинальное DOM событие и данные о клике." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: MouseEvent" }), " — оригинальное DOM событие мыши"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура EventClickValue:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type: string" }),
				" — тип действия/кнопки (например, ",
				o(t.code, { children: "'confirm'" }),
				", ",
				o(t.code, { children: "'cancel'" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: any" }), " — произвольное значение кнопки"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — дополнительные данные события"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleActions = (event, value) => {\nconsole.log('DOM событие:', event)\nconsole.log('Тип действия:', value.type)\nconsole.log('Значение:', value.value)\nconsole.log('Детали:', value.detail)\n\nif (value.type === 'confirm') {\n  console.log('Нажата кнопка \"Подтвердить\"')\n}\n}\n<\/script>\n\n<template>\n<Actions @actions=\"handleActions\" :list=\"[\n  { text: 'Отмена', type: 'cancel' },\n  { text: 'Подтвердить', type: 'confirm' }\n]\" />\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "actionsLite" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике на кнопку действия в компоненте Actions, передавая только данные без оригинального DOM события (облегченная версия)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Компонент Actions можно скрыть свойством ",
				o(t.code, { children: "actionsHide" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function se(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(l, { ...e })
	}) : l(e);
}
//#endregion
//#region src/media/mdx/event/events.bars.en.mdx
function u(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "bars" }) }),
		"\n",
		o(t.p, { children: "Event fires when clicking on a Bars panel element, passing the original DOM event and click data." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: MouseEvent" }), " — original DOM mouse event"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "EventClickValue structure:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type: string" }),
				" — click/button type (e.g., ",
				o(t.code, { children: "'back'" }),
				" for back button)"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: any" }), " — arbitrary button value"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — additional event data"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleBars = (event, value) => {\nconsole.log('DOM event:', event)\nconsole.log('Button type:', value.type)\nconsole.log('Value:', value.value)\nconsole.log('Details:', value.detail)\n\nif (value.type === 'back') {\n  console.log('Back button pressed')\n}\n}\n<\/script>\n\n<template>\n<Bars @bars=\"handleBars\">\n  <button data-event-type=\"back\">Back</button>\n</Bars>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "barsLite" }) }),
		"\n",
		o(t.p, { children: "Event fires when clicking on a Bars panel element, passing only data without the original DOM event (lightweight version)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "barsBack" }) }),
		"\n",
		o(t.p, { children: "Event fires when the \"Back\" button in Bars panel is clicked, passing only click data." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — object with click data"] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Back button can be hidden with ",
				o(t.code, { children: "barsBackHide" }),
				" property."
			] }),
			"\n"
		] })
	] });
}
function ce(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(u, { ...e })
	}) : u(e);
}
//#endregion
//#region src/media/mdx/event/events.bars.ru.mdx
function d(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "bars" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике на элемент панели Bars, передавая оригинальное DOM событие и данные о клике." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: MouseEvent" }), " — оригинальное DOM событие мыши"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура EventClickValue:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type: string" }),
				" — тип клика/кнопки (например, ",
				o(t.code, { children: "'back'" }),
				" для кнопки назад)"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: any" }), " — произвольное значение кнопки"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — дополнительные данные события"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleBars = (event, value) => {\nconsole.log('DOM событие:', event)\nconsole.log('Тип кнопки:', value.type)\nconsole.log('Значение:', value.value)\nconsole.log('Детали:', value.detail)\n\nif (value.type === 'back') {\n  console.log('Нажата кнопка \"Назад\"')\n}\n}\n<\/script>\n\n<template>\n<Bars @bars=\"handleBars\">\n  <button data-event-type=\"back\">Назад</button>\n</Bars>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "barsLite" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике на элемент панели Bars, передавая только данные без оригинального DOM события (облегченная версия)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "barsBack" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике по кнопке «Назад» в панели Bars, передавая только данные о клике." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — объект с данными о клике"] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Кнопку «Назад» можно скрыть свойством ",
				o(t.code, { children: "barsBackHide" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function le(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(d, { ...e })
	}) : d(e);
}
//#endregion
//#region src/media/mdx/event/events.beforeinput.en.mdx
function f(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "beforeinput" }) }),
		"\n",
		o(t.p, { children: "Event fires before the value in the input field changes, allowing you to prevent or modify data input." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: InputEvent" }), " — original DOM input event"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Input type examples (inputType):" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "insertText" }), " — text input"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "insertFromPaste" }), " — paste from clipboard"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "deleteContentBackward" }), " — delete character backward (Backspace)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "deleteContentForward" }), " — delete character forward (Delete)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "insertLineBreak" }), " — insert line break"] }),
			"\n"
		] })
	] });
}
function ue(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(f, { ...e })
	}) : f(e);
}
//#endregion
//#region src/media/mdx/event/events.beforeinput.ru.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "beforeinput" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает перед изменением значения в поле ввода, позволяя предотвратить или модифицировать ввод данных." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: InputEvent" }), " — оригинальное DOM событие ввода"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Примеры типов ввода (inputType):" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "insertText" }), " — ввод текста"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "insertFromPaste" }), " — вставка из буфера обмена"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "deleteContentBackward" }), " — удаление символа назад (Backspace)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "deleteContentForward" }), " — удаление символа вперед (Delete)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "insertLineBreak" }), " — вставка переноса строки"] }),
			"\n"
		] })
	] });
}
function de(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(p, { ...e })
	}) : p(e);
}
//#endregion
//#region src/media/mdx/event/events.click.en.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "click" }) }),
		"\n",
		o(t.p, { children: "Event fires when clicking on the component, passing the original DOM event and component data." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: MouseEvent" }), " — original DOM mouse event"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — object with component data"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "EventClickValue structure:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type: string" }),
				" — click location identifier, set through ",
				o(t.code, { children: "data-event-type" }),
				" attribute on the element"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: any" }), " — component value"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — additional event data"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleClick = (event, value) => {\nconsole.log('DOM event:', event)\nconsole.log('Click type:', value.type)\nconsole.log('Value:', value.value)\nconsole.log('Details:', value.detail)\n}\n<\/script>\n\n<template>\n<Component @click=\"handleClick\">\n  <button data-event-type=\"action\">Click me</button>\n</Component>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "clickLite" }) }),
		"\n",
		o(t.p, { children: "Event fires when clicking on the component, passing only data without the original DOM event (lightweight version)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — object with component data"] }),
			"\n"
		] })
	] });
}
function fe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(m, { ...e })
	}) : m(e);
}
//#endregion
//#region src/media/mdx/event/events.click.ru.mdx
function h(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "click" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике на компонент, передавая оригинальное DOM событие и данные компонента." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: MouseEvent" }), " — оригинальное DOM событие мыши"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — объект с данными компонента"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура EventClickValue:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type: string" }),
				" — идентификатор места нажатия, задается через атрибут ",
				o(t.code, { children: "data-event-type" }),
				" у элемента"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: any" }), " — значение компонента"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — дополнительные данные события"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleClick = (event, value) => {\nconsole.log('DOM событие:', event)\nconsole.log('Тип клика:', value.type)\nconsole.log('Значение:', value.value)\nconsole.log('Детали:', value.detail)\n}\n<\/script>\n\n<template>\n<Component @click=\"handleClick\">\n  <button data-event-type=\"action\">Нажми меня</button>\n</Component>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "clickLite" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике на компонент, передавая только данные без оригинального DOM события (облегченная версия)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: EventClickValue" }), " — объект с данными компонента"] }),
			"\n"
		] })
	] });
}
function pe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(h, { ...e })
	}) : h(e);
}
//#endregion
//#region src/media/mdx/event/events.focus.en.mdx
function g(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "focus" }) }),
		"\n",
		o(t.p, { children: "Event fires when the input element receives focus, passing the original DOM event." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: FocusEvent" }), " — original DOM focus event"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "blur" }) }),
		"\n",
		o(t.p, { children: "Event fires when the input element loses focus, passing the original DOM event." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: FocusEvent" }), " — original DOM blur event"] }),
			"\n"
		] })
	] });
}
function me(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(g, { ...e })
	}) : g(e);
}
//#endregion
//#region src/media/mdx/event/events.focus.ru.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "focus" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при получении фокуса элементом ввода, передавая оригинальное DOM событие." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: FocusEvent" }), " — оригинальное DOM событие фокуса"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "blur" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при потере фокуса элементом ввода, передавая оригинальное DOM событие." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: FocusEvent" }), " — оригинальное DOM событие потери фокуса"] }),
			"\n"
		] })
	] });
}
function he(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_, { ...e })
	}) : _(e);
}
//#endregion
//#region src/media/mdx/event/events.input.en.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "input" }) }),
		"\n",
		o(t.p, { children: "Event fires when the value in the input field changes, passing the original DOM event and validation data." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: InputEvent" }), " — original DOM input event"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: FieldValidationItem" }), " — object with validation data"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "FieldValidationItem structure:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "group: string | undefined" }), " — mask group key"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "input: HTMLInputElement | HTMLTextAreaElement | undefined" }), " — related input element"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "pattern: FieldPatternItemOrFunction | undefined" }), " — validation pattern used"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "type: string | undefined" }), " — custom type"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "status: boolean | undefined" }), " — validation success status"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "required: boolean | undefined" }), " — field required flag"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "isFull: boolean | undefined" }), " — value completion flag"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "validationMessage: string | undefined" }), " — error message text"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "validity: ValidityState | undefined" }), " — native validity state"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "validityMessage: string | undefined" }), " — custom validity message"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: any" }), " — original value"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "valueInput: any | undefined" }), " — entered value"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — additional data"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleInput = (event, value) => {\nconsole.log('DOM event:', event)\nconsole.log('Value:', value.value)\nconsole.log('Validation:', value.status)\nconsole.log('Complete:', value.isFull)\n\nif (!value.status) {\n  console.log('Error:', value.validationMessage)\n}\n}\n<\/script>\n\n<template>\n<Mask\n  mask=\"+1 (***) ***-****\"\n  @input=\"handleInput\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "inputLite" }) }),
		"\n",
		o(t.p, { children: "Event fires when the value in the input field changes, passing only validation data without the original DOM event (lightweight version)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: FieldValidationItem" }), " — object with validation data"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "change" }) }),
		"\n",
		o(t.p, { children: "Event fires when input is completed and focus is lost, passing the original DOM event and validation data." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: InputEvent" }), " — original DOM input event"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: FieldValidationItem" }), " — object with validation data"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "FieldValidationItem structure:" }),
			" same as for ",
			o(t.code, { children: "input" }),
			" event"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleChange = (event, value) => {\nconsole.log('DOM event:', event)\nconsole.log('Final value:', value.value)\n\nif (value.status && value.isFull) {\n  // Submit data to server\n  submitForm(value.value)\n}\n}\n<\/script>\n\n<template>\n<Mask\n  mask=\"+1 (***) ***-****\"\n  @change=\"handleChange\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "changeLite" }) }),
		"\n",
		o(t.p, { children: "Event fires when input is completed and focus is lost, passing only validation data without the original DOM event (lightweight version)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: FieldValidationItem" }), " — object with validation data"] }),
			"\n"
		] })
	] });
}
function ge(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(v, { ...e })
	}) : v(e);
}
//#endregion
//#region src/media/mdx/event/events.input.ru.mdx
function y(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "input" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении значения в поле ввода, передавая оригинальное DOM событие и данные валидации." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: InputEvent" }), " — оригинальное DOM событие ввода"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: FieldValidationItem" }), " — объект с данными валидации"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура FieldValidationItem:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "group: string | undefined" }), " — ключ группы маски"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "input: HTMLInputElement | HTMLTextAreaElement | undefined" }), " — связанный элемент ввода"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "pattern: FieldPatternItemOrFunction | undefined" }), " — используемый паттерн валидации"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "type: string | undefined" }), " — произвольный тип"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "status: boolean | undefined" }), " — статус успешности валидации"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "required: boolean | undefined" }), " — флаг обязательности поля"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "isFull: boolean | undefined" }), " — флаг полноты заполнения значения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "validationMessage: string | undefined" }), " — текст сообщения об ошибке"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "validity: ValidityState | undefined" }), " — нативное состояние валидности"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "validityMessage: string | undefined" }), " — кастомное сообщение валидности"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: any" }), " — исходное значение"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "valueInput: any | undefined" }), " — введённое значение"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — дополнительные данные"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleInput = (event, value) => {\nconsole.log('DOM событие:', event)\nconsole.log('Значение:', value.value)\nconsole.log('Валидация:', value.status)\nconsole.log('Заполнено:', value.isFull)\n\nif (!value.status) {\n  console.log('Ошибка:', value.validationMessage)\n}\n}\n<\/script>\n\n<template>\n<Component\n  @input=\"handleInput\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "inputLite" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении значения в поле ввода, передавая только данные валидации без оригинального DOM события (облегченная версия)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: FieldValidationItem" }), " — объект с данными валидации"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "change" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при завершении ввода и потере фокуса, передавая оригинальное DOM событие и данные валидации." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: InputEvent" }), " — оригинальное DOM событие ввода"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: FieldValidationItem" }), " — объект с данными валидации"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Структура FieldValidationItem:" }),
			" такая же как у события ",
			o(t.code, { children: "input" })
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleChange = (event, value) => {\nconsole.log('DOM событие:', event)\nconsole.log('Финальное значение:', value.value)\n\nif (value.status && value.isFull) {\n  // Отправка данных на сервер\n  submitForm(value.value)\n}\n}\n<\/script>\n\n<template>\n<Component\n  @change=\"handleChange\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "changeLite" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при завершении ввода и потере фокуса, передавая только данные валидации без оригинального DOM события (облегченная версия)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value: FieldValidationItem" }), " — объект с данными валидации"] }),
			"\n"
		] })
	] });
}
function _e(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(y, { ...e })
	}) : y(e);
}
//#endregion
//#region src/media/mdx/event/events.inputStandard.en.mdx
function b(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "input" }) }),
		"\n",
		o(t.p, { children: "Event fires when the value in the input field changes, passing the original DOM event." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: InputEvent" }), " — original DOM input event"] }),
			"\n"
		] })
	] });
}
function ve(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(b, { ...e })
	}) : b(e);
}
//#endregion
//#region src/media/mdx/event/events.inputStandard.ru.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "input" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении значения в поле ввода, передавая оригинальное DOM событие." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: InputEvent" }), " — оригинальное DOM событие ввода"] }),
			"\n"
		] })
	] });
}
function ye(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(x, { ...e })
	}) : x(e);
}
//#endregion
//#region src/media/mdx/event/events.keyboard.en.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "keydown" }) }),
		"\n",
		o(t.p, { children: "Event fires when a key is pressed in the input field, passing the original DOM keyboard event." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: KeyboardEvent" }), " — original DOM keyboard event"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "keyup" }) }),
		"\n",
		o(t.p, { children: "Event fires when a key is released in the input field, passing the original DOM keyboard event." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: KeyboardEvent" }), " — original DOM keyboard event"] }),
			"\n"
		] })
	] });
}
function be(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(S, { ...e })
	}) : S(e);
}
//#endregion
//#region src/media/mdx/event/events.keyboard.ru.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "keydown" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при нажатии клавиши в поле ввода, передавая оригинальное DOM событие клавиатуры." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: KeyboardEvent" }), " — оригинальное DOM событие клавиатуры"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "keyup" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при отпускании клавиши в поле ввода, передавая оригинальное DOM событие клавиатуры." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: KeyboardEvent" }), " — оригинальное DOM событие клавиатуры"] }),
			"\n"
		] })
	] });
}
function xe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(C, { ...e })
	}) : C(e);
}
//#endregion
//#region src/media/mdx/event/events.paste.en.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "paste" }) }),
		"\n",
		o(t.p, { children: "Event fires when data is pasted from clipboard into the input field, passing the original DOM event." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: ClipboardEvent" }), " — original DOM clipboard event"] }),
			"\n"
		] })
	] });
}
function Se(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(w, { ...e })
	}) : w(e);
}
//#endregion
//#region src/media/mdx/event/events.paste.ru.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "paste" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при вставке данных из буфера обмена в поле ввода, передавая оригинальное DOM событие." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: ClipboardEvent" }), " — оригинальное DOM событие буфера обмена"] }),
			"\n"
		] })
	] });
}
function Ce(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(T, { ...e })
	}) : T(e);
}
//#endregion
//#region src/media/mdx/event/events.reset.en.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "reset" }) }),
		"\n",
		o(t.p, { children: "Event fires when the component value is reset, passing the original DOM event." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: Event" }), " — original DOM event"] }),
			"\n"
		] })
	] });
}
function we(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(E, { ...e })
	}) : E(e);
}
//#endregion
//#region src/media/mdx/event/events.reset.ru.mdx
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
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "reset" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при сбросе значения компонента, передавая оригинальное DOM событие." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: Event" }), " — оригинальное DOM событие"] }),
			"\n"
		] })
	] });
}
function Te(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(D, { ...e })
	}) : D(e);
}
//#endregion
//#region src/media/mdx/event/wikiMdxEvent.ts
var Ee = {
	name: "Event",
	descriptions: {
		actions: {
			en: oe,
			ru: se
		},
		bars: {
			en: ce,
			ru: le
		},
		beforeinput: {
			en: ue,
			ru: de
		},
		click: {
			en: fe,
			ru: pe
		},
		focus: {
			en: me,
			ru: he
		},
		input: {
			en: ge,
			ru: _e
		},
		"input-standard": {
			en: ve,
			ru: ye
		},
		keyboard: {
			en: be,
			ru: xe
		},
		paste: {
			en: Se,
			ru: Ce
		},
		reset: {
			en: we,
			ru: Te
		}
	}
};
//#endregion
//#region src/media/mdx/expose/expose.checkValidity.en.mdx
function O(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "checkValidity(): boolean" }),
			" — Checks whether the component's value satisfies its validation constraints. Returns ",
			o(t.code, { children: "true" }),
			" if valid, otherwise ",
			o(t.code, { children: "false" }),
			"."
		] }),
		"\n"
	] });
}
function De(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(O, { ...e })
	}) : O(e);
}
//#endregion
//#region src/media/mdx/expose/expose.checkValidity.ru.mdx
function k(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "checkValidity(): boolean" }),
			" — Проверяет, удовлетворяет ли значение компонента его ограничениям проверки. Возвращает ",
			o(t.code, { children: "true" }),
			", если оно действительно, в противном случае ",
			o(t.code, { children: "false" }),
			"."
		] }),
		"\n"
	] });
}
function Oe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(k, { ...e })
	}) : k(e);
}
//#endregion
//#region src/media/mdx/expose/expose.clear.en.mdx
function A(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "clear(): void" }), " — Clears the component value by default and focuses the input field."] }),
		"\n"
	] });
}
function ke(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(A, { ...e })
	}) : A(e);
}
//#endregion
//#region src/media/mdx/expose/expose.clear.ru.mdx
function j(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "clear(): void" }), " — Очищает значение компонента до значения по умолчанию и устанавливает фокус на поле ввода."] }),
		"\n"
	] });
}
function Ae(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(j, { ...e })
	}) : j(e);
}
//#endregion
//#region src/media/mdx/expose/expose.descriptionId.en.mdx
function M(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "descriptionId: string" }),
			" — Unique identifier for the description element. Used for accessibility attributes like ",
			o(t.code, { children: "aria-describedby" }),
			"."
		] }),
		"\n"
	] });
}
function je(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(M, { ...e })
	}) : M(e);
}
//#endregion
//#region src/media/mdx/expose/expose.descriptionId.ru.mdx
function N(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "descriptionId: string" }),
			" — Уникальный идентификатор элемента описания. Используется для атрибутов доступности, таких как ",
			o(t.code, { children: "aria-describedby" }),
			"."
		] }),
		"\n"
	] });
}
function Me(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(N, { ...e })
	}) : N(e);
}
//#endregion
//#region src/media/mdx/expose/expose.detail.en.mdx
function P(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — Additional component data."] }),
		"\n"
	] });
}
function Ne(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(P, { ...e })
	}) : P(e);
}
//#endregion
//#region src/media/mdx/expose/expose.detail.ru.mdx
function F(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "detail: Record<string, any> | undefined" }), " — Дополнительные данные компонента."] }),
		"\n"
	] });
}
function Pe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(F, { ...e })
	}) : F(e);
}
//#endregion
//#region src/media/mdx/expose/expose.id.en.mdx
function I(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "id: string" }),
			" — Unique identifier for the component element. Used as the DOM element's ",
			o(t.code, { children: "id" }),
			" attribute."
		] }),
		"\n"
	] });
}
function Fe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(I, { ...e })
	}) : I(e);
}
//#endregion
//#region src/media/mdx/expose/expose.id.ru.mdx
function L(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "id: string" }),
			" — Уникальный идентификатор элемента компонента. Используется в качестве атрибута ",
			o(t.code, { children: "id" }),
			" DOM-элемента."
		] }),
		"\n"
	] });
}
function Ie(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(L, { ...e })
	}) : L(e);
}
//#endregion
//#region src/media/mdx/expose/expose.labelId.en.mdx
function R(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "labelId: string" }),
			" — Unique identifier for the label element. Used for accessibility attributes like ",
			o(t.code, { children: "aria-labelledby" }),
			"."
		] }),
		"\n"
	] });
}
function Le(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(R, { ...e })
	}) : R(e);
}
//#endregion
//#region src/media/mdx/expose/expose.labelId.ru.mdx
function z(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "labelId: string" }),
			" — Уникальный идентификатор элемента метки. Используется для атрибутов доступности, таких как ",
			o(t.code, { children: "aria-labelledby" }),
			"."
		] }),
		"\n"
	] });
}
function Re(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(z, { ...e })
	}) : z(e);
}
//#endregion
//#region src/media/mdx/expose/expose.open.en.mdx
function B(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "open: ComputedRef<boolean>" }), " — Reactive open/close state of the component."] }),
		"\n"
	] });
}
function ze(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(B, { ...e })
	}) : B(e);
}
//#endregion
//#region src/media/mdx/expose/expose.open.ru.mdx
function V(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "open: ComputedRef<boolean>" }), " — Реактивное состояние открытия/закрытия компонента."] }),
		"\n"
	] });
}
function Be(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(V, { ...e })
	}) : V(e);
}
//#endregion
//#region src/media/mdx/expose/expose.selected.en.mdx
function H(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "isSelected: ComputedRef<boolean>" }), " — Computed property indicating whether there are selected items in the component."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "selectedList: Ref<any[]>" }), " — Reactive list of selected component items."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "selectedNames: Ref<string[]>" }), " — Reactive list of labels (names) of selected items."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "selectedValues: Ref<any[]>" }), " — Reactive array of values of selected items."] }),
		"\n"
	] });
}
function Ve(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(H, { ...e })
	}) : H(e);
}
//#endregion
//#region src/media/mdx/expose/expose.selected.ru.mdx
function U(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "isSelected: ComputedRef<boolean>" }), " — Вычисляемое свойство, указывающее наличие выбранных элементов в компоненте."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "selectedList: Ref<any[]>" }), " — Реактивный список выбранных элементов компонента."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "selectedNames: Ref<string[]>" }), " — Реактивный список меток (имён) выбранных элементов."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "selectedValues: Ref<any[]>" }), " — Реактивный массив значений выбранных элементов."] }),
		"\n"
	] });
}
function He(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(U, { ...e })
	}) : U(e);
}
//#endregion
//#region src/media/mdx/expose/expose.validationMessage.en.mdx
function W(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "validationMessage: string" }), " — Returns a validation error message describing why the component's value fails validation. If the value is valid, it returns an empty string."] }),
		"\n"
	] });
}
function Ue(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(W, { ...e })
	}) : W(e);
}
//#endregion
//#region src/media/mdx/expose/expose.validationMessage.ru.mdx
function G(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "validationMessage: string" }), " — Возвращает сообщение об ошибке проверки, в котором описывается, почему значение компонента не прошло проверку. Если значение действительно, возвращается пустая строка."] }),
		"\n"
	] });
}
function We(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(G, { ...e })
	}) : G(e);
}
//#endregion
//#region src/media/mdx/expose/expose.value.en.mdx
function K(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "value: any" }), " — Current component value."] }),
		"\n"
	] });
}
function Ge(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(K, { ...e })
	}) : K(e);
}
//#endregion
//#region src/media/mdx/expose/expose.value.ru.mdx
function q(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "value: any" }), " — Текущее значение компонента."] }),
		"\n"
	] });
}
function Ke(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(q, { ...e })
	}) : q(e);
}
//#endregion
//#region src/media/mdx/expose/wikiMdxExpose.ts
var qe = {
	name: "Expose",
	descriptions: {
		checkValidity: {
			en: De,
			ru: Oe
		},
		clear: {
			en: ke,
			ru: Ae
		},
		descriptionId: {
			en: je,
			ru: Me
		},
		detail: {
			en: Ne,
			ru: Pe
		},
		id: {
			en: Fe,
			ru: Ie
		},
		labelId: {
			en: Le,
			ru: Re
		},
		open: {
			en: ze,
			ru: Be
		},
		selected: {
			en: Ve,
			ru: He
		},
		validationMessage: {
			en: Ue,
			ru: We
		},
		value: {
			en: Ge,
			ru: Ke
		}
	}
};
//#endregion
//#region src/media/mdx/slot/body.en.mdx
function J(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "body: VNode" }), " — Slot for the main content of the component."] }),
		"\n"
	] });
}
function Je(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(J, { ...e })
	}) : J(e);
}
//#endregion
//#region src/media/mdx/slot/body.ru.mdx
function Y(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "body: VNode" }), " — Слот для основного содержимого компонента."] }),
		"\n"
	] });
}
function Ye(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Y, { ...e })
	}) : Y(e);
}
//#endregion
//#region src/media/mdx/slot/caption.en.mdx
function X(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "caption: VNode" }), " — Slot for placing a caption or additional explanatory text for the component."] }),
		"\n"
	] });
}
function Xe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(X, { ...e })
	}) : X(e);
}
//#endregion
//#region src/media/mdx/slot/caption.ru.mdx
function Z(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "caption: VNode" }), " — Слот для размещения подписи или дополнительного пояснительного текста к компоненту."] }),
		"\n"
	] });
}
function Ze(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Z, { ...e })
	}) : Z(e);
}
//#endregion
//#region src/media/mdx/slot/control.en.mdx
function Q(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "control(props: ControlItem): VNode" }), " — Slot for placing component control elements (buttons, switches, etc.)."] }),
		"\n"
	] });
}
function Qe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Q, { ...e })
	}) : Q(e);
}
//#endregion
//#region src/media/mdx/slot/control.ru.mdx
function $e(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "control(props: ControlItem): VNode" }), " — Слот для размещения элементов управления компонентом (кнопки, переключатели и т.д.)."] }),
		"\n"
	] });
}
function et(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($e, { ...e })
	}) : $e(e);
}
//#endregion
//#region src/media/mdx/slot/default.en.mdx
function tt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "default: VNode" }), " — Main slot for placing the primary component content."] }),
		"\n"
	] });
}
function nt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(tt, { ...e })
	}) : tt(e);
}
//#endregion
//#region src/media/mdx/slot/default.ru.mdx
function rt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "default: VNode" }), " — Основной слот для размещения главного содержимого компонента."] }),
		"\n"
	] });
}
function it(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(rt, { ...e })
	}) : rt(e);
}
//#endregion
//#region src/media/mdx/slot/description.en.mdx
function at(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "description: VNode" }), " — Slot for placing component description or additional information."] }),
		"\n"
	] });
}
function ot(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(at, { ...e })
	}) : at(e);
}
//#endregion
//#region src/media/mdx/slot/description.ru.mdx
function st(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "description: VNode" }), " — Слот для размещения описания компонента или дополнительной информации."] }),
		"\n"
	] });
}
function ct(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(st, { ...e })
	}) : st(e);
}
//#endregion
//#region src/media/mdx/slot/footer.en.mdx
function lt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "footer(props: ControlItem): VNode" }), " — Slot for placing content at the bottom of the component."] }),
		"\n"
	] });
}
function ut(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(lt, { ...e })
	}) : lt(e);
}
//#endregion
//#region src/media/mdx/slot/footer.ru.mdx
function dt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "footer(props: ControlItem): VNode" }), " — Слот для размещения содержимого в нижней части компонента."] }),
		"\n"
	] });
}
function ft(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(dt, { ...e })
	}) : dt(e);
}
//#endregion
//#region src/media/mdx/slot/headline.en.mdx
function pt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "headline: VNode" }), " — Slot for placing custom headline content."] }),
		"\n"
	] });
}
function mt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(pt, { ...e })
	}) : pt(e);
}
//#endregion
//#region src/media/mdx/slot/headline.ru.mdx
function ht(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "headline: VNode" }), " — Слот для размещения пользовательского содержимого заголовка."] }),
		"\n"
	] });
}
function gt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ht, { ...e })
	}) : ht(e);
}
//#endregion
//#region src/media/mdx/slot/label.en.mdx
function _t(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "label: VNode" }), " — Slot for placing custom label content instead of text value."] }),
		"\n"
	] });
}
function vt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_t, { ...e })
	}) : _t(e);
}
//#endregion
//#region src/media/mdx/slot/label.ru.mdx
function yt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "label: VNode" }), " — Слот для размещения пользовательского содержимого метки компонента вместо текстового значения."] }),
		"\n"
	] });
}
function bt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(yt, { ...e })
	}) : yt(e);
}
//#endregion
//#region src/media/mdx/slot/leading.en.mdx
function xt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "leading: any" }), " — Slot for placing content at the start of the interactive field area, before the main input element."] }),
		"\n"
	] });
}
function St(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(xt, { ...e })
	}) : xt(e);
}
//#endregion
//#region src/media/mdx/slot/leading.ru.mdx
function Ct(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "leading: any" }), " — Слот для размещения контента в начале интерактивной области поля, перед основным элементом ввода."] }),
		"\n"
	] });
}
function wt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ct, { ...e })
	}) : Ct(e);
}
//#endregion
//#region src/media/mdx/slot/prefix.en.mdx
function Tt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "prefix: VNode" }), " — Slot for placing content at the beginning of the component, before the main content."] }),
		"\n"
	] });
}
function Et(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Tt, { ...e })
	}) : Tt(e);
}
//#endregion
//#region src/media/mdx/slot/prefix.ru.mdx
function Dt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "prefix: VNode" }), " — Слот для размещения контента в начале компонента, перед основным содержимым."] }),
		"\n"
	] });
}
function Ot(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Dt, { ...e })
	}) : Dt(e);
}
//#endregion
//#region src/media/mdx/slot/secondary.en.mdx
function kt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "secondary: VNode" }), " — Slot for placing secondary content or additional component elements."] }),
		"\n"
	] });
}
function At(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(kt, { ...e })
	}) : kt(e);
}
//#endregion
//#region src/media/mdx/slot/secondary.ru.mdx
function jt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "secondary: VNode" }), " — Слот для размещения вторичного содержимого или дополнительных элементов компонента."] }),
		"\n"
	] });
}
function Mt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(jt, { ...e })
	}) : jt(e);
}
//#endregion
//#region src/media/mdx/slot/suffix.en.mdx
function Nt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "suffix: VNode" }), " — Slot for placing content at the end of the component, after the main content."] }),
		"\n"
	] });
}
function Pt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Nt, { ...e })
	}) : Nt(e);
}
//#endregion
//#region src/media/mdx/slot/suffix.ru.mdx
function Ft(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "suffix: VNode" }), " — Слот для размещения контента в конце компонента, после основного содержимого."] }),
		"\n"
	] });
}
function It(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ft, { ...e })
	}) : Ft(e);
}
//#endregion
//#region src/media/mdx/slot/trailing.en.mdx
function Lt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "trailing: any" }), " — Slot for placing content at the end of the interactive field area, after the main input element."] }),
		"\n"
	] });
}
function Rt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Lt, { ...e })
	}) : Lt(e);
}
//#endregion
//#region src/media/mdx/slot/trailing.ru.mdx
function zt(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "trailing: any" }), " — Слот для размещения контента в конце интерактивной области поля, после основного элемента ввода."] }),
		"\n"
	] });
}
function Bt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(zt, { ...e })
	}) : zt(e);
}
//#endregion
//#region src/media/mdx/slot/wikiMdxSlot.ts
var Vt = {
	name: "Slot",
	descriptions: {
		body: {
			en: Je,
			ru: Ye
		},
		caption: {
			en: Xe,
			ru: Ze
		},
		control: {
			en: Qe,
			ru: et
		},
		default: {
			en: nt,
			ru: it
		},
		description: {
			en: ot,
			ru: ct
		},
		footer: {
			en: ut,
			ru: ft
		},
		headline: {
			en: mt,
			ru: gt
		},
		label: {
			en: vt,
			ru: bt
		},
		leading: {
			en: St,
			ru: wt
		},
		prefix: {
			en: Et,
			ru: Ot
		},
		secondary: {
			en: At,
			ru: Mt
		},
		suffix: {
			en: Pt,
			ru: It
		},
		trailing: {
			en: Rt,
			ru: Bt
		}
	}
};
//#endregion
//#region src/media/mdx/style/adaptive.en.mdx
function Ht(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Adaptive Behavior" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "adaptive" }),
			" and ",
			o(t.code, { children: "container" }),
			" properties are designed to control component behavior at different screen sizes and container constraints."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "adaptive" }), " — controls adaptive behavior for different screen sizes and media queries"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "container" }), " — controls container layout with adaptive width constraints"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: ",
			o(t.code, { children: "adaptive" }),
			" provides automatic component adaptation to different screen sizes with media query support for precise display control. ",
			o(t.code, { children: "container" }),
			" creates a container layout with automatic width constraints, adaptive behavior, and content centering. Both properties can be used together to create complex adaptive layouts, where ",
			o(t.code, { children: "container" }),
			" provides the structural foundation and ",
			o(t.code, { children: "adaptive" }),
			" adds flexible behavior for different devices."
		] })
	] });
}
function Ut(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ht, { ...e })
	}) : Ht(e);
}
//#endregion
//#region src/media/mdx/style/adaptive.ru.mdx
function Wt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Адаптивное поведение" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "adaptive" }),
			" и ",
			o(t.code, { children: "container" }),
			" предназначены для управления поведением компонентов при различных размерах экрана и контейнерных ограничениях."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "adaptive" }), " — управляет адаптивным поведением для различных размеров экрана и медиа-запросов"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "container" }), " — управляет контейнерной раскладкой с адаптивными ограничениями ширины"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: ",
			o(t.code, { children: "adaptive" }),
			" обеспечивает автоматическую адаптацию компонента под различные размеры экрана с поддержкой медиа-запросов для точного контроля отображения. ",
			o(t.code, { children: "container" }),
			" создает контейнерную раскладку с автоматическими ограничениями ширины, адаптивным поведением и центрированием содержимого. Оба свойства могут использоваться вместе для создания сложных адаптивных раскладок, где ",
			o(t.code, { children: "container" }),
			" обеспечивает структурную основу, а ",
			o(t.code, { children: "adaptive" }),
			" добавляет гибкое поведение для разных устройств."
		] })
	] });
}
function Gt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Wt, { ...e })
	}) : Wt(e);
}
//#endregion
//#region src/media/mdx/style/asPalette.en.mdx
function Kt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Color Palette" }),
		"\n",
		s(t.p, { children: [
			"Property ",
			o(t.code, { children: "asPalette" }),
			" enables color scheme inheritance from the parent element while maintaining base saturation."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Usage:" }) }),
		"\n",
		o(t.p, { children: "Allows automatic color adaptation to placement context. The element adopts the parent's color palette without losing its saturation characteristics." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " (default) — uses its own color scheme"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — inherits palette from parent element"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Inherit palette from parent -->\n<Component asPalette />\n",
			language: "html"
		})
	] });
}
function qt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Kt, { ...e })
	}) : Kt(e);
}
//#endregion
//#region src/media/mdx/style/asPalette.ru.mdx
function Jt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Цветовая палитра" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "asPalette" }),
			" активирует наследование цветовой схемы от родительского элемента с сохранением базовой насыщенности."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Применение:" }) }),
		"\n",
		o(t.p, { children: "Позволяет автоматически адаптировать цвета к контексту размещения. Элемент принимает цветовую палитру родителя, не теряя своих характеристик насыщенности." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " (по умолчанию) — используется собственная цветовая схема"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — наследует палитру от родительского элемента"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Наследование палитры от родителя -->\n<Component asPalette />\n",
			language: "html"
		})
	] });
}
function Yt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Jt, { ...e })
	}) : Jt(e);
}
//#endregion
//#region src/media/mdx/style/dir.en.mdx
function Xt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Direction" }),
		"\n",
		s(t.p, { children: [
			"Property ",
			o(t.code, { children: "dir" }),
			" controls mirroring of the element based on text direction (LTR/RTL)."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Usage:" }) }),
		"\n",
		o(t.p, { children: "Automatically inverts the visual representation when switching between left-to-right and right-to-left languages. Especially important for elements containing directional graphic symbols (arrows, pointers)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " (default) — standard display"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — enables text direction adaptation"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Text direction adaptation -->\n<Component dir />\n",
			language: "html"
		})
	] });
}
function Zt(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Xt, { ...e })
	}) : Xt(e);
}
//#endregion
//#region src/media/mdx/style/dir.ru.mdx
function Qt(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Направление" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "dir" }),
			" управляет зеркальным отображением элемента в зависимости от направления текста (LTR/RTL)."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Применение:" }) }),
		"\n",
		o(t.p, { children: "Автоматически инвертирует визуальное представление при переключении между языками с левосторонним и правосторонним письмом. Особенно важно для элементов, содержащих направленные графические символы (стрелки, указатели)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " (по умолчанию) — стандартное отображение"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — включает адаптацию к направлению текста"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Адаптация под направление текста -->\n<Component dir />\n",
			language: "html"
		})
	] });
}
function $t(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Qt, { ...e })
	}) : Qt(e);
}
//#endregion
//#region src/media/mdx/style/isSkeleton.en.mdx
function en(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Skeleton mode" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "isSkeleton" }),
			" property defines element behavior when interacting with the parent Skeleton component."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — element displays as skeleton when Skeleton is in active state"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " — element becomes invisible when Skeleton is in active state"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Works in conjunction with the Skeleton component to control visibility and display mode of child elements. When parent Skeleton has ",
			o(t.code, { children: "active=false" }),
			", all child elements display normally regardless of ",
			o(t.code, { children: "isSkeleton" }),
			" value. When ",
			o(t.code, { children: "active=true" }),
			", elements with ",
			o(t.code, { children: "isSkeleton=true" }),
			" are shown as skeleton placeholders, while elements with ",
			o(t.code, { children: "isSkeleton=false" }),
			" are completely hidden."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Element will display as skeleton -->\n<Skeleton active>\n<Component isSkeleton text=\"Loading...\" />\n</Skeleton>\n\n<!-- Element will be hidden -->\n<Skeleton active>\n<Component :isSkeleton=\"false\" text=\"Hidden text\" />\n</Skeleton>\n",
			language: "html"
		})
	] });
}
function tn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(en, { ...e })
	}) : en(e);
}
//#endregion
//#region src/media/mdx/style/isSkeleton.ru.mdx
function nn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Режим скелетона" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "isSkeleton" }),
			" определяет поведение элемента при взаимодействии с родительским компонентом Skeleton."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — элемент отображается как скелетон при активном состоянии Skeleton"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " — элемент становится невидимым при активном состоянии Skeleton"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Работает в паре с компонентом Skeleton для управления видимостью и режимом отображения дочерних элементов. При ",
			o(t.code, { children: "active=false" }),
			" у родительского Skeleton все дочерние элементы отображаются нормально независимо от значения ",
			o(t.code, { children: "isSkeleton" }),
			". При ",
			o(t.code, { children: "active=true" }),
			" элементы с ",
			o(t.code, { children: "isSkeleton=true" }),
			" показываются как скелетон-заглушки, а элементы с ",
			o(t.code, { children: "isSkeleton=false" }),
			" скрываются полностью."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Элемент будет отображаться как скелетон -->\n<Skeleton active>\n<Component isSkeleton text=\"Загрузка...\" />\n</Skeleton>\n\n<!-- Элемент будет скрыт -->\n<Skeleton active>\n<Component :isSkeleton=\"false\" text=\"Скрытый текст\" />\n</Skeleton>\n",
			language: "html"
		})
	] });
}
function rn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(nn, { ...e })
	}) : nn(e);
}
//#endregion
//#region src/media/mdx/style/wikiMdxStyle.ts
var an = {
	name: "Style",
	descriptions: {
		adaptive: {
			en: Ut,
			ru: Gt
		},
		asPalette: {
			en: qt,
			ru: Yt
		},
		dir: {
			en: Zt,
			ru: $t
		},
		isSkeleton: {
			en: tn,
			ru: rn
		}
	}
};
//#endregion
//#region src/media/mdx/value/highlight.en.mdx
function on(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Managing search and highlighting" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "highlight" }),
			" and ",
			o(t.code, { children: "highlightLengthStart" }),
			" properties work together to control match highlighting when searching through list items. They set the search string and minimum query length for activating visual highlighting of found fragments."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "highlight" }), " — search string for finding and highlighting in list items"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "highlightLengthStart" }),
				" — minimum search string length to start highlighting, defaults to ",
				o(t.code, { children: "2" })
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Match highlighting is activated automatically: when the ",
			o(t.code, { children: "highlight" }),
			" length is less than ",
			o(t.code, { children: "highlightLengthStart" }),
			", search works but visual highlighting is not applied. When the minimum length is reached, the component begins highlighting found fragments across the entire list hierarchy. Search works in real-time and considers nested items in groups and menus. Use ",
			o(t.code, { children: "highlightLengthStart" }),
			" to prevent excessive highlighting with short queries."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Standard search with highlighting from 2 characters -->\n<List :list=\"items\" highlight=\"text\" />\n\n<!-- Search with highlighting from 3 characters -->\n<List :list=\"items\" highlight=\"abc\" :highlightLengthStart=\"3\" />\n\n<!-- Dynamic search with v-model -->\n<List :list=\"items\" :highlight=\"searchQuery\" :highlightLengthStart=\"1\" />\n\n<!-- Search without minimum threshold -->\n<List :list=\"products\" :highlight=\"filter\" :highlightLengthStart=\"0\" />\n",
			language: "html"
		})
	] });
}
function sn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(on, { ...e })
	}) : on(e);
}
//#endregion
//#region src/media/mdx/value/highlight.ru.mdx
function cn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление поиском и выделением" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "highlight" }),
			" и ",
			o(t.code, { children: "highlightLengthStart" }),
			" работают в связке для управления подсветкой совпадений при поиске по элементам списка. Они устанавливают строку поиска и минимальную длину запроса для активации визуального выделения найденных фрагментов."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "highlight" }), " — строка для поиска и подсветки в элементах списка"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "highlightLengthStart" }),
				" — минимальная длина строки поиска для начала выделения, по умолчанию ",
				o(t.code, { children: "2" })
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Выделение совпадений активируется автоматически: когда длина ",
			o(t.code, { children: "highlight" }),
			" меньше ",
			o(t.code, { children: "highlightLengthStart" }),
			", поиск работает, но визуальное выделение не применяется. При достижении минимальной длины компонент начинает подсвечивать найденные фрагменты во всей иерархии списка. Поиск работает в реальном времени и учитывает вложенные элементы в группах и меню. Используйте ",
			o(t.code, { children: "highlightLengthStart" }),
			" для предотвращения чрезмерного выделения при коротких запросах."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Стандартный поиск с выделением от 2 символов -->\n<List :list=\"items\" highlight=\"текст\" />\n\n<!-- Поиск с выделением от 3 символов -->\n<List :list=\"items\" highlight=\"abc\" :highlightLengthStart=\"3\" />\n\n<!-- Динамический поиск с v-model -->\n<List :list=\"items\" :highlight=\"searchQuery\" :highlightLengthStart=\"1\" />\n\n<!-- Поиск без минимального порога -->\n<List :list=\"products\" :highlight=\"filter\" :highlightLengthStart=\"0\" />\n",
			language: "html"
		})
	] });
}
function ln(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(cn, { ...e })
	}) : cn(e);
}
//#endregion
//#region src/media/mdx/value/labelNumber.en.mdx
function un(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Working with text labels and numbers" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "label" }),
			", ",
			o(t.code, { children: "labelMax" }),
			", and ",
			o(t.code, { children: "formatting" }),
			" properties are designed to manage the display of textual and numerical content in interface components."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "label" }), " — text label or numeric value to display"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "labelMax" }), " — maximum value for numeric labels (adds \"+\" indicator when exceeded)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "formatting" }), " — enables formatting of numeric values according to user locale"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together for flexible content management: ",
			o(t.code, { children: "label" }),
			" accepts both textual and numeric values. When a number is passed, automatic processing is applied with localization consideration. The ",
			o(t.code, { children: "labelMax" }),
			" property limits the display of large numbers — when the value is exceeded, a \"+\" symbol is added (e.g., \"99+\"). The ",
			o(t.code, { children: "formatting" }),
			" property controls number formatting according to user regional settings, ensuring correct display of separators and numeric formats."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst count = ref(5)\nconst largeNumber = ref(1234)\n<\/script>\n\n<template>\n<!-- Basic usage with text -->\n<Component label=\"Text\" />\n\n<!-- Numeric value -->\n<Component :label=\"count\" />\n\n<!-- Maximum value limitation -->\n<Component :label=\"150\" :label-max=\"99\" />\n<!-- Displays: 99+ -->\n\n<!-- With number formatting -->\n<Component\n  :label=\"largeNumber\"\n  :formatting=\"true\"\n/>\n<!-- Displays: 1,234 (depending on locale) -->\n\n<!-- Combined usage -->\n<Component\n  :label=\"999\"\n  :label-max=\"99\"\n  :formatting=\"true\"\n/>\n<!-- Displays: 99+ -->\n</template>\n",
			language: "html"
		})
	] });
}
function dn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(un, { ...e })
	}) : un(e);
}
//#endregion
//#region src/media/mdx/value/labelNumber.ru.mdx
function fn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Работа с текстовыми метками и числами" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "label" }),
			", ",
			o(t.code, { children: "labelMax" }),
			" и ",
			o(t.code, { children: "formatting" }),
			" предназначены для управления отображением текстового и числового контента в компонентах интерфейса."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "label" }), " — текстовая метка или числовое значение для отображения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "labelMax" }), " — максимальное значение для числовых меток (при превышении добавляется индикатор \"+\")"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "formatting" }), " — включает форматирование числовых значений согласно локали пользователя"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно для гибкого управления контентом: ",
			o(t.code, { children: "label" }),
			" принимает как текстовые, так и числовые значения. При передаче числа применяется автоматическая обработка с учётом локализации. Свойство ",
			o(t.code, { children: "labelMax" }),
			" ограничивает отображение больших чисел — при превышении значения добавляется символ \"+\" (например, \"99+\"). Свойство ",
			o(t.code, { children: "formatting" }),
			" контролирует форматирование чисел согласно региональным настройкам пользователя, обеспечивая корректное отображение разделителей и числовых форматов."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst count = ref(5)\nconst largeNumber = ref(1234)\n<\/script>\n\n<template>\n<!-- Базовое использование с текстом -->\n<Component label=\"Текст\" />\n\n<!-- Числовое значение -->\n<Component :label=\"count\" />\n\n<!-- Ограничение максимального значения -->\n<Component :label=\"150\" :label-max=\"99\" />\n<!-- Отобразит: 99+ -->\n\n<!-- С форматированием чисел -->\n<Component\n  :label=\"largeNumber\"\n  :formatting=\"true\"\n/>\n<!-- Отобразит: 1 234 (в зависимости от локали) -->\n\n<!-- Комбинированное использование -->\n<Component\n  :label=\"999\"\n  :label-max=\"99\"\n  :formatting=\"true\"\n/>\n<!-- Отобразит: 99+ -->\n</template>\n",
			language: "html"
		})
	] });
}
function pn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(fn, { ...e })
	}) : fn(e);
}
//#endregion
//#region src/media/mdx/value/value.en.mdx
function mn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Value and Data Passing" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "value" }),
			" and ",
			o(t.code, { children: "detail" }),
			" properties are designed to transfer information when interacting with components and handling events."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value" }), " — main component value (string, number, object)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail" }), " — additional data and contextual information"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: ",
			o(t.code, { children: "value" }),
			" contains the main component value, which is passed during events and accessible via the expose API. ",
			o(t.code, { children: "detail" }),
			" extends ",
			o(t.code, { children: "value" }),
			" with additional data such as metadata, identifiers, or other auxiliary information. Both properties are available for programmatic reading and passed in component events, providing complete information about the state and context during interaction."
		] })
	] });
}
function hn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(mn, { ...e })
	}) : mn(e);
}
//#endregion
//#region src/media/mdx/value/value.ru.mdx
function gn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Передача значений и данных" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "value" }),
			" и ",
			o(t.code, { children: "detail" }),
			" предназначены для передачи информации при взаимодействии с компонентами и обработке событий."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value" }), " — основное значение компонента (строка, число, объект)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "detail" }), " — дополнительные данные и контекстная информация"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: ",
			o(t.code, { children: "value" }),
			" содержит основное значение компонента, которое передаётся при событиях и доступно через expose API. ",
			o(t.code, { children: "detail" }),
			" расширяет ",
			o(t.code, { children: "value" }),
			" дополнительными данными, такими как метаданные, идентификаторы или другая вспомогательная информация. Оба свойства доступны для программного чтения и передаются в события компонента, обеспечивая полную информацию о состоянии и контексте при взаимодействии."
		] })
	] });
}
function _n(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(gn, { ...e })
	}) : gn(e);
}
//#endregion
//#region src/media/mdx/value/v-model.en.mdx
function vn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Managing value via v-model" }),
		"\n",
		s(t.p, { children: [
			"Two-way value binding using ",
			o(t.code, { children: "v-model" }),
			" (component uses standard ",
			o(t.code, { children: "modelValue" }),
			")."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "modelValue: string | number" }), " — current value"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('')\n<\/script>\n\n<template>\n<div>\n  <button @click=\"value = 'Example'\">Set value</button>\n  <button @click=\"value = ''\">Clear</button>\n</div>\n\n<Component v-model=\"value\" />\n\n<div>Current value: {{ value }}</div>\n</template>\n",
			language: "html"
		})
	] });
}
function yn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(vn, { ...e })
	}) : vn(e);
}
//#endregion
//#region src/media/mdx/value/v-model.ru.mdx
function bn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление значением через v-model" }),
		"\n",
		s(t.p, { children: [
			"Двусторонняя привязка значения через ",
			o(t.code, { children: "v-model" }),
			" (компонент использует стандартный ",
			o(t.code, { children: "modelValue" }),
			")."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "modelValue: string | number" }), " — текущее значение"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('')\n<\/script>\n\n<template>\n<div>\n  <button @click=\"value = 'Пример'\">Установить значение</button>\n  <button @click=\"value = ''\">Очистить</button>\n</div>\n\n<Component v-model=\"value\" />\n\n<div>Текущее значение: {{ value }}</div>\n</template>\n",
			language: "html"
		})
	] });
}
function xn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(bn, { ...e })
	}) : bn(e);
}
//#endregion
//#region src/media/mdx/value/v-model-selected.en.mdx
function Sn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Managing selection via v-model:selected" }),
		"\n",
		s(t.p, { children: [
			"Two-way binding for selected value using ",
			o(t.code, { children: "v-model:selected" }),
			" (component uses ",
			o(t.code, { children: "modelSelected" }),
			")."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "modelSelected: string | number | string[] | number[] | undefined" }), " — current selected value"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('')\n<\/script>\n\n<template>\n<div>\n  <button @click=\"selected = 'option1'\">Select Option 1</button>\n  <button @click=\"selected = 'option2'\">Select Option 2</button>\n  <button @click=\"selected = undefined\">Clear</button>\n</div>\n\n<Component v-model:selected=\"selected\" :list=\"['Option 1', 'Option 2', 'Option 3']\" />\n\n<div>Current selected value: {{ selected }}</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Cn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Sn, { ...e })
	}) : Sn(e);
}
//#endregion
//#region src/media/mdx/value/v-model-selected.ru.mdx
function wn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление выбором через v-model:selected" }),
		"\n",
		s(t.p, { children: [
			"Двусторонняя привязка выбранного значения через ",
			o(t.code, { children: "v-model:selected" }),
			" (компонент использует ",
			o(t.code, { children: "modelSelected" }),
			")."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "modelSelected: string | number | string[] | number[] | undefined" }), " — текущее выбранное значение"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('')\n<\/script>\n\n<template>\n<div>\n  <button @click=\"selected = 'option1'\">Выбрать Option 1</button>\n  <button @click=\"selected = 'option2'\">Выбрать Option 2</button>\n  <button @click=\"selected = undefined\">Очистить</button>\n</div>\n\n<Component v-model:selected=\"selected\" :list=\"['Option 1', 'Option 2', 'Option 3']\" />\n\n<div>Текущее выбранное значение: {{ selected }}</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Tn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(wn, { ...e })
	}) : wn(e);
}
//#endregion
//#region src/media/mdx/value/wikiMdxValue.ts
var En = {
	name: "Value",
	descriptions: {
		highlight: {
			en: sn,
			ru: ln
		},
		labelNumber: {
			en: dn,
			ru: pn
		},
		"v-model": {
			en: yn,
			ru: xn
		},
		"v-model:selected": {
			en: Cn,
			ru: Tn
		},
		value: {
			en: hn,
			ru: _n
		}
	}
};
//#endregion
//#region src/media/mdx/Accordion/accordion.en.mdx
function Dn(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "Expandable container for organizing content with smooth opening and closing animations, simplifying information structuring in the interface." }),
		"\n",
		o(t.p, { children: "Accordion allows creating expandable sections with automatic animations, interactive header, and state management via v-model. The component supports padding configuration, visual dividers, and content customization through slots." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Smooth expand and collapse animations" }),
			"\n",
			o(t.li, { children: "Header with label, description, and icons" }),
			"\n",
			o(t.li, { children: "State management via v-model:open" }),
			"\n",
			o(t.li, { children: "Programmatic control (toggle, toOpen, toClose)" }),
			"\n",
			o(t.li, { children: "Internal padding configuration (padding)" }),
			"\n",
			o(t.li, { children: "Visual divider between sections" }),
			"\n",
			o(t.li, { children: "Customization via head and default slots" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "FAQ sections" }),
			"\n",
			o(t.li, { children: "Settings panels" }),
			"\n",
			o(t.li, { children: "Product filters" }),
			"\n",
			o(t.li, { children: "Information blocks" }),
			"\n",
			o(t.li, { children: "Menus with subsections" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n<!-- Basic accordion -->\n<Accordion label=\"Question 1\">\n  <p>Answer to the question.</p>\n</Accordion>\n\n<!-- With state management -->\n<Accordion\n  v-model:open=\"isOpen\"\n  label=\"Settings\"\n  icon=\"settings\"\n>\n  <p>Settings content.</p>\n</Accordion>\n\n<!-- With custom header -->\n<Accordion>\n  <template #head>\n    <div>Custom header</div>\n  </template>\n  <template #default>\n    <p>Section content.</p>\n  </template>\n</Accordion>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Accordion is a component for creating expandable sections with animation support, state management, and flexible customization." }),
			"\n"
		] })
	] });
}
function On(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Dn, { ...e })
	}) : Dn(e);
}
//#endregion
//#region src/media/mdx/Accordion/accordion.ru.mdx
function kn(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Раскрывающийся контейнер для организации контента с плавными анимациями открытия и закрытия, упрощающий структурирование информации в интерфейсе." }),
		"\n",
		o(t.p, { children: "Accordion позволяет создавать раскрывающиеся секции с автоматическими анимациями, интерактивным заголовком и возможностью управления через v-model. Компонент поддерживает настройку отступов, визуальных разделителей и кастомизацию содержимого через слоты." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Плавные анимации раскрытия и сворачивания" }),
			"\n",
			o(t.li, { children: "Заголовок с меткой, описанием и иконками" }),
			"\n",
			o(t.li, { children: "Управление состоянием через v-model:open" }),
			"\n",
			o(t.li, { children: "Программное управление (toggle, toOpen, toClose)" }),
			"\n",
			o(t.li, { children: "Настройка внутренних отступов (padding)" }),
			"\n",
			o(t.li, { children: "Визуальный разделитель между секциями" }),
			"\n",
			o(t.li, { children: "Кастомизация через слоты head и default" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "FAQ секции" }),
			"\n",
			o(t.li, { children: "Панели настроек" }),
			"\n",
			o(t.li, { children: "Фильтры товаров" }),
			"\n",
			o(t.li, { children: "Информационные блоки" }),
			"\n",
			o(t.li, { children: "Меню с подразделами" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n<!-- Базовый аккордеон -->\n<Accordion label=\"Вопрос 1\">\n  <p>Ответ на вопрос.</p>\n</Accordion>\n\n<!-- С управлением состоянием -->\n<Accordion\n  v-model:open=\"isOpen\"\n  label=\"Настройки\"\n  icon=\"settings\"\n>\n  <p>Содержимое настроек.</p>\n</Accordion>\n\n<!-- С кастомным заголовком -->\n<Accordion>\n  <template #head>\n    <div>Свой заголовок</div>\n  </template>\n  <template #default>\n    <p>Содержимое секции.</p>\n  </template>\n</Accordion>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Accordion — компонент для создания раскрывающихся секций с поддержкой анимаций, управления состоянием и гибкой кастомизации." }),
			"\n"
		] })
	] });
}
function An(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(kn, { ...e })
	}) : kn(e);
}
//#endregion
//#region src/media/mdx/Accordion/slots.en.mdx
function jn(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "default(props: MotionTransformControlItem): any" }), " — Slot for placing the main accordion content that appears when the section is expanded."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "MotionTransformControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "isOpen: ComputedRef<boolean>" }), " — reactive open state."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "isShow: ComputedRef<boolean>" }), " — visible or preparing to show."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classes: MotionTransformClassList" }), " — helper CSS classes."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "idControl: string" }), " — identifier for the control element."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "idBody: string" }), " — identifier for the body element."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: AriaRoleControlPropsInclude" }), " — binding attributes for accessibility."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Mn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(jn, { ...e })
	}) : jn(e);
}
//#endregion
//#region src/media/mdx/Accordion/slots.ru.mdx
function Nn(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "default(props: MotionTransformControlItem): any" }), " — Слот для размещения основного содержимого аккордеона, которое появляется при раскрытии секции."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "MotionTransformControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "isOpen: ComputedRef<boolean>" }), " — реактивное состояние открытия."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "isShow: ComputedRef<boolean>" }), " — видим либо готовится к показу."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classes: MotionTransformClassList" }), " — вспомогательные CSS‑классы."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "idControl: string" }), " — идентификатор элемента управления."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "idBody: string" }), " — идентификатор элемента тела."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: AriaRoleControlPropsInclude" }), " — атрибуты привязки для доступности."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Pn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Nn, { ...e })
	}) : Nn(e);
}
//#endregion
//#region src/media/mdx/Accordion/wikiMdxAccordion.ts
var Fn = {
	name: "Accordion",
	descriptions: {
		accordion: {
			en: On,
			ru: An
		},
		slots: {
			en: Mn,
			ru: Pn
		}
	}
};
//#endregion
//#region src/media/mdx/Area/area.en.mdx
function In(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "A component for dynamic content switching based on the area context." }),
		"\n",
		o(t.p, { children: "Area acts as a smart slot switcher. It retrieves the current area value from the injection context or uses a default value. The component then renders the slot whose name matches the current area value. If no matching slot is found, the default slot is displayed." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic slot selection based on the injected area value" }),
			"\n",
			s(t.li, { children: [
				"Ability to specify a default area via the ",
				o(t.code, { children: "areaDefault" }),
				" property"
			] }),
			"\n",
			o(t.li, { children: "Support for nested areas and context inheritance" }),
			"\n",
			o(t.li, { children: "Seamless integration into complex layouts (e.g., Window)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Creating dynamic headers and footers" }),
			"\n",
			o(t.li, { children: "Adapting content based on the component's placement" }),
			"\n",
			o(t.li, { children: "Organizing complex layouts with dynamic content zones" }),
			"\n",
			o(t.li, { children: "Implementing extension slots in base components" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<Area area-default=\"header\">\n  <template #header>\n    Header Content\n  </template>\n  <template #footer>\n    Footer Content\n  </template>\n  <template #default>\n    Default Content\n  </template>\n</Area>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Area is an essential tool for creating flexible and extensible interfaces, allowing components to react to their environment." }),
			"\n"
		] })
	] });
}
function Ln(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(In, { ...e })
	}) : In(e);
}
//#endregion
//#region src/media/mdx/Area/area.ru.mdx
function Rn(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Компонент для динамического переключения контента на основе контекста области (area)." }),
		"\n",
		o(t.p, { children: "Area выступает в роли умного переключателя слотов. Он получает текущее значение области из контекста внедрения или использует значение по умолчанию. Затем компонент отображает тот слот, имя которого совпадает с текущим значением области. Если подходящий слот не найден, отображается слот по умолчанию." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматический выбор слота на основе внедренного значения области" }),
			"\n",
			s(t.li, { children: ["Возможность указания области по умолчанию через свойство ", o(t.code, { children: "areaDefault" })] }),
			"\n",
			o(t.li, { children: "Поддержка вложенных областей и наследования контекста" }),
			"\n",
			o(t.li, { children: "Плавная интеграция в сложные макеты (например, Window)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Создание динамических шапок и подвалов" }),
			"\n",
			o(t.li, { children: "Адаптация контента в зависимости от места размещения компонента" }),
			"\n",
			o(t.li, { children: "Организация сложных макетов с динамическими зонами контента" }),
			"\n",
			o(t.li, { children: "Реализация слотов расширения в базовых компонентах" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<Area area-default=\"header\">\n  <template #header>\n    Контент для шапки\n  </template>\n  <template #footer>\n    Контент для подвала\n  </template>\n  <template #default>\n    Контент по умолчанию\n  </template>\n</Area>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Area является важным инструментом для создания гибких и расширяемых интерфейсов, позволяя компонентам реагировать на их окружение." }),
			"\n"
		] })
	] });
}
function zn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Rn, { ...e })
	}) : Rn(e);
}
//#endregion
//#region src/media/mdx/Area/slot.en.mdx
function Bn(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "[area]: any" }), " — Dynamic slot for rendering content. The current area value is used as the slot name to select the appropriate content."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "default: any" }), " — Default slot, which is displayed if no specific slot is provided for the current area value or if the area value is undefined."] }),
		"\n"
	] });
}
function Vn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Bn, { ...e })
	}) : Bn(e);
}
//#endregion
//#region src/media/mdx/Area/slot.ru.mdx
function Hn(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "[area]: any" }), " — Динамический слот для рендеринга контента. Текущее значение области (area) используется как имя слота для выбора соответствующего контента."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "default: any" }), " — Слот по умолчанию, который отображается, если для текущего значения области не предоставлен специфический слот или если значение области не определено."] }),
		"\n"
	] });
}
function Un(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Hn, { ...e })
	}) : Hn(e);
}
//#endregion
//#region src/media/mdx/Area/wikiMdxArea.ts
var Wn = {
	name: "Area",
	descriptions: {
		area: {
			en: Ln,
			ru: zn
		},
		slot: {
			en: Vn,
			ru: Un
		}
	}
};
//#endregion
//#region src/media/mdx/Actions/actions.en.mdx
function Gn(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Container for organizing action buttons with support for primary and secondary grouping, various alignment modes, and adaptive behavior." }),
		"\n",
		o(t.p, { children: "Actions centralizes the management of interactive button placement in dialogs, forms, and panels, automatically distributes space between groups, supports flexible adaptation to available space, and provides a unified API for creating consistent action sets. It serves as a fundamental component for building user interfaces with clear button hierarchy." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Core capabilities:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Button grouping (primary group via list, secondary via listSecondary)" }),
			"\n",
			o(t.li, { children: "Alignment control (left, right, center, block, none)" }),
			"\n",
			o(t.li, { children: "Adaptive behavior through flexible property (adaptive/container)" }),
			"\n",
			o(t.li, { children: "Automatic spacer between button groups" }),
			"\n",
			o(t.li, { children: "Separate attribute configuration (buttonAttrs, buttonSecondaryAttrs)" }),
			"\n",
			o(t.li, { children: "Slot support for custom content (default, secondary)" }),
			"\n",
			o(t.li, { children: "Integration with Button component with all its features" }),
			"\n",
			o(t.li, { children: "Flexible layout with automatic transition to block mode" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Action panels in dialogs and modal windows" }),
			"\n",
			o(t.li, { children: "Button sets in forms (cancel, save, apply)" }),
			"\n",
			o(t.li, { children: "Control panels with primary and auxiliary actions" }),
			"\n",
			o(t.li, { children: "Adaptive interfaces with automatic restructuring on mobile devices" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { Actions } from '@dxtmisha/constructor'\n\nconst isLoading = ref(false)\n\nconst handleSave = async () => {\nisLoading.value = true\nawait saveData()\nisLoading.value = false\n}\n<\/script>\n\n<template>\n<Actions\n  align=\"right\"\n  :list=\"[\n    { label: 'Cancel' },\n    { label: 'Save', primary: true, loading: isLoading }\n  ]\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Actions is a smart container: it automatically manages button placement, adapts to screen size, and provides visual hierarchy between primary and secondary actions." }),
			"\n"
		] })
	] });
}
function Kn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Gn, { ...e })
	}) : Gn(e);
}
//#endregion
//#region src/media/mdx/Actions/actions.ru.mdx
function qn(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Контейнер для организации кнопок действий с поддержкой основной и вторичной группировки, различных режимов выравнивания и адаптивного поведения." }),
		"\n",
		o(t.p, { children: "Actions централизует управление расположением интерактивных кнопок в диалогах, формах и панелях, автоматически распределяет пространство между группами, поддерживает гибкую адаптацию к доступному месту и предоставляет единый API для создания консистентных наборов действий. Является фундаментальным компонентом для построения пользовательских интерфейсов с четкой иерархией кнопок." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Группировка кнопок (основная группа через list, вторичная через listSecondary)" }),
			"\n",
			o(t.li, { children: "Управление выравниванием (left, right, center, block, none)" }),
			"\n",
			o(t.li, { children: "Адаптивное поведение через свойство flexible (adaptive/container)" }),
			"\n",
			o(t.li, { children: "Автоматический спейсер между группами кнопок" }),
			"\n",
			o(t.li, { children: "Раздельная настройка атрибутов (buttonAttrs, buttonSecondaryAttrs)" }),
			"\n",
			o(t.li, { children: "Поддержка слотов для кастомного контента (default, secondary)" }),
			"\n",
			o(t.li, { children: "Интеграция с компонентом Button со всеми его возможностями" }),
			"\n",
			o(t.li, { children: "Гибкая раскладка с автоматическим переходом в блочный режим" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Панели действий в диалоговых окнах и модальных окнах" }),
			"\n",
			o(t.li, { children: "Наборы кнопок в формах (отмена, сохранение, применение)" }),
			"\n",
			o(t.li, { children: "Панели управления с основными и дополнительными действиями" }),
			"\n",
			o(t.li, { children: "Адаптивные интерфейсы с автоматической перестройкой на мобильных устройствах" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { Actions } from '@dxtmisha/constructor'\n\nconst isLoading = ref(false)\n\nconst handleSave = async () => {\nisLoading.value = true\nawait saveData()\nisLoading.value = false\n}\n<\/script>\n\n<template>\n<Actions\n  align=\"right\"\n  :list=\"[\n    { label: 'Отмена' },\n    { label: 'Сохранить', primary: true, loading: isLoading }\n  ]\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Actions — это умный контейнер: он автоматически управляет расположением кнопок, адаптируется к размеру экрана и обеспечивает визуальную иерархию между основными и вторичными действиями." }),
			"\n"
		] })
	] });
}
function Jn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(qn, { ...e })
	}) : qn(e);
}
//#endregion
//#region src/media/mdx/Actions/flexible.en.mdx
function Yn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Adaptive layout behavior" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "flexible" }),
			" property determines automatic switching to block mode when space is limited."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'adaptive'" }), " — uses media queries to determine breakpoint"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'container'" }), " — uses container queries to adapt to parent size"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Automatically applies ",
			o(t.code, { children: "align=\"block\"" }),
			" property when available space becomes smaller than a defined breakpoint. With ",
			o(t.code, { children: "adaptive" }),
			" it tracks screen width through media queries, with ",
			o(t.code, { children: "container" }),
			" it adapts to parent container size. Suitable for creating adaptive interfaces that display correctly on both desktop and mobile devices without additional code."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Automatic transition on narrow screens -->\n<Actions flexible=\"adaptive\" :list=\"[...]\" />\n\n<!-- Adapts to parent size -->\n<Actions flexible=\"container\" :list=\"[...]\" />\n",
			language: "html"
		})
	] });
}
function Xn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Yn, { ...e })
	}) : Yn(e);
}
//#endregion
//#region src/media/mdx/Actions/flexible.ru.mdx
function Zn(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Адаптивное поведение раскладки" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "flexible" }),
			" определяет автоматическое переключение раскладки в блочный режим при нехватке места."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'adaptive'" }), " — использует медиа-запросы для определения точки перехода"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'container'" }), " — использует container queries для адаптации к размеру родителя"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Автоматически применяет свойство ",
			o(t.code, { children: "align=\"block\"" }),
			" когда доступное пространство становится меньше определенного брейкпоинта. При ",
			o(t.code, { children: "adaptive" }),
			" отслеживает ширину экрана через медиа-запросы, при ",
			o(t.code, { children: "container" }),
			" адаптируется к размеру родительского контейнера. Подходит для создания адаптивных интерфейсов, которые корректно отображаются как на десктопе, так и на мобильных устройствах без дополнительного кода."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Автоматический переход на узких экранах -->\n<Actions flexible=\"adaptive\" :list=\"[...]\" />\n\n<!-- Адаптация к размеру родителя -->\n<Actions flexible=\"container\" :list=\"[...]\" />\n",
			language: "html"
		})
	] });
}
function Qn(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zn, { ...e })
	}) : Zn(e);
}
//#endregion
//#region src/media/mdx/Actions/list.en.mdx
function $n(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Managing action button groups" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "list" }),
			" and ",
			o(t.code, { children: "listSecondary" }),
			" properties work together to organize buttons in the Actions container. They manage the rendering of primary and secondary button groups with automatic attribute application and visual separation."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "list" }), " — array of configurations for primary action buttons (Cancel, Save, Apply)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "listSecondary" }), " — array of configurations for secondary buttons (Delete, Reset, Export)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Each array element represents an object with button configuration, supporting all Button component properties (label, icon, disabled, primary, loading, and others). The component automatically applies base attributes from ",
			o(t.code, { children: "buttonAttrs" }),
			" to primary buttons and from ",
			o(t.code, { children: "buttonSecondaryAttrs" }),
			" to secondary ones. Secondary buttons are positioned separately with an automatic spacer and are hidden in ",
			o(t.code, { children: "align=\"center\"" }),
			" and ",
			o(t.code, { children: "align=\"block\"" }),
			" modes. Use ",
			o(t.code, { children: "list" }),
			" for primary actions and ",
			o(t.code, { children: "listSecondary" }),
			" for destructive or less important operations."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Primary buttons -->\n<Actions\n:list=\"[\n  { label: 'Cancel', onClick: () => close() },\n  { label: 'Save', primary: true, onClick: () => save() }\n]\"\n/>\n\n<!-- Primary and secondary buttons -->\n<Actions\n:list=\"[\n  { label: 'Cancel' },\n  { label: 'Save', primary: true }\n]\"\n:list-secondary=\"[\n  { label: 'Delete', text: true, icon: 'delete', palette: 'error' }\n]\"\n/>\n\n<!-- Buttons with dynamic state -->\n<Actions\n:list=\"[\n  { label: 'Cancel', disabled: isProcessing },\n  { label: 'Save', primary: true, loading: isLoading }\n]\"\n:button-attrs=\"{ size: 'medium' }\"\n/>\n\n<!-- Secondary buttons with settings -->\n<Actions\n:list=\"[{ label: 'Close' }]\"\n:list-secondary=\"[\n  { label: 'Export', icon: 'download' },\n  { label: 'Help', icon: 'help' }\n]\"\n:button-secondary-attrs=\"{ size: 'small', text: true }\"\n/>\n",
			language: "html"
		})
	] });
}
function er(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($n, { ...e })
	}) : $n(e);
}
//#endregion
//#region src/media/mdx/Actions/list.ru.mdx
function tr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление группами кнопок действий" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "list" }),
			" и ",
			o(t.code, { children: "listSecondary" }),
			" работают в связке для организации кнопок в контейнере Actions. Они управляют рендерингом основной и вторичной групп кнопок с автоматическим применением атрибутов и визуальным разделением."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "list" }), " — массив конфигураций для основных кнопок действий (Отмена, Сохранить, Применить)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "listSecondary" }), " — массив конфигураций для вторичных кнопок (Удалить, Сбросить, Экспорт)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Каждый элемент массива представляет собой объект с конфигурацией кнопки, поддерживающий все свойства компонента Button (label, icon, disabled, primary, loading и другие). Компонент автоматически применяет базовые атрибуты из ",
			o(t.code, { children: "buttonAttrs" }),
			" к основным кнопкам и из ",
			o(t.code, { children: "buttonSecondaryAttrs" }),
			" к вторичным. Вторичные кнопки располагаются отдельно с автоматическим спейсером и скрываются в режимах ",
			o(t.code, { children: "align=\"center\"" }),
			" и ",
			o(t.code, { children: "align=\"block\"" }),
			". Используйте ",
			o(t.code, { children: "list" }),
			" для основных действий и ",
			o(t.code, { children: "listSecondary" }),
			" для деструктивных или менее важных операций."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Основные кнопки -->\n<Actions\n:list=\"[\n  { label: 'Отмена', onClick: () => close() },\n  { label: 'Сохранить', primary: true, onClick: () => save() }\n]\"\n/>\n\n<!-- Основные и вторичные кнопки -->\n<Actions\n:list=\"[\n  { label: 'Отмена' },\n  { label: 'Сохранить', primary: true }\n]\"\n:list-secondary=\"[\n  { label: 'Удалить', text: true, icon: 'delete', palette: 'error' }\n]\"\n/>\n\n<!-- Кнопки с динамическим состоянием -->\n<Actions\n:list=\"[\n  { label: 'Отмена', disabled: isProcessing },\n  { label: 'Сохранить', primary: true, loading: isLoading }\n]\"\n:button-attrs=\"{ size: 'medium' }\"\n/>\n\n<!-- Вторичные кнопки с настройками -->\n<Actions\n:list=\"[{ label: 'Закрыть' }]\"\n:list-secondary=\"[\n  { label: 'Экспорт', icon: 'download' },\n  { label: 'Справка', icon: 'help' }\n]\"\n:button-secondary-attrs=\"{ size: 'small', text: true }\"\n/>\n",
			language: "html"
		})
	] });
}
function nr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(tr, { ...e })
	}) : tr(e);
}
//#endregion
//#region src/media/mdx/Actions/wikiMdxActions.ts
var rr = {
	name: "Actions",
	descriptions: {
		actions: {
			en: Kn,
			ru: Jn
		},
		flexible: {
			en: Xn,
			ru: Qn
		},
		list: {
			en: er,
			ru: nr
		}
	}
};
//#endregion
//#region src/media/mdx/ActionSheet/actionSheet.en.mdx
function ir(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating mobile-optimized action panels that slide up from the bottom of the screen with smooth animation." }),
		"\n",
		s(t.p, { children: [
			"ActionSheet is a specialized wrapper over the Window component with a preset ",
			o(t.code, { children: "actionSheet" }),
			" adaptive mode. The component automatically positions itself at the bottom of the screen and slides up when opened, following iOS and Material Design mobile interface patterns. Supports swipe gestures for closing, integration with the Bars component for the header, and automatic focus management."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Positioning at the bottom of the screen with slide-up animation" }),
			"\n",
			o(t.li, { children: "Touch gesture support for closing by swiping down" }),
			"\n",
			o(t.li, { children: "Integration with Bars for header display" }),
			"\n",
			o(t.li, { children: "Automatic background blocking when opened" }),
			"\n",
			o(t.li, { children: "Closing by clicking on overlay or close button" }),
			"\n",
			o(t.li, { children: "Lifecycle events (opening, closing)" }),
			"\n",
			o(t.li, { children: "Slot support for content customization" }),
			"\n",
			o(t.li, { children: "Adaptive height based on content size" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Action menus for mobile applications" }),
			"\n",
			o(t.li, { children: "Option and selection lists" }),
			"\n",
			o(t.li, { children: "Forms and filters on mobile devices" }),
			"\n",
			o(t.li, { children: "Context menus for touch interfaces" }),
			"\n",
			o(t.li, { children: "Confirmations and notifications" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n\nconst handleAction = (action) => {\nconsole.log('Selected action:', action)\nisOpen.value = false\n}\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Open Actions</button>\n\n<ActionSheet\n  v-model:open=\"isOpen\"\n  :touchClose=\"true\"\n>\n  <template #title>\n    <h3>Choose Action</h3>\n  </template>\n\n  <template #default>\n    <div class=\"action-list\">\n      <button @click=\"handleAction('share')\">Share</button>\n      <button @click=\"handleAction('copy')\">Copy Link</button>\n      <button @click=\"handleAction('download')\">Download</button>\n    </div>\n  </template>\n\n  <template #footer>\n    <button @click=\"isOpen = false\">Cancel</button>\n  </template>\n</ActionSheet>\n</template>\n",
			language: "html"
		})
	] });
}
function ar(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ir, { ...e })
	}) : ir(e);
}
//#endregion
//#region src/media/mdx/ActionSheet/actionSheet.ru.mdx
function or(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания мобильно-оптимизированных панелей действий, выдвигающихся снизу экрана с плавной анимацией." }),
		"\n",
		s(t.p, { children: [
			"ActionSheet представляет собой специализированную обертку над компонентом Window с предустановленным адаптивным режимом ",
			o(t.code, { children: "actionSheet" }),
			". Компонент автоматически позиционируется внизу экрана и выдвигается вверх при открытии, следуя паттернам мобильных интерфейсов iOS и Material Design. Поддерживает жесты свайпа для закрытия, интеграцию с компонентом Bars для заголовка и автоматическое управление фокусом."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Позиционирование внизу экрана с анимацией выдвижения" }),
			"\n",
			o(t.li, { children: "Поддержка touch-жестов для закрытия свайпом вниз" }),
			"\n",
			o(t.li, { children: "Интеграция с Bars для отображения заголовка" }),
			"\n",
			o(t.li, { children: "Автоматическая блокировка фона при открытии" }),
			"\n",
			o(t.li, { children: "Закрытие по клику на overlay или кнопке закрытия" }),
			"\n",
			o(t.li, { children: "События жизненного цикла (открытие, закрытие)" }),
			"\n",
			o(t.li, { children: "Поддержка слотов для кастомизации контента" }),
			"\n",
			o(t.li, { children: "Адаптивная высота под размер контента" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Меню действий для мобильных приложений" }),
			"\n",
			o(t.li, { children: "Списки опций и выборов" }),
			"\n",
			o(t.li, { children: "Формы и фильтры на мобильных устройствах" }),
			"\n",
			o(t.li, { children: "Контекстные меню для touch-интерфейсов" }),
			"\n",
			o(t.li, { children: "Подтверждения и уведомления" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n\nconst handleAction = (action) => {\nconsole.log('Выбрано действие:', action)\nisOpen.value = false\n}\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Открыть действия</button>\n\n<ActionSheet\n  v-model:open=\"isOpen\"\n  :touchClose=\"true\"\n>\n  <template #title>\n    <h3>Выберите действие</h3>\n  </template>\n\n  <template #default>\n    <div class=\"action-list\">\n      <button @click=\"handleAction('share')\">Поделиться</button>\n      <button @click=\"handleAction('copy')\">Копировать ссылку</button>\n      <button @click=\"handleAction('download')\">Скачать</button>\n    </div>\n  </template>\n\n  <template #footer>\n    <button @click=\"isOpen = false\">Отмена</button>\n  </template>\n</ActionSheet>\n</template>\n",
			language: "html"
		})
	] });
}
function sr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(or, { ...e })
	}) : or(e);
}
//#endregion
//#region src/media/mdx/ActionSheet/touchClose.en.mdx
function cr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Touch Close Gesture" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "touchClose" }),
			" property enables closing the ActionSheet with a swipe-down gesture."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — enables closing by swiping down (default)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " — disables gesture closing"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "When enabled, a special tab indicator (drag handle) is displayed in the header area, which users can pull down to close the panel. This follows iOS and Material Design mobile interface patterns, providing intuitive interaction on touch devices." }),
		"\n",
		o(i, {
			code: "\n<!-- With gesture closing enabled -->\n<ActionSheet :touchClose=\"true\" />\n\n<!-- Without gesture closing -->\n<ActionSheet :touchClose=\"false\" />\n",
			language: "html"
		}),
		"\n",
		o(t.p, { children: "The closing gesture is triggered by swiping down in the header area. The component automatically manages touch events and closing animation, ensuring smooth follow-through with the user's finger movement." })
	] });
}
function lr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(cr, { ...e })
	}) : cr(e);
}
//#endregion
//#region src/media/mdx/ActionSheet/touchClose.ru.mdx
function ur(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Закрытие жестом" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "touchClose" }),
			" включает возможность закрытия ActionSheet жестом свайпа вниз."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — включает закрытие свайпом вниз (по умолчанию)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " — отключает закрытие жестом"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "При включенном свойстве в области заголовка отображается специальная tab-полоска (индикатор перетаскивания), за которую пользователь может потянуть вниз для закрытия панели. Это следует паттернам мобильных интерфейсов iOS и Material Design, обеспечивая интуитивное взаимодействие на сенсорных устройствах." }),
		"\n",
		o(i, {
			code: "\n<!-- С возможностью закрытия жестом -->\n<ActionSheet :touchClose=\"true\" />\n\n<!-- Без возможности закрытия жестом -->\n<ActionSheet :touchClose=\"false\" />\n",
			language: "html"
		}),
		"\n",
		o(t.p, { children: "Жест закрытия срабатывает при свайпе вниз в области заголовка. Компонент автоматически управляет touch-событиями и анимацией закрытия, обеспечивая плавное следование за пальцем пользователя." })
	] });
}
function dr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ur, { ...e })
	}) : ur(e);
}
//#endregion
//#region src/media/mdx/ActionSheet/wikiMdxActionSheet.ts
var fr = {
	name: "ActionSheet",
	descriptions: {
		actionSheet: {
			en: ar,
			ru: sr
		},
		touchClose: {
			en: lr,
			ru: dr
		}
	}
};
//#endregion
//#region src/media/mdx/Anchor/anchor.en.mdx
function pr(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating anchor links with smooth scrolling and URL copying capabilities." }),
		"\n",
		o(t.p, { children: "Anchor provides interactive anchor links for navigating through page sections. The component automatically handles clicks, updates the URL address, supports smooth scrolling with customizable offset, and integrates with Tooltip for displaying copy notifications. It can work both in regular navigation mode and in link copying mode to clipboard." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Smooth scrolling to target element with configurable parameters" }),
			"\n",
			o(t.li, { children: "Automatic navigation on page load based on URL hash" }),
			"\n",
			o(t.li, { children: "Copy mode for copying full link to clipboard" }),
			"\n",
			o(t.li, { children: "Tooltip integration for copy notifications" }),
			"\n",
			o(t.li, { children: "Icon support for visual styling" }),
			"\n",
			o(t.li, { children: "Hidden anchors for creating invisible navigation points" }),
			"\n",
			o(t.li, { children: "URL updates via history API without page reload" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Navigation through documentation sections and long pages" }),
			"\n",
			o(t.li, { children: "Anchors for headings with copy link button" }),
			"\n",
			o(t.li, { children: "Table of contents and page navigation menu" }),
			"\n",
			o(t.li, { children: "\"Share link to section\" buttons" }),
			"\n",
			o(t.li, { children: "Creating invisible anchor points for programmatic navigation" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Regular anchor -->\n<Anchor name=\"section-1\" text=\"Go to section\" />\n\n<!-- With copy mode -->\n<Anchor name=\"section-2\" text=\"Copy link\" isCopy />\n\n<!-- Hidden anchor -->\n<Anchor name=\"section-3\" hide />\n</template>\n",
			language: "html"
		})
	] });
}
function mr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(pr, { ...e })
	}) : pr(e);
}
//#endregion
//#region src/media/mdx/Anchor/anchor.ru.mdx
function hr(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания якорных ссылок с плавной прокруткой и возможностью копирования URL." }),
		"\n",
		o(t.p, { children: "Anchor предоставляет интерактивные якорные ссылки для навигации по разделам страницы. Компонент автоматически обрабатывает клики, обновляет URL-адрес, поддерживает плавную прокрутку с настраиваемым отступом и интегрируется с Tooltip для отображения уведомлений при копировании. Может работать как в режиме обычной навигации, так и в режиме копирования ссылки в буфер обмена." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Плавная прокрутка к целевому элементу с настройкой параметров" }),
			"\n",
			o(t.li, { children: "Автоматическая навигация при загрузке страницы по хешу в URL" }),
			"\n",
			o(t.li, { children: "Режим копирования полной ссылки в буфер обмена" }),
			"\n",
			o(t.li, { children: "Интеграция с Tooltip для уведомлений о копировании" }),
			"\n",
			o(t.li, { children: "Поддержка иконок для визуального оформления" }),
			"\n",
			o(t.li, { children: "Скрытые якоря для создания невидимых точек навигации" }),
			"\n",
			o(t.li, { children: "Обновление URL через history API без перезагрузки страницы" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Навигация по разделам документации и длинных страниц" }),
			"\n",
			o(t.li, { children: "Якоря для заголовков с кнопкой копирования ссылки" }),
			"\n",
			o(t.li, { children: "Оглавление и меню навигации по странице" }),
			"\n",
			o(t.li, { children: "Кнопки \"Поделиться ссылкой на раздел\"" }),
			"\n",
			o(t.li, { children: "Создание невидимых якорных точек для программной навигации" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Обычный якорь -->\n<Anchor name=\"section-1\" text=\"Перейти к разделу\" />\n\n<!-- С копированием -->\n<Anchor name=\"section-2\" text=\"Скопировать ссылку\" isCopy />\n\n<!-- Скрытый якорь -->\n<Anchor name=\"section-3\" hide />\n</template>\n",
			language: "html"
		})
	] });
}
function gr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(hr, { ...e })
	}) : hr(e);
}
//#endregion
//#region src/media/mdx/Anchor/expose.go.en.mdx
function _r(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "go(): void" }),
			" — Method for scrolling the page to the current anchor element. Uses scroll settings (",
			o(t.code, { children: "behavior" }),
			", ",
			o(t.code, { children: "block" }),
			", ",
			o(t.code, { children: "inline" }),
			", ",
			o(t.code, { children: "shift" }),
			") and updates the page URL."
		] }),
		"\n"
	] });
}
function vr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_r, { ...e })
	}) : _r(e);
}
//#endregion
//#region src/media/mdx/Anchor/expose.go.ru.mdx
function yr(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "go(): void" }),
			" — Метод для прокрутки страницы к текущему элементу якоря. Использует настройки прокрутки (",
			o(t.code, { children: "behavior" }),
			", ",
			o(t.code, { children: "block" }),
			", ",
			o(t.code, { children: "inline" }),
			", ",
			o(t.code, { children: "shift" }),
			") и обновляет URL страницы."
		] }),
		"\n"
	] });
}
function br(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(yr, { ...e })
	}) : yr(e);
}
//#endregion
//#region src/media/mdx/Anchor/hide.en.mdx
function xr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Hidden anchors" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "hide" }),
			" property creates an invisible anchor point for programmatic navigation without visual representation."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "hide" }),
				" — hides the visual representation of the component (default ",
				o(t.code, { children: "false" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "name" }), " — anchor name for navigation (required property)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"When ",
			o(t.code, { children: "hide" }),
			" is enabled, the component renders as a hidden ",
			o(t.code, { children: "<a name=\"...\">" }),
			" element without text, icons, or styling. This is useful for creating invisible navigation points that can be programmatically scrolled to or used as target elements for other anchors. The hidden anchor remains in the DOM and is accessible for navigation via URL hash or scroll methods."
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Hidden anchor in section -->\n<section>\n  <Anchor name=\"section-start\" hide />\n  <h2>Section heading</h2>\n</section>\n\n<!-- Combination of hidden and visible -->\n<h3>\n  <Anchor name=\"heading\" hide />\n  Heading\n  <Anchor name=\"heading\" isCopy iconTag=\"link\" />\n</h3>\n</template>\n",
			language: "html"
		})
	] });
}
function Sr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(xr, { ...e })
	}) : xr(e);
}
//#endregion
//#region src/media/mdx/Anchor/hide.ru.mdx
function Cr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Скрытые якоря" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "hide" }),
			" создаёт невидимую якорную точку для программной навигации без визуального представления."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "hide" }),
				" — скрывает визуальное представление компонента (по умолчанию ",
				o(t.code, { children: "false" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "name" }), " — имя якоря для навигации (обязательное свойство)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"При включённом ",
			o(t.code, { children: "hide" }),
			" компонент рендерится как скрытый элемент ",
			o(t.code, { children: "<a name=\"...\">" }),
			" без текста, иконок и стилей оформления. Это полезно для создания невидимых точек навигации, к которым можно программно прокручивать страницу или использовать их как целевые элементы для других якорей. Скрытый якорь остаётся в DOM и доступен для навигации через URL хеш или методы прокрутки."
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Скрытый якорь в секции -->\n<section>\n  <Anchor name=\"section-start\" hide />\n  <h2>Заголовок раздела</h2>\n</section>\n\n<!-- Комбинация скрытого и видимого -->\n<h3>\n  <Anchor name=\"heading\" hide />\n  Заголовок\n  <Anchor name=\"heading\" isCopy iconTag=\"link\" />\n</h3>\n</template>\n",
			language: "html"
		})
	] });
}
function wr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Cr, { ...e })
	}) : Cr(e);
}
//#endregion
//#region src/media/mdx/Anchor/isCopy.en.mdx
function Tr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Copy link" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "isCopy" }),
			" property switches the component to anchor link copying mode to clipboard."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isCopy" }),
				" — enables link copying mode (default ",
				o(t.code, { children: "false" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconTag" }), " — icon displayed in copy mode"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconContentCopy" }), " — icon shown after successful copy"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "delayHide" }),
				" — delay before hiding notification in milliseconds (default ",
				o(t.code, { children: "3072" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"When ",
			o(t.code, { children: "isCopy" }),
			" is enabled, clicking the component doesn't scroll to the anchor but copies the full link (including origin and pathname) to clipboard. After copying, a Tooltip with notification automatically opens and closes after the time specified in ",
			o(t.code, { children: "delayHide" }),
			". The icon changes from ",
			o(t.code, { children: "iconTag" }),
			" to ",
			o(t.code, { children: "iconContentCopy" }),
			" for visual confirmation of the action."
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Basic mode -->\n<Anchor name=\"section\" text=\"Copy link\" isCopy />\n\n<!-- With custom icons -->\n<Anchor name=\"heading\" isCopy iconTag=\"share\" iconContentCopy=\"check\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Er(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Tr, { ...e })
	}) : Tr(e);
}
//#endregion
//#region src/media/mdx/Anchor/isCopy.ru.mdx
function Dr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Копирование ссылки" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "isCopy" }),
			" переключает компонент в режим копирования ссылки на якорь в буфер обмена."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isCopy" }),
				" — включает режим копирования ссылки (по умолчанию ",
				o(t.code, { children: "false" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconTag" }), " — иконка, отображаемая в режиме копирования"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconContentCopy" }), " — иконка, показываемая после успешного копирования"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "delayHide" }),
				" — задержка перед скрытием уведомления в миллисекундах (по умолчанию ",
				o(t.code, { children: "3072" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"При включённом ",
			o(t.code, { children: "isCopy" }),
			" клик по компоненту не выполняет прокрутку к якорю, а копирует полную ссылку (включая origin и pathname) в буфер обмена. После копирования автоматически открывается Tooltip с уведомлением, который закрывается через время, указанное в ",
			o(t.code, { children: "delayHide" }),
			". Иконка меняется с ",
			o(t.code, { children: "iconTag" }),
			" на ",
			o(t.code, { children: "iconContentCopy" }),
			" для визуального подтверждения действия."
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Базовый режим -->\n<Anchor name=\"section\" text=\"Скопировать ссылку\" isCopy />\n\n<!-- С кастомными иконками -->\n<Anchor name=\"heading\" isCopy iconTag=\"share\" iconContentCopy=\"check\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Or(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Dr, { ...e })
	}) : Dr(e);
}
//#endregion
//#region src/media/mdx/Anchor/scroll.en.mdx
function kr(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Scroll Settings" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "behavior" }),
			", ",
			o(t.code, { children: "block" }),
			", ",
			o(t.code, { children: "inline" }),
			", and ",
			o(t.code, { children: "shift" }),
			" properties control the scrolling behavior to the element when navigating via an anchor."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "behavior" }),
				" — defines the scroll transition animation (",
				o(t.code, { children: "auto" }),
				", ",
				o(t.code, { children: "smooth" }),
				", ",
				o(t.code, { children: "instant" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "block" }),
				" — vertical alignment of the element (",
				o(t.code, { children: "start" }),
				", ",
				o(t.code, { children: "center" }),
				", ",
				o(t.code, { children: "end" }),
				", ",
				o(t.code, { children: "nearest" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "inline" }),
				" — horizontal alignment of the element (",
				o(t.code, { children: "start" }),
				", ",
				o(t.code, { children: "center" }),
				", ",
				o(t.code, { children: "end" }),
				", ",
				o(t.code, { children: "nearest" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "shift" }), " — scroll offset from the top edge (in pixels)"] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				o(t.strong, { children: "Note:" }),
				" If the ",
				o(t.code, { children: "shift" }),
				" property is set, the component uses ",
				o(t.code, { children: "window.scrollTo" }),
				" instead of ",
				o(t.code, { children: "element.scrollIntoView" }),
				". In this case, the ",
				o(t.code, { children: "block" }),
				" and ",
				o(t.code, { children: "inline" }),
				" properties are ignored, and scrolling is always aligned to the top edge of the element with the specified offset."
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "These properties allow you to customize exactly how the page scrolls to the target element. For example, you can enable smooth scrolling or change the positioning of the element on the screen after scrolling." }),
		"\n",
		o(i, {
			code: "\n<template>\n<Anchor\n  href=\"#target\"\n  behavior=\"smooth\"\n  block=\"center\"\n  inline=\"nearest\"\n>\n  Go to element\n</Anchor>\n\n<Anchor\n  href=\"#target\"\n  :shift=\"100\"\n>\n  Go with offset\n</Anchor>\n</template>\n",
			language: "html"
		})
	] });
}
function Ar(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(kr, { ...e })
	}) : kr(e);
}
//#endregion
//#region src/media/mdx/Anchor/scroll.ru.mdx
function jr(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Настройка прокрутки" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "behavior" }),
			", ",
			o(t.code, { children: "block" }),
			", ",
			o(t.code, { children: "inline" }),
			" и ",
			o(t.code, { children: "shift" }),
			" управляют поведением прокрутки к элементу при переходе по якорю."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "behavior" }),
				" — определяет анимацию прокрутки (",
				o(t.code, { children: "auto" }),
				", ",
				o(t.code, { children: "smooth" }),
				", ",
				o(t.code, { children: "instant" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "block" }),
				" — вертикальное выравнивание элемента (",
				o(t.code, { children: "start" }),
				", ",
				o(t.code, { children: "center" }),
				", ",
				o(t.code, { children: "end" }),
				", ",
				o(t.code, { children: "nearest" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "inline" }),
				" — горизонтальное выравнивание элемента (",
				o(t.code, { children: "start" }),
				", ",
				o(t.code, { children: "center" }),
				", ",
				o(t.code, { children: "end" }),
				", ",
				o(t.code, { children: "nearest" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "shift" }), " — смещение прокрутки от верхнего края (в пикселях)"] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				o(t.strong, { children: "Примечание:" }),
				" Если задано свойство ",
				o(t.code, { children: "shift" }),
				", компонент использует ",
				o(t.code, { children: "window.scrollTo" }),
				" вместо ",
				o(t.code, { children: "element.scrollIntoView" }),
				". В этом случае свойства ",
				o(t.code, { children: "block" }),
				" и ",
				o(t.code, { children: "inline" }),
				" игнорируются, и прокрутка всегда выполняется к верхней границе элемента с учетом указанного смещения."
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Эти свойства позволяют настроить, как именно страница будет прокручиваться к целевому элементу. Например, можно сделать плавную прокрутку или изменить позиционирование элемента на экране после прокрутки." }),
		"\n",
		o(i, {
			code: "\n<template>\n<Anchor\n  href=\"#target\"\n  behavior=\"smooth\"\n  block=\"center\"\n  inline=\"nearest\"\n>\n  Перейти к элементу\n</Anchor>\n\n<Anchor\n  href=\"#target\"\n  :shift=\"100\"\n>\n  Перейти со смещением\n</Anchor>\n</template>\n",
			language: "html"
		})
	] });
}
function Mr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(jr, { ...e })
	}) : jr(e);
}
//#endregion
//#region src/media/mdx/Anchor/wikiMdxAnchor.ts
var Nr = {
	name: "Anchor",
	descriptions: {
		anchor: {
			en: mr,
			ru: gr
		},
		"expose.go": {
			en: vr,
			ru: br
		},
		hide: {
			en: Sr,
			ru: wr
		},
		isCopy: {
			en: Er,
			ru: Or
		},
		scroll: {
			en: Ar,
			ru: Mr
		}
	}
};
//#endregion
//#region src/media/mdx/Arrow/arrow.en.mdx
function Pr(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for displaying a graphical indicator (arrow) used to visually link floating elements to their target." }),
		"\n",
		o(t.p, { children: "Arrow provides automatic or manual positioning of the indicator. It is often used within Tooltip, Popover, and Dropdown components to indicate the direction towards the trigger or target element. The component supports adaptation to various sizes and styles, and can dynamically update its position." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic and manual positioning (top, bottom, left, right)" }),
			"\n",
			o(t.li, { children: "Support for inverted style" }),
			"\n",
			o(t.li, { children: "Binding to a target element (elementTarget)" }),
			"\n",
			o(t.li, { children: "Dynamic position updates" }),
			"\n",
			o(t.li, { children: "Customizable SVG arrow graphics" }),
			"\n",
			o(t.li, { children: "Integration with positioning components" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Indicators in tooltips" }),
			"\n",
			o(t.li, { children: "Arrows in dropdown menus and popovers" }),
			"\n",
			o(t.li, { children: "Visual links in tour guides" }),
			"\n",
			o(t.li, { children: "Directional indicators in the interface" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { Arrow } from 'dxt-ui'\n<\/script>\n\n<template>\n<div class=\"relative p-4 border rounded\">\n  Content with arrow\n  <Arrow position=\"top\" />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Fr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pr, { ...e })
	}) : Pr(e);
}
//#endregion
//#region src/media/mdx/Arrow/arrow.ru.mdx
function Ir(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для отображения графического указателя (стрелки), используемого для визуальной связи всплывающих элементов с их целью." }),
		"\n",
		o(t.p, { children: "Arrow обеспечивает автоматическое или ручное позиционирование указателя. Часто применяется в составе компонентов Tooltip, Popover и Dropdown для указания направления на триггер или целевой элемент. Компонент поддерживает адаптацию под различные размеры и стили, а также может динамически обновлять свое положение." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическое и ручное позиционирование (top, bottom, left, right)" }),
			"\n",
			o(t.li, { children: "Поддержка инвертированного стиля" }),
			"\n",
			o(t.li, { children: "Привязка к целевому элементу (elementTarget)" }),
			"\n",
			o(t.li, { children: "Динамическое обновление положения" }),
			"\n",
			o(t.li, { children: "Настраиваемая SVG-графика стрелки" }),
			"\n",
			o(t.li, { children: "Интеграция с компонентами позиционирования" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Указатели во всплывающих подсказках" }),
			"\n",
			o(t.li, { children: "Стрелки в выпадающих меню и поповерах" }),
			"\n",
			o(t.li, { children: "Визуальные связи в пошаговых руководствах" }),
			"\n",
			o(t.li, { children: "Индикаторы направления в интерфейсе" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { Arrow } from 'dxt-ui'\n<\/script>\n\n<template>\n<div class=\"relative p-4 border rounded\">\n  Контент с указателем\n  <Arrow position=\"top\" />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Lr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ir, { ...e })
	}) : Ir(e);
}
//#endregion
//#region src/media/mdx/Arrow/wikiMdxArrow.ts
var Rr = {
	name: "Arrow",
	descriptions: { arrow: {
		en: Fr,
		ru: Lr
	} }
};
//#endregion
//#region src/media/mdx/Badge/badge.en.mdx
function zr(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "Compact visual indicator for displaying status, notification counts, or markers on interface elements with support for various display modes and automatic overflow management." }),
		"\n",
		o(t.p, { children: "Badge provides a universal solution for creating informative indicators with flexible content configuration, positioning, and appearance. The component supports displaying text, numbers with maximum value limits, icons, and dot indicators, automatically hides when content is absent, and integrates with the slot system for customization." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Multiple display modes (text, numbers, icons, dot indicator)" }),
			"\n",
			o(t.li, { children: "Automatic overflow management with maximum value configuration" }),
			"\n",
			o(t.li, { children: "Flexible positioning relative to parent elements (overlap, vertical, horizontal)" }),
			"\n",
			o(t.li, { children: "Automatic hiding when content is absent (dot, icon, label)" }),
			"\n",
			o(t.li, { children: "Integration with LabelNumberInclude for numeric value processing" }),
			"\n",
			o(t.li, { children: "Icon support through IconInclude" }),
			"\n",
			o(t.li, { children: "Color variants for different status types" }),
			"\n",
			o(t.li, { children: "Visibility control via hide property" }),
			"\n",
			o(t.li, { children: "Customization through slots for complete content control" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Unread notification count indicators" }),
			"\n",
			o(t.li, { children: "Status markers on user avatars (online/offline)" }),
			"\n",
			o(t.li, { children: "Item counters in shopping carts or lists" }),
			"\n",
			o(t.li, { children: "New message indicators in chats" }),
			"\n",
			o(t.li, { children: "Status markers on product cards" }),
			"\n",
			o(t.li, { children: "Visual hints about available updates" }),
			"\n",
			o(t.li, { children: "Numeric indicators on tabs and menu items" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst cartCount = ref(5)\nconst unreadMessages = ref(127)\nconst isOnline = ref(true)\n\nconst addToCart = () => {\ncartCount.value++\n}\n<\/script>\n\n<template>\n<div class=\"badge-examples\">\n  <!-- Basic badge with number -->\n  <div style=\"position: relative; display: inline-block;\">\n    <IconButton icon=\"shopping_cart\" @click=\"addToCart\"/>\n    <Badge :label=\"cartCount\"/>\n  </div>\n\n  <!-- Badge with maximum value limit -->\n  <div style=\"position: relative; display: inline-block;\">\n    <IconButton icon=\"notifications\"/>\n    <Badge :label=\"unreadMessages\" :label-max=\"99\"/>\n  </div>\n\n  <!-- Dot status indicator -->\n  <div style=\"position: relative; display: inline-block;\">\n    <Avatar src=\"/user-avatar.jpg\"/>\n    <Badge\n      dot\n      :selected=\"isOnline\"\n      overlap=\"circular\"\n    />\n  </div>\n\n  <!-- Badge with icon and text -->\n  <div style=\"position: relative; display: inline-block;\">\n    <Button>Profile</Button>\n    <Badge\n      icon=\"verified\"\n      label=\"Pro\"\n      overlap=\"static\"\n    />\n  </div>\n\n  <!-- Badge with custom positioning -->\n  <div style=\"position: relative; display: inline-block;\">\n    <Card>Content</Card>\n    <Badge\n      label=\"New\"\n      vertical=\"bottom\"\n      horizontal=\"left\"\n    />\n  </div>\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Badge is designed as a universal UI component for creating compact visual indicators with comprehensive support for various content types, automatic display management, and flexible positioning settings." }),
			"\n"
		] })
	] });
}
function Br(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(zr, { ...e })
	}) : zr(e);
}
//#endregion
//#region src/media/mdx/Badge/badge.ru.mdx
function Vr(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Компактный визуальный индикатор для отображения статуса, количества уведомлений или маркеров на элементах интерфейса с поддержкой различных режимов отображения и автоматическим управлением переполнением." }),
		"\n",
		o(t.p, { children: "Badge предоставляет универсальное решение для создания информативных индикаторов с гибкой настройкой содержимого, позиционирования и внешнего вида. Компонент поддерживает отображение текста, чисел с ограничением максимального значения, иконок и точечных индикаторов, автоматически скрывается при отсутствии контента и интегрируется с системой слотов для кастомизации." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Множественные режимы отображения (текст, числа, иконки, точечный индикатор)" }),
			"\n",
			o(t.li, { children: "Автоматическое управление переполнением с настройкой максимального значения" }),
			"\n",
			o(t.li, { children: "Гибкое позиционирование относительно родительских элементов (overlap, vertical, horizontal)" }),
			"\n",
			o(t.li, { children: "Автоматическое скрытие при отсутствии контента (dot, icon, label)" }),
			"\n",
			o(t.li, { children: "Интеграция с LabelNumberInclude для обработки числовых значений" }),
			"\n",
			o(t.li, { children: "Поддержка иконок через IconInclude" }),
			"\n",
			o(t.li, { children: "Цветовые варианты для различных типов статуса" }),
			"\n",
			o(t.li, { children: "Управление видимостью через свойство hide" }),
			"\n",
			o(t.li, { children: "Кастомизация через слоты для полного контроля над содержимым" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Индикаторы количества непрочитанных уведомлений" }),
			"\n",
			o(t.li, { children: "Маркеры статуса на аватарах пользователей (онлайн/оффлайн)" }),
			"\n",
			o(t.li, { children: "Счетчики элементов в корзине или списках" }),
			"\n",
			o(t.li, { children: "Индикаторы новых сообщений в чатах" }),
			"\n",
			o(t.li, { children: "Статусные маркеры на карточках товаров" }),
			"\n",
			o(t.li, { children: "Визуальные подсказки о наличии обновлений" }),
			"\n",
			o(t.li, { children: "Числовые индикаторы на вкладках и пунктах меню" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst cartCount = ref(5)\nconst unreadMessages = ref(127)\nconst isOnline = ref(true)\n\nconst addToCart = () => {\ncartCount.value++\n}\n<\/script>\n\n<template>\n<div class=\"badge-examples\">\n  <!-- Базовый бейдж с числом -->\n  <div style=\"position: relative; display: inline-block;\">\n    <IconButton icon=\"shopping_cart\" @click=\"addToCart\"/>\n    <Badge :label=\"cartCount\"/>\n  </div>\n\n  <!-- Бейдж с ограничением максимального значения -->\n  <div style=\"position: relative; display: inline-block;\">\n    <IconButton icon=\"notifications\"/>\n    <Badge :label=\"unreadMessages\" :label-max=\"99\"/>\n  </div>\n\n  <!-- Точечный индикатор статуса -->\n  <div style=\"position: relative; display: inline-block;\">\n    <Avatar src=\"/user-avatar.jpg\"/>\n    <Badge\n      dot\n      :selected=\"isOnline\"\n      overlap=\"circular\"\n    />\n  </div>\n\n  <!-- Бейдж с иконкой и текстом -->\n  <div style=\"position: relative; display: inline-block;\">\n    <Button>Профиль</Button>\n    <Badge\n      icon=\"verified\"\n      label=\"Pro\"\n      overlap=\"static\"\n    />\n  </div>\n\n  <!-- Бейдж с кастомным позиционированием -->\n  <div style=\"position: relative; display: inline-block;\">\n    <Card>Контент</Card>\n    <Badge\n      label=\"Новое\"\n      vertical=\"bottom\"\n      horizontal=\"left\"\n    />\n  </div>\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Badge разработан как универсальный UI-компонент для создания компактных визуальных индикаторов с комплексной поддержкой различных типов контента, автоматическим управлением отображением и гибкими настройками позиционирования." }),
			"\n"
		] })
	] });
}
function Hr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Vr, { ...e })
	}) : Vr(e);
}
//#endregion
//#region src/media/mdx/Badge/dot.en.mdx
function Ur(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Dot indicator" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "dot" }),
			" property transforms Badge into a compact circular indicator without text content, used for simple visual status notifications."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — displays Badge as a dot indicator"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " — displays Badge in standard mode with content (default)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Creates a minimalist visual marker for indicating states, activity, or notifications without displaying specific values. Ideal for user presence indicators (online/offline), unread notification markers, and status dots on interface elements. When the ",
			o(t.code, { children: "dot" }),
			" property is activated, any text content or numeric values are ignored, displaying only the color indicator."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Standard Badge with content -->\n<Badge label=\"5\" />\n\n<!-- Dot indicator -->\n<Badge dot />\n\n<!-- Dot indicator for online status -->\n<Badge dot :selected=\"isOnline\" overlap=\"circular\" />\n",
			language: "html"
		})
	] });
}
function Wr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ur, { ...e })
	}) : Ur(e);
}
//#endregion
//#region src/media/mdx/Badge/dot.ru.mdx
function Gr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Точечный индикатор" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "dot" }),
			" преобразует Badge в компактный круглый индикатор без текстового содержимого, используемый для простых визуальных уведомлений о статусе."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — отображает Badge как точечный индикатор"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " — отображает Badge в стандартном режиме с контентом (по умолчанию)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Создает минималистичный визуальный маркер для индикации состояний, активности или уведомлений без отображения конкретных значений. Идеально подходит для индикаторов присутствия пользователей (онлайн/оффлайн), маркеров непрочитанных уведомлений и статусных точек на элементах интерфейса. При активации свойства ",
			o(t.code, { children: "dot" }),
			" любое текстовое содержимое или числовые значения игнорируются, отображается только цветовой индикатор."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Стандартный Badge с контентом -->\n<Badge label=\"5\" />\n\n<!-- Точечный индикатор -->\n<Badge dot />\n\n<!-- Точечный индикатор статуса онлайн -->\n<Badge dot :selected=\"isOnline\" overlap=\"circular\" />\n",
			language: "html"
		})
	] });
}
function Kr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Gr, { ...e })
	}) : Gr(e);
}
//#endregion
//#region src/media/mdx/Badge/outline.en.mdx
function qr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Outline badges (outline)" }),
		"\n",
		s(t.p, { children: [
			"The Badge component supports outline mode via the ",
			o(t.code, { children: "outline" }),
			" property. In this mode, badges have a minimalist visual style with transparent background and colored border:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Minimalist design" }), " - suitable for interfaces requiring reduced visual load"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Transparent background" }), " - maintains clean appearance when displaying secondary information"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Subtle presence" }), " - less visually prominent than filled variants"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Flexible adaptation" }), " - works well with various background colors and themes"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Outline mode is especially useful for creating secondary indicators, informational labels, and status markers that should be noticeable but not dominant in the interface's visual hierarchy." }),
		"\n",
		o(i, {
			code: "\n<Badge outline overlap=\"static\">99+</Badge>\n<Badge outline overlap=\"static\" icon=\"info\">Info</Badge>\n<Badge outline dot overlap=\"static\"/>\n",
			language: "html"
		})
	] });
}
function Jr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(qr, { ...e })
	}) : qr(e);
}
//#endregion
//#region src/media/mdx/Badge/outline.ru.mdx
function Yr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Контурные бейджи (outline)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Badge поддерживает контурный режим через свойство ",
			o(t.code, { children: "outline" }),
			". В этом режиме бейджи имеют минималистичный визуальный стиль с прозрачным фоном и цветной границей:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Минималистичный дизайн" }), " - подходит для интерфейсов, требующих сниженной визуальной нагрузки"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Прозрачный фон" }), " - поддерживает чистый внешний вид при отображении второстепенной информации"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Тонкое присутствие" }), " - менее визуально заметный, чем заполненные варианты"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Гибкая адаптация" }), " - хорошо работает с различными цветами фона и темами"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Outline режим особенно полезен для создания второстепенных индикаторов, информационных меток и статусных маркеров, которые должны быть заметными, но не доминирующими в визуальной иерархии интерфейса." }),
		"\n",
		o(i, {
			code: "\n<Badge outline overlap=\"static\">99+</Badge>\n<Badge outline overlap=\"static\" icon=\"info\">Инфо</Badge>\n<Badge outline dot overlap=\"static\"/>\n",
			language: "html"
		})
	] });
}
function Xr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Yr, { ...e })
	}) : Yr(e);
}
//#endregion
//#region src/media/mdx/Badge/primary.en.mdx
function Zr(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Primary badges (primary)" }),
		"\n",
		s(t.p, { children: [
			"The Badge component supports primary mode via the ",
			o(t.code, { children: "primary" }),
			" property. In this mode, badges have the most prominent visual style with bright brand colors:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "High contrast" }), " - uses primary brand colors for maximum visibility"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Bold appearance" }), " - draws attention to important information"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Enhanced visibility" }), " - designed to stand out against various backgrounds"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Accessibility support" }), " - strong contrast ratios for readability"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Primary mode is especially useful for creating critical notification indicators, active statuses, and high-priority markers that require immediate user attention in the interface." }),
		"\n",
		o(i, {
			code: "\n<Badge primary overlap=\"static\">5</Badge>\n<Badge primary overlap=\"static\" icon=\"warning\">Important</Badge>\n<Badge primary dot overlap=\"static\"/>\n",
			language: "html"
		})
	] });
}
function Qr(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zr, { ...e })
	}) : Zr(e);
}
//#endregion
//#region src/media/mdx/Badge/primary.ru.mdx
function $r(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Основные бейджи (primary)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Badge поддерживает основной режим через свойство ",
			o(t.code, { children: "primary" }),
			". В этом режиме бейджи имеют наиболее заметный визуальный стиль с яркими цветами бренда:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Высокий контраст" }), " - использует основные цвета бренда для максимальной видимости"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Яркий внешний вид" }), " - привлекает внимание к важной информации"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Повышенная видимость" }), " - разработан для выделения на различных фонах"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Поддержка доступности" }), " - сильные контрастные соотношения для читаемости"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Primary режим особенно полезен для создания критических индикаторов уведомлений, активных статусов и высокоприоритетных маркеров, которые требуют немедленного внимания пользователя в интерфейсе." }),
		"\n",
		o(i, {
			code: "\n<Badge primary overlap=\"static\">5</Badge>\n<Badge primary overlap=\"static\" icon=\"warning\">Важно</Badge>\n<Badge primary dot overlap=\"static\"/>\n",
			language: "html"
		})
	] });
}
function ei(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($r, { ...e })
	}) : $r(e);
}
//#endregion
//#region src/media/mdx/Badge/secondary.en.mdx
function ti(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Secondary badges (secondary)" }),
		"\n",
		s(t.p, { children: [
			"The Badge component supports secondary mode via the ",
			o(t.code, { children: "secondary" }),
			" property. In this mode, badges have a balanced visual style between primary and outline variants:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Moderate contrast" }), " - balanced color treatment for noticeability without overwhelming"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Softer appearance" }), " - less intense than primary while maintaining clear visibility"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Versatile styling" }), " - works well in various interface contexts"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Content harmony" }), " - complements primary elements without visual competition"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Secondary mode is especially useful for creating supporting information indicators, status updates, and categorical labels that are important but don't require critical attention in the visual hierarchy." }),
		"\n",
		o(i, {
			code: "\n<Badge secondary overlap=\"static\">12</Badge>\n<Badge secondary overlap=\"static\" icon=\"info\">Updated</Badge>\n<Badge secondary dot overlap=\"static\"/>\n",
			language: "html"
		})
	] });
}
function ni(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ti, { ...e })
	}) : ti(e);
}
//#endregion
//#region src/media/mdx/Badge/secondary.ru.mdx
function ri(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Второстепенные бейджи (secondary)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Badge поддерживает второстепенный режим через свойство ",
			o(t.code, { children: "secondary" }),
			". В этом режиме бейджи имеют сбалансированный визуальный стиль между primary и outline вариантами:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Умеренный контраст" }), " - сбалансированная цветовая обработка для заметности без подавления"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Более мягкий внешний вид" }), " - менее интенсивный, чем primary, сохраняя четкую видимость"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Универсальная стилизация" }), " - хорошо работает в различных контекстах интерфейса"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Гармония контента" }), " - дополняет основные элементы без визуальной конкуренции"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Secondary режим особенно полезен для создания поддерживающих индикаторов информации, статусных обновлений и категориальных меток, которые важны, но не требуют критического внимания в визуальной иерархии." }),
		"\n",
		o(i, {
			code: "\n<Badge secondary overlap=\"static\">12</Badge>\n<Badge secondary overlap=\"static\" icon=\"info\">Обновлено</Badge>\n<Badge secondary dot overlap=\"static\"/>\n",
			language: "html"
		})
	] });
}
function ii(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ri, { ...e })
	}) : ri(e);
}
//#endregion
//#region src/media/mdx/Badge/wikiMdxBadge.ts
var ai = {
	name: "Badge",
	descriptions: {
		badge: {
			en: Br,
			ru: Hr
		},
		dot: {
			en: Wr,
			ru: Kr
		},
		outline: {
			en: Jr,
			ru: Xr
		},
		primary: {
			en: Qr,
			ru: ei
		},
		secondary: {
			en: ni,
			ru: ii
		}
	}
};
//#endregion
//#region src/media/mdx/Bars/bars.en.mdx
function oi(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "Versatile bar component for application headers, toolbars, and contextual action bars with support for navigation, action buttons, and bulk operation modes." }),
		"\n",
		o(t.p, { children: "Bars provides a comprehensive solution for creating consistent top-level interface elements with structured layout for titles, descriptions, back navigation, and interactive button sets. The component integrates action mode switching for contextual operations, unified button configuration, and skeleton loading states for creating modern application headers and toolbars." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Structured text hierarchy (label and description with dynamic updates)" }),
			"\n",
			o(t.li, { children: "Configurable back button with navigation and close icon switching" }),
			"\n",
			o(t.li, { children: "Flexible button arrays (bars) for primary actions on the right side" }),
			"\n",
			o(t.li, { children: "Action mode with separate content and button set for bulk operations" }),
			"\n",
			o(t.li, { children: "Two-way binding (v-model:action) for state synchronization" }),
			"\n",
			o(t.li, { children: "Unified button attributes (buttonAttrs) for consistent styling" }),
			"\n",
			o(t.li, { children: "Event handling for click interactions and navigation" }),
			"\n",
			o(t.li, { children: "Skeleton system integration for loading states" }),
			"\n",
			o(t.li, { children: "Icon customization for back and close buttons" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Application screen headers with navigation and actions" }),
			"\n",
			o(t.li, { children: "Toolbar panels for sections and pages" }),
			"\n",
			o(t.li, { children: "Contextual action bars for selected item operations" }),
			"\n",
			o(t.li, { children: "Search headers with filter and sort controls" }),
			"\n",
			o(t.li, { children: "Settings screens with back navigation" }),
			"\n",
			o(t.li, { children: "List headers with bulk action support" }),
			"\n",
			o(t.li, { children: "Multi-selection interfaces with action mode" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst actionMode = ref(false)\nconst selectedCount = ref(0)\n\nconst handleSearch = () => {\nconsole.log('Search clicked')\n}\n\nconst handleFilter = () => {\nconsole.log('Filter clicked')\n}\n\nconst handleDelete = () => {\nconsole.log('Delete selected items')\nactionMode.value = false\nselectedCount.value = 0\n}\n<\/script>\n\n<template>\n<div class=\"app-layout\">\n  <!-- Standard header with navigation and actions -->\n  <Bars\n    label=\"Messages\"\n    description=\"Your conversations\"\n    icon-back=\"arrow_back\"\n    :bars=\"[\n      { icon: 'search', onClick: handleSearch },\n      { icon: 'filter_list', onClick: handleFilter },\n      { icon: 'more_vert' }\n    ]\"\n  />\n\n  <!-- Header with action mode for bulk operations -->\n  <Bars\n    v-model:action=\"actionMode\"\n    label=\"Contacts\"\n    description=\"Manage your contacts\"\n    :action-label=\"`${selectedCount} selected`\"\n    action-description=\"Choose an action\"\n    icon-back=\"arrow_back\"\n    icon-close=\"close\"\n    :bars=\"[\n      { icon: 'add' },\n      { icon: 'search' }\n    ]\"\n    :action-bars=\"[\n      { icon: 'share' },\n      { icon: 'delete', onClick: handleDelete }\n    ]\"\n  />\n\n  <!-- Toolbar with custom button attributes -->\n  <Bars\n    label=\"Settings\"\n    :button-attrs=\"{ secondary: true }\"\n    :bars=\"[\n      { icon: 'sync', label: 'Sync' },\n      { icon: 'info', label: 'Info' }\n    ]\"\n  />\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Bars is designed as a top-level UI component for creating consistent application headers, toolbars, and contextual action interfaces with comprehensive navigation, action management, and bulk operation support." }),
			"\n"
		] })
	] });
}
function si(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(oi, { ...e })
	}) : oi(e);
}
//#endregion
//#region src/media/mdx/Bars/bars.ru.mdx
function ci(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Универсальный компонент панели для заголовков приложений, панелей инструментов и контекстных панелей действий с поддержкой навигации, кнопок действий и режимов массовых операций." }),
		"\n",
		o(t.p, { children: "Bars предоставляет комплексное решение для создания согласованных элементов интерфейса верхнего уровня со структурированным макетом для заголовков, описаний, обратной навигации и интерактивных наборов кнопок. Компонент интегрирует переключение режима действий для контекстных операций, единую конфигурацию кнопок и состояния загрузки скелетонов для создания современных заголовков приложений и панелей инструментов." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Структурированная текстовая иерархия (метка и описание с динамическим обновлением)" }),
			"\n",
			o(t.li, { children: "Настраиваемая кнопка назад с навигацией и переключением иконки закрытия" }),
			"\n",
			o(t.li, { children: "Гибкие массивы кнопок (bars) для основных действий справа" }),
			"\n",
			o(t.li, { children: "Режим действий с отдельным контентом и набором кнопок для массовых операций" }),
			"\n",
			o(t.li, { children: "Двусторонняя привязка (v-model:action) для синхронизации состояния" }),
			"\n",
			o(t.li, { children: "Единые атрибуты кнопок (buttonAttrs) для согласованной стилизации" }),
			"\n",
			o(t.li, { children: "Обработка событий для взаимодействий кликов и навигации" }),
			"\n",
			o(t.li, { children: "Интеграция системы скелетонов для состояний загрузки" }),
			"\n",
			o(t.li, { children: "Кастомизация иконок для кнопок назад и закрытия" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Заголовки экранов приложения с навигацией и действиями" }),
			"\n",
			o(t.li, { children: "Панели инструментов для разделов и страниц" }),
			"\n",
			o(t.li, { children: "Контекстные панели действий для операций с выбранными элементами" }),
			"\n",
			o(t.li, { children: "Заголовки поиска с элементами управления фильтрами и сортировкой" }),
			"\n",
			o(t.li, { children: "Экраны настроек с обратной навигацией" }),
			"\n",
			o(t.li, { children: "Заголовки списков с поддержкой массовых действий" }),
			"\n",
			o(t.li, { children: "Интерфейсы множественного выбора с режимом действий" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst actionMode = ref(false)\nconst selectedCount = ref(0)\n\nconst handleSearch = () => {\nconsole.log('Нажат поиск')\n}\n\nconst handleFilter = () => {\nconsole.log('Нажат фильтр')\n}\n\nconst handleDelete = () => {\nconsole.log('Удалить выбранные элементы')\nactionMode.value = false\nselectedCount.value = 0\n}\n<\/script>\n\n<template>\n<div class=\"app-layout\">\n  <!-- Стандартный заголовок с навигацией и действиями -->\n  <Bars\n    label=\"Сообщения\"\n    description=\"Ваши беседы\"\n    icon-back=\"arrow_back\"\n    :bars=\"[\n      { icon: 'search', onClick: handleSearch },\n      { icon: 'filter_list', onClick: handleFilter },\n      { icon: 'more_vert' }\n    ]\"\n  />\n\n  <!-- Заголовок с режимом действий для массовых операций -->\n  <Bars\n    v-model:action=\"actionMode\"\n    label=\"Контакты\"\n    description=\"Управление контактами\"\n    :action-label=\"`Выбрано: ${selectedCount}`\"\n    action-description=\"Выберите действие\"\n    icon-back=\"arrow_back\"\n    icon-close=\"close\"\n    :bars=\"[\n      { icon: 'add' },\n      { icon: 'search' }\n    ]\"\n    :action-bars=\"[\n      { icon: 'share' },\n      { icon: 'delete', onClick: handleDelete }\n    ]\"\n  />\n\n  <!-- Панель инструментов с пользовательскими атрибутами кнопок -->\n  <Bars\n    label=\"Настройки\"\n    :button-attrs=\"{ secondary: true }\"\n    :bars=\"[\n      { icon: 'sync', label: 'Синхр.' },\n      { icon: 'info', label: 'Инфо' }\n    ]\"\n  />\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Bars разработан как UI-компонент верхнего уровня для создания согласованных заголовков приложений, панелей инструментов и контекстных интерфейсов действий с комплексной поддержкой навигации, управления действиями и массовых операций." }),
			"\n"
		] })
	] });
}
function li(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ci, { ...e })
	}) : ci(e);
}
//#endregion
//#region src/media/mdx/Bars/action.en.mdx
function ui(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Action mode" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "action" }),
			", ",
			o(t.code, { children: "actionLabel" }),
			", ",
			o(t.code, { children: "actionDescription" }),
			", and ",
			o(t.code, { children: "actionBars" }),
			" are designed for switching Bars into contextual action mode when selecting items or performing bulk operations."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "action" }), " — activates action mode with full content replacement"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "actionLabel" }), " — primary title for action mode (typically count of selected items)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "actionDescription" }), " — additional description or instruction for current action"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "actionBars" }), " — array of action buttons for operations on selected elements"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: when ",
			o(t.code, { children: "action = true" }),
			", the component replaces standard content (label, description, bars) with action variants (actionLabel, actionDescription, actionBars). The back button automatically transforms into an exit button (iconClose) for leaving action mode. All shared button attributes from ",
			o(t.code, { children: "buttonAttrs" }),
			" apply to ",
			o(t.code, { children: "actionBars" }),
			", maintaining consistent styling. Action mode is typically controlled by external selection state and is used for temporary focused operations with the ability to exit back to normal view."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref, computed } from 'vue'\n\nconst selectedItems = ref([])\nconst actionMode = computed(() => selectedItems.value.length > 0)\n\nconst handleSelect = (id) => {\nconst index = selectedItems.value.indexOf(id)\nif (index > -1) {\n  selectedItems.value.splice(index, 1)\n} else {\n  selectedItems.value.push(id)\n}\n}\n\nconst handleShare = () => {\nconsole.log('Share selected:', selectedItems.value)\n}\n\nconst handleDelete = () => {\nconsole.log('Delete selected:', selectedItems.value)\nselectedItems.value = []\n}\n<\/script>\n\n<template>\n<!-- Standard mode with regular navigation -->\n<Bars\n  :action=\"actionMode\"\n  label=\"Contacts\"\n  description=\"Manage your contacts\"\n  icon-back=\"arrow_back\"\n  icon-close=\"close\"\n  :bars=\"[\n    { icon: 'add', label: 'Add' },\n    { icon: 'search', label: 'Search' }\n  ]\"\n  :action-label=\"`${selectedItems.length} selected`\"\n  action-description=\"Choose an action to apply\"\n  :action-bars=\"[\n    { icon: 'share', onClick: handleShare },\n    { icon: 'delete', onClick: handleDelete }\n  ]\"\n/>\n\n<!-- Action mode always active -->\n<Bars\n  action\n  action-label=\"5 items selected\"\n  action-description=\"Select an action\"\n  icon-close=\"close\"\n  :action-bars=\"[\n    { icon: 'edit', label: 'Edit' },\n    { icon: 'archive', label: 'Archive' },\n    { icon: 'delete', label: 'Delete' }\n  ]\"\n/>\n\n<!-- With v-model for two-way binding -->\n<Bars\n  v-model:action=\"actionMode\"\n  label=\"Messages\"\n  :action-label=\"`${selectedItems.length} messages`\"\n  :action-bars=\"[\n    { icon: 'mark_email_read' },\n    { icon: 'delete' }\n  ]\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function di(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ui, { ...e })
	}) : ui(e);
}
//#endregion
//#region src/media/mdx/Bars/action.ru.mdx
function fi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Режим действий" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "action" }),
			", ",
			o(t.code, { children: "actionLabel" }),
			", ",
			o(t.code, { children: "actionDescription" }),
			" и ",
			o(t.code, { children: "actionBars" }),
			" предназначены для переключения Bars в контекстный режим действий при выборе элементов или выполнении массовых операций."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "action" }), " — активирует режим действий с полной заменой контента"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "actionLabel" }), " — основной заголовок для режима действий (обычно счётчик выбранных элементов)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "actionDescription" }), " — дополнительное описание или инструкция для текущего действия"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "actionBars" }), " — массив кнопок действий для операций над выбранными элементами"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: когда ",
			o(t.code, { children: "action = true" }),
			", компонент заменяет стандартный контент (label, description, bars) на варианты для действий (actionLabel, actionDescription, actionBars). Кнопка назад автоматически трансформируется в кнопку выхода (iconClose) для возврата из режима действий. Все общие атрибуты кнопок из ",
			o(t.code, { children: "buttonAttrs" }),
			" применяются к ",
			o(t.code, { children: "actionBars" }),
			", сохраняя согласованную стилизацию. Режим действий обычно контролируется внешним состоянием выбора и используется для временных фокусированных операций с возможностью выхода обратно в обычный вид."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref, computed } from 'vue'\n\nconst selectedItems = ref([])\nconst actionMode = computed(() => selectedItems.value.length > 0)\n\nconst handleSelect = (id) => {\nconst index = selectedItems.value.indexOf(id)\nif (index > -1) {\n  selectedItems.value.splice(index, 1)\n} else {\n  selectedItems.value.push(id)\n}\n}\n\nconst handleShare = () => {\nconsole.log('Поделиться выбранными:', selectedItems.value)\n}\n\nconst handleDelete = () => {\nconsole.log('Удалить выбранные:', selectedItems.value)\nselectedItems.value = []\n}\n<\/script>\n\n<template>\n<!-- Стандартный режим с обычной навигацией -->\n<Bars\n  :action=\"actionMode\"\n  label=\"Контакты\"\n  description=\"Управление контактами\"\n  icon-back=\"arrow_back\"\n  icon-close=\"close\"\n  :bars=\"[\n    { icon: 'add', label: 'Добавить' },\n    { icon: 'search', label: 'Поиск' }\n  ]\"\n  :action-label=\"`Выбрано: ${selectedItems.length}`\"\n  action-description=\"Выберите действие\"\n  :action-bars=\"[\n    { icon: 'share', onClick: handleShare },\n    { icon: 'delete', onClick: handleDelete }\n  ]\"\n/>\n\n<!-- Режим действий всегда активен -->\n<Bars\n  action\n  action-label=\"Выбрано 5 элементов\"\n  action-description=\"Выберите действие\"\n  icon-close=\"close\"\n  :action-bars=\"[\n    { icon: 'edit', label: 'Изменить' },\n    { icon: 'archive', label: 'Архивировать' },\n    { icon: 'delete', label: 'Удалить' }\n  ]\"\n/>\n\n<!-- С v-model для двусторонней привязки -->\n<Bars\n  v-model:action=\"actionMode\"\n  label=\"Сообщения\"\n  :action-label=\"`Сообщений: ${selectedItems.length}`\"\n  :action-bars=\"[\n    { icon: 'mark_email_read' },\n    { icon: 'delete' }\n  ]\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function pi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(fi, { ...e })
	}) : fi(e);
}
//#endregion
//#region src/media/mdx/Bars/slots.en.mdx
function mi(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "bars: any" }), " — Slot for placing action buttons in regular mode."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "actionBars: any" }), " — Slot for placing buttons in action mode."] }),
		"\n"
	] });
}
function hi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(mi, { ...e })
	}) : mi(e);
}
//#endregion
//#region src/media/mdx/Bars/slots.ru.mdx
function gi(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "bars: any" }), " — Слот для размещения кнопок панели действий в обычном режиме."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "actionBars: any" }), " — Слот для размещения кнопок в режиме действий (action mode)."] }),
		"\n"
	] });
}
function _i(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(gi, { ...e })
	}) : gi(e);
}
//#endregion
//#region src/media/mdx/Bars/v-model.en.mdx
function vi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "State management via v-model" }),
		"\n",
		s(t.p, { children: [
			"Two-way binding of action mode state via ",
			o(t.code, { children: "v-model:action" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "action: boolean" }), " — action mode state of the bar"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isAction = ref(false)\n<\/script>\n\n<template>\n<button @click=\"isAction = true\">Enable action mode</button>\n\n<Bars v-model:action=\"isAction\">\n  <template #bars>\n    <Button>Regular button</Button>\n  </template>\n  <template #actionBars>\n    <Button>Action button</Button>\n    <Button @click=\"isAction = false\">Close</Button>\n  </template>\n</Bars>\n</template>\n",
			language: "html"
		})
	] });
}
function yi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(vi, { ...e })
	}) : vi(e);
}
//#endregion
//#region src/media/mdx/Bars/v-model.ru.mdx
function bi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		s(t.p, { children: [
			"Двусторонняя привязка состояния action-режима через ",
			o(t.code, { children: "v-model:action" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "action: boolean" }), " — состояние action-режима панели"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isAction = ref(false)\n<\/script>\n\n<template>\n<button @click=\"isAction = true\">Включить action-режим</button>\n\n<Bars v-model:action=\"isAction\">\n  <template #bars>\n    <Button>Обычная кнопка</Button>\n  </template>\n  <template #actionBars>\n    <Button>Action-кнопка</Button>\n    <Button @click=\"isAction = false\">Закрыть</Button>\n  </template>\n</Bars>\n</template>\n",
			language: "html"
		})
	] });
}
function xi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(bi, { ...e })
	}) : bi(e);
}
//#endregion
//#region src/media/mdx/Bars/wikiMdxBars.ts
var Si = {
	name: "Bars",
	descriptions: {
		bars: {
			en: si,
			ru: li
		},
		action: {
			en: di,
			ru: pi
		},
		slots: {
			en: hi,
			ru: _i
		},
		"v-model": {
			en: yi,
			ru: xi
		}
	}
};
//#endregion
//#region src/media/mdx/Block/block.en.mdx
function Ci(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "A versatile structural component that serves as a container with support for labels, descriptions, captions, icons, and headlines." }),
		"\n",
		o(t.p, { children: "Block provides a flexible foundation for building complex interface components, allowing you to combine various information elements into a single unit. The component supports HTML tag customization and provides slots for content customization." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Display of headline, label, description, and caption" }),
			"\n",
			o(t.li, { children: "Icon support" }),
			"\n",
			o(t.li, { children: "Customizable HTML tag" }),
			"\n",
			o(t.li, { children: "Flexible layout for content organization" }),
			"\n",
			o(t.li, { children: "Slot support for functionality extension" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Content cards" }),
			"\n",
			o(t.li, { children: "List items" }),
			"\n",
			o(t.li, { children: "Information blocks" }),
			"\n",
			o(t.li, { children: "Sections with headers and descriptions" }),
			"\n",
			o(t.li, { children: "Basic building block for other components" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Block\n  headline=\"Block Headline\"\n  label=\"Label\"\n  description=\"Block description with detailed information\"\n  caption=\"Caption\"\n  icon=\"info\"\n>\n  Main block content\n</Block>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Block is a fundamental component for creating structured interfaces." }),
			"\n"
		] })
	] });
}
function wi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ci, { ...e })
	}) : Ci(e);
}
//#endregion
//#region src/media/mdx/Block/block.ru.mdx
function Ti(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков." }),
		"\n",
		o(t.p, { children: "Block обеспечивает гибкую основу для построения сложных компонентов интерфейса, позволяя комбинировать различные информационные элементы в едином блоке. Компонент поддерживает настройку HTML-тега и предоставляет слоты для кастомизации контента." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение заголовка, метки, описания и подписи" }),
			"\n",
			o(t.li, { children: "Поддержка иконок" }),
			"\n",
			o(t.li, { children: "Настраиваемый HTML-тег" }),
			"\n",
			o(t.li, { children: "Гибкая компоновка для организации контента" }),
			"\n",
			o(t.li, { children: "Поддержка слотов для расширения функциональности" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Карточки контента" }),
			"\n",
			o(t.li, { children: "Элементы списков" }),
			"\n",
			o(t.li, { children: "Информационные блоки" }),
			"\n",
			o(t.li, { children: "Секции с заголовками и описаниями" }),
			"\n",
			o(t.li, { children: "Базовый строительный блок для других компонентов" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Block\n  headline=\"Заголовок блока\"\n  label=\"Метка\"\n  description=\"Описание блока с подробной информацией\"\n  caption=\"Подпись\"\n  icon=\"info\"\n>\n  Основной контент блока\n</Block>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Block является фундаментальным компонентом для создания структурированных интерфейсов." }),
			"\n"
		] })
	] });
}
function Ei(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ti, { ...e })
	}) : Ti(e);
}
//#endregion
//#region src/media/mdx/Block/differences.en.mdx
function Di(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		strong: "strong",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Differences between Page, Section, Block, and Group" }),
		"\n",
		s(t.p, { children: [
			"All components are built on top of ",
			o(t.strong, { children: "Block" }),
			" and differ in semantics and header levels:"
		] }),
		"\n",
		o(t.h3, { children: "Page" }),
		"\n",
		s(t.p, { children: [
			"This is the root structural component that serves as the main wrapper for all page content. Its primary purpose is to define the main theme and semantically link content to the first-level heading. Its main difference is its uniqueness (used once per page); therefore, choose it as the primary container when creating a new page (",
			o(t.code, { children: "<main>" }),
			", ",
			o(t.code, { children: "h1" }),
			")."
		] }),
		"\n",
		o(t.h3, { children: "Section" }),
		"\n",
		s(t.p, { children: [
			"A container for major thematic division of the page into independent semantic blocks. It is needed for logical partitioning of content into parts like \"About Us\" or \"Services\". Unlike Block and Group, it carries higher semantic weight, so use it to form the page structure and highlight its main sections (",
			o(t.code, { children: "<section>" }),
			", ",
			o(t.code, { children: "h2" }),
			")."
		] }),
		"\n",
		o(t.h3, { children: "Block" }),
		"\n",
		s(t.p, { children: [
			"A universal and highly flexible building block for grouping any related content. It is the base element for creating independent functional units, cards, or informational inserts. Use it in any scenario where you need to organize content without strict adherence to global page divisions (",
			o(t.code, { children: "<div>" }),
			", ",
			o(t.code, { children: "h3" }),
			")."
		] }),
		"\n",
		o(t.h3, { children: "Group" }),
		"\n",
		s(t.p, { children: [
			"An auxiliary component for combining small thematic elements into logical groups. Its main goal is to structure details, such as form fields or sub-sections within a card. It ranks at the bottom of the hierarchy and is used for fine-tuning content structure within larger blocks or sections (",
			o(t.code, { children: "<div>" }),
			", ",
			o(t.code, { children: "h4" }),
			")."
		] }),
		"\n",
		o(t.h3, { children: "Hierarchy Example" }),
		"\n",
		o(i, {
			code: "\n<Page headline=\"User Account\">\n<Section label=\"User Profile\" description=\"Manage personal data\" icon=\"person\">\n  <Block label=\"Basic Information\">\n    <p>Configure your display name and bio for other users.</p>\n    \n    <Group label=\"Contact Details\">\n      <p>Email: user@example.com</p>\n      <p>Phone: +7 (999) 000-00-00</p>\n    </Group>\n  </Block>\n  \n  <Block label=\"Security\" description=\"Password and authentication settings\">\n    <p>Regular password updates improve your account security.</p>\n  </Block>\n</Section>\n\n<Section label=\"Notifications\" icon=\"notifications\">\n  <Block label=\"Subscriptions\">\n    <Group label=\"Email\">\n      <p>Weekly news and promotions.</p>\n    </Group>\n    <Group label=\"SMS\">\n      <p>Critical system messages only.</p>\n    </Group>\n  </Block>\n</Section>\n</Page>\n",
			language: "html"
		})
	] });
}
function Oi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Di, { ...e })
	}) : Di(e);
}
//#endregion
//#region src/media/mdx/Block/differences.ru.mdx
function ki(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		strong: "strong",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Различия между Page, Section, Block и Group" }),
		"\n",
		s(t.p, { children: [
			"Все компоненты построены на базе ",
			o(t.strong, { children: "Block" }),
			" и различаются семантикой и уровнями заголовков:"
		] }),
		"\n",
		o(t.h3, { children: "Page" }),
		"\n",
		s(t.p, { children: [
			"Это корневой структурный компонент, который служит главной оберткой для всего контента страницы. Он предназначен для определения основной темы и семантической привязки содержимого к заголовку первого уровня. Его главное отличие — уникальность (используется один раз), поэтому выбирайте его как основной контейнер при создании новой страницы (",
			o(t.code, { children: "<main>" }),
			", ",
			o(t.code, { children: "h1" }),
			")."
		] }),
		"\n",
		o(t.h3, { children: "Section" }),
		"\n",
		s(t.p, { children: [
			"Раздел для крупного тематического деления страницы на независимые смысловые блоки. Он нужен для логического разграничения контента на такие части, как «О нас» или «Услуги». В отличие от Block и Group, имеет более высокую семантическую значимость, поэтому используйте его для формирования скелета страницы и выделения её основных разделов (",
			o(t.code, { children: "<section>" }),
			", ",
			o(t.code, { children: "h2" }),
			")."
		] }),
		"\n",
		o(t.h3, { children: "Block" }),
		"\n",
		s(t.p, { children: [
			"Универсальный и максимально гибкий строительный блок для группировки любого связанного контента. Это базовый элемент для создания независимых функциональных единиц, карточек или информационных вставок. Используйте его в любых сценариях, где требуется организовать контент без строгой привязки к глобальным разделам страницы (",
			o(t.code, { children: "<div>" }),
			", ",
			o(t.code, { children: "h3" }),
			")."
		] }),
		"\n",
		o(t.h3, { children: "Group" }),
		"\n",
		s(t.p, { children: [
			"Вспомогательный компонент для объединения мелких тематических элементов в логические группы. Его основная цель — структурирование деталей, таких как поля формы или подразделы внутри карточки. Он находится внизу иерархии и применяется для тонкой настройки структуры контента внутри более крупных блоков или секций (",
			o(t.code, { children: "<div>" }),
			", ",
			o(t.code, { children: "h4" }),
			")."
		] }),
		"\n",
		o(t.h3, { children: "Пример иерархии" }),
		"\n",
		o(i, {
			code: "\n<Page headline=\"Личный кабинет\">\n<Section label=\"Профиль пользователя\" description=\"Управление персональными данными\" icon=\"person\">\n  <Block label=\"Основная информация\">\n    <p>Настройте свое отображаемое имя и биографию для других пользователей.</p>\n    \n    <Group label=\"Контактные данные\">\n      <p>Email: user@example.com</p>\n      <p>Телефон: +7 (999) 000-00-00</p>\n    </Group>\n  </Block>\n  \n  <Block label=\"Безопасность\" description=\"Настройки пароля и аутентификации\">\n    <p>Регулярное обновление пароля повышает защищенность вашего аккаунта.</p>\n  </Block>\n</Section>\n\n<Section label=\"Уведомления\" icon=\"notifications\">\n  <Block label=\"Рассылки\">\n    <Group label=\"Email\">\n      <p>Еженедельные новости и акции.</p>\n    </Group>\n    <Group label=\"SMS\">\n      <p>Только критические системные сообщения.</p>\n    </Group>\n  </Block>\n</Section>\n</Page>\n",
			language: "html"
		})
	] });
}
function Ai(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ki, { ...e })
	}) : ki(e);
}
//#endregion
//#region src/media/mdx/Block/wikiMdxBlock.ts
var ji = {
	name: "Block",
	descriptions: {
		block: {
			en: wi,
			ru: Ei
		},
		differences: {
			en: Oi,
			ru: Ai
		}
	}
};
//#endregion
//#region src/media/mdx/Button/button.en.mdx
function Mi(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "Interactive button component for triggering user actions with support for multiple visual variants, states, and accessibility features." }),
		"\n",
		o(t.p, { children: "Button provides a comprehensive solution for creating consistent, accessible action elements with built-in support for icons, loading states, ripple effects, and skeleton placeholders. The component integrates visual variants (primary, secondary, outline, text), state management (focus, hover, disabled, selected), and adaptive behavior for responsive interfaces." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Multiple visual variants (primary, secondary, outline, text)" }),
			"\n",
			o(t.li, { children: "Comprehensive state support (focus, hover, active, disabled, selected, readonly)" }),
			"\n",
			o(t.li, { children: "Built-in icon positioning (leading and trailing)" }),
			"\n",
			o(t.li, { children: "Progress indicator integration for loading states" }),
			"\n",
			o(t.li, { children: "Ripple effect for tactile feedback" }),
			"\n",
			o(t.li, { children: "Skeleton system for loading placeholders" }),
			"\n",
			o(t.li, { children: "Adaptive and responsive behavior options" }),
			"\n",
			o(t.li, { children: "Full accessibility support (ARIA, keyboard navigation)" }),
			"\n",
			o(t.li, { children: "Customizable through design tokens" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Primary actions in forms and dialogs" }),
			"\n",
			o(t.li, { children: "Navigation and menu items" }),
			"\n",
			o(t.li, { children: "Toolbars and action bars" }),
			"\n",
			o(t.li, { children: "Call-to-action elements" }),
			"\n",
			o(t.li, { children: "Icon-only action buttons" }),
			"\n",
			o(t.li, { children: "Loading state indicators" }),
			"\n",
			o(t.li, { children: "Confirmation and cancellation actions" }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Button is designed as a universal interactive element with comprehensive state management, visual variants, and accessibility features for creating consistent action interfaces." }),
			"\n"
		] })
	] });
}
function Ni(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Mi, { ...e })
	}) : Mi(e);
}
//#endregion
//#region src/media/mdx/Button/button.ru.mdx
function Pi(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Интерактивный компонент кнопки для инициирования действий пользователя с поддержкой множественных визуальных вариантов, состояний и функций доступности." }),
		"\n",
		o(t.p, { children: "Button предоставляет комплексное решение для создания согласованных, доступных элементов действий со встроенной поддержкой иконок, состояний загрузки, эффектов ripple и плейсхолдеров-скелетонов. Компонент интегрирует визуальные варианты (primary, secondary, outline, text), управление состояниями (focus, hover, disabled, selected) и адаптивное поведение для отзывчивых интерфейсов." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Множественные визуальные варианты (primary, secondary, outline, text)" }),
			"\n",
			o(t.li, { children: "Комплексная поддержка состояний (focus, hover, active, disabled, selected, readonly)" }),
			"\n",
			o(t.li, { children: "Встроенное позиционирование иконок (в начале и в конце)" }),
			"\n",
			o(t.li, { children: "Интеграция индикатора прогресса для состояний загрузки" }),
			"\n",
			o(t.li, { children: "Эффект ripple для тактильной обратной связи" }),
			"\n",
			o(t.li, { children: "Система скелетонов для плейсхолдеров загрузки" }),
			"\n",
			o(t.li, { children: "Опции адаптивного и отзывчивого поведения" }),
			"\n",
			o(t.li, { children: "Полная поддержка доступности (ARIA, клавиатурная навигация)" }),
			"\n",
			o(t.li, { children: "Настройка через токены дизайна" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Основные действия в формах и диалогах" }),
			"\n",
			o(t.li, { children: "Элементы навигации и меню" }),
			"\n",
			o(t.li, { children: "Панели инструментов и действий" }),
			"\n",
			o(t.li, { children: "Элементы призыва к действию" }),
			"\n",
			o(t.li, { children: "Кнопки только с иконками" }),
			"\n",
			o(t.li, { children: "Индикаторы состояния загрузки" }),
			"\n",
			o(t.li, { children: "Действия подтверждения и отмены" }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Button разработан как универсальный интерактивный элемент с комплексным управлением состояниями, визуальными вариантами и функциями доступности для создания согласованных интерфейсов действий." }),
			"\n"
		] })
	] });
}
function Fi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pi, { ...e })
	}) : Pi(e);
}
//#endregion
//#region src/media/mdx/Button/primary.en.mdx
function Ii(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Primary buttons" }),
		"\n",
		s(t.p, { children: [
			"Button component supports primary mode through the ",
			o(t.code, { children: "primary" }),
			" property. In this mode, buttons have a distinctive visual style for the most important actions:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Visual emphasis" }), " - stands out prominently among other interface elements"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Action hierarchy" }), " - indicates the main or priority action on the page"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "High contrast" }), " - automatically applies high-contrast colors for better visibility"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Icon support" }), " - enhances understanding of purpose through visual elements"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Primary mode is especially useful for creating main call-to-action buttons, form submissions, and confirmation actions that require user attention and should be immediately recognizable in the interface." }),
		"\n",
		o(i, {
			code: "\n<Button primary icon=\"send\">Submit</Button>\n<Button primary icon=\"save\">Save</Button>\n<Button primary>Confirm</Button>\n",
			language: "html"
		})
	] });
}
function Li(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ii, { ...e })
	}) : Ii(e);
}
//#endregion
//#region src/media/mdx/Button/primary.ru.mdx
function Ri(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Основные кнопки (primary)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Button поддерживает основной режим через свойство ",
			o(t.code, { children: "primary" }),
			". В этом режиме кнопки имеют выделяющийся визуальный стиль для самых важных действий:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Визуальный акцент" }), " - выделяются заметно среди других элементов интерфейса"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Иерархия действий" }), " - указывают на основное или приоритетное действие на странице"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Высокая контрастность" }), " - автоматически применяются высококонтрастные цвета для лучшей видимости"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Поддержка иконок" }), " - улучшают понимание назначения через визуальные элементы"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Primary режим особенно полезен для создания основных кнопок призыва к действию, отправки форм и подтверждающих действий, которые требуют внимания пользователя и должны быть сразу узнаваемы в интерфейсе." }),
		"\n",
		o(i, {
			code: "\n<Button primary icon=\"send\">Отправить</Button>\n<Button primary icon=\"save\">Сохранить</Button>\n<Button primary>Подтвердить</Button>\n",
			language: "html"
		})
	] });
}
function zi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ri, { ...e })
	}) : Ri(e);
}
//#endregion
//#region src/media/mdx/Button/secondary.en.mdx
function Bi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Secondary buttons" }),
		"\n",
		s(t.p, { children: [
			"Button component supports secondary mode through the ",
			o(t.code, { children: "secondary" }),
			" property. In this mode, buttons have a less prominent visual style for alternative or supporting actions:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Moderate emphasis" }), " - less intrusive than primary buttons while remaining clear"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Action alternatives" }), " - provides users with alternative choices without overwhelming them"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Balanced contrast" }), " - uses colors with moderate contrast for better visual hierarchy"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Icon support" }), " - maintains consistency with other button variants through visual elements"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Secondary mode is especially useful for creating cancel buttons, reset actions, and alternative choices that support the main flow without competing for primary attention in the interface." }),
		"\n",
		o(i, {
			code: "\n<Button secondary icon=\"close\">Cancel</Button>\n<Button secondary icon=\"refresh\">Reset</Button>\n<Button secondary>Skip</Button>\n",
			language: "html"
		})
	] });
}
function Vi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Bi, { ...e })
	}) : Bi(e);
}
//#endregion
//#region src/media/mdx/Button/secondary.ru.mdx
function Hi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Второстепенные кнопки (secondary)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Button поддерживает второстепенный режим через свойство ",
			o(t.code, { children: "secondary" }),
			". В этом режиме кнопки имеют менее заметный визуальный стиль для альтернативных или поддерживающих действий:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Умеренный акцент" }), " - менее навязчивы чем основные кнопки, оставаясь при этом понятными"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Альтернативные действия" }), " - предоставляют пользователям альтернативный выбор без перегрузки"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Сбалансированная контрастность" }), " - используют цвета с умеренным контрастом для лучшей визуальной иерархии"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Поддержка иконок" }), " - поддерживают согласованность с другими вариантами кнопок через визуальные элементы"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Secondary режим особенно полезен для создания кнопок отмены, действий сброса и альтернативных вариантов выбора, которые поддерживают основной поток без конкуренции за первичное внимание в интерфейсе." }),
		"\n",
		o(i, {
			code: "\n<Button secondary icon=\"close\">Отмена</Button>\n<Button secondary icon=\"refresh\">Сброс</Button>\n<Button secondary>Пропустить</Button>\n",
			language: "html"
		})
	] });
}
function Ui(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Hi, { ...e })
	}) : Hi(e);
}
//#endregion
//#region src/media/mdx/Button/outline.en.mdx
function Wi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Outline buttons" }),
		"\n",
		s(t.p, { children: [
			"Button component supports outline mode through the ",
			o(t.code, { children: "outline" }),
			" property. In this mode, buttons have a minimalist visual style with transparent background and colored border:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Minimalist design" }), " - suitable for interfaces requiring reduced visual load"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Transparent background" }), " - maintains clean appearance while remaining interactive"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Hover feedback" }), " - background appears on hover for better user interaction"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Icon support" }), " - works seamlessly with icons for enhanced clarity"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Outline mode is especially useful for creating tertiary actions, filter controls, and secondary options in cards or lists that need to be accessible without excessive visual noise." }),
		"\n",
		o(i, {
			code: "\n<Button outline icon=\"filter\">Filter</Button>\n<Button outline icon=\"sort\">Sort</Button>\n<Button outline>More options</Button>\n",
			language: "html"
		})
	] });
}
function Gi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Wi, { ...e })
	}) : Wi(e);
}
//#endregion
//#region src/media/mdx/Button/outline.ru.mdx
function Ki(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Контурные кнопки (outline)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Button поддерживает контурный режим через свойство ",
			o(t.code, { children: "outline" }),
			". В этом режиме кнопки имеют минималистичный визуальный стиль с прозрачным фоном и цветной границей:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Минималистичный дизайн" }), " - подходит для интерфейсов, требующих сниженной визуальной нагрузки"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Прозрачный фон" }), " - поддерживает чистый внешний вид, оставаясь интерактивными"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Обратная связь при наведении" }), " - фон появляется при наведении для лучшего взаимодействия с пользователем"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Поддержка иконок" }), " - бесшовно работает с иконками для улучшенной ясности"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Outline режим особенно полезен для создания третичных действий, элементов управления фильтрами и второстепенных опций в карточках или списках, которые должны быть доступны без излишнего визуального шума." }),
		"\n",
		o(i, {
			code: "\n<Button outline icon=\"filter\">Фильтр</Button>\n<Button outline icon=\"sort\">Сортировка</Button>\n<Button outline>Дополнительно</Button>\n",
			language: "html"
		})
	] });
}
function qi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ki, { ...e })
	}) : Ki(e);
}
//#endregion
//#region src/media/mdx/Button/text.en.mdx
function Ji(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Text buttons" }),
		"\n",
		s(t.p, { children: [
			"Button component supports text mode through the ",
			o(t.code, { children: "text" }),
			" property. In this mode, buttons have a minimalist text-only style resembling links for the most unobtrusive actions:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Unobtrusive design" }), " - looks like plain text while remaining interactive"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "No background or border" }), " - maintains clean appearance without visual weight"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Hover feedback" }), " - subtle background appears on hover for better interaction clarity"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Icon support" }), " - seamlessly integrates icons while maintaining minimal visual impact"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Text mode is especially useful for creating tertiary actions, inline navigation links, and supplementary options within text content or footers that need to be accessible without drawing excessive attention." }),
		"\n",
		o(i, {
			code: "\n<Button text icon=\"info\">Learn more</Button>\n<Button text icon=\"help\">Help</Button>\n<Button text>Read details</Button>\n",
			language: "html"
		})
	] });
}
function Yi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ji, { ...e })
	}) : Ji(e);
}
//#endregion
//#region src/media/mdx/Button/text.ru.mdx
function Xi(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Текстовые кнопки (text)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Button поддерживает текстовый режим через свойство ",
			o(t.code, { children: "text" }),
			". В этом режиме кнопки имеют минималистичный текстовый стиль, напоминающий ссылки, для самых ненавязчивых действий:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Ненавязчивый дизайн" }), " - выглядит как обычный текст, оставаясь интерактивным"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Без фона и рамки" }), " - поддерживает чистый внешний вид без визуальной нагрузки"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Обратная связь при наведении" }), " - тонкий фон появляется при наведении для лучшей ясности взаимодействия"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Поддержка иконок" }), " - бесшовно интегрирует иконки, сохраняя минимальное визуальное воздействие"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Text режим особенно полезен для создания третичных действий, встроенных навигационных ссылок и дополнительных опций внутри текстового контента или футеров, которые должны быть доступны без привлечения чрезмерного внимания." }),
		"\n",
		o(i, {
			code: "\n<Button text icon=\"info\">Узнать больше</Button>\n<Button text icon=\"help\">Справка</Button>\n<Button text>Читать детали</Button>\n",
			language: "html"
		})
	] });
}
function Zi(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Xi, { ...e })
	}) : Xi(e);
}
//#endregion
//#region src/media/mdx/Button/wikiMdxButton.ts
var Qi = {
	name: "Button",
	descriptions: {
		button: {
			en: Ni,
			ru: Fi
		},
		primary: {
			en: Li,
			ru: zi
		},
		secondary: {
			en: Vi,
			ru: Ui
		},
		outline: {
			en: Gi,
			ru: qi
		},
		text: {
			en: Yi,
			ru: Zi
		}
	}
};
//#endregion
//#region src/media/mdx/Cell/cell.en.mdx
function $i(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "Universal container component for displaying structured content with labels, descriptions, and interactive actions in lists and interface elements." }),
		"\n",
		o(t.p, { children: "Cell provides a consistent way to represent information blocks with support for text hierarchy (label, description, caption), interactive states, icons, and progress indicators. The component integrates ripple effects, skeleton states, and flexible content positioning for creating modern interface lists." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Structured content hierarchy (label, description, caption)" }),
			"\n",
			o(t.li, { children: "Interactive states (focus, selected, disabled, readonly)" }),
			"\n",
			o(t.li, { children: "Built-in icon and progress indicator support" }),
			"\n",
			o(t.li, { children: "Ripple effect integration for tactile feedback" }),
			"\n",
			o(t.li, { children: "Skeleton system for loading states" }),
			"\n",
			o(t.li, { children: "Customizable dividers and dynamic behavior" }),
			"\n",
			o(t.li, { children: "Flexible slot system for custom content" }),
			"\n",
			o(t.li, { children: "Optimized for list and menu interfaces" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "List items in navigation menus and settings" }),
			"\n",
			o(t.li, { children: "Contact cards and profile entries" }),
			"\n",
			o(t.li, { children: "Action sheets and selection lists" }),
			"\n",
			o(t.li, { children: "Settings panels and configuration items" }),
			"\n",
			o(t.li, { children: "Data tables and structured information displays" }),
			"\n",
			o(t.li, { children: "Mobile-first interface components" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(false)\nconst loading = ref(false)\n\nconst handleClick = () => {\nconsole.log('Cell clicked')\nselected.value = !selected.value\n}\n<\/script>\n\n<template>\n<Cell\n  label=\"Notification Settings\"\n  description=\"Manage how you receive notifications\"\n  caption=\"Updated today\"\n  icon=\"notifications\"\n  :selected=\"selected\"\n  :skeleton=\"loading\"\n  @click=\"handleClick\"\n>\n  <template #trailing>\n    <Icon name=\"chevron_right\" />\n  </template>\n</Cell>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Cell is designed as a universal building block for creating consistent list-based interfaces with rich content and interactive states." }),
			"\n"
		] })
	] });
}
function ea(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($i, { ...e })
	}) : $i(e);
}
//#endregion
//#region src/media/mdx/Cell/cell.ru.mdx
function ta(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и интерактивными действиями в списках и элементах интерфейса." }),
		"\n",
		o(t.p, { children: "Cell обеспечивает единообразное представление информационных блоков с поддержкой текстовой иерархии (метка, описание, подпись), интерактивных состояний, иконок и индикаторов прогресса. Компонент интегрирует эффекты ripple, состояния скелетонов и гибкое позиционирование контента для создания современных интерфейсных списков." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Структурированная иерархия контента (метка, описание, подпись)" }),
			"\n",
			o(t.li, { children: "Интерактивные состояния (focus, selected, disabled, readonly)" }),
			"\n",
			o(t.li, { children: "Встроенная поддержка иконок и индикаторов прогресса" }),
			"\n",
			o(t.li, { children: "Интеграция эффекта ripple для тактильной обратной связи" }),
			"\n",
			o(t.li, { children: "Система скелетонов для состояний загрузки" }),
			"\n",
			o(t.li, { children: "Настраиваемые разделители и динамическое поведение" }),
			"\n",
			o(t.li, { children: "Гибкая система слотов для пользовательского контента" }),
			"\n",
			o(t.li, { children: "Оптимизирован для списковых и меню интерфейсов" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Элементы списков в меню навигации и настройках" }),
			"\n",
			o(t.li, { children: "Карточки контактов и профильные записи" }),
			"\n",
			o(t.li, { children: "Списки действий и выбора элементов" }),
			"\n",
			o(t.li, { children: "Панели настроек и элементы конфигурации" }),
			"\n",
			o(t.li, { children: "Таблицы данных и структурированные информационные блоки" }),
			"\n",
			o(t.li, { children: "Компоненты интерфейса mobile-first" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(false)\nconst loading = ref(false)\n\nconst handleClick = () => {\nconsole.log('Ячейка нажата')\nselected.value = !selected.value\n}\n<\/script>\n\n<template>\n<Cell\n  label=\"Настройки уведомлений\"\n  description=\"Управление способами получения уведомлений\"\n  caption=\"Обновлено сегодня\"\n  icon=\"notifications\"\n  :selected=\"selected\"\n  :skeleton=\"loading\"\n  @click=\"handleClick\"\n>\n  <template #trailing>\n    <Icon name=\"chevron_right\" />\n  </template>\n</Cell>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Cell разработан как универсальный строительный блок для создания единообразных списковых интерфейсов с богатым контентом и интерактивными состояниями." }),
			"\n"
		] })
	] });
}
function na(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ta, { ...e })
	}) : ta(e);
}
//#endregion
//#region src/media/mdx/Cell/slots.en.mdx
function ra(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "trailing(props: CellClassesSub): any" }), " — Slot for placing control elements or indicators at the end of the cell (icons, switches, buttons)."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "body(props: CellClassesSub): any" }), " — Slot for placing additional content at the bottom of the cell (metadata, secondary actions, details)."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "CellClassesSub:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [
					o(t.code, { children: "label: string" }),
					" — CSS class for the label element (",
					o(t.code, { children: "{className}__label" }),
					")."
				] }),
				"\n",
				s(t.li, { children: [
					o(t.code, { children: "description: string" }),
					" — CSS class for the description element (",
					o(t.code, { children: "{className}__description" }),
					")."
				] }),
				"\n",
				s(t.li, { children: [
					o(t.code, { children: "caption: string" }),
					" — CSS class for the caption element (",
					o(t.code, { children: "{className}__caption" }),
					")."
				] }),
				"\n",
				s(t.li, { children: [
					o(t.code, { children: "trailing: string" }),
					" — CSS class for the trailing area element (",
					o(t.code, { children: "{className}__trailing" }),
					")."
				] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function ia(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ra, { ...e })
	}) : ra(e);
}
//#endregion
//#region src/media/mdx/Cell/slots.ru.mdx
function aa(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "trailing(props: CellClassesSub): any" }), " — Слот для размещения элементов управления или индикаторов в конце ячейки (иконки, переключатели, кнопки)."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "body(props: CellClassesSub): any" }), " — Слот для размещения дополнительного контента в нижней части ячейки (метаданные, вторичные действия, детали)."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "CellClassesSub:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [
					o(t.code, { children: "label: string" }),
					" — CSS-класс для элемента метки (",
					o(t.code, { children: "{className}__label" }),
					")."
				] }),
				"\n",
				s(t.li, { children: [
					o(t.code, { children: "description: string" }),
					" — CSS-класс для элемента описания (",
					o(t.code, { children: "{className}__description" }),
					")."
				] }),
				"\n",
				s(t.li, { children: [
					o(t.code, { children: "caption: string" }),
					" — CSS-класс для элемента подписи (",
					o(t.code, { children: "{className}__caption" }),
					")."
				] }),
				"\n",
				s(t.li, { children: [
					o(t.code, { children: "trailing: string" }),
					" — CSS-класс для элемента области trailing (",
					o(t.code, { children: "{className}__trailing" }),
					")."
				] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function oa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(aa, { ...e })
	}) : aa(e);
}
//#endregion
//#region src/media/mdx/Cell/wikiMdxCell.ts
var sa = {
	name: "Cell",
	descriptions: {
		cell: {
			en: ea,
			ru: na
		},
		slots: {
			en: ia,
			ru: oa
		}
	}
};
//#endregion
//#region src/media/mdx/Checkbox/checkbox.en.mdx
function ca(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating interactive checkboxes with support for multiple selection, validation, and state customization." }),
		"\n",
		o(t.p, { children: "Checkbox manages the selection state of elements (checked, unchecked, indeterminate state), supports validation, form integration, customizable icons, and transition animations. The component automatically handles state changes, focus management, and event generation during user interaction." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Three states: checked, unchecked, indeterminate" }),
			"\n",
			o(t.li, { children: "Built-in validation with custom error messages" }),
			"\n",
			o(t.li, { children: "Support for labels and descriptions" }),
			"\n",
			o(t.li, { children: "Customizable icons for different states" }),
			"\n",
			o(t.li, { children: "Form integration via name and value attributes" }),
			"\n",
			o(t.li, { children: "Disabled, loading, and skeleton states" }),
			"\n",
			o(t.li, { children: "Ripple effect on interaction" }),
			"\n",
			o(t.li, { children: "Adaptive layout and styling" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Agreement with terms and policies" }),
			"\n",
			o(t.li, { children: "Multiple item selection from lists" }),
			"\n",
			o(t.li, { children: "Settings and feature toggles" }),
			"\n",
			o(t.li, { children: "Forms with checkboxes for confirmation" }),
			"\n",
			o(t.li, { children: "Group selection with parent indeterminate state" }),
			"\n"
		] })
	] });
}
function la(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ca, { ...e })
	}) : ca(e);
}
//#endregion
//#region src/media/mdx/Checkbox/checkbox.ru.mdx
function ua(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания интерактивных чекбоксов с поддержкой множественного выбора, валидации и настройки состояний." }),
		"\n",
		o(t.p, { children: "Checkbox управляет состоянием выбора элементов (отмечен, не отмечен, неопределённое состояние), поддерживает валидацию, интеграцию с формами, настраиваемые иконки и анимацию переходов. Компонент автоматически обрабатывает изменение состояний, управление фокусом и генерацию событий при взаимодействии пользователя." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Три состояния: отмечен, не отмечен, неопределённое (indeterminate)" }),
			"\n",
			o(t.li, { children: "Встроенная валидация с пользовательскими сообщениями об ошибках" }),
			"\n",
			o(t.li, { children: "Поддержка меток (label) и описания (description)" }),
			"\n",
			o(t.li, { children: "Настраиваемые иконки для разных состояний" }),
			"\n",
			o(t.li, { children: "Интеграция с формами через name и value" }),
			"\n",
			o(t.li, { children: "Состояния disabled, loading и skeleton" }),
			"\n",
			o(t.li, { children: "Эффект ripple при взаимодействии" }),
			"\n",
			o(t.li, { children: "Адаптивная раскладка и стилизация" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Согласие с условиями и политиками" }),
			"\n",
			o(t.li, { children: "Множественный выбор элементов из списка" }),
			"\n",
			o(t.li, { children: "Настройки и переключение функций" }),
			"\n",
			o(t.li, { children: "Формы с чекбоксами для подтверждения" }),
			"\n",
			o(t.li, { children: "Групповой выбор с родительским indeterminate состоянием" }),
			"\n"
		] })
	] });
}
function da(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ua, { ...e })
	}) : ua(e);
}
//#endregion
//#region src/media/mdx/Checkbox/indeterminate.en.mdx
function fa(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Indeterminate state" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "indeterminate" }),
			" property controls the third checkbox state — indeterminate (partially selected). This state is visually displayed as a horizontal line instead of a checkmark."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "indeterminate" }), " — enables the indeterminate state of the checkbox"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconIndeterminate" }), " — custom icon for the indeterminate state"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "value" }),
				" — remains ",
				o(t.code, { children: "null" }),
				" or a special value in the indeterminate state"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "The indeterminate state is typically used for parent checkboxes in a group when only some child elements are selected." }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref, computed } from 'vue'\n\nconst items = ref([\n{ id: 1, label: 'Item 1', checked: true },\n{ id: 2, label: 'Item 2', checked: false },\n{ id: 3, label: 'Item 3', checked: true }\n])\n\nconst allChecked = computed({\nget: () => items.value.every(item => item.checked),\nset: (value) => {\n  items.value.forEach(item => item.checked = value)\n}\n})\n\nconst indeterminate = computed(() => {\nconst checkedCount = items.value.filter(item => item.checked).length\nreturn checkedCount > 0 && checkedCount < items.value.length\n})\n<\/script>\n\n<template>\n<!-- Parent checkbox with partial selection indicator -->\n<Checkbox\n  v-model=\"allChecked\"\n  :indeterminate=\"indeterminate\"\n  label=\"Select all\"\n/>\n\n<!-- Child checkboxes -->\n<div style=\"margin-left: 24px\">\n  <Checkbox\n    v-for=\"item in items\"\n    :key=\"item.id\"\n    v-model=\"item.checked\"\n    :label=\"item.label\"\n  />\n</div>\n\n<!-- Using with custom icon -->\n<Checkbox\n  indeterminate\n  iconIndeterminate=\"remove\"\n  label=\"Partially selected\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function pa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(fa, { ...e })
	}) : fa(e);
}
//#endregion
//#region src/media/mdx/Checkbox/indeterminate.ru.mdx
function ma(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Неопределённое состояние" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "indeterminate" }),
			" управляет третьим состоянием чекбокса — неопределённым (частично выбранным). Это состояние визуально отображается как горизонтальная линия вместо галочки."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "indeterminate" }), " — включает неопределённое состояние чекбокса"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconIndeterminate" }), " — пользовательская иконка для неопределённого состояния"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "value" }),
				" — остается ",
				o(t.code, { children: "null" }),
				" или специальное значение в неопределённом состоянии"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Неопределённое состояние обычно используется для родительских чекбоксов в группе, когда выбраны только некоторые дочерние элементы." }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref, computed } from 'vue'\n\nconst items = ref([\n{ id: 1, label: 'Пункт 1', checked: true },\n{ id: 2, label: 'Пункт 2', checked: false },\n{ id: 3, label: 'Пункт 3', checked: true }\n])\n\nconst allChecked = computed({\nget: () => items.value.every(item => item.checked),\nset: (value) => {\n  items.value.forEach(item => item.checked = value)\n}\n})\n\nconst indeterminate = computed(() => {\nconst checkedCount = items.value.filter(item => item.checked).length\nreturn checkedCount > 0 && checkedCount < items.value.length\n})\n<\/script>\n\n<template>\n<!-- Родительский чекбокс с индикатором частичного выбора -->\n<Checkbox\n  v-model=\"allChecked\"\n  :indeterminate=\"indeterminate\"\n  label=\"Выбрать все\"\n/>\n\n<!-- Дочерние чекбоксы -->\n<div style=\"margin-left: 24px\">\n  <Checkbox\n    v-for=\"item in items\"\n    :key=\"item.id\"\n    v-model=\"item.checked\"\n    :label=\"item.label\"\n  />\n</div>\n\n<!-- Использование с пользовательской иконкой -->\n<Checkbox\n  indeterminate\n  iconIndeterminate=\"remove\"\n  label=\"Частично выбрано\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function ha(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ma, { ...e })
	}) : ma(e);
}
//#endregion
//#region src/media/mdx/Checkbox/value.en.mdx
function ga(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Value Management" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "value" }),
			", ",
			o(t.code, { children: "valueVariant" }),
			", and ",
			o(t.code, { children: "valueVariantHide" }),
			" properties are designed for managing checkbox values during form submission and two-way data binding."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value" }), " — current checkbox state (true/false or custom values)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "valueVariant" }), " — value passed when checkbox is checked"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "valueVariantHide" }), " — value passed when checkbox is unchecked (default: \"0\")"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: ",
			o(t.code, { children: "value" }),
			" determines the current checkbox state and works with ",
			o(t.code, { children: "v-model" }),
			" for two-way binding. ",
			o(t.code, { children: "valueVariant" }),
			" allows setting a custom value for the checked state (e.g., \"yes\", \"1\", \"active\"), which will be passed during form submission. ",
			o(t.code, { children: "valueVariantHide" }),
			" automatically creates a hidden input field with the specified value, which is submitted when the checkbox is unchecked, ensuring data presence in the form even with an inactive checkbox."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst agreed = ref(false)\nconst formData = ref({})\n\nconst handleSubmit = () => {\nconsole.log('Form data:', formData.value)\n}\n<\/script>\n\n<template>\n<!-- Standard usage with boolean -->\n<Checkbox\n  v-model=\"agreed\"\n  name=\"terms\"\n  label=\"I agree to the terms\"\n/>\n<!-- value: true/false -->\n\n<!-- Custom values for form -->\n<Checkbox\n  name=\"subscribe\"\n  label=\"Subscribe to newsletter\"\n  valueVariant=\"yes\"\n  valueVariantHide=\"no\"\n/>\n<!-- When checked sends: subscribe=yes -->\n<!-- When unchecked sends: subscribe=no -->\n\n<!-- Numeric values -->\n<Checkbox\n  name=\"notification\"\n  label=\"Enable notifications\"\n  valueVariant=\"1\"\n  valueVariantHide=\"0\"\n/>\n<!-- When checked sends: notification=1 -->\n<!-- When unchecked sends: notification=0 -->\n\n<!-- Without hidden value -->\n<Checkbox\n  name=\"optional\"\n  label=\"Optional setting\"\n  valueVariant=\"enabled\"\n  :valueVariantHide=\"null\"\n/>\n<!-- Only sent when checked: optional=enabled -->\n<!-- When unchecked field is not sent -->\n</template>\n",
			language: "html"
		})
	] });
}
function _a(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ga, { ...e })
	}) : ga(e);
}
//#endregion
//#region src/media/mdx/Checkbox/value.ru.mdx
function va(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление значениями" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "value" }),
			", ",
			o(t.code, { children: "valueVariant" }),
			" и ",
			o(t.code, { children: "valueVariantHide" }),
			" предназначены для управления значениями чекбокса при отправке форм и работе с двусторонней привязкой данных."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value" }), " — текущее состояние чекбокса (true/false или пользовательские значения)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "valueVariant" }), " — значение, которое передаётся при отмеченном чекбоксе"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "valueVariantHide" }), " — значение, которое передаётся при неотмеченном чекбоксе (по умолчанию: \"0\")"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: ",
			o(t.code, { children: "value" }),
			" определяет текущее состояние чекбокса и работает с ",
			o(t.code, { children: "v-model" }),
			" для двусторонней привязки. ",
			o(t.code, { children: "valueVariant" }),
			" позволяет установить пользовательское значение для отмеченного состояния (например, \"yes\", \"1\", \"active\"), которое будет передано при отправке формы. ",
			o(t.code, { children: "valueVariantHide" }),
			" автоматически создаёт скрытое поле input с указанным значением, которое отправляется, когда чекбокс не отмечен, обеспечивая наличие данных в форме даже при неактивном чекбоксе."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst agreed = ref(false)\nconst formData = ref({})\n\nconst handleSubmit = () => {\nconsole.log('Form data:', formData.value)\n}\n<\/script>\n\n<template>\n<!-- Стандартное использование с boolean -->\n<Checkbox\n  v-model=\"agreed\"\n  name=\"terms\"\n  label=\"Согласен с условиями\"\n/>\n<!-- value: true/false -->\n\n<!-- Пользовательские значения для формы -->\n<Checkbox\n  name=\"subscribe\"\n  label=\"Подписаться на рассылку\"\n  valueVariant=\"yes\"\n  valueVariantHide=\"no\"\n/>\n<!-- При отметке отправит: subscribe=yes -->\n<!-- Без отметки отправит: subscribe=no -->\n\n<!-- Числовые значения -->\n<Checkbox\n  name=\"notification\"\n  label=\"Включить уведомления\"\n  valueVariant=\"1\"\n  valueVariantHide=\"0\"\n/>\n<!-- При отметке отправит: notification=1 -->\n<!-- Без отметки отправит: notification=0 -->\n\n<!-- Без скрытого значения -->\n<Checkbox\n  name=\"optional\"\n  label=\"Опциональная настройка\"\n  valueVariant=\"enabled\"\n  :valueVariantHide=\"null\"\n/>\n<!-- Отправляется только при отметке: optional=enabled -->\n<!-- Без отметки поле не отправляется -->\n</template>\n",
			language: "html"
		})
	] });
}
function ya(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(va, { ...e })
	}) : va(e);
}
//#endregion
//#region src/media/mdx/Checkbox/wikiMdxCheckbox.ts
var ba = {
	name: "Checkbox",
	descriptions: {
		checkbox: {
			en: la,
			ru: da
		},
		indeterminate: {
			en: pa,
			ru: ha
		},
		value: {
			en: _a,
			ru: ya
		}
	}
};
//#endregion
//#region src/media/mdx/Chip/chip.en.mdx
function xa(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "Compact interactive element for representing input, attributes, actions, and filters in the user interface." }),
		"\n",
		o(t.p, { children: "Chip provides a unified component for displaying discrete information in a compact format with support for selection states, icons, adaptive behavior, and various visual variants (input, assistive). Inherits Button functionality while adding specialized styling and semantics for working with tags, filters, statuses, and user input. Ensures a consistent API for creating interactive chips with support for clicks, disabled/selected states, and icon integration." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Core capabilities:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Button inheritance (icons, progress, click events)" }),
			"\n",
			o(t.li, { children: "Visual variants (input, assistive) for different contexts" }),
			"\n",
			o(t.li, { children: "State management (selected, disabled, focus, readonly)" }),
			"\n",
			o(t.li, { children: "Adaptive behavior (adaptive, container) for different screen sizes" }),
			"\n",
			o(t.li, { children: "Customizable text alignment (textAlign: left/center/right)" }),
			"\n",
			o(t.li, { children: "Icon support (icon, iconTrailing) and progress indicator" }),
			"\n",
			o(t.li, { children: "Skeleton state integration for loading" }),
			"\n",
			o(t.li, { children: "Value and detail passing for element identification" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Tags and labels for content categorization" }),
			"\n",
			o(t.li, { children: "Filters in search interfaces and catalogs" }),
			"\n",
			o(t.li, { children: "Displaying user-entered data (emails, contacts)" }),
			"\n",
			o(t.li, { children: "Statuses and state indicators" }),
			"\n",
			o(t.li, { children: "Assistive elements (hints, recommendations)" }),
			"\n",
			o(t.li, { children: "Selectable options in forms and lists" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedFilters = ref(['active', 'verified'])\nconst tags = ref(['Vue', 'TypeScript', 'UI'])\n\nconst toggleFilter = (filter) => {\nconst index = selectedFilters.value.indexOf(filter)\nif (index > -1) {\n  selectedFilters.value.splice(index, 1)\n} else {\n  selectedFilters.value.push(filter)\n}\n}\n<\/script>\n\n<template>\n<!-- Basic chip -->\n<Chip>Standard</Chip>\n\n<!-- Input chip for user input -->\n<Chip input icon=\"person\">Contact</Chip>\n\n<!-- Assistive chip for hints -->\n<Chip assistive icon=\"lightbulb\">Recommendation</Chip>\n\n<!-- Filters with selection state -->\n<Chip\n  v-for=\"filter in ['active', 'pending', 'verified']\"\n  :key=\"filter\"\n  :selected=\"selectedFilters.includes(filter)\"\n  @click=\"toggleFilter(filter)\"\n>\n  {{ filter }}\n</Chip>\n\n<!-- With data passing -->\n<Chip\n  value=\"filter-tag\"\n  :detail=\"{ category: 'status', type: 'active' }\"\n  @click=\"handleChipClick\"\n>\n  Active\n</Chip>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Chip inherits all Button functionality, including events, icons, and progress indicators, while adding specialized styling for compact interface elements." }),
			"\n"
		] })
	] });
}
function Sa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(xa, { ...e })
	}) : xa(e);
}
//#endregion
//#region src/media/mdx/Chip/chip.ru.mdx
function Ca(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Компактный интерактивный элемент для представления ввода, атрибутов, действий и фильтров в пользовательском интерфейсе." }),
		"\n",
		o(t.p, { children: "Chip предоставляет унифицированный компонент для отображения дискретной информации в компактном формате с поддержкой состояний выбора, иконок, адаптивного поведения и различных визуальных вариантов (input, assistive). Наследует функциональность Button, добавляя специализированную стилизацию и семантику для работы с тегами, фильтрами, статусами и пользовательским вводом. Обеспечивает согласованный API для создания интерактивных чипов с поддержкой кликов, состояния disabled/selected и интеграцией иконок." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Наследование от Button (иконки, прогресс, события клика)" }),
			"\n",
			o(t.li, { children: "Визуальные варианты (input, assistive) для разных контекстов" }),
			"\n",
			o(t.li, { children: "Управление состояниями (selected, disabled, focus, readonly)" }),
			"\n",
			o(t.li, { children: "Адаптивное поведение (adaptive, container) для разных размеров экрана" }),
			"\n",
			o(t.li, { children: "Настраиваемое выравнивание текста (textAlign: left/center/right)" }),
			"\n",
			o(t.li, { children: "Поддержка иконок (icon, iconTrailing) и прогресс-индикатора" }),
			"\n",
			o(t.li, { children: "Интеграция скелетон-состояния для загрузки" }),
			"\n",
			o(t.li, { children: "Передача value и detail для идентификации элементов" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Теги и метки для категоризации контента" }),
			"\n",
			o(t.li, { children: "Фильтры в поисковых интерфейсах и каталогах" }),
			"\n",
			o(t.li, { children: "Отображение введенных пользователем данных (email, контакты)" }),
			"\n",
			o(t.li, { children: "Статусы и индикаторы состояния" }),
			"\n",
			o(t.li, { children: "Вспомогательные элементы (подсказки, рекомендации)" }),
			"\n",
			o(t.li, { children: "Выбираемые опции в формах и списках" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedFilters = ref(['active', 'verified'])\nconst tags = ref(['Vue', 'TypeScript', 'UI'])\n\nconst toggleFilter = (filter) => {\nconst index = selectedFilters.value.indexOf(filter)\nif (index > -1) {\n  selectedFilters.value.splice(index, 1)\n} else {\n  selectedFilters.value.push(filter)\n}\n}\n<\/script>\n\n<template>\n<!-- Базовый чип -->\n<Chip>Стандарт</Chip>\n\n<!-- Input чип для пользовательского ввода -->\n<Chip input icon=\"person\">Контакт</Chip>\n\n<!-- Assistive чип для подсказок -->\n<Chip assistive icon=\"lightbulb\">Рекомендация</Chip>\n\n<!-- Фильтры с состоянием выбора -->\n<Chip\n  v-for=\"filter in ['active', 'pending', 'verified']\"\n  :key=\"filter\"\n  :selected=\"selectedFilters.includes(filter)\"\n  @click=\"toggleFilter(filter)\"\n>\n  {{ filter }}\n</Chip>\n\n<!-- С передачей данных -->\n<Chip\n  value=\"filter-tag\"\n  :detail=\"{ category: 'status', type: 'active' }\"\n  @click=\"handleChipClick\"\n>\n  Активный\n</Chip>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Chip наследует всю функциональность Button, включая события, иконки и прогресс-индикаторы, добавляя специализированную стилизацию для компактных элементов интерфейса." }),
			"\n"
		] })
	] });
}
function wa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ca, { ...e })
	}) : Ca(e);
}
//#endregion
//#region src/media/mdx/Chip/assistive.en.mdx
function Ta(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Assistive chips (assistive)" }),
		"\n",
		s(t.p, { children: [
			"The Chip component supports assistive mode through the ",
			o(t.code, { children: "assistive" }),
			" property. In this mode, chips have a special visual style to help users complete tasks:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Distinctive style" }), " - visually stand out among other elements"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Hints and recommendations" }), " - suggest action options or auto-completion"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "User guidance" }), " - help navigate the interface"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Icon support" }), " - improve understanding of purpose through visual elements"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Assistive mode is especially useful for creating hint systems, recommendations, and helper actions that guide users to the right solutions without excessive visual noise." }),
		"\n",
		o(i, {
			code: "\n<Chip assistive icon=\"lightbulb\">Recommendation</Chip>\n<Chip assistive icon=\"check\">Hint</Chip>\n<Chip assistive>Auto-complete</Chip>\n",
			language: "html"
		})
	] });
}
function Ea(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ta, { ...e })
	}) : Ta(e);
}
//#endregion
//#region src/media/mdx/Chip/assistive.ru.mdx
function Da(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Вспомогательные чипы (assistive)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Chip поддерживает вспомогательный режим через свойство ",
			o(t.code, { children: "assistive" }),
			". В этом режиме чипы имеют специальный визуальный стиль для помощи пользователям в выполнении задач:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Отличительный стиль" }), " - визуально выделяются среди других элементов"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Подсказки и рекомендации" }), " - предлагают варианты действий или автодополнения"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Направление пользователя" }), " - помогают ориентироваться в интерфейсе"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Поддержка иконок" }), " - улучшают понимание назначения через визуальные элементы"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Assistive режим особенно полезен для создания систем подсказок, рекомендаций и вспомогательных действий, которые направляют пользователя к нужным решениям без излишнего визуального шума." }),
		"\n",
		o(i, {
			code: "\n<Chip assistive icon=\"lightbulb\">Рекомендация</Chip>\n<Chip assistive icon=\"check\">Подсказка</Chip>\n<Chip assistive>Автодополнение</Chip>\n",
			language: "html"
		})
	] });
}
function Oa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Da, { ...e })
	}) : Da(e);
}
//#endregion
//#region src/media/mdx/Chip/input.en.mdx
function ka(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Input chips (input)" }),
		"\n",
		s(t.p, { children: [
			"The Chip component supports input mode through the ",
			o(t.code, { children: "input" }),
			" property. In this mode, chips have an input field style and represent discrete information entered by the user:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Form-like appearance" }), " - visually resemble input elements"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "User data" }), " - display tags, contacts, keywords"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Interactivity" }), " - can be removed or edited"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Grouping" }), " - often used in sets for multiple selections"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Input mode is especially useful for displaying data that users have actively entered or selected, making them visually distinct from static interface elements." }),
		"\n",
		o(i, {
			code: "\n<Chip input icon=\"person\">Contact</Chip>\n<Chip input icon=\"tag\">Tag</Chip>\n<Chip input selected>Selected</Chip>\n",
			language: "html"
		})
	] });
}
function Aa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ka, { ...e })
	}) : ka(e);
}
//#endregion
//#region src/media/mdx/Chip/input.ru.mdx
function ja(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Input чипы (input)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Chip поддерживает режим input через свойство ",
			o(t.code, { children: "input" }),
			". В этом режиме чипы имеют стиль полей ввода и представляют дискретную информацию, введенную пользователем:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Внешний вид формы" }), " - визуально напоминают элементы ввода"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Пользовательские данные" }), " - отображают теги, контакты, ключевые слова"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Интерактивность" }), " - могут быть удалены или отредактированы"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Группировка" }), " - часто используются в наборах для множественного выбора"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Input режим особенно полезен для отображения данных, которые пользователь активно вводил или выбирал, делая их визуально отличимыми от статических элементов интерфейса." }),
		"\n",
		o(i, {
			code: "\n<Chip input icon=\"person\">Контакт</Chip>\n<Chip input icon=\"tag\">Тег</Chip>\n<Chip input selected>Выбранный</Chip>\n",
			language: "html"
		})
	] });
}
function Ma(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ja, { ...e })
	}) : ja(e);
}
//#endregion
//#region src/media/mdx/Chip/wikiMdxChip.ts
var Na = {
	name: "Chip",
	descriptions: {
		chip: {
			en: Sa,
			ru: wa
		},
		assistive: {
			en: Ea,
			ru: Oa
		},
		input: {
			en: Aa,
			ru: Ma
		}
	}
};
//#endregion
//#region src/media/mdx/ChipGroup/chipGroup.en.mdx
function Pa(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for managing a collection of chips with selection functionality and flexible data binding." }),
		"\n",
		o(t.p, { children: "ChipGroup renders multiple Chip components from a data array, handles single or multiple selection states, and provides customization options for each chip. The component supports dynamic list rendering, conditional icon display based on selection, and flexible data structure mapping through key properties." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Single or multiple item selection" }),
			"\n",
			o(t.li, { children: "Dynamic list rendering from data array" }),
			"\n",
			o(t.li, { children: "Customizable chip appearance through chipAttrs" }),
			"\n",
			o(t.li, { children: "Conditional icon display based on selection state" }),
			"\n",
			o(t.li, { children: "Flexible data binding with keyLabel and keyValue" }),
			"\n",
			o(t.li, { children: "Event handling for user interactions" }),
			"\n",
			o(t.li, { children: "Support for complex data structures" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Filter chips for search and filtering" }),
			"\n",
			o(t.li, { children: "Tag selection in forms" }),
			"\n",
			o(t.li, { children: "Category selection interfaces" }),
			"\n",
			o(t.li, { children: "Multiple choice options" }),
			"\n",
			o(t.li, { children: "Status or type selectors" }),
			"\n",
			o(t.li, { children: "Dynamic lists with selection" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['option1'])\n\nconst options = [\n{ value: 'option1', label: 'Option 1', icon: 'star' },\n{ value: 'option2', label: 'Option 2', icon: 'favorite' },\n{ value: 'option3', label: 'Option 3', icon: 'bookmark' }\n]\n\nconst handleClick = (event) => {\nconsole.log('Chip clicked:', event)\n}\n<\/script>\n\n<template>\n<ChipGroup\n  v-model:selected=\"selected\"\n  :list=\"options\"\n  key-value=\"value\"\n  key-label=\"label\"\n  :icon-when-selected=\"true\"\n  @click=\"handleClick\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Fa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pa, { ...e })
	}) : Pa(e);
}
//#endregion
//#region src/media/mdx/ChipGroup/chipGroup.ru.mdx
function Ia(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для управления коллекцией чипов с функциональностью выбора и гибким связыванием данных." }),
		"\n",
		o(t.p, { children: "ChipGroup отображает множество компонентов Chip из массива данных, управляет одиночным или множественным выбором и предоставляет возможности настройки каждого чипа. Компонент поддерживает динамический рендеринг списка, условное отображение иконок в зависимости от выбора и гибкое сопоставление структуры данных через ключевые свойства." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Одиночный или множественный выбор элементов" }),
			"\n",
			o(t.li, { children: "Динамический рендеринг списка из массива данных" }),
			"\n",
			o(t.li, { children: "Настраиваемый внешний вид чипов через chipAttrs" }),
			"\n",
			o(t.li, { children: "Условное отображение иконок в зависимости от состояния выбора" }),
			"\n",
			o(t.li, { children: "Гибкое связывание данных через keyLabel и keyValue" }),
			"\n",
			o(t.li, { children: "Обработка событий для взаимодействия пользователя" }),
			"\n",
			o(t.li, { children: "Поддержка сложных структур данных" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Фильтр-чипы для поиска и фильтрации" }),
			"\n",
			o(t.li, { children: "Выбор тегов в формах" }),
			"\n",
			o(t.li, { children: "Интерфейсы выбора категорий" }),
			"\n",
			o(t.li, { children: "Варианты множественного выбора" }),
			"\n",
			o(t.li, { children: "Селекторы статусов или типов" }),
			"\n",
			o(t.li, { children: "Динамические списки с выбором" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['option1'])\n\nconst options = [\n{ value: 'option1', label: 'Опция 1', icon: 'star' },\n{ value: 'option2', label: 'Опция 2', icon: 'favorite' },\n{ value: 'option3', label: 'Опция 3', icon: 'bookmark' }\n]\n\nconst handleClick = (event) => {\nconsole.log('Чип нажат:', event)\n}\n<\/script>\n\n<template>\n<ChipGroup\n  v-model:selected=\"selected\"\n  :list=\"options\"\n  key-value=\"value\"\n  key-label=\"label\"\n  :icon-when-selected=\"true\"\n  @click=\"handleClick\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function La(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ia, { ...e })
	}) : Ia(e);
}
//#endregion
//#region src/media/mdx/ChipGroup/selected.en.mdx
function Ra(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Selection Management" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "selected" }),
			" and ",
			o(t.code, { children: "iconWhenSelected" }),
			" are designed for managing chip selection state."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "selected" }),
				" — identifier(s) of selected item (string, number, array of strings/numbers, or ",
				o(t.code, { children: "undefined" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconWhenSelected" }), " — shows chip icons only when item is selected (default: icons always visible)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "selected" }),
			" property determines which chips will be highlighted. Accepts a single value for single selection or an array of values for multiple selection. Values are matched with list items by their index or value if the list contains simple data types."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['option1'])\n<\/script>\n\n<template>\n<!-- Simple array selection -->\n<ChipGroup\n  v-model:selected=\"selected\"\n  :list=\"['Option 1', 'Option 2']\"\n/>\n\n<!-- Object array with keys -->\n<ChipGroup\n  v-model:selected=\"selected\"\n  :list=\"[\n    { id: 'option1', name: 'First Option' },\n    { id: 'option2', name: 'Second Option' }\n  ]\"\n  key-value=\"id\"\n  key-label=\"name\"\n/>\n\n<!-- Icons only when selected -->\n<ChipGroup\n  v-model:selected=\"selected\"\n  :list=\"[\n    { id: 'option1', name: 'Option 1', icon: 'check' },\n    { id: 'option2', name: 'Option 2', icon: 'check' }\n  ]\"\n  key-value=\"id\"\n  key-label=\"name\"\n  :icon-when-selected=\"true\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function za(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ra, { ...e })
	}) : Ra(e);
}
//#endregion
//#region src/media/mdx/ChipGroup/selected.ru.mdx
function Ba(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление выбором" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "selected" }),
			" и ",
			o(t.code, { children: "iconWhenSelected" }),
			" предназначены для управления состоянием выбора чипов."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "selected" }),
				" — идентификатор(ы) выбранного элемента (строка, число, массив строк/чисел или ",
				o(t.code, { children: "undefined" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconWhenSelected" }), " — показывает иконки чипов только при выборе элемента (по умолчанию: иконки всегда видимы)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "selected" }),
			" определяет, какие чипы будут выделены. Принимает одно значение для единичного выбора или массив значений для множественного выбора. Значения сопоставляются с элементами списка по их индексу или значению, если список содержит простые типы данных."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['option1'])\n<\/script>\n\n<template>\n<!-- Выбор из простого массива -->\n<ChipGroup\n  v-model:selected=\"selected\"\n  :list=\"['Опция 1', 'Опция 2']\"\n/>\n\n<!-- Массив объектов с ключами -->\n<ChipGroup\n  v-model:selected=\"selected\"\n  :list=\"[\n    { id: 'option1', name: 'Первая опция' },\n    { id: 'option2', name: 'Вторая опция' }\n  ]\"\n  key-value=\"id\"\n  key-label=\"name\"\n/>\n\n<!-- Иконки только при выборе -->\n<ChipGroup\n  v-model:selected=\"selected\"\n  :list=\"[\n    { id: 'option1', name: 'Опция 1', icon: 'check' },\n    { id: 'option2', name: 'Опция 2', icon: 'check' }\n  ]\"\n  key-value=\"id\"\n  key-label=\"name\"\n  :icon-when-selected=\"true\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Va(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ba, { ...e })
	}) : Ba(e);
}
//#endregion
//#region src/media/mdx/ChipGroup/wikiMdxChipGroup.ts
var Ha = {
	name: "ChipGroup",
	descriptions: {
		chipGroup: {
			en: Fa,
			ru: La
		},
		selected: {
			en: za,
			ru: Va
		}
	}
};
//#endregion
//#region src/media/mdx/Dialog/dialog.en.mdx
function Ua(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating modal dialog windows with icon support, titles, and predefined action buttons." }),
		"\n",
		o(t.p, { children: "Dialog is a specialized wrapper over the Modal component with additional capabilities for displaying informational messages, confirmations, and notifications. The component automatically displays an information block with icon, title, and description, and provides predefined OK and Close buttons. Supports success and error states with automatic icon switching, image positioning, and full content customization." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Modal window with centering and background blocking" }),
			"\n",
			o(t.li, { children: "Icon support with automatic switching for success/error states" }),
			"\n",
			o(t.li, { children: "Information block with icon, title, and description" }),
			"\n",
			o(t.li, { children: "Predefined OK and Close buttons with customization options" }),
			"\n",
			o(t.li, { children: "Image positioning at top or left" }),
			"\n",
			o(t.li, { children: "Integration with Window, Bars, Actions, Icon components" }),
			"\n",
			o(t.li, { children: "Closing by ESC key and overlay click" }),
			"\n",
			o(t.li, { children: "ok and close events for handling user actions" }),
			"\n",
			o(t.li, { children: "Slot support for content customization" }),
			"\n",
			o(t.li, { children: "Responsive design for mobile devices" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "User action confirmations" }),
			"\n",
			o(t.li, { children: "Success or error notifications" }),
			"\n",
			o(t.li, { children: "Informational messages" }),
			"\n",
			o(t.li, { children: "Warnings and alerts" }),
			"\n",
			o(t.li, { children: "Simple forms with minimal fields" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\nconst showSuccess = ref(false)\n\nconst handleConfirm = () => {\nconsole.log('Action confirmed')\nisOpen.value = false\nshowSuccess.value = true\n}\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Open Dialog</button>\n\n<Dialog\n  v-model:open=\"isOpen\"\n  label=\"Confirmation\"\n  description=\"Are you sure you want to perform this action?\"\n  @ok=\"handleConfirm\"\n  @close=\"isOpen = false\"\n>\n  <template #default>\n    <div class=\"additional-info\">\n      Additional information can be placed here.\n    </div>\n  </template>\n</Dialog>\n\n<Dialog\n  v-model:open=\"showSuccess\"\n  :success=\"true\"\n  label=\"Success\"\n  description=\"Your action has been completed successfully.\"\n  :buttonClose=\"null\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Wa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ua, { ...e })
	}) : Ua(e);
}
//#endregion
//#region src/media/mdx/Dialog/dialog.ru.mdx
function Ga(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания модальных диалоговых окон с поддержкой иконок, заголовков и предустановленных кнопок действий." }),
		"\n",
		o(t.p, { children: "Dialog представляет собой специализированную обертку над компонентом Modal с дополнительными возможностями для отображения информационных сообщений, подтверждений и уведомлений. Компонент автоматически отображает информационный блок с иконкой, заголовком и описанием, а также предоставляет предустановленные кнопки OK и Закрыть. Поддерживает состояния успеха и ошибки с автоматическим переключением иконок, позиционирование изображения и полную кастомизацию контента." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Модальное окно с центрированием и блокировкой фона" }),
			"\n",
			o(t.li, { children: "Поддержка иконок с автоматическим переключением для состояний успеха/ошибки" }),
			"\n",
			o(t.li, { children: "Информационный блок с иконкой, заголовком и описанием" }),
			"\n",
			o(t.li, { children: "Предустановленные кнопки OK и Закрыть с возможностью кастомизации" }),
			"\n",
			o(t.li, { children: "Позиционирование изображения сверху или слева" }),
			"\n",
			o(t.li, { children: "Интеграция с компонентами Window, Bars, Actions, Icon" }),
			"\n",
			o(t.li, { children: "Закрытие по ESC и клику на overlay" }),
			"\n",
			o(t.li, { children: "События ok и close для обработки действий пользователя" }),
			"\n",
			o(t.li, { children: "Поддержка слотов для кастомизации контента" }),
			"\n",
			o(t.li, { children: "Адаптивный дизайн для мобильных устройств" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Подтверждения действий пользователя" }),
			"\n",
			o(t.li, { children: "Уведомления об успехе или ошибке" }),
			"\n",
			o(t.li, { children: "Информационные сообщения" }),
			"\n",
			o(t.li, { children: "Предупреждения и алерты" }),
			"\n",
			o(t.li, { children: "Простые формы с минимальным количеством полей" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\nconst showSuccess = ref(false)\n\nconst handleConfirm = () => {\nconsole.log('Действие подтверждено')\nisOpen.value = false\nshowSuccess.value = true\n}\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Открыть диалог</button>\n\n<Dialog\n  v-model:open=\"isOpen\"\n  label=\"Подтверждение\"\n  description=\"Вы уверены, что хотите выполнить это действие?\"\n  @ok=\"handleConfirm\"\n  @close=\"isOpen = false\"\n>\n  <template #default>\n    <div class=\"additional-info\">\n      Дополнительная информация может быть размещена здесь.\n    </div>\n  </template>\n</Dialog>\n\n<Dialog\n  v-model:open=\"showSuccess\"\n  :success=\"true\"\n  label=\"Успешно\"\n  description=\"Ваше действие выполнено успешно.\"\n  :buttonClose=\"null\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Ka(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ga, { ...e })
	}) : Ga(e);
}
//#endregion
//#region src/media/mdx/Dialog/states.en.mdx
function qa(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Success and error states" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "success" }),
			", ",
			o(t.code, { children: "error" }),
			", ",
			o(t.code, { children: "iconSuccess" }),
			" and ",
			o(t.code, { children: "iconError" }),
			" are designed to control the visual state of the dialog and automatically display corresponding icons."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "success" }), " — sets the dialog to success state with automatic icon"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "error" }), " — sets the dialog to error state with automatic icon"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconSuccess" }), " — sets the icon for success state (default 'check_circle')"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconError" }), " — sets the icon for error state (default 'error')"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: if ",
			o(t.code, { children: "success" }),
			" or ",
			o(t.code, { children: "error" }),
			" are not set or equal to ",
			o(t.code, { children: "false" }),
			", the dialog is displayed in a neutral state. When ",
			o(t.code, { children: "success=\"true\"" }),
			" is activated, the component automatically displays the success icon from ",
			o(t.code, { children: "iconSuccess" }),
			". When ",
			o(t.code, { children: "error=\"true\"" }),
			" is activated, the error icon from ",
			o(t.code, { children: "iconError" }),
			" is displayed. Properties ",
			o(t.code, { children: "iconSuccess" }),
			" and ",
			o(t.code, { children: "iconError" }),
			" allow overriding standard icons with custom ones, providing flexibility in visual design of dialog messages."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst showSuccess = ref(false)\nconst showError = ref(false)\n<\/script>\n\n<template>\n<!-- Success dialog -->\n<Dialog\n  v-model:open=\"showSuccess\"\n  :success=\"true\"\n  label=\"Operation completed\"\n  description=\"Your changes have been saved successfully.\"\n/>\n\n<!-- Error dialog -->\n<Dialog\n  v-model:open=\"showError\"\n  :error=\"true\"\n  label=\"Operation failed\"\n  description=\"Unable to complete the operation. Please try again.\"\n/>\n\n<!-- With custom icons -->\n<Dialog\n  v-model:open=\"showSuccess\"\n  :success=\"true\"\n  iconSuccess=\"done_all\"\n  label=\"All done\"\n  description=\"Process completed successfully.\"\n/>\n\n<!-- Error with custom icon -->\n<Dialog\n  v-model:open=\"showError\"\n  :error=\"true\"\n  iconError=\"warning\"\n  label=\"Warning\"\n  description=\"Issues detected during data processing.\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Ja(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(qa, { ...e })
	}) : qa(e);
}
//#endregion
//#region src/media/mdx/Dialog/states.ru.mdx
function Ya(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Состояния успеха и ошибки" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "success" }),
			", ",
			o(t.code, { children: "error" }),
			", ",
			o(t.code, { children: "iconSuccess" }),
			" и ",
			o(t.code, { children: "iconError" }),
			" предназначены для управления визуальным состоянием диалога и автоматического отображения соответствующих иконок."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "success" }), " — переводит диалог в состояние успеха с автоматической иконкой"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "error" }), " — переводит диалог в состояние ошибки с автоматической иконкой"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconSuccess" }), " — задаёт иконку для состояния успеха (по умолчанию 'check_circle')"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "iconError" }), " — задаёт иконку для состояния ошибки (по умолчанию 'error')"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: если ",
			o(t.code, { children: "success" }),
			" или ",
			o(t.code, { children: "error" }),
			" не заданы или равны ",
			o(t.code, { children: "false" }),
			", диалог отображается в нейтральном состоянии. При активации ",
			o(t.code, { children: "success=\"true\"" }),
			", компонент автоматически отображает иконку успеха из ",
			o(t.code, { children: "iconSuccess" }),
			". При активации ",
			o(t.code, { children: "error=\"true\"" }),
			", отображается иконка ошибки из ",
			o(t.code, { children: "iconError" }),
			". Свойства ",
			o(t.code, { children: "iconSuccess" }),
			" и ",
			o(t.code, { children: "iconError" }),
			" позволяют переопределить стандартные иконки на пользовательские, обеспечивая гибкость визуального оформления диалоговых сообщений."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst showSuccess = ref(false)\nconst showError = ref(false)\n<\/script>\n\n<template>\n<!-- Диалог успеха -->\n<Dialog\n  v-model:open=\"showSuccess\"\n  :success=\"true\"\n  label=\"Операция выполнена\"\n  description=\"Ваши изменения успешно сохранены.\"\n/>\n\n<!-- Диалог ошибки -->\n<Dialog\n  v-model:open=\"showError\"\n  :error=\"true\"\n  label=\"Ошибка выполнения\"\n  description=\"Не удалось выполнить операцию. Попробуйте ещё раз.\"\n/>\n\n<!-- С пользовательскими иконками -->\n<Dialog\n  v-model:open=\"showSuccess\"\n  :success=\"true\"\n  iconSuccess=\"done_all\"\n  label=\"Всё готово\"\n  description=\"Процесс завершён успешно.\"\n/>\n\n<!-- Ошибка с кастомной иконкой -->\n<Dialog\n  v-model:open=\"showError\"\n  :error=\"true\"\n  iconError=\"warning\"\n  label=\"Внимание\"\n  description=\"Обнаружены проблемы при обработке данных.\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Xa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ya, { ...e })
	}) : Ya(e);
}
//#endregion
//#region src/media/mdx/Dialog/buttons.en.mdx
function Za(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Action buttons" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "buttonOk" }),
			", ",
			o(t.code, { children: "buttonClose" }),
			", and ",
			o(t.code, { children: "actionsList" }),
			" control action buttons in the dialog window through the built-in Actions component."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "buttonOk" }), " — confirmation button"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "buttonClose" }), " — close button"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "clickOkAndClose" }), " — automatic dialog closing when OK button is clicked"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "actionsList" }), " — direct access to the Actions component button list"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"With ",
			o(t.code, { children: "clickOkAndClose=\"true\"" }),
			" OK button automatically closes the dialog after clicking."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<!-- Basic usage -->\n<Dialog\n  buttonOk=\"Confirm\"\n  buttonClose=\"Cancel\"\n  label=\"Delete file\"\n  @ok=\"handleDelete\"\n/>\n\n<!-- Hide close button -->\n<Dialog\n  buttonOk=\"Got it\"\n  :buttonClose=\"null\"\n  label=\"Information\"\n/>\n\n<!-- Using actionsList -->\n<Dialog\n  :actionsList=\"[\n    { label: 'Save', onClick: handleSave },\n    { label: 'Cancel', outline: true, onClick: handleCancel }\n  ]\"\n  label=\"Save\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Qa(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Za, { ...e })
	}) : Za(e);
}
//#endregion
//#region src/media/mdx/Dialog/buttons.ru.mdx
function $a(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Кнопки действий" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "buttonOk" }),
			", ",
			o(t.code, { children: "buttonClose" }),
			" и ",
			o(t.code, { children: "actionsList" }),
			" управляют кнопками действий в диалоговом окне через встроенный компонент Actions."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "buttonOk" }), " — кнопка подтверждения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "buttonClose" }), " — кнопка закрытия"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "clickOkAndClose" }), " — автоматическое закрытие диалога при нажатии кнопки OK"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "actionsList" }), " — прямой доступ к списку кнопок компонента Actions"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"При ",
			o(t.code, { children: "clickOkAndClose=\"true\"" }),
			" кнопка OK автоматически закрывает диалог после нажатия."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<!-- Базовое использование -->\n<Dialog\n  buttonOk=\"Подтвердить\"\n  buttonClose=\"Отмена\"\n  label=\"Удаление файла\"\n  @ok=\"handleDelete\"\n/>\n\n<!-- Скрытие кнопки закрытия -->\n<Dialog\n  buttonOk=\"Понятно\"\n  :buttonClose=\"null\"\n  label=\"Информация\"\n/>\n\n<!-- Использование actionsList -->\n<Dialog\n  :actionsList=\"[\n    { label: 'Сохранить', onClick: handleSave },\n    { label: 'Отмена', outline: true, onClick: handleCancel }\n  ]\"\n  label=\"Сохранение\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function eo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($a, { ...e })
	}) : $a(e);
}
//#endregion
//#region src/media/mdx/Dialog/events.en.mdx
function to(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		p: "p",
		strong: "strong",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "ok" }) }),
		"\n",
		o(t.p, { children: "Event fires when the confirmation (OK) button in the dialog is clicked." }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Parameters:" }), "\nEvent does not pass parameters."] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst showDialog = ref(false)\n\nconst handleOk = () => {\nconsole.log('User confirmed action')\nshowDialog.value = false\n// Execute action after confirmation\n}\n<\/script>\n\n<template>\n<Dialog\n  v-model:open=\"showDialog\"\n  buttonOk=\"Confirm\"\n  label=\"Delete file\"\n  description=\"Are you sure you want to delete this file?\"\n  @ok=\"handleOk\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "close" }) }),
		"\n",
		o(t.p, { children: "Event fires when the close button in the dialog is clicked." }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Parameters:" }), "\nEvent does not pass parameters."] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst showDialog = ref(false)\n\nconst handleClose = () => {\nconsole.log('User cancelled action')\nshowDialog.value = false\n}\n<\/script>\n\n<template>\n<Dialog\n  v-model:open=\"showDialog\"\n  buttonClose=\"Cancel\"\n  label=\"Confirmation\"\n  @close=\"handleClose\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Buttons can be configured via ",
				o(t.code, { children: "buttonOk" }),
				" and ",
				o(t.code, { children: "buttonClose" }),
				" properties, or hidden by passing ",
				o(t.code, { children: "null" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function no(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(to, { ...e })
	}) : to(e);
}
//#endregion
//#region src/media/mdx/Dialog/events.ru.mdx
function ro(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		p: "p",
		strong: "strong",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "ok" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике на кнопку подтверждения (OK) в диалоговом окне." }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Параметры:" }), "\nСобытие не передаёт параметров."] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst showDialog = ref(false)\n\nconst handleOk = () => {\nconsole.log('Пользователь подтвердил действие')\nshowDialog.value = false\n// Выполнение действия после подтверждения\n}\n<\/script>\n\n<template>\n<Dialog\n  v-model:open=\"showDialog\"\n  buttonOk=\"Подтвердить\"\n  label=\"Удаление файла\"\n  description=\"Вы действительно хотите удалить этот файл?\"\n  @ok=\"handleOk\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "close" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при клике на кнопку закрытия в диалоговом окне." }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Параметры:" }), "\nСобытие не передаёт параметров."] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst showDialog = ref(false)\n\nconst handleClose = () => {\nconsole.log('Пользователь отменил действие')\nshowDialog.value = false\n}\n<\/script>\n\n<template>\n<Dialog\n  v-model:open=\"showDialog\"\n  buttonClose=\"Отмена\"\n  label=\"Подтверждение\"\n  @close=\"handleClose\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Кнопки можно настроить через свойства ",
				o(t.code, { children: "buttonOk" }),
				" и ",
				o(t.code, { children: "buttonClose" }),
				", либо скрыть, передав ",
				o(t.code, { children: "null" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function io(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ro, { ...e })
	}) : ro(e);
}
//#endregion
//#region src/media/mdx/Dialog/wikiMdxDialog.ts
var ao = {
	name: "Dialog",
	descriptions: {
		dialog: {
			en: Wa,
			ru: Ka
		},
		states: {
			en: Ja,
			ru: Xa
		},
		buttons: {
			en: Qa,
			ru: eo
		},
		events: {
			en: no,
			ru: io
		}
	}
};
//#endregion
//#region src/media/mdx/Dummy/dummy.en.mdx
function oo(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "A basic Dummy placeholder component for interface prototyping and visual testing. Allows you to quickly create blocks of specific sizes and colors." }),
		"\n",
		o(t.p, { children: "Dummy is designed as a tool for developers to help structure views before actual components are implemented." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Size customization via the size property" }),
			"\n",
			o(t.li, { children: "Color scheme configuration via the palette property" }),
			"\n",
			o(t.li, { children: "Use as a space filler in layouts" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Prototyping grids and layouts" }),
			"\n",
			o(t.li, { children: "Visual testing of spacing and alignment" }),
			"\n",
			o(t.li, { children: "Placeholders for components not yet implemented" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\n<\/script>\n\n<template>\n<div class=\"dummy-examples\" style=\"display: flex; gap: 16px; flex-direction: column;\">\n  <!-- Basic Dummy -->\n  <Dummy />\n\n  <!-- Custom Size and Palette -->\n  <Dummy size=\"lg\" palette=\"blue\" />\n\n  <!-- Small Red Dummy -->\n  <Dummy size=\"sm\" palette=\"red\" />\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Dummy is designed as a universal utility component for visual planning of interface structure." }),
			"\n"
		] })
	] });
}
function so(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(oo, { ...e })
	}) : oo(e);
}
//#endregion
//#region src/media/mdx/Dummy/dummy.ru.mdx
function co(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Базовый компонент-заглушка (Dummy) для прототипирования и визуального тестирования интерфейсов. Позволяет быстро создавать блоки определенных размеров и цветов." }),
		"\n",
		o(t.p, { children: "Dummy разработан как инструмент для разработчиков, помогающий структурировать интерфейсы до внедрения реальных компонентов." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Настройка размеров через свойство size" }),
			"\n",
			o(t.li, { children: "Установка цветовых схем через свойство palette" }),
			"\n",
			o(t.li, { children: "Использование в качестве заполнителя пространства в макетах" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Прототипирование сеток и макетов" }),
			"\n",
			o(t.li, { children: "Визуальное тестирование отступов и выравнивания" }),
			"\n",
			o(t.li, { children: "Заглушки для еще не реализованных компонентов" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\n<\/script>\n\n<template>\n<div class=\"dummy-examples\" style=\"display: flex; gap: 16px; flex-direction: column;\">\n  <!-- Базовая заглушка -->\n  <Dummy />\n\n  <!-- Настройка размера и палитры -->\n  <Dummy size=\"lg\" palette=\"blue\" />\n\n  <!-- Маленькая красная заглушка -->\n  <Dummy size=\"sm\" palette=\"red\" />\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Dummy разработан как универсальный вспомогательный компонент для визуального планирования структуры интерфейса." }),
			"\n"
		] })
	] });
}
function lo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(co, { ...e })
	}) : co(e);
}
//#endregion
//#region src/media/mdx/Dummy/wikiMdxDummy.ts
var uo = {
	name: "Dummy",
	descriptions: { dummy: {
		en: so,
		ru: lo
	} }
};
//#endregion
//#region src/media/mdx/Field/field.en.mdx
function fo(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Base container for form controls that composes label, messages, counter, icons, and progress into a unified structure." }),
		"\n",
		o(t.p, { children: "Field centralizes the visual representation management of input fields, handles focus and validation states, coordinates auxiliary element positioning, and provides a consistent API for building any type of inputs. It serves as the fundamental foundation for creating consistent forms with slot support, control icons, and subcomponent integration." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Core capabilities:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Subcomponent composition (FieldLabel, FieldMessage, FieldCounter, Progress)" }),
			"\n",
			o(t.li, { children: "State management (focus, disabled, readonly, selected, block)" }),
			"\n",
			o(t.li, { children: "Slot coordination (caption, prefix, suffix, leading, trailing)" }),
			"\n",
			o(t.li, { children: "Validation highlighting based on validationMessage and forceShowMessage" }),
			"\n",
			o(t.li, { children: "Control icons with customizable visibility (cancel, arrows)" }),
			"\n",
			o(t.li, { children: "Flexible counter positioning via counterTop" }),
			"\n",
			o(t.li, { children: "Built-in helpers for sizing and icons (FieldSize, FieldIcons)" }),
			"\n",
			o(t.li, { children: "Loading progress integration and skeleton state" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Base container for Input, Select, Textarea, and other form controls" }),
			"\n",
			o(t.li, { children: "Building custom form components with unified styling" }),
			"\n",
			o(t.li, { children: "Creating fields with validation and character counters" }),
			"\n",
			o(t.li, { children: "Developing component libraries with consistent UI" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { Field } from '@dxtmisha/constructor'\n\nconst value = ref('')\n\n// Field provides structure and management\n<\/script>\n\n<template>\n<Field\n  label=\"Username\"\n  helper-message=\"Enter your name\"\n  :counter=\"value.length\"\n  counter-max=\"50\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      v-model=\"value\"\n      maxlength=\"50\"\n    />\n  </template>\n</Field>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Field is a constructor container: it does not handle data input directly, but organizes structure, classes, and auxiliary element display for any type of input fields." }),
			"\n"
		] })
	] });
}
function po(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(fo, { ...e })
	}) : fo(e);
}
//#endregion
//#region src/media/mdx/Field/field.ru.mdx
function mo(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Базовый контейнер для полей формы, который композирует метку, сообщения, счётчик, иконки и прогресс в единую структуру." }),
		"\n",
		o(t.p, { children: "Field централизует управление визуальным представлением полей ввода, обрабатывает состояния фокуса и валидации, координирует расположение вспомогательных элементов и предоставляет согласованный API для построения любых типов инпутов. Является фундаментальной основой для создания консистентных форм с поддержкой слотов, иконок управления и интеграцией подкомпонентов." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Композиция подкомпонентов (FieldLabel, FieldMessage, FieldCounter, Progress)" }),
			"\n",
			o(t.li, { children: "Управление состояниями (focus, disabled, readonly, selected, block)" }),
			"\n",
			o(t.li, { children: "Координация слотов (caption, prefix, suffix, leading, trailing)" }),
			"\n",
			o(t.li, { children: "Подсветка валидации на основе validationMessage и forceShowMessage" }),
			"\n",
			o(t.li, { children: "Иконки управления с настраиваемой видимостью (cancel, arrows)" }),
			"\n",
			o(t.li, { children: "Гибкое позиционирование счётчика через counterTop" }),
			"\n",
			o(t.li, { children: "Встроенные помощники для размеров и иконок (FieldSize, FieldIcons)" }),
			"\n",
			o(t.li, { children: "Интеграция прогресса загрузки и скелетон-состояния" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Базовый контейнер для Input, Select, Textarea и других полей ввода" }),
			"\n",
			o(t.li, { children: "Построение кастомных компонентов форм с единым стилем" }),
			"\n",
			o(t.li, { children: "Создание полей с валидацией и счётчиками символов" }),
			"\n",
			o(t.li, { children: "Разработка библиотек компонентов с консистентным UI" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { Field } from '@dxtmisha/constructor'\n\nconst value = ref('')\n\n// Field предоставляет структуру и управление\n<\/script>\n\n<template>\n<Field\n  label=\"Имя пользователя\"\n  helper-message=\"Введите ваше имя\"\n  :counter=\"value.length\"\n  counter-max=\"50\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      v-model=\"value\"\n      maxlength=\"50\"\n    />\n  </template>\n</Field>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Field — это контейнер-конструктор: он не обрабатывает ввод данных напрямую, а организует структуру, классы и отображение вспомогательных элементов для любых типов полей ввода." }),
			"\n"
		] })
	] });
}
function ho(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(mo, { ...e })
	}) : mo(e);
}
//#endregion
//#region src/media/mdx/Field/cancel.en.mdx
function go(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Clear button" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "cancel" }),
			" and ",
			o(t.code, { children: "cancelShow" }),
			" are designed to control the display of the field clear icon."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "cancel" }),
				" — clear button display mode (",
				o(t.code, { children: "auto" }),
				" or ",
				o(t.code, { children: "always" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "cancelShow" }),
				" — conditional visibility flag, used only in ",
				o(t.code, { children: "auto" }),
				" mode"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: if ",
			o(t.code, { children: "cancel" }),
			" is set to ",
			o(t.code, { children: "auto" }),
			", the clear icon is displayed only when the conditions ",
			o(t.code, { children: "cancelShow = true" }),
			" are met, the field is active (not ",
			o(t.code, { children: "disabled" }),
			"/",
			o(t.code, { children: "readonly" }),
			"), and arrow mode (",
			o(t.code, { children: "arrowCarousel" }),
			"/",
			o(t.code, { children: "arrowStepper" }),
			") is not enabled. When ",
			o(t.code, { children: "cancel = always" }),
			", the icon is displayed forcibly (except for ",
			o(t.code, { children: "disabled" }),
			"/",
			o(t.code, { children: "readonly" }),
			" or active arrows), the ",
			o(t.code, { children: "cancelShow" }),
			" value is ignored. Arrow modes take priority over the clear button — when navigation is active, cancel is hidden regardless of settings."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref, computed } from 'vue'\n\nconst value = ref('')\nconst hasValue = computed(() => value.value.length > 0)\n<\/script>\n\n<template>\n<!-- Automatic mode with condition -->\n<Field\n  label=\"Search\"\n  cancel=\"auto\"\n  :cancel-show=\"hasValue\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n\n<!-- Forced display -->\n<Field\n  label=\"Filter\"\n  cancel=\"always\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n\n<!-- With event handler -->\n<Field\n  label=\"Input\"\n  cancel=\"auto\"\n  :cancel-show=\"hasValue\"\n  @click=\"value = ''\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n</template>\n",
			language: "html"
		})
	] });
}
function _o(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(go, { ...e })
	}) : go(e);
}
//#endregion
//#region src/media/mdx/Field/cancel.ru.mdx
function vo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Кнопка очистки" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "cancel" }),
			" и ",
			o(t.code, { children: "cancelShow" }),
			" предназначены для управления отображением иконки очистки поля."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "cancel" }),
				" — режим отображения кнопки очистки (",
				o(t.code, { children: "auto" }),
				" или ",
				o(t.code, { children: "always" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "cancelShow" }),
				" — условный флаг видимости, используется только в режиме ",
				o(t.code, { children: "auto" })
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: если ",
			o(t.code, { children: "cancel" }),
			" установлен в ",
			o(t.code, { children: "auto" }),
			", иконка очистки отображается только при выполнении условий ",
			o(t.code, { children: "cancelShow = true" }),
			", поле активно (не ",
			o(t.code, { children: "disabled" }),
			"/",
			o(t.code, { children: "readonly" }),
			") и не включён режим стрелок (",
			o(t.code, { children: "arrowCarousel" }),
			"/",
			o(t.code, { children: "arrowStepper" }),
			"). При ",
			o(t.code, { children: "cancel = always" }),
			" иконка отображается принудительно (кроме случаев ",
			o(t.code, { children: "disabled" }),
			"/",
			o(t.code, { children: "readonly" }),
			" или активных стрелок), значение ",
			o(t.code, { children: "cancelShow" }),
			" игнорируется. Режимы стрелок имеют приоритет над кнопкой очистки — при активной навигации cancel скрывается независимо от настроек."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref, computed } from 'vue'\n\nconst value = ref('')\nconst hasValue = computed(() => value.value.length > 0)\n<\/script>\n\n<template>\n<!-- Автоматический режим с условием -->\n<Field\n  label=\"Поиск\"\n  cancel=\"auto\"\n  :cancel-show=\"hasValue\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n\n<!-- Принудительный показ -->\n<Field\n  label=\"Фильтр\"\n  cancel=\"always\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n\n<!-- С обработчиком события -->\n<Field\n  label=\"Ввод\"\n  cancel=\"auto\"\n  :cancel-show=\"hasValue\"\n  @click=\"value = ''\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n</template>\n",
			language: "html"
		})
	] });
}
function yo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(vo, { ...e })
	}) : vo(e);
}
//#endregion
//#region src/media/mdx/Field/arrows.en.mdx
function bo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Navigation and arrows" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "arrowCarousel" }),
			", ",
			o(t.code, { children: "arrowStepper" }),
			", ",
			o(t.code, { children: "arrowAlign" }),
			", ",
			o(t.code, { children: "disabledPrevious" }),
			", and ",
			o(t.code, { children: "disabledNext" }),
			" are designed to control built-in navigation elements."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "arrowCarousel" }), " — enables navigation arrows (left/right) for switching elements"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "arrowStepper" }), " — enables numeric step buttons (minus/plus)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "arrowAlign" }),
				" — controls horizontal position of navigation arrows (",
				o(t.code, { children: "left" }),
				", ",
				o(t.code, { children: "center" }),
				", ",
				o(t.code, { children: "right" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "disabledPrevious" }), " — disables the left button (back/minus)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "disabledNext" }), " — disables the right button (forward/plus)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: only one arrow mode is active — if ",
			o(t.code, { children: "arrowCarousel = true" }),
			", the ",
			o(t.code, { children: "arrowStepper" }),
			" mode is ignored and vice versa. When navigation mode is active, the clear button (",
			o(t.code, { children: "cancel" }),
			") is automatically hidden, as the control area takes priority. The ",
			o(t.code, { children: "disabledPrevious" }),
			" and ",
			o(t.code, { children: "disabledNext" }),
			" flags apply only to the currently active arrow mode."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst currentIndex = ref(0)\nconst items = ['Item 1', 'Item 2', 'Item 3']\nconst count = ref(5)\n<\/script>\n\n<template>\n<!-- Carousel with navigation -->\n<Field\n  label=\"Item\"\n  arrow-carousel\n  :disabled-previous=\"currentIndex === 0\"\n  :disabled-next=\"currentIndex === items.length - 1\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      :value=\"items[currentIndex]\"\n      readonly\n    />\n  </template>\n</Field>\n\n<!-- Numeric stepper -->\n<Field\n  label=\"Quantity\"\n  arrow-stepper\n  :disabled-previous=\"count <= 0\"\n  :disabled-next=\"count >= 99\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      :value=\"count\"\n      readonly\n    />\n  </template>\n</Field>\n\n<!-- Stepper with left-aligned arrows -->\n<Field\n  label=\"Value\"\n  arrow-stepper\n  arrow-align=\"left\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      :value=\"count\"\n      readonly\n    />\n  </template>\n</Field>\n\n<!-- Stepper with centered arrows -->\n<Field\n  label=\"Value\"\n  arrow-stepper\n  arrow-align=\"center\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      :value=\"count\"\n      readonly\n    />\n  </template>\n</Field>\n</template>\n",
			language: "html"
		})
	] });
}
function xo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(bo, { ...e })
	}) : bo(e);
}
//#endregion
//#region src/media/mdx/Field/arrows.ru.mdx
function So(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Навигация и стрелки" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "arrowCarousel" }),
			", ",
			o(t.code, { children: "arrowStepper" }),
			", ",
			o(t.code, { children: "arrowAlign" }),
			", ",
			o(t.code, { children: "disabledPrevious" }),
			" и ",
			o(t.code, { children: "disabledNext" }),
			" предназначены для управления встроенными элементами навигации."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "arrowCarousel" }), " — включает стрелки навигации (влево/вправо) для переключения элементов"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "arrowStepper" }), " — включает числовые шаговые кнопки (минус/плюс)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "arrowAlign" }),
				" — управляет горизонтальным расположением стрелок навигации (",
				o(t.code, { children: "left" }),
				", ",
				o(t.code, { children: "center" }),
				", ",
				o(t.code, { children: "right" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "disabledPrevious" }), " — отключает левую кнопку (назад/минус)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "disabledNext" }), " — отключает правую кнопку (вперёд/плюс)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: активен только один режим стрелок — если ",
			o(t.code, { children: "arrowCarousel = true" }),
			", режим ",
			o(t.code, { children: "arrowStepper" }),
			" игнорируется и наоборот. При активном режиме навигации кнопка очистки (",
			o(t.code, { children: "cancel" }),
			") автоматически скрывается, так как область управления имеет приоритет. Флаги ",
			o(t.code, { children: "disabledPrevious" }),
			" и ",
			o(t.code, { children: "disabledNext" }),
			" применяются только к текущему активному режиму стрелок."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst currentIndex = ref(0)\nconst items = ['Item 1', 'Item 2', 'Item 3']\nconst count = ref(5)\n<\/script>\n\n<template>\n<!-- Карусель с навигацией -->\n<Field\n  label=\"Элемент\"\n  arrow-carousel\n  :disabled-previous=\"currentIndex === 0\"\n  :disabled-next=\"currentIndex === items.length - 1\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      :value=\"items[currentIndex]\"\n      readonly\n    />\n  </template>\n</Field>\n\n<!-- Числовой степпер -->\n<Field\n  label=\"Количество\"\n  arrow-stepper\n  :disabled-previous=\"count <= 0\"\n  :disabled-next=\"count >= 99\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      :value=\"count\"\n      readonly\n    />\n  </template>\n</Field>\n\n<!-- Степпер со стрелками слева -->\n<Field\n  label=\"Значение\"\n  arrow-stepper\n  arrow-align=\"left\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      :value=\"count\"\n      readonly\n    />\n  </template>\n</Field>\n\n<!-- Степпер с центрированными стрелками -->\n<Field\n  label=\"Значение\"\n  arrow-stepper\n  arrow-align=\"center\"\n>\n  <template #default=\"{ id, className }\">\n    <input\n      :id=\"id\"\n      :class=\"className\"\n      :value=\"count\"\n      readonly\n    />\n  </template>\n</Field>\n</template>\n",
			language: "html"
		})
	] });
}
function Co(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(So, { ...e })
	}) : So(e);
}
//#endregion
//#region src/media/mdx/Field/value.en.mdx
function wo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Value state" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "value" }),
			" and ",
			o(t.code, { children: "isValue" }),
			" are designed to control the visual filled state of the field independently of the actual content."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value" }), " — actual field content (string/number) passed to the inner element via slot"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "isValue" }), " — forcibly activates the visual \"filled\" state even when the value is empty"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: ",
			o(t.code, { children: "Field" }),
			" reads ",
			o(t.code, { children: "value" }),
			" reactively through ",
			o(t.code, { children: "focusValue" }),
			" for visual purposes (displaying text in scoreboard, caption handling), but does not manage it directly or validate it. If the real value is non-empty, the field automatically receives the visual \"filled\" state regardless of ",
			o(t.code, { children: "isValue" }),
			". When the value is empty, the ",
			o(t.code, { children: "isValue = true" }),
			" flag forcibly activates the visual filled mode (floating label, corresponding classes), which is useful for preloads, masks, or delayed data insertion."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('')\nconst isLoading = ref(true)\n<\/script>\n\n<template>\n<!-- Normal behavior -->\n<Field label=\"Name\">\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n\n<!-- Forced \"filled\" state -->\n<Field\n  label=\"Email\"\n  :value=\"value\"\n  :is-value=\"true\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n\n<!-- Preload with visual state -->\n<Field\n  label=\"Data\"\n  :is-value=\"isLoading\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n</template>\n",
			language: "html"
		})
	] });
}
function To(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(wo, { ...e })
	}) : wo(e);
}
//#endregion
//#region src/media/mdx/Field/value.ru.mdx
function Eo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Состояние значения" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "value" }),
			" и ",
			o(t.code, { children: "isValue" }),
			" предназначены для управления визуальным состоянием заполненности поля независимо от фактического содержимого."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value" }), " — фактическое содержимое поля (строка/число), передаваемое во внутренний элемент через слот"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "isValue" }), " — принудительно активирует визуальное состояние \"заполнено\" даже при пустом значении"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: ",
			o(t.code, { children: "Field" }),
			" считывает ",
			o(t.code, { children: "value" }),
			" реактивно через ",
			o(t.code, { children: "focusValue" }),
			" для визуальных целей (отображение текста в scoreboard, работа с caption), но не управляет им напрямую и не валидирует. Если реальное значение непустое, поле автоматически получает визуальное состояние \"заполнено\" независимо от ",
			o(t.code, { children: "isValue" }),
			". При пустом значении флаг ",
			o(t.code, { children: "isValue = true" }),
			" принудительно активирует визуальный режим заполненности (плавающая метка, соответствующие классы), что полезно для прелоадов, масок или отложенной подстановки данных."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('')\nconst isLoading = ref(true)\n<\/script>\n\n<template>\n<!-- Обычное поведение -->\n<Field label=\"Имя\">\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n\n<!-- Принудительное состояние \"заполнено\" -->\n<Field\n  label=\"Email\"\n  :value=\"value\"\n  :is-value=\"true\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n\n<!-- Прелоад с визуальным состоянием -->\n<Field\n  label=\"Данные\"\n  :is-value=\"isLoading\"\n>\n  <template #default=\"{ id, className }\">\n    <input :id=\"id\" :class=\"className\" v-model=\"value\" />\n  </template>\n</Field>\n</template>\n",
			language: "html"
		})
	] });
}
function Do(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Eo, { ...e })
	}) : Eo(e);
}
//#endregion
//#region src/media/mdx/Field/width.en.mdx
function Oo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Field width" }),
		"\n",
		s(t.p, { children: [
			"Property ",
			o(t.code, { children: "width" }),
			" defines the horizontal size of the Field container."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"any valid CSS value (",
				o(t.code, { children: "'320px'" }),
				", ",
				o(t.code, { children: "'48rem'" }),
				", ",
				o(t.code, { children: "'50%'" }),
				", ",
				o(t.code, { children: "'min(100%,320px)'" }),
				", ",
				o(t.code, { children: "'clamp(240px,40vw,480px)'" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				"design system tokens (e.g., ",
				o(t.code, { children: "'sm'" }),
				", ",
				o(t.code, { children: "'md'" }),
				", ",
				o(t.code, { children: "'lg'" }),
				" if supported)"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'custom'" }), " — internal technical marker (not used directly)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Controls the fixed or relative width of the field, applying the value directly without additional wrappers. When the property is not set, the width remains flexible and depends on the parent container. When the ",
			o(t.code, { children: "block" }),
			" property is active (set to ",
			o(t.code, { children: "true" }),
			"), the field takes 100% width regardless of the specified ",
			o(t.code, { children: "width" }),
			" value, with block mode taking priority."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Automatic width -->\n<Field label=\"auto\" />\n\n<!-- Fixed width -->\n<Field width=\"320px\" label=\"320px\" />\n\n<!-- Relative width -->\n<Field width=\"50%\" label=\"50%\" />\n\n<!-- CSS functions -->\n<Field width=\"min(100%, 320px)\" label=\"min(...)\" />\n<Field width=\"clamp(240px, 40vw, 480px)\" label=\"clamp(...)\" />\n",
			language: "html"
		})
	] });
}
function ko(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Oo, { ...e })
	}) : Oo(e);
}
//#endregion
//#region src/media/mdx/Field/width.ru.mdx
function Ao(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Ширина поля" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "width" }),
			" определяет горизонтальный размер контейнера Field."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"любое валидное CSS-значение (",
				o(t.code, { children: "'320px'" }),
				", ",
				o(t.code, { children: "'48rem'" }),
				", ",
				o(t.code, { children: "'50%'" }),
				", ",
				o(t.code, { children: "'min(100%,320px)'" }),
				", ",
				o(t.code, { children: "'clamp(240px,40vw,480px)'" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				"дизайн-токены системы (например, ",
				o(t.code, { children: "'sm'" }),
				", ",
				o(t.code, { children: "'md'" }),
				", ",
				o(t.code, { children: "'lg'" }),
				" при поддержке)"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'custom'" }), " — внутренняя техническая метка (не используется напрямую)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Контролирует фиксированную или относительную ширину поля, применяя значение напрямую без дополнительных обёрток. При отсутствии свойства ширина остаётся гибкой и зависит от родительского контейнера. При активном свойстве ",
			o(t.code, { children: "block" }),
			" (установлено в ",
			o(t.code, { children: "true" }),
			") поле занимает 100% ширины независимо от заданного значения ",
			o(t.code, { children: "width" }),
			", приоритет имеет блочный режим."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Автоматическая ширина -->\n<Field label=\"auto\" />\n\n<!-- Фиксированная ширина -->\n<Field width=\"320px\" label=\"320px\" />\n\n<!-- Относительная ширина -->\n<Field width=\"50%\" label=\"50%\" />\n\n<!-- CSS-функции -->\n<Field width=\"min(100%, 320px)\" label=\"min(...)\" />\n<Field width=\"clamp(240px, 40vw, 480px)\" label=\"clamp(...)\" />\n",
			language: "html"
		})
	] });
}
function jo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ao, { ...e })
	}) : Ao(e);
}
//#endregion
//#region src/media/mdx/Field/slots.en.mdx
function Mo(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "default(props: FieldControl): any" }), " — Default slot for the main input element."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "leading(props: FieldControl): any" }), " — Slot for displaying content before the input area."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "trailing(props: FieldControl): any" }), " — Slot for displaying content after the input area."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "FieldControl:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "id: string" }), " — unique identifier for binding label and input."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "className: string" }), " — CSS classes for the visible input area."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classHidden: string" }), " — CSS classes for the hidden native input element."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classForFocus: string" }), " — CSS classes applied when the field is focused."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: Record<string, any>" }), " — properties bound to the input element."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function No(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Mo, { ...e })
	}) : Mo(e);
}
//#endregion
//#region src/media/mdx/Field/slots.ru.mdx
function Po(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "default(props: FieldControl): any" }), " — Слот по умолчанию для основного элемента ввода (input, select, textarea)."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "leading(props: FieldControl): any" }), " — Слот для отображения контента перед областью ввода."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "trailing(props: FieldControl): any" }), " — Слот для отображения контента после области ввода."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "FieldControl:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "id: string" }), " — уникальный идентификатор элемента для связывания label и input."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "className: string" }), " — CSS-классы для видимой зоны ввода."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classHidden: string" }), " — CSS-классы для скрытого нативного элемента ввода."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classForFocus: string" }), " — CSS-классы, применяемые при фокусировке на поле."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: Record<string, any>" }), " — свойства, привязанные к элементу ввода."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Fo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Po, { ...e })
	}) : Po(e);
}
//#endregion
//#region src/media/mdx/Field/wikiMdxField.ts
var Io = {
	name: "Field",
	descriptions: {
		arrows: {
			en: xo,
			ru: Co
		},
		cancel: {
			en: _o,
			ru: yo
		},
		field: {
			en: po,
			ru: ho
		},
		slots: {
			en: No,
			ru: Fo
		},
		value: {
			en: To,
			ru: Do
		},
		width: {
			en: ko,
			ru: jo
		}
	}
};
//#endregion
//#region src/media/mdx/FieldCounter/fieldCounter.en.mdx
function Lo(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for displaying character count and input limits in form fields with customizable formatting templates." }),
		"\n",
		o(t.p, { children: "FieldCounter provides visual feedback about the number of entered characters, automatically formats display depending on the presence of a maximum limit, and supports flexible customization through templates with placeholders. The component integrates with text fields and text areas, providing users with information about restrictions and remaining input space." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Display current number of entered characters" }),
			"\n",
			o(t.li, { children: "Automatic maximum limit display when present" }),
			"\n",
			o(t.li, { children: "Flexible formatting templates with [c] and [m] placeholders" }),
			"\n",
			o(t.li, { children: "Automatic format detection (50 / 100 or just 50)" }),
			"\n",
			o(t.li, { children: "Support for string and numeric counter and maxlength values" }),
			"\n",
			o(t.li, { children: "Smart visibility management via counterShow property" }),
			"\n",
			o(t.li, { children: "Compact display for space efficiency" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Text fields with character count limits" }),
			"\n",
			o(t.li, { children: "Multi-line text areas (textarea) for descriptions" }),
			"\n",
			o(t.li, { children: "Comment input fields with limits" }),
			"\n",
			o(t.li, { children: "Forms with minimum/maximum length requirements" }),
			"\n",
			o(t.li, { children: "SMS editors with character counting" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Basic counter -->\n<Component :counter=\"10\" />\n\n<!-- With limit -->\n<Component :counter=\"10\" :maxlength=\"100\" />\n\n<!-- Custom template -->\n<Component :counter=\"5\" :maxlength=\"50\" template=\"[c] of [m]\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Ro(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Lo, { ...e })
	}) : Lo(e);
}
//#endregion
//#region src/media/mdx/FieldCounter/fieldCounter.ru.mdx
function zo(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для отображения счетчика символов и лимитов ввода в полях форм с поддержкой настраиваемых шаблонов форматирования." }),
		"\n",
		o(t.p, { children: "FieldCounter обеспечивает визуальную обратную связь о количестве введенных символов, автоматически форматирует отображение в зависимости от наличия максимального лимита и поддерживает гибкую настройку через шаблоны с плейсхолдерами. Компонент интегрируется с текстовыми полями и областями ввода, предоставляя пользователю информацию об ограничениях и оставшемся месте для ввода." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение текущего количества введенных символов" }),
			"\n",
			o(t.li, { children: "Автоматический показ максимального лимита при его наличии" }),
			"\n",
			o(t.li, { children: "Гибкие шаблоны форматирования с плейсхолдерами [c] и [m]" }),
			"\n",
			o(t.li, { children: "Автоматическое определение формата (50 / 100 или просто 50)" }),
			"\n",
			o(t.li, { children: "Поддержка строковых и числовых значений counter и maxlength" }),
			"\n",
			o(t.li, { children: "Умное управление видимостью через свойство counterShow" }),
			"\n",
			o(t.li, { children: "Компактное отображение для экономии пространства" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Текстовые поля с ограничением по количеству символов" }),
			"\n",
			o(t.li, { children: "Многострочные текстовые области (textarea) для описаний" }),
			"\n",
			o(t.li, { children: "Поля ввода комментариев с лимитами" }),
			"\n",
			o(t.li, { children: "Формы с требованиями к минимальной/максимальной длине" }),
			"\n",
			o(t.li, { children: "SMS-редакторы с подсчетом символов" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Базовый счетчик -->\n<Component :counter=\"10\" />\n\n<!-- С лимитом -->\n<Component :counter=\"10\" :maxlength=\"100\" />\n\n<!-- Кастомный шаблон -->\n<Component :counter=\"5\" :maxlength=\"50\" template=\"[c] / [m]\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Bo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(zo, { ...e })
	}) : zo(e);
}
//#endregion
//#region src/media/mdx/FieldCounter/templates.en.mdx
function Vo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Custom Display Templates" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "template" }),
			" property allows you to customize the counter display format using placeholders."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Available placeholders:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "[c]" }), " — current number of entered characters"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "[m]" }), " — maximum character limit"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Uses string interpolation to replace placeholders with actual counter values. Supports HTML markup inside the template for customizing styles of individual parts. When no template is provided, the component automatically determines the format: displays \"50 / 100\" when ",
			o(t.code, { children: "maxlength" }),
			" is present or just \"50\" when it's absent."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Descriptive format -->\n<FieldCounter\n:counter=\"75\"\n:maxlength=\"150\"\ntemplate=\"Characters: [c] of [m]\"\n/>\n\n<!-- Compact format -->\n<FieldCounter\n:counter=\"42\"\n:maxlength=\"100\"\ntemplate=\"[c]/[m]\"\n/>\n\n<!-- With HTML for styling -->\n<FieldCounter\n:counter=\"75\"\n:maxlength=\"150\"\ntemplate=\"<b>[c]</b> of <i>[m]</i> characters\"\n/>\n\n<!-- Current counter only with text -->\n<FieldCounter\n:counter=\"42\"\ntemplate=\"Characters entered: [c]\"\n/>\n",
			language: "html"
		})
	] });
}
function Ho(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Vo, { ...e })
	}) : Vo(e);
}
//#endregion
//#region src/media/mdx/FieldCounter/templates.ru.mdx
function Uo(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Настраиваемые шаблоны отображения" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "template" }),
			" позволяет настроить формат отображения счетчика символов с использованием плейсхолдеров."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Доступные плейсхолдеры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "[c]" }), " — текущее количество введенных символов"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "[m]" }), " — максимальный лимит символов"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Использует строковую интерполяцию для замены плейсхолдеров на актуальные значения счетчика. Поддерживает HTML-разметку внутри шаблона для кастомизации стилей отдельных частей. При отсутствии шаблона компонент автоматически определяет формат: отображает \"50 / 100\" при наличии ",
			o(t.code, { children: "maxlength" }),
			" или просто \"50\" при его отсутствии."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Описательный формат -->\n<FieldCounter\n:counter=\"75\"\n:maxlength=\"150\"\ntemplate=\"Символов: [c] из [m]\"\n/>\n\n<!-- Компактный формат -->\n<FieldCounter\n:counter=\"42\"\n:maxlength=\"100\"\ntemplate=\"[c]/[m]\"\n/>\n\n<!-- С HTML для стилизации -->\n<FieldCounter\n:counter=\"75\"\n:maxlength=\"150\"\ntemplate=\"<b>[c]</b> из <i>[m]</i> символов\"\n/>\n\n<!-- Только текущий счетчик с текстом -->\n<FieldCounter\n:counter=\"42\"\ntemplate=\"Введено символов: [c]\"\n/>\n",
			language: "html"
		})
	] });
}
function Wo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Uo, { ...e })
	}) : Uo(e);
}
//#endregion
//#region src/media/mdx/FieldCounter/wikiMdxFieldCounter.ts
var Go = {
	name: "FieldCounter",
	descriptions: {
		fieldCounter: {
			en: Ro,
			ru: Bo
		},
		templates: {
			en: Ho,
			ru: Wo
		}
	}
};
//#endregion
//#region src/media/mdx/FieldLabel/fieldLabel.en.mdx
function Ko(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for displaying input field labels with support for required indicator, character counter, and progress indicator." }),
		"\n",
		o(t.p, { children: "FieldLabel provides uniform display of form field captions, automatically integrates with FieldCounter for character counting and Progress for loading indication. The component supports skeleton loading, customizable slots, and ensures consistent visual styling of form elements." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Text label display for input fields" }),
			"\n",
			o(t.li, { children: "Required field indicator (required marker)" }),
			"\n",
			o(t.li, { children: "FieldCounter integration for character counting" }),
			"\n",
			o(t.li, { children: "Built-in Progress indicator support" }),
			"\n",
			o(t.li, { children: "Skeleton loading support for pending states" }),
			"\n",
			o(t.li, { children: "Flexible customization via slots (leading, trailing)" }),
			"\n",
			o(t.li, { children: "Consistent spacing and styles within forms" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Labels for text fields and textareas" }),
			"\n",
			o(t.li, { children: "Forms with required fields" }),
			"\n",
			o(t.li, { children: "Fields with character count limits" }),
			"\n",
			o(t.li, { children: "Forms with file upload progress indication" }),
			"\n",
			o(t.li, { children: "Dynamic forms with skeleton loading" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Basic label -->\n<Component label=\"Username\" />\n\n<!-- Required field label -->\n<Component label=\"Email\" required />\n\n<!-- With progress and counter -->\n<Component\n  label=\"Loading\"\n  :progress=\"45\"\n  :counter=\"10\"\n  :maxlength=\"100\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function qo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ko, { ...e })
	}) : Ko(e);
}
//#endregion
//#region src/media/mdx/FieldLabel/fieldLabel.ru.mdx
function Jo(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для отображения меток полей ввода с поддержкой индикатора обязательности, счетчика символов и прогресс-индикатора." }),
		"\n",
		o(t.p, { children: "FieldLabel предоставляет единообразное отображение подписей к полям форм, автоматически интегрируется с FieldCounter для подсчета символов и Progress для индикации загрузки. Компонент поддерживает скелетон-загрузку, настраиваемые слоты и обеспечивает согласованное визуальное оформление элементов формы." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение текстовой метки для полей ввода" }),
			"\n",
			o(t.li, { children: "Индикатор обязательности поля (required marker)" }),
			"\n",
			o(t.li, { children: "Интеграция со счетчиком символов FieldCounter" }),
			"\n",
			o(t.li, { children: "Встроенная поддержка прогресс-индикатора Progress" }),
			"\n",
			o(t.li, { children: "Поддержка скелетон-загрузки для состояния ожидания" }),
			"\n",
			o(t.li, { children: "Гибкая настройка через слоты (leading, trailing)" }),
			"\n",
			o(t.li, { children: "Единообразные отступы и стили в составе форм" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Подписи к текстовым полям и textarea" }),
			"\n",
			o(t.li, { children: "Формы с обязательными полями" }),
			"\n",
			o(t.li, { children: "Поля с ограничением количества символов" }),
			"\n",
			o(t.li, { children: "Формы с индикацией процесса загрузки файлов" }),
			"\n",
			o(t.li, { children: "Динамические формы со скелетон-загрузкой" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Базовая метка -->\n<Component label=\"Username\" />\n\n<!-- Обязательное поле -->\n<Component label=\"Email\" required />\n\n<!-- С прогрессом и счетчиком -->\n<Component\n  label=\"Загрузка\"\n  :progress=\"45\"\n  :counter=\"10\"\n  :maxlength=\"100\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Yo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Jo, { ...e })
	}) : Jo(e);
}
//#endregion
//#region src/media/mdx/FieldLabel/wikiMdxFieldLabel.ts
var Xo = {
	name: "FieldLabel",
	descriptions: { fieldLabel: {
		en: qo,
		ru: Yo
	} }
};
//#endregion
//#region src/media/mdx/FieldMessage/fieldMessage.en.mdx
function Zo(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for displaying helper and validation messages below form fields." }),
		"\n",
		o(t.p, { children: "FieldMessage centralizes management of text hints and error messages in forms. The component automatically determines display priority (validation errors take precedence over hints), supports forced display via forceShow, and integrates with input fields and character counters. It provides a flexible slot system for customization and works with both static and reactive values." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Two message types: helper and validation" }),
			"\n",
			o(t.li, { children: "Message priority — validation message overrides helper message" }),
			"\n",
			o(t.li, { children: "Smart visibility — automatic display logic based on provided values" }),
			"\n",
			o(t.li, { children: "Forced display via forceShow property" }),
			"\n",
			o(t.li, { children: "Flexible sources — support for static and reactive values" }),
			"\n",
			o(t.li, { children: "Integration with FieldCounter for complex forms" }),
			"\n",
			o(t.li, { children: "Customizable rendering through design system and slots" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Helper hints below input fields" }),
			"\n",
			o(t.li, { children: "Displaying validation errors in forms" }),
			"\n",
			o(t.li, { children: "Dynamic messages with reactive content" }),
			"\n",
			o(t.li, { children: "Complex forms with counters and validation" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Helper message -->\n<Component helper=\"Enter your name\" />\n\n<!-- Validation message -->\n<Component validation=\"Minimum 3 characters\" />\n\n<!-- Slots -->\n<Component>\n  <template #helper>💡 Hint</template>\n  <template #validation>⚠️ Error</template>\n</Component>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "The component focuses on text messages and should be used together with input control elements." }),
			"\n"
		] })
	] });
}
function Qo(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zo, { ...e })
	}) : Zo(e);
}
//#endregion
//#region src/media/mdx/FieldMessage/fieldMessage.ru.mdx
function $o(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для отображения вспомогательных и валидационных сообщений под полями формы." }),
		"\n",
		o(t.p, { children: "FieldMessage централизует управление текстовыми подсказками и сообщениями об ошибках в формах. Компонент автоматически определяет приоритет отображения (ошибки валидации выше подсказок), поддерживает принудительное показ через forceShow и интегрируется с полями ввода и счетчиками символов. Предоставляет гибкую систему слотов для кастомизации и работает как со статическими, так и с реактивными значениями." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Два типа сообщений: вспомогательное (helper) и валидационное (validation)" }),
			"\n",
			o(t.li, { children: "Приоритет сообщений — валидационное сообщение перекрывает вспомогательное" }),
			"\n",
			o(t.li, { children: "Умная видимость — автоматическая логика отображения на основе переданных значений" }),
			"\n",
			o(t.li, { children: "Принудительное отображение через свойство forceShow" }),
			"\n",
			o(t.li, { children: "Гибкие источники — поддержка статических и реактивных значений" }),
			"\n",
			o(t.li, { children: "Интеграция с FieldCounter для комплексных форм" }),
			"\n",
			o(t.li, { children: "Настраиваемый рендеринг через систему дизайна и слоты" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Вспомогательные подсказки под полями ввода" }),
			"\n",
			o(t.li, { children: "Отображение ошибок валидации в формах" }),
			"\n",
			o(t.li, { children: "Динамические сообщения с реактивным контентом" }),
			"\n",
			o(t.li, { children: "Комплексные формы с счетчиками и валидацией" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Подсказка -->\n<Component helper=\"Введите ваше имя\" />\n\n<!-- Ошибка валидации -->\n<Component validation=\"Минимум 3 символа\" />\n\n<!-- Слоты -->\n<Component>\n  <template #helper>💡 Подсказка</template>\n  <template #validation>⚠️ Ошибка</template>\n</Component>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Компонент фокусируется на текстовых сообщениях и должен использоваться совместно с элементами управления вводом." }),
			"\n"
		] })
	] });
}
function es(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($o, { ...e })
	}) : $o(e);
}
//#endregion
//#region src/media/mdx/FieldMessage/slots.en.mdx
function ts(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "helper(props: FieldMessageSlot): any" }), " — Slot for custom helper message content."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "validation(props: FieldMessageSlot): any" }), " — Slot for custom validation message content."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "FieldMessageSlot:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "message: string" }), " — current message (helper or validation)."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "helperMessage: string" }), " — helper message text."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "validationMessage: string" }), " — validation message text."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function ns(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ts, { ...e })
	}) : ts(e);
}
//#endregion
//#region src/media/mdx/FieldMessage/slots.ru.mdx
function rs(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "helper(props: FieldMessageSlot): any" }), " — Слот для пользовательского содержимого вспомогательного сообщения."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "validation(props: FieldMessageSlot): any" }), " — Слот для пользовательского содержимого сообщения валидации."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "FieldMessageSlot:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "message: string" }), " — текущее сообщение (вспомогательное или валидация)."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "helperMessage: string" }), " — текст вспомогательного сообщения."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "validationMessage: string" }), " — текст сообщения валидации."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function is(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(rs, { ...e })
	}) : rs(e);
}
//#endregion
//#region src/media/mdx/FieldMessage/wikiMdxFieldMessage.ts
var as = {
	name: "FieldMessage",
	descriptions: {
		fieldMessage: {
			en: Qo,
			ru: es
		},
		slots: {
			en: ns,
			ru: is
		}
	}
};
//#endregion
//#region src/media/mdx/Grid/grid.en.mdx
function os(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Layout component for creating grid structures with customizable columns." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Flexible grid system (defaults to 12 columns)" }),
			"\n",
			o(t.li, { children: "Gap customization" }),
			"\n",
			o(t.li, { children: "Responsive layout building" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\n<\/script>\n\n<template>\n<Grid>\n  <GridItem columnBase=\"6\">Item 1</GridItem>\n  <GridItem columnBase=\"6\">Item 2</GridItem>\n</Grid>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Grid is the foundation for creating aligned and structured layouts across different screen sizes." }),
			"\n"
		] })
	] });
}
function ss(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(os, { ...e })
	}) : os(e);
}
//#endregion
//#region src/media/mdx/Grid/grid.ru.mdx
function cs(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Компонент макета для создания сеточных структур с настраиваемыми колонками." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Гибкая сеточная система (по умолчанию 12 колонок)" }),
			"\n",
			o(t.li, { children: "Настройка отступов между элементами" }),
			"\n",
			o(t.li, { children: "Создание адаптивных интерфейсов" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\n<\/script>\n\n<template>\n<Grid>\n  <GridItem columnBase=\"6\">Элемент 1</GridItem>\n  <GridItem columnBase=\"6\">Элемент 2</GridItem>\n</Grid>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Grid является основой для создания упорядоченных и структурированных макетов для различных размеров экранов." }),
			"\n"
		] })
	] });
}
function ls(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(cs, { ...e })
	}) : cs(e);
}
//#endregion
//#region src/media/mdx/Grid/wikiMdxGrid.ts
var us = {
	name: "Grid",
	descriptions: { grid: {
		en: ss,
		ru: ls
	} }
};
//#endregion
//#region src/media/mdx/GridItem/gridItem.en.mdx
function ds(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Individual item within a Grid component. Controls how many columns the element should take across different screen sizes." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Customizable column span (1 to 12)" }),
			"\n",
			o(t.li, { children: "Built-in responsive support for all major breakpoints" }),
			"\n",
			o(t.li, { children: "Granular control over layout density" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\n<\/script>\n\n<template>\n<Grid>\n  <!-- Full width on mobile, half on desktop -->\n  <GridItem base=\"12\" md=\"6\">Item 1</GridItem>\n  <GridItem base=\"12\" md=\"6\">Item 2</GridItem>\n\n  <!-- Different spans for different screen sizes -->\n  <GridItem base=\"12\" sm=\"6\" lg=\"3\">Responsive item</GridItem>\n</Grid>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "GridItem allows for granular control over element sizing within a Grid container, enabling complex responsive layouts with zero custom CSS." }),
			"\n"
		] })
	] });
}
function fs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ds, { ...e })
	}) : ds(e);
}
//#endregion
//#region src/media/mdx/GridItem/gridItem.ru.mdx
function ps(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Отдельный элемент внутри компонента Grid. Управляет тем, сколько колонок должен занимать элемент на различных размерах экрана." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Настраиваемый охват колонок (от 1 до 12)" }),
			"\n",
			o(t.li, { children: "Встроенная поддержка адаптивности для всех основных брейкпоинтов" }),
			"\n",
			o(t.li, { children: "Детальный контроль над плотностью макета" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\n<\/script>\n\n<template>\n<Grid>\n  <!-- Полная ширина на мобильных, половина на десктопе -->\n  <GridItem base=\"12\" md=\"6\">Элемент 1</GridItem>\n  <GridItem base=\"12\" md=\"6\">Элемент 2</GridItem>\n\n  <!-- Различный охват для разных размеров экрана -->\n  <GridItem base=\"12\" sm=\"6\" lg=\"3\">Адаптивный элемент</GridItem>\n</Grid>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "GridItem обеспечивает детальный контроль над размером элементов внутри контейнера Grid, позволяя создавать сложные адаптивные макеты без написания дополнительного CSS." }),
			"\n"
		] })
	] });
}
function ms(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ps, { ...e })
	}) : ps(e);
}
//#endregion
//#region src/media/mdx/GridItem/wikiMdxGridItem.ts
var hs = {
	name: "GridItem",
	descriptions: { gridItem: {
		en: fs,
		ru: ms
	} }
};
//#endregion
//#region src/media/mdx/Group/group.en.mdx
function gs(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "A structural component designed to group related content with support for headers, descriptions, and flexible layout options. It is a semantic alias for the Block component, with a default header level of h4." }),
		"\n",
		o(t.p, { children: "Group provides a standardized way to organize information within a page or another component, ensuring a consistent visual hierarchy. It inherits all the capabilities of the Block component, including support for icons, captions, and slot-based customization." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Standardized grouping of content using ",
				o(t.code, { children: "<div>" }),
				" tag"
			] }),
			"\n",
			s(t.li, { children: [
				"Support for titles (",
				o(t.code, { children: "h4" }),
				" by default), labels, descriptions, and captions"
			] }),
			"\n",
			o(t.li, { children: "Icon support" }),
			"\n",
			o(t.li, { children: "Fully inherits Block component capabilities" }),
			"\n",
			o(t.li, { children: "Flexible layout for content organization" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Subsections within a page" }),
			"\n",
			o(t.li, { children: "Grouping elements within a card or modal" }),
			"\n",
			o(t.li, { children: "Organizing complex forms into thematic areas" }),
			"\n",
			o(t.li, { children: "Creating structured content blocks with smaller headers" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Group\n  headline=\"Group Headline\"\n  label=\"Group Label\"\n  description=\"Detailed description for the group content\"\n  caption=\"Auxiliary text\"\n  icon=\"folder\"\n>\n  Main group content goes here\n</Group>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Group is an ideal choice for creating semantic sub-structures within your application." }),
			"\n"
		] })
	] });
}
function _s(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(gs, { ...e })
	}) : gs(e);
}
//#endregion
//#region src/media/mdx/Group/group.ru.mdx
function vs(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Структурный компонент, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. Это семантический псевдоним компонента Block с уровнем заголовка h4 по умолчанию." }),
		"\n",
		o(t.p, { children: "Group обеспечивает стандартизированный способ организации информации внутри страницы или другого компонента, гарантируя согласованную визуальную иерархию. Он наследует все возможности компонента Block, включая поддержку иконок, подписей и кастомизацию на основе слотов." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: ["Стандартизированная группировка контента с использованием тега ", o(t.code, { children: "<div>" })] }),
			"\n",
			s(t.li, { children: [
				"Поддержка заголовков (",
				o(t.code, { children: "h4" }),
				" по умолчанию), меток, описаний и подписей"
			] }),
			"\n",
			o(t.li, { children: "Поддержка иконок" }),
			"\n",
			o(t.li, { children: "Полностью наследует возможности компонента Block" }),
			"\n",
			o(t.li, { children: "Гибкая компоновка для организации контента" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Подразделы внутри страницы" }),
			"\n",
			o(t.li, { children: "Группировка элементов внутри карточки или модального окна" }),
			"\n",
			o(t.li, { children: "Организация сложных форм в тематические области" }),
			"\n",
			o(t.li, { children: "Создание структурированных блоков контента с заголовками меньшего уровня" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Group\n  headline=\"Заголовок группы\"\n  label=\"Метка группы\"\n  description=\"Подробное описание для содержимого группы\"\n  caption=\"Вспомогательный текст\"\n  icon=\"folder\"\n>\n  Основной контент группы располагается здесь\n</Group>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Group является идеальным выбором для создания семантических подструктур в вашем приложении." }),
			"\n"
		] })
	] });
}
function ys(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(vs, { ...e })
	}) : vs(e);
}
//#endregion
//#region src/media/mdx/Group/wikiMdxGroup.ts
var bs = {
	name: "Group",
	descriptions: { group: {
		en: _s,
		ru: ys
	} }
};
//#endregion
//#region src/media/mdx/HorizontalScroll/expose.toSelected.en.mdx
function xs(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "toSelected(): void" }), " — A method for programmatically scrolling the container to the selected element."] }),
		"\n"
	] });
}
function Ss(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(xs, { ...e })
	}) : xs(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/expose.toSelected.ru.mdx
function Cs(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "toSelected(): void" }), " — Метод для программной прокрутки контейнера к выбранному элементу."] }),
		"\n"
	] });
}
function ws(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Cs, { ...e })
	}) : Cs(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/horizontalScroll.en.mdx
function Ts(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating a horizontally scrollable container with support for smooth scrolling and automatic positioning." }),
		"\n",
		o(t.p, { children: "HorizontalScroll provides a convenient way to display content that exceeds the screen width, such as image galleries, card lists, or navigation menus. The component supports automatic scrolling to the selected element upon initialization and provides methods for programmatic scroll control." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Horizontal content scrolling" }),
			"\n",
			o(t.li, { children: "Smooth scrolling" }),
			"\n",
			o(t.li, { children: "Automatic scrolling to the active element on load" }),
			"\n",
			o(t.li, { children: "Support for custom container tags" }),
			"\n",
			o(t.li, { children: "Slot with bindings (binds) for child elements" }),
			"\n",
			o(t.li, { children: "Scrollbar visibility control (flush mode)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Image and media galleries" }),
			"\n",
			o(t.li, { children: "Horizontal product card lists" }),
			"\n",
			o(t.li, { children: "Scrollable navigation menus (tabs)" }),
			"\n",
			o(t.li, { children: "Tag or category lists" }),
			"\n",
			o(t.li, { children: "Timelines and step sequences" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst items = ref([\n{ id: 1, title: 'Item 1' },\n{ id: 2, title: 'Item 2' },\n{ id: 3, title: 'Item 3' },\n{ id: 4, title: 'Item 4' },\n{ id: 5, title: 'Item 5' }\n])\n<\/script>\n\n<template>\n<HorizontalScroll>\n  <template #default=\"{ binds }\">\n    <div\n      v-for=\"item in items\"\n      :key=\"item.id\"\n      v-bind=\"binds\"\n      class=\"scroll-item\"\n    >\n      {{ item.title }}\n    </div>\n  </template>\n</HorizontalScroll>\n</template>\n\n<style scoped>\n.scroll-item {\nmin-width: 150px;\nheight: 100px;\nmargin-right: 16px;\nbackground: #f5f5f5;\nborder-radius: 8px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n}\n</style>\n",
			language: "html"
		})
	] });
}
function Es(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ts, { ...e })
	}) : Ts(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/horizontalScroll.ru.mdx
function Ds(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания горизонтально прокручиваемого контейнера с поддержкой плавного скролла и автоматического позиционирования." }),
		"\n",
		o(t.p, { children: "HorizontalScroll предоставляет удобный способ отображения контента, который не помещается по ширине экрана, например, галерей изображений, списков карточек или навигационных меню. Компонент поддерживает автоматическую прокрутку к выбранному элементу при инициализации и предоставляет методы для программного управления скроллом." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Горизонтальная прокрутка контента" }),
			"\n",
			o(t.li, { children: "Плавный скролл (smooth scrolling)" }),
			"\n",
			o(t.li, { children: "Автоматическая прокрутка к активному элементу при загрузке" }),
			"\n",
			o(t.li, { children: "Поддержка пользовательских тегов для контейнера" }),
			"\n",
			o(t.li, { children: "Слот с передачей привязок (binds) для дочерних элементов" }),
			"\n",
			o(t.li, { children: "Управление видимостью скроллбара (flush режим)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Галереи изображений и медиа-контента" }),
			"\n",
			o(t.li, { children: "Горизонтальные списки карточек товаров" }),
			"\n",
			o(t.li, { children: "Навигационные меню с прокруткой (табы)" }),
			"\n",
			o(t.li, { children: "Списки тегов или категорий" }),
			"\n",
			o(t.li, { children: "Таймлайны и последовательности шагов" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst items = ref([\n{ id: 1, title: 'Элемент 1' },\n{ id: 2, title: 'Элемент 2' },\n{ id: 3, title: 'Элемент 3' },\n{ id: 4, title: 'Элемент 4' },\n{ id: 5, title: 'Элемент 5' }\n])\n<\/script>\n\n<template>\n<HorizontalScroll>\n  <template #default=\"{ binds }\">\n    <div\n      v-for=\"item in items\"\n      :key=\"item.id\"\n      v-bind=\"binds\"\n      class=\"scroll-item\"\n    >\n      {{ item.title }}\n    </div>\n  </template>\n</HorizontalScroll>\n</template>\n\n<style scoped>\n.scroll-item {\nmin-width: 150px;\nheight: 100px;\nmargin-right: 16px;\nbackground: #f5f5f5;\nborder-radius: 8px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n}\n</style>\n",
			language: "html"
		})
	] });
}
function Os(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ds, { ...e })
	}) : Ds(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/selected.en.mdx
function ks(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Selected Element" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "selected" }),
			" property allows you to control the visual state of the component, indicating that it is in a selected or active state."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected" }), " — a boolean value determining whether the element is selected"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"When the ",
			o(t.code, { children: "selected" }),
			" property is set to ",
			o(t.code, { children: "true" }),
			", a special class (usually ",
			o(t.code, { children: "--selected" }),
			") is added to the component, which changes its appearance (e.g., background color, border, or text) to highlight it among other elements. This is useful for implementing selection lists, active input fields, or other interactive elements where it is necessary to visually indicate the user's current choice."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isSelected = ref(true)\n<\/script>\n\n<template>\n<!-- Selected state -->\n<Textarea\n  v-model=\"value\"\n  :selected=\"isSelected\"\n  label=\"Active field\"\n/>\n\n<!-- Normal state -->\n<Textarea\n  v-model=\"value2\"\n  :selected=\"false\"\n  label=\"Normal field\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function As(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ks, { ...e })
	}) : ks(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/selected.ru.mdx
function js(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Выбранный элемент" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "selected" }),
			" позволяет управлять визуальным состоянием компонента, указывая, что он находится в выбранном или активном состоянии."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected" }), " — булево значение, определяющее, выбран ли элемент"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Когда свойство ",
			o(t.code, { children: "selected" }),
			" установлено в ",
			o(t.code, { children: "true" }),
			", к компоненту добавляется специальный класс (обычно ",
			o(t.code, { children: "--selected" }),
			"), который изменяет его внешний вид (например, цвет фона, границы или текста), чтобы выделить его среди других элементов. Это полезно для реализации списков выбора, активных полей ввода или других интерактивных элементов, где необходимо визуально обозначить текущий выбор пользователя."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isSelected = ref(true)\n<\/script>\n\n<template>\n<!-- Выбранное состояние -->\n<Textarea\n  v-model=\"value\"\n  :selected=\"isSelected\"\n  label=\"Активное поле\"\n/>\n\n<!-- Обычное состояние -->\n<Textarea\n  v-model=\"value2\"\n  :selected=\"false\"\n  label=\"Обычное поле\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Ms(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(js, { ...e })
	}) : js(e);
}
//#endregion
//#region src/media/mdx/HorizontalScroll/wikiMdxHorizontalScroll.ts
var Ns = {
	name: "HorizontalScroll",
	descriptions: {
		"expose.toSelected": {
			en: Ss,
			ru: ws
		},
		horizontalScroll: {
			en: Es,
			ru: Os
		},
		selected: {
			en: As,
			ru: Ms
		}
	}
};
//#endregion
//#region src/media/mdx/Header/header.en.mdx
function Ps(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "A component for displaying headers with integrated support for icons and captions." }),
		"\n",
		o(t.p, { children: "Header provides flexible control over the HTML tag (h1-h6, div), which is essential for maintaining document hierarchy. The component supports automatic area management (area) and provides a slot for customizing content on the right side." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Display of title (label), caption, and icon" }),
			"\n",
			o(t.li, { children: "HTML tag configuration (h1, h2, h3, h4, h5, h6, div, etc.)" }),
			"\n",
			o(t.li, { children: "Automatic area value management via AreaInclude" }),
			"\n",
			o(t.li, { children: "Support for trailing slot for additional content" }),
			"\n",
			o(t.li, { children: "Standardized typography and spacing" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Section and page headings" }),
			"\n",
			o(t.li, { children: "Grouping content with explanatory captions" }),
			"\n",
			o(t.li, { children: "Navigational headers with icons" }),
			"\n",
			o(t.li, { children: "Card and block headers" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Header\n  label=\"Page Title\"\n  caption=\"Additional information or section description\"\n  icon=\"description\"\n  tag=\"h1\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Header is a key component for organizing text hierarchy and visually highlighting interface sections." }),
			"\n"
		] })
	] });
}
function Fs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ps, { ...e })
	}) : Ps(e);
}
//#endregion
//#region src/media/mdx/Header/header.ru.mdx
function Is(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Компонент для отображения заголовков с интегрированной поддержкой иконок и подписей." }),
		"\n",
		o(t.p, { children: "Header позволяет гибко управлять HTML-тегом (h1-h6, div), что важно для соблюдения иерархии документа. Компонент поддерживает автоматическое управление областями (area) и предоставляет слот для кастомизации контента в правой части." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение заголовка (label), подписи (caption) и иконки" }),
			"\n",
			o(t.li, { children: "Настройка HTML-тега (h1, h2, h3, h4, h5, h6, div и др.)" }),
			"\n",
			o(t.li, { children: "Автоматическое управление значением области через AreaInclude" }),
			"\n",
			o(t.li, { children: "Поддержка слота trailing для дополнительного контента" }),
			"\n",
			o(t.li, { children: "Стандартизированная типографика и отступы" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Заголовки разделов и страниц" }),
			"\n",
			o(t.li, { children: "Группировка контента с поясняющими подписями" }),
			"\n",
			o(t.li, { children: "Навигационные заголовки с иконками" }),
			"\n",
			o(t.li, { children: "Шапки карточек и блоков" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Header\n  label=\"Заголовок страницы\"\n  caption=\"Дополнительная информация или описание раздела\"\n  icon=\"description\"\n  tag=\"h1\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Header является ключевым компонентом для организации текстовой иерархии и визуального выделения разделов интерфейса." }),
			"\n"
		] })
	] });
}
function Ls(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Is, { ...e })
	}) : Is(e);
}
//#endregion
//#region src/media/mdx/Header/wikiMdxHeader.ts
var Rs = {
	name: "Header",
	descriptions: { header: {
		en: Fs,
		ru: Ls
	} }
};
//#endregion
//#region src/media/mdx/Icon/icon.en.mdx
function zs(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Icon State Management" }),
		"\n",
		o(t.p, { children: "A component for displaying icons with support for active state, rotation, loading, and skeleton integration." }),
		"\n",
		o(t.p, { children: "Icon provides a unified interface for working with icons in the design system, supporting both the main icon and an alternative for the active state. The component automatically manages switching between icons, handles loading events, and integrates with the skeleton system to display loading states." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Display of main and active icons with smooth transitions" }),
			"\n",
			o(t.li, { children: "Icon rotation at a specified angle" }),
			"\n",
			o(t.li, { children: "Disabled and hide states for visibility control" }),
			"\n",
			o(t.li, { children: "Image loading events for icons" }),
			"\n",
			o(t.li, { children: "Integration with Skeleton for loading states" }),
			"\n",
			o(t.li, { children: "Support within other components (Button, Cell, Chip, Field)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Icons in buttons and navigation elements" }),
			"\n",
			o(t.li, { children: "Interactive icons with state changes" }),
			"\n",
			o(t.li, { children: "State indicators in forms and lists" }),
			"\n",
			o(t.li, { children: "Decorative interface elements with animation" }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Properties" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: o(t.code, { children: "icon" }) }), " — The main icon displayed by default."] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "iconActive" }) }),
				" — The icon that is displayed when the component is in an active state (",
				o(t.code, { children: "active" }),
				" = ",
				o(t.code, { children: "true" }),
				")."
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: o(t.code, { children: "active" }) }), " — A boolean property that toggles the component's state between normal and active."] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Description" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"The ",
				o(t.code, { children: "icon" }),
				" property is essential for displaying the icon."
			] }),
			"\n",
			s(t.li, { children: [
				"If ",
				o(t.code, { children: "iconActive" }),
				" is not provided, there will be no visual change when the ",
				o(t.code, { children: "active" }),
				" state changes."
			] }),
			"\n",
			s(t.li, { children: [
				"When ",
				o(t.code, { children: "active" }),
				" is set to ",
				o(t.code, { children: "true" }),
				", the component will attempt to display the icon specified in ",
				o(t.code, { children: "iconActive" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				"The ",
				o(t.code, { children: "active" }),
				" property can be used to create toggles, indicators, and other interactive elements."
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Recommendations" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Use ",
				o(t.code, { children: "iconActive" }),
				" to provide visual feedback upon user interaction (e.g., on click or selection)."
			] }),
			"\n",
			s(t.li, { children: [
				"Ensure that ",
				o(t.code, { children: "icon" }),
				" and ",
				o(t.code, { children: "iconActive" }),
				" are visually distinct enough for the user to easily identify the state change."
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Usage Example" }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { D1Icon } from '@dxtmisha/d1'\n\nconst isActive = ref(false)\n<\/script>\n\n<template>\n<!-- Normal icon -->\n<D1Icon icon=\"home\" />\n\n<!-- Active icon -->\n<!-- `favorite` will be displayed because active=true -->\n<D1Icon icon=\"favorite_border\" icon-active=\"favorite\" :active=\"true\" />\n\n<!-- Dynamic state toggle -->\n<D1Icon\n  icon=\"visibility\"\n  icon-active=\"visibility_off\"\n  :active=\"isVisible\"\n  @click=\"isVisible = !isVisible\"\n/>\n\n<D1Icon\n  icon=\"home\"\n  icon-active=\"favorite\"\n  :active=\"isActive\"\n  turn=\"90\"\n  @load=\"onIconLoad\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"The Icon component can be used both standalone and as part of other UI components through the ",
				o(t.code, { children: "icon" }),
				", ",
				o(t.code, { children: "icon-trailing" }),
				", and ",
				o(t.code, { children: "icon-active" }),
				" properties."
			] }),
			"\n"
		] })
	] });
}
function Bs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(zs, { ...e })
	}) : zs(e);
}
//#endregion
//#region src/media/mdx/Icon/icon.ru.mdx
function Vs(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Icon" }),
		"\n",
		o(t.p, { children: "Компонент для отображения иконок с поддержкой активного состояния, поворота, загрузки и интеграции со скелетоном." }),
		"\n",
		o(t.p, { children: "Icon предоставляет унифицированный интерфейс для работы с иконками в дизайн-системе, поддерживая как основную иконку, так и альтернативную для активного состояния. Компонент автоматически управляет переключением между иконками, обрабатывает события загрузки и интегрируется с системой скелетонов для отображения состояния загрузки." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение основной и активной иконки с плавным переключением" }),
			"\n",
			o(t.li, { children: "Поворот иконки на заданный угол" }),
			"\n",
			o(t.li, { children: "Состояния disabled и hide для управления видимостью" }),
			"\n",
			o(t.li, { children: "События загрузки изображений иконок" }),
			"\n",
			o(t.li, { children: "Интеграция со Skeleton для состояний загрузки" }),
			"\n",
			o(t.li, { children: "Поддержка в составе других компонентов (Button, Cell, Chip, Field)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Иконки в кнопках и навигационных элементах" }),
			"\n",
			o(t.li, { children: "Интерактивные иконки с изменением состояния" }),
			"\n",
			o(t.li, { children: "Индикаторы состояния в формах и списках" }),
			"\n",
			o(t.li, { children: "Декоративные элементы интерфейса с анимацией" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { D1Icon } from '@dxtmisha/d1'\n\nconst isActive = ref(false)\n<\/script>\n\n<template>\n<D1Icon\n  icon=\"home\"\n  icon-active=\"favorite\"\n  :active=\"isActive\"\n  turn=\"90\"\n  @load=\"onIconLoad\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Компонент Icon может использоваться как самостоятельно, так и в составе других UI-компонентов через свойства ",
				o(t.code, { children: "icon" }),
				", ",
				o(t.code, { children: "icon-trailing" }),
				" и ",
				o(t.code, { children: "icon-active" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function Hs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Vs, { ...e })
	}) : Vs(e);
}
//#endregion
//#region src/media/mdx/Icon/expose.isActive.en.mdx
function $(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "isActive: ComputedRef<boolean>" }),
			" — Computed state indicating whether the alternative representation is active (when both ",
			o(t.code, { children: "active" }),
			" and ",
			o(t.code, { children: "iconActive" }),
			" are set)."
		] }),
		"\n"
	] });
}
function Us(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($, { ...e })
	}) : $(e);
}
//#endregion
//#region src/media/mdx/Icon/expose.isActive.ru.mdx
function Ws(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "isActive: ComputedRef<boolean>" }),
			" — Вычисляемое состояние, указывающее активно ли альтернативное представление (когда одновременно установлены ",
			o(t.code, { children: "active" }),
			" и ",
			o(t.code, { children: "iconActive" }),
			")."
		] }),
		"\n"
	] });
}
function Gs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ws, { ...e })
	}) : Ws(e);
}
//#endregion
//#region src/media/mdx/Icon/wikiMdxIcon.ts
var Ks = {
	name: "Icon",
	descriptions: {
		icon: {
			en: Bs,
			ru: Hs
		},
		"expose.isActive": {
			en: Us,
			ru: Gs
		}
	}
};
//#endregion
//#region src/media/mdx/Image/image.en.mdx
function qs(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Universal component for displaying images, icons, flags, and PDF documents with advanced size, positioning, and adaptability controls." }),
		"\n",
		s(t.p, { children: [
			"Image provides a flexible API for working with various types of visual content. The component automatically detects the source type (image, icon, color, file), selects the optimal rendering method (",
			o(t.code, { children: "<img>" }),
			", ",
			o(t.code, { children: "background-image" }),
			", ",
			o(t.code, { children: "<picture>" }),
			", ",
			o(t.code, { children: "<object>" }),
			", or icon font), and supports advanced cropping and adaptation features."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Support for multiple source types (URL, File, PDF, Material Icons, flags, colors)" }),
			"\n",
			o(t.li, { children: "Flexible rendering with automatic choice between background and img tag" }),
			"\n",
			o(t.li, { children: "Adaptive scaling with aspect ratio preservation and srcset support" }),
			"\n",
			o(t.li, { children: "Display control via fill modes and coordinate cropping" }),
			"\n",
			o(t.li, { children: "Styling support with masks and color filling" }),
			"\n",
			o(t.li, { children: "Integration with Material Symbols and system flags" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Responsive images with picture and srcset" }),
			"\n",
			o(t.li, { children: "Interface icons (Material Design or SVG masks)" }),
			"\n",
			o(t.li, { children: "User avatars with automatic cropping" }),
			"\n",
			o(t.li, { children: "Previews of uploaded files and PDF documents" }),
			"\n",
			o(t.li, { children: "Background images with complex positioning" }),
			"\n",
			o(t.li, { children: "Displaying country flags via CSS sprites" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { Image } from '@dxtmisha/constructor'\n\nconst imageUrl = ref('https://example.com/image.jpg')\n<\/script>\n\n<template>\n<!-- Background image with cropping -->\n<Image\n  :value=\"imageUrl\"\n  size=\"cover\"\n  :coordinator=\"[10, 10, 10, 10]\"\n/>\n\n<!-- SEO-friendly image -->\n<Image\n  :value=\"imageUrl\"\n  tag-img\n  alt=\"Description\"\n/>\n\n<!-- Material Design Icon -->\n<Image value=\"filled-home\" />\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "The component automatically manages content type and optimizes display based on the source." }),
			"\n"
		] })
	] });
}
function Js(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(qs, { ...e })
	}) : qs(e);
}
//#endregion
//#region src/media/mdx/Image/image.ru.mdx
function Ys(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Универсальный компонент для отображения изображений, иконок, флагов и PDF-документов с расширенными возможностями управления размером, позиционированием и адаптивностью." }),
		"\n",
		s(t.p, { children: [
			"Image предоставляет гибкий API для работы с различными типами визуального контента. Компонент автоматически определяет тип источника (изображение, иконка, цвет, файл), выбирает оптимальный способ рендеринга (",
			o(t.code, { children: "<img>" }),
			", ",
			o(t.code, { children: "background-image" }),
			", ",
			o(t.code, { children: "<picture>" }),
			", ",
			o(t.code, { children: "<object>" }),
			" или иконочный шрифт) и поддерживает продвинутые функции кадрирования и адаптации."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Поддержка множества типов источников (URL, File, PDF, Material Icons, флаги, цвета)" }),
			"\n",
			o(t.li, { children: "Гибкий рендеринг с автоматическим выбором между фоном и тегом img" }),
			"\n",
			o(t.li, { children: "Адаптивное масштабирование с сохранением пропорций и поддержкой srcset" }),
			"\n",
			o(t.li, { children: "Управление отображением через режимы заполнения и координатное кадрирование" }),
			"\n",
			o(t.li, { children: "Стилизация с поддержкой масок и заливки цветом" }),
			"\n",
			o(t.li, { children: "Интеграция с Material Symbols и системными флагами" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Адаптивные изображения с picture и srcset" }),
			"\n",
			o(t.li, { children: "Иконки интерфейса (Material Design или SVG маски)" }),
			"\n",
			o(t.li, { children: "Аватары пользователей с автоматическим кадрированием" }),
			"\n",
			o(t.li, { children: "Превью загружаемых файлов и PDF документов" }),
			"\n",
			o(t.li, { children: "Фоновые изображения со сложным позиционированием" }),
			"\n",
			o(t.li, { children: "Отображение флагов стран через CSS спрайты" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { Image } from '@dxtmisha/constructor'\n\nconst imageUrl = ref('https://example.com/image.jpg')\n<\/script>\n\n<template>\n<!-- Фоновое изображение с кадрированием -->\n<Image\n  :value=\"imageUrl\"\n  size=\"cover\"\n  :coordinator=\"[10, 10, 10, 10]\"\n/>\n\n<!-- SEO-дружественное изображение -->\n<Image\n  :value=\"imageUrl\"\n  tag-img\n  alt=\"Описание\"\n/>\n\n<!-- Иконка Material Design -->\n<Image value=\"filled-home\" />\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Компонент автоматически управляет типом контента и оптимизирует отображение в зависимости от источника." }),
			"\n"
		] })
	] });
}
function Xs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ys, { ...e })
	}) : Ys(e);
}
//#endregion
//#region src/media/mdx/Image/value.en.mdx
function Zs(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Main value" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "value" }),
			" property defines the image content. This universal property supports multiple source types for maximum flexibility."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Supported types:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Icon name" }), " — built-in or custom icon from the design system"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Image URL" }), " — direct link to file (PNG, JPG, SVG, GIF, WebP, etc.)"] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "File object" }),
				" — JavaScript File object obtained from ",
				o(t.code, { children: "<input type=\"file\">" })
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "PDF document" }), " — direct link to PDF file with automatic display"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "The component automatically detects the source type and selects the optimal display method. When passing a File object, the content is read and previewed. The property is reactive and supports dynamic updates." }),
		"\n",
		o(i, {
			code: "\n<!-- Icon by name -->\n<Image value=\"icon-user\" />\n\n<!-- Image by URL -->\n<Image value=\"https://example.com/image.png\" />\n\n<!-- User file -->\n<Image :value=\"fileFromInput\" />\n",
			language: "html"
		})
	] });
}
function Qs(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zs, { ...e })
	}) : Zs(e);
}
//#endregion
//#region src/media/mdx/Image/value.ru.mdx
function $s(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Основное значение" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "value" }),
			" определяет контент изображения. Это универсальное свойство, поддерживающее несколько типов источников для максимальной гибкости."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Поддерживаемые типы:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Имя иконки" }), " — встроенная или пользовательская иконка из системы дизайна"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "URL изображения" }), " — прямая ссылка на файл (PNG, JPG, SVG, GIF, WebP и др.)"] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Объект File" }),
				" — JavaScript-объект File, полученный из ",
				o(t.code, { children: "<input type=\"file\">" })
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "PDF-документ" }), " — прямая ссылка на PDF-файл с автоматическим отображением"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Компонент автоматически определяет тип источника и выбирает оптимальный способ отображения. При передаче объекта File происходит чтение и предпросмотр содержимого. Свойство реактивно и поддерживает динамическое обновление." }),
		"\n",
		o(i, {
			code: "\n<!-- Иконка по имени -->\n<Image value=\"icon-user\" />\n\n<!-- Изображение по URL -->\n<Image value=\"https://example.com/image.png\" />\n\n<!-- Файл от пользователя -->\n<Image :value=\"fileFromInput\" />\n",
			language: "html"
		})
	] });
}
function ec(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($s, { ...e })
	}) : $s(e);
}
//#endregion
//#region src/media/mdx/Image/size.en.mdx
function tc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Image display control" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "size" }),
			", ",
			o(t.code, { children: "coordinator" }),
			", ",
			o(t.code, { children: "x" }),
			", and ",
			o(t.code, { children: "y" }),
			" properties allow you to precisely control image scaling, visible area, and positioning within the container."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "size" }),
				" — scaling and fill mode of the image (",
				o(t.code, { children: "auto" }),
				", ",
				o(t.code, { children: "contain" }),
				", ",
				o(t.code, { children: "cover" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "coordinator" }),
				" — array of coordinates for cropping the display area ",
				o(t.code, { children: "[left, top, right, bottom]" }),
				" in percentages"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "x" }), " — horizontal offset of the image (pixels, percentages)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "y" }), " — vertical offset of the image (pixels, percentages)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together or individually. The ",
			o(t.code, { children: "size" }),
			" value defines the scaling mode: ",
			o(t.code, { children: "auto" }),
			" uses the original size, ",
			o(t.code, { children: "contain" }),
			" fits the image completely, ",
			o(t.code, { children: "cover" }),
			" fills the container with possible cropping. The ",
			o(t.code, { children: "coordinator" }),
			" property sets the visible area by cropping the image at specified coordinates. The ",
			o(t.code, { children: "x" }),
			" and ",
			o(t.code, { children: "y" }),
			" parameters shift the image relative to the container for precise positioning."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Scaling mode -->\n<Image value=\"image.png\" size=\"contain\" />\n\n<!-- Cropping by coordinates -->\n<Image value=\"image.png\" :coordinator=\"[10, 20, 100, 80]\" />\n\n<!-- Position offset -->\n<Image value=\"image.png\" x=\"15\" y=\"-10\" />\n\n<!-- Combined parameters -->\n<Image\nvalue=\"image.png\"\nsize=\"cover\"\n:coordinator=\"[0, 0, 100, 50]\"\nx=\"10\"\ny=\"5\"\n/>\n",
			language: "html"
		})
	] });
}
function nc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(tc, { ...e })
	}) : tc(e);
}
//#endregion
//#region src/media/mdx/Image/size.ru.mdx
function rc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление отображением изображения" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "size" }),
			", ",
			o(t.code, { children: "coordinator" }),
			", ",
			o(t.code, { children: "x" }),
			" и ",
			o(t.code, { children: "y" }),
			" позволяют детально управлять масштабированием, областью видимости и позиционированием изображения внутри контейнера."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "size" }),
				" — режим масштабирования и заполнения изображения (",
				o(t.code, { children: "auto" }),
				", ",
				o(t.code, { children: "contain" }),
				", ",
				o(t.code, { children: "cover" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "coordinator" }),
				" — массив координат для обрезки области отображения ",
				o(t.code, { children: "[left, top, right, bottom]" }),
				" в процентах"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "x" }), " — смещение изображения по горизонтали (пиксели, проценты)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "y" }), " — смещение изображения по вертикали (пиксели, проценты)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно или по отдельности. Значение ",
			o(t.code, { children: "size" }),
			" определяет режим масштабирования: ",
			o(t.code, { children: "auto" }),
			" использует исходный размер, ",
			o(t.code, { children: "contain" }),
			" вписывает изображение полностью, ",
			o(t.code, { children: "cover" }),
			" заполняет контейнер с возможной обрезкой. Свойство ",
			o(t.code, { children: "coordinator" }),
			" задаёт видимую область, обрезая изображение по указанным координатам. Параметры ",
			o(t.code, { children: "x" }),
			" и ",
			o(t.code, { children: "y" }),
			" смещают изображение относительно контейнера для точного позиционирования."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Режим масштабирования -->\n<Image value=\"image.png\" size=\"contain\" />\n\n<!-- Обрезка по координатам -->\n<Image value=\"image.png\" :coordinator=\"[10, 20, 100, 80]\" />\n\n<!-- Смещение позиции -->\n<Image value=\"image.png\" x=\"15\" y=\"-10\" />\n\n<!-- Комбинация параметров -->\n<Image\nvalue=\"image.png\"\nsize=\"cover\"\n:coordinator=\"[0, 0, 100, 50]\"\nx=\"10\"\ny=\"5\"\n/>\n",
			language: "html"
		})
	] });
}
function ic(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(rc, { ...e })
	}) : rc(e);
}
//#endregion
//#region src/media/mdx/Image/adaptive.en.mdx
function ac(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Adaptive scaling" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "adaptive" }),
			", ",
			o(t.code, { children: "adaptiveGroup" }),
			", ",
			o(t.code, { children: "adaptiveAlways" }),
			", ",
			o(t.code, { children: "objectWidth" }),
			", and ",
			o(t.code, { children: "objectHeight" }),
			" properties control automatic image scaling to ensure visual consistency of physical object sizes across different images."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "adaptive" }), " — enables adaptive scaling mode"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "adaptiveGroup" }),
				" — group name for scale synchronization (default ",
				o(t.code, { children: "'basic'" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "objectWidth" }), " — physical width of the object in the image in millimeters"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "objectHeight" }), " — physical height of the object in the image in millimeters"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "adaptiveAlways" }), " — perform calculations even for invisible elements"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together to ensure proportional display of images with objects of different physical sizes. When ",
			o(t.code, { children: "adaptive" }),
			" is activated, the component starts tracking element dimensions and comparing them with other images in the same group, automatically selecting the optimal scale for each element."
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "objectWidth" }),
			" or ",
			o(t.code, { children: "objectHeight" }),
			" properties specify the real physical dimensions of the object in the image in millimeters. These values are necessary for calculating the scaling coefficient — the component uses them to determine how much to enlarge or reduce the image so that objects in different images appear the same size. It is sufficient to specify only one property — either width or height."
		] }),
		"\n",
		s(t.p, { children: [
			"The component automatically determines which axis (horizontal or vertical) to scale on, based on available dimensions and image proportions. If ",
			o(t.code, { children: "objectWidth" }),
			" is specified, scaling will occur horizontally, if ",
			o(t.code, { children: "objectHeight" }),
			" — vertically. This allows flexible work with images of different orientations."
		] }),
		"\n",
		s(t.p, { children: [
			"Elements with the same ",
			o(t.code, { children: "adaptiveGroup" }),
			" value scale synchronously, ensuring consistent visual object sizes across all images in the group. This is especially useful when displaying product galleries or comparison tables where maintaining visual size correspondence is important."
		] }),
		"\n",
		s(t.p, { children: [
			"For performance optimization, scaling calculations are performed only for visible elements within the viewport plus a small margin. If an element is outside the visible area, calculations are paused until the element appears on screen. The ",
			o(t.code, { children: "adaptiveAlways" }),
			" property disables this optimization and forces the component to constantly recalculate the scale regardless of element visibility."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst phone1 = ref('/images/phone-model-a.png')\nconst phone2 = ref('/images/phone-model-b.png')\nconst phone3 = ref('/images/phone-model-c.png')\n<\/script>\n\n<template>\n<!-- Basic usage with object width -->\n<Image\n  :value=\"phone1\"\n  adaptive\n  object-width=\"76.2\"\n/>\n\n<!-- Multiple images in one group -->\n<Image\n  :value=\"phone1\"\n  adaptive\n  adaptive-group=\"phones\"\n  object-width=\"76.2\"\n/>\n<Image\n  :value=\"phone2\"\n  adaptive\n  adaptive-group=\"phones\"\n  object-width=\"71.9\"\n/>\n<Image\n  :value=\"phone3\"\n  adaptive\n  adaptive-group=\"phones\"\n  object-width=\"129.9\"\n/>\n\n<!-- With height instead of width -->\n<Image\n  adaptive\n  object-height=\"154.8\"\n  :value=\"phone1\"\n/>\n\n<!-- Constant scaling -->\n<Image\n  adaptive\n  adaptive-always\n  object-width=\"76.2\"\n  :value=\"phone1\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function oc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ac, { ...e })
	}) : ac(e);
}
//#endregion
//#region src/media/mdx/Image/adaptive.ru.mdx
function sc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Адаптивное масштабирование" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "adaptive" }),
			", ",
			o(t.code, { children: "adaptiveGroup" }),
			", ",
			o(t.code, { children: "adaptiveAlways" }),
			", ",
			o(t.code, { children: "objectWidth" }),
			" и ",
			o(t.code, { children: "objectHeight" }),
			" управляют автоматическим масштабированием изображений для обеспечения визуального соответствия физических размеров объектов на разных изображениях."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "adaptive" }), " — включает режим адаптивного масштабирования"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "adaptiveGroup" }),
				" — название группы для синхронизации масштаба (по умолчанию ",
				o(t.code, { children: "'basic'" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "objectWidth" }), " — физическая ширина объекта на изображении в миллиметрах"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "objectHeight" }), " — физическая высота объекта на изображении в миллиметрах"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "adaptiveAlways" }), " — выполнять расчёты даже для невидимых элементов"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно для обеспечения пропорционального отображения изображений с объектами разных физических размеров. При активации ",
			o(t.code, { children: "adaptive" }),
			" компонент начинает отслеживать размеры элемента и сравнивать их с другими изображениями в той же группе, автоматически подбирая оптимальный масштаб для каждого элемента."
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "objectWidth" }),
			" или ",
			o(t.code, { children: "objectHeight" }),
			" задают реальные физические размеры объекта на изображении в миллиметрах. Эти значения необходимы для расчёта коэффициента масштабирования — компонент использует их для определения, во сколько раз нужно увеличить или уменьшить изображение, чтобы объекты на разных изображениях выглядели одинакового размера. Достаточно указать только одно из свойств — либо ширину, либо высоту."
		] }),
		"\n",
		s(t.p, { children: [
			"Компонент автоматически определяет, по какой оси (горизонтальной или вертикальной) производить масштабирование, основываясь на доступных размерах и пропорциях изображения. Если указан ",
			o(t.code, { children: "objectWidth" }),
			", масштабирование будет происходить по горизонтали, если ",
			o(t.code, { children: "objectHeight" }),
			" — по вертикали. Это позволяет гибко работать с изображениями разных ориентаций."
		] }),
		"\n",
		s(t.p, { children: [
			"Элементы с одинаковым значением ",
			o(t.code, { children: "adaptiveGroup" }),
			" масштабируются синхронно, обеспечивая одинаковый визуальный размер объектов на всех изображениях группы. Это особенно полезно при отображении галерей продуктов или сравнительных таблиц, где важно сохранить визуальное соответствие размеров."
		] }),
		"\n",
		s(t.p, { children: [
			"Для оптимизации производительности расчёты масштабирования выполняются только для видимых элементов в пределах области просмотра (viewport) плюс небольшой запас. Если элемент находится за пределами видимой области, расчёты приостанавливаются до момента, когда элемент появится на экране. Свойство ",
			o(t.code, { children: "adaptiveAlways" }),
			" отключает эту оптимизацию и заставляет компонент постоянно пересчитывать масштаб независимо от видимости элемента."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst phone1 = ref('/images/phone-model-a.png')\nconst phone2 = ref('/images/phone-model-b.png')\nconst phone3 = ref('/images/phone-model-c.png')\n<\/script>\n\n<template>\n<!-- Базовое использование с шириной объекта -->\n<Image\n  :value=\"phone1\"\n  adaptive\n  object-width=\"76.2\"\n/>\n\n<!-- Несколько изображений в одной группе -->\n<Image\n  :value=\"phone1\"\n  adaptive\n  adaptive-group=\"phones\"\n  object-width=\"76.2\"\n/>\n<Image\n  :value=\"phone2\"\n  adaptive\n  adaptive-group=\"phones\"\n  object-width=\"71.9\"\n/>\n<Image\n  :value=\"phone3\"\n  adaptive\n  adaptive-group=\"phones\"\n  object-width=\"129.9\"\n/>\n\n<!-- С высотой вместо ширины -->\n<Image\n  adaptive\n  object-height=\"154.8\"\n  :value=\"phone1\"\n/>\n\n<!-- Постоянное масштабирование -->\n<Image\n  adaptive\n  adaptive-always\n  object-width=\"76.2\"\n  :value=\"phone1\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function cc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(sc, { ...e })
	}) : sc(e);
}
//#endregion
//#region src/media/mdx/Image/img-tag.en.mdx
function lc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Using the img tag" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "tagImg" }),
			", ",
			o(t.code, { children: "srcset" }),
			", ",
			o(t.code, { children: "picture" }),
			", ",
			o(t.code, { children: "alt" }),
			", ",
			o(t.code, { children: "lazy" }),
			", ",
			o(t.code, { children: "preloadOffset" }),
			" and ",
			o(t.code, { children: "fetchPriority" }),
			" properties are designed to control the image display mode using the HTML ",
			o(t.code, { children: "<img>" }),
			" tag instead of a background image."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "tagImg" }),
				" — use the ",
				o(t.code, { children: "<img>" }),
				" tag instead of a background image"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "srcset" }), " — set of image sources for different screen resolutions"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "picture" }),
				" — sources for different display conditions using the ",
				o(t.code, { children: "<picture>" }),
				" tag"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "alt" }), " — alternative text for the image"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "lazy" }), " — enables lazy loading of the image"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "preloadOffset" }),
				" — offset for image preloading (default ",
				o(t.code, { children: "1024px" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "fetchPriority" }),
				" — image loading priority (",
				o(t.code, { children: "low" }),
				", ",
				o(t.code, { children: "high" }),
				", ",
				o(t.code, { children: "auto" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"The properties work together: if ",
			o(t.code, { children: "tagImg" }),
			" is not set or equals ",
			o(t.code, { children: "false" }),
			", the image is displayed as a CSS background via ",
			o(t.code, { children: "background-image" }),
			". When ",
			o(t.code, { children: "tagImg" }),
			" is activated (value ",
			o(t.code, { children: "true" }),
			"), the component uses the semantic HTML ",
			o(t.code, { children: "<img>" }),
			" tag, providing better accessibility and SEO optimization. The ",
			o(t.code, { children: "alt" }),
			" property defines alternative text that is displayed when the image is unavailable and is used by screen readers for people with disabilities."
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "srcset" }),
			" property allows you to provide multiple versions of an image for different pixel densities and screen sizes. It accepts a string in the standard ",
			o(t.code, { children: "srcset" }),
			" attribute format or an object where keys are width descriptors (numbers or strings like ",
			o(t.code, { children: "'2x'" }),
			") and values are image URLs. When using numeric keys, the ",
			o(t.code, { children: "w" }),
			" suffix (width descriptor) is automatically added. The browser automatically selects the optimal image based on screen size and pixel density."
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "picture" }),
			" property enables the use of the HTML ",
			o(t.code, { children: "<picture>" }),
			" tag for art direction — when you need to load different images depending on screen size or other media query conditions. It accepts an object where keys are media conditions (such as screen width in pixels) and values are image URLs, or an array of objects with ",
			o(t.code, { children: "<source>" }),
			" attributes. When using an object, media queries like ",
			o(t.code, { children: "(width >= 768px)" }),
			" are automatically generated. The ",
			o(t.code, { children: "<picture>" }),
			" tag provides more flexible control over image selection compared to ",
			o(t.code, { children: "srcset" }),
			", allowing you to load images with different aspect ratios or content for various viewing conditions."
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "lazy" }),
			" property activates native browser lazy loading via the ",
			o(t.code, { children: "loading=\"lazy\"" }),
			" attribute. Images with this attribute are loaded only when approaching the visible screen area, which significantly speeds up initial page load and reduces traffic consumption. It is especially effective for pages with a large number of images or long lists."
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "preloadOffset" }),
			" property defines the pixel offset for preloading images when using lazy loading. The default value is ",
			o(t.code, { children: "1024px" }),
			", which means the image starts loading 1024 pixels before it enters the visible area. This ensures smooth image loading without delays during scrolling. You can specify either a numeric value or a string with a unit of measurement."
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "fetchPriority" }),
			" property allows you to control the browser's image loading priority. It accepts three values: ",
			o(t.code, { children: "high" }),
			" — high priority for critical images (such as hero images or main banners), ",
			o(t.code, { children: "low" }),
			" — low priority for secondary images, ",
			o(t.code, { children: "auto" }),
			" — the browser determines the priority automatically (default value). Proper use of this property helps optimize page loading by ensuring fast loading of important content."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst productImage = ref('/images/product.jpg')\n<\/script>\n\n<template>\n<!-- Basic usage -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Product description\"\n/>\n\n<!-- With lazy loading -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Product\"\n  lazy\n/>\n\n<!-- With srcset object -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Responsive image\"\n  :srcset=\"{\n    '1x': '/images/product.jpg',\n    '2x': '/images/product@2x.jpg'\n  }\"\n/>\n\n<!-- With picture for different screen sizes -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Responsive image for different devices\"\n  :picture=\"{\n    768: '/images/product-tablet.jpg',\n    1024: '/images/product-desktop.jpg'\n  }\"\n/>\n\n<!-- With preload offset configuration -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Image with early preload\"\n  lazy\n  preload-offset=\"2048px\"\n/>\n\n<!-- With high loading priority -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Main page image\"\n  fetch-priority=\"high\"\n/>\n\n<!-- Complex example -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Responsive product image\"\n  lazy\n  preload-offset=\"1536px\"\n  fetch-priority=\"low\"\n  :srcset=\"{\n    '1x': '/images/product.jpg',\n    '2x': '/images/product@2x.jpg',\n    '3x': '/images/product@3x.jpg'\n  }\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function uc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(lc, { ...e })
	}) : lc(e);
}
//#endregion
//#region src/media/mdx/Image/img-tag.ru.mdx
function dc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Использование тега img" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "tagImg" }),
			", ",
			o(t.code, { children: "srcset" }),
			", ",
			o(t.code, { children: "picture" }),
			", ",
			o(t.code, { children: "alt" }),
			", ",
			o(t.code, { children: "lazy" }),
			", ",
			o(t.code, { children: "preloadOffset" }),
			" и ",
			o(t.code, { children: "fetchPriority" }),
			" предназначены для управления режимом отображения изображения через HTML-тег ",
			o(t.code, { children: "<img>" }),
			" вместо фонового изображения."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "tagImg" }),
				" — использовать тег ",
				o(t.code, { children: "<img>" }),
				" вместо фонового изображения"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "srcset" }), " — набор источников изображения для разных разрешений экрана"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "picture" }),
				" — источники для разных условий отображения с использованием тега ",
				o(t.code, { children: "<picture>" })
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "alt" }), " — альтернативный текст для изображения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "lazy" }), " — включает ленивую загрузку изображения"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "preloadOffset" }),
				" — смещение для предзагрузки изображения (по умолчанию ",
				o(t.code, { children: "1024px" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "fetchPriority" }),
				" — приоритет загрузки изображения (",
				o(t.code, { children: "low" }),
				", ",
				o(t.code, { children: "high" }),
				", ",
				o(t.code, { children: "auto" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: если ",
			o(t.code, { children: "tagImg" }),
			" не задан или равен ",
			o(t.code, { children: "false" }),
			", изображение отображается как CSS-фон через ",
			o(t.code, { children: "background-image" }),
			". При активации ",
			o(t.code, { children: "tagImg" }),
			" (значение ",
			o(t.code, { children: "true" }),
			"), компонент использует семантический HTML-тег ",
			o(t.code, { children: "<img>" }),
			", обеспечивая лучшую доступность и SEO-оптимизацию. Свойство ",
			o(t.code, { children: "alt" }),
			" определяет альтернативный текст, который отображается при недоступности изображения и используется программами чтения с экрана для людей с ограниченными возможностями."
		] }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "srcset" }),
			" позволяет предоставить несколько версий изображения для разных плотностей пикселей и размеров экрана. Принимает строку в формате стандартного атрибута ",
			o(t.code, { children: "srcset" }),
			" или объект, где ключи — это дескрипторы ширины (числа или строки вроде ",
			o(t.code, { children: "'2x'" }),
			"), а значения — URL изображений. При использовании числовых ключей автоматически добавляется суффикс ",
			o(t.code, { children: "w" }),
			" (width descriptor). Браузер самостоятельно выбирает оптимальное изображение на основе размера экрана и плотности пикселей."
		] }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "picture" }),
			" позволяет использовать HTML-тег ",
			o(t.code, { children: "<picture>" }),
			" для art direction — когда требуется загружать разные изображения в зависимости от размера экрана или других условий медиа-запросов. Принимает объект, где ключи — это медиа-условия (например, ширина экрана в пикселях), а значения — URL изображений, или массив объектов с атрибутами ",
			o(t.code, { children: "<source>" }),
			". При использовании объекта автоматически генерируются медиа-запросы вида ",
			o(t.code, { children: "(width >= 768px)" }),
			". Тег ",
			o(t.code, { children: "<picture>" }),
			" обеспечивает более гибкий контроль над выбором изображения по сравнению с ",
			o(t.code, { children: "srcset" }),
			", позволяя загружать изображения разных пропорций или содержания для различных условий просмотра."
		] }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "lazy" }),
			" активирует нативную ленивую загрузку браузера через атрибут ",
			o(t.code, { children: "loading=\"lazy\"" }),
			". Изображения с этим атрибутом загружаются только при приближении к видимой области экрана, что значительно ускоряет начальную загрузку страницы и снижает потребление трафика. Особенно эффективно для страниц с большим количеством изображений или длинных списков."
		] }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "preloadOffset" }),
			" определяет смещение в пикселях для предварительной загрузки изображений при использовании ленивой загрузки. По умолчанию установлено значение ",
			o(t.code, { children: "1024px" }),
			", что означает начало загрузки изображения за 1024 пикселя до того, как оно попадет в видимую область. Это обеспечивает плавную загрузку изображений без задержек при прокрутке. Можно указать как числовое значение, так и строку с единицей измерения."
		] }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "fetchPriority" }),
			" позволяет управлять приоритетом загрузки изображения браузером. Принимает три значения: ",
			o(t.code, { children: "high" }),
			" — высокий приоритет для критически важных изображений (например, главный баннер или hero-изображение), ",
			o(t.code, { children: "low" }),
			" — низкий приоритет для второстепенных изображений, ",
			o(t.code, { children: "auto" }),
			" — браузер самостоятельно определяет приоритет (значение по умолчанию). Правильное использование этого свойства помогает оптимизировать загрузку страницы, обеспечивая быструю загрузку важного контента."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst productImage = ref('/images/product.jpg')\n<\/script>\n\n<template>\n<!-- Базовое использование -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Описание продукта\"\n/>\n\n<!-- С ленивой загрузкой -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Товар\"\n  lazy\n/>\n\n<!-- С srcset объектом -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Адаптивное изображение\"\n  :srcset=\"{\n    '1x': '/images/product.jpg',\n    '2x': '/images/product@2x.jpg'\n  }\"\n/>\n\n<!-- С picture для разных размеров экрана -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Адаптивное изображение для разных устройств\"\n  :picture=\"{\n    768: '/images/product-tablet.jpg',\n    1024: '/images/product-desktop.jpg'\n  }\"\n/>\n\n<!-- С настройкой предзагрузки -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Изображение с ранней предзагрузкой\"\n  lazy\n  preload-offset=\"2048px\"\n/>\n\n<!-- С высоким приоритетом загрузки -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Главное изображение страницы\"\n  fetch-priority=\"high\"\n/>\n\n<!-- Комплексный пример -->\n<Image\n  :value=\"productImage\"\n  tag-img\n  alt=\"Адаптивное изображение товара\"\n  lazy\n  preload-offset=\"1536px\"\n  fetch-priority=\"low\"\n  :srcset=\"{\n    '1x': '/images/product.jpg',\n    '2x': '/images/product@2x.jpg',\n    '3x': '/images/product@3x.jpg'\n  }\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function fc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(dc, { ...e })
	}) : dc(e);
}
//#endregion
//#region src/media/mdx/Image/flag.en.mdx
function pc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Flags" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "Image" }),
			" component supports displaying country flags. A special format for the ",
			o(t.code, { children: "value" }),
			" property is used for this purpose."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Formats:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "flag-xx" }),
				" — standard flag (where ",
				o(t.code, { children: "xx" }),
				" is the ISO 3166-1 alpha-2 country code)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "f-xx" }),
				" — compressed flag (where ",
				o(t.code, { children: "xx" }),
				" is the ISO 3166-1 alpha-2 country code)"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic flag type detection by prefix" }),
			"\n",
			o(t.li, { children: "Support for all countries according to ISO 3166-1 alpha-2 standard" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Standard US flag -->\n<Image value=\"flag-us\" />\n\n<!-- Compressed Germany flag -->\n<Image value=\"f-de\" />\n</template>\n",
			language: "html"
		})
	] });
}
function mc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(pc, { ...e })
	}) : pc(e);
}
//#endregion
//#region src/media/mdx/Image/flag.ru.mdx
function hc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Флаги" }),
		"\n",
		s(t.p, { children: [
			"Компонент ",
			o(t.code, { children: "Image" }),
			" поддерживает отображение флагов стран. Для этого используется специальный формат значения свойства ",
			o(t.code, { children: "value" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Форматы:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "flag-xx" }),
				" — стандартный флаг (где ",
				o(t.code, { children: "xx" }),
				" — код страны ISO 3166-1 alpha-2)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "f-xx" }),
				" — сжатый флаг (где ",
				o(t.code, { children: "xx" }),
				" — код страны ISO 3166-1 alpha-2)"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическое определение типа флага по префиксу" }),
			"\n",
			o(t.li, { children: "Поддержка всех стран по стандарту ISO 3166-1 alpha-2" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Стандартный флаг США -->\n<Image value=\"flag-us\" />\n\n<!-- Сжатый флаг Германии -->\n<Image value=\"f-de\" />\n</template>\n",
			language: "html"
		})
	] });
}
function gc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(hc, { ...e })
	}) : hc(e);
}
//#endregion
//#region src/media/mdx/Image/event.load.en.mdx
function _c(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "load" }) }),
		"\n",
		o(t.p, { children: "Event fires after the image is loaded." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "image: ImageEventData" }), " — object with image data"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "ImageEventData structure:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type: ImageTypeItem" }),
				" — image type (",
				o(t.code, { children: "'image'" }),
				", ",
				o(t.code, { children: "'icon'" }),
				", ",
				o(t.code, { children: "'pdf'" }),
				", ",
				o(t.code, { children: "'file'" }),
				", ",
				o(t.code, { children: "'flag'" }),
				", ",
				o(t.code, { children: "'color'" }),
				", etc.)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "image: ImageEventItem" }),
				" — image data (",
				o(t.code, { children: "ImageItem" }),
				" object, URL string, or ",
				o(t.code, { children: "undefined" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "ImageItem structure (when image is an object):" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "width: number" }), " — image width"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "height: number" }), " — image height"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "image: HTMLImageElement" }), " — image DOM element"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "src: string" }), " — image source (URL)"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleLoad = (data) => {\nconsole.log('Image type:', data.type)\n\nif (typeof data.image === 'object' && data.image) {\n  console.log('Width:', data.image.width)\n  console.log('Height:', data.image.height)\n  console.log('URL:', data.image.src)\n} else {\n  console.log('Image URL:', data.image)\n}\n}\n<\/script>\n\n<template>\n<Image\n  src=\"/path/to/image.jpg\"\n  @load=\"handleLoad\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function vc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_c, { ...e })
	}) : _c(e);
}
//#endregion
//#region src/media/mdx/Image/event.load.ru.mdx
function yc(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "load" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает после загрузки изображения." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "image: ImageEventData" }), " — объект с данными изображения"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура ImageEventData:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type: ImageTypeItem" }),
				" — тип изображения (",
				o(t.code, { children: "'image'" }),
				", ",
				o(t.code, { children: "'icon'" }),
				", ",
				o(t.code, { children: "'pdf'" }),
				", ",
				o(t.code, { children: "'file'" }),
				", ",
				o(t.code, { children: "'flag'" }),
				", ",
				o(t.code, { children: "'color'" }),
				" и др.)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "image: ImageEventItem" }),
				" — данные изображения (объект ",
				o(t.code, { children: "ImageItem" }),
				", строка URL или ",
				o(t.code, { children: "undefined" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура ImageItem (если image - объект):" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "width: number" }), " — ширина изображения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "height: number" }), " — высота изображения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "image: HTMLImageElement" }), " — DOM элемент изображения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "src: string" }), " — источник изображения (URL)"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleLoad = (data) => {\nconsole.log('Тип изображения:', data.type)\n\nif (typeof data.image === 'object' && data.image) {\n  console.log('Ширина:', data.image.width)\n  console.log('Высота:', data.image.height)\n  console.log('URL:', data.image.src)\n} else {\n  console.log('URL изображения:', data.image)\n}\n}\n<\/script>\n\n<template>\n<Image\n  src=\"/path/to/image.jpg\"\n  @load=\"handleLoad\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function bc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(yc, { ...e })
	}) : yc(e);
}
//#endregion
//#region src/media/mdx/Image/expose.en.mdx
function xc(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "type: ComputedRef<ImageTypeItem>" }), " — Type of the loaded image."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				o(t.strong, { children: "ImageTypeItem values:" }),
				"\n",
				o(t.code, { children: "pdf" }),
				", ",
				o(t.code, { children: "file" }),
				", ",
				o(t.code, { children: "array" }),
				", ",
				o(t.code, { children: "image" }),
				", ",
				o(t.code, { children: "flag" }),
				", ",
				o(t.code, { children: "flag-compressed" }),
				", ",
				o(t.code, { children: "color" }),
				", ",
				o(t.code, { children: "public" }),
				", ",
				o(t.code, { children: "filled" }),
				", ",
				o(t.code, { children: "outlined" }),
				", ",
				o(t.code, { children: "round" }),
				", ",
				o(t.code, { children: "sharp" }),
				", ",
				o(t.code, { children: "two-tone" }),
				", ",
				o(t.code, { children: "material" }),
				", ",
				o(t.code, { children: "icon" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "data: Ref<ImageEventItem>" }), " — Information about the loaded image, including its source and metadata."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "ImageEventItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "src: string" }), " — source URL."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "width: number" }), " — image width."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "height: number" }), " — image height."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "image: HTMLImageElement" }), " — DOM element of the image."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Sc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(xc, { ...e })
	}) : xc(e);
}
//#endregion
//#region src/media/mdx/Image/expose.ru.mdx
function Cc(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "type: ComputedRef<ImageTypeItem>" }), " — Тип загруженного изображения."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				o(t.strong, { children: "Значения ImageTypeItem:" }),
				"\n",
				o(t.code, { children: "pdf" }),
				", ",
				o(t.code, { children: "file" }),
				", ",
				o(t.code, { children: "array" }),
				", ",
				o(t.code, { children: "image" }),
				", ",
				o(t.code, { children: "flag" }),
				", ",
				o(t.code, { children: "flag-compressed" }),
				", ",
				o(t.code, { children: "color" }),
				", ",
				o(t.code, { children: "public" }),
				", ",
				o(t.code, { children: "filled" }),
				", ",
				o(t.code, { children: "outlined" }),
				", ",
				o(t.code, { children: "round" }),
				", ",
				o(t.code, { children: "sharp" }),
				", ",
				o(t.code, { children: "two-tone" }),
				", ",
				o(t.code, { children: "material" }),
				", ",
				o(t.code, { children: "icon" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "data: Ref<ImageEventItem>" }), " — Информация о загруженном изображении, включая его источник и метаданные."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "ImageEventItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "src: string" }), " — URL-источник."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "width: number" }), " — ширина изображения."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "height: number" }), " — высота изображения."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "image: HTMLImageElement" }), " — DOM-элемент изображения."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function wc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Cc, { ...e })
	}) : Cc(e);
}
//#endregion
//#region src/media/mdx/Image/wikiMdxImage.ts
var Tc = {
	name: "Image",
	descriptions: {
		image: {
			en: Js,
			ru: Xs
		},
		value: {
			en: Qs,
			ru: ec
		},
		size: {
			en: nc,
			ru: ic
		},
		adaptive: {
			en: oc,
			ru: cc
		},
		"img-tag": {
			en: uc,
			ru: fc
		},
		flag: {
			en: mc,
			ru: gc
		},
		"event.load": {
			en: vc,
			ru: bc
		},
		expose: {
			en: Sc,
			ru: wc
		}
	}
};
//#endregion
//#region src/media/mdx/Input/currency.en.mdx
function Ec(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Currency Formatting" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "type" }),
			", ",
			o(t.code, { children: "currency" }),
			", ",
			o(t.code, { children: "currencyHide" }),
			", ",
			o(t.code, { children: "language" }),
			", and ",
			o(t.code, { children: "fraction" }),
			" are designed to manage currency value formatting with automatic currency symbol insertion and localization."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type" }),
				" — input type (set to ",
				o(t.code, { children: "currency" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "currency" }),
				" — currency code (e.g., ",
				o(t.code, { children: "USD" }),
				", ",
				o(t.code, { children: "EUR" }),
				", ",
				o(t.code, { children: "RUB" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "currencyHide" }), " — hides currency symbol in the input field"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "language" }),
				" — locale code for formatting (e.g., ",
				o(t.code, { children: "ru-RU" }),
				", ",
				o(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "fraction" }),
				" — number of decimal places (default ",
				o(t.code, { children: "2" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: ",
			o(t.code, { children: "type=\"currency\"" }),
			" automatically activates currency formatting mode with two decimal places. ",
			o(t.code, { children: "currency" }),
			" defines the symbol appended to the formatted number (",
			o(t.code, { children: "$" }),
			", ",
			o(t.code, { children: "€" }),
			", ",
			o(t.code, { children: "₽" }),
			"). When ",
			o(t.code, { children: "currencyHide" }),
			" is set, currency symbol is not displayed, but number formatting is preserved. Property ",
			o(t.code, { children: "language" }),
			" affects thousand separators, decimal separator, and currency symbol position. Number of decimal places can be changed via ",
			o(t.code, { children: "fraction" }),
			", overriding the default value."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nconst value = ref('1234.56')\n<\/script>\n\n<template>\n<!-- Standard currency input -->\n<Input v-model=\"value\" type=\"currency\" currency=\"USD\" language=\"en-US\" label=\"Price\" />\n\n<!-- Currency with Russian locale -->\n<Input v-model=\"value\" type=\"currency\" currency=\"RUB\" language=\"ru-RU\" label=\"Salary\" />\n\n<!-- Currency without symbol -->\n<Input v-model=\"value\" type=\"currency\" currency=\"EUR\" currency-hide language=\"de-DE\" label=\"Amount\" />\n\n<!-- Currency with three decimals -->\n<Input v-model=\"value\" type=\"currency\" currency=\"USD\" language=\"en-US\" :fraction=\"3\" label=\"Precise Amount\" />\n\n<!-- Number formatting only -->\n<Input v-model=\"value\" type=\"number-format\" language=\"ru-RU\" label=\"Number\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Dc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ec, { ...e })
	}) : Ec(e);
}
//#endregion
//#region src/media/mdx/Input/currency.ru.mdx
function Oc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Работа с валютой" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "type" }),
			", ",
			o(t.code, { children: "currency" }),
			", ",
			o(t.code, { children: "currencyHide" }),
			", ",
			o(t.code, { children: "language" }),
			" и ",
			o(t.code, { children: "fraction" }),
			" предназначены для управления форматированием денежных значений с автоматической подстановкой символа валюты и локализацией."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type" }),
				" — тип инпута (устанавливается значение ",
				o(t.code, { children: "currency" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "currency" }),
				" — код валюты (например, ",
				o(t.code, { children: "USD" }),
				", ",
				o(t.code, { children: "EUR" }),
				", ",
				o(t.code, { children: "RUB" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "currencyHide" }), " — скрывает символ валюты в поле ввода"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "language" }),
				" — код локали для форматирования (например, ",
				o(t.code, { children: "ru-RU" }),
				", ",
				o(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "fraction" }),
				" — количество знаков после запятой (по умолчанию ",
				o(t.code, { children: "2" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: ",
			o(t.code, { children: "type=\"currency\"" }),
			" автоматически активирует режим валютного форматирования с двумя знаками после запятой. ",
			o(t.code, { children: "currency" }),
			" определяет символ, который добавляется к отформатированному числу (",
			o(t.code, { children: "$" }),
			", ",
			o(t.code, { children: "€" }),
			", ",
			o(t.code, { children: "₽" }),
			"). При установке ",
			o(t.code, { children: "currencyHide" }),
			" символ валюты не отображается, но форматирование числа сохраняется. Свойство ",
			o(t.code, { children: "language" }),
			" влияет на разделители тысяч, десятичный разделитель и позицию символа валюты. Количество десятичных знаков можно изменить через ",
			o(t.code, { children: "fraction" }),
			", перезаписав значение по умолчанию."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nconst value = ref('1234.56')\n<\/script>\n\n<template>\n<!-- Стандартный валютный инпут -->\n<Input v-model=\"value\" type=\"currency\" currency=\"USD\" language=\"en-US\" label=\"Цена\" />\n\n<!-- Валюта с русской локалью -->\n<Input v-model=\"value\" type=\"currency\" currency=\"RUB\" language=\"ru-RU\" label=\"Зарплата\" />\n\n<!-- Валюта без символа -->\n<Input v-model=\"value\" type=\"currency\" currency=\"EUR\" currency-hide language=\"de-DE\" label=\"Сумма\" />\n\n<!-- Валюта с тремя знаками -->\n<Input v-model=\"value\" type=\"currency\" currency=\"USD\" language=\"en-US\" :fraction=\"3\" label=\"Точная сумма\" />\n\n<!-- Только числовое форматирование -->\n<Input v-model=\"value\" type=\"number-format\" language=\"ru-RU\" label=\"Число\" />\n</template>\n",
			language: "html"
		})
	] });
}
function kc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Oc, { ...e })
	}) : Oc(e);
}
//#endregion
//#region src/media/mdx/Input/date.en.mdx
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
	return s(a, { children: [
		o(t.h2, { children: "Date and Time Formatting" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "type" }),
			", ",
			o(t.code, { children: "language" }),
			", and ",
			o(t.code, { children: "mask" }),
			" are designed to manage date and time input and formatting with automatic localization and masking."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type" }),
				" — input type (set to one of: ",
				o(t.code, { children: "date" }),
				", ",
				o(t.code, { children: "datetime" }),
				", ",
				o(t.code, { children: "year-month" }),
				", ",
				o(t.code, { children: "time" }),
				", ",
				o(t.code, { children: "hour-minute" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "language" }),
				" — locale code for formatting (e.g., ",
				o(t.code, { children: "ru-RU" }),
				", ",
				o(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "mask" }), " — custom input mask (optional)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "min" }), " — minimum allowed date/time value"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "max" }), " — maximum allowed date/time value"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: ",
			o(t.code, { children: "type=\"date\"" }),
			" automatically activates date input mode with localized formatting. ",
			o(t.code, { children: "language" }),
			" determines the order of date components (day/month/year or month/day/year) and separators. ",
			o(t.code, { children: "type=\"datetime\"" }),
			" adds time input to the date. Types ",
			o(t.code, { children: "year-month" }),
			", ",
			o(t.code, { children: "time" }),
			", and ",
			o(t.code, { children: "hour-minute" }),
			" allow input of specific components only. Properties ",
			o(t.code, { children: "min" }),
			" and ",
			o(t.code, { children: "max" }),
			" restrict the range of allowed values. You can override the automatic mask via the ",
			o(t.code, { children: "mask" }),
			" property for custom formatting."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nconst dateValue = ref('2024-03-15')\nconst datetimeValue = ref('2024-03-15T14:30:00')\nconst timeValue = ref('14:30')\nconst yearMonthValue = ref('2024-03')\n<\/script>\n\n<template>\n<!-- Standard date input -->\n<Input v-model=\"dateValue\" type=\"date\" language=\"en-US\" label=\"Date\" />\n\n<!-- Date with Russian locale -->\n<Input v-model=\"dateValue\" type=\"date\" language=\"ru-RU\" label=\"Дата\" />\n\n<!-- Date and time -->\n<Input v-model=\"datetimeValue\" type=\"datetime\" language=\"en-US\" label=\"Date and Time\" />\n\n<!-- Time only -->\n<Input v-model=\"timeValue\" type=\"time\" language=\"en-US\" label=\"Time\" />\n\n<!-- Hours and minutes -->\n<Input v-model=\"timeValue\" type=\"hour-minute\" language=\"en-US\" label=\"Hours:Minutes\" />\n\n<!-- Year and month -->\n<Input v-model=\"yearMonthValue\" type=\"year-month\" language=\"en-US\" label=\"Period\" />\n\n<!-- Date with constraints -->\n<Input\n  v-model=\"dateValue\"\n  type=\"date\"\n  language=\"en-US\"\n  min=\"2024-01-01\"\n  max=\"2024-12-31\"\n  label=\"Date in 2024\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function jc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ac, { ...e })
	}) : Ac(e);
}
//#endregion
//#region src/media/mdx/Input/date.ru.mdx
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
	return s(a, { children: [
		o(t.h2, { children: "Работа с датой и временем" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "type" }),
			", ",
			o(t.code, { children: "language" }),
			" и ",
			o(t.code, { children: "mask" }),
			" предназначены для управления вводом и форматированием значений даты и времени с автоматической локализацией и маскированием."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type" }),
				" — тип инпута (устанавливается одно из значений: ",
				o(t.code, { children: "date" }),
				", ",
				o(t.code, { children: "datetime" }),
				", ",
				o(t.code, { children: "year-month" }),
				", ",
				o(t.code, { children: "time" }),
				", ",
				o(t.code, { children: "hour-minute" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "language" }),
				" — код локали для форматирования (например, ",
				o(t.code, { children: "ru-RU" }),
				", ",
				o(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "mask" }), " — пользовательская маска для ввода (опционально)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "min" }), " — минимальное допустимое значение даты/времени"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "max" }), " — максимальное допустимое значение даты/времени"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: ",
			o(t.code, { children: "type=\"date\"" }),
			" автоматически активирует режим ввода даты с локализованным форматированием. ",
			o(t.code, { children: "language" }),
			" определяет порядок компонентов даты (день/месяц/год или месяц/день/год) и разделители. ",
			o(t.code, { children: "type=\"datetime\"" }),
			" добавляет к дате ввод времени. Типы ",
			o(t.code, { children: "year-month" }),
			", ",
			o(t.code, { children: "time" }),
			" и ",
			o(t.code, { children: "hour-minute" }),
			" позволяют вводить только определённые компоненты. Свойства ",
			o(t.code, { children: "min" }),
			" и ",
			o(t.code, { children: "max" }),
			" ограничивают диапазон допустимых значений. Можно переопределить автоматическую маску через свойство ",
			o(t.code, { children: "mask" }),
			" для кастомного форматирования."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nconst dateValue = ref('2024-03-15')\nconst datetimeValue = ref('2024-03-15T14:30:00')\nconst timeValue = ref('14:30')\nconst yearMonthValue = ref('2024-03')\n<\/script>\n\n<template>\n<!-- Стандартный ввод даты -->\n<Input v-model=\"dateValue\" type=\"date\" language=\"ru-RU\" label=\"Дата\" />\n\n<!-- Дата с английской локалью -->\n<Input v-model=\"dateValue\" type=\"date\" language=\"en-US\" label=\"Date\" />\n\n<!-- Дата и время -->\n<Input v-model=\"datetimeValue\" type=\"datetime\" language=\"ru-RU\" label=\"Дата и время\" />\n\n<!-- Только время -->\n<Input v-model=\"timeValue\" type=\"time\" language=\"ru-RU\" label=\"Время\" />\n\n<!-- Часы и минуты -->\n<Input v-model=\"timeValue\" type=\"hour-minute\" language=\"ru-RU\" label=\"Часы:Минуты\" />\n\n<!-- Год и месяц -->\n<Input v-model=\"yearMonthValue\" type=\"year-month\" language=\"ru-RU\" label=\"Период\" />\n\n<!-- Дата с ограничениями -->\n<Input\n  v-model=\"dateValue\"\n  type=\"date\"\n  language=\"ru-RU\"\n  min=\"2024-01-01\"\n  max=\"2024-12-31\"\n  label=\"Дата в 2024 году\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Nc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Mc, { ...e })
	}) : Mc(e);
}
//#endregion
//#region src/media/mdx/Input/input.en.mdx
function Pc(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Text input field component with validation, masking and formatting support." }),
		"\n",
		o(t.p, { children: "Input provides a flexible interface for entering various types of data: text, numbers, email, passwords, phones, URLs, dates and time. The component automatically applies appropriate validation, formatting and keyboard based on the specified type. Supports masking for structured input (phones, dates, custom patterns), currency and number formatting, password visibility control and integration with the Field component for consistent styling." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Multiple input types (text, number, email, password, tel, url, date, time and more)" }),
			"\n",
			o(t.li, { children: "Built-in validation with custom messages" }),
			"\n",
			o(t.li, { children: "Masking for formatted input" }),
			"\n",
			o(t.li, { children: "Currency and number formatting with localization" }),
			"\n",
			o(t.li, { children: "Password visibility toggle" }),
			"\n",
			o(t.li, { children: "Prefix and suffix for additional context" }),
			"\n",
			o(t.li, { children: "Character counter for length limits" }),
			"\n",
			o(t.li, { children: "Navigation arrows for numeric values" }),
			"\n",
			o(t.li, { children: "Autocomplete and spellcheck support" }),
			"\n",
			o(t.li, { children: "Clear button for value reset" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Registration and login forms" }),
			"\n",
			o(t.li, { children: "Contact information fields (email, phone)" }),
			"\n",
			o(t.li, { children: "Numeric fields (quantity, price, age)" }),
			"\n",
			o(t.li, { children: "Password fields with visibility toggle" }),
			"\n",
			o(t.li, { children: "Search fields with quick clear" }),
			"\n",
			o(t.li, { children: "Formatted input (phones, dates, cards)" }),
			"\n",
			o(t.li, { children: "Currency fields with automatic formatting" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst email = ref('')\nconst password = ref('')\n\nconst handleInput = (event, validation) => {\nconsole.log('Input value:', validation.value)\nconsole.log('Valid:', validation.status)\n}\n<\/script>\n\n<template>\n<div class=\"form\">\n  <Input\n    v-model=\"email\"\n    type=\"email\"\n    label=\"Email\"\n    placeholder=\"example@mail.com\"\n    required\n    @input=\"handleInput\"\n  />\n\n  <Input\n    v-model=\"password\"\n    type=\"password\"\n    label=\"Password\"\n    placeholder=\"Enter password\"\n    minlength=\"8\"\n    required\n    iconVisibility=\"visibility\"\n    iconVisibilityOff=\"visibility_off\"\n  />\n\n  <Input\n    type=\"currency\"\n    label=\"Price\"\n    currency=\"USD\"\n    language=\"en-US\"\n  />\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.p, { children: "Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования." }),
		"\n",
		o(t.p, { children: "Input предоставляет гибкий интерфейс для ввода данных различных типов: текст, числа, email, пароли, телефоны, URL, даты и время. Компонент автоматически применяет соответствующую валидацию, форматирование и клавиатуру в зависимости от указанного типа. Поддерживает маскирование для структурированного ввода (телефоны, даты, кастомные паттерны), форматирование валют и чисел, управление видимостью пароля и интеграцию с компонентом Field для единообразной стилизации." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Множественные типы ввода (text, number, email, password, tel, url, date, time и другие)" }),
			"\n",
			o(t.li, { children: "Встроенная валидация с пользовательскими сообщениями" }),
			"\n",
			o(t.li, { children: "Маскирование для форматированного ввода" }),
			"\n",
			o(t.li, { children: "Форматирование валюты и чисел с локализацией" }),
			"\n",
			o(t.li, { children: "Переключатель видимости пароля" }),
			"\n",
			o(t.li, { children: "Префикс и суффикс для дополнительного контекста" }),
			"\n",
			o(t.li, { children: "Счётчик символов для ограничения длины" }),
			"\n",
			o(t.li, { children: "Стрелки навигации для числовых значений" }),
			"\n",
			o(t.li, { children: "Поддержка автозаполнения и проверки орфографии" }),
			"\n",
			o(t.li, { children: "Кнопка очистки значения" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Формы регистрации и авторизации" }),
			"\n",
			o(t.li, { children: "Поля ввода контактных данных (email, телефон)" }),
			"\n",
			o(t.li, { children: "Числовые поля (количество, цена, возраст)" }),
			"\n",
			o(t.li, { children: "Поля для ввода паролей с переключением видимости" }),
			"\n",
			o(t.li, { children: "Поля поиска с быстрой очисткой" }),
			"\n",
			o(t.li, { children: "Форматированный ввод (телефоны, даты, карты)" }),
			"\n",
			o(t.li, { children: "Валютные поля с автоматическим форматированием" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst email = ref('')\nconst password = ref('')\n\nconst handleInput = (event, validation) => {\nconsole.log('Введённое значение:', validation.value)\nconsole.log('Валидно:', validation.status)\n}\n<\/script>\n\n<template>\n<div class=\"form\">\n  <Input\n    v-model=\"email\"\n    type=\"email\"\n    label=\"Email\"\n    placeholder=\"example@mail.com\"\n    required\n    @input=\"handleInput\"\n  />\n\n  <Input\n    v-model=\"password\"\n    type=\"password\"\n    label=\"Пароль\"\n    placeholder=\"Введите пароль\"\n    minlength=\"8\"\n    required\n    iconVisibility=\"visibility\"\n    iconVisibilityOff=\"visibility_off\"\n  />\n\n  <Input\n    type=\"currency\"\n    label=\"Цена\"\n    currency=\"RUB\"\n    language=\"ru-RU\"\n  />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Fc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pc, { ...e })
	}) : Pc(e);
}
//#endregion
//#region src/media/mdx/Input/input.ru.mdx
function Ic(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования." }),
		"\n",
		o(t.p, { children: "Input предоставляет гибкий интерфейс для ввода данных различных типов: текст, числа, email, пароли, телефоны, URL, даты и время. Компонент автоматически применяет соответствующую валидацию, форматирование и клавиатуру в зависимости от указанного типа. Поддерживает маскирование для структурированного ввода (телефоны, даты, кастомные паттерны), форматирование валют и чисел, управление видимостью пароля и интеграцию с компонентом Field для единообразной стилизации." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Множественные типы ввода (text, number, email, password, tel, url, date, time и другие)" }),
			"\n",
			o(t.li, { children: "Встроенная валидация с пользовательскими сообщениями" }),
			"\n",
			o(t.li, { children: "Маскирование для форматированного ввода" }),
			"\n",
			o(t.li, { children: "Форматирование валюты и чисел с локализацией" }),
			"\n",
			o(t.li, { children: "Переключатель видимости пароля" }),
			"\n",
			o(t.li, { children: "Префикс и суффикс для дополнительного контекста" }),
			"\n",
			o(t.li, { children: "Счётчик символов для ограничения длины" }),
			"\n",
			o(t.li, { children: "Стрелки навигации для числовых значений" }),
			"\n",
			o(t.li, { children: "Поддержка автозаполнения и проверки орфографии" }),
			"\n",
			o(t.li, { children: "Кнопка очистки значения" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Формы регистрации и авторизации" }),
			"\n",
			o(t.li, { children: "Поля ввода контактных данных (email, телефон)" }),
			"\n",
			o(t.li, { children: "Числовые поля (количество, цена, возраст)" }),
			"\n",
			o(t.li, { children: "Поля для ввода паролей с переключением видимости" }),
			"\n",
			o(t.li, { children: "Поля поиска с быстрой очисткой" }),
			"\n",
			o(t.li, { children: "Форматированный ввод (телефоны, даты, карты)" }),
			"\n",
			o(t.li, { children: "Валютные поля с автоматическим форматированием" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst email = ref('')\nconst password = ref('')\n\nconst handleInput = (event, validation) => {\nconsole.log('Введённое значение:', validation.value)\nconsole.log('Валидно:', validation.status)\n}\n<\/script>\n\n<template>\n<div class=\"form\">\n  <Input\n    v-model=\"email\"\n    type=\"email\"\n    label=\"Email\"\n    placeholder=\"example@mail.com\"\n    required\n    @input=\"handleInput\"\n  />\n\n  <Input\n    v-model=\"password\"\n    type=\"password\"\n    label=\"Пароль\"\n    placeholder=\"Введите пароль\"\n    minlength=\"8\"\n    required\n    iconVisibility=\"visibility\"\n    iconVisibilityOff=\"visibility_off\"\n  />\n\n  <Input\n    type=\"currency\"\n    label=\"Цена\"\n    currency=\"RUB\"\n    language=\"ru-RU\"\n  />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Lc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ic, { ...e })
	}) : Ic(e);
}
//#endregion
//#region src/media/mdx/Input/mask.en.mdx
function Rc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Input Masking" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "mask" }),
			", ",
			o(t.code, { children: "maskVisible" }),
			", ",
			o(t.code, { children: "maskNone" }),
			", and ",
			o(t.code, { children: "maskAttrs" }),
			" are designed to manage formatted input with automatic separator insertion and character control at specified positions."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "mask" }),
				" — mask template as a string (e.g., ",
				o(t.code, { children: "+1 (***) ***-****" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "maskVisible" }),
				" — controls placeholder characters display (default ",
				o(t.code, { children: "true" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "maskNone" }), " — completely disables the mask"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "maskAttrs" }), " — object with extended mask settings"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: ",
			o(t.code, { children: "mask" }),
			" defines the formatting structure, where special character (default ",
			o(t.code, { children: "*" }),
			") defines positions for digit input, and other characters (spaces, brackets, hyphens) are automatically inserted as fixed separators. ",
			o(t.code, { children: "maskVisible" }),
			" controls the display of unfilled positions, where when set to ",
			o(t.code, { children: "true" }),
			" they are displayed with placeholder characters ",
			o(t.code, { children: "_" }),
			", and when ",
			o(t.code, { children: "false" }),
			" only entered characters with separators are shown. ",
			o(t.code, { children: "maskNone" }),
			" allows completely disabling masking logic, converting the field to a regular text input. ",
			o(t.code, { children: "maskAttrs" }),
			" provides access to extended settings, allowing configuration of special characters (",
			o(t.code, { children: "special" }),
			"), regular expressions for validation (",
			o(t.code, { children: "match" }),
			"), custom placeholder characters (",
			o(t.code, { children: "view" }),
			"), validation patterns (",
			o(t.code, { children: "pattern" }),
			"), and rubber groups (",
			o(t.code, { children: "rubber" }),
			")."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nconst value = ref('')\n<\/script>\n\n<template>\n<!-- US Phone -->\n<Input v-model=\"value\" type=\"tel\" mask=\"+1 (###) ###-####\" placeholder=\"+1 (555) 000-0000\" label=\"Phone\" />\n\n<!-- Credit Card -->\n<Input v-model=\"value\" type=\"text\" mask=\"#### #### #### ####\" placeholder=\"0000 0000 0000 0000\" label=\"Card\" />\n\n<!-- Without placeholder display -->\n<Input v-model=\"value\" type=\"tel\" mask=\"+1 (###) ###-####\" :mask-visible=\"false\" label=\"No placeholder\" />\n</template>\n",
			language: "html"
		})
	] });
}
function zc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Rc, { ...e })
	}) : Rc(e);
}
//#endregion
//#region src/media/mdx/Input/mask.ru.mdx
function Bc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Маскирование ввода" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "mask" }),
			", ",
			o(t.code, { children: "maskVisible" }),
			", ",
			o(t.code, { children: "maskNone" }),
			" и ",
			o(t.code, { children: "maskAttrs" }),
			" предназначены для управления форматированным вводом с автоматической подстановкой разделителей и контролем символов в заданных позициях."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "mask" }),
				" — шаблон маски в виде строки (например, ",
				o(t.code, { children: "+1 (***) ***-****" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "maskVisible" }),
				" — управляет отображением символов-заполнителей (по умолчанию ",
				o(t.code, { children: "true" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "maskNone" }), " — полностью отключает маску"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "maskAttrs" }), " — объект с расширенными настройками маски"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: ",
			o(t.code, { children: "mask" }),
			" определяет структуру форматирования, где специальный символ (по умолчанию ",
			o(t.code, { children: "*" }),
			") определяет позиции для ввода цифр, а остальные символы (пробелы, скобки, дефисы) автоматически подставляются как фиксированные разделители. ",
			o(t.code, { children: "maskVisible" }),
			" управляет отображением незаполненных позиций, где при значении ",
			o(t.code, { children: "true" }),
			" они отображаются символами-заполнителями ",
			o(t.code, { children: "_" }),
			", а при ",
			o(t.code, { children: "false" }),
			" показываются только введённые символы с разделителями. ",
			o(t.code, { children: "maskNone" }),
			" позволяет полностью отключить логику маскирования, превращая поле в обычный текстовый инпут. ",
			o(t.code, { children: "maskAttrs" }),
			" обеспечивает доступ к расширенным настройкам, позволяя настраивать специальные символы (",
			o(t.code, { children: "special" }),
			"), регулярные выражения для проверки (",
			o(t.code, { children: "match" }),
			"), кастомные символы-заполнители (",
			o(t.code, { children: "view" }),
			"), паттерны валидации (",
			o(t.code, { children: "pattern" }),
			") и резиновые группы (",
			o(t.code, { children: "rubber" }),
			")."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nconst value = ref('')\n<\/script>\n\n<template>\n<!-- Телефон США -->\n<Input v-model=\"value\" type=\"tel\" mask=\"+1 (###) ###-####\" placeholder=\"+1 (555) 000-0000\" label=\"Телефон\" />\n\n<!-- Кредитная карта -->\n<Input v-model=\"value\" type=\"text\" mask=\"#### #### #### ####\" placeholder=\"0000 0000 0000 0000\" label=\"Карта\" />\n\n<!-- Без отображения символов-заполнителей -->\n<Input v-model=\"value\" type=\"tel\" mask=\"+1 (###) ###-####\" :mask-visible=\"false\" label=\"Без заполнителя\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Vc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Bc, { ...e })
	}) : Bc(e);
}
//#endregion
//#region src/media/mdx/Input/number.en.mdx
function Hc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Working with Numbers" }),
		"\n",
		s(t.p, { children: [
			"Properties ",
			o(t.code, { children: "type" }),
			", ",
			o(t.code, { children: "fraction" }),
			", ",
			o(t.code, { children: "language" }),
			", ",
			o(t.code, { children: "min" }),
			", ",
			o(t.code, { children: "max" }),
			", ",
			o(t.code, { children: "step" }),
			", ",
			o(t.code, { children: "arrow" }),
			", ",
			o(t.code, { children: "arrowStep" }),
			", and ",
			o(t.code, { children: "align" }),
			" are designed to manage numeric value input and formatting with localization support and interactive control elements."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type" }),
				" — input type (",
				o(t.code, { children: "number" }),
				" or ",
				o(t.code, { children: "number-format" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "fraction" }),
				" — number of decimal places (number, ",
				o(t.code, { children: "true" }),
				" for dynamic fractional part)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "language" }),
				" — locale code for formatting (e.g., ",
				o(t.code, { children: "ru-RU" }),
				", ",
				o(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "min" }), " — minimum allowed value"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "max" }), " — maximum allowed value"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "step" }), " — step size for keyboard input"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "arrow" }),
				" — control arrows type (",
				o(t.code, { children: "auto" }),
				", ",
				o(t.code, { children: "stepper" }),
				", ",
				o(t.code, { children: "carousel" }),
				", ",
				o(t.code, { children: "none" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "arrowStep" }), " — step size for arrow clicks"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "align" }),
				" — arrows placement (",
				o(t.code, { children: "left" }),
				", ",
				o(t.code, { children: "center" }),
				", ",
				o(t.code, { children: "right" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: ",
			o(t.code, { children: "type" }),
			" defines the base input mode, where ",
			o(t.code, { children: "number" }),
			" activates simple numeric input with basic validation without formatting, and ",
			o(t.code, { children: "number-format" }),
			" enables automatic formatting with thousands separators and decimal places depending on locale. ",
			o(t.code, { children: "language" }),
			" defines regional rules for thousands separators (space, comma, period) and decimal separator (period or comma). Properties ",
			o(t.code, { children: "min" }),
			" and ",
			o(t.code, { children: "max" }),
			" activate built-in range validation. ",
			o(t.code, { children: "step" }),
			" defines increment/decrement magnitude when using arrow keys up/down and Page Up/Down. Properties ",
			o(t.code, { children: "arrow" }),
			" and ",
			o(t.code, { children: "arrowStep" }),
			" add visual control elements (± buttons or < > arrows) with customizable step size, where if ",
			o(t.code, { children: "arrowStep" }),
			" is not specified, ",
			o(t.code, { children: "step" }),
			" value is used. ",
			o(t.code, { children: "align" }),
			" controls arrows placement in the input field."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nconst value = ref('1234567.89')\n<\/script>\n\n<template>\n<!-- Simple numeric input -->\n<Input v-model=\"value\" type=\"number\" label=\"Number\" />\n\n<!-- Formatted number with locale -->\n<Input v-model=\"value\" type=\"number-format\" language=\"en-US\" label=\"Formatted\" />\n\n<!-- With range constraints -->\n<Input v-model=\"value\" type=\"number\" :min=\"0\" :max=\"100\" label=\"From 0 to 100\" />\n\n<!-- With step and stepper arrows -->\n<Input v-model=\"value\" type=\"number\" arrow=\"stepper\" :step=\"5\" :arrow-step=\"10\" label=\"Step 5/10\" />\n\n<!-- With center alignment -->\n<Input v-model=\"value\" type=\"number-format\" align=\"center\" :fraction=\"2\" label=\"Centered\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Uc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Hc, { ...e })
	}) : Hc(e);
}
//#endregion
//#region src/media/mdx/Input/number.ru.mdx
function Wc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Работа с числами" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "type" }),
			", ",
			o(t.code, { children: "fraction" }),
			", ",
			o(t.code, { children: "language" }),
			", ",
			o(t.code, { children: "min" }),
			", ",
			o(t.code, { children: "max" }),
			", ",
			o(t.code, { children: "step" }),
			", ",
			o(t.code, { children: "arrow" }),
			", ",
			o(t.code, { children: "arrowStep" }),
			" и ",
			o(t.code, { children: "align" }),
			" предназначены для управления вводом и форматированием числовых значений с поддержкой локализации и интерактивных элементов управления."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "type" }),
				" — тип инпута (",
				o(t.code, { children: "number" }),
				" или ",
				o(t.code, { children: "number-format" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "fraction" }),
				" — количество знаков после запятой (число, ",
				o(t.code, { children: "true" }),
				" для динамической дробной части)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "language" }),
				" — код локали для форматирования (например, ",
				o(t.code, { children: "ru-RU" }),
				", ",
				o(t.code, { children: "en-US" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "min" }), " — минимальное допустимое значение"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "max" }), " — максимальное допустимое значение"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "step" }), " — шаг изменения при клавиатурном вводе"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "arrow" }),
				" — тип управляющих стрелок (",
				o(t.code, { children: "auto" }),
				", ",
				o(t.code, { children: "stepper" }),
				", ",
				o(t.code, { children: "carousel" }),
				", ",
				o(t.code, { children: "none" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "arrowStep" }), " — шаг изменения при нажатии на стрелки"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "align" }),
				" — расположение стрелок (",
				o(t.code, { children: "left" }),
				", ",
				o(t.code, { children: "center" }),
				", ",
				o(t.code, { children: "right" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: ",
			o(t.code, { children: "type" }),
			" определяет базовый режим ввода, где ",
			o(t.code, { children: "number" }),
			" активирует простой числовой ввод с базовой валидацией без форматирования, а ",
			o(t.code, { children: "number-format" }),
			" включает автоматическое форматирование с разделителями тысяч и десятичными знаками в зависимости от локали. ",
			o(t.code, { children: "language" }),
			" определяет региональные правила для разделителей тысяч (пробел, запятая, точка) и десятичного разделителя (точка или запятая). Свойства ",
			o(t.code, { children: "min" }),
			" и ",
			o(t.code, { children: "max" }),
			" активируют встроенную валидацию диапазона. ",
			o(t.code, { children: "step" }),
			" определяет величину инкремента/декремента при использовании клавиш стрелок вверх/вниз и Page Up/Down. Свойства ",
			o(t.code, { children: "arrow" }),
			" и ",
			o(t.code, { children: "arrowStep" }),
			" добавляют визуальные элементы управления (кнопки ± или стрелки < >) с настраиваемым шагом изменения, где если ",
			o(t.code, { children: "arrowStep" }),
			" не указан, используется значение ",
			o(t.code, { children: "step" }),
			". ",
			o(t.code, { children: "align" }),
			" управляет расположением стрелок в поле ввода."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nconst value = ref('1234567.89')\n<\/script>\n\n<template>\n<!-- Простой числовой ввод -->\n<Input v-model=\"value\" type=\"number\" label=\"Число\" />\n\n<!-- Форматированное число с локалью -->\n<Input v-model=\"value\" type=\"number-format\" language=\"ru-RU\" label=\"Форматированное\" />\n\n<!-- С ограничениями диапазона -->\n<Input v-model=\"value\" type=\"number\" :min=\"0\" :max=\"100\" label=\"От 0 до 100\" />\n\n<!-- С шагом и стрелками stepper -->\n<Input v-model=\"value\" type=\"number\" arrow=\"stepper\" :step=\"5\" :arrow-step=\"10\" label=\"Шаг 5/10\" />\n\n<!-- С выравниванием по центру -->\n<Input v-model=\"value\" type=\"number-format\" align=\"center\" :fraction=\"2\" label=\"По центру\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Gc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Wc, { ...e })
	}) : Wc(e);
}
//#endregion
//#region src/media/mdx/Input/type.en.mdx
function Kc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Input Field Type" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "type" }),
			" property defines the type and behavior of the Input field."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Available values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'text'" }), " — standard text field (default value)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'search'" }), " — search field with quick clear functionality"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'number'" }), " — numeric field with basic number validation"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'number-format'" }), " — numeric field with formatting (thousands separators)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'currency'" }), " — field for currency input with currency formatting"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'email'" }), " — field for email input with corresponding validation"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'password'" }), " — field for password input (hides characters)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'datetime'" }), " — field for date and time input"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'date'" }), " — field for date input"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'year-month'" }), " — field for year and month input"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'time'" }), " — field for time input"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'hour-minute'" }), " — field for hours and minutes input"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'tel'" }), " — field for telephone number input"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'url'" }), " — field for web address input with URL validation"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'checkbox'" }), " — checkbox (used for boolean values)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'radio'" }), " — radio button (used for selecting one option from a group)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Each type activates corresponding validation, formatting, and input mechanisms. For the ",
			o(t.code, { children: "password" }),
			" type, a visibility toggle function is available through a special icon. Types ",
			o(t.code, { children: "number" }),
			", ",
			o(t.code, { children: "number-format" }),
			", and ",
			o(t.code, { children: "currency" }),
			" automatically enable formatting and restrict input to numeric values only. Types ",
			o(t.code, { children: "email" }),
			", ",
			o(t.code, { children: "tel" }),
			", and ",
			o(t.code, { children: "url" }),
			" apply built-in HTML5 validation and set the appropriate ",
			o(t.code, { children: "inputMode" }),
			" for mobile keyboards. Date and time related types (",
			o(t.code, { children: "datetime" }),
			", ",
			o(t.code, { children: "date" }),
			", ",
			o(t.code, { children: "year-month" }),
			", ",
			o(t.code, { children: "time" }),
			", ",
			o(t.code, { children: "hour-minute" }),
			") activate special input masks and value formatting."
		] })
	] });
}
function qc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Kc, { ...e })
	}) : Kc(e);
}
//#endregion
//#region src/media/mdx/Input/type.ru.mdx
function Jc(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Тип поля ввода" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "type" }),
			" определяет тип и поведение поля ввода Input."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'text'" }), " — обычное текстовое поле (значение по умолчанию)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'search'" }), " — поле для поиска с возможностью быстрой очистки"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'number'" }), " — числовое поле с базовой валидацией чисел"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'number-format'" }), " — числовое поле с форматированием (разделители тысяч)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'currency'" }), " — поле для ввода денежных значений с форматированием валюты"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'email'" }), " — поле для ввода электронной почты с соответствующей валидацией"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'password'" }), " — поле для ввода пароля (скрывает символы)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'datetime'" }), " — поле для ввода даты и времени"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'date'" }), " — поле для ввода даты"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'year-month'" }), " — поле для ввода года и месяца"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'time'" }), " — поле для ввода времени"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'hour-minute'" }), " — поле для ввода часов и минут"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'tel'" }), " — поле для ввода телефонного номера"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'url'" }), " — поле для ввода веб-адреса с валидацией URL"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'checkbox'" }), " — чекбокс (используется для булевых значений)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'radio'" }), " — радиокнопка (используется для выбора одного варианта из группы)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Каждый тип активирует соответствующие механизмы валидации, форматирования и ввода. Для типа ",
			o(t.code, { children: "password" }),
			" доступна функция переключения видимости через специальную иконку. Типы ",
			o(t.code, { children: "number" }),
			", ",
			o(t.code, { children: "number-format" }),
			" и ",
			o(t.code, { children: "currency" }),
			" автоматически включают форматирование и ограничивают ввод только числовыми значениями. Типы ",
			o(t.code, { children: "email" }),
			", ",
			o(t.code, { children: "tel" }),
			" и ",
			o(t.code, { children: "url" }),
			" применяют встроенную HTML5-валидацию и устанавливают соответствующий ",
			o(t.code, { children: "inputMode" }),
			" для мобильных клавиатур. Типы, связанные с датой и временем (",
			o(t.code, { children: "datetime" }),
			", ",
			o(t.code, { children: "date" }),
			", ",
			o(t.code, { children: "year-month" }),
			", ",
			o(t.code, { children: "time" }),
			", ",
			o(t.code, { children: "hour-minute" }),
			"), активируют специальные маски ввода и форматирование значений."
		] })
	] });
}
function Yc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Jc, { ...e })
	}) : Jc(e);
}
//#endregion
//#region src/media/mdx/Input/wikiMdxInput.ts
var Xc = {
	name: "Input",
	descriptions: {
		currency: {
			en: Dc,
			ru: kc
		},
		date: {
			en: jc,
			ru: Nc
		},
		input: {
			en: Fc,
			ru: Lc
		},
		mask: {
			en: zc,
			ru: Vc
		},
		number: {
			en: Uc,
			ru: Gc
		},
		type: {
			en: qc,
			ru: Yc
		}
	}
};
//#endregion
//#region src/media/mdx/List/list.en.mdx
function Zc(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "A component for creating interactive lists with support for hierarchical data, keyboard navigation, and search functionality." }),
		"\n",
		o(t.p, { children: "List manages the display of structured data with navigation capabilities, item selection, and interaction through keyboard and mouse. The component supports various item types (regular items, groups, menus, dividers, subtitles, HTML content), automatically handles complex hierarchical structures, and provides intuitive navigation. The built-in search system works in real-time with match highlighting across the entire data hierarchy." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Various item types (item, group, menu, line, subtitle, html)" }),
			"\n",
			o(t.li, { children: "Hierarchical structure with nested groups and menus" }),
			"\n",
			o(t.li, { children: "Full keyboard navigation (↑/↓, Enter, →, ←)" }),
			"\n",
			o(t.li, { children: "Built-in real-time search with match highlighting" }),
			"\n",
			o(t.li, { children: "Item selection control via v-model:selected" }),
			"\n",
			o(t.li, { children: "Focus control via v-model:focus" }),
			"\n",
			o(t.li, { children: "Lightweight mode for large lists (lite)" }),
			"\n",
			o(t.li, { children: "Display axis configuration (x/y) and dividers" }),
			"\n",
			o(t.li, { children: "Click and menu close events" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Navigation menus and option lists" }),
			"\n",
			o(t.li, { children: "Dropdown lists with hierarchical structure" }),
			"\n",
			o(t.li, { children: "Product and category catalogs" }),
			"\n",
			o(t.li, { children: "Settings lists with grouping" }),
			"\n",
			o(t.li, { children: "Context menus with submenus" }),
			"\n",
			o(t.li, { children: "File and folder lists" }),
			"\n",
			o(t.li, { children: "Filters with multiple selection" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['item2'])\nconst focus = ref(null)\n\nconst listData = ref([\n{ label: 'First item', value: 'item1' },\n{ label: 'Second item', value: 'item2' },\n{ type: 'line' },\n{ type: 'subtitle', label: 'Item group' },\n{\n  label: 'Group with submenu',\n  value: 'group1',\n  type: 'group',\n  list: [\n    { label: 'Nested item 1', value: 'nested1' },\n    { label: 'Nested item 2', value: 'nested2' }\n  ]\n}\n])\n\nconst handleClick = (event) => {\nconsole.log('Item clicked:', event.detail.value)\n}\n<\/script>\n\n<template>\n<List\n  v-model:selected=\"selected\"\n  v-model:focus=\"focus\"\n  :list=\"listData\"\n  highlight=\"text\"\n  @click=\"handleClick\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Qc(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zc, { ...e })
	}) : Zc(e);
}
//#endregion
//#region src/media/mdx/List/list.ru.mdx
function $c(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания интерактивных списков с поддержкой иерархических данных, клавиатурной навигации и функциональности поиска." }),
		"\n",
		o(t.p, { children: "List управляет отображением структурированных данных с возможностью навигации, выбора элементов и взаимодействия через клавиатуру и мышь. Компонент поддерживает различные типы элементов (обычные элементы, группы, меню, разделители, подзаголовки, HTML-контент), автоматически обрабатывает сложные иерархические структуры и предоставляет интуитивную навигацию. Встроенная система поиска работает в реальном времени с выделением совпадений по всей иерархии данных." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Различные типы элементов (item, group, menu, line, subtitle, html)" }),
			"\n",
			o(t.li, { children: "Иерархическая структура с вложенными группами и меню" }),
			"\n",
			o(t.li, { children: "Полная клавиатурная навигация (↑/↓, Enter, →, ←)" }),
			"\n",
			o(t.li, { children: "Встроенный поиск в реальном времени с подсветкой совпадений" }),
			"\n",
			o(t.li, { children: "Управление выбором элементов через v-model:selected" }),
			"\n",
			o(t.li, { children: "Управление фокусом через v-model:focus" }),
			"\n",
			o(t.li, { children: "Облегченный режим для больших списков (lite)" }),
			"\n",
			o(t.li, { children: "Настройка осей отображения (x/y) и разделителей" }),
			"\n",
			o(t.li, { children: "События клика и закрытия меню" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Навигационные меню и списки опций" }),
			"\n",
			o(t.li, { children: "Выпадающие списки с иерархической структурой" }),
			"\n",
			o(t.li, { children: "Каталоги товаров и категорий" }),
			"\n",
			o(t.li, { children: "Списки настроек с группировкой" }),
			"\n",
			o(t.li, { children: "Контекстные меню с подменю" }),
			"\n",
			o(t.li, { children: "Списки файлов и папок" }),
			"\n",
			o(t.li, { children: "Фильтры с множественным выбором" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref(['item2'])\nconst focus = ref(null)\n\nconst listData = ref([\n{ label: 'Первый элемент', value: 'item1' },\n{ label: 'Второй элемент', value: 'item2' },\n{ type: 'line' },\n{ type: 'subtitle', label: 'Группа элементов' },\n{\n  label: 'Группа с подменю',\n  value: 'group1',\n  type: 'group',\n  list: [\n    { label: 'Вложенный элемент 1', value: 'nested1' },\n    { label: 'Вложенный элемент 2', value: 'nested2' }\n  ]\n}\n])\n\nconst handleClick = (event) => {\nconsole.log('Клик по элементу:', event.detail.value)\n}\n<\/script>\n\n<template>\n<List\n  v-model:selected=\"selected\"\n  v-model:focus=\"focus\"\n  :list=\"listData\"\n  highlight=\"text\"\n  @click=\"handleClick\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function el(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($c, { ...e })
	}) : $c(e);
}
//#endregion
//#region src/media/mdx/List/lite.en.mdx
function tl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Managing list performance" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "lite" }),
			" and ",
			o(t.code, { children: "liteThreshold" }),
			" properties work together to optimize rendering of large lists. They enable a lightweight display mode that reduces visual complexity and improves performance when the threshold number of items is exceeded."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "lite" }), " — enables lightweight list display mode"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "liteThreshold" }), " — item count threshold for activating simplified mode, defaults to configuration value"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Display mode is determined automatically: when ",
			o(t.code, { children: "lite=false" }),
			", the list always renders in full mode. When ",
			o(t.code, { children: "lite=true" }),
			", the component compares the total item count with ",
			o(t.code, { children: "liteThreshold" }),
			". If the item count does not exceed the threshold, full mode with extended visualization is used. When the threshold is exceeded, lightweight mode is activated to reduce rendering load. Use ",
			o(t.code, { children: "lite" }),
			" for working with dynamic data of variable size."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Automatic mode switching -->\n<List :list=\"items\" :lite=\"true\" :liteThreshold=\"50\" />\n\n<!-- Always full mode -->\n<List :list=\"items\" :lite=\"false\" />\n\n<!-- Lightweight mode for large catalogs -->\n<List :list=\"products\" :lite=\"true\" :liteThreshold=\"100\" />\n\n<!-- Custom threshold for mobile devices -->\n<List :list=\"data\" :lite=\"true\" :liteThreshold=\"30\" />\n",
			language: "html"
		})
	] });
}
function nl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(tl, { ...e })
	}) : tl(e);
}
//#endregion
//#region src/media/mdx/List/lite.ru.mdx
function rl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление производительностью списка" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "lite" }),
			" и ",
			o(t.code, { children: "liteThreshold" }),
			" работают в связке для оптимизации рендеринга больших списков. Они включают облегченный режим отображения, который снижает визуальную сложность и ускоряет производительность при превышении порогового количества элементов."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "lite" }), " — включает облегченный режим отображения списка"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "liteThreshold" }), " — порог количества элементов для активации упрощенного режима, по умолчанию зависит от конфигурации"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Режим отображения определяется автоматически: при ",
			o(t.code, { children: "lite=false" }),
			" список всегда рендерится в полном режиме. При ",
			o(t.code, { children: "lite=true" }),
			" компонент сравнивает общее количество элементов с ",
			o(t.code, { children: "liteThreshold" }),
			". Если количество элементов не превышает порог, используется полный режим с расширенной визуализацией. При превышении порога включается облегченный режим для снижения нагрузки на рендеринг. Используйте ",
			o(t.code, { children: "lite" }),
			" для работы с динамическими данными переменного размера."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Автоматическое переключение режима -->\n<List :list=\"items\" :lite=\"true\" :liteThreshold=\"50\" />\n\n<!-- Всегда полный режим -->\n<List :list=\"items\" :lite=\"false\" />\n\n<!-- Облегченный режим для больших каталогов -->\n<List :list=\"products\" :lite=\"true\" :liteThreshold=\"100\" />\n\n<!-- Пользовательский порог для мобильных устройств -->\n<List :list=\"data\" :lite=\"true\" :liteThreshold=\"30\" />\n",
			language: "html"
		})
	] });
}
function il(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(rl, { ...e })
	}) : rl(e);
}
//#endregion
//#region src/media/mdx/List/event.close.en.mdx
function al(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "close" }) }),
		"\n",
		o(t.p, { children: "Event fires when attempting to close the list after navigation has reached the root level." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "When it fires:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Pressing the ",
				o(t.strong, { children: "Escape" }),
				" key at the root level of the list"
			] }),
			"\n",
			s(t.li, { children: [
				"Pressing the ",
				o(t.strong, { children: "←" }),
				" (left arrow) key when there are no open submenus/groups"
			] }),
			"\n",
			o(t.li, { children: "Attempting to navigate back when there are no nested items" }),
			"\n"
		] })
	] });
}
function ol(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(al, { ...e })
	}) : al(e);
}
//#endregion
//#region src/media/mdx/List/event.close.ru.mdx
function sl(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "close" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при попытке закрыть список, когда навигация достигла корневого уровня." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Когда срабатывает:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Нажатие клавиши ",
				o(t.strong, { children: "Escape" }),
				" на корневом уровне списка"
			] }),
			"\n",
			s(t.li, { children: [
				"Нажатие клавиши ",
				o(t.strong, { children: "←" }),
				" (стрелка влево), когда нет открытых подменю/групп"
			] }),
			"\n",
			o(t.li, { children: "Попытка навигации назад при отсутствии вложенных элементов" }),
			"\n"
		] })
	] });
}
function cl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(sl, { ...e })
	}) : sl(e);
}
//#endregion
//#region src/media/mdx/List/slot.html.en.mdx
function ll(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "[value]: any" }),
			" — Dynamic slot for rendering custom content (Vue components or HTML) when item ",
			o(t.code, { children: "type" }),
			" is ",
			o(t.code, { children: "'html'" }),
			". Item's ",
			o(t.code, { children: "value" }),
			" is used as slot name."
		] }),
		"\n"
	] });
}
function ul(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ll, { ...e })
	}) : ll(e);
}
//#endregion
//#region src/media/mdx/List/slot.html.ru.mdx
function dl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "[value]: any" }),
			" — Динамический слот для рендеринга пользовательского контента (Vue-компонентов или HTML), когда ",
			o(t.code, { children: "type" }),
			" элемента равен ",
			o(t.code, { children: "'html'" }),
			". Поле ",
			o(t.code, { children: "value" }),
			" элемента используется как имя слота."
		] }),
		"\n"
	] });
}
function fl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(dl, { ...e })
	}) : dl(e);
}
//#endregion
//#region src/media/mdx/List/wikiMdxList.ts
var pl = {
	name: "List",
	descriptions: {
		list: {
			en: Qc,
			ru: el
		},
		lite: {
			en: nl,
			ru: il
		},
		"event.close": {
			en: ol,
			ru: cl
		},
		"slot.html": {
			en: ul,
			ru: fl
		}
	}
};
//#endregion
//#region src/media/mdx/ListGroup/listGroup.en.mdx
function ml(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for grouping and organizing list items with collapsible structure." }),
		"\n",
		o(t.p, { children: "ListGroup is an auxiliary component for List, managing hierarchical content organization with expand/collapse functionality. The component integrates with MotionTransform for smooth animations, supports unlimited nesting levels, and provides convenient navigation through structured data." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Hierarchical content organization with unlimited nesting" }),
			"\n",
			o(t.li, { children: "Expand/collapse animations via MotionTransform" }),
			"\n",
			o(t.li, { children: "State management via props or internal state" }),
			"\n",
			o(t.li, { children: "Automatic group content visibility control" }),
			"\n",
			o(t.li, { children: "Integration with List component ecosystem" }),
			"\n",
			o(t.li, { children: "Customization support via head and list slots" }),
			"\n",
			o(t.li, { children: "Group state change events" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Grouping list items by categories" }),
			"\n",
			o(t.li, { children: "Creating tree-like navigation structures" }),
			"\n",
			o(t.li, { children: "Organizing settings and options by sections" }),
			"\n",
			o(t.li, { children: "Multi-level menus and catalogs" }),
			"\n",
			o(t.li, { children: "FAQ sections with expandable answers" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst items = [\n{ text: 'Item 1', value: '1' },\n{ text: 'Item 2', value: '2' },\n{ text: 'Item 3', value: '3' }\n]\n\nconst isOpen = ref(true)\n<\/script>\n\n<template>\n<List>\n  <ListGroup v-model:open=\"isOpen\">\n    <template #head=\"{ open }\">\n      <div class=\"group-header\">\n        <span>{{ open ? '▼' : '▶' }}</span>\n        <span>Group Items</span>\n      </div>\n    </template>\n\n    <template #list>\n      <ListItem\n        v-for=\"item in items\"\n        :key=\"item.value\"\n        :text=\"item.text\"\n      />\n    </template>\n  </ListGroup>\n</List>\n</template>\n",
			language: "html"
		})
	] });
}
function hl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ml, { ...e })
	}) : ml(e);
}
//#endregion
//#region src/media/mdx/ListGroup/listGroup.ru.mdx
function gl(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для группировки и организации элементов списка со сворачиваемой структурой." }),
		"\n",
		o(t.p, { children: "ListGroup является вспомогательным компонентом для List, управляющим иерархической организацией контента с возможностью разворачивания/сворачивания групп. Компонент интегрируется с MotionTransform для плавных анимаций, поддерживает неограниченную вложенность групп и обеспечивает удобную навигацию по структурированным данным." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Иерархическая организация контента с неограниченной вложенностью" }),
			"\n",
			o(t.li, { children: "Анимации разворачивания/сворачивания групп через MotionTransform" }),
			"\n",
			o(t.li, { children: "Управление состоянием открытия через props или внутренний state" }),
			"\n",
			o(t.li, { children: "Автоматическое управление видимостью содержимого группы" }),
			"\n",
			o(t.li, { children: "Интеграция с экосистемой компонентов List" }),
			"\n",
			o(t.li, { children: "Поддержка кастомизации через слоты head и list" }),
			"\n",
			o(t.li, { children: "События изменения состояния группы" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Группировка элементов списка по категориям" }),
			"\n",
			o(t.li, { children: "Создание древовидных структур навигации" }),
			"\n",
			o(t.li, { children: "Организация настроек и опций по разделам" }),
			"\n",
			o(t.li, { children: "Многоуровневые меню и каталоги" }),
			"\n",
			o(t.li, { children: "FAQ секции с раскрывающимися ответами" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst items = [\n{ text: 'Элемент 1', value: '1' },\n{ text: 'Элемент 2', value: '2' },\n{ text: 'Элемент 3', value: '3' }\n]\n\nconst isOpen = ref(true)\n<\/script>\n\n<template>\n<List>\n  <ListGroup v-model:open=\"isOpen\">\n    <template #head=\"{ open }\">\n      <div class=\"group-header\">\n        <span>{{ open ? '▼' : '▶' }}</span>\n        <span>Группа элементов</span>\n      </div>\n    </template>\n\n    <template #list>\n      <ListItem\n        v-for=\"item in items\"\n        :key=\"item.value\"\n        :text=\"item.text\"\n      />\n    </template>\n  </ListGroup>\n</List>\n</template>\n",
			language: "html"
		})
	] });
}
function _l(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(gl, { ...e })
	}) : gl(e);
}
//#endregion
//#region src/media/mdx/ListGroup/slots.en.mdx
function vl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "head(open: boolean): any" }), " — Slot for placing the header content with toggle functionality."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "list: any" }), " — Slot for placing the list content."] }),
		"\n"
	] });
}
function yl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(vl, { ...e })
	}) : vl(e);
}
//#endregion
//#region src/media/mdx/ListGroup/slots.ru.mdx
function bl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "head(open: boolean): any" }), " — Слот для размещения содержимого заголовка с функциональностью переключения."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "list: any" }), " — Слот для размещения содержимого списка."] }),
		"\n"
	] });
}
function xl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(bl, { ...e })
	}) : bl(e);
}
//#endregion
//#region src/media/mdx/ListGroup/wikiMdxListGroup.ts
var Sl = {
	name: "ListGroup",
	descriptions: {
		listGroup: {
			en: hl,
			ru: _l
		},
		slots: {
			en: yl,
			ru: xl
		}
	}
};
//#endregion
//#region src/media/mdx/ListItem/basic.en.mdx
function Cl(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating interactive list items with flexible content structure and multiple display areas." }),
		"\n",
		o(t.p, { children: "ListItem provides uniform presentation of items in lists, menus, and navigation structures. The component supports labels, descriptions, icons, status badges, interactive states (focus, selection, disabled), loading with progress and skeleton, and ripple effect for enhanced feedback." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Multiple content areas (label, description, prefix, suffix, caption)" }),
			"\n",
			o(t.li, { children: "Icon support with flexible positioning and alignment" }),
			"\n",
			o(t.li, { children: "Badge integration for status indicators" }),
			"\n",
			o(t.li, { children: "Interactive states (focus, selected, disabled, readonly)" }),
			"\n",
			o(t.li, { children: "Loading states with progress and skeleton" }),
			"\n",
			o(t.li, { children: "Ripple effect for visual feedback" }),
			"\n",
			o(t.li, { children: "Flexible tag variants (button, link, div, span)" }),
			"\n",
			o(t.li, { children: "Built-in accessibility support" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "List items and navigation menus" }),
			"\n",
			o(t.li, { children: "Settings and configuration options" }),
			"\n",
			o(t.li, { children: "Lists with multiple selection" }),
			"\n",
			o(t.li, { children: "Contact lists and catalogs" }),
			"\n",
			o(t.li, { children: "Mobile interfaces and action lists" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst items = ref([\n{ text: 'List item 1', value: '1', selected: false },\n{ text: 'List item 2', value: '2', selected: true },\n{ text: 'List item 3', value: '3', selected: false }\n])\n\nconst handleClick = (item) => {\nitem.selected = !item.selected\nconsole.log('Item selected:', item.text)\n}\n<\/script>\n\n<template>\n<List>\n  <ListItem\n    v-for=\"item in items\"\n    :key=\"item.value\"\n    :text=\"item.text\"\n    :selected=\"item.selected\"\n    @click=\"handleClick(item)\"\n  >\n    <template #prefix>\n      <Icon name=\"check\" v-if=\"item.selected\" />\n    </template>\n  </ListItem>\n</List>\n</template>\n",
			language: "html"
		})
	] });
}
function wl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Cl, { ...e })
	}) : Cl(e);
}
//#endregion
//#region src/media/mdx/ListItem/basic.ru.mdx
function Tl(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания интерактивных элементов списков с гибкой структурой контента и множественными областями отображения." }),
		"\n",
		o(t.p, { children: "ListItem обеспечивает единообразное представление элементов в списках, меню и навигационных структурах. Компонент поддерживает метки, описания, иконки, значки состояния, интерактивные состояния (фокус, выбор, отключение), загрузку с прогрессом и скелетоном, а также эффект пульсации для улучшенной обратной связи." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Множественные области контента (метка, описание, префикс, суффикс, заголовок)" }),
			"\n",
			o(t.li, { children: "Поддержка иконок с гибким позиционированием и выравниванием" }),
			"\n",
			o(t.li, { children: "Интеграция значков для индикаторов статуса" }),
			"\n",
			o(t.li, { children: "Интерактивные состояния (фокус, выбранный, отключенный, только чтение)" }),
			"\n",
			o(t.li, { children: "Состояния загрузки с прогрессом и скелетоном" }),
			"\n",
			o(t.li, { children: "Эффект пульсации для визуальной обратной связи" }),
			"\n",
			o(t.li, { children: "Гибкие варианты тегов (button, link, div, span)" }),
			"\n",
			o(t.li, { children: "Встроенная поддержка доступности" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Элементы списков и меню навигации" }),
			"\n",
			o(t.li, { children: "Пункты настроек и конфигурации" }),
			"\n",
			o(t.li, { children: "Списки с множественным выбором" }),
			"\n",
			o(t.li, { children: "Контактные списки и каталоги" }),
			"\n",
			o(t.li, { children: "Мобильные интерфейсы и action lists" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst items = ref([\n{ text: 'Элемент списка 1', value: '1', selected: false },\n{ text: 'Элемент списка 2', value: '2', selected: true },\n{ text: 'Элемент списка 3', value: '3', selected: false }\n])\n\nconst handleClick = (item) => {\nitem.selected = !item.selected\nconsole.log('Элемент выбран:', item.text)\n}\n<\/script>\n\n<template>\n<List>\n  <ListItem\n    v-for=\"item in items\"\n    :key=\"item.value\"\n    :text=\"item.text\"\n    :selected=\"item.selected\"\n    @click=\"handleClick(item)\"\n  >\n    <template #prefix>\n      <Icon name=\"check\" v-if=\"item.selected\" />\n    </template>\n  </ListItem>\n</List>\n</template>\n",
			language: "html"
		})
	] });
}
function El(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Tl, { ...e })
	}) : Tl(e);
}
//#endregion
//#region src/media/mdx/ListItem/fill.en.mdx
function Dl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Element fill color" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "fill" }),
			" property defines the background color of the list item element, allowing precise control over the component's visual styling."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Hex colors: ",
				o(t.code, { children: "#FF0000" }),
				", ",
				o(t.code, { children: "#ffffff" }),
				", ",
				o(t.code, { children: "#3498db" })
			] }),
			"\n",
			s(t.li, { children: [
				"RGB: ",
				o(t.code, { children: "rgb(255, 0, 0)" }),
				", ",
				o(t.code, { children: "rgb(52, 152, 219)" })
			] }),
			"\n",
			s(t.li, { children: [
				"RGBA: ",
				o(t.code, { children: "rgba(255, 0, 0, 0.5)" }),
				", ",
				o(t.code, { children: "rgba(0, 0, 0, 0.1)" })
			] }),
			"\n",
			s(t.li, { children: [
				"Named colors: ",
				o(t.code, { children: "red" }),
				", ",
				o(t.code, { children: "blue" }),
				", ",
				o(t.code, { children: "green" }),
				", ",
				o(t.code, { children: "transparent" })
			] }),
			"\n",
			s(t.li, { children: [
				"HSL/HSLA: ",
				o(t.code, { children: "hsl(0, 100%, 50%)" }),
				", ",
				o(t.code, { children: "hsla(210, 70%, 53%, 0.8)" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Accepts any standard CSS color format. The property provides a flexible way to customize the visual presentation of list items, allowing you to create color schemes and highlight important elements. The value is applied as background-color to the component's root element." }),
		"\n",
		o(i, {
			code: "\n<!-- Red background -->\n<ListItem fill=\"#FF0000\" text=\"Item with red background\" />\n\n<!-- Semi-transparent blue -->\n<ListItem fill=\"rgba(52, 152, 219, 0.3)\" text=\"Semi-transparent item\" />\n\n<!-- Named color -->\n<ListItem fill=\"lightblue\" text=\"Light blue item\" />\n",
			language: "html"
		})
	] });
}
function Ol(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Dl, { ...e })
	}) : Dl(e);
}
//#endregion
//#region src/media/mdx/ListItem/fill.ru.mdx
function kl(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Цвет заливки элемента" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "fill" }),
			" определяет цвет фона элемента списка, позволяя точно контролировать визуальное оформление компонента."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Hex-цвета: ",
				o(t.code, { children: "#FF0000" }),
				", ",
				o(t.code, { children: "#ffffff" }),
				", ",
				o(t.code, { children: "#3498db" })
			] }),
			"\n",
			s(t.li, { children: [
				"RGB: ",
				o(t.code, { children: "rgb(255, 0, 0)" }),
				", ",
				o(t.code, { children: "rgb(52, 152, 219)" })
			] }),
			"\n",
			s(t.li, { children: [
				"RGBA: ",
				o(t.code, { children: "rgba(255, 0, 0, 0.5)" }),
				", ",
				o(t.code, { children: "rgba(0, 0, 0, 0.1)" })
			] }),
			"\n",
			s(t.li, { children: [
				"Именованные цвета: ",
				o(t.code, { children: "red" }),
				", ",
				o(t.code, { children: "blue" }),
				", ",
				o(t.code, { children: "green" }),
				", ",
				o(t.code, { children: "transparent" })
			] }),
			"\n",
			s(t.li, { children: [
				"HSL/HSLA: ",
				o(t.code, { children: "hsl(0, 100%, 50%)" }),
				", ",
				o(t.code, { children: "hsla(210, 70%, 53%, 0.8)" })
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Принимает любой стандартный CSS-формат цвета. Свойство предоставляет гибкий способ настройки визуального представления элементов списка, позволяя создавать цветовые схемы и выделять важные элементы. Значение применяется как background-color к корневому элементу компонента." }),
		"\n",
		o(i, {
			code: "\n<!-- Красный фон -->\n<ListItem fill=\"#FF0000\" text=\"Элемент с красным фоном\" />\n\n<!-- Полупрозрачный синий -->\n<ListItem fill=\"rgba(52, 152, 219, 0.3)\" text=\"Полупрозрачный элемент\" />\n\n<!-- Именованный цвет -->\n<ListItem fill=\"lightblue\" text=\"Светло-голубой элемент\" />\n",
			language: "html"
		})
	] });
}
function Al(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(kl, { ...e })
	}) : kl(e);
}
//#endregion
//#region src/media/mdx/ListItem/slots.en.mdx
function jl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "body: any" }), " — Slot for placing additional content at the bottom of the list item."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "trailing: any" }), " — Slot for placing controls or indicators at the end of the list item."] }),
		"\n"
	] });
}
function Ml(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(jl, { ...e })
	}) : jl(e);
}
//#endregion
//#region src/media/mdx/ListItem/slots.ru.mdx
function Nl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "body: any" }), " — Слот для размещения дополнительного контента в нижней части элемента списка."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "trailing: any" }), " — Слот для размещения элементов управления или индикаторов в конце элемента списка."] }),
		"\n"
	] });
}
function Pl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Nl, { ...e })
	}) : Nl(e);
}
//#endregion
//#region src/media/mdx/ListItem/wikiMdxListItem.ts
var Fl = {
	name: "ListItem",
	descriptions: {
		basic: {
			en: wl,
			ru: El
		},
		fill: {
			en: Ol,
			ru: Al
		},
		slots: {
			en: Ml,
			ru: Pl
		}
	}
};
//#endregion
//#region src/media/mdx/ListMenu/listMenu.en.mdx
function Il(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating nested menus and organizing navigation elements with expandable structure." }),
		"\n",
		o(t.p, { children: "ListMenu is an auxiliary component for List, managing hierarchical menu structure with open/close submenu functionality. The component integrates with Window for positioning dropdown submenus, supports multiple nesting levels, and provides smooth navigation through tree-like data structures." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Hierarchical menu organization with unlimited nesting" }),
			"\n",
			o(t.li, { children: "Open/close submenu state management" }),
			"\n",
			o(t.li, { children: "Integration with Window for dropdown menu positioning" }),
			"\n",
			o(t.li, { children: "Support for horizontal and vertical positioning axes" }),
			"\n",
			o(t.li, { children: "Automatic click and navigation handling" }),
			"\n",
			o(t.li, { children: "Adaptive submenu behavior" }),
			"\n",
			o(t.li, { children: "Menu item open/close events" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Navigation menus with subsections" }),
			"\n",
			o(t.li, { children: "Multi-level catalogs and categories" }),
			"\n",
			o(t.li, { children: "Tree-like data structures" }),
			"\n",
			o(t.li, { children: "Context menus with submenus" }),
			"\n",
			o(t.li, { children: "Navigation panels with grouping" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst menuItems = ref([\n{\n  text: 'Home',\n  value: 'home'\n},\n{\n  text: 'Products',\n  value: 'products',\n  sublist: [\n    { text: 'Category 1', value: 'cat1' },\n    { text: 'Category 2', value: 'cat2' }\n  ]\n},\n{\n  text: 'About',\n  value: 'about'\n}\n])\n<\/script>\n\n<template>\n<List :items=\"menuItems\">\n  <template #item=\"{ item }\">\n    <ListMenu\n      v-if=\"item.sublist\"\n      :items=\"item.sublist\"\n      :axis=\"'y'\"\n    >\n      <template #default>\n        {{ item.text }}\n      </template>\n    </ListMenu>\n    <div v-else>{{ item.text }}</div>\n  </template>\n</List>\n</template>\n",
			language: "html"
		})
	] });
}
function Ll(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Il, { ...e })
	}) : Il(e);
}
//#endregion
//#region src/media/mdx/ListMenu/listMenu.ru.mdx
function Rl(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой." }),
		"\n",
		o(t.p, { children: "ListMenu является вспомогательным компонентом для List, управляющим иерархической структурой меню с возможностью открытия/закрытия подменю. Компонент интегрируется с Window для позиционирования выпадающих подменю, поддерживает множественные уровни вложенности и обеспечивает плавную навигацию по древовидной структуре данных." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Иерархическая организация меню с неограниченной вложенностью" }),
			"\n",
			o(t.li, { children: "Управление состоянием открытия/закрытия подменю" }),
			"\n",
			o(t.li, { children: "Интеграция с Window для позиционирования выпадающих меню" }),
			"\n",
			o(t.li, { children: "Поддержка горизонтальной и вертикальной осей позиционирования" }),
			"\n",
			o(t.li, { children: "Автоматическая обработка кликов и навигации" }),
			"\n",
			o(t.li, { children: "Адаптивное поведение подменю" }),
			"\n",
			o(t.li, { children: "События открытия/закрытия элементов меню" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Навигационные меню с подразделами" }),
			"\n",
			o(t.li, { children: "Многоуровневые каталоги и категории" }),
			"\n",
			o(t.li, { children: "Древовидные структуры данных" }),
			"\n",
			o(t.li, { children: "Контекстные меню с подменю" }),
			"\n",
			o(t.li, { children: "Панели навигации с группировкой" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst menuItems = ref([\n{\n  text: 'Главная',\n  value: 'home'\n},\n{\n  text: 'Продукты',\n  value: 'products',\n  sublist: [\n    { text: 'Категория 1', value: 'cat1' },\n    { text: 'Категория 2', value: 'cat2' }\n  ]\n},\n{\n  text: 'О нас',\n  value: 'about'\n}\n])\n<\/script>\n\n<template>\n<List :items=\"menuItems\">\n  <template #item=\"{ item }\">\n    <ListMenu\n      v-if=\"item.sublist\"\n      :items=\"item.sublist\"\n      :axis=\"'y'\"\n    >\n      <template #default>\n        {{ item.text }}\n      </template>\n    </ListMenu>\n    <div v-else>{{ item.text }}</div>\n  </template>\n</List>\n</template>\n",
			language: "html"
		})
	] });
}
function zl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Rl, { ...e })
	}) : Rl(e);
}
//#endregion
//#region src/media/mdx/ListMenu/wikiMdxListMenu.ts
var Bl = {
	name: "ListMenu",
	descriptions: { listMenu: {
		en: Ll,
		ru: zl
	} }
};
//#endregion
//#region src/media/mdx/Mask/basic.en.mdx
function Vl(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "A component for creating input fields with automatic data formatting according to a specified pattern in real-time." }),
		"\n",
		s(t.p, { children: [
			"Mask provides structured input with support for various formats (phones, bank cards, dates, currencies, numbers). The component automatically adds separators and literal characters during typing, restricts input to only allowed characters, supports multiple patterns with automatic selection of the most suitable one, works together with the validation system through ",
			o(t.code, { children: "pattern" }),
			" and ",
			o(t.code, { children: "check" }),
			", and provides built-in mask types for common data formats."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic formatting with separator addition" }),
			"\n",
			o(t.li, { children: "Flexible templates with support for single and multiple masks" }),
			"\n",
			o(t.li, { children: "Built-in types: text, number, number-format, currency, date, time" }),
			"\n",
			s(t.li, { children: [
				"Customizable special characters via ",
				o(t.code, { children: "special" }),
				" property"
			] }),
			"\n",
			o(t.li, { children: "Input error prevention with character restriction" }),
			"\n",
			s(t.li, { children: [
				"Integration with validation system through ",
				o(t.code, { children: "pattern" }),
				" and ",
				o(t.code, { children: "check" })
			] }),
			"\n",
			o(t.li, { children: "Alignment support (left/right) and direction (ltr/rtl)" }),
			"\n",
			o(t.li, { children: "Rubber groups with dynamic length" }),
			"\n",
			o(t.li, { children: "Visibility control for unfilled characters" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Phone number input fields" }),
			"\n",
			o(t.li, { children: "Bank card numbers and CVV codes" }),
			"\n",
			o(t.li, { children: "Dates and times in various formats" }),
			"\n",
			o(t.li, { children: "Postal codes and identifiers" }),
			"\n",
			o(t.li, { children: "Currency amounts with formatting" }),
			"\n",
			o(t.li, { children: "Numeric values with separators" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst phone = ref('')\nconst cardNumber = ref('')\nconst date = ref('')\nconst amount = ref('')\n\nconst handleInput = (value) => {\nconsole.log('Entered value:', value)\n}\n<\/script>\n\n<template>\n<!-- Russian phone -->\n<Mask\n  v-model=\"phone\"\n  mask=\"+7 *** *** ** **\"\n  placeholder=\"Enter phone number\"\n  @input=\"handleInput\"\n/>\n\n<!-- Bank card -->\n<Mask\n  v-model=\"cardNumber\"\n  mask=\"**** **** **** ****\"\n  placeholder=\"0000 0000 0000 0000\"\n/>\n\n<!-- Multiple phone formats -->\n<Mask\n  v-model=\"phone\"\n  :mask=\"['+7 *** *** ** **', '8 *** *** ** **']\"\n/>\n\n<!-- Date with built-in type -->\n<Mask\n  v-model=\"date\"\n  type=\"date\"\n  pattern=\"DD.MM.YYYY\"\n/>\n\n<!-- Currency -->\n<Mask\n  v-model=\"amount\"\n  type=\"currency\"\n  currency=\"RUB\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Hl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Vl, { ...e })
	}) : Vl(e);
}
//#endregion
//#region src/media/mdx/Mask/basic.ru.mdx
function Ul(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания полей ввода с автоматическим форматированием данных по заданному шаблону в реальном времени." }),
		"\n",
		s(t.p, { children: [
			"Mask обеспечивает структурированный ввод с поддержкой различных форматов (телефоны, банковские карты, даты, валюты, числа). Компонент автоматически добавляет разделители и литеральные символы во время набора, ограничивает ввод только допустимыми символами, поддерживает множественные шаблоны с автоматическим выбором наиболее подходящего, работает совместно с системой валидации через ",
			o(t.code, { children: "pattern" }),
			" и ",
			o(t.code, { children: "check" }),
			", и предоставляет встроенные типы масок для распространенных форматов данных."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическое форматирование с добавлением разделителей" }),
			"\n",
			o(t.li, { children: "Гибкие шаблоны с поддержкой одиночных и множественных масок" }),
			"\n",
			o(t.li, { children: "Встроенные типы: text, number, number-format, currency, date, time" }),
			"\n",
			s(t.li, { children: ["Настраиваемые специальные символы через свойство ", o(t.code, { children: "special" })] }),
			"\n",
			o(t.li, { children: "Предотвращение ошибок ввода с ограничением символов" }),
			"\n",
			s(t.li, { children: [
				"Интеграция с системой валидации через ",
				o(t.code, { children: "pattern" }),
				" и ",
				o(t.code, { children: "check" })
			] }),
			"\n",
			o(t.li, { children: "Поддержка выравнивания (left/right) и направления (ltr/rtl)" }),
			"\n",
			o(t.li, { children: "Резиновые группы с динамической длиной" }),
			"\n",
			o(t.li, { children: "Управление видимостью незаполненных символов" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Поля ввода телефонных номеров" }),
			"\n",
			o(t.li, { children: "Номера банковских карт и CVV-кодов" }),
			"\n",
			o(t.li, { children: "Даты и время в различных форматах" }),
			"\n",
			o(t.li, { children: "Почтовые индексы и коды" }),
			"\n",
			o(t.li, { children: "Валютные суммы с форматированием" }),
			"\n",
			o(t.li, { children: "Числовые значения с разделителями" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst phone = ref('')\nconst cardNumber = ref('')\nconst date = ref('')\nconst amount = ref('')\n\nconst handleInput = (value) => {\nconsole.log('Введено значение:', value)\n}\n<\/script>\n\n<template>\n<!-- Российский телефон -->\n<Mask\n  v-model=\"phone\"\n  mask=\"+7 *** *** ** **\"\n  placeholder=\"Введите номер телефона\"\n  @input=\"handleInput\"\n/>\n\n<!-- Банковская карта -->\n<Mask\n  v-model=\"cardNumber\"\n  mask=\"**** **** **** ****\"\n  placeholder=\"0000 0000 0000 0000\"\n/>\n\n<!-- Множественные форматы телефонов -->\n<Mask\n  v-model=\"phone\"\n  :mask=\"['+7 *** *** ** **', '8 *** *** ** **']\"\n/>\n\n<!-- Дата с встроенным типом -->\n<Mask\n  v-model=\"date\"\n  type=\"date\"\n  pattern=\"DD.MM.YYYY\"\n/>\n\n<!-- Валюта -->\n<Mask\n  v-model=\"amount\"\n  type=\"currency\"\n  currency=\"RUB\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Wl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ul, { ...e })
	}) : Ul(e);
}
//#endregion
//#region src/media/mdx/Mask/dateTypes.en.mdx
function Gl(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Date and time types" }),
		"\n",
		o(t.p, { children: "Date types in Mask provide automatic formatting and validation for date and time input with localization support." }),
		"\n",
		s(t.p, { children: [
			"All date types automatically create masks according to regional settings, ignoring the ",
			o(t.code, { children: "mask" }),
			" property. The mask is determined by locale via ",
			o(t.code, { children: "language" }),
			" (DD.MM.YYYY for ru). Validation checks for correct numbers, days in month, and value ranges."
		] }),
		"\n",
		o(t.h3, { children: "Types" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "date" }), " — full date in locale format (MM/DD/YYYY for US)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "datetime" }), " — date and time (HH:MM) separated by space"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "full" }), " — full date and time with seconds (HH:MM:SS)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "time" }), " — time in HH:MM:SS format"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "hour-minute" }), " — hours and minutes (HH:MM)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "hour" }),
				", ",
				o(t.code, { children: "minute" }),
				", ",
				o(t.code, { children: "second" }),
				" — separate time components"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "year" }),
				", ",
				o(t.code, { children: "month" }),
				", ",
				o(t.code, { children: "day" }),
				" — separate date components"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "year-month" }),
				", ",
				o(t.code, { children: "day-month" }),
				" — date component combinations"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Localization" }),
		"\n",
		s(t.p, { children: [
			"Formats adapt via the ",
			o(t.code, { children: "language" }),
			" property:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "ru" }),
				", ",
				o(t.code, { children: "de" }),
				" — DD.MM.YYYY (31.12.2024)"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "en-US" }), " — MM/DD/YYYY (12/31/2024)"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Examples" }),
		"\n",
		o(i, {
			code: "\n<!-- US date format -->\n<Mask type=\"date\" language=\"en-US\" />\n\n<!-- Full date and time -->\n<Mask type=\"datetime\" language=\"en-US\" />\n\n<!-- Russian date format -->\n<Mask type=\"date\" language=\"ru\" />\n\n<!-- Time only -->\n<Mask type=\"time\" />\n",
			language: "html"
		})
	] });
}
function Kl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Gl, { ...e })
	}) : Gl(e);
}
//#endregion
//#region src/media/mdx/Mask/dateTypes.ru.mdx
function ql(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Типы дат и времени" }),
		"\n",
		o(t.p, { children: "Типы дат в Mask обеспечивают автоматическое форматирование и валидацию для ввода даты и времени с учётом локализации." }),
		"\n",
		s(t.p, { children: [
			"Все типы дат автоматически создают маски согласно региональным настройкам, игнорируя свойство ",
			o(t.code, { children: "mask" }),
			". Маска определяется локалью через ",
			o(t.code, { children: "language" }),
			" (DD.MM.YYYY для ru). Валидация проверяет корректность чисел, дней в месяце и диапазонов."
		] }),
		"\n",
		o(t.h3, { children: "Типы" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "date" }), " — полная дата в формате локали (DD.MM.YYYY для ru)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "datetime" }), " — дата и время (HH:MM) через пробел"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "full" }), " — полная дата и время с секундами (HH:MM:SS)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "time" }), " — время в формате HH:MM:SS"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "hour-minute" }), " — часы и минуты (HH:MM)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "hour" }),
				", ",
				o(t.code, { children: "minute" }),
				", ",
				o(t.code, { children: "second" }),
				" — компоненты времени"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "year" }),
				", ",
				o(t.code, { children: "month" }),
				", ",
				o(t.code, { children: "day" }),
				" — компоненты даты"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "year-month" }),
				", ",
				o(t.code, { children: "day-month" }),
				" — комбинации даты"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Локализация" }),
		"\n",
		s(t.p, { children: [
			"Форматы адаптируются через свойство ",
			o(t.code, { children: "language" }),
			":"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "ru" }),
				", ",
				o(t.code, { children: "de" }),
				" — DD.MM.YYYY (31.12.2024)"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "en-US" }), " — MM/DD/YYYY (12/31/2024)"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Примеры" }),
		"\n",
		o(i, {
			code: "\n<!-- Русский формат даты -->\n<Mask type=\"date\" language=\"ru\" />\n\n<!-- Полная дата и время -->\n<Mask type=\"datetime\" language=\"ru\" />\n\n<!-- Английский формат даты -->\n<Mask type=\"date\" language=\"en-US\" />\n\n<!-- Только время -->\n<Mask type=\"time\" />\n",
			language: "html"
		})
	] });
}
function Jl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ql, { ...e })
	}) : ql(e);
}
//#endregion
//#region src/media/mdx/Mask/expose.en.mdx
function Yl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "value: Ref<string>" }), " — Final formatted mask value."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "valueBasic: Ref<string>" }), " — Basic mask value without formatting (only entered characters)."] }),
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "set(value: string): boolean" }),
			" — Sets new value and reinitializes the mask. Returns ",
			o(t.code, { children: "true" }),
			" if changed."
		] }),
		"\n"
	] });
}
function Xl(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Yl, { ...e })
	}) : Yl(e);
}
//#endregion
//#region src/media/mdx/Mask/expose.ru.mdx
function Zl(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "value: Ref<string>" }), " — Итоговое отформатированное значение маски."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "valueBasic: Ref<string>" }), " — Базовое значение маски без форматирования (только введённые символы)."] }),
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "set(value: string): boolean" }),
			" — Устанавливает новое значение и переинициализирует маску. Возвращает ",
			o(t.code, { children: "true" }),
			", если значение было изменено."
		] }),
		"\n"
	] });
}
function Ql(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zl, { ...e })
	}) : Zl(e);
}
//#endregion
//#region src/media/mdx/Mask/groupSave.en.mdx
function $l(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Preserving groups on deletion" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "groupSave" }),
			" property controls behavior when deleting characters in a mask with multiple types of special characters."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — preserves group separation on deletion (default)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " — allows characters from different groups to mix on deletion"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"With ",
			o(t.code, { children: "groupSave: true" }),
			" and different groups ahead, the character is not physically deleted but marked with a deletion marker, preserving the mask structure. With ",
			o(t.code, { children: "false" }),
			", characters are deleted completely, which can lead to \"collapsing\" of groups and loss of structure. Only works for fixed (non-rubber) groups of special characters."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Preserve group structure (default) -->\n<Mask\nmask=\"***-###\"\n:special=\"['*', '#']\"\ngroupSave\n/>\n\n<!-- Without structure preservation -->\n<Mask\nmask=\"***-###\"\n:special=\"['*', '#']\"\n:groupSave=\"false\"\n/>\n",
			language: "html"
		})
	] });
}
function eu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($l, { ...e })
	}) : $l(e);
}
//#endregion
//#region src/media/mdx/Mask/groupSave.ru.mdx
function tu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Сохранение групп при удалении" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "groupSave" }),
			" управляет поведением при удалении символов в маске с несколькими типами специальных символов."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — сохраняет разделение групп при удалении (по умолчанию)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "false" }), " — позволяет символам из разных групп смешиваться при удалении"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"При ",
			o(t.code, { children: "groupSave: true" }),
			" и наличии разных групп впереди символ не удаляется физически, а помечается маркером удаления, сохраняя структуру маски. При ",
			o(t.code, { children: "false" }),
			" символы удаляются полностью, что может привести к \"схлопыванию\" групп и потере структуры. Работает только для фиксированных (не резиновых) групп специальных символов."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Сохранение структуры групп (по умолчанию) -->\n<Mask\nmask=\"***-###\"\n:special=\"['*', '#']\"\ngroupSave\n/>\n\n<!-- Без сохранения структуры -->\n<Mask\nmask=\"***-###\"\n:special=\"['*', '#']\"\n:groupSave=\"false\"\n/>\n",
			language: "html"
		})
	] });
}
function nu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(tu, { ...e })
	}) : tu(e);
}
//#endregion
//#region src/media/mdx/Mask/mask.en.mdx
function ru(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Mask template" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "mask" }),
			" property defines a template for structured data input with automatic real-time formatting."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "string" }), " — single mask for fixed format"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "string[]" }), " — array of masks to support multiple formats with automatic selection"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"The template uses two types of characters: special characters (default ",
			o(t.code, { children: "*" }),
			") denote positions for user input, while literal characters are inserted automatically and cannot be changed. The component automatically adds separators during typing and restricts input to only allowed characters in corresponding positions. When using an array of masks, the system automatically selects the most suitable template based on entered data. Works together with the validation system through ",
			o(t.code, { children: "pattern" }),
			" and ",
			o(t.code, { children: "check" }),
			" properties. For built-in types (",
			o(t.code, { children: "currency" }),
			", ",
			o(t.code, { children: "number" }),
			", ",
			o(t.code, { children: "date" }),
			"), masks are generated automatically based on regional settings."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Russian phone -->\n<Mask mask=\"+7 *** *** ** **\" />\n\n<!-- Bank card -->\n<Mask mask=\"**** **** **** ****\" />\n\n<!-- Multiple formats -->\n<Mask :mask=\"['+7 *** *** ** **', '8 *** *** ** **']\" />\n",
			language: "html"
		})
	] });
}
function iu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ru, { ...e })
	}) : ru(e);
}
//#endregion
//#region src/media/mdx/Mask/mask.ru.mdx
function au(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Шаблон маски" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "mask" }),
			" определяет шаблон для структурированного ввода данных с автоматическим форматированием в реальном времени."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "string" }), " — одиночная маска для фиксированного формата"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "string[]" }), " — массив масок для поддержки множественных форматов с автоматическим выбором"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"В шаблоне используются два типа символов: специальные символы (по умолчанию ",
			o(t.code, { children: "*" }),
			") обозначают позиции для пользовательского ввода, а литеральные символы вставляются автоматически и не могут быть изменены. Компонент автоматически добавляет разделители во время набора и ограничивает ввод только допустимыми символами в соответствующих позициях. При использовании массива масок система автоматически выбирает наиболее подходящий шаблон на основе введённых данных. Работает совместно с системой валидации через свойства ",
			o(t.code, { children: "pattern" }),
			" и ",
			o(t.code, { children: "check" }),
			". Для встроенных типов (",
			o(t.code, { children: "currency" }),
			", ",
			o(t.code, { children: "number" }),
			", ",
			o(t.code, { children: "date" }),
			") маски генерируются автоматически на основе региональных настроек."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Российский телефон -->\n<Mask mask=\"+7 *** *** ** **\" />\n\n<!-- Банковская карта -->\n<Mask mask=\"**** **** **** ****\" />\n\n<!-- Множественные форматы -->\n<Mask :mask=\"['+7 *** *** ** **', '8 *** *** ** **']\" />\n",
			language: "html"
		})
	] });
}
function ou(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(au, { ...e })
	}) : au(e);
}
//#endregion
//#region src/media/mdx/Mask/match.en.mdx
function su(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Input character validation" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "match" }),
			" property defines a regular expression for checking the validity of entered characters."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "RegExp" }),
				" — regular expression (default ",
				o(t.code, { children: "/[0-9]/" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "string" }), " — string converted to regular expression"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Checks each character during input. Characters that don't match the expression are ignored. Local ",
			o(t.code, { children: "match" }),
			" in group settings (",
			o(t.code, { children: "special[group].match" }),
			") takes priority over global. Differs from ",
			o(t.code, { children: "pattern" }),
			" in that ",
			o(t.code, { children: "match" }),
			" is a simple regular expression check, while ",
			o(t.code, { children: "pattern" }),
			" can be a function with access to mask state."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Digits only (default) -->\n<Mask mask=\"***-***\" />\n\n<!-- HEX characters -->\n<Mask mask=\"***-***\" :match=\"/[A-F0-9]/i\" />\n\n<!-- Different rules for groups -->\n<Mask\nmask=\"***-###\"\nmatch=\"\\d\"\n:special=\"{\n  '*': {},\n  '#': { match: /[A-Z]/ }\n}\"\n/>\n",
			language: "html"
		})
	] });
}
function cu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(su, { ...e })
	}) : su(e);
}
//#endregion
//#region src/media/mdx/Mask/match.ru.mdx
function lu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Валидация вводимых символов" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "match" }),
			" определяет регулярное выражение для проверки допустимости вводимых символов."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "RegExp" }),
				" — регулярное выражение (по умолчанию ",
				o(t.code, { children: "/[0-9]/" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "string" }), " — строка, преобразуется в регулярное выражение"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Проверяет каждый символ при вводе. Символы, не соответствующие выражению, игнорируются. Локальный ",
			o(t.code, { children: "match" }),
			" в настройках группы (",
			o(t.code, { children: "special[группа].match" }),
			") имеет приоритет над глобальным. Отличается от ",
			o(t.code, { children: "pattern" }),
			" тем, что ",
			o(t.code, { children: "match" }),
			" — простая проверка регулярным выражением, а ",
			o(t.code, { children: "pattern" }),
			" может быть функцией с доступом к состоянию маски."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Только цифры (по умолчанию) -->\n<Mask mask=\"***-***\" />\n\n<!-- HEX-символы -->\n<Mask mask=\"***-***\" :match=\"/[A-F0-9]/i\" />\n\n<!-- Разные правила для групп -->\n<Mask\nmask=\"***-###\"\nmatch=\"\\d\"\n:special=\"{\n  '*': {},\n  '#': { match: /[A-Z]/ }\n}\"\n/>\n",
			language: "html"
		})
	] });
}
function uu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(lu, { ...e })
	}) : lu(e);
}
//#endregion
//#region src/media/mdx/Mask/numberTypes.en.mdx
function du(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Numeric mask types" }),
		"\n",
		o(t.p, { children: "Numeric types in Mask provide specialized formatting and validation for working with numbers, currencies, and financial data." }),
		"\n",
		s(t.p, { children: [
			"Numeric types automatically create rubber masks with variable length, ignoring the ",
			o(t.code, { children: "mask" }),
			" property. Negative values and ",
			o(t.code, { children: "min" }),
			"/",
			o(t.code, { children: "max" }),
			" constraints are supported. Thousand separators and decimal places (via the ",
			o(t.code, { children: "fraction" }),
			" parameter) adapt based on the selected locale."
		] }),
		"\n",
		o(t.h3, { children: "Types" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "number" }), " — simple numeric mask without formatting"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "number-format" }), " — numbers with automatic thousand separators"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "currency" }), " — currency with symbol (₽, $, €) and formatting"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Property fraction" }),
		"\n",
		o(t.p, { children: "Defines the number of decimal places:" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "number" }),
				" — fixed number of digits (e.g., ",
				o(t.code, { children: "2" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — auto-detection from input"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "false" }),
				", ",
				o(t.code, { children: "0" }),
				" — integers only"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Localization" }),
		"\n",
		s(t.p, { children: [
			"Formats adapt via the ",
			o(t.code, { children: "language" }),
			" property:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "ru" }),
				" — ",
				o(t.code, { children: "1 234,56" }),
				" (space and comma)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "en-US" }),
				" — ",
				o(t.code, { children: "1,234.56" }),
				" (comma and dot)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "de" }),
				" — ",
				o(t.code, { children: "1.234,56" }),
				" (dot and comma)"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Examples" }),
		"\n",
		o(i, {
			code: "\n<!-- Formatted number -->\n<Mask type=\"number-format\" language=\"en-US\" :fraction=\"2\" />\n\n<!-- Currency -->\n<Mask type=\"currency\" currency=\"USD\" language=\"en-US\" />\n\n<!-- Currency without symbol -->\n<Mask type=\"currency\" currency=\"USD\" :currencyHide=\"true\" />\n",
			language: "html"
		})
	] });
}
function fu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(du, { ...e })
	}) : du(e);
}
//#endregion
//#region src/media/mdx/Mask/numberTypes.ru.mdx
function pu(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Числовые типы масок" }),
		"\n",
		o(t.p, { children: "Числовые типы в Mask обеспечивают специализированное форматирование и валидацию для работы с числами, валютами и финансовыми данными." }),
		"\n",
		s(t.p, { children: [
			"Числовые типы автоматически создают резиновые маски переменной длины, игнорируя свойство ",
			o(t.code, { children: "mask" }),
			". Поддерживаются отрицательные значения и ограничения ",
			o(t.code, { children: "min" }),
			"/",
			o(t.code, { children: "max" }),
			". Разделители разрядов и дробной части (параметр ",
			o(t.code, { children: "fraction" }),
			") адаптируются под выбранную локаль."
		] }),
		"\n",
		o(t.h3, { children: "Типы" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "number" }), " — простая числовая маска без форматирования"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "number-format" }), " — числа с автоматическими разделителями разрядов"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "currency" }), " — валюта с символом (₽, $, €) и форматированием"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Свойство fraction" }),
		"\n",
		o(t.p, { children: "Определяет количество знаков после запятой:" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "number" }),
				" — фиксированное количество знаков (например, ",
				o(t.code, { children: "2" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "true" }), " — автоопределение по вводу"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "false" }),
				", ",
				o(t.code, { children: "0" }),
				" — только целые числа"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Локализация" }),
		"\n",
		s(t.p, { children: [
			"Форматы адаптируются через свойство ",
			o(t.code, { children: "language" }),
			":"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "ru" }),
				" — ",
				o(t.code, { children: "1 234,56" }),
				" (пробел и запятая)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "en-US" }),
				" — ",
				o(t.code, { children: "1,234.56" }),
				" (запятая и точка)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "de" }),
				" — ",
				o(t.code, { children: "1.234,56" }),
				" (точка и запятая)"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Примеры" }),
		"\n",
		o(i, {
			code: "\n<!-- Форматированное число -->\n<Mask type=\"number-format\" language=\"ru\" :fraction=\"2\" />\n\n<!-- Валюта -->\n<Mask type=\"currency\" currency=\"RUB\" language=\"ru\" />\n\n<!-- Валюта без символа -->\n<Mask type=\"currency\" currency=\"USD\" :currencyHide=\"true\" />\n",
			language: "html"
		})
	] });
}
function mu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(pu, { ...e })
	}) : pu(e);
}
//#endregion
//#region src/media/mdx/Mask/pattern.en.mdx
function hu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Validation and patterns" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "pattern" }),
			" and ",
			o(t.code, { children: "check" }),
			" properties are designed for managing input validation in the mask."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "pattern" }), " — defines validation patterns for individual mask groups, checking entered values"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "check" }), " — global validation pattern applied after the mask is fully completed"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work sequentially: ",
			o(t.code, { children: "pattern" }),
			" validates entered values at the mask group level, highlighting validation errors after input. Characters are entered into the field, but when they don't match the pattern, an error message is displayed. Each group (defined by special characters) receives its own pattern. After the mask is fully filled, ",
			o(t.code, { children: "check" }),
			" performs final validation of the entire value, providing an additional layer of verification for complex business logic. Both properties are optional and can be used independently or together for multi-level protection against incorrect data."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst phone = ref('')\nconst cardNumber = ref('')\n<\/script>\n\n<template>\n<!-- Pattern for groups: digits only -->\n<Mask\n  v-model=\"phone\"\n  mask=\"+7 (***) ***-**-**\"\n  pattern=\"\\d\"\n/>\n\n<!-- Pattern with function for different groups -->\n<Mask\n  v-model=\"phone\"\n  mask=\"DD/MM/YYYY\"\n  :special=\"{\n    'D': {\n      pattern: (masks) => {\n        const value = masks['D']?.value || ''\n        if (value === '0') return '[1-9]'\n        if (value === '3') return '[0-1]'\n        return '\\d'\n      }\n    },\n    'M': {\n      pattern: (masks) => {\n        const value = masks['M']?.value || ''\n        if (value === '0') return '[1-9]'\n        if (value === '1') return '[0-2]'\n        return '\\d'\n      }\n    },\n    'Y': { pattern: '\\d' }\n  }\"\n/>\n\n<!-- Check for final validation -->\n<Mask\n  v-model=\"cardNumber\"\n  mask=\"**** **** **** ****\"\n  pattern=\"\\d\"\n  :check=\"(maskData) => {\n    const number = maskData.value.replace(/s/g, '')\n    return isValidLuhn(number) ? {} : {\n      validationMessage: 'Invalid card number'\n    }\n  }\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function gu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(hu, { ...e })
	}) : hu(e);
}
//#endregion
//#region src/media/mdx/Mask/pattern.ru.mdx
function _u(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Валидация и паттерны" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "pattern" }),
			" и ",
			o(t.code, { children: "check" }),
			" предназначены для управления валидацией ввода в маске."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "pattern" }), " — определяет паттерны валидации для отдельных групп маски, проверяя введённые значения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "check" }), " — глобальный паттерн валидации, применяемый после полного заполнения маски"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают последовательно: ",
			o(t.code, { children: "pattern" }),
			" проверяет введённые значения на уровне групп маски, подсвечивая ошибки валидации после ввода. Символы вводятся в поле, но при несоответствии паттерну отображается сообщение об ошибке. Каждая группа (определённая специальными символами) получает свой паттерн. После полного заполнения маски ",
			o(t.code, { children: "check" }),
			" выполняет финальную валидацию всего значения, обеспечивая дополнительный слой проверки для сложной бизнес-логики. Оба свойства опциональны и могут использоваться независимо или совместно для многоуровневой защиты от некорректных данных."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst phone = ref('')\nconst cardNumber = ref('')\n<\/script>\n\n<template>\n<!-- Pattern для групп: только цифры -->\n<Mask\n  v-model=\"phone\"\n  mask=\"+7 (***) ***-**-**\"\n  pattern=\"\\d\"\n/>\n\n<!-- Pattern с функцией для разных групп -->\n<Mask\n  v-model=\"phone\"\n  mask=\"DD/MM/YYYY\"\n  :special=\"{\n    'D': {\n      pattern: (masks) => {\n        const value = masks['D']?.value || ''\n        if (value === '0') return '[1-9]'\n        if (value === '3') return '[0-1]'\n        return '\\d'\n      }\n    },\n    'M': {\n      pattern: (masks) => {\n        const value = masks['M']?.value || ''\n        if (value === '0') return '[1-9]'\n        if (value === '1') return '[0-2]'\n        return '\\d'\n      }\n    },\n    'Y': { pattern: '\\d' }\n  }\"\n/>\n\n<!-- Check для финальной валидации -->\n<Mask\n  v-model=\"cardNumber\"\n  mask=\"**** **** **** ****\"\n  pattern=\"\\d\"\n  :check=\"(maskData) => {\n    const number = maskData.value.replace(/s/g, '')\n    return isValidLuhn(number) ? {} : {\n      validationMessage: 'Неверный номер карты'\n    }\n  }\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function vu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_u, { ...e })
	}) : _u(e);
}
//#endregion
//#region src/media/mdx/Mask/special.en.mdx
function yu(e) {
	let t = {
		a: "a",
		code: "code",
		em: "em",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Special characters" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "special" }),
			" property defines special characters to denote user input positions in the mask and configure their extended behavior."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "string" }),
				" — single special character (default ",
				o(t.code, { children: "'*'" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "string[]" }), " — array of special characters for different group types"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "MaskSpecialList" }), " — object with extended configuration for each character"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Special characters in the mask template denote positions where users can enter data, unlike literal characters that are inserted automatically." }),
		"\n",
		s(t.p, { children: [
			"When using a simple string (e.g., ",
			o(t.code, { children: "special=\"*\"" }),
			"), all input positions in the mask are restricted by the same validation rules."
		] }),
		"\n",
		s(t.p, { children: [
			"An array of characters (e.g., ",
			o(t.code, { children: "special=\"['*', 'A', '#']\"" }),
			") allows creating different group types with individual constraints: one group for digits, another for letters, a third for special characters."
		] }),
		"\n",
		s(t.p, { children: [
			"Object notation ",
			o(t.code, { children: "MaskSpecialList" }),
			" (see ",
			o(t.a, {
				href: "#maskspeciallist",
				children: "detailed description below"
			}),
			") provides maximum flexibility. Each special character is configured separately with the ability to set default values, rubber groups with variable length, auto-transition characters, and custom validation."
		] }),
		"\n",
		s(t.p, { children: [
			"For built-in types (",
			o(t.code, { children: "currency" }),
			", ",
			o(t.code, { children: "number" }),
			", ",
			o(t.code, { children: "date" }),
			", ",
			o(t.code, { children: "time" }),
			"), the system automatically generates special characters considering regional settings, ignoring the user-defined ",
			o(t.code, { children: "special" }),
			" value."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Simple special character -->\n<Mask mask=\"***-***\" special=\"*\" />\n\n<!-- Multiple group types -->\n<Mask mask=\"AA*-###\" :special=\"['A', '*', '#']\" />\n\n<!-- Extended configuration -->\n<Mask\nmask=\"***-***\"\n:special=\"{\n  '*': {\n    pattern: '\\d',\n    view: '_',\n    rubber: true,\n    minLength: 2,\n    maxLength: 8,\n    transitionChar: ' '\n  }\n}\"\n/>\n\n<!-- Groups with default values -->\n<Mask\nmask=\"DD/MM/YYYY\"\n:special=\"{\n  'D': { defaultValue: '01', pattern: '\\d' },\n  'M': { defaultValue: '01', pattern: '\\d' },\n  'Y': { defaultValue: '2024', pattern: '\\d' }\n}\"\n/>\n",
			language: "html"
		}),
		"\n",
		o(t.h2, { children: "MaskSpecialList" }),
		"\n",
		s(t.p, { children: [
			o(t.code, { children: "MaskSpecialList" }),
			" is an extended configuration object that allows for fine-tuned control over the behavior of each special character in the mask. Each key in the object corresponds to one of the characters defined in the ",
			o(t.code, { children: "special" }),
			" property (or the default ",
			o(t.code, { children: "*" }),
			" character)."
		] }),
		"\n",
		o(t.h3, { children: "MaskSpecialItem Properties" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "defaultValue?: string" }),
				" — ",
				o(t.strong, { children: "initial value" }),
				". Automatically populates the group on initialization. The user can modify it if the ",
				o(t.code, { children: "match" }),
				" rules allow."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "rubber?: boolean" }),
				" — ",
				o(t.strong, { children: "rubber mode" }),
				". Enables dynamic length for the group. In the mask template, such a group is typically represented by one or more identical characters."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "transitionChar?: string | string[]" }),
				" — ",
				o(t.strong, { children: "transition character" }),
				". A specific character (e.g., space or dot) that triggers an immediate focus shift to the next part of the mask upon entry. Only for ",
				o(t.code, { children: "rubber: true" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "minLength?: number" }),
				" — ",
				o(t.strong, { children: "minimum length" }),
				". Used to validate whether the group has been sufficiently filled."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "maxLength?: number" }),
				" — ",
				o(t.strong, { children: "maximum length" }),
				". The limit for expansion in \"rubber\" groups."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "match?: RegExp | string" }),
				" — ",
				o(t.strong, { children: "input filter" }),
				". A regular expression that checks ",
				o(t.em, { children: "each individual" }),
				" character as it is typed. Default: ",
				o(t.code, { children: "[0-9]" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "pattern?: string | Function" }),
				" — ",
				o(t.strong, { children: "group validator" }),
				". A rule for validating the entire accumulated string in the group. Can be a string (regex) or a function receiving mask data."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "view?: string" }),
				" — ",
				o(t.strong, { children: "visual placeholder" }),
				". The character the user sees in empty slots of this group. Default: ",
				o(t.code, { children: "_" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "How to Work with MaskSpecialList" }),
		"\n",
		s(t.p, { children: [
			"For effective use of ",
			o(t.code, { children: "MaskSpecialList" }),
			", follow these simple rules:"
		] }),
		"\n",
		s(t.ol, { children: [
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Character Mapping" }),
				": Every key in the ",
				o(t.code, { children: "MaskSpecialList" }),
				" object must be a character you used in your ",
				o(t.code, { children: "mask" }),
				" template. For example, if the mask is ",
				o(t.code, { children: "AAA-***" }),
				", you can configure group ",
				o(t.code, { children: "A" }),
				" for letters and ",
				o(t.code, { children: "*" }),
				" for digits."
			] }),
			"\n",
			s(t.li, { children: [
				s(t.strong, { children: [
					"Filter Configuration (",
					o(t.code, { children: "match" }),
					")"
				] }),
				": Use ",
				o(t.code, { children: "match" }),
				" to restrict the types of characters a user can physically type. This stops letters from being entered where numbers are expected at the earliest possible stage."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Use Rubber Groups" }),
				": If a field's length is unknown in advance (like a phone extension), set ",
				o(t.code, { children: "rubber: true" }),
				". This allows the mask to expand as the user types."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Manage Transitions" }),
				": For a better user experience, define a ",
				o(t.code, { children: "transitionChar" }),
				" (like a space or dot). This allows users to manually finish the current group and jump to the next one without filling the entire length."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Default Values" }),
				": If part of the data is frequently repeated (like the current year), use ",
				o(t.code, { children: "defaultValue" }),
				". This reduces the number of actions required from the user."
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Example" }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst value = ref('')\n<\/script>\n\n<template>\n<!-- Example of a rubber mask for an IP address -->\n<Mask\n  v-model=\"value\"\n  mask=\"*.#.#.#\"\n  :special=\"{\n    '*': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' },\n    '#': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' }\n  }\"\n/>\n\n<!-- Example of a mask with different group types and default values -->\n<Mask\n  mask=\"AAA-****\"\n  :special=\"{\n    'A': { match: /[A-Z]/, view: 'A' },\n    '*': { defaultValue: '0000', match: /[0-9]/, view: '0' }\n  }\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function bu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(yu, { ...e })
	}) : yu(e);
}
//#endregion
//#region src/media/mdx/Mask/special.ru.mdx
function xu(e) {
	let t = {
		a: "a",
		code: "code",
		em: "em",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Специальные символы" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "special" }),
			" определяет специальные символы для обозначения мест пользовательского ввода в маске и настройку их расширенного поведения."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "string" }),
				" — одиночный специальный символ (по умолчанию ",
				o(t.code, { children: "'*'" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "string[]" }), " — массив специальных символов для разных типов групп"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "MaskSpecialList" }), " — объект с расширенной конфигурацией каждого символа"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Специальные символы в шаблоне маски обозначают позиции, где пользователь может вводить данные, в отличие от литеральных символов, которые вставляются автоматически." }),
		"\n",
		s(t.p, { children: [
			"При использовании простой строки (например, ",
			o(t.code, { children: "special=\"*\"" }),
			") все места ввода в маске ограничиваются одинаковыми правилами валидации."
		] }),
		"\n",
		s(t.p, { children: [
			"Массив символов (например, ",
			o(t.code, { children: "special=\"['*', 'A', '#']\"" }),
			") позволяет создавать разные типы групп с индивидуальными ограничениями: одна группа для цифр, другая для букв, третья для специальных символов."
		] }),
		"\n",
		s(t.p, { children: [
			"Объектная нотация ",
			o(t.code, { children: "MaskSpecialList" }),
			" (см. ",
			o(t.a, {
				href: "#maskspeciallist",
				children: "детальное описание ниже"
			}),
			") предоставляет максимальную гибкость. Каждый специальный символ настраивается отдельно с возможностью задать значения по умолчанию, резиновые группы переменной длины, символы автоперехода и кастомную валидацию."
		] }),
		"\n",
		s(t.p, { children: [
			"Для встроенных типов (",
			o(t.code, { children: "currency" }),
			", ",
			o(t.code, { children: "number" }),
			", ",
			o(t.code, { children: "date" }),
			", ",
			o(t.code, { children: "time" }),
			") система автоматически генерирует специальные символы с учётом региональных настроек, игнорируя пользовательское значение ",
			o(t.code, { children: "special" }),
			"."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Простой специальный символ -->\n<Mask mask=\"***-***\" special=\"*\" />\n\n<!-- Несколько типов групп -->\n<Mask mask=\"AA*-###\" :special=\"['A', '*', '#']\" />\n\n<!-- Расширенная конфигурация -->\n<Mask\nmask=\"***-***\"\n:special=\"{\n  '*': {\n    pattern: '\\d',\n    view: '_',\n    rubber: true,\n    minLength: 2,\n    maxLength: 8,\n    transitionChar: ' '\n  }\n}\"\n/>\n\n<!-- Группы с значениями по умолчанию -->\n<Mask\nmask=\"DD/MM/YYYY\"\n:special=\"{\n  'D': { defaultValue: '01', pattern: '\\d' },\n  'M': { defaultValue: '01', pattern: '\\d' },\n  'Y': { defaultValue: '2024', pattern: '\\d' }\n}\"\n/>\n",
			language: "html"
		}),
		"\n",
		o(t.h2, { children: "MaskSpecialList" }),
		"\n",
		s(t.p, { children: [
			o(t.code, { children: "MaskSpecialList" }),
			" — это объект расширенной конфигурации, который позволяет детально настроить поведение каждого специального символа в маске. Каждый ключ в объекте соответствует одному из символов, определённых в свойстве ",
			o(t.code, { children: "special" }),
			" (или символу ",
			o(t.code, { children: "*" }),
			" по умолчанию)."
		] }),
		"\n",
		o(t.h3, { children: "Свойства MaskSpecialItem" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "defaultValue?: string" }),
				" — ",
				o(t.strong, { children: "начальное значение" }),
				". Автоматически заполняет группу при инициализации. Пользователь может изменить его, если это разрешено правилами ",
				o(t.code, { children: "match" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "rubber?: boolean" }),
				" — ",
				o(t.strong, { children: "резиновый режим" }),
				". Позволяет группе изменять свою длину. В шаблоне маски такая группа обычно представлена одним или несколькими одинаковыми символами."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "transitionChar?: string | string[]" }),
				" — ",
				o(t.strong, { children: "символ перехода" }),
				". Конкретный символ (например, пробел или точка), при вводе которого фокус немедленно переходит к следующей части маски. Только для ",
				o(t.code, { children: "rubber: true" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "minLength?: number" }),
				" — ",
				o(t.strong, { children: "минимальная длина" }),
				". Используется для валидации полноты заполнения группы."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "maxLength?: number" }),
				" — ",
				o(t.strong, { children: "максимальная длина" }),
				". Лимит расширения для «резиновых» групп."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "match?: RegExp | string" }),
				" — ",
				o(t.strong, { children: "фильтр ввода" }),
				". Регулярное выражение, проверяющее ",
				o(t.em, { children: "каждый отдельный" }),
				" символ при нажатии клавиши. По умолчанию: ",
				o(t.code, { children: "[0-9]" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "pattern?: string | Function" }),
				" — ",
				o(t.strong, { children: "валидатор группы" }),
				". Правило для проверки всей накопленной строки в группе. Может быть строкой (regex) или функцией, принимающей данные маски."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "view?: string" }),
				" — ",
				o(t.strong, { children: "визуальный плейсхолдер" }),
				". Тот символ, который видит пользователь в пустых ячейках этой группы. По умолчанию: ",
				o(t.code, { children: "_" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Как работать с MaskSpecialList" }),
		"\n",
		s(t.p, { children: [
			"Для эффективного использования ",
			o(t.code, { children: "MaskSpecialList" }),
			" придерживайтесь следующих правил:"
		] }),
		"\n",
		s(t.ol, { children: [
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Сопоставление символов" }),
				": Каждый ключ в объекте ",
				o(t.code, { children: "MaskSpecialList" }),
				" должен быть символом, который вы использовали в шаблоне ",
				o(t.code, { children: "mask" }),
				". Например, если маска ",
				o(t.code, { children: "AAA-***" }),
				", вы можете настроить группу ",
				o(t.code, { children: "A" }),
				" для букв и ",
				o(t.code, { children: "*" }),
				" для цифр."
			] }),
			"\n",
			s(t.li, { children: [
				s(t.strong, { children: [
					"Настройка фильтров (",
					o(t.code, { children: "match" }),
					")"
				] }),
				": Используйте ",
				o(t.code, { children: "match" }),
				" для ограничения типов символов, которые пользователь в принципе может нажать. Это предотвращает ввод букв там, где нужны цифры, на самом раннем этапе."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Использование резиновых групп" }),
				": Если длина поля заранее неизвестна (например, добавочный номер телефона), установите ",
				o(t.code, { children: "rubber: true" }),
				". Это позволит маске расширяться по мере ввода."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Управление переходом" }),
				": Для удобства пользователя задавайте ",
				o(t.code, { children: "transitionChar" }),
				" (например, пробел или точку). Это позволяет пользователю вручную завершить ввод в текущей группе и переключиться на следующую, не дожидаясь заполнения всей длины."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Значения по умолчанию" }),
				": Если часть данных часто повторяется (например, текущий год), используйте ",
				o(t.code, { children: "defaultValue" }),
				". Это уменьшит количество действий пользователя."
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Пример" }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst value = ref('')\n<\/script>\n\n<template>\n<!-- Пример резиновой маски для IP-адреса -->\n<Mask\n  v-model=\"value\"\n  mask=\"*.#.#.#\"\n  :special=\"{\n    '*': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' },\n    '#': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' }\n  }\"\n/>\n\n<!-- Пример маски с разными типами групп и значениями по умолчанию -->\n<Mask\n  mask=\"AAA-****\"\n  :special=\"{\n    'A': { match: /[A-Z]/, view: 'A' },\n    '*': { defaultValue: '0000', match: /[0-9]/, view: '0' }\n  }\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Su(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(xu, { ...e })
	}) : xu(e);
}
//#endregion
//#region src/media/mdx/Mask/type.en.mdx
function Cu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Mask types" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "type" }),
			" property defines the mask operation mode and automatically generates the appropriate structure for different data types."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'text'" }), " — basic text mask (default)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "'number'" }),
				", ",
				o(t.code, { children: "'number-format'" }),
				", ",
				o(t.code, { children: "'currency'" }),
				" — numeric types with validation and localization"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "'date'" }),
				", ",
				o(t.code, { children: "'datetime'" }),
				", ",
				o(t.code, { children: "'time'" }),
				", ",
				o(t.code, { children: "'year'" }),
				", ",
				o(t.code, { children: "'month'" }),
				", ",
				o(t.code, { children: "'day'" }),
				", ",
				o(t.code, { children: "'hour-minute'" }),
				" — date and time types"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"When using ",
			o(t.code, { children: "text" }),
			", explicit structure specification via the ",
			o(t.code, { children: "mask" }),
			" property is required. Specialized numeric types automatically create rubber masks with thousand separators, validation, and formatting according to regional settings (",
			o(t.code, { children: "language" }),
			"). Date types generate masks according to local formats with validation of entered values correctness. When a specialized type is activated, the ",
			o(t.code, { children: "mask" }),
			" property is ignored, and the mask structure is formed automatically based on ",
			o(t.code, { children: "language" }),
			", ",
			o(t.code, { children: "currency" }),
			", and ",
			o(t.code, { children: "fraction" }),
			"."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Text mask -->\n<Mask mask=\"+1 (***) ***-****\" type=\"text\" />\n\n<!-- Currency mask -->\n<Mask type=\"currency\" currency=\"USD\" language=\"en-US\" />\n\n<!-- Date mask -->\n<Mask type=\"date\" language=\"en-US\" />\n",
			language: "html"
		})
	] });
}
function wu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Cu, { ...e })
	}) : Cu(e);
}
//#endregion
//#region src/media/mdx/Mask/type.ru.mdx
function Tu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Типы масок" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "type" }),
			" определяет режим работы маски и автоматически генерирует соответствующую структуру для различных типов данных."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'text'" }), " — базовая текстовая маска (по умолчанию)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "'number'" }),
				", ",
				o(t.code, { children: "'number-format'" }),
				", ",
				o(t.code, { children: "'currency'" }),
				" — числовые типы с валидацией и локализацией"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "'date'" }),
				", ",
				o(t.code, { children: "'datetime'" }),
				", ",
				o(t.code, { children: "'time'" }),
				", ",
				o(t.code, { children: "'year'" }),
				", ",
				o(t.code, { children: "'month'" }),
				", ",
				o(t.code, { children: "'day'" }),
				", ",
				o(t.code, { children: "'hour-minute'" }),
				" — типы дат и времени"
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"При использовании ",
			o(t.code, { children: "text" }),
			" требуется явное указание структуры через свойство ",
			o(t.code, { children: "mask" }),
			". Специализированные числовые типы автоматически создают резиновые маски с разделителями разрядов, валидацией и форматированием согласно региональным настройкам (",
			o(t.code, { children: "language" }),
			"). Типы дат генерируют маски по локальным форматам с проверкой корректности введённых значений. При активации специализированного типа свойство ",
			o(t.code, { children: "mask" }),
			" игнорируется, а структура маски формируется автоматически на основе ",
			o(t.code, { children: "language" }),
			", ",
			o(t.code, { children: "currency" }),
			" и ",
			o(t.code, { children: "fraction" }),
			"."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Текстовая маска -->\n<Mask mask=\"+7 (***) ***-**-**\" type=\"text\" />\n\n<!-- Валютная маска -->\n<Mask type=\"currency\" currency=\"RUB\" language=\"ru\" />\n\n<!-- Маска даты -->\n<Mask type=\"date\" language=\"ru\" />\n",
			language: "html"
		})
	] });
}
function Eu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Tu, { ...e })
	}) : Tu(e);
}
//#endregion
//#region src/media/mdx/Mask/visible.en.mdx
function Du(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Mask visibility control" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "visible" }),
			" and ",
			o(t.code, { children: "visiblePartly" }),
			" properties are designed for managing the display of mask placeholder characters and overall component visibility."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "visible" }), " — controls complete visibility of the mask component"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "visiblePartly" }), " — controls partial visibility of placeholder characters"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: when ",
			o(t.code, { children: "visible: false" }),
			", the mask component is completely hidden, including all placeholder characters. When ",
			o(t.code, { children: "visiblePartly: true" }),
			" is activated, only filled mask positions are displayed, hiding empty placeholder characters. If ",
			o(t.code, { children: "visible" }),
			" is set to ",
			o(t.code, { children: "false" }),
			", the ",
			o(t.code, { children: "visiblePartly" }),
			" property is ignored. Visibility changes don't affect validation logic and data processing, allowing creation of adaptive interfaces with conditional or abbreviated mask display."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst showMask = ref(true)\nconst compactMode = ref(false)\n<\/script>\n\n<template>\n<!-- Complete mask hiding -->\n<Mask\n  mask=\"+1 (***) ***-****\"\n  :visible=\"false\"\n/>\n\n<!-- Show only filled positions -->\n<Mask\n  mask=\"+1 (***) ***-****\"\n  :visiblePartly=\"true\"\n/>\n\n<!-- Conditional display with partial visibility -->\n<Mask\n  mask=\"+1 (***) ***-****\"\n  :visible=\"showMask\"\n  :visiblePartly=\"compactMode\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Ou(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Du, { ...e })
	}) : Du(e);
}
//#endregion
//#region src/media/mdx/Mask/visible.ru.mdx
function ku(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление видимостью маски" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "visible" }),
			" и ",
			o(t.code, { children: "visiblePartly" }),
			" предназначены для управления отображением символов-заполнителей маски и видимостью компонента в целом."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "visible" }), " — управляет полной видимостью компонента маски"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "visiblePartly" }), " — управляет частичной видимостью символов-заполнителей"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: при ",
			o(t.code, { children: "visible: false" }),
			" компонент маски полностью скрыт, включая все символы-заполнители. При активации ",
			o(t.code, { children: "visiblePartly: true" }),
			" отображаются только заполненные позиции маски, скрывая пустые символы-заполнители. Если ",
			o(t.code, { children: "visible" }),
			" установлен в ",
			o(t.code, { children: "false" }),
			", то свойство ",
			o(t.code, { children: "visiblePartly" }),
			" игнорируется. Изменение видимости не влияет на логику валидации и обработку данных, позволяя создавать адаптивные интерфейсы с условным или сокращённым отображением маски."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst showMask = ref(true)\nconst compactMode = ref(false)\n<\/script>\n\n<template>\n<!-- Полное скрытие маски -->\n<Mask\n  mask=\"+7 (***) ***-**-**\"\n  :visible=\"false\"\n/>\n\n<!-- Показ только заполненных позиций -->\n<Mask\n  mask=\"+7 (***) ***-**-**\"\n  :visiblePartly=\"true\"\n/>\n\n<!-- Условное отображение с частичной видимостью -->\n<Mask\n  mask=\"+7 (***) ***-**-**\"\n  :visible=\"showMask\"\n  :visiblePartly=\"compactMode\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Au(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ku, { ...e })
	}) : ku(e);
}
//#endregion
//#region src/media/mdx/Mask/wikiMdxMask.ts
var ju = {
	name: "Mask",
	descriptions: {
		basic: {
			en: Hl,
			ru: Wl
		},
		dateTypes: {
			en: Kl,
			ru: Jl
		},
		expose: {
			en: Xl,
			ru: Ql
		},
		groupSave: {
			en: eu,
			ru: nu
		},
		mask: {
			en: iu,
			ru: ou
		},
		match: {
			en: cu,
			ru: uu
		},
		numberTypes: {
			en: fu,
			ru: mu
		},
		pattern: {
			en: gu,
			ru: vu
		},
		special: {
			en: bu,
			ru: Su
		},
		type: {
			en: wu,
			ru: Eu
		},
		visible: {
			en: Ou,
			ru: Au
		}
	}
};
//#endregion
//#region src/media/mdx/Menu/ajax.en.mdx
function Mu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "AJAX Menu Loading" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "ajax" }),
			", ",
			o(t.code, { children: "request" }),
			", and ",
			o(t.code, { children: "cache" }),
			" properties are designed for managing asynchronous loading and caching of menu data."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "ajax" }), " — enables remote data loading mode (URL string or function)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "request" }),
				" — object of type ",
				o(t.code, { children: "ApiFetch" }),
				" with HTTP request settings"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "cache" }), " — enables caching of loaded menu items"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Properties work together: if ",
			o(t.code, { children: "ajax" }),
			" is not specified or equals ",
			o(t.code, { children: "false" }),
			", the menu uses local data. When ",
			o(t.code, { children: "ajax" }),
			" is activated (URL string or ",
			o(t.code, { children: "true" }),
			"), ",
			o(t.code, { children: "request" }),
			" defines HTTP request parameters (method, headers, body), and ",
			o(t.code, { children: "cache" }),
			" manages data persistence. When ",
			o(t.code, { children: "cache" }),
			" is enabled, repeated menu openings use saved data instead of new requests, reducing server load."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n<!-- Loading with URL -->\n<Menu\n  v-model:open=\"isOpen\"\n  ajax=\"/api/menu-items\"\n  :cache=\"true\"\n/>\n\n<!-- With request settings -->\n<Menu\n  v-model:open=\"isOpen\"\n  ajax=\"/api/menu\"\n  :request=\"{\n    method: 'POST',\n    headers: { 'X-Custom': 'value' },\n    auth: true\n  }\"\n  :cache=\"true\"\n/>\n\n<!-- Loading function -->\n<Menu\n  v-model:open=\"isOpen\"\n  :ajax=\"async () => {\n    const response = await fetch('/api/menu')\n    return response.json()\n  }\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Nu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Mu, { ...e })
	}) : Mu(e);
}
//#endregion
//#region src/media/mdx/Menu/ajax.ru.mdx
function Pu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "AJAX загрузка меню" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "ajax" }),
			", ",
			o(t.code, { children: "request" }),
			" и ",
			o(t.code, { children: "cache" }),
			" предназначены для управления асинхронной загрузкой и кэшированием данных меню."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "ajax" }), " — включает режим удалённой загрузки данных (строка URL или функция)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "request" }),
				" — объект типа ",
				o(t.code, { children: "ApiFetch" }),
				" с настройками HTTP-запроса"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "cache" }), " — включает кэширование загруженных элементов меню"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойства работают совместно: если ",
			o(t.code, { children: "ajax" }),
			" не задан или равен ",
			o(t.code, { children: "false" }),
			", меню использует локальные данные. При активации ",
			o(t.code, { children: "ajax" }),
			" (строка URL или ",
			o(t.code, { children: "true" }),
			"), ",
			o(t.code, { children: "request" }),
			" определяет параметры HTTP-запроса (метод, заголовки, тело), а ",
			o(t.code, { children: "cache" }),
			" управляет сохранением данных. При включённом ",
			o(t.code, { children: "cache" }),
			" повторные открытия меню используют сохранённые данные вместо новых запросов, снижая нагрузку на сервер."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n<!-- Загрузка с URL -->\n<Menu\n  v-model:open=\"isOpen\"\n  ajax=\"/api/menu-items\"\n  :cache=\"true\"\n/>\n\n<!-- С настройками запроса -->\n<Menu\n  v-model:open=\"isOpen\"\n  ajax=\"/api/menu\"\n  :request=\"{\n    method: 'POST',\n    headers: { 'X-Custom': 'value' },\n    auth: true\n  }\"\n  :cache=\"true\"\n/>\n\n<!-- Функция загрузки -->\n<Menu\n  v-model:open=\"isOpen\"\n  :ajax=\"async () => {\n    const response = await fetch('/api/menu')\n    return response.json()\n  }\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Fu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pu, { ...e })
	}) : Pu(e);
}
//#endregion
//#region src/media/mdx/Menu/event.updateValue.en.mdx
function Iu(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "updateValue" }) }),
		"\n",
		o(t.p, { children: "Event fires when the selected value in the menu changes." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value?: NumberOrStringOrBoolean" }), " — new selected value"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleUpdateValue = (value) => {\nconsole.log('New value:', value)\nconsole.log('Value type:', typeof value)\n}\n<\/script>\n\n<template>\n<Menu\n  :isSelectedByValue=\"true\"\n  @updateValue=\"handleUpdateValue\"\n>\n  <template #default>\n    <MenuItem value=\"item1\">Menu Item 1</MenuItem>\n    <MenuItem value=\"item2\">Menu Item 2</MenuItem>\n    <MenuItem value=\"item3\">Menu Item 3</MenuItem>\n  </template>\n</Menu>\n</template>\n",
			language: "html"
		})
	] });
}
function Lu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Iu, { ...e })
	}) : Iu(e);
}
//#endregion
//#region src/media/mdx/Menu/event.updateValue.ru.mdx
function Ru(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "updateValue" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении выбранного значения в меню." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value?: NumberOrStringOrBoolean" }), " — новое выбранное значение"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleUpdateValue = (value) => {\nconsole.log('Новое значение:', value)\nconsole.log('Тип значения:', typeof value)\n}\n<\/script>\n\n<template>\n<Menu\n  :isSelectedByValue=\"true\"\n  @updateValue=\"handleUpdateValue\"\n>\n  <template #default>\n    <MenuItem value=\"item1\">Пункт меню 1</MenuItem>\n    <MenuItem value=\"item2\">Пункт меню 2</MenuItem>\n    <MenuItem value=\"item3\">Пункт меню 3</MenuItem>\n  </template>\n</Menu>\n</template>\n",
			language: "html"
		})
	] });
}
function zu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ru, { ...e })
	}) : Ru(e);
}
//#endregion
//#region src/media/mdx/Menu/expose.navigation.en.mdx
function Bu(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "previous(): void" }),
			" — Moves selection to the previous menu item based on the ",
			o(t.code, { children: "step" }),
			" property value."
		] }),
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "next(): void" }),
			" — Moves selection to the next menu item based on the ",
			o(t.code, { children: "step" }),
			" property value."
		] }),
		"\n"
	] });
}
function Vu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Bu, { ...e })
	}) : Bu(e);
}
//#endregion
//#region src/media/mdx/Menu/expose.navigation.ru.mdx
function Hu(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "previous(): void" }),
			" — Перемещает выбор на предыдущий элемент меню на основе значения свойства ",
			o(t.code, { children: "step" }),
			"."
		] }),
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "next(): void" }),
			" — Перемещает выбор на следующий элемент меню на основе значения свойства ",
			o(t.code, { children: "step" }),
			"."
		] }),
		"\n"
	] });
}
function Uu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Hu, { ...e })
	}) : Hu(e);
}
//#endregion
//#region src/media/mdx/Menu/menu.en.mdx
function Wu(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating popup menus, dropdown lists, and context menus with navigation and action support." }),
		"\n",
		o(t.p, { children: "Menu combines the functionality of Window (positioning and visibility management), Bars (action and tool panel), and List (displaying items, groups, and nested submenus). The component provides keyboard navigation, nested structure support, asynchronous data loading, optimized rendering mode for large lists, and full control over open/close state." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Integration of Window, Bars, and List components" }),
			"\n",
			o(t.li, { children: "Keyboard navigation through menu items" }),
			"\n",
			o(t.li, { children: "Nested submenus with unlimited depth" }),
			"\n",
			o(t.li, { children: "Asynchronous data loading via AJAX" }),
			"\n",
			o(t.li, { children: "Lite mode for optimizing large lists (liteThreshold)" }),
			"\n",
			o(t.li, { children: "Search and filtering of menu items" }),
			"\n",
			o(t.li, { children: "Management of selected items (selected)" }),
			"\n",
			o(t.li, { children: "Flexible positioning relative to anchor" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Navigation dropdown menus" }),
			"\n",
			o(t.li, { children: "Right-click context menus" }),
			"\n",
			o(t.li, { children: "Action and operation menus" }),
			"\n",
			o(t.li, { children: "Selectors with search and filtering" }),
			"\n",
			o(t.li, { children: "Multi-level navigation menus" }),
			"\n",
			o(t.li, { children: "Menus with dynamic data loading" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\nconst menuItems = ref([\n{ label: 'Create', value: 'create', icon: 'add' },\n{ label: 'Edit', value: 'edit', icon: 'edit' },\n{ label: 'Delete', value: 'delete', icon: 'delete' },\n{\n  label: 'Export',\n  value: 'export',\n  children: [\n    { label: 'PDF', value: 'pdf' },\n    { label: 'Excel', value: 'excel' },\n    { label: 'CSV', value: 'csv' }\n  ]\n}\n])\n\nconst handleClick = (value) => {\nconsole.log('Selected item:', value)\nisOpen.value = false\n}\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Open menu</button>\n\n<Menu\n  v-model:open=\"isOpen\"\n  :list=\"menuItems\"\n  @click=\"handleClick\"\n>\n  <template #control=\"{ onclick }\">\n    <button @click=\"onclick\">Actions</button>\n  </template>\n</Menu>\n</template>\n",
			language: "html"
		})
	] });
}
function Gu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Wu, { ...e })
	}) : Wu(e);
}
//#endregion
//#region src/media/mdx/Menu/menu.ru.mdx
function Ku(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания всплывающих меню, выпадающих списков и контекстных меню с поддержкой навигации и действий." }),
		"\n",
		o(t.p, { children: "Menu объединяет функциональность Window (позиционирование и управление видимостью), Bars (панель действий и инструментов) и List (отображение пунктов, групп и вложенных подменю). Компонент обеспечивает клавиатурную навигацию, поддержку вложенной структуры, асинхронную загрузку данных, режим оптимизированного рендеринга для больших списков и полный контроль над состоянием открытия/закрытия." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Интеграция Window, Bars и List компонентов" }),
			"\n",
			o(t.li, { children: "Клавиатурная навигация по пунктам меню" }),
			"\n",
			o(t.li, { children: "Вложенные подменю с неограниченной глубиной" }),
			"\n",
			o(t.li, { children: "Асинхронная загрузка данных через AJAX" }),
			"\n",
			o(t.li, { children: "Режим lite для оптимизации больших списков (liteThreshold)" }),
			"\n",
			o(t.li, { children: "Поиск и фильтрация пунктов меню" }),
			"\n",
			o(t.li, { children: "Управление выбранными элементами (selected)" }),
			"\n",
			o(t.li, { children: "Гибкое позиционирование относительно якоря" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Выпадающие меню навигации" }),
			"\n",
			o(t.li, { children: "Контекстные меню по правому клику" }),
			"\n",
			o(t.li, { children: "Меню действий и операций" }),
			"\n",
			o(t.li, { children: "Селекторы с поиском и фильтрацией" }),
			"\n",
			o(t.li, { children: "Многоуровневые навигационные меню" }),
			"\n",
			o(t.li, { children: "Меню с динамической загрузкой данных" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\nconst menuItems = ref([\n{ label: 'Создать', value: 'create', icon: 'add' },\n{ label: 'Редактировать', value: 'edit', icon: 'edit' },\n{ label: 'Удалить', value: 'delete', icon: 'delete' },\n{\n  label: 'Экспорт',\n  value: 'export',\n  children: [\n    { label: 'PDF', value: 'pdf' },\n    { label: 'Excel', value: 'excel' },\n    { label: 'CSV', value: 'csv' }\n  ]\n}\n])\n\nconst handleClick = (value) => {\nconsole.log('Выбран пункт:', value)\nisOpen.value = false\n}\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Открыть меню</button>\n\n<Menu\n  v-model:open=\"isOpen\"\n  :list=\"menuItems\"\n  @click=\"handleClick\"\n>\n  <template #control=\"{ onclick }\">\n    <button @click=\"onclick\">Действия</button>\n  </template>\n</Menu>\n</template>\n",
			language: "html"
		})
	] });
}
function qu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ku, { ...e })
	}) : Ku(e);
}
//#endregion
//#region src/media/mdx/Menu/navigation.en.mdx
function Ju(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Menu item navigation" }),
		"\n",
		s(t.p, { children: [
			"Methods ",
			o(t.code, { children: "previous()" }),
			" and ",
			o(t.code, { children: "next()" }),
			" are designed for programmatic movement through menu items based on current selection and the ",
			o(t.code, { children: "step" }),
			" property."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Methods:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "previous()" }),
				" — moves selection to the previous item (backwards by ",
				o(t.code, { children: "step" }),
				" positions)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "next()" }),
				" — moves selection to the next item (forwards by ",
				o(t.code, { children: "step" }),
				" positions)"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "step" }), " — number of items to skip during navigation (default: 1)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"The methods work together with reactive ",
			o(t.code, { children: "selected" }),
			" state: calling ",
			o(t.code, { children: "previous()" }),
			" or ",
			o(t.code, { children: "next()" }),
			" automatically calculates the new position relative to the currently selected item. If no item is selected, the methods select the first available item. When reaching list boundaries (first or last item), navigation stops at the boundary item, preventing overflow beyond the list."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst menuRef = ref()\nconst selected = ref('item2')\n<\/script>\n\n<template>\n<!-- Call via ref -->\n<button @click=\"menuRef?.previous()\">Previous</button>\n<button @click=\"menuRef?.next()\">Next</button>\n\n<Menu\n  ref=\"menuRef\"\n  v-model:selected=\"selected\"\n  :list=\"[\n    { label: 'Item 1', value: 'item1' },\n    { label: 'Item 2', value: 'item2' },\n    { label: 'Item 3', value: 'item3' }\n  ]\"\n  :step=\"1\"\n/>\n\n<!-- Navigation in control slot -->\n<Menu v-model:selected=\"selected\" :list=\"items\">\n  <template #control=\"{ previous, next, selectedNames }\">\n    <button @click=\"previous\">◀</button>\n    <span>{{ selectedNames[0] }}</span>\n    <button @click=\"next\">▶</button>\n  </template>\n</Menu>\n\n<!-- With custom step -->\n<Menu\n  ref=\"menuRef\"\n  v-model:selected=\"selected\"\n  :list=\"items\"\n  :step=\"2\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Yu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ju, { ...e })
	}) : Ju(e);
}
//#endregion
//#region src/media/mdx/Menu/navigation.ru.mdx
function Xu(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Навигация по элементам меню" }),
		"\n",
		s(t.p, { children: [
			"Методы ",
			o(t.code, { children: "previous()" }),
			" и ",
			o(t.code, { children: "next()" }),
			" предназначены для программного перемещения по элементам меню на основе текущего выбора и свойства ",
			o(t.code, { children: "step" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Методы:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "previous()" }),
				" — перемещает выбор на предыдущий элемент (назад на ",
				o(t.code, { children: "step" }),
				" позиций)"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "next()" }),
				" — перемещает выбор на следующий элемент (вперед на ",
				o(t.code, { children: "step" }),
				" позиций)"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "step" }), " — количество элементов для пропуска при навигации (по умолчанию: 1)"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Методы работают совместно с реактивным состоянием ",
			o(t.code, { children: "selected" }),
			": при вызове ",
			o(t.code, { children: "previous()" }),
			" или ",
			o(t.code, { children: "next()" }),
			" происходит автоматический расчёт новой позиции относительно текущего выделенного элемента. Если элемент не выбран, методы выбирают первый доступный элемент. При достижении границ списка (первый или последний элемент) навигация останавливается на граничном элементе, предотвращая выход за пределы списка."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst menuRef = ref()\nconst selected = ref('item2')\n<\/script>\n\n<template>\n<!-- Вызов через ref -->\n<button @click=\"menuRef?.previous()\">Назад</button>\n<button @click=\"menuRef?.next()\">Вперед</button>\n\n<Menu\n  ref=\"menuRef\"\n  v-model:selected=\"selected\"\n  :list=\"[\n    { label: 'Элемент 1', value: 'item1' },\n    { label: 'Элемент 2', value: 'item2' },\n    { label: 'Элемент 3', value: 'item3' }\n  ]\"\n  :step=\"1\"\n/>\n\n<!-- Навигация в слоте control -->\n<Menu v-model:selected=\"selected\" :list=\"items\">\n  <template #control=\"{ previous, next, selectedNames }\">\n    <button @click=\"previous\">◀</button>\n    <span>{{ selectedNames[0] }}</span>\n    <button @click=\"next\">▶</button>\n  </template>\n</Menu>\n\n<!-- С пользовательским шагом -->\n<Menu\n  ref=\"menuRef\"\n  v-model:selected=\"selected\"\n  :list=\"items\"\n  :step=\"2\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Zu(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Xu, { ...e })
	}) : Xu(e);
}
//#endregion
//#region src/media/mdx/Menu/slots.en.mdx
function Qu(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "title(props: MenuControlItem): any" }), " — Slot for placing the menu window title."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "footer(props: MenuControlItem): any" }), " — Slot for placing content in the bottom part of the menu window."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "contextTop(props: MenuControlItem): any" }), " — Slot for placing contextual area above the menu list."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "contextBottom(props: MenuControlItem): any" }), " — Slot for placing contextual area below the menu list."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "MenuControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "loading: Ref<boolean>" }), " — reactive state of menu data loading."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — reactive state of menu open/close."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "isSelected: ComputedRef<boolean>" }), " — presence of selected items."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "selectedList: Ref<any[]>" }), " — list of selected items."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "selectedNames: Ref<string[]>" }), " — labels of selected items."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "selectedValues: Ref<any[]>" }), " — values of selected items."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onclick: (event) => Promise<void>" }), " — click handler for opening/closing menu."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "oncontextmenu: (event) => Promise<void>" }), " — context menu handler."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function $u(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Qu, { ...e })
	}) : Qu(e);
}
//#endregion
//#region src/media/mdx/Menu/slots.ru.mdx
function ed(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "title(props: MenuControlItem): any" }), " — Слот для размещения заголовка окна меню."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "footer(props: MenuControlItem): any" }), " — Слот для размещения содержимого в нижней части окна меню."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "contextTop(props: MenuControlItem): any" }), " — Слот для размещения контекстной области над списком меню."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "contextBottom(props: MenuControlItem): any" }), " — Слот для размещения контекстной области под списком меню."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "MenuControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "loading: Ref<boolean>" }), " — состояние загрузки данных меню."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — состояние открытия меню."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "isSelected: ComputedRef<boolean>" }), " — наличие выбранных элементов."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "selectedList: Ref<any[]>" }), " — список выбранных элементов."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "selectedNames: Ref<string[]>" }), " — метки выбранных элементов."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "selectedValues: Ref<any[]>" }), " — значения выбранных элементов."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onclick: (event) => Promise<void>" }), " — обработчик клика для открытия/закрытия меню."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "oncontextmenu: (event) => Promise<void>" }), " — обработчик контекстного меню."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function td(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ed, { ...e })
	}) : ed(e);
}
//#endregion
//#region src/media/mdx/Menu/slots.control.en.mdx
function nd(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "control(props: MenuControlItem): any" }), " — Slot for placing the menu control element (trigger)."] }),
		"\n"
	] });
}
function rd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(nd, { ...e })
	}) : nd(e);
}
//#endregion
//#region src/media/mdx/Menu/slots.control.ru.mdx
function id(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "control(props: MenuControlItem): any" }), " — Слот для размещения элемента управления (триггера) меню."] }),
		"\n"
	] });
}
function ad(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(id, { ...e })
	}) : id(e);
}
//#endregion
//#region src/media/mdx/Menu/wikiMdxMenu.ts
var od = {
	name: "Menu",
	descriptions: {
		ajax: {
			en: Nu,
			ru: Fu
		},
		"event.updateValue": {
			en: Lu,
			ru: zu
		},
		"expose.navigation": {
			en: Vu,
			ru: Uu
		},
		menu: {
			en: Gu,
			ru: qu
		},
		navigation: {
			en: Yu,
			ru: Zu
		},
		slots: {
			en: $u,
			ru: td
		},
		slotsControl: {
			en: rd,
			ru: ad
		}
	}
};
//#endregion
//#region src/media/mdx/Modal/differences.en.mdx
function sd(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Differences between Modal, ActionSheet and Dialog" }),
		"\n",
		s(t.p, { children: [
			"All three components are built on top of ",
			o(t.strong, { children: "Window" }),
			", but have different purposes and behaviors:"
		] }),
		"\n",
		o(t.h3, { children: "Modal" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Modal" }), " — a modal window with centered positioning for content requiring immediate user attention."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Uses ",
				o(t.code, { children: "adaptive: 'modal'" }),
				" Window mode"
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Centered positioning" }), " by default"] }),
			"\n",
			o(t.li, { children: "Semi-transparent overlay blocks interaction with the main interface" }),
			"\n",
			s(t.li, { children: [
				"Closes on ESC key and click outside (unless ",
				o(t.code, { children: "persistent" }),
				" is set)"
			] }),
			"\n",
			o(t.li, { children: "Supports slots for title, content, and footer" }),
			"\n",
			o(t.li, { children: "Integrated with Bars and Actions components" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Action confirmation dialogs" }),
			"\n",
			o(t.li, { children: "Create/edit record forms" }),
			"\n",
			o(t.li, { children: "Warnings and informational messages" }),
			"\n",
			o(t.li, { children: "Viewing detailed information" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "ActionSheet" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "ActionSheet" }), " — a modal panel with a set of actions appearing from the bottom of the screen (on mobile devices) or as a context menu."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Uses ",
				o(t.code, { children: "adaptive: 'actionSheet'" }),
				" Window mode"
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Bottom positioning" }), " on mobile devices"] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Swipe down gesture" }),
				" support for closing (",
				o(t.code, { children: "touchClose" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				"Automatically adds dividers between items (",
				o(t.code, { children: "divider: true" }),
				")"
			] }),
			"\n",
			o(t.li, { children: "Adaptive behavior: can transform into modal on larger screens" }),
			"\n",
			o(t.li, { children: "Specialized for action lists" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Action menus for objects (edit, delete, share)" }),
			"\n",
			o(t.li, { children: "Selecting an option from a list" }),
			"\n",
			o(t.li, { children: "Context menus on mobile devices" }),
			"\n",
			o(t.li, { children: "Actions requiring quick access" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "Dialog" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Dialog" }), " — a component for dialog windows with simplified API."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Usually an even more simplified wrapper over Modal" }),
			"\n",
			o(t.li, { children: "May have preset styles for system dialogs" }),
			"\n",
			o(t.li, { children: "Often used for simple confirmations (yes/no, OK/Cancel)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Simple confirmations (alert, confirm)" }),
			"\n",
			o(t.li, { children: "System notifications" }),
			"\n",
			o(t.li, { children: "Quick dialogs without complex content" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "Choosing a component" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Use Modal" }), " when you need to display a form, detailed information, or content requiring user attention"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Use ActionSheet" }), " when you need to offer a list of actions, especially on mobile devices"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Use Dialog" }), " when you need a simple confirmation or system notification"] }),
			"\n"
		] }),
		"\n",
		o(t.h2, { children: "Разница между Modal, ActionSheet и Dialog" }),
		"\n",
		s(t.p, { children: [
			"Все три компонента построены на базе ",
			o(t.strong, { children: "Window" }),
			", но имеют различное назначение и поведение:"
		] }),
		"\n",
		o(t.h3, { children: "Modal" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Modal" }), " — модальное окно с центрированным позиционированием для контента, требующего немедленного внимания пользователя."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Использует ",
				o(t.code, { children: "adaptive: 'modal'" }),
				" режим Window"
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Центрированное позиционирование" }), " по умолчанию"] }),
			"\n",
			o(t.li, { children: "Полупрозрачный оверлей блокирует взаимодействие с основным интерфейсом" }),
			"\n",
			s(t.li, { children: [
				"Закрывается по ESC и клику вне области (если не установлен ",
				o(t.code, { children: "persistent" }),
				")"
			] }),
			"\n",
			o(t.li, { children: "Поддерживает слоты для заголовка, контента и футера" }),
			"\n",
			o(t.li, { children: "Интегрирован с компонентами Bars и Actions" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Диалоги подтверждения действий" }),
			"\n",
			o(t.li, { children: "Формы создания/редактирования записей" }),
			"\n",
			o(t.li, { children: "Предупреждения и информационные сообщения" }),
			"\n",
			o(t.li, { children: "Просмотр детальной информации" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "ActionSheet" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "ActionSheet" }), " — модальная панель с набором действий, появляющаяся снизу экрана (на мобильных устройствах) или в виде контекстного меню."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Использует ",
				o(t.code, { children: "adaptive: 'actionSheet'" }),
				" режим Window"
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Позиционирование снизу" }), " экрана на мобильных устройствах"] }),
			"\n",
			s(t.li, { children: [
				"Поддержка ",
				o(t.strong, { children: "жеста свайпа вниз" }),
				" для закрытия (",
				o(t.code, { children: "touchClose" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				"Автоматически добавляет разделители между элементами (",
				o(t.code, { children: "divider: true" }),
				")"
			] }),
			"\n",
			o(t.li, { children: "Адаптивное поведение: может трансформироваться в modal на больших экранах" }),
			"\n",
			o(t.li, { children: "Специализирован для списков действий" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Меню действий с объектом (редактировать, удалить, поделиться)" }),
			"\n",
			o(t.li, { children: "Выбор опции из списка" }),
			"\n",
			o(t.li, { children: "Контекстные меню на мобильных устройствах" }),
			"\n",
			o(t.li, { children: "Действия, требующие быстрого доступа" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "Dialog" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Dialog" }), " — компонент для диалоговых окон с упрощенным API (если реализован в вашей системе)."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Обычно является еще более упрощенной оберткой над Modal" }),
			"\n",
			o(t.li, { children: "Может иметь предустановленные стили для системных диалогов" }),
			"\n",
			o(t.li, { children: "Часто используется для простых подтверждений (да/нет, ОК/Отмена)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Простые подтверждения (alert, confirm)" }),
			"\n",
			o(t.li, { children: "Системные уведомления" }),
			"\n",
			o(t.li, { children: "Быстрые диалоги без сложного контента" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "Выбор компонента" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Используйте Modal" }), ", когда нужно показать форму, детальную информацию или контент, требующий внимания пользователя"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Используйте ActionSheet" }), ", когда нужно предложить список действий, особенно на мобильных устройствах"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Используйте Dialog" }), ", когда нужно простое подтверждение или системное уведомление"] }),
			"\n"
		] })
	] });
}
function cd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(sd, { ...e })
	}) : sd(e);
}
//#endregion
//#region src/media/mdx/Modal/differences.ru.mdx
function ld(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Разница между Modal, ActionSheet и Dialog" }),
		"\n",
		s(t.p, { children: [
			"Все три компонента построены на базе ",
			o(t.strong, { children: "Window" }),
			", но имеют различное назначение и поведение:"
		] }),
		"\n",
		o(t.h3, { children: "Modal" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Modal" }), " — модальное окно с центрированным позиционированием для контента, требующего немедленного внимания пользователя."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Использует ",
				o(t.code, { children: "adaptive: 'modal'" }),
				" режим Window"
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Центрированное позиционирование" }), " по умолчанию"] }),
			"\n",
			o(t.li, { children: "Полупрозрачный оверлей блокирует взаимодействие с основным интерфейсом" }),
			"\n",
			s(t.li, { children: [
				"Закрывается по ESC и клику вне области (если не установлен ",
				o(t.code, { children: "persistent" }),
				")"
			] }),
			"\n",
			o(t.li, { children: "Поддерживает слоты для заголовка, контента и футера" }),
			"\n",
			o(t.li, { children: "Интегрирован с компонентами Bars и Actions" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Диалоги подтверждения действий" }),
			"\n",
			o(t.li, { children: "Формы создания/редактирования записей" }),
			"\n",
			o(t.li, { children: "Предупреждения и информационные сообщения" }),
			"\n",
			o(t.li, { children: "Просмотр детальной информации" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "ActionSheet" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "ActionSheet" }), " — модальная панель с набором действий, появляющаяся снизу экрана (на мобильных устройствах) или в виде контекстного меню."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Использует ",
				o(t.code, { children: "adaptive: 'actionSheet'" }),
				" режим Window"
			] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Позиционирование снизу" }), " экрана на мобильных устройствах"] }),
			"\n",
			s(t.li, { children: [
				"Поддержка ",
				o(t.strong, { children: "жеста свайпа вниз" }),
				" для закрытия (",
				o(t.code, { children: "touchClose" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				"Автоматически добавляет разделители между элементами (",
				o(t.code, { children: "divider: true" }),
				")"
			] }),
			"\n",
			o(t.li, { children: "Адаптивное поведение: может трансформироваться в modal на больших экранах" }),
			"\n",
			o(t.li, { children: "Специализирован для списков действий" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Меню действий с объектом (редактировать, удалить, поделиться)" }),
			"\n",
			o(t.li, { children: "Выбор опции из списка" }),
			"\n",
			o(t.li, { children: "Контекстные меню на мобильных устройствах" }),
			"\n",
			o(t.li, { children: "Действия, требующие быстрого доступа" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "Dialog" }),
		"\n",
		s(t.p, { children: [o(t.strong, { children: "Dialog" }), " — компонент для диалоговых окон с упрощенным API."] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Обычно является еще более упрощенной оберткой над Modal" }),
			"\n",
			o(t.li, { children: "Может иметь предустановленные стили для системных диалогов" }),
			"\n",
			o(t.li, { children: "Часто используется для простых подтверждений (да/нет, ОК/Отмена)" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Простые подтверждения (alert, confirm)" }),
			"\n",
			o(t.li, { children: "Системные уведомления" }),
			"\n",
			o(t.li, { children: "Быстрые диалоги без сложного контента" }),
			"\n"
		] }),
		"\n",
		o(t.hr, {}),
		"\n",
		o(t.h3, { children: "Выбор компонента" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Используйте Modal" }), ", когда нужно показать форму, детальную информацию или контент, требующий внимания пользователя"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Используйте ActionSheet" }), ", когда нужно предложить список действий, особенно на мобильных устройствах"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Используйте Dialog" }), ", когда нужно простое подтверждение или системное уведомление"] }),
			"\n"
		] })
	] });
}
function ud(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ld, { ...e })
	}) : ld(e);
}
//#endregion
//#region src/media/mdx/Modal/modal.en.mdx
function dd(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "A simplified wrapper over the Window component for creating modal dialogs with preconfigured centered positioning settings." }),
		"\n",
		s(t.p, { children: [
			"Modal is a specialized component that uses Window with a fixed ",
			o(t.code, { children: "adaptive: 'modal'" }),
			" mode. It is designed to display content that requires immediate user attention, blocking interaction with the main interface. The component automatically centers content, adds a semi-transparent backdrop (overlay), and manages focus."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Centered positioning by default" }),
			"\n",
			o(t.li, { children: "Semi-transparent overlay with background blocking" }),
			"\n",
			o(t.li, { children: "Control via v-model:open" }),
			"\n",
			o(t.li, { children: "Close on ESC key and click outside" }),
			"\n",
			o(t.li, { children: "Integration with Scrollbar for long content" }),
			"\n",
			o(t.li, { children: "Slots for title, content, and footer" }),
			"\n",
			o(t.li, { children: "Lifecycle events (preparation, opening, closing)" }),
			"\n",
			o(t.li, { children: "Close button with customizable icon" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Differences from Window:" }) }),
		"\n",
		s(t.p, { children: [
			"Modal is a Window with preset ",
			o(t.code, { children: "adaptive: 'modal'" }),
			", which simplifies usage for standard dialog windows without explicitly specifying the adaptive mode."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Action confirmation dialogs" }),
			"\n",
			o(t.li, { children: "Create/edit forms" }),
			"\n",
			o(t.li, { children: "Warnings and informational messages" }),
			"\n",
			o(t.li, { children: "Viewing detailed information" }),
			"\n",
			o(t.li, { children: "Multi-step wizards" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isModalOpen = ref(false)\n\nconst handleBeforeClosing = async () => {\n// Check before closing\nreturn confirm('Close modal window?')\n}\n<\/script>\n\n<template>\n<button @click=\"isModalOpen = true\">Open Modal</button>\n\n<Modal\n  v-model:open=\"isModalOpen\"\n  :beforeClosing=\"handleBeforeClosing\"\n  closeButton\n>\n  <template #title>\n    <h2>Confirm Action</h2>\n  </template>\n\n  <template #default>\n    <p>Are you sure you want to perform this action?</p>\n    <p>This action cannot be undone.</p>\n  </template>\n\n  <template #footer=\"{ classesModal }\">\n    <button :class=\"classesModal.close\">Cancel</button>\n    <button @click=\"performAction\">Confirm</button>\n  </template>\n</Modal>\n</template>\n",
			language: "html"
		})
	] });
}
function fd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(dd, { ...e })
	}) : dd(e);
}
//#endregion
//#region src/media/mdx/Modal/modal.ru.mdx
function pd(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Упрощенная обертка над компонентом Window для создания модальных диалогов с предустановленными настройками центрированного позиционирования." }),
		"\n",
		s(t.p, { children: [
			"Modal является специализированным компонентом, который использует Window с фиксированным режимом ",
			o(t.code, { children: "adaptive: 'modal'" }),
			". Он предназначен для отображения контента, требующего немедленного внимания пользователя, с блокировкой взаимодействия с основным интерфейсом. Компонент автоматически центрирует содержимое, добавляет полупрозрачный фон (overlay) и управляет фокусом."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Центрированное позиционирование по умолчанию" }),
			"\n",
			o(t.li, { children: "Полупрозрачный оверлей с блокировкой фона" }),
			"\n",
			o(t.li, { children: "Управление через v-model:open" }),
			"\n",
			o(t.li, { children: "Закрытие по ESC и клику вне области" }),
			"\n",
			o(t.li, { children: "Интеграция со Scrollbar для длинного контента" }),
			"\n",
			o(t.li, { children: "Слоты для заголовка, содержимого и футера" }),
			"\n",
			o(t.li, { children: "События жизненного цикла (preparation, opening, closing)" }),
			"\n",
			o(t.li, { children: "Кнопка закрытия с настраиваемой иконкой" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Отличия от Window:" }) }),
		"\n",
		s(t.p, { children: [
			"Modal - это Window с предустановленным ",
			o(t.code, { children: "adaptive: 'modal'" }),
			", что упрощает использование для стандартных диалоговых окон без необходимости явно указывать режим адаптивности."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Диалоги подтверждения действий" }),
			"\n",
			o(t.li, { children: "Формы создания/редактирования" }),
			"\n",
			o(t.li, { children: "Предупреждения и информационные сообщения" }),
			"\n",
			o(t.li, { children: "Просмотр детальной информации" }),
			"\n",
			o(t.li, { children: "Многошаговые мастера (wizards)" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isModalOpen = ref(false)\n\nconst handleBeforeClosing = async () => {\n// Проверка перед закрытием\nreturn confirm('Закрыть модальное окно?')\n}\n<\/script>\n\n<template>\n<button @click=\"isModalOpen = true\">Открыть модальное окно</button>\n\n<Modal\n  v-model:open=\"isModalOpen\"\n  :beforeClosing=\"handleBeforeClosing\"\n  closeButton\n>\n  <template #title>\n    <h2>Подтверждение действия</h2>\n  </template>\n\n  <template #default>\n    <p>Вы уверены, что хотите выполнить это действие?</p>\n    <p>Это действие нельзя будет отменить.</p>\n  </template>\n\n  <template #footer=\"{ classesModal }\">\n    <button :class=\"classesModal.close\">Отмена</button>\n    <button @click=\"performAction\">Подтвердить</button>\n  </template>\n</Modal>\n</template>\n",
			language: "html"
		})
	] });
}
function md(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(pd, { ...e })
	}) : pd(e);
}
//#endregion
//#region src/media/mdx/Modal/wikiMdxModal.ts
var hd = {
	name: "Modal",
	descriptions: {
		differences: {
			en: cd,
			ru: ud
		},
		modal: {
			en: fd,
			ru: md
		}
	}
};
//#endregion
//#region src/media/mdx/MotionAxis/classes.en.mdx
function gd(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Scroll Management during Animation" }),
		"\n",
		o(t.p, { children: "The component automatically manages scroll visibility during transition animations to prevent content jumps." }),
		"\n",
		o(t.h3, { children: "Usage" }),
		"\n",
		s(t.p, { children: [
			"To enable this feature, add the ",
			o(t.code, { children: "*__scroll" }),
			" class to the parent container that has scrolling."
		] }),
		"\n",
		s(t.ol, { children: [
			"\n",
			o(t.li, { children: "Wrap the component in a scrollable container." }),
			"\n",
			s(t.li, { children: [
				"Add the ",
				o(t.code, { children: "*__scroll" }),
				" class to this container (where ",
				o(t.code, { children: "*" }),
				" is the component class name, e.g., ",
				o(t.code, { children: "d1-tabs__scroll" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<div class=\"d1-tabs__scroll\">\n<Tabs ... />\n</div>\n",
			language: "html"
		}),
		"\n",
		s(t.p, { children: [
			"During the animation, the component will automatically add the ",
			o(t.code, { children: "*__scroll--hidden" }),
			" class (which applies ",
			o(t.code, { children: "overflow: hidden" }),
			") to this container, and remove it after the animation ends."
		] })
	] });
}
function _d(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(gd, { ...e })
	}) : gd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/classes.ru.mdx
function vd(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление скроллом при анимации" }),
		"\n",
		o(t.p, { children: "Компонент автоматически управляет видимостью скролла во время анимации перехода, чтобы предотвратить \"скачки\" контента." }),
		"\n",
		o(t.h3, { children: "Использование" }),
		"\n",
		s(t.p, { children: [
			"Для активации этой функции необходимо добавить класс ",
			o(t.code, { children: "*__scroll" }),
			" родительскому контейнеру, который имеет прокрутку."
		] }),
		"\n",
		s(t.ol, { children: [
			"\n",
			o(t.li, { children: "Оберните компонент в контейнер с прокруткой." }),
			"\n",
			s(t.li, { children: [
				"Добавьте этому контейнеру класс ",
				o(t.code, { children: "*__scroll" }),
				" (где ",
				o(t.code, { children: "*" }),
				" — имя класса компонента, например ",
				o(t.code, { children: "d1-tabs__scroll" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<div class=\"d1-tabs__scroll\">\n<Tabs ... />\n</div>\n",
			language: "html"
		}),
		"\n",
		s(t.p, { children: [
			"Во время анимации компонент автоматически добавит класс ",
			o(t.code, { children: "*__scroll--hidden" }),
			" (который применяет ",
			o(t.code, { children: "overflow: hidden" }),
			") к этому контейнеру, а после завершения анимации удалит его."
		] })
	] });
}
function yd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(vd, { ...e })
	}) : vd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/event.en.mdx
function bd(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "start" }) }),
		"\n",
		o(t.p, { children: "Event triggered at the beginning of the transition animation." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number" }), " — identifier of the slide to which the transition starts"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "end" }) }),
		"\n",
		o(t.p, { children: "Event triggered after the transition animation completes." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number" }), " — identifier of the slide on which the transition ended"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "motionAxis" }) }),
		"\n",
		o(t.p, { children: "Event triggered at the beginning and end of the transition animation." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "options: MotionAxisEmitOptions" }), " — object with event parameters"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Structure MotionAxisEmitOptions:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "type: 'start' | 'end'" }), " — event type"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number" }), " — identifier of the selected slide"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "previous: string | number" }), " — identifier of the previous slide"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "preparation: string | number" }), " — identifier of the slide being prepared"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "active: string | number" }), " — identifier of the active slide"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleStart = (selected) => {\nconsole.log('Animation started to slide:', selected)\n}\n\nconst handleEnd = (selected) => {\nconsole.log('Animation ended on slide:', selected)\n}\n\nconst handleMotionAxis = (options) => {\nconsole.log('MotionAxis event:', options)\n}\n<\/script>\n\n<template>\n<MotionAxis\n  @start=\"handleStart\"\n  @end=\"handleEnd\"\n  @motionAxis=\"handleMotionAxis\"\n>\n  <!-- Slides -->\n</MotionAxis>\n</template>\n",
			language: "html"
		})
	] });
}
function xd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(bd, { ...e })
	}) : bd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/event.ru.mdx
function Sd(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "start" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает в начале анимации перехода." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number" }), " — идентификатор слайда, к которому начинается переход"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "end" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает после завершения анимации перехода." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number" }), " — идентификатор слайда, на котором завершился переход"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "motionAxis" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает в начале и в конце анимации перехода." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "options: MotionAxisEmitOptions" }), " — объект с параметрами события"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура MotionAxisEmitOptions:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "type: 'start' | 'end'" }), " — тип события"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number" }), " — идентификатор выбранного слайда"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "previous: string | number" }), " — идентификатор предыдущего слайда"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "preparation: string | number" }), " — идентификатор подготавливаемого слайда"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "active: string | number" }), " — идентификатор активного слайда"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleStart = (selected) => {\nconsole.log('Начало анимации к слайду:', selected)\n}\n\nconst handleEnd = (selected) => {\nconsole.log('Завершение анимации на слайде:', selected)\n}\n\nconst handleMotionAxis = (options) => {\nconsole.log('Событие MotionAxis:', options)\n}\n<\/script>\n\n<template>\n<MotionAxis\n  @start=\"handleStart\"\n  @end=\"handleEnd\"\n  @motionAxis=\"handleMotionAxis\"\n>\n  <!-- Слайды -->\n</MotionAxis>\n</template>\n",
			language: "html"
		})
	] });
}
function Cd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Sd, { ...e })
	}) : Sd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/expose.en.mdx
function wd(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "back(): void" }), " — Transition to the previous slide."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "next(): void" }), " — Transition to the next slide."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "to(selected: string | number): void" }), " — Transition to the specified slide."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "top(selected: string | number): void" }), " — Transition to the slide with animation from the top."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "right(selected: string | number): void" }), " — Transition to the slide with animation from the right."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "bottom(selected: string | number): void" }), " — Transition to the slide with animation from the bottom."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "left(selected: string | number): void" }), " — Transition to the slide with animation from the left."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "down(selected: string | number): void" }), " — Transition to the slide with animation downwards."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "up(selected: string | number): void" }), " — Transition to the slide with animation upwards."] }),
		"\n"
	] });
}
function Td(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(wd, { ...e })
	}) : wd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/expose.ru.mdx
function Ed(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "back(): void" }), " — Переход к предыдущему слайду."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "next(): void" }), " — Переход к следующему слайду."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "to(selected: string | number): void" }), " — Переход к указанному слайду."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "top(selected: string | number): void" }), " — Переход к слайду с анимацией сверху."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "right(selected: string | number): void" }), " — Переход к слайду с анимацией справа."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "bottom(selected: string | number): void" }), " — Переход к слайду с анимацией снизу."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "left(selected: string | number): void" }), " — Переход к слайду с анимацией слева."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "down(selected: string | number): void" }), " — Переход к слайду с анимацией вниз."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "up(selected: string | number): void" }), " — Переход к слайду с анимацией вверх."] }),
		"\n"
	] });
}
function Dd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ed, { ...e })
	}) : Ed(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/motionAxis.en.mdx
function Od(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for organizing transitions between elements (slides)." }),
		"\n",
		o(t.p, { children: "MotionAxis allows animating content changes along X, Y, Z axes with slide effects. Supports automatic animation direction detection, container height management, and lazy loading (DOM)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Slide transition animation along X, Y, Z axes" }),
			"\n",
			o(t.li, { children: "Automatic or manual direction control (next/back)" }),
			"\n",
			o(t.li, { children: "Smooth container height animation to fit content" }),
			"\n",
			o(t.li, { children: "Slide lifecycle management in DOM (inDom, inDomSlide)" }),
			"\n",
			o(t.li, { children: "Slot support for each slide" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Sliders and carousels" }),
			"\n",
			o(t.li, { children: "Step-by-step forms (wizards)" }),
			"\n",
			o(t.li, { children: "Tab switching with animation" }),
			"\n",
			o(t.li, { children: "Image galleries" }),
			"\n",
			o(t.li, { children: "Onboarding screens" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('slide1')\n<\/script>\n\n<template>\n<div class=\"buttons\">\n  <button @click=\"selected = 'slide1'\">Slide 1</button>\n  <button @click=\"selected = 'slide2'\">Slide 2</button>\n</div>\n\n<MotionAxis :selected=\"selected\">\n  <template #slide1>\n    <div class=\"slide\">Slide 1 Content</div>\n  </template>\n  <template #slide2>\n    <div class=\"slide\">Slide 2 Content</div>\n  </template>\n</MotionAxis>\n</template>\n",
			language: "html"
		})
	] });
}
function kd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Od, { ...e })
	}) : Od(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/motionAxis.ru.mdx
function Ad(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для организации переходов между элементами (слайдами)." }),
		"\n",
		o(t.p, { children: "MotionAxis позволяет анимировать смену контента по осям X, Y, Z с эффектами сдвига. Поддерживает автоматическое определение направления анимации, управление высотой контейнера и ленивую загрузку (DOM)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Анимация смены слайдов по осям X, Y, Z" }),
			"\n",
			o(t.li, { children: "Автоматическое или ручное управление направлением (вперед/назад)" }),
			"\n",
			o(t.li, { children: "Плавная анимация высоты контейнера под контент" }),
			"\n",
			o(t.li, { children: "Управление жизненным циклом слайдов в DOM (inDom, inDomSlide)" }),
			"\n",
			o(t.li, { children: "Поддержка слотов для каждого слайда" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Слайдеры и карусели" }),
			"\n",
			o(t.li, { children: "Пошаговые формы (wizards)" }),
			"\n",
			o(t.li, { children: "Переключение вкладок с анимацией" }),
			"\n",
			o(t.li, { children: "Галереи изображений" }),
			"\n",
			o(t.li, { children: "Онбординг экраны" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('slide1')\n<\/script>\n\n<template>\n<div class=\"buttons\">\n  <button @click=\"selected = 'slide1'\">Слайд 1</button>\n  <button @click=\"selected = 'slide2'\">Слайд 2</button>\n</div>\n\n<MotionAxis :selected=\"selected\">\n  <template #slide1>\n    <div class=\"slide\">Контент слайда 1</div>\n  </template>\n  <template #slide2>\n    <div class=\"slide\">Контент слайда 2</div>\n  </template>\n</MotionAxis>\n</template>\n",
			language: "html"
		})
	] });
}
function jd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ad, { ...e })
	}) : Ad(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/slots.en.mdx
function Md(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "[name]: any" }),
			" — Slot for slide content. The slot name corresponds to the value passed to the ",
			o(t.code, { children: "selected" }),
			" property."
		] }),
		"\n"
	] });
}
function Nd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Md, { ...e })
	}) : Md(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/slots.ru.mdx
function Pd(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [
			o(t.code, { children: "[name]: any" }),
			" — Слот для содержимого слайда. Имя слота соответствует значению, передаваемому в свойство ",
			o(t.code, { children: "selected" }),
			"."
		] }),
		"\n"
	] });
}
function Fd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pd, { ...e })
	}) : Pd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/v-model.en.mdx
function Id(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "State Management via v-model" }),
		"\n",
		s(t.p, { children: [
			"Two-way binding of the selected slide via ",
			o(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number" }), " — identifier of the selected slide"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('slide1')\n<\/script>\n\n<template>\n<div class=\"buttons\">\n  <button @click=\"selected = 'slide1'\">Slide 1</button>\n  <button @click=\"selected = 'slide2'\">Slide 2</button>\n</div>\n\n<MotionAxis v-model:selected=\"selected\">\n  <template #slide1>\n    <div>Slide 1 Content</div>\n  </template>\n  <template #slide2>\n    <div>Slide 2 Content</div>\n  </template>\n</MotionAxis>\n</template>\n",
			language: "html"
		})
	] });
}
function Ld(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Id, { ...e })
	}) : Id(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/v-model.ru.mdx
function Rd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		s(t.p, { children: [
			"Двусторонняя привязка выбранного слайда через ",
			o(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number" }), " — идентификатор выбранного слайда"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('slide1')\n<\/script>\n\n<template>\n<div class=\"buttons\">\n  <button @click=\"selected = 'slide1'\">Слайд 1</button>\n  <button @click=\"selected = 'slide2'\">Слайд 2</button>\n</div>\n\n<MotionAxis v-model:selected=\"selected\">\n  <template #slide1>\n    <div>Контент слайда 1</div>\n  </template>\n  <template #slide2>\n    <div>Контент слайда 2</div>\n  </template>\n</MotionAxis>\n</template>\n",
			language: "html"
		})
	] });
}
function zd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Rd, { ...e })
	}) : Rd(e);
}
//#endregion
//#region src/media/mdx/MotionAxis/wikiMdxMotionAxis.ts
var Bd = {
	name: "MotionAxis",
	descriptions: {
		classes: {
			en: _d,
			ru: yd
		},
		events: {
			en: xd,
			ru: Cd
		},
		expose: {
			en: Td,
			ru: Dd
		},
		motionAxis: {
			en: kd,
			ru: jd
		},
		slots: {
			en: Nd,
			ru: Fd
		},
		"v-model": {
			en: Ld,
			ru: zd
		}
	}
};
//#endregion
//#region src/media/mdx/MotionTransform/animationHeadPosition.en.mdx
function Vd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Head position animation" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "animationHeadPosition" }),
			" property controls how the Head area behaves during show/hide animations."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'top'" }), " — keeps the Head at the top during transition (default)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'toBottom'" }), " — animates the Head toward the bottom together with content"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Synchronizes header movement with content animation using CSS transforms for smooth transitions. Suitable for collapsing layouts when the header should travel with expanding content. When the ",
			o(t.code, { children: "section" }),
			" property is enabled (set to ",
			o(t.code, { children: "true" }),
			"), the ",
			o(t.code, { children: "animationHeadPosition" }),
			" parameter is ignored and does not affect animation behavior."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Head stays at top -->\n<MotionTransform animationHeadPosition=\"top\" />\n\n<!-- Head moves down with content -->\n<MotionTransform animationHeadPosition=\"toBottom\" />\n",
			language: "html"
		})
	] });
}
function Hd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Vd, { ...e })
	}) : Vd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/animationHeadPosition.ru.mdx
function Ud(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Анимация позиции заголовка" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "animationHeadPosition" }),
			" определяет поведение области Head во время анимаций показа/скрытия."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'top'" }), " — сохраняет Head вверху во время перехода (по умолчанию)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'toBottom'" }), " — анимирует Head вниз вместе с контентом"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Синхронизирует движение заголовка с анимацией контента, используя CSS-трансформации для плавных переходов. Подходит для сворачиваемых макетов, когда заголовок должен перемещаться вместе с разворачивающимся содержимым. При включенном свойстве ",
			o(t.code, { children: "section" }),
			" (установлено в ",
			o(t.code, { children: "true" }),
			") параметр ",
			o(t.code, { children: "animationHeadPosition" }),
			" игнорируется и не влияет на поведение анимации."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Head остается вверху -->\n<MotionTransform animationHeadPosition=\"top\" />\n\n<!-- Head движется вниз с контентом -->\n<MotionTransform animationHeadPosition=\"toBottom\" />\n",
			language: "html"
		})
	] });
}
function Wd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ud, { ...e })
	}) : Ud(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/classes.en.mdx
function Gd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "CSS Classes for Behavior Control" }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "State classes:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--open" }), " — component is fully open and its content is visible"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--show" }), " — component is visible or in the process of open/close animation"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--window" }), " — component operates in window mode (with teleportation)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--click" }), " — added briefly on click for feedback effects"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Control classes:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--close" }), " — applied to element to trigger MotionTransform closing on click"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--none" }), " — disables default behavior (open/close) for the element"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--noneGlobal" }), " — globally disables MotionTransform events"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Element classes:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__context" }), " — class for context element for positioning"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__head" }), " — class for header area that acts as a trigger"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__body" }), " — class for content area that appears and disappears"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__backdrop" }), " — class for backdrop element to create overlay effect"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__scrim" }), " — class for scrim layer in modal modes"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__clickNone" }), " — class for element that ignores clicks"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Where ",
			o(t.code, { children: "*" }),
			" is the component class name (e.g., ",
			o(t.code, { children: "d1-motion-transform" }),
			", ",
			o(t.code, { children: "m3-motion-transform" }),
			")."
		] })
	] });
}
function Kd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Gd, { ...e })
	}) : Gd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/classes.ru.mdx
function qd(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "CSS классы для управления поведением" }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Классы состояний:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--open" }), " — компонент полностью открыт и его содержимое видимо"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--show" }), " — компонент видим или находится в процессе анимации открытия/закрытия"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--window" }), " — компонент работает в режиме окна (с телепортацией)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--click" }), " — добавляется на короткое время при клике для эффектов обратной связи"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Классы управления:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--close" }), " — применяется к элементу для закрытия MotionTransform при клике"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--none" }), " — отключает стандартное поведение (открытие/закрытие) для элемента"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--noneGlobal" }), " — глобально отключает события MotionTransform"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Классы элементов:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__context" }), " — класс для контекстного элемента для позиционирования"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__head" }), " — класс для области заголовка, которая выступает в роли триггера"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__body" }), " — класс для области содержимого, которая появляется и исчезает"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__backdrop" }), " — класс для элемента заднего фона для создания эффекта наложения"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__scrim" }), " — класс для затемняющего слоя в модальных режимах"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__clickNone" }), " — класс для элемента, который игнорирует клики"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Где ",
			o(t.code, { children: "*" }),
			" — название класса компонента (например, ",
			o(t.code, { children: "d1-motion-transform" }),
			", ",
			o(t.code, { children: "m3-motion-transform" }),
			")."
		] })
	] });
}
function Jd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(qd, { ...e })
	}) : qd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/events.en.mdx
function Yd(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "transform" }) }),
		"\n",
		o(t.p, { children: "Event fires when MotionTransform state changes with full event context." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: Event | undefined" }), " — DOM event that triggered the change (if any)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "options: MotionTransformEmitOptions" }), " — object with transform data"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "MotionTransformEmitOptions structure:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "type: 'head' | 'body' | 'top' | 'script'" }), " — area type that initiated the event"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "open: boolean" }),
				" — current open state (",
				o(t.code, { children: "true" }),
				" - open, ",
				o(t.code, { children: "false" }),
				" - closed)"
			] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleTransform = (event, options) => {\nconsole.log('Event:', event)\nconsole.log('Type:', options.type)\nconsole.log('Open state:', options.open)\n}\n<\/script>\n\n<template>\n<Component @transform=\"handleTransform\">\n  <template #head>\n    <div>Header</div>\n  </template>\n  <template #body>\n    <p>Content</p>\n  </template>\n</Component>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "transformLite" }) }),
		"\n",
		o(t.p, { children: "Event fires when MotionTransform state changes without DOM event context (lightweight version)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "options: MotionTransformEmitOptions" }), " — object with transform data"] }),
			"\n"
		] })
	] });
}
function Xd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Yd, { ...e })
	}) : Yd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/events.ru.mdx
function Zd(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "transform" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния MotionTransform с полным контекстом события." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "event: Event | undefined" }), " — DOM-событие, которое вызвало изменение (если есть)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "options: MotionTransformEmitOptions" }), " — объект с данными трансформации"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура MotionTransformEmitOptions:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "type: 'head' | 'body' | 'top' | 'script'" }), " — тип области, которая инициировала событие"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "open: boolean" }),
				" — текущее состояние открытия (",
				o(t.code, { children: "true" }),
				" - открыто, ",
				o(t.code, { children: "false" }),
				" - закрыто)"
			] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleTransform = (event, options) => {\nconsole.log('Событие:', event)\nconsole.log('Тип:', options.type)\nconsole.log('Состояние открытия:', options.open)\n}\n<\/script>\n\n<template>\n<Component @transform=\"handleTransform\">\n  <template #head>\n    <div>Заголовок</div>\n  </template>\n  <template #body>\n    <p>Содержимое</p>\n  </template>\n</Component>\n</template>\n",
			language: "html"
		}),
		"\n",
		o(t.h3, { children: o(t.code, { children: "transformLite" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния MotionTransform без контекста DOM-события (облегчённая версия)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "options: MotionTransformEmitOptions" }), " — объект с данными трансформации"] }),
			"\n"
		] })
	] });
}
function Qd(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zd, { ...e })
	}) : Zd(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/expose.en.mdx
function $d(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — reactive open state."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "isShow: ComputedRef<boolean>" }), " — computed visibility state."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "setOpen(open: boolean): void" }), " — sets the open state."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "toOpen(): void" }), " — transitions to the open state."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "toClose(): void" }), " — transitions to the close state."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "toggle(): void" }), " — toggles the open state."] }),
		"\n"
	] });
}
function ef(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($d, { ...e })
	}) : $d(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/expose.ru.mdx
function tf(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — реактивное состояние открытия."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "isShow: ComputedRef<boolean>" }), " — вычисляемое состояние видимости."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "setOpen(open: boolean): void" }), " — устанавливает состояние открытия."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "toOpen(): void" }), " — переводит в состояние открытия."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "toClose(): void" }), " — переводит в состояние закрытия."] }),
		"\n",
		s(t.li, { children: [o(t.code, { children: "toggle(): void" }), " — переключает состояние открытия."] }),
		"\n"
	] });
}
function nf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(tf, { ...e })
	}) : tf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/expose.motionTransformElement.en.mdx
function rf(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>" }), " — Reactive reference to the nested MotionTransform component's expose API, providing programmatic access to control methods."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "Methods via motionTransformElement.value:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — reactive open state"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "isShow: ComputedRef<boolean>" }), " — computed visibility state"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "setOpen(open: boolean): void" }), " — set open state"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "toOpen(): void" }), " — open component"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "toClose(): void" }), " — close component"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "toggle(): void" }), " — toggle state"] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function af(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(rf, { ...e })
	}) : rf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/expose.motionTransformElement.ru.mdx
function of(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>" }), " — Реактивная ссылка на expose API вложенного компонента MotionTransform, предоставляющая программный доступ к методам управления."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "Методы через motionTransformElement.value:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — реактивное состояние открытия"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "isShow: ComputedRef<boolean>" }), " — вычисляемое состояние видимости"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "setOpen(open: boolean): void" }), " — установить состояние открытия"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "toOpen(): void" }), " — открыть компонент"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "toClose(): void" }), " — закрыть компонент"] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "toggle(): void" }), " — переключить состояние"] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function sf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(of, { ...e })
	}) : of(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/ignore.en.mdx
function cf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Ignore zones" }),
		"\n",
		o(t.p, { children: "Properties that exclude elements from outside-click checks and auto-close logic." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "ignore" }), " — DOM element reference or CSS selector to exclude from outside-click detection"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "ignoreSelector" }), " — CSS selector to exclude multiple elements simultaneously"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Both properties work together during outside-click evaluation. ",
			o(t.code, { children: "ignore" }),
			" is more precise and faster for single elements, can reference a specific DOM element directly. ",
			o(t.code, { children: "ignoreSelector" }),
			" is more flexible, can match multiple elements with a single selector, better suited for dynamic content. Use for trigger buttons, helper controls, and nested interactive areas."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst triggerButton = ref()\n<\/script>\n\n<template>\n<!-- Ignoring specific element -->\n<MotionTransform :ignore=\"triggerButton\" />\n\n<!-- Ignoring by selector -->\n<MotionTransform ignoreSelector=\".trigger-button\" />\n\n<!-- Combining both properties -->\n<MotionTransform\n  :ignore=\"triggerButton\"\n  ignoreSelector=\".helper-controls\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function lf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(cf, { ...e })
	}) : cf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/ignore.ru.mdx
function uf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Зоны игнорирования" }),
		"\n",
		o(t.p, { children: "Свойства для исключения элементов из проверок клика снаружи и логики автозакрытия." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "ignore" }), " — ссылка на DOM-элемент или CSS-селектор для исключения из обнаружения внешних кликов"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "ignoreSelector" }), " — CSS-селектор для исключения нескольких элементов одновременно"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Оба свойства работают вместе при оценке внешних кликов. ",
			o(t.code, { children: "ignore" }),
			" более точный и быстрее для одиночных элементов, может ссылаться на конкретный DOM-элемент напрямую. ",
			o(t.code, { children: "ignoreSelector" }),
			" более гибкий, может соответствовать нескольким элементам одним селектором, лучше подходит для динамического контента. Используйте для кнопок-триггеров, вспомогательных элементов и вложенных интерактивных областей."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst triggerButton = ref()\n<\/script>\n\n<template>\n<!-- Игнорирование конкретного элемента -->\n<MotionTransform :ignore=\"triggerButton\" />\n\n<!-- Игнорирование по селектору -->\n<MotionTransform ignoreSelector=\".trigger-button\" />\n\n<!-- Комбинация обоих свойств -->\n<MotionTransform\n  :ignore=\"triggerButton\"\n  ignoreSelector=\".helper-controls\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function df(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(uf, { ...e })
	}) : uf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/motionTransform.en.mdx
function ff(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Low-level utility for managing element transforms, state transitions, and interaction flows in components with window-like behavior." }),
		"\n",
		o(t.p, { children: "MotionTransform centralizes management of open/show/teleport states, measures element sizes, updates CSS variables, and coordinates events to create smooth and predictable animations. Provides unified API for component visibility control, click handling, and automatic closing with support for ignore zones." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Centralized state management (open, show, teleport)" }),
			"\n",
			o(t.li, { children: "Click event and auto-close coordination" }),
			"\n",
			o(t.li, { children: "Size measurement and CSS variable updates" }),
			"\n",
			o(t.li, { children: "DOM helpers for working with refs, portals, and classes" }),
			"\n",
			o(t.li, { children: "Programmatic control through imperative methods" }),
			"\n",
			o(t.li, { children: "Configurable event ignore zones" }),
			"\n",
			o(t.li, { children: "Optimized DOM manipulation" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Base utility for Window, Menu, Dialog components" }),
			"\n",
			o(t.li, { children: "Managing open/close animations" }),
			"\n",
			o(t.li, { children: "State coordination in popup elements" }),
			"\n",
			o(t.li, { children: "Component library development with window-like behavior" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { MotionTransform } from '@dxtmisha/constructor'\n\nconst element = ref()\nconst elementContext = ref()\n\nconst motion = new MotionTransform(\n{ open: false, autoClose: true },\n// ...other params\n)\n\n// Programmatic control\nmotion.go.toOpen()\nmotion.go.toClose()\n\n// State access\nconst isOpen = motion.state.isOpen\nconst isShow = motion.state.isShow\n<\/script>\n\n<template>\n<div ref=\"element\">\n  <!-- Content with managed transform -->\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "This is a low-level utility for component library development, not intended for direct use in applications." }),
			"\n"
		] })
	] });
}
function pf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ff, { ...e })
	}) : ff(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/motionTransform.ru.mdx
function mf(e) {
	let t = {
		blockquote: "blockquote",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Низкоуровневая утилита для управления трансформациями элементов, переходами состояний и потоками взаимодействия в компонентах с оконным поведением." }),
		"\n",
		o(t.p, { children: "MotionTransform централизует управление состояниями открытия/отображения/телепортации, измеряет размеры элементов, обновляет CSS-переменные и координирует события для создания плавных и предсказуемых анимаций. Предоставляет единый API для работы с видимостью компонентов, обработки кликов и автоматического закрытия с поддержкой игнорируемых зон." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Централизованное управление состояниями (open, show, teleport)" }),
			"\n",
			o(t.li, { children: "Координация событий кликов и автозакрытия" }),
			"\n",
			o(t.li, { children: "Измерение размеров и обновление CSS-переменных" }),
			"\n",
			o(t.li, { children: "DOM-хелперы для работы с refs, порталами и классами" }),
			"\n",
			o(t.li, { children: "Программное управление через императивные методы" }),
			"\n",
			o(t.li, { children: "Настраиваемые зоны игнорирования событий" }),
			"\n",
			o(t.li, { children: "Оптимизированная работа с DOM" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Базовая утилита для компонентов Window, Menu, Dialog" }),
			"\n",
			o(t.li, { children: "Управление анимациями открытия/закрытия" }),
			"\n",
			o(t.li, { children: "Координация состояний в всплывающих элементах" }),
			"\n",
			o(t.li, { children: "Разработка библиотек компонентов с оконным поведением" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\nimport { MotionTransform } from '@dxtmisha/constructor'\n\nconst element = ref()\nconst elementContext = ref()\n\nconst motion = new MotionTransform(\n{ open: false, autoClose: true },\n// ...other params\n)\n\n// Программное управление\nmotion.go.toOpen()\nmotion.go.toClose()\n\n// Доступ к состояниям\nconst isOpen = motion.state.isOpen\nconst isShow = motion.state.isShow\n<\/script>\n\n<template>\n<div ref=\"element\">\n  <!-- Контент с управляемой трансформацией -->\n</div>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Это низкоуровневая утилита для разработки библиотек компонентов, не предназначенная для прямого использования в приложениях." }),
			"\n"
		] })
	] });
}
function hf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(mf, { ...e })
	}) : mf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/slots.en.mdx
function gf(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "control(props: MotionTransformControlItem): any" }), " — Slot for placing the trigger element that controls the animation."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "default: any" }), " — Slot for placing the content that will be animated."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "MotionTransformControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "onclick: (event) => void" }), " — handler for opening/closing the transformed element."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function _f(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(gf, { ...e })
	}) : gf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/slots.ru.mdx
function vf(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "control(props: MotionTransformControlItem): any" }), " — Слот для размещения триггерного элемента, управляющего анимацией."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "default: any" }), " — Слот для размещения контента, который будет анимирован."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "MotionTransformControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "onclick: (event) => void" }), " — обработчик открытия/закрытия трансформируемого элемента."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function yf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(vf, { ...e })
	}) : vf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/v-model.en.mdx
function bf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "State Management via v-model" }),
		"\n",
		s(t.p, { children: [
			"Two-way binding of component open state via ",
			o(t.code, { children: "v-model:open" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "open: boolean" }), " — component open state"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Open</button>\n<Component v-model:open=\"isOpen\"/>\n</template>\n",
			language: "html"
		})
	] });
}
function xf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(bf, { ...e })
	}) : bf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/v-model.ru.mdx
function Sf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		s(t.p, { children: [
			"Двусторонняя привязка состояния открытия компонента через ",
			o(t.code, { children: "v-model:open" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "open: boolean" }), " — состояние открытия компонента"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Открыть</button>\n<Component v-model:open=\"isOpen\"/>\n</template>\n",
			language: "html"
		})
	] });
}
function Cf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Sf, { ...e })
	}) : Sf(e);
}
//#endregion
//#region src/media/mdx/MotionTransform/wikiMdxMotionTransform.ts
var wf = {
	name: "MotionTransform",
	descriptions: {
		animationHeadPosition: {
			en: Hd,
			ru: Wd
		},
		classes: {
			en: Kd,
			ru: Jd
		},
		events: {
			en: Xd,
			ru: Qd
		},
		expose: {
			en: ef,
			ru: nf
		},
		"expose.motionTransformElement": {
			en: af,
			ru: sf
		},
		ignore: {
			en: lf,
			ru: df
		},
		motionTransform: {
			en: pf,
			ru: hf
		},
		slots: {
			en: _f,
			ru: yf
		},
		"v-model": {
			en: xf,
			ru: Cf
		}
	}
};
//#endregion
//#region src/media/mdx/Page/page.en.mdx
function Tf(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		s(t.p, { children: [
			"A top-level semantic container component designed to wrap the main content of a page. It uses the ",
			o(t.code, { children: "<main>" }),
			" tag by default."
		] }),
		"\n",
		s(t.p, { children: [
			"Page provides capabilities for displaying main headlines, labels, descriptions, captions, and icons. The main purpose of the component is to designate the unique part of the document's content, which is critical for accessibility and SEO. The headline is rendered as ",
			o(t.code, { children: "<h1>" }),
			" by default."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Semantic wrapper for main content (",
				o(t.code, { children: "<main>" }),
				" tag)"
			] }),
			"\n",
			s(t.li, { children: [
				"Support for main headlines (default ",
				o(t.code, { children: "<h1>" }),
				"), labels, descriptions, and captions"
			] }),
			"\n",
			o(t.li, { children: "Support for icons" }),
			"\n",
			o(t.li, { children: "Customizable layout and spacing" }),
			"\n",
			o(t.li, { children: "Full support for slots for content customization" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Wrapper for unique page content" }),
			"\n",
			o(t.li, { children: "Main application screen" }),
			"\n",
			o(t.li, { children: "Article or documentation page" }),
			"\n",
			o(t.li, { children: "Root element for routed components (views)" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Page\n  headline=\"Main Page Title\"\n  label=\"Category\"\n  description=\"Brief description of the page content\"\n>\n  <p>Unique page content...</p>\n</Page>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Page should be used once per page (or per active view) and should not include repeated navigation elements." }),
			"\n"
		] })
	] });
}
function Ef(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Tf, { ...e })
	}) : Tf(e);
}
//#endregion
//#region src/media/mdx/Page/page.ru.mdx
function Df(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		s(t.p, { children: [
			"Семантический компонент-контейнер верхнего уровня, предназначенный для обертки основного содержимого страницы. По умолчанию использует тег ",
			o(t.code, { children: "<main>" }),
			"."
		] }),
		"\n",
		s(t.p, { children: [
			"Page предоставляет возможности для отображения главных заголовков, меток, описаний, подписей и иконок. Основное назначение компонента — обозначение уникальной части содержимого документа, что критически важно для доступности (accessibility) и SEO. Заголовок по умолчанию рендерится как ",
			o(t.code, { children: "<h1>" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Семантическая обертка основного контента (тег ",
				o(t.code, { children: "<main>" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				"Поддержка главных заголовков (по умолчанию ",
				o(t.code, { children: "<h1>" }),
				"), меток, описаний и подписей"
			] }),
			"\n",
			o(t.li, { children: "Поддержка иконок" }),
			"\n",
			o(t.li, { children: "Настраиваемый макет и отступы" }),
			"\n",
			o(t.li, { children: "Полная поддержка слотов для кастомизации контента" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Обертка для уникального контента страницы" }),
			"\n",
			o(t.li, { children: "Главный экран приложения" }),
			"\n",
			o(t.li, { children: "Страница статьи или документации" }),
			"\n",
			o(t.li, { children: "Корневой элемент для маршрутизируемых компонентов (views)" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Page\n  headline=\"Главный заголовок страницы\"\n  label=\"Категория\"\n  description=\"Краткое описание содержимого страницы\"\n>\n  <p>Уникальный контент страницы...</p>\n</Page>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Page должен использоваться один раз на странице (или в активном view) и не должен включать повторяющиеся элементы навигации." }),
			"\n"
		] })
	] });
}
function Of(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Df, { ...e })
	}) : Df(e);
}
//#endregion
//#region src/media/mdx/Page/wikiMdxPage.ts
var kf = {
	name: "Page",
	descriptions: { block: {
		en: Ef,
		ru: Of
	} }
};
//#endregion
//#region src/media/mdx/Progress/circular.en.mdx
function Af(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Circular Progress and Related Parameters" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "circular" }),
			" property enables circular progress indicator display mode as a ring indicator. For optimal control over appearance and behavior, it is recommended to use it together with additional properties."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "circular" }), " — enables circular progress display mode"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "dense" }), " — removes internal padding for compact placement in small elements"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "circular" }),
			" property activates a ring progress indicator that fills around the circumference proportionally to the current value. ",
			o(t.code, { children: "dense" }),
			" removes padding, making the indicator more compact for placement in limited space."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Basic circular progress -->\n<Progress circular />\n\n<!-- Compact circular progress -->\n<Progress circular dense />\n\n<!-- With specific value -->\n<Progress circular :value=\"75\" />\n\n<!-- Compact with value -->\n<Progress circular dense :value=\"50\" />\n",
			language: "html"
		})
	] });
}
function jf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Af, { ...e })
	}) : Af(e);
}
//#endregion
//#region src/media/mdx/Progress/circular.ru.mdx
function Mf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Круглый прогресс и связанные параметры" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "circular" }),
			" включает режим круглого отображения индикатора прогресса в виде кольцевого индикатора. Для оптимального контроля над внешним видом и поведением рекомендуется использовать его совместно с дополнительными свойствами."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "circular" }), " — включает режим круглого отображения прогресса"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "dense" }), " — убирает внутренние отступы для компактного размещения в маленьких элементах"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "circular" }),
			" активирует кольцевой индикатор прогресса, который заполняется по окружности пропорционально текущему значению. ",
			o(t.code, { children: "dense" }),
			" убирает padding, делая индикатор более компактным для размещения в ограниченном пространстве."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Базовый круглый прогресс -->\n<Progress circular />\n\n<!-- Компактный круглый прогресс -->\n<Progress circular dense />\n\n<!-- С определенным значением -->\n<Progress circular :value=\"75\" />\n\n<!-- Компактный со значением -->\n<Progress circular dense :value=\"50\" />\n",
			language: "html"
		})
	] });
}
function Nf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Mf, { ...e })
	}) : Mf(e);
}
//#endregion
//#region src/media/mdx/Progress/delays.en.mdx
function Pf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Progress Delay Management" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "delay" }),
			" and ",
			o(t.code, { children: "delayHide" }),
			" properties control timing parameters for showing and hiding the progress indicator. These properties allow creating a smoother user experience by avoiding flickers during fast operations."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "delay" }),
				" — delay before showing the indicator in milliseconds, defaults to ",
				o(t.code, { children: "360" })
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "delayHide" }),
				" — delay before hiding the indicator in milliseconds, defaults to ",
				o(t.code, { children: "200" })
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"The standard ",
			o(t.code, { children: "delay=\"360\"" }),
			" value is proven in practice and suitable for most cases. Increase ",
			o(t.code, { children: "delay" }),
			" for rapid operations where the indicator might interfere with perception. Decrease for long operations where immediate feedback is important."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Standard delays -->\n<Progress delay=\"360\" delayHide=\"200\" />\n\n<!-- Fast appearance -->\n<Progress delay=\"100\" delayHide=\"200\" />\n\n<!-- Slow appearance -->\n<Progress delay=\"800\" delayHide=\"300\" />\n\n<!-- No delays -->\n<Progress delay=\"0\" delayHide=\"0\" />\n",
			language: "html"
		})
	] });
}
function Ff(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pf, { ...e })
	}) : Pf(e);
}
//#endregion
//#region src/media/mdx/Progress/delays.ru.mdx
function If(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление задержками прогресса" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "delay" }),
			" и ",
			o(t.code, { children: "delayHide" }),
			" контролируют временные параметры появления и скрытия индикатора прогресса. Эти свойства позволяют создавать более плавный пользовательский опыт, избегая мерцаний при быстрых операциях."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "delay" }),
				" — задержка перед показом индикатора в миллисекундах, по умолчанию ",
				o(t.code, { children: "360" })
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "delayHide" }),
				" — задержка перед скрытием индикатора в миллисекундах, по умолчанию ",
				o(t.code, { children: "200" })
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Стандартное значение ",
			o(t.code, { children: "delay=\"360\"" }),
			" проверено на практике и подходит для большинства случаев. Увеличивайте ",
			o(t.code, { children: "delay" }),
			" для очень быстрых операций, где индикатор может помешать восприятию. Уменьшайте для долгих операций, где важна немедленная обратная связь."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Стандартные задержки -->\n<Progress delay=\"360\" delayHide=\"200\" />\n\n<!-- Быстрое появление -->\n<Progress delay=\"100\" delayHide=\"200\" />\n\n<!-- Медленное появление -->\n<Progress delay=\"800\" delayHide=\"300\" />\n\n<!-- Без задержек -->\n<Progress delay=\"0\" delayHide=\"0\" />\n",
			language: "html"
		})
	] });
}
function Lf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(If, { ...e })
	}) : If(e);
}
//#endregion
//#region src/media/mdx/Progress/linear.en.mdx
function Rf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Linear Progress and Related Parameters" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "linear" }),
			" property enables linear progress indicator display mode as a horizontal bar. For complete control over behavior and appearance, it is recommended to use it together with additional properties."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "linear" }), " — enables linear progress display mode"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "position" }),
				" — defines the indicator position (",
				o(t.code, { children: "'top'" }),
				", ",
				o(t.code, { children: "'bottom'" }),
				", ",
				o(t.code, { children: "'static'" }),
				"), defaults to ",
				o(t.code, { children: "'top'" })
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "point" }), " — adds a point at the end of the indicator to emphasize the current position"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "linear" }),
			" property activates a horizontal progress bar that fills proportionally to the current value. ",
			o(t.code, { children: "position" }),
			" controls the placement: ",
			o(t.code, { children: "'top'" }),
			" places it at the top of the container, ",
			o(t.code, { children: "'bottom'" }),
			" at the bottom, ",
			o(t.code, { children: "'static'" }),
			" in the normal document flow. ",
			o(t.code, { children: "point" }),
			" adds a visual marker at the end of the filled portion."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Basic linear progress -->\n<Progress linear />\n\n<!-- With bottom positioning -->\n<Progress linear position=\"bottom\" />\n\n<!-- With point in static position -->\n<Progress linear position=\"static\" point />\n\n<!-- With specific value -->\n<Progress linear position=\"top\" point :value=\"65\" />\n",
			language: "html"
		})
	] });
}
function zf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Rf, { ...e })
	}) : Rf(e);
}
//#endregion
//#region src/media/mdx/Progress/linear.ru.mdx
function Bf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Линейный прогресс и связанные параметры" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "linear" }),
			" включает режим линейного отображения индикатора прогресса в виде горизонтальной полосы. Для полного контроля над поведением и внешним видом рекомендуется использовать его совместно с дополнительными свойствами."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "linear" }), " — включает режим линейного отображения прогресса"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "position" }),
				" — определяет позицию индикатора (",
				o(t.code, { children: "'top'" }),
				", ",
				o(t.code, { children: "'bottom'" }),
				", ",
				o(t.code, { children: "'static'" }),
				"), по умолчанию ",
				o(t.code, { children: "'top'" })
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "point" }), " — добавляет точку в конце индикатора для акцентирования текущего положения"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "linear" }),
			" активирует горизонтальную полосу прогресса, которая заполняется пропорционально текущему значению. ",
			o(t.code, { children: "position" }),
			" управляет расположением: ",
			o(t.code, { children: "'top'" }),
			" размещает индикатор в верхней части контейнера, ",
			o(t.code, { children: "'bottom'" }),
			" — в нижней, ",
			o(t.code, { children: "'static'" }),
			" — в обычном потоке документа. ",
			o(t.code, { children: "point" }),
			" добавляет визуальный маркер на конце заполненной части."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Базовый линейный прогресс -->\n<Progress linear />\n\n<!-- С позиционированием снизу -->\n<Progress linear position=\"bottom\" />\n\n<!-- С точкой в статичной позиции -->\n<Progress linear position=\"static\" point />\n\n<!-- С определенным значением -->\n<Progress linear position=\"top\" point :value=\"65\" />\n",
			language: "html"
		})
	] });
}
function Vf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Bf, { ...e })
	}) : Bf(e);
}
//#endregion
//#region src/media/mdx/Progress/progress.en.mdx
function Hf(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for visual representation of operation progress, data loading, and long-running processes." }),
		"\n",
		o(t.p, { children: "Progress provides flexible options for indicating completion status: linear and circular progress bars, minimalist point indicators. The component automatically manages visibility with customizable appearance and hiding delays, supports both determinate progress values and indeterminate states for operations with unknown completion time." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Linear and circular progress indicators" }),
			"\n",
			o(t.li, { children: "Point variants for minimal display" }),
			"\n",
			o(t.li, { children: "Determinate mode with specific values (0-100%)" }),
			"\n",
			o(t.li, { children: "Indeterminate mode for unknown execution time" }),
			"\n",
			o(t.li, { children: "Flexible positioning (top, bottom, static)" }),
			"\n",
			o(t.li, { children: "Customizable appearance and hiding delays" }),
			"\n",
			o(t.li, { children: "Compact and inverted display modes" }),
			"\n",
			o(t.li, { children: "Automatic visibility management" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Indicating data loading from server" }),
			"\n",
			o(t.li, { children: "Displaying file upload progress" }),
			"\n",
			o(t.li, { children: "Visualizing multi-step operation execution" }),
			"\n",
			o(t.li, { children: "Global page loading indicators" }),
			"\n",
			o(t.li, { children: "Progress bars in forms and wizards" }),
			"\n",
			o(t.li, { children: "Background process indication" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst progress = ref(0)\nconst loading = ref(false)\n\nconst startLoading = () => {\nloading.value = true\nprogress.value = 0\n\nconst interval = setInterval(() => {\n  progress.value += 10\n  if (progress.value >= 100) {\n    clearInterval(interval)\n    loading.value = false\n  }\n}, 500)\n}\n<\/script>\n\n<template>\n<button @click=\"startLoading\">Start Loading</button>\n\n<!-- Linear indicator with determinate value -->\n<Progress\n  :visible=\"loading\"\n  :value=\"progress\"\n  linear\n  position=\"top\"\n/>\n\n<!-- Circular indicator -->\n<Progress\n  :visible=\"loading\"\n  :value=\"progress\"\n  circular\n/>\n\n<!-- Indeterminate indicator -->\n<Progress\n  :visible=\"loading\"\n  linear\n  indeterminate=\"type1\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Uf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Hf, { ...e })
	}) : Hf(e);
}
//#endregion
//#region src/media/mdx/Progress/progress.ru.mdx
function Wf(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для визуального отображения прогресса выполнения операций, загрузки данных и длительных процессов." }),
		"\n",
		o(t.p, { children: "Progress предоставляет гибкие варианты индикации состояния выполнения: линейные и круговые прогресс-бары, минималистичные точечные индикаторы. Компонент автоматически управляет видимостью с настраиваемыми задержками появления и скрытия, поддерживает как определенные значения прогресса, так и неопределенные состояния для операций с неизвестным временем завершения." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Линейные и круговые индикаторы прогресса" }),
			"\n",
			o(t.li, { children: "Точечные варианты для минимального отображения" }),
			"\n",
			o(t.li, { children: "Детерминированный режим с конкретными значениями (0-100%)" }),
			"\n",
			o(t.li, { children: "Индетерминированный режим для неизвестного времени выполнения" }),
			"\n",
			o(t.li, { children: "Гибкое позиционирование (top, bottom, static)" }),
			"\n",
			o(t.li, { children: "Настройка задержек появления и скрытия" }),
			"\n",
			o(t.li, { children: "Компактный и инвертированный режимы отображения" }),
			"\n",
			o(t.li, { children: "Автоматическое управление видимостью" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Индикация загрузки данных с сервера" }),
			"\n",
			o(t.li, { children: "Отображение прогресса загрузки файлов" }),
			"\n",
			o(t.li, { children: "Визуализация выполнения многоэтапных операций" }),
			"\n",
			o(t.li, { children: "Глобальные индикаторы загрузки страницы" }),
			"\n",
			o(t.li, { children: "Прогресс-бары в формах и мастерах" }),
			"\n",
			o(t.li, { children: "Индикация фоновых процессов" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst progress = ref(0)\nconst loading = ref(false)\n\nconst startLoading = () => {\nloading.value = true\nprogress.value = 0\n\nconst interval = setInterval(() => {\n  progress.value += 10\n  if (progress.value >= 100) {\n    clearInterval(interval)\n    loading.value = false\n  }\n}, 500)\n}\n<\/script>\n\n<template>\n<button @click=\"startLoading\">Начать загрузку</button>\n\n<!-- Линейный индикатор с определенным значением -->\n<Progress\n  :visible=\"loading\"\n  :value=\"progress\"\n  linear\n  position=\"top\"\n/>\n\n<!-- Круговой индикатор -->\n<Progress\n  :visible=\"loading\"\n  :value=\"progress\"\n  circular\n/>\n\n<!-- Неопределенный индикатор -->\n<Progress\n  :visible=\"loading\"\n  linear\n  indeterminate=\"type1\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Gf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Wf, { ...e })
	}) : Wf(e);
}
//#endregion
//#region src/media/mdx/Progress/values.en.mdx
function Kf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Progress Value Management" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "value" }),
			" and ",
			o(t.code, { children: "max" }),
			" properties work together to determine the state of process execution. They establish the current value and upper limit for calculating the completion percentage of an operation."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value" }), " — current progress value (what portion of the process has been completed)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "max" }),
				" — maximum progress value, defaults to ",
				o(t.code, { children: "100" })
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Completion percentage is calculated automatically: ",
			o(t.code, { children: "(value / max) * 100" }),
			". The ",
			o(t.code, { children: "value" }),
			" is automatically constrained to the range from 0 to ",
			o(t.code, { children: "max" }),
			". When ",
			o(t.code, { children: "max" }),
			" changes, the percentage display is recalculated proportionally. Use ",
			o(t.code, { children: "max=\"100\"" }),
			" for percentage display or set it equal to the actual number of steps in the process."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Standard percentage scale -->\n<Progress :value=\"75\" :max=\"100\" />\n\n<!-- File loading progress -->\n<Progress :value=\"loadedFiles\" :max=\"totalFiles\" />\n\n<!-- Dynamic updates -->\n<Progress :value=\"currentStep\" :max=\"totalSteps\" />\n\n<!-- Custom scale -->\n<Progress :value=\"completedTasks\" :max=\"1000\" />\n",
			language: "html"
		})
	] });
}
function qf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Kf, { ...e })
	}) : Kf(e);
}
//#endregion
//#region src/media/mdx/Progress/values.ru.mdx
function Jf(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление значениями прогресса" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "value" }),
			" и ",
			o(t.code, { children: "max" }),
			" работают в связке для определения состояния выполнения процесса. Они устанавливают текущее значение и верхний предел для расчета процента завершения операции."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "value" }), " — текущее значение прогресса (какая часть процесса выполнена)"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "max" }),
				" — максимальное значение прогресса, по умолчанию ",
				o(t.code, { children: "100" })
			] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Процент выполнения рассчитывается автоматически: ",
			o(t.code, { children: "(value / max) * 100" }),
			". Значение ",
			o(t.code, { children: "value" }),
			" автоматически ограничивается диапазоном от 0 до ",
			o(t.code, { children: "max" }),
			". При изменении ",
			o(t.code, { children: "max" }),
			" процентное отображение пересчитывается пропорционально. Используйте ",
			o(t.code, { children: "max=\"100\"" }),
			" для процентного отображения или устанавливайте равным реальному количеству шагов в процессе."
		] }),
		"\n",
		o(i, {
			code: "\n<!-- Стандартная процентная шкала -->\n<Progress :value=\"75\" :max=\"100\" />\n\n<!-- Прогресс загрузки файлов -->\n<Progress :value=\"loadedFiles\" :max=\"totalFiles\" />\n\n<!-- Динамическое обновление -->\n<Progress :value=\"currentStep\" :max=\"totalSteps\" />\n\n<!-- Пользовательская шкала -->\n<Progress :value=\"completedTasks\" :max=\"1000\" />\n",
			language: "html"
		})
	] });
}
function Yf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Jf, { ...e })
	}) : Jf(e);
}
//#endregion
//#region src/media/mdx/Progress/wikiMdxProgress.ts
var Xf = {
	name: "Progress",
	descriptions: {
		circular: {
			en: jf,
			ru: Nf
		},
		delays: {
			en: Ff,
			ru: Lf
		},
		linear: {
			en: zf,
			ru: Vf
		},
		progress: {
			en: Uf,
			ru: Gf
		},
		values: {
			en: qf,
			ru: Yf
		}
	}
};
//#endregion
//#region src/media/mdx/Ripple/ripple.en.mdx
function Zf(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating animated wave effect on element click." }),
		"\n",
		o(t.p, { children: "Ripple provides visual feedback during user interaction with interactive elements, automatically tracking clicks and generating an animated wave expanding from the touch point. The effect enhances user experience by making the interface more responsive and modern." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic click event tracking" }),
			"\n",
			o(t.li, { children: "Wave animation from touch point" }),
			"\n",
			s(t.li, { children: [
				"Control via ",
				o(t.code, { children: "disabled" }),
				" property"
			] }),
			"\n",
			o(t.li, { children: "Automatic animation removal after completion" }),
			"\n",
			o(t.li, { children: "Support for any interactive elements" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Buttons and links" }),
			"\n",
			o(t.li, { children: "Cards and lists" }),
			"\n",
			o(t.li, { children: "Toggles and checkboxes" }),
			"\n",
			o(t.li, { children: "Menu and navigation elements" }),
			"\n",
			o(t.li, { children: "Interactive icons" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Button with ripple effect -->\n<button style=\"position: relative;\">\n  Click me\n  <Ripple />\n</button>\n\n<!-- Disabled effect -->\n<button style=\"position: relative;\">\n  No effect\n  <Ripple :disabled=\"true\" />\n</button>\n\n<!-- Card with effect -->\n<div class=\"card\" style=\"position: relative; cursor: pointer;\">\n  <h3>Interactive card</h3>\n  <p>Card content</p>\n  <Ripple />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Qf(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zf, { ...e })
	}) : Zf(e);
}
//#endregion
//#region src/media/mdx/Ripple/ripple.ru.mdx
function $f(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания анимированного эффекта волны при клике на элемент." }),
		"\n",
		o(t.p, { children: "Ripple создает визуальную обратную связь при взаимодействии пользователя с интерактивными элементами, автоматически отслеживая клики и генерируя анимированную волну, расширяющуюся от точки касания. Эффект улучшает пользовательский опыт, делая интерфейс более отзывчивым и современным." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическое отслеживание событий клика" }),
			"\n",
			o(t.li, { children: "Анимация волны от точки касания" }),
			"\n",
			s(t.li, { children: ["Управление через свойство ", o(t.code, { children: "disabled" })] }),
			"\n",
			o(t.li, { children: "Автоматическое удаление анимации после завершения" }),
			"\n",
			o(t.li, { children: "Поддержка любых интерактивных элементов" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Кнопки и ссылки" }),
			"\n",
			o(t.li, { children: "Карточки и списки" }),
			"\n",
			o(t.li, { children: "Переключатели и чекбоксы" }),
			"\n",
			o(t.li, { children: "Элементы меню и навигации" }),
			"\n",
			o(t.li, { children: "Интерактивные иконки" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Кнопка с эффектом волны -->\n<button style=\"position: relative;\">\n  Нажми меня\n  <Ripple />\n</button>\n\n<!-- Отключенный эффект -->\n<button style=\"position: relative;\">\n  Без эффекта\n  <Ripple :disabled=\"true\" />\n</button>\n\n<!-- Карточка с эффектом -->\n<div class=\"card\" style=\"position: relative; cursor: pointer;\">\n  <h3>Интерактивная карточка</h3>\n  <p>Содержимое карточки</p>\n  <Ripple />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function ep(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($f, { ...e })
	}) : $f(e);
}
//#endregion
//#region src/media/mdx/Ripple/wikiMdxRipple.ts
var tp = {
	name: "Ripple",
	descriptions: { ripple: {
		en: Qf,
		ru: ep
	} }
};
//#endregion
//#region src/media/mdx/Scrollbar/emits.en.mdx
function np(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "top" }) }),
		"\n",
		o(t.p, { children: "Event fires when the top scroll boundary state changes." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isTop: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				" if scroll is at the top position"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "reachTop" }) }),
		"\n",
		o(t.p, { children: "Event fires when the top scroll boundary is reached." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "leaveTop" }) }),
		"\n",
		o(t.p, { children: "Event fires when leaving the top scroll boundary." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "bottom" }) }),
		"\n",
		o(t.p, { children: "Event fires when the bottom scroll boundary state changes." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isBottom: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				" if scroll is at the bottom position"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "reachBottom" }) }),
		"\n",
		o(t.p, { children: "Event fires when the bottom scroll boundary is reached." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "leaveBottom" }) }),
		"\n",
		o(t.p, { children: "Event fires when leaving the bottom scroll boundary." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "edge" }) }),
		"\n",
		o(t.p, { children: "Event fires when any scroll boundary state changes." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isTop: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				" if scroll is at the top position"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isBottom: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				" if scroll is at the bottom position"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "edge: 'top' | 'bottom'" }), " — type of boundary that changed"] }),
			"\n"
		] })
	] });
}
function rp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(np, { ...e })
	}) : np(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/emits.ru.mdx
function ip(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "top" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния достижения верхней границы скролла." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isTop: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				", если скролл находится в верхней позиции"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "reachTop" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при достижении верхней границы скролла." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "leaveTop" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при покидании верхней границы скролла." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "bottom" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния достижения нижней границы скролла." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isBottom: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				", если скролл находится в нижней позиции"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "reachBottom" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при достижении нижней границы скролла." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "leaveBottom" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при покидании нижней границы скролла." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "edge" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния любой из границ скролла." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isTop: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				", если скролл находится в верхней позиции"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isBottom: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				", если скролл находится в нижней позиции"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "edge: 'top' | 'bottom'" }), " — тип границы, которая изменилась"] }),
			"\n"
		] })
	] });
}
function ap(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ip, { ...e })
	}) : ip(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/emits-include.en.mdx
function op(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "scrollbarTop" }) }),
		"\n",
		o(t.p, { children: "Event fires when the top scroll boundary state changes (for use in parent components)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isTop: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				" if scroll is at the top position"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarReachTop" }) }),
		"\n",
		o(t.p, { children: "Event fires when the top scroll boundary is reached (for use in parent components)." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarLeaveTop" }) }),
		"\n",
		o(t.p, { children: "Event fires when leaving the top scroll boundary (for use in parent components)." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarBottom" }) }),
		"\n",
		o(t.p, { children: "Event fires when the bottom scroll boundary state changes (for use in parent components)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isBottom: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				" if scroll is at the bottom position"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarReachBottom" }) }),
		"\n",
		o(t.p, { children: "Event fires when the bottom scroll boundary is reached (for use in parent components)." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarLeaveBottom" }) }),
		"\n",
		o(t.p, { children: "Event fires when leaving the bottom scroll boundary (for use in parent components)." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarEdge" }) }),
		"\n",
		o(t.p, { children: "Event fires when any scroll boundary state changes (for use in parent components)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isTop: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				" if scroll is at the top position"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isBottom: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				" if scroll is at the bottom position"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "edge: 'top' | 'bottom'" }), " — type of boundary that changed"] }),
			"\n"
		] })
	] });
}
function sp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(op, { ...e })
	}) : op(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/emits-include.ru.mdx
function cp(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "scrollbarTop" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния достижения верхней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isTop: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				", если скролл находится в верхней позиции"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarReachTop" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при достижении верхней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarLeaveTop" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при покидании верхней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarBottom" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния достижения нижней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isBottom: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				", если скролл находится в нижней позиции"
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarReachBottom" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при достижении нижней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarLeaveBottom" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при покидании нижней границы скролла (для использования в родительских компонентах)." }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "scrollbarEdge" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния любой из границ скролла (для использования в родительских компонентах)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isTop: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				", если скролл находится в верхней позиции"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "isBottom: boolean" }),
				" — ",
				o(t.code, { children: "true" }),
				", если скролл находится в нижней позиции"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "edge: 'top' | 'bottom'" }), " — тип границы, которая изменилась"] }),
			"\n"
		] })
	] });
}
function lp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(cp, { ...e })
	}) : cp(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/scrollbar.en.mdx
function up(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for customizing scrollbar appearance and managing visual dividers at scrollable area boundaries." }),
		"\n",
		o(t.p, { children: "Scrollbar hides the browser's standard scrollbar and provides visual feedback when reaching the top or bottom of content through divider lines. The component automatically detects scrollbar width and adapts display for systems without visible scrollbars (e.g., macOS with trackpad)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Hide browser's standard scrollbar" }),
			"\n",
			o(t.li, { children: "Display dividers when reaching content boundaries" }),
			"\n",
			o(t.li, { children: "Independent control of top and bottom dividers" }),
			"\n",
			o(t.li, { children: "Inversion of divider display logic" }),
			"\n",
			o(t.li, { children: "Events for tracking scroll position" }),
			"\n",
			s(t.li, { children: [
				"Support for infinite scroll via ",
				o(t.code, { children: "reachBottom" }),
				" events"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Lists with data loading on scroll" }),
			"\n",
			o(t.li, { children: "Modal windows and dropdown menus with scrollable content" }),
			"\n",
			o(t.li, { children: "Fixed-height areas with vertical scrolling" }),
			"\n",
			o(t.li, { children: "Visual content separation during scrolling" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleReachBottom = () => {\n// Load more data\nloadMoreItems()\n}\n<\/script>\n\n<template>\n<Scrollbar\n  divider\n  @reach-bottom=\"handleReachBottom\"\n>\n  <div class=\"content\">\n    <!-- Scrollable content -->\n  </div>\n</Scrollbar>\n</template>\n",
			language: "html"
		})
	] });
}
function dp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(up, { ...e })
	}) : up(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/scrollbar.ru.mdx
function fp(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для кастомизации внешнего вида полосы прокрутки и управления визуальными разделителями на границах прокручиваемой области." }),
		"\n",
		o(t.p, { children: "Scrollbar скрывает стандартную полосу прокрутки браузера и предоставляет визуальную обратную связь при достижении верхней или нижней границы контента через разделительные линии. Компонент автоматически определяет ширину скроллбара и адаптирует отображение для систем без видимых полос прокрутки (например, macOS с трекпадом)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Скрытие стандартной полосы прокрутки браузера" }),
			"\n",
			o(t.li, { children: "Отображение разделителей при достижении границ контента" }),
			"\n",
			o(t.li, { children: "Независимое управление верхним и нижним разделителями" }),
			"\n",
			o(t.li, { children: "Инверсия логики отображения разделителей" }),
			"\n",
			o(t.li, { children: "События для отслеживания позиции скролла" }),
			"\n",
			s(t.li, { children: ["Поддержка бесконечной прокрутки через события ", o(t.code, { children: "reachBottom" })] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Списки с подгрузкой данных при скролле" }),
			"\n",
			o(t.li, { children: "Модальные окна и выпадающие меню с прокручиваемым содержимым" }),
			"\n",
			o(t.li, { children: "Области с фиксированной высотой и вертикальной прокруткой" }),
			"\n",
			o(t.li, { children: "Визуальное разделение контента при прокрутке" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleReachBottom = () => {\n// Загрузка дополнительных данных\nloadMoreItems()\n}\n<\/script>\n\n<template>\n<Scrollbar\n  divider\n  @reach-bottom=\"handleReachBottom\"\n>\n  <div class=\"content\">\n    <!-- Прокручиваемое содержимое -->\n  </div>\n</Scrollbar>\n</template>\n",
			language: "html"
		})
	] });
}
function pp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(fp, { ...e })
	}) : fp(e);
}
//#endregion
//#region src/media/mdx/Scrollbar/wikiMdxScrollbar.ts
var mp = {
	name: "Scrollbar",
	descriptions: {
		emits: {
			en: rp,
			ru: ap
		},
		"emits-include": {
			en: sp,
			ru: lp
		},
		scrollbar: {
			en: dp,
			ru: pp
		}
	}
};
//#endregion
//#region src/media/mdx/Section/section.en.mdx
function hp(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		s(t.p, { children: [
			"A semantic container component designed for grouping related content. It uses the ",
			o(t.code, { children: "<section>" }),
			" tag by default."
		] }),
		"\n",
		s(t.p, { children: [
			"Section provides capabilities for displaying headlines, labels, descriptions, captions, and icons. The main purpose of the component is to designate thematic sections of a document, which improves the semantics and accessibility of the page. The headline is rendered as ",
			o(t.code, { children: "<h2>" }),
			" by default."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Semantic content grouping (",
				o(t.code, { children: "<section>" }),
				" tag)"
			] }),
			"\n",
			s(t.li, { children: [
				"Support for headlines (default ",
				o(t.code, { children: "<h2>" }),
				"), labels, descriptions, and captions"
			] }),
			"\n",
			o(t.li, { children: "Support for icons" }),
			"\n",
			o(t.li, { children: "Customizable layout and spacing" }),
			"\n",
			o(t.li, { children: "Full support for slots for content customization" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Thematic page sections" }),
			"\n",
			o(t.li, { children: "Content grouping in articles" }),
			"\n",
			o(t.li, { children: "Information blocks with second-level headings" }),
			"\n",
			o(t.li, { children: "Landing page sections" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Section\n  headline=\"Section Headline\"\n  label=\"Label\"\n  description=\"Description of this section's content\"\n>\n  <p>Main section content...</p>\n</Section>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Section is the semantically correct choice for dividing a page into large logical blocks." }),
			"\n"
		] })
	] });
}
function gp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(hp, { ...e })
	}) : hp(e);
}
//#endregion
//#region src/media/mdx/Section/section.ru.mdx
function _p(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		s(t.p, { children: [
			"Семантический компонент-контейнер, предназначенный для группировки связанного контента. По умолчанию использует тег ",
			o(t.code, { children: "<section>" }),
			"."
		] }),
		"\n",
		s(t.p, { children: [
			"Section предоставляет возможности для отображения заголовков, меток, описаний, подписей и иконок. Основное назначение компонента — обозначение тематических разделов документа, что улучшает семантику и доступность страницы. Заголовок по умолчанию рендерится как ",
			o(t.code, { children: "<h2>" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				"Семантическая группировка контента (тег ",
				o(t.code, { children: "<section>" }),
				")"
			] }),
			"\n",
			s(t.li, { children: [
				"Поддержка заголовков (по умолчанию ",
				o(t.code, { children: "<h2>" }),
				"), меток, описаний и подписей"
			] }),
			"\n",
			o(t.li, { children: "Поддержка иконок" }),
			"\n",
			o(t.li, { children: "Настраиваемый макет и отступы" }),
			"\n",
			o(t.li, { children: "Полная поддержка слотов для кастомизации контента" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Тематические разделы страницы" }),
			"\n",
			o(t.li, { children: "Группировка контента в статьях" }),
			"\n",
			o(t.li, { children: "Информационные блоки с заголовками второго уровня" }),
			"\n",
			o(t.li, { children: "Секции лэндингов" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n<\/script>\n\n<template>\n<Section\n  headline=\"Заголовок секции\"\n  label=\"Метка\"\n  description=\"Описание содержимого данной секции\"\n>\n  <p>Основной контент секции...</p>\n</Section>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Section — это семантически верный выбор для разделения страницы на крупные логические блоки." }),
			"\n"
		] })
	] });
}
function vp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_p, { ...e })
	}) : _p(e);
}
//#endregion
//#region src/media/mdx/Section/wikiMdxSection.ts
var yp = {
	name: "Section",
	descriptions: { section: {
		en: gp,
		ru: vp
	} }
};
//#endregion
//#region src/media/mdx/Select/select.en.mdx
function bp(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating dropdown selection lists with search, filtering, multiple selection, and validation support." }),
		"\n",
		o(t.p, { children: "Select is a complete selection element that combines Field, Menu, SelectValue, and Input components to create an advanced selection interface. The component automatically displays selected values as text or chips (for multiple selection), provides built-in search and option filtering, supports AJAX data loading with caching. It integrates with all Field component features including validation, labels, counters, and messages." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Single or multiple value selection" }),
			"\n",
			o(t.li, { children: "Built-in search and real-time option filtering" }),
			"\n",
			o(t.li, { children: "AJAX data loading with caching support" }),
			"\n",
			o(t.li, { children: "Editable selected value mode (editValue)" }),
			"\n",
			o(t.li, { children: "Validation with standard Field features" }),
			"\n",
			o(t.li, { children: "Keyboard navigation and accessibility support" }),
			"\n",
			o(t.li, { children: "Automatic display of selected values (text or chips)" }),
			"\n",
			o(t.li, { children: "Maximum number of selected items limitation" }),
			"\n",
			o(t.li, { children: "Icon support for dropdown arrow and search" }),
			"\n",
			o(t.li, { children: "Auto-close control for multiple selection" }),
			"\n",
			o(t.li, { children: "Integration with Field, Menu, SelectValue, Input components" }),
			"\n",
			o(t.li, { children: "Customization via slots and attributes" }),
			"\n",
			o(t.li, { children: "Responsive design for mobile devices" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Selecting values from a predefined list of options" }),
			"\n",
			o(t.li, { children: "Filtering and searching in large data lists" }),
			"\n",
			o(t.li, { children: "Multiple item selection with quantity limitation" }),
			"\n",
			o(t.li, { children: "Selection with AJAX data loading from server" }),
			"\n",
			o(t.li, { children: "Forms with validation of selected values" }),
			"\n",
			o(t.li, { children: "Combo boxes with editing capability" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedCountry = ref('us')\nconst selectedLanguages = ref(['js', 'ts'])\n\nconst countries = [\n{ label: 'Russia', value: 'ru' },\n{ label: 'USA', value: 'us' },\n{ label: 'Germany', value: 'de' }\n]\n\nconst languages = [\n{ label: 'JavaScript', value: 'js' },\n{ label: 'TypeScript', value: 'ts' },\n{ label: 'Python', value: 'py' }\n]\n<\/script>\n\n<template>\n<!-- Simple selection -->\n<Select\n  v-model=\"selectedCountry\"\n  label=\"Country\"\n  placeholder=\"Choose a country\"\n  :option=\"countries\"\n/>\n\n<!-- Multiple selection -->\n<Select\n  v-model=\"selectedLanguages\"\n  label=\"Programming languages\"\n  :multiple=\"true\"\n  :max=\"3\"\n  helper-message=\"Select up to 3 languages\"\n  :option=\"languages\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function xp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(bp, { ...e })
	}) : bp(e);
}
//#endregion
//#region src/media/mdx/Select/select.ru.mdx
function Sp(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания выпадающих списков выбора с поддержкой поиска, фильтрации, множественного выбора и валидации." }),
		"\n",
		o(t.p, { children: "Select представляет собой полнофункциональный элемент выбора, объединяющий компоненты Field, Menu, SelectValue и Input для создания продвинутого интерфейса выбора. Компонент автоматически отображает выбранные значения в виде текста или чипов (для множественного выбора), предоставляет встроенный поиск и фильтрацию опций, поддерживает AJAX загрузку данных с кешированием. Интегрируется со всеми возможностями компонента Field, включая валидацию, подписи, счётчики и сообщения." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Одиночный или множественный выбор значений" }),
			"\n",
			o(t.li, { children: "Встроенный поиск и фильтрация опций в реальном времени" }),
			"\n",
			o(t.li, { children: "AJAX загрузка данных с поддержкой кеширования" }),
			"\n",
			o(t.li, { children: "Режим редактирования выбранного значения (editValue)" }),
			"\n",
			o(t.li, { children: "Валидация со стандартными функциями Field" }),
			"\n",
			o(t.li, { children: "Клавиатурная навигация и поддержка accessibility" }),
			"\n",
			o(t.li, { children: "Автоматическое отображение выбранных значений (текст или чипы)" }),
			"\n",
			o(t.li, { children: "Ограничение максимального количества выбранных элементов" }),
			"\n",
			o(t.li, { children: "Поддержка иконок для стрелки выпадающего списка и поиска" }),
			"\n",
			o(t.li, { children: "Управление автозакрытием для множественного выбора" }),
			"\n",
			o(t.li, { children: "Интеграция с компонентами Field, Menu, SelectValue, Input" }),
			"\n",
			o(t.li, { children: "Кастомизация через слоты и атрибуты" }),
			"\n",
			o(t.li, { children: "Адаптивный дизайн для мобильных устройств" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Выбор значений из предопределённого списка опций" }),
			"\n",
			o(t.li, { children: "Фильтрация и поиск в больших списках данных" }),
			"\n",
			o(t.li, { children: "Множественный выбор элементов с ограничением количества" }),
			"\n",
			o(t.li, { children: "Выбор с AJAX загрузкой данных с сервера" }),
			"\n",
			o(t.li, { children: "Формы с валидацией выбранных значений" }),
			"\n",
			o(t.li, { children: "Комбо-боксы с возможностью редактирования" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedCountry = ref('ru')\nconst selectedLanguages = ref(['js', 'ts'])\n\nconst countries = [\n{ label: 'Россия', value: 'ru' },\n{ label: 'США', value: 'us' },\n{ label: 'Германия', value: 'de' }\n]\n\nconst languages = [\n{ label: 'JavaScript', value: 'js' },\n{ label: 'TypeScript', value: 'ts' },\n{ label: 'Python', value: 'py' }\n]\n<\/script>\n\n<template>\n<!-- Простой выбор -->\n<Select\n  v-model=\"selectedCountry\"\n  label=\"Страна\"\n  placeholder=\"Выберите страну\"\n  :option=\"countries\"\n/>\n\n<!-- Множественный выбор -->\n<Select\n  v-model=\"selectedLanguages\"\n  label=\"Языки программирования\"\n  :multiple=\"true\"\n  :max=\"3\"\n  helper-message=\"Выберите до 3 языков\"\n  :option=\"languages\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Cp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Sp, { ...e })
	}) : Sp(e);
}
//#endregion
//#region src/media/mdx/Select/wikiMdxSelect.ts
var wp = {
	name: "Select",
	descriptions: { select: {
		en: xp,
		ru: Cp
	} }
};
//#endregion
//#region src/media/mdx/SelectValue/selectValue.en.mdx
function Tp(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for displaying selected values in selection controls with support for single and multiple modes." }),
		"\n",
		o(t.p, { children: "SelectValue manages the visualization of selected items, automatically switching between text display for single selection and chips for multiple selection. The component integrates with the event system to handle user actions, supports icon display, placeholders, and cancel buttons for selections." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic switching between single and multiple selection modes" }),
			"\n",
			o(t.li, { children: "Chip rendering with customizable appearance for multiple selections" }),
			"\n",
			o(t.li, { children: "Placeholder support for empty state" }),
			"\n",
			o(t.li, { children: "Icon display in selected items" }),
			"\n",
			o(t.li, { children: "Cancel buttons for removing individual selections" }),
			"\n",
			o(t.li, { children: "Integration with Chip component for element styling" }),
			"\n",
			o(t.li, { children: "Handling disabled and readonly states" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Displaying selected options in selects and comboboxes" }),
			"\n",
			o(t.li, { children: "Visualizing multiple selections in lists" }),
			"\n",
			o(t.li, { children: "Showing active filters with removal capability" }),
			"\n",
			o(t.li, { children: "Displaying tags and categories" }),
			"\n",
			o(t.li, { children: "Representing selected elements in forms" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedSingle = ref([\n{ label: 'JavaScript', value: 'js', icon: 'code', index: '1' }\n])\n\nconst selectedMultiple = ref([\n{ label: 'React', value: 'react', icon: 'favorite', index: '1' },\n{ label: 'Vue.js', value: 'vue', icon: 'star', index: '2' }\n])\n\nconst handleClick = (event) => {\nconsole.log('Element clicked:', event)\n}\n<\/script>\n\n<template>\n<!-- Single selection -->\n<SelectValue\n  :value=\"selectedSingle\"\n  :icon-show=\"true\"\n  @click=\"handleClick\"\n/>\n\n<!-- Multiple selection with chips -->\n<SelectValue\n  :value=\"selectedMultiple\"\n  :multiple=\"true\"\n  :icon-show=\"true\"\n  icon-cancel=\"close\"\n  @click=\"handleClick\"\n/>\n\n<!-- With placeholder -->\n<SelectValue\n  placeholder=\"Select a value\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Ep(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Tp, { ...e })
	}) : Tp(e);
}
//#endregion
//#region src/media/mdx/SelectValue/selectValue.ru.mdx
function Dp(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для отображения выбранных значений в элементах управления выбором с поддержкой одиночного и множественного режимов." }),
		"\n",
		o(t.p, { children: "SelectValue управляет визуализацией выбранных элементов, автоматически переключаясь между текстовым отображением для одиночного выбора и чипами для множественного. Компонент интегрируется с системой событий для обработки действий пользователя, поддерживает отображение иконок, плейсхолдеров и кнопок отмены выбора." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическое переключение между режимами одиночного и множественного выбора" }),
			"\n",
			o(t.li, { children: "Рендеринг чипов с настраиваемым внешним видом для множественного выбора" }),
			"\n",
			o(t.li, { children: "Поддержка плейсхолдера для пустого состояния" }),
			"\n",
			o(t.li, { children: "Отображение иконок в выбранных элементах" }),
			"\n",
			o(t.li, { children: "Кнопки отмены для удаления отдельных выборов" }),
			"\n",
			o(t.li, { children: "Интеграция с Chip компонентом для стилизации элементов" }),
			"\n",
			o(t.li, { children: "Обработка состояний disabled и readonly" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение выбранных опций в селектах и комбобоксах" }),
			"\n",
			o(t.li, { children: "Визуализация множественного выбора в списках" }),
			"\n",
			o(t.li, { children: "Показ активных фильтров с возможностью удаления" }),
			"\n",
			o(t.li, { children: "Отображение тегов и категорий" }),
			"\n",
			o(t.li, { children: "Представление выбранных элементов в формах" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedSingle = ref([\n{ label: 'JavaScript', value: 'js', icon: 'code', index: '1' }\n])\n\nconst selectedMultiple = ref([\n{ label: 'React', value: 'react', icon: 'favorite', index: '1' },\n{ label: 'Vue.js', value: 'vue', icon: 'star', index: '2' }\n])\n\nconst handleClick = (event) => {\nconsole.log('Клик по элементу:', event)\n}\n<\/script>\n\n<template>\n<!-- Одиночный выбор -->\n<SelectValue\n  :value=\"selectedSingle\"\n  :icon-show=\"true\"\n  @click=\"handleClick\"\n/>\n\n<!-- Множественный выбор с чипами -->\n<SelectValue\n  :value=\"selectedMultiple\"\n  :multiple=\"true\"\n  :icon-show=\"true\"\n  icon-cancel=\"close\"\n  @click=\"handleClick\"\n/>\n\n<!-- С плейсхолдером -->\n<SelectValue\n  placeholder=\"Выберите значение\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Op(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Dp, { ...e })
	}) : Dp(e);
}
//#endregion
//#region src/media/mdx/SelectValue/wikiMdxSelectValue.ts
var kp = {
	name: "SelectValue",
	descriptions: { selectValue: {
		en: Ep,
		ru: Op
	} }
};
//#endregion
//#region src/media/mdx/Skeleton/skeleton.en.mdx
function Ap(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating animated interface placeholders during content loading." }),
		"\n",
		s(t.p, { children: [
			"Skeleton provides smooth transitions between loading state and real content display. The component automatically manages child element visibility through the ",
			o(t.code, { children: "active" }),
			" property and supports a CSS class system for creating various types of placeholders."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic content visibility management" }),
			"\n",
			o(t.li, { children: "Support for special CSS classes for placeholders" }),
			"\n",
			s(t.li, { children: [
				"Component integration via ",
				o(t.code, { children: "isSkeleton" }),
				" flag"
			] }),
			"\n",
			o(t.li, { children: "Flexible placeholder types (text, background, borders)" }),
			"\n",
			o(t.li, { children: "Animated loading effects" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Product and user card placeholders" }),
			"\n",
			o(t.li, { children: "List and table skeletons" }),
			"\n",
			o(t.li, { children: "Image and avatar placeholders" }),
			"\n",
			o(t.li, { children: "Text blocks during loading" }),
			"\n",
			o(t.li, { children: "Complex forms with multiple fields" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isLoading = ref(true)\n\nsetTimeout(() => {\nisLoading.value = false\n}, 2000)\n<\/script>\n\n<template>\n<Skeleton :active=\"isLoading\">\n  <!-- Placeholders visible during loading -->\n  <div class=\"skeleton__background avatar\"></div>\n  <div class=\"skeleton__text title\"></div>\n  <div class=\"skeleton__textVariant subtitle\"></div>\n\n  <!-- Real content -->\n  <img src=\"/avatar.jpg\" alt=\"User avatar\" />\n  <h3>{{ user.name }}</h3>\n  <p>{{ user.description }}</p>\n</Skeleton>\n</template>\n",
			language: "html"
		})
	] });
}
function jp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ap, { ...e })
	}) : Ap(e);
}
//#endregion
//#region src/media/mdx/Skeleton/skeleton.ru.mdx
function Mp(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания анимированных заглушек интерфейса во время загрузки контента." }),
		"\n",
		s(t.p, { children: [
			"Skeleton обеспечивает плавный переход между состоянием загрузки и отображением реального контента. Компонент автоматически управляет видимостью дочерних элементов через свойство ",
			o(t.code, { children: "active" }),
			" и поддерживает систему CSS-классов для создания различных типов заглушек."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическое управление видимостью контента" }),
			"\n",
			o(t.li, { children: "Поддержка специальных CSS-классов для заглушек" }),
			"\n",
			s(t.li, { children: ["Работа с компонентами через флаг ", o(t.code, { children: "isSkeleton" })] }),
			"\n",
			o(t.li, { children: "Гибкая настройка типов заглушек (текст, фон, границы)" }),
			"\n",
			o(t.li, { children: "Анимированные эффекты загрузки" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Заглушки карточек товаров и пользователей" }),
			"\n",
			o(t.li, { children: "Скелетоны списков и таблиц" }),
			"\n",
			o(t.li, { children: "Заглушки изображений и аватаров" }),
			"\n",
			o(t.li, { children: "Текстовые блоки во время загрузки" }),
			"\n",
			o(t.li, { children: "Сложные формы с множественными полями" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isLoading = ref(true)\n\nsetTimeout(() => {\nisLoading.value = false\n}, 2000)\n<\/script>\n\n<template>\n<Skeleton :active=\"isLoading\">\n  <!-- Заглушки, видимые во время загрузки -->\n  <div class=\"skeleton__background avatar\"></div>\n  <div class=\"skeleton__text title\"></div>\n  <div class=\"skeleton__textVariant subtitle\"></div>\n\n  <!-- Реальный контент -->\n  <img src=\"/avatar.jpg\" alt=\"Аватар пользователя\" />\n  <h3>{{ user.name }}</h3>\n  <p>{{ user.description }}</p>\n</Skeleton>\n</template>\n",
			language: "html"
		})
	] });
}
function Np(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Mp, { ...e })
	}) : Mp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/expose.isActive.en.mdx
function Pp(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "isActive: ComputedRef<boolean>" }), " — Computed state indicating whether the skeleton background animation is active."] }),
		"\n"
	] });
}
function Fp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pp, { ...e })
	}) : Pp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/expose.isActive.ru.mdx
function Ip(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "isActive: ComputedRef<boolean>" }), " — Вычисляемое состояние, указывающее активна ли фоновая анимация скелетона."] }),
		"\n"
	] });
}
function Lp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ip, { ...e })
	}) : Ip(e);
}
//#endregion
//#region src/media/mdx/Skeleton/classes.en.mdx
function Rp(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "CSS Classes for Display Control" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__text" }), " — main class for text skeleton"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__textVariant" }), " — text class variant for additional styling"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__background" }), " — main background class for skeleton"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "*__backgroundAfter" }),
				" — background class for ",
				o(t.code, { children: "::after" }),
				" pseudo-element"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "*__backgroundBefore" }),
				" — background class for ",
				o(t.code, { children: "::before" }),
				" pseudo-element"
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__backgroundVariant" }), " — background class variant"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__border" }), " — class for skeleton border styling"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__borderVariant" }), " — border class variant"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__none" }), " — class to disable skeleton display"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Where ",
			o(t.code, { children: "*" }),
			" is the component class name (e.g., ",
			o(t.code, { children: "d1-skeleton" }),
			", ",
			o(t.code, { children: "m3-skeleton" }),
			")."
		] })
	] });
}
function zp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Rp, { ...e })
	}) : Rp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/classes.ru.mdx
function Bp(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "CSS классы для управления отображением" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__text" }), " — основной класс для текстового скелета"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__textVariant" }), " — вариант текстового класса для дополнительной стилизации"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__background" }), " — основной фоновый класс скелета"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "*__backgroundAfter" }),
				" — фоновый класс для псевдоэлемента ",
				o(t.code, { children: "::after" })
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "*__backgroundBefore" }),
				" — фоновый класс для псевдоэлемента ",
				o(t.code, { children: "::before" })
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__backgroundVariant" }), " — вариант фонового класса"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__border" }), " — класс для стилизации границ скелета"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__borderVariant" }), " — вариант класса границ"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*__none" }), " — класс для отключения отображения скелета"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Где ",
			o(t.code, { children: "*" }),
			" — название класса компонента (например, ",
			o(t.code, { children: "d1-skeleton" }),
			", ",
			o(t.code, { children: "m3-skeleton" }),
			")."
		] })
	] });
}
function Vp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Bp, { ...e })
	}) : Bp(e);
}
//#endregion
//#region src/media/mdx/Skeleton/wikiMdxSkeleton.ts
var Hp = {
	name: "Skeleton",
	descriptions: {
		active: {
			en: jp,
			ru: Np
		},
		"expose.isActive": {
			en: Fp,
			ru: Lp
		},
		classes: {
			en: zp,
			ru: Vp
		}
	}
};
//#endregion
//#region src/media/mdx/Snackbar/adaptation.en.mdx
function Up(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Adaptation and Behavior" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "all" }),
			", ",
			o(t.code, { children: "full" }),
			", and ",
			o(t.code, { children: "limit" }),
			" property group allows for fine-tuning notification behavior for different device types and data volumes."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "all" }), " — displays all active notifications without automatically hiding them in a stack."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "full" }), " — enables full-screen or full-width display, which is a standard pattern for mobile devices."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "limit" }), " — limits the maximum number of simultaneously visible notifications, preventing screen clutter."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"These properties are intended solely for configuring behavior and adaptation for different screen sizes. It is recommended to define these values in the ",
				o(t.code, { children: "properties.json" }),
				" configuration file."
			] }),
			"\n"
		] })
	] });
}
function Wp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Up, { ...e })
	}) : Up(e);
}
//#endregion
//#region src/media/mdx/Snackbar/adaptation.ru.mdx
function Gp(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Адаптация и поведение" }),
		"\n",
		s(t.p, { children: [
			"Группа свойств ",
			o(t.code, { children: "all" }),
			", ",
			o(t.code, { children: "full" }),
			" и ",
			o(t.code, { children: "limit" }),
			" позволяет тонко настроить поведение уведомлений для различных типов устройств и объемов данных."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "all" }), " — отображает все активные уведомления без автоматического скрытия их в стек."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "full" }), " — включает полноэкранное или полноширинное отображение, что является стандартным паттерном для мобильных устройств."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "limit" }), " — ограничивает максимальное количество одновременно видимых уведомлений, предотвращая загромождение экрана."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Данные свойства предназначены исключительно для настройки поведения и адаптации под различные экраны. Рекомендуется задавать эти значения в конфигурационном файле ",
				o(t.code, { children: "properties.json" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function Kp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Gp, { ...e })
	}) : Gp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/add.en.mdx
function qp(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Adding Notifications" }),
		"\n",
		s(t.p, { children: [
			"The primary interaction with the ",
			o(t.code, { children: "Snackbar" }),
			" component occurs through the ",
			o(t.code, { children: "add" }),
			" method, which is used to dynamically push new messages into the queue."
		] }),
		"\n",
		o(t.h3, { children: "Method add()" }),
		"\n",
		s(t.p, { children: [
			"The component instance (via ",
			o(t.code, { children: "ref" }),
			") provides a ",
			o(t.code, { children: "data" }),
			" object containing the ",
			o(t.code, { children: "add(item: SnackbarValue)" }),
			" method. The ",
			o(t.code, { children: "item" }),
			" parameter determines the configuration and behavior of the new notification."
		] }),
		"\n",
		o(i, {
			code: "\nsnackbar.value?.data.add({\ndata: {\n  label: 'Notification Title',\n  description: 'Description of the occurring event'\n}\n})\n",
			language: "typescript"
		}),
		"\n",
		o(t.h3, { children: "SnackbarValue Structure" }),
		"\n",
		o(t.p, { children: "The configuration object includes the following properties:" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "data" }) }),
				" (",
				o(t.code, { children: "SnackbarItemProps" }),
				") — Properties for the rendered component (by default ",
				o(t.code, { children: "SnackbarItem" }),
				"). This is where you pass information like ",
				o(t.code, { children: "label" }),
				", ",
				o(t.code, { children: "description" }),
				", ",
				o(t.code, { children: "icon" }),
				", action buttons, and other visual data."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "component" }) }),
				" (",
				o(t.code, { children: "any" }),
				") — Allows for passing a custom Vue component to be rendered instead of the standard ",
				o(t.code, { children: "SnackbarItem" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "highPriority" }) }),
				" (",
				o(t.code, { children: "boolean" }),
				") — If ",
				o(t.code, { children: "true" }),
				", the notification is displayed in a separate priority container (usually pinned to the top or the start of the list)."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "delay" }) }),
				" (",
				o(t.code, { children: "number" }),
				") — Individual lifespan of the notification in milliseconds. If omitted, the global ",
				o(t.code, { children: "delay" }),
				" value from the ",
				o(t.code, { children: "Snackbar" }),
				" settings is used."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "value" }) }),
				" (",
				o(t.code, { children: "string" }),
				") — A unique key for the notification. If omitted, it is generated automatically. Used for manual removal of the message via the ",
				o(t.code, { children: "remove(value)" }),
				" method."
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Custom Components" }),
		"\n",
		s(t.p, { children: [
			"For notifications with non-standard layouts, you can pass your own component via the ",
			o(t.code, { children: "component" }),
			" property. All properties specified in the ",
			o(t.code, { children: "data" }),
			" object will be passed to your component as ",
			o(t.code, { children: "props" }),
			"."
		] }),
		"\n",
		o(i, {
			code: "\nimport MyAlert from './MyAlert.vue'\n\nsnackbar.value?.data.add({\ncomponent: MyAlert,\ndata: {\n  title: 'Warning!',\n  message: 'This is a message with custom styling'\n}\n})\n",
			language: "typescript"
		}),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "highPriority" }),
			" property is recommended for critical system notifications or authorization errors, ensuring they reliably catch the user's attention and are displayed separately from the general message flow."
		] })
	] });
}
function Jp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(qp, { ...e })
	}) : qp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/add.ru.mdx
function Yp(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Добавление уведомлений" }),
		"\n",
		s(t.p, { children: [
			"Основной метод взаимодействия с компонентом ",
			o(t.code, { children: "Snackbar" }),
			" — добавление новых сообщений в очередь."
		] }),
		"\n",
		o(t.h3, { children: "Метод add()" }),
		"\n",
		s(t.p, { children: [
			"Через инстанс компонента (",
			o(t.code, { children: "ref" }),
			") доступен объект ",
			o(t.code, { children: "data" }),
			", предоставляющий метод ",
			o(t.code, { children: "add(item: SnackbarValue)" }),
			". Параметр ",
			o(t.code, { children: "item" }),
			" определяет конфигурацию и поведение добавляемого уведомления."
		] }),
		"\n",
		o(i, {
			code: "\nsnackbar.value?.data.add({\ndata: {\n  label: 'Заголовок уведомления',\n  description: 'Описание происходящего события'\n}\n})\n",
			language: "typescript"
		}),
		"\n",
		o(t.h3, { children: "Структура SnackbarValue" }),
		"\n",
		o(t.p, { children: "Объект конфигурации включает следующие свойства:" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "data" }) }),
				" (",
				o(t.code, { children: "SnackbarItemProps" }),
				") — параметры для отображаемого компонента (по умолчанию ",
				o(t.code, { children: "SnackbarItem" }),
				"). Здесь передаются заголовок (",
				o(t.code, { children: "label" }),
				"), описание (",
				o(t.code, { children: "description" }),
				"), иконка (",
				o(t.code, { children: "icon" }),
				"), кнопки действий и прочие визуальные данные."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "component" }) }),
				" (",
				o(t.code, { children: "any" }),
				") — позволяет передать пользовательский Vue-компонент для рендеринга вместо стандартного ",
				o(t.code, { children: "SnackbarItem" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "highPriority" }) }),
				" (",
				o(t.code, { children: "boolean" }),
				") — при значении ",
				o(t.code, { children: "true" }),
				" уведомление отображается в отдельном приоритетном контейнере (обычно закрепленном сверху или в начале списка)."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "delay" }) }),
				" (",
				o(t.code, { children: "number" }),
				") — индивидуальное время жизни уведомления в миллисекундах. Если не указано, используется глобальное значение ",
				o(t.code, { children: "delay" }),
				" из настроек ",
				o(t.code, { children: "Snackbar" }),
				"."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: o(t.code, { children: "value" }) }),
				" (",
				o(t.code, { children: "string" }),
				") — уникальный ключ уведомления. Если не передан, генерируется автоматически. Необходим для ручного удаления сообщения через метод ",
				o(t.code, { children: "remove(value)" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Использование кастомных компонентов" }),
		"\n",
		s(t.p, { children: [
			"Для вывода уведомлений с нестандартной версткой можно передать свой компонент через свойство ",
			o(t.code, { children: "component" }),
			". При этом все свойства, указанные в объекте ",
			o(t.code, { children: "data" }),
			", будут переданы в ваш компонент как ",
			o(t.code, { children: "props" }),
			"."
		] }),
		"\n",
		o(i, {
			code: "\nimport MyAlert from './MyAlert.vue'\n\nsnackbar.value?.data.add({\ncomponent: MyAlert,\ndata: {\n  title: 'Внимание!',\n  message: 'Это сообщение в кастомном стиле'\n}\n})\n",
			language: "typescript"
		}),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "highPriority" }),
			" рекомендуется использовать для критических системных уведомлений или ошибок авторизации, чтобы они гарантированно привлекали внимание пользователя и отображались отдельно от общего потока сообщений."
		] })
	] });
}
function Xp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Yp, { ...e })
	}) : Yp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/position.en.mdx
function Zp(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Positioning" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "vertical" }),
			", ",
			o(t.code, { children: "horizontal" }),
			" and ",
			o(t.code, { children: "origin" }),
			" property group allows for determining the exact position of notifications on the screen and their entrance direction."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "vertical" }),
				" — defines the position along the vertical axis (",
				o(t.code, { children: "top" }),
				", ",
				o(t.code, { children: "bottom" }),
				")."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "horizontal" }),
				" — manages the horizontal position of notifications and their width (",
				o(t.code, { children: "right" }),
				", ",
				o(t.code, { children: "left" }),
				", ",
				o(t.code, { children: "block" }),
				")."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "origin" }),
				" — sets the direction from which the notification will slide in (",
				o(t.code, { children: "topToBottom" }),
				", ",
				o(t.code, { children: "bottomToTop" }),
				", ",
				o(t.code, { children: "rightToLeft" }),
				", ",
				o(t.code, { children: "leftToRight" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"These properties are intended solely for configuring behavior and adaptation for different screen sizes. It is recommended to define these values in the ",
				o(t.code, { children: "properties.json" }),
				" configuration file."
			] }),
			"\n"
		] })
	] });
}
function Qp(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zp, { ...e })
	}) : Zp(e);
}
//#endregion
//#region src/media/mdx/Snackbar/position.ru.mdx
function $p(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Позиционирование" }),
		"\n",
		s(t.p, { children: [
			"Группа свойств ",
			o(t.code, { children: "vertical" }),
			", ",
			o(t.code, { children: "horizontal" }),
			" и ",
			o(t.code, { children: "origin" }),
			" позволяет определить точное местоположение уведомлений на экране и направление их появления."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "vertical" }),
				" — определяет положение по вертикали (",
				o(t.code, { children: "top" }),
				", ",
				o(t.code, { children: "bottom" }),
				")."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "horizontal" }),
				" — определяет положение по горизонтали (",
				o(t.code, { children: "right" }),
				", ",
				o(t.code, { children: "left" }),
				", ",
				o(t.code, { children: "block" }),
				")."
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "origin" }),
				" — задает направление анимации появления (",
				o(t.code, { children: "topToBottom" }),
				", ",
				o(t.code, { children: "bottomToTop" }),
				", ",
				o(t.code, { children: "rightToLeft" }),
				", ",
				o(t.code, { children: "leftToRight" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Данные свойства предназначены исключительно для настройки поведения и адаптации под различные экраны. Рекомендуется задавать эти значения в конфигурационном файле ",
				o(t.code, { children: "properties.json" }),
				"."
			] }),
			"\n"
		] })
	] });
}
function em(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($p, { ...e })
	}) : $p(e);
}
//#endregion
//#region src/media/mdx/Snackbar/snackbar.en.mdx
function tm(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		o(t.p, { children: "A component used to display temporary notifications (snackbars) in various parts of the screen. Snackbars provide brief messages about app processes at the bottom or top of the screen." }),
		"\n",
		o(t.p, { children: "Snackbar manages a message queue, automatically hiding notifications after a specified time or upon user interaction." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Flexible positioning (top/bottom, left/right/block)" }),
			"\n",
			o(t.li, { children: "Configurable auto-hide delay (default 8 seconds)" }),
			"\n",
			o(t.li, { children: "Supports different entrance animations based on position" }),
			"\n",
			o(t.li, { children: "Active notification list management" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Confirming user actions (e.g., \"File saved erfolgreich\")" }),
			"\n",
			o(t.li, { children: "Informing about errors or warnings" }),
			"\n",
			o(t.li, { children: "Real-time system notifications" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst snackbar = ref(null)\n\nconst addMessage = () => {\nsnackbar.value?.data.add({\n  label: 'Notification Title',\n  description: 'Description of the event that occurred in the app.',\n  button: 'Ok'\n})\n}\n<\/script>\n\n<template>\n<Button label=\"Show Notification\" @click=\"addMessage\" />\n\n<Snackbar\n  ref=\"snackbar\"\n  vertical=\"bottom\"\n  horizontal=\"right\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "It is recommended to use Snackbar for non-critical information that does not require immediate user action." }),
			"\n"
		] })
	] });
}
function nm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(tm, { ...e })
	}) : tm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/snackbar.ru.mdx
function rm(e) {
	let t = {
		blockquote: "blockquote",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		o(t.p, { children: "Компонент для отображения временных уведомлений (снекбаров) в различных частях экрана. Снекбары используются для предоставления кратких сообщений о процессах приложения в нижней или верхней части экрана." }),
		"\n",
		o(t.p, { children: "Snackbar управляет очередью сообщений, автоматически скрывая их по истечении заданного времени или при взаимодействии пользователя." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Гибкое позиционирование (сверху/снизу, слева/справа/по центру)" }),
			"\n",
			o(t.li, { children: "Настраиваемая задержка автоматического скрытия (по умолчанию 8 секунд)" }),
			"\n",
			o(t.li, { children: "Поддержка различных анимаций появления в зависимости от позиции" }),
			"\n",
			o(t.li, { children: "Управление списком активных уведомлений" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Подтверждение действий пользователя (например, \"Файл успешно сохранен\")" }),
			"\n",
			o(t.li, { children: "Информирование об ошибках или предупреждениях" }),
			"\n",
			o(t.li, { children: "Системные уведомления в реальном времени" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst snackbar = ref(null)\n\nconst addMessage = () => {\nsnackbar.value?.data.add({\n  label: 'Заголовок уведомления',\n  description: 'Описание события, которое произошло в приложении.',\n  button: 'Ок'\n})\n}\n<\/script>\n\n<template>\n<Button label=\"Показать уведомление\" @click=\"addMessage\" />\n\n<Snackbar\n  ref=\"snackbar\"\n  vertical=\"bottom\"\n  horizontal=\"right\"\n/>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: "Рекомендуется использовать Snackbar для второстепенной информации, которая не требует немедленного обязательного действия со стороны пользователя." }),
			"\n"
		] })
	] });
}
function im(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(rm, { ...e })
	}) : rm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/event.show.en.mdx
function am(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "show" }) }),
		"\n",
		o(t.p, { children: "The event fires when a notification is displayed in the list." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "When triggered:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "A new notification has been successfully added to the list" }),
			"\n",
			o(t.li, { children: "The notification has become visible to the user" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Arguments:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "value" }),
				": ",
				o(t.code, { children: "string" }),
				" — Unique identifier of the notification"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "item" }),
				": ",
				o(t.code, { children: "SnackbarValue" }),
				" — Notification data object"
			] }),
			"\n"
		] })
	] });
}
function om(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(am, { ...e })
	}) : am(e);
}
//#endregion
//#region src/media/mdx/Snackbar/event.show.ru.mdx
function sm(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "show" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при отображении уведомления в списке." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Когда срабатывает:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Новое уведомление успешно добавлено в список" }),
			"\n",
			o(t.li, { children: "Уведомление стало видимым пользователю" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "value" }),
				": ",
				o(t.code, { children: "string" }),
				" — Уникальный идентификатор уведомления"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "item" }),
				": ",
				o(t.code, { children: "SnackbarValue" }),
				" — Объект данных уведомления"
			] }),
			"\n"
		] })
	] });
}
function cm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(sm, { ...e })
	}) : sm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/event.hide.en.mdx
function lm(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "hide" }) }),
		"\n",
		o(t.p, { children: "The event fires when a notification is hidden from the list." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "When triggered:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "The notification display time has expired (automatic hiding)" }),
			"\n",
			o(t.li, { children: "The user or program initiated the removal of the notification" }),
			"\n",
			o(t.li, { children: "The notification list has been cleared" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Arguments:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "value" }),
				": ",
				o(t.code, { children: "string" }),
				" — Unique identifier of the notification"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "item" }),
				": ",
				o(t.code, { children: "SnackbarValue" }),
				" — Notification data object"
			] }),
			"\n"
		] })
	] });
}
function um(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(lm, { ...e })
	}) : lm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/event.hide.ru.mdx
function dm(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "hide" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при скрытии уведомления из списка." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Когда срабатывает:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Время отображения уведомления истекло (автоматическое скрытие)" }),
			"\n",
			o(t.li, { children: "Пользователь или программа инициировали удаление уведомления" }),
			"\n",
			o(t.li, { children: "Список уведомлений был очищен" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "value" }),
				": ",
				o(t.code, { children: "string" }),
				" — Уникальный идентификатор уведомления"
			] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "item" }),
				": ",
				o(t.code, { children: "SnackbarValue" }),
				" — Объект данных уведомления"
			] }),
			"\n"
		] })
	] });
}
function fm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(dm, { ...e })
	}) : dm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.isItem.en.mdx
function pm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "isItem: ComputedRef<boolean>" }), " — Computed state indicating whether there are messages in the queue to be displayed."] }),
		"\n"
	] });
}
function mm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(pm, { ...e })
	}) : pm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.isItem.ru.mdx
function hm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "isItem: ComputedRef<boolean>" }), " — Вычисляемое состояние, указывающее, есть ли в очереди сообщения для отображения."] }),
		"\n"
	] });
}
function gm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(hm, { ...e })
	}) : hm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.add.en.mdx
function _m(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "add(item: SnackbarValue): void" }), " — Method for adding a new notification to the queue."] }),
		"\n"
	] });
}
function vm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_m, { ...e })
	}) : _m(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.add.ru.mdx
function ym(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "add(item: SnackbarValue): void" }), " — Метод для добавления нового уведомления в очередь."] }),
		"\n"
	] });
}
function bm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ym, { ...e })
	}) : ym(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.remove.en.mdx
function xm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "remove(value: string): void" }), " — Method for removing a notification by its identifier."] }),
		"\n"
	] });
}
function Sm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(xm, { ...e })
	}) : xm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.remove.ru.mdx
function Cm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "remove(value: string): void" }), " — Метод для удаления уведомления по его идентификатору."] }),
		"\n"
	] });
}
function wm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Cm, { ...e })
	}) : Cm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.clear.en.mdx
function Tm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "clear(): void" }), " — Method for completely clearing the notification queue."] }),
		"\n"
	] });
}
function Em(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Tm, { ...e })
	}) : Tm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/expose.clear.ru.mdx
function Dm(e) {
	let t = {
		code: "code",
		li: "li",
		ul: "ul",
		...e.components
	};
	return s(t.ul, { children: [
		"\n",
		s(t.li, { children: [o(t.code, { children: "clear(): void" }), " — Метод для полной очистки очереди уведомлений."] }),
		"\n"
	] });
}
function Om(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Dm, { ...e })
	}) : Dm(e);
}
//#endregion
//#region src/media/mdx/Snackbar/wikiMdxSnackbar.ts
var km = {
	name: "Snackbar",
	descriptions: {
		snackbar: {
			en: nm,
			ru: im
		},
		adaptation: {
			en: Wp,
			ru: Kp
		},
		add: {
			en: Jp,
			ru: Xp
		},
		position: {
			en: Qp,
			ru: em
		},
		"event.show": {
			en: om,
			ru: cm
		},
		"event.hide": {
			en: um,
			ru: fm
		},
		"expose.isItem": {
			en: mm,
			ru: gm
		},
		"expose.add": {
			en: vm,
			ru: bm
		},
		"expose.remove": {
			en: Sm,
			ru: wm
		},
		"expose.clear": {
			en: Em,
			ru: Om
		}
	}
};
//#endregion
//#region src/media/mdx/SnackbarItem/snackbarItem.en.mdx
function Am(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Description" }),
		"\n",
		s(t.p, { children: [
			"The component represents an individual notification card inside the ",
			o(t.code, { children: "Snackbar" }),
			". It is responsible for the visual presentation of a message, including titles, text, icons, and actions."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Displays labels, descriptions, and main text" }),
			"\n",
			o(t.li, { children: "Supports both leading and trailing icons" }),
			"\n",
			o(t.li, { children: "Default close button (cross)" }),
			"\n",
			o(t.li, { children: "Supports an additional action button" }),
			"\n",
			o(t.li, { children: "Flexible configuration via slots for complex content" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Displaying short text messages" }),
			"\n",
			o(t.li, { children: "Notifications with \"Undo\" or \"Retry\" buttons" }),
			"\n",
			o(t.li, { children: "Cards with status icons (Success, Error, Info)" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Basic Usage -->\n<SnackbarItem\n  label=\"Message sent successfully\"\n  icon=\"check\"\n/>\n\n<!-- With Action Button -->\n<SnackbarItem\n  description=\"Your subscription expires in 3 days.\"\n  button=\"Renew\"\n  @click=\"onRenew\"\n/>\n\n<!-- With Custom Content -->\n<SnackbarItem>\n  <div class=\"custom-content\">\n    <strong>Attention!</strong>\n    <p>An unexpected server error occurred.</p>\n  </div>\n</SnackbarItem>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"SnackbarItem is typically not used on its own but is rendered automatically by the ",
				o(t.code, { children: "Snackbar" }),
				" component based on a provided list of data."
			] }),
			"\n"
		] })
	] });
}
function jm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Am, { ...e })
	}) : Am(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/snackbarItem.ru.mdx
function Mm(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Описание" }),
		"\n",
		s(t.p, { children: [
			"Компонент представляет собой отдельную карточку уведомления внутри ",
			o(t.code, { children: "Snackbar" }),
			". Он отвечает за визуальное представление сообщения, включая заголовок, текст, иконки и действия."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение меток (label), описаний (description) и основного текста" }),
			"\n",
			o(t.li, { children: "Поддержка иконок (начальной и конечной)" }),
			"\n",
			o(t.li, { children: "Кнопка закрытия (крестик) по умолчанию" }),
			"\n",
			o(t.li, { children: "Поддержка дополнительного действия (кнопка)" }),
			"\n",
			o(t.li, { children: "Гибкая настройка через слоты для сложного контента" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение короткого текстового сообщения" }),
			"\n",
			o(t.li, { children: "Уведомление с кнопкой \"Отмена\" или \"Повторить\"" }),
			"\n",
			o(t.li, { children: "Карточка с иконкой статуса (Success, Error, Info)" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Базовое использование -->\n<SnackbarItem\n  label=\"Сообщение успешно отправлено\"\n  icon=\"check\"\n/>\n\n<!-- С кнопкой действия -->\n<SnackbarItem\n  description=\"Ваша подписка истекает через 3 дня.\"\n  button=\"Продлить\"\n  @click=\"onRenew\"\n/>\n\n<!-- С пользовательским контентом -->\n<SnackbarItem>\n  <div class=\"custom-content\">\n    <strong>Внимание!</strong>\n    <p>Произошла непредвиденная ошибка на сервере.</p>\n  </div>\n</SnackbarItem>\n</template>\n",
			language: "html"
		}),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"SnackbarItem обычно не используется самостоятельно, а рендерится автоматически компонентом ",
				o(t.code, { children: "Snackbar" }),
				" на основе переданного списка данных."
			] }),
			"\n"
		] })
	] });
}
function Nm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Mm, { ...e })
	}) : Mm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/component.en.mdx
function Pm(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Custom Component" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "component" }),
			" and ",
			o(t.code, { children: "componentProps" }),
			" properties allow you to insert a custom Vue component inside the SnackbarItem. This is useful when the standard fields (label, description) are not enough to display complex content."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "component" }), " — accepts a component object or its name."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "componentProps" }), " — an object with props that will be passed to the component."] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "The component is rendered inside a special container with the main content area class, ensuring proper padding and styling." })
	] });
}
function Fm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Pm, { ...e })
	}) : Pm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/component.ru.mdx
function Im(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Кастомный компонент" }),
		"\n",
		s(t.p, { children: [
			"Свойства ",
			o(t.code, { children: "component" }),
			" и ",
			o(t.code, { children: "componentProps" }),
			" позволяют вставлять пользовательский Vue-компонент внутрь SnackbarItem. Это полезно, когда стандартных полей (label, description) недостаточно для отображения сложного контента."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Особенности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "component" }), " — принимает объект компонента или его имя."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "componentProps" }), " — объект с входными параметрами, которые будут переданы в компонент."] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Компонент рендерится внутри специального контейнера с классом основной области контента, что обеспечивает правильные отступы и стилизацию." })
	] });
}
function Lm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Im, { ...e })
	}) : Im(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/html.en.mdx
function Rm(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		p: "p",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "HTML Content" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "html" }),
			" property allows you to insert arbitrary HTML code directly into the body of the SnackbarItem."
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"[!WARNING]\nUsing the ",
				o(t.code, { children: "html" }),
				" property is not recommended. It can be unsafe and may lead to XSS vulnerabilities. Consider using the ",
				o(t.code, { children: "component" }),
				" property or slots for safer and more flexible rendering of complex content."
			] }),
			"\n"
		] })
	] });
}
function zm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Rm, { ...e })
	}) : Rm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/html.ru.mdx
function Bm(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		p: "p",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "HTML-контент" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "html" }),
			" позволяет вставлять произвольный HTML-код непосредственно в тело SnackbarItem."
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"[!WARNING]\nИспользование свойства ",
				o(t.code, { children: "html" }),
				" не рекомендуется. Это может быть небезопасно и привести к XSS-уязвимостям. Рассмотрите возможность использования свойства ",
				o(t.code, { children: "component" }),
				" или слотов для более безопасного и гибкого рендеринга сложного содержимого."
			] }),
			"\n"
		] })
	] });
}
function Vm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Bm, { ...e })
	}) : Bm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/event.close.en.mdx
function Hm(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "close" }) }),
		"\n",
		o(t.p, { children: "The event is triggered when the element is closed (clicking the close button or programmatic closing)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "value: string | undefined" }),
				" — element identification (the value of the ",
				o(t.code, { children: "value" }),
				" property)"
			] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst onClose = (value) => {\nconsole.log('Element closed:', value)\n}\n<\/script>\n\n<template>\n<SnackbarItem value=\"item-1\" @close=\"onClose\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Um(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Hm, { ...e })
	}) : Hm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/event.close.ru.mdx
function Wm(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "close" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при закрытии элемента (нажатии на кнопку закрытия или программном закрытии)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "value: string | undefined" }),
				" — идентификатор элемента (значение свойства ",
				o(t.code, { children: "value" }),
				")"
			] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst onClose = (value) => {\nconsole.log('Элемент закрыт:', value)\n}\n<\/script>\n\n<template>\n<SnackbarItem value=\"item-1\" @close=\"onClose\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Gm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Wm, { ...e })
	}) : Wm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/role.en.mdx
function Km(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "ARIA Role" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "role" }),
			" property allows you to override the default ARIA role for the notification element. The default role is ",
			o(t.code, { children: "status" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "When to use:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "status" }), " (default) — used for messages that contain advisory information not requiring immediate action. Assistive technologies (screen readers) will announce such a message when the user is idle."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "alert" }), " — use for critical errors or warnings requiring immediate attention. Screen readers will interrupt the current task to announce this notification."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "log" }), " — use if notifications represent a sequential log of events."] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Standard notification -->\n<SnackbarItem label=\"Download complete\" role=\"status\" />\n\n<!-- Critical error -->\n<SnackbarItem label=\"Connection error!\" role=\"alert\" />\n</template>\n",
			language: "html"
		})
	] });
}
function qm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Km, { ...e })
	}) : Km(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/role.ru.mdx
function Jm(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "ARIA роль" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "role" }),
			" позволяет переопределить стандартную ARIA-роль для элемента уведомления. По умолчанию используется роль ",
			o(t.code, { children: "status" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Когда использовать:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "status" }), " (по умолчанию) — используйте для сообщений, которые содержат вспомогательную информацию, не требующую немедленного действия. Ассистивные технологии (экранные дикторы) озвучат такое сообщение, когда пользователь будет свободен."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "alert" }), " — используйте для критических ошибок или предупреждений, требующих немедленного внимания. Экранные дикторы прервут текущую задачу, чтобы озвучить это уведомление."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "log" }), " — используйте, если уведомления представляют собой последовательный лог событий."] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<template>\n<!-- Стандартное уведомление -->\n<SnackbarItem label=\"Загрузка завершена\" role=\"status\" />\n\n<!-- Критическая ошибка -->\n<SnackbarItem label=\"Ошибка соединения!\" role=\"alert\" />\n</template>\n",
			language: "html"
		})
	] });
}
function Ym(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Jm, { ...e })
	}) : Jm(e);
}
//#endregion
//#region src/media/mdx/SnackbarItem/wikiMdxSnackbarItem.ts
var Xm = {
	name: "SnackbarItem",
	descriptions: {
		snackbarItem: {
			en: jm,
			ru: Nm
		},
		component: {
			en: Fm,
			ru: Lm
		},
		html: {
			en: zm,
			ru: Vm
		},
		eventClose: {
			en: Um,
			ru: Gm
		},
		role: {
			en: qm,
			ru: Ym
		}
	}
};
//#endregion
//#region src/media/mdx/TabItem/tabItem.en.mdx
function Zm(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "A versatile component for creating tabs, menu items, and navigation links with icon and badge support." }),
		"\n",
		o(t.p, { children: "TabItem combines the functionality of a button, link, and list item. It supports various states (active, disabled), can display icons to the left and right of the text, and integrates with the Badge component to show notifications or counters. The component automatically manages ARIA attributes to ensure accessibility." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Displaying a label and icons (icon, iconTrailing)" }),
			"\n",
			o(t.li, { children: "Built-in badge support for counters" }),
			"\n",
			o(t.li, { children: "Managing selection state (selected) and activity" }),
			"\n",
			o(t.li, { children: "Navigation support via href (link) or to (router-link)" }),
			"\n",
			o(t.li, { children: "Customizable root tag (button, a, div, li)" }),
			"\n",
			o(t.li, { children: "Ripple effect on click" }),
			"\n",
			o(t.li, { children: "Skeleton support for loading state" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Tabs in navigation bars" }),
			"\n",
			o(t.li, { children: "Dropdown menu items" }),
			"\n",
			o(t.li, { children: "Selection lists (select options)" }),
			"\n",
			o(t.li, { children: "Sidebar navigation menus" }),
			"\n",
			o(t.li, { children: "Links with icons and counters" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst activeTab = ref('home')\n<\/script>\n\n<template>\n<div class=\"tabs\">\n  <TabItem\n    label=\"Home\"\n    icon=\"home\"\n    :selected=\"activeTab === 'home'\"\n    @click=\"activeTab = 'home'\"\n  />\n  <TabItem\n    label=\"Messages\"\n    icon=\"mail\"\n    badge=\"5\"\n    :selected=\"activeTab === 'messages'\"\n    @click=\"activeTab = 'messages'\"\n  />\n  <TabItem\n    label=\"Settings\"\n    icon=\"settings\"\n    disabled\n  />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Qm(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zm, { ...e })
	}) : Zm(e);
}
//#endregion
//#region src/media/mdx/TabItem/tabItem.ru.mdx
function $m(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Универсальный компонент для создания вкладок, элементов меню и навигационных ссылок с поддержкой иконок и бейджей." }),
		"\n",
		o(t.p, { children: "TabItem объединяет в себе функциональность кнопки, ссылки и элемента списка. Он поддерживает различные состояния (активное, отключенное), может отображать иконки слева и справа от текста, а также интегрируется с компонентом Badge для отображения уведомлений или счетчиков. Компонент автоматически управляет ARIA-атрибутами для обеспечения доступности." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Отображение метки (label) и иконок (icon, iconTrailing)" }),
			"\n",
			o(t.li, { children: "Встроенная поддержка бейджа (badge) для счетчиков" }),
			"\n",
			o(t.li, { children: "Управление состоянием выбора (selected) и активности" }),
			"\n",
			o(t.li, { children: "Поддержка навигации через href (ссылка) или to (router-link)" }),
			"\n",
			o(t.li, { children: "Настраиваемый корневой тег (button, a, div, li)" }),
			"\n",
			o(t.li, { children: "Эффект ряби (ripple) при клике" }),
			"\n",
			o(t.li, { children: "Поддержка скелетона (skeleton) для состояния загрузки" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Вкладки в навигационных панелях" }),
			"\n",
			o(t.li, { children: "Элементы выпадающих меню" }),
			"\n",
			o(t.li, { children: "Списки выбора (select options)" }),
			"\n",
			o(t.li, { children: "Боковое меню навигации" }),
			"\n",
			o(t.li, { children: "Ссылки с иконками и счетчиками" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst activeTab = ref('home')\n<\/script>\n\n<template>\n<TabItem\n    label=\"Главная\"\n    icon=\"home\"\n    :selected=\"activeTab === 'home'\"\n    @click=\"activeTab = 'home'\"\n  />\n</template>\n",
			language: "html"
		})
	] });
}
function eh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($m, { ...e })
	}) : $m(e);
}
//#endregion
//#region src/media/mdx/TabItem/wikiMdxTabItem.ts
var th = {
	name: "TabItem",
	descriptions: { tabItem: {
		en: Qm,
		ru: eh
	} }
};
//#endregion
//#region src/media/mdx/Tabs/tabs.en.mdx
function nh(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating tabs with navigation and animated content switching." }),
		"\n",
		o(t.p, { children: "Tabs combines a navigation bar (TabsNavigation) and a content area (MotionAxis), ensuring synchronized switching between tabs. The component supports horizontal scrolling of headers, various display styles, and content transition animations." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic synchronization of the selected tab and content" }),
			"\n",
			o(t.li, { children: "Horizontal scrolling support for a large number of tabs" }),
			"\n",
			o(t.li, { children: "Animated transitions between content panels" }),
			"\n",
			o(t.li, { children: "Flexible customization of tab appearance (icons, labels)" }),
			"\n",
			o(t.li, { children: "State management via v-model:selected" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Organizing page content by categories" }),
			"\n",
			o(t.li, { children: "Switching between different data views" }),
			"\n",
			o(t.li, { children: "Navigation within modal windows or cards" }),
			"\n",
			o(t.li, { children: "Creating step-by-step wizards" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('tab1')\nconst tabs = [\n{ text: 'Tab 1', value: 'tab1' },\n{ text: 'Tab 2', value: 'tab2' },\n{ text: 'Tab 3', value: 'tab3' }\n]\n<\/script>\n\n<template>\n<Tabs\n  v-model:selected=\"selected\"\n  :list=\"tabs\"\n>\n  <template #default=\"{ item }\">\n    <div class=\"p-4\">\n      Content for {{ item.text }}\n    </div>\n  </template>\n</Tabs>\n</template>\n",
			language: "html"
		})
	] });
}
function rh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(nh, { ...e })
	}) : nh(e);
}
//#endregion
//#region src/media/mdx/Tabs/tabs.ru.mdx
function ih(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания вкладок с навигацией и анимированным переключением контента." }),
		"\n",
		o(t.p, { children: "Tabs объединяет навигационную панель (TabsNavigation) и область контента (MotionAxis), обеспечивая синхронизированное переключение между вкладками. Компонент поддерживает горизонтальную прокрутку заголовков, различные стили отображения и анимацию смены содержимого." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическая синхронизация выбранной вкладки и контента" }),
			"\n",
			o(t.li, { children: "Поддержка горизонтальной прокрутки для большого количества вкладок" }),
			"\n",
			o(t.li, { children: "Анимированные переходы между панелями контента" }),
			"\n",
			o(t.li, { children: "Гибкая настройка внешнего вида вкладок (иконки, метки)" }),
			"\n",
			o(t.li, { children: "Управление состоянием через v-model:selected" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Организация контента на странице по категориям" }),
			"\n",
			o(t.li, { children: "Переключение между различными видами данных" }),
			"\n",
			o(t.li, { children: "Навигация внутри модальных окон или карточек" }),
			"\n",
			o(t.li, { children: "Создание пошаговых мастеров (wizards)" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selected = ref('tab1')\nconst tabs = [\n{ text: 'Вкладка 1', value: 'tab1' },\n{ text: 'Вкладка 2', value: 'tab2' },\n{ text: 'Вкладка 3', value: 'tab3' }\n]\n<\/script>\n\n<template>\n<Tabs\n  v-model:selected=\"selected\"\n  :list=\"tabs\"\n>\n  <template #default=\"{ item }\">\n    <div class=\"p-4\">\n      Контент для {{ item.text }}\n    </div>\n  </template>\n</Tabs>\n</template>\n",
			language: "html"
		})
	] });
}
function ah(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ih, { ...e })
	}) : ih(e);
}
//#endregion
//#region src/media/mdx/Tabs/v-model.en.mdx
function oh(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "State Management via v-model" }),
		"\n",
		s(t.p, { children: [
			"Two-way binding of the selected tab via ",
			o(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: any" }), " — the value of the selected tab"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\n<\/script>\n\n<template>\n<Tabs\n  v-model:selected=\"selectedTab\"\n  :tabs=\"[\n    { label: 'Home', value: 'home' },\n    { label: 'Profile', value: 'profile' }\n  ]\"\n>\n  <template #home>Home Content</template>\n  <template #profile>Profile Content</template>\n</Tabs>\n</template>\n",
			language: "html"
		})
	] });
}
function sh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(oh, { ...e })
	}) : oh(e);
}
//#endregion
//#region src/media/mdx/Tabs/v-model.ru.mdx
function ch(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		s(t.p, { children: [
			"Двусторонняя привязка выбранной вкладки через ",
			o(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: any" }), " — значение выбранной вкладки"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\n<\/script>\n\n<template>\n<Tabs\n  v-model:selected=\"selectedTab\"\n  :tabs=\"[\n    { label: 'Home', value: 'home' },\n    { label: 'Profile', value: 'profile' }\n  ]\"\n>\n  <template #home>Home Content</template>\n  <template #profile>Profile Content</template>\n</Tabs>\n</template>\n",
			language: "html"
		})
	] });
}
function lh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ch, { ...e })
	}) : ch(e);
}
//#endregion
//#region src/media/mdx/Tabs/wikiMdxTabs.ts
var uh = {
	name: "Tabs",
	descriptions: {
		tabs: {
			en: rh,
			ru: ah
		},
		"v-model": {
			en: sh,
			ru: lh
		}
	}
};
//#endregion
//#region src/media/mdx/TabsNavigation/tabsNavigation.en.mdx
function dh(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating horizontal navigation with tabs." }),
		"\n",
		o(t.p, { children: "TabsNavigation manages a list of tabs, their selection, and scrolling. It supports various display styles, keyboard control, and responsiveness." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Horizontal scrolling of tabs" }),
			"\n",
			s(t.li, { children: ["Management of the selected tab via ", o(t.code, { children: "v-model:selected" })] }),
			"\n",
			o(t.li, { children: "Support for various data types (array of objects or object)" }),
			"\n",
			o(t.li, { children: "Customization of appearance (tags, attributes, dividers)" }),
			"\n",
			o(t.li, { children: "Keyboard navigation support (arrows, Enter, Space)" }),
			"\n",
			o(t.li, { children: "Animation of the active tab indicator" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Usage Scenarios:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Navigation between page sections" }),
			"\n",
			o(t.li, { children: "Switching data display views" }),
			"\n",
			o(t.li, { children: "Content filtering by categories" }),
			"\n",
			o(t.li, { children: "Main application menu (tab style)" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\nconst tabs = [\n{ label: 'Home', value: 'home', icon: 'home' },\n{ label: 'Profile', value: 'profile', icon: 'person' },\n{ label: 'Settings', value: 'settings', icon: 'settings' }\n]\n<\/script>\n\n<template>\n<TabsNavigation\n  v-model:selected=\"selectedTab\"\n  :list=\"tabs\"\n  horizontal-scroll-align=\"center\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function fh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(dh, { ...e })
	}) : dh(e);
}
//#endregion
//#region src/media/mdx/TabsNavigation/tabsNavigation.ru.mdx
function ph(e) {
	let t = {
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания горизонтальной навигации с вкладками." }),
		"\n",
		o(t.p, { children: "TabsNavigation управляет списком вкладок, их выбором и прокруткой. Поддерживает различные стили отображения, управление с клавиатуры и адаптивность." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Горизонтальная прокрутка вкладок" }),
			"\n",
			s(t.li, { children: ["Управление выбранной вкладкой через ", o(t.code, { children: "v-model:selected" })] }),
			"\n",
			o(t.li, { children: "Поддержка различных типов данных (массив объектов или объект)" }),
			"\n",
			o(t.li, { children: "Настройка внешнего вида (теги, атрибуты, разделители)" }),
			"\n",
			o(t.li, { children: "Поддержка клавиатурной навигации (стрелки, Enter, Пробел)" }),
			"\n",
			o(t.li, { children: "Анимация индикатора активной вкладки" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Навигация между разделами страницы" }),
			"\n",
			o(t.li, { children: "Переключение видов отображения данных" }),
			"\n",
			o(t.li, { children: "Фильтрация контента по категориям" }),
			"\n",
			o(t.li, { children: "Главное меню приложения (в стиле вкладок)" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\nconst tabs = [\n{ label: 'Главная', value: 'home', icon: 'home' },\n{ label: 'Профиль', value: 'profile', icon: 'person' },\n{ label: 'Настройки', value: 'settings', icon: 'settings' }\n]\n<\/script>\n\n<template>\n<TabsNavigation\n  v-model:selected=\"selectedTab\"\n  :list=\"tabs\"\n  horizontal-scroll-align=\"center\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function mh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ph, { ...e })
	}) : ph(e);
}
//#endregion
//#region src/media/mdx/TabsNavigation/v-model.en.mdx
function hh(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "State Management via v-model" }),
		"\n",
		s(t.p, { children: [
			"Two-way binding of the selected tab via ",
			o(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number | array" }), " — value of the selected tab (or tabs)"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\nconst tabs = [\n{ label: 'Home', value: 'home' },\n{ label: 'Profile', value: 'profile' }\n]\n<\/script>\n\n<template>\n<p>Selected: {{ selectedTab }}</p>\n\n<TabsNavigation\n  v-model:selected=\"selectedTab\"\n  :list=\"tabs\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function gh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(hh, { ...e })
	}) : hh(e);
}
//#endregion
//#region src/media/mdx/TabsNavigation/v-model.ru.mdx
function _h(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		s(t.p, { children: [
			"Двусторонняя привязка выбранной вкладки через ",
			o(t.code, { children: "v-model:selected" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "selected: string | number | array" }), " — значение выбранной вкладки (или вкладок)"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst selectedTab = ref('home')\nconst tabs = [\n{ label: 'Главная', value: 'home' },\n{ label: 'Профиль', value: 'profile' }\n]\n<\/script>\n\n<template>\n<p>Выбрано: {{ selectedTab }}</p>\n\n<TabsNavigation\n  v-model:selected=\"selectedTab\"\n  :list=\"tabs\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function vh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_h, { ...e })
	}) : _h(e);
}
//#endregion
//#region src/media/mdx/TabsNavigation/wikiMdxTabsNavigation.ts
var yh = {
	name: "TabsNavigation",
	descriptions: {
		tabsNavigation: {
			en: fh,
			ru: mh
		},
		"v-model": {
			en: gh,
			ru: vh
		}
	}
};
//#endregion
//#region src/media/mdx/Textarea/autosize.en.mdx
function bh(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Automatic Resizing" }),
		"\n",
		s(t.p, { children: [
			"The ",
			o(t.code, { children: "autosize" }),
			" property controls the automatic resizing of the textarea height based on its content."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Properties:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "autosize" }),
				" — enables automatic resizing mode (default is ",
				o(t.code, { children: "true" }),
				")."
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "rows" }), " — number of visible rows (HTML attribute)."] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"When ",
			o(t.code, { children: "autosize" }),
			" is enabled, the ",
			o(t.code, { children: "Textarea" }),
			" will dynamically adjust its height to fit all entered text."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst text = ref('')\n<\/script>\n\n<template>\n<!-- Default automatic resizing -->\n<Textarea\n  v-model=\"text\"\n  label=\"Comment\"\n  placeholder=\"Enter text...\"\n/>\n\n<!-- Disabled auto-resizing -->\n<Textarea\n  v-model=\"text\"\n  label=\"Fixed size\"\n  :autosize=\"false\"\n  rows=\"5\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function xh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(bh, { ...e })
	}) : bh(e);
}
//#endregion
//#region src/media/mdx/Textarea/autosize.ru.mdx
function Sh(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Автоматическое изменение размера" }),
		"\n",
		s(t.p, { children: [
			"Свойство ",
			o(t.code, { children: "autosize" }),
			" управляет автоматическим изменением высоты текстового поля в зависимости от содержимого."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Свойства:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "autosize" }),
				" — включает режим автоматического изменения размера (по умолчанию ",
				o(t.code, { children: "true" }),
				")."
			] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "rows" }), " — количество видимых строк (атрибут HTML)."] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Когда ",
			o(t.code, { children: "autosize" }),
			" включен, ",
			o(t.code, { children: "Textarea" }),
			" будет динамически изменять свою высоту, чтобы вместить весь введенный текст."
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst text = ref('')\n<\/script>\n\n<template>\n<!-- Автоматическое изменение размера по умолчанию -->\n<Textarea\n  v-model=\"text\"\n  label=\"Комментарий\"\n  placeholder=\"Введите текст...\"\n/>\n\n<!-- Отключенное авто-изменение размера -->\n<Textarea\n  v-model=\"text\"\n  label=\"Фиксированный размер\"\n  :autosize=\"false\"\n  rows=\"5\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Ch(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Sh, { ...e })
	}) : Sh(e);
}
//#endregion
//#region src/media/mdx/Textarea/textarea.en.mdx
function wh(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Multi-line text input component with support for auto-sizing, validation, and advanced styling." }),
		"\n",
		o(t.p, { children: "Textarea provides a convenient interface for entering large amounts of text. The component automatically adjusts its height to fit the content, supports character limits, icons, labels, and helper messages. Integrates with the form validation system." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic height adjustment (autosize)" }),
			"\n",
			o(t.li, { children: "Validation support and error display" }),
			"\n",
			o(t.li, { children: "Built-in character counter" }),
			"\n",
			o(t.li, { children: "Support for icons, prefixes, and suffixes" }),
			"\n",
			o(t.li, { children: "Floating or static label" }),
			"\n",
			o(t.li, { children: "States: active, disabled, read-only, loading" }),
			"\n",
			o(t.li, { children: "Theme and size customization" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Comment and feedback fields" }),
			"\n",
			o(t.li, { children: "Contact forms" }),
			"\n",
			o(t.li, { children: "Description or biography editors" }),
			"\n",
			o(t.li, { children: "Address or note input" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst comment = ref('')\n<\/script>\n\n<template>\n<Textarea\n  v-model=\"comment\"\n  label=\"Your comment\"\n  placeholder=\"Enter text...\"\n  autosize\n  counter\n  :maxlength=\"500\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Th(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(wh, { ...e })
	}) : wh(e);
}
//#endregion
//#region src/media/mdx/Textarea/textarea.ru.mdx
function Eh(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент многострочного ввода текста с поддержкой автоматического изменения размера, валидации и расширенной стилизации." }),
		"\n",
		o(t.p, { children: "Textarea предоставляет удобный интерфейс для ввода больших объемов текста. Компонент автоматически подстраивает высоту под содержимое, поддерживает ограничение количества символов, отображение иконок, меток и вспомогательных сообщений. Интегрируется с системой валидации форм." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическое изменение высоты (autosize)" }),
			"\n",
			o(t.li, { children: "Поддержка валидации и отображение ошибок" }),
			"\n",
			o(t.li, { children: "Встроенный счетчик символов" }),
			"\n",
			o(t.li, { children: "Поддержка иконок, префиксов и суффиксов" }),
			"\n",
			o(t.li, { children: "Плавающая или статическая метка (label)" }),
			"\n",
			o(t.li, { children: "Состояния: активное, отключенное, только для чтения, загрузка" }),
			"\n",
			o(t.li, { children: "Настройка темы и размеров" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Поля для комментариев и отзывов" }),
			"\n",
			o(t.li, { children: "Формы обратной связи" }),
			"\n",
			o(t.li, { children: "Редакторы описания или биографии" }),
			"\n",
			o(t.li, { children: "Ввод адреса или заметок" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst comment = ref('')\n<\/script>\n\n<template>\n<Textarea\n  v-model=\"comment\"\n  label=\"Ваш комментарий\"\n  placeholder=\"Введите текст...\"\n  autosize\n  counter\n  :maxlength=\"500\"\n/>\n</template>\n",
			language: "html"
		})
	] });
}
function Dh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Eh, { ...e })
	}) : Eh(e);
}
//#endregion
//#region src/media/mdx/Textarea/wikiMdxTextarea.ts
var Oh = {
	name: "Textarea",
	descriptions: {
		autosize: {
			en: xh,
			ru: Ch
		},
		textarea: {
			en: Th,
			ru: Dh
		}
	}
};
//#endregion
//#region src/media/mdx/TextareaAutosize/textarea-autosize.en.mdx
function kh(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Text field component that automatically adjusts its height based on content." }),
		"\n",
		o(t.p, { children: "TextareaAutosize provides a multi-line text field that dynamically changes its height depending on the amount of entered text. The component uses a hidden clone element for precise height calculation, taking into account all padding and styles of the original textarea. This ensures smooth and natural behavior when entering text without manual height adjustment." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic height adjustment based on content" }),
			"\n",
			o(t.li, { children: "Precise size calculation considering padding and styles" }),
			"\n",
			o(t.li, { children: "Smooth height transitions on content change" }),
			"\n",
			o(t.li, { children: "Optional autosize toggle for fixed height" }),
			"\n",
			o(t.li, { children: "Support for all standard textarea attributes" }),
			"\n",
			o(t.li, { children: "Reactive value binding with input events" }),
			"\n",
			o(t.li, { children: "Optimized performance through requestAnimationFrame" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Comment and review fields" }),
			"\n",
			o(t.li, { children: "Feedback forms with long texts" }),
			"\n",
			o(t.li, { children: "Description and notes editors" }),
			"\n",
			o(t.li, { children: "Chats and messengers" }),
			"\n",
			o(t.li, { children: "Forms with dynamic content" }),
			"\n",
			o(t.li, { children: "Multi-line fields in adaptive interfaces" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst message = ref('')\n\nconst handleInput = (event) => {\nconsole.log('Current value:', event.target.value)\n}\n<\/script>\n\n<template>\n<div class=\"form\">\n  <TextareaAutosize\n    v-model=\"message\"\n    :inputAttrs=\"{\n      placeholder: 'Enter your message...',\n      maxlength: 500\n    }\"\n    @input=\"handleInput\"\n  />\n\n  <TextareaAutosize\n    value=\"Text field with fixed height\"\n    :autosize=\"false\"\n    :inputAttrs=\"{\n      placeholder: 'Height does not change',\n      rows: 3\n    }\"\n  />\n\n  <TextareaAutosize\n    :inputAttrs=\"{\n      placeholder: 'Comment',\n      'aria-label': 'Comment field',\n      required: true\n    }\"\n  />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Ah(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(kh, { ...e })
	}) : kh(e);
}
//#endregion
//#region src/media/mdx/TextareaAutosize/textarea-autosize.ru.mdx
function jh(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент текстового поля с автоматической подстройкой высоты под содержимое." }),
		"\n",
		o(t.p, { children: "TextareaAutosize предоставляет многострочное текстовое поле, которое динамически изменяет свою высоту в зависимости от объёма введённого текста. Компонент использует скрытый элемент-клон для точного расчёта необходимой высоты, учитывая все отступы и стили исходного textarea. Это обеспечивает плавное и естественное поведение при вводе текста без ручной настройки высоты." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическая подстройка высоты под содержимое" }),
			"\n",
			o(t.li, { children: "Точный расчёт размера с учётом padding и стилей" }),
			"\n",
			o(t.li, { children: "Плавные переходы высоты при изменении контента" }),
			"\n",
			o(t.li, { children: "Опциональное отключение autosize для фиксированной высоты" }),
			"\n",
			o(t.li, { children: "Поддержка всех стандартных атрибутов textarea" }),
			"\n",
			o(t.li, { children: "Реактивная привязка значения с событиями input" }),
			"\n",
			o(t.li, { children: "Оптимизированная производительность через requestAnimationFrame" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Поля для комментариев и отзывов" }),
			"\n",
			o(t.li, { children: "Формы обратной связи с длинными текстами" }),
			"\n",
			o(t.li, { children: "Редакторы описаний и заметок" }),
			"\n",
			o(t.li, { children: "Чаты и мессенджеры" }),
			"\n",
			o(t.li, { children: "Формы с динамическим контентом" }),
			"\n",
			o(t.li, { children: "Многострочные поля в адаптивных интерфейсах" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst message = ref('')\n\nconst handleInput = (event) => {\nconsole.log('Текущее значение:', event.target.value)\n}\n<\/script>\n\n<template>\n<div class=\"form\">\n  <TextareaAutosize\n    v-model=\"message\"\n    :inputAttrs=\"{\n      placeholder: 'Введите ваше сообщение...',\n      maxlength: 500\n    }\"\n    @input=\"handleInput\"\n  />\n\n  <TextareaAutosize\n    value=\"Текстовое поле с фиксированной высотой\"\n    :autosize=\"false\"\n    :inputAttrs=\"{\n      placeholder: 'Высота не изменяется',\n      rows: 3\n    }\"\n  />\n\n  <TextareaAutosize\n    :inputAttrs=\"{\n      placeholder: 'Комментарий',\n      'aria-label': 'Поле комментария',\n      required: true\n    }\"\n  />\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Mh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(jh, { ...e })
	}) : jh(e);
}
//#endregion
//#region src/media/mdx/TextareaAutosize/wikiMdxTextareaAutosize.ts
var Nh = {
	name: "TextareaAutosize",
	descriptions: { "textarea-autosize": {
		en: Ah,
		ru: Mh
	} }
};
//#endregion
//#region src/media/mdx/Tooltip/tooltip.en.mdx
function Ph(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for displaying pop-up tooltips that provide additional information about an element on hover or focus." }),
		"\n",
		o(t.p, { children: "Tooltip is automatically positioned relative to the target element and can contain a text description or custom content. The component supports configuring show and hide delays, and can be equipped with an indicator (arrow) for visual connection." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key Features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Automatic positioning" }),
			"\n",
			o(t.li, { children: "Support for an indicator (arrow)" }),
			"\n",
			o(t.li, { children: "Configuration of delays (delay, delayHide)" }),
			"\n",
			o(t.li, { children: "Visibility control via properties or events" }),
			"\n",
			o(t.li, { children: "Slot support for content customization" }),
			"\n",
			o(t.li, { children: "Adaptability and accessibility" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Typical Use Cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Explanations for icons and buttons" }),
			"\n",
			o(t.li, { children: "Displaying full text for truncated elements" }),
			"\n",
			o(t.li, { children: "Contextual hints for input fields" }),
			"\n",
			o(t.li, { children: "Additional information in the interface" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { Tooltip } from 'dxt-ui'\n<\/script>\n\n<template>\n<div class=\"p-4\">\n  <Tooltip label=\"Tooltip text\">\n    <button>Hover me</button>\n  </Tooltip>\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Fh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ph, { ...e })
	}) : Ph(e);
}
//#endregion
//#region src/media/mdx/Tooltip/tooltip.ru.mdx
function Ih(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для отображения всплывающих подсказок, предоставляющих дополнительную информацию об элементе при наведении или фокусировке." }),
		"\n",
		o(t.p, { children: "Tooltip автоматически позиционируется относительно целевого элемента и может содержать текстовое описание или произвольный контент. Компонент поддерживает настройку задержек появления и скрытия, а также может быть оснащен указателем (стрелкой) для визуальной связи." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Автоматическое позиционирование" }),
			"\n",
			o(t.li, { children: "Поддержка указателя (стрелки)" }),
			"\n",
			o(t.li, { children: "Настройка задержек (delay, delayHide)" }),
			"\n",
			o(t.li, { children: "Управление видимостью через свойства или события" }),
			"\n",
			o(t.li, { children: "Поддержка слотов для кастомизации контента" }),
			"\n",
			o(t.li, { children: "Адаптивность и доступность" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Пояснения к иконкам и кнопкам" }),
			"\n",
			o(t.li, { children: "Отображение полного текста для сокращенных элементов" }),
			"\n",
			o(t.li, { children: "Контекстные подсказки для полей ввода" }),
			"\n",
			o(t.li, { children: "Дополнительная информация в интерфейсе" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { Tooltip } from 'dxt-ui'\n<\/script>\n\n<template>\n<div class=\"p-4\">\n  <Tooltip label=\"Подсказка\">\n    <button>Наведи на меня</button>\n  </Tooltip>\n</div>\n</template>\n",
			language: "html"
		})
	] });
}
function Lh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Ih, { ...e })
	}) : Ih(e);
}
//#endregion
//#region src/media/mdx/Tooltip/event.tooltip.en.mdx
function Rh(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "tooltip" }) }),
		"\n",
		o(t.p, { children: "The event is triggered when the visibility state changes (open/close)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "open: boolean" }),
				" — open state (",
				o(t.code, { children: "true" }),
				" - open, ",
				o(t.code, { children: "false" }),
				" - closed)"
			] }),
			"\n"
		] })
	] });
}
function zh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Rh, { ...e })
	}) : Rh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/event.tooltip.ru.mdx
function Bh(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "tooltip" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния видимости (открытие/закрытие)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "open: boolean" }),
				" — состояние открытия (",
				o(t.code, { children: "true" }),
				" - открыто, ",
				o(t.code, { children: "false" }),
				" - закрыто)"
			] }),
			"\n"
		] })
	] });
}
function Vh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Bh, { ...e })
	}) : Bh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/slot.control.en.mdx
function Hh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "control(props: TooltipControlItem): any" }), " — Slot for the control element that triggers the tooltip."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "TooltipControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — open state."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: object" }), " — properties for the control element (class, onclick, onmouseover, onmouseout)."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Uh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Hh, { ...e })
	}) : Hh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/slot.control.ru.mdx
function Wh(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "control(props: TooltipControlItem): any" }), " — Слот для элемента управления, вызывающего подсказку."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "TooltipControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — состояние открытия."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: object" }), " — свойства для элемента управления (class, onclick, onmouseover, onmouseout)."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function Gh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Wh, { ...e })
	}) : Wh(e);
}
//#endregion
//#region src/media/mdx/Tooltip/wikiMdxTooltip.ts
var Kh = {
	name: "Tooltip",
	descriptions: {
		tooltip: {
			en: Fh,
			ru: Lh
		},
		"event.tooltip": {
			en: zh,
			ru: Vh
		},
		"slot.control": {
			en: Uh,
			ru: Gh
		}
	}
};
//#endregion
//#region src/media/mdx/Window/axis.en.mdx
function qh(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Positioning Direction (axis)" }),
		"\n",
		s(t.p, { children: [
			"Controls the axis of window placement relative to the anchor element. Default: ",
			o(t.code, { children: "y" }),
			"."
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Applies only in menu mode (",
				o(t.code, { children: "adaptive=\"menu\"" }),
				" or ",
				o(t.code, { children: "adaptive=\"menuWindow\"" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Possible values:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'x'" }), " — horizontal axis (left or right of anchor)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'y'" }), " — vertical axis (top or bottom of anchor)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'on'" }), " — over anchor (window centers on element)"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Behavior" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Component automatically selects the placement side with the most available space" }),
			"\n",
			s(t.li, { children: [
				"When using context menu (",
				o(t.code, { children: "contextmenu" }),
				"), positioning occurs from cursor coordinates"
			] }),
			"\n",
			o(t.li, { children: "Window always stays within visible screen area (viewport)" }),
			"\n",
			s(t.li, { children: [
				"Indent from anchor is set via ",
				o(t.code, { children: "indent" }),
				" property (default 4px)"
			] }),
			"\n"
		] })
	] });
}
function Jh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(qh, { ...e })
	}) : qh(e);
}
//#endregion
//#region src/media/mdx/Window/axis.ru.mdx
function Yh(e) {
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
	return s(a, { children: [
		o(t.h2, { children: "Направление позиционирования (axis)" }),
		"\n",
		s(t.p, { children: [
			"Управляет осью размещения окна относительно элемента-якоря. По умолчанию: ",
			o(t.code, { children: "y" }),
			"."
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			s(t.p, { children: [
				"Применяется только в режиме меню (",
				o(t.code, { children: "adaptive=\"menu\"" }),
				" или ",
				o(t.code, { children: "adaptive=\"menuWindow\"" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Возможные значения:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "'x'" }), " — горизонтальная ось (слева или справа от якоря)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'y'" }), " — вертикальная ось (сверху или снизу от якоря)"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "'on'" }), " — поверх якоря (окно центрируется над элементом)"] }),
			"\n"
		] }),
		"\n",
		o(t.h3, { children: "Поведение" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Компонент автоматически выбирает сторону размещения с наибольшим доступным пространством" }),
			"\n",
			s(t.li, { children: [
				"При использовании контекстного меню (",
				o(t.code, { children: "contextmenu" }),
				") позиционирование происходит от координат курсора"
			] }),
			"\n",
			o(t.li, { children: "Окно всегда остается в пределах видимой области экрана (viewport)" }),
			"\n",
			s(t.li, { children: [
				"Отступ от якоря задается через свойство ",
				o(t.code, { children: "indent" }),
				" (по умолчанию 4px)"
			] }),
			"\n"
		] })
	] });
}
function Xh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Yh, { ...e })
	}) : Yh(e);
}
//#endregion
//#region src/media/mdx/Window/classes.en.mdx
function Zh(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "CSS Classes for Behavior Control" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--block" }), " — prevents window from closing when clicking outside its boundaries"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--blockChildren" }), " — prevents current window from closing"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--blockOther" }), " — prevents other windows from closing until current one is closed"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--close" }), " — applies to elements for closing the window"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--controlOpenOnly" }), " — applies to control elements that only open the window"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--controlStatic" }), " — applies to control elements in static mode"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--static" }), " — applies to elements inside window, canceling all actions"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Where ",
			o(t.code, { children: "*" }),
			" is the component class name (e.g., ",
			o(t.code, { children: "d1-window" }),
			", ",
			o(t.code, { children: "m3-window" }),
			")."
		] })
	] });
}
function Qh(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Zh, { ...e })
	}) : Zh(e);
}
//#endregion
//#region src/media/mdx/Window/classes.ru.mdx
function $h(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "CSS классы для управления поведением" }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--block" }), " — предотвращает закрытие окна при клике вне его границ"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--blockChildren" }), " — предотвращает закрытие текущего окна"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--blockOther" }), " — предотвращает закрытие других окон до закрытия текущего"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--close" }), " — применяется к элементам для закрытия окна"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--controlOpenOnly" }), " — применяется к элементам управления, которые только открывают окно"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--controlStatic" }), " — применяется к элементам управления в статическом режиме"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "*--static" }), " — применяется к элементам внутри окна, отменяя все действия"] }),
			"\n"
		] }),
		"\n",
		s(t.p, { children: [
			"Где ",
			o(t.code, { children: "*" }),
			" — название класса компонента (например, ",
			o(t.code, { children: "d1-window" }),
			", ",
			o(t.code, { children: "m3-window" }),
			")."
		] })
	] });
}
function eg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o($h, { ...e })
	}) : $h(e);
}
//#endregion
//#region src/media/mdx/Window/event.window.en.mdx
function tg(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "window" }) }),
		"\n",
		o(t.p, { children: "Event fires when the window state changes (open/close)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "options: WindowEmitOptions" }), " — object with window data"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "WindowEmitOptions structure:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "id: string" }), " — unique window identifier"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "element: HTMLDivElement" }), " — window DOM element"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "control: HTMLElement" }), " — control DOM element"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "open: boolean" }),
				" — window open state (",
				o(t.code, { children: "true" }),
				" - open, ",
				o(t.code, { children: "false" }),
				" - closed)"
			] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleWindow = (options) => {\nconsole.log('Window ID:', options.id)\nconsole.log('Window is open:', options.open)\nconsole.log('Window element:', options.element)\nconsole.log('Control element:', options.control)\n}\n<\/script>\n\n<template>\n<Component @window=\"handleWindow\">\n  <template #default>\n    <p>Window content</p>\n  </template>\n</Component>\n</template>\n",
			language: "html"
		})
	] });
}
function ng(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(tg, { ...e })
	}) : tg(e);
}
//#endregion
//#region src/media/mdx/Window/event.window.ru.mdx
function rg(e) {
	let t = {
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h3, { children: o(t.code, { children: "window" }) }),
		"\n",
		o(t.p, { children: "Событие срабатывает при изменении состояния окна (открытие/закрытие)." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "options: WindowEmitOptions" }), " — объект с данными окна"] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Структура WindowEmitOptions:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "id: string" }), " — уникальный идентификатор окна"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "element: HTMLDivElement" }), " — DOM элемент окна"] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "control: HTMLElement" }), " — DOM элемент управления"] }),
			"\n",
			s(t.li, { children: [
				o(t.code, { children: "open: boolean" }),
				" — состояние открытия окна (",
				o(t.code, { children: "true" }),
				" - открыто, ",
				o(t.code, { children: "false" }),
				" - закрыто)"
			] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nconst handleWindow = (options) => {\nconsole.log('ID окна:', options.id)\nconsole.log('Окно открыто:', options.open)\nconsole.log('Элемент окна:', options.element)\nconsole.log('Элемент управления:', options.control)\n}\n<\/script>\n\n<template>\n<Component @window=\"handleWindow\">\n  <template #default>\n    <p>Содержимое окна</p>\n  </template>\n</Component>\n</template>\n",
			language: "html"
		})
	] });
}
function ig(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(rg, { ...e })
	}) : rg(e);
}
//#endregion
//#region src/media/mdx/Window/expose.en.mdx
function ag(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "id: string" }), " — Unique identifier of the window."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — Reactive state of window visibility."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "control: WindowControlItem" }), " — Control item data for window management."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "WindowControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — reactive open state."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "class: string" }), " — window CSS class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onclick: WindowEventClick" }), " — click event handler."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onKeydown: WindowEventClick" }), " — keydown event handler."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "oncontextmenu: WindowEventClick" }), " — context menu event handler."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classesWindow: WindowClassesList" }), " — list of CSS classes for window styling."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: Record<string, any>" }), " — binding properties for the control element."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "setOpen(open: boolean): Promise<void>" }), " — Sets window open state."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "toOpen(): Promise<void>" }), " — Transition to opening state."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "toClose(): Promise<void>" }), " — Transition to closing state."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "toggle(): Promise<void>" }), " — Toggles window visibility (opens if closed, closes if open)."] }),
			"\n"
		] })
	] });
}
function og(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(ag, { ...e })
	}) : ag(e);
}
//#endregion
//#region src/media/mdx/Window/expose.ru.mdx
function sg(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "id: string" }), " — Уникальный идентификатор окна."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — Реактивное состояние видимости окна."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "control: WindowControlItem" }), " — Данные элемента управления для управления окном."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "WindowControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — реактивное состояние открытия."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "class: string" }), " — CSS-класс окна."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onclick: WindowEventClick" }), " — обработчик события клика."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onKeydown: WindowEventClick" }), " — обработчик события нажатия клавиши."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "oncontextmenu: WindowEventClick" }), " — обработчик события контекстного меню."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classesWindow: WindowClassesList" }), " — список CSS-классов для стилизации окна."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: Record<string, any>" }), " — свойства привязки для элемента управления."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "setOpen(open: boolean): Promise<void>" }), " — Устанавливает состояние открытия окна."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "toOpen(): Promise<void>" }), " — Переход в состояние открытия окна."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "toClose(): Promise<void>" }), " — Переход в состояние закрытия окна."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "toggle(): Promise<void>" }), " — Переключает видимость окна (открывает, если закрыто, и закрывает, если открыто)."] }),
			"\n"
		] })
	] });
}
function cg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(sg, { ...e })
	}) : sg(e);
}
//#endregion
//#region src/media/mdx/Window/hooks.en.mdx
function lg(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		strong: "strong",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Lifecycle Hooks" }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "preparation" }) }),
		"\n",
		o(t.p, { children: "Called before the opening/closing process begins. Used for preparing elements and data." }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Type:" }),
			" ",
			o(t.code, { children: "() => void | Promise<void>" })
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "beforeOpening" }) }),
		"\n",
		s(t.p, { children: [
			"Called before opening the window. Returning ",
			o(t.code, { children: "false" }),
			" cancels opening."
		] }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Type:" }),
			" ",
			o(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "beforeClosing" }) }),
		"\n",
		s(t.p, { children: [
			"Called before closing the window. Returning ",
			o(t.code, { children: "false" }),
			" cancels closing."
		] }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Type:" }),
			" ",
			o(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "opening" }) }),
		"\n",
		o(t.p, { children: "Called after the window finishes opening (after animation)." }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Type:" }),
			" ",
			o(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "closing" }) }),
		"\n",
		o(t.p, { children: "Called after the window finishes closing (after animation)." }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Type:" }),
			" ",
			o(t.code, { children: "() => boolean | Promise<boolean>" })
		] })
	] });
}
function ug(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(lg, { ...e })
	}) : lg(e);
}
//#endregion
//#region src/media/mdx/Window/hooks.ru.mdx
function dg(e) {
	let t = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		strong: "strong",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Хуки жизненного цикла" }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "preparation" }) }),
		"\n",
		o(t.p, { children: "Вызывается перед началом процесса открытия/закрытия. Используется для подготовки элементов и данных." }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Тип:" }),
			" ",
			o(t.code, { children: "() => void | Promise<void>" })
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "beforeOpening" }) }),
		"\n",
		s(t.p, { children: [
			"Вызывается перед открытием окна. Возврат ",
			o(t.code, { children: "false" }),
			" отменяет открытие."
		] }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Тип:" }),
			" ",
			o(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "beforeClosing" }) }),
		"\n",
		s(t.p, { children: [
			"Вызывается перед закрытием окна. Возврат ",
			o(t.code, { children: "false" }),
			" отменяет закрытие."
		] }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Тип:" }),
			" ",
			o(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "opening" }) }),
		"\n",
		o(t.p, { children: "Вызывается после завершения открытия окна (после анимации)." }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Тип:" }),
			" ",
			o(t.code, { children: "() => boolean | Promise<boolean>" })
		] }),
		"\n",
		o(t.h3, { children: o(t.code, { children: "closing" }) }),
		"\n",
		o(t.p, { children: "Вызывается после завершения закрытия окна (после анимации)." }),
		"\n",
		s(t.p, { children: [
			o(t.strong, { children: "Тип:" }),
			" ",
			o(t.code, { children: "() => boolean | Promise<boolean>" })
		] })
	] });
}
function fg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(dg, { ...e })
	}) : dg(e);
}
//#endregion
//#region src/media/mdx/Window/slots.en.mdx
function pg(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "control(props: WindowControlItem): any" }), " — Slot for placing window control elements (close buttons, minimize, etc.)."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "title(props: WindowControlItem): any" }), " — Slot for placing window title in the header."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "footer(props: WindowControlItem): any" }), " — Slot for placing content at the bottom of the window (action buttons, info, etc.)."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "default(props: WindowControlItem): any" }), " — Main slot for placing the primary window content."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "WindowControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — reactive open state."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "class: string" }), " — window CSS class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onclick: WindowEventClick" }), " — click event handler."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onKeydown: WindowEventClick" }), " — keydown event handler."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "oncontextmenu: WindowEventClick" }), " — context menu event handler."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classesWindow: WindowClassesList" }), " — list of CSS classes for window styling."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: Record<string, any>" }), " — binding properties for the control element."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "WindowClassesList:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "block: string" }), " — main block class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "blockChildren: string" }), " — block children class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "blockOther: string" }), " — block other windows class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "close: string" }), " — close button class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "static: string" }), " — static positioning class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "control: string" }), " — control element class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "controlId: string" }), " — control ID class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "controlStatic: string" }), " — static control class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "controlOpenOnly: string" }), " — open-only control class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "controlActive: string" }), " — active control class."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "persistent: string" }), " — persistent window class."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "WindowEventClick:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "(event: MouseEvent & TouchEvent | KeyboardEvent) => Promise<void>" }), " — window event click handler."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function mg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(pg, { ...e })
	}) : pg(e);
}
//#endregion
//#region src/media/mdx/Window/slots.ru.mdx
function hg(e) {
	let t = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "control(props: WindowControlItem): any" }), " — Слот управления для размещения элементов управления окном (кнопки закрытия, сворачивания и т.д.)."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "title(props: WindowControlItem): any" }), " — Слот заголовка для размещения заголовка окна в шапке."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "footer(props: WindowControlItem): any" }), " — Слот подвала для размещения содержимого в нижней части окна (кнопки действий, инфо и т.д.)."] }),
			"\n",
			s(t.li, { children: [o(t.code, { children: "default(props: WindowControlItem): any" }), " — Основной слот для размещения главного содержимого окна."] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "WindowControlItem:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "open: Ref<boolean>" }), " — реактивное состояние открытия."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "class: string" }), " — CSS-класс окна."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onclick: WindowEventClick" }), " — обработчик события клика."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "onKeydown: WindowEventClick" }), " — обработчик события нажатия клавиши."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "oncontextmenu: WindowEventClick" }), " — обработчик события контекстного меню."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "classesWindow: WindowClassesList" }), " — список CSS-классов для стилизации окна."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "binds: Record<string, any>" }), " — свойства привязки для элемента управления."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "WindowClassesList:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "block: string" }), " — основной класс блока."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "blockChildren: string" }), " — класс дочерних элементов блока."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "blockOther: string" }), " — класс блокировки других окон."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "close: string" }), " — класс кнопки закрытия."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "static: string" }), " — класс статического позиционирования."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "control: string" }), " — класс элемента управления."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "controlId: string" }), " — класс ID управления."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "controlStatic: string" }), " — класс статического управления."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "controlOpenOnly: string" }), " — класс управления только для открытого состояния."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "controlActive: string" }), " — класс активного управления."] }),
				"\n",
				s(t.li, { children: [o(t.code, { children: "persistent: string" }), " — класс постоянного окна."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		s(t.blockquote, { children: [
			"\n",
			o(t.p, { children: o(t.strong, { children: "WindowEventClick:" }) }),
			"\n",
			s(t.ul, { children: [
				"\n",
				s(t.li, { children: [o(t.code, { children: "(event: MouseEvent & TouchEvent | KeyboardEvent) => Promise<void>" }), " — обработчик события клика окна."] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function gg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(hg, { ...e })
	}) : hg(e);
}
//#endregion
//#region src/media/mdx/Window/staticMode.en.mdx
function _g(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Static Mode (staticMode)" }),
		"\n",
		s(t.p, { children: [
			"The Window component supports static mode operation through the ",
			o(t.code, { children: "staticMode" }),
			" property. In this mode, the window works as an embedded component without modal behavior:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Content displays immediately" }), " - window is not hidden and doesn't require activation"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Animations disabled" }), " - no appearance/disappearance effects"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Positioning disabled" }), " - window is embedded in document flow"] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Works with adaptive" }),
				" - when ",
				o(t.code, { children: "adaptive" }),
				" property has one of static mode values (for example, ",
				o(t.code, { children: "static" }),
				"), static mode is enabled"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Static mode is especially useful for embedding window content directly into the interface without modal behavior." })
	] });
}
function vg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(_g, { ...e })
	}) : _g(e);
}
//#endregion
//#region src/media/mdx/Window/staticMode.ru.mdx
function yg(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Статический режим (staticMode)" }),
		"\n",
		s(t.p, { children: [
			"Компонент Window поддерживает статический режим работы через свойство ",
			o(t.code, { children: "staticMode" }),
			". В этом режиме окно работает как встроенный компонент без модального поведения:"
		] }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Содержимое отображается сразу" }), " - окно не скрывается и не требует активации"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Отключены анимации" }), " - нет эффектов появления/исчезновения"] }),
			"\n",
			s(t.li, { children: [o(t.strong, { children: "Отключено позиционирование" }), " - окно встраивается в поток документа"] }),
			"\n",
			s(t.li, { children: [
				o(t.strong, { children: "Работает с adaptive" }),
				" - когда свойство ",
				o(t.code, { children: "adaptive" }),
				" имеет один из статичных режимов (например, ",
				o(t.code, { children: "static" }),
				"), включается статичный режим"
			] }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: "Статический режим особенно полезен для встраивания содержимого окна непосредственно в интерфейс без модального поведения." })
	] });
}
function bg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(yg, { ...e })
	}) : yg(e);
}
//#endregion
//#region src/media/mdx/Window/v-model.en.mdx
function xg(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "State Management via v-model" }),
		"\n",
		s(t.p, { children: [
			"Two-way binding of window open state via ",
			o(t.code, { children: "v-model:open" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Parameters:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "open: boolean" }), " — window open state"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Open</button>\n\n<Window v-model:open=\"isOpen\">\n  <template #default>\n    <p>Window content</p>\n    <button @click=\"isOpen = false\">Close</button>\n  </template>\n</Window>\n</template>\n",
			language: "html"
		})
	] });
}
function Sg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(xg, { ...e })
	}) : xg(e);
}
//#endregion
//#region src/media/mdx/Window/v-model.ru.mdx
function Cg(e) {
	let t = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.h2, { children: "Управление состоянием через v-model" }),
		"\n",
		s(t.p, { children: [
			"Двусторонняя привязка состояния открытия окна через ",
			o(t.code, { children: "v-model:open" }),
			"."
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Параметры:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			s(t.li, { children: [o(t.code, { children: "open: boolean" }), " — состояние открытия окна"] }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Открыть</button>\n\n<Window v-model:open=\"isOpen\">\n  <template #default>\n    <p>Содержимое окна</p>\n    <button @click=\"isOpen = false\">Закрыть</button>\n  </template>\n</Window>\n</template>\n",
			language: "html"
		})
	] });
}
function wg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Cg, { ...e })
	}) : Cg(e);
}
//#endregion
//#region src/media/mdx/Window/window.en.mdx
function Tg(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Component for creating modal windows, dialogs, and popup elements with flexible positioning and adaptive behavior." }),
		"\n",
		o(t.p, { children: "Window manages content display on top of the main interface, supports various positioning types (modal windows, dropdown menus, action sheets), open/close animations, and event system integration. The component automatically handles outside clicks, focus management, and adaptation to different screen sizes." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Key features:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Flexible positioning (center, edges, screen corners)" }),
			"\n",
			o(t.li, { children: "Adaptive modes (modal, menu, actionSheet, static)" }),
			"\n",
			o(t.li, { children: "Open/close animations with origin customization" }),
			"\n",
			o(t.li, { children: "State management via v-model or expose methods" }),
			"\n",
			o(t.li, { children: "Scrollbar integration for scrollable content" }),
			"\n",
			o(t.li, { children: "Background interaction blocking (persistent mode)" }),
			"\n",
			o(t.li, { children: "Window lifecycle events" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Common use cases:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Modal windows for forms and confirmations" }),
			"\n",
			o(t.li, { children: "Dropdown menus and context menus" }),
			"\n",
			o(t.li, { children: "Side panels and drawer components" }),
			"\n",
			o(t.li, { children: "Action sheets for mobile interfaces" }),
			"\n",
			o(t.li, { children: "Tooltips and dialogs" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n\nconst handleWindow = (options) => {\nconsole.log('Window state:', options.open ? 'open' : 'closed')\n}\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Open Window</button>\n\n<Window\n  v-model:open=\"isOpen\"\n  adaptive=\"modal\"\n  @window=\"handleWindow\"\n>\n  <template #title>\n    <h2>Window Title</h2>\n  </template>\n\n  <template #default>\n    <p>Modal window content</p>\n  </template>\n\n  <template #footer>\n    <button @click=\"isOpen = false\">Close</button>\n  </template>\n</Window>\n</template>\n",
			language: "html"
		})
	] });
}
function Eg(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Tg, { ...e })
	}) : Tg(e);
}
//#endregion
//#region src/media/mdx/Window/window.ru.mdx
function Dg(e) {
	let t = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return s(a, { children: [
		o(t.p, { children: "Компонент для создания модальных окон, диалогов и всплывающих элементов с гибким позиционированием и адаптивным поведением." }),
		"\n",
		o(t.p, { children: "Window управляет отображением контента поверх основного интерфейса, поддерживает различные типы позиционирования (модальные окна, выпадающие меню, action sheets), анимации открытия/закрытия и интеграцию с системой событий. Компонент автоматически обрабатывает клики вне области, управление фокусом и адаптацию под различные размеры экранов." }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Основные возможности:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Гибкое позиционирование (центр, края, углы экрана)" }),
			"\n",
			o(t.li, { children: "Адаптивные режимы (modal, menu, actionSheet, static)" }),
			"\n",
			o(t.li, { children: "Анимации открытия/закрытия с настройкой origin" }),
			"\n",
			o(t.li, { children: "Управление состоянием через v-model или expose методы" }),
			"\n",
			o(t.li, { children: "Интеграция со Scrollbar для прокручиваемого контента" }),
			"\n",
			o(t.li, { children: "Блокировка взаимодействия с фоном (persistent режим)" }),
			"\n",
			o(t.li, { children: "События жизненного цикла окна" }),
			"\n"
		] }),
		"\n",
		o(t.p, { children: o(t.strong, { children: "Типичные сценарии использования:" }) }),
		"\n",
		s(t.ul, { children: [
			"\n",
			o(t.li, { children: "Модальные окна для форм и подтверждений" }),
			"\n",
			o(t.li, { children: "Выпадающие меню и контекстные меню" }),
			"\n",
			o(t.li, { children: "Боковые панели и drawer компоненты" }),
			"\n",
			o(t.li, { children: "Action sheets для мобильных интерфейсов" }),
			"\n",
			o(t.li, { children: "Всплывающие подсказки и диалоги" }),
			"\n"
		] }),
		"\n",
		o(i, {
			code: "\n<script setup>\nimport { ref } from 'vue'\n\nconst isOpen = ref(false)\n\nconst handleWindow = (options) => {\nconsole.log('Состояние окна:', options.open ? 'открыто' : 'закрыто')\n}\n<\/script>\n\n<template>\n<button @click=\"isOpen = true\">Открыть окно</button>\n\n<Window\n  v-model:open=\"isOpen\"\n  adaptive=\"modal\"\n  @window=\"handleWindow\"\n>\n  <template #title>\n    <h2>Заголовок окна</h2>\n  </template>\n\n  <template #default>\n    <p>Содержимое модального окна</p>\n  </template>\n\n  <template #footer>\n    <button @click=\"isOpen = false\">Закрыть</button>\n  </template>\n</Window>\n</template>\n",
			language: "html"
		})
	] });
}
function Og(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? o(t, {
		...e,
		children: o(Dg, { ...e })
	}) : Dg(e);
}
//#endregion
//#region src/media/mdx/wikiMdx.ts
var kg = [
	Ee,
	qe,
	Vt,
	an,
	En,
	Fn,
	Wn,
	rr,
	fr,
	Nr,
	Rr,
	ai,
	Si,
	ji,
	Qi,
	sa,
	ba,
	Na,
	Ha,
	ao,
	uo,
	Io,
	Go,
	Xo,
	as,
	us,
	hs,
	bs,
	Ns,
	Rs,
	Ks,
	Tc,
	Xc,
	pl,
	Sl,
	Fl,
	Bl,
	ju,
	od,
	hd,
	Bd,
	wf,
	kf,
	Xf,
	tp,
	mp,
	yp,
	wp,
	kp,
	Hp,
	km,
	Xm,
	th,
	uh,
	yh,
	Oh,
	Nh,
	Kh,
	{
		name: "Window",
		descriptions: {
			axis: {
				en: Jh,
				ru: Xh
			},
			classes: {
				en: Qh,
				ru: eg
			},
			"event.window": {
				en: ng,
				ru: ig
			},
			expose: {
				en: og,
				ru: cg
			},
			hooks: {
				en: ug,
				ru: fg
			},
			slots: {
				en: mg,
				ru: gg
			},
			staticMode: {
				en: vg,
				ru: bg
			},
			"v-model": {
				en: Sg,
				ru: wg
			},
			window: {
				en: Eg,
				ru: Og
			}
		}
	}
], Ag = class {
	constructor(n) {
		e(this, "item", void 0), e(this, "mdx", void 0), this.item = t.find((e) => e.name === n), this.mdx = kg.find((e) => e.name === n);
	}
	getItem() {
		return this.item;
	}
	getDescriptionByType(e) {
		var t;
		let r = (t = this.mdx) == null || (t = t.descriptions) == null ? void 0 : t[e];
		return ee(r ? te(r) ? r[n.getLanguage()] : r : "");
	}
}, jg = ({ componentName: e, type: t }) => new Ag(e).getDescriptionByType(t);
//#endregion
export { jg as StorybookDescriptions, ae as StorybookMain };
