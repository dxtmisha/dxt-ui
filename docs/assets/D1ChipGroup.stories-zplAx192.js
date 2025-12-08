import{w as h,r as b,S as w,h as _,l as C,P as S,e as f,z as g,A as G,c as v,D as O,E as D,F as x}from"./iframe-BlCC38XJ.js";import{D as V}from"./index-Sj4PDQA1.js";import{a as L}from"./IconTrailingInclude-Dl0qqbyn.js";import{M as W}from"./ModelInclude-BztEWw6e.js";import{W as A,w as B,a as I,b as M}from"./wiki-fb_eBW86.js";import"./jsx-runtime-D_zvdyIk.js";class N{constructor(e,i,t,o,s){this.index=e,this.emits=i,this.event=t,this.inputValue=o,this.readonly=s,new W(this.index,this.emits,this.value),h([this.inputValue],()=>{this.value.value=this.inputValue?.value},{immediate:!0})}value=b();getValue(){return this.value.value}onClick=(e,i)=>{i&&"value"in i&&!this.readonly?.value&&(this.value.value=i.value),this.event?.onClick(e,i)}}let U=class{constructor(e,i,t,o,s,u,d,k){this.props=e,this.refs=i,this.element=t,this.classDesign=o,this.className=s,this.components=u,this.slots=d,this.emits=k,this.event=new L(void 0,void 0,this.emits),this.model=new N("selected",this.emits,this.event,this.refs.selected,this.refs.readonly),this.data=new w(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}data;event;model;getList(){return this.data.fullData.value}};const H={readonly:!0};class T extends _{item;constructor(e,i,t){super(e,i,t),this.item=new U(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass("item")}}initStyles(){return{}}initRender(){const e=this.renderList();return this.initSlot("default",e),C("div",{...this.getAttrs(),class:this.classes?.value.main},e)}renderList=()=>S(this.item.getList(),e=>this.renderItem(e));renderItem=e=>this.components.renderOne("chip",f({class:this.classes?.value.item,iconHide:this.props.iconWhenSelected&&!e.selected,onClick:this.item.model.onClick},this.props.chipAttrs,e),void 0,e.index)}const y={...H},r=g({name:"D1ChipGroup",__name:"D1ChipGroup",props:G({readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},y),emits:["click","clickLite","update:selected","update:modelSelected"],setup(p,{expose:e,emit:i}){const t=i,o=p,s=v(()=>({main:{"d1-chipGroup":!0}})),u=v(()=>({})),d=new T("d1.chipGroup",o,{emits:t,classes:s,styles:u,components:{chip:V}}),k=d.render();return e(d.expose()),(j,z)=>(x(),O(D(k)))}});r.__docgenInfo={name:"D1ChipGroup",exportName:"default",displayName:"D1ChipGroup",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue"]};const E=[{name:"chipAttrs",type:"ConstrBind<ChipProps>"},{name:"iconWhenSelected",type:"boolean"},{name:"keyLabel",type:"string"},{name:"keyValue",type:"string"},{name:"list",type:"ChipGroupData"},{name:"modelSelected",type:"ListSelectedList"},{name:"onUpdate:modelSelected",type:"(value: ListSelectedList) => void"},{name:"onUpdate:selected",type:"(value: ListSelectedList) => void"},{name:"readonly",type:"boolean"},{name:"selected",type:"ListSelectedList"}],m=new A("ChipGroup",E,y,B,I,M),F={title:"Ui/ChipGroup",component:r,parameters:{design:"d1",docs:{description:{component:m.getDescription()}}},argTypes:m.getWiki(),args:m.getValues()},l={},a={name:"Базовые",render:()=>({components:{D1ChipGroup:r},template:`
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
    `})},n={name:"Состояния выбора",render:()=>({components:{D1ChipGroup:r},template:`
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
    `})},c={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1ChipGroup:r},setup(){return{selectedValue:b("option2"),multipleSelected:b(["option1","option3"])}},template:`
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
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const P=["ChipGroup","ChipGroupBasic","ChipGroupSelection","ChipGroupVModel"],Y=Object.freeze(Object.defineProperty({__proto__:null,ChipGroup:l,ChipGroupBasic:a,ChipGroupSelection:n,ChipGroupVModel:c,__namedExportsOrder:P,default:F},Symbol.toStringTag,{value:"Module"}));export{Y as C,l as a,m as b,a as c,n as d,c as e};
