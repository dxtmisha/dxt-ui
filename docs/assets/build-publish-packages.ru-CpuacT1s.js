import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-build-publish-packages - Публикация пакетов`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-publish-packages`,children:`dxt-build-publish-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` обеспечивает автоматическую инкрементальную публикацию npm-пакетов в рабочем пространстве монорепозитория. Инструмент использует класс `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` и обертку `,(0,c.jsx)(t.code,{children:`PackageFile`}),` для сканирования директорий пакетов, проверки обновлений версий через локальный лог-кэш и публикации новых релизов в реестр npm.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование монорепозитория`}),`: Обнаруживает активные директории пакетов внутри папки `,(0,c.jsx)(t.code,{children:`/packages/`}),`, содержащие корректный файл `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкрементальное кэширование на основе версий`}),`: Избегает избыточных повторных публикаций благодаря ведению локального кэша в файле `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`. Публикация пакета запускается только в том случае, если его версия в `,(0,c.jsx)(t.code,{children:`package.json`}),` изменилась по сравнению с сохраненной в кэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный выбор скриптов публикации`}),`: Автоматически выполняет скрипт `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),`, если он определен в `,(0,c.jsx)(t.code,{children:`package.json`}),`, с переходом на стандартную команду `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`, если кастомный скрипт отсутствует.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация базовых версий`}),`: Автоматически регистрирует существующие пакеты при первом запуске, если они отсутствуют в лог-кэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Исключение из публикации`}),`: Автоматически пропускает пакеты, помеченные как приватные (`,(0,c.jsx)(t.code,{children:`"private": true`}),` в `,(0,c.jsx)(t.code,{children:`package.json`}),`) или содержащие свойство `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Прозрачный вывод процесса`}),`: Логирует подробный вывод stdout и stderr процесса публикации в консоль в реальном времени.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(t.p,{children:`Процесс публикации пакетов выполняет следующий пошаговый алгоритм:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сканирование и загрузка кэша`}),`: Класс `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` считывает файл кэша публикаций `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` и сканирует рабочую директорию пакетов (`,(0,c.jsx)(t.code,{children:`packages/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация пакетов`}),`: Для каждой папки создается обертка `,(0,c.jsx)(t.code,{children:`PackageFile`}),`. Отфильтровываются папки без `,(0,c.jsx)(t.code,{children:`package.json`}),`, а также пакеты с `,(0,c.jsx)(t.code,{children:`"private": true`}),` или `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка состояния публикации`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Первичная регистрация`}),`: Если пакет отсутствует в лог-кэше (`,(0,c.jsx)(t.code,{children:`this.log[name] === undefined`}),`), его текущая версия вносится в кэш без вызова команды публикации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обновление версии`}),`: Если пакет уже зарегистрирован в логе и его версия в `,(0,c.jsx)(t.code,{children:`package.json`}),` отличается от кэшированной (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`):`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Если существует скрипт `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),`, выполняется команда `,(0,c.jsx)(t.code,{children:`npm run publish-to-npm`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`В противном случае выполняется команда `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация логов`}),`: При успешном завершении публикации новая версия пакета фиксируется в оперативной памяти.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение кэша`}),`: Если один или несколько пакетов были зарегистрированы или опубликованы (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`), обновленный кэш сохраняется на диск в `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`. Если изменений не было, выводится сообщение `,(0,c.jsx)(t.code,{children:`Publish packages - no changes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.p,{children:`Запустите команду публикации через CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-publish-packages
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Либо добавьте вызов в скрипты `,(0,c.jsx)(t.code,{children:`package.json`}),` корневого репозитория:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "publish:packages": "dxt-build-publish-packages"
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`дополнительная-информация`,children:`Дополнительная информация`}),`
`,(0,c.jsxs)(t.h3,{id:`файл-кэширования-логов-ui-publishlogjson`,children:[`Файл кэширования логов (`,(0,c.jsx)(t.code,{children:`ui-publish.log.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Локальный кэш версий хранится по пути:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Если вы хотите принудительно переопубликовать все пакеты независимо от их текущих версий, вы можете удалить этот файл или очистить его содержимое до `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`исключение-пакетов-из-публикации`,children:`Исключение пакетов из публикации`}),`
`,(0,c.jsxs)(t.p,{children:[`Если вы хотите, чтобы публикатор игнорировал конкретный пакет, добавьте одно из следующих свойств в его файл `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "private": true
}
`})}),`
`,(0,c.jsx)(t.p,{children:`или:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-no-publish": true
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`кастомная-команда-публикации`,children:`Кастомная команда публикации`}),`
`,(0,c.jsxs)(t.p,{children:[`Вы можете настроить специализированный скрипт публикации в секции `,(0,c.jsx)(t.code,{children:`scripts`}),` файла `,(0,c.jsx)(t.code,{children:`package.json`}),` конкретного пакета:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "publish-to-npm": "npm publish --access public --tag next"
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};