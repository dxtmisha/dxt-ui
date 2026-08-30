import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ResumableTimer - Таймер с паузой`}),`
`,(0,c.jsx)(t.h1,{id:`класс-resumabletimer`,children:`Класс ResumableTimer`}),`
`,(0,c.jsx)(t.p,{children:`Класс для создания таймера, который можно приостанавливать, возобновлять, сбрасывать и очищать. Он полезен для элементов интерфейса, которым необходимо отслеживать прошедшее время даже при прерывании, таких как прогресс-бары, автоматически закрывающиеся уведомления или слайды.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Пауза и возобновление`}),` — останавливает обратный отсчет и продолжает его позже с точностью до миллисекунды.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отслеживание завершения`}),` — явно отслеживает, закончил ли таймер свое выполнение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Надежная логика`}),` — обрабатывает крайние случаи, такие как возобновление, когда время уже истекло.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fluent Interface`}),` — методы возвращают `,(0,c.jsx)(t.code,{children:`this`}),`, что позволяет использовать цепочки вызовов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`ResumableTimer(callback, delay, blockStart)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: FunctionVoid`}),` — функция, которая будет вызвана после задержки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay: number = 320`}),` — задержка в миллисекундах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`blockStart: boolean = false`}),` — если true, таймер не запустится сразу.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ResumableTimer } from '@dxtmisha/functional-basic'

// 1. Базовая инициализация (запускается сразу)
const timer = new ResumableTimer(() => {
  console.log('Таймер завершен!')
}, 5000)

// 2. Инициализация без немедленного запуска
const delayedTimer = new ResumableTimer(
  () => console.log('Задача запущена!'),
  3000,
  true
)

delayedTimer.resume() // Запуск вручную
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resume(): this`}),` — Запускает или возобновляет таймер.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pause(): this`}),` — Приостанавливает таймер и вычисляет оставшееся время.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): this`}),` — Полностью сбрасывает текущее состояние и перезапускает таймер с исходной задержкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clear(): this`}),` — Полностью останавливает таймер и сбрасывает все внутренние состояния.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};