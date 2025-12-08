import{d as n,_ as o}from"./D1Skeleton-_eyYcCpr.js";import{W as d,w as r,a,b as l}from"./wiki-fb_eBW86.js";import"./iframe-BlCC38XJ.js";import"./jsx-runtime-D_zvdyIk.js";import{i as k}from"./media-CRNZHAuU.js";const c=[{name:"active",type:"boolean"}],i=new d("Skeleton",c,n,r,a,l),v={title:"Ui/Skeleton",component:o,parameters:{design:"d1",docs:{description:{component:i.getDescription()}}},argTypes:i.getWiki(),args:i.getValues()},e={render:s=>({components:{D1Skeleton:o},setup:()=>({args:s}),template:`
      <D1Skeleton v-bind="args">
      <div class="wiki-storybook-card d1-skeleton__background">
        <div class="wiki-storybook-card__image d1-skeleton__background" style="background-image: url('${k}')"/>
        <div class="wiki-storybook-card__content">
          <div>
            <div class="wiki-storybook-card__label d1-skeleton__text">Product Name</div>
            <div class="wiki-storybook-card__information d1-skeleton__textVariant">Short description</div>
          </div>
          <div class="wiki-storybook-card__description d1-skeleton__text">
            Detailed product description that tells about its main features and advantages.
          </div>
          <div class="wiki-storybook-card__actions">
            <button class="wiki-storybook-button d1-skeleton__background">Buy Now</button>
          </div>
        </div>
      </div>
    </D1Skeleton>
    `})},t={name:"Базовое использование",render:()=>({components:{D1Skeleton:o},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">text</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">textVariant</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">background</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__background"
                style="width: 128px; height: 128px;"
              >
                Text placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">backgroundVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__backgroundVariant"
                style="width: 128px; height: 128px;"
              >
                Background Variant
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">border</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__border"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">borderVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__borderVariant"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border Variant
              </div>
            </D1Skeleton>
          </div>
        </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Skeleton
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Skeleton v-bind="args">
      <div class="wiki-storybook-card d1-skeleton__background">
        <div class="wiki-storybook-card__image d1-skeleton__background" style="background-image: url('\${image1}')"/>
        <div class="wiki-storybook-card__content">
          <div>
            <div class="wiki-storybook-card__label d1-skeleton__text">Product Name</div>
            <div class="wiki-storybook-card__information d1-skeleton__textVariant">Short description</div>
          </div>
          <div class="wiki-storybook-card__description d1-skeleton__text">
            Detailed product description that tells about its main features and advantages.
          </div>
          <div class="wiki-storybook-card__actions">
            <button class="wiki-storybook-button d1-skeleton__background">Buy Now</button>
          </div>
        </div>
      </div>
    </D1Skeleton>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1Skeleton
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">text</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">textVariant</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">background</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__background"
                style="width: 128px; height: 128px;"
              >
                Text placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">backgroundVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__backgroundVariant"
                style="width: 128px; height: 128px;"
              >
                Background Variant
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">border</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__border"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">borderVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__borderVariant"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border Variant
              </div>
            </D1Skeleton>
          </div>
        </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};const b=["Skeleton","SkeletonBasic"],u=Object.freeze(Object.defineProperty({__proto__:null,Skeleton:e,SkeletonBasic:t,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{u as S,e as a,i as b,t as c};
