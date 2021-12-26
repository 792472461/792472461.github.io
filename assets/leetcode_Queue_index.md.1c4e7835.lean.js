import{_ as n,c as s,o as a,a as p}from"./app.b9cbff89.js";const m='{"title":"\u961F\u5217\u7ECF\u5178\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u4E8E\u94FE\u8868\u5B9E\u73B0\u7684\u961F\u5217","slug":"\u57FA\u4E8E\u94FE\u8868\u5B9E\u73B0\u7684\u961F\u5217"},{"level":3,"title":"622.\u8BBE\u8BA1\u53CC\u7AEF\u961F\u5217","slug":"_622-\u8BBE\u8BA1\u53CC\u7AEF\u961F\u5217"},{"level":3,"title":"641.\u8BBE\u8BA1\u5FAA\u73AF\u53CC\u7AEF\u961F\u5217","slug":"_641-\u8BBE\u8BA1\u5FAA\u73AF\u53CC\u7AEF\u961F\u5217"},{"level":3,"title":"859.\u4EB2\u5BC6\u5B57\u7B26\u4E32","slug":"_859-\u4EB2\u5BC6\u5B57\u7B26\u4E32"},{"level":3,"title":"860.\u67E0\u6AAC\u6C34\u627E\u96F6","slug":"_860-\u67E0\u6AAC\u6C34\u627E\u96F6"},{"level":3,"title":"933.\u6700\u8FD1\u8BF7\u6C42\u6B21\u6570","slug":"_933-\u6700\u8FD1\u8BF7\u6C42\u6B21\u6570"},{"level":3,"title":"969.\u714E\u997C\u6392\u5E8F","slug":"_969-\u714E\u997C\u6392\u5E8F"}],"relativePath":"leetcode/Queue/index.md","lastUpdated":1640530572048}',t={},o=p(`__VP_STATIC_START__<h1 id="\u961F\u5217\u7ECF\u5178\u95EE\u9898" tabindex="-1">\u961F\u5217\u7ECF\u5178\u95EE\u9898 <a class="header-anchor" href="#\u961F\u5217\u7ECF\u5178\u95EE\u9898" aria-hidden="true">#</a></h1><h3 id="\u57FA\u4E8E\u94FE\u8868\u5B9E\u73B0\u7684\u961F\u5217" tabindex="-1">\u57FA\u4E8E\u94FE\u8868\u5B9E\u73B0\u7684\u961F\u5217 <a class="header-anchor" href="#\u57FA\u4E8E\u94FE\u8868\u5B9E\u73B0\u7684\u961F\u5217" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>e <span class="token operator">=</span> e
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedListQueue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token function">enqueue</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token function">dequeue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">const</span> retNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
    retNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span>
    <span class="token keyword">return</span> retNode
  <span class="token punctuation">}</span>

  <span class="token function">getFront</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>e
  <span class="token punctuation">}</span>

  <span class="token function">toString</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;Queue: front &#39;</span>

    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> cur<span class="token punctuation">.</span>e <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    res <span class="token operator">+=</span> <span class="token string">&#39;NULL&#39;</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedListQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  q<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>e <span class="token operator">+</span> <span class="token string">&#39;\u51FA\u961F&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>e <span class="token operator">+</span> <span class="token string">&#39;\u51FA\u961F&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>e <span class="token operator">+</span> <span class="token string">&#39;\u51FA\u961F&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="_622-\u8BBE\u8BA1\u53CC\u7AEF\u961F\u5217" tabindex="-1">622.\u8BBE\u8BA1\u53CC\u7AEF\u961F\u5217 <a class="header-anchor" href="#_622-\u8BBE\u8BA1\u53CC\u7AEF\u961F\u5217" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 \u8BBE\u8BA1\u4F60\u7684\u5FAA\u73AF\u961F\u5217\u5B9E\u73B0\u3002 \u5FAA\u73AF\u961F\u5217\u662F\u4E00\u79CD\u7EBF\u6027\u6570\u636E\u7ED3\u6784\uFF0C\u5176\u64CD\u4F5C\u8868\u73B0\u57FA\u4E8E FIFO\uFF08\u5148\u8FDB\u5148\u51FA\uFF09\u539F\u5219\u5E76\u4E14\u961F\u5C3E\u88AB\u8FDE\u63A5\u5728\u961F\u9996\u4E4B\u540E\u4EE5\u5F62\u6210\u4E00\u4E2A\u5FAA\u73AF\u3002\u5B83\u4E5F\u88AB\u79F0\u4E3A\u201C\u73AF\u5F62\u7F13\u51B2\u5668\u201D\u3002

 \u5FAA\u73AF\u961F\u5217\u7684\u4E00\u4E2A\u597D\u5904\u662F\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u961F\u5217\u4E4B\u524D\u7528\u8FC7\u7684\u7A7A\u95F4\u3002\u5728\u4E00\u4E2A\u666E\u901A\u961F\u5217\u91CC\uFF0C\u4E00\u65E6\u4E00\u4E2A\u961F\u5217\u6EE1\u4E86\uFF0C\u6211\u4EEC\u5C31\u4E0D\u80FD\u63D2\u5165\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u5373\u4F7F\u5728\u961F\u5217\u524D\u9762\u4ECD\u6709\u7A7A\u95F4\u3002\u4F46\u662F\u4F7F\u7528\u5FAA\u73AF\u961F\u5217\uFF0C\u6211\u4EEC\u80FD\u4F7F\u7528\u8FD9\u4E9B\u7A7A\u95F4\u53BB\u5B58\u50A8\u65B0\u7684\u503C\u3002

 \u4F60\u7684\u5B9E\u73B0\u5E94\u8BE5\u652F\u6301\u5982\u4E0B\u64CD\u4F5C\uFF1A

 MyCircularQueue(k): \u6784\u9020\u5668\uFF0C\u8BBE\u7F6E\u961F\u5217\u957F\u5EA6\u4E3A k \u3002
 Front: \u4ECE\u961F\u9996\u83B7\u53D6\u5143\u7D20\u3002\u5982\u679C\u961F\u5217\u4E3A\u7A7A\uFF0C\u8FD4\u56DE -1 \u3002
 Rear: \u83B7\u53D6\u961F\u5C3E\u5143\u7D20\u3002\u5982\u679C\u961F\u5217\u4E3A\u7A7A\uFF0C\u8FD4\u56DE -1 \u3002
 enQueue(value): \u5411\u5FAA\u73AF\u961F\u5217\u63D2\u5165\u4E00\u4E2A\u5143\u7D20\u3002\u5982\u679C\u6210\u529F\u63D2\u5165\u5219\u8FD4\u56DE\u771F\u3002
 deQueue(): \u4ECE\u5FAA\u73AF\u961F\u5217\u4E2D\u5220\u9664\u4E00\u4E2A\u5143\u7D20\u3002\u5982\u679C\u6210\u529F\u5220\u9664\u5219\u8FD4\u56DE\u771F\u3002
 isEmpty(): \u68C0\u67E5\u5FAA\u73AF\u961F\u5217\u662F\u5426\u4E3A\u7A7A\u3002
 isFull(): \u68C0\u67E5\u5FAA\u73AF\u961F\u5217\u662F\u5426\u5DF2\u6EE1\u3002
 */</span>

<span class="token comment">/**
 * @param {number} k
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyCircularQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> k
  <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {number} value
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">enQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> value
  <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">Front</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">Rear</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isEmpty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isFull</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */</span>
</code></pre></div><h3 id="_641-\u8BBE\u8BA1\u5FAA\u73AF\u53CC\u7AEF\u961F\u5217" tabindex="-1">641.\u8BBE\u8BA1\u5FAA\u73AF\u53CC\u7AEF\u961F\u5217 <a class="header-anchor" href="#_641-\u8BBE\u8BA1\u5FAA\u73AF\u53CC\u7AEF\u961F\u5217" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] \u8BBE\u8BA1\u5FAA\u73AF\u53CC\u7AEF\u961F\u5217
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token comment">/**
 * @param {number} k
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyCircularDeque</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> k
  <span class="token keyword">this</span><span class="token punctuation">.</span>deque <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {number} value
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insertFront</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>deque<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span> <span class="token operator">=</span> value
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {number} value
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insertLast</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>deque<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> value
  <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deleteFront</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deleteLast</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getFront</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deque<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getRear</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deque<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isEmpty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @return {boolean}
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isFull</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */</span>
<span class="token comment">// @lc code=end</span>

</code></pre></div><h3 id="_859-\u4EB2\u5BC6\u5B57\u7B26\u4E32" tabindex="-1">859.\u4EB2\u5BC6\u5B57\u7B26\u4E32 <a class="header-anchor" href="#_859-\u4EB2\u5BC6\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] \u4EB2\u5BC6\u5B57\u7B26\u4E32
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token comment">/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">buddyStrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> goal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">!==</span> goal<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> goal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">.</span>size
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> goal<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> a
      b <span class="token operator">+=</span> goal<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> a<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">===</span> b
<span class="token punctuation">}</span>
<span class="token function">buddyStrings</span><span class="token punctuation">(</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ba&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// @lc code=end</span>
</code></pre></div><h3 id="_860-\u67E0\u6AAC\u6C34\u627E\u96F6" tabindex="-1">860.\u67E0\u6AAC\u6C34\u627E\u96F6 <a class="header-anchor" href="#_860-\u67E0\u6AAC\u6C34\u627E\u96F6" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} bills
 * @return {boolean}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">lemonadeChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bills</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9762\u503C\u53EA\u53EF\u80FD\u662F 5 \u7F8E\u5143\uFF0C10 \u7F8E\u5143\u548C 20 \u7F8E\u5143\u4E09\u79CD\u3002\u57FA\u4E8E\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FDB\u884C\u5982\u4E0B\u7684\u5206\u7C7B\u8BA8\u8BBA\u3002</span>
    <span class="token comment">// 5 \u7F8E\u5143\uFF0C\u7531\u4E8E\u67E0\u6AAC\u6C34\u7684\u4EF7\u683C\u4E5F\u4E3A 5 \u7F8E\u5143\uFF0C\u56E0\u6B64\u6211\u4EEC\u76F4\u63A5\u6536\u4E0B\u5373\u53EF\u3002</span>
    <span class="token comment">// 10 \u7F8E\u5143\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u56DE 5 \u7F8E\u5143\uFF0C\u5982\u679C\u6CA1\u6709 5 \u7F8E\u5143\u9762\u503C\u7684\u949E\u7968\uFF0C\u5219\u65E0\u6CD5\u6B63\u786E\u627E\u96F6\u3002</span>
    <span class="token comment">// 20\u7F8E\u5143\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u56DE 15 \u7F8E\u5143\uFF0C\u6B64\u65F6\u6709\u4E24\u79CD\u7EC4\u5408\u65B9\u5F0F\uFF0C</span>
    <span class="token comment">// \u4E00\u79CD\u662F\u4E00\u5F20 10 \u7F8E\u5143\u548C 5 \u7F8E\u5143\u7684\u949E\u7968\uFF0C\u4E00\u79CD\u662F 3 \u5F20 5 \u7F8E\u5143\u7684\u949E\u7968\uFF0C\u5982\u679C\u4E24\u79CD\u7EC4\u5408\u65B9\u5F0F\u90FD\u6CA1\u6709\uFF0C\u5219\u65E0\u6CD5\u6B63\u786E\u627E\u96F6\u3002</span>
    <span class="token comment">// \u5F53\u53EF\u4EE5\u6B63\u786E\u627E\u96F6\u65F6\uFF0C\u4E24\u79CD\u627E\u96F6\u7684\u65B9\u5F0F\u4E2D\u6211\u4EEC\u66F4\u503E\u5411\u4E8E\u7B2C\u4E00\u79CD\uFF0C\u5373\u5982\u679C\u5B58\u57285 \u7F8E\u5143\u548C 10 \u7F8E\u5143\uFF0C\u6211\u4EEC\u5C31\u6309\u7B2C\u4E00\u79CD\u65B9\u5F0F\u627E\u96F6\uFF0C\u5426\u5219\u6309\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u627E\u96F6\uFF0C</span>
    <span class="token comment">// \u56E0\u4E3A\u9700\u8981\u4F7F\u75285 \u7F8E\u5143\u7684\u627E\u96F6\u573A\u666F\u4F1A\u6BD4\u9700\u8981\u4F7F\u7528 10 \u7F8E\u5143\u7684\u627E\u96F6\u573A\u666F\u591A\uFF0C\u6211\u4EEC\u9700\u8981\u5C3D\u53EF\u80FD\u4FDD\u7559 5 \u7F8E\u5143\u7684\u949E\u7968\u3002</span>
    <span class="token comment">// \u57FA\u4E8E\u6B64\uFF0C\u6211\u4EEC\u7EF4\u62A4\u4E24\u4E2A\u53D8\u91CFfive \u548Cten \u8868\u793A\u5F53\u524D\u624B\u4E2D\u62E5\u6709\u7684 5 \u7F8E\u5143\u548C 10 \u7F8E\u5143\u949E\u7968\u7684\u5F20\u6570\uFF0C</span>
    <span class="token comment">// \u4ECE\u524D\u5F80\u540E\u904D\u5386\u6570\u7EC4\u5206\u7C7B\u8BA8\u8BBA\u5373\u53EF\u3002</span>
    <span class="token keyword">let</span> five <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> ten <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> bill <span class="token keyword">of</span> bills<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>bill <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">)</span> five<span class="token operator">++</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>bill <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        five<span class="token operator">--</span>
        ten<span class="token operator">++</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>bill <span class="token operator">===</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ten <span class="token operator">&amp;&amp;</span> five<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          ten<span class="token operator">--</span>
          five<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>five <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          five <span class="token operator">-=</span> <span class="token number">3</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ten <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> five <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">lemonadeChange</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="_933-\u6700\u8FD1\u8BF7\u6C42\u6B21\u6570" tabindex="-1">933.\u6700\u8FD1\u8BF7\u6C42\u6B21\u6570 <a class="header-anchor" href="#_933-\u6700\u8FD1\u8BF7\u6C42\u6B21\u6570" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] \u6700\u8FD1\u7684\u8BF7\u6C42\u6B21\u6570
 */</span>

<span class="token comment">// @lc code=start</span>

<span class="token keyword">const</span> <span class="token function-variable function">RecentCounter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pingArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {number} t
 * @return {number}
 */</span>
<span class="token class-name">RecentCounter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">ping</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pingArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pingArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> t <span class="token operator">-</span> <span class="token number">3000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pingArray<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pingArray<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */</span>
<span class="token comment">// @lc code=end</span>

</code></pre></div><h3 id="_969-\u714E\u997C\u6392\u5E8F" tabindex="-1">969.\u714E\u997C\u6392\u5E8F <a class="header-anchor" href="#_969-\u714E\u997C\u6392\u5E8F" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">/* eslint-disable no-unused-vars */</span>
<span class="token comment">/**
 * @param {number[]} arr
 * @return {number[]}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">getMaxIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>

<span class="token comment">// \u53CD\u8F6C\u524DK\u4E2A\u5143\u7D20,\u8F85\u52A9\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> k
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    j<span class="token operator">--</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">pancakeSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> max
  <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    max <span class="token operator">=</span> <span class="token function">getMaxIndex</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    max <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

</code></pre></div>__VP_STATIC_END__`,15),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{m as __pageData,w as default};
