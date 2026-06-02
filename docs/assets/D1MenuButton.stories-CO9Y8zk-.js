import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,Dt as i,Ft as a,Mt as o,Nt as s,Xt as c,kt as l,m as u,qt as d,r as f}from"./iframe-53vFWNoU.js";import{t as p}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as m,f as h,l as g,n as _,o as v,p as y,t as b,u as ee}from"./wiki-DwIxUKqL.js";import{a as te,o as ne}from"./D1Button-nXoccTU9.js";import{n as x,t as S}from"./Button-ChpcxePA.js";import{n as C,t as w}from"./D1Skeleton-Cxor4m_W.js";import{n as T,t as re}from"./Menu-DIyXSgxf.js";import{n as E,t as D}from"./SelectAbstract-hbQSiUOX-Da1lbTG3.js";var O,k,A,j=t((()=>{h(),te(),E(),i(),u(),O=class extends D{constructor(e,t,n,r,i,a,o,s,c={}){super(e,t,n,r,i,a,o,s,c),y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`button`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{ButtonConstructor:l=ne}=c;this.button=new l(this.className,this.props,this.components,()=>({icon:this.props.icon,disabled:this.props.disabled,readonly:this.props.readonly,iconTrailing:this.iconTrailing}))}},k={labelSeparator:`:`,hideLabelValue:!0,hideValueIcon:!0},A=class extends f{constructor(e,t,n,r=O){super(e,t,n),y(this,`item`,void 0),y(this,`renderControl`,e=>this.item.button.render({default:()=>this.renderControlLabel(e.selectedNames?.value)},{...e.binds,iconTurn:e.open.value})),y(this,`renderControlLabel`,e=>{let t=[],n=e&&e.length>0&&!(this.props.hideValueIcon&&this.props.icon);return this.props.label&&(!n||!this.props.hideLabelValue)&&(n?t.push(s(`span`,{class:this.classes?.value.label},this.props.label),s(`span`,{class:this.classes?.value.separator},this.props.labelSeparator)):t.push(this.props.label)),n&&t.push(s(`span`,{class:this.classes?.value.selected},e.join(`, `))),t}),y(this,`renderInput`,()=>s(`input`,{name:this.props.name,value:this.item.value.get(),type:`hidden`})),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.value.expose(),...this.item.validation.expose(),...this.item.menu.expose}}initClasses(){return{main:{},label:this.getSubClass(`label`),separator:this.getSubClass(`separator`),selected:this.getSubClass(`selected`)}}initStyles(){return{}}initRender(){return this.item.menu.render({control:e=>[this.renderControl(e),this.renderInput()],title:e=>this.initSlot(`title`,void 0,e),footer:e=>this.initSlot(`footer`,void 0,e),contextTop:e=>this.initSlot(`contextTop`,void 0,e),contextBottom:e=>this.initSlot(`contextBottom`,void 0,e)},{selected:this.item.value.item.value})}}})),M,N=t((()=>{j(),M={...k,iconArrowDown:`keyboard_arrow_down`}})),P=t((()=>{})),F,I=t((()=>{i(),j(),T(),x(),N(),P(),F=o({name:`D1MenuButton`,__name:`D1MenuButton`,props:a({label:{},labelId:{},buttonAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},value:{},detail:{},name:{},id:{},required:{type:Boolean},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},tabindex:{},form:{},match:{},inputAttrs:{},max:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},selectionStyle:{},menuAttrs:{},labelSeparator:{},icon:{},hideLabelValue:{type:Boolean},hideValueIcon:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{}},M),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:i}){let a=new A(`d1.menuButton`,e,{emits:i,classes:l(()=>({main:{"d1-menuButton":!0}})),styles:l(()=>({})),components:{menu:re,button:S},compMod:{button:{secondary:!0,size:`sm`}}}),o=a.render();return t(a.expose()),(e,t)=>(r(),n(c(o)))}})})),L,R=t((()=>{I(),I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1MenuButton`,exportName:`default`,displayName:`D1MenuButton`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/MenuButton/D1MenuButton.vue`]})})),z,B,V,H,U=t((()=>{b(),N(),z=[{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`filterMode`,type:`boolean`},{name:`form`,type:`string`},{name:`hideLabelValue`,type:`boolean`},{name:`hideList`,type:`boolean`},{name:`hideValueIcon`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`labelSeparator`,type:`string`},{name:`match`,type:`FieldMatch`},{name:`max`,type:`NumberOrString`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`modelValue`,type:`Value`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: any) => void)`},{name:`onUpdate:value`,type:`((value: any) => void)`},{name:`option`,type:`ListRecord`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`checkmark`,`auto`]},{name:`showSearch`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`tabindex`,type:`number`},{name:`value`,type:`Value`}],B=[],V=[],H={component:`MenuButton`,props:z,slots:B,events:V,defaults:M,wikiDesign:_}})),W,G=t((()=>{m(),v(),U(),W=new ee(H.component,H.props,H.defaults,H.wikiDesign,g,p)})),K=e({MenuButton:()=>J,MenuButtonBasic:()=>Y,MenuButtonSkeleton:()=>Z,MenuButtonVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=t((()=>{R(),G(),C(),i(),q={title:`Ui/MenuButton`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1MenuButton:L},setup:()=>({args:e}),template:`
      <D1MenuButton v-bind="args" />
    `})},Y={name:`Базовые`,render:()=>({components:{D1MenuButton:L},setup(){return{options:d([{label:`English`,value:`en`},{label:`Russian`,value:`ru`},{label:`Vietnamese`,value:`vi`},{label:`Spanish`,value:`es`}]),value1:d(`en`),value2:d(`ru`),value3:d(`vi`)}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1MenuButton:L},setup(){return{valueSingle:d(`option2`),valueMultiple:d([`option1`,`option3`]),options:[{label:`First option`,value:`option1`},{label:`Second option`,value:`option2`},{label:`Third option`,value:`option3`}]}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`MenuButton`,`MenuButtonBasic`,`MenuButtonVModel`,`MenuButtonSkeleton`]}));$();export{J as MenuButton,Y as MenuButtonBasic,Z as MenuButtonSkeleton,X as MenuButtonVModel,Q as __namedExportsOrder,q as default,G as i,$ as n,W as r,K as t};