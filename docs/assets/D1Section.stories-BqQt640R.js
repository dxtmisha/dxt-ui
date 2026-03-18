import{D as b,E as D,F as y,I as f,c as d,J as k}from"./iframe-okvuAVTt.js";import{T as v,k as w}from"./BlockDesign-DHCkcwP1-DrccDTew.js";import{w as I,W as T,a as _,b as x}from"./wiki-BeTUR4cU.js";import"./jsx-runtime-u17CrQMm.js";class B extends w{}const H={tag:"section",tagHeader:"h2"};class W extends v{constructor(s,c,r,l=B){super(s,c,r,l)}}const u={...H},e=b({name:"D1Section",__name:"D1Section",props:f({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},u),setup(t,{expose:s,emit:c}){const r=c,l=t,g=d(()=>({main:{"d1-section":!0}})),S=d(()=>({})),m=new W("d1.section",l,{emits:r,classes:g,styles:S}),h=m.render();return s(m.expose()),(P,M)=>(k(),D(y(h)))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{name:"D1Section",exportName:"default",displayName:"D1Section",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Section/D1Section.vue"]});const U=[{name:"caption",type:"string | number"},{name:"captionDecorative",type:"boolean"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"headline",type:"string"},{name:"icon",type:"IconValue<IconPropsBasic>"},{name:"iconAttrs",type:"ConstrBind<IconPropsBasic>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"selected",type:"boolean"},{name:"tag",type:"string"},{name:"tagHeader",type:"string"}],a={component:"Section",props:U,defaults:u,wikiDesign:I},p=new T(a.component,a.props,a.defaults,a.wikiDesign,_,x),C={title:"Ui/Section",component:e,parameters:{design:"d1",docs:{description:{component:p.getDescription()}}},argTypes:p.getWiki(),args:p.getValues()},n={render:t=>({components:{D1Section:e},setup:()=>({args:t}),template:`
      <D1Section v-bind="args">
        <p>
          The Section component is a fundamental building block for structuring web pages.
          It defaults to using the <code>&lt;section&gt;</code> HTML tag, making it semantically appropriate for grouping thematic content.
        </p>
        <p>
          It provides a rich set of features for content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h2&gt;</code>, which fits the typical document outline structure.
        </p>
        <p>
          Use Section to divide your page into distinct thematic areas, improving both the visual structure and the accessibility of your application.
        </p>
      </D1Section>
    `})},o={name:"Базовые",render:()=>({components:{D1Section:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Section>
            <p>Generic section content without header.</p>
          </D1Section>
          <D1Section label="Contact Information" description="Get in touch with us">
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </D1Section>
          <D1Section headline="Our Services" label="What we do">
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
            </ul>
          </D1Section>
        </div>
    `})},i={name:"Использование слотов",render:()=>({components:{D1Section:e},template:`
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Section>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Section
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Section v-bind="args">
        <p>
          The Section component is a fundamental building block for structuring web pages.
          It defaults to using the <code>&lt;section&gt;</code> HTML tag, making it semantically appropriate for grouping thematic content.
        </p>
        <p>
          It provides a rich set of features for content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h2&gt;</code>, which fits the typical document outline structure.
        </p>
        <p>
          Use Section to divide your page into distinct thematic areas, improving both the visual structure and the accessibility of your application.
        </p>
      </D1Section>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Section
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Section>
            <p>Generic section content without header.</p>
          </D1Section>
          <D1Section label="Contact Information" description="Get in touch with us">
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </D1Section>
          <D1Section headline="Our Services" label="What we do">
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
            </ul>
          </D1Section>
        </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Section
    },
    template: \`
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Section>
    \`
  })
}`,...i.parameters?.docs?.source}}};const O=["Section","SectionBasic","SectionSlots"],L=Object.freeze(Object.defineProperty({__proto__:null,Section:n,SectionBasic:o,SectionSlots:i,__namedExportsOrder:O,default:C},Symbol.toStringTag,{value:"Module"}));export{L as S,n as a,p as b,o as c,i as d};
