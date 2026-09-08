import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Mt as i,Nt as a,Pt as o,Rt as s,Ut as c,Vt as l,an as u,jt as d,nn as f,qt as p,tt as m,y as h,zt as g}from"./library-BfcLFF_v.js";import{O as _,d as v,i as y,k as b,l as x,m as S,n as C,p as w,t as T,u as E}from"./wiki-BHyzKkJP.js";var D;function O(){return(O=e((()=>{r(),_(),D=class{constructor(e,t,r,i=`headroom`,a){w(this,`props`,void 0),w(this,`refs`,void 0),w(this,`element`,void 0),w(this,`className`,void 0),w(this,`emits`,void 0),w(this,`value`,f(0)),w(this,`disappearsValue`,f(0)),w(this,`isSticky`,d(()=>this.value.value>0)),w(this,`transformValue`,d(()=>Math.min(this.value.value,this.transformThreshold))),w(this,`transformPercent`,d(()=>this.transformThreshold>0?1/this.transformThreshold*this.transformValue.value:0)),w(this,`valuePrevious`,f(0)),w(this,`valueDifference`,d(()=>this.valuePrevious.value-this.value.value)),w(this,`eventScroll`,void 0),w(this,`update`,()=>{this.updateValue().updateData().updateTransform().updateDisappears()}),w(this,`onScroll`,()=>{var e;return this.update(),(e=this.emits)==null||e.call(this,`headroomScroll`,this.eventItem),this}),this.props=e,this.refs=t,this.element=r,this.className=i,this.emits=a,n(async()=>{await g(),p(this.isSticky,()=>this.emits?.call(this,`headroomSticky`,this.eventItem)),p([this.refs.disappears,this.refs.transformThreshold,this.refs.scrollElement],()=>this.toggle(),{immediate:!0})}),l(()=>this.stop())}get expose(){return{isSticky:this.isSticky,getValues:()=>this.eventItem,update:this.update}}get eventElement(){return m(this.props.scrollElement)??window}get eventItem(){return{value:this.value.value,disappearsValue:this.disappearsValue.value,isSticky:this.isSticky.value,transformThreshold:this.transformThreshold,transformValue:this.transformValue.value,transformPercent:this.transformPercent.value,valueDifference:this.valueDifference.value}}get transformThreshold(){return this.props.transformThreshold??0}getDisappearsOffset(){if(!this.element.value)return 0;let{height:e,top:t}=this.getElementRect(),n=this.value.value,r=this.transformThreshold,i=(e+64)*-1,a=t+this.valueDifference.value;return a>0||r>0&&r!==this.transformValue.value?0:a<n*-1?n*-1:a<i?i:a}getElementRect(){let e=this.element.value;if(e){let t=e.getBoundingClientRect();return{height:t.height,top:t.top-this.getScrollElementTop()}}return{height:0,top:0}}getScrollElementTop(){let e=this.eventElement;return e&&e!==window&&`getBoundingClientRect`in e?e.getBoundingClientRect().top:0}getScroll(){let e=this.eventElement;return`scrollY`in e?e.scrollY:e.scrollTop}start(){let e=this.eventElement;return this.eventScroll&&this.eventScroll.stop(),this.eventScroll=new h(e,`scroll`,this.onScroll).start(),this}stop(){var e;return(e=this.eventScroll)==null||e.stop(),this.eventScroll=void 0,this}toggle(){return this.props.disappears||this.transformThreshold>0?(this.updateValue().update(),this.start()):this.stop(),this}updateData(){let e=this.element.value;return e&&(this.isSticky.value?e.dataset.headroom=`sticky`:e.dataset.headroom=`none`,this.valueDifference.value<0?e.dataset.headroomDirection=`down`:this.valueDifference.value>0?e.dataset.headroomDirection=`up`:e.dataset.headroomDirection=`none`,this.transformThreshold>0?e.dataset.headroomTransform=String(this.transformThreshold):delete e.dataset.headroomTransform),this}updateDisappears(){let e=this.element.value;return e&&this.props.disappears?(this.disappearsValue.value=this.getDisappearsOffset(),e.style.setProperty(`--${this.className}-sys-top`,`${this.disappearsValue.value}px`)):this.disappearsValue.value=0,this}updateTransform(){let e=this.element.value;return e&&(e.style.setProperty(`--${this.className}-sys-threshold`,`${this.transformThreshold}px`),e.style.setProperty(`--${this.className}-sys-value`,`${this.transformValue.value}px`),e.style.setProperty(`--${this.className}-sys-percent`,`${this.transformPercent.value}`),e.style.setProperty(`--${this.className}-sys-difference`,`${this.valueDifference.value}px`)),this}updateValue(){return this.valuePrevious.value=this.value.value,this.value.value=this.getScroll(),this.getElementRect(),this}}})))()}var k,A,j;function M(){return(M=e((()=>{O(),r(),_(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){w(this,`props`,void 0),w(this,`refs`,void 0),w(this,`element`,void 0),w(this,`classDesign`,void 0),w(this,`className`,void 0),w(this,`components`,void 0),w(this,`slots`,void 0),w(this,`emits`,void 0),w(this,`headroom`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{HeadroomConstructor:l=D}=c;this.headroom=new l(this.props,this.refs,this.element,this.className,this.emits)}get tag(){return this.props.tag??`div`}},A={tag:`div`,transform:0},j=class extends b{constructor(e,t,n,r=k){super(e,t,n),w(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.headroom.expose}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return o(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var N;function P(){return(P=e((()=>{M(),N={...A}})))()}var F;function I(){return(I=e((()=>{r(),M(),P(),F=a({name:`D1Headroom`,__name:`D1Headroom`,props:s({scrollElement:{},disappears:{type:Boolean},transformThreshold:{},tag:{}},N),emits:[`headroomScroll`,`headroomSticky`],setup(e,{expose:t,emit:n}){let r=n,a=e,o=d(()=>({main:{"d1-headroom":!0,"d1-headroom--disappears":a.disappears}})),s=d(()=>({})),l=new j(`d1.headroom`,a,{emits:r,classes:o,styles:s}),f=l.render();return t(l.expose()),(e,t)=>(c(),i(u(f)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1Headroom`,exportName:`default`,displayName:`D1Headroom`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Headroom/D1Headroom.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{T(),P(),z=[{name:`disappears`,type:`boolean`},{name:`scrollElement`,type:`string | ElementOrWindow`},{name:`tag`,type:`string`},{name:`transformThreshold`,type:`number`}],B=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[{name:`headroomScroll`,properties:[{name:`event`,type:`HeadroomEventItem`}]},{name:`headroomSticky`,properties:[{name:`event`,type:`HeadroomEventItem`}]}],H={component:`Headroom`,props:z,slots:B,events:V,defaults:N,wikiDesign:C}})))()}var W;function G(){return(G=e((()=>{v(),x(),U(),W=new E(H.component,H.props,H.defaults,H.wikiDesign,y,S)})))()}var K=t({Headroom:()=>J,__namedExportsOrder:()=>Y,default:()=>q}),q,J,Y;function X(){return(X=e((()=>{R(),G(),q={title:`Ui/Headroom`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={args:{disappears:!0,transformThreshold:128},render:e=>({components:{D1Headroom:L},setup:()=>({args:e}),template:`
      <div
        id="wiki-descriptions-headroom"
        class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto"
      >
        <D1Headroom
          scrollElement="#wiki-descriptions-headroom"
          class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
          style="height: 48px;"
          v-bind="args"
        >
          Headroom Sticky Header Content
        </D1Headroom>
        <h3>Modern Web Interfaces and User Experience Design</h3>
        <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

        <p>Scrollbars and sticky headers play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars and headers should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

        <h4>Principles of Effective Design Implementation</h4>
        <p>Effective headroom design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of scroll events, and sticky positioning. Cross-browser compatibility remains a top priority, especially when dealing with custom scroll implementations.</p>

        <p>Users expect sticky headers to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

        <h4>Technical Architecture and Scroll Management</h4>
        <p>When developing sticky headers and scroll-responsive components, performance optimization becomes crucial. Scroll event handlers should be lightweight and avoid triggering heavy layout recalculations or layout thrashing. Utilizing CSS custom properties and transform matrices allows hardware-accelerated animations that keep scrolling smooth at high frame rates.</p>

        <p>Dynamic header transformation provides contextual visual cues to users as they explore dense documentation or long articles. As the user scrolls down, the header can shrink or hide to maximize screen real estate, and upon scrolling back up, it smoothly reappears to provide immediate access to primary navigation links and actions.</p>

        <h4>Accessibility and Responsive Adaptation</h4>
        <p>Accessibility considerations should be built into sticky layout components from the beginning. Screen readers and keyboard navigation must operate seamlessly regardless of visual transform states or dynamic positioning shifts. Ensuring proper focus management and semantic landmark roles allows all users to navigate application pages with confidence.</p>

        <p>Responsive design strategies require sticky elements to adapt gracefully across desktop monitors, tablets, and mobile smartphones. Touch interaction patterns, dynamic viewport boundaries, and safe area insets must be accounted for to deliver a unified and polished application experience.</p>
      </div>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    disappears: true,
    transformThreshold: 128
  },
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Headroom
    },
    setup: () => ({
      args
    }),
    template: \`
      <div
        id="wiki-descriptions-headroom"
        class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto"
      >
        <D1Headroom
          scrollElement="#wiki-descriptions-headroom"
          class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
          style="height: 48px;"
          v-bind="args"
        >
          Headroom Sticky Header Content
        </D1Headroom>
        <h3>Modern Web Interfaces and User Experience Design</h3>
        <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

        <p>Scrollbars and sticky headers play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars and headers should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

        <h4>Principles of Effective Design Implementation</h4>
        <p>Effective headroom design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of scroll events, and sticky positioning. Cross-browser compatibility remains a top priority, especially when dealing with custom scroll implementations.</p>

        <p>Users expect sticky headers to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

        <h4>Technical Architecture and Scroll Management</h4>
        <p>When developing sticky headers and scroll-responsive components, performance optimization becomes crucial. Scroll event handlers should be lightweight and avoid triggering heavy layout recalculations or layout thrashing. Utilizing CSS custom properties and transform matrices allows hardware-accelerated animations that keep scrolling smooth at high frame rates.</p>

        <p>Dynamic header transformation provides contextual visual cues to users as they explore dense documentation or long articles. As the user scrolls down, the header can shrink or hide to maximize screen real estate, and upon scrolling back up, it smoothly reappears to provide immediate access to primary navigation links and actions.</p>

        <h4>Accessibility and Responsive Adaptation</h4>
        <p>Accessibility considerations should be built into sticky layout components from the beginning. Screen readers and keyboard navigation must operate seamlessly regardless of visual transform states or dynamic positioning shifts. Ensuring proper focus management and semantic landmark roles allows all users to navigate application pages with confidence.</p>

        <p>Responsive design strategies require sticky elements to adapt gracefully across desktop monitors, tablets, and mobile smartphones. Touch interaction patterns, dynamic viewport boundaries, and safe area insets must be accounted for to deliver a unified and polished application experience.</p>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y=[`Headroom`]})))()}export{G as a,W as i,J as n,X as r,K as t};