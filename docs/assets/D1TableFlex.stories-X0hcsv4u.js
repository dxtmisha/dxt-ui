import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,in as s,jt as c,tn as l}from"./library-CUIf7uCS.js";import{d as u,l as d,m as f,n as p,r as m,t as h,u as g}from"./wiki-wIqBVsyI.js";import{n as _,t as v}from"./AriaStaticInclude-CI16qWQ7-QE8vrVOk.js";import{a as y,i as b,n as x,r as S,t as C}from"./ScrollSticky-BPG2VNcm.js";import{n as w,t as T}from"./D1TableFlexRecord-CE7TxbAF.js";var E,D,O;function k(){return(k=e((()=>{v(),b(),E={lazy:!0,page:1,stickyScrollBottom:!0},D=class extends S{get tag(){return`div`}get tagCaption(){return`div`}get tagColgroup(){}get tagHeader(){return`div`}get tagFoot(){return`div`}get tagItems(){return`div`}get binds(){return{...super.binds,..._.role(`table`)}}},O=class extends y{constructor(e,t,n,r=D){super(e,t,n,r)}initClasses(){return{main:{},table:this.getSubClass(`table`),colgroup:this.getSubClass(`colgroup`),col:this.getSubClass(`col`),header:this.getSubClass(`header`),foot:this.getSubClass(`foot`),items:this.getSubClass(`items`),caption:this.getSubClass(`caption`)}}}})))()}var A;function j(){return(j=e((()=>{w(),A=T})))()}var M;function N(){return(N=e((()=>{k(),M={...E}})))()}var P;function F(){return(F=e((()=>{r(),k(),x(),j(),N(),P=o({name:`D1TableFlex`,__name:`D1TableFlex`,props:a({caption:{},captionDecorative:{type:Boolean},list:{},search:{},searchColumns:{},searchOptions:{},sort:{},sortDir:{},sortFunction:{type:Function},page:{},rows:{},stickyScrollBottom:{type:Boolean},isSkeleton:{type:Boolean},stickyLeft:{},tableItemAttrs:{},tableItemColumnAttrs:{},selected:{},stickyTop:{},keyValue:{},lazy:{type:Boolean},defaultHeight:{},tableRecordAttrs:{},tableRowAttrs:{},columns:{},columnsWidth:{},header:{},foot:{},headerTop:{type:Boolean},captionBottom:{type:Boolean},bleed:{type:Boolean}},M),emits:[`sort`],setup(e,{expose:t,emit:r}){let a=r,o=e,l=n(()=>({main:{"d1-tableFlex":!0,"d1-tableFlex--headerTop":o.headerTop,"d1-tableFlex--captionBottom":o.captionBottom,"d1-tableFlex--bleed":o.bleed}})),u=n(()=>({})),d=new O(`d1.tableFlex`,o,{emits:a,classes:l,styles:u,components:{tableRecord:A,scrollSticky:C}}),f=d.render();return t(d.expose()),(e,t)=>(i(),c(s(f)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1TableFlex`,exportName:`default`,displayName:`D1TableFlex`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/TableFlex/D1TableFlex.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{h(),N(),R=[{name:`bleed`,type:`boolean`},{name:`caption`,type:`string | number`},{name:`captionBottom`,type:`boolean`},{name:`captionDecorative`,type:`boolean`},{name:`columns`,type:`string[]`},{name:`columnsWidth`,type:`Record<string, string | number>`},{name:`defaultHeight`,type:`string | number`},{name:`foot`,type:`TableHeader<TableFlexHeaderItemProps> | TableHeaders<TableFlexHeaderItemProps>`},{name:`header`,type:`TableHeader<TableFlexHeaderItemProps> | TableHeaders<TableFlexHeaderItemProps>`},{name:`headerTop`,type:`boolean`},{name:`isSkeleton`,type:`boolean`},{name:`keyValue`,type:`string`},{name:`lazy`,type:`boolean`},{name:`list`,type:`(TableFlexItemProps[] & TableList<TableFlexItemProps>)`},{name:`page`,type:`string | number`},{name:`rows`,type:`string | number`},{name:`search`,type:`string`},{name:`searchColumns`,type:`string[]`},{name:`searchOptions`,type:`SearchOptions`},{name:`selected`,type:`string | string[]`},{name:`sort`,type:`SortColumn`},{name:`sortDir`,type:`string`,option:[`asc`,`desc`]},{name:`sortFunction`,type:`SortFunction<TableFlexItemProps>`},{name:`stickyLeft`,type:`string[]`},{name:`stickyScrollBottom`,type:`boolean`},{name:`stickyTop`,type:`string[]`},{name:`tableItemAttrs`,type:`ConstrBind<TableFlexItemProps>`},{name:`tableItemColumnAttrs`,type:`Record<string, ConstrBind<TableFlexItemProps>>`},{name:`tableRecordAttrs`,type:`ConstrBind<TableFlexRecordProps>`},{name:`tableRowAttrs`,type:`Record<string, ConstrBind<TableFlexRecordProps>>`}],z=[{name:`body`,description:`Slot for custom table body content /
Слот для пользовательского содержимого тела таблицы`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`foot`,description:`Slot for custom table footer content /
Слот для пользовательского содержимого подвала таблицы`,properties:[{name:`props`,type:`({ columns: string[]; }) | undefined`}]},{name:`header`,description:`Slot for custom table header content /
Слот для пользовательского содержимого шапки таблицы`,properties:[{name:`props`,type:`({ columns: string[]; }) | undefined`}]},{name:`items`,description:`Slot for custom table items content /
Слот для пользовательского содержимого элементов таблицы`,properties:[{name:`props`,type:`({ columns: string[]; }) | undefined`}]}],B=[{name:`sort`,description:`Event triggered when sort button is clicked / Событие, вызываемое при клике по кнопке сортировки`,properties:[{name:`item`,type:`SortColumnItem`}]}],V={component:`TableFlex`,props:R,slots:z,events:B,defaults:M,wikiDesign:p}})))()}var U;function W(){return(W=e((()=>{u(),d(),H(),U=new g(V.component,V.props,V.defaults,V.wikiDesign,m,f)})))()}var G=t({TableFlex:()=>q,TableFlexBasic:()=>J,TableFlexSearch:()=>Z,TableFlexSlots:()=>Y,TableFlexSort:()=>X,__namedExportsOrder:()=>Q,default:()=>K}),K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{L(),W(),r(),K={title:`Ui/TableFlex`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={},J={name:`Базовый`,render:()=>({components:{D1TableFlex:I},template:`
        <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding" style="max-height: 360px;">
          <D1TableFlex
            :columns="['id', 'name', 'status', 'role', 'email', 'age', 'country', 'city', 'salary']"
            :headerTop="true"
            :stickyLeft="['name']"
            :header="[
              {
                id: 'ID',
                name: 'Name',
                status: 'Status',
                role: 'Role',
                email: 'Email',
                age: 'Age',
                country: 'Country',
                city: 'City',
                salary: 'Salary'
              }
            ]"
            :tableItemColumnAttrs="{
              id: { align: 'right' },
              email: { colspan: '3' },
              age: { align: 'right' },
              salary: { align: 'right' }
            }"
            :list="[
              { id: '1', name: 'Alice Smith', status: 'Active', role: 'Developer', email: 'alice.smith@example.com', age: 28, country: 'USA', city: 'New York', salary: '$9,500' },
              { id: '2', name: 'Bob Johnson', status: 'Pending', role: 'Designer', email: 'bob.johnson@example.com', age: 34, country: 'UK', city: 'London', salary: '$8,500' },
              { id: '3', name: 'Charlie Brown', status: 'Inactive', role: 'Manager', email: 'charlie.brown@example.com', age: 42, country: 'France', city: 'Paris', salary: '$12,000' },
              { id: '4', name: 'Diana Prince', status: 'Active', role: 'Analyst', email: 'diana.prince@example.com', age: 30, country: 'Germany', city: 'Berlin', salary: '$9,000' },
              { id: '5', name: 'Edward Norton', status: 'Pending', role: 'Tester', email: 'edward.norton@example.com', age: 26, country: 'Japan', city: 'Tokyo', salary: '$7,000' },
              { id: '6', name: 'Fiona Gallagher', status: 'Active', role: 'DevOps Engineer', email: 'fiona.gallagher@example.com', age: 31, country: 'Australia', city: 'Sydney', salary: '$10,500' },
              { id: '7', name: 'George Clark', status: 'Inactive', role: 'Architect', email: 'george.clark@example.com', age: 45, country: 'Canada', city: 'Toronto', salary: '$14,000' },
              { id: '8', name: 'Hannah Abbott', status: 'Active', role: 'Support Specialist', email: 'hannah.abbott@example.com', age: 25, country: 'Singapore', city: 'Singapore', salary: '$6,000' },
              { id: '9', name: 'Ian Wright', status: 'Pending', role: 'Developer', email: 'ian.wright@example.com', age: 29, country: 'USA', city: 'New York', salary: '$9,200' },
              { id: '10', name: 'Julia Roberts', status: 'Active', role: 'Designer', email: 'julia.roberts@example.com', age: 37, country: 'UK', city: 'London', salary: '$8,800' },
              { id: '11', name: 'Kevin Bacon', status: 'Inactive', role: 'Manager', email: 'kevin.bacon@example.com', age: 50, country: 'France', city: 'Paris', salary: '$13,000' },
              { id: '12', name: 'Laura Croft', status: 'Active', role: 'Analyst', email: 'laura.croft@example.com', age: 32, country: 'Germany', city: 'Berlin', salary: '$9,400' },
              { id: '13', name: 'Michael Scott', status: 'Pending', role: 'Tester', email: 'michael.scott@example.com', age: 41, country: 'Japan', city: 'Tokyo', salary: '$7,500' },
              { id: '14', name: 'Nina Williams', status: 'Active', role: 'DevOps Engineer', email: 'nina.williams@example.com', age: 27, country: 'Australia', city: 'Sydney', salary: '$10,000' },
              { id: '15', name: 'Oliver Twist', status: 'Inactive', role: 'Architect', email: 'oliver.twist@example.com', age: 38, country: 'Canada', city: 'Toronto', salary: '$13,500' },
              { id: '16', name: 'Paula Abdul', status: 'Active', role: 'Support Specialist', email: 'paula.abdul@example.com', age: 33, country: 'Singapore', city: 'Singapore', salary: '$6,200' },
              { id: '17', name: 'Quinn Fabray', status: 'Pending', role: 'Developer', email: 'quinn.fabray@example.com', age: 24, country: 'USA', city: 'New York', salary: '$8,800' },
              { id: '18', name: 'Rachel Green', status: 'Active', role: 'Designer', email: 'rachel.green@example.com', age: 29, country: 'UK', city: 'London', salary: '$8,600' },
              { id: '19', name: 'Sam Winchester', status: 'Inactive', role: 'Manager', email: 'sam.winchester@example.com', age: 36, country: 'France', city: 'Paris', salary: '$11,500' },
              { id: '20', name: 'Tina Fey', status: 'Active', role: 'Analyst', email: 'tina.fey@example.com', age: 39, country: 'Germany', city: 'Berlin', salary: '$9,800' },
              { id: '21', name: 'Uriel Septim', status: 'Pending', role: 'Tester', email: 'uriel.septim@example.com', age: 48, country: 'Japan', city: 'Tokyo', salary: '$7,800' },
              { id: '22', name: 'Victoria Beckham', status: 'Active', role: 'DevOps Engineer', email: 'victoria.beckham@example.com', age: 35, country: 'Australia', city: 'Sydney', salary: '$11,000' },
              { id: '23', name: 'Will Smith', status: 'Inactive', role: 'Architect', email: 'will.smith@example.com', age: 43, country: 'Canada', city: 'Toronto', salary: '$14,500' },
              { id: '24', name: 'Xena Warrior', status: 'Active', role: 'Support Specialist', email: 'xena.warrior@example.com', age: 30, country: 'Singapore', city: 'Singapore', salary: '$6,500' }
            ]"
          />
        </div>
    `})},Y={name:`Использование слотов`,render:()=>({components:{D1TableFlex:I},template:`
        <D1TableFlex
          caption="Table Caption"
          :columns="['id', 'name', 'status']"
          :header="[
            { id: 'ID', name: 'Name', status: 'Status' }
          ]"
          :foot="[
            { id: 'Total', name: '2 users', status: 'Active' }
          ]"
          :list="[
            { id: '1', name: 'Alice', status: 'Active' },
            { id: '2', name: 'Bob', status: 'Pending' }
          ]"
        >
          <template #caption>
            Caption Slot: Users List
          </template>
          <template #body>
            <div style="padding: 8px;">
              Body Slot (custom flex table body content)
            </div>
          </template>
          <template #header="{ columns }">
            <div>
              Header Slot (custom header row)
            </div>
          </template>
          <template #header-name="{ value }">
            Header Cell Slot: {{ value }}
          </template>
          <template #name="{ value }">
            Cell Slot: {{ value }}
          </template>
          <template #items="{ columns }">
            <div>
              Items Slot (inside body)
            </div>
          </template>
          <template #foot="{ columns }">
            <div style="padding: 8px;">
              Foot Slot (custom footer row)
            </div>
          </template>
          <template #foot-name="{ value }">
            Foot Cell Slot: {{ value }}
          </template>
        </D1TableFlex>
    `})},X={name:`Сортировка`,render:()=>({components:{D1TableFlex:I},template:`
        <D1TableFlex
          :columns="['id', 'name', 'role', 'age', 'salary']"
          :header="[
            {
              id: 'ID',
              name: { label: 'Name', showSort: true },
              role: { label: 'Role', showSort: true },
              age: { label: 'Age', showSort: true },
              salary: { label: 'Salary', showSort: true }
            }
          ]"
          sort="age"
          sortDir="desc"
          :list="[
            { id: '1', name: 'Alice Smith', role: 'Developer', age: 28, salary: 9500 },
            { id: '2', name: 'Bob Johnson', role: 'Designer', age: 34, salary: 8500 },
            { id: '3', name: 'Charlie Brown', role: 'Manager', age: 42, salary: 12000 },
            { id: '4', name: 'Diana Prince', role: 'Analyst', age: 30, salary: 9000 },
            { id: '5', name: 'Edward Norton', role: 'Tester', age: 26, salary: 7000 }
          ]"
        />
    `})},Z={name:`Поиск`,render:()=>({components:{D1TableFlex:I},setup(){return{searchValue:l(`an`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <input class="wiki-storybook-input" type="text" v-model="searchValue" placeholder="Search name or role..."/>
          </div>
          <D1TableFlex
            :search="searchValue"
            :searchColumns="['name', 'role']"
            :columns="['id', 'name', 'nameSearch', 'role', 'age', 'salary']"
            :header="[
              {
                id: 'ID',
                name: 'Name',
                nameSearch: 'Name (Search slot)',
                role: 'Role',
                age: 'Age',
                salary: 'Salary'
              }
            ]"
            :list="[
              { id: '1', name: 'Alice Smith', role: 'Developer', age: 28, salary: 9500 },
              { id: '2', name: 'Bob Johnson', role: 'Designer', age: 34, salary: 8500 },
              { id: '3', name: 'Charlie Brown', role: 'Manager', age: 42, salary: 12000 },
              { id: '4', name: 'Diana Prince', role: 'Analyst', age: 30, salary: 9000 },
              { id: '5', name: 'Edward Norton', role: 'Tester', age: 26, salary: 7000 },
              { id: '6', name: 'Fiona Gallagher', role: 'Product Manager', age: 35, salary: 11000 },
              { id: '7', name: 'George Miller', role: 'Developer', age: 29, salary: 9200 },
              { id: '8', name: 'Hannah Abbott', role: 'Designer', age: 31, salary: 8800 },
              { id: '9', name: 'Ian Wright', role: 'DevOps', age: 38, salary: 10500 },
              { id: '10', name: 'Julia Roberts', role: 'HR Manager', age: 45, salary: 9500 },
              { id: '11', name: 'Kevin Hart', role: 'Tester', age: 27, salary: 7200 },
              { id: '12', name: 'Liam Neeson', role: 'Director', age: 52, salary: 15000 }
            ]"
            key-value="id"
          >
            <template #nameSearch="{ value }">
              <span v-html="value"/>
            </template>
          </D1TableFlex>
        </div>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Базовый',
  render: () => ({
    components: {
      D1TableFlex
    },
    template: \`
        <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding" style="max-height: 360px;">
          <D1TableFlex
            :columns="['id', 'name', 'status', 'role', 'email', 'age', 'country', 'city', 'salary']"
            :headerTop="true"
            :stickyLeft="['name']"
            :header="[
              {
                id: 'ID',
                name: 'Name',
                status: 'Status',
                role: 'Role',
                email: 'Email',
                age: 'Age',
                country: 'Country',
                city: 'City',
                salary: 'Salary'
              }
            ]"
            :tableItemColumnAttrs="{
              id: { align: 'right' },
              email: { colspan: '3' },
              age: { align: 'right' },
              salary: { align: 'right' }
            }"
            :list="[
              { id: '1', name: 'Alice Smith', status: 'Active', role: 'Developer', email: 'alice.smith@example.com', age: 28, country: 'USA', city: 'New York', salary: '$9,500' },
              { id: '2', name: 'Bob Johnson', status: 'Pending', role: 'Designer', email: 'bob.johnson@example.com', age: 34, country: 'UK', city: 'London', salary: '$8,500' },
              { id: '3', name: 'Charlie Brown', status: 'Inactive', role: 'Manager', email: 'charlie.brown@example.com', age: 42, country: 'France', city: 'Paris', salary: '$12,000' },
              { id: '4', name: 'Diana Prince', status: 'Active', role: 'Analyst', email: 'diana.prince@example.com', age: 30, country: 'Germany', city: 'Berlin', salary: '$9,000' },
              { id: '5', name: 'Edward Norton', status: 'Pending', role: 'Tester', email: 'edward.norton@example.com', age: 26, country: 'Japan', city: 'Tokyo', salary: '$7,000' },
              { id: '6', name: 'Fiona Gallagher', status: 'Active', role: 'DevOps Engineer', email: 'fiona.gallagher@example.com', age: 31, country: 'Australia', city: 'Sydney', salary: '$10,500' },
              { id: '7', name: 'George Clark', status: 'Inactive', role: 'Architect', email: 'george.clark@example.com', age: 45, country: 'Canada', city: 'Toronto', salary: '$14,000' },
              { id: '8', name: 'Hannah Abbott', status: 'Active', role: 'Support Specialist', email: 'hannah.abbott@example.com', age: 25, country: 'Singapore', city: 'Singapore', salary: '$6,000' },
              { id: '9', name: 'Ian Wright', status: 'Pending', role: 'Developer', email: 'ian.wright@example.com', age: 29, country: 'USA', city: 'New York', salary: '$9,200' },
              { id: '10', name: 'Julia Roberts', status: 'Active', role: 'Designer', email: 'julia.roberts@example.com', age: 37, country: 'UK', city: 'London', salary: '$8,800' },
              { id: '11', name: 'Kevin Bacon', status: 'Inactive', role: 'Manager', email: 'kevin.bacon@example.com', age: 50, country: 'France', city: 'Paris', salary: '$13,000' },
              { id: '12', name: 'Laura Croft', status: 'Active', role: 'Analyst', email: 'laura.croft@example.com', age: 32, country: 'Germany', city: 'Berlin', salary: '$9,400' },
              { id: '13', name: 'Michael Scott', status: 'Pending', role: 'Tester', email: 'michael.scott@example.com', age: 41, country: 'Japan', city: 'Tokyo', salary: '$7,500' },
              { id: '14', name: 'Nina Williams', status: 'Active', role: 'DevOps Engineer', email: 'nina.williams@example.com', age: 27, country: 'Australia', city: 'Sydney', salary: '$10,000' },
              { id: '15', name: 'Oliver Twist', status: 'Inactive', role: 'Architect', email: 'oliver.twist@example.com', age: 38, country: 'Canada', city: 'Toronto', salary: '$13,500' },
              { id: '16', name: 'Paula Abdul', status: 'Active', role: 'Support Specialist', email: 'paula.abdul@example.com', age: 33, country: 'Singapore', city: 'Singapore', salary: '$6,200' },
              { id: '17', name: 'Quinn Fabray', status: 'Pending', role: 'Developer', email: 'quinn.fabray@example.com', age: 24, country: 'USA', city: 'New York', salary: '$8,800' },
              { id: '18', name: 'Rachel Green', status: 'Active', role: 'Designer', email: 'rachel.green@example.com', age: 29, country: 'UK', city: 'London', salary: '$8,600' },
              { id: '19', name: 'Sam Winchester', status: 'Inactive', role: 'Manager', email: 'sam.winchester@example.com', age: 36, country: 'France', city: 'Paris', salary: '$11,500' },
              { id: '20', name: 'Tina Fey', status: 'Active', role: 'Analyst', email: 'tina.fey@example.com', age: 39, country: 'Germany', city: 'Berlin', salary: '$9,800' },
              { id: '21', name: 'Uriel Septim', status: 'Pending', role: 'Tester', email: 'uriel.septim@example.com', age: 48, country: 'Japan', city: 'Tokyo', salary: '$7,800' },
              { id: '22', name: 'Victoria Beckham', status: 'Active', role: 'DevOps Engineer', email: 'victoria.beckham@example.com', age: 35, country: 'Australia', city: 'Sydney', salary: '$11,000' },
              { id: '23', name: 'Will Smith', status: 'Inactive', role: 'Architect', email: 'will.smith@example.com', age: 43, country: 'Canada', city: 'Toronto', salary: '$14,500' },
              { id: '24', name: 'Xena Warrior', status: 'Active', role: 'Support Specialist', email: 'xena.warrior@example.com', age: 30, country: 'Singapore', city: 'Singapore', salary: '$6,500' }
            ]"
          />
        </div>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1TableFlex
    },
    template: \`
        <D1TableFlex
          caption="Table Caption"
          :columns="['id', 'name', 'status']"
          :header="[
            { id: 'ID', name: 'Name', status: 'Status' }
          ]"
          :foot="[
            { id: 'Total', name: '2 users', status: 'Active' }
          ]"
          :list="[
            { id: '1', name: 'Alice', status: 'Active' },
            { id: '2', name: 'Bob', status: 'Pending' }
          ]"
        >
          <template #caption>
            Caption Slot: Users List
          </template>
          <template #body>
            <div style="padding: 8px;">
              Body Slot (custom flex table body content)
            </div>
          </template>
          <template #header="{ columns }">
            <div>
              Header Slot (custom header row)
            </div>
          </template>
          <template #header-name="{ value }">
            Header Cell Slot: {{ value }}
          </template>
          <template #name="{ value }">
            Cell Slot: {{ value }}
          </template>
          <template #items="{ columns }">
            <div>
              Items Slot (inside body)
            </div>
          </template>
          <template #foot="{ columns }">
            <div style="padding: 8px;">
              Foot Slot (custom footer row)
            </div>
          </template>
          <template #foot-name="{ value }">
            Foot Cell Slot: {{ value }}
          </template>
        </D1TableFlex>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Сортировка',
  render: () => ({
    components: {
      D1TableFlex
    },
    template: \`
        <D1TableFlex
          :columns="['id', 'name', 'role', 'age', 'salary']"
          :header="[
            {
              id: 'ID',
              name: { label: 'Name', showSort: true },
              role: { label: 'Role', showSort: true },
              age: { label: 'Age', showSort: true },
              salary: { label: 'Salary', showSort: true }
            }
          ]"
          sort="age"
          sortDir="desc"
          :list="[
            { id: '1', name: 'Alice Smith', role: 'Developer', age: 28, salary: 9500 },
            { id: '2', name: 'Bob Johnson', role: 'Designer', age: 34, salary: 8500 },
            { id: '3', name: 'Charlie Brown', role: 'Manager', age: 42, salary: 12000 },
            { id: '4', name: 'Diana Prince', role: 'Analyst', age: 30, salary: 9000 },
            { id: '5', name: 'Edward Norton', role: 'Tester', age: 26, salary: 7000 }
          ]"
        />
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Поиск',
  render: () => ({
    components: {
      D1TableFlex
    },
    setup() {
      return {
        searchValue: ref('an')
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <input class="wiki-storybook-input" type="text" v-model="searchValue" placeholder="Search name or role..."/>
          </div>
          <D1TableFlex
            :search="searchValue"
            :searchColumns="['name', 'role']"
            :columns="['id', 'name', 'nameSearch', 'role', 'age', 'salary']"
            :header="[
              {
                id: 'ID',
                name: 'Name',
                nameSearch: 'Name (Search slot)',
                role: 'Role',
                age: 'Age',
                salary: 'Salary'
              }
            ]"
            :list="[
              { id: '1', name: 'Alice Smith', role: 'Developer', age: 28, salary: 9500 },
              { id: '2', name: 'Bob Johnson', role: 'Designer', age: 34, salary: 8500 },
              { id: '3', name: 'Charlie Brown', role: 'Manager', age: 42, salary: 12000 },
              { id: '4', name: 'Diana Prince', role: 'Analyst', age: 30, salary: 9000 },
              { id: '5', name: 'Edward Norton', role: 'Tester', age: 26, salary: 7000 },
              { id: '6', name: 'Fiona Gallagher', role: 'Product Manager', age: 35, salary: 11000 },
              { id: '7', name: 'George Miller', role: 'Developer', age: 29, salary: 9200 },
              { id: '8', name: 'Hannah Abbott', role: 'Designer', age: 31, salary: 8800 },
              { id: '9', name: 'Ian Wright', role: 'DevOps', age: 38, salary: 10500 },
              { id: '10', name: 'Julia Roberts', role: 'HR Manager', age: 45, salary: 9500 },
              { id: '11', name: 'Kevin Hart', role: 'Tester', age: 27, salary: 7200 },
              { id: '12', name: 'Liam Neeson', role: 'Director', age: 52, salary: 15000 }
            ]"
            key-value="id"
          >
            <template #nameSearch="{ value }">
              <span v-html="value"/>
            </template>
          </D1TableFlex>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`TableFlex`,`TableFlexBasic`,`TableFlexSlots`,`TableFlexSort`,`TableFlexSearch`]})))()}export{Y as a,U as c,Z as i,W as l,q as n,X as o,J as r,$ as s,G as t};