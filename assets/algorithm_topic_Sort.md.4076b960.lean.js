import{_ as n,c as a,o as s,d as p}from"./app.65ddda17.js";const h='{"title":"\u6392\u5E8F\u7B97\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5192\u6CE1\u6392\u5E8F","slug":"\u5192\u6CE1\u6392\u5E8F"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"},{"level":2,"title":"\u5E0C\u5C14\u6392\u5E8F","slug":"\u5E0C\u5C14\u6392\u5E8F"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3-1"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801-1"},{"level":2,"title":"\u5F52\u5E76\u6392\u5E8F","slug":"\u5F52\u5E76\u6392\u5E8F"},{"level":2,"title":"\u5F52\u5E76\u6392\u5E8F\u6574\u4F53\u601D\u8DEF","slug":"\u5F52\u5E76\u6392\u5E8F\u6574\u4F53\u601D\u8DEF"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3-2"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801-2"},{"level":2,"title":"\u5FEB\u901F\u6392\u5E8F","slug":"\u5FEB\u901F\u6392\u5E8F"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3-3"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801-3"},{"level":2,"title":"\u63D2\u5165\u6392\u5E8F","slug":"\u63D2\u5165\u6392\u5E8F"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF-1"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3-4"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801-4"},{"level":2,"title":"\u9009\u62E9\u6392\u5E8F","slug":"\u9009\u62E9\u6392\u5E8F"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF-2"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3-5"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801-5"}],"relativePath":"algorithm/topic/Sort.md","lastUpdated":1641363056443}',t={},o=p(`__VP_STATIC_START__<h1 id="\u6392\u5E8F\u7B97\u6CD5" tabindex="-1">\u6392\u5E8F\u7B97\u6CD5 <a class="header-anchor" href="#\u6392\u5E8F\u7B97\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1">\u5192\u6CE1\u6392\u5E8F <a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a></h2><ul><li>\u5192\u6CE1\u6392\u5E8F\u601D\u8DEF\u62C6\u89E3</li><li>\u5192\u6CE1\u6392\u5E8F\u53EA\u4F1A\u64CD\u4F5C\u76F8\u90BB\u7684\u4E24\u4E2A\u6570\u636E\u3002</li><li>\u6BCF\u6B21\u5192\u6CE1\u64CD\u4F5C\u90FD\u4F1A\u5BF9\u76F8\u90BB\u7684\u4E24\u4E2A\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\uFF0C\u770B\u662F\u5426\u6EE1\u8DB3\u5927\u5C0F\u5173\u7CFB\u8981\u6C42\u3002</li><li>\u5982\u679C\u4E0D\u6EE1\u8DB3\u5C31\u8BA9\u5B83\u4FE9\u4E92\u6362\u3002</li><li>\u4E00\u6B21\u5192\u6CE1\u4F1A\u8BA9\u81F3\u5C11\u4E00\u4E2A\u5143\u7D20\u79FB\u52A8\u5230\u5B83\u5E94\u8BE5\u5728\u7684\u4F4D\u7F6E\uFF0C\u91CD\u590D n \u6B21\uFF0C\u5C31\u5B8C\u6210\u4E86 n \u4E2A\u6570\u636E\u7684\u6392\u5E8F\u5DE5\u4F5C\u3002</li><li>\u7B2Ci\u8F6E\u5F00\u59CB\uFF1Aarr[n-1] - arr[n]\u5DF2\u7ECF\u6392\u597D\u5E8F\u4E86</li><li>\u7B2Ci\u8F6E\uFF1A\u901A\u8FC7\u5192\u6CE1\u5728arr[n-i-1]\u4F4D\u7F6E\u653E\u4E0A\u5408\u9002\u5143\u7D20</li><li>\u7B2Ci\u8F6E\u7ED3\u675F\uFF1Aarr[n-1-i] - arr[n]\u5DF2\u7ECF\u6392\u597D\u5E8F\u4E86</li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ol><li>\u5192\u6CE1\u7684\u8FC7\u7A0B\u53EA\u6D89\u53CA\u76F8\u90BB\u6570\u636E\u7684\u4EA4\u6362\u64CD\u4F5C\uFF0C\u53EA\u9700\u8981\u5E38\u91CF\u7EA7\u7684\u4E34\u65F6\u7A7A\u95F4\uFF0C\u6240\u4EE5\u5B83\u7684\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\uFF0C\u662F\u4E00\u4E2A\u539F\u5730\u6392\u5E8F\u7B97\u6CD5\u3002</li><li>\u5728\u5192\u6CE1\u6392\u5E8F\u4E2D\uFF0C\u53EA\u6709\u4EA4\u6362\u624D\u53EF\u4EE5\u6539\u53D8\u4E24\u4E2A\u5143\u7D20\u7684\u524D\u540E\u987A\u5E8F\u3002\u4E3A\u4E86\u4FDD\u8BC1\u5192\u6CE1\u6392\u5E8F\u7B97\u6CD5\u7684\u7A33\u5B9A\u6027\uFF0C\u5F53\u6709\u76F8\u90BB\u7684\u4E24\u4E2A\u5143\u7D20\u5927\u5C0F\u76F8\u7B49\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E0D\u505A\u4EA4\u6362\uFF0C\u76F8\u540C\u5927\u5C0F\u7684\u6570\u636E\u5728\u6392\u5E8F\u524D\u540E\u4E0D\u4F1A\u6539\u53D8\u987A\u5E8F\uFF0C\u6240\u4EE5\u5192\u6CE1\u6392\u5E8F\u662F\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\u3002</li><li>\u6700\u597D\u60C5\u51B5\u4E0B\uFF0C\u8981\u6392\u5E8F\u7684\u6570\u636E\u5DF2\u7ECF\u662F\u6709\u5E8F\u7684\u4E86\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u8FDB\u884C\u4E00\u6B21\u5192\u6CE1\u64CD\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u7ED3\u675F\u4E86\uFF0C\u6240\u4EE5\u6700\u597D\u60C5\u51B5\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(n)\u3002\u800C\u6700\u574F\u7684\u60C5\u51B5\u662F\uFF0C\u8981\u6392\u5E8F\u7684\u6570\u636E\u521A\u597D\u662F\u5012\u5E8F\u6392\u5217\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u8FDB\u884C n \u6B21\u5192\u6CE1\u64CD\u4F5C\uFF0C\u6240\u4EE5\u6700\u574F\u60C5\u51B5\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n\xB2)\u3002</li><li>\u6240\u4EE5\u5E73\u5747\u60C5\u51B5\u4E0B\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5C31\u662F O(n\xB2)\u3002</li></ol><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u6570\u7EC4\u8F85\u52A9\u51FD\u6570\uFF0C\u8C03\u6362\u4F4D\u7F6E
 * @param {number[]} arr \u539F\u6570\u7EC4
 * @param {number} i \u4E0B\u6807i
 * @param {number} j \u4E0B\u6807j
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5192\u6CE1\u6392\u5E8F\u57FA\u7840\u7248
 * @param {number[]} arr
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">bubbleSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// arr[n-i] - arr[n]\u5DF2\u7ECF\u6392\u597D\u5E8F\u4E86</span>
    <span class="token comment">// \u901A\u8FC7\u5192\u6CE1\u5728arr[n-i-1]\u4F4D\u7F6E\u653E\u4E0A\u5408\u9002\u5143\u7D20</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> j<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5192\u6CE1\u6392\u5E8F\u4F18\u5316\u7248
 * @param {number[]} arr
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">bubbleSort2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u662F\u5426\u53D1\u751F\u4E86\u4EA4\u6362</span>
    <span class="token keyword">let</span> isSwapped <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">// arr[n-i] - arr[n]\u5DF2\u7ECF\u6392\u597D\u5E8F\u4E86</span>
    <span class="token comment">// \u901A\u8FC7\u5192\u6CE1\u5728arr[n-i-1]\u4F4D\u7F6E\u653E\u4E0A\u5408\u9002\u5143\u7D20</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> j<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        isSwapped <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5982\u679C\u7ED3\u675F\u5FAA\u73AF\u4EE5\u540E\uFF0C\u6CA1\u6709\u4EA4\u6362\u8FC7\u4F4D\u7F6E\uFF0C\u5C31\u8BC1\u660E\u8FD9\u4E2A\u65F6\u5019\u5143\u7D20\u5DF2\u7ECF\u662F\u6709\u5E8F\u7684\u4E86</span>
    <span class="token comment">// \u8FD9\u91CC\u4E3B\u8981\u4F18\u5316\u7684\u662F\u6709\u5E8F\u7684\u60C5\u51B5\u4E0B</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSwapped<span class="token punctuation">)</span> <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5192\u6CE1\u6392\u5E8F\u518D\u4F18\u5316\u7248
 * @param {number[]} arr
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">bubbleSort3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6700\u540E\u4E00\u6B21\u4EA4\u6362\u7684\u4F4D\u7F6E</span>
    <span class="token keyword">let</span> lastSwappedIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// arr[n-i] - arr[n]\u5DF2\u7ECF\u6392\u597D\u5E8F\u4E86</span>
    <span class="token comment">// \u901A\u8FC7\u5192\u6CE1\u5728arr[n-i-1]\u4F4D\u7F6E\u653E\u4E0A\u5408\u9002\u5143\u7D20</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> j<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        lastSwappedIndex <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8FD9\u6837\u6709\u53EF\u80FD\u4E00\u4E0B\u5B50\u8DF3\u8FC7\u597D\u51E0\u8F6E</span>
    i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> lastSwappedIndex
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  bubbleSort<span class="token punctuation">,</span>
  bubbleSort2<span class="token punctuation">,</span>
  bubbleSort3
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E0C\u5C14\u6392\u5E8F" tabindex="-1">\u5E0C\u5C14\u6392\u5E8F <a class="header-anchor" href="#\u5E0C\u5C14\u6392\u5E8F" aria-hidden="true">#</a></h2><blockquote><p>\u5E0C\u5C14\u6392\u5E8F\u662F\u63D2\u5165\u6392\u5E8F\u7684\u4E00\u79CD\u53C8\u79F0\u201C\u7F29\u5C0F\u589E\u91CF\u6392\u5E8F\u201D\uFF0C\u662F\u76F4\u63A5\u63D2\u5165\u6392\u5E8F\u7B97\u6CD5\u7684\u4E00\u79CD\u66F4\u9AD8\u6548\u7684\u6539\u8FDB\u7248\u672C\u3002\u5E0C\u5C14\u6392\u5E8F\u662F\u975E\u7A33\u5B9A\u6392\u5E8F\u7B97\u6CD5</p></blockquote><ul><li>\u57FA\u672C\u601D\u60F3\uFF1A\u8BA9\u6570\u7EC4\u8D8A\u6765\u8D8A\u6709\u5E8F</li><li>\u4E0D\u53EA\u5904\u7406\u76F8\u90BB\u7684\u9006\u5E8F\u5BF9</li><li>\u5BF9\u95F4\u8DDD\u4E3An/2\u7684\u6240\u6709\u6570\u7EC4\u505A\u63D2\u5165\u6392\u5E8F</li><li>\u5BF9\u95F4\u8DDD\u4E3An/4\u7684\u6240\u6709\u6570\u7EC4\u505A\u63D2\u5165\u6392\u5E8F</li><li>\u5BF9\u95F4\u8DDD\u4E3An/8\u7684\u6240\u6709\u6570\u7EC4\u505A\u63D2\u5165\u6392\u5E8F</li><li>...</li><li>\u5BF9\u5143\u7D20\u95F4\u8DDD\u4E3A1\u7684\u6240\u6709\u6570\u7EC4\u505A\u63D2\u5165\u6392\u5E8F</li></ul><h2 id="\u603B\u7ED3-1" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3-1" aria-hidden="true">#</a></h2><ol><li>\u5E0C\u5C14\u6392\u5E8F\u662F\u5728\u63D2\u5165\u6392\u5E8F\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u5206\u6BB5\u6392\u5E8F</li><li>\u5E0C\u5C14\u6392\u5E8F\u53EF\u4EE5\u901A\u8FC7\u4E0D\u540C\u7684\u6B65\u957F\uFF0C\u6765\u5C55\u793A\u51FA\u4E0D\u540C\u7684\u6027\u80FD</li></ol><h2 id="\u4EE3\u7801-1" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-1" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u5E0C\u5C14\u6392\u5E8F
 * @param {number[]} arr \u6570\u7EC4
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">shellSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> h <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> start <span class="token operator">&lt;</span> h<span class="token punctuation">;</span> start<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5BF9arr[start, start + h, start + 2h, ... ]\u8FDB\u884C\u63D2\u5165\u6392\u5E8F</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start <span class="token operator">+</span> h<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5C06arr[i]\u63D2\u5165\u5230\u5408\u9002\u7684\u4F4D\u7F6E</span>
          <span class="token keyword">const</span> t <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
          <span class="token keyword">let</span> j
          <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> t <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> h<span class="token punctuation">]</span><span class="token punctuation">;</span> j <span class="token operator">-=</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> h<span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
          arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      h <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>h <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5E0C\u5C14\u6392\u5E8F\u7684\u4F18\u5316\u7248\u672C
 * @param {number[]} arr \u6570\u7EC4
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">shellSort2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> h <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9arr[h, n]\u8FDB\u884C\u63D2\u5165\u6392\u5E8F</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> h<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5C06arr[i]\u63D2\u5165\u5230\u5408\u9002\u7684\u4F4D\u7F6E</span>
      <span class="token keyword">const</span> t <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">let</span> j
      <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">-</span> h <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> t <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> h<span class="token punctuation">]</span><span class="token punctuation">;</span> j <span class="token operator">-=</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> h<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t
    <span class="token punctuation">}</span>
    h <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>h <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6B65\u957F\u5E8F\u5217\u7248\u672C\u7684\u5E0C\u5C14\u6392\u5E8F
 * @param {number[]} arr \u6570\u7EC4
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">shellSort3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> h <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>h <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> h <span class="token operator">=</span> h <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9arr[h, n]\u8FDB\u884C\u63D2\u5165\u6392\u5E8F</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> h<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5C06arr[i]\u63D2\u5165\u5230\u5408\u9002\u7684\u4F4D\u7F6E</span>
      <span class="token keyword">const</span> t <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">let</span> j

      <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">-</span> h <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> t <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> h<span class="token punctuation">]</span><span class="token punctuation">;</span> j <span class="token operator">-=</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> h<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t
    <span class="token punctuation">}</span>

    h <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>h <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  shellSort<span class="token punctuation">,</span>
  shellSort2<span class="token punctuation">,</span>
  shellSort3
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5F52\u5E76\u6392\u5E8F" tabindex="-1">\u5F52\u5E76\u6392\u5E8F <a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F" aria-hidden="true">#</a></h2><h2 id="\u5F52\u5E76\u6392\u5E8F\u6574\u4F53\u601D\u8DEF" tabindex="-1">\u5F52\u5E76\u6392\u5E8F\u6574\u4F53\u601D\u8DEF <a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F\u6574\u4F53\u601D\u8DEF" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">// \u4F2A\u4EE3\u7801</span>
<span class="token keyword">function</span> <span class="token function">mergeSort</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
  <span class="token comment">// \u5BF9mid[l, mid]\u6392\u5E8F</span>
  <span class="token function">mergeSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">)</span>
  <span class="token comment">// \u5BF9mid(mid + 1, r)\u6392\u5E8F</span>
  <span class="token function">mergeSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
  <span class="token comment">// \u5408\u5E76\u6570\u7EC4,\u4E3B\u8981\u4EE3\u7801\u5C31\u662F\u5728\u8FD9\u91CC</span>
  <span class="token function">merge</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u603B\u7ED3-2" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3-2" aria-hidden="true">#</a></h2><ol><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A\u5F52\u5E76\u6392\u5E8F\u6CD5\u6700\u597D\u60C5\u51B5\u662FO(n)\u7EA7\u522B\u7684\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u5B8C\u5168\u968F\u673A\u7684\u662FO(n log n)</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A\u56E0\u4E3A\u5F52\u5E76\u6392\u5E8F\u6CD5\u9700\u8981\u989D\u5916\u7A7A\u95F4\uFF0C\u6240\u4EE5\u7A7A\u95F4\u590D\u6742\u5EA6\u662FO(n)</li><li>\u7A33\u5B9A\u6027\uFF1A\u7A33\u5B9A</li><li>\u4F18\u5316\uFF1A1. \u5224\u65AD\u662F\u5426\u9700\u8981merge 2. \u5BF9\u5C0F\u89C4\u6A21\u6570\u636E\u4F7F\u7528\u63D2\u5165\u6392\u5E8F 3. \u53EA\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u7A7A\u95F4</li></ol><h2 id="\u4EE3\u7801-2" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-2" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u5F52\u5E76\u6392\u5E8F\u57FA\u7840\u7248
 * @param {number[]} data
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">mergeSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u7684\u6570\u7EC4\uFF0Carr[l, mid] \u548C arr[mid + 1, r]
     * @param {number[]} arr
     * @param {number} l
     * @param {number} mid
     * @param {number} r
     * @param {number[]} temp
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> r<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      temp <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> l
      <span class="token keyword">let</span> j <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token comment">// \u6BCF\u8F6E\u4E3Aarr[k]\u8D4B\u503C\uFF0C\u4ECEl\u8D70\u5230r</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> l<span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u7D22\u5F15i\u5927\u4E8E \u4E2D\u95F4\u503C\u7684\u65F6\u5019  \u5C31\u8D8A\u754C\u4E86\u76F4\u63A5\u8D4B\u503C</span>
          arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>j <span class="token operator">-</span> l<span class="token punctuation">]</span>
          j<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u7D22\u5F15i \u5927\u4E8E\u53F3\u8FB9\u8FB9\u754C\u7684\u65F6\u5019 \u76F4\u63A5\u8D4B\u503C</span>
          arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>i <span class="token operator">-</span> l<span class="token punctuation">]</span>
          i<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">[</span>i <span class="token operator">-</span> l<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> temp<span class="token punctuation">[</span>j <span class="token operator">-</span> l<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5DE6\u8FB9\u5143\u7D20\u6BD4\u53F3\u8FB9\u5143\u7D20\u5C0F\u7684\u65F6\u5019</span>
          arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>i <span class="token operator">-</span> l<span class="token punctuation">]</span>
          i<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>j <span class="token operator">-</span> l<span class="token punctuation">]</span>
          j<span class="token operator">++</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/**
     * \u6392\u5E8F\u8FC7\u7A0B
     * @param {number[]} arr
     * @param {number} l
     * @param {number} r
     * @param {number[]} temp
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
      <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">merge</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> r<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>data<span class="token punctuation">]</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  mergeSort
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1">\u5FEB\u901F\u6392\u5E8F <a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a></h2><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><ul><li>\u5FEB\u6392\u7684\u6838\u5FC3\u601D\u60F3</li><li>\u627E\u4E00\u4E2A\u6807\u5B9A\u70B9\uFF0C\u628A\u5C0F\u4E8E\u6807\u5B9A\u70B9\u7684\u653E\u5230\u6807\u5B9A\u70B9\u5DE6\u8FB9\uFF0C\u5927\u4E8E\u6807\u5B9A\u70B9\u7684\u653E\u5230\u6807\u5B9A\u70B9\u53F3\u8FB9</li><li>\u9012\u63A8\u516C\u5F0F\uFF1Aquick_sort(l\u2026r) = quick_sort(l\u2026p-1) + quick_sort(p+1\u2026 r)</li><li>\u7EC8\u6B62\u6761\u4EF6\uFF1Al &gt;= r</li></ul><h2 id="\u603B\u7ED3-3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3-3" aria-hidden="true">#</a></h2><ol><li>\u5FEB\u901F\u6392\u5E8F\u7684\u5E73\u5747\u65F6\u95F4\u590D\u6742\u5EA6\u662FO(nlogn)\uFF0C\u4F46\u662F\u5982\u679C\u6570\u636E\u5B8C\u5168\u6709\u5E8F\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u9000\u5316\u57CEO(n\xB2)\uFF0C\u53EF\u4EE5\u7528\u968F\u673A\u5316\u89C4\u907F\u6389\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F46\u662F\u5BF9\u4E8E\u6570\u636E\u5B8C\u5168\u4E00\u6837\u7684\u8FD8\u662F\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898</li><li>\u89E3\u51B3\u6570\u636E\u5B8C\u5168\u4E00\u6837\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u91C7\u7528\u53CC\u8DEF\u5FEB\u6392\u6216\u8005\u4E09\u8DEF\u5FEB\u6392\u7684\u65B9\u5F0F\u89C4\u907F\u6389</li><li>\u5229\u7528\u5FEB\u6392\u601D\u60F3\u53EF\u4EE5\u89E3\u51B3select K\u95EE\u9898</li></ol><h2 id="\u4EE3\u7801-3" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-3" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u6570\u7EC4\u8F85\u52A9\u51FD\u6570\uFF0C\u8C03\u6362\u4F4D\u7F6E
 * @param {number[]} arr \u539F\u6570\u7EC4
 * @param {number} i \u4E0B\u6807i
 * @param {number} j \u4E0B\u6807j
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>

<span class="token comment">/**
 * \u57FA\u7840\u7248\u5FEB\u6392
 * @param {number[]} arr \u6570\u7EC4
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">quickSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * partition\u51FD\u6570
   * @param {number[]} arr \u6570\u7EC4
   * @param {number} l \u5DE6\u8FB9\u6807\u5B9A\u70B9
   * @param {number} r \u53F3\u8FB9\u6807\u5B9A\u70B9
   * @returns {number} \u6807\u5B9A\u70B9
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6DFB\u52A0\u968F\u673A\u5316</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> l<span class="token punctuation">)</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    <span class="token comment">// \u5FAA\u73AF\u4E0D\u53D8\u91CF</span>
    <span class="token comment">// arr[l + 1, ..., j] &lt; v</span>
    <span class="token comment">// arr[j + 1, ..., i] &gt;= v</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> l
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        j<span class="token operator">++</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
    <span class="token keyword">return</span> j
  <span class="token punctuation">}</span>
  <span class="token comment">/**
   * \u6392\u5E8F\u51FD\u6570
   * @param {number[]}} arr \u6570\u7EC4
   * @param {number} l \u5DE6\u8FB9\u6807\u5B9A\u70B9
   * @param {number} r \u53F3\u8FB9\u6807\u5B9A\u70B9
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">sort</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u53CC\u8DEF\u5FEB\u6392
 * @param {number[]} arr \u6570\u7EC4
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">sort2ways</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * partition\u51FD\u6570
   * @param {number[]} arr \u6570\u7EC4
   * @param {number} l \u5DE6\u8FB9\u6807\u5B9A\u70B9
   * @param {number} r \u53F3\u8FB9\u6807\u5B9A\u70B9
   * @returns {number} \u6807\u5B9A\u70B9
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6DFB\u52A0\u968F\u673A\u5316</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> l<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// arr[l+1...i-1] &lt;= v; arr[j+1...r] &gt;= v</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> r
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> j <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> i <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        j<span class="token operator">--</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> j<span class="token punctuation">)</span> <span class="token keyword">break</span>
      <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
      i<span class="token operator">++</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
    <span class="token keyword">return</span> j
  <span class="token punctuation">}</span>
  <span class="token comment">/**
   * \u6392\u5E8F\u51FD\u6570
   * @param {number[]}} arr \u6570\u7EC4
   * @param {number} l \u5DE6\u8FB9\u6807\u5B9A\u70B9
   * @param {number} r \u53F3\u8FB9\u6807\u5B9A\u70B9
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">sort</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u4E09\u8DEF\u5FEB\u6392
 * @param {number[]} arr \u6570\u7EC4
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">sort3ways</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u6392\u5E8F\u51FD\u6570
   * @param {number[]}} arr \u6570\u7EC4
   * @param {number} l \u5DE6\u8FB9\u6807\u5B9A\u70B9
   * @param {number} r \u53F3\u8FB9\u6807\u5B9A\u70B9
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token comment">// \u6DFB\u52A0\u968F\u673A\u5316</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> l<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// arr[l + 1, lt] &lt; v, arr[lt + 1, i - 1] == v, arr[gt, r] &gt; v</span>
    <span class="token keyword">let</span> lt <span class="token operator">=</span> l
    <span class="token keyword">let</span> i <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">let</span> gt <span class="token operator">=</span> r <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> gt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lt<span class="token operator">++</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> lt<span class="token punctuation">)</span>
        i<span class="token operator">++</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        gt<span class="token operator">--</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> gt<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// arr[i] === arr[l]</span>
        i<span class="token operator">++</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> lt<span class="token punctuation">)</span>
    <span class="token comment">// arr[l, lt - 1] &lt; v, arr[lt, gt - 1] == v, arr[gt, r] &gt; v</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> lt <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> gt<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">sort</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  quickSort<span class="token punctuation">,</span>
  sort2ways<span class="token punctuation">,</span>
  sort3ways
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1">\u63D2\u5165\u6392\u5E8F <a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a></h2><h2 id="\u601D\u8DEF-1" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF-1" aria-hidden="true">#</a></h2><ul><li>\u63D2\u5165\u7B97\u6CD5\u7684\u6838\u5FC3\u601D\u60F3</li><li>\u533A\u5206\u5DF2\u6392\u5E8F\u533A\u95F4\u548C\u672A\u6392\u5E8F\u533A\u95F4</li><li>\u53D6\u672A\u6392\u5E8F\u533A\u95F4\u4E2D\u7684\u5143\u7D20\uFF0C\u5728\u5DF2\u6392\u5E8F\u533A\u95F4\u4E2D\u627E\u5230\u5408\u9002\u7684\u63D2\u5165\u4F4D\u7F6E\u5C06\u5176\u63D2\u5165\uFF0C\u5E76\u4FDD\u8BC1\u5DF2\u6392\u5E8F\u533A\u95F4\u6570\u636E\u4E00\u76F4\u6709\u5E8F\u3002</li><li>\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u76F4\u5230\u672A\u6392\u5E8F\u533A\u95F4\u4E2D\u5143\u7D20\u4E3A\u7A7A\uFF0C\u7B97\u6CD5\u7ED3\u675F\u3002</li></ul><h2 id="\u603B\u7ED3-4" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3-4" aria-hidden="true">#</a></h2><ol><li>\u63D2\u5165\u6392\u5E8F\u7B97\u6CD5\u7684\u8FD0\u884C\u5E76\u4E0D\u9700\u8981\u989D\u5916\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u6240\u4EE5\u7A7A\u95F4\u590D\u6742\u5EA6\u662F O(1)\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u662F\u4E00\u4E2A\u539F\u5730\u6392\u5E8F\u7B97\u6CD5\u3002</li><li>\u5BF9\u4E8E\u503C\u76F8\u540C\u7684\u5143\u7D20\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u5C06\u540E\u9762\u51FA\u73B0\u7684\u5143\u7D20\uFF0C\u63D2\u5165\u5230\u524D\u9762\u51FA\u73B0\u5143\u7D20\u7684\u540E\u9762\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4FDD\u6301\u539F\u6709\u7684\u524D\u540E\u987A\u5E8F\u4E0D\u53D8\uFF0C\u6240\u4EE5\u63D2\u5165\u6392\u5E8F\u662F\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\u3002</li><li>\u5982\u679C\u6211\u4EEC\u4ECE\u5C3E\u5230\u5934\u5728\u6709\u5E8F\u6570\u636E\u7EC4\u91CC\u9762\u67E5\u627E\u63D2\u5165\u4F4D\u7F6E\uFF0C\u6BCF\u6B21\u53EA\u9700\u8981\u6BD4\u8F83\u4E00\u4E2A\u6570\u636E\u5C31\u80FD\u786E\u5B9A\u63D2\u5165\u7684\u4F4D\u7F6E\u3002\u6240\u4EE5\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u662F\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)</li><li>\u5982\u679C\u6570\u7EC4\u662F\u5012\u5E8F\u7684\uFF0C\u6BCF\u6B21\u63D2\u5165\u90FD\u76F8\u5F53\u4E8E\u5728\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u5165\u65B0\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u9700\u8981\u79FB\u52A8\u5927\u91CF\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u6700\u574F\u60C5\u51B5\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n2)\u3002</li><li>\u6BCF\u6B21\u63D2\u5165\u64CD\u4F5C\u90FD\u76F8\u5F53\u4E8E\u5728\u6570\u7EC4\u4E2D\u63D2\u5165\u4E00\u4E2A\u6570\u636E\uFF0C\u5FAA\u73AF\u6267\u884C n \u6B21\u63D2\u5165\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5E73\u5747\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n2)\u3002</li></ol><h2 id="\u4EE3\u7801-4" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-4" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u6570\u7EC4\u8F85\u52A9\u51FD\u6570\uFF0C\u8C03\u6362\u4F4D\u7F6E
 * @param {number[]} arr \u539F\u6570\u7EC4
 * @param {number} i \u4E0B\u6807i
 * @param {number} j \u4E0B\u6807j
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>
<span class="token comment">/**
 * \u63D2\u5165\u6392\u5E8F
 * @param {number[]} arr \u8981\u6392\u5E8F\u540E\u7684
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">insertSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06arr[i]\u63D2\u5165\u5230\u5408\u9002\u7684\u4F4D\u7F6E</span>
    <span class="token comment">// \u5982\u679Carr[j] &lt; arr[j - 1]\u5219\u9700\u8981\u4EA4\u6362\u4F4D\u7F6E</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> j<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u4F18\u5316\u540E\u7684\u63D2\u5165\u6392\u5E8F
 * @param {number[]} arr
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">insertSort2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06arr[i]\u63D2\u5165\u5230\u5408\u9002\u7684\u4F4D\u7F6E</span>
    <span class="token keyword">const</span> t <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">let</span> j
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> t <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6362\u4E00\u79CD\u65B9\u5F0F\u5B9E\u73B0
 * @param {number[]} arr
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">insertSort3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06arr[i]\u63D2\u5165\u5230\u5408\u9002\u7684\u4F4D\u7F6E</span>
    <span class="token keyword">const</span> t <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">let</span> j
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> t <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  insertSort<span class="token punctuation">,</span>
  insertSort2<span class="token punctuation">,</span>
  insertSort3
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u9009\u62E9\u6392\u5E8F" tabindex="-1">\u9009\u62E9\u6392\u5E8F <a class="header-anchor" href="#\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a></h2><h2 id="\u601D\u8DEF-2" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF-2" aria-hidden="true">#</a></h2><blockquote><p>\u9009\u62E9\u6392\u5E8F\u6CD5\uFF0C\u6392\u5E8F\u601D\u8DEF</p><p>\u5148\u628A\u6700\u5C0F\u7684\u62FF\u51FA\u6765</p><p>\u5269\u4E0B\u7684\uFF0C\u518D\u628A\u6700\u5C0F\u7684\u62FF\u51FA\u6765</p><p>\u5269\u4E0B\u7684\uFF0C\u518D\u628A\u6700\u5C0F\u7684\u62FF\u51FA\u6765</p><p>...</p><p>\u6BCF\u6B21\u9009\u62E9\u8FD8\u6CA1\u5904\u7406\u5143\u7D20\u91CC\u6700\u5C0F\u7684\u5143\u7D20</p></blockquote><h2 id="\u603B\u7ED3-5" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3-5" aria-hidden="true">#</a></h2><ol><li>\u9009\u62E9\u6392\u5E8F\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\uFF0C\u662F\u4E00\u79CD\u539F\u5730\u6392\u5E8F\u7B97\u6CD5\u3002\u9009\u62E9\u6392\u5E8F\u7684\u6700\u597D\u60C5\u51B5\u65F6\u95F4\u590D\u6742\u5EA6\u3001\u6700\u574F\u60C5\u51B5\u548C\u5E73\u5747\u60C5\u51B5\u65F6\u95F4\u590D\u6742\u5EA6\u90FD\u4E3A O(n\xB2)\u3002</li><li>\u9009\u62E9\u6392\u5E8F\u662F\u4E00\u79CD\u4E0D\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u9009\u62E9\u6392\u5E8F\u6BCF\u6B21\u90FD\u8981\u627E\u5269\u4F59\u672A\u6392\u5E8F\u5143\u7D20\u4E2D\u7684\u6700\u5C0F\u503C\uFF0C\u5E76\u548C\u524D\u9762\u7684\u5143\u7D20\u4EA4\u6362\u4F4D\u7F6E\uFF0C\u8FD9\u6837\u7834\u574F\u4E86\u7A33\u5B9A\u6027\u3002</li></ol><h2 id="\u4EE3\u7801-5" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-5" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u6570\u7EC4\u8F85\u52A9\u51FD\u6570\uFF0C\u8C03\u6362\u4F4D\u7F6E
 * @param {number[]} arr \u539F\u6570\u7EC4
 * @param {number} i \u4E0B\u6807i
 * @param {number} j \u4E0B\u6807j
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>

<span class="token comment">/**
 * \u9009\u62E9\u6392\u5E8F
 * @param {number[]} arr \u6570\u7EC4
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">selectSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u6700\u5C0F\u503C</span>
    <span class="token keyword">let</span> minIndex <span class="token operator">=</span> i

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u627E\u51FA\u6700\u5C0F\u503C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minIndex <span class="token operator">=</span> j
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4EA4\u6362\u4F4D\u7F6E\uFF0C\u6700\u5C0F\u7684\u653E\u5230\u6700\u5DE6\u8FB9</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> minIndex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u53E6\u4E00\u79CD\u65B9\u5F0F\u5B9E\u73B0\u7684\u9009\u62E9\u6392\u5E8F
 * @param {number[]} arr \u6570\u7EC4
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">selectSort2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u6700\u5927\u503C</span>
    <span class="token keyword">let</span> maxIndex <span class="token operator">=</span> i

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u627E\u51FA\u6700\u5927\u503C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxIndex <span class="token operator">=</span> j
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4EA4\u6362\u4F4D\u7F6E\uFF0C\u6700\u5C0F\u7684\u653E\u5230\u6700\u53F3\u8FB9</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> maxIndex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  selectSort<span class="token punctuation">,</span>
  selectSort2
<span class="token punctuation">}</span>

</code></pre></div>__VP_STATIC_END__`,42),e=[o];function c(l,u,r,k,i,m){return s(),a("div",null,e)}var b=n(t,[["render",c]]);export{h as __pageData,b as default};
