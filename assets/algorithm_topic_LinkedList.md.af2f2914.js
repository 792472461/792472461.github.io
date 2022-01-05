import{_ as n,c as s,o as a,d as p}from"./app.4fc031e0.js";const w='{"title":"\u94FE\u8868\u7ECF\u5178\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u94FE\u8868\u5B9E\u73B0","slug":"\u94FE\u8868\u5B9E\u73B0"},{"level":2,"title":"141.\u73AF\u5F62\u94FE\u8868","slug":"_141-\u73AF\u5F62\u94FE\u8868"},{"level":2,"title":"142.\u73AF\u5F62\u94FE\u8868\u2161","slug":"_142-\u73AF\u5F62\u94FE\u8868\u2171"},{"level":2,"title":"19.\u5220\u9664\u94FE\u8868\u4E2D\u7684\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9","slug":"_19-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9"},{"level":2,"title":"21.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868","slug":"_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868"},{"level":2,"title":"24.\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9","slug":"_24-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9"},{"level":2,"title":"25.k\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868","slug":"_25-k\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868"},{"level":2,"title":"61.\u65CB\u8F6C\u94FE\u8868","slug":"_61-\u65CB\u8F6C\u94FE\u8868"},{"level":2,"title":"82.\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20\u2161","slug":"_82-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20\u2171"},{"level":2,"title":"83.\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20","slug":"_83-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20"},{"level":2,"title":"86.\u5206\u5272\u94FE\u8868","slug":"_86-\u5206\u5272\u94FE\u8868"},{"level":2,"title":"92.\u53CD\u8F6C\u94FE\u8868\u2161","slug":"_92-\u53CD\u8F6C\u94FE\u8868\u2171"},{"level":2,"title":"146.LRU\u7F13\u5B58","slug":"_146-lru\u7F13\u5B58"},{"level":2,"title":"202.\u5FEB\u4E50\u6570","slug":"_202-\u5FEB\u4E50\u6570"},{"level":2,"title":"203.\u79FB\u9664\u94FE\u8868\u5143\u7D20","slug":"_203-\u79FB\u9664\u94FE\u8868\u5143\u7D20"},{"level":2,"title":"206.\u53CD\u8F6C\u94FE\u8868\u2160","slug":"_206-\u53CD\u8F6C\u94FE\u8868\u2170"},{"level":2,"title":"\u5251\u6307 Offer 06. \u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868","slug":"\u5251\u6307-offer-06-\u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868"}],"relativePath":"algorithm/topic/LinkedList.md","lastUpdated":1641363056444}',t={},o=p(`<h1 id="\u94FE\u8868\u7ECF\u5178\u95EE\u9898" tabindex="-1">\u94FE\u8868\u7ECF\u5178\u95EE\u9898 <a class="header-anchor" href="#\u94FE\u8868\u7ECF\u5178\u95EE\u9898" aria-hidden="true">#</a></h1><h2 id="\u94FE\u8868\u5B9E\u73B0" tabindex="-1">\u94FE\u8868\u5B9E\u73B0 <a class="header-anchor" href="#\u94FE\u8868\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>e <span class="token operator">=</span> e
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
  <span class="token punctuation">}</span>

  <span class="token function">toString</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> cur<span class="token punctuation">.</span>e <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span>
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
    <span class="token keyword">return</span> cur<span class="token punctuation">.</span>e
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
    cur<span class="token punctuation">.</span>e <span class="token operator">=</span> e
  <span class="token punctuation">}</span>

  <span class="token comment">// \u67E5\u627E\u94FE\u8868\u4E2D\u662F\u5426\u542B\u6709\u5143\u7D20e</span>
  <span class="token function">contains</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>e <span class="token operator">===</span> e<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5220\u9664\u94FE\u8868\u4E2D\u7B2Cindex\u4F4D\u7F6E\u7684\u5143\u7D20</span>
  <span class="token keyword">delete</span> <span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5220\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
  <span class="token function">deleteLast</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> cur<span class="token punctuation">.</span>e <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span>
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

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  LinkedList<span class="token punctuation">,</span>
  Node
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_141-\u73AF\u5F62\u94FE\u8868" tabindex="-1">141.\u73AF\u5F62\u94FE\u8868 <a class="header-anchor" href="#_141-\u73AF\u5F62\u94FE\u8868" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868\uFF0C\u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF\u3002
 * \u5982\u679C\u94FE\u8868\u4E2D\u6709\u67D0\u4E2A\u8282\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u8DDF\u8E2A next \u6307\u9488\u518D\u6B21\u5230\u8FBE\uFF0C\u5219\u94FE\u8868\u4E2D\u5B58\u5728\u73AF\u3002
 * \u4E3A\u4E86\u8868\u793A\u7ED9\u5B9A\u94FE\u8868\u4E2D\u7684\u73AF\uFF0C\u6211\u4EEC\u4F7F\u7528\u6574\u6570 pos \u6765\u8868\u793A\u94FE\u8868\u5C3E\u8FDE\u63A5\u5230\u94FE\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u7D22\u5F15\u4ECE 0 \u5F00\u59CB\uFF09\u3002
 * \u5982\u679C pos \u662F -1\uFF0C\u5219\u5728\u8BE5\u94FE\u8868\u4E2D\u6CA1\u6709\u73AF\u3002\u6CE8\u610F\uFF1Apos \u4E0D\u4F5C\u4E3A\u53C2\u6570\u8FDB\u884C\u4F20\u9012\uFF0C\u4EC5\u4EC5\u662F\u4E3A\u4E86\u6807\u8BC6\u94FE\u8868\u7684\u5B9E\u9645\u60C5\u51B5\u3002
 * \u5982\u679C\u94FE\u8868\u4E2D\u5B58\u5728\u73AF\uFF0C\u5219\u8FD4\u56DE true \u3002 \u5426\u5219\uFF0C\u8FD4\u56DE false \u3002
 */</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>

<span class="token comment">/**
 * @param {ListNode} head
 * @return {boolean}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

  <span class="token keyword">let</span> p <span class="token operator">=</span> head
  <span class="token keyword">let</span> q <span class="token operator">=</span> head

  <span class="token keyword">while</span> <span class="token punctuation">(</span>q <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next
    q <span class="token operator">=</span> q<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token comment">// \u5982\u679C\u76F8\u9047\u8BC1\u660E\u6709\u73AF</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_142-\u73AF\u5F62\u94FE\u8868\u2171" tabindex="-1">142.\u73AF\u5F62\u94FE\u8868\u2161 <a class="header-anchor" href="#_142-\u73AF\u5F62\u94FE\u8868\u2171" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868\uFF0C\u8FD4\u56DE\u94FE\u8868\u5F00\u59CB\u5165\u73AF\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u3002
 * \u5982\u679C\u94FE\u8868\u65E0\u73AF\uFF0C\u5219\u8FD4\u56DEnull\u3002
 * \u4E3A\u4E86\u8868\u793A\u7ED9\u5B9A\u94FE\u8868\u4E2D\u7684\u73AF\uFF0C\u6211\u4EEC\u4F7F\u7528\u6574\u6570 pos \u6765\u8868\u793A\u94FE\u8868\u5C3E\u8FDE\u63A5\u5230\u94FE\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u7D22\u5F15\u4ECE 0 \u5F00\u59CB\uFF09\u3002
 * \u5982\u679C pos \u662F -1\uFF0C\u5219\u5728\u8BE5\u94FE\u8868\u4E2D\u6CA1\u6709\u73AF\u3002\u6CE8\u610F\uFF0Cpos \u4EC5\u4EC5\u662F\u7528\u4E8E\u6807\u8BC6\u73AF\u7684\u60C5\u51B5\uFF0C\u5E76\u4E0D\u4F1A\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u5230\u51FD\u6570\u4E2D\u3002
 */</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>

<span class="token comment">/**
 * @param {ListNode} head
 * @return {ListNode}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token keyword">let</span> p <span class="token operator">=</span> head
  <span class="token keyword">let</span> q <span class="token operator">=</span> head

  <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next
    q <span class="token operator">=</span> q<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!==</span> q <span class="token operator">&amp;&amp;</span> q <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span>next<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>q <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> q<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  p <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!==</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next
    q <span class="token operator">=</span> q<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> q
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_19-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9" tabindex="-1">19.\u5220\u9664\u94FE\u8868\u4E2D\u7684\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9 <a class="header-anchor" href="#_19-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65ADhead\u662F\u5426\u4E3A\u7A7A</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head
  <span class="token comment">// \u521B\u5EFA\u865A\u62DF\u5934\u8282\u70B9</span>
  <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> ret
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head
  <span class="token comment">// \u8BA9cur\u79FB\u52A8k\u6B65</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">.</span>next
  <span class="token comment">// \u7136\u540E\u8BA9\u4E24\u4E2A\u6307\u9488\u4E00\u8D77\u79FB\u52A8\uFF0C\u77E5\u9053cur\u6307\u5411\u7A7A</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  pre<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token comment">// \u7136\u540E\u5220\u9664</span>
  <span class="token keyword">return</span> ret<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span>head<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" tabindex="-1">21.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868 <a class="header-anchor" href="#_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> l2
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>l2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> l1
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> l2<span class="token punctuation">)</span>
    <span class="token keyword">return</span> l1
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    l2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
    <span class="token keyword">return</span> l2
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="_24-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1">24.\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9 <a class="header-anchor" href="#_24-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> l2
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> l1
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> l2<span class="token punctuation">)</span>
    <span class="token keyword">return</span> l1
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    l2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
    <span class="token keyword">return</span> l2
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_25-k\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868" tabindex="-1">25.k\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868 <a class="header-anchor" href="#_25-k\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">// @lc code=start</span>
<span class="token keyword">function</span> <span class="token function">ListNode</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">reverseKGroup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> protect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
  <span class="token keyword">let</span> last <span class="token operator">=</span> protect
  <span class="token comment">// \u5206\u7EC4\u904D\u5386</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u5206\u7EC4(\u5F80\u540E\u627Ek-1\u6B65\uFF0C\u627E\u5230\u4E00\u7EC4)</span>
    <span class="token comment">// \u4E00\u7EC4\u7684\u5F00\u5934head\u7ED3\u5C3Eend</span>
    <span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token function">getEnd</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">break</span>

    <span class="token keyword">const</span> nextGroupHead <span class="token operator">=</span> end<span class="token punctuation">.</span>next

    <span class="token comment">// 2. \u4E00\u7EC4\u5185\u90E8(head\u5230end\u4E4B\u95F4)\u8981\u53CD\u8F6C</span>
    <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> nextGroupHead<span class="token punctuation">)</span>

    <span class="token comment">// 3. \u66F4\u65B0\u524D\u4E00\u7EC4\u548C\u540E\u4E00\u7EC4\u7684\u8FB9</span>
    last<span class="token punctuation">.</span>next <span class="token operator">=</span> end
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> nextGroupHead

    last <span class="token operator">=</span> head
    head <span class="token operator">=</span> nextGroupHead
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> protect<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getEnd</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    k<span class="token operator">--</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">reverseList</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> stop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> last <span class="token operator">=</span> head
  head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> stop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nextHead <span class="token operator">=</span> head<span class="token punctuation">.</span>next
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> last
    last <span class="token operator">=</span> head
    head <span class="token operator">=</span> nextHead
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> last
<span class="token punctuation">}</span>

<span class="token comment">// @lc code=end</span>

</code></pre></div><h2 id="_61-\u65CB\u8F6C\u94FE\u8868" tabindex="-1">61.\u65CB\u8F6C\u94FE\u8868 <a class="header-anchor" href="#_61-\u65CB\u8F6C\u94FE\u8868" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] \u65CB\u8F6C\u94FE\u8868
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">rotateRight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head
  <span class="token comment">// \u94FE\u8868\u4E32\u73AF</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head
  <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    size <span class="token operator">+=</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  cur<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size <span class="token operator">-</span> k <span class="token operator">%</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> cur
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>

</code></pre></div><h2 id="_82-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20\u2171" tabindex="-1">82.\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20\u2161 <a class="header-anchor" href="#_82-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20\u2171" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20 II
 */</span>

<span class="token comment">// @lc code=start</span>

<span class="token keyword">function</span> <span class="token function">ListNode</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {ListNode} head
 * @return {ListNode}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head
  <span class="token punctuation">}</span>
  <span class="token comment">// \u521B\u5EFA\u865A\u62DF\u5934\u7ED3\u70B9</span>
  <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>

  <span class="token keyword">let</span> cur <span class="token operator">=</span> dummy
  <span class="token comment">// \u4FDD\u8BC1\u4E0B\u4E2A\u548C\u4E0B\u4E0B\u4E2A\u4E0D\u4E3Anull</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4E0B\u4E2A\u548C\u4E0B\u4E0B\u4E2A\u4E24\u4E2A\u503C\u76F8\u7B49</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> x <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
      <span class="token comment">// \u53EA\u8981\u4E0B\u4E2A\u548C\u4E0B\u4E2A\u76F8\u7B49</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u79FB\u52A8\u6307\u9488</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>

</code></pre></div><h2 id="_83-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20" tabindex="-1">83.\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20 <a class="header-anchor" href="#_83-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/* eslint-disable no-unused-vars */</span>
<span class="token comment">/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @return {ListNode}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head
  <span class="token keyword">let</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u503C\u76F8\u7B49\uFF0C\u7B2C\u4E8C\u4E2A\u6307\u9488\u5F80\u540E\u79FB\u52A8</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
      pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E0D\u76F8\u7B49\uFF0C\u4E24\u4E2A\u6307\u9488\u5F80\u540E\u90FD\u79FB\u52A8</span>
      <span class="token comment">// pre = pre.next</span>
      <span class="token comment">// cur = cur.next</span>
      <span class="token comment">// [pre, cur] = [pre.next, cur.next]</span>
      pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>

</code></pre></div><h2 id="_86-\u5206\u5272\u94FE\u8868" tabindex="-1">86.\u5206\u5272\u94FE\u8868 <a class="header-anchor" href="#_86-\u5206\u5272\u94FE\u8868" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/* eslint-disable no-unused-vars */</span>
<span class="token comment">/* eslint-disable no-undef */</span>
<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u4E24\u4E2A\u4E2A\u989D\u5916\u7684\u94FE\u8868\uFF0C\u5206\u522B\u7528\u6765\u5B58\u50A8\u5C0F\u4E8Ex\u7684\u503C\u548C\u5927\u4E8Ex\u7684\u503C</span>
  <span class="token keyword">let</span> small <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> smallHead <span class="token operator">=</span> small
  <span class="token keyword">let</span> large <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> largeHead <span class="token operator">=</span> large
  <span class="token comment">// \u904D\u5386\u539F\u94FE\u8868</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      small<span class="token punctuation">.</span>next <span class="token operator">=</span> head
      small <span class="token operator">=</span> small<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      large<span class="token punctuation">.</span>next <span class="token operator">=</span> head
      large <span class="token operator">=</span> large<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6539\u53D8\u5934\u6307\u9488</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5904\u7406\u5C3E\u8FB9\u754C</span>
  large<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// \u8FDE\u63A5\u4E24\u4E2A\u94FE\u8868</span>
  small<span class="token punctuation">.</span>next <span class="token operator">=</span> largeHead<span class="token punctuation">.</span>next
  <span class="token comment">// \u8FD4\u56DE\u5C0F\u94FE\u8868\u7684next\uFF0C\u5934\u8282\u70B9\u662F0</span>
  <span class="token keyword">return</span> smallHead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_92-\u53CD\u8F6C\u94FE\u8868\u2171" tabindex="-1">92.\u53CD\u8F6C\u94FE\u8868\u2161 <a class="header-anchor" href="#_92-\u53CD\u8F6C\u94FE\u8868\u2171" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre

    pre <span class="token operator">=</span> cur
    cur <span class="token operator">=</span> next
  <span class="token punctuation">}</span>
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> cur
  <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">reverseBetween</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> ret
  <span class="token keyword">const</span> cnt <span class="token operator">=</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>next<span class="token punctuation">,</span> cnt<span class="token punctuation">)</span>
  <span class="token keyword">return</span> ret<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reverseBetween</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span>head<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="_146-lru\u7F13\u5B58" tabindex="-1">146.LRU\u7F13\u5B58 <a class="header-anchor" href="#_146-lru\u7F13\u5B58" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">Node</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> pre <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val
  <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pre <span class="token operator">=</span> next
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> pre
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {number} capacity
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">LRUCache</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">capacity</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>h <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
  <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
  <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {number} key
 * @return {number}
 */</span>
<span class="token class-name">LRUCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6CA1\u6709\u5C31\u8FD4\u56DE-1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token comment">// \u5982\u679C\u5B58\u5728</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">,</span> node<span class="token punctuation">)</span>
  <span class="token keyword">return</span> node<span class="token punctuation">.</span>val
<span class="token punctuation">}</span>

<span class="token class-name">LRUCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  node<span class="token punctuation">.</span>pre<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next
  node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> node<span class="token punctuation">.</span>pre
<span class="token punctuation">}</span>

<span class="token class-name">LRUCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> node
  node<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">.</span>next
  p<span class="token punctuation">.</span>next <span class="token operator">=</span> node
  node<span class="token punctuation">.</span>pre <span class="token operator">=</span> p
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */</span>
<span class="token class-name">LRUCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">put</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token comment">// \u5B58\u50A8\u4E00\u4E0B\u8FD9\u4E2Akey</span>
    node<span class="token punctuation">.</span>key <span class="token operator">=</span> key
    <span class="token keyword">this</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">,</span> node<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>pre<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
      <span class="token comment">// \u5220\u9664\u6700\u540E\u4E00\u4E2A</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>pre<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    node<span class="token punctuation">.</span>val <span class="token operator">=</span> value
    <span class="token comment">// \u4ECE\u94FE\u8868\u4E2D\u5220\u9664</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token comment">// \u52A0\u5230\u6700\u524D\u9762</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">,</span> node<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */</span>

</code></pre></div><h2 id="_202-\u5FEB\u4E50\u6570" tabindex="-1">202.\u5FEB\u4E50\u6570 <a class="header-anchor" href="#_202-\u5FEB\u4E50\u6570" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] \u5FEB\u4E50\u6570
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token comment">/**
 * @param {number} n
 * @return {boolean}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isHappy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> n
  <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token function">getNext</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token comment">// \u94FE\u8868\u627E\u73AF</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> pre <span class="token operator">&amp;&amp;</span> cur <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre <span class="token operator">=</span> <span class="token function">getNext</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span>
    cur <span class="token operator">=</span> <span class="token function">getNext</span><span class="token punctuation">(</span><span class="token function">getNext</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> cur <span class="token operator">===</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getNext</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    t <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
    n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> t
<span class="token punctuation">}</span>

<span class="token comment">// @lc code=end</span>

</code></pre></div><h2 id="_203-\u79FB\u9664\u94FE\u8868\u5143\u7D20" tabindex="-1">203.\u79FB\u9664\u94FE\u8868\u5143\u7D20 <a class="header-anchor" href="#_203-\u79FB\u9664\u94FE\u8868\u5143\u7D20" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code>
<span class="token keyword">const</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u5934\u8282\u70B9</span>
  <span class="token keyword">const</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  <span class="token keyword">let</span> cur <span class="token operator">=</span> dummyHead

  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> deleteNode <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
      cur<span class="token punctuation">.</span>next <span class="token operator">=</span> deleteNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">removeElements</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span>head<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="_206-\u53CD\u8F6C\u94FE\u8868\u2170" tabindex="-1">206.\u53CD\u8F6C\u94FE\u8868\u2160 <a class="header-anchor" href="#_206-\u53CD\u8F6C\u94FE\u8868\u2170" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> LinkedList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./LinkedList&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  linkedList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u975E\u9012\u5F52\u7248\u672C\u5B9E\u73B0</span>
<span class="token keyword">const</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7F13\u5B58\u4E0B\u4E2A\u8282\u70B9</span>
    <span class="token keyword">const</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token comment">// \u98A0\u5012\u8282\u70B9</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre
    pre <span class="token operator">=</span> cur
    cur <span class="token operator">=</span> next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reverseList</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u9012\u5F52\u7248\u672C\u7684\u5B9E\u73B0</span>
<span class="token keyword">const</span> <span class="token function-variable function">reverseList1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head
  <span class="token keyword">const</span> rev <span class="token operator">=</span> <span class="token function">reverseList1</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
  head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> rev
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reverseList1</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="\u5251\u6307-offer-06-\u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868" tabindex="-1">\u5251\u6307 Offer 06. \u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868 <a class="header-anchor" href="#\u5251\u6307-offer-06-\u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u8282\u70B9\uFF0C\u4ECE\u5C3E\u5230\u5934\u53CD\u8FC7\u6765\u8FD4\u56DE\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\uFF08\u7528\u6570\u7EC4\u8FD4\u56DE\uFF09\u3002</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @return {number[]}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">reversePrint</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div>`,35),e=[o];function c(l,k,u,r,i,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{w as __pageData,y as default};
