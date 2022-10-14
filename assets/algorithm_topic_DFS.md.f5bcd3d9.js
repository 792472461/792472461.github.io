import{_ as n,c as s,o as a,a as p}from"./app.5d16524a.js";const m='{"title":"\u6DF1\u5EA6\u4F18\u5148\u904D\u5386+\u56DE\u6EAF","description":"","frontmatter":{},"headers":[{"level":2,"title":"46. \u5168\u6392\u5217","slug":"_46-\u5168\u6392\u5217"},{"level":2,"title":"51. N\u7687\u540E","slug":"_51-n\u7687\u540E"},{"level":2,"title":"77. \u7EC4\u5408","slug":"_77-\u7EC4\u5408"},{"level":2,"title":"78.\u5B50\u96C6","slug":"_78-\u5B50\u96C6"}],"relativePath":"algorithm/topic/DFS.md","lastUpdated":1642042020596}',t={},o=p(`<h1 id="\u6DF1\u5EA6\u4F18\u5148\u904D\u5386-\u56DE\u6EAF" tabindex="-1">\u6DF1\u5EA6\u4F18\u5148\u904D\u5386+\u56DE\u6EAF <a class="header-anchor" href="#\u6DF1\u5EA6\u4F18\u5148\u904D\u5386-\u56DE\u6EAF" aria-hidden="true">#</a></h1><h2 id="_46-\u5168\u6392\u5217" tabindex="-1">46. \u5168\u6392\u5217 <a class="header-anchor" href="#_46-\u5168\u6392\u5217" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {number[][]}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">permute</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> used <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> chosen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chosen<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>used<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          chosen<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
          used<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>chosen<span class="token punctuation">]</span><span class="token punctuation">)</span>
          used<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span>
          chosen<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>

</code></pre></div><h2 id="_51-n\u7687\u540E" tabindex="-1">51. N\u7687\u540E <a class="header-anchor" href="#_51-n\u7687\u540E" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {string[][]}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">solveNQueens</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// \u5224\u65AD\u5F53\u524D\u4F4D\u7F6E\u662F\u5426\u5408\u6CD5</span>
    <span class="token keyword">const</span> <span class="token function-variable function">checkValidate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> row<span class="token punctuation">,</span> col</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> length <span class="token operator">=</span> ware<span class="token punctuation">.</span>length
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> h <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> h <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> h<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> v <span class="token operator">=</span> ware<span class="token punctuation">[</span>h<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token operator">===</span> col<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>v <span class="token operator">-</span> col<span class="token punctuation">)</span> <span class="token operator">===</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>h <span class="token operator">-</span> row<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/**
     *
     * @param {number} start
     * @param {number[]} ware
     * @param {number} length
     * @returns {number}
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> ware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> length</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ware<span class="token punctuation">.</span>length <span class="token operator">===</span> length<span class="token punctuation">)</span> <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ware<span class="token punctuation">)</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkValidate</span><span class="token punctuation">(</span>ware<span class="token punctuation">,</span> start<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">dfs</span><span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>ware<span class="token punctuation">,</span> col<span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>

    <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> item<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
        r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Q&#39;</span>
        <span class="token keyword">return</span> r<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token comment">// [1, 1] \u80FD\u653B\u51FB\u8303\u56F4 [0, 0] [2, 2] ... [n-1, n-1] [0, 2], [2, 0]</span>

</code></pre></div><h2 id="_77-\u7EC4\u5408" tabindex="-1">77. \u7EC4\u5408 <a class="header-anchor" href="#_77-\u7EC4\u5408" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">combine</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> chosen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u526A\u679D \u5982\u679C\u5DF2\u7ECF\u9009\u4E86\u8D85\u8FC7k\u4E2A\uFF0C\u6216\u8005\u8BF4\u5269\u4E0B\u9009\u62E9\u7684\u5168\u90E8\u4E5F\u4E0D\u591Fk\u4E2A\uFF0C\u8BF4\u660E\u80AF\u5B9A\u4E0D\u5408\u6CD5\u4E86\uFF0C\u63D0\u524D\u9000\u51FA</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>chosen<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> k <span class="token operator">||</span> chosen<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token keyword">return</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>chosen<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>chosen<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> chosen<span class="token punctuation">)</span>
      chosen<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
      <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> chosen<span class="token punctuation">)</span>
      chosen<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>


</code></pre></div><h2 id="_78-\u5B50\u96C6" tabindex="-1">78.\u5B50\u96C6 <a class="header-anchor" href="#_78-\u5B50\u96C6" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {number[][]}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">subsets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> chosen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9012\u5F52\u8FB9\u754C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>chosen<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> chosen<span class="token punctuation">)</span>
      chosen<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> chosen<span class="token punctuation">)</span>
      chosen<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>

</code></pre></div>`,9),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(t,[["render",e]]);export{m as __pageData,h as default};
