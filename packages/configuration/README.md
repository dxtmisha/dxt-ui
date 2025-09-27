# @dxt-ui/configuration

🔧 **Общие конфигурационные файлы** для проектов DXT UI - готовые настройки Vite и TypeScript для разработки UI компонентов.

[![npm version](https://badge.fury.io/js/@dxt-ui%2Fconfiguration.svg)](https://www.npmjs.com/package/@dxt-ui/configuration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Установка

```bash
npm install @dxt-ui/configuration
```

## 📦 Что включено

### Vite конфигурации:
- **viteBasic** - базовая конфигурация для UI компонентов
- **viteBasicFunction** - функциональная версия базовой конфигурации
- **viteComponentOnly** - только для компонентов без приложения
- **viteFlags** - специально для пакетов с флагами/иконками
- **viteMdx** - поддержка MDX файлов

### TypeScript конфигурации:
- **tsconfig.app.json** - для приложений
- **tsconfig.node.json** - для Node.js окружения

## 🛠️ Использование

### Vite конфигурации

```javascript
// vite.config.js - базовая конфигурация
import { viteBasic } from '@dxt-ui/configuration/viteBasic'
export default viteBasic

// vite.config.js - функциональная версия с кастомизацией
import { viteBasicFunction } from '@dxt-ui/configuration/viteBasicFunction'
export default viteBasicFunction({
  // ваши дополнительные настройки
})

// vite.config.js - только компоненты
import { viteComponentOnly } from '@dxt-ui/configuration/viteComponentOnly'
export default viteComponentOnly

// vite.config.js - для пакетов с флагами
import { viteFlags } from '@dxt-ui/configuration/viteFlags'
export default viteFlags

// vite.config.js - с поддержкой MDX
import { viteMdx } from '@dxt-ui/configuration/viteMdx'
export default viteMdx
```

### TypeScript конфигурации

```json
// tsconfig.app.json
{
  "extends": "@dxt-ui/configuration/tsconfig/tsconfig.app.json",
  "compilerOptions": {
    // ваши дополнительные настройки
  }
}

// tsconfig.node.json  
{
  "extends": "@dxt-ui/configuration/tsconfig/tsconfig.node.json"
}
```

## 📚 Доступные экспорты

| Экспорт | Описание |
|---------|----------|
| `./viteBasic` | Готовая базовая Vite конфигурация |
| `./viteBasicFunction` | Функция для создания Vite конфигурации |
| `./viteComponentOnly` | Конфигурация только для компонентов |
| `./viteFlags` | Конфигурация для пакетов с флагами |
| `./viteMdx` | Конфигурация с поддержкой MDX |
| `./tsconfig/*` | Все TypeScript конфигурации |

## 🎯 Для кого этот пакет

- **Разработчики UI библиотек** - стандартизированные конфигурации
- **Monorepo проекты** - единые настройки для всех пакетов  
- **DXT UI экосистема** - официальные конфигурации
- **Vue.js разработчики** - оптимизировано для Vue компонентов

## ✨ Особенности

- ✅ **TypeScript поддержка** из коробки
- ✅ **Vue.js оптимизации** для компонентов
- ✅ **MDX поддержка** для документации
- ✅ **Tree-shaking** и оптимизация бандла
- ✅ **ESM модули** современный стандарт
- ✅ **Готовые пресеты** для разных задач

## 🔧 Требования

- **Node.js**: ≥18.0.0
- **Vite**: ≥4.0.0 (peer dependency)
- **TypeScript**: ≥4.5.0 (peer dependency)

## 🤝 Совместимость

| Инструмент | Версия |
|------------|--------|
| **Vite** | ≥4.0.0 |
| **Vue** | 3+ |
| **TypeScript** | ≥4.5.0 |
| **Node.js** | ≥18.0.0 |

## 📄 Лицензия

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🐛 Сообщить о проблеме

[GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

---

⭐ **Поставьте звезду** если конфигурации оказались полезными!
