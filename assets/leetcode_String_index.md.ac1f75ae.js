import{_ as n,c as s,o as a,a as t}from"./app.b9cbff89.js";const h='{"title":"\u5B57\u7B26\u4E32\u7ECF\u5178\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":3,"title":"9.\u56DE\u6587\u6570","slug":"_9-\u56DE\u6587\u6570"},{"level":3,"title":"20.\u6709\u6548\u7684\u62EC\u53F7","slug":"_20-\u6709\u6548\u7684\u62EC\u53F7"},{"level":3,"title":"\u5251\u6307Offer 05. \u66FF\u6362\u7A7A\u683C","slug":"\u5251\u6307offer-05-\u66FF\u6362\u7A7A\u683C"}],"relativePath":"leetcode/String/index.md","lastUpdated":1640530572061}',p={},o=t(`<h1 id="\u5B57\u7B26\u4E32\u7ECF\u5178\u95EE\u9898" tabindex="-1">\u5B57\u7B26\u4E32\u7ECF\u5178\u95EE\u9898 <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7ECF\u5178\u95EE\u9898" aria-hidden="true">#</a></h1><h3 id="_9-\u56DE\u6587\u6570" tabindex="-1">9.\u56DE\u6587\u6570 <a class="header-anchor" href="#_9-\u56DE\u6587\u6570" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number} x
 * @return {boolean}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> temp<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!==</span> temp<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
      i<span class="token operator">++</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token number">121</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="_20-\u6709\u6548\u7684\u62EC\u53F7" tabindex="-1">20.\u6709\u6548\u7684\u62EC\u53F7 <a class="header-anchor" href="#_20-\u6709\u6548\u7684\u62EC\u53F7" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {boolean}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> leftBrackets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;{&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> rightBrackets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> leftBrackets<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> rightBrackets<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">,</span> rightIndex<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5251\u6307offer-05-\u66FF\u6362\u7A7A\u683C" tabindex="-1">\u5251\u6307Offer 05. \u66FF\u6362\u7A7A\u683C <a class="header-anchor" href="#\u5251\u6307offer-05-\u66FF\u6362\u7A7A\u683C" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u8BF7\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u628A\u5B57\u7B26\u4E32 s \u4E2D\u7684\u6BCF\u4E2A\u7A7A\u683C\u66FF\u6362\u6210&quot;%20&quot;\u3002
 * @param {string} s
 * @return {string}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">replaceSpace</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> <span class="token string">&#39;%20&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,7),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
