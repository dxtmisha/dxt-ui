import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l,lt as u,tn as d}from"./library-C6UyfMBX.js";import{C as f,D as p,b as m,d as h,f as g,g as _,i as v,n as y,s as b,t as x,u as S}from"./wiki-Cqdd-d3l.js";import{n as C,t as w}from"./EventClickInclude-BePe4mYM-CJXSyzTR.js";import{n as T,t as E}from"./ModelValueInclude-DK2ZpGrS-C_TnDBXZ.js";import{n as D,t as O}from"./Chip-CFYsExsx.js";var k,A,j;function M(){return(M=e((()=>{w(),T(),n(),p(),k=class{props;refs;element;classDesign;className;components;slots;emits;data;event;model;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=C,ListDataRefConstructor:u=m,ModelValueIncludeConstructor:d=E}=c;this.event=new l(void 0,void 0,this.emits),this.model=new d(`selected`,this.emits,this.event,this.refs.selected,this.refs.readonly,this.refs.multiple),this.data=new u(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}getList(){return this.data.fullData.value}},A={readonly:!0},j=class extends _{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.renderList();return this.initSlot(`default`,e),a(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}renderList=()=>u(this.item.getList(),e=>this.renderItem(e));renderItem=e=>this.components.renderOne(`chip`,f({class:this.classes?.value.item,iconHide:this.props.iconWhenSelected&&!e.selected,onClick:this.item.model.onClick},this.props.chipAttrs,e),void 0,String(e.index))}})))()}var N;function P(){return(P=e((()=>{M(),N={...A}})))()}var F;function I(){return(I=e((()=>{n(),M(),D(),P(),F=i({name:`D1ChipGroup`,__name:`D1ChipGroup`,props:o({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},multiple:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{}},N),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-chipGroup":!0}})),u=l(()=>({})),d=new j(`d1.chipGroup`,a,{emits:i,classes:o,styles:u,components:{chip:O}}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1ChipGroup`,exportName:`default`,displayName:`D1ChipGroup`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{x(),P(),z=[{name:`chipAttrs`,type:`ConstrBind<ChipProps>`},{name:`iconWhenSelected`,type:`boolean`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ChipGroupData`},{name:`modelSelected`,type:`ListSelectedList`},{name:`multiple`,type:`boolean`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`readonly`,type:`boolean`},{name:`selected`,type:`ListSelectedList`}],B=[{name:`default`,description:`Slot for displaying a custom list of chips/ Слот для отображения пользовательского списка чипов`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],H={component:`ChipGroup`,props:z,slots:B,events:V,defaults:N,wikiDesign:y}})))()}var W;function G(){return(G=e((()=>{h(),b(),U(),W=new S(H.component,H.props,H.defaults,H.wikiDesign,v,g)})))()}var K=t({ChipGroup:()=>J,ChipGroupSelection:()=>Y,ChipGroupVModel:()=>X,__namedExportsOrder:()=>Z,default:()=>q}),q,J,Y,X,Z;function Q(){return(Q=e((()=>{R(),G(),n(),q={title:`Ui/ChipGroup`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={},Y={name:`Состояния выбора`,render:()=>({components:{D1ChipGroup:L},template:`
        <div class="wiki-storybook-flex-column">
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ChipGroup:L},setup(){return{multipleSelected:d([`option1`,`option3`])}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ multipleSelected }}</span>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
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
        </div>
    `})},Z=[`ChipGroup`,`ChipGroupSelection`,`ChipGroupVModel`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Состояния выбора',
  render: () => ({
    components: {
      D1ChipGroup
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
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
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1ChipGroup
    },
    setup() {
      return {
        multipleSelected: ref(['option1', 'option3'])
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ multipleSelected }}</span>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
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
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}}})))()}export{Q as a,K as i,Y as n,W as o,X as r,G as s,J as t};