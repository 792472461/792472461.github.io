import{_ as n,c as s,o as a,d as p}from"./app.7e9cfa17.js";const b='{"title":"\u52A8\u6001\u89C4\u5212","description":"","frontmatter":{},"headers":[{"level":2,"title":"62. \u4E0D\u540C\u8DEF\u5F84","slug":"_62-\u4E0D\u540C\u8DEF\u5F84"},{"level":2,"title":"63. \u4E0D\u540C\u8DEF\u5F84\u2161","slug":"_63-\u4E0D\u540C\u8DEF\u5F84\u2171"},{"level":2,"title":"70. \u722C\u697C\u68AF","slug":"_70-\u722C\u697C\u68AF"}],"relativePath":"algorithm/topic/DP.md","lastUpdated":1642042020596}',t={},o=p(`<h1 id="\u52A8\u6001\u89C4\u5212" tabindex="-1">\u52A8\u6001\u89C4\u5212 <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a></h1><h2 id="_62-\u4E0D\u540C\u8DEF\u5F84" tabindex="-1">62. \u4E0D\u540C\u8DEF\u5F84 <a class="header-anchor" href="#_62-\u4E0D\u540C\u8DEF\u5F84" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">uniquePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cur <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> cur<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cur<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>


</code></pre></div><h2 id="_63-\u4E0D\u540C\u8DEF\u5F84\u2171" tabindex="-1">63. \u4E0D\u540C\u8DEF\u5F84\u2161 <a class="header-anchor" href="#_63-\u4E0D\u540C\u8DEF\u5F84\u2171" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">uniquePathsWithObstacles</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obstacleGrid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> width <span class="token operator">=</span> obstacleGrid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> row <span class="token keyword">of</span> obstacleGrid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> width<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>width <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

</code></pre></div><h2 id="_70-\u722C\u697C\u68AF" tabindex="-1">70. \u722C\u697C\u68AF <a class="header-anchor" href="#_70-\u722C\u697C\u68AF" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ans<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ans<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ans<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> ans<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> ans<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>


</code></pre></div>`,7),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{b as __pageData,w as default};
