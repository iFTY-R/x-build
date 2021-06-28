(self.webpackChunk=self.webpackChunk||[]).push([[7821],{7132:function(n,s,a){"use strict";a.r(s),a.d(s,{data:function(){return e}});const e={key:"v-6de1cd6a",path:"/guide/http/cros.html",title:"跨域问题",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"CORS",slug:"cors",children:[]},{level:2,title:"本地代理",slug:"本地代理",children:[]}],filePathRelative:"guide/http/cros.md",git:{updatedTime:1624843875e3,contributors:[]}}},894:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return p}});const e=(0,a(6252).uE)('<h1 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a> 跨域问题</h1><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h2><p>CORS 全称为 Cross Origin Resource Sharing（跨域资源共享）。这种方案对于前端来说没有什么工作量，和正常发送请求写法上没有任何区别，工作量基本都在后端这里。每一次请求，浏览器必须先以 OPTIONS 请求方式发送一个预请求（也不是所有请求都会发送 options，展开介绍 点我），通过预检请求从而获知服务器端对跨源请求支持的 HTTP 方法。在确认服务器允许该跨源请求的情况下，再以实际的 HTTP 请求方法发送那个真正的请求。推荐的原因是：只要第一次配好了，之后不管有多少接口和项目复用就可以了，一劳永逸的解决了跨域问题，而且不管是开发环境还是正式环境都能方便的使用。</p><h2 id="本地代理" tabindex="-1"><a class="header-anchor" href="#本地代理" aria-hidden="true">#</a> 本地代理</h2><p>本地配置代理：<code>vue.config.js</code>，仅能在开发环境使用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>devServer<span class="token operator">:</span> <span class="token punctuation">{</span>\n  proxy<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      target<span class="token operator">:</span> <span class="token string">&#39;http://47.100.186.132/your-path/api&#39;</span><span class="token punctuation">,</span>\n      ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',6);var p={render:function(n,s){return e}}}}]);