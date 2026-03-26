import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,i,l as a,m as o,n as s,t as c,u as l}from"./wiki-DiKtF90Q.js";import{i as u,n as d,r as f,t as p}from"./D1Skeleton-CXvijoBv.js";var m,h,g=e((()=>{l(),c(),u(),m=[{name:`active`,type:`boolean`}],h={component:`Skeleton`,props:m,defaults:f,wikiDesign:s}})),_,v=e((()=>{l(),n(),g(),_=new r(h.component,h.props,h.defaults,h.wikiDesign,a,o)})),y=t({Skeleton:()=>x,SkeletonBasic:()=>S,__namedExportsOrder:()=>C,default:()=>b}),b,x,S,C,w=e((()=>{d(),v(),n(),b={title:`Ui/Skeleton`,component:p,parameters:{design:`d1`,docs:{description:{component:_.getDescription()}}},argTypes:_.getWiki(),args:_.getValues()},x={render:e=>({components:{D1Skeleton:p},setup:()=>({args:e}),template:`
      <D1Skeleton v-bind="args">
      <div class="wiki-storybook-card d1-skeleton__background">
        <div class="wiki-storybook-card__image d1-skeleton__background" style="background-image: url('${i}')"/>
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
    `})},S={name:`Базовое использование`,render:()=>({components:{D1Skeleton:p},template:`
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
    `})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Skeleton`,`SkeletonBasic`]}));w();export{x as Skeleton,S as SkeletonBasic,C as __namedExportsOrder,b as default,v as i,w as n,_ as r,y as t};