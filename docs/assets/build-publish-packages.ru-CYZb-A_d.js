import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-build-publish-packages - Публикация пакетов`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-build-publish-packages`,children:`dxt-build-publish-packages`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-build-publish-packages`}),` обеспечивает автоматическую публикацию npm-пакетов в рабочем пространстве. Инструмент использует `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` и `,(0,c.jsx)(n.code,{children:`PackageFile`}),` для сканирования активных директорий библиотек, отслеживания версий и публикации пакетов при обнаружении новой версии.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое сканирование монорепозитория`}),`: Обнаруживает активные директории пакетов внутри папки `,(0,c.jsx)(n.code,{children:`/packages/`}),`, содержащие корректный файл `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инкрементальное кэширование на основе версий`}),`: Избегает избыточных публикаций благодаря ведению локального кэша публикаций в файле `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`. Публикация пакета запускается только в том случае, если его текущая версия в `,(0,c.jsx)(n.code,{children:`package.json`}),` изменилась по сравнению с сохраненной в кэше.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальный выбор скриптов`}),`: Автоматически выполняет скрипт `,(0,c.jsx)(n.code,{children:`"publish-to-npm"`}),`, если он определен в скриптах пакета, с переходом на стандартную команду `,(0,c.jsx)(n.code,{children:`npm publish --access public`}),`, если первый отсутствует.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Исключение из публикации`}),`: Автоматически пропускает пакеты, помеченные как приватные (`,(0,c.jsx)(n.code,{children:`"private": true`}),` в `,(0,c.jsx)(n.code,{children:`package.json`}),`) или содержащие свойство `,(0,c.jsx)(n.code,{children:`"ui-no-publish": true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Процесс публикации пакетов автоматизирует проверки и вызовы команд публикации:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сканирование директорий`}),`: Класс `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` сканирует целевую директорию пакетов (по умолчанию `,(0,c.jsx)(n.code,{children:`/packages/`}),`) и считывает файл кэша публикаций `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация и валидация`}),`: Для каждой папки создается обертка `,(0,c.jsx)(n.code,{children:`PackageFile`}),` для проверки того, что она является пакетом и не исключена из публикации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение публикации`}),`: Если версия пакета не зарегистрирована или отличается от кэшированной версии:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Если существует скрипт `,(0,c.jsx)(n.code,{children:`"publish-to-npm"`}),`, выполняется `,(0,c.jsx)(n.code,{children:`npm run publish-to-npm`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`В противном случае выполняется команда `,(0,c.jsx)(n.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация логов`}),`: После успешной публикации пакета его версия обновляется в кэше в оперативной памяти.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение логов`}),`: Если один или несколько пакетов были успешно опубликованы, обновленный кэш сохраняется обратно в `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`дополнительная-информация`,children:`Дополнительная информация`}),`
`,(0,c.jsxs)(n.h3,{id:`файл-кэширования-логов-ui-publishlogjson`,children:[`Файл кэширования логов (`,(0,c.jsx)(n.code,{children:`ui-publish.log.json`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Локальный кэш хранится по пути:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Если вы хотите принудительно переопубликовать все пакеты независимо от их версий, вы можете удалить этот файл или сбросить его содержимое до пустых скобок `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`исключение-из-публикации`,children:`Исключение из публикации`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вы хотите, чтобы публикатор игнорировал конкретный пакет, добавьте одно из следующих свойств в его файл `,(0,c.jsx)(n.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "private": true
}
`})}),`
`,(0,c.jsx)(n.p,{children:`или:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "ui-no-publish": true
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};