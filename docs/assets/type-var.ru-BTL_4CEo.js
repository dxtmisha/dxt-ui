import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/# UI/properties/types/Переменные (var)`}),`
`,(0,c.jsx)(t.h1,{id:`переменные-var`,children:`Переменные (var)`}),`
`,(0,c.jsxs)(t.p,{children:[`Система генерации свойств предлагает два механизма работы с пользовательскими CSS-переменными (Custom Properties): явное объявление узла как переменной с помощью системного типа `,(0,c.jsx)(t.code,{children:`var`}),` и комбинированную генерацию свойств и переменных с помощью флага `,(0,c.jsx)(t.code,{children:`_var: true`}),`.`]}),`
`,(0,c.jsxs)(t.h2,{id:`декларативное-объявление-тип-var`,children:[`Декларативное объявление (Тип `,(0,c.jsx)(t.code,{children:`var`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Тип `,(0,c.jsx)(t.code,{children:`var`}),` (или его алиас `,(0,c.jsx)(t.code,{children:`$`}),`) предписывает компилятору отказаться от создания обычного CSS-свойства. Узел компилируется исключительно как CSS-переменная и становится доступен в области видимости (scope) текущего компонента.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Каскадное наследование:`}),` Тип `,(0,c.jsx)(t.code,{children:`var`}),` обладает свойством структурного нисхождения. Если родительский узел объявлен как `,(0,c.jsx)(t.code,{children:`var`}),` (или через алиас `,(0,c.jsx)(t.code,{children:`$`}),`), все его вложенные дочерние узлы автоматически унаследуют этот же тип. Вам не нужно дублировать объявление `,(0,c.jsx)(t.code,{children:`var`}),` для каждого потомка.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "card": {
    "padding": {
      "_type": "var",
      "value": "16px"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.em,{children:[`(Использование алиаса `,(0,c.jsx)(t.code,{children:`$padding: "16px"`}),` приведет к абсолютно идентичному результату).`]})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card {
  --card-padding: 16px;
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`комбинированная-генерация-флаг-_var`,children:[`Комбинированная генерация (Флаг `,(0,c.jsx)(t.code,{children:`_var`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Часто возникает архитектурная потребность сгенерировать классическое физическое CSS-свойство, но при этом "запитать" его от изменяемой CSS-переменной (например, для динамической смены тем или состояний во Vue-компоненте).`}),`
`,(0,c.jsxs)(t.p,{children:[`Для этого используется конфигурационный флаг `,(0,c.jsx)(t.code,{children:`_var: true`}),`. Он позволяет узлу сохранить свой изначальный тип (по умолчанию `,(0,c.jsx)(t.code,{children:`property`}),`), но заставляет компилятор выполнить сразу два действия:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Сгенерировать CSS-переменную со значением свойства.`}),`
`,(0,c.jsxs)(t.li,{children:[`Присвоить самому CSS-свойству значение через функцию `,(0,c.jsx)(t.code,{children:`var()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "background": {
      "_var": true,
      "value": "blue"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ожидаемый результат компиляции (SCSS/CSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  --button-background: blue;
  background: var(--button-background);
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Таким образом, использование мульти-флага `,(0,c.jsx)(t.code,{children:`_var: true`}),` полностью устраняет необходимость писать дублирующийся код рутинной привязки переменных к свойствам.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};