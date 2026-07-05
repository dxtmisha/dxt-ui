import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Gt as i,Jt as a,Kt as o,Lt as s,N as c,Rt as l,Ut as u,Xt as d,an as f,b as p,d as m,u as h,zt as g}from"./iframe-B-LNhFWZ.js";import{d as _,f as v,m as y,n as b,o as x,p as S,s as C,t as w,u as T}from"./wiki-DgltPJFG.js";var E,D,O,k,A,j=t((()=>{v(),r(),h(),E=class{constructor(e,t,n){S(this,`props`,void 0),S(this,`element`,void 0),S(this,`emits`,void 0),this.props=e,this.element=t,this.emits=n}get focusElement(){return p(this.props.elementScroll)??document.scrollingElement??document.documentElement}get eventElement(){return this.props.elementScroll?p(this.props.elementScroll):window}getElement(){return this.element.value}getPositionStyle(){let e=this.element.value;if(e){let t=getComputedStyle(e);if(t.position===`sticky`)return{top:parseInt(t.top.replace(/[^0-9]/gi,``))||0,bottom:parseInt(t.bottom.replace(/[^0-9]/gi,``))||0}}}getPositionElement(){let e=this.element.value,t=this.focusElement;if(e&&t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.round(n.top-(r.top>0?r.top:0));return{top:i<=-.99?0:i,bottom:Math.round((r.bottom>window.innerHeight?window.innerHeight:r.bottom)-n.bottom)}}}setStatus(e){let t=this.element.value;if(t){let r=e?`sticky`:`none`,i=this.getScrollState();if(this.props.classActivity&&t.classList.toggle(this.props.classActivity,e),this.updateSticky(r)){var n;(n=this.emits)==null||n.call(this,`sticky`,e)}this.updateScrollState(i)}}getScrollState(){let e=this.eventElement;return e&&(`scrollTop`in e&&e.scrollTop===0||`scrollY`in e&&e.scrollY===0)?`zero`:`active`}updateSticky(e){let t=this.element.value;return t&&e!==t.dataset.sticky?(t.dataset.sticky=e,!0):!1}updateScrollState(e){let t=this.element.value;return t&&e!==t.dataset.stickyScroll?(t.dataset.stickyScroll=e,!0):!1}},D=class{constructor(e,t){S(this,`props`,void 0),S(this,`stickyElement`,void 0),S(this,`event`,void 0),S(this,`onScroll`,()=>{let e=this.stickyElement.getPositionStyle(),t=this.stickyElement.getPositionElement();e&&t&&(console.log(e.top,e.bottom,t.top,t.bottom),this.stickyElement.setStatus(e.top===Math.round(t.top)||e.top===Math.floor(t.top)||e.bottom===Math.ceil(t.bottom)||e.bottom===Math.floor(t.bottom)))}),this.props=e,this.stickyElement=t,i(()=>{d([this.stickyElement.element,()=>this.stickyElement.eventElement],()=>{this.make(),requestAnimationFrame(this.onScroll)},{immediate:!0})}),o(()=>{this.stop()})}make(){let e=this.stickyElement.eventElement;console.log(`element`,e),e?(this.event=new c(e,`scroll`,this.onScroll),this.event.start()):this.stop()}stop(){var e;(e=this.event)==null||e.stop(),this.event=void 0}makeEvent(e){return new c(e,`scroll`,this.onScroll)}},O=class{constructor(e,t,n,r,i,a,o,s,c={}){S(this,`props`,void 0),S(this,`refs`,void 0),S(this,`classDesign`,void 0),S(this,`className`,void 0),S(this,`components`,void 0),S(this,`slots`,void 0),S(this,`emits`,void 0),S(this,`element`,void 0),S(this,`scroll`,void 0),this.props=e,this.refs=t,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{MotionStickyElementConstructor:l=E,MotionStickyScrollConstructor:u=D}=c;this.element=new l(this.props,n,this.emits),this.scroll=new u(this.props,this.element)}get tag(){return this.props.tag??`div`}},k={tag:`div`},A=class extends m{constructor(e,t,n,r=O){super(e,t,n),S(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return n(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})),M,N=t((()=>{j(),M={...k}})),P=t((()=>{})),F,I=t((()=>{r(),j(),N(),P(),F=g({name:`D1MotionSticky`,__name:`D1MotionSticky`,props:u({elementScroll:{},classActivity:{},tag:{}},M),emits:[`sticky`],setup(e,{expose:t,emit:n}){let r=new A(`d1.motionSticky`,e,{emits:n,classes:s(()=>({main:{"d1-motionSticky":!0}})),styles:s(()=>({}))}),i=r.render();return t(r.expose()),(e,t)=>(a(),l(f(i)))}})})),L,R=t((()=>{I(),I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1MotionSticky`,exportName:`default`,displayName:`D1MotionSticky`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/MotionSticky/D1MotionSticky.vue`]})})),z,B,V,H,U=t((()=>{w(),N(),z=[{name:`classActivity`,type:`string`},{name:`elementScroll`,type:`string | HTMLElement | Window`},{name:`tag`,type:`string`}],B=[{name:`default`,description:`Slot for default content / Слот для основного содержимого`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[{name:`sticky`,description:`Event triggered when sticky status changes / Событие при изменении статуса прикрепления`,properties:[{name:`status`,type:`boolean`}]}],H={component:`MotionSticky`,props:z,slots:B,events:V,defaults:M,wikiDesign:b}})),W,G=t((()=>{_(),C(),U(),W=new T(H.component,H.props,H.defaults,H.wikiDesign,x,y)})),K=e({MotionSticky:()=>J,__namedExportsOrder:()=>Y,default:()=>q}),q,J,Y,X=t((()=>{R(),G(),q={title:`Ui/MotionSticky`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1MotionSticky:L},setup:()=>({args:e}),template:`
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
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`MotionSticky`]}));X();export{J as MotionSticky,Y as __namedExportsOrder,q as default,G as i,X as n,W as r,K as t};