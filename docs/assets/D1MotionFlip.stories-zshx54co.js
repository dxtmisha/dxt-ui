import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$t as n,At as r,Ft as i,Gt as a,Ht as o,It as s,Jt as c,Kt as l,Pt as u,Rt as d,mn as f,un as p}from"./library-ByXZ2YPj.js";import{_ as m,a as h,d as g,f as _,k as v,n as y,p as b,s as x,t as S}from"./wiki-CfN0XtvQ.js";var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{r(),v(),C=class{props;elementManager;items;frameId;timerId;isTransitioning=!1;constructor(e,t,n){this.props=e,this.elementManager=t,this.items=n}isEnable=()=>!this.props.disabled&&this.elementManager.isEnable();reset=()=>{this.isTransitioning||(this.isTransitioning=!0,requestAnimationFrame(()=>{this.stop(),this.props.auto&&this.items.init()}))};update=async e=>{if(this.isEnable()){this.items.init(),await e(),this.go();return}await e()};go=()=>{this.stop(),this.frameId=requestAnimationFrame(()=>{this.items.update(),this.elementManager.addClassFreeze(),this.frameId=requestAnimationFrame(()=>{this.elementManager.addClassGo(),this.frameId=void 0,this.timerId=setTimeout(()=>this.reset(),1024)})})};onTransition=e=>{this.items.resetItem(e)&&this.reset()};stop=()=>{this.frameId!==void 0&&(cancelAnimationFrame(this.frameId),this.frameId=void 0),this.timerId!==void 0&&(clearTimeout(this.timerId),this.timerId=void 0),this.isTransitioning=!1,this.elementManager.resetStatus(),this.items.reset()}},w=class{element;naming;constructor(e,t){this.element=e,this.naming=t}isEnable(){return!!this.element.value}getClassName(){return this.naming.getName()}getElement(){return this.element.value}addClassFreeze(){this.element.value?.classList.add(this.naming.getStatusClass(`freeze`))}addClassGo(){this.element.value?.classList.add(this.naming.getStatusClass(`go`))}resetStatus(){this.element.value?.classList.remove(this.naming.getStatusClass(`freeze`),this.naming.getStatusClass(`go`))}},T=class{element;elementManager;original;constructor(e,t){this.element=e,this.elementManager=t}isElement(e){return this.element===e}reset(){return this.resetStyle().removeClass()}update(e){if(this.original){let t=e??this.getRectangle();this.setStyle(`top`,this.original.top-t.top).setStyle(`left`,this.original.left-t.left).setStyle(`width`,t.width).setStyle(`width-to`,this.original.width).setStyle(`height`,t.height).setStyle(`height-to`,this.original.height).addClass()}return this}initOriginalSize(){let e=this.element.getBoundingClientRect();return this.original={top:e.top,left:e.left,width:e.width,height:e.height},this}getItemClassName(){return`${this.elementManager.getClassName()}__item`}setStyle(e,t){let n=this.elementManager.getClassName();return this.element.style.setProperty(`--${n}-sys-${e}`,`${t}px`),this}addClass(){return this.element.classList.add(this.getItemClassName()),this}removeClass(){return this.element.classList.remove(this.getItemClassName()),this}removeStyle(e){let t=this.elementManager.getClassName();return this.element.style.removeProperty(`--${t}-sys-${e}`),this}resetStyle(){return this.removeStyle(`top`).removeStyle(`left`).removeStyle(`width`).removeStyle(`width-to`).removeStyle(`height`).removeStyle(`height-to`),this}getRectangle(){return this.element.getBoundingClientRect()}},E=class{elementManager;items=[];constructor(e){this.elementManager=e}reset(){this.items.forEach(e=>e.reset())}resetItem(e){return e.propertyName===`transform`&&!!this.find(e.target?.parentElement)?.reset()}update(){let e=this.items.map(e=>e.getRectangle());this.items.forEach((t,n)=>t.update(e[n]))}init(){let e=this.elementManager.getElement();if(e){let t=Array.from(e.children);this.items=t.map(e=>new T(e,this.elementManager).initOriginalSize())}else this.items=[]}initOriginalSize(){this.items.forEach(e=>e.initOriginalSize())}find(e){return this.items.find(t=>t.isElement(e))}},D=class{props;action;elementManager;items;observer;constructor(e,t,r,i){this.props=e,this.action=t,this.elementManager=r,this.items=i,n([()=>this.props.auto,()=>this.elementManager.getElement()],this.update),a(this.update),l(()=>{this.stop()})}update=()=>{this.props.auto?this.start():this.stop()};onMutation=()=>{this.action.isEnable()&&(this.action.go(),this.takeRecords())};start(){let e=this.elementManager.getElement();e&&(this.stop(),this.items.init(),this.observer=new MutationObserver(this.onMutation),this.observer.observe(e,{childList:!0}))}stop(){this.observer&&=(this.observer.disconnect(),void 0)}takeRecords(){this.observer?.takeRecords()}},O=class{props;element;naming;components;slots;emits;action;elementManager;items;observer;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{MotionFlipActionConstructor:s=C,MotionFlipElementConstructor:c=w,MotionFlipItemsConstructor:l=E,MotionFlipObserverConstructor:u=D}=o;this.elementManager=new c(this.element,this.naming),this.items=new l(this.elementManager),this.action=new s(this.props,this.elementManager,this.items),this.observer=new u(this.props,this.action,this.elementManager,this.items)}},k=class extends m{item;constructor(e,t,n,r=O){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{stop:()=>this.item.action.stop(),update:e=>this.item.action.update(e)}}initClasses(){return{main:{},item:this.naming.getSubClass(`item`)}}initStyles(){return{}}initRender(){return d(`div`,{ref:this.element,class:this.classes?.value.main,onTransitionend:this.item.action.onTransition},this.initSlot(`default`))}},A={auto:!0}})))()}var M;function N(){return(N=e((()=>{j(),M={...A}})))()}var P;function F(){return(F=e((()=>{r(),j(),N(),P=s({name:`D1MotionFlip`,__name:`D1MotionFlip`,props:o({auto:{type:Boolean},disabled:{type:Boolean}},M),setup(e,{expose:t,emit:n}){let r=n,a=e,o=u(()=>({main:{"d1-motionFlip":!0}})),s=u(()=>({})),l=new k(`d1.motionFlip`,a,{emits:r,classes:o,styles:s}),d=l.render();return t(l.expose()),(e,t)=>(c(),i(f(d)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1MotionFlip`,exportName:`default`,displayName:`D1MotionFlip`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/MotionFlip/D1MotionFlip.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{S(),N(),R=[{name:`auto`,type:`boolean`},{name:`disabled`,type:`boolean`}],z=[{name:`default`,description:`Default slot for content elements / Слот по умолчанию для элементов контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[],V={component:`MotionFlip`,props:R,slots:z,events:B,defaults:M,wikiDesign:y}})))()}var U;function W(){return(W=e((()=>{_(),x(),H(),U=new g(V.component,V.props,V.defaults,V.wikiDesign,h,b)})))()}var G=t({MotionFlip:()=>q,MotionFlipBasic:()=>J,__namedExportsOrder:()=>Y,default:()=>K}),K,q,J,Y;function X(){return(X=e((()=>{L(),W(),r(),K={title:`Ui/MotionFlip`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1MotionFlip:I},setup:()=>({args:e}),template:`
      <D1MotionFlip v-bind="args" class="wiki-storybook-group">
      <div
        v-for="item in 5"
        :key="item"
        class="wiki-storybook-item--squared--xs"
        style="cursor: pointer;"
        @click="$event.target.parentNode.appendChild($event.target)"
      >
        <div class="wiki-storybook-item wiki-storybook-item--padding" style="pointer-events: none;">
          <span class="wiki-storybook-item__label">Item {{ item }}</span>
        </div>
      </div>
    </D1MotionFlip>
    `})},J={name:`Базовое использование`,render:()=>({components:{D1MotionFlip:I},setup(){let e=p(),t=p([1,2,3,4,5]),n=6;return{flipRef:e,items:t,add:async()=>{e.value&&await e.value.update(()=>{let e=Math.floor(Math.random()*(t.value.length+1));t.value.splice(e,0,n++)})},remove:async()=>{e.value&&t.value.length>0&&await e.value.update(()=>{let e=Math.floor(Math.random()*t.value.length);t.value.splice(e,1)})},shuffle:async()=>{e.value&&await e.value.update(()=>{t.value=[...t.value].sort(()=>Math.random()-.5)})}}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="add">Add</button>
            <button class="wiki-storybook-button" @click="remove">Remove</button>
            <button class="wiki-storybook-button" @click="shuffle">Shuffle</button>
          </div>

          <D1MotionFlip ref="flipRef" class="wiki-storybook-group">
            <div v-for="item in items" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">Item {{ item }}</span>
              </div>
            </div>
          </D1MotionFlip>
        </div>
    `})},Y=[`MotionFlip`,`MotionFlipBasic`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1MotionFlip
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1MotionFlip v-bind="args" class="wiki-storybook-group">
      <div
        v-for="item in 5"
        :key="item"
        class="wiki-storybook-item--squared--xs"
        style="cursor: pointer;"
        @click="$event.target.parentNode.appendChild($event.target)"
      >
        <div class="wiki-storybook-item wiki-storybook-item--padding" style="pointer-events: none;">
          <span class="wiki-storybook-item__label">Item {{ item }}</span>
        </div>
      </div>
    </D1MotionFlip>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1MotionFlip
    },
    setup() {
      const flipRef = ref();
      const items = ref([1, 2, 3, 4, 5]);
      let nextId = 6;
      const add = async () => {
        if (flipRef.value) {
          await flipRef.value.update(() => {
            const index = Math.floor(Math.random() * (items.value.length + 1));
            items.value.splice(index, 0, nextId++);
          });
        }
      };
      const remove = async () => {
        if (flipRef.value && items.value.length > 0) {
          await flipRef.value.update(() => {
            const index = Math.floor(Math.random() * items.value.length);
            items.value.splice(index, 1);
          });
        }
      };
      const shuffle = async () => {
        if (flipRef.value) {
          await flipRef.value.update(() => {
            items.value = [...items.value].sort(() => Math.random() - 0.5);
          });
        }
      };
      return {
        flipRef,
        items,
        add,
        remove,
        shuffle
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="add">Add</button>
            <button class="wiki-storybook-button" @click="remove">Remove</button>
            <button class="wiki-storybook-button" @click="shuffle">Shuffle</button>
          </div>

          <D1MotionFlip ref="flipRef" class="wiki-storybook-group">
            <div v-for="item in items" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">Item {{ item }}</span>
              </div>
            </div>
          </D1MotionFlip>
        </div>
    \`
  })
}`,...J.parameters?.docs?.source}}}})))()}export{U as a,X as i,q as n,W as o,J as r,G as t};