import{_ as n,c as s,o as a,d as p}from"./app.4fc031e0.js";const b='{"title":"\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"11.\u76DB\u6C34\u6700\u591A\u7684\u5BB9\u5668","slug":"_11-\u76DB\u6C34\u6700\u591A\u7684\u5BB9\u5668"},{"level":2,"title":"26.\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879","slug":"_26-\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879"},{"level":2,"title":"35.\u641C\u7D22\u63D2\u5165\u7684\u4F4D\u7F6E","slug":"_35-\u641C\u7D22\u63D2\u5165\u7684\u4F4D\u7F6E"},{"level":2,"title":"51.\u6700\u5927\u5B50\u6570\u6570\u7EC4\u548C","slug":"_51-\u6700\u5927\u5B50\u6570\u6570\u7EC4\u548C"},{"level":2,"title":"75.\u989C\u8272\u5206\u7C7B","slug":"_75-\u989C\u8272\u5206\u7C7B"},{"level":2,"title":"167.\u4E24\u6570\u4E4B\u548C II - \u8F93\u5165\u6709\u5E8F\u6570\u7EC4","slug":"_167-\u4E24\u6570\u4E4B\u548C-ii-\u8F93\u5165\u6709\u5E8F\u6570\u7EC4"},{"level":2,"title":"215.\u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20","slug":"_215-\u6570\u7EC4\u4E2D\u7684\u7B2Ck\u4E2A\u6700\u5927\u5143\u7D20"},{"level":2,"title":"278.\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C","slug":"_278-\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C"},{"level":2,"title":"283.\u79FB\u52A8\u96F6","slug":"_283-\u79FB\u52A8\u96F6"},{"level":2,"title":"704.\u4E8C\u5206\u67E5\u627E","slug":"_704-\u4E8C\u5206\u67E5\u627E"},{"level":2,"title":"912.\u6392\u5E8F\u6570\u7EC4","slug":"_912-\u6392\u5E8F\u6570\u7EC4"},{"level":2,"title":"977.\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9","slug":"_977-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9"},{"level":2,"title":"1234.\u66FF\u6362\u5B50\u4E32\u5F97\u5230\u5E73\u8861\u5B57\u7B26\u4E32","slug":"_1234-\u66FF\u6362\u5B50\u4E32\u5F97\u5230\u5E73\u8861\u5B57\u7B26\u4E32"},{"level":2,"title":"1248.\u7EDF\u8BA1[\u4F18\u7F8E\u5B50\u6570\u7EC4]","slug":"_1248-\u7EDF\u8BA1-\u4F18\u7F8E\u5B50\u6570\u7EC4"},{"level":2,"title":"\u5251\u6307 Offer 40. \u6700\u5C0F\u7684k\u4E2A\u6570","slug":"\u5251\u6307-offer-40-\u6700\u5C0F\u7684k\u4E2A\u6570"},{"level":2,"title":"\u5251\u6307 Offer 51. \u6570\u7EC4\u4E2D\u7684\u9006\u5E8F\u5BF9","slug":"\u5251\u6307-offer-51-\u6570\u7EC4\u4E2D\u7684\u9006\u5E8F\u5BF9"},{"level":2,"title":"300.\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217","slug":"_300-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217"}],"relativePath":"algorithm/topic/Array.md","lastUpdated":1641362437642}',t={},o=p(`<h1 id="\u6570\u7EC4" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a></h1><h2 id="_11-\u76DB\u6C34\u6700\u591A\u7684\u5BB9\u5668" tabindex="-1">11.\u76DB\u6C34\u6700\u591A\u7684\u5BB9\u5668 <a class="header-anchor" href="#_11-\u76DB\u6C34\u6700\u591A\u7684\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} height
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">maxArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> height<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> minHeight <span class="token operator">=</span> <span class="token number">0</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> height<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minHeight <span class="token operator">=</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        i<span class="token operator">++</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        minHeight <span class="token operator">=</span> height<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        j<span class="token operator">--</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> area <span class="token operator">=</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> minHeight

      max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> area<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max
  <span class="token punctuation">}</span>

</code></pre></div><h2 id="_26-\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879" tabindex="-1">26.\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879 <a class="header-anchor" href="#_26-\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53EA\u8981\u5FAA\u73AF\u8FC7\u7A0B\u4E2D,nums[i]\u548C\u524D\u9762\u4E00\u4F4D\u4E0D\u4E00\u6837\uFF0C\u5C31\u5B58\u4E0B\u6765,n++</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        n<span class="token operator">++</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="_35-\u641C\u7D22\u63D2\u5165\u7684\u4F4D\u7F6E" tabindex="-1">35.\u641C\u7D22\u63D2\u5165\u7684\u4F4D\u7F6E <a class="header-anchor" href="#_35-\u641C\u7D22\u63D2\u5165\u7684\u4F4D\u7F6E" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">// \u7ED9\u5B9A\u4E00\u4E2A\u6392\u5E8F\u6570\u7EC4\u548C\u4E00\u4E2A\u76EE\u6807\u503C\uFF0C\u5728\u6570\u7EC4\u4E2D\u627E\u5230\u76EE\u6807\u503C\uFF0C\u5E76\u8FD4\u56DE\u5176\u7D22\u5F15\u3002\u5982\u679C\u76EE\u6807\u503C\u4E0D\u5B58\u5728\u4E8E\u6570\u7EC4\u4E2D\uFF0C\u8FD4\u56DE\u5B83\u5C06\u4F1A\u88AB\u6309\u987A\u5E8F\u63D2\u5165\u7684\u4F4D\u7F6E\u3002</span>
<span class="token comment">// \u8BF7\u5FC5\u987B\u4F7F\u7528\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(log n) \u7684\u7B97\u6CD5\u3002</span>

<span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">searchInsert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token keyword">const</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> middle
  <span class="token keyword">let</span> i<span class="token punctuation">,</span> j
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> <span class="token number">0</span>
    j <span class="token operator">=</span> middle
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span>
    j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> i
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> i
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target <span class="token operator">&amp;&amp;</span> target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span>
    i<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> j
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_51-\u6700\u5927\u5B50\u6570\u6570\u7EC4\u548C" tabindex="-1">51.\u6700\u5927\u5B50\u6570\u6570\u7EC4\u548C <a class="header-anchor" href="#_51-\u6700\u5927\u5B50\u6570\u6570\u7EC4\u548C" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">maxSubArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span> <span class="token comment">// \u4FDD\u8BC1\u662F\u6700\u5C0F\u503C</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> preMin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    preMin<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      preMin<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>preMin<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ans <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> preMin<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">maxSubArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">maxSubArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 23</span>
</code></pre></div><h2 id="_75-\u989C\u8272\u5206\u7C7B" tabindex="-1">75.\u989C\u8272\u5206\u7C7B <a class="header-anchor" href="#_75-\u989C\u8272\u5206\u7C7B" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">sortColors</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
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
    <span class="token comment">// nums[0...zero] == 0, nums[zero + 1, i] == 1, nums[two, n - 1] == 2</span>
    <span class="token keyword">let</span> zero <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> two <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> two<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        zero<span class="token operator">++</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> zero<span class="token punctuation">)</span>
        i<span class="token operator">++</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        two<span class="token operator">--</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> two<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token function">sortColors</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [0,0,1,1,2,2]</span>

</code></pre></div><h2 id="_167-\u4E24\u6570\u4E4B\u548C-ii-\u8F93\u5165\u6709\u5E8F\u6570\u7EC4" tabindex="-1">167.\u4E24\u6570\u4E4B\u548C II - \u8F93\u5165\u6709\u5E8F\u6570\u7EC4 <a class="header-anchor" href="#_167-\u4E24\u6570\u4E4B\u548C-ii-\u8F93\u5165\u6709\u5E8F\u6570\u7EC4" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numbers<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> numbers<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
      j<span class="token operator">--</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span>
        j <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre></div><h2 id="_215-\u6570\u7EC4\u4E2D\u7684\u7B2Ck\u4E2A\u6700\u5927\u5143\u7D20" tabindex="-1">215.\u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20 <a class="header-anchor" href="#_215-\u6570\u7EC4\u4E2D\u7684\u7B2Ck\u4E2A\u6700\u5927\u5143\u7D20" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">findKthLargest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
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
     * partition\u51FD\u6570
     * @param {number[]} arr \u6570\u7EC4
     * @param {number} l \u5DE6\u8FB9\u6807\u5B9A\u70B9
     * @param {number} r \u53F3\u8FB9\u6807\u5B9A\u70B9
     * @returns {number} \u6807\u5B9A\u70B9
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
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
     * \u83B7\u53D6k\u5927\u7684\u6570
     * @param {number[]} arr
     * @param {number} l
     * @param {number} r
     * @param {*} k
     * @returns {number}
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">selectK</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> $k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>$k <span class="token operator">===</span> p<span class="token punctuation">)</span> <span class="token keyword">return</span> arr<span class="token punctuation">[</span>p<span class="token punctuation">]</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>$k <span class="token operator">&lt;</span> p<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">selectK</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> $k<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">selectK</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> $k<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">selectK</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

</code></pre></div><h2 id="_278-\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C" tabindex="-1">278.\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C <a class="header-anchor" href="#_278-\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */</span>

<span class="token comment">/**
 * @param {function} isBadVersion()
 * @return {function}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">isBadVersion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">let</span> r <span class="token operator">=</span> n
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isBadVersion</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        r <span class="token operator">=</span> mid
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> l
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_283-\u79FB\u52A8\u96F6" tabindex="-1">283.\u79FB\u52A8\u96F6 <a class="header-anchor" href="#_283-\u79FB\u52A8\u96F6" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        n<span class="token operator">++</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre></div><h2 id="_704-\u4E8C\u5206\u67E5\u627E" tabindex="-1">704.\u4E8C\u5206\u67E5\u627E <a class="header-anchor" href="#_704-\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @param {*} nums
     * @param {number} l
     * @param {*} r
     * @param {*} target
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">_search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">$nums<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> $target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>$nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> $target<span class="token punctuation">)</span> <span class="token keyword">return</span> mid
      <span class="token keyword">if</span> <span class="token punctuation">(</span>$nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> $target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">_search</span><span class="token punctuation">(</span>$nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> $target<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">_search</span><span class="token punctuation">(</span>$nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> $target<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">_search</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token comment">// \u975E\u9012\u5F52\u5B9E\u73B0</span>
<span class="token keyword">const</span> <span class="token function-variable function">search2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> r <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token comment">// \u8981\u641C\u7D22\u7684\u8303\u56F4</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> mid
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">else</span> r <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">search2</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="_912-\u6392\u5E8F\u6570\u7EC4" tabindex="-1">912.\u6392\u5E8F\u6570\u7EC4 <a class="header-anchor" href="#_912-\u6392\u5E8F\u6570\u7EC4" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {number[]}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sortArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
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
    <span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> nums
  <span class="token punctuation">}</span>

</code></pre></div><h2 id="_977-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9" tabindex="-1">977.\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9 <a class="header-anchor" href="#_977-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * 977. \u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9
 * @param {number[]} nums
 * @return {number[]}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sortedSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> l <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>l <span class="token operator">*</span> l<span class="token punctuation">)</span>
        i<span class="token operator">++</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>r <span class="token operator">*</span> r<span class="token punctuation">)</span>
        j<span class="token operator">--</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>

</code></pre></div><h2 id="_1234-\u66FF\u6362\u5B50\u4E32\u5F97\u5230\u5E73\u8861\u5B57\u7B26\u4E32" tabindex="-1">1234.\u66FF\u6362\u5B50\u4E32\u5F97\u5230\u5E73\u8861\u5B57\u7B26\u4E32 <a class="header-anchor" href="#_1234-\u66FF\u6362\u5B50\u4E32\u5F97\u5230\u5E73\u8861\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">balancedString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
      <span class="token operator">++</span>num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;QWER&#39;</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> r <span class="token operator">=</span> n
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> m <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        num<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> num<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> m <span class="token operator">||</span>
        num<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> num<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> m <span class="token operator">||</span>
        num<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">-</span> num<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> m <span class="token operator">||</span>
        num<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">+</span> num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">-</span> num<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> m
      <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> j <span class="token operator">-</span> i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> r
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">balancedString</span><span class="token punctuation">(</span><span class="token string">&#39;QWER&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="_1248-\u7EDF\u8BA1-\u4F18\u7F8E\u5B50\u6570\u7EC4" tabindex="-1">1248.\u7EDF\u8BA1[\u4F18\u7F8E\u5B50\u6570\u7EC4] <a class="header-anchor" href="#_1248-\u7EDF\u8BA1-\u4F18\u7F8E\u5B50\u6570\u7EC4" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">numberOfSubarrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span>
    count<span class="token punctuation">[</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> k <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">+=</span> count<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> k<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      count<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
  <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">numberOfSubarrays</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">numberOfSubarrays</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">numberOfSubarrays</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="\u5251\u6307-offer-40-\u6700\u5C0F\u7684k\u4E2A\u6570" tabindex="-1">\u5251\u6307 Offer 40. \u6700\u5C0F\u7684k\u4E2A\u6570 <a class="header-anchor" href="#\u5251\u6307-offer-40-\u6700\u5C0F\u7684k\u4E2A\u6570" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
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
 * partition\u51FD\u6570
 * @param {number[]} arr \u6570\u7EC4
 * @param {number} l \u5DE6\u8FB9\u6807\u5B9A\u70B9
 * @param {number} r \u53F3\u8FB9\u6807\u5B9A\u70B9
 * @returns {number} \u6807\u5B9A\u70B9
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
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
 * \u83B7\u53D6k\u5927\u7684\u6570
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 * @param {*} k
 * @returns {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">selectK</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> p<span class="token punctuation">)</span> <span class="token keyword">return</span> arr<span class="token punctuation">[</span>p<span class="token punctuation">]</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> p<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">selectK</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">selectK</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @param {number[]} data
 * @param {number} k
 * @return {number[]}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getLeastNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">selectK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5251\u6307-offer-51-\u6570\u7EC4\u4E2D\u7684\u9006\u5E8F\u5BF9" tabindex="-1">\u5251\u6307 Offer 51. \u6570\u7EC4\u4E2D\u7684\u9006\u5E8F\u5BF9 <a class="header-anchor" href="#\u5251\u6307-offer-51-\u6570\u7EC4\u4E2D\u7684\u9006\u5E8F\u5BF9" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * \u8FD9\u9053\u9898\u53EF\u4EE5\u5DE7\u5999\u5229\u7528\u5F52\u5E76\u6392\u5E8F\u7684\u601D\u60F3
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">reversePairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6392\u5E8F
 * @param {number[]} arrData
 * @returns {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">mergeSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arrData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u7684\u6570\u7EC4\uFF0Carr[l, mid] \u548C arr[mid + 1, r]
   * @param {number[]} arr
   * @param {number} l
   * @param {number} mid
   * @param {number} r
   * @param {number[]} temp
   * @returns {number}
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> r<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    temp <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> rest <span class="token operator">=</span> <span class="token number">0</span>
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
        rest <span class="token operator">+=</span> mid <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span>
        arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>j <span class="token operator">-</span> l<span class="token punctuation">]</span>
        j<span class="token operator">++</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> rest
  <span class="token punctuation">}</span>
  <span class="token comment">/**
   * \u6392\u5E8F\u8FC7\u7A0B
   * @param {number[]} arr
   * @param {number} l
   * @param {number} r
   * @param {number[]} temp
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">let</span> rest <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    rest <span class="token operator">+=</span> <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
    rest <span class="token operator">+=</span> <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rest <span class="token operator">+=</span> <span class="token function">merge</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> r<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> rest
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arrData<span class="token punctuation">]</span>
  <span class="token keyword">return</span> <span class="token function">sort</span><span class="token punctuation">(</span>arrData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arrData<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_300-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" tabindex="-1">300.\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217 <a class="header-anchor" href="#_300-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">lengthOfLIS</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>max<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span><span class="token operator">++</span>max<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token keyword">let</span> right <span class="token operator">=</span> max
      <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> right <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> dp<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
          pos <span class="token operator">=</span> mid
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      dp<span class="token punctuation">[</span>pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max
  <span class="token punctuation">}</span>

<span class="token function">lengthOfLIS</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div>`,35),e=[o];function c(u,l,k,r,i,m){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{b as __pageData,w as default};
