import{_ as n,c as s,o as a,d as p}from"./app.65ddda17.js";const w='{"title":"\u5B57\u7B26\u4E32\u7ECF\u5178\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","slug":"_3-\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32"},{"level":2,"title":"8.\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570","slug":"_8-\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570"},{"level":2,"title":"9.\u56DE\u6587\u6570","slug":"_9-\u56DE\u6587\u6570"},{"level":2,"title":"20.\u6709\u6548\u7684\u62EC\u53F7","slug":"_20-\u6709\u6548\u7684\u62EC\u53F7"},{"level":2,"title":"30.\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32","slug":"_30-\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32"},{"level":2,"title":"49. \u5B57\u6BCD\u7684\u5F02\u4F4D\u8BCD","slug":"_49-\u5B57\u6BCD\u7684\u5F02\u4F4D\u8BCD"},{"level":2,"title":"242. \u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD","slug":"_242-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD"},{"level":2,"title":"\u5251\u6307Offer 05. \u66FF\u6362\u7A7A\u683C","slug":"\u5251\u6307offer-05-\u66FF\u6362\u7A7A\u683C"},{"level":2,"title":"387.\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26","slug":"_387-\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26"}],"relativePath":"algorithm/topic/String.md","lastUpdated":1641362747807}',t={},o=p(`<h1 id="\u5B57\u7B26\u4E32\u7ECF\u5178\u95EE\u9898" tabindex="-1">\u5B57\u7B26\u4E32\u7ECF\u5178\u95EE\u9898 <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7ECF\u5178\u95EE\u9898" aria-hidden="true">#</a></h1><h2 id="_3-\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" tabindex="-1">3.\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32 <a class="header-anchor" href="#_3-\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u5B57\u5178</span>
    <span class="token keyword">const</span> window <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u8BB0\u5F55\u7ED3\u679C</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span>
      right<span class="token operator">++</span>
      <span class="token comment">// \u8FDB\u884C\u7A97\u53E3\u5185\u6570\u636E\u7684\u4E00\u7CFB\u5217\u66F4\u65B0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
      window<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">++</span>
      <span class="token comment">// \u5224\u65AD\u5DE6\u4FA7\u7A97\u53E3\u662F\u5426\u8981\u6536\u7F29</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> d <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
        left<span class="token operator">++</span>
        <span class="token comment">// \u8FDB\u884C\u7A97\u53E3\u5185\u6570\u636E\u7684\u4E00\u7CFB\u5217\u66F4\u65B0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> window<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
        window<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token operator">--</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5728\u8FD9\u91CC\u66F4\u65B0\u7B54\u6848</span>
      res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> right <span class="token operator">-</span> left<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="_8-\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570" tabindex="-1">8.\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 <a class="header-anchor" href="#_8-\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">myAtoi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Infinity\u4E0D\u80FD\u53C2\u4E0E\u8FD0\u7B97\uFF0C\u53EA\u80FD\u5148\u8FD9\u6837\u5B9A\u4E49\u597D</span>
    <span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token number">2147483647</span>
    <span class="token keyword">const</span> min <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2147483648</span>
    <span class="token comment">// \u521B\u5EFAindex\u6307\u9488</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// \u521B\u5EFA\u7B26\u53F7</span>
    <span class="token keyword">let</span> sign <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token comment">// \u521B\u5EFA\u7ED3\u679C</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">// \u8FB9\u754C\u5904\u7406</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

    <span class="token comment">// \u5220\u9664\u591A\u4F59\u7684\u7A7A\u683C,\u6307\u9488\u5F80\u524D\u8D70</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> index<span class="token operator">++</span>

    <span class="token comment">// \u5904\u7406\u6B63\u8D1F\u53F7</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span> <span class="token operator">||</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sign <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
      index<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7A7A\u5B57\u7B26\u4E32\u4F1A\u88AB\u5F53\u505A0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>charAt <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token keyword">break</span>
      <span class="token keyword">const</span> digit <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// \u4E0D\u662F\u6570\u5B57\u5230\u4E0B\u4E2A\u5B57\u7B26</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>digit <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> digit <span class="token operator">&gt;</span> <span class="token number">9</span> <span class="token operator">||</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>digit<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">break</span>
      <span class="token comment">// \u8FB9\u754C\u5904\u7406</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">&lt;</span> total <span class="token operator">||</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>max <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">===</span> total <span class="token operator">&amp;&amp;</span> max <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">&lt;</span> digit<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sign <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> max <span class="token operator">:</span> min
      <span class="token punctuation">}</span>

      total <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> total <span class="token operator">+</span> digit
      index<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> total <span class="token operator">*</span> sign
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="_9-\u56DE\u6587\u6570" tabindex="-1">9.\u56DE\u6587\u6570 <a class="header-anchor" href="#_9-\u56DE\u6587\u6570" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
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

</code></pre></div><h2 id="_20-\u6709\u6548\u7684\u62EC\u53F7" tabindex="-1">20.\u6709\u6548\u7684\u62EC\u53F7 <a class="header-anchor" href="#_20-\u6709\u6548\u7684\u62EC\u53F7" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
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
</code></pre></div><h2 id="_30-\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32" tabindex="-1">30.\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32 <a class="header-anchor" href="#_30-\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">findSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wordsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> tot <span class="token operator">=</span> <span class="token number">0</span>
    words<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">word</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      tot <span class="token operator">+=</span> word<span class="token punctuation">.</span>length
      <span class="token keyword">let</span> num <span class="token operator">=</span> wordsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>
      wordsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token operator">++</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">+</span> tot <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">valid</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> tot<span class="token punctuation">)</span><span class="token punctuation">,</span> words<span class="token punctuation">,</span> wordsMap<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>

<span class="token comment">/**
 *
 * @param {string} str
 * @param {string[]} words
 * @param {Map&lt;string, number&gt;} wordsMap
 */</span>
<span class="token keyword">function</span> <span class="token function">valid</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> words<span class="token punctuation">,</span> wordsMap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> k <span class="token operator">=</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
  <span class="token keyword">const</span> splitWordsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> splitWordsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>
    splitWordsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">++</span>num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">equalsMap</span><span class="token punctuation">(</span>splitWordsMap<span class="token punctuation">,</span> wordsMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5224\u65AD\u4E24\u4E2Amap\u662F\u5426\u4E00\u6837
 * @param {Map&lt;string, number&gt;} a
 * @param {Map&lt;string, number&gt;} b
 * @returns {undefined}
 */</span>
<span class="token keyword">function</span> <span class="token function">equalsMap</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> a<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>b<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">||</span> b<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> b<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">||</span> a<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findSubstring</span><span class="token punctuation">(</span><span class="token string">&#39;barfoothefoobarman&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findSubstring</span><span class="token punctuation">(</span><span class="token string">&#39;wordgoodgoodgoodbestword&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;word&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;good&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;best&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;word&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="_49-\u5B57\u6BCD\u7684\u5F02\u4F4D\u8BCD" tabindex="-1">49. \u5B57\u6BCD\u7684\u5F02\u4F4D\u8BCD <a class="header-anchor" href="#_49-\u5B57\u6BCD\u7684\u5F02\u4F4D\u8BCD" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string[]} strs
 * @return {string[][]}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">groupAnagrams</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> str <span class="token keyword">of</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1. \u628A\u5B57\u7B26\u4E32\u5206\u5272\u6210\u6570\u7EC4</span>
      <span class="token keyword">const</span> array <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
      <span class="token comment">// 2. \u8FDB\u884C\u6392\u5E8F\uFF0C\u8FD9\u6837\u5F02\u4F4D\u8BCD\u7684key\u4E00\u5B9A\u4E00\u6837\u7684</span>
      array<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> key <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// \u5224\u65AD\u662F\u5426\u6709\uFF0C\u521B\u5EFA\u6570\u7EC4</span>
      <span class="token keyword">const</span> list <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token comment">// \u5F80\u5BF9\u5E94\u7684\u6570\u7EC4\u91CC\u9762push</span>
      list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
      <span class="token comment">// \u5B58\u50A8\u6570\u636E</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> list<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// map\u8F6C\u6570\u7EC4</span>
    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">groupAnagrams</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;eat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tea&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;nat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bat&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_242-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD" tabindex="-1">242. \u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD <a class="header-anchor" href="#_242-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">isAnagram</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">!==</span> t<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">const</span> hashMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hashMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>hashMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      hashMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>hashMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> hashMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> item
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isAnagram</span><span class="token punctuation">(</span><span class="token string">&#39;rat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;car&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="\u5251\u6307offer-05-\u66FF\u6362\u7A7A\u683C" tabindex="-1">\u5251\u6307Offer 05. \u66FF\u6362\u7A7A\u683C <a class="header-anchor" href="#\u5251\u6307offer-05-\u66FF\u6362\u7A7A\u683C" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
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

</code></pre></div><h2 id="_387-\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26" tabindex="-1">387.\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26 <a class="header-anchor" href="#_387-\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">firstUniqChar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> hm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> cur <span class="token operator">=</span> hm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>
      hm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> cur <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> i
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

</code></pre></div>`,19),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{w as __pageData,f as default};
