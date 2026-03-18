import{d,_ as s}from"./D1MotionAxis-Db5SBOvc.js";import{w as c,W as m,a as u,b as k}from"./wiki-BeTUR4cU.js";import{r}from"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const p=[{name:"animationHeight",type:"boolean"},{name:"axis",type:"string",option:["x","y","z"]},{name:"direction",type:"string",option:["next","back","auto"]},{name:"inDom",type:"boolean"},{name:"inDomSlide",type:"string[]"},{name:"modelSelected",type:"string"},{name:"onUpdate:modelSelected",type:"(value: string) => void"},{name:"onUpdate:selected",type:"(value: string) => void"},{name:"selected",type:"string"}],n={component:"MotionAxis",props:p,defaults:d,wikiDesign:c},l=new m(n.component,n.props,n.defaults,n.wikiDesign,u,k),b={title:"Ui/MotionAxis",component:s,parameters:{design:"d1",docs:{description:{component:l.getDescription()}}},argTypes:l.getWiki(),args:l.getValues()},t={render:a=>({components:{D1MotionAxis:s},setup:()=>({args:a}),template:`
      <D1MotionAxis v-bind="args">
      <template #slide1>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </template>
      <template #slide2>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </template>
      <template #slide3>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
      </template>
    </D1MotionAxis>
    `})},e={name:"Базовое использование",render:()=>({components:{D1MotionAxis:s},setup(){return{selected:r("slide1")}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Short content.</p>
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                <p>Additional paragraph for extra height.</p>
              </div>
            </template>
          </D1MotionAxis>
        </div>
    `})},i={name:"Управление скроллом",render:()=>({components:{D1MotionAxis:s},setup(){return{selected:r("short")}},template:`
        <div class="wiki-storybook-flex-column d1-motionAxis__scroll">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'short'">short</button>
            <button class="wiki-storybook-button" @click="selected = 'long'">long</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #short>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Short content
              </div>
            </template>
            <template #long>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Long content that causes scrolling.<br>
                Scroll down to see more.<br>
                ...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>
                End of content.
              </div>
            </template>
          </D1MotionAxis>
        </div>
    `})},o={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1MotionAxis:s},setup(){return{selected:r("slide1")}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">Select Slide 3</button>
          </div>
          <div class="wiki-storybook-item--padding">
            Current value: {{ selected }}
          </div>

          <D1MotionAxis v-model:selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 3
              </div>
            </template>
          </D1MotionAxis>
        </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1MotionAxis
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1MotionAxis v-bind="args">
      <template #slide1>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </template>
      <template #slide2>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </template>
      <template #slide3>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
      </template>
    </D1MotionAxis>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1MotionAxis
    },
    setup() {
      const selected = ref('slide1');
      return {
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Short content.</p>
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                <p>Additional paragraph for extra height.</p>
              </div>
            </template>
          </D1MotionAxis>
        </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Управление скроллом',
  render: () => ({
    components: {
      D1MotionAxis
    },
    setup() {
      const selected = ref('short');
      return {
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column d1-motionAxis__scroll">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'short'">short</button>
            <button class="wiki-storybook-button" @click="selected = 'long'">long</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #short>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Short content
              </div>
            </template>
            <template #long>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Long content that causes scrolling.<br>
                Scroll down to see more.<br>
                ...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>
                End of content.
              </div>
            </template>
          </D1MotionAxis>
        </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1MotionAxis
    },
    setup() {
      const selected = ref('slide1');
      return {
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">Select Slide 3</button>
          </div>
          <div class="wiki-storybook-item--padding">
            Current value: {{ selected }}
          </div>

          <D1MotionAxis v-model:selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 3
              </div>
            </template>
          </D1MotionAxis>
        </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const y=["MotionAxis","MotionAxisBasic","MotionAxisScroll","MotionAxisVModel"],h=Object.freeze(Object.defineProperty({__proto__:null,MotionAxis:t,MotionAxisBasic:e,MotionAxisScroll:i,MotionAxisVModel:o,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{h as M,t as a,l as b,e as c,i as d,o as e};
