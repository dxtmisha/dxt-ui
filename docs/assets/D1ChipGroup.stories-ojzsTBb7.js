import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,St as r,Vt as i,Y as a,_t as o,bt as s,f as c,jt as l,kt as u,m as d,r as f,s as ee,wt as p,xt as m,yt as h}from"./iframe-DZnBmjcm.js";import{a as te,d as ne,f as g,g as re,l as ie,n as ae,p as _,t as v,u as y}from"./wiki-CxP3o-n8.js";import{c as b,s as x}from"./D1Icon-C9PTepEW.js";import{n as S,t as C}from"./ModelInclude-ZrPu5V5T-BprpRin4.js";import{n as w,t as T}from"./Chip-BEE78d-y.js";var E,D=e((()=>{g(),C(),o(),E=class{constructor(e,t,r,i,a){_(this,`value`,n()),_(this,`onClick`,(e,t)=>{var n,r;t&&`value`in t&&!((n=this.readonly)!=null&&n.value)&&(this.value.value=t.value),(r=this.event)==null||r.onClick(e,t)}),this.index=e,this.emits=t,this.event=r,this.inputValue=i,this.readonly=a,new S(this.index,this.emits,this.value),l([this.inputValue],()=>{this.value.value=this.inputValue?.value},{immediate:!0})}getValue(){return this.value.value}}})),O,k,A,j=e((()=>{g(),b(),D(),o(),c(),O=class{constructor(e,t,n,r,i,a,o,s,c){_(this,`data`,void 0),_(this,`event`,void 0),_(this,`model`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=x,ListDataRefConstructor:u=ee,ModelValueIncludeConstructor:d=E}=c??{};this.event=new l(void 0,void 0,this.emits),this.model=new d(`selected`,this.emits,this.event,this.refs.selected,this.refs.readonly),this.data=new u(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}getList(){return this.data.fullData.value}},k={readonly:!0},A=class extends d{constructor(e,t,n,r=O){super(e,t,n),_(this,`item`,void 0),_(this,`renderList`,()=>a(this.item.getList(),e=>this.renderItem(e))),_(this,`renderItem`,e=>this.components.renderOne(`chip`,f({class:this.classes?.value.item,iconHide:this.props.iconWhenSelected&&!e.selected,onClick:this.item.model.onClick},this.props.chipAttrs,e),void 0,e.index)),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.renderList();return this.initSlot(`default`,e),r(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),M,N=e((()=>{j(),M={...k}})),P=e((()=>{})),F,I=e((()=>{o(),j(),w(),N(),P(),F=m({name:`D1ChipGroup`,__name:`D1ChipGroup`,props:p({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{}},M),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:n}){let r=new A(`d1.chipGroup`,e,{emits:n,classes:h(()=>({main:{"d1-chipGroup":!0}})),styles:h(()=>({})),components:{chip:T}}),a=r.render();return t(r.expose()),(e,t)=>(u(),s(i(a)))}})})),L,R=e((()=>{I(),I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1ChipGroup`,exportName:`default`,displayName:`D1ChipGroup`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue`]})})),z,B,V,H,U=e((()=>{y(),v(),N(),z=[{name:`chipAttrs`,type:`ConstrBind<Chip>`},{name:`iconWhenSelected`,type:`boolean`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ChipGroupData`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`(value: ListSelectedList) => void`},{name:`onUpdate:selected`,type:`(value: ListSelectedList) => void`},{name:`readonly`,type:`boolean`},{name:`selected`,type:`ListSelectedList`}],B=[{name:`default`}],V=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],H={component:`ChipGroup`,props:z,slots:B,events:V,defaults:M,wikiDesign:ae}})),W,G=e((()=>{y(),te(),U(),W=new ne(H.component,H.props,H.defaults,H.wikiDesign,ie,re)})),K=t({ChipGroup:()=>J,ChipGroupBasic:()=>Y,ChipGroupSelection:()=>X,ChipGroupVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{R(),G(),o(),q={title:`Ui/ChipGroup`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={},Y={name:`Базовые`,render:()=>({components:{D1ChipGroup:L},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default</div>
            <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With icons</div>
            <D1ChipGroup
              :list="[
                { label: 'Home', icon: 'home' },
                { label: 'Star', icon: 'star' },
                { label: 'Heart', icon: 'favorite' }
              ]"
            />
          </div>
        </div>
    `})},X={name:`Состояния выбора`,render:()=>({components:{D1ChipGroup:L},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single selection</div>
            <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple selection</div>
            <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Icon when selected</div>
            <D1ChipGroup
              :list="[
                { label: 'Option 1', icon: 'check', value: 'option1' },
                { label: 'Option 2', icon: 'check', value: 'option2' },
                { label: 'Option 3', icon: 'check', value: 'option3' }
              ]"
              :selected="['option2']"
              :icon-when-selected="true"
            />
          </div>
        </div>
    `})},Z={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ChipGroup:L},setup(){return{selectedValue:n(`option2`),multipleSelected:n([`option1`,`option3`])}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Selected: {{ selectedValue }}</div>
            <div class="wiki-storybook-flex-column">
              <D1ChipGroup
                v-model:selected="selectedValue"
                :list="[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' }
                ]"
                :readonly="false"
              />
              <div class="wiki-storybook-flex">
                <button class="wiki-storybook-button" @click="selectedValue = 'option1'">Select 1</button>
                <button class="wiki-storybook-button" @click="selectedValue = 'option2'">Select 2</button>
                <button class="wiki-storybook-button" @click="selectedValue = undefined">Clear</button>
              </div>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Selected: {{ multipleSelected }}</div>
            <div class="wiki-storybook-flex-column">
              <D1ChipGroup
                v-model:selected="multipleSelected"
                :list="[
                  { label: 'Option 1', value: 'option1', icon: 'check' },
                  { label: 'Option 2', value: 'option2', icon: 'check' },
                  { label: 'Option 3', value: 'option3', icon: 'check' }
                ]"
                :readonly="false"
                :icon-when-selected="true"
              />
              <div class="wiki-storybook-flex">
                <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
                <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
                <button class="wiki-storybook-button" @click="multipleSelected = []">Clear all</button>
              </div>
            </div>
          </div>
        </div>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1ChipGroup
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default</div>
            <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With icons</div>
            <D1ChipGroup
              :list="[
                { label: 'Home', icon: 'home' },
                { label: 'Star', icon: 'star' },
                { label: 'Heart', icon: 'favorite' }
              ]"
            />
          </div>
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Состояния выбора',
  render: () => ({
    components: {
      D1ChipGroup
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single selection</div>
            <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple selection</div>
            <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Icon when selected</div>
            <D1ChipGroup
              :list="[
                { label: 'Option 1', icon: 'check', value: 'option1' },
                { label: 'Option 2', icon: 'check', value: 'option2' },
                { label: 'Option 3', icon: 'check', value: 'option3' }
              ]"
              :selected="['option2']"
              :icon-when-selected="true"
            />
          </div>
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1ChipGroup
    },
    setup() {
      return {
        selectedValue: ref('option2'),
        multipleSelected: ref(['option1', 'option3'])
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Selected: {{ selectedValue }}</div>
            <div class="wiki-storybook-flex-column">
              <D1ChipGroup
                v-model:selected="selectedValue"
                :list="[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' }
                ]"
                :readonly="false"
              />
              <div class="wiki-storybook-flex">
                <button class="wiki-storybook-button" @click="selectedValue = 'option1'">Select 1</button>
                <button class="wiki-storybook-button" @click="selectedValue = 'option2'">Select 2</button>
                <button class="wiki-storybook-button" @click="selectedValue = undefined">Clear</button>
              </div>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Selected: {{ multipleSelected }}</div>
            <div class="wiki-storybook-flex-column">
              <D1ChipGroup
                v-model:selected="multipleSelected"
                :list="[
                  { label: 'Option 1', value: 'option1', icon: 'check' },
                  { label: 'Option 2', value: 'option2', icon: 'check' },
                  { label: 'Option 3', value: 'option3', icon: 'check' }
                ]"
                :readonly="false"
                :icon-when-selected="true"
              />
              <div class="wiki-storybook-flex">
                <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
                <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
                <button class="wiki-storybook-button" @click="multipleSelected = []">Clear all</button>
              </div>
            </div>
          </div>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`ChipGroup`,`ChipGroupBasic`,`ChipGroupSelection`,`ChipGroupVModel`]}));$();export{J as ChipGroup,Y as ChipGroupBasic,X as ChipGroupSelection,Z as ChipGroupVModel,Q as __namedExportsOrder,q as default,G as i,$ as n,W as r,K as t};