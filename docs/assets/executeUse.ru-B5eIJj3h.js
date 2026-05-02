import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Functions/executeUse - Синглтон с управлением жизненным циклом`}),`
`,(0,c.jsx)(n.h1,{id:`executeuse`,children:(0,c.jsx)(n.code,{children:`executeUse`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`executeUse`}),` — это фабрика, которая оборачивает любую функцию-инициализатор и превращает её результат в `,(0,c.jsx)(n.strong,{children:`управляемый синглтон`}),`. Объект создаётся ровно один раз, замораживается (`,(0,c.jsx)(n.code,{children:`Object.freeze`}),`) и переиспользуется при каждом последующем вызове. В зависимости от выбранного типа синглтон может быть компонентным, глобальным или локальным.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для обеспечения уникальности идентификаторов используется сочетание внутреннего глобального кода и функции `,(0,c.jsx)(n.code,{children:`getElementId()`}),`, что гарантирует отсутствие коллизий даже при множественном использовании в разных модулях.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`R`}),` — тип объекта, возвращаемого функцией-инициализатором (`,(0,c.jsx)(n.code,{children:`callback`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends any[]`}),` — типы аргументов, которые принимает `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`RI extends ExecuteUseReturn<R>`}),` — результирующий тип синглтона, включающий методы управления.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (...args: O) => R`}),` — Функция-инициализатор. Вызывается при первом обращении и возвращает объект, который будет заморожен и закеширован. Аргументы передаются только при первом вызове.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ExecuteUseType`}),` — Тип синглтона (по умолчанию `,(0,c.jsx)(n.code,{children:`ExecuteUseType.provide`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ExecuteUseReturn<R>`}),` — замороженный объект, расширяющий `,(0,c.jsx)(n.code,{children:`R`}),` следующими методами:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): Readonly<R>`}),` — возвращает исходный результат `,(0,c.jsx)(n.code,{children:`callback`}),` без методов управления (`,(0,c.jsx)(n.code,{children:`init`}),`, `,(0,c.jsx)(n.code,{children:`destroyExecute`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`destroyExecute?(): void`}),` — только у `,(0,c.jsx)(n.code,{children:`local`}),` и `,(0,c.jsx)(n.code,{children:`global`}),`. Сбрасывает кеш, позволяя пересоздать объект при следующем вызове.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`функция-инициализатор-callback-и-её-аргументы-args-o`,children:[`Функция-инициализатор (`,(0,c.jsx)(n.code,{children:`callback`}),`) и её аргументы (`,(0,c.jsx)(n.code,{children:`...args: O`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Главная особенность `,(0,c.jsx)(n.code,{children:`executeUse`}),` заключается в том, что фабричная функция (`,(0,c.jsx)(n.code,{children:`callback`}),`) и переданные в неё аргументы (`,(0,c.jsx)(n.code,{children:`...args`}),`) используются `,(0,c.jsx)(n.strong,{children:`только один раз`}),` — во время фактической инициализации (самого первого вызова).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`callback`})}),`: Это фабрика, описывающая логику создания состояния. Внутри неё обычно объявляются реактивные переменные (`,(0,c.jsx)(n.code,{children:`ref`}),`, `,(0,c.jsx)(n.code,{children:`reactive`}),`), функции для их изменения и вычисляемые значения (`,(0,c.jsx)(n.code,{children:`computed`}),`). Возвращаемый из `,(0,c.jsx)(n.code,{children:`callback`}),` объект будет "заморожен" и закеширован.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`...args: O`})}),`: Вы можете передавать любые аргументы в ваш инициализатор (например, начальное состояние, ID загружаемой сущности или API-клиент). Эти аргументы будут прокинуты внутрь `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Важно об аргументах:`}),` Так как `,(0,c.jsx)(n.code,{children:`executeUse`}),` жестко кеширует результат первого вызова, любые аргументы, переданные при `,(0,c.jsx)(n.strong,{children:`последующих`}),` вызовах этого же хука в других компонентах, `,(0,c.jsx)(n.strong,{children:`будут полностью проигнорированы`}),`. Объект не будет пересоздан, и функция `,(0,c.jsx)(n.code,{children:`callback`}),` не выполнится повторно с новыми аргументами (если только вы предварительно не сбросили кеш через `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`метод-заглушка-init`,children:[`Метод-заглушка `,(0,c.jsx)(n.code,{children:`init()`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`init`}),` — это просто пустая функция-заглушка, которая возвращает тот же самый замороженный объект состояния. Она нужна `,(0,c.jsx)(n.strong,{children:`исключительно для удобства чтения кода (Developer Experience)`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Её главная цель — дать возможность разработчику явно и визуально выделить в коде то самое место, где происходит фактическая (первая) инициализация синглтона. С технической точки зрения `,(0,c.jsx)(n.code,{children:`const state = useTheme()`}),` и `,(0,c.jsx)(n.code,{children:`const state = useTheme().init()`}),` делают абсолютно одно и то же.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Где-то глубоко в дереве компонентов мы просто получаем готовый стейт
const theme = useTheme()

// А здесь, в корневом компоненте (или main.ts), 
// мы явно показываем другим разработчикам: "Инициализация происходит именно ТУТ"
const theme = useTheme().init()
`})}),`
`,(0,c.jsx)(n.h2,{id:`пошаговая-инструкция-как-создать-и-использовать-свой-сервис`,children:`Пошаговая инструкция: Как создать и использовать свой сервис`}),`
`,(0,c.jsxs)(n.p,{children:[`Создание управляемого синглтона с помощью `,(0,c.jsx)(n.code,{children:`executeUse`}),` обычно состоит из трёх простых шагов.`]}),`
`,(0,c.jsx)(n.h3,{id:`шаг-1-определение-состояния-фабрика`,children:`Шаг 1: Определение состояния (Фабрика)`}),`
`,(0,c.jsxs)(n.p,{children:[`Сначала решите, какой тип стейта вам нужен (`,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`local`}),` или `,(0,c.jsx)(n.code,{children:`provide`}),`). Создайте отдельный файл (например, `,(0,c.jsx)(n.code,{children:`useMyService.ts`}),`). Используйте одну из функций-фабрик (например, `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Внутри функции-колбека опишите все ваши реактивные переменные (`,(0,c.jsx)(n.code,{children:`ref`}),`, `,(0,c.jsx)(n.code,{children:`reactive`}),`), вычисляемые свойства (`,(0,c.jsx)(n.code,{children:`computed`}),`) и функции для изменения состояния:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/composables/useMyService.ts
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
`,(0,c.jsx)(n.h3,{id:`шаг-2-инициализация-только-для-global`,children:`Шаг 2: Инициализация (Только для global)`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вы выбрали режим `,(0,c.jsx)(n.code,{children:`global`}),` (как в примере выше), вам необходимо указать приложению, когда именно создать этот экземпляр. Обычно это делается однократно в точке входа (`,(0,c.jsx)(n.code,{children:`main.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

// Инициализируем абсолютно все global-синглтоны разом
executeUseGlobalInit() 

createApp(App).mount('#app')
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Примечание:`}),` Если в вашем приложении подключен плагин `,(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),`, вызывать `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),` вручную при старте приложения `,(0,c.jsx)(n.strong,{children:`не нужно`}),` — плагин делает это автоматически под капотом.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`шаг-3-использование-в-компоненте`,children:`Шаг 3: Использование в компоненте`}),`
`,(0,c.jsxs)(n.p,{children:[`Теперь вы можете импортировать вашу функцию `,(0,c.jsx)(n.code,{children:`useMyService`}),` в любой Vue-компонент. При самом первом логическом вызове для наглядности используйте метод `,(0,c.jsx)(n.code,{children:`init()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<!-- src/components/MyComponent.vue -->
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
`,(0,c.jsx)(n.p,{children:`Если по какой-то причине вам нужно принудительно сбросить стейт (например, при выходе пользователя из аккаунта), вызовите встроенный метод сброса:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const service = useMyService()
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`тип-executeusetype`,children:[`Тип `,(0,c.jsx)(n.code,{children:`ExecuteUseType`})]}),`
`,(0,c.jsxs)(n.h3,{id:`provide-компонентный-синглтон-по-умолчанию`,children:[(0,c.jsx)(n.code,{children:`provide`}),` (компонентный синглтон, по умолчанию)`]}),`
`,(0,c.jsx)(n.p,{children:`Это компонентно-ориентированный синглтон, который жестко привязан к жизненному циклу компонента Vue и всего его поддерева. Он использует под капотом встроенный в Vue механизм реактивности и передачи контекста (provide/inject), позволяя безопасно прокидывать один и тот же экземпляр состояния глубоко вниз по дереву без необходимости передавать его через props.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Когда использовать:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Для совместного использования состояния между строго определенной веткой компонентов (родитель -> много уровней вложенности -> дочерний), без засорения глобального хранилища.`}),`
`,(0,c.jsx)(n.li,{children:`Когда на одной странице нужно вывести несколько независимых блоков (например, несколько сложных виджетов загрузки файлов), у каждого из которых должно быть своё уникальное состояние, разделяемое только внутри этого виджета.`}),`
`,(0,c.jsx)(n.li,{children:`Если нужно автоматическое удаление данных из памяти (garbage collection) при размонтировании "компонента-владельца".`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Как работает:`}),`
Компонент, который первым вызывает эту функцию, автоматически становится «владельцем» (owner). Функция выполняет генерацию объекта и сразу же делает `,(0,c.jsx)(n.code,{children:`provide(id, instance)`}),`. Все вложенные компоненты при вызове этой же функции внутри себя не создают новый объект, а получают ранее созданный через `,(0,c.jsx)(n.code,{children:`inject(id)`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Примечание: У этого типа отсутствует метод `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),`, так как память освобождается автоматически системой реактивности Vue при уничтожении компонента-владельца.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'
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
`,(0,c.jsxs)(n.h3,{id:`global-глобальный-синглтон-приложения`,children:[(0,c.jsx)(n.code,{children:`global`}),` (глобальный синглтон приложения)`]}),`
`,(0,c.jsx)(n.p,{children:`Это классический архитектурный паттерн Singleton, существующий в строго единственном экземпляре на протяжении всего времени работы вашего приложения (с момента инициализации до закрытия вкладки браузера). Он обеспечивает глобальную точку доступа к состоянию из любого места в коде.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Когда использовать:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Для хранения глобального стейта приложения: авторизации, профиля текущего пользователя, языковых настроек, глобальной корзины товаров.`}),`
`,(0,c.jsx)(n.li,{children:`Когда доступ к одним и тем же данным требуется из совершенно разных, не связанных между собой частей приложения (или даже вне компонентов Vue, например, в роутере).`}),`
`,(0,c.jsx)(n.li,{children:`Как легковесная замена Vuex / Pinia для простых задач.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Как работает:`}),`
Функция инициализации `,(0,c.jsx)(n.strong,{children:`не выполняется при вызове`}),`. Вместо этого она добавляется в специальную внутреннюю очередь (`,(0,c.jsx)(n.code,{children:`globalMethods`}),`). Полная инициализация всех глобальных объектов происходит только при явном вызове `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),`, который обычно размещается в `,(0,c.jsx)(n.code,{children:`main.ts`}),` до того, как приложение будет смонтировано. В дальнейшем все компоненты получают один и тот же закешированный объект из памяти.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
import { ref } from 'vue'

const useAuth = executeUseGlobal(() => {
  const user = ref<string | null>(null)
  const login = (name: string) => { user.value = name }
  const logout = () => { user.value = null }
  return { user, login, logout }
})

// В main.ts — строго ДО монтирования приложения (app.mount()):
executeUseGlobalInit()

// В любом компоненте, утилите или роутере:
const auth = useAuth()
auth.login('Alice')

// Если нужно принудительно сбросить состояние (пересоздать стейт заново):
auth.destroyExecute?.() 
`})}),`
`,(0,c.jsxs)(n.h3,{id:`local-локальный-синглтон-в-замыкании`,children:[(0,c.jsx)(n.code,{children:`local`}),` (локальный синглтон в замыкании)`]}),`
`,(0,c.jsx)(n.p,{children:`Это независимый синглтон, который опирается на механизм лексических замыканий (closure caching) в JavaScript. Вместо использования контекста Vue или глобального скоупа, он сохраняет однажды сгенерированный результат прямо внутри своей собственной функции в памяти, мгновенно отдавая его при всех последующих вызовах.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Когда использовать:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Для утилит, фабрик или сервисов, которые не привязаны к Vue (`,(0,c.jsx)(n.code,{children:`provide`}),`/`,(0,c.jsx)(n.code,{children:`inject`}),` не работают вне setup-функции компонента).`]}),`
`,(0,c.jsx)(n.li,{children:`Когда вам нужен изолированный инстанс тяжелого класса или сервиса только тогда, когда он реально понадобится (ленивая инициализация по первому требованию), а не при старте всего приложения.`}),`
`,(0,c.jsx)(n.li,{children:`Для кэширования результатов сложных математических вычислений или преобразований конфигураций.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Как работает:`}),`
Не использует механизмы Vue. При самом первом вызове выполняется функция-инициализатор с переданными аргументами. Полученный результат жестко замораживается (`,(0,c.jsx)(n.code,{children:`Object.freeze`}),`) и сохраняется в переменной внутри замыкания `,(0,c.jsx)(n.code,{children:`executeUse`}),`. При всех последующих вызовах (даже если вы передадите другие аргументы) функция просто мгновенно возвращает уже сохраненный объект из переменной.
Метод `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),` позволяет занулить эту внутреннюю переменную, чтобы при следующем вызове алгоритм инициализации отработал заново.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'
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
`,(0,c.jsx)(n.h2,{id:`executeuseglobalinit`,children:(0,c.jsx)(n.code,{children:`executeUseGlobalInit`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`function executeUseGlobalInit(): void
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Вызывает все зарегистрированные глобальные инициализаторы (`,(0,c.jsx)(n.code,{children:`ExecuteUseType.global`}),`) и очищает очередь. Повторный вызов не пересоздаёт уже инициализированные синглтоны. Должна быть вызвана `,(0,c.jsx)(n.strong,{children:`один раз`}),` при старте приложения — до монтирования корневого компонента.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};