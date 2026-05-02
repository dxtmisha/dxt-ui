import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ht as n,xt as r}from"./iframe-CXCBnhvn.js";import{a as i,d as a,m as o,n as s,o as c,t as l,u}from"./wiki-BqBJrlEv.js";import{i as d,n as f,r as p,t as m}from"./D1Window-D5B-mabT.js";var h,g,_,v,y=e((()=>{l(),d(),h=[{name:`adaptive`,type:`string | undefined`,option:[`menu`,`menuWindow`,`modal`,`modalDynamic`,`actionSheetRight`,`actionSheetBottom`,`static`,`actionSheet`,`actionSheetToModal`,`autoStaticSm`,`autoStaticMd`,`autoStaticLg`,`autoStaticXl`,`autoStatic2xl`]},{name:`alignment`,type:`string | undefined`,option:[`center`,`top`,`topRight`,`topLeft`,`topFull`,`right`,`rightFull`,`bottom`,`bottomRight`,`bottomLeft`,`bottomFull`,`left`,`leftFull`]},{name:`ariaDescribedby`,type:`string | undefined`},{name:`ariaHaspopup`,type:`string`,option:[`menu`,`dialog`,`grid`,`listbox`,`tree`,`true`,`false`]},{name:`ariaLabelledby`,type:`string | undefined`},{name:`autoClose`,type:`boolean | undefined`},{name:`autoTabIndex`,type:`boolean | undefined`},{name:`axis`,type:`string | undefined`,option:[`x`,`y`,`on`]},{name:`beforeClosing`,type:`(() => NormalOrPromise<boolean>) | undefined`},{name:`beforeOpening`,type:`(() => NormalOrPromise<boolean>) | undefined`},{name:`closeButton`,type:`boolean | undefined`},{name:`closeMobileHide`,type:`boolean | undefined`},{name:`closeOnEsc`,type:`boolean | undefined`},{name:`closing`,type:`(() => NormalOrPromise<boolean>) | undefined`},{name:`contextmenu`,type:`boolean | undefined`},{name:`dense`,type:`boolean | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`divider`,type:`boolean | undefined`},{name:`embedded`,type:`boolean | undefined`},{name:`flash`,type:`boolean | undefined`},{name:`fullscreen`,type:`boolean | undefined`},{name:`height`,type:`string | undefined`,option:[`auto`,`max`,`sm`,`md`,`lg`,`custom`]},{name:`hide`,type:`boolean | undefined`},{name:`iconClose`,type:`IconValue<IconProps> | undefined`},{name:`image`,type:`string | ConstrBind<ImageProps> | undefined`},{name:`imagePosition`,type:`string | undefined`,option:[`top`,`left`]},{name:`imageSize`,type:`string | undefined`,option:[`sm`,`md`,`lg`,`quarter`,`half`]},{name:`indent`,type:`number | undefined`},{name:`inDom`,type:`boolean | undefined`},{name:`inert`,type:`boolean | undefined`},{name:`modelOpen`,type:`boolean | undefined`},{name:`onUpdate:modelOpen`,type:`((value: boolean) => void) | undefined`},{name:`onUpdate:open`,type:`((value: boolean) => void) | undefined`},{name:`open`,type:`boolean | undefined`},{name:`opening`,type:`(() => NormalOrPromise<boolean>) | undefined`},{name:`openOnArrowDown`,type:`boolean | undefined`},{name:`origin`,type:`string | undefined`,option:[`center`,`top`,`right`,`bottom`,`left`,`topToBottom`,`rightToLeft`,`bottomToTop`,`leftToRight`]},{name:`overElement`,type:`ElementOrString<HTMLElement> | undefined`},{name:`overscroll`,type:`boolean | undefined`},{name:`persistent`,type:`boolean | undefined`},{name:`preparation`,type:`(() => NormalOrPromise<void>) | undefined`},{name:`role`,type:`string | undefined`},{name:`scrollbarAttrs`,type:`ConstrBind<ScrollbarProps> | undefined`},{name:`staticMode`,type:`boolean | undefined`},{name:`textClose`,type:`TextValue`},{name:`width`,type:`string | undefined`,option:[`auto`,`max`,`sm`,`md`,`lg`,`custom`]},{name:`widthMatch`,type:`boolean | undefined`}],g=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],_=[{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]},{name:`scrollbarBottom`,description:`Event triggered when reaching the bottom/ Событие при достижении низа`,properties:[{name:`isBottom`,type:`boolean`}]},{name:`scrollbarEdge`,description:`Event triggered when reaching any edge/ Событие при достижении любого края`,properties:[{name:`isTop`,type:`boolean`},{name:`isBottom`,type:`boolean`},{name:`edge`,type:`ScrollbarEdgeType`}]},{name:`scrollbarLeaveBottom`,description:`Event triggered when leaving the bottom position/ Событие при уходе с нижней позиции`},{name:`scrollbarLeaveTop`,description:`Event triggered when leaving the top position/ Событие при уходе с верхней позиции`},{name:`scrollbarReachBottom`,description:`Event triggered when precisely reaching the bottom position/ Событие при точном достижении нижней позиции`},{name:`scrollbarReachTop`,description:`Event triggered when precisely reaching the top position/ Событие при точном достижении верхней позиции`},{name:`scrollbarTop`,description:`Event triggered when reaching the top/ Событие при достижении верха`,properties:[{name:`isTop`,type:`boolean`}]},{name:`update:modelOpen`,description:`Update model open event/ Событие обновления открытия модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:open`,description:`Update open event/ Событие обновления открытия`,properties:[{name:`value`,type:`boolean`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],v={component:`Window`,props:h,slots:g,events:_,defaults:p,wikiDesign:s}})),b,x=e((()=>{a(),c(),y(),b=new u(v.component,v.props,v.defaults,v.wikiDesign,i,o)})),S=t({Window:()=>w,WindowAxis:()=>E,WindowStaticMode:()=>T,WindowVModel:()=>D,__namedExportsOrder:()=>O,default:()=>C}),C,w,T,E,D,O,k=e((()=>{f(),x(),r(),C={title:`Ui/Window`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1Window:m},setup:()=>({args:e}),template:`
      <D1Window v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Window</button>
        </template>

        <template #title>
          <h3 class="wiki-storybook-item--padding">Window Component Demonstration</h3>
        </template>

        <template #default>
          <div class="wiki-storybook-item--padding">
            <h4>Advanced Window System</h4>
            <p>This window component represents a sophisticated approach to modal and popup interfaces in modern web applications. It provides a comprehensive solution for displaying overlaid content with intelligent positioning, smooth animations, and extensive customization options.</p>

            <p>The component automatically handles complex scenarios such as viewport boundaries, scroll positioning, and responsive behavior across different screen sizes. Whether used for modal dialogs, dropdown menus, tooltips, or contextual panels, the window component adapts to various use cases while maintaining consistent behavior and appearance.</p>

            <h4>Key Features and Capabilities</h4>
            <p>The window system includes advanced features such as automatic positioning algorithms that prevent content from appearing outside viewport boundaries, smooth transition animations that enhance user experience, and comprehensive event handling for various interaction patterns including keyboard navigation and focus management.</p>

            <p>Integration with other components such as scrollbars and images is seamless, allowing for rich content presentation within window containers. The component supports both programmatic and declarative control patterns, making it suitable for different development approaches and architectural requirements.</p>

            <h4>Technical Architecture</h4>
            <p>Built with a modular composition-based architecture, the window component consists of multiple specialized subcomponents that handle specific aspects of functionality. This includes separate managers for positioning, events, styles, animations, and state persistence, ensuring maintainable and testable code.</p>

            <p>The component follows modern Vue.js patterns with reactive state management, composable APIs, and TypeScript support throughout. Performance is optimized through intelligent rendering strategies and minimal DOM manipulation, ensuring smooth operation even in complex applications with multiple concurrent windows.</p>
          </div>
        </template>

        <template #footer="{classesWindow}">
          <div class="wiki-storybook-flex wiki-storybook-item--padding">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
            <button class="wiki-storybook-button">Confirm</button>
          </div>
        </template>
      </D1Window>
    `})},T={name:`Статический режим`,render:()=>({components:{D1Window:m},template:`
        <D1Window :staticMode="true" adaptive="static">
          <template #default>
            <h4>Static Mode Window</h4>
            <p>This window uses <code>staticMode: true</code>.</p>
            <p>Content displays immediately without animations or modal positioning.</p>

            <div class="wiki-storybook-info">
              <strong>Static mode features:</strong>
              <ul>
                <li>No animations</li>
                <li>Embedded in document flow</li>
                <li>Always visible</li>
              </ul>
            </div>
          </template>
        </D1Window>
    `})},E={name:`Позиционирование по оси`,render:()=>({components:{D1Window:m},template:`
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <!-- Axis: x -->
          <D1Window axis="x" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: x)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = x</strong>
                <p>Window aligns horizontally (left/right) near the trigger.</p>
              </div>
            </template>
          </D1Window>

          <!-- Axis: y -->
          <D1Window axis="y" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: y)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = y</strong>
                <p>Window aligns vertically (top/bottom) near the trigger.</p>
              </div>
            </template>
          </D1Window>

          <!-- Axis: on -->
          <D1Window axis="on" adaptive="menu" overElement=".axis-on-target">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: on)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = on</strong>
                <p>Window positions over the target element; scroll adjusts to keep it visible.</p>
                <ul style="max-height: 160px; overflow: auto; margin: 8px 0; padding-left: 20px;">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li class="axis-on-target"><strong>Focused item (target)</strong></li>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </div>
            </template>
          </D1Window>
        </div>
    `})},D={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Window:m},setup(){return{open:n(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Window v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Window>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Window
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Window v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Window</button>
        </template>

        <template #title>
          <h3 class="wiki-storybook-item--padding">Window Component Demonstration</h3>
        </template>

        <template #default>
          <div class="wiki-storybook-item--padding">
            <h4>Advanced Window System</h4>
            <p>This window component represents a sophisticated approach to modal and popup interfaces in modern web applications. It provides a comprehensive solution for displaying overlaid content with intelligent positioning, smooth animations, and extensive customization options.</p>

            <p>The component automatically handles complex scenarios such as viewport boundaries, scroll positioning, and responsive behavior across different screen sizes. Whether used for modal dialogs, dropdown menus, tooltips, or contextual panels, the window component adapts to various use cases while maintaining consistent behavior and appearance.</p>

            <h4>Key Features and Capabilities</h4>
            <p>The window system includes advanced features such as automatic positioning algorithms that prevent content from appearing outside viewport boundaries, smooth transition animations that enhance user experience, and comprehensive event handling for various interaction patterns including keyboard navigation and focus management.</p>

            <p>Integration with other components such as scrollbars and images is seamless, allowing for rich content presentation within window containers. The component supports both programmatic and declarative control patterns, making it suitable for different development approaches and architectural requirements.</p>

            <h4>Technical Architecture</h4>
            <p>Built with a modular composition-based architecture, the window component consists of multiple specialized subcomponents that handle specific aspects of functionality. This includes separate managers for positioning, events, styles, animations, and state persistence, ensuring maintainable and testable code.</p>

            <p>The component follows modern Vue.js patterns with reactive state management, composable APIs, and TypeScript support throughout. Performance is optimized through intelligent rendering strategies and minimal DOM manipulation, ensuring smooth operation even in complex applications with multiple concurrent windows.</p>
          </div>
        </template>

        <template #footer="{classesWindow}">
          <div class="wiki-storybook-flex wiki-storybook-item--padding">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
            <button class="wiki-storybook-button">Confirm</button>
          </div>
        </template>
      </D1Window>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Статический режим',
  render: () => ({
    components: {
      D1Window
    },
    template: \`
        <D1Window :staticMode="true" adaptive="static">
          <template #default>
            <h4>Static Mode Window</h4>
            <p>This window uses <code>staticMode: true</code>.</p>
            <p>Content displays immediately without animations or modal positioning.</p>

            <div class="wiki-storybook-info">
              <strong>Static mode features:</strong>
              <ul>
                <li>No animations</li>
                <li>Embedded in document flow</li>
                <li>Always visible</li>
              </ul>
            </div>
          </template>
        </D1Window>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Позиционирование по оси',
  render: () => ({
    components: {
      D1Window
    },
    template: \`
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <!-- Axis: x -->
          <D1Window axis="x" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: x)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = x</strong>
                <p>Window aligns horizontally (left/right) near the trigger.</p>
              </div>
            </template>
          </D1Window>

          <!-- Axis: y -->
          <D1Window axis="y" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: y)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = y</strong>
                <p>Window aligns vertically (top/bottom) near the trigger.</p>
              </div>
            </template>
          </D1Window>

          <!-- Axis: on -->
          <D1Window axis="on" adaptive="menu" overElement=".axis-on-target">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: on)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = on</strong>
                <p>Window positions over the target element; scroll adjusts to keep it visible.</p>
                <ul style="max-height: 160px; overflow: auto; margin: 8px 0; padding-left: 20px;">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li class="axis-on-target"><strong>Focused item (target)</strong></li>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </div>
            </template>
          </D1Window>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Window
    },
    setup() {
      return {
        open: ref(false)
      };
    },
    template: \`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Window v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Window>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Window`,`WindowStaticMode`,`WindowAxis`,`WindowVModel`]}));k();export{w as Window,E as WindowAxis,T as WindowStaticMode,D as WindowVModel,O as __namedExportsOrder,C as default,x as i,k as n,b as r,S as t};