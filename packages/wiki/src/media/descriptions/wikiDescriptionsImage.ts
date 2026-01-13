import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsImage: StorybookComponentsDescriptionItem = {
  name: 'Image',
  description: {
    en: 'Component for displaying images and icons. Based on `ImageDesign` and supports working with files, links, and icon names.',
    ru: 'Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон'
  },
  possibilities: {
    en: [
      'support for various source types: string, `File`, image or PDF address',
      'adaptive sizing with `adaptive`, `objectWidth`, `objectHeight`',
      'cropping and positioning via `coordinator`, `x`, `y`',
      'rotation or hiding the component with properties `turn`, `hide`, `disabled`',
      'mode selection for filling (`size`: `auto`, `contain`, `cover`)'
    ],
    ru: [
      'поддержка различных типов исходников: строка, `File`, адрес картинки или PDF',
      'адаптивное измерение с помощью `adaptive`, `objectWidth`, `objectHeight`',
      'обрезка и позиционирование через `coordinator`, `x`, `y`',
      'поворот или скрытие компонента свойствами `turn`, `hide`, `disabled`',
      'выбор режима заполнения (`size`: `auto`, `contain`, `cover`)'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [
    'import { demoPdf, image1, phone1, phone2, phone3 } from \'@dxtmisha/wiki/media\''
  ],
  stories: [
    {
      id: 'ImageType',
      name: {
        en: 'Value type',
        ru: 'Тип значения'
      },
      setup: `
      return {
        image1,
        demoPdf
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Icon</div>
            <DesignComponent value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Image/ contain</div>
            <DesignComponent :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
            <div class="wiki-storybook-item__label">PDF</div>
            <DesignComponent :value="demoPdf"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageSize',
      name: {
        en: 'Display control',
        ru: 'Отображение'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <DesignComponent :value="image1" size="auto" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <DesignComponent :value="image1" size="contain" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <DesignComponent :value="image1" size="cover" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <DesignComponent :value="image1" :coordinator="[60, 10, 10, 40]" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <DesignComponent :value="image1" x="20%" y="-10%" tag-img/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageTagImg',
      name: {
        en: 'Using img tag',
        ru: 'Использование тега img'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Background (default)</div>
            <DesignComponent :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + alt</div>
            <DesignComponent :value="image1" tag-img alt="Example image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + lazy + srcset</div>
            <DesignComponent :value="image1" tag-img lazy alt="Responsive image" :srcset="{ '1x': image1, '2x': image1 }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + picture</div>
            <DesignComponent :value="image1" tag-img alt="Adaptive image" :picture="{ 768: image1, 1024: image1 }"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageAdaptive',
      name: {
        en: 'Adapted images',
        ru: 'Адаптированные изображения'
      },
      setup: `
      return {
        phone1,
        phone2,
        phone3
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone3" adaptive object-width="129.9" tag-img/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Image'} type={'image'}/>
<StorybookDescriptions componentName={'Image'} type={'value'}/>
<Canvas of={Component.ImageType}/>

<StorybookDescriptions componentName={'Image'} type={'img-tag'}/>
<Canvas of={Component.ImageTagImg}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>

<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>
<Canvas of={Component.ImageAdaptive}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Image'} type={'expose'}/>
    `
  },
  ai: {
    render: `
<div
  :class="classDemo.item"
  style="position: relative; width: 48px; height: 48px;"
>
  <Image v-bind="args"/>
</div>
    `,
    description: `
Image is a universal component for displaying graphic content.
It automatically determines the type of content (image, icon, file, PDF)
based on the \`value\` property.

**Key Features:**
1. **Automatic Type Detection:**
   - **Image:** If \`value\` is a URL to an image or a File object.
   - **Icon:** If \`value\` is a string matching an icon name
     (e.g., "home", "filled-home"). Supports Material Symbols/Icons.
   - **PDF:** If \`value\` is a URL to a PDF file.
   - **Color:** If \`value\` is a color string (e.g., "#ff0000").

2. **Display Modes (\`size\`):**
   - \`auto\` (default): Standard behavior.
   - \`contain\`: Scales the image to fit within the container while maintaining aspect ratio.
   - \`cover\`: Scales the image to cover the container, cropping if necessary.

3. **Rendering Method (\`tagImg\`):**
   - \`false\` (default): Renders as a background image (\`background-image\`) on a \`<span>\`.
     Useful for precise positioning and sizing.
   - \`true\`: Renders as a standard \`<img>\` tag. Required for SEO (alt text), lazy loading,
     and accessibility.

4. **Adaptivity (\`adaptive\`):**
   - Allows scaling the image relative to its original size using \`objectWidth\` and \`objectHeight\`.

5. **Advanced Positioning:**
   - \`coordinator\`: Array \`[top, right, bottom, left]\` for cropping or positioning the background.
   - \`x\`, \`y\`: Direct control over background position.

**Usage Examples:**

- **Icon:** \`<Image value="home" />\`
- **Image (Background):** \`<Image value="https://example.com/img.jpg" size="cover" />\`
- **Image (Tag):** \`<Image value="https://example.com/img.jpg" tag-img alt="Description" />\`
- **PDF:** \`<Image value="https://example.com/doc.pdf" />\`
    `
  }
}
