import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,Nt as s,in as c,jt as l,tn as u}from"./library-CUIf7uCS.js";import{O as d,d as f,k as p,l as m,m as h,n as g,p as _,r as v,t as y,u as b}from"./wiki-wIqBVsyI.js";import{n as x,t as S}from"./ButtonInclude-DwjLnaTt-Bz3Q2nnW.js";import{n as ee,t as te}from"./Button-Dxsbp3qG.js";import{n as C,t as w}from"./D1Skeleton-CTEnVdL2.js";import{n as T,t as E}from"./Menu-Bb_q4yuZ.js";import{n as D,t as O}from"./SelectAbstract-eRUEdIAH-Bubu3Rlu.js";var k,A,j;function M(){return(M=e((()=>{S(),D(),r(),d(),k=class extends O{constructor(e,t,n,r,i,a,o,s,c={}){super(e,t,n,r,i,a,o,s,c),_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),_(this,`button`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{ButtonConstructor:l=x}=c;this.button=new l(this.className,this.props,this.components,()=>({icon:this.props.icon,disabled:this.props.disabled,readonly:this.props.readonly,iconTrailing:this.iconTrailing}))}},A={labelSeparator:`:`,hideLabelValue:!0,hideValueIcon:!0},j=class extends p{constructor(e,t,n,r=k){super(e,t,n),_(this,`item`,void 0),_(this,`renderControl`,e=>this.item.button.render({default:()=>this.renderControlLabel(e.selectedNames?.value)},{...e.binds,iconTurn:e.open.value})),_(this,`renderControlLabel`,e=>{let t=[],n=e&&e.length>0&&!(this.props.hideValueIcon&&this.props.icon);return this.props.label&&(!n||!this.props.hideLabelValue)&&(n?t.push(s(`span`,{class:this.classes?.value.label},this.props.label),s(`span`,{class:this.classes?.value.separator},this.props.labelSeparator)):t.push(this.props.label)),n&&t.push(s(`span`,{class:this.classes?.value.selected},e.join(`, `))),t}),_(this,`renderInput`,()=>s(`input`,{name:this.props.name,value:this.item.value.get(),type:`hidden`})),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.value.expose(),...this.item.validation.expose(),...this.item.menu.expose}}initClasses(){return{main:{},label:this.getSubClass(`label`),separator:this.getSubClass(`separator`),selected:this.getSubClass(`selected`)}}initStyles(){return{}}initRender(){return this.item.menu.render({control:e=>[this.renderControl(e),this.renderInput()],title:e=>this.initSlot(`title`,void 0,e),footer:e=>this.initSlot(`footer`,void 0,e),contextTop:e=>this.initSlot(`contextTop`,void 0,e),contextBottom:e=>this.initSlot(`contextBottom`,void 0,e)},{selected:this.item.value.item.value})}}})))()}var N;function P(){return(P=e((()=>{M(),N={...A,iconArrowDown:`keyboard_arrow_down`}})))()}var F;function I(){return(I=e((()=>{r(),M(),T(),ee(),P(),F=o({name:`D1MenuButton`,__name:`D1MenuButton`,props:a({label:{},labelId:{},buttonAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},value:{},detail:{},name:{},id:{},required:{type:Boolean},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},tabindex:{},form:{},match:{},inputAttrs:{},max:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},selectionStyle:{},menuAttrs:{},labelSeparator:{},icon:{},hideLabelValue:{type:Boolean},hideValueIcon:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{}},N),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:r}){let a=r,o=e,s=n(()=>({main:{"d1-menuButton":!0}})),u=n(()=>({})),d=new j(`d1.menuButton`,o,{emits:a,classes:s,styles:u,components:{menu:E,button:te},compMod:{button:{secondary:!0,size:`sm`}}}),f=d.render();return t(d.expose()),(e,t)=>(i(),l(c(f)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1MenuButton`,exportName:`default`,displayName:`D1MenuButton`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/MenuButton/D1MenuButton.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{y(),P(),z=[{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`filterMode`,type:`boolean`},{name:`form`,type:`string`},{name:`hideLabelValue`,type:`boolean`},{name:`hideList`,type:`boolean`},{name:`hideValueIcon`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`labelSeparator`,type:`string`},{name:`match`,type:`FieldMatch`},{name:`max`,type:`NumberOrString`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`modelValue`,type:`Value`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: any) => void)`},{name:`onUpdate:value`,type:`((value: any) => void)`},{name:`option`,type:`ListRecord`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`checkmark`,`auto`]},{name:`showSearch`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`tabindex`,type:`number`},{name:`value`,type:`Value`}],B=[{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]}],V=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],H={component:`MenuButton`,props:z,slots:B,events:V,defaults:N,wikiDesign:g}})))()}var W;function G(){return(G=e((()=>{f(),m(),U(),W=new b(H.component,H.props,H.defaults,H.wikiDesign,v,h)})))()}var K=t({MenuButton:()=>J,MenuButtonBasic:()=>Y,MenuButtonSkeleton:()=>Z,MenuButtonVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{R(),G(),C(),r(),q={title:`Ui/MenuButton`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1MenuButton:L},setup:()=>({args:e}),template:`
      <D1MenuButton v-bind="args" />
    `})},Y={name:`Базовые`,render:()=>({components:{D1MenuButton:L},setup(){return{options:u([{label:`English`,value:`en`},{label:`Russian`,value:`ru`},{label:`Vietnamese`,value:`vi`},{label:`Spanish`,value:`es`}]),value1:u(`en`),value2:u(`ru`),value3:u(`vi`)}},template:`
        <div class="wiki-storybook-flex">
          <D1MenuButton
            v-model="value1"
            type="menuButton"
            label="Language"
            :option="options"
          />
          <D1MenuButton
            v-model="value2"
            type="menuButton"
            label="With search"
            showSearch
            :option="options"
          />
          <D1MenuButton
            v-model="value3"
            type="menuButton"
            label="Hide value if icon"
            icon="settings"
            hideValueIcon
            :option="options"
          />
        </div>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1MenuButton:L},setup(){return{valueSingle:u(`option2`),valueMultiple:u([`option1`,`option3`]),options:[{label:`First option`,value:`option1`},{label:`Second option`,value:`option2`},{label:`Third option`,value:`option3`}]}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueSingle }}</strong></span>
            <button class="wiki-storybook-button" @click="valueSingle = 'option1'">option 1</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option2'">option 2</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option3'">option 3</button>
          </div>

          <D1MenuButton
            v-model="valueSingle"
            type="menuButton"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <D1MenuButton
            v-model="valueMultiple"
            type="menuButton"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
    `})},Z={name:`Скелетон`,render:()=>({components:{D1MenuButton:L,D1Skeleton:w},template:`
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1MenuButton
              type="menuButton"
              label="Loading menu button"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :buttonAttrs="{isSkeleton: true}"
            />
          </div>
        </D1Skeleton>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1MenuButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1MenuButton v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1MenuButton
    },
    setup() {
      const options = ref([{
        label: 'English',
        value: 'en'
      }, {
        label: 'Russian',
        value: 'ru'
      }, {
        label: 'Vietnamese',
        value: 'vi'
      }, {
        label: 'Spanish',
        value: 'es'
      }]);
      const value1 = ref('en');
      const value2 = ref('ru');
      const value3 = ref('vi');
      return {
        options,
        value1,
        value2,
        value3
      };
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1MenuButton
            v-model="value1"
            type="menuButton"
            label="Language"
            :option="options"
          />
          <D1MenuButton
            v-model="value2"
            type="menuButton"
            label="With search"
            showSearch
            :option="options"
          />
          <D1MenuButton
            v-model="value3"
            type="menuButton"
            label="Hide value if icon"
            icon="settings"
            hideValueIcon
            :option="options"
          />
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1MenuButton
    },
    setup() {
      const valueSingle = ref('option2');
      const valueMultiple = ref(['option1', 'option3']);
      const options = [{
        label: 'First option',
        value: 'option1'
      }, {
        label: 'Second option',
        value: 'option2'
      }, {
        label: 'Third option',
        value: 'option3'
      }];
      return {
        valueSingle,
        valueMultiple,
        options
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueSingle }}</strong></span>
            <button class="wiki-storybook-button" @click="valueSingle = 'option1'">option 1</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option2'">option 2</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option3'">option 3</button>
          </div>

          <D1MenuButton
            v-model="valueSingle"
            type="menuButton"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <D1MenuButton
            v-model="valueMultiple"
            type="menuButton"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1MenuButton,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1MenuButton
              type="menuButton"
              label="Loading menu button"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :buttonAttrs="{isSkeleton: true}"
            />
          </div>
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`MenuButton`,`MenuButtonBasic`,`MenuButtonVModel`,`MenuButtonSkeleton`]})))()}export{X as a,G as c,Z as i,J as n,$ as o,Y as r,W as s,K as t};