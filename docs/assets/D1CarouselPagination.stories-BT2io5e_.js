import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,F as r,Mt as i,Nt as a,Pt as o,Rt as s,Ut as c,in as l,jt as u,nt as d,qt as f,tn as p,yt as m}from"./library-C6UyfMBX.js";import{D as h,T as g,d as ee,f as te,g as ne,i as _,n as v,s as y,t as b,u as x}from"./wiki-Cqdd-d3l.js";import{n as re,t as ie}from"./ModelInclude-CSCLC3Le-BPdhkRTk.js";import{n as S,t as ae}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as oe,t as C}from"./TextInclude-Bh7pGgEs-C4LrRuLb.js";var w;function T(){return(T=e((()=>{n(),h(),w=class{props;element;constructor(e,t){this.props=e,this.element=t}get binds(){return this.isFocusable()?{onKeydown:this.onKeydown}:{}}isFocusable(){return this.props?.control!==!1}set(e){this.setIndex(e),this.focus(e)}focus(e){let t=e??this.getIndex();requestAnimationFrame(()=>{(g(this.element)?.querySelector(this.getSelector(t)))?.focus()})}first(){this.set(this.getMin())}last(){this.set(this.getMax())}next(){let e=this.getIndex();e<this.getMax()&&this.set(e+1)}previous(){let e=this.getIndex();e>this.getMin()&&this.set(e-1)}onKeydown=e=>{switch(e.key){case`ArrowRight`:case`ArrowDown`:e.preventDefault(),this.next();break;case`ArrowLeft`:case`ArrowUp`:e.preventDefault(),this.previous();break;case`Home`:e.preventDefault(),this.first();break;case`End`:e.preventDefault(),this.last()}}}})))()}var E,D,O,k,A,j;function M(){return(M=e((()=>{ae(),oe(),ie(),T(),n(),h(),E=class extends w{props;element;className;selected;constructor(e,t,n,r){super(e,t),this.props=e,this.element=t,this.className=n,this.selected=r}isFocusable(){return super.isFocusable()&&this.props.type!==`fraction`&&this.props.type!==`progressbar`}getIndex(){return this.selected.item.value}getMax(){return this.selected.total.value}getMin(){return 1}getSelector(e){return`[data-index="${e}"]`}setIndex(e){this.selected.set(e)}},D=class{props;refs;selected;emits;constructor(e,t,n,r){this.props=e,this.refs=t,this.selected=n,this.emits=r}list=u(()=>{let e=this.selected.total.value;if(e<=0)return[];let t=this.selected.item.value,n=this.isDynamic(),{windowStart:r,windowEnd:i}=this.getWindow(),a=[];for(let o=1;o<=e;o+=1){let e=o===t,s=this.getScale(o,r,i);(!n||s>0)&&a.push({index:o,selected:e,scale:s,style:this.getStyle(s),tabindex:this.getTabindex(e),aria:this.getAria(o,e),binds:this.getBinds(o,e,s)})}return a});get fractionText(){return r(this.props.template||`[active] / [total]`,{active:this.selected.item.value,total:this.selected.total.value,count:this.selected.total.value,current:this.selected.item.value,item:this.selected.item.value,index:this.selected.item.value,selected:this.selected.item.value})}get percent(){let e=this.selected.total.value;return e<=0?0:this.selected.item.value/e*100}isDynamic(){return!!this.props.dynamic}isHide(){return!!(this.props.hideIfOne&&this.selected.total.value<=1)}getStyle(e){if(e!==void 0&&e!==1)return{transform:`scale(${e})`}}getTabindex(e){return this.props.control!==!1&&e?0:-1}getAria(e,t){return{...S.role(`tab`),...S.selected(t),...S.label(`Slide ${e}`),tabindex:this.getTabindex(t)}}onClick=(e,t)=>{this.props.control!==!1&&(this.selected.set(t),this.emits?.(`click`,e,t),this.emits?.(`clickLite`,t))};getBinds(e,t,n){return{key:e,type:`button`,"data-index":e,style:this.getStyle(n),tabindex:this.getTabindex(t),...this.getAria(e,t),onClick:t=>this.onClick(t,e)}}getScale(e,t,n){if(!this.isDynamic())return 1;if(e<t||e>n)return 0;let r=this.selected.total.value;return e===t&&t>1||e===n&&n<r?.5:e===t+1&&t>1||e===n-1&&n<r?.75:1}getVisible(){return Math.max(3,m(this.props.visible)||5)}getWindow(){let e=this.selected.total.value,t=this.getVisible();if(!this.isDynamic()||e<=t)return{windowStart:1,windowEnd:e};let n=Math.floor(t/2),r=this.selected.item.value-n,i=this.selected.item.value+n;return r<1?(r=1,i=t):i>e&&(i=e,r=e-t+1),{windowStart:r,windowEnd:i}}},O=class{props;refs;emits;total=u(()=>Math.max(0,Math.floor(m(this.props.count)||0)));item=p(1);constructor(e,t,n){this.props=e,this.refs=t,this.emits=n,f(()=>[this.props.selected,this.props.modelSelected,this.props.count],this.update,{immediate:!0,flush:`sync`})}get=()=>this.item.value;set=e=>{let t=this.toIndex(e);this.setItem(t)&&this.emits?.(`change`,t)};next=()=>{this.item.value<this.total.value&&this.set(this.item.value+1)};previous=()=>{this.item.value>1&&this.set(this.item.value-1)};setItem(e){return this.item.value!==e&&(this.item.value=e,!0)}toIndex(e){let t=this.total.value;if(t>0){let n=m(e??1)||1;return Math.max(1,Math.min(t,Math.floor(n)))}return 1}update=()=>{this.setItem(this.toIndex(this.props.selected??this.props.modelSelected))}},k=class{props;refs;element;classDesign;className;components;slots;emits;items;selected;focus;text;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{CarouselPaginationFocusConstructor:l=E,CarouselPaginationItemsConstructor:u=D,CarouselPaginationSelectedConstructor:d=O,ModelIncludeConstructor:f=re,TextIncludeConstructor:p=C}=c;this.text=new p(e),this.selected=new d(e,t,s),this.items=new u(e,t,this.selected,s),this.focus=new l(e,n,i,this.selected),new f(`selected`,s,this.selected.item)}get aria(){return{...S.role(`tablist`),...S.orientation(this.props.vertical?`vertical`:`horizontal`),...S.label(this.text.pagination)}}get classes(){return{[`${this.className}--hide`]:this.items.isHide()}}get styles(){return{[`--${this.className}-sys-percent`]:`${this.items.percent}%`}}},A={tag:`div`,count:0,visible:5,hideIfOne:!0,template:`[active] / [total]`,control:!0,type:`bullets`},j=class extends ne{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getSelected:this.item.selected.get,getCount:()=>this.item.selected.total.value,set:this.item.selected.set,next:this.item.selected.next,previous:this.item.selected.previous}}initClasses(){return{main:{},item:this.getSubClass(`item`),fraction:this.getSubClass(`fraction`),progress:this.getSubClass(`progress`),progressBar:this.getSubClass(`progressBar`)}}initStyles(){return this.item.styles}initRender(){if(this.item.items.isHide())return;let e=this.props.type??`bullets`,t;switch(e){case`fraction`:t=this.renderFraction();break;case`progressbar`:t=this.renderProgress();break;default:t=this.renderBullets()}return o(this.props.tag||`div`,{...this.getAttrs(),...this.item.focus.binds,...this.item.aria,ref:this.element,class:this.classes?.value.main,style:this.styles?.value},t)}renderBullets=()=>this.item.items.list.value.map(e=>{let t={...e.binds,class:{[`${this.classes?.value.item}`]:!0,[`${this.classes?.value.item}--selected`]:e.selected}};return this.initSlot(`item`,void 0,{binds:t,item:e,index:e.index})||o(`button`,t)});renderFraction=()=>{let e={...this.getKeyClass(`fraction`),...S.live(`polite`)},t=this.initSlot(`fraction`,void 0,{binds:e,active:this.item.selected.item.value,total:this.item.selected.total.value,text:this.item.items.fractionText});return t?[t]:[o(`div`,e,this.item.items.fractionText)]};renderProgress=()=>{let e={...this.getKeyClass(`progress`),...S.role(`progressbar`),...S.valueMinMax(this.item.selected.item.value,1,this.item.selected.total.value)},t=this.initSlot(`progress`,void 0,{binds:e,active:this.item.selected.item.value,total:this.item.selected.total.value,percent:this.item.items.percent});return t?[t]:[o(`div`,e,[o(`div`,this.getKeyClass(`progressBar`))])]}}})))()}var N,P;function F(){return(F=e((()=>{M(),N={type:[`bullets`,`dots`,`lines`,`fraction`,`progressbar`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...A,type:`bullets`}})))()}var I;function L(){return(L=e((()=>{n(),h(),M(),F(),I=a({name:`D1CarouselPagination`,__name:`D1CarouselPagination`,props:s({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},textPagination:{type:[String,Function]},control:{type:Boolean},selected:{},count:{},visible:{},hideIfOne:{type:Boolean},tag:{},template:{},type:{},vertical:{type:Boolean},dynamic:{type:Boolean},palette:{}},P),emits:[`update:selected`,`update:modelSelected`,`change`,`click`,`clickLite`],setup(e,{expose:t,emit:n}){let r=n,a=e,o=u(()=>({main:{"d1-carouselPagination":!0,[`d1-carouselPagination--type--${a.type}`]:d(N.type,a.type),"d1-carouselPagination--vertical":a.vertical,"d1-carouselPagination--dynamic":a.dynamic,"d1-carouselPagination--control":a.control,[`d1-palette d1-palette--${a.palette}`]:d(N.palette,a.palette)}})),s=u(()=>({})),f=new j(`d1.carouselPagination`,a,{emits:r,classes:o,styles:s}),p=f.render();return t(f.expose()),(e,t)=>(c(),i(l(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1CarouselPagination`,exportName:`default`,displayName:`D1CarouselPagination`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/CarouselPagination/D1CarouselPagination.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{b(),F(),B=[{name:`control`,type:`boolean`},{name:`count`,type:`string | number`},{name:`dynamic`,type:`boolean`},{name:`hideIfOne`,type:`boolean`},{name:`modelSelected`,type:`string | number`},{name:`onUpdate:modelSelected`,type:`((value: string | number) => void)`},{name:`onUpdate:selected`,type:`((value: string | number) => void)`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`selected`,type:`string | number`},{name:`tag`,type:`string`},{name:`template`,type:`string`},{name:`textPagination`,type:`TextValue`},{name:`type`,type:`string`,option:[`bullets`,`dots`,`lines`,`fraction`,`progressbar`]},{name:`vertical`,type:`boolean`},{name:`visible`,type:`string | number`}],V=[{name:`fraction`,description:`Slot for custom rendering of fraction text / Слот для кастомного рендеринга дроби`,properties:[{name:`props`,type:`({ binds: CarouselPaginationFractionBinds; active: number; total: number; text: string; }) | undefined`}]},{name:`item`,description:`Slot for custom rendering of each bullet/item / Слот для кастомного рендеринга элемента пагинации`,properties:[{name:`props`,type:`({ binds: CarouselPaginationItemBinds; item: CarouselPaginationItem; index: number; }) | undefined`}]},{name:`progress`,description:`Slot for custom rendering of progress bar / Слот для кастомного рендеринга полосы прогресса`,properties:[{name:`props`,type:`({ binds: CarouselPaginationProgressBinds; active: number; total: number; percent: number; }) | undefined`}]}],H=[{name:`change`,description:`Slide change event / Событие смены слайда`,properties:[{name:`selected`,type:`number`}]},{name:`click`,description:`Click on pagination indicator / Клик по индикатору пагинации`,properties:[{name:`event`,type:`MouseEvent`},{name:`selected`,type:`number`}]},{name:`clickLite`,description:`Lightweight click event / Упрощенное событие клика`,properties:[{name:`selected`,type:`number`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`number`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`number`}]}],U={component:`CarouselPagination`,props:B,slots:V,events:H,defaults:P,wikiDesign:v}})))()}var G;function K(){return(K=e((()=>{ee(),y(),W(),G=new x(U.component,U.props,U.defaults,U.wikiDesign,_,te)})))()}var se=t({CarouselPagination:()=>J,CarouselPaginationBasic:()=>Y,CarouselPaginationSlots:()=>Z,CarouselPaginationVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),n(),q={title:`Ui/CarouselPagination`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1CarouselPagination:R},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
      <D1CarouselPagination v-bind="args" />
    </div>
    `})},Y={name:`Типы отображения`,render:()=>({components:{D1CarouselPagination:R},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Bullets</div>
            <D1CarouselPagination :count="5" :selected="2" type="bullets" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dynamic</div>
            <D1CarouselPagination :count="10" :selected="5" dynamic :visible="5" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Lines</div>
            <D1CarouselPagination :count="5" :selected="2" type="lines" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Fraction</div>
            <D1CarouselPagination :count="5" :selected="2" type="fraction" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Progress bar</div>
            <D1CarouselPagination :count="5" :selected="2" type="progressbar" />
          </div>
        </div>
    `})},X={name:`Двусторонняя привязка (v-model:selected)`,render:()=>({components:{D1CarouselPagination:R},setup(){return{selected:p(1)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current slide: <strong>{{ selected }}</strong></span>
            <button class="wiki-storybook-button" @click="selected = 1">Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 3">Slide 3</button>
            <button class="wiki-storybook-button" @click="selected = 5">Slide 5</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
            <D1CarouselPagination v-model:selected="selected" :count="5" />
          </div>
        </div>
    `})},Z={name:`Кастомные слоты`,render:()=>({components:{D1CarouselPagination:R},setup(){return{selected:p(2)}},template:`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
          <D1CarouselPagination v-model:selected="selected" :count="4">
            <template #item="{ binds, index, item }">
              <button
                v-bind="binds"
                style="padding: 4px 10px; border-radius: 6px; font-size: 12px;"
              >
                {{ index }}
              </button>
            </template>
          </D1CarouselPagination>
        </div>
    `})},Q=[`CarouselPagination`,`CarouselPaginationBasic`,`CarouselPaginationVModel`,`CarouselPaginationSlots`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1CarouselPagination
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
      <D1CarouselPagination v-bind="args" />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Типы отображения',
  render: () => ({
    components: {
      D1CarouselPagination
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Bullets</div>
            <D1CarouselPagination :count="5" :selected="2" type="bullets" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dynamic</div>
            <D1CarouselPagination :count="10" :selected="5" dynamic :visible="5" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Lines</div>
            <D1CarouselPagination :count="5" :selected="2" type="lines" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Fraction</div>
            <D1CarouselPagination :count="5" :selected="2" type="fraction" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Progress bar</div>
            <D1CarouselPagination :count="5" :selected="2" type="progressbar" />
          </div>
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model:selected)',
  render: () => ({
    components: {
      D1CarouselPagination
    },
    setup() {
      const selected = ref(1);
      return {
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current slide: <strong>{{ selected }}</strong></span>
            <button class="wiki-storybook-button" @click="selected = 1">Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 3">Slide 3</button>
            <button class="wiki-storybook-button" @click="selected = 5">Slide 5</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
            <D1CarouselPagination v-model:selected="selected" :count="5" />
          </div>
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Кастомные слоты',
  render: () => ({
    components: {
      D1CarouselPagination
    },
    setup() {
      const selected = ref(2);
      return {
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
          <D1CarouselPagination v-model:selected="selected" :count="4">
            <template #item="{ binds, index, item }">
              <button
                v-bind="binds"
                style="padding: 4px 10px; border-radius: 6px; font-size: 12px;"
              >
                {{ index }}
              </button>
            </template>
          </D1CarouselPagination>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}}})))()}export{se as a,K as c,X as i,Y as n,$ as o,Z as r,G as s,J as t};