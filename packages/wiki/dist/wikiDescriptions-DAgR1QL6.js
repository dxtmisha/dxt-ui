//#endregion
//#region src/media/descriptions/wikiDescriptions.ts
var e = [
	{
		name: "Accordion",
		description: {
			en: "Expandable container component that reveals and hides content with smooth animations",
			ru: "Раскрывающийся контейнерный компонент, который показывает и скрывает контент с плавными анимациями"
		},
		possibilities: {
			en: [
				"smooth expand/collapse animations via MotionTransform",
				"composable header with label, description, and icons",
				"automatic arrow rotation indicator",
				"controlled or uncontrolled state management with v-model",
				"divider line customization",
				"custom cell attributes support",
				"click event handling with custom data",
				"flexible content slots for header and body"
			],
			ru: [
				"плавные анимации раскрытия/сворачивания через MotionTransform",
				"композитная шапка с меткой, описанием и иконками",
				"автоматический индикатор поворота стрелки",
				"управление состоянием контролируемо или неконтролируемо через v-model",
				"настройка линии разделителя",
				"поддержка пользовательских атрибутов ячейки",
				"обработка событий клика с пользовательскими данными",
				"гибкие слоты контента для шапки и тела"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n    <DesignComponent v-bind=\"args\">\n      <template #default>\n        <p>Accordion content goes here. This section can contain any HTML elements, components, or text.</p>\n        <p>You can include multiple paragraphs, lists, and other structured content to demonstrate the accordion's flexibility and behavior.</p>\n        <ul>\n          <li>First example item with some details</li>\n          <li>Second example showing list formatting</li>\n          <li>Third item demonstrating nested content</li>\n        </ul>\n        <p>Additional text can be added to show how the accordion handles longer content with smooth animations and proper spacing.</p>\n        <div style=\"padding: 12px; background: #f5f5f5; border-radius: 4px; margin-top: 8px;\">\n          <strong>Note:</strong> This is a highlighted section within the accordion body.\n        </div>\n        <p style=\"margin-top: 12px;\">The accordion component automatically manages the height transitions and ensures all content is properly displayed when expanded.</p>\n      </template>\n    </DesignComponent>\n    <DesignComponent v-bind=\"args\">\n      <template #default>\n        <h4 style=\"margin-top: 0;\">Features Overview</h4>\n        <p>This accordion demonstrates different content types and layout possibilities:</p>\n        <ol>\n          <li>Numbered lists for sequential information</li>\n          <li>Headings for content structure</li>\n          <li>Mixed content types in a single container</li>\n        </ol>\n        <p>The component supports various HTML elements and maintains proper spacing throughout the animation cycle.</p>\n        <div style=\"display: flex; gap: 8px; margin-top: 12px;\">\n          <span style=\"padding: 4px 8px; background: #e3f2fd; border-radius: 4px; font-size: 12px;\">Tag 1</span>\n          <span style=\"padding: 4px 8px; background: #f3e5f5; border-radius: 4px; font-size: 12px;\">Tag 2</span>\n          <span style=\"padding: 4px 8px; background: #e8f5e9; border-radius: 4px; font-size: 12px;\">Tag 3</span>\n        </div>\n      </template>\n    </DesignComponent>\n    <DesignComponent v-bind=\"args\">\n      <template #default>\n        <p>This is the third variant showing simplified content structure.</p>\n        <p>Accordion components support various content formats while maintaining consistent behavior.</p>\n        <h5>Key Features:</h5>\n        <ul>\n          <li>Flexible content layouts</li>\n          <li>Smooth animations</li>\n          <li>Easy customization</li>\n        </ul>\n      </template>\n    </DesignComponent>\n  ",
		stories: [{
			id: "AccordionVModel",
			name: {
				en: "Two-way binding (v-model)",
				ru: "Двусторонняя привязка (v-model)"
			},
			setup: "\n      return {\n        open: ref(false)\n      }\n      ",
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"open = !open\">\n              Toggle ({{ open }})\n            </button>\n          </div>\n          <DesignComponent v-model:open=\"open\" label=\"Settings\" description=\"Click to expand\" icon=\"settings\">\n            <template #default>\n              <div class=\"wiki-storybook-item--padding\">\n                <p>Content is {{ open ? 'visible' : 'hidden' }}</p>\n                <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the accordion's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>\n                <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the accordion, such as in complex forms or coordinated UI interactions.</p>\n              </div>\n            </template>\n          </DesignComponent>\n        </div>\n      "
		}, {
			id: "AccordionSlots",
			name: {
				en: "Slots usage",
				ru: "Использование слотов"
			},
			template: "\n        <DesignComponent label=\"Default label\" description=\"Default description\" icon=\"settings\">\n          <template #label>Custom label slot</template>\n          <template #description>Custom description slot</template>\n          <template #caption>Custom caption slot</template>\n          <template #trailing>Trailing slot</template>\n          <template #default>\n              <p>Custom default slot content (main accordion body)</p>\n          </template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Accordion'} type={'accordion'}/>\n\n<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>\n<Canvas of={Component.AccordionVModel}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'MotionTransform'} type={'expose.isShow'}/>\n<StorybookDescriptions componentName={'Window'} type={'expose'}/>\n<StorybookDescriptions componentName={'MotionTransform'} type={'expose.motionTransformElement'}/>\n    ",
			slots: "\n<Canvas of={Component.AccordionSlots}/>\n<StorybookDescriptions componentName={'Accordion'} type={'slots'}/>\n<StorybookDescriptions componentName={'Slot'} type={'label'}/>\n<StorybookDescriptions componentName={'Slot'} type={'caption'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Cell'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Accordion :open=\"true\" :auto-close=\"false\" v-bind=\"args\">\n    <div class=\"wiki-storybook-item--padding\">\n      Hidden content\n    </div>\n  </Accordion>\n</div>\n    ",
			description: "\nCollapsible container for progressive disclosure. Toggles content visibility to manage space and cognitive load. Use for FAQs, grouped settings, hiding secondary info, or compact dashboards.\nHeader is based on a Cell component and supports label, description, and icon. Features an auto-rotating arrow indicator and smooth height transitions via MotionTransform.\nBuilt-in ARIA support and keyboard navigation (Space/Enter). Controlled primarily via v-model:open. Customizable with divider and header attributes through cellAttrs.\n    "
		}
	},
	{
		name: "Area",
		description: {
			en: "Component for rendering content based on the current area context",
			ru: "Компонент для отображения контента в зависимости от текущего контекста области"
		},
		possibilities: {
			en: [
				"automatic slot selection based on injected area value",
				"fallback to a default area if no injection is found",
				"supports nested areas and context inheritance",
				"renders default slot if no specific area slot matches"
			],
			ru: [
				"автоматический выбор слота на основе внедренного значения области",
				"возврат к области по умолчанию, если внедрение не найдено",
				"поддержка вложенных областей и наследования контекста",
				"отображение слота по умолчанию, если ни один специфический слот области не подходит"
			]
		},
		import: [],
		render: "\n    <DesignComponent v-bind=\"args\">\n      <template #header>Header Content (from area-default)</template>\n      <template #footer>Footer Content</template>\n      <template #default>Default Content</template>\n    </DesignComponent>\n  ",
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Area'} type={'area'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Area'} type={'slot'}/>\n    "
		},
		ai: { description: "\nA utility component that acts as a dynamic slot switcher based on an \"area\" context.\nIt retrieves the current area value from the injection context (UI_AREA_VALUE) or uses the 'areaDefault' prop.\nIt then renders the slot that matches the area name. If no matching slot is found, it falls back to the 'default' slot.\nThis is particularly useful for building layouts where different components need to render different content depending on where they are placed (e.g., in a header, footer, or side panel).\n    " }
	},
	{
		name: "Actions",
		description: {
			en: "A flexible container component for organizing action buttons with primary and secondary groups, supporting various alignment options and adaptive behavior.",
			ru: "Гибкий компонент-контейнер для организации кнопок действий с основной и вторичной группами, поддерживающий различные варианты выравнивания и адаптивное поведение."
		},
		possibilities: {
			en: [
				"Organizes action buttons into primary and secondary groups",
				"Supports multiple alignment modes: left, right, center, block",
				"Flexible layout that adapts to available space",
				"Automatic spacing between button groups",
				"Customizable button attributes for each group",
				"Responsive behavior with adaptive breakpoints",
				"Supports both array-based and slot-based button rendering"
			],
			ru: [
				"Организует кнопки действий в основные и вторичные группы",
				"Поддерживает несколько режимов выравнивания: left, right, center, block",
				"Гибкая раскладка, адаптирующаяся к доступному пространству",
				"Автоматическое расстояние между группами кнопок",
				"Настраиваемые атрибуты кнопок для каждой группы",
				"Адаптивное поведение с точками перехода",
				"Поддерживает рендеринг кнопок через массив и слоты"
			]
		},
		import: [],
		stories: [{
			id: "ActionsSlots",
			name: {
				en: "Slots usage",
				ru: "Использование слотов"
			},
			template: "\n        <DesignComponent>\n          <template #secondary>\n            Secondary Slot\n          </template>\n          <template #default>\n            Default Slot\n          </template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Actions'} type={'actions'}/>\n<StorybookDescriptions componentName={'Actions'} type={'list'}/>\n<StorybookDescriptions componentName={'Actions'} type={'flexible'}/>\n    ",
			slots: "\n<Canvas of={Component.ActionsSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'secondary'}/>\n    "
		},
		ai: { description: "\nLayout container for action button groups, typically used in dialog footers, cards, or forms. Manages spacing, alignment, and separation between primary (main) and secondary action sets.\nSupports multiple alignments (left, center, right, block) and takes arrays of button props (list, listSecondary) to automatically render Button components.\nFeatures both array-based and slot-based rendering for maximum flexibility. Use for standardizing button layouts and ensuring consistent spacing.\n    " }
	},
	{
		name: "ActionSheet",
		description: {
			en: "Mobile-optimized modal component for displaying a list of actions or choices that slide up from the bottom",
			ru: "Мобильно-оптимизированный модальный компонент для отображения списка действий или выборов, выдвигающийся снизу"
		},
		possibilities: {
			en: [
				"bottom-anchored modal panel with smooth slide-up animation",
				"displays primary and secondary action lists",
				"supports cancel button and custom actions",
				"mobile-first design with touch-friendly interface",
				"backdrop click to close functionality",
				"keyboard accessibility support",
				"integration with List and Actions components",
				"customizable appearance and positioning",
				"automatic height adjustment based on content",
				"support for grouped actions with separators"
			],
			ru: [
				"модальная панель, закрепленная снизу, с плавной анимацией выдвижения",
				"отображает основной и второстепенный списки действий",
				"поддержка кнопки отмены и пользовательских действий",
				"мобильно-ориентированный дизайн с удобным сенсорным интерфейсом",
				"закрытие при клике на подложку",
				"поддержка доступности с клавиатуры",
				"интеграция с компонентами List и Actions",
				"настраиваемый внешний вид и позиционирование",
				"автоматическая подстройка высоты под контент",
				"поддержка группировки действий с разделителями"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <template #control=\"{binds}\">\n          <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open Action Sheet</button>\n        </template>\n\n        <template #title>\n          Action Sheet Menu\n        </template>\n\n        <template #default>\n          <h4>Mobile Action Sheet Component</h4>\n          <p>The Action Sheet component provides a mobile-optimized interface for presenting users with a set of actions or choices. It slides up from the bottom of the screen, following familiar patterns from iOS and Material Design guidelines.</p>\n\n          <p>This component is particularly effective for contextual actions related to specific content, such as sharing options, editing tools, or destructive operations. The bottom-anchored design makes it easily accessible on mobile devices while maintaining a clear visual hierarchy.</p>\n\n          <h4>Key Features</h4>\n          <p>The Action Sheet includes support for primary and secondary action lists, allowing you to group related actions logically. It automatically handles touch interactions, backdrop dismissal, and keyboard accessibility, ensuring a consistent user experience across different input methods.</p>\n\n          <p>Integration with List and Actions components provides flexibility in content presentation, while the customizable appearance adapts seamlessly to different design systems and brand requirements. The component automatically adjusts its height based on content, preventing overflow issues while maintaining optimal usability.</p>\n        </template>\n      </DesignComponent>\n    ",
		stories: [{
			id: "ActionSheetVModel",
			name: {
				en: "Two-way binding (v-model)",
				ru: "Двусторонняя привязка (v-model)"
			},
			setup: "\n      return {\n        open: ref(false)\n      }\n      ",
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"open = true\">Open via v-model ({{ open }})</button>\n          </div>\n\n          <DesignComponent v-model:open=\"open\">\n            <div class=\"wiki-storybook-item--padding\">Your content here</div>\n          </DesignComponent>\n        </div>\n      "
		}, {
			id: "ActionSheetAllSlots",
			name: {
				en: "All slots demonstration",
				ru: "Демонстрация всех слотов"
			},
			template: "\n        <DesignComponent>\n          <template #control=\"{binds}\">\n            <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open Action Sheet with All Slots</button>\n          </template>\n\n          <template #title>Title slot</template>\n          <template #default>Default slot</template>\n          <template #footer>Footer slot</template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'ActionSheet'} type={'actionSheet'}/>\n<StorybookDescriptions componentName={'ActionSheet'} type={'touchClose'}/>\n\n<StorybookDescriptions componentName={'Window'} type={'v-model'}/>\n<Canvas of={Component.ActionSheetVModel}/>\n\n<StorybookDescriptions componentName={'Modal'} type={'differences'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Window'} type={'event.window'}/>\n<StorybookDescriptions componentName={'Event'} type={'bars'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Window'} type={'expose'}/>\n    ",
			slots: "\n<Canvas of={Component.ActionSheetAllSlots}/>\n<StorybookDescriptions componentName={'Window'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\" style=\"min-width: 800px;\">\n  <ActionSheet embedded open v-bind=\"args\">\n    <template #control=\"{ binds }\">\n      <button v-bind=\"binds\">Open Menu</button>\n    </template>\n    <template #default>Content goes here...</template>\n  </ActionSheet>\n</div>\n    ",
			description: "\nMobile-optimized modal component (Bottom Sheet) that slides up from the bottom for actions, choices, or secondary content. Follows standard mobile interface patterns (iOS/Material).\nFeatures touch-gestures (swipe-down to close), backdrop dismissal, and keyboard accessibility. Includes primary/secondary action lists and automatic height adjustment based on content.\nHighly flexible with slots (#control, #title, #default, #footer) and controlled primarily via v-model:open. Use for mobile-focused menus, sharing options, or contextual actions.\n    "
		}
	},
	{
		name: "Anchor",
		description: {
			en: "Component for creating hyperlinks or anchor points for navigation",
			ru: "Компонент для создания гиперссылок или якорных точек для навигации"
		},
		possibilities: {
			en: [
				"creating links to other pages or resources",
				"creating anchor points for internal page navigation",
				"support for icons and text",
				"customizable appearance"
			],
			ru: [
				"создание ссылок на другие страницы или ресурсы",
				"создание якорных точек для внутренней навигации по странице",
				"поддержка иконок и текста",
				"настраиваемый внешний вид"
			]
		},
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Anchor'} type={'anchor'}/>\n<StorybookDescriptions componentName={'Anchor'} type={'isCopy'}/>\n<StorybookDescriptions componentName={'Anchor'} type={'hide'}/>\n<StorybookDescriptions componentName={'Anchor'} type={'scroll'}/>\n",
			expose: "\n<StorybookDescriptions componentName={'Anchor'} type={'expose.go'}/>\n",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n"
		},
		ai: { description: "\nNavigation component for creating hyperlinks, internal page anchors, and interactive links. Wraps the native <a> tag with additional support for smooth scrolling and clipboard operations.\nFeatures automated scroll-to-id behavior with custom offsets and a built-in copy-to-clipboard function (isCopy). Supports icon integration for different link types and success feedback.\nControlled primarily through href or name props. Use for table of contents, permalinks, external resource links, or quick-copy action buttons for IDs and URLs.\n    " }
	},
	{
		name: "Arrow",
		description: {
			en: "Component for displaying an arrow or directional indicator",
			ru: "Компонент для отображения стрелки или индикатора направления"
		},
		possibilities: {
			en: [
				"displaying directional arrows",
				"customizable size and color",
				"rotation support"
			],
			ru: [
				"отображение направляющих стрелок",
				"настраиваемый размер и цвет",
				"поддержка вращения"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n      <div class=\"wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center\">\n        <div>\n          <div\n            style=\"\n              width: 256px;\n              margin-bottom: 32px;\n              margin-left: 32px;\n            \"\n          >\n            <div\n              id=\"id-arrow-target\"\n              style=\"\n                padding: 8px;\n                width: min-content;\n                border-radius: 8px;\n                background-color: oklch(90.2% 0.063 306.703);\n              \"\n            >\n              Target\n            </div>\n          </div>\n          <div\n            style=\"\n              position: relative;\n              width: 256px;\n              height: 128px;\n              border-radius: 16px;\n              background-color: oklch(93.2% 0.032 255.585);\n              border: 2px solid oklch(80.9% 0.105 251.813);\n              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);\n            \"\n          >\n            <DesignComponent v-bind=\"args\"/>\n          </div>\n        </div>\n      </div>\n    ",
		stories: [{
			id: "ArrowBasic",
			name: {
				en: "Basic",
				ru: "Базовые"
			},
			setup: "\n      const elementBasic = ref()\n      const elementTarget = ref()\n      const elementArray = ref()\n\n      const x = ref('0px')\n      const y = ref('0px')\n\n      const onClick = (event: PointerEvent) => {\n        if (elementBasic.value) {\n          const rect = elementBasic.value.getBoundingClientRect()\n          let offsetX = 0\n          let offsetY = 0\n\n          if (elementTarget.value) {\n            const targetRect = elementTarget.value.getBoundingClientRect()\n            offsetX = targetRect.width / 2\n            offsetY = targetRect.height / 2\n          }\n\n          x.value = (event.clientX - rect.left - offsetX) + 'px'\n          y.value = (event.clientY - rect.top - offsetY) + 'px'\n\n          requestAnimationFrame(() => elementArray.value?.update())\n        }\n      }\n\n      return {\n        elementBasic,\n        elementTarget,\n        elementArray,\n        x,\n        y,\n        onClick\n      }\n      ",
			template: "\n        <div\n          class=\"wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center\"\n          style=\"cursor: crosshair;\"\n          @click=\"onClick\"\n        >\n          <div>\n            <div\n              style=\"\n              opacity: 0.5;\n              font-size: 14px;\n              margin-bottom: 8px;\n              text-align: center;\n            \"\n            >\n              Click to move target\n            </div>\n            <div\n              ref=\"elementBasic\"\n              style=\"\n              position: relative;\n              margin-bottom: 96px;\n              margin-left: 32px;\n              z-index: 32;\n            \"\n            >\n              <div\n                ref=\"elementTarget\"\n                id=\"id-arrow-target-2\"\n                style=\"\n                position: absolute;\n                padding: 8px;\n                width: min-content;\n                border-radius: 8px;\n                background-color: oklch(90.2% 0.063 306.703);\n                text-wrap: nowrap;\n                pointer-events: none;\n              \"\n                :style=\"{left: x, top: y}\"\n              >\n                Target Element Example\n              </div>\n            </div>\n            <div\n              style=\"\n              position: relative;\n              width: 256px;\n              height: 128px;\n              border-radius: 16px;\n              background-color: oklch(93.2% 0.032 255.585);\n              border: 2px solid oklch(80.9% 0.105 251.813);\n              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);\n            \"\n            >\n              <DesignComponent\n                ref=\"elementArray\"\n                position=\"auto\"\n                element-target=\"#id-arrow-target-2\"\n              />\n            </div>\n          </div>\n        </div>\n      "
		}],
		documentation: { body: "\n<StorybookDescriptions componentName={'Arrow'} type={'arrow'}/>\n<Canvas of={Component.ArrowBasic}/>\n" },
		ai: {
			render: "\n<div :class=\"classDemo.item\" style=\"position: relative; width: 48px; height: 48px; background-color: oklch(93.2% 0.032 255.585);\">\n    <Arrow position=\"top\" v-bind=\"args\"/>\n</div>\n    ",
			description: "\nFunctional directional indicator (pointer) designed to connect floating containers like tooltips, popovers, or menus with their target elements. Automatically calculates positioning and orientation to create a seamless speech-bubble or callout effect.\nFeatures smart auto-positioning logic, support for inverse directions, and automated style inheritance. It inherits background and border properties from its parent container (Window or custom wrapper) to ensure visual consistency without manual configuration.\nIdeal for enhanced spatial context in complex UIs. Use within floating components to clearly indicate the source of a message or action. Controlled via position and elementTarget props, with an exposed update method for manual synchronization.\n    "
		}
	},
	{
		name: "Badge",
		description: {
			en: "Small visual indicator for displaying status, count, or notifications on interface elements",
			ru: "Небольшой визуальный индикатор для отображения статуса, количества или уведомлений на элементах интерфейса"
		},
		possibilities: {
			en: [
				"multiple color variants for different status types",
				"content customization with text or numbers",
				"positioning relative to parent elements",
				"maximum value display with overflow handling",
				"visibility control and animation support"
			],
			ru: [
				"множественные цветовые варианты для разных типов статуса",
				"настройка содержимого с текстом или числами",
				"позиционирование относительно родительских элементов",
				"отображение максимального значения с обработкой переполнения",
				"управление видимостью и поддержка анимации"
			]
		},
		import: [],
		render: "\n      <div class=\"wiki-storybook-group\">\n        <div class=\"wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible\">\n          <DesignComponent v-bind=\"args\"/>\n        </div>\n      </div>\n    ",
		stories: [
			{
				id: "BadgeBasic",
				name: {
					en: "Basic",
					ru: "Базовые"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent overlap=\"static\">Badge</DesignComponent>\n          <DesignComponent overlap=\"static\" icon=\"home\">Badge</DesignComponent>\n          <DesignComponent overlap=\"static\">99</DesignComponent>\n          <DesignComponent overlap=\"static\" label=\"999\" label-max=\"99\"/>\n        </div>\n      "
			},
			{
				id: "BadgeDot",
				name: {
					en: "Dot",
					ru: "Точечные (dot)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent dot overlap=\"static\"/>\n        </div>\n      "
			},
			{
				id: "BadgePrimary",
				name: {
					en: "Primary",
					ru: "Основные (primary)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent primary overlap=\"static\" icon=\"home\"/>\n          <DesignComponent primary overlap=\"static\">Badge</DesignComponent>\n        </div>\n      ",
				propsName: "primary"
			},
			{
				id: "BadgeSecondary",
				name: {
					en: "Secondary",
					ru: "Второстепенные (secondary)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent secondary overlap=\"static\" icon=\"home\"/>\n          <DesignComponent secondary overlap=\"static\">Badge</DesignComponent>\n        </div>\n      ",
				propsName: "secondary"
			},
			{
				id: "BadgeOutline",
				name: {
					en: "Outline",
					ru: "Контурные (outline)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent outline overlap=\"static\" icon=\"home\"/>\n          <DesignComponent outline overlap=\"static\">Badge</DesignComponent>\n        </div>\n      ",
				propsName: "outline"
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Badge'} type={'badge'}/>\n<Canvas of={Component.BadgeBasic}/>\n\n<StorybookDescriptions componentName={'Badge'} type={'dot'}/>\n<Canvas of={Component.BadgeDot}/>\n\n<template prop=\"primary\">\n<StorybookDescriptions componentName={'Badge'} type={'primary'}/>\n<Canvas of={Component.BadgePrimary}/>\n</template>\n\n<template prop=\"secondary\">\n<StorybookDescriptions componentName={'Badge'} type={'secondary'}/>\n<Canvas of={Component.BadgeSecondary}/>\n</template>\n\n<template prop=\"outline\">\n<StorybookDescriptions componentName={'Badge'} type={'outline'}/>\n<Canvas of={Component.BadgeOutline}/>\n</template>\n\n<StorybookDescriptions componentName={'Value'} type={'labelNumber'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\" style=\"min-width: 48px; min-height: 48px;\">\n  <Badge overlap=\"static\" v-bind=\"args\"/>\n</div>\n    ",
			description: "\nSmall visual indicator used to display status, counts, notifications, or short labels (tags). Typically positioned over the corner of another element (like an icon or avatar) or used inline.\nFeatures numeric handling with label-max cap (e.g., \"99+\"), dot-only mode for status indication, and support for icons. Includes flexible positioning (overlap: rectangular or circular) and various color variants.\nControlled primarily through the label, icon, and dot props. Use for unread counts, online status indicators, or marking items as \"New\" or \"Sale\" in e-commerce contexts.\n    "
		}
	},
	{
		name: "Bars",
		description: {
			en: "A versatile bar component for headers, toolbars, or action bars, displaying titles, descriptions, and interactive buttons.",
			ru: "Универсальный компонент-панель для заголовков, панелей инструментов или панелей действий, отображающий заголовки, описания и интерактивные кнопки."
		},
		possibilities: {
			en: [
				"Displays a primary label and a secondary description.",
				"Includes an optional back button for navigation.",
				"Supports a primary set of interactive buttons.",
				"Features an \"action mode\" with a separate set of buttons, label, and description.",
				"Allows full customization of button appearance and behavior."
			],
			ru: [
				"Отображает основной заголовок и дополнительное описание.",
				"Включает опциональную кнопку \"назад\" для навигации.",
				"Поддерживает основной набор интерактивных кнопок.",
				"Имеет \"режим действия\" с отдельным набором кнопок, заголовком и описанием.",
				"Позволяет полностью настраивать внешний вид и поведение кнопок."
			]
		},
		import: ["import { ref } from 'vue'"],
		stories: [
			{
				id: "BarsBasic",
				name: {
					en: "Basic",
					ru: "Базовые"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent\n            label=\"Page Title\"\n            description=\"A concise description for this page\"\n            :bars=\"[\n              { icon: 'search' },\n              { icon: 'refresh' },\n              { icon: 'more_vert' }\n            ]\"\n          />\n\n          <DesignComponent\n            action\n            action-label=\"2 selected\"\n            action-description=\"Choose an action to apply\"\n            :action-bars=\"[\n              { icon: 'share' },\n              { icon: 'edit' },\n              { icon: 'delete' }\n            ]\"\n          />\n        </div>\n      "
			},
			{
				id: "BarsVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      return {\n        isAction: ref(false)\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"isAction = !isAction\">Toggle action ({{ isAction ? 'on' : 'off' }})</button>\n          </div>\n          <DesignComponent\n            v-model:action=\"isAction\"\n            label=\"Page Title\"\n            description=\"A concise description for this example\"\n            :bars=\"[\n              { icon: 'search' },\n              { icon: 'refresh' },\n              { icon: 'more_vert' }\n            ]\"\n            action-label=\"2 selected\"\n            action-description=\"Choose an action to apply\"\n            :action-bars=\"[\n              { icon: 'share' },\n              { icon: 'edit' },\n              { icon: 'delete' }\n            ]\"\n            style=\"margin-top: 8px;\"\n          />\n        </div>\n      "
			},
			{
				id: "BarsSkeleton",
				name: {
					en: "Skeleton loading",
					ru: "Загрузка скелетона"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\">\n          <DesignComponent\n            :isSkeleton=\"true\"\n            label=\"Page Title\"\n            description=\"A concise description for this header\"\n            :bars=\"[\n              { icon: 'search' },\n              { icon: 'refresh' },\n              { icon: 'more_vert' }\n            ]\"\n          />\n        </DesignSkeleton>\n      "
			},
			{
				id: "BarsSlots",
				name: {
					en: "Slots usage",
					ru: "Использование слотов"
				},
				setup: "\n      return {\n        isAction: ref(false)\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"isAction = !isAction\">Toggle action ({{ isAction ? 'on' : 'off' }})</button>\n          </div>\n          <DesignComponent v-model:action=\"isAction\">\n            <template #default>Custom Label slot</template>\n            <template #description>Custom Description slot</template>\n            <template #bars>Custom Bars Slot</template>\n            <template #actionBars>Custom ActionBars Slot</template>\n          </DesignComponent>\n        </div>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Bars'} type={'bars'}/>\n<StorybookDescriptions componentName={'Bars'} type={'action'}/>\n<Canvas of={Component.BarsBasic}/>\n<StorybookDescriptions componentName={'Bars'} type={'v-model'}/>\n<Canvas of={Component.BarsVModel}/>\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.BarsSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			slots: "\n<Canvas of={Component.BarsSlots}/>\n<StorybookDescriptions componentName={'Bars'} type={'slots'}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n    "
		},
		ai: { description: "\nStructural header or toolbar component for pages, cards, and windows. Provides a consistent layout for titles, descriptions, and interactive action buttons.\nFeatures a built-in back navigation button, primary action button list (bars), and a specialized \"action mode\" for contextual states (e.g., selection). Supports skeleton loading and full button customization.\nControlled via label/description props and action boolean for state switching. Use for top-level page headers, modal toolbars, or dynamic action bars that appear after item selection.\n    " }
	},
	{
		name: "Block",
		description: {
			en: "A versatile structural component that serves as a container with support for labels, descriptions, captions, icons, and headlines",
			ru: "Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков"
		},
		possibilities: {
			en: [
				"displaying a headline, label, description, and caption",
				"support for icons",
				"customizable HTML tag",
				"flexible layout for content organization"
			],
			ru: [
				"отображение заголовка, метки, описания и подписи",
				"поддержка иконок",
				"настраиваемый HTML-тег",
				"гибкая компоновка для организации контента"
			]
		},
		import: [],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <p>\n          The Block component serves as a fundamental building unit for constructing complex user interfaces.\n          It provides a flexible container that can host various content elements such as labels, descriptions, and icons.\n        </p>\n        <p>\n          With its versatile design, the Block component adapts seamlessly to different layout requirements.\n          Whether you need a simple content wrapper or a detailed card with a headline and caption, this component handles it all.\n        </p>\n        <p>\n          Developers can easily customize the appearance and behavior of the Block using properties and slots.\n          This ensures that the component fits perfectly into any design system while maintaining consistency across the application.\n        </p>\n      </DesignComponent>\n    ",
		stories: [{
			id: "BlockBasic",
			name: {
				en: "Basic",
				ru: "Базовые"
			},
			template: "\n        <DesignComponent\n          headline=\"Account Settings\"\n          label=\"Profile Information\"\n          description=\"Manage your personal details and public profile presence.\"\n        >\n          <p>Welcome to your profile overview. Here you can update your name, bio, and contact information.</p>\n        </DesignComponent>\n      "
		}, {
			id: "BlockSlots",
			name: {
				en: "Slots usage",
				ru: "Использование слотов"
			},
			template: "\n        <DesignComponent>\n          <template #default>Default slot</template>\n          <template #headline>Headline slot</template>\n          <template #label>Label slot</template>\n          <template #description>Description slot</template>\n          <template #caption>Caption slot</template>\n          <template #trailing>Trailing slot</template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Block'} type={'block'}/>\n<Canvas of={Component.BlockBasic}/>\n\n<StorybookDescriptions componentName={'Block'} type={'differences'}/>\n",
			slots: "\n<Canvas of={Component.BlockSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'headline'}/>\n<StorybookDescriptions componentName={'Slot'} type={'label'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Slot'} type={'caption'}/>\n<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>\n",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>\n<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>\n"
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Block v-bind=\"args\">\n      Main content goes here.\n  </Block>\n</div>\n    ",
			description: "\nVersatile structural container for organizing content with a standardized layout. Automatically arranges headlines, icons, labels, captions, and body content within a unified block element.\nFeatures support for custom HTML tags (e.g., section, article) and flexible slot-based content organization. Includes a dedicated headline area for section titles and a trailing slot for actions.\nControlled primarily through content props (label, headline, description) or various slots (#default, #headline, #trailing). Use for card headers, complex list items, or clearly defined page sections.\n    "
		}
	},
	{
		name: "Button",
		description: {
			en: "Interactive button component for user actions",
			ru: "Интерактивный компонент кнопки для действий пользователя"
		},
		possibilities: {
			en: [
				"multiple visual variants for different use cases",
				"different sizes from extra small to extra large",
				"built-in accessibility support",
				"focus, hover, and active states",
				"disabled and loading states support",
				"customizable styling through design tokens"
			],
			ru: [
				"множественные визуальные варианты для разных случаев использования",
				"различные размеры от очень маленького до очень большого",
				"встроенная поддержка доступности",
				"состояния focus, hover и active",
				"поддержка отключенного состояния и состояния загрузки",
				"настраиваемая стилизация через токены дизайна"
			]
		},
		import: [],
		stories: [
			{
				id: "ButtonBasic",
				name: {
					en: "Basic",
					ru: "Базовые"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent>Button</DesignComponent>\n          <DesignComponent icon=\"home\">Button</DesignComponent>\n          <DesignComponent icon-trailing=\"arrow_forward\">Button</DesignComponent>\n        </div>\n      "
			},
			{
				id: "ButtonPrimary",
				name: {
					en: "Primary",
					ru: "Основные (primary)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent primary>Button</DesignComponent>\n          <DesignComponent primary icon=\"home\">Button</DesignComponent>\n          <DesignComponent primary selected>Button</DesignComponent>\n          <DesignComponent primary disabled>Button</DesignComponent>\n        </div>\n      ",
				propsName: "primary"
			},
			{
				id: "ButtonSecondary",
				name: {
					en: "Secondary",
					ru: "Второстепенные (secondary)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent secondary>Button</DesignComponent>\n          <DesignComponent secondary icon=\"home\">Button</DesignComponent>\n          <DesignComponent secondary selected>Button</DesignComponent>\n          <DesignComponent secondary disabled>Button</DesignComponent>\n        </div>\n      ",
				propsName: "secondary"
			},
			{
				id: "ButtonOutline",
				name: {
					en: "Outline",
					ru: "Контурные (outline)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent outline>Button</DesignComponent>\n          <DesignComponent outline icon=\"home\">Button</DesignComponent>\n          <DesignComponent outline selected>Button</DesignComponent>\n          <DesignComponent outline disabled>Button</DesignComponent>\n        </div>\n      ",
				propsName: "outline"
			},
			{
				id: "ButtonText",
				name: {
					en: "Text",
					ru: "Текстовые (text)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent text>Button</DesignComponent>\n          <DesignComponent text icon=\"home\">Button</DesignComponent>\n          <DesignComponent text selected>Button</DesignComponent>\n          <DesignComponent text disabled>Button</DesignComponent>\n        </div>\n      ",
				propsName: "text"
			},
			{
				id: "ButtonAdaptive",
				name: {
					en: "Adaptive",
					ru: "Адаптивные"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Default</div>\n            <DesignComponent icon=\"home\" label=\"Button\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Adaptive</div>\n            <DesignComponent adaptive=\"fullSm\" icon=\"home\" label=\"Button\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container\">\n            <div class=\"wiki-storybook-item__label\">Container</div>\n            <DesignComponent container=\"fullSm\" icon=\"home\" label=\"Button\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "ButtonSkeleton",
				name: {
					en: "Skeleton",
					ru: "Скелетон"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\">\n          <DesignComponent isSkeleton>Button</DesignComponent>\n        </DesignSkeleton>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Button'} type={'button'}/>\n<Canvas of={Component.ButtonBasic}/>\n\n<template prop=\"primary\">\n<StorybookDescriptions componentName={'Button'} type={'primary'}/>\n<Canvas of={Component.ButtonPrimary}/>\n</template>\n\n<template prop=\"secondary\">\n<StorybookDescriptions componentName={'Button'} type={'secondary'}/>\n<Canvas of={Component.ButtonSecondary}/>\n</template>\n\n<template prop=\"outline\">\n<StorybookDescriptions componentName={'Button'} type={'outline'}/>\n<Canvas of={Component.ButtonOutline}/>\n</template>\n\n<template prop=\"text\">\n<StorybookDescriptions componentName={'Button'} type={'text'}/>\n<Canvas of={Component.ButtonText}/>\n</template>\n\n<StorybookDescriptions componentName={'Value'} type={'value'}/>\n\n<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>\n<Canvas of={Component.ButtonAdaptive}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.ButtonSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'value'}/>\n<StorybookDescriptions componentName={'Expose'} type={'detail'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: { description: "\nFundamental interactive component for user actions, navigation, and form submission. Supports various visual styles (primary, secondary, outline, text), states, and content configurations.\nFeatures built-in support for icons (Material Symbols), loading spinners, and disabled/selected states. Includes native-like navigation via \"to\" (Vue Router) or \"href\" (external) props and supports skeleton loading.\nHighly customizable through design tokens and adaptive layout options. Controlled primarily via click events and various styling props. Use for call-to-actions, navigation links, or icon-only toggle buttons.\n    " }
	},
	{
		name: "Cell",
		description: {
			en: "Versatile container component for displaying structured content with labels, descriptions, and actions",
			ru: "Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями"
		},
		possibilities: {
			en: [
				"flexible content structure with label, description, and caption",
				"interactive states including focus, selected, and disabled",
				"built-in icon and trailing icon support",
				"progress indicator integration",
				"divider customization options",
				"dynamic behavior with hover interactions",
				"skeleton loading state support",
				"click event handling with custom data"
			],
			ru: [
				"гибкая структура контента с меткой, описанием и подписью",
				"интерактивные состояния включая focus, selected и disabled",
				"встроенная поддержка иконок и завершающих иконок",
				"интеграция индикатора прогресса",
				"возможности настройки разделителей",
				"динамическое поведение с взаимодействием при наведении",
				"поддержка состояния загрузки скелетона",
				"обработка событий клика с пользовательскими данными"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\"/>\n    <DesignComponent v-bind=\"args\"/>\n    <DesignComponent v-bind=\"args\"/>\n    ",
		import: [],
		stories: [{
			id: "CellSkeleton",
			name: {
				en: "Skeleton loading",
				ru: "Загрузка скелетона"
			},
			components: ["Skeleton"],
			template: "\n        <DesignSkeleton :active=\"true\">\n          <DesignComponent\n            :isSkeleton=\"true\"\n            caption=\"Caption\"\n            description=\"Short desc.\"\n            label=\"A\"\n          />\n          <DesignComponent\n            :isSkeleton=\"true\"\n            caption=\"Caption\"\n            description=\"A bit longer description for the cell component.\"\n            label=\"Label Example\"\n          />\n          <DesignComponent\n            :isSkeleton=\"true\"\n            caption=\"Caption\"\n            description=\"This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the cell.\"\n            label=\"Very Long Label Example for Skeleton\"\n          />\n        </DesignSkeleton>\n      "
		}, {
			id: "CellSlots",
			name: {
				en: "Slots usage",
				ru: "Использование слотов"
			},
			template: "\n        <DesignComponent icon=\"home\">\n          <template #default>Default slot</template>\n          <template #description>Description slot</template>\n          <template #caption>Caption slot</template>\n          <template #trailing>Trailing slot</template>\n          <template #body>Body slot</template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Cell'} type={'cell'}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.CellSkeleton}/>\n",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'value'}/>\n<StorybookDescriptions componentName={'Expose'} type={'detail'}/>\n<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>\n<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>\n    ",
			slots: "\n<Canvas of={Component.CellSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'caption'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Cell'} type={'slots'}/>\n"
		},
		ai: { description: "\nUniversal list item component for building structured interfaces like menus, settings, and data lists. Provides a standardized row layout with dedicated areas for icons, text, and actions.\nFeatures a composable structure with label, description, and caption support. Includes interactive states (hover, focus, selected, loading), built-in Ripple effect, and skeleton loading integration.\nHighly flexible via slots (#default, #trailing, #body) and controlled through content props and navigation attributes (to/href). Use for clickable rows, menu items, or complex data entities in lists.\n    " }
	},
	{
		name: "Checkbox",
		description: {
			en: "Interactive checkbox component for binary or indeterminate state selection",
			ru: "Интерактивный компонент чекбокса для выбора бинарного или неопределённого состояния"
		},
		possibilities: {
			en: [
				"checked, unchecked, and indeterminate states",
				"built-in validation support with custom messages",
				"label and description text support",
				"customizable icons for checked and indeterminate states",
				"disabled and loading states",
				"ripple effect on interaction",
				"skeleton state for loading placeholders",
				"adaptive layout options",
				"form integration with name and value attributes"
			],
			ru: [
				"состояния: отмечен, не отмечен и неопределённое",
				"встроенная поддержка валидации с пользовательскими сообщениями",
				"поддержка текста метки и описания",
				"настраиваемые иконки для состояний отмечен и неопределённое",
				"состояния отключения и загрузки",
				"эффект волны при взаимодействии",
				"состояние скелетона для заполнителей загрузки",
				"опции адаптивной разметки",
				"интеграция с формами через атрибуты name и value"
			]
		},
		import: ["import { ref } from 'vue'"],
		stories: [
			{
				id: "CheckboxVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      return {\n        checkboxValue: ref(false),\n        indeterminateValue: ref(null)\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"checkboxValue = !checkboxValue\">Check {{ checkboxValue }}</button>\n          </div>\n          <DesignComponent\n            v-model=\"checkboxValue\"\n            label=\"Checkbox with v-model\"\n          />\n        </div>\n      "
			},
			{
				id: "CheckboxSkeleton",
				name: {
					en: "Skeleton",
					ru: "Скелетон"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\">\n          <div class=\"wiki-storybook-flex-column\">\n            <DesignComponent isSkeleton label=\"Loading checkbox\" />\n            <DesignComponent isSkeleton label=\"Another loading checkbox\" />\n          </div>\n        </DesignSkeleton>\n      "
			},
			{
				id: "CheckboxSlots",
				name: {
					en: "Slots usage",
					ru: "Использование слотов"
				},
				template: "\n        <DesignComponent>\n          <template #default>\n            <strong>Custom label slot</strong>\n          </template>\n          <template #description>\n            <em>Custom description slot</em>\n          </template>\n        </DesignComponent>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Checkbox'} type={'checkbox'}/>\n\n<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>\n<StorybookDescriptions componentName={'Checkbox'} type={'indeterminate'}/>\n<StorybookDescriptions componentName={'Value'} type={'v-model'}/>\n<Canvas of={Component.CheckboxVModel}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.CheckboxSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'input'}/>\n<StorybookDescriptions componentName={'Event'} type={'change'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'value'}/>\n<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>\n<StorybookDescriptions componentName={'Expose'} type={'validationMessage'}/>\n    ",
			slots: "\n<Canvas of={Component.CheckboxSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'label'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n    "
		},
		ai: { description: "\nForm control component for binary (yes/no) or indeterminate state selection. Allows users to toggle specific options or select multiple items from a list with visual feedback.\nFeatures support for primary label, secondary description, and custom icons for checked/indeterminate states. Includes built-in validation, loading indicators, and adaptive layout options.\nControlled via v-model or value prop and emits @input/@change events. Use for terms agreement, feature toggles, or parent-child coordinated selections (via indeterminate state).\n    " }
	},
	{
		name: "Chip",
		description: {
			en: "Compact element that represents an input, attribute, or action",
			ru: "Компактный элемент, представляющий ввод, атрибут или действие"
		},
		possibilities: {
			en: [
				"multiple visual variants for different contexts",
				"selectable state for user interaction",
				"disabled state support",
				"customizable styling through design tokens",
				"icon support for enhanced visual representation",
				"adaptive behavior for different screen sizes"
			],
			ru: [
				"множественные визуальные варианты для разных контекстов",
				"выбираемое состояние для взаимодействия пользователя",
				"поддержка отключенного состояния",
				"настраиваемая стилизация через токены дизайна",
				"поддержка иконок для улучшенного визуального представления",
				"адаптивное поведение для разных размеров экрана"
			]
		},
		import: [],
		stories: [
			{
				id: "ChipInput",
				name: {
					en: "Input",
					ru: "Ввод (input)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent>Chip</DesignComponent>\n          <DesignComponent input>Tag</DesignComponent>\n          <DesignComponent input icon=\"person\">Contact</DesignComponent>\n          <DesignComponent input selected icon=\"tag\">Keyword</DesignComponent>\n        </div>\n      ",
				propsName: "input"
			},
			{
				id: "ChipAssistive",
				name: {
					en: "Assistive",
					ru: "Вспомогательные (assistive)"
				},
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent>Chip</DesignComponent>\n          <DesignComponent assistive>Chip</DesignComponent>\n          <DesignComponent assistive icon=\"lightbulb\">Suggestion</DesignComponent>\n          <DesignComponent assistive selected icon=\"check\">Recommended</DesignComponent>\n        </div>\n      ",
				propsName: "assistive"
			},
			{
				id: "ChipAdaptive",
				name: {
					en: "Adaptive",
					ru: "Адаптивные"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Default</div>\n            <DesignComponent icon=\"star\" label=\"Chip\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Adaptive</div>\n            <DesignComponent adaptive=\"fullSm\" icon=\"star\" label=\"Chip\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container\">\n            <div class=\"wiki-storybook-item__label\">Container</div>\n            <DesignComponent container=\"fullSm\" icon=\"star\" label=\"Chip\"/>\n          </div>\n        </div>\n      ",
				propsName: "adaptive"
			},
			{
				id: "ChipSkeleton",
				name: {
					en: "Skeleton",
					ru: "Скелетон"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\">\n          <DesignComponent isSkeleton>Chip</DesignComponent>\n        </DesignSkeleton>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Chip'} type={'chip'}/>\n\n<template prop=\"input\">\n<StorybookDescriptions componentName={'Chip'} type={'input'}/>\n<Canvas of={Component.ChipInput}/>\n</template>\n\n<template prop=\"assistive\">\n<StorybookDescriptions componentName={'Chip'} type={'assistive'}/>\n<Canvas of={Component.ChipAssistive}/>\n</template>\n\n<StorybookDescriptions componentName={'Value'} type={'value'}/>\n\n<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>\n<Canvas of={Component.ChipAdaptive}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.ChipSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'value'}/>\n<StorybookDescriptions componentName={'Expose'} type={'detail'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: { description: "\nCompact interactive element representing an input, attribute, or action. Used for entering information, making selections, filtering content, or triggering immediate actions in a space-efficient way.\nFeatures multiple functional variants (Action, Input, Assistive, Filter) with support for leading icons and selection states. Includes built-in support for disabled/selected states and adaptive layout options.\nControlled via value/label props and emits @click events with detailed data. Use for filter tags, choice groups (like radio buttons), or representing entities like contacts in input fields.\n    " }
	},
	{
		name: "ChipGroup",
		description: {
			en: "Component for managing a group of interactive chips with support for selection and data binding",
			ru: "Компонент для управления группой интерактивных чипов с поддержкой выбора и привязки данных"
		},
		possibilities: {
			en: [
				"rendering a list of chips from a data array",
				"managing selection state (single or multiple)",
				"customizing the appearance of all chips in the group via chipAttrs",
				"handling click events and value updates",
				"controlling icon visibility based on selection"
			],
			ru: [
				"рендеринг списка чипов из массива данных",
				"управление состоянием выбора (одиночный или множественный)",
				"настройка внешнего вида всех чипов в группе через chipAttrs",
				"обработка событий клика и обновлений значений",
				"управление видимостью иконки в зависимости от выбора"
			]
		},
		import: ["import { ref } from 'vue'"],
		stories: [{
			id: "ChipGroupSelection",
			name: {
				en: "Selection States",
				ru: "Состояния выбора"
			},
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent :list=\"['Option 1', 'Option 2', 'Option 3']\" selected=\"2\"/>\n          <DesignComponent :list=\"['Option 1', 'Option 2', 'Option 3', 'Option 4']\" :selected=\"['2', '3']\"/>\n          <DesignComponent\n            :list=\"[\n              { label: 'Option 1', icon: 'check', value: 'option1' },\n              { label: 'Option 2', icon: 'check', value: 'option2' },\n              { label: 'Option 3', icon: 'check', value: 'option3' }\n            ]\"\n            :selected=\"['option2']\"\n            :icon-when-selected=\"true\"\n          />\n        </div>\n      "
		}, {
			id: "ChipGroupVModel",
			name: {
				en: "Two-way binding (v-model)",
				ru: "Двусторонняя привязка (v-model)"
			},
			setup: "\n      return {\n        multipleSelected: ref(['option1', 'option3'])\n      }\n      ",
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <span>Current value: {{ multipleSelected }}</span>\n            <button class=\"wiki-storybook-button\" @click=\"multipleSelected = ['option1', 'option2']\">Select 1,2</button>\n            <button class=\"wiki-storybook-button\" @click=\"multipleSelected = ['option1', 'option2', 'option3']\">Add 3</button>\n            <button class=\"wiki-storybook-button wiki-storybook-button--warning\" @click=\"multipleSelected = []\">Clear all</button>\n          </div>\n          <DesignComponent\n            v-model:selected=\"multipleSelected\"\n            :list=\"[\n              { label: 'Option 1', value: 'option1', icon: 'check' },\n              { label: 'Option 2', value: 'option2', icon: 'check' },\n              { label: 'Option 3', value: 'option3', icon: 'check' }\n            ]\"\n            :readonly=\"false\"\n            :icon-when-selected=\"true\"\n          />\n        </div>\n      "
		}],
		documentation: {
			body: "\n    <StorybookDescriptions componentName={'ChipGroup'} type={'chipGroup'}/>\n\n    <StorybookDescriptions componentName={'ChipGroup'} type={'selected'}/>\n    <Canvas of={Component.ChipGroupSelection}/>\n\n    <StorybookDescriptions componentName={'Value'} type={'v-model:selected'}/>\n    <Canvas of={Component.ChipGroupVModel}/>\n    ",
			events: "\n    <StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			slots: "\n    <StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: { description: "\nWrapper component for managing collections of Chip elements based on an array of data. Streamlines the creation of filter sets, choice groups, and tag lists by automating iteration and selection logic.\nFeatures support for single and multiple selection modes, shared chip attributes (via chipAttrs), and icon visibility control. Includes built-in data binding for selected values and @click event propagation.\nControlled via the list prop for data and v-model:selected for state. Use for dynamic filtering interfaces, selecting multiple categories, or building interactive tag lists from API data.\n    " }
	},
	{
		name: "Container",
		description: {
			en: "A lightweight layout container for centering and constraining content width with configurable horizontal alignment.",
			ru: "Легковесный компонент-контейнер для центрирования и ограничения ширины контента с настраиваемым горизонтальным выравниванием."
		},
		possibilities: {
			en: [
				"horizontal alignment with align: left | center | right",
				"configurable width and horizontal margins via design tokens",
				"default slot for wrapping arbitrary content",
				"area context support through the area prop"
			],
			ru: [
				"горизонтальное выравнивание через align: left | center | right",
				"настройка ширины и горизонтальных отступов через дизайн-токены",
				"слот default для оборачивания произвольного контента",
				"поддержка контекста области через свойство area"
			]
		},
		import: [],
		render: "\n    <DesignComponent v-bind=\"args\">\n      <p>\n        Container helps keep content readable by limiting line length and controlling side spacing.\n      </p>\n      <p>\n        Use it as a base layout wrapper for page sections, forms, and content blocks.\n      </p>\n    </DesignComponent>\n  ",
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Container'} type={'container'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Container v-bind=\"args\">\n    Main content goes here.\n  </Container>\n</div>\n    ",
			description: "\nLayout wrapper used to constrain content width and manage horizontal spacing in a predictable way.\nSupports alignment options (left, center, right), width tokens, and side margins so page content keeps consistent rhythm across breakpoints.\nUse as a foundational container around sections, forms, and text-heavy blocks to improve readability and layout consistency.\n    "
		}
	},
	{
		name: "Dialog",
		description: {
			en: "Modal dialog component for displaying alerts, confirmations, and informational messages with icon and action buttons",
			ru: "Модальный диалоговый компонент для отображения предупреждений, подтверждений и информационных сообщений с иконкой и кнопками действий"
		},
		possibilities: {
			en: [
				"modal dialog with centered positioning and backdrop",
				"icon support with predefined success and error states",
				"customizable title, description, and content areas",
				"action buttons with OK and Close presets",
				"image positioning (top or left alignment)",
				"integration with Window, Bars, Actions, Icon components",
				"close on ESC key and backdrop click",
				"programmatic control via v-model:open",
				"automatic icon switching based on success/error states",
				"flexible content layout with information block",
				"customizable footer with action buttons",
				"keyboard accessibility and focus management",
				"responsive design with mobile optimization",
				"support for custom button configurations"
			],
			ru: [
				"модальный диалог с центрированием и подложкой",
				"поддержка иконок с предустановленными состояниями успеха и ошибки",
				"настраиваемые области заголовка, описания и контента",
				"кнопки действий с пресетами OK и Закрыть",
				"позиционирование изображения (сверху или слева)",
				"интеграция с компонентами Window, Bars, Actions, Icon",
				"закрытие по ESC и клику на подложку",
				"программное управление через v-model:open",
				"автоматическое переключение иконки на основе состояний успеха/ошибки",
				"гибкая компоновка контента с информационным блоком",
				"настраиваемый футер с кнопками действий",
				"доступность с клавиатуры и управление фокусом",
				"адаптивный дизайн с оптимизацией для мобильных",
				"поддержка пользовательских конфигураций кнопок"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <template #control=\"{binds}\">\n          <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open Dialog</button>\n        </template>\n      </DesignComponent>\n    ",
		stories: [
			{
				id: "DialogStates",
				name: {
					en: "Success and error states",
					ru: "Состояния успеха и ошибки"
				},
				setup: "\n      return {\n        openSuccess: ref(false),\n        openError: ref(false)\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex\">\n          <DesignComponent\n            :success=\"true\"\n            label=\"Operation Successful\"\n            description=\"Your changes have been saved successfully.\"\n          >\n            <template #control=\"{binds}\">\n              <button class=\"wiki-storybook-button\" v-bind=\"binds\">Success Dialog</button>\n            </template>\n          </DesignComponent>\n\n          <DesignComponent\n            :error=\"true\"\n            label=\"Operation Failed\"\n            description=\"An error occurred while processing your request. Please try again.\"\n          >\n            <template #control=\"{binds}\">\n              <button class=\"wiki-storybook-button\" v-bind=\"binds\">Error Dialog</button>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			},
			{
				id: "DialogVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      return {\n        open: ref(false)\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"open = true\">Open via v-model ({{ open }})</button>\n          </div>\n\n          <DesignComponent\n            v-model:open=\"open\"\n            label=\"Confirmation\"\n            description=\"Are you sure you want to proceed with this action?\"\n          />\n        </div>\n      "
			},
			{
				id: "DialogAllSlots",
				name: {
					en: "All slots demonstration",
					ru: "Демонстрация всех слотов"
				},
				template: "\n        <DesignComponent>\n          <template #control=\"{binds}\">\n            <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open Dialog with All Slots</button>\n          </template>\n\n          <template #title>\n            Title Slot\n          </template>\n\n          <template #label>\n            <strong>Label Slot</strong>\n          </template>\n\n          <template #description>\n            <em>Description Slot</em>\n          </template>\n\n          <template #default>\n            Default Slot\n          </template>\n\n          <template #footer=\"{classesWindow}\">\n            Footer Slot\n          </template>\n        </DesignComponent>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Dialog'} type={'dialog'}/>\n\n<StorybookDescriptions componentName={'Dialog'} type={'states'}/>\n<Canvas of={Component.DialogStates}/>\n\n<StorybookDescriptions componentName={'Dialog'} type={'buttons'}/>\n\n<StorybookDescriptions componentName={'Window'} type={'v-model'}/>\n<Canvas of={Component.DialogVModel}/>\n\n<StorybookDescriptions componentName={'Modal'} type={'differences'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Dialog'} type={'events'}/>\n<StorybookDescriptions componentName={'Dialog'} type={'event.dialog'}/>\n<StorybookDescriptions componentName={'Window'} type={'event.window'}/>\n<StorybookDescriptions componentName={'Event'} type={'bars'}/>\n<StorybookDescriptions componentName={'Event'} type={'actions'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Window'} type={'expose'}/>\n    ",
			slots: "\n<Canvas of={Component.DialogAllSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'label'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Window'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Dialog embedded open label=\"Dialog Title\" description=\"This is a description text.\" v-bind=\"args\"/>\n</div>\n    ",
			description: "\nSpecialized modal component for standardized user interactions such as alerts, confirmations, and status messages. Extends the Modal component with a predefined layout for icons, titles, and action buttons.\nFeatures built-in success/error states with automatic icon switching and content styling. Supports flexible positioning of images (top/left) and integrates with Window, Bars, and Actions for a consistent footer.\nControlled via v-model:open and various content props (label, description). Use for critical operations requiring user confirmation, operation success/fail alerts, or informative system messages.\n    "
		}
	},
	{
		name: "Dummy",
		description: {
			en: "A placeholder component used for structural presentation or testing",
			ru: "Компонент-заглушка, используемый для структурного представления или тестирования"
		},
		possibilities: {
			en: ["multiple sizes from extra small to 5xl", "various color palettes"],
			ru: ["множественные размеры от очень маленького до 5xl", "различные цветовые палитры"]
		},
		import: [],
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Dummy'} type={'dummy'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: {
			description: "\nPlaceholder component used for structural presentation, testing, or laying out interfaces early in development. Provides a simple geometric shape to represent where a future component will be placed.\nFeatures configurable sizes (from 'xs' to '5xl') and customizable color palettes. Acts as a lightweight visual anchor without complex logic or dependencies.\nControlled via size and palette props. Use during prototyping to define layout structures before final components are implemented or for testing responsive container behavior.\n    ",
			hide: !0
		}
	},
	{
		name: "Field",
		description: {
			en: "Base container for form controls that composes label, messages, counter, icons and progress",
			ru: "Базовый контейнер для полей ввода, который собирает метку, сообщения, счётчик, иконки и прогресс"
		},
		possibilities: {
			en: [
				"composes FieldLabel, FieldMessage, FieldCounter, Progress and icon includes",
				"handles states: focus, disabled, readonly, selected, block",
				"supports prefix, suffix and caption slots",
				"validation highlighting based on validationMessage and forceShowMessage",
				"optional cancel and navigation (arrow) icons with visibility flags",
				"counter position control with counterTop",
				"integrated helpers for sizing and icons (FieldSize, FieldIcons)"
			],
			ru: [
				"композит из FieldLabel, FieldMessage, FieldCounter, Progress и включений иконок",
				"обрабатывает состояния: focus, disabled, readonly, selected, block",
				"поддерживает слоты prefix, suffix и caption",
				"подсветка валидации на основе validationMessage и forceShowMessage",
				"дополнительные иконки отмены и навигации (стрелки) с флагами видимости",
				"управление позицией счётчика через counterTop",
				"встроенные помощники для размеров и иконок (FieldSize, FieldIcons)"
			]
		},
		import: [],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <template v-slot:default=\"{binds}\">\n          <input :value=\"args.value\" readonly v-bind=\"binds\"/>\n        </template>\n      </DesignComponent>\n    ",
		stories: [
			{
				id: "FieldWidth",
				name: {
					en: "Width",
					ru: "Ширина"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent label=\"auto\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"\" readonly/>\n            </template>\n          </DesignComponent>\n          <DesignComponent width=\"320px\" label=\"320px\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"\" readonly/>\n            </template>\n          </DesignComponent>\n          <DesignComponent width=\"50%\" label=\"50%\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"\" readonly/>\n            </template>\n          </DesignComponent>\n          <DesignComponent width=\"min(100%,320px)\" label=\"min(...)\" >\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"\" readonly/>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			},
			{
				id: "FieldCancel",
				name: {
					en: "Cancel button",
					ru: "Кнопка очистки"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent cancel=\"auto\" label=\"auto\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"\" readonly/>\n            </template>\n          </DesignComponent>\n          <DesignComponent cancel=\"auto\" :cancel-show=\"true\" label=\"auto + value\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"Value\" readonly/>\n            </template>\n          </DesignComponent>\n          <DesignComponent cancel=\"always\" label=\"always\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"\" readonly/>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			},
			{
				id: "FieldNavigation",
				name: {
					en: "Navigation & arrows",
					ru: "Навигация / стрелки"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent arrow-carousel label=\"carousel (start)\" :disabled-previous=\"true\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"Item 1\" readonly/>\n            </template>\n          </DesignComponent>\n          <DesignComponent arrow-carousel label=\"carousel (end)\" :disabled-next=\"true\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"Item 9\" readonly/>\n            </template>\n          </DesignComponent>\n          <DesignComponent arrow-stepper align=\"center\" label=\"stepper (center)\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"42\" readonly/>\n            </template>\n          </DesignComponent>\n          <DesignComponent arrow-stepper label=\"stepper (prev off)\" :disabled-previous=\"true\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" value=\"0\" readonly/>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			},
			{
				id: "FieldSkeleton",
				name: {
					en: "Skeleton",
					ru: "Скелетон"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\" style=\"max-width:280px\">\n          <DesignComponent isSkeleton label=\"Skeleton\" counter=\"12\" helper-message=\"Helper message: loading description.\">\n            <template #default=\"{id, className}\">\n              <input :id=\"id\" :class=\"className\" readonly/>\n            </template>\n          </DesignComponent>\n        </DesignSkeleton>\n      "
			},
			{
				id: "FieldSlots",
				name: {
					en: "Slots usage",
					ru: "Использование слотов"
				},
				template: "\n        <DesignComponent\n          :cancelShow=\"true\"\n          label=\"Label prop\"\n          icon=\"home\"\n          icon-trailing=\"close\"\n          value=\"Value\"\n        >\n          <template #default=\"{id, className}\">\n            <input :id=\"id\" :class=\"className\" value=\"Value\" readonly/>\n          </template>\n          <template #leading>Leading slot</template>\n          <template #trailing>Trailing slot</template>\n          <template #label><b>Label slot</b></template>\n          <template #prefix>Prefix slot</template>\n          <template #suffix>Suffix slot</template>\n          <template #caption>Caption slot</template>\n        </DesignComponent>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Field'} type={'field'}/>\n\n<StorybookDescriptions componentName={'Field'} type={'value'}/>\n\n<StorybookDescriptions componentName={'Field'} type={'width'}/>\n<Canvas of={Component.FieldWidth}/>\n\n<StorybookDescriptions componentName={'Field'} type={'cancel'}/>\n<Canvas of={Component.FieldCancel}/>\n\n<StorybookDescriptions componentName={'Field'} type={'arrows'}/>\n<Canvas of={Component.FieldNavigation}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.FieldSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			slots: "\n<Canvas of={Component.FieldSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'label'} />\n<StorybookDescriptions componentName={'Slot'} type={'prefix'} />\n<StorybookDescriptions componentName={'Slot'} type={'suffix'} />\n<StorybookDescriptions componentName={'Slot'} type={'caption'} />\n<StorybookDescriptions componentName={'Field'} type={'slots'} />\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Field label=\"Field Label\" helper-message=\"Helper text\" v-bind=\"args\">\n    <template v-slot:default=\"{binds}\">\n      <input :value=\"args.value\" readonly v-bind=\"binds as any\"/>\n    </template>\n  </Field>\n</div>\n    ",
			description: "\nFoundational wrapper component for all form inputs. Provides the structural layout, styling, and state management for labels, helper messages, validation errors, icons, and progress indicators.\nFeatures a composable structure with prefix/suffix slots, leading/trailing icons, and a character counter. Automatically handles validation states, loading spinners, and disabled/readonly appearances.\nIntegrates with native inputs via the #default slot, exposing essential bindings (id, class, aria) to maintain design consistency and accessibility. Use as a base when creating custom form controls.\n    ",
			hide: !0
		}
	},
	{
		name: "FieldCounter",
		description: {
			en: "Component for displaying character count and input length limits in form fields",
			ru: "Компонент для отображения счетчика символов и ограничений длины ввода в полях форм"
		},
		possibilities: {
			en: [
				"displays current character count",
				"shows maximum character limit when specified",
				"customizable display template with placeholders",
				"automatic visibility based on counter and maxlength props",
				"supports both string and number values",
				"compact display format (e.g., \"50 / 100\")",
				"template-based formatting with [c] and [m] placeholders"
			],
			ru: [
				"отображает текущее количество символов",
				"показывает максимальное ограничение символов при указании",
				"настраиваемый шаблон отображения с заполнителями",
				"автоматическая видимость на основе свойств counter и maxlength",
				"поддерживает значения как строк, так и чисел",
				"компактный формат отображения (например, \"50 / 100\")",
				"форматирование на основе шаблона с заполнителями [c] и [m]"
			]
		},
		import: [],
		stories: [{
			id: "FieldCounterTemplate",
			name: {
				en: "Custom Template",
				ru: "Пользовательский шаблон"
			},
			template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Default template</div>\n            <DesignComponent :counter=\"75\" :maxlength=\"150\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Custom template: \"Characters: [c] of [m]\"</div>\n            <DesignComponent :counter=\"75\" :maxlength=\"150\" template=\"Characters: [c] of [m]\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Counter only with template: \"[c] chars\"</div>\n            <DesignComponent :counter=\"42\" template=\"<b>[c]</b> chars\"/>\n          </div>\n        </div>\n      "
		}],
		documentation: { body: "\n<StorybookDescriptions componentName={'FieldCounter'} type={'fieldCounter'}/>\n<StorybookDescriptions componentName={'FieldCounter'} type={'templates'}/>\n<Canvas of={Component.FieldCounterTemplate}/>\n    " },
		ai: {
			description: "\nUtility subcomponent for displaying character counts and input limits. Provides visual feedback to users and accessibility status to screen readers during formal data entry.\nFeatures customizable display templates with placeholders ([c] for counter, [m] for max) and automated visibility based on maxlength. Includes ARIA live region management for screen reader announcements.\nIntegrated automatically into components like Input and Textarea; should generally not be used directly. Controlled via counter and maxlength props within the Field wrapper.\n    ",
			hide: !0
		}
	},
	{
		name: "FieldLabel",
		description: {
			en: "Component for displaying a field label and required marker; can be used together with counter and progress",
			ru: "Компонент для отображения метки поля и индикатора обязательности; может использоваться вместе со счетчиком и прогрессом"
		},
		possibilities: {
			en: [
				"renders a text label for form fields",
				"shows required marker when the field is mandatory",
				"works together with FieldCounter and Progress when passed as props",
				"keeps consistent spacing and classes within form controls"
			],
			ru: [
				"рендерит текстовую метку для полей формы",
				"показывает индикатор обязательности для обязательных полей",
				"работает совместно со счетчиком FieldCounter и прогрессом при передаче соответствующих свойств",
				"сохраняет согласованные отступы и классы внутри элементов формы"
			]
		},
		import: [],
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'FieldLabel'} type={'fieldLabel'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'label'} />\n    "
		},
		ai: {
			description: "\nSubcomponent of the Field wrapper responsible for rendering form field labels and required markers. Ensures consistent styling, positioning, and accessibility for all input headings.\nFeatures automated support for the \"required\" property (showing an asterisk) and works seamlessly with character counters and progress bars within the Field header.\nControlled through the label prop or #label slot. Primarily used within Input, Textarea, and other field-based controls; should generally not be used as a standalone component.\n    ",
			hide: !0
		}
	},
	{
		name: "FieldMessage",
		description: {
			en: "Component for displaying helper and validation messages for form fields",
			ru: "Компонент для отображения вспомогательных и валидационных сообщений для полей форм"
		},
		possibilities: {
			en: [
				"shows helper text under the field",
				"displays validation message when error occurs",
				"visibility control via a dedicated force flag",
				"works together with input fields and counters",
				"supports HTML-safe rendering by design system"
			],
			ru: [
				"показывает вспомогательный текст под полем",
				"отображает сообщение валидации при ошибке",
				"управление видимостью через специальный флаг",
				"работает совместно с полями ввода и счетчиками",
				"поддерживает безопасный рендеринг HTML силами дизайн-системы"
			]
		},
		import: [],
		stories: [{
			id: "FieldMessageSlots",
			name: {
				en: "Slots",
				ru: "Слоты"
			},
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent>\n            <template #helper>\n              <span><b>Helper:</b> You can use Latin letters</span>\n            </template>\n          </DesignComponent>\n          <DesignComponent>\n            <template #validation>\n              <span><b>Validation:</b> Please fill out this field</span>\n            </template>\n          </DesignComponent>\n        </div>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'FieldMessage'} type={'fieldMessage'}/>\n    ",
			slots: "\n<Canvas of={Component.FieldMessageSlots}/>\n<StorybookDescriptions componentName={'FieldMessage'} type={'slots'}/>\n    "
		},
		ai: {
			description: "\nSubcomponent of the Field wrapper used to display informational text, validation errors, and character counters beneath input fields. Provides critical visual feedback regarding entry status or requirements.\nFeatures a priority system where validation messages override helper text when an error occurs. Includes automatic status styling (red for errors) and integration with the character counter logic.\nControlled via helperMessage and validationMessage props; linked automatically to the input via ARIA attributes. Primarily used within Field-based components; should generally not be used directly.\n    ",
			hide: !0
		}
	},
	{
		name: "Grid",
		description: {
			en: "Layout component for creating grid structures with customizable columns",
			ru: "Компонент макета для создания сеточных структур с настраиваемыми колонками"
		},
		possibilities: {
			en: [
				"configurable number of columns",
				"gap customization",
				"responsive layout support"
			],
			ru: [
				"настраиваемое количество колонок",
				"настройка отступов (gap)",
				"поддержка адаптивной верстки"
			]
		},
		import: [],
		render: "\n    <DesignComponent>\n        <div\n          class=\"wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm\"\n          style=\"grid-column: span 2;\"\n        />\n        <div\n          class=\"wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm\"\n          style=\"grid-column: span 4;\"\n        />\n        <div\n          class=\"wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm\"\n          style=\"grid-column: span 6;\"\n        />\n    </DesignComponent>\n  ",
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Grid'} type={'grid'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: {
			render: "\n      <div :class=\"classDemo.item\">\n        <Grid v-bind=\"args\">\n          <div style=\"grid-column: span 4;\">1</div>\n          <div style=\"grid-column: span 4;\">2</div>\n          <div style=\"grid-column: span 4;\">3</div>\n        </Grid>\n      </div>\n    ",
			description: "\nLayout utility designed to manage the arrangement of items in a flexible, column-based system. Provides a standardized way to create responsive multi-column layouts across different screen sizes.\nFeatures a default 12-column grid structure with customizable gaps and responsive breakpoint support. Works in tandem with GridItem to provide precise control over column spans and alignment.\nControlled primarily via CSS variables for columns and gaps. Use as a top-level container for dashboard widgets, form layouts, or any content requiring a structured multi-column arrangement.\n    "
		}
	},
	{
		name: "GridItem",
		description: {
			en: "Individual item within a Grid component",
			ru: "Отдельный элемент внутри компонента Grid"
		},
		possibilities: {
			en: ["configurable span across columns", "responsive span settings (base, sm, md, lg, xl, 2xl)"],
			ru: ["настраиваемый охват колонок (span)", "адаптивные настройки охвата (base, sm, md, lg, xl, 2xl)"]
		},
		import: [],
		render: "\n    <div class=\"wiki-storybook-group\">\n      <DesignComponent v-bind=\"args\">\n        <div class=\"wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm\"/>\n      </DesignComponent>\n    </div>\n  ",
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'GridItem'} type={'gridItem'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\" style=\"min-height: 48px;\">\n  <div style=\"display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px;\">\n    <GridItem v-bind=\"args\">Item</GridItem>\n  </div>\n</div>\n    ",
			description: "\nIndividual cell unit within a Grid layout, providing granular control over column spanning across various screen resolutions. Enables building complex, responsive layouts with minimal CSS.\nFeatures responsive span settings for all major breakpoints (base, sm, md, lg, xl, 2xl). Allows items to occupy different widths on mobile vs desktop, ensuring optimal use of screen space.\nControlled via the base prop for default span and breakpoint-specific props (e.g., md=\"6\"). Use inside a Grid container to define local widths for UI elements, widgets, or form fields.\n    "
		}
	},
	{
		name: "Group",
		description: {
			en: "A structural component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <div> tag and <h4> header by default.",
			ru: "Структурный компонент, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <div> и заголовок <h4>."
		},
		possibilities: {
			en: [
				"standardized grouping of content using <div> tag",
				"support for titles (h4 by default), labels, descriptions, and captions",
				"support for icons",
				"fully inherits Block component capabilities"
			],
			ru: [
				"стандартизированная группировка контента с использованием тега <div>",
				"поддержка заголовков (h4 по умолчанию), меток, описаний и подписей",
				"поддержка иконок",
				"полностью наследует возможности компонента Block"
			]
		},
		import: [],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <p>\n          The Group component serves as a container for grouping thematic content within a page or another component.\n          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.\n        </p>\n        <p>\n          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.\n        </p>\n      </DesignComponent>\n    ",
		stories: [{
			id: "GroupBasic",
			name: {
				en: "Basic",
				ru: "Базовые"
			},
			template: "\n        <DesignComponent\n          headline=\"Notifications\"\n          label=\"Settings\"\n          icon=\"notifications\"\n          description=\"Configure how you receive notifications and manage your alert settings for a better user experience.\"\n        >\n          <p>\n            Control how and when you receive updates from the system. You can choose to be notified about\n            important account activities, new features, and marketing updates.\n          </p>\n          <p>\n            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.\n            Changes are saved automatically and applied within a few minutes.\n          </p>\n        </DesignComponent>\n      "
		}, {
			id: "GroupSlots",
			name: {
				en: "Slots usage",
				ru: "Использование слотов"
			},
			template: "\n        <DesignComponent>\n          <template #default>Default slot</template>\n          <template #headline>Headline slot</template>\n          <template #label>Label slot</template>\n          <template #description>Description slot</template>\n          <template #caption>Caption slot</template>\n          <template #trailing>Trailing slot</template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Group'} type={'group'}/>\n<Canvas of={Component.GroupBasic}/>\n\n<StorybookDescriptions componentName={'Block'} type={'differences'}/>\n",
			slots: "\n<Canvas of={Component.GroupSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'headline'}/>\n<StorybookDescriptions componentName={'Slot'} type={'label'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Slot'} type={'caption'}/>\n<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>\n",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>\n<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>\n"
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Group v-bind=\"args\">\n      Content of the group.\n  </Group>\n</div>\n    ",
			description: "\nStructural component for organizing related content with a standardized header hierarchy. Acts as a semantic wrapper for subsections or grouping elements within a larger section or card.\nFeatures support for headlines (h4 by default), labels, icons, and descriptions. Inherits all capabilities of the Block component, providing a consistent layout for titles and body content.\nControlled via headline, label, and description props. Use for grouping settings, categorizing information, or breaking down complex forms into logical, titled segments.\n    "
		}
	},
	{
		name: "Header",
		description: {
			en: "Component for displaying headers with icons and additional information",
			ru: "Компонент для отображения заголовков с иконками и дополнительной информацией"
		},
		possibilities: {
			en: [
				"support for different HTML tags (h1-h6, div, etc.)",
				"built-in support for icons and captions",
				"customizable trailing content via slots",
				"automatic area value management",
				"standardized typography and spacing"
			],
			ru: [
				"поддержка различных HTML-тегов (h1-h6, div и т.д.)",
				"встроенная поддержка иконок и подписей",
				"настраиваемый правый контент через слоты",
				"автоматическое управление значением области",
				"стандартизированная типографика и отступы"
			]
		},
		import: [],
		stories: [{
			id: "HeaderBasic",
			name: {
				en: "Basic",
				ru: "Базовые"
			},
			template: "\n        <div class=\"wiki-storybook-flex--column\">\n          <DesignComponent label=\"Header Level 1\" tag=\"h1\" />\n          <DesignComponent label=\"Header Level 2\" tag=\"h2\" />\n          <DesignComponent label=\"Header Level 3\" tag=\"h3\" />\n        </div>\n      "
		}, {
			id: "HeaderSlots",
			name: {
				en: "Slots",
				ru: "Слоты"
			},
			template: "\n        <DesignComponent label=\"Default label\" caption=\"Default caption\">\n          <template #default>Custom label slot</template>\n          <template #caption>Custom caption slot</template>\n          <template #trailing>Trailing slot</template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Header'} type={'header'}/>\n<Canvas of={Component.HeaderBasic}/>\n    ",
			events: "",
			expose: "",
			slots: "\n<Canvas of={Component.HeaderSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'caption'}/>\n<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>\n    "
		},
		ai: { description: "\nComponent for creating structured headers with integrated support for icons and captions.\nAllows flexible control over the HTML tag (h1-h6, div) to maintain proper document hierarchy.\nIncludes automatic area management and support for custom trailing content.\nIdeal for section titles, page headers, or grouped content labeling.\n    " }
	},
	{
		name: "HorizontalScroll",
		description: {
			en: "Component for creating a horizontally scrollable container. Supports smooth scrolling to the selected element.",
			ru: "Компонент для создания горизонтально прокручиваемого контейнера. Поддерживает плавную прокрутку к выбранному элементу."
		},
		possibilities: {
			en: [
				"horizontal scrolling of content",
				"automatic scrolling to the selected element on mount",
				"support for custom tags",
				"slot for content with binding data for items"
			],
			ru: [
				"горизонтальная прокрутка контента",
				"автоматическая прокрутка к выбранному элементу при монтировании",
				"поддержка пользовательских тегов",
				"слот для контента с данными привязки для элементов"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\">\n      <template #default=\"{ classItem }\">\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.94 0.06 25);\">Item 1</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.95 0.06 50);\">Item 2</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.96 0.07 70);\">Item 3</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.97 0.08 85);\">Item 4</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.96 0.08 110);\">Item 5</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.95 0.07 140);\">Item 6</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.95 0.06 160);\">Item 7</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.94 0.05 175);\">Item 8</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.94 0.05 195);\">Item 9</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.94 0.05 215);\">Item 10</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.93 0.05 240);\">Item 11</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.93 0.06 265);\">Item 12</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.93 0.07 285);\">Item 13</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.93 0.08 305);\">Item 14</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.93 0.08 325);\">Item 15</div>\n        <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.93 0.08 345);\">Item 16</div>\n      </template>\n    </DesignComponent>\n  ",
		stories: [{
			id: "HorizontalScrollBasic",
			name: {
				en: "Basic Usage",
				ru: "Базовое использование"
			},
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent style=\"width: 100%;\">\n            <template #default=\"{ classItem }\">\n              <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"height: 128px; background: oklch(0.93 0.08 305);\">Item 1</div>\n              <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"height: 128px; background: oklch(0.93 0.08 325);\">Item 2</div>\n              <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"height: 128px; background: oklch(0.93 0.08 345);\">Item 3</div>\n            </template>\n          </DesignComponent>\n\n          <DesignComponent style=\"width: 100%;\">\n            <template #default=\"{ classItem, classItemSelected }\">\n              <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.94 0.06 25);\">Item 1</div>\n              <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.95 0.06 50);\">Item 2</div>\n              <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.96 0.07 70);\">Item 3</div>\n              <div class=\"wiki-storybook-flex-center\" :class=\"[classItem, classItemSelected]\" style=\"width: 256px; height: 128px; background: oklch(0.97 0.08 85);\">Item 4</div>\n              <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.96 0.08 110);\">Item 5</div>\n              <div class=\"wiki-storybook-flex-center\" :class=\"classItem\" style=\"width: 256px; height: 128px; background: oklch(0.95 0.07 140);\">Item 6</div>\n            </template>\n          </DesignComponent>\n        </div>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'HorizontalScroll'} type={'horizontalScroll'}/>\n<StorybookDescriptions componentName={'HorizontalScroll'} type={'selected'}/>\n<Canvas of={Component.HorizontalScrollBasic}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'HorizontalScroll'} type={'expose.toSelected'}/>\n    "
		},
		ai: { description: "\nContainer component that enables horizontal scrolling for large content sets like galleries, item lists, or tab bars. Ensures smooth navigation when the body exceeds the viewport width.\nFeatures automated scroll-to-selected behavior on mount and exposes a programmatic method (toSelected) for navigation. Provides scoped slot bindings to ensure correct item styling and selection tracking.\nControlled via the tag prop for root element customization. Use for product carousels, category filters, or any horizontally-oriented navigation menus in space-constrained layouts.\n    " }
	},
	{
		name: "Icon",
		description: {
			en: "A component for displaying vector icons with support for state management, automatic directionality adaptation, and design system styling.",
			ru: "Компонент для отображения векторных иконок с поддержкой управления состоянием, автоматической адаптацией направления и стилизацией дизайн-системы."
		},
		possibilities: {
			en: [
				"rendering icons by identifier",
				"toggling between two icons based on the active state",
				"automatic mirroring for RTL languages",
				"integration with the color palette and inverse mode",
				"displaying a skeleton loader placeholder"
			],
			ru: [
				"рендеринг иконок по идентификатору",
				"переключение между двумя иконками в зависимости от активного состояния",
				"автоматическое зеркалирование для RTL языков",
				"интеграция с цветовой палитрой и инверсный режим",
				"отображение заполнителя (скелетона) при загрузке"
			]
		},
		import: [],
		stories: [
			{
				id: "IconState",
				name: {
					en: "Icon state",
					ru: "Состояние иконки"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Default</div>\n            <DesignComponent icon=\"home\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Active</div>\n            <DesignComponent icon=\"heart_minus\" iconActive=\"favorite\" :active=\"true\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "IconDirection",
				name: {
					en: "Direction",
					ru: "Направление компонента"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">LTR</div>\n            <DesignComponent dir icon=\"arrow_forward\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl\">\n            <div class=\"wiki-storybook-item__label\">RTL</div>\n            <DesignComponent dir icon=\"arrow_forward\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "IconPalette",
				name: {
					en: "Palette",
					ru: "Палитра"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Basic</div>\n            <DesignComponent icon=\"home\" size=\"lg\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Palette</div>\n            <DesignComponent icon=\"home\" size=\"lg\" asPalette/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Inverse</div>\n            <DesignComponent icon=\"home\" size=\"lg\" asPalette inverse/>\n          </div>\n        </div>\n      "
			},
			{
				id: "IconSkeleton",
				name: {
					en: "Skeleton",
					ru: "Скелетон"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\">\n          <DesignComponent isSkeleton icon=\"home\" rounded=\"md\"/>\n        </DesignSkeleton>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Icon'} type={'icon'}/>\n<Canvas of={Component.IconState}/>\n\n<StorybookDescriptions componentName={'Style'} type={'dir'}/>\n<Canvas of={Component.IconDirection}/>\n\n<StorybookDescriptions componentName={'Style'} type={'asPalette'}/>\n<Canvas of={Component.IconPalette}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.IconSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Image'} type={'event.load'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Icon'} type={'expose.isActive'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: { description: "\nVector icon component, typically utilizing the Material Symbols library. Supports dynamic state management, automatic mirroring for RTL languages, and deep integration with the design system's palette.\nFeatures toggle-able states (active/inactive) with specific icons for each, built-in skeleton loading (isSkeleton), and directionality adaptation. Customizing via size, palette, and inverse props ensures visual consistency across all themes.\nControlled via the icon and iconActive props and various styling flags. Use for navigation links, action buttons, status indicators, or any UI element requiring concise visual representation.\n    " }
	},
	{
		name: "Input",
		description: {
			en: "Text input field component with validation, masking and formatting support",
			ru: "Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования"
		},
		possibilities: {
			en: [
				"multiple input types: text, number, email, password, tel, url, date, time and more",
				"built-in validation with custom messages",
				"mask support for formatted input (phone, date, custom patterns)",
				"currency and number formatting",
				"password visibility toggle",
				"prefix and suffix support",
				"counter for character limits",
				"navigation arrows for numeric and selection inputs",
				"autocomplete, spellcheck and autocorrect support",
				"integrated with a Field component for consistent styling"
			],
			ru: [
				"множественные типы ввода: text, number, email, password, tel, url, date, time и другие",
				"встроенная валидация с пользовательскими сообщениями",
				"поддержка маскирования для форматированного ввода (телефон, дата, пользовательские паттерны)",
				"форматирование валюты и чисел",
				"переключатель видимости пароля",
				"поддержка префикса и суффикса",
				"счётчик для ограничения символов",
				"стрелки навигации для числовых и выборочных полей",
				"поддержка автозаполнения, проверки орфографии и автокоррекции",
				"интегрирован с компонентом Field для единообразной стилизации"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n      <DesignComponent v-bind=\"args\" />\n    ",
		stories: [
			{
				id: "InputTypes",
				name: {
					en: "Input types",
					ru: "Типы ввода"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent type=\"text\" label=\"Text\" placeholder=\"Enter text\" />\n          <DesignComponent type=\"email\" label=\"Email\" placeholder=\"email@example.com\" />\n          <DesignComponent type=\"password\" label=\"Password\" placeholder=\"Enter password\" />\n          <DesignComponent type=\"number\" label=\"Number\" placeholder=\"0\" />\n          <DesignComponent type=\"text\" label=\"Phone\" mask=\"+1 (***) ***-****\" placeholder=\"+1 (555) 000-0000\" />\n          <DesignComponent type=\"date\" label=\"Date\" />\n          <DesignComponent type=\"search\" label=\"Search\" placeholder=\"Search...\" />\n        </div>\n      "
			},
			{
				id: "InputNumber",
				name: {
					en: "Number formatting",
					ru: "Форматирование чисел"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent type=\"number\" value=\"1234567\" label=\"Number\" />\n          <DesignComponent type=\"number-format\" value=\"1234567\" language=\"en-US\" label=\"Formatted\" />\n          <DesignComponent type=\"number\" value=\"50\" :min=\"0\" :max=\"100\" label=\"From 0 to 100\" />\n          <DesignComponent type=\"number\" value=\"10\" arrow=\"stepper\" :step=\"5\" :arrow-step=\"10\" label=\"Step 5/10\" />\n          <DesignComponent type=\"number-format\" value=\"1234567.89\" align=\"center\" :fraction=\"2\" label=\"Centered\" />\n        </div>\n      "
			},
			{
				id: "InputCurrency",
				name: {
					en: "Currency & number formatting",
					ru: "Валюта и форматирование чисел"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent\n            type=\"currency\"\n            label=\"Price (USD)\"\n            currency=\"USD\"\n          />\n          <DesignComponent\n            type=\"currency\"\n            label=\"Price (USD)\"\n            currency=\"USD\"\n            value=\"1234.56\"\n          />\n          <DesignComponent\n            type=\"currency\"\n            label=\"Price (currency-hide)\"\n            currency=\"EUR\"\n            currency-hide\n            value=\"1234.56\"\n          />\n        </div>\n      "
			},
			{
				id: "InputDate",
				name: {
					en: "Date and time",
					ru: "Дата и время"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent type=\"date\" label=\"Date\" language=\"ru-RU\" />\n          <DesignComponent type=\"datetime\" label=\"Date and Time\" language=\"en-US\" />\n          <DesignComponent type=\"year-month\" label=\"Period\" language=\"ru-RU\" />\n          <DesignComponent type=\"time\" label=\"Time\" />\n          <DesignComponent type=\"hour-minute\" label=\"Hours:Minutes\" />\n          <DesignComponent type=\"date\" label=\"Limited Date\" language=\"ru-RU\" min=\"2024-01-01\" max=\"2024-12-31\" />\n        </div>\n      "
			},
			{
				id: "InputMask",
				name: {
					en: "Masked input",
					ru: "Маскированный ввод"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent type=\"tel\" mask=\"+1 (***) ***-****\" placeholder=\"+1 (555) 000-0000\" label=\"Phone\" />\n          <DesignComponent type=\"text\" mask=\"**** **** **** ****\" placeholder=\"0000 0000 0000 0000\" label=\"Card\" />\n          <DesignComponent type=\"tel\" mask=\"+1 (***) ***-****\" :mask-visible=\"false\" label=\"No placeholder\" />\n        </div>\n      "
			},
			{
				id: "InputVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      return {\n        inputValue: ref('Initial value'),\n        maskValue: ref(''),\n        numberValue: ref(42)\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <span>Current value: {{ inputValue }}</span>\n            <button class=\"wiki-storybook-button\" @click=\"inputValue = 'Changed value'\">Set text</button>\n            <button class=\"wiki-storybook-button wiki-storybook-button-warning\" @click=\"inputValue = ''\">Clear</button>\n          </div>\n          <DesignComponent\n            v-model=\"inputValue\"\n            type=\"text\"\n            label=\"Text input\"\n            placeholder=\"Enter text\"\n          />\n\n          <div class=\"wiki-storybook-flex\">\n            <span>Current value: {{ maskValue }}</span>\n            <button class=\"wiki-storybook-button\" @click=\"maskValue = '2022-05-13'\">Set date</button>\n            <button class=\"wiki-storybook-button wiki-storybook-button-warning\" @click=\"maskValue = ''\">Clear</button>\n          </div>\n          <DesignComponent\n            v-model=\"maskValue\"\n            type=\"date\"\n            label=\"Date input\"\n          />\n\n          <div class=\"wiki-storybook-flex\">\n            <span>Current value: {{ numberValue }}</span>\n            <button class=\"wiki-storybook-button\" @click=\"numberValue += 10\">+10</button>\n            <button class=\"wiki-storybook-button\" @click=\"numberValue -= 10\">-10</button>\n          </div>\n          <DesignComponent\n            v-model=\"numberValue\"\n            type=\"number\"\n            label=\"Number input\"\n            :step=\"1\"\n          />\n        </div>\n      "
			},
			{
				id: "InputSkeleton",
				name: {
					en: "Skeleton",
					ru: "Скелетон"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\" style=\"max-width:320px\">\n          <div class=\"wiki-storybook-flex-column\">\n            <DesignComponent\n              isSkeleton\n              label=\"Loading field\"\n              helperMessage=\"This field is loading...\"\n            />\n            <DesignComponent\n              isSkeleton\n              label=\"Another field\"\n              counterShow\n            />\n          </div>\n        </DesignSkeleton>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Input'} type={'input'}/>\n\n<StorybookDescriptions componentName={'Input'} type={'type'}/>\n<Canvas of={Component.InputTypes}/>\n\n<StorybookDescriptions componentName={'Input'} type={'number'}/>\n<Canvas of={Component.InputNumber}/>\n\n<StorybookDescriptions componentName={'Input'} type={'currency'}/>\n<Canvas of={Component.InputCurrency}/>\n\n<StorybookDescriptions componentName={'Input'} type={'date'}/>\n<Canvas of={Component.InputDate}/>\n\n<StorybookDescriptions componentName={'Input'} type={'mask'}/>\n<Canvas of={Component.InputMask}/>\n\n<StorybookDescriptions componentName={'Value'} type={'value'}/>\n<StorybookDescriptions componentName={'Value'} type={'v-model'}/>\n<Canvas of={Component.InputVModel}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.InputSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'input'}/>\n<StorybookDescriptions componentName={'Event'} type={'change'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'label'} />\n<StorybookDescriptions componentName={'Slot'} type={'prefix'} />\n<StorybookDescriptions componentName={'Slot'} type={'suffix'} />\n<StorybookDescriptions componentName={'Slot'} type={'caption'} />\n<StorybookDescriptions componentName={'Slot'} type={'leading'} />\n<StorybookDescriptions componentName={'Slot'} type={'trailing'} />\n    "
		},
		ai: { description: "\nPrimary component for user data entry, wrapping the native <input> element with enhanced functionality. Supports floating labels, validation, masking, and multiple formatting modes (numeric, currency, password).\nFeatures built-in support for input masks (e.g., phone numbers), automatic currency/number formatting, and password visibility toggles. Includes field affixes (prefix/suffix), leading/trailing icons, and a character counter.\nControlled via v-model and type props, emitting standard input/change events. Use for all text-based data collection, from simple names to complex formatted financial or identification data.\n    " }
	},
	{
		name: "Image",
		description: {
			en: "Component for displaying images and icons. Based on `ImageDesign` and supports working with files, links, and icon names.",
			ru: "Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон"
		},
		possibilities: {
			en: [
				"support for various source types: string, `File`, image or PDF address",
				"adaptive sizing with `adaptive`, `objectWidth`, `objectHeight`",
				"cropping and positioning via `coordinator`, `x`, `y`",
				"rotation or hiding the component with properties `turn`, `hide`, `disabled`",
				"mode selection for filling (`size`: `auto`, `contain`, `cover`)"
			],
			ru: [
				"поддержка различных типов исходников: строка, `File`, адрес картинки или PDF",
				"адаптивное измерение с помощью `adaptive`, `objectWidth`, `objectHeight`",
				"обрезка и позиционирование через `coordinator`, `x`, `y`",
				"поворот или скрытие компонента свойствами `turn`, `hide`, `disabled`",
				"выбор режима заполнения (`size`: `auto`, `contain`, `cover`)"
			]
		},
		render: "\n      <div class=\"wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm\">\n        <DesignComponent v-bind=\"args\"/>\n      </div>\n    ",
		import: ["import { demoPdf, image1, phone1, phone2, phone3 } from '@dxtmisha/wiki/media'"],
		stories: [
			{
				id: "ImageType",
				name: {
					en: "Value type",
					ru: "Тип значения"
				},
				setup: "\n      return {\n        image1,\n        demoPdf\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg\">\n            <div class=\"wiki-storybook-item__label\">Icon</div>\n            <DesignComponent value=\"home\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg\">\n            <div class=\"wiki-storybook-item__label\">Image/ contain</div>\n            <DesignComponent :value=\"image1\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max\">\n            <div class=\"wiki-storybook-item__label\">PDF</div>\n            <DesignComponent :value=\"demoPdf\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "ImageSize",
				name: {
					en: "Display control",
					ru: "Отображение"
				},
				setup: "\n      return {\n        image1\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">size: auto (default)</div>\n            <DesignComponent :value=\"image1\" size=\"auto\" tag-img/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">size: contain</div>\n            <DesignComponent :value=\"image1\" size=\"contain\" tag-img/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">size: cover</div>\n            <DesignComponent :value=\"image1\" size=\"cover\" tag-img/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">coordinator</div>\n            <DesignComponent :value=\"image1\" :coordinator=\"[60, 10, 10, 40]\" tag-img/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">x, y</div>\n            <DesignComponent :value=\"image1\" x=\"20%\" y=\"-10%\" tag-img/>\n          </div>\n        </div>\n      "
			},
			{
				id: "ImageTagImg",
				name: {
					en: "Using img tag",
					ru: "Использование тега img"
				},
				setup: "\n      return {\n        image1\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">Background (default)</div>\n            <DesignComponent :value=\"image1\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">tag-img + alt</div>\n            <DesignComponent :value=\"image1\" tag-img alt=\"Example image\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">tag-img + lazy + srcset</div>\n            <DesignComponent :value=\"image1\" tag-img lazy alt=\"Responsive image\" :srcset=\"{ '1x': image1, '2x': image1 }\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label\">tag-img + picture</div>\n            <DesignComponent :value=\"image1\" tag-img alt=\"Adaptive image\" :picture=\"{ 768: image1, 1024: image1 }\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "ImageAdaptive",
				name: {
					en: "Adapted images",
					ru: "Адаптированные изображения"
				},
				setup: "\n      return {\n        phone1,\n        phone2,\n        phone3\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <DesignComponent :value=\"phone1\" adaptive object-width=\"76.2\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <DesignComponent :value=\"phone2\" adaptive object-width=\"71.9\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md\">\n            <DesignComponent :value=\"phone3\" adaptive object-width=\"129.9\" tag-img/>\n          </div>\n        </div>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Image'} type={'image'}/>\n<StorybookDescriptions componentName={'Image'} type={'value'}/>\n<StorybookDescriptions componentName={'Image'} type={'flag'}/>\n<Canvas of={Component.ImageType}/>\n\n<StorybookDescriptions componentName={'Image'} type={'img-tag'}/>\n<Canvas of={Component.ImageTagImg}/>\n\n<StorybookDescriptions componentName={'Image'} type={'size'}/>\n<Canvas of={Component.ImageSize}/>\n\n<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>\n<Canvas of={Component.ImageAdaptive}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Image'} type={'event.load'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Image'} type={'expose'}/>\n    "
		},
		ai: {
			render: "\n<div\n  :class=\"classDemo.item\"\n  style=\"position: relative; width: 48px; height: 48px;\"\n>\n  <Image v-bind=\"args\"/>\n</div>\n    ",
			description: "\nUniversal component for displaying graphic content, including images, Material icons, and PDF files. Automatically detects the content type based on the value string or File object provided.\nFeatures multiple display modes (contain, cover, auto), adaptive scaling (objectWidth/Height), and standard img tag support for SEO and lazy loading. Includes advanced positioning via coordinator and x/y props.\nControlled via the value prop and various sizing/rendering flags. Use for avatars, product photos, system icons, or embedded PDF documents requiring specific cropping and aspect ratio control.\n    "
		}
	},
	{
		name: "List",
		description: {
			en: "Advanced list component with keyboard navigation, search functionality, and hierarchical data support",
			ru: "Продвинутый компонент списка с навигацией с клавиатуры, функциональностью поиска и поддержкой иерархических данных"
		},
		possibilities: {
			en: [
				"keyboard navigation with arrow keys and shortcuts",
				"real-time search and highlight functionality",
				"hierarchical data structure with groups and menus",
				"focus management and item selection",
				"lightweight rendering mode for large datasets",
				"customizable item types and rendering",
				"event-driven interaction system",
				"accessibility support with ARIA attributes",
				"automatic scroll management and viewport optimization",
				"integration with icons, badges, and other components"
			],
			ru: [
				"навигация с клавиатуры со стрелками и горячими клавишами",
				"поиск в реальном времени и функциональность выделения",
				"иерархическая структура данных с группами и меню",
				"управление фокусом и выбором элементов",
				"облегченный режим рендеринга для больших наборов данных",
				"настраиваемые типы элементов и рендеринг",
				"событийно-ориентированная система взаимодействия",
				"поддержка доступности с ARIA атрибутами",
				"автоматическое управление прокруткой и оптимизация области просмотра",
				"интеграция с иконками, бейджами и другими компонентами"
			]
		},
		stories: [{
			id: "ListLiteMode",
			name: {
				en: "Lite mode",
				ru: "Облегчённый режим"
			},
			template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Without lite</div>\n            <DesignComponent\n              :liteThreshold=\"3\"\n              :list=\"[\n                {label: 'Alpha', value: 'a', icon: 'bookmark'},\n                {label: 'Beta', value: 'b', icon: 'label'},\n                {label: 'Gamma', value: 'g', icon: 'flag'},\n                {label: 'Delta', value: 'd', icon: 'star'},\n                {label: 'Epsilon', value: 'e', icon: 'bolt'}\n              ]\"\n            />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">With lite</div>\n            <DesignComponent\n              :lite=\"true\"\n              :liteThreshold=\"3\"\n              :list=\"[\n                {label: 'Alpha', value: 'a', icon: 'bookmark'},\n                {label: 'Beta', value: 'b', icon: 'label'},\n                {label: 'Gamma', value: 'g', icon: 'flag'},\n                {label: 'Delta', value: 'd', icon: 'star'},\n                {label: 'Epsilon', value: 'e', icon: 'bolt'}\n              ]\"\n            />\n          </div>\n        </div>\n      "
		}, {
			id: "ListHighlight",
			name: {
				en: "Highlighting",
				ru: "Выделение"
			},
			template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md\">\n            <DesignComponent\n              :list=\"[\n                {label: 'Project index example', value: 'projects', icon: 'folder'},\n                {label: 'Advanced context options', value: 'experiments', icon: 'tune'},\n                {label: 'Next examination notes', value: 'example', icon: 'description'},\n                {label: 'User experience metrics', value: 'express', icon: 'insights'}\n              ]\"\n              highlight=\"exam\"\n              :highlightLengthStart=\"4\"\n            />\n          </div>\n        </div>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'List'} type={'list'}/>\n\n<StorybookDescriptions componentName={'List'} type={'lite'}/>\n<Canvas of={Component.ListLiteMode}/>\n\n<StorybookDescriptions componentName={'Value'} type={'highlight'}/>\n<Canvas of={Component.ListHighlight}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n<StorybookDescriptions componentName={'List'} type={'event.close'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'selected'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'List'} type={'slot.html'}/>\n    "
		},
		ai: { description: "\nCore engine for rendering interactive, searchable, and hierarchical lists. Serves as the foundation for complex components like Selects, Dropdowns, and multi-level Navigation Menus.\nFeatures support for multiple item types (group, menu, line, html), real-time search highlighting, and full keyboard navigation. Includes automatic focus management, ARIA accessibility roles, and a \"lite\" rendering mode for performance optimization with large datasets.\nControlled via the list prop for data and v-model:selected for state tracking. Use as the primary building block for any interface requiring item selection, structured data display, or interactive command menus.\n    " }
	},
	{
		name: "ListGroup",
		description: {
			en: "Auxiliary component for the List component to group and organize list items with collapsible structure",
			ru: "Вспомогательный компонент для компонента List для группировки и организации элементов списка со сворачиваемой структурой"
		},
		possibilities: {
			en: [
				"grouping helper for List component items",
				"collapsible/expandable group functionality",
				"customizable group header with icon support",
				"automatic arrow icon rotation based on state",
				"nested group support for complex hierarchies",
				"seamless integration with List ecosystem",
				"keyboard navigation and accessibility",
				"smooth animation transitions",
				"flexible content management through slots"
			],
			ru: [
				"помощник группировки для элементов компонента List",
				"функциональность сворачиваемой/разворачиваемой группы",
				"настраиваемый заголовок группы с поддержкой иконок",
				"автоматический поворот стрелки в зависимости от состояния",
				"поддержка вложенных групп для сложных иерархий",
				"бесшовная интеграция с экосистемой List",
				"навигация с клавиатуры и доступность",
				"плавные анимационные переходы",
				"гибкое управление контентом через слоты"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\">\n      <template v-slot:head=\"{open}\">\n        Primary group header with expand/collapse toggle\n      </template>\n      <template v-slot:list>\n        Main content area for grouped list items\n      </template>\n    </DesignComponent>\n\n    <DesignComponent v-bind=\"args\">\n      <template v-slot:head=\"{open}\">\n        Secondary group header with custom styling\n      </template>\n      <template v-slot:list>\n        Alternative layout for nested components\n      </template>\n    </DesignComponent>\n\n    <DesignComponent v-bind=\"args\">\n      <template v-slot:head=\"{open}\">\n        Tertiary group header with advanced options\n      </template>\n      <template v-slot:list>\n        Extended content area with additional features\n      </template>\n    </DesignComponent>\n    ",
		import: [],
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'ListGroup'} type={'listGroup'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'open'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'ListGroup'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <ListGroup v-bind=\"args\">\n    <template #head=\"{ binds }\">\n      <span v-bind=\"binds\">head</span>\n    </template>\n    <template #list>\n      list\n    </template>\n  </ListGroup>\n</div>\n    ",
			description: "\nStructural component for grouping related list items into collapsible/expandable hierarchies. Manages the visual nesting and visibility of child elements, providing organized categorization within dense lists.\nFeatures smooth height animations via MotionTransform and integrated header functionality with automatic arrow rotation. Exposes localized bindings in the #head slot to correctly link triggers with their collapsible content.\nControlled via the open prop and utilizes #head and #list slots for content distribution. Use for navigation submenus, categorized data lists, or accordion-style expanding rows.\n    ",
			hide: !0
		}
	},
	{
		name: "ListItem",
		description: {
			en: "Versatile list item component for displaying structured content",
			ru: "Универсальный компонент элемента списка для отображения структурированного контента"
		},
		possibilities: {
			en: [
				"multiple content areas: label, description, prefix, suffix, caption",
				"icon support with flexible positioning and alignment",
				"badge integration for status indicators",
				"interactive states: focus, selected, disabled, readonly",
				"progress and skeleton loading states",
				"ripple effect for enhanced user feedback",
				"flexible tag options: button, link, div, span",
				"built-in accessibility support",
				"customizable through design tokens"
			],
			ru: [
				"множественные области контента: метка, описание, префикс, суффикс, заголовок",
				"поддержка иконок с гибким позиционированием и выравниванием",
				"интеграция значков для индикаторов статуса",
				"интерактивные состояния: фокус, выбранный, отключенный, только для чтения",
				"состояния загрузки с прогрессом и скелетоном",
				"эффект пульсации для улучшенной обратной связи",
				"гибкие варианты тегов: кнопка, ссылка, div, span",
				"встроенная поддержка доступности",
				"настраиваемый через токены дизайна"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\"/>\n    <DesignComponent v-bind=\"args\"/>\n    <DesignComponent v-bind=\"args\"/>\n    ",
		import: [],
		stories: [
			{
				id: "ListItemBasic",
				name: {
					en: "Basic",
					ru: "Базовые"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md\">\n            <DesignComponent>Simple Item</DesignComponent>\n            <DesignComponent icon=\"person\">Item with Icon</DesignComponent>\n            <DesignComponent description=\"Additional information\">Item with Description</DesignComponent>\n            <DesignComponent focus>Focus</DesignComponent>\n            <DesignComponent selected>Selected</DesignComponent>\n            <DesignComponent disabled>Disabled</DesignComponent>\n            <DesignComponent readonly>Readonly</DesignComponent>\n            <DesignComponent prefix=\"01\" suffix=\"Info\">With Prefix & Suffix</DesignComponent>\n            <DesignComponent caption=\"Caption\" description=\"Description text here\">Full Content</DesignComponent>\n            <DesignComponent icon=\"star\" badge=\"new\">Icon with Badge</DesignComponent>\n          </div>\n        </div>\n      "
			},
			{
				id: "ListItemHighlight",
				name: {
					en: "Highlighting",
					ru: "Выделение"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md\">\n            <DesignComponent highlight=\"search\" label=\"Search result item\"/>\n            <DesignComponent highlight=\"tex\" :highlightLengthStart=\"3\" label=\"Text with highlighting\"/>\n            <DesignComponent highlight=\"te\" :highlightLengthStart=\"3\" label=\"Text without highlighting (too short)\"/>\n            <DesignComponent highlight=\"example\" :highlightLengthStart=\"2\" label=\"Example text for highlighting\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "ListItemFill",
				name: {
					en: "Fill",
					ru: "Заливка"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md\">\n            <DesignComponent label=\"Default fill\"/>\n            <DesignComponent fill=\"#ff0000\" label=\"Red fill\"/>\n            <DesignComponent fill=\"rgb(0, 128, 255)\" label=\"Blue fill\"/>\n            <DesignComponent fill=\"rgba(255, 165, 0, 0.7)\" label=\"Orange transparent fill\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "ListItemSkeleton",
				name: {
					en: "Skeleton loading",
					ru: "Загрузка скелетона"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\">\n          <DesignComponent\n            :isSkeleton=\"true\"\n            caption=\"Caption\"\n            description=\"Short desc.\"\n          >Item A</DesignComponent>\n          <DesignComponent\n            :isSkeleton=\"true\"\n            caption=\"Caption\"\n            description=\"A bit longer description for the list item component.\"\n          >Item Label Example</DesignComponent>\n          <DesignComponent\n            :isSkeleton=\"true\"\n            caption=\"Caption\"\n            description=\"This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item.\"\n          >Very Long Item Label Example for Skeleton</DesignComponent>\n        </DesignSkeleton>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'ListItem'} type={'basic'}/>\n<Canvas of={Component.ListItemBasic}/>\n\n<StorybookDescriptions componentName={'Value'} type={'highlight'}/>\n<Canvas of={Component.ListItemHighlight}/>\n\n<StorybookDescriptions componentName={'ListItem'} type={'fill'}/>\n<Canvas of={Component.ListItemFill}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.ListItemSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'value'}/>\n<StorybookDescriptions componentName={'Expose'} type={'detail'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>\n<StorybookDescriptions componentName={'Slot'} type={'caption'}/>\n<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'ListItem'} type={'slots'}/>\n    "
		},
		ai: { description: "\nVersatile structural component for rendering items within lists, menus, or navigation bars. Provides a standardized layout with high-density content support for labels, descriptions, and metadata.\nFeatures dedicated slots for prefix (leading), content (central), suffix (trailing metadata), and trailing (action indicators). Includes built-in support for icons, badges, selected states, and interactive feedback like ripple effects.\nControlled via label, description, and href/to props; renders as an <a> tag when navigating. Use for building navigation menus, data-rich list rows, or simple clickable interactive elements.\n    " }
	},
	{
		name: "ListMenu",
		description: {
			en: "Auxiliary component for the List component to create nested menus and organize navigation elements with expandable structure",
			ru: "Вспомогательный компонент для компонента List для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой"
		},
		possibilities: {
			en: [
				"menu helper for List component navigation",
				"expandable/collapsible submenu functionality",
				"customizable menu header with icon support",
				"automatic arrow icon rotation based on state",
				"nested menu support for complex hierarchies",
				"seamless integration with List ecosystem",
				"keyboard navigation and accessibility",
				"smooth animation transitions",
				"flexible menu content management through slots"
			],
			ru: [
				"помощник меню для навигации компонента List",
				"функциональность раскрывающихся/сворачивающихся подменю",
				"настраиваемый заголовок меню с поддержкой иконок",
				"автоматический поворот стрелки в зависимости от состояния",
				"поддержка вложенных меню для сложных иерархий",
				"бесшовная интеграция с экосистемой List",
				"навигация с клавиатуры и поддержка доступности",
				"плавные анимационные переходы",
				"гибкое управление содержимым меню через слоты"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\">\n      <template v-slot:head=\"{binds}\">\n        <span v-bind=\"binds\">Primary menu header with expand/collapse toggle</span>\n      </template>\n      <template v-slot:list>\n        <div class=\"wiki-storybook-item--padding\">\n          <h4>Menu Content</h4>\n          <p>Navigation elements providing access to application sections.</p>\n\n          <ul>\n            <li><strong>Dashboard</strong> - Main control panel</li>\n            <li><strong>Content</strong> - Content management</li>\n            <li><strong>Analytics</strong> - Data analysis tools</li>\n          </ul>\n\n          <p>Supports nested submenus and adapts to user permissions.</p>\n        </div>\n      </template>\n    </DesignComponent>\n    ",
		import: [],
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'ListMenu'} type={'listMenu'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Window'} type={'event.window'}/>\n\n<StorybookDescriptions componentName={'Image'} type={'event.load'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Window'} type={'expose'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'ListGroup'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <ListMenu embedded :window-attrs=\"{open: true}\" v-bind=\"args\">\n    <template #head=\"{ binds }\">\n      <span v-bind=\"binds as any\">head</span>\n    </template>\n    <template #list>\n      list\n    </template>\n  </ListMenu>\n</div>\n    ",
			description: "\nSpecialized wrapper component for creating dropdown menus or nested navigation trees. Utilizes dynamic window positioning to display a list of actions or sub-options relative to a trigger element.\nFeatures an adaptive menu preset managing visibility, positioning (popover vs inline), and interaction modes. Exposes standard binds in the #head slot to automate trigger setup and ensures smooth animations during state transitions.\nControlled via the windowAttrs prop for positioning and utilizes #head and #list slots for trigger and content. Use for context menus, account settings dropdowns, or multi-level primary navigation links.\n    ",
			hide: !0
		}
	},
	{
		name: "Mask",
		description: {
			en: "Input masking utility for text, numbers, currency and dates with flexible patterns and validation.",
			ru: "Утилита маскирования ввода для текста, чисел, валют и дат с гибкими шаблонами и валидацией."
		},
		possibilities: {
			en: [
				"string or multi-pattern masks (auto selection)",
				"special symbols define input groups and literals are auto-inserted",
				"per-group and global validation patterns",
				"number / currency formats with grouping and fraction control",
				"date/time helpers and locale-aware behavior"
			],
			ru: [
				"одиночные и множественные маски (автовыбор по вводу)",
				"спецсимволы задают группы ввода, литералы подставляются автоматически",
				"валидация по группам и глобально",
				"форматы числа/валюты с группировкой и дробной частью",
				"помощники для даты/времени и поведение с учётом локали"
			]
		},
		import: [],
		render: "\n    <div class=\"wiki-storybook-group\" >\n      <DesignComponent\n        class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\"\n        v-bind=\"args\"\n      />\n    </div>\n    ",
		stories: [
			{
				id: "MaskBasic",
				name: {
					en: "Mask Examples",
					ru: "Примеры масок"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Phone number format (+1 area code)</div>\n            <DesignComponent :mask=\"'+1 *** *** ** **'\" placeholder=\"Enter phone number\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Auto format selection (multiple masks)</div>\n            <DesignComponent\n              :mask=\"['*** *** ***', '**** **** ****']\"\n              placeholder=\"Auto format selection\"\n            />\n          </div>\n        </div>\n      "
			},
			{
				id: "MaskSpecial",
				name: {
					en: "Special Characters",
					ru: "Специальные символы"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Default special symbol (*)</div>\n            <DesignComponent :mask=\"'+7 *** *** ** **'\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Custom special symbol (X)</div>\n            <DesignComponent :mask=\"'XX.XX.XXXX'\" special=\"X\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Multiple special symbols (*, #, X)</div>\n            <DesignComponent :mask=\"'***-###-XXX'\" :special=\"['*', '#', 'X']\" />\n          </div>\n        </div>\n      "
			},
			{
				id: "MaskValidation",
				name: {
					en: "Validation",
					ru: "Валидация"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Pattern validation (6-9 digits only)</div>\n            <DesignComponent :mask=\"'*** *** ***'\" pattern=\"[6-9]+\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Group-specific pattern (*, # groups)</div>\n            <DesignComponent :mask=\"'**:##'\" :special=\"['*', '#']\" :pattern=\"'[6-9]+'\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "MaskGroupSave",
				name: {
					en: "Group navigation (groupSave)",
					ru: "Навигация по группам (groupSave)"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Smart navigation enabled (groupSave: true)</div>\n            <DesignComponent :mask=\"'****-####'\" :special=\"['*', '#']\" :groupSave=\"true\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Smart navigation disabled (groupSave: false)</div>\n            <DesignComponent :mask=\"'****-####'\" :special=\"['*', '#']\" :groupSave=\"false\" />\n          </div>\n        </div>\n      "
			},
			{
				id: "MaskMatch",
				name: {
					en: "Allowed characters (match)",
					ru: "Допустимые символы (match)"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">HEX characters (0-9, A-F)</div>\n            <DesignComponent :mask=\"'***-***'\" match=\"[A-F0-9]\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Letters only (A-Z, a-z)</div>\n            <DesignComponent :mask=\"'***-***'\" match=\"[A-Za-z]\" />\n          </div>\n        </div>\n      "
			},
			{
				id: "MaskNumberTypes",
				name: {
					en: "Numeric types",
					ru: "Числовые типы"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Simple number</div>\n            <DesignComponent type=\"number\" :fraction=\"2\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Formatted number with separators</div>\n            <DesignComponent type=\"number-format\" language=\"ru\" :fraction=\"2\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Currency (RUB)</div>\n            <DesignComponent type=\"currency\" currency=\"RUB\" language=\"ru\" />\n          </div>\n        </div>\n      "
			},
			{
				id: "MaskDateTypes",
				name: {
					en: "Date and time types",
					ru: "Типы дат и времени"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Full date (DD.MM.YYYY)</div>\n            <DesignComponent type=\"date\" language=\"ru\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Date and time</div>\n            <DesignComponent type=\"datetime\" language=\"ru\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Time only (HH:MM)</div>\n            <DesignComponent type=\"hour-minute\" />\n          </div>\n        </div>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Mask'} type={'basic'}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'mask'}/>\n<Canvas of={Component.MaskBasic}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'special'}/>\n<Canvas of={Component.MaskSpecial}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'groupSave'}/>\n<Canvas of={Component.MaskGroupSave}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'match'}/>\n<Canvas of={Component.MaskMatch}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'pattern'}/>\n<Canvas of={Component.MaskValidation}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'type'}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'numberTypes'}/>\n<Canvas of={Component.MaskNumberTypes}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'dateTypes'}/>\n<Canvas of={Component.MaskDateTypes}/>\n\n<StorybookDescriptions componentName={'Mask'} type={'visible'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'input'}/>\n<StorybookDescriptions componentName={'Event'} type={'beforeinput'}/>\n<StorybookDescriptions componentName={'Event'} type={'reset'}/>\n<StorybookDescriptions componentName={'Event'} type={'focus'}/>\n<StorybookDescriptions componentName={'Event'} type={'keyboard'}/>\n<StorybookDescriptions componentName={'Event'} type={'paste'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Mask'} type={'expose'}/>\n<StorybookDescriptions componentName={'Expose'} type={'clear'}/>\n    "
		},
		ai: {
			description: "\nLow-level input masking utility for controlling and formatting text, numeric, and date/time data entry. Intercepts input events to enforce strict patterns, automatically inserting literal characters and validating each keystroke against allowed rules.\nFeatures support for single or multiple patterns (auto-selection), specialized input types (currency, number-format), and locale-aware date/time validation. Includes granular control over allowed characters (match), decimal fractions, and value range constraints (min/max).\nIntegrated primarily within the Input component; should generally not be used as a standalone element. Controlled via mask and type props, providing a foundation for phone numbers, credit card fields, and international financial inputs.\n    ",
			hide: !0
		}
	},
	{
		name: "Menu",
		description: {
			en: "Composite menu that combines Window, Bars, and List for nested interactive navigation",
			ru: "Составной компонент, объединяющий Window, Bars и List для вложенной интерактивной навигации"
		},
		possibilities: {
			en: [
				"popup container from Window with control/title/footer slots",
				"toolbar actions via Bars and hierarchical items via List",
				"nested groups and menus with keyboard focus and selection",
				"lightweight rendering for large menus (lite + liteThreshold)",
				"custom fields mapping with keyLabel and keyValue",
				"custom item attributes and container attributes (itemAttrs, listAttrs)"
			],
			ru: [
				"всплывающий контейнер из Window со слотами control/title/footer",
				"действия панели через Bars и иерархия пунктов через List",
				"вложенные группы и меню с фокусом с клавиатуры и выбором",
				"облегчённый рендер для больших меню (lite + liteThreshold)",
				"кастомное сопоставление полей через keyLabel и keyValue",
				"настройка атрибутов пунктов и списка (itemAttrs, listAttrs)"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n    <DesignComponent v-bind=\"args\">\n      <template #control=\"{binds}\">\n        <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open Menu</button>\n      </template>\n    </DesignComponent>\n  ",
		stories: [
			{
				id: "MenuNavigation",
				name: {
					en: "Navigation with previous/next",
					ru: "Навигация с previous/next"
				},
				setup: "\n      return {\n        selectedValue: ref('color2'),\n        colors: ref([\n          {label: '[1]Red', value: 'color1', icon: 'palette'},\n          {label: '[2]Green', value: 'color2', icon: 'palette'},\n          {label: '[3]Blue', value: 'color3', icon: 'palette'},\n          {label: '[4]Yellow', value: 'color4', icon: 'palette'},\n          {label: '[5]Purple', value: 'color5', icon: 'palette'},\n          {label: '[6]Orange', value: 'color6', icon: 'palette'}\n        ]),\n        step: ref(1)\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div class=\"wiki-storybook-item__label\">Step size:</div>\n            <div class=\"wiki-storybook-flex\">\n              <button class=\"wiki-storybook-button\" @click=\"step = 1\">1 item</button>\n              <button class=\"wiki-storybook-button\" @click=\"step = 2\">2 items</button>\n              <button class=\"wiki-storybook-button\" @click=\"step = 3\">3 items</button>\n            </div>\n          </div>\n\n          <DesignComponent\n            v-model:selected=\"selectedValue\"\n            :list=\"colors\"\n            :step=\"step\"\n            is-selected-by-value\n          >\n            <template #control=\"{previous, next, selectedNames, open}\">\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                <div class=\"wiki-storybook-flex\">\n                  <button\n                    class=\"wiki-storybook-button\"\n                    @click=\"previous\"\n                    style=\"padding: 4px 12px;\"\n                  >\n                    ◀ Previous\n                  </button>\n                  <div style=\"flex: 1; text-align: center; font-weight: 500;\">\n                    {{ selectedNames.value[0] || 'None' }}\n                  </div>\n                  <button\n                    class=\"wiki-storybook-button\"\n                    @click=\"next\"\n                    style=\"padding: 4px 12px;\"\n                  >\n                    Next ▶\n                  </button>\n                </div>\n              </div>\n            </template>\n          </DesignComponent>\n\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n            <div>Selected: {{ selectedValue }}</div>\n            <div>Step: {{ step }}</div>\n          </div>\n        </div>\n      "
			},
			{
				id: "MenuAjax",
				name: {
					en: "AJAX Loading",
					ru: "AJAX Загрузка"
				},
				setup: "\n        const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([\n          {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},\n          {label: 'Users', value: 'users', icon: 'people'},\n          {label: 'Settings', value: 'settings', icon: 'settings'},\n          {label: 'Reports', value: 'reports', icon: 'assessment'}\n        ]), 512))\n\n        return { loadMenuData }\n      ",
				template: "\n        <DesignComponent :ajax=\"loadMenuData\" selected=\"settings\">\n          <template #control=\"{binds, loading}\">\n            <button class=\"wiki-storybook-button\" v-bind=\"binds\">\n              Open AJAX Menu (loading: {{ loading }})\n            </button>\n          </template>\n        </DesignComponent>\n      "
			},
			{
				id: "MenuVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      return {\n        selectedValue: ref('settings'),\n        menuItems: ref([\n          {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},\n          {label: 'Users', value: 'users', icon: 'people'},\n          {label: 'Settings', value: 'settings', icon: 'settings'},\n          {label: 'Reports', value: 'reports', icon: 'assessment'},\n          {label: 'Help', value: 'help', icon: 'help'}\n        ])\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"selectedValue = 'dashboard'\">Select Dashboard</button>\n            <button class=\"wiki-storybook-button\" @click=\"selectedValue = 'reports'\">Select Reports</button>\n            <button class=\"wiki-storybook-button\" @click=\"selectedValue = ''\">Clear</button>\n          </div>\n          <div class=\"wiki-storybook-flex\">\n            <DesignComponent\n              v-model:selected=\"selectedValue\"\n              :list=\"menuItems\"\n              is-selected-by-value\n            >\n              <template #control=\"{binds}\">\n                <button class=\"wiki-storybook-button\" v-bind=\"binds\">\n                  Open Menu\n                </button>\n              </template>\n            </DesignComponent>\n          </div>\n          <div>Selected value: {{ selectedValue }}</div>\n        </div>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Menu'} type={'menu'}/>\n\n<StorybookDescriptions componentName={'Menu'} type={'navigation'}/>\n<Canvas of={Component.MenuNavigation}/>\n\n<StorybookDescriptions componentName={'Menu'} type={'ajax'}/>\n<Canvas of={Component.MenuAjax}/>\n\n<StorybookDescriptions componentName={'Value'} type={'v-model'}/>\n<Canvas of={Component.MenuVModel}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n<StorybookDescriptions componentName={'Event'} type={'bars'}/>\n<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>\n<StorybookDescriptions componentName={'Window'} type={'event.window'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'selected'}/>\n<StorybookDescriptions componentName={'Menu'} type={'expose.navigation'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'List'} type={'slot.html'}/>\n<StorybookDescriptions componentName={'Menu'} type={'slotsControl'}/>\n<StorybookDescriptions componentName={'Menu'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Menu embedded :window-attrs=\"{open: true}\" v-bind=\"args\">\n    <template #control=\"{ binds }\">\n      <button class=\"wiki-storybook-button\" v-bind=\"binds\">\n        Open Menu\n      </button>\n    </template>\n  </Menu>\n</div>\n    ",
			description: "\nComprehensive navigational component that integrates a trigger (Control), a floating container (Window), and a structured dataset (List). Designed for multi-level menus, context-sensitive actions, and complex selection interfaces requiring icons or grouping.\nFeatures support for hierarchical data structures (nested submenus), real-time AJAX loading, and full keyboard accessibility. Includes sophisticated focus management, automatic positioning relative to the trigger, and a lite rendering mode for optimized performance with large lists.\nControlled via the list prop for items and v-model:selected for state tracking. Use for user profile menus, sidebar navigation, or advanced select-like UI patterns where standard dropdowns lack sufficient structural flexibility.\n    "
		}
	},
	{
		name: "Modal",
		description: {
			en: "Simplified wrapper over a Window component for creating centered modal dialogs",
			ru: "Упрощенная обертка над компонентом Window для создания центрированных модальных диалогов"
		},
		possibilities: {
			en: [
				"pre-configured modal window with centered positioning",
				"overlay backdrop with background blocking",
				"close on the ESC key and click outside",
				"integration with scrollbar for long content",
				"slots for title, content and footer customization",
				"lifecycle events (preparation, opening, closing)",
				"close a button with a customizable icon",
				"programmatic control via a v-model:open",
				"focus management and keyboard navigation",
				"responsive design with mobile optimization"
			],
			ru: [
				"предварительно настроенное модальное окно с центрированием",
				"оверлей с блокировкой фона",
				"закрытие по ESC и клику вне области",
				"интеграция со скроллбаром для длинного контента",
				"слоты для настройки заголовка, содержимого и подвала",
				"события жизненного цикла (preparation, opening, closing)",
				"кнопка закрытия с настраиваемой иконкой",
				"программное управление через v-model:open",
				"управление фокусом и клавиатурная навигация",
				"адаптивный дизайн с оптимизацией для мобильных"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <template #control=\"{binds}\">\n          <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open Modal</button>\n        </template>\n\n        <template #default>\n          <h4>Modal Component Overview</h4>\n          <p>Modal is a specialized wrapper around the Window component with preset adaptive mode set to 'modal'. It provides a simplified API for creating centered modal dialogs without needing to configure positioning and adaptive behavior manually.</p>\n\n          <p>The component automatically handles common modal dialog scenarios including confirmations, forms, alerts, and content previews. It manages focus, scroll behavior, and keyboard navigation to ensure accessibility and optimal user experience across different devices and screen sizes.</p>\n\n          <h4>Best Practices</h4>\n          <p>Use modals sparingly and only for content that genuinely requires immediate attention. Ensure modals have clear actions (confirm/cancel), provide easy ways to dismiss them, and avoid nesting modals within modals. The component should be large enough to display content comfortably but not so large that it overwhelms the screen.</p>\n\n          <h4>Relationship with Window</h4>\n          <p>Modal is essentially Window with <code>adaptive=\"modal\"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in a Modal component.</p>\n        </template>\n      </DesignComponent>\n    ",
		stories: [{
			id: "ModalVModel",
			name: {
				en: "Two-way binding (v-model)",
				ru: "Двусторонняя привязка (v-model)"
			},
			setup: "\n      return {\n        open: ref(false)\n      }\n      ",
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"open = true\">Open via v-model ({{ open }})</button>\n          </div>\n\n          <DesignComponent v-model:open=\"open\">\n            <div class=\"wiki-storybook-item--padding\">Your content here</div>\n          </DesignComponent>\n        </div>\n      "
		}, {
			id: "ModalAllSlots",
			name: {
				en: "All slots demonstration",
				ru: "Демонстрация всех слотов"
			},
			template: "\n        <DesignComponent>\n          <template #control=\"{binds}\">\n            <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open Modal with All Slots</button>\n          </template>\n\n          <template #title>Title slot</template>\n          <template #default>Default slot</template>\n          <template #footer>Footer slot</template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Modal'} type={'modal'}/>\n<StorybookDescriptions componentName={'Window'} type={'v-model'}/>\n<Canvas of={Component.ModalVModel}/>\n\n<StorybookDescriptions componentName={'Modal'} type={'differences'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Window'} type={'event.window'}/>\n<StorybookDescriptions componentName={'Event'} type={'bars'}/>\n<StorybookDescriptions componentName={'Event'} type={'actions'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Window'} type={'expose'}/>\n    ",
			slots: "\n<Canvas of={Component.ModalAllSlots}/>\n<StorybookDescriptions componentName={'Window'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Modal embedded open v-bind=\"args\">\n    <template #default>\n      <p>This is a modal dialog.</p>\n    </template>\n  </Modal>\n</div>\n    ",
			description: "\nSimplified wrapper over the Window component pre-configured for centered modal dialogs. Provides a high-level API for typical interaction patterns like confirmation prompts, info alerts, and data entry forms.\nFeatures automatic overlay management, background interaction blocking, and body scroll locking. Includes built-in focus trapping, Esc key dismissal, and responsive layout optimization (adaptive=\"modal\") for consistent mobile and desktop UX.\nControlled via the v-model:open prop and utilizes #control, #title, and #footer slots for modular layout. Use for critical user notifications, blocking confirmation steps, or focused sub-tasks requiring immediate attention.\n    "
		}
	},
	{
		name: "MotionAxis",
		description: {
			en: "A component for organizing transitions between elements (slides). Allows animating content changes along X, Y, Z axes with slide effects. Supports automatic animation direction detection, container height management, and lazy loading (DOM).",
			ru: "Компонент для организации переходов между элементами (слайдами). Позволяет анимировать смену контента по осям X, Y, Z с эффектами сдвига. Поддерживает автоматическое определение направления анимации, управление высотой контейнера и ленивую загрузку (DOM)."
		},
		possibilities: {
			en: [
				"Slide transition animation along X, Y, Z axes",
				"Automatic or manual direction control (next/back)",
				"Smooth container height animation to fit content",
				"Slide lifecycle management in DOM (inDom, inDomSlide)",
				"Slot support for each slide"
			],
			ru: [
				"Анимация смены слайдов по осям X, Y, Z",
				"Автоматическое или ручное управление направлением (вперед/назад)",
				"Плавная анимация высоты контейнера под контент",
				"Управление жизненным циклом слайдов в DOM (inDom, inDomSlide)",
				"Поддержка слотов для каждого слайда"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\">\n      <template #slide1>\n        <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>\n        </div>\n      </template>\n      <template #slide2>\n        <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>\n        </div>\n      </template>\n      <template #slide3>\n        <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>\n          <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n        </div>\n      </template>\n    </DesignComponent>\n",
		import: ["import { ref } from 'vue'"],
		stories: [
			{
				id: "MotionAxisBasic",
				name: {
					en: "Basic Usage",
					ru: "Базовое использование"
				},
				setup: "\n      const selected = ref('slide1')\n      return { selected }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'slide1'\">1</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'slide2'\">2</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'slide3'\">3</button>\n          </div>\n\n          <DesignComponent :selected=\"selected\">\n            <template #slide1>\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                <p>Short content.</p>\n              </div>\n            </template>\n            <template #slide2>\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>\n              </div>\n            </template>\n            <template #slide3>\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>\n                <p>Additional paragraph for extra height.</p>\n              </div>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			},
			{
				id: "MotionAxisScroll",
				name: {
					en: "Scroll Management",
					ru: "Управление скроллом"
				},
				setup: "\n      const selected = ref('short')\n      return { selected }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column design-component__scroll\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'short'\">short</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'long'\">long</button>\n          </div>\n\n          <DesignComponent :selected=\"selected\">\n            <template #short>\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                Short content\n              </div>\n            </template>\n            <template #long>\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                Long content that causes scrolling.<br>\n                Scroll down to see more.<br>\n                ...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>\n                End of content.\n              </div>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			},
			{
				id: "MotionAxisVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      const selected = ref('slide1')\n      return { selected }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex-align-center\">\n            <span>Current value: {{ selected }}</span>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'slide1'\">Select Slide 1</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'slide2'\">Select Slide 2</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'slide3'\">Select Slide 3</button>\n          </div>\n\n          <DesignComponent v-model:selected=\"selected\">\n            <template #slide1>\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                Slide 1\n              </div>\n            </template>\n            <template #slide2>\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                Slide 2\n              </div>\n            </template>\n            <template #slide3>\n              <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding\">\n                Slide 3\n              </div>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'MotionAxis'} type={'motionAxis'}/>\n<Canvas of={Component.MotionAxisBasic}/>\n\n<StorybookDescriptions componentName={'MotionAxis'} type={'classes'}/>\n<Canvas of={Component.MotionAxisScroll}/>\n\n<StorybookDescriptions componentName={'MotionAxis'} type={'v-model'}/>\n<Canvas of={Component.MotionAxisVModel}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'MotionAxis'} type={'events'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'MotionAxis'} type={'expose'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'MotionAxis'} type={'slots'}/>\n    "
		},
		ai: { description: "\nLow-level layout component for animating transitions between multiple content areas (slides) along X, Y, or Z axes. Ideal for multi-step wizards, tabbed content, and gallery-like interfaces requiring direction-aware motion.\nFeatures automated animation direction detection (next/back), smooth container height transitions, and lazy loading support to manage slide life-cycles in the DOM. Supports horizontal slide, vertical flip, and depth-based transitions with customizable speed and easing.\nControlled via the selected prop or v-model:selected, utilizing numbered slide slots (#slide1, #slide2, etc.) for content distribution. Use when content needs to transition within a fixed or dynamic container while maintaining high visual polish and spatial orientation.\n    " }
	},
	{
		name: "MotionTransform",
		description: {
			en: "Low-level motion system that manages element transforms, state transitions, and interaction events for contextual UI like windows and menus",
			ru: "Низкоуровневая система анимаций, управляющая трансформациями элементов, переходами состояний и событиями взаимодействия для контекстных интерфейсов (окна, меню)"
		},
		possibilities: {
			en: [
				"centralized state for open/show/teleport with computed accessors",
				"size measurement and CSS variable updates for smooth animations",
				"teleport control for window-like behavior and off-DOM rendering",
				"click/close/auto-close handling with ignore areas",
				"programmatic API for open/close/toggle and state transitions",
				"designed to be embedded into higher-level components (Window, Dropdown, etc.)"
			],
			ru: [
				"централизованное состояние open/show/teleport с вычисляемыми аксессорами",
				"измерение размеров и обновление CSS‑переменных для плавных анимаций",
				"управление телепортацией для «оконного» поведения и рендера вне DOM",
				"обработка кликов/закрытия/автозакрытия с зонами игнорирования",
				"программный API для open/close/toggle и переходов состояний",
				"предназначена для встраивания в компоненты верхнего уровня (Window, Dropdown и т. п.)"
			]
		},
		render: "\n      <DesignComponent v-bind=\"args\">\n        <template #head>\n          <div class=\"wiki-storybook-item--padding\">\n            <h3>MotionTransform Demo</h3>\n            <p>Interactive demonstration of the MotionTransform system - a foundational utility for window-like behaviors and contextual UI interactions.</p>\n          </div>\n        </template>\n\n        <template #body=\"{classes}\">\n          <div class=\"wiki-storybook-item--padding\">\n            <h4>Motion Transform System</h4>\n            <p>MotionTransform provides the foundational motion and state management system that powers interactive UI components like windows, dropdowns, and contextual menus. It handles element transforms, animation states, and user interaction events with smooth animations.</p>\n\n            <h4>Core Components</h4>\n            <p>The motion system consists of specialized managers: State handles open/show/teleport flags, Element provides DOM helpers, Size manages CSS variables for animations, Event coordinates click handling, and Go offers programmatic control methods.</p>\n\n            <h4>Developer Integration</h4>\n            <p>MotionTransform is designed as a low-level utility for component developers. It provides APIs for managing UI behaviors while handling DOM manipulation and animation orchestration behind the scenes.</p>\n            <div class=\"wiki-storybook-flex\">\n              <button :class=\"classes.close\" class=\"wiki-storybook-button wiki-storybook-button--text\">Cancel</button>\n              <button class=\"wiki-storybook-button\">Confirm</button>\n            </div>\n          </div>\n        </template>\n      </DesignComponent>\n    ",
		import: ["import { ref } from 'vue'"],
		stories: [
			{
				id: "MotionTransformAnimationHeadPosition",
				name: {
					en: "Head position animation",
					ru: "Анимация позиции заголовка"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent animationHeadPosition=\"top\">\n            <template #head>\n              <div class=\"wiki-storybook-item--padding\">\n                <h4>animationHeadPosition: top</h4>\n                <p>Click to open — Head stays at the top during transition</p>\n              </div>\n            </template>\n            <template #body>\n              <div class=\"wiki-storybook-item--padding\">\n                <h5>Top Position Animation</h5>\n                <p>With <code>animationHeadPosition=\"top\"</code>, the head element maintains its position at the top of the container throughout the entire show/hide animation sequence.</p>\n                <p>This behavior is ideal for interfaces where the header serves as a stable reference point, such as dropdown menus, navigation panels, or content that expands downward from a fixed trigger.</p>\n                <p>The animation creates a smooth vertical expansion effect while keeping the header visually anchored, providing users with a clear understanding of the content's origin point.</p>\n                <ul>\n                  <li>Header remains stationary during animation</li>\n                  <li>Content expands/collapses below the header</li>\n                  <li>Provides stable visual reference point</li>\n                  <li>Best for downward-expanding interfaces</li>\n                </ul>\n              </div>\n            </template>\n          </DesignComponent>\n\n          <DesignComponent animationHeadPosition=\"toBottom\">\n            <template #head>\n              <div class=\"wiki-storybook-item--padding\">\n                <h4>animationHeadPosition: toBottom</h4>\n                <p>Click to open — Head moves toward the bottom with content</p>\n              </div>\n            </template>\n            <template #body>\n              <div class=\"wiki-storybook-item--padding\">\n                <h5>Bottom Movement Animation</h5>\n                <p>When using <code>animationHeadPosition=\"toBottom\"</code>, the head element travels together with the content during the animation, creating a unified motion experience.</p>\n                <p>This approach is particularly effective for accordion-style interfaces, collapsible sections, or any scenario where the header and content should move as a cohesive unit.</p>\n                <p>The animation provides a more dynamic feeling, as both header and content participate in the motion, creating a sense of the entire section expanding or contracting as one entity.</p>\n                <ul>\n                  <li>Header and content move together</li>\n                  <li>Creates unified motion experience</li>\n                  <li>Ideal for accordion-style interfaces</li>\n                  <li>Provides cohesive visual feedback</li>\n                </ul>\n              </div>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			},
			{
				id: "MotionTransformIgnore",
				name: {
					en: "Ignore zones",
					ru: "Зоны игнорирования"
				},
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent ignoreSelector=\".mt-ignore\">\n            <template #head>\n              <div class=\"wiki-storybook-item--padding\">\n                <h4>Ignore zones behavior</h4>\n                <p>This text acts as the trigger that opens the content area</p>\n              </div>\n            </template>\n            <template #body>\n              <div class=\"wiki-storybook-item--padding\">\n                <p>Clicks on elements matching <code>.mt-ignore</code> are not treated as outside and won’t trigger auto close.</p>\n                <p>This is useful for trigger buttons, helper controls, and nested interactive areas that must remain active without closing the window.</p>\n                <p>Try it: click any button with <code>.mt-ignore</code> outside or inside — the window stays open; clicks on other outside areas will close it.</p>\n                <p>Use <code>ignore</code> when you have a concrete DOM element, and <code>ignoreSelector</code> when zones are multiple or dynamic.</p>\n                <p>Keep selectors specific to avoid accidental matches and unintended auto‑close blocking.</p>\n                <ul>\n                  <li>Pattern: a trigger with class <code>.mt-ignore</code> outside and inside the window</li>\n                  <li>Expectation: clicks on the trigger are ignored by outside‑check logic, the window doesn’t close</li>\n                </ul>\n              </div>\n            </template>\n          </DesignComponent>\n\n          <div class=\"wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding mt-ignore\">\n            <h5>External ignore zone</h5>\n            <p>This area has class <code>.mt-ignore</code> and demonstrates how clicks here won't close the window below.</p>\n            <button class=\"wiki-storybook-button\">Ignored button</button>\n          </div>\n        </div>\n      "
			},
			{
				id: "MotionTransformVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      return {\n        open: ref(false)\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"open = !open\">Toggle ({{ open }})</button>\n          </div>\n          \n          <DesignComponent v-model:open=\"open\">\n            <template #head>\n              <div class=\"wiki-storybook-item--padding\">\n                <h4>v-model controlled</h4>\n                <p>This component's visibility is controlled by an external ref via v-model:open.</p>\n              </div>\n            </template>\n            <template #body>\n              <div class=\"wiki-storybook-item--padding\">\n                <p>Content is {{ open ? 'visible' : 'hidden' }}</p>\n                <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the component's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>\n                <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the MotionTransform component, such as in complex forms or coordinated UI interactions.</p>\n              </div>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'MotionTransform'} type={'motionTransform'}/>\n<StorybookDescriptions componentName={'MotionTransform'} type={'classes'}/>\n<StorybookDescriptions componentName={'MotionTransform'} type={'animationHeadPosition'}/>\n<Canvas of={Component.MotionTransformAnimationHeadPosition}/>\n<StorybookDescriptions componentName={'MotionTransform'} type={'ignore'}/>\n<Canvas of={Component.MotionTransformIgnore}/>\n<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>\n<Canvas of={Component.MotionTransformVModel}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'MotionTransform'} type={'expose'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'MotionTransform'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <MotionTransform :auto-close=\"false\" v-bind=\"args\">\n    <template #head>\n      <button class=\"wiki-storybook-button\">Toggle Content</button>\n    </template>\n    <template #body>\n      <div class=\"wiki-storybook-item--padding\">\n        <p>Expandable content goes here.</p>\n      </div>\n    </template>\n  </MotionTransform>\n</div>\n    ",
			description: "\nLow-level motion engine designed for complex component transitions like windows, dropdowns, and collapsible sections. Provides a unified system for managing element transforms, off-DOM teleportation, and interaction patterns (click-outside, etc.).\nFeatures dynamic size measurement with automatic CSS variable updates for smooth hardware-accelerated animations. Includes a robust state manager (open/show/teleport), focus trapping, and customizable interaction ignoring areas for triggers.\nControlled via the v-model:open prop and utilizes #head and #body slots for layout. Use as a foundational utility when building custom interactive components requiring sophisticated motion, state transitions, and high-performance DOM manipulation.\n    "
		}
	},
	{
		name: "Page",
		description: {
			en: "A top-level semantic container component representing the main content of a document. It uses the <main> tag by default and supports high-level headers and descriptions.",
			ru: "Семантический компонент-контейнер верхнего уровня, представляющий основное содержимое документа. По умолчанию использует тег <main> и поддерживает заголовки высокого уровня."
		},
		possibilities: {
			en: [
				"semantic wrapper for main content using <main> tag",
				"support for main titles (h1 by default), labels, descriptions, and captions",
				"customizable layout and spacing",
				"support for icons",
				"flexible content organization"
			],
			ru: [
				"семантическая обертка для основного контента с использованием тега <main>",
				"поддержка главных заголовков (h1 по умолчанию), меток, описаний и подписей",
				"настраиваемый макет и отступы",
				"поддержка иконок",
				"гибкая организация контента"
			]
		},
		import: [],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <p>\n          The Page component is designed to wrap the unique content of a document.\n          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.\n        </p>\n        <p>\n          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.\n          The default tag for the headline is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.\n        </p>\n        <p>\n          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.\n        </p>\n      </DesignComponent>\n    ",
		stories: [{
			id: "PageBasic",
			name: {
				en: "Basic",
				ru: "Базовые"
			},
			template: "\n        <DesignComponent\n          headline=\"User Dashboard\"\n          label=\"Overview\"\n          description=\"View your account analytics and recent activity.\"\n        >\n          <p>Welcome to your dashboard. Here you can find a summary of your performance and manage your account settings.</p>\n        </DesignComponent>\n      "
		}, {
			id: "PageSlots",
			name: {
				en: "Slots usage",
				ru: "Использование слотов"
			},
			template: "\n        <DesignComponent>\n          <template #default>Default slot</template>\n          <template #headline>Headline slot</template>\n          <template #label>Label slot</template>\n          <template #description>Description slot</template>\n          <template #caption>Caption slot</template>\n          <template #trailing>Trailing slot</template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Page'} type={'block'}/>\n<Canvas of={Component.PageBasic}/>\n\n<StorybookDescriptions componentName={'Block'} type={'differences'}/>\n",
			slots: "\n<Canvas of={Component.PageSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'headline'}/>\n<StorybookDescriptions componentName={'Slot'} type={'label'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Slot'} type={'caption'}/>\n<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>\n",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>\n<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>\n"
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Page v-bind=\"args\">\n      Main page content.\n  </Page>\n</div>\n    ",
			description: "\nTop-level structural container designed to wrap the primary content of a view or document. Serves as a semantic root (typically rendering a <main> tag) and establishes the high-level document hierarchy with standardized headers.\nFeatures a comprehensive header structure inherited from the Block component, including support for headlines (h1), labels (page titles), descriptions, and trailing action areas. Automatically manages spacing and layout consistency for page-level navigation and identity.\nControlled via headline, label, and icon props, with dedicated slots for content and actions (#default, #trailing). Use as the foundational wrapper for any route or unique screen to ensure accessibility and consistent information architecture.\n    "
		}
	},
	{
		name: "Progress",
		description: {
			en: "Component for displaying progress of operations or loading states",
			ru: "Компонент для отображения прогресса операций или состояний загрузки"
		},
		possibilities: {
			en: [
				"linear and circular progress indicators",
				"determinate and indeterminate progress states",
				"customizable value and maximum values",
				"different positioning options (top, bottom, static)",
				"delay settings for showing and hiding",
				"dense and inverse styling variants",
				"point mode for minimal display"
			],
			ru: [
				"линейные и круглые индикаторы прогресса",
				"детерминированные и неопределенные состояния прогресса",
				"настраиваемые значения прогресса и максимума",
				"различные варианты позиционирования (сверху, снизу, статично)",
				"настройки задержки для показа и скрытия",
				"компактный и инвертированный варианты стилизации",
				"точечный режим для минимального отображения"
			]
		},
		render: "\n      <div class=\"wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center\">\n        <DesignComponent v-bind=\"args\"/>\n      </div>\n    ",
		import: ["import { ref } from 'vue'"],
		stories: [
			{
				id: "ProgressTypes",
				name: {
					en: "Types",
					ru: "Типы"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Linear Progress</div>\n            <DesignComponent visible indeterminate=\"type2\" linear position=\"static\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen\">\n            <div class=\"wiki-storybook-item__label\">Circular Progress</div>\n            <DesignComponent visible indeterminate=\"type2\" circular/>\n          </div>\n        </div>\n      "
			},
			{
				id: "ProgressLinear",
				name: {
					en: "Linear Progress",
					ru: "Линейный прогресс"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Value: 50</div>\n            <DesignComponent visible linear position=\"static\" :value=\"50\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Point</div>\n            <DesignComponent visible linear position=\"static\" point :value=\"75\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Position: bottom</div>\n            <DesignComponent visible linear position=\"bottom\" :value=\"60\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Indeterminate: type1</div>\n            <DesignComponent visible linear position=\"static\" indeterminate=\"type1\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Indeterminate: type2</div>\n            <DesignComponent visible linear position=\"static\" indeterminate=\"type2\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Indeterminate: type3</div>\n            <DesignComponent visible linear position=\"static\" indeterminate=\"type3\" />\n          </div>\n        </div>\n      "
			},
			{
				id: "ProgressCircular",
				name: {
					en: "Circular Progress",
					ru: "Круглый прогресс"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Basic</div>\n            <DesignComponent visible circular :value=\"50\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Dense</div>\n            <DesignComponent visible circular dense :value=\"75\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Indeterminate</div>\n            <DesignComponent visible circular indeterminate=\"type1\" />\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">Dense Indeterminate</div>\n            <DesignComponent visible circular dense indeterminate=\"type2\" />\n          </div>\n        </div>\n      "
			},
			{
				id: "ProgressValues",
				name: {
					en: "Values",
					ru: "Значения"
				},
				template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">value: 25, max: 100</div>\n            <DesignComponent visible position=\"static\" :value=\"25\" :max=\"100\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">value: 75, max: 100</div>\n            <DesignComponent visible position=\"static\" :value=\"75\" :max=\"100\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen\">\n            <div class=\"wiki-storybook-item__label\">value: 50, max: 200</div>\n            <DesignComponent visible circular :value=\"50\" :max=\"200\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen\">\n            <div class=\"wiki-storybook-item__label\">value: 75, max: 100</div>\n            <DesignComponent visible circular :value=\"75\" :max=\"200\"/>\n          </div>\n        </div>\n      "
			},
			{
				id: "ProgressDelays",
				name: {
					en: "Delays",
					ru: "Задержки"
				},
				setup: "\n      const visible = ref(false)\n      return {\n        visible,\n        onClick: () => {\n          visible.value = !visible.value\n        }\n      }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex\">\n            <button class=\"wiki-storybook-button\" @click=\"onClick\">Visible: {{ visible }}</button>\n          </div>\n\n          <div>\n            <div class=\"wiki-storybook-group\">\n              <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n                <div class=\"wiki-storybook-item__label\">Standard delays (360/200)</div>\n                <DesignComponent :visible=\"visible\" circular position=\"static\" delay=\"360\" delayHide=\"200\" />\n              </div>\n              <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n                <div class=\"wiki-storybook-item__label\">Fast appearance (100/200)</div>\n                <DesignComponent :visible=\"visible\" linear position=\"static\" delay=\"100\" delayHide=\"200\" />\n              </div>\n              <div class=\"wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center\">\n                <div class=\"wiki-storybook-item__label\">No delays (0/0)</div>\n                <DesignComponent :visible=\"visible\" linear position=\"static\" delay=\"0\" delayHide=\"0\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      "
			}
		],
		documentation: { body: "\n<StorybookDescriptions componentName={'Progress'} type={'progress'}/>\n<Canvas of={Component.ProgressTypes}/>\n\n<StorybookDescriptions componentName={'Progress'} type={'linear'}/>\n<Canvas of={Component.ProgressLinear}/>\n\n<StorybookDescriptions componentName={'Progress'} type={'circular'}/>\n<Canvas of={Component.ProgressCircular}/>\n\n<StorybookDescriptions componentName={'Progress'} type={'values'}/>\n<Canvas of={Component.ProgressValues}/>\n\n<StorybookDescriptions componentName={'Progress'} type={'delays'}/>\n<Canvas of={Component.ProgressDelays}/>\n    " },
		ai: {
			render: "\n<div\n  :class=\"classDemo.item\"\n  style=\"position: relative; width: 64px; height: 40px;\"\n>\n  <Progress v-bind=\"args\"/>\n</div>\n    ",
			description: "\nStatus indicator for ongoing processes, supporting both linear and circular visual styles. Capable of representing determinate (known percentage) and indeterminate (loading) states with customizable delays for showing/hiding.\nFeatures horizontal bars (linear) and spinner rings (circular) with multiple indeterminate animation types. Includes advanced positioning (top, bottom, static), dense styling for compact UIs, and a point mode for minimal pulsating indicators.\nControlled via the visible, value, and indeterminate props, with support for custom min/max bounds. Use for page-level loading bars, button action feedback, or inline file upload progress.\n    "
		}
	},
	{
		name: "Ripple",
		description: {
			en: "Component for creating a ripple wave effect on click interactions",
			ru: "Компонент для создания эффекта волны при взаимодействии с элементом"
		},
		possibilities: {
			en: [
				"it creates a ripple wave effect on click",
				"automatic positioning based on click coordinates",
				"disabling effect with `disabled` property",
				"Material Design inspired animation",
				"it works with any interactive elements"
			],
			ru: [
				"создает эффект волны при клике",
				"автоматическое позиционирование по координатам клика",
				"отключение эффекта свойством `disabled`",
				"анимация в стиле Material Design",
				"работает с любыми интерактивными элементами"
			]
		},
		render: "\n      <div class=\"wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center\">\n        <DesignComponent v-bind=\"args\"/>\n      </div>\n    ",
		import: [],
		stories: [],
		documentation: { body: "\n<StorybookDescriptions componentName={'Ripple'} type={'ripple'}/>\n    " },
		ai: {
			render: "\n<div\n  :class=\"classDemo.item\"\n  style=\"position: relative; width: 64px; height: 48px;\"\n>\n  <Ripple v-bind=\"args\"/>\n</div>\n    ",
			description: "\nLow-level decorative utility that provides Material Design-style visual feedback on user interactions. Automatically generates a dynamic wave effect at the exact coordinates of a pointerdown event within its parent container.\nFeatures automated animation lifecycle management, including expansion, fade-out, and DOM cleanup. Inherits visual styling directly from the host element via currentColor and requires the parent to have relative positioning and hidden overflow to function correctly.\nPrimarily integrated within interactive components like Buttons, ListItems, and Cards; should generally not be manually implemented. Controlled via the disabled prop, serving as a subtle but high-polish affordance for touch and click actions.\n    "
		}
	},
	{
		name: "Scrollbar",
		description: {
			en: "Custom scrollbar component for enhanced user experience",
			ru: "Компонент кастомного скроллбара для улучшения пользовательского опыта"
		},
		possibilities: {
			en: [
				"custom scrollbar styling and appearance",
				"dynamic divider lines based on scroll position",
				"static divider lines at top and bottom",
				"visibility control for scrolling behavior",
				"inverse divider behavior options",
				"hide all divider lines functionality"
			],
			ru: [
				"кастомная стилизация и внешний вид скроллбара",
				"динамические разделительные линии в зависимости от позиции скролла",
				"статичные разделительные линии сверху и снизу",
				"управление видимостью для поведения прокрутки",
				"опции инвертированного поведения разделителей",
				"функция скрытия всех разделительных линий"
			]
		},
		render: "\n      <D1Scrollbar\n        class=\"wiki-storybook-item--widescreen wiki-storybook-item--squared--sm\"\n        v-bind=\"args\"\n      >\n        <div class=\"wiki-storybook-scrollbar-content\">\n          <h3>Modern Web Interfaces and User Experience Design</h3>\n          <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>\n\n          <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>\n\n          <h4>Principles of Effective Design Implementation</h4>\n          <p>Effective scrollbar design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of various input devices, and comprehensive keyboard navigation support. Cross-browser compatibility remains a top priority, especially when dealing with custom scrollbar implementations that need to work consistently across different rendering engines.</p>\n\n          <p>Users expect scrollbars to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>\n\n          <h4>Technical Implementation Considerations</h4>\n          <p>When developing scrollbar components, it's crucial to consider rendering performance, especially when working with large datasets or dynamically generated content. Content virtualization, lazy loading strategies, and DOM operation optimization help ensure smooth performance even on less powerful devices. Memory management becomes particularly important in single-page applications where components may be mounted and unmounted frequently.</p>\n\n          <p>Modern frameworks provide numerous tools for creating customizable scrollbars, but it's important to find the right balance between functionality and ease of use. The component should be easily integrable into existing projects while supporting various configuration options and customization possibilities. API design should be intuitive and follow established patterns within the framework ecosystem.</p>\n\n          <h4>Future Trends and Accessibility</h4>\n          <p>The future of web development is moving towards creating more inclusive and accessible interfaces, where every element, including scrollbars, contributes to improving the overall user experience. This includes support for screen readers, high contrast modes, and reduced motion preferences. Progressive enhancement ensures that the scrollbar functionality works across all user scenarios.</p>\n\n          <p>Emerging technologies like CSS container queries and new scrolling APIs continue to expand the possibilities for creating more sophisticated scrolling experiences. The integration of these technologies with existing design systems requires careful planning and consideration of backward compatibility.</p>\n        </div>\n      </D1Scrollbar>\n    ",
		import: [],
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Scrollbar'} type={'scrollbar'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Scrollbar'} type={'emits'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Scrollbar v-bind=\"args\" style=\"height: 128px\">\n    <h3>Modern Web Interfaces and User Experience Design</h3>\n    <p>In today's digital landscape, creating high-quality user\n    interfaces has become a critical aspect of web application development.\n    User interface components must not only be functional but also provide\n    intuitive interaction patterns that enhance the overall user experience.\n    The evolution of web technologies has enabled developers to create more\n    sophisticated and engaging interfaces.</p>\n\n    <p>Scrollbars play a particularly important role in content navigation\n    and information architecture. They allow users to easily navigate through\n    large volumes of information while maintaining context and orientation within\n    the document structure. Modern scrollbars should be adaptive, responsive,\n    and visually appealing while providing consistent behavior across different\n    platforms and devices.</p>\n\n    <h4>Principles of Effective Design Implementation</h4>\n    <p>Effective scrollbar design takes into account multiple factors ranging\n    from performance optimization to accessibility compliance. It's essential\n    to ensure smooth animations, proper handling of various input devices, and\n    comprehensive keyboard navigation support. Cross-browser compatibility remains\n    a top priority, especially when dealing with custom scrollbar implementations\n    that need to work consistently across different rendering engines.</p>\n\n    <p>Users expect scrollbars to work predictably and uniformly throughout\n    all parts of an application. This requires thorough testing and optimization\n    for various usage scenarios, including mobile devices, desktop computers,\n    and touch-enabled interfaces. The component must handle edge cases gracefully\n    and provide appropriate feedback for user interactions.</p>\n  </Scrollbar>\n</div>\n    ",
			description: "\nStructural container that provides custom scrolling behavior and visual status indicators (borders/dividers) based on content overflow. Essential for maintaining spatial context in fixed-height areas like menus, modals, and sidebars.\nFeatures dynamic scroll position detection to show/hide top and bottom dividers based on visibility of content edges. Supports custom border styling, inverse divider logic, and specialized visibility controls for different scroll states.\nControlled via the tag and divider props, requiring a defined height or max-height to enable active scrolling. Use as a base wrapper for any dense content block requiring clear visual cues that more data is available above or below.\n    "
		}
	},
	{
		name: "Section",
		description: {
			en: "A semantic container component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <section> tag by default.",
			ru: "Семантический компонент-контейнер, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <section>."
		},
		possibilities: {
			en: [
				"semantic grouping of content using <section> tag",
				"support for titles (h2 by default), labels, descriptions, and captions",
				"customizable layout and spacing",
				"support for icons",
				"flexible content organization"
			],
			ru: [
				"семантическая группировка контента с использованием тега <section>",
				"поддержка заголовков (h2 по умолчанию), меток, описаний и подписей",
				"настраиваемый макет и отступы",
				"поддержка иконок",
				"гибкая организация контента"
			]
		},
		import: [],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <p>\n          The Section component is a fundamental building block for structuring web pages.\n          It defaults to using the <code>&lt;section&gt;</code> HTML tag, making it semantically appropriate for grouping thematic content.\n        </p>\n        <p>\n          It provides a rich set of features for content presentation, including headlines, labels, descriptions, and icons.\n          The default tag for the headline is set to <code>&lt;h2&gt;</code>, which fits the typical document outline structure.\n        </p>\n        <p>\n          Use Section to divide your page into distinct thematic areas, improving both the visual structure and the accessibility of your application.\n        </p>\n      </DesignComponent>\n    ",
		stories: [{
			id: "SectionBasic",
			name: {
				en: "Basic",
				ru: "Базовые"
			},
			template: "\n        <DesignComponent\n          headline=\"User Profile Settings\"\n          label=\"Personalization\"\n          description=\"Customize your experience and notification preferences.\"\n        >\n          <p>This section allows you to manage your personal display settings, theme selection, and language preferences. Changes are saved automatically as you update them.</p>\n        </DesignComponent>\n      "
		}, {
			id: "SectionSlots",
			name: {
				en: "Slots usage",
				ru: "Использование слотов"
			},
			template: "\n        <DesignComponent>\n          <template #default>Default slot</template>\n          <template #headline>Headline slot</template>\n          <template #label>Label slot</template>\n          <template #description>Description slot</template>\n          <template #caption>Caption slot</template>\n          <template #trailing>Trailing slot</template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Section'} type={'block'}/>\n<Canvas of={Component.SectionBasic}/>\n\n<StorybookDescriptions componentName={'Block'} type={'differences'}/>\n",
			slots: "\n<Canvas of={Component.SectionSlots}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'headline'}/>\n<StorybookDescriptions componentName={'Slot'} type={'label'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Slot'} type={'caption'}/>\n<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>\n",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>\n<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>\n"
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Section v-bind=\"args\">\n      Content of the section.\n  </Section>\n</div>\n    ",
			description: "\nStructural component used to divide a page into distinct thematic areas, serving as a semantic alias for the Block component. Provides a standardized header structure for grouping related content within a coherent layout.\nFeatures a flexible header with support for icons, labels (titles), captions, and trailing action areas. Inherits all layout and styling capabilities from the Block component, including support for custom semantic tags (defaulting to <section>) and high-level category headlines.\nControlled via headline, label, and icon props, with dedicated slots for primary content and secondary actions. Use to logically organize and category-label information within the flow of a Page or complex Dashboard.\n    "
		}
	},
	{
		name: "Select",
		description: {
			en: "Complete select dropdown control combining Field, Menu, SelectValue and Input for sophisticated selection interface",
			ru: "Полнофункциональный элемент выбора из выпадающего списка, объединяющий Field, Menu, SelectValue и Input для продвинутого интерфейса выбора"
		},
		possibilities: {
			en: [
				"single or multiple value selection",
				"built-in search and filtering capabilities",
				"editable selected value mode (editValue)",
				"AJAX data loading with caching support",
				"filter mode for real-time option filtering",
				"validation with standard Field features",
				"keyboard navigation and accessibility",
				"custom option list via slots or data",
				"icon support for dropdown arrow and search",
				"auto-close control for multiple selection",
				"integration with all Field component features (label, counter, messages, icons)"
			],
			ru: [
				"выбор одиночного или множественных значений",
				"встроенный поиск и возможности фильтрации",
				"режим редактирования выбранного значения (editValue)",
				"AJAX загрузка данных с поддержкой кеширования",
				"режим фильтрации для реального времени",
				"валидация со стандартными функциями Field",
				"клавиатурная навигация и доступность",
				"пользовательский список опций через слоты или данные",
				"поддержка иконок для стрелки выпадающего списка и поиска",
				"управление автозакрытием для множественного выбора",
				"интеграция со всеми возможностями компонента Field (подпись, счётчик, сообщения, иконки)"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n      <DesignComponent v-bind=\"args\" />\n    ",
		stories: [
			{
				id: "SelectBasic",
				name: {
					en: "Basic",
					ru: "Базовые"
				},
				setup: "\n      const options = ref([\n        {label: 'JavaScript', value: 'js'},\n        {label: 'TypeScript', value: 'ts'},\n        {label: 'Python', value: 'py'},\n        {label: 'Java', value: 'java'},\n        {label: 'C++', value: 'cpp'},\n        {label: 'Ruby', value: 'rb'},\n        {label: 'Go', value: 'go'},\n        {label: 'PHP', value: 'php'}\n      ])\n\n      return { options }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <DesignComponent\n            type=\"select\"\n            label=\"Standard select\"\n            placeholder=\"Select option\"\n            :option=\"options\"\n          />\n          <DesignComponent\n            type=\"select\"\n            label=\"With search\"\n            placeholder=\"Search...\"\n            showSearch\n            :option=\"options\"\n          />\n          <DesignComponent\n            type=\"select\"\n            label=\"With filter\"\n            placeholder=\"Type to filter\"\n            showSearch\n            filterMode\n            :option=\"options\"\n          />\n          <DesignComponent\n            type=\"select\"\n            label=\"Edit value\"\n            placeholder=\"Select or type\"\n            editValue\n            filterMode\n            :option=\"options\"\n          />\n          <DesignComponent\n            type=\"select\"\n            label=\"With arrows\"\n            placeholder=\"Select option\"\n            arrow=\"carousel\"\n            :option=\"options\"\n          />\n        </div>\n      "
			},
			{
				id: "SelectVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      const valueSingle = ref('option2')\n      const valueMultiple = ref(['option1', 'option3'])\n      const options = [\n        { label: 'First option', value: 'option1' },\n        { label: 'Second option', value: 'option2' },\n        { label: 'Third option', value: 'option3' }\n      ]\n\n      return { valueSingle, valueMultiple, options }\n      ",
				template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex-align-center\">\n            <span>Value: <strong>{{ valueSingle }}</strong></span>\n            <button class=\"wiki-storybook-button\" @click=\"valueSingle = 'option1'\">option 1</button>\n            <button class=\"wiki-storybook-button\" @click=\"valueSingle = 'option2'\">option 2</button>\n            <button class=\"wiki-storybook-button\" @click=\"valueSingle = 'option3'\">option 3</button>\n          </div>\n\n          <DesignComponent\n            v-model=\"valueSingle\"\n            type=\"select\"\n            label=\"Single select\"\n            :option=\"options\"\n          />\n\n          <div class=\"wiki-storybook-flex-align-center\">\n            <span>Value: <strong>{{ valueMultiple }}</strong></span>\n            <button class=\"wiki-storybook-button\" @click=\"valueMultiple = ['option1', 'option2']\">option 1, 2</button>\n            <button class=\"wiki-storybook-button wiki-storybook-button--warning\" @click=\"valueMultiple = []\">Clear</button>\n          </div>\n\n          <DesignComponent\n            v-model=\"valueMultiple\"\n            type=\"select\"\n            label=\"Multiple select\"\n            multiple\n            :option=\"options\"\n          />\n        </div>\n      "
			},
			{
				id: "SelectSkeleton",
				name: {
					en: "Skeleton",
					ru: "Скелетон"
				},
				components: ["Skeleton"],
				template: "\n        <DesignSkeleton :active=\"true\" style=\"max-width:320px\">\n          <div class=\"wiki-storybook-flex-column\">\n            <DesignComponent\n              isSkeleton\n              type=\"select\"\n              label=\"Loading select\"\n              helperMessage=\"Options are loading...\"\n              :option=\"[\n                {label: 'First option', value: 'option1'},\n                {label: 'Second option', value: 'option2'},\n                {label: 'Third option', value: 'option3'}\n              ]\"\n            />\n          </div>\n        </DesignSkeleton>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Select'} type={'select'}/>\n<Canvas of={Component.SelectBasic}/>\n\n<StorybookDescriptions componentName={'Value'} type={'value'}/>\n<StorybookDescriptions componentName={'Value'} type={'v-model'}/>\n<Canvas of={Component.SelectVModel}/>\n\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.SelectSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'input'}/>\n<StorybookDescriptions componentName={'Event'} type={'change'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'selected'}/>\n<StorybookDescriptions componentName={'Expose'} type={'validation'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'label'} />\n<StorybookDescriptions componentName={'Slot'} type={'prefix'} />\n<StorybookDescriptions componentName={'Slot'} type={'suffix'} />\n<StorybookDescriptions componentName={'Slot'} type={'caption'} />\n<StorybookDescriptions componentName={'Slot'} type={'leading'} />\n<StorybookDescriptions componentName={'Slot'} type={'trailing'} />\n<StorybookDescriptions componentName={'List'} type={'slot.html'}/>\n<StorybookDescriptions componentName={'Menu'} type={'slots'}/>\n    "
		},
		ai: { description: "\nHigh-level form control that combines a trigger field, a dropdown menu, and a structured value display (Chips or text). Designed for choosing single or multiple items from static lists or dynamic datasets with built-in search and filtering.\nFeatures support for AJAX data loading with caching, multiple selection with chips, and an editable combobox mode (editValue). Includes integrated validation, keyboard navigation, and full Field component functionality (labels, icons, and state messages).\nControlled via the option prop for data and v-model for state tracking, supporting custom key mapping (keyLabel/keyValue). Use for user selection, category filtering, or complex multi-select interfaces requiring real-time search.\n    " }
	},
	{
		name: "SelectValue",
		description: {
			en: "Display component for selected values in select controls, showing chips for multiple selection or single text value",
			ru: "Компонент отображения выбранных значений в элементах выбора, показывающий чипы для множественного выбора или одиночное текстовое значение"
		},
		possibilities: {
			en: [
				"single or multiple value display modes",
				"automatic chip rendering for multiple selections",
				"placeholder support for empty state",
				"cancel icon for clearing individual selections",
				"customizable chip appearance via chipAttrs",
				"optional icon display in chips",
				"responsive handling of selected items",
				"disabled and readonly states support"
			],
			ru: [
				"режимы отображения одиночного или множественного значения",
				"автоматический рендеринг чипов для множественного выбора",
				"поддержка плейсхолдера для пустого состояния",
				"иконка отмены для очистки отдельных выборов",
				"настраиваемый внешний вид чипов через chipAttrs",
				"опциональное отображение иконок в чипах",
				"адаптивная обработка выбранных элементов",
				"поддержка состояний disabled и readonly"
			]
		},
		import: [],
		stories: [{
			id: "SelectValueBasic",
			name: {
				en: "Basic",
				ru: "Базовые"
			},
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Placeholder</div>\n            <DesignComponent placeholder=\"Select option\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Single value</div>\n            <DesignComponent :value=\"[{ label: 'Option 1', value: '1' }]\"/>\n          </div>\n          <div class=\"wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto\">\n            <div class=\"wiki-storybook-item__label wiki-storybook-item__label--static\">Multiple values</div>\n            <DesignComponent\n              :multiple=\"true\"\n              :value=\"[\n                { label: 'Option 1', value: '1', index: '1' },\n                { label: 'Option 2', value: '2', index: '2' },\n                { label: 'Option 3', value: '3', index: '3' }\n              ]\"\n            />\n          </div>\n        </div>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'SelectValue'} type={'selectValue'}/>\n<Canvas of={Component.SelectValueBasic}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    "
		},
		ai: { description: "\nSpecialized display engine used within Select, Combobox, or Autocomplete controls to render selected state. Dynamically switches between a simple text label for single selection and a group of Chips for multiple selection.\nFeatures automated Chip management, including removal event handling and integration with the Select data model. Supports empty state placeholders, custom Chip attributes (icons, outlines), and handles disabled/readonly states to prevent interaction.\nControlled via the multiple and value props, requiring an array of objects even for single selection. Use as a foundational element when building custom selection fields requiring standardized token-based or text-based value representation.\n    " }
	},
	{
		name: "Skeleton",
		description: {
			en: "Skeleton component for displaying loading placeholders",
			ru: "Компонент для отображения заглушки загрузки. Создает анимированные плейсхолдеры для контента во время загрузки данных"
		},
		possibilities: {
			en: [
				"animated loading placeholders for content",
				"control visibility with `active` property",
				"child elements react to the skeleton state via `isSkeleton` property or special classes",
				"customizable appearance and animation"
			],
			ru: [
				"анимированные заглушки загрузки для контента",
				"управление видимостью через свойство `active`",
				"дочерние элементы реагируют на состояние скелетона через свойство `isSkeleton` или специальные классы",
				"настраиваемый внешний вид и анимация"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\">\n      <div class=\"wiki-storybook-card design-component__background\">\n        <div class=\"wiki-storybook-card__image design-component__background\" style=\"background-image: url('${image1}')\"/>\n        <div class=\"wiki-storybook-card__content\">\n          <div>\n            <div class=\"wiki-storybook-card__label design-component__text\">Product Name</div>\n            <div class=\"wiki-storybook-card__information design-component__textVariant\">Short description</div>\n          </div>\n          <div class=\"wiki-storybook-card__description design-component__text\">\n            Detailed product description that tells about its main features and advantages.\n          </div>\n          <div class=\"wiki-storybook-card__actions\">\n            <button class=\"wiki-storybook-button design-component__background\">Buy Now</button>\n          </div>\n        </div>\n      </div>\n    </DesignComponent>\n  ",
		import: ["import { image1 } from '@dxtmisha/wiki/media'"],
		stories: [{
			id: "SkeletonBasic",
			name: {
				en: "Basic usage",
				ru: "Базовое использование"
			},
			template: "\n        <div class=\"wiki-storybook-group\">\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">text</div>\n            <DesignComponent :active=\"true\">\n              <div class=\"design-component__text\">Text placeholder</div>\n              <div class=\"design-component__text\">Text placeholder</div>\n              <div class=\"design-component__text\">Text placeholder</div>\n            </DesignComponent>\n          </div>\n\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">textVariant</div>\n            <DesignComponent :active=\"true\">\n              <div class=\"design-component__textVariant\">Text placeholder</div>\n              <div class=\"design-component__textVariant\">Text placeholder</div>\n              <div class=\"design-component__textVariant\">Text placeholder</div>\n            </DesignComponent>\n          </div>\n\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">background</div>\n            <DesignComponent :active=\"true\">\n              <div\n                class=\"design-component__background\"\n                style=\"width: 128px; height: 128px;\"\n              >\n                Text placeholder\n              </div>\n            </DesignComponent>\n          </div>\n\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">backgroundVariant</div>\n            <DesignComponent :active=\"true\">\n              <div\n                class=\"design-component__backgroundVariant\"\n                style=\"width: 128px; height: 128px;\"\n              >\n                Background Variant\n              </div>\n            </DesignComponent>\n          </div>\n\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">border</div>\n            <DesignComponent :active=\"true\">\n              <div\n                class=\"design-component__border\"\n                style=\"width: 128px; height: 128px; border: 2px solid #ccc;\"\n              >\n                Border placeholder\n              </div>\n            </DesignComponent>\n          </div>\n\n          <div class=\"wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center\">\n            <div class=\"wiki-storybook-item__label\">borderVariant</div>\n            <DesignComponent :active=\"true\">\n              <div\n                class=\"design-component__borderVariant\"\n                style=\"width: 128px; height: 128px; border: 2px solid #ccc;\"\n              >\n                Border Variant\n              </div>\n            </DesignComponent>\n          </div>\n        </div>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Skeleton'} type={'active'}/>\n<StorybookDescriptions componentName={'Skeleton'} type={'classes'}/>\n<Canvas of={Component.SkeletonBasic}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Skeleton'} type={'expose.isActive'}/>\n    "
		},
		ai: { description: "\nStructural layout utility designed to display animated loading placeholders (ghost versions) for UI elements. Improves perceived performance and prevents Cumulative Layout Shift (CLS) by reserving space for incoming content.\nFeatures a logic-sharing mechanism via provide/inject that allows child components (Field, Image, Chip) to automatically switch to their skeleton states without individual props. Exposes specialized CSS classes through slot props for styling raw HTML elements as text lines, backgrounds, or borders.\nControlled via the active prop to toggle the global loading state and accessibility Busy/Live attributes. Use as a wrapper for sections or entire pages during data fetching to maintain structural integrity and a high-quality user experience.\n    " }
	},
	{
		name: "Snackbar",
		description: {
			en: "An orchestration component for managing and displaying a queue of temporary notification messages (Snackbars).",
			ru: "Компонент-оркестратор для управления и отображения очереди временных уведомлений (Snackbars)."
		},
		possibilities: {
			en: [
				"automatic lifecycle management for notifications",
				"flexible anchor positioning (top/bottom, left/right/block)",
				"priority-based visual separation of messages",
				"configurable auto-hide timeout",
				"teleport-based rendering to ensure overlay on top of all elements",
				"full programmatic control over the notification queue"
			],
			ru: [
				"автоматическое управление жизненным циклом уведомлений",
				"гибкое позиционирование (сверху/снизу, слева/справа/блоком)",
				"визуальное разделение сообщений по приоритету",
				"настраиваемое время автоматического скрытия",
				"рендер через Teleport для гарантированного отображения поверх всех элементов",
				"полный программный контроль над очередью уведомлений"
			]
		},
		import: [],
		render: "\n    <div class=\"wiki-storybook-flex-column\">\n      <div class=\"wiki-storybook-flex\">\n        <button\n          class=\"wiki-storybook-button\"\n          @click=\"() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 3000 })\"\n        >\n          Success Message\n        </button>\n        <button\n          class=\"wiki-storybook-button\"\n          @click=\"() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true })\"\n        >\n          System Error\n        </button>\n        <button\n          class=\"wiki-storybook-button wiki-storybook-button--warning\"\n          @click=\"() => $refs.snackbar.clear()\"\n        >\n          Clear Queue\n        </button>\n      </div>\n      <DesignComponent ref=\"snackbar\" v-bind=\"args\" />\n    </div>\n  ",
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Snackbar'} type={'snackbar'}/>\n<StorybookDescriptions componentName={'Snackbar'} type={'add'}/>\n\n<StorybookDescriptions componentName={'Snackbar'} type={'adaptation'}/>\n<StorybookDescriptions componentName={'Snackbar'} type={'position'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Snackbar'} type={'event.show'}/>\n<StorybookDescriptions componentName={'Snackbar'} type={'event.hide'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Snackbar'} type={'expose.isItem'}/>\n<StorybookDescriptions componentName={'Snackbar'} type={'expose.add'}/>\n<StorybookDescriptions componentName={'Snackbar'} type={'expose.remove'}/>\n<StorybookDescriptions componentName={'Snackbar'} type={'expose.clear'}/>\n    ",
			slots: ""
		},
		ai: { description: "\nCentralized notification management system (orchestrator) that coordinates the lifecycle and queue of temporary messages. Ideal for global system alerts, user feedback, and asynchronous status updates across the application.\nFeatures an intelligent queue manager with support for priority containers, automatic lifecycle hooks (show/hide), and flexible screen anchoring (vertical/horizontal positioning). Includes programmatic control over message stack, custom auto-hide delays, and teleport-based rendering to ensure overlay priority over all content.\nControlled via an exposed API (add, remove, clear) and configurable global settings like delay and origin. Place a single instance at the root of the application (e.g., App.vue) to manage consistent notification patterns throughout the entire user session.\n    " }
	},
	{
		name: "SnackbarItem",
		description: {
			en: "Individual notification message element used within a Snackbar.",
			ru: "Элемент индивидуального уведомления, используемый внутри Snackbar."
		},
		possibilities: {
			en: [
				"support for label and detailed description text",
				"leading and trailing icons support",
				"action buttons support",
				"custom HTML or component rendering",
				"built-in close button with customizable icon",
				"accessible ARIA status by default"
			],
			ru: [
				"поддержка заголовка и подробного текста описания",
				"поддержка начальных и конечных иконок",
				"поддержка кнопок действий",
				"рендер произвольного HTML или компонентов",
				"встроенная кнопка закрытия с настраиваемой иконкой",
				"доступный ARIA статус по умолчанию"
			]
		},
		import: [],
		stories: [{
			id: "SnackbarItemBasic",
			name: {
				en: "Basic",
				ru: "Базовые"
			},
			template: "\n        <div class=\"wiki-storybook-group\">\n          <DesignComponent\n            label=\"Detailed notification\"\n            description=\"Description text provides more context for the user.\"\n            class=\"wiki-storybook-item--squared--lg\"\n          />\n          <DesignComponent\n            label=\"Success message\"\n            icon=\"check_circle\"\n            class=\"wiki-storybook-item--squared--lg\"\n          />\n          <DesignComponent\n            label=\"File deleted\"\n            icon=\"delete\"\n            button=\"Undo\"\n            class=\"wiki-storybook-item--squared--lg\"\n          />\n          <DesignComponent\n            label=\"Connection lost\"\n            icon=\"wifi_off\"\n            :actions-list=\"[{ label: 'Retry', primary: true }]\"\n            class=\"wiki-storybook-item--squared--lg\"\n          />\n        </div>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'SnackbarItem'} type={'snackbarItem'}/>\n<Canvas of={Component.SnackbarItemBasic}/>\n\n<StorybookDescriptions componentName={'SnackbarItem'} type={'component'}/>\n<StorybookDescriptions componentName={'SnackbarItem'} type={'html'}/>\n<StorybookDescriptions componentName={'SnackbarItem'} type={'role'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n<StorybookDescriptions componentName={'Event'} type={'actions'}/>\n<StorybookDescriptions componentName={'SnackbarItem'} type={'eventClose'}/>\n    ",
			expose: "",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Slot'} type={'body'}/>\n"
		},
		ai: { description: "\nVisual representation element for a single notification message, typically orchestrated by the Snackbar component. Designed for concise informational alerts, success messages, or quick-action prompts.\nFeatures a flexible internal structure with support for labels, detailed descriptions, and material-symbol icons (leading/trailing). Includes integrated action button support, a mandatory close button, and support for rendering custom HTML or Vue components as message bodies.\nControlled via simple content props or an actions-list array for complex button configurations. Use as the base message unit for all system feedback, ensuring high visibility and accessibility through automatic ARIA status role implementation.\n    " }
	},
	{
		name: "TabItem",
		description: {
			en: "A versatile component for creating tabs, navigation links, or list items. Supports icons, badges, labels, and various interactive states.",
			ru: "Универсальный компонент для создания вкладок, навигационных ссылок или элементов списка. Поддерживает иконки, бейджи, метки и различные интерактивные состояния."
		},
		possibilities: {
			en: [
				"displaying a label (`label`)",
				"leading and trailing icons (`icon`, `iconTrailing`)",
				"integrated badge support (`badge`)",
				"selection state (`selected`)",
				"disabled state (`disabled`)",
				"navigation support (`href`, `to`)",
				"customizable root tag (`tag`)",
				"ripple effect on click",
				"skeleton loading state"
			],
			ru: [
				"отображение метки (`label`)",
				"иконки слева и справа (`icon`, `iconTrailing`)",
				"встроенная поддержка бейджа (`badge`)",
				"состояние выбора (`selected`)",
				"отключенное состояние (`disabled`)",
				"поддержка навигации (`href`, `to`)",
				"настраиваемый корневой тег (`tag`)",
				"эффект ряби при клике",
				"состояние загрузки (скелетон)"
			]
		},
		render: "\n    <div class=\"wiki-storybook-flex\">\n      <DesignComponent v-bind=\"args\" />\n      <DesignComponent v-bind=\"args\" />\n      <DesignComponent v-bind=\"args\" />\n    </div>\n  ",
		stories: [{
			id: "TabItemSkeleton",
			name: {
				en: "Skeleton",
				ru: "Скелетон"
			},
			components: ["Skeleton"],
			template: "\n        <DesignSkeleton :active=\"true\">\n          <DesignComponent isSkeleton>Tab item</DesignComponent>\n        </DesignSkeleton>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'TabItem'} type={'tabItem'}/>\n<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>\n<Canvas of={Component.TabItemSkeleton}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'value'}/>\n<StorybookDescriptions componentName={'Expose'} type={'detail'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n    "
		},
		ai: { description: "\nFoundational interactive building block for multi-item navigation structures like tabs, list menus, and sidebars. Encapsulates a label, optional icons, and status indicators (badges) into a single semantic unit with integrated state management.\nFeatures built-in support for selected, disabled, and loading (skeleton) states, along with automated navigation logic for href and router-link. Includes a Material-style ripple effect for high-polish click feedback and flexible tag rendering to support various HTML roles (button, a, li).\nControlled via label, icon, and badge props, with v-model or selected prop integration. Use within Tabs or List components to create cohesive, accessible navigation interfaces with consistent visual affordance and spatial organization.\n    " }
	},
	{
		name: "Tabs",
		description: {
			en: "Tabs component for switching between different views with animation",
			ru: "Компонент вкладок для переключения между различными представлениями с анимацией"
		},
		possibilities: {
			en: [
				"switching between content sections",
				"animated transitions via MotionAxis",
				"navigation via TabsNavigation",
				"customizable tabs list",
				"dynamic content slots"
			],
			ru: [
				"переключение между разделами контента",
				"анимированные переходы через MotionAxis",
				"навигация через TabsNavigation",
				"настраиваемый список вкладок",
				"динамические слоты контента"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n<DesignComponent v-bind=\"args\">\n  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>\n  <template #profile>Manage your personal information, security settings, and preferences.</template>\n  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>\n  <template #settings>Adjust your application settings to suit your needs.</template>\n  <template #dashboard>View your analytics and performance metrics in real-time.</template>\n  <template #notifications>Stay updated with the latest alerts and announcements.</template>\n</DesignComponent>\n  ",
		stories: [{
			id: "TabsBasic",
			name: {
				en: "Basic",
				ru: "Базовый"
			},
			template: "\n        <DesignComponent\n          :tabs=\"[\n            { label: 'Home', value: 'home' },\n            { label: 'Profile', value: 'profile' }\n          ]\"\n          selected=\"home\"\n        >\n          <template #home>Home</template>\n          <template #profile>Profile</template>\n        </DesignComponent>\n      "
		}, {
			id: "TabsVModel",
			name: {
				en: "v-model",
				ru: "v-model"
			},
			setup: "\n      return {\n        selected: ref('tab1')\n      }\n      ",
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex-align-center\">\n            <span>Current value: {{ selected }}</span>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'tab1'\">Tab 1</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'tab2'\">Tab 2</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = 'tab3'\">Tab 3</button>\n          </div>\n\n          <DesignComponent\n            :tabs=\"[\n            { label: 'Tab 1', value: 'tab1' },\n            { label: 'Tab 2', value: 'tab2' },\n            { label: 'Tab 3', value: 'tab3' }\n          ]\"\n            v-model:selected=\"selected\"\n          >\n            <template #tab1>Content 1</template>\n            <template #tab2>Content 2</template>\n            <template #tab3>Content 3</template>\n          </DesignComponent>\n        </div>\n      "
		}],
		documentation: { body: "\n<StorybookDescriptions componentName={'Tabs'} type={'tabs'}/>\n<Canvas of={Component.TabsBasic}/>\n\n<StorybookDescriptions componentName={'Tabs'} type={'v-model'}/>\n<Canvas of={Component.TabsVModel}/>\n    " },
		ai: { description: "\nHigh-level compound component that integrates TabsNavigation and MotionAxis to provide a complete, animated tabbed interface. Simplifies the creation of multi-view layouts where each section is logically separated and visually transitioned.\nFeatures automated coordination between the navigation bar and the content area, including direction-aware sliding animations and lazy loading. Supports dynamic tab lists, centralized state management via v-model, and modular content distribution through named slots matching tab values.\nControlled via the tabs prop for structure and v-model:selected for active state. Use for main dashboard views, complex settings panels, or any multi-step interface requiring a polished, interactive navigation experience with high performance.\n    " }
	},
	{
		name: "TabsNavigation",
		description: {
			en: "Component for managing navigation between tabs. Supports horizontal scrolling, selection management, and focus.",
			ru: "Компонент для управления навигацией между вкладками. Поддерживает горизонтальную прокрутку, управление выделением и фокусом."
		},
		possibilities: {
			en: [
				"horizontal scrolling of tabs",
				"management of the selected tab via `selected` and `list`",
				"keyboard support (arrows, Enter, Space)",
				"customization of tab appearance via `tag` and `itemAttrs`",
				"event support: `update:selected`, `update:modelSelected`"
			],
			ru: [
				"горизонтальная прокрутка вкладок",
				"управление выбранной вкладкой через `selected` и `list`",
				"поддержка клавиатуры (стрелки, Enter, Пробел)",
				"настройка внешнего вида вкладок через `tag` и `itemAttrs`",
				"поддержка событий: `update:selected`, `update:modelSelected`"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\"/>\n  ",
		import: ["import { ref } from 'vue'"],
		stories: [{
			id: "TabsNavigationBasic",
			name: {
				en: "Basic usage",
				ru: "Базовое использование"
			},
			setup: "\n      const list = [\n        { label: 'Tab 1', value: '1' },\n        { label: 'Tab 2', value: '2' },\n        { label: 'Tab 3', value: '3' }\n      ]\n      const selected = ref('2')\n      return { list, selected }\n      ",
			template: "\n        <DesignComponent :list=\"list\" v-model:selected=\"selected\"/>\n      "
		}, {
			id: "TabsNavigationVModel",
			name: {
				en: "Two-way binding (v-model)",
				ru: "Двусторонняя привязка (v-model)"
			},
			setup: "\n      const list = [\n        { label: 'Tab 1', value: '1' },\n        { label: 'Tab 2', value: '2' },\n        { label: 'Tab 3', value: '3' }\n      ]\n      const selected = ref('1')\n      return { list, selected }\n      ",
			template: "\n        <div class=\"wiki-storybook-flex-column\">\n          <div class=\"wiki-storybook-flex-align-center\">\n            <span>Current value: {{ selected }}</span>\n            <button class=\"wiki-storybook-button\" @click=\"selected = '1'\">Select Tab 1</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = '2'\">Select Tab 2</button>\n            <button class=\"wiki-storybook-button\" @click=\"selected = '3'\">Select Tab 3</button>\n          </div>\n\n          <DesignComponent :list=\"list\" v-model:selected=\"selected\"/>\n        </div>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'TabsNavigation'} type={'tabsNavigation'}/>\n<Canvas of={Component.TabsNavigationBasic}/>\n<StorybookDescriptions componentName={'TabsNavigation'} type={'v-model'}/>\n<Canvas of={Component.TabsNavigationVModel}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'click'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'leading'} />\n<StorybookDescriptions componentName={'Slot'} type={'trailing'} />\n    "
		},
		ai: { description: "\nSpecialized navigation container for creating horizontal tab bars with automated scrolling and focus management. Designed for switching between filtered views, dashboard sections, or multi-step form progress indicators.\nFeatures intelligent horizontal scrolling with alignment control, keyboard navigation support (arrows, Enter, Space), and customizable tab item rendering via the tag and itemAttrs props. Automatically synchronizes active state through two-way binding and provides leading/trailing slots for auxiliary navigation actions.\nControlled via the list prop for tab definitions and v-model:selected for active state tracking. Use as the base header for complex tabbed layouts or standalone navigation bars requiring high accessibility and smooth interaction across mobile and desktop.\n    " }
	},
	{
		name: "Textarea",
		description: {
			en: "A multi-line text input component. Supports auto-sizing, validation, icons, labels, messages, and counters.",
			ru: "Компонент многострочного ввода текста. Поддерживает авто-размер, валидацию, иконки, метки, сообщения и счетчики."
		},
		possibilities: {
			en: [
				"multi-line text input",
				"auto-sizing based on content (`autosize`)",
				"validation support (`validationMessage`, `required`)",
				"label and helper message support",
				"character counter (`counter`, `maxlength`)",
				"icons support",
				"disabled and readonly states"
			],
			ru: [
				"многострочный ввод текста",
				"авто-размер в зависимости от контента (`autosize`)",
				"поддержка валидации (`validationMessage`, `required`)",
				"поддержка метки и вспомогательного сообщения",
				"счетчик символов (`counter`, `maxlength`)",
				"поддержка иконок",
				"состояния отключения и только для чтения"
			]
		},
		render: "\n    <DesignComponent v-bind=\"args\" />\n  ",
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Textarea'} type={'textarea'}/>\n<StorybookDescriptions componentName={'Textarea'} type={'autosize'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'input'}/>\n<StorybookDescriptions componentName={'Event'} type={'change'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Slot'} type={'label'} />\n<StorybookDescriptions componentName={'Slot'} type={'prefix'} />\n<StorybookDescriptions componentName={'Slot'} type={'suffix'} />\n<StorybookDescriptions componentName={'Slot'} type={'caption'} />\n<StorybookDescriptions componentName={'Slot'} type={'leading'} />\n<StorybookDescriptions componentName={'Slot'} type={'trailing'} />\n    "
		},
		ai: { description: "\nVersatile multi-line text input control with automated spatial management and comprehensive validation support. Designed for feedback forms, detailed descriptions, and any scenario requiring a flexible, high-volume data entry area.\nFeatures an intelligent autosize engine that grows/shrinks dynamically based on content, along with character counter integration and Material symbol icons (leading/trailing). Inherits full Field component functionality including floating labels, helper messages, and reactive error states.\nControlled via the v-model for content and autosize prop for height behavior. Use for user biographies, multi-row comments, or complex data entry views where standard single-line inputs lack sufficient capacity.\n    " }
	},
	{
		name: "TextareaAutosize",
		description: {
			en: "Textarea component that automatically adjusts its height based on content",
			ru: "Компонент текстового поля, которое автоматически подстраивает свою высоту под содержимое"
		},
		possibilities: {
			en: [
				"automatic height adjustment based on content",
				"clone element for precise height calculation",
				"respects padding and styling from the original textarea",
				"smooth height transitions on content change",
				"supports all standard textarea attributes via inputAttrs",
				"optional autosize toggle for flexibility",
				"reactive value binding with input event emission"
			],
			ru: [
				"автоматическая подстройка высоты под содержимое",
				"элемент-клон для точного расчёта высоты",
				"учитывает отступы и стили исходного textarea",
				"плавные переходы высоты при изменении содержимого",
				"поддержка всех стандартных атрибутов textarea через inputAttrs",
				"опциональное отключение autosize для гибкости",
				"реактивная привязка значения с генерацией события input"
			]
		},
		import: [],
		render: "\n      <DesignComponent v-bind=\"args\" :inputAttrs=\"{style: 'width: 240px; border: 1px solid #90A1B9FF'}\" />\n    ",
		stories: [],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'TextareaAutosize'} type={'textarea-autosize'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Event'} type={'input-standard'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Expose'} type={'value'}/>\n    "
		},
		ai: { description: "\nLow-level functional engine for multi-line inputs that provides precise, real-time height adjustment based on content. Implements a reliable cloning mechanism to calculate scroll-free container heights while respecting parent padding and font styles.\nFeatures automated height synchronization during content changes, supporting smooth CSS transitions and native textarea attributes via inputAttrs. Operates as a foundational tool for the Textarea component, ensuring character entry never triggers unwanted shift or overflow.\nPrimarily integrated as a subcomponent; should generally not be manually used for standalone input fields. Controlled via reactive value bindings, serving as the high-performance core for any dynamic data entry element requiring responsive layout scaling.\n    " }
	},
	{
		name: "Tooltip",
		description: {
			en: "Component for displaying a popup hint when hovering over an element",
			ru: "Компонент для отображения всплывающей подсказки при наведении на элемент"
		},
		possibilities: {
			en: [
				"displaying text or other content in a popup window",
				"automatic positioning relative to the element",
				"support for delay before showing and hiding",
				"customizable indentation and padding",
				"ability to control the open state",
				"support for an arrow pointing to the element"
			],
			ru: [
				"отображение текста или другого контента во всплывающем окне",
				"автоматическое позиционирование относительно элемента",
				"поддержка задержки перед показом и скрытием",
				"настраиваемые отступы и поля",
				"возможность управления состоянием открытия",
				"поддержка стрелки, указывающей на элемент"
			]
		},
		import: [],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <template #control=\"{ binds }\">\n          <span v-bind=\"binds\">\n            Hover me\n          </span>\n        </template>\n      </DesignComponent>\n    ",
		stories: [{
			id: "TooltipAllSlots",
			name: {
				en: "All slots demonstration",
				ru: "Демонстрация всех слотов"
			},
			template: "\n        <DesignComponent>\n          <template #control=\"{ binds }\">\n            <button class=\"wiki-storybook-button\" v-bind=\"binds\">\n              Hover me (All Slots)\n            </button>\n          </template>\n\n          <template #default>\n            Default Slot\n          </template>\n\n          <template #description>\n            Description Slot\n          </template>\n\n          <template #body>\n            <div class=\"wiki-storybook-item--padding\">\n              Body Slot Content\n            </div>\n          </template>\n        </DesignComponent>\n      "
		}],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Tooltip'} type={'tooltip'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Tooltip'} type={'event.tooltip'}/>\n    ",
			slots: "\n<Canvas of={Component.TooltipAllSlots}/>\n<StorybookDescriptions componentName={'Tooltip'} type={'slot.control'}/>\n<StorybookDescriptions componentName={'Slot'} type={'default'}/>\n<StorybookDescriptions componentName={'Slot'} type={'description'}/>\n<StorybookDescriptions componentName={'Slot'} type={'body'}/>\n    "
		},
		ai: {
			render: "\n<div :class=\"classDemo.item\">\n  <Tooltip open embedded v-bind=\"args\">\n    <template #control=\"{ binds }\">\n      <button v-bind=\"binds\">Hover me</button>\n    </template>\n  </Tooltip>\n</div>\n    ",
			description: "\nContextual informational overlay that appears when a user interacts with a trigger element via hover or focus. Designed for auxiliary labels, helper text, and secondary descriptive titles that enhance functional awareness without crowding the UI.\nFeatures automated high-precision positioning (top, bottom, left, right) with viewport collision detection and customizable delay/interactive behaviors. Includes a built-in arrow indicator and requires trigger binding via the #control slot's binds object for proper event synchronization.\nControlled via simple content props (label, description) and supports complex HTML structures within the #default slot. Use to provide non-critical supplemental information, keyboard shortcuts, or detailed affordance for icon-only buttons.\n    "
		}
	},
	{
		name: "Window",
		description: {
			en: "Flexible modal and popup window component with advanced positioning and animation capabilities",
			ru: "Гибкий компонент модального и всплывающего окна с расширенными возможностями позиционирования и анимации"
		},
		possibilities: {
			en: [
				"modal and contextual window display modes",
				"intelligent positioning system with automatic collision detection",
				"smooth opening and closing animations with customizable transitions",
				"static mode for embedded window components",
				"persistent window state management",
				"automatic scroll handling and content overflow management",
				"keyboard navigation and accessibility support",
				"event-driven architecture with comprehensive lifecycle hooks",
				"integration with scrollbar and image components",
				"responsive design with mobile and desktop optimization"
			],
			ru: [
				"режимы отображения модальных и контекстных окон",
				"интеллектуальная система позиционирования с автоматическим определением коллизий",
				"плавные анимации открытия и закрытия с настраиваемыми переходами",
				"статический режим для встроенных компонентов окон",
				"управление постоянным состоянием окна",
				"автоматическая обработка прокрутки и управление переполнением контента",
				"навигация с клавиатуры и поддержка доступности",
				"событийно-ориентированная архитектура с комплексными хуками жизненного цикла",
				"интеграция с компонентами скроллбара и изображений",
				"адаптивный дизайн с оптимизацией для мобильных устройств и десктопа"
			]
		},
		import: ["import { ref } from 'vue'"],
		render: "\n      <DesignComponent v-bind=\"args\">\n        <template #control=\"{binds}\">\n          <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open Window</button>\n        </template>\n\n        <template #title>\n          <h3 class=\"wiki-storybook-item--padding\">Window Component Demonstration</h3>\n        </template>\n\n        <template #default>\n          <div class=\"wiki-storybook-item--padding\">\n            <h4>Advanced Window System</h4>\n            <p>This window component represents a sophisticated approach to modal and popup interfaces in modern web applications. It provides a comprehensive solution for displaying overlaid content with intelligent positioning, smooth animations, and extensive customization options.</p>\n\n            <p>The component automatically handles complex scenarios such as viewport boundaries, scroll positioning, and responsive behavior across different screen sizes. Whether used for modal dialogs, dropdown menus, tooltips, or contextual panels, the window component adapts to various use cases while maintaining consistent behavior and appearance.</p>\n\n            <h4>Key Features and Capabilities</h4>\n            <p>The window system includes advanced features such as automatic positioning algorithms that prevent content from appearing outside viewport boundaries, smooth transition animations that enhance user experience, and comprehensive event handling for various interaction patterns including keyboard navigation and focus management.</p>\n\n            <p>Integration with other components such as scrollbars and images is seamless, allowing for rich content presentation within window containers. The component supports both programmatic and declarative control patterns, making it suitable for different development approaches and architectural requirements.</p>\n\n            <h4>Technical Architecture</h4>\n            <p>Built with a modular composition-based architecture, the window component consists of multiple specialized subcomponents that handle specific aspects of functionality. This includes separate managers for positioning, events, styles, animations, and state persistence, ensuring maintainable and testable code.</p>\n\n            <p>The component follows modern Vue.js patterns with reactive state management, composable APIs, and TypeScript support throughout. Performance is optimized through intelligent rendering strategies and minimal DOM manipulation, ensuring smooth operation even in complex applications with multiple concurrent windows.</p>\n          </div>\n        </template>\n\n        <template #footer=\"{classesWindow}\">\n          <div class=\"wiki-storybook-flex wiki-storybook-item--padding\">\n            <button :class=\"classesWindow.close\" class=\"wiki-storybook-button wiki-storybook-button--text\">Cancel</button>\n            <button class=\"wiki-storybook-button\">Confirm</button>\n          </div>\n        </template>\n      </DesignComponent>\n    ",
		stories: [
			{
				id: "WindowStaticMode",
				name: {
					en: "Static Mode",
					ru: "Статический режим"
				},
				template: "\n        <DesignComponent :staticMode=\"true\" adaptive=\"static\">\n          <template #default>\n            <h4>Static Mode Window</h4>\n            <p>This window uses <code>staticMode: true</code>.</p>\n            <p>Content displays immediately without animations or modal positioning.</p>\n\n            <div class=\"wiki-storybook-info\">\n              <strong>Static mode features:</strong>\n              <ul>\n                <li>No animations</li>\n                <li>Embedded in document flow</li>\n                <li>Always visible</li>\n              </ul>\n            </div>\n          </template>\n        </DesignComponent>\n      "
			},
			{
				id: "WindowAxis",
				name: {
					en: "Axis positioning",
					ru: "Позиционирование по оси"
				},
				template: "\n        <div class=\"wiki-storybook-flex wiki-storybook-gap\">\n          <!-- Axis: x -->\n          <DesignComponent axis=\"x\" adaptive=\"menu\" :indent=\"8\">\n            <template #control=\"{binds}\">\n              <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open (axis: x)</button>\n            </template>\n            <template #default>\n              <div class=\"wiki-storybook-item--padding\">\n                <strong>axis = x</strong>\n                <p>Window aligns horizontally (left/right) near the trigger.</p>\n              </div>\n            </template>\n          </DesignComponent>\n\n          <!-- Axis: y -->\n          <DesignComponent axis=\"y\" adaptive=\"menu\" :indent=\"8\">\n            <template #control=\"{binds}\">\n              <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open (axis: y)</button>\n            </template>\n            <template #default>\n              <div class=\"wiki-storybook-item--padding\">\n                <strong>axis = y</strong>\n                <p>Window aligns vertically (top/bottom) near the trigger.</p>\n              </div>\n            </template>\n          </DesignComponent>\n\n          <!-- Axis: on -->\n          <DesignComponent axis=\"on\" adaptive=\"menu\" overElement=\".axis-on-target\">\n            <template #control=\"{binds}\">\n              <button class=\"wiki-storybook-button\" v-bind=\"binds\">Open (axis: on)</button>\n            </template>\n            <template #default>\n              <div class=\"wiki-storybook-item--padding\">\n                <strong>axis = on</strong>\n                <p>Window positions over the target element; scroll adjusts to keep it visible.</p>\n                <ul style=\"max-height: 160px; overflow: auto; margin: 8px 0; padding-left: 20px;\">\n                  <li>Item 1</li>\n                  <li>Item 2</li>\n                  <li>Item 3</li>\n                  <li>Item 4</li>\n                  <li class=\"axis-on-target\"><strong>Focused item (target)</strong></li>\n                  <li>Item 6</li>\n                  <li>Item 7</li>\n                  <li>Item 8</li>\n                  <li>Item 9</li>\n                  <li>Item 10</li>\n                </ul>\n              </div>\n            </template>\n          </DesignComponent>\n        </div>\n      "
			},
			{
				id: "WindowVModel",
				name: {
					en: "Two-way binding (v-model)",
					ru: "Двусторонняя привязка (v-model)"
				},
				setup: "\n      return {\n        open: ref(false)\n      }\n      ",
				template: "\n        <button class=\"wiki-storybook-button\" @click=\"open = true\">Open via v-model ({{ open }})</button>\n\n        <DesignComponent v-model:open=\"open\">\n          <div class=\"wiki-storybook-item--padding\">Your content here</div>\n        </DesignComponent>\n      "
			}
		],
		documentation: {
			body: "\n<StorybookDescriptions componentName={'Window'} type={'window'}/>\n<StorybookDescriptions componentName={'Window'} type={'classes'}/>\n<StorybookDescriptions componentName={'Window'} type={'staticMode'}/>\n<Canvas of={Component.WindowStaticMode}/>\n<StorybookDescriptions componentName={'Window'} type={'axis'}/>\n<Canvas of={Component.WindowAxis}/>\n<StorybookDescriptions componentName={'Window'} type={'v-model'}/>\n<Canvas of={Component.WindowVModel}/>\n<StorybookDescriptions componentName={'Window'} type={'hooks'}/>\n    ",
			events: "\n<StorybookDescriptions componentName={'Window'} type={'event.window'}/>\n<StorybookDescriptions componentName={'Scrollbar'} type={'emits-include'}/>\n<StorybookDescriptions componentName={'Image'} type={'event.load'}/>\n    ",
			expose: "\n<StorybookDescriptions componentName={'Window'} type={'expose'}/>\n    ",
			slots: "\n<StorybookDescriptions componentName={'Window'} type={'slots'}/>\n    "
		},
		ai: {
			render: "\n      <div :class=\"classDemo.item\">\n        <Window embedded open v-bind=\"args\">\n            <template #control=\"{ binds }\">\n              <button v-bind=\"binds\">Open Window</button>\n            </template>\n            <template #title>\n              <h3>Window Title</h3>\n            </template>\n            <template #default>\n              <p>Window content goes here. This is a demonstration of the window component capabilities.</p>\n              <p>It can contain text, images, forms, or any other content.</p>\n            </template>\n            <template #footer>\n              <div>\n                <button>Cancel</button>\n                <button>Save</button>\n              </div>\n            </template>\n          </Window>\n      </div>\n    ",
			description: "\nVersatile high-performance container orchestration system for Modals, Popups, Dropdowns, and Cards. Automatically manages complex DOM interactions including z-index hierarchy, focus trapping, teleportation, and body scroll locking.\nFeatures an intelligent multi-axis positioning engine (vertical, horizontal, or overlay) with automated viewport collision detection and obstacle avoidance. Includes a full suite of lifecycle hooks, advanced animation management, and integrated support for Scrollbar and Image components within its content area.\nControlled via the v-model:open prop and utilizing the #control, #title, #default, and #footer slots for modular layout. Use as a foundational building block for any overlaid or contextual interface requirement that exceeds the logic of standard Modal or Menu components.\n    ",
			hide: !0
		}
	}
];
//#endregion
export { e as t };
