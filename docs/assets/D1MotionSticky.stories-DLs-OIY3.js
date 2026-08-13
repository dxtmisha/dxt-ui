import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$ as n,At as r,Bt as i,Et as a,Ht as o,Kt as s,Lt as c,Mt as l,Nt as u,b as d,in as f,jt as p,zt as m}from"./library-CUIf7uCS.js";import{O as h,d as g,k as _,l as v,m as y,n as b,p as x,r as S,t as C,u as w}from"./wiki-wIqBVsyI.js";var T,E,D,O,k;function A(){return(A=e((()=>{a(),h(),T=class{constructor(e,t,n){x(this,`props`,void 0),x(this,`element`,void 0),x(this,`emits`,void 0),this.props=e,this.element=t,this.emits=n}get focusElement(){return n(this.props.elementScroll)??document.scrollingElement??document.documentElement}get eventElement(){return this.props.elementScroll?n(this.props.elementScroll):window}getElement(){return this.element.value}getPositionStyle(){let e=this.element.value;if(e){let t=getComputedStyle(e);if(t.position===`sticky`)return{top:parseInt(t.top.replace(/[^0-9]/gi,``))||0,bottom:parseInt(t.bottom.replace(/[^0-9]/gi,``))||0}}}getPositionElement(){let e=this.element.value,t=this.focusElement;if(e&&t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.round(n.top-(r.top>0?r.top:0));return{top:i<=-.99?0:i,bottom:Math.round((r.bottom>window.innerHeight?window.innerHeight:r.bottom)-n.bottom)}}}setStatus(e){let t=this.element.value;if(t){let r=e?`sticky`:`none`,i=this.getScrollState();if(this.props.classActivity&&t.classList.toggle(this.props.classActivity,e),this.updateSticky(r)){var n;(n=this.emits)==null||n.call(this,`sticky`,e)}this.updateScrollState(i)}}getScrollState(){let e=this.eventElement;return e&&(`scrollTop`in e&&e.scrollTop===0||`scrollY`in e&&e.scrollY===0)?`zero`:`active`}updateSticky(e){let t=this.element.value;return t&&e!==t.dataset.sticky?(t.dataset.sticky=e,!0):!1}updateScrollState(e){let t=this.element.value;return t&&e!==t.dataset.stickyScroll?(t.dataset.stickyScroll=e,!0):!1}},E=class{constructor(e,t){x(this,`props`,void 0),x(this,`stickyElement`,void 0),x(this,`event`,void 0),x(this,`onScroll`,()=>{let e=this.stickyElement.getPositionStyle(),t=this.stickyElement.getPositionElement();e&&t&&this.stickyElement.setStatus(e.top===Math.round(t.top)||e.top===Math.floor(t.top)||e.bottom===Math.ceil(t.bottom)||e.bottom===Math.floor(t.bottom))}),this.props=e,this.stickyElement=t,m(()=>{s([this.stickyElement.element,()=>this.stickyElement.eventElement],()=>{this.make(),requestAnimationFrame(this.onScroll)},{immediate:!0})}),i(()=>{this.stop()})}make(){let e=this.stickyElement.eventElement;e?(this.event=new d(e,`scroll`,this.onScroll),this.event.start()):this.stop()}stop(){var e;(e=this.event)==null||e.stop(),this.event=void 0}makeEvent(e){return new d(e,`scroll`,this.onScroll)}},D=class{constructor(e,t,n,r,i,a,o,s,c={}){x(this,`props`,void 0),x(this,`refs`,void 0),x(this,`classDesign`,void 0),x(this,`className`,void 0),x(this,`components`,void 0),x(this,`slots`,void 0),x(this,`emits`,void 0),x(this,`element`,void 0),x(this,`scroll`,void 0),this.props=e,this.refs=t,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{MotionStickyElementConstructor:l=T,MotionStickyScrollConstructor:u=E}=c;this.element=new l(this.props,n,this.emits),this.scroll=new u(this.props,this.element)}get tag(){return this.props.tag??`div`}},O={tag:`div`},k=class extends _{constructor(e,t,n,r=D){super(e,t,n),x(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return u(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var j;function M(){return(M=e((()=>{A(),j={...O}})))()}var N;function P(){return(P=e((()=>{a(),A(),M(),N=l({name:`D1MotionSticky`,__name:`D1MotionSticky`,props:c({elementScroll:{},classActivity:{},tag:{}},j),emits:[`sticky`],setup(e,{expose:t,emit:n}){let i=n,a=e,s=r(()=>({main:{"d1-motionSticky":!0}})),c=r(()=>({})),l=new k(`d1.motionSticky`,a,{emits:i,classes:s,styles:c}),u=l.render();return t(l.expose()),(e,t)=>(o(),p(f(u)))}})})))()}var F;function I(){return(I=e((()=>{P(),F=N,N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{name:`D1MotionSticky`,exportName:`default`,displayName:`D1MotionSticky`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/MotionSticky/D1MotionSticky.vue`]})})))()}var L,R,z,B;function V(){return(V=e((()=>{C(),M(),L=[{name:`classActivity`,type:`string`},{name:`elementScroll`,type:`string | HTMLElement | Window`},{name:`tag`,type:`string`}],R=[{name:`default`,description:`Slot for default content / Слот для основного содержимого`,properties:[{name:`props`,type:`(any) | undefined`}]}],z=[{name:`sticky`,description:`Event triggered when sticky status changes / Событие при изменении статуса прикрепления`,properties:[{name:`status`,type:`boolean`}]}],B={component:`MotionSticky`,props:L,slots:R,events:z,defaults:j,wikiDesign:b}})))()}var H;function U(){return(U=e((()=>{g(),v(),V(),H=new w(B.component,B.props,B.defaults,B.wikiDesign,S,y)})))()}var W=t({MotionSticky:()=>K,__namedExportsOrder:()=>q,default:()=>G}),G,K,q;function J(){return(J=e((()=>{I(),U(),G={title:`Ui/MotionSticky`,component:F,parameters:{design:`d1`,docs:{description:{component:H.getDescription()}}},argTypes:H.getWiki(),args:H.getValues()},K={render:e=>({components:{D1MotionSticky:F},setup:()=>({args:e}),template:`
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
    `})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`MotionSticky`]})))()}export{U as a,H as i,K as n,J as r,W as t};