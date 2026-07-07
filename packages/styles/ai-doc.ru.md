# Справочник @dxtmisha/styles

Системная стилизация и правила использования SCSS-миксинов.

---

## Архитектурные правила

1. **Приоритет**: Используйте системные миксины вместо кастомных CSS-свойств везде, где есть системный токен/миксин.
2. **Простой CSS**: Используйте стандартные CSS-свойства (например, `display: block`, `position: absolute`) для единичных свойств, не дающих системного преимущества.
3. **БЭМ-именование**: Имя корневого класса должно строго соответствовать имени компонента. Вложенные элементы и модификаторы именуются по БЭМ (например, `.component__element--modifier`).
4. **Адаптивность без хардкода**: Запрещено писать прямые `@media` с фиксированной шириной. Используйте только системные миксины адаптивности.

---

## Примеры использования

### 1. Импорты
```scss
// Полный импорт переменных, миксинов и утилит
@import '@dxtmisha/styles';

// Импорт только свойств и переменных CSS (для оптимизации бандла)
@import '@dxtmisha/styles/properties';
```

### 2. Цвета и палитры (color.scss)
- **Прозрачность**: Используйте `backgroundOpacity` / `colorOpacity` для независимого изменения альфа-канала.
- **Статика vs Динамика**: Статические миксины (`backgroundColor`, `color`) задают цвет жестко. Миксины палитры (`paletteBackgroundColor`, `paletteColor`) связывают цвет с семантическими переменными (например, `'--d1-sys-palette-primary'`), обеспечивая перекраску при смене класса палитры родителя (например, `.d1-palette--yellow`).

```scss
.element {
  @include backgroundColor(primary);
  @include color(white);
  @include backgroundOpacity(0.5); // меняет только прозрачность фона
  
  &--dynamic {
    @include paletteBackgroundColor('--d1-sys-palette-primary');
  }
}
```

### 3. Сетка и отступы (flex.scss, padding.scss, margin.scss)
```scss
.container {
  @include flex;
  @include flexDirection(column);
  @include justifyContent(center);
  @include alignItems(center);
  
  @include padding(md);
  @include margin(lg);
  @include radius; // токен скругления
}
```

### 4. Типографика (font.scss)
```scss
.title { @include font(titleLarge); }
.text { @include font(bodyMedium); }
```

### 5. Медиа- и контейнерные запросы (media.scss)
Брейкпоинты: `sm`, `md`, `lg`, `xl`, `2xl`.
- Медиа: `mediaMinWidth($width)`, `mediaMaxWidth($width)`, `mediaMinMaxWidth($min, $max)`.
- Контейнерные: `containerMinWidth($width)`, `containerMaxWidth($width)`, `containerMinMaxWidth($min, $max)`.

```scss
.responsive-box {
  width: 100%;
  @include mediaMinWidth('md') { width: 50%; }
}

.container-box {
  display: grid;
  @include containerMinWidth('sm') { grid-template-columns: 1fr 1fr; }
}
```
