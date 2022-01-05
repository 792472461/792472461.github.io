import{_ as n,c as s,o as a,d as p}from"./app.4fc031e0.js";const w='{"title":"\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0"}],"relativePath":"algorithm/data-structure/LinkedList.md","lastUpdated":1641363660755}',t={},o=p(`<h1 id="\u94FE\u8868" tabindex="-1">\u94FE\u8868 <a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u5DF2\u77E5\u7684\u7EBF\u6027\u6570\u636E\u7ED3\u6784</p><ol><li>\u52A8\u6001\u6570\u7EC4</li><li>\u6808</li><li>\u961F\u5217</li></ol><p>\u4EE5\u4E0A\u4E09\u79CD\u6570\u636E\u7ED3\u6784\u5E95\u5C42\u4F9D\u8D56\u52A8\u6001\u6570\u7EC4\uFF1B\u9760resize\u89E3\u51B3\u56FA\u5B9A\u5BB9\u91CF\u7684\u95EE\u9898\uFF0C\u800C\u94FE\u8868\u662F\u771F\u6B63\u7684\u52A8\u6001\u6570\u636E\u7ED3\u6784</p><div class="tip custom-block"><p class="custom-block-title">\u94FE\u8868\u5F88\u91CD\u8981</p><ol><li>\u94FE\u8868\u662F\u771F\u6B63\u7684\u52A8\u6001\u6570\u636E\u7ED3\u6784</li><li>\u6700\u7B80\u5355\u7684\u52A8\u6001\u6570\u636E\u7ED3\u6784</li><li>\u66F4\u6DF1\u5165\u7406\u89E3\u6307\u9488</li><li>\u53EF\u4EE5\u66F4\u6DF1\u5165\u7406\u89E3\u9012\u5F52</li><li>\u8F85\u52A9\u53EF\u4EE5\u7EC4\u6210\u5176\u4ED6\u6570\u636E\u7ED3\u6784</li></ol></div><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> e
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
  <span class="token punctuation">}</span>

  <span class="token function">toString</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> cur<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    res <span class="token operator">+=</span> <span class="token string">&#39;NULL&#39;</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u94FE\u8868
 */</span>
<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u501F\u52A9\u4E86\u865A\u62DF\u5934\u8282\u70B9</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8FD4\u56DEhead\u5934\u8282\u70B9</span>
  <span class="token keyword">get</span> <span class="token function">head</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u94FE\u8868\u957F\u5EA6</span>
  <span class="token function">getSize</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5224\u65AD\u94FE\u8868\u662F\u5426\u4E3A\u7A7A</span>
  <span class="token function">isEmpty</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u65B0\u589E\u5143\u7D20</span>
  <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u7D22\u5F15&#39;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&#39;\u51FA\u9519&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u8FD9\u91CC\u501F\u52A9\u4E86\u865A\u62DF\u5934\u8282\u70B9</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5728\u94FE\u8868\u5934\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20</span>
  <span class="token function">addFirst</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5728\u94FE\u8868\u7ED3\u5C3E\u6DFB\u52A0\u5143\u7D20</span>
  <span class="token function">addLast</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u94FE\u8868\u7B2Cindex\u4E2A\u5143\u7D20</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u7D22\u5F15&#39;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&#39;\u51FA\u9519&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cur<span class="token punctuation">.</span>val
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
  <span class="token function">getFirst</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
  <span class="token function">getLast</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4FEE\u6539\u94FE\u8868\u4E2D\u7B2Cindex\u4E2A\u5143\u7D20\u4E3Ae</span>
  <span class="token function">set</span> <span class="token punctuation">(</span>e<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u7D22\u5F15&#39;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&#39;\u51FA\u9519&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index <span class="token operator">&amp;&amp;</span> cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    cur<span class="token punctuation">.</span>val <span class="token operator">=</span> e
  <span class="token punctuation">}</span>

  <span class="token comment">// \u67E5\u627E\u94FE\u8868\u4E2D\u662F\u5426\u542B\u6709\u5143\u7D20e</span>
  <span class="token function">contains</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">===</span> e<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5220\u9664\u94FE\u8868\u4E2D\u7B2Cindex\u4F4D\u7F6E\u7684\u5143\u7D20</span>
  <span class="token keyword">delete</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u7D22\u5F15&#39;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&#39;\u51FA\u9519&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> ret <span class="token operator">=</span> prev<span class="token punctuation">.</span>next
    prev<span class="token punctuation">.</span>next <span class="token operator">=</span> ret<span class="token punctuation">.</span>next
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5220\u9664\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
  <span class="token function">deleteFirst</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5220\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
  <span class="token function">deleteLast</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> cur<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    res <span class="token operator">+=</span> <span class="token string">&#39;NULL&#39;</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // \u6D4B\u8BD5\u94FE\u8868\u7A0B\u5E8F</span>
<span class="token comment">// const linkedList = new LinkedList()</span>

<span class="token comment">// for (let i = 0; i &lt; 10; i++) {</span>
<span class="token comment">//   // \u6DFB\u52A0\u5143\u7D20</span>
<span class="token comment">//   linkedList.addFirst(i)</span>
<span class="token comment">// }</span>

<span class="token comment">// // \u5220\u9664\u5143\u7D20</span>
<span class="token comment">// linkedList.delete(5)</span>
<span class="token comment">// console.log(linkedList.getSize(), linkedList.toString())</span>

<span class="token comment">// linkedList.deleteLast()</span>
<span class="token comment">// console.log(linkedList.getSize(), linkedList.toString())</span>

</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u94FE\u8868\u65F6\u95F4\u590D\u6742\u5EA6\u5206\u6790</p><ul><li>\u6DFB\u52A0\u5143\u7D20 <ol><li>addLast(e) O(n)</li><li>addFist(e) O(1)</li><li>add(e, index) O(n/2) = O(n)</li></ol></li><li>\u5220\u9664 <ol><li>deleteLast(e) O(n)</li><li>deleteFist(e) O(1)</li><li>delete(e, index) O(n/2) = O(n)</li></ol></li><li>\u67E5\u627E <ol><li>get(index) O(n)</li><li>contains(e) O(n)</li><li>add(e, index) O(n/2) = O(n)</li></ol></li><li>\u4FEE\u6539 <ol><li>set(e, index) O(n)</li></ol></li></ul><p>\u589E\uFF1AO(n) \u5982\u679C\u53EA\u5BF9\u94FE\u8868\u5934\u8FDB\u884C\u64CD\u4F5CO(1) \u5220: O(n) \u5982\u679C\u53EA\u5BF9\u94FE\u8868\u5934\u8FDB\u884C\u64CD\u4F5CO(1) \u6539: O(n) \u67E5: O(n) \u5982\u679C\u53EA\u5BF9\u94FE\u8868\u5934\u8FDB\u884C\u64CD\u4F5CO(1)</p></div>`,8),e=[o];function c(l,k,u,i,r,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{w as __pageData,y as default};
