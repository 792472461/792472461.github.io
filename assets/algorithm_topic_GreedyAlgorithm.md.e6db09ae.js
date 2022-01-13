import{_ as n,c as s,o as a,d as p}from"./app.7e9cfa17.js";const h='{"title":"\u8D2A\u5FC3","description":"","frontmatter":{},"headers":[{"level":2,"title":"45. \u8DF3\u8DC3\u6E38\u620F","slug":"_45-\u8DF3\u8DC3\u6E38\u620F"},{"level":2,"title":"122. \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u95F4\u2161","slug":"_122-\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u95F4\u2171"},{"level":2,"title":"455. \u5206\u53D1\u997C\u5E72","slug":"_455-\u5206\u53D1\u997C\u5E72"}],"relativePath":"algorithm/topic/GreedyAlgorithm.md","lastUpdated":1642042020596}',t={},o=p(`<h1 id="\u8D2A\u5FC3" tabindex="-1">\u8D2A\u5FC3 <a class="header-anchor" href="#\u8D2A\u5FC3" aria-hidden="true">#</a></h1><h2 id="_45-\u8DF3\u8DC3\u6E38\u620F" tabindex="-1">45. \u8DF3\u8DC3\u6E38\u620F <a class="header-anchor" href="#_45-\u8DF3\u8DC3\u6E38\u620F" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>now <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> right <span class="token operator">=</span> now <span class="token operator">+</span> nums<span class="token punctuation">[</span>now<span class="token punctuation">]</span>
      <span class="token comment">// [now+1, right] \u662F\u53EF\u8FBE\u8303\u56F4</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ans <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token keyword">let</span> nextRight <span class="token operator">=</span> right
      <span class="token keyword">let</span> next <span class="token operator">=</span> now
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> now <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nextRight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          nextRight <span class="token operator">=</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
          next <span class="token operator">=</span> i
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      now <span class="token operator">=</span> next
      ans<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="_122-\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u95F4\u2171" tabindex="-1">122. \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u95F4\u2161 <a class="header-anchor" href="#_122-\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u95F4\u2171" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} prices
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ans <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="_455-\u5206\u53D1\u997C\u5E72" tabindex="-1">455. \u5206\u53D1\u997C\u5E72 <a class="header-anchor" href="#_455-\u5206\u53D1\u997C\u5E72" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">findContentChildren</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">g<span class="token punctuation">,</span> s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// g[i] &lt;= s[j] \u7684i\u90FD\u53EF\u4EE5\u6EE1\u8DB3</span>
    <span class="token comment">// g[i1] &lt;= g[i2] &lt;= s[j] \u6EE1\u8DB3i2\u66F4\u597D</span>

    <span class="token comment">// \u6EE1\u8DB3i2 \u7B54\u6848+1 \u5269\u4E0Bg[i1] \u5269\u4E0B\u540C\u6837\u7684\u997C\u5E72</span>
    <span class="token comment">// \u6EE1\u8DB3i1 \u7B54\u6848+1 \u5269\u4E0Bg[i2]</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span>
    g<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
    s<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> child <span class="token keyword">of</span> g<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> child<span class="token punctuation">)</span> j<span class="token operator">++</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans<span class="token operator">++</span>
        j<span class="token operator">++</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(l,r,u,k,i,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{h as __pageData,w as default};
