import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DesignAbstract - Базовый класс конструктора`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designabstract`,children:`Класс DesignAbstract`}),`
`,(0,c.jsx)(t.p,{children:`Абстрактный базовый класс, предназначенный для управления свойствами конструктора и изменениями состояния. Он предоставляет структурированный способ обработки входных свойств, отслеживания изменений и выполнения обратных вызовов при обновлении данных.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление свойствами`}),` — структурированная обработка входных данных (`,(0,c.jsx)(t.code,{children:`props`}),`) и хранилища событий (`,(0,c.jsx)(t.code,{children:`event`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отслеживание изменений`}),` — интеграция с `,(0,c.jsx)(t.code,{children:`DesignChanged`}),` для эффективного мониторинга и обновления изменений свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление жизненным циклом`}),` — автоматическое выполнение `,(0,c.jsx)(t.code,{children:`makeCallback`}),` и `,(0,c.jsx)(t.code,{children:`initEvent`}),` при обновлении данных.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignAbstract`}),` является абстрактным базовым классом и не может быть инициализирован напрямую. Он служит основой для создания классов дизайна, которые управляют состоянием на основе входных свойств (`,(0,c.jsx)(t.code,{children:`props`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(t.p,{children:`Класс использует два типа дженериков для обеспечения строгой типизации:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T extends Record<string, any>`}),` — Тип для входных свойств (`,(0,c.jsx)(t.code,{children:`props`}),`). Определяет структуру данных, передаваемых в конструктор и используемых для отслеживания изменений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`C extends Record<string, any>`}),` — Тип для выходных данных или состояния (`,(0,c.jsx)(t.code,{children:`event`}),`). Определяет структуру объекта, который формируется в `,(0,c.jsx)(t.code,{children:`initEvent`}),` и передается в обратные вызовы.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: T`}),` — объект с исходными данными для инициализации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback?: (event: C) => void`}),` — дополнительная функция обратного вызова, которая выполняется после каждого обновления данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`changed?: string[]`}),` — список имен свойств из `,(0,c.jsx)(t.code,{children:`props`}),`, за которыми нужно следить. Если не указано, отслеживаются все ключи `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Обязательный метод для реализации:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected abstract initEvent(): void`}),` — метод, в котором описывается логика преобразования или фильтрации `,(0,c.jsx)(t.code,{children:`props`}),` в объект состояния `,(0,c.jsx)(t.code,{children:`event`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignAbstract } from '@dxtmisha/functional'

// 1. Определение структур
interface MyProps { label: string; value: number }
interface MyState { display: string }

// 2. Реализация конкретного класса
class MyDesign extends DesignAbstract<MyProps, MyState> {
  protected initEvent(): void {
    this.event.display = \`\${this.props.label}: \${this.props.value}\`
  }
}

// 3. Создание экземпляра
const design = new MyDesign(
  { label: 'Счётчик', value: 10 }, 
  (state) => console.log('Новое состояние:', state.display)
)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы-управления-данными`,children:`Методы управления данными`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Инициирует процесс обновления обратного вызова. Вызывает `,(0,c.jsx)(t.code,{children:`makeCallback`}),` и возвращает экземпляр для цепочки вызовов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compelled?: boolean`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, принудительно обновляет данные независимо от наличия изменений.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.h3,{id:`makecallback`,children:(0,c.jsx)(t.code,{children:`makeCallback`})}),`
`,(0,c.jsx)(t.p,{children:`Основная логика выполнения для обновления состояния. Проверяет наличие изменений или принудительное обновление, затем инициализирует событие и запускает обратные вызовы.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compelled: boolean`}),` — принудительно обновляет данные. По умолчанию: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`защищенные-методы-для-наследников`,children:`Защищенные методы (для наследников)`}),`
`,(0,c.jsx)(t.h3,{id:`is`,children:(0,c.jsx)(t.code,{children:`is`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет наличие значения в свойствах `,(0,c.jsx)(t.code,{children:`props`}),` по имени.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: keyof T`}),` — имя свойства.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`boolean`})]}),`
`,(0,c.jsx)(t.h3,{id:`ischanged`,children:(0,c.jsx)(t.code,{children:`isChanged`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, было ли изменено значение свойства. Используется для предотвращения лишних вычислений.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: keyof C`}),` — имя свойства в событии.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameProp?: keyof T | (keyof T)[]`}),` — имя или список имен свойств в `,(0,c.jsx)(t.code,{children:`props`}),`, от которых зависит данное значение. Если не указано, используется `,(0,c.jsx)(t.code,{children:`name`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`boolean`})]}),`
`,(0,c.jsx)(t.h3,{id:`makecallbackitem`,children:(0,c.jsx)(t.code,{children:`makeCallbackItem`})}),`
`,(0,c.jsx)(t.p,{children:`Выполняет вызов функции обратного вызова, переданной в конструктор.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsxs)(t.h3,{id:`initevent-абстрактный`,children:[(0,c.jsx)(t.code,{children:`initEvent`}),` (абстрактный)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Абстрактный метод, который должен быть реализован в подклассе. В нем происходит заполнение объекта `,(0,c.jsx)(t.code,{children:`this.event`}),` на основе `,(0,c.jsx)(t.code,{children:`this.props`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};