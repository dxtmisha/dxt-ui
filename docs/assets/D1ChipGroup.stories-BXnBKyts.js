import{n as e,r as t}from"./chunk-BneVvdWh.js";import{At as n,Bt as r,Ct as i,It as a,Ot as o,bt as s,ct as c,d as l,f as u,gt as d,h as f,u as p,vt as m,xt as h,yt as ee}from"./iframe-InwAcaLb.js";import{a as te,d as ne,l as re,m as ie,n as ae,t as oe,u as g}from"./wiki-DiKtF90Q.js";import{c as _,s as v}from"./D1Icon-jtYe35RL.js";import{n as y,t as b}from"./ModelInclude-BiYm_iCQ-CyIpfNzl.js";import{n as x,t as S}from"./Chip-DYSIpfG7.js";var C,w,T,E,D=e((()=>{d(),y(),C=Object.defineProperty,w=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t,n)=>w(e,typeof t==`symbol`?t:t+``,n),E=class{constructor(e,t,r,i,o){T(this,`value`,a()),T(this,`onClick`,(e,t)=>{var n,r;t&&`value`in t&&!((n=this.readonly)!=null&&n.value)&&(this.value.value=t.value),(r=this.event)==null||r.onClick(e,t)}),this.index=e,this.emits=t,this.event=r,this.inputValue=i,this.readonly=o,new b(this.index,this.emits,this.value),n([this.inputValue],()=>{this.value.value=this.inputValue?.value},{immediate:!0})}getValue(){return this.value.value}}})),O,k,A,j,M,N,P=e((()=>{d(),p(),_(),D(),O=Object.defineProperty,k=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t,n)=>k(e,typeof t==`symbol`?t:t+``,n),j=class{constructor(e,t,n,r,i,a,o,s,c){A(this,`data`),A(this,`event`),A(this,`model`),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=v,ListDataRefConstructor:d=u,ModelValueIncludeConstructor:f=E}=c??{};this.event=new l(void 0,void 0,this.emits),this.model=new f(`selected`,this.emits,this.event,this.refs.selected,this.refs.readonly),this.data=new d(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}getList(){return this.data.fullData.value}},M={readonly:!0},N=class extends l{constructor(e,t,n,r=j){super(e,t,n),A(this,`item`),A(this,`renderList`,()=>c(this.item.getList(),e=>this.renderItem(e))),A(this,`renderItem`,e=>this.components.renderOne(`chip`,f({class:this.classes?.value.item,iconHide:this.props.iconWhenSelected&&!e.selected,onClick:this.item.model.onClick},this.props.chipAttrs,e),void 0,e.index)),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.renderList();return this.initSlot(`default`,e),h(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),F,I=e((()=>{P(),F={...M}})),L=e((()=>{})),R,z=e((()=>{d(),p(),P(),x(),I(),L(),R=s({name:`D1ChipGroup`,__name:`D1ChipGroup`,props:i({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:n}){let i=new N(`d1.chipGroup`,e,{emits:n,classes:m(()=>({main:{"d1-chipGroup":!0}})),styles:m(()=>({})),components:{chip:S}}),a=i.render();return t(i.expose()),(e,t)=>(o(),ee(r(a)))}})})),B,V=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1ChipGroup`,exportName:`default`,displayName:`D1ChipGroup`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue`]})})),H,U,W=e((()=>{g(),oe(),I(),H=[{name:`chipAttrs`,type:`ConstrBind<Chip>`},{name:`iconWhenSelected`,type:`boolean`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ChipGroupData`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`(value: ListSelectedList) => void`},{name:`onUpdate:selected`,type:`(value: ListSelectedList) => void`},{name:`readonly`,type:`boolean`},{name:`selected`,type:`ListSelectedList`}],U={component:`ChipGroup`,props:H,defaults:F,wikiDesign:ae}})),G,K=e((()=>{g(),te(),W(),G=new ne(U.component,U.props,U.defaults,U.wikiDesign,re,ie)})),se=t({ChipGroup:()=>J,ChipGroupBasic:()=>Y,ChipGroupSelection:()=>X,ChipGroupVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{V(),K(),d(),q={title:`Ui/ChipGroup`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={},Y={name:`Базовые`,render:()=>({components:{D1ChipGroup:B},template:`
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
    `})},X={name:`Состояния выбора`,render:()=>({components:{D1ChipGroup:B},template:`
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
    `})},Z={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ChipGroup:B},setup(){return{selectedValue:a(`option2`),multipleSelected:a([`option1`,`option3`])}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`ChipGroup`,`ChipGroupBasic`,`ChipGroupSelection`,`ChipGroupVModel`]}));$();export{J as ChipGroup,Y as ChipGroupBasic,X as ChipGroupSelection,Z as ChipGroupVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,se as t};