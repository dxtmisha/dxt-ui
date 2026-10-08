import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,J as i,Mt as a,Nt as o,Pt as s,Rt as c,Ut as l,Vt as u,i as d,in as f,jt as p,qt as m}from"./library-C6UyfMBX.js";import{D as h,d as g,f as _,g as v,i as y,n as b,s as x,t as S,u as C}from"./wiki-Cqdd-d3l.js";var w,T,E,D,O;function k(){return(k=e((()=>{r(),h(),w=class{props;element;emits;constructor(e,t,n){this.props=e,this.element=t,this.emits=n}get focusElement(){return i(this.props.elementScroll)??document.scrollingElement??document.documentElement}get eventElement(){return this.props.elementScroll?i(this.props.elementScroll):window}getElement(){return this.element.value}getPositionStyle(){let e=this.element.value;if(e){let t=getComputedStyle(e);if(t.position===`sticky`)return{top:parseInt(t.top.replace(/[^0-9]/gi,``))||0,bottom:parseInt(t.bottom.replace(/[^0-9]/gi,``))||0}}}getPositionElement(){let e=this.element.value,t=this.focusElement;if(e&&t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.round(n.top-(r.top>0?r.top:0));return{top:i<=-.99?0:i,bottom:Math.round((r.bottom>window.innerHeight?window.innerHeight:r.bottom)-n.bottom)}}}setStatus(e){let t=this.element.value;if(t){let n=e?`sticky`:`none`,r=this.getScrollState();this.props.classActivity&&t.classList.toggle(this.props.classActivity,e),this.updateSticky(n)&&this.emits?.(`sticky`,e),this.updateScrollState(r)}}getScrollState(){let e=this.eventElement;return e&&(`scrollTop`in e&&e.scrollTop===0||`scrollY`in e&&e.scrollY===0)?`zero`:`active`}updateSticky(e){let t=this.element.value;return t&&e!==t.dataset.sticky?(t.dataset.sticky=e,!0):!1}updateScrollState(e){let t=this.element.value;return t&&e!==t.dataset.stickyScroll?(t.dataset.stickyScroll=e,!0):!1}},T=class{props;stickyElement;event;constructor(e,t){this.props=e,this.stickyElement=t,m([this.stickyElement.element,()=>this.stickyElement.eventElement],this.update),n(this.update),u(()=>{this.stop()})}update=()=>{this.make(),requestAnimationFrame(this.onScroll)};onScroll=()=>{let e=this.stickyElement.getPositionStyle(),t=this.stickyElement.getPositionElement();e&&t&&this.stickyElement.setStatus(e.top===Math.round(t.top)||e.top===Math.floor(t.top)||e.bottom===Math.ceil(t.bottom)||e.bottom===Math.floor(t.bottom))};make(){let e=this.stickyElement.eventElement;e?(this.event=new d(e,`scroll`,this.onScroll),this.event.start()):this.stop()}stop(){this.event?.stop(),this.event=void 0}makeEvent(e){return new d(e,`scroll`,this.onScroll)}},E=class{props;refs;classDesign;className;components;slots;emits;element;scroll;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{MotionStickyElementConstructor:l=w,MotionStickyScrollConstructor:u=T}=c;this.element=new l(this.props,n,this.emits),this.scroll=new u(this.props,this.element)}get tag(){return this.props.tag??`div`}},D={tag:`div`},O=class extends v{item;constructor(e,t,n,r=E){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return s(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var A;function j(){return(j=e((()=>{k(),A={...D}})))()}var M;function N(){return(N=e((()=>{r(),k(),j(),M=o({name:`D1MotionSticky`,__name:`D1MotionSticky`,props:c({elementScroll:{},classActivity:{},tag:{}},A),emits:[`sticky`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=p(()=>({main:{"d1-motionSticky":!0}})),s=p(()=>({})),c=new O(`d1.motionSticky`,i,{emits:r,classes:o,styles:s}),u=c.render();return t(c.expose()),(e,t)=>(l(),a(f(u)))}})})))()}var P;function F(){return(F=e((()=>{N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{name:`D1MotionSticky`,exportName:`default`,displayName:`D1MotionSticky`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/MotionSticky/D1MotionSticky.vue`]})})))()}var I,L,R,z;function B(){return(B=e((()=>{S(),j(),I=[{name:`classActivity`,type:`string`},{name:`elementScroll`,type:`string | HTMLElement | Window`},{name:`tag`,type:`string`}],L=[{name:`default`,description:`Slot for default content / Слот для основного содержимого`,properties:[{name:`props`,type:`(any) | undefined`}]}],R=[{name:`sticky`,description:`Event triggered when sticky status changes / Событие при изменении статуса прикрепления`,properties:[{name:`status`,type:`boolean`}]}],z={component:`MotionSticky`,props:I,slots:L,events:R,defaults:A,wikiDesign:b}})))()}var V;function H(){return(H=e((()=>{g(),x(),B(),V=new C(z.component,z.props,z.defaults,z.wikiDesign,y,_)})))()}var U=t({MotionSticky:()=>G,__namedExportsOrder:()=>K,default:()=>W}),W,G,K;function q(){return(q=e((()=>{F(),H(),W={title:`Ui/MotionSticky`,component:P,parameters:{design:`d1`,docs:{description:{component:V.getDescription()}}},argTypes:V.getWiki(),args:V.getValues()},G={render:e=>({components:{D1MotionSticky:P},setup:()=>({args:e}),template:`
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
    `})},K=[`MotionSticky`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}}})))()}export{H as a,V as i,G as n,q as r,U as t};