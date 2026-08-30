import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,Ht as o,It as s,J as c,Nt as l,Ot as u,Pt as d,Ut as f,X as p,Yt as m,kt as h,sn as g}from"./library-CO1fW2cN.js";import{E as _,O as v,d as y,f as b,i as x,l as S,n as C,t as w,u as T}from"./wiki-BMj2WokS.js";var E,D,O,k,A;function j(){return(j=e((()=>{h(),_(),u(),E=class{constructor(e,t,n){r(this,`props`,void 0),r(this,`element`,void 0),r(this,`emits`,void 0),this.props=e,this.element=t,this.emits=n}get focusElement(){return p(this.props.elementScroll)??document.scrollingElement??document.documentElement}get eventElement(){return this.props.elementScroll?p(this.props.elementScroll):window}getElement(){return this.element.value}getPositionStyle(){let e=this.element.value;if(e){let t=getComputedStyle(e);if(t.position===`sticky`)return{top:parseInt(t.top.replace(/[^0-9]/gi,``))||0,bottom:parseInt(t.bottom.replace(/[^0-9]/gi,``))||0}}}getPositionElement(){let e=this.element.value,t=this.focusElement;if(e&&t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.round(n.top-(r.top>0?r.top:0));return{top:i<=-.99?0:i,bottom:Math.round((r.bottom>window.innerHeight?window.innerHeight:r.bottom)-n.bottom)}}}setStatus(e){let t=this.element.value;if(t){let r=e?`sticky`:`none`,i=this.getScrollState();if(this.props.classActivity&&t.classList.toggle(this.props.classActivity,e),this.updateSticky(r)){var n;(n=this.emits)==null||n.call(this,`sticky`,e)}this.updateScrollState(i)}}getScrollState(){let e=this.eventElement;return e&&(`scrollTop`in e&&e.scrollTop===0||`scrollY`in e&&e.scrollY===0)?`zero`:`active`}updateSticky(e){let t=this.element.value;return t&&e!==t.dataset.sticky?(t.dataset.sticky=e,!0):!1}updateScrollState(e){let t=this.element.value;return t&&e!==t.dataset.stickyScroll?(t.dataset.stickyScroll=e,!0):!1}},D=class{constructor(e,t){r(this,`props`,void 0),r(this,`stickyElement`,void 0),r(this,`event`,void 0),r(this,`onScroll`,()=>{let e=this.stickyElement.getPositionStyle(),t=this.stickyElement.getPositionElement();e&&t&&this.stickyElement.setStatus(e.top===Math.round(t.top)||e.top===Math.floor(t.top)||e.bottom===Math.ceil(t.bottom)||e.bottom===Math.floor(t.bottom))}),this.props=e,this.stickyElement=t,o(()=>{m([this.stickyElement.element,()=>this.stickyElement.eventElement],()=>{this.make(),requestAnimationFrame(this.onScroll)},{immediate:!0})}),f(()=>{this.stop()})}make(){let e=this.stickyElement.eventElement;e?(this.event=new c(e,`scroll`,this.onScroll),this.event.start()):this.stop()}stop(){var e;(e=this.event)==null||e.stop(),this.event=void 0}makeEvent(e){return new c(e,`scroll`,this.onScroll)}},O=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`element`,void 0),r(this,`scroll`,void 0),this.props=e,this.refs=t,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{MotionStickyElementConstructor:u=E,MotionStickyScrollConstructor:d=D}=l;this.element=new u(this.props,n,this.emits),this.scroll=new d(this.props,this.element)}get tag(){return this.props.tag??`div`}},k={tag:`div`},A=class extends v{constructor(e,t,n,i=O){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return s(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var M;function N(){return(N=e((()=>{j(),M={...k}})))()}var P;function F(){return(F=e((()=>{h(),j(),N(),P=i({name:`D1MotionSticky`,__name:`D1MotionSticky`,props:n({elementScroll:{},classActivity:{},tag:{}},M),emits:[`sticky`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=l(()=>({main:{"d1-motionSticky":!0}})),s=l(()=>({})),c=new A(`d1.motionSticky`,i,{emits:r,classes:o,styles:s}),u=c.render();return t(c.expose()),(e,t)=>(a(),d(g(u)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1MotionSticky`,exportName:`default`,displayName:`D1MotionSticky`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/MotionSticky/D1MotionSticky.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{w(),N(),R=[{name:`classActivity`,type:`string`},{name:`elementScroll`,type:`string | HTMLElement | Window`},{name:`tag`,type:`string`}],z=[{name:`default`,description:`Slot for default content / Слот для основного содержимого`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[{name:`sticky`,description:`Event triggered when sticky status changes / Событие при изменении статуса прикрепления`,properties:[{name:`status`,type:`boolean`}]}],V={component:`MotionSticky`,props:R,slots:z,events:B,defaults:M,wikiDesign:C}})))()}var U;function W(){return(W=e((()=>{y(),S(),H(),U=new T(V.component,V.props,V.defaults,V.wikiDesign,x,b)})))()}var G=t({MotionSticky:()=>q,__namedExportsOrder:()=>J,default:()=>K}),K,q,J;function Y(){return(Y=e((()=>{L(),W(),K={title:`Ui/MotionSticky`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1MotionSticky:I},setup:()=>({args:e}),template:`
      <div id="design-sticky-demo" class="wiki-storybook-flex-column wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--borderNone wiki-storybook-item--overflowAuto">
        <p>
          In today's digital landscape, creating high-quality user interfaces has 
          become a critical aspect of web application development. User interface 
          components must not only be functional but also provide intuitive 
          interaction patterns that enhance the overall user experience. The 
          evolution of web technologies has enabled developers to create more 
          sophisticated and engaging interfaces.
        </p>
        
        <D1MotionSticky
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--green"
          v-bind="args"
          style="top: 0;"
        >
          Sticky Header
        </D1MotionSticky>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information while maintaining context and orientation within
          the document structure. Modern scrollbars should be adaptive, responsive,
          and visually appealing while providing consistent behavior across different
          platforms and devices.
        </p>
        <p>
          Effective scrollbar design takes into account multiple factors ranging
          from performance optimization to accessibility compliance. It's essential
          to ensure smooth animations, proper handling of various input devices, and
          comprehensive keyboard navigation support. Cross-browser compatibility remains
          a top priority, especially when dealing with custom scrollbar implementations
          that need to work consistently across different rendering engines.
        </p>
        <p>
          Users expect scrollbars to work predictably and uniformly throughout
          all parts of an application. This requires thorough testing and optimization
          for various usage scenarios, including mobile devices, desktop computers,
          and touch-enabled interfaces. The component must handle edge cases gracefully
          and provide appropriate feedback for user interactions.
        </p>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information while maintaining context and orientation within
          the document structure. Modern scrollbars should be adaptive, responsive,
          and visually appealing while providing consistent behavior across different
          platforms and devices.
        </p>
        <p>
          Effective scrollbar design takes into account multiple factors ranging
          from performance optimization to accessibility compliance. It's essential
          to ensure smooth animations, proper handling of various input devices, and
          comprehensive keyboard navigation support. Cross-browser compatibility remains
          a top priority, especially when dealing with custom scrollbar implementations
          that need to work consistently across different rendering engines.
        </p>
        <p>
          Users expect scrollbars to work predictably and uniformly throughout
          all parts of an application. This requires thorough testing and optimization
          for various usage scenarios, including mobile devices, desktop computers,
          and touch-enabled interfaces. The component must handle edge cases gracefully
          and provide appropriate feedback for user interactions.
        </p>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information while maintaining context and orientation within
          the document structure. Modern scrollbars should be adaptive, responsive,
          and visually appealing while providing consistent behavior across different
          platforms and devices.
        </p>
        <p>
          Effective scrollbar design takes into account multiple factors ranging
          from performance optimization to accessibility compliance. It's essential
          to ensure smooth animations, proper handling of various input devices, and
          comprehensive keyboard navigation support. Cross-browser compatibility remains
          a top priority, especially when dealing with custom scrollbar implementations
          that need to work consistently across different rendering engines.
        </p>
        <p>
          Users expect scrollbars to work predictably and uniformly throughout
          all parts of an application. This requires thorough testing and optimization
          for various usage scenarios, including mobile devices, desktop computers,
          and touch-enabled interfaces. The component must handle edge cases gracefully
          and provide appropriate feedback for user interactions.
        </p>
      </div>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1MotionSticky
    },
    setup: () => ({
      args
    }),
    template: \`
      <div id="design-sticky-demo" class="wiki-storybook-flex-column wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--borderNone wiki-storybook-item--overflowAuto">
        <p>
          In today's digital landscape, creating high-quality user interfaces has 
          become a critical aspect of web application development. User interface 
          components must not only be functional but also provide intuitive 
          interaction patterns that enhance the overall user experience. The 
          evolution of web technologies has enabled developers to create more 
          sophisticated and engaging interfaces.
        </p>
        
        <D1MotionSticky
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--green"
          v-bind="args"
          style="top: 0;"
        >
          Sticky Header
        </D1MotionSticky>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information while maintaining context and orientation within
          the document structure. Modern scrollbars should be adaptive, responsive,
          and visually appealing while providing consistent behavior across different
          platforms and devices.
        </p>
        <p>
          Effective scrollbar design takes into account multiple factors ranging
          from performance optimization to accessibility compliance. It's essential
          to ensure smooth animations, proper handling of various input devices, and
          comprehensive keyboard navigation support. Cross-browser compatibility remains
          a top priority, especially when dealing with custom scrollbar implementations
          that need to work consistently across different rendering engines.
        </p>
        <p>
          Users expect scrollbars to work predictably and uniformly throughout
          all parts of an application. This requires thorough testing and optimization
          for various usage scenarios, including mobile devices, desktop computers,
          and touch-enabled interfaces. The component must handle edge cases gracefully
          and provide appropriate feedback for user interactions.
        </p>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information while maintaining context and orientation within
          the document structure. Modern scrollbars should be adaptive, responsive,
          and visually appealing while providing consistent behavior across different
          platforms and devices.
        </p>
        <p>
          Effective scrollbar design takes into account multiple factors ranging
          from performance optimization to accessibility compliance. It's essential
          to ensure smooth animations, proper handling of various input devices, and
          comprehensive keyboard navigation support. Cross-browser compatibility remains
          a top priority, especially when dealing with custom scrollbar implementations
          that need to work consistently across different rendering engines.
        </p>
        <p>
          Users expect scrollbars to work predictably and uniformly throughout
          all parts of an application. This requires thorough testing and optimization
          for various usage scenarios, including mobile devices, desktop computers,
          and touch-enabled interfaces. The component must handle edge cases gracefully
          and provide appropriate feedback for user interactions.
        </p>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information while maintaining context and orientation within
          the document structure. Modern scrollbars should be adaptive, responsive,
          and visually appealing while providing consistent behavior across different
          platforms and devices.
        </p>
        <p>
          Effective scrollbar design takes into account multiple factors ranging
          from performance optimization to accessibility compliance. It's essential
          to ensure smooth animations, proper handling of various input devices, and
          comprehensive keyboard navigation support. Cross-browser compatibility remains
          a top priority, especially when dealing with custom scrollbar implementations
          that need to work consistently across different rendering engines.
        </p>
        <p>
          Users expect scrollbars to work predictably and uniformly throughout
          all parts of an application. This requires thorough testing and optimization
          for various usage scenarios, including mobile devices, desktop computers,
          and touch-enabled interfaces. The component must handle edge cases gracefully
          and provide appropriate feedback for user interactions.
        </p>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...q.parameters?.docs?.source}}},J=[`MotionSticky`]})))()}export{W as a,U as i,q as n,Y as r,G as t};