import{d as t,_ as o}from"./D1Scrollbar-CmnNCCAt.js";import{W as a,w as r,a as s,b as l}from"./wiki-BNdC282o.js";import"./iframe-BGVIV1-M.js";import"./jsx-runtime-D_zvdyIk.js";const c=[{name:"divider",type:"boolean"},{name:"dividerBottom",type:"boolean"},{name:"dividerHide",type:"boolean"},{name:"dividerTop",type:"boolean"},{name:"inverse",type:"boolean"},{name:"standard",type:"boolean"},{name:"tag",type:"string"},{name:"visible",type:"boolean"}],i=new a("Scrollbar",c,t,r,s,l),p={title:"Ui/Scrollbar",component:o,parameters:{design:"d1",docs:{description:{component:i.getDescription()}}},argTypes:i.getWiki(),args:i.getValues()},e={render:n=>({components:{D1Scrollbar:o},setup:()=>({args:n}),template:`
      <D1Scrollbar
        class="wiki-storybook-item--widescreen wiki-storybook-item--squared--sm"
        v-bind="args"
      >
        <div class="wiki-storybook-scrollbar-content">
          <h3>Modern Web Interfaces and User Experience Design</h3>
          <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

          <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

          <h4>Principles of Effective Design Implementation</h4>
          <p>Effective scrollbar design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of various input devices, and comprehensive keyboard navigation support. Cross-browser compatibility remains a top priority, especially when dealing with custom scrollbar implementations that need to work consistently across different rendering engines.</p>

          <p>Users expect scrollbars to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

          <h4>Technical Implementation Considerations</h4>
          <p>When developing scrollbar components, it's crucial to consider rendering performance, especially when working with large datasets or dynamically generated content. Content virtualization, lazy loading strategies, and DOM operation optimization help ensure smooth performance even on less powerful devices. Memory management becomes particularly important in single-page applications where components may be mounted and unmounted frequently.</p>

          <p>Modern frameworks provide numerous tools for creating customizable scrollbars, but it's important to find the right balance between functionality and ease of use. The component should be easily integrable into existing projects while supporting various configuration options and customization possibilities. API design should be intuitive and follow established patterns within the framework ecosystem.</p>

          <h4>Future Trends and Accessibility</h4>
          <p>The future of web development is moving towards creating more inclusive and accessible interfaces, where every element, including scrollbars, contributes to improving the overall user experience. This includes support for screen readers, high contrast modes, and reduced motion preferences. Progressive enhancement ensures that the scrollbar functionality works across all user scenarios.</p>

          <p>Emerging technologies like CSS container queries and new scrolling APIs continue to expand the possibilities for creating more sophisticated scrolling experiences. The integration of these technologies with existing design systems requires careful planning and consideration of backward compatibility.</p>
        </div>
      </D1Scrollbar>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Scrollbar
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Scrollbar
        class="wiki-storybook-item--widescreen wiki-storybook-item--squared--sm"
        v-bind="args"
      >
        <div class="wiki-storybook-scrollbar-content">
          <h3>Modern Web Interfaces and User Experience Design</h3>
          <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

          <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

          <h4>Principles of Effective Design Implementation</h4>
          <p>Effective scrollbar design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of various input devices, and comprehensive keyboard navigation support. Cross-browser compatibility remains a top priority, especially when dealing with custom scrollbar implementations that need to work consistently across different rendering engines.</p>

          <p>Users expect scrollbars to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

          <h4>Technical Implementation Considerations</h4>
          <p>When developing scrollbar components, it's crucial to consider rendering performance, especially when working with large datasets or dynamically generated content. Content virtualization, lazy loading strategies, and DOM operation optimization help ensure smooth performance even on less powerful devices. Memory management becomes particularly important in single-page applications where components may be mounted and unmounted frequently.</p>

          <p>Modern frameworks provide numerous tools for creating customizable scrollbars, but it's important to find the right balance between functionality and ease of use. The component should be easily integrable into existing projects while supporting various configuration options and customization possibilities. API design should be intuitive and follow established patterns within the framework ecosystem.</p>

          <h4>Future Trends and Accessibility</h4>
          <p>The future of web development is moving towards creating more inclusive and accessible interfaces, where every element, including scrollbars, contributes to improving the overall user experience. This includes support for screen readers, high contrast modes, and reduced motion preferences. Progressive enhancement ensures that the scrollbar functionality works across all user scenarios.</p>

          <p>Emerging technologies like CSS container queries and new scrolling APIs continue to expand the possibilities for creating more sophisticated scrolling experiences. The integration of these technologies with existing design systems requires careful planning and consideration of backward compatibility.</p>
        </div>
      </D1Scrollbar>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};const d=["Scrollbar"],b=Object.freeze(Object.defineProperty({__proto__:null,Scrollbar:e,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{b as S,e as a,i as b};
