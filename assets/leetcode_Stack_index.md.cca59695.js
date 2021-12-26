import{_ as n,c as s,o as a,a as p}from"./app.b9cbff89.js";const m='{"title":"\u6808\u7ECF\u5178\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":3,"title":"20.\u6709\u6548\u7684\u62EC\u53F7","slug":"_20-\u6709\u6548\u7684\u62EC\u53F7"},{"level":3,"title":"145.\u4E8C\u53C9\u6811\u7684\u540E\u7EED\u904D\u5386","slug":"_145-\u4E8C\u53C9\u6811\u7684\u540E\u7EED\u904D\u5386"},{"level":3,"title":"331.\u9A8C\u8BC1\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u5E8F\u5217\u5316","slug":"_331-\u9A8C\u8BC1\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u5E8F\u5217\u5316"},{"level":3,"title":"682.\u68D2\u7403\u6BD4\u8D5B","slug":"_682-\u68D2\u7403\u6BD4\u8D5B"},{"level":3,"title":"844.\u6BD4\u8F83\u542B\u9000\u683C\u7684\u5B57\u7B26\u4E32","slug":"_844-\u6BD4\u8F83\u542B\u9000\u683C\u7684\u5B57\u7B26\u4E32"},{"level":3,"title":"946.\u9A8C\u8BC1\u6808\u5E8F\u5217","slug":"_946-\u9A8C\u8BC1\u6808\u5E8F\u5217"},{"level":3,"title":"1021.\u5220\u9664\u6700\u5916\u5C42\u7684\u62EC\u53F7","slug":"_1021-\u5220\u9664\u6700\u5916\u5C42\u7684\u62EC\u53F7"},{"level":3,"title":"1249.\u79FB\u9664\u65E0\u6548\u7684\u62EC\u53F7","slug":"_1249-\u79FB\u9664\u65E0\u6548\u7684\u62EC\u53F7"},{"level":3,"title":"","slug":""}],"relativePath":"leetcode/Stack/index.md","lastUpdated":1640530572059}',t={},o=p(`<h1 id="\u6808\u7ECF\u5178\u95EE\u9898" tabindex="-1">\u6808\u7ECF\u5178\u95EE\u9898 <a class="header-anchor" href="#\u6808\u7ECF\u5178\u95EE\u9898" aria-hidden="true">#</a></h1><h3 id="_20-\u6709\u6548\u7684\u62EC\u53F7" tabindex="-1">20.\u6709\u6548\u7684\u62EC\u53F7 <a class="header-anchor" href="#_20-\u6709\u6548\u7684\u62EC\u53F7" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {boolean}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> ch <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">!==</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token comment">// return false</span>
        <span class="token punctuation">}</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token comment">// console.log(isValid(&#39;()&#39;))</span>
<span class="token comment">// console.log(isValid(&#39;()[]{}&#39;))</span>
<span class="token comment">// console.log(isValid(&#39;(]&#39;))</span>
<span class="token comment">// console.log(isValid(&#39;([)]&#39;))</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token string">&#39;()[]{}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_145-\u4E8C\u53C9\u6811\u7684\u540E\u7EED\u904D\u5386" tabindex="-1">145.\u4E8C\u53C9\u6811\u7684\u540E\u7EED\u904D\u5386 <a class="header-anchor" href="#_145-\u4E8C\u53C9\u6811\u7684\u540E\u7EED\u904D\u5386" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number[]}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    root <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">postorderTraversal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_331-\u9A8C\u8BC1\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u5E8F\u5217\u5316" tabindex="-1">331.\u9A8C\u8BC1\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u5E8F\u5217\u5316 <a class="header-anchor" href="#_331-\u9A8C\u8BC1\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u5E8F\u5217\u5316" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} preorder
 * @return {boolean}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">isValidSerialization</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> preorder<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> i<span class="token operator">++</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">--</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> preorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">--</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidSerialization</span><span class="token punctuation">(</span><span class="token string">&#39;9,3,4,#,#,1,#,#,2,#,6,#,#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="_682-\u68D2\u7403\u6BD4\u8D5B" tabindex="-1">682.\u68D2\u7403\u6BD4\u8D5B <a class="header-anchor" href="#_682-\u68D2\u7403\u6BD4\u8D5B" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string[]} ops
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">calPoints</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ops</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> ops<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;C&#39;</span> <span class="token operator">:</span>
        <span class="token comment">// &quot;C&quot; - \u8868\u793A\u524D\u4E00\u6B21\u5F97\u5206\u65E0\u6548\uFF0C\u5C06\u5176\u4ECE\u8BB0\u5F55\u4E2D\u79FB\u9664\u3002\u9898\u76EE\u6570\u636E\u4FDD\u8BC1\u8BB0\u5F55\u6B64\u64CD\u4F5C\u65F6\u524D\u9762\u603B\u662F\u5B58\u5728\u4E00\u4E2A\u6709\u6548\u7684\u5206\u6570\u3002</span>
        result<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;D&#39;</span><span class="token operator">:</span>
        <span class="token comment">// &quot;D&quot; - \u8868\u793A\u672C\u56DE\u5408\u65B0\u83B7\u5F97\u7684\u5F97\u5206\u662F\u524D\u4E00\u6B21\u5F97\u5206\u7684\u4E24\u500D\u3002\u9898\u76EE\u6570\u636E\u4FDD\u8BC1\u8BB0\u5F55\u6B64\u64CD\u4F5C\u65F6\u524D\u9762\u603B\u662F\u5B58\u5728\u4E00\u4E2A\u6709\u6548\u7684\u5206\u6570\u3002</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>result<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;+&#39;</span> <span class="token operator">:</span>
        <span class="token comment">// &quot;+&quot; - \u8868\u793A\u672C\u56DE\u5408\u65B0\u83B7\u5F97\u7684\u5F97\u5206\u662F\u524D\u4E24\u6B21\u5F97\u5206\u7684\u603B\u548C\u3002\u9898\u76EE\u6570\u636E\u4FDD\u8BC1\u8BB0\u5F55\u6B64\u64CD\u4F5C\u65F6\u524D\u9762\u603B\u662F\u5B58\u5728\u4E24\u4E2A\u6709\u6548\u7684\u5206\u6570\u3002</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>result<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> result<span class="token punctuation">[</span>result<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">+</span>num<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calPoints</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 30</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calPoints</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 27</span>

</code></pre></div><h3 id="_844-\u6BD4\u8F83\u542B\u9000\u683C\u7684\u5B57\u7B26\u4E32" tabindex="-1">844.\u6BD4\u8F83\u542B\u9000\u683C\u7684\u5B57\u7B26\u4E32 <a class="header-anchor" href="#_844-\u6BD4\u8F83\u542B\u9000\u683C\u7684\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">backspaceCompare</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     *
     * @param {string} s
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">processed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> ch <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">processed</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">processed</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">backspaceCompare</span><span class="token punctuation">(</span><span class="token string">&#39;ab#c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ad#c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// S \u548C T \u90FD\u4F1A\u53D8\u6210 \u201Cac\u201D\u3002 true</span>

</code></pre></div><h3 id="_946-\u9A8C\u8BC1\u6808\u5E8F\u5217" tabindex="-1">946.\u9A8C\u8BC1\u6808\u5E8F\u5217 <a class="header-anchor" href="#_946-\u9A8C\u8BC1\u6808\u5E8F\u5217" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">validateStackSequences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pushed<span class="token punctuation">,</span> popped</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> pushed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> popped<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        cur<span class="token operator">++</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">validateStackSequences</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">validateStackSequences</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_1021-\u5220\u9664\u6700\u5916\u5C42\u7684\u62EC\u53F7" tabindex="-1">1021.\u5220\u9664\u6700\u5916\u5C42\u7684\u62EC\u53F7 <a class="header-anchor" href="#_1021-\u5220\u9664\u6700\u5916\u5C42\u7684\u62EC\u53F7" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {string}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">removeOuterParentheses</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> opened <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> ch <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">&amp;&amp;</span> opened<span class="token operator">++</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> res <span class="token operator">+=</span> ch
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span> <span class="token operator">&amp;&amp;</span> opened<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> res <span class="token operator">+=</span> ch
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">removeOuterParentheses</span><span class="token punctuation">(</span><span class="token string">&#39;(()())(())&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="_1249-\u79FB\u9664\u65E0\u6548\u7684\u62EC\u53F7" tabindex="-1">1249.\u79FB\u9664\u65E0\u6548\u7684\u62EC\u53F7 <a class="header-anchor" href="#_1249-\u79FB\u9664\u65E0\u6548\u7684\u62EC\u53F7" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {string}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">minRemoveToMakeValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> leftDel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rightDel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        leftDel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftDel<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          leftDel<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          rightDel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>s<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> del <span class="token operator">=</span> leftDel<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>rightDel<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> del<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">[</span>del<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">minRemoveToMakeValid</span><span class="token punctuation">(</span><span class="token string">&#39;lee(t(c)o)de)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,18),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(t,[["render",e]]);export{m as __pageData,h as default};
