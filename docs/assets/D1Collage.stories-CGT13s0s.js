import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Mt as i,Nt as a,Pt as o,Rt as s,U as c,Ut as l,Vt as u,Wt as d,i as f,in as p,jt as m,nt as h,qt as g,tn as _}from"./library-C6UyfMBX.js";import{C as v,D as y,b as ee,d as te,f as ne,g as re,i as ie,n as ae,s as b,t as oe,u as se}from"./wiki-Cqdd-d3l.js";import{n as x,t as ce}from"./EventClickInclude-BePe4mYM-CJXSyzTR.js";import{n as le,t as ue}from"./ModelValueInclude-DK2ZpGrS-C_TnDBXZ.js";import{n as de,t as fe}from"./FocusDirectionInclude-BTjziCHh-9FxOqI5I.js";import{n as pe,o as me,s as he,t as ge}from"./D1CollageItem-DAe0DnA1.js";var S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{ce(),le(),de(),he(),r(),y(),S=class{element;previousWidth=0;constructor(e){this.element=e}is(){return!!this.element.value}isResize(){let e=this.element.value?.offsetWidth??0;return e!==this.previousWidth&&(this.previousWidth=e,!0)}getElement(){return this.element}getItems(e){return this.element.value?Array.from(this.element.value.querySelectorAll(`[data-collage-item]${e??``}`)):[]}},C=class{className;element;propertyGrow;constructor(e,t){this.className=e,this.element=t,this.propertyGrow=`--${e}-sys-item-grow`}setGrow(e,t){e.style.setProperty(this.propertyGrow,String(t))}resetGrow(){this.element?.getItems().forEach(e=>this.resetGrowItem(e))}resetGrowItem(e){e.style.removeProperty(this.propertyGrow)}},w=class{grow;element;constructor(e,t){this.grow=e,this.element=t}resize(){requestAnimationFrame(()=>{let e=this.getLines(),{columnsTotals:t,maxColumns:n}=this.getColumnsTotals(e);e.forEach((r,i)=>{if(i<e.length-1){let e=n-t[i],a=Math.ceil(e/r.length);r.forEach(t=>{let n=0;e>=a?(n=a,e-=a):e>0&&(n=e,e=0),n>0&&this.grow.setGrow(t,n)})}})})}getColumnsTotals(e){let t=[],n=0;return e.forEach(e=>{let r=0;e.forEach(e=>{let t=parseInt(e.dataset.width||`1`,10);r+=isNaN(t)?1:t}),n<r&&(n=r),t.push(r)}),{columnsTotals:t,maxColumns:n}}getItemCenter(e){return Math.ceil(e.offsetTop+e.offsetHeight/2)}getLines(){let e=[];return this.element.getItems().forEach(t=>{let n=this.getItemCenter(t),r=e.find(e=>Math.abs(e.center-n)<=16);r?r.items.push(t):e.push({center:n,items:[t]})}),e.sort((e,t)=>e.center-t.center).map(e=>e.items)}},T=class{grow;element;constructor(e,t){this.grow=e,this.element=t}resize(){requestAnimationFrame(()=>{this.element.getItems().forEach(e=>{let t=parseInt(e.dataset.height||`1`,10),n=getComputedStyle(e),r=parseFloat(n.minHeight.replace(`px`,``)),i=r/(t||1);if(i>0&&e.scrollHeight>r+4){let t=Math.round(e.scrollHeight/i);this.grow.setGrow(e,t)}})})}},E=class{props;refs;elementItem;woven;masonryHorizontal;masonryVertical;grow;timeoutResize;eventResize;constructor(e,t,r,i,a,o,s){this.props=e,this.refs=t,this.elementItem=r,this.woven=i,this.masonryHorizontal=a,this.masonryVertical=o,this.grow=s,d(me,this.update),g([this.refs.variant,this.refs.columns,this.refs.cellSize,this.refs.images],this.update),n(this.update),u(()=>{this.stopEvents()})}update=()=>{if(this.elementItem.is()&&this.isResize()){if(!this.eventResize){let e=this.elementItem.getElement().value;e&&(this.eventResize=new f(e,[`resize`],this.updateByTime),this.eventResize.start())}this.resize()}else this.stopEvents()};updateByTime=()=>{this.elementItem.isResize()&&(this.timeoutResize!==void 0&&clearTimeout(this.timeoutResize),this.timeoutResize=setTimeout(this.resize,320))};isResize(){return this.props.variant===`woven`||this.props.variant===`masonryHorizontal`||this.props.variant===`masonryVertical`}resize=()=>{switch(this.woven.reset(),this.grow.resetGrow(),this.props.variant){case`woven`:this.woven.resize();break;case`masonryHorizontal`:this.masonryHorizontal.resize();break;case`masonryVertical`:this.masonryVertical.resize()}};stopEvents(){this.eventResize&&=(this.eventResize.stop(),void 0),this.timeoutResize!==void 0&&(clearTimeout(this.timeoutResize),this.timeoutResize=void 0),this.woven.reset(),this.grow.resetGrow()}},D=class{className;element;classCompact;constructor(e,t){this.className=e,this.element=t,this.classCompact=`${e}Item--compact`}reset(){this.element?.getItems(`.${this.classCompact}`).forEach(e=>this.resetItem(e))}resize(){requestAnimationFrame(()=>{if(!this.element?.is())return;let e=this.element.getItems(),t=this.getColumns(e);t<=0||e.forEach((e,n)=>{let r=(Math.floor(n/t)+n%t)%2==1;this.setCompact(e,r)})})}getColumns(e){if(e.length===0)return 0;let t=e[0].offsetLeft;for(let n=1;n<e.length;n++){let r=e[n].offsetLeft;if(r<=t)return n;t=r}return e.length}setCompact(e,t){e.classList.toggle(this.classCompact,t)}resetItem(e){e.classList.remove(this.classCompact)}},O=class{props;refs;element;classDesign;className;components;slots;emits;data;variant;elementItem;masonryHorizontal;masonryVertical;woven;grow;event;model;focusDirection;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{CollageVariantConstructor:l=E,CollageElementConstructor:u=S,CollageMasonryHorizontalConstructor:d=w,CollageMasonryVerticalConstructor:f=T,CollageGrowConstructor:p=C,CollageWovenConstructor:m=D,EventClickIncludeConstructor:h=x,FocusDirectionIncludeConstructor:g=fe,ListDataRefConstructor:_=ee,ModelValueIncludeConstructor:v=ue}=c;this.elementItem=new u(n),this.grow=new p(i,this.elementItem),this.woven=new m(i,this.elementItem),this.masonryHorizontal=new d(this.grow,this.elementItem),this.masonryVertical=new f(this.grow,this.elementItem),this.event=new h(void 0,void 0,s),this.model=new v(`selected`,s,this.event,t.selected,()=>!this.props.control,!0),this.data=new _(this.refs.images,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel),this.variant=new l(e,t,this.elementItem,this.woven,this.masonryHorizontal,this.masonryVertical,this.grow),this.focusDirection=new g(this.element,`[data-collage-item]`,`.${this.classDesign}-collageItem--selected`,`${this.classDesign}-collageItem--focus`,()=>this.props.control)}get styles(){let e={},t=this.getCellSize();return t!==void 0&&(e[`--${this.className}-cell-size`]=t),e}getCellSize(){if(this.props.cellSize!==void 0)return c(this.props.cellSize)?`${this.props.cellSize}px`:String(this.props.cellSize)}},k={columns:`4`,variant:`standard`},A=class extends re{item;constructor(e,t,n,r=O){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose,update:this.item.variant.update}}initClasses(){return{main:{},body:this.getSubClass(`body`),item:this.getSubClass(`item`)}}initStyles(){return this.item.styles}initRender(){return o(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,style:this.styles?.value,...this.item.focusDirection.binds},this.renderBody())}renderBody=()=>o(`div`,{class:this.classes?.value.body},this.renderList());renderList=()=>{let e=[];if(this.props.images){let t=this.item.data.fullData.value;t&&t.forEach((t,n)=>{this.components.renderAdd(e,`collageItem`,v({class:this.classes?.value.item,onClick:this.item.model.onClick,...this.item.focusDirection.bindsItem()},this.props.collageItemAttrs,t),void 0,t?.value||t?.index||n)})}return this.initSlot(`default`,e),e}}})))()}var M;function N(){return(N=e((()=>{pe(),M=ge})))()}var P,F;function I(){return(I=e((()=>{j(),P={columns:[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`],variant:[`standard`,`quilted`,`woven`,`masonryHorizontal`,`masonryVertical`]},F={...k,columns:`4`,variant:`standard`}})))()}var L;function R(){return(R=e((()=>{r(),j(),y(),N(),I(),L=a({name:`D1Collage`,__name:`D1Collage`,props:s({collageItemAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},images:{},selected:{type:[Number,String,Boolean,Array]},keyValue:{},keyLabel:{},cellSize:{},control:{type:Boolean},columns:{},variant:{}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:n}){let r=n,a=e,o=m(()=>({main:{"d1-collage":!0,[`d1-collage--columns--${a.columns}`]:h(P.columns,a.columns),[`d1-collage--variant--${a.variant}`]:h(P.variant,a.variant)}})),s=m(()=>({})),c=new A(`d1.collage`,a,{emits:r,classes:o,styles:s,components:{collageItem:M}}),u=c.render();return t(c.expose()),(e,t)=>(l(),i(p(u)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Collage`,exportName:`default`,displayName:`D1Collage`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Collage/D1Collage.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{oe(),I(),V=[{name:`cellSize`,type:`string | number`},{name:`collageItemAttrs`,type:`ConstrBind<CollageItemProps>`},{name:`columns`,type:`string`,option:[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`]},{name:`control`,type:`boolean`},{name:`images`,type:`ListRecord<CollageItemProps>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`variant`,type:`string`,option:[`standard`,`quilted`,`woven`,`masonryHorizontal`,`masonryVertical`]}],H=[{name:`default`,description:`Default slot for custom content / Слот по умолчанию для пользовательского содержимого`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],W={component:`Collage`,props:V,slots:H,events:U,defaults:F,wikiDesign:ae}})))()}var K;function q(){return(q=e((()=>{te(),b(),G(),K=new se(W.component,W.props,W.defaults,W.wikiDesign,ie,ne)})))()}var _e=t({Collage:()=>Y,CollageVModel:()=>Z,CollageVariants:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),r(),J={title:`Ui/Collage`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Collage:z},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-container">
      <D1Collage v-bind="args"/>
    </div>
    `})},X={name:`Варианты макета`,render:()=>({components:{D1Collage:z},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: standard</div>
            <D1Collage
              variant="standard"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/600/600?random=1', label: 'Item 1' },
                { image: 'https://picsum.photos/600/600?random=2', label: 'Item 2' },
                { image: 'https://picsum.photos/600/600?random=3', label: 'Item 3' },
                { image: 'https://picsum.photos/600/600?random=4', label: 'Item 4' },
                { image: 'https://picsum.photos/600/600?random=5', label: 'Item 5' },
                { image: 'https://picsum.photos/600/600?random=6', label: 'Item 6' },
                { image: 'https://picsum.photos/600/600?random=7', label: 'Item 7' },
                { image: 'https://picsum.photos/600/600?random=8', label: 'Item 8' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: quilted</div>
            <D1Collage
              variant="quilted"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/800?random=11', span: 'large', label: 'Large (2x2)' },
                { image: 'https://picsum.photos/600/600?random=12', span: 'standard', label: 'Standard 1' },
                { image: 'https://picsum.photos/600/1200?random=13', span: 'tall', label: 'Tall (1x2)' },
                { image: 'https://picsum.photos/600/600?random=14', span: 'standard', label: 'Standard 2' },
                { image: 'https://picsum.photos/1200/600?random=15', span: 'wide', label: 'Wide (2x1)' },
                { image: 'https://picsum.photos/600/600?random=16', span: 'standard', label: 'Standard 3' },
                { image: 'https://picsum.photos/600/600?random=17', span: 'standard', label: 'Standard 4' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: woven</div>
            <D1Collage
              variant="woven"
              columns="3"
              :images="[
                { image: 'https://picsum.photos/600/800?random=21', label: 'Item 1' },
                { image: 'https://picsum.photos/600/800?random=22', label: 'Item 2' },
                { image: 'https://picsum.photos/600/800?random=23', label: 'Item 3' },
                { image: 'https://picsum.photos/600/800?random=24', label: 'Item 4' },
                { image: 'https://picsum.photos/600/800?random=25', label: 'Item 5' },
                { image: 'https://picsum.photos/600/800?random=26', label: 'Item 6' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryHorizontal</div>
            <D1Collage
              variant="masonryHorizontal"
              :images="[
                { image: 'https://picsum.photos/960/540?random=31', label: 'Landscape 16:9' },
                { image: 'https://picsum.photos/600/600?random=32', label: 'Square 1:1' },
                { image: 'https://picsum.photos/1000/500?random=33', label: 'Panoramic 2:1' },
                { image: 'https://picsum.photos/600/800?random=34', label: 'Portrait 3:4' },
                { image: 'https://picsum.photos/800/500?random=35', label: 'Wide 16:10' },
                { image: 'https://picsum.photos/800/600?random=36', label: 'Standard 4:3' },
                { image: 'https://picsum.photos/600/600?random=37', label: 'Square 1:1' },
                { image: 'https://picsum.photos/1050/450?random=38', label: 'Panoramic 21:9' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryVertical</div>
            <D1Collage
              variant="masonryVertical"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/540/960?random=41', label: 'Tall Pin' },
                { image: 'https://picsum.photos/600/600?random=42', label: 'Square' },
                { image: 'https://picsum.photos/600/800?random=43', label: 'Portrait' },
                { image: 'https://picsum.photos/800/500?random=44', label: 'Landscape' },
                { image: 'https://picsum.photos/800/600?random=45', label: 'Standard' },
                { image: 'https://picsum.photos/600/900?random=46', label: 'Tall Portrait' },
                { image: 'https://picsum.photos/600/600?random=47', label: 'Square' },
                { image: 'https://picsum.photos/600/800?random=48', label: 'Portrait' }
              ]"
            />
          </div>
        </div>
    `})},Z={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Collage:z},setup(){return{selected:_([`select-1`,`select-3`]),images:[{image:`https://picsum.photos/600/600?random=51`,label:`Item 1`,value:`select-1`},{image:`https://picsum.photos/600/600?random=52`,label:`Item 2`,value:`select-2`},{image:`https://picsum.photos/600/600?random=53`,label:`Item 3`,value:`select-3`},{image:`https://picsum.photos/600/600?random=54`,label:`Item 4`,value:`select-4`}]}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Selected: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = ['select-1', 'select-2']">Select 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="selected = []">Clear</button>
          </div>

          <D1Collage
            control
            columns="4"
            variant="standard"
            :images="images"
            v-model:selected="selected"
          />
        </div>
    `})},Q=[`Collage`,`CollageVariants`,`CollageVModel`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Collage
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-container">
      <D1Collage v-bind="args"/>
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Варианты макета',
  render: () => ({
    components: {
      D1Collage
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: standard</div>
            <D1Collage
              variant="standard"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/600/600?random=1', label: 'Item 1' },
                { image: 'https://picsum.photos/600/600?random=2', label: 'Item 2' },
                { image: 'https://picsum.photos/600/600?random=3', label: 'Item 3' },
                { image: 'https://picsum.photos/600/600?random=4', label: 'Item 4' },
                { image: 'https://picsum.photos/600/600?random=5', label: 'Item 5' },
                { image: 'https://picsum.photos/600/600?random=6', label: 'Item 6' },
                { image: 'https://picsum.photos/600/600?random=7', label: 'Item 7' },
                { image: 'https://picsum.photos/600/600?random=8', label: 'Item 8' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: quilted</div>
            <D1Collage
              variant="quilted"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/800?random=11', span: 'large', label: 'Large (2x2)' },
                { image: 'https://picsum.photos/600/600?random=12', span: 'standard', label: 'Standard 1' },
                { image: 'https://picsum.photos/600/1200?random=13', span: 'tall', label: 'Tall (1x2)' },
                { image: 'https://picsum.photos/600/600?random=14', span: 'standard', label: 'Standard 2' },
                { image: 'https://picsum.photos/1200/600?random=15', span: 'wide', label: 'Wide (2x1)' },
                { image: 'https://picsum.photos/600/600?random=16', span: 'standard', label: 'Standard 3' },
                { image: 'https://picsum.photos/600/600?random=17', span: 'standard', label: 'Standard 4' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: woven</div>
            <D1Collage
              variant="woven"
              columns="3"
              :images="[
                { image: 'https://picsum.photos/600/800?random=21', label: 'Item 1' },
                { image: 'https://picsum.photos/600/800?random=22', label: 'Item 2' },
                { image: 'https://picsum.photos/600/800?random=23', label: 'Item 3' },
                { image: 'https://picsum.photos/600/800?random=24', label: 'Item 4' },
                { image: 'https://picsum.photos/600/800?random=25', label: 'Item 5' },
                { image: 'https://picsum.photos/600/800?random=26', label: 'Item 6' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryHorizontal</div>
            <D1Collage
              variant="masonryHorizontal"
              :images="[
                { image: 'https://picsum.photos/960/540?random=31', label: 'Landscape 16:9' },
                { image: 'https://picsum.photos/600/600?random=32', label: 'Square 1:1' },
                { image: 'https://picsum.photos/1000/500?random=33', label: 'Panoramic 2:1' },
                { image: 'https://picsum.photos/600/800?random=34', label: 'Portrait 3:4' },
                { image: 'https://picsum.photos/800/500?random=35', label: 'Wide 16:10' },
                { image: 'https://picsum.photos/800/600?random=36', label: 'Standard 4:3' },
                { image: 'https://picsum.photos/600/600?random=37', label: 'Square 1:1' },
                { image: 'https://picsum.photos/1050/450?random=38', label: 'Panoramic 21:9' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryVertical</div>
            <D1Collage
              variant="masonryVertical"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/540/960?random=41', label: 'Tall Pin' },
                { image: 'https://picsum.photos/600/600?random=42', label: 'Square' },
                { image: 'https://picsum.photos/600/800?random=43', label: 'Portrait' },
                { image: 'https://picsum.photos/800/500?random=44', label: 'Landscape' },
                { image: 'https://picsum.photos/800/600?random=45', label: 'Standard' },
                { image: 'https://picsum.photos/600/900?random=46', label: 'Tall Portrait' },
                { image: 'https://picsum.photos/600/600?random=47', label: 'Square' },
                { image: 'https://picsum.photos/600/800?random=48', label: 'Portrait' }
              ]"
            />
          </div>
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Collage
    },
    setup() {
      const selected = ref(['select-1', 'select-3']);
      const images = [{
        image: 'https://picsum.photos/600/600?random=51',
        label: 'Item 1',
        value: 'select-1'
      }, {
        image: 'https://picsum.photos/600/600?random=52',
        label: 'Item 2',
        value: 'select-2'
      }, {
        image: 'https://picsum.photos/600/600?random=53',
        label: 'Item 3',
        value: 'select-3'
      }, {
        image: 'https://picsum.photos/600/600?random=54',
        label: 'Item 4',
        value: 'select-4'
      }];
      return {
        selected,
        images
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Selected: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = ['select-1', 'select-2']">Select 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="selected = []">Clear</button>
          </div>

          <D1Collage
            control
            columns="4"
            variant="standard"
            :images="images"
            v-model:selected="selected"
          />
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,_e as i,Z as n,K as o,X as r,q as s,Y as t};