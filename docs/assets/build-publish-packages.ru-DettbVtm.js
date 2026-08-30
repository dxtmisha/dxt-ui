import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/6. Публикация пакетов`}),`
`,(0,c.jsx)(t.h1,{id:`публикация-пакетов-в-реестр-npm`,children:`Публикация пакетов в реестр npm`}),`
`,(0,c.jsxs)(t.p,{children:[`В дизайн-системе `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` процесс дистрибуции и релиза пакетов монорепозитория в реестр npm полностью автоматизирован с помощью утилиты `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),`. Разработчику больше не нужно вручную проверять опубликованные версии на npm, поочередно заходить в каждый каталог или опасаться конфликтов версий.`]}),`
`,(0,c.jsx)(t.p,{children:`Инструмент автоматически сканирует директорию пакетов, асинхронно сверяет текущие версии с публичным реестром npm и безопасно публикует только обновленные модули.`}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-автоматизации`,children:`Преимущества автоматизации`}),`
`,(0,c.jsx)(t.h3,{id:`1-автоматический-дифференциальный-анализ-реестра-npm`,children:`1. Автоматический дифференциальный анализ реестра npm`}),`
`,(0,c.jsxs)(t.p,{children:[`Перед публикацией команда `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` выполняет сетевой запрос `,(0,c.jsx)(t.code,{children:`npm view <package> version`}),` для каждого пакета. Публикуются исключительно те пакеты, локальная версия которых новее версии в реестре npm, либо пакеты, которые публикуются впервые.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-защита-от-конфликтов-и-ошибок-zero-conflicts`,children:`2. Защита от конфликтов и ошибок (Zero Conflicts)`}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита предотвращает возникновение ошибок `,(0,c.jsx)(t.code,{children:`E403`}),` / `,(0,c.jsx)(t.code,{children:`E409`}),` (Cannot publish over existing version), полностью исключая попытки повторной публикации неизмененных пакетов.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-автоматическая-изоляция-приватных-и-служебных-пакетов`,children:`3. Автоматическая изоляция приватных и служебных пакетов`}),`
`,(0,c.jsxs)(t.p,{children:[`Оркестратор автоматически игнорирует приватные пакеты (`,(0,c.jsx)(t.code,{children:`"private": true`}),`) и пакеты со специальным флагом `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пошаговое-руководство-что-нужно-делать`,children:`Пошаговое руководство (Что нужно делать)`}),`
`,(0,c.jsx)(t.h3,{id:`шаг-1-настройте-конфигурацию-packagejson`,children:`Шаг 1. Настройте конфигурацию package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`В файле `,(0,c.jsx)(t.code,{children:`package.json`}),` пакета убедитесь, что имя пакета, версия и скрипт публикации настроены корректно:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/example-package",
  "version": "1.0.1",
  "scripts": {
    "publish-to-npm": "npm publish --access public"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-2-обновите-версию-пакета-bump-version`,children:`Шаг 2. Обновите версию пакета (Bump Version)`}),`
`,(0,c.jsxs)(t.p,{children:[`Когда изменения в коде готовы к релизу, увеличьте номер версии в `,(0,c.jsx)(t.code,{children:`package.json`}),` нужного пакета (например, с `,(0,c.jsx)(t.code,{children:`1.0.0`}),` до `,(0,c.jsx)(t.code,{children:`1.0.1`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`шаг-3-запустите-команду-публикации`,children:`Шаг 3. Запустите команду публикации`}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните команду `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` в терминале из корня монорепозитория:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-publish-packages
`})}),`
`,(0,c.jsx)(t.p,{children:`Скрипт выполнит аудит реестра npm и опубликует обновленные пакеты:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Publish packages(14)...
Publish packages changed: 1
`})}),`
`,(0,c.jsx)(t.p,{children:`Если все пакеты в монорепозитории уже соответствуют версиям в npm, публикация не будет производиться:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Publish packages(14)...
Publish packages - no changes
`})}),`
`,(0,c.jsx)(t.h2,{id:`конфигурационные-флаги-packagejson`,children:`Конфигурационные флаги package.json`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-no-publish`}),` (boolean)`]}),`: Если установлено в `,(0,c.jsx)(t.code,{children:`true`}),`, пакет будет полностью исключен из процесса публикации, даже если его версия отличается от реестра.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`private`}),` (boolean)`]}),`: Приватные пакеты автоматически пропускаются публикатором.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`publish-to-npm`}),` (script)`]}),`: Если в секции `,(0,c.jsx)(t.code,{children:`scripts`}),` определена команда `,(0,c.jsx)(t.code,{children:`publish-to-npm`}),`, оркестратор выполнит `,(0,c.jsx)(t.code,{children:`npm run publish-to-npm`}),`. В противном случае используется системная команда по умолчанию `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-перед-ручной-публикацией`,children:`Преимущества перед ручной публикацией`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасность релиза`}),`: Исключен человеческий фактор и ошибки публикации не тех пакетов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Массовая публикация в один клик`}),`: Возможность выпустить обновление для десятков пакетов одной командой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с CI/CD`}),`: Идеально подходит для автоматических пайплайнов релизов при слиянии в основную ветку.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};