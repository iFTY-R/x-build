(self.webpackChunk=self.webpackChunk||[]).push([[5316],{281:function(e,a,n){"use strict";n.r(a),n.d(a,{data:function(){return r}});const r={key:"v-1e87a515",path:"/guide/overview/build.html",title:"构建部署",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"构建",slug:"构建",children:[]},{level:2,title:"配置打包路径",slug:"配置打包路径",children:[]},{level:2,title:"环境变量",slug:"环境变量",children:[]},{level:2,title:"分析包体积",slug:"分析包体积",children:[]},{level:2,title:"Router Mode",slug:"router-mode",children:[]},{level:2,title:"部署",slug:"部署",children:[]}],filePathRelative:"guide/overview/build.md",git:{updatedTime:1624929509e3,contributors:[]}}},5592:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return f}});var r=n(6252);const t=(0,r.Wm)("h1",{id:"构建部署",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#构建部署","aria-hidden":"true"},"#"),(0,r.Uk)(" 构建部署")],-1),d=(0,r.Wm)("h2",{id:"构建",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#构建","aria-hidden":"true"},"#"),(0,r.Uk)(" 构建")],-1),l=(0,r.Wm)("p",null,"当项目等待测试或开发完毕准备上线时，与 @vue/cli 一样，只需要运行一行命令就可以打包你的应用：",-1),i=(0,r.Wm)("div",{class:"language-bash ext-sh"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,[(0,r.Wm)("span",{class:"token function"},"npm"),(0,r.Uk)(" run build\n")])])],-1),u=(0,r.Wm)("div",{class:"language-bash ext-sh"},[(0,r.Wm)("pre",{class:"language-bash"},[(0,r.Wm)("code",null,[(0,r.Wm)("span",{class:"token function"},"npm"),(0,r.Uk)(" run build:test\n")])])],-1),s=(0,r.uE)('<h2 id="配置打包路径" tabindex="-1"><a class="header-anchor" href="#配置打包路径" aria-hidden="true">#</a> 配置打包路径</h2><p>通常情况下，测试环境都会放在本地服务器下，所以打包路径显得尤为重要。大多数项目在没有正式上线前，我们访问的地址可能都是 <code>IP</code> + <code>项目名</code> 的形式访问，所以默认打包路径会附带项目的名称，当然你可以通过 vue.config.js 中的 publicPath 改变此规则。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>打包的项目取自 <code>package.json</code> 的 <code>name</code> 属性。</p></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>不论是开发、测试还是生产，都配备了对应的文件来处理不同环境下需要打包的内容，这与你执行的命令息息相关，它将直接影响你的打包结果。</p>',5),c=(0,r.Uk)("想了解更多关于环境变量的内容，请查看"),h={href:"/core/env.md",target:"_blank",rel:"noopener noreferrer"},o=(0,r.Uk)("环境变量"),p=(0,r.Uk)("章节。"),m=(0,r.uE)('<h2 id="分析包体积" tabindex="-1"><a class="header-anchor" href="#分析包体积" aria-hidden="true">#</a> 分析包体积</h2><p>如果你的构建文件很大，超出了你的预料，运行下面的命令构建并分析依赖模块的体积分布，针对性的优化你的代码：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> run analyzer\n</code></pre></div><h2 id="router-mode" tabindex="-1"><a class="header-anchor" href="#router-mode" aria-hidden="true">#</a> Router Mode</h2><p>默认情况下使用 hash 路由，如果想使用 history 路由可以在 <code>router/index.ts</code> 中配置，并与后端人员做好协调。</p><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p>上面提到的构建方式都是在我们自己的电脑上进行打包，这样效率很低，推荐配置 CI/CD 实现全自动化的上线流程。</p>',7);var f={render:function(e,a){const n=(0,r.up)("CodeGroupItem"),f=(0,r.up)("CodeGroup"),g=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[t,d,l,(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{title:"正式环境"},{default:(0,r.w5)((()=>[i])),_:1}),(0,r.Wm)(n,{title:"测试环境"},{default:(0,r.w5)((()=>[u])),_:1})])),_:1}),s,(0,r.Wm)("p",null,[c,(0,r.Wm)("a",h,[o,(0,r.Wm)(g)]),p]),m],64)}}}}]);