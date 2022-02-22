import{r as t,o as r,c as i,a as e,b as s,F as c,e as n,d as l}from"./app.b9362cc3.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const d={},p=e("h1",{id:"eslint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eslint","aria-hidden":"true"},"#"),n(" ESLint")],-1),h=e("p",null,"\u4E0D\u7BA1\u662F\u591A\u4EBA\u5408\u4F5C\u8FD8\u662F\u4E2A\u4EBA\u9879\u76EE\uFF0C\u4EE3\u7801\u89C4\u8303\u90FD\u662F\u5F88\u91CD\u8981\u7684\u3002\u8FD9\u6837\u505A\u4E0D\u4EC5\u53EF\u4EE5\u5F88\u5927\u7A0B\u5EA6\u5730\u907F\u514D\u57FA\u672C\u8BED\u6CD5\u9519\u8BEF\uFF0C\u4E5F\u4FDD\u8BC1\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3002",-1),b=e("h2",{id:"airbnb-\u89C4\u8303",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#airbnb-\u89C4\u8303","aria-hidden":"true"},"#"),n(" Airbnb \u89C4\u8303")],-1),u=n("\u4E86\u89E3 "),m={href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"},_=n("Airbnb JavaScript Style Guide"),v=n("\uFF0C"),g={href:"https://github.com/lin-123/javascript",target:"_blank",rel:"noopener noreferrer"},f=n("\u4E2D\u6587\u53C2\u8003"),x=n("\u3002"),k=l(`<div class="custom-container tip"><p class="custom-container-title">\u4E3A\u4EC0\u4E48\u9009\u62E9 Airbnb \u89C4\u8303</p><ul><li>\u6700\u4E25\u8C28\u7684 ESlint \u914D\u7F6E</li><li>Github \u8D85\u8FC7 100k star</li></ul></div><h2 id="\u624B\u52A8\u6821\u9A8C\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u6821\u9A8C\u4EE3\u7801" aria-hidden="true">#</a> \u624B\u52A8\u6821\u9A8C\u4EE3\u7801</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> run lint
</code></pre></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u9879\u76EE\u7684 eslint \u914D\u7F6E\u4F4D\u4E8E\u6839\u76EE\u5F55\u4E0B .eslintrc.js\u5185\uFF0C\u53EF\u4EE5\u6839\u636E\u56E2\u961F\u81EA\u884C\u4FEE\u6539\u4EE3\u7801\u89C4\u8303\u3002</p><h2 id="\u8DF3\u8FC7\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8FC7\u9A8C\u8BC1" aria-hidden="true">#</a> \u8DF3\u8FC7\u9A8C\u8BC1</h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7<strong>\u6CE8\u91CA</strong>\u7684\u65B9\u5F0F\u53D6\u6D88\u6821\u9A8C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable */</span>
<span class="token operator">...</span>
<span class="token comment">/* eslint-enable */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6307\u5B9A\u7684\u89C4\u5219\u542F\u7528\u6216\u7981\u7528\u8B66\u544A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable no-alert, no-console */</span>
<span class="token operator">...</span>
<span class="token comment">/* eslint-enable no-alert, no-console */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5355\u884C\u8DF3\u8FC7\u9A8C\u8BC1\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// eslint-disable-next-line</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,12);function j(E,S){const a=t("ExternalLinkIcon");return r(),i(c,null,[p,h,b,e("p",null,[u,e("a",m,[_,s(a)]),v,e("a",g,[f,s(a)]),x]),k],64)}var V=o(d,[["render",j]]);export{V as default};