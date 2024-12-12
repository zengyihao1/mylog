import{_ as q,r as h,i as G,c as k,a,b as e,w as t,u as J,d as i,o as u,e as c,t as o,n as K,F as x,f as y,g as D}from"./index-B6L9RVRK.js";const Q={class:"article-detail"},X={class:"article-hero","data-aos":"fade"},Y={class:"article-overlay d-flex align-end"},Z={class:"text-h3 text-white font-weight-bold mb-4","data-aos":"fade-right","data-aos-delay":"400"},ee={class:"d-flex align-center","data-aos":"fade-right","data-aos-delay":"600"},te={class:"text-white text-subtitle-1"},le={class:"text-white text-caption"},ae={class:"article-content py-16"},ie={class:"article-body","data-aos":"fade-up"},se=["innerHTML"],oe={class:"article-actions d-flex justify-center py-8"},ne={class:"text-body-1 ml-2"},ce={class:"comments-section mt-8"},re={class:"text-h5 font-weight-bold mb-6"},de={class:"d-flex align-start mb-4"},ue={class:"text-subtitle-1 font-weight-medium"},_e={class:"text-caption"},ve={class:"text-caption ml-1"},pe={class:"text-body-1"},he={class:"sidebar","data-aos":"fade-left"},me={class:"text-center"},fe={class:"text-h6 font-weight-bold"},ge={class:"text-body-2 text-medium-emphasis"},be={__name:"ArticleDetail",setup(ke){const T=J(),m=h(!1),d=h(""),s=h({id:1,title:"基于 Vue 3 的现代化博客系统开发详解",content:`
    <div class="markdown-body">
      <h2>项目概述</h2>
      <p>这是一个基于现代化前端技术栈开发的个人博客系统，采用了最新的 Vue 3 生态系统和相关工具。本文将详细介绍系统的技术架构、主要功能和实现细节。</p>
      
      <h2>技术栈选择</h2>
      <h3>核心框架</h3>
      <ul>
        <li><strong>Vue 3</strong>：采用 Composition API，提供更好的代码组织和复用能力</li>
        <li><strong>Vite</strong>：新一代前端构建工具，提供极速的开发体验</li>
        <li><strong>Vuetify 3</strong>：Material Design 风格的 UI 组件库</li>
        <li><strong>Vue Router</strong>：Vue.js 官方路由管理器</li>
        <li><strong>Pinia</strong>：新一代状态管理工具</li>
      </ul>

      <h3>样式解决方案</h3>
      <ul>
        <li><strong>SCSS</strong>：采用模块化的 SCSS 架构，使用 @use 语法组织样式代码</li>
        <li><strong>CSS 变量</strong>：实现主题切换和样式复用</li>
        <li><strong>响应式设计</strong>：适配各种设备屏幕</li>
      </ul>

      <h2>项目结构</h2>
      <pre><code>src/
├── assets/
│   ├── styles/
│   │   ├── variables/
│   │   │   ├── _colors.scss
│   │   │   ├── _spacing.scss
│   │   │   ├── _breakpoints.scss
│   │   │   ├── _transitions.scss
│   │   │   └── _shadows.scss
│   │   ├── variables.scss
│   │   └── main.scss
│   └── images/
├── components/
│   ├── common/
│   └── layout/
│       └── AppNavbar.vue
├── composables/
├── router/
├── stores/
├── views/
│   ├── Home.vue
│   ├── Articles.vue
│   ├── ArticleDetail.vue
│   └── Photos.vue
└── utils/</code></pre>

      <h2>主要功能实现</h2>
      
      <h3>1. 响应式导航栏</h3>
      <p>导航栏组件（AppNavbar.vue）实现了以下功能：</p>
      <ul>
        <li>滚动时的透明度和阴影效果变化</li>
        <li>响应式布局，在移动端自动切换为抽屉式菜单</li>
        <li>主题切换功能</li>
        <li>渐变 Logo 效果</li>
      </ul>

      <h3>2. 主题系统</h3>
      <pre><code>const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#82B1FF',
          background: '#FFFFFF'
        }
      },
      dark: {
        colors: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#82B1FF',
          background: '#121212'
        }
      }
    }
  }
})</code></pre>

      <h3>3. 动画效果</h3>
      <p>使用 AOS (Animate On Scroll) 库实现页面滚动动画：</p>
      <pre><code>// 初始化 AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50
})</code></pre>

      <h3>4. 照片墙功能</h3>
      <p>照片墙实现了以下特性：</p>
      <ul>
        <li>瀑布流布局</li>
        <li>图片懒加载</li>
        <li>优雅的悬浮效果</li>
        <li>分类筛选</li>
        <li>点赞功能</li>
      </ul>

      <h3>5. 文章系统</h3>
      <p>文章系统包含：</p>
      <ul>
        <li>分类展示</li>
        <li>评论功能</li>
        <li>点赞系统</li>
        <li>文章分享</li>
        <li>相关文章推荐</li>
      </ul>

      <h2>性能优化</h2>
      <ul>
        <li>路由懒加载</li>
        <li>图片懒加载和优化</li>
        <li>组件按需加载</li>
        <li>样式代码分割</li>
        <li>资源预加载</li>
      </ul>

      <h2>开发体验</h2>
      <p>项目采用了多项提升开发体验的配置：</p>
      <ul>
        <li>Vite 的快速热重载</li>
        <li>ESLint 代码规范</li>
        <li>模块化的 SCSS 架构</li>
        <li>TypeScript 支持</li>
      </ul>

      <h2>部署考虑</h2>
      <ul>
        <li>静态资源优化</li>
        <li>CDN 配置</li>
        <li>SEO 优化</li>
        <li>浏览器兼容性</li>
      </ul>

      <h2>未来展望</h2>
      <p>计划添加的功能和优化：</p>
      <ul>
        <li>服务端渲染 (SSR) 支持</li>
        <li>PWA 支持</li>
        <li>更多的交互动画</li>
        <li>性能监控系统</li>
        <li>国际化支持</li>
      </ul>
    </div>
  `,cover:"https://picsum.photos/seed/tech-blog/1920/1080",category:"技术",date:"2024-03-20",readTime:15,likes:86,liked:!1,author:{name:"Tech Explorer",avatar:"https://i.pravatar.cc/150?img=1",bio:"全栈开发工程师，热衷于探索最新的前端技术和最佳实践"}}),f=h([{id:1,username:"Alice",avatar:"https://i.pravatar.cc/150?img=5",content:"非常详细的文章，学习了！",date:"2024-03-15",likes:12,liked:!1},{id:2,username:"Bob",avatar:"https://i.pravatar.cc/150?img=8",content:"文章写得很好，期待更多内容。",date:"2024-03-14",likes:8,liked:!1}]),z=h([{id:2,title:"Vue 3 性能优化指南",cover:"https://picsum.photos/seed/article2/800/600",date:"2024-03-12"},{id:3,title:"TypeScript 与 Vue 3",cover:"https://picsum.photos/seed/article3/800/600",date:"2024-03-10"}]),L=[{id:"weixin",name:"微信",icon:"mdi-wechat",color:"#07C160"},{id:"weibo",name:"微博",icon:"mdi-sina-weibo",color:"#E6162D"},{id:"twitter",name:"Twitter",icon:"mdi-twitter",color:"#1DA1F2"}],B=()=>{s.value.liked=!s.value.liked,s.value.likes+=s.value.liked?1:-1},N=r=>{r.liked=!r.liked,r.likes+=r.liked?1:-1},P=()=>{d.value.trim()&&(f.value.unshift({id:f.value.length+1,username:"访客用户",avatar:"https://i.pravatar.cc/150?img=3",content:d.value,date:new Date().toLocaleDateString(),likes:0,liked:!1}),d.value="")},E=()=>{m.value=!0},O=r=>{console.log(`分享到 ${r}`),m.value=!1};return G(()=>{console.log("文章ID:",T.params.id)}),(r,n)=>{const I=i("v-chip"),_=i("v-img"),g=i("v-avatar"),w=i("v-container"),b=i("v-btn"),M=i("v-textarea"),v=i("v-card-text"),p=i("v-card"),$=i("v-spacer"),S=i("v-col"),C=i("v-card-title"),V=i("v-list-item-title"),H=i("v-list-item-subtitle"),F=i("v-list-item"),A=i("v-list"),R=i("v-row"),U=i("v-icon"),j=i("v-dialog");return u(),k("div",Q,[a("section",X,[e(_,{src:s.value.cover,height:"500",cover:"",class:"article-cover"},{default:t(()=>[a("div",Y,[e(w,{class:"pb-8"},{default:t(()=>[e(I,{color:"primary",variant:"flat",class:"mb-4","data-aos":"fade-right","data-aos-delay":"200"},{default:t(()=>[c(o(s.value.category),1)]),_:1}),a("h1",Z,o(s.value.title),1),a("div",ee,[e(g,{size:"40",class:"mr-4"},{default:t(()=>[e(_,{src:s.value.author.avatar},null,8,["src"])]),_:1}),a("div",null,[a("div",te,o(s.value.author.name),1),a("div",le,o(s.value.date)+" · "+o(s.value.readTime)+" 分钟阅读 ",1)])])]),_:1})])]),_:1},8,["src"])]),a("section",ae,[e(w,null,{default:t(()=>[e(R,null,{default:t(()=>[e(S,{cols:"12",md:"8",lg:"9"},{default:t(()=>[a("div",ie,[a("div",{class:"markdown-body",innerHTML:s.value.content},null,8,se)]),a("div",oe,[e(b,{icon:"mdi-heart",size:"x-large",color:"red",variant:"flat",class:K({liked:s.value.liked}),onClick:B},{append:t(()=>[a("span",ne,o(s.value.likes),1)]),_:1},8,["class"]),e(b,{icon:"mdi-share-variant",size:"x-large",class:"ml-4",variant:"flat",onClick:E})]),a("div",ce,[a("h2",re," 评论 ("+o(f.value.length)+") ",1),e(p,{class:"mb-8",elevation:"0"},{default:t(()=>[e(v,null,{default:t(()=>[e(M,{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=l=>d.value=l),label:"写下你的评论",variant:"outlined",rows:"3"},null,8,["modelValue"]),e(b,{color:"primary",disabled:!d.value.trim(),onClick:P},{default:t(()=>n[2]||(n[2]=[c(" 发表评论 ")])),_:1},8,["disabled"])]),_:1})]),_:1}),(u(!0),k(x,null,y(f.value,l=>(u(),D(p,{key:l.id,class:"mb-4",elevation:"0",variant:"outlined"},{default:t(()=>[e(v,null,{default:t(()=>[a("div",de,[e(g,{size:"40",class:"mr-4"},{default:t(()=>[e(_,{src:l.avatar},null,8,["src"])]),_:2},1024),a("div",null,[a("div",ue,o(l.username),1),a("div",_e,o(l.date),1)]),e($),e(b,{icon:"mdi-heart",size:"small",variant:"text",color:l.liked?"red":void 0,onClick:W=>N(l)},{append:t(()=>[a("span",ve,o(l.likes),1)]),_:2},1032,["color","onClick"])]),a("p",pe,o(l.content),1)]),_:2},1024)]),_:2},1024))),128))])]),_:1}),e(S,{cols:"12",md:"4",lg:"3"},{default:t(()=>[a("div",he,[e(p,{class:"mb-6",elevation:"0",variant:"outlined"},{default:t(()=>[e(v,null,{default:t(()=>[a("div",me,[e(g,{size:"80",class:"mb-4"},{default:t(()=>[e(_,{src:s.value.author.avatar},null,8,["src"])]),_:1}),a("h3",fe,o(s.value.author.name),1),a("p",ge,o(s.value.author.bio),1)])]),_:1})]),_:1}),e(p,{elevation:"0",variant:"outlined"},{default:t(()=>[e(C,null,{default:t(()=>n[3]||(n[3]=[c("相关文章")])),_:1}),e(v,null,{default:t(()=>[e(A,{lines:"two"},{default:t(()=>[(u(!0),k(x,null,y(z.value,l=>(u(),D(F,{key:l.id,to:`/article/${l.id}`,class:"mb-2"},{prepend:t(()=>[e(g,{size:"40"},{default:t(()=>[e(_,{src:l.cover,cover:""},null,8,["src"])]),_:2},1024)]),default:t(()=>[e(V,null,{default:t(()=>[c(o(l.title),1)]),_:2},1024),e(H,null,{default:t(()=>[c(o(l.date),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),e(j,{modelValue:m.value,"onUpdate:modelValue":n[1]||(n[1]=l=>m.value=l),"max-width":"400"},{default:t(()=>[e(p,null,{default:t(()=>[e(C,null,{default:t(()=>n[4]||(n[4]=[c("分享文章")])),_:1}),e(v,null,{default:t(()=>[e(A,null,{default:t(()=>[(u(),k(x,null,y(L,l=>e(F,{key:l.id,onClick:W=>O(l.id)},{prepend:t(()=>[e(U,{color:l.color},{default:t(()=>[c(o(l.icon),1)]),_:2},1032,["color"])]),default:t(()=>[e(V,null,{default:t(()=>[c(o(l.name),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},ye=q(be,[["__scopeId","data-v-5306190e"]]);export{ye as default};
