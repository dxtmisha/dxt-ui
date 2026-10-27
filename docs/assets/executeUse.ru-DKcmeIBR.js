import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/executeUse - Синглтон с управлением жизненным циклом`}),`
`,(0,c.jsx)(t.h1,{id:`executeuse`,children:(0,c.jsx)(t.code,{children:`executeUse`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`executeUse`}),` — это фабрика, которая оборачивает любую функцию-инициализатор и превращает её результат в `,(0,c.jsx)(t.strong,{children:`управляемый синглтон`}),`. Объект создаётся ровно один раз, замораживается (`,(0,c.jsx)(t.code,{children:`Object.freeze`}),`) и переиспользуется при каждом последующем вызове. В зависимости от выбранного типа синглтон может быть компонентным, глобальным или локальным.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Для обеспечения уникальности идентификаторов используется сочетание внутреннего глобального кода и функции `,(0,c.jsx)(t.code,{children:`getElementId()`}),`, что гарантирует отсутствие коллизий даже при множественном использовании в разных модулях.`]}),`
`,(0,c.jsx)(t.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`R extends object | void`}),` — обычный объект-контейнер, возвращаемый инициализатором, либо `,(0,c.jsx)(t.code,{children:`void`}),` для инициализации без результата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`O extends unknown[]`}),` — типы аргументов, которые принимает `,(0,c.jsx)(t.code,{children:`callback`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`RI extends ExecuteUseReturn<R>`}),` — результирующий тип синглтона, включающий методы управления.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function executeUse<R extends object | void, O extends unknown[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R extends object | void>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (...args: O) => R`}),` — Функция-инициализатор. Вызывается при первом обращении и возвращает объект, который будет заморожен и закеширован. Аргументы передаются только при первом вызове.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: ExecuteUseType`}),` — Тип синглтона (по умолчанию `,(0,c.jsx)(t.code,{children:`ExecuteUseType.provide`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ExecuteUseReturn<R>`}),` — замороженный объект, расширяющий `,(0,c.jsx)(t.code,{children:`R`}),` следующими методами:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): Readonly<R>`}),` — возвращает исходный результат `,(0,c.jsx)(t.code,{children:`callback`}),` без методов управления (`,(0,c.jsx)(t.code,{children:`init`}),`, `,(0,c.jsx)(t.code,{children:`destroyExecute`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`destroyExecute?(): void`}),` — только у `,(0,c.jsx)(t.code,{children:`local`}),` и `,(0,c.jsx)(t.code,{children:`global`}),`. Сбрасывает кеш, позволяя пересоздать объект при следующем вызове.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`экземпляры-классов-внутри-контейнера`,children:`Экземпляры классов внутри контейнера`}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращайте обычный объект с собственными перечислимыми свойствами либо `,(0,c.jsx)(t.code,{children:`void`}),`, если фабрика нужна только для инициализации. Управляющая оболочка копирует поля контейнера. Прямой возврат экземпляра класса не поддерживается: проверка во время выполнения выбрасывает `,(0,c.jsx)(t.code,{children:`TypeError`}),`, предотвращая молчаливую потерю методов прототипа.`]}),`
`,(0,c.jsx)(t.p,{children:`Тип контейнера можно объявить через именованный интерфейс; индексная сигнатура не требуется. TypeScript использует структурную типизацию, поэтому требование обычного объекта проверяется во время выполнения.`}),`
`,(0,c.jsxs)(t.p,{children:[`Размещайте экземпляры классов внутри контейнера. Поверхностно замораживается только контейнер: вложенный экземпляр сохраняет идентичность, методы прототипа, аксессоры, приватные поля и изменяемое состояние. Это правило действует для `,(0,c.jsx)(t.code,{children:`executeUse`}),`, `,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),` и `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'

class Service {
  #value = 'ready'

  read(): string {
    return this.#value
  }
}

export const useService = /*#__PURE__*/ executeUseLocal(() => ({ service: new Service() }))

// Оба способа доступа возвращают один и тот же исходный экземпляр класса.
useService().service.read()
useService().init().service.read()
`})}),`
`,(0,c.jsxs)(t.h3,{id:`функция-инициализатор-callback-и-её-аргументы-args-o`,children:[`Функция-инициализатор (`,(0,c.jsx)(t.code,{children:`callback`}),`) и её аргументы (`,(0,c.jsx)(t.code,{children:`...args: O`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Главная особенность `,(0,c.jsx)(t.code,{children:`executeUse`}),` заключается в том, что фабричная функция (`,(0,c.jsx)(t.code,{children:`callback`}),`) и переданные в неё аргументы (`,(0,c.jsx)(t.code,{children:`...args`}),`) используются `,(0,c.jsx)(t.strong,{children:`только один раз`}),` — во время фактической инициализации (самого первого вызова).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`callback`})}),`: Это фабрика, описывающая логику создания состояния. Внутри неё обычно объявляются реактивные переменные (`,(0,c.jsx)(t.code,{children:`ref`}),`, `,(0,c.jsx)(t.code,{children:`reactive`}),`), функции для их изменения и вычисляемые значения (`,(0,c.jsx)(t.code,{children:`computed`}),`). Возвращаемый из `,(0,c.jsx)(t.code,{children:`callback`}),` объект будет "заморожен" и закеширован.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`...args: O`})}),`: Вы можете передавать любые аргументы в ваш инициализатор (например, начальное состояние, ID загружаемой сущности или API-клиент). Эти аргументы будут прокинуты внутрь `,(0,c.jsx)(t.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Важно об аргументах:`}),` Так как `,(0,c.jsx)(t.code,{children:`executeUse`}),` жестко кеширует результат первого вызова, любые аргументы, переданные при `,(0,c.jsx)(t.strong,{children:`последующих`}),` вызовах этого же хука в других компонентах, `,(0,c.jsx)(t.strong,{children:`будут полностью проигнорированы`}),`. Объект не будет пересоздан, и функция `,(0,c.jsx)(t.code,{children:`callback`}),` не выполнится повторно с новыми аргументами (если только вы предварительно не сбросили кеш через `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`метод-заглушка-init`,children:[`Метод-заглушка `,(0,c.jsx)(t.code,{children:`init()`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`init`}),` — это просто пустая функция-заглушка, которая возвращает тот же самый замороженный объект состояния. Она нужна `,(0,c.jsx)(t.strong,{children:`исключительно для удобства чтения кода (Developer Experience)`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Её главная цель — дать возможность разработчику явно и визуально выделить в коде то самое место, где происходит фактическая (первая) инициализация синглтона. С технической точки зрения `,(0,c.jsx)(t.code,{children:`const state = useTheme()`}),` и `,(0,c.jsx)(t.code,{children:`const state = useTheme().init()`}),` делают абсолютно одно и то же.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Где-то глубоко в дереве компонентов мы просто получаем готовый стейт
const theme = useTheme()

// А здесь, в корневом компоненте (или main.ts), 
// мы явно показываем другим разработчикам: "Инициализация происходит именно ТУТ"
const theme = useTheme().init()
`})}),`
`,(0,c.jsx)(t.h2,{id:`пошаговая-инструкция-как-создать-и-использовать-свой-сервис`,children:`Пошаговая инструкция: Как создать и использовать свой сервис`}),`
`,(0,c.jsxs)(t.p,{children:[`Создание управляемого синглтона с помощью `,(0,c.jsx)(t.code,{children:`executeUse`}),` обычно состоит из трёх простых шагов.`]}),`
`,(0,c.jsx)(t.h3,{id:`шаг-1-определение-состояния-фабрика`,children:`Шаг 1: Определение состояния (Фабрика)`}),`
`,(0,c.jsxs)(t.p,{children:[`Сначала решите, какой тип стейта вам нужен (`,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`local`}),` или `,(0,c.jsx)(t.code,{children:`provide`}),`). Создайте отдельный файл (например, `,(0,c.jsx)(t.code,{children:`useMyService.ts`}),`). Используйте одну из функций-фабрик (например, `,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Внутри функции-колбека опишите все ваши реактивные переменные (`,(0,c.jsx)(t.code,{children:`ref`}),`, `,(0,c.jsx)(t.code,{children:`reactive`}),`), вычисляемые свойства (`,(0,c.jsx)(t.code,{children:`computed`}),`) и функции для изменения состояния:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/composables/useMyService.ts
import { ref, computed } from 'vue'
import { executeUseGlobal } from '@dxtmisha/functional'

// Создаем синглтон и инкапсулируем логику
const instance = executeUseGlobal(() => {
  // 1. Реактивное состояние
  const count = ref(0)
  
  // 2. Вычисляемые свойства
  const isPositive = computed(() => count.value > 0)
  
  // 3. Методы управления
  const increment = () => count.value++
  const reset = () => { count.value = 0 }

  // Возвращаем то, что должно быть доступно снаружи
  return {
    count,
    isPositive,
    increment,
    reset
  }
})

// Экспортируем функцию-обертку.
// Конструкция () => instance() нужна для того, чтобы редакторы кода (IDE)
// корректно распознавали useMyService именно как функцию-composable.
// Это обеспечивает корректную работу автокомплита и вывода типов.
export const useMyService = () => instance()
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-2-инициализация-только-для-global`,children:`Шаг 2: Инициализация (Только для global)`}),`
`,(0,c.jsxs)(t.p,{children:[`Если вы выбрали режим `,(0,c.jsx)(t.code,{children:`global`}),` (как в примере выше), вам необходимо указать приложению, когда именно создать этот экземпляр. Обычно это делается однократно в точке входа (`,(0,c.jsx)(t.code,{children:`main.ts`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

// Инициализируем абсолютно все global-синглтоны разом
executeUseGlobalInit() 

createApp(App).mount('#app')
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Примечание:`}),` Если в вашем приложении подключен плагин `,(0,c.jsx)(t.code,{children:`dxtFunctionalPlugin`}),`, вызывать `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` вручную при старте приложения `,(0,c.jsx)(t.strong,{children:`не нужно`}),` — плагин делает это автоматически под капотом.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`шаг-3-использование-в-компоненте`,children:`Шаг 3: Использование в компоненте`}),`
`,(0,c.jsxs)(t.p,{children:[`Теперь вы можете импортировать вашу функцию `,(0,c.jsx)(t.code,{children:`useMyService`}),` в любой Vue-компонент. При самом первом логическом вызове для наглядности используйте метод `,(0,c.jsx)(t.code,{children:`init()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<!-- src/components/MyComponent.vue -->
<script setup lang="ts">
import { useMyService } from '@/composables/useMyService'

// Получаем стейт напрямую. Метод init() подсказывает, 
// что здесь происходит первичное обращение в рамках этого компонента.
const { count, isPositive, increment } = useMyService().init()
<\/script>

<template>
  <div>
    <p>Текущий счетчик: {{ count }}</p>
    <p>Больше нуля? {{ isPositive ? 'Да' : 'Нет' }}</p>
    <button @click="increment">Увеличить</button>
  </div>
</template>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Для сброса общего сервиса вызовите встроенный метод. При SSR сброс `,(0,c.jsx)(t.code,{children:`global`}),` действует на весь серверный процесс:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const service = useMyService()
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`тип-executeusetype`,children:[`Тип `,(0,c.jsx)(t.code,{children:`ExecuteUseType`})]}),`
`,(0,c.jsxs)(t.h3,{id:`provide-компонентный-синглтон-по-умолчанию`,children:[(0,c.jsx)(t.code,{children:`provide`}),` (компонентный синглтон, по умолчанию)`]}),`
`,(0,c.jsx)(t.p,{children:`Это компонентно-ориентированный синглтон, который жестко привязан к жизненному циклу компонента Vue и всего его поддерева. Он использует под капотом встроенный в Vue механизм реактивности и передачи контекста (provide/inject), позволяя безопасно прокидывать один и тот же экземпляр состояния глубоко вниз по дереву без необходимости передавать его через props.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Когда использовать:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Для совместного использования состояния между строго определенной веткой компонентов (родитель -> много уровней вложенности -> дочерний), без засорения глобального хранилища.`}),`
`,(0,c.jsx)(t.li,{children:`Когда на одной странице нужно вывести несколько независимых блоков (например, несколько сложных виджетов загрузки файлов), у каждого из которых должно быть своё уникальное состояние, разделяемое только внутри этого виджета.`}),`
`,(0,c.jsx)(t.li,{children:`Если нужно автоматическое удаление данных из памяти (garbage collection) при размонтировании "компонента-владельца".`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Как работает:`}),`
Компонент, который первым вызывает эту функцию, автоматически становится «владельцем» (owner). Функция выполняет генерацию объекта и сразу же делает `,(0,c.jsx)(t.code,{children:`provide(id, instance)`}),`. Все вложенные компоненты при вызове этой же функции внутри себя не создают новый объект, а получают ранее созданный через `,(0,c.jsx)(t.code,{children:`inject(id)`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Примечание: У этого типа отсутствует метод `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),`, так как память освобождается автоматически системой реактивности Vue при уничтожении компонента-владельца.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'
import { ref } from 'vue'

const useTheme = executeUseProvide(() => {
  const mode = ref<'light' | 'dark'>('light')
  const toggle = () => { mode.value = mode.value === 'light' ? 'dark' : 'light' }
  return { mode, toggle }
})

// В родительском компоненте (владелец) — объект создаётся и публикуется (provide):
const theme = useTheme()
theme.toggle()

// В глубоко вложенном дочернем компоненте — получает тот же объект (inject):
const theme = useTheme()

// В совершенно другом, независимом дереве компонентов — создастся НОВЫЙ независимый экземпляр:
const theme2 = useTheme()
`})}),`
`,(0,c.jsxs)(t.h3,{id:`global-синглтон-всей-среды-выполнения`,children:[(0,c.jsx)(t.code,{children:`global`}),` (синглтон всей среды выполнения)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Реестр фабрик и каждый экземпляр `,(0,c.jsx)(t.code,{children:`global`}),` общие для всей среды выполнения JavaScript. В браузере экземпляр живёт в пределах загруженного модуля. При SSR `,(0,c.jsx)(t.strong,{children:`все запросы одного серверного процесса используют один и тот же экземпляр`}),`. У отдельных процессов, воркеров, реплик и браузера свои экземпляры.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Когда использовать:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Для публичной конфигурации, справочников и сервисов, состояние которых не зависит от пользователя, сессии, арендатора или запроса.`}),`
`,(0,c.jsx)(t.li,{children:`Когда независимым частям приложения нужен один общий сервис на весь процесс.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Как работает:`}),`
`,(0,c.jsx)(t.code,{children:`executeUseGlobal(callback)`}),` регистрирует фабрику без её выполнения. Первый вызов возвращённого хука или `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` создаёт экземпляр в собственной отсоединённой области эффектов. Последующие вызовы используют его независимо от контекста SSR-запроса. Общий реестр сохраняется, поэтому повторная инициализация обнаруживает и фабрики, зарегистрированные после старта.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Предупреждения для SSR:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Не храните в глобальном экземпляре авторизацию, токены, cookie, профиль пользователя, корзину и настройки языка или арендатора конкретного запроса: другой запрос может прочитать то же состояние.`}),`
`,(0,c.jsxs)(t.li,{children:[`Не захватывайте зависимости конкретного запроса: заголовки, текущий роутер или экземпляр `,(0,c.jsx)(t.code,{children:`Api`}),`, полученный в контексте запроса. Синглтон сохраняет зависимости своей первой инициализации.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Объявляйте фабрику один раз на уровне модуля, а не внутри обработчика запроса или компонента. Для состояния запроса используйте `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),` с настроенным контекстом `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` либо `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),` внутри дерева компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`destroyExecute()`}),` сбрасывает синглтон для всего процесса и останавливает его эффекты. Следующее обращение к хуку или вызов инициализации создаст новый общий экземпляр; ранее возвращённые ссылки продолжат указывать на старый объект. Серверный и браузерный экземпляры независимы; этот помощник не выполняет автоматическую гидратацию их состояния.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
import { ref } from 'vue'

// Публичная конфигурация, общая для всех запросов серверного процесса.
export const usePublicConfig = /*#__PURE__*/ executeUseGlobal(() => {
  const apiVersion = ref('v1')
  return { apiVersion }
})

executeUseGlobalInit()

const configuration = /*#__PURE__*/ usePublicConfig()
// Изменения видны всем потребителям этой среды выполнения.
configuration.apiVersion.value = 'v2'
`})}),`
`,(0,c.jsxs)(t.h3,{id:`local-ленивый-синглтон-в-контексте`,children:[(0,c.jsx)(t.code,{children:`local`}),` (ленивый синглтон в контексте)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Это ленивый синглтон, экземпляр которого хранится через `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. В браузере вызовы используют общий закешированный экземпляр. При SSR инициализированный контекст запроса обеспечивает отдельный экземпляр для каждого запроса.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Когда использовать:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Для утилит, фабрик или сервисов, которые не привязаны к Vue (`,(0,c.jsx)(t.code,{children:`provide`}),`/`,(0,c.jsx)(t.code,{children:`inject`}),` не работают вне setup-функции компонента).`]}),`
`,(0,c.jsx)(t.li,{children:`Когда вам нужен изолированный инстанс тяжелого класса или сервиса только тогда, когда он реально понадобится (ленивая инициализация по первому требованию), а не при старте всего приложения.`}),`
`,(0,c.jsx)(t.li,{children:`Для кэширования результатов сложных математических вычислений или преобразований конфигураций.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Как работает:`}),`
Первый вызов выполняет инициализатор с переданными аргументами, замораживает результат (`,(0,c.jsx)(t.code,{children:`Object.freeze`}),`) и сохраняет его в `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. Последующие вызовы в том же контексте возвращают готовый экземпляр и игнорируют новые аргументы. `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),` удаляет запись кеша текущего контекста. Для изоляции SSR необходимо настроить контекст запроса `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`; без него резервное хранилище не изолировано между запросами.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'
import { ref } from 'vue'

const useHeavyConfig = executeUseLocal((env: string) => {
  // Тяжелая операция вычисления конфигурации...
  const config = ref({ api: \`https://\${env}.example.com\` })
  return { config }
})

// Первый вызов — инициализация
const devConfig = useHeavyConfig('dev')
console.log(devConfig.config.value.api) // https://dev.example.com

// Второй вызов в другом файле — вернет тот же объект, аргумент игнорируется!
const sameConfig = useHeavyConfig('prod') 
console.log(sameConfig.config.value.api) // Всё еще https://dev.example.com

// Принудительная очистка кэша
sameConfig.destroyExecute?.()
const newConfig = useHeavyConfig('prod') // Инициализация запустится заново
`})}),`
`,(0,c.jsx)(t.h2,{id:`executeuseglobalinit`,children:(0,c.jsx)(t.code,{children:`executeUseGlobalInit`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function executeUseGlobalInit(): void
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализирует все зарегистрированные глобальные синглтоны (`,(0,c.jsx)(t.code,{children:`ExecuteUseType.global`}),`) и сохраняет их общий реестр. Повторные вызовы используют готовые экземпляры и инициализируют новые либо явно сброшенные фабрики. Импортируйте модули сервисов до вызова функции. При SSR плагин может вызывать её для каждого приложения/запроса, но каждый глобальный экземпляр остаётся общим для серверного процесса.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};