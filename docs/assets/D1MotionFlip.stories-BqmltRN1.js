import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Bt as r,Et as i,Ht as a,Kt as o,Lt as s,Mt as c,Nt as l,in as u,jt as d,tn as f,zt as p}from"./library-CUIf7uCS.js";import{O as m,d as h,k as g,l as _,m as v,n as y,p as b,r as x,t as S,u as C}from"./wiki-wIqBVsyI.js";var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{i(),m(),w=class{constructor(e,t,n){b(this,`props`,void 0),b(this,`elementManager`,void 0),b(this,`items`,void 0),b(this,`frameId`,void 0),b(this,`timerId`,void 0),b(this,`isTransitioning`,!1),b(this,`isEnable`,()=>!this.props.disabled&&this.elementManager.isEnable()),b(this,`reset`,()=>{this.isTransitioning||(this.isTransitioning=!0,requestAnimationFrame(()=>{this.stop(),this.props.auto&&this.items.init()}))}),b(this,`update`,async e=>{if(this.isEnable()){this.items.init(),await e(),this.go();return}await e()}),b(this,`go`,()=>{this.stop(),this.frameId=requestAnimationFrame(()=>{this.items.update(),this.elementManager.addClassFreeze(),this.frameId=requestAnimationFrame(()=>{this.elementManager.addClassGo(),this.frameId=void 0,this.timerId=setTimeout(()=>this.reset(),1024)})})}),b(this,`onTransition`,e=>{this.items.resetItem(e)&&this.reset()}),b(this,`stop`,()=>{this.frameId!==void 0&&(cancelAnimationFrame(this.frameId),this.frameId=void 0),this.timerId!==void 0&&(clearTimeout(this.timerId),this.timerId=void 0),this.isTransitioning=!1,this.elementManager.resetStatus(),this.items.reset()}),this.props=e,this.elementManager=t,this.items=n}},T=class{constructor(e,t){b(this,`element`,void 0),b(this,`className`,void 0),this.element=e,this.className=t}isEnable(){return!!this.element.value}getClassName(){return this.className}getElement(){return this.element.value}addClassFreeze(){var e;(e=this.element.value)==null||e.classList.add(`${this.className}--freeze`)}addClassGo(){var e;(e=this.element.value)==null||e.classList.add(`${this.className}--go`)}resetStatus(){var e;(e=this.element.value)==null||e.classList.remove(`${this.className}--freeze`,`${this.className}--go`)}},E=class{constructor(e,t){b(this,`element`,void 0),b(this,`elementManager`,void 0),b(this,`original`,void 0),this.element=e,this.elementManager=t}isElement(e){return this.element===e}reset(){return this.resetStyle().removeClass()}update(e){if(this.original){let t=e??this.getRectangle();this.setStyle(`top`,this.original.top-t.top).setStyle(`left`,this.original.left-t.left).setStyle(`width`,t.width).setStyle(`width-to`,this.original.width).setStyle(`height`,t.height).setStyle(`height-to`,this.original.height).addClass()}return this}initOriginalSize(){let e=this.element.getBoundingClientRect();return this.original={top:e.top,left:e.left,width:e.width,height:e.height},this}getItemClassName(){return`${this.elementManager.getClassName()}__item`}setStyle(e,t){let n=this.elementManager.getClassName();return this.element.style.setProperty(`--${n}-sys-${e}`,`${t}px`),this}addClass(){return this.element.classList.add(this.getItemClassName()),this}removeClass(){return this.element.classList.remove(this.getItemClassName()),this}removeStyle(e){let t=this.elementManager.getClassName();return this.element.style.removeProperty(`--${t}-sys-${e}`),this}resetStyle(){return this.removeStyle(`top`).removeStyle(`left`).removeStyle(`width`).removeStyle(`width-to`).removeStyle(`height`).removeStyle(`height-to`),this}getRectangle(){return this.element.getBoundingClientRect()}},D=class{constructor(e){b(this,`elementManager`,void 0),b(this,`items`,[]),this.elementManager=e}reset(){this.items.forEach(e=>e.reset())}resetItem(e){if(e.propertyName===`transform`){var t;return!!((t=this.find(e.target?.parentElement))!=null&&t.reset())}return!1}update(){let e=this.items.map(e=>e.getRectangle());this.items.forEach((t,n)=>t.update(e[n]))}init(){let e=this.elementManager.getElement();if(e){let t=Array.from(e.children);this.items=t.map(e=>new E(e,this.elementManager).initOriginalSize())}else this.items=[]}initOriginalSize(){this.items.forEach(e=>e.initOriginalSize())}find(e){return this.items.find(t=>t.isElement(e))}},O=class{constructor(e,t,n,i){b(this,`props`,void 0),b(this,`action`,void 0),b(this,`elementManager`,void 0),b(this,`items`,void 0),b(this,`observer`,void 0),b(this,`onMutation`,()=>{this.action.isEnable()&&(this.action.go(),this.takeRecords())}),this.props=e,this.action=t,this.elementManager=n,this.items=i,p(()=>{o([()=>this.props.auto,()=>this.elementManager.getElement()],()=>{this.update()},{immediate:!0})}),r(()=>{this.stop()})}update(){this.props.auto?this.start():this.stop()}start(){let e=this.elementManager.getElement();e&&(this.stop(),this.items.init(),this.observer=new MutationObserver(this.onMutation),this.observer.observe(e,{childList:!0}))}stop(){this.observer&&=(this.observer.disconnect(),void 0)}takeRecords(){var e;(e=this.observer)==null||e.takeRecords()}},k=class{constructor(e,t,n,r,i,a,o,s,c={}){b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`element`,void 0),b(this,`classDesign`,void 0),b(this,`className`,void 0),b(this,`components`,void 0),b(this,`slots`,void 0),b(this,`emits`,void 0),b(this,`action`,void 0),b(this,`elementManager`,void 0),b(this,`items`,void 0),b(this,`observer`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{MotionFlipActionConstructor:l=w,MotionFlipElementConstructor:u=T,MotionFlipItemsConstructor:d=D,MotionFlipObserverConstructor:f=O}=c;this.elementManager=new u(this.element,this.className),this.items=new d(this.elementManager),this.action=new l(this.props,this.elementManager,this.items),this.observer=new f(this.props,this.action,this.elementManager,this.items)}},A=class extends g{constructor(e,t,n,r=k){super(e,t,n),b(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{stop:()=>this.item.action.stop(),update:e=>this.item.action.update(e)}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){return l(`div`,{ref:this.element,class:this.classes?.value.main,onTransitionend:this.item.action.onTransition},this.initSlot(`default`))}},j={auto:!0}})))()}var N;function P(){return(P=e((()=>{M(),N={...j}})))()}var F;function I(){return(I=e((()=>{i(),M(),P(),F=c({name:`D1MotionFlip`,__name:`D1MotionFlip`,props:s({auto:{type:Boolean},disabled:{type:Boolean}},N),setup(e,{expose:t,emit:r}){let i=r,o=e,s=n(()=>({main:{"d1-motionFlip":!0}})),c=n(()=>({})),l=new A(`d1.motionFlip`,o,{emits:i,classes:s,styles:c}),f=l.render();return t(l.expose()),(e,t)=>(a(),d(u(f)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1MotionFlip`,exportName:`default`,displayName:`D1MotionFlip`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/MotionFlip/D1MotionFlip.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{S(),P(),z=[{name:`auto`,type:`boolean`},{name:`disabled`,type:`boolean`}],B=[{name:`default`,description:`Default slot for content elements / Слот по умолчанию для элементов контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[],H={component:`MotionFlip`,props:z,slots:B,events:V,defaults:N,wikiDesign:y}})))()}var W;function G(){return(G=e((()=>{h(),_(),U(),W=new C(H.component,H.props,H.defaults,H.wikiDesign,x,v)})))()}var K=t({MotionFlip:()=>J,MotionFlipBasic:()=>Y,__namedExportsOrder:()=>X,default:()=>q}),q,J,Y,X;function Z(){return(Z=e((()=>{R(),G(),i(),q={title:`Ui/MotionFlip`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1MotionFlip:L},setup:()=>({args:e}),template:`
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
    `})},Y={name:`Базовое использование`,render:()=>({components:{D1MotionFlip:L},setup(){let e=f(),t=f([1,2,3,4,5]),n=6;return{flipRef:e,items:t,add:async()=>{e.value&&await e.value.update(()=>{let e=Math.floor(Math.random()*(t.value.length+1));t.value.splice(e,0,n++)})},remove:async()=>{e.value&&t.value.length>0&&await e.value.update(()=>{let e=Math.floor(Math.random()*t.value.length);t.value.splice(e,1)})},shuffle:async()=>{e.value&&await e.value.update(()=>{t.value=[...t.value].sort(()=>Math.random()-.5)})}}},template:`
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
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`MotionFlip`,`MotionFlipBasic`]})))()}export{W as a,Z as i,J as n,G as o,Y as r,K as t};