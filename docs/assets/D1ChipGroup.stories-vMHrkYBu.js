import{w as O,r as h,Q as G,h as D,at as x,Y as V,$ as L,I as W,K as A,L as B,M as I,d as _,N}from"./iframe-B21bnPHY.js";import{g as M}from"./D1Icon-vXIBGmPr.js";import{V as U}from"./ModelInclude-BiYm_iCQ-NMUfVkBD.js";import{D as $}from"./index-QqY02gda.js";import{w as j,W as H,a as T,b as E}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";var F=Object.defineProperty,P=(i,e,t)=>e in i?F(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,f=(i,e,t)=>P(i,typeof e!="symbol"?e+"":e,t);let Q=class{constructor(e,t,a,n,o){f(this,"value",h()),f(this,"onClick",(s,l)=>{var c,p;l&&"value"in l&&!((c=this.readonly)!=null&&c.value)&&(this.value.value=l.value),(p=this.event)==null||p.onClick(s,l)}),this.index=e,this.emits=t,this.event=a,this.inputValue=n,this.readonly=o,new U(this.index,this.emits,this.value),O([this.inputValue],()=>{var s;this.value.value=(s=this.inputValue)==null?void 0:s.value},{immediate:!0})}getValue(){return this.value.value}};var R=Object.defineProperty,z=(i,e,t)=>e in i?R(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,d=(i,e,t)=>z(i,typeof e!="symbol"?e+"":e,t);class K{constructor(e,t,a,n,o,s,l,c,p){d(this,"data"),d(this,"event"),d(this,"model"),this.props=e,this.refs=t,this.element=a,this.classDesign=n,this.className=o,this.components=s,this.slots=l,this.emits=c;const{EventClickIncludeConstructor:w=M,ListDataRefConstructor:S=x,ModelValueIncludeConstructor:g=Q}=p??{};this.event=new w(void 0,void 0,this.emits),this.model=new g("selected",this.emits,this.event,this.refs.selected,this.refs.readonly),this.data=new S(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}getList(){return this.data.fullData.value}}const Y={readonly:!0};class q extends G{constructor(e,t,a,n=K){super(e,t,a),d(this,"item"),d(this,"renderList",()=>V(this.item.getList(),o=>this.renderItem(o))),d(this,"renderItem",o=>{var s;return this.components.renderOne("chip",L({class:(s=this.classes)==null?void 0:s.value.item,iconHide:this.props.iconWhenSelected&&!o.selected,onClick:this.item.model.onClick},this.props.chipAttrs,o),void 0,o.index)}),this.item=new n(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass("item")}}initStyles(){return{}}initRender(){var e;const t=this.renderList();return this.initSlot("default",t),D("div",{...this.getAttrs(),class:(e=this.classes)==null?void 0:e.value.main},t)}}const C={...Y},r=W({name:"D1ChipGroup",__name:"D1ChipGroup",props:I({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{}},C),emits:["click","clickLite","update:selected","update:modelSelected"],setup(i,{expose:e,emit:t}){const a=t,n=i,o=_(()=>({main:{"d1-chipGroup":!0}})),s=_(()=>({})),l=new q("d1.chipGroup",n,{emits:a,classes:o,styles:s,components:{chip:$}}),c=l.render();return e(l.expose()),(p,w)=>(N(),A(B(c)))}});r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{name:"D1ChipGroup",exportName:"default",displayName:"D1ChipGroup",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue"]});const J=[{name:"chipAttrs",type:"ConstrBind<Chip>"},{name:"iconWhenSelected",type:"boolean"},{name:"keyLabel",type:"string"},{name:"keyValue",type:"string"},{name:"list",type:"ChipGroupData"},{name:"modelSelected",type:"ListSelectedList"},{name:"onUpdate:modelSelected",type:"(value: ListSelectedList) => void"},{name:"onUpdate:selected",type:"(value: ListSelectedList) => void"},{name:"readonly",type:"boolean"},{name:"selected",type:"ListSelectedList"}],v={component:"ChipGroup",props:J,defaults:C,wikiDesign:j},y=new H(v.component,v.props,v.defaults,v.wikiDesign,T,E),X={title:"Ui/ChipGroup",component:r,parameters:{design:"d1",docs:{description:{component:y.getDescription()}}},argTypes:y.getWiki(),args:y.getValues()},u={},k={name:"Базовые",render:()=>({components:{D1ChipGroup:r},template:`
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
    `})},m={name:"Состояния выбора",render:()=>({components:{D1ChipGroup:r},template:`
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
    `})},b={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1ChipGroup:r},setup(){return{selectedValue:h("option2"),multipleSelected:h(["option1","option3"])}},template:`
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
    `})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const Z=["ChipGroup","ChipGroupBasic","ChipGroupSelection","ChipGroupVModel"],ne=Object.freeze(Object.defineProperty({__proto__:null,ChipGroup:u,ChipGroupBasic:k,ChipGroupSelection:m,ChipGroupVModel:b,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{ne as C,u as a,y as b,k as c,m as d,b as e};
