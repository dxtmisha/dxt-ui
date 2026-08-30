import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,Ht as o,It as s,Nt as c,Ot as l,Pt as u,Ut as d,Yt as f,in as p,kt as m,sn as h}from"./library-CO1fW2cN.js";import{E as g,O as _,d as v,f as y,i as b,l as x,n as S,t as C,u as w}from"./wiki-BMj2WokS.js";var T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{m(),g(),l(),T=class{constructor(e,t,n){r(this,`props`,void 0),r(this,`elementManager`,void 0),r(this,`items`,void 0),r(this,`frameId`,void 0),r(this,`timerId`,void 0),r(this,`isTransitioning`,!1),r(this,`isEnable`,()=>!this.props.disabled&&this.elementManager.isEnable()),r(this,`reset`,()=>{this.isTransitioning||(this.isTransitioning=!0,requestAnimationFrame(()=>{this.stop(),this.props.auto&&this.items.init()}))}),r(this,`update`,async e=>{if(this.isEnable()){this.items.init(),await e(),this.go();return}await e()}),r(this,`go`,()=>{this.stop(),this.frameId=requestAnimationFrame(()=>{this.items.update(),this.elementManager.addClassFreeze(),this.frameId=requestAnimationFrame(()=>{this.elementManager.addClassGo(),this.frameId=void 0,this.timerId=setTimeout(()=>this.reset(),1024)})})}),r(this,`onTransition`,e=>{this.items.resetItem(e)&&this.reset()}),r(this,`stop`,()=>{this.frameId!==void 0&&(cancelAnimationFrame(this.frameId),this.frameId=void 0),this.timerId!==void 0&&(clearTimeout(this.timerId),this.timerId=void 0),this.isTransitioning=!1,this.elementManager.resetStatus(),this.items.reset()}),this.props=e,this.elementManager=t,this.items=n}},E=class{constructor(e,t){r(this,`element`,void 0),r(this,`className`,void 0),this.element=e,this.className=t}isEnable(){return!!this.element.value}getClassName(){return this.className}getElement(){return this.element.value}addClassFreeze(){var e;(e=this.element.value)==null||e.classList.add(`${this.className}--freeze`)}addClassGo(){var e;(e=this.element.value)==null||e.classList.add(`${this.className}--go`)}resetStatus(){var e;(e=this.element.value)==null||e.classList.remove(`${this.className}--freeze`,`${this.className}--go`)}},D=class{constructor(e,t){r(this,`element`,void 0),r(this,`elementManager`,void 0),r(this,`original`,void 0),this.element=e,this.elementManager=t}isElement(e){return this.element===e}reset(){return this.resetStyle().removeClass()}update(e){if(this.original){let t=e??this.getRectangle();this.setStyle(`top`,this.original.top-t.top).setStyle(`left`,this.original.left-t.left).setStyle(`width`,t.width).setStyle(`width-to`,this.original.width).setStyle(`height`,t.height).setStyle(`height-to`,this.original.height).addClass()}return this}initOriginalSize(){let e=this.element.getBoundingClientRect();return this.original={top:e.top,left:e.left,width:e.width,height:e.height},this}getItemClassName(){return`${this.elementManager.getClassName()}__item`}setStyle(e,t){let n=this.elementManager.getClassName();return this.element.style.setProperty(`--${n}-sys-${e}`,`${t}px`),this}addClass(){return this.element.classList.add(this.getItemClassName()),this}removeClass(){return this.element.classList.remove(this.getItemClassName()),this}removeStyle(e){let t=this.elementManager.getClassName();return this.element.style.removeProperty(`--${t}-sys-${e}`),this}resetStyle(){return this.removeStyle(`top`).removeStyle(`left`).removeStyle(`width`).removeStyle(`width-to`).removeStyle(`height`).removeStyle(`height-to`),this}getRectangle(){return this.element.getBoundingClientRect()}},O=class{constructor(e){r(this,`elementManager`,void 0),r(this,`items`,[]),this.elementManager=e}reset(){this.items.forEach(e=>e.reset())}resetItem(e){if(e.propertyName===`transform`){var t;return!!((t=this.find(e.target?.parentElement))!=null&&t.reset())}return!1}update(){let e=this.items.map(e=>e.getRectangle());this.items.forEach((t,n)=>t.update(e[n]))}init(){let e=this.elementManager.getElement();if(e){let t=Array.from(e.children);this.items=t.map(e=>new D(e,this.elementManager).initOriginalSize())}else this.items=[]}initOriginalSize(){this.items.forEach(e=>e.initOriginalSize())}find(e){return this.items.find(t=>t.isElement(e))}},k=class{constructor(e,t,n,i){r(this,`props`,void 0),r(this,`action`,void 0),r(this,`elementManager`,void 0),r(this,`items`,void 0),r(this,`observer`,void 0),r(this,`onMutation`,()=>{this.action.isEnable()&&(this.action.go(),this.takeRecords())}),this.props=e,this.action=t,this.elementManager=n,this.items=i,o(()=>{f([()=>this.props.auto,()=>this.elementManager.getElement()],()=>{this.update()},{immediate:!0})}),d(()=>{this.stop()})}update(){this.props.auto?this.start():this.stop()}start(){let e=this.elementManager.getElement();e&&(this.stop(),this.items.init(),this.observer=new MutationObserver(this.onMutation),this.observer.observe(e,{childList:!0}))}stop(){this.observer&&=(this.observer.disconnect(),void 0)}takeRecords(){var e;(e=this.observer)==null||e.takeRecords()}},A=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`action`,void 0),r(this,`elementManager`,void 0),r(this,`items`,void 0),r(this,`observer`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{MotionFlipActionConstructor:u=T,MotionFlipElementConstructor:d=E,MotionFlipItemsConstructor:f=O,MotionFlipObserverConstructor:p=k}=l;this.elementManager=new d(this.element,this.className),this.items=new f(this.elementManager),this.action=new u(this.props,this.elementManager,this.items),this.observer=new p(this.props,this.action,this.elementManager,this.items)}},j=class extends _{constructor(e,t,n,i=A){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{stop:()=>this.item.action.stop(),update:e=>this.item.action.update(e)}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){return s(`div`,{ref:this.element,class:this.classes?.value.main,onTransitionend:this.item.action.onTransition},this.initSlot(`default`))}},M={auto:!0}})))()}var P;function F(){return(F=e((()=>{N(),P={...M}})))()}var I;function L(){return(L=e((()=>{m(),N(),F(),I=i({name:`D1MotionFlip`,__name:`D1MotionFlip`,props:n({auto:{type:Boolean},disabled:{type:Boolean}},P),setup(e,{expose:t,emit:n}){let r=n,i=e,o=c(()=>({main:{"d1-motionFlip":!0}})),s=c(()=>({})),l=new j(`d1.motionFlip`,i,{emits:r,classes:o,styles:s}),d=l.render();return t(l.expose()),(e,t)=>(a(),u(h(d)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1MotionFlip`,exportName:`default`,displayName:`D1MotionFlip`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/MotionFlip/D1MotionFlip.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{C(),F(),B=[{name:`auto`,type:`boolean`},{name:`disabled`,type:`boolean`}],V=[{name:`default`,description:`Default slot for content elements / Слот по умолчанию для элементов контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[],U={component:`MotionFlip`,props:B,slots:V,events:H,defaults:P,wikiDesign:S}})))()}var G;function K(){return(K=e((()=>{v(),x(),W(),G=new w(U.component,U.props,U.defaults,U.wikiDesign,b,y)})))()}var q=t({MotionFlip:()=>Y,MotionFlipBasic:()=>X,__namedExportsOrder:()=>Z,default:()=>J}),J,Y,X,Z;function Q(){return(Q=e((()=>{z(),K(),m(),J={title:`Ui/MotionFlip`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1MotionFlip:R},setup:()=>({args:e}),template:`
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
    `})},X={name:`Базовое использование`,render:()=>({components:{D1MotionFlip:R},setup(){let e=p(),t=p([1,2,3,4,5]),n=6;return{flipRef:e,items:t,add:async()=>{e.value&&await e.value.update(()=>{let e=Math.floor(Math.random()*(t.value.length+1));t.value.splice(e,0,n++)})},remove:async()=>{e.value&&t.value.length>0&&await e.value.update(()=>{let e=Math.floor(Math.random()*t.value.length);t.value.splice(e,1)})},shuffle:async()=>{e.value&&await e.value.update(()=>{t.value=[...t.value].sort(()=>Math.random()-.5)})}}},template:`
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
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z=[`MotionFlip`,`MotionFlipBasic`]})))()}export{G as a,Q as i,Y as n,K as o,X as r,q as t};