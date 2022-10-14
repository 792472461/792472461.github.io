import{_ as l,c as i,o as e,a as d}from"./app.5d16524a.js";const f='{"title":"\u6811\u7ED3\u6784","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u6982\u5FF5","slug":"\u57FA\u672C\u6982\u5FF5"},{"level":2,"title":"\u4E8C\u53C9\u641C\u7D22\u6811","slug":"\u4E8C\u53C9\u641C\u7D22\u6811"},{"level":2,"title":"AVL\u6811","slug":"avl\u6811"},{"level":2,"title":"\u7EA2\u9ED1\u6811","slug":"\u7EA2\u9ED1\u6811"},{"level":2,"title":"\u7EBF\u6BB5\u6811","slug":"\u7EBF\u6BB5\u6811"},{"level":2,"title":"\u5E76\u67E5\u96C6","slug":"\u5E76\u67E5\u96C6"},{"level":2,"title":"\u5B57\u5178\u6811","slug":"\u5B57\u5178\u6811"}],"relativePath":"algorithm/data-structure/Tree.md","lastUpdated":1641363732648}',a={},o=d('<h1 id="\u6811\u7ED3\u6784" tabindex="-1">\u6811\u7ED3\u6784 <a class="header-anchor" href="#\u6811\u7ED3\u6784" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1">\u57FA\u672C\u6982\u5FF5 <a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u6811</p><ul><li>\u8282\u70B9\u3001\u6839\u8282\u70B9\u3001\u7236\u8282\u70B9\u3001\u5B50\u8282\u70B9\u3001\u5144\u5F1F\u8282\u70B9\u3001\u5B50\u6811\u3001\u5DE6\u5B50\u6811\u3001\u53F3\u5B50\u6811</li><li>\u4E00\u68F5\u6811\u4E00\u4E2A\u8282\u70B9\u90FD\u6CA1\u6709\uFF0C\u88AB\u79F0\u4E3A\u7A7A\u6811</li><li>\u4E00\u68F5\u6811\u53EF\u4EE5\u53EA\u67091\u4E2A\u8282\u70B9\uFF0C\u4E5F\u5C31\u662F\u6839\u8282\u70B9</li><li>\u8282\u70B9\u7684\u5EA6\uFF1A\u5B50\u6811\u7684\u4E2A\u6570</li><li>\u6811\u7684\u5EA6\uFF1A\u6240\u6709\u8282\u70B9\u4E2D\u6700\u5927\u503C</li><li>\u53F6\u5B50\u8282\u70B9\uFF1A\u5EA6\u4E3A0\u7684\u8282\u70B9</li><li>\u5C42\u6570\uFF1A\u6839\u8282\u70B9\u662F\u7B2C1\u5C42\uFF0C\u6839\u8282\u70B9\u7684\u5B50\u8282\u70B9\u662F\u7B2C2\u5C42\uFF0C\u4EE5\u6B64\u7C7B\u63A8</li><li>\u6DF1\u5EA6\uFF1A\u4ECE\u6839\u8282\u70B9\u5230\u5F53\u524D\u8282\u70B9\u7684\u552F\u4E00\u8DEF\u5F84\u4E0A\u8282\u70B9\u7684\u603B\u6570</li><li>\u9AD8\u5EA6\uFF1A\u4ECE\u5F53\u524D\u8282\u70B9\u5230\u6700\u8FDC\u53F6\u5B50\u8282\u70B9\u7684\u8DEF\u5F84\u4E0A\u7684\u8282\u70B9\u603B\u6570</li><li>\u6811\u7684\u6DF1\u5EA6\uFF1A\u6240\u6709\u8282\u70B9\u6DF1\u5EA6\u4E2D\u7684\u6700\u5927\u503C</li><li>\u6811\u7684\u9AD8\u5EA6\uFF1A\u6240\u6709\u8282\u70B9\u9AD8\u5EA6\u4E2D\u7684\u6700\u5927\u503C</li><li>\u4E00\u822C\u6811\u7684\u9AD8\u5EA6\u548C\u6811\u7684\u6DF1\u5EA6\u662F\u76F8\u7B49\u7684</li></ul><p>\u4E8C\u53C9\u6811</p><ul><li>\u6BCF\u4E2A\u8282\u70B9\u7684\u5EA6\u6700\u5927\u4E3A2(\u6700\u591A\u62E5\u67092\u4E2A\u5B50\u6811)</li><li>\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u662F\u6709\u987A\u5E8F\u7684\uFF0C\u5DE6\u5B50\u6811\u5C0F\u4E8E\u53F3\u5B50\u6811</li><li>\u5373\u4F7F\u67D0\u8282\u70B9\u53EA\u6709\u4E00\u68F5\u5B50\u6811\uFF0C\u4E5F\u8981\u533A\u5206\u5DE6\u53F3\u5B50\u6811</li><li>\u4E8C\u53C9\u6811\u662F\u6709\u5E8F\u6811</li><li>\u975E\u7A7A\u4E8C\u53C9\u6811\u7684\u7B2Ci\u5C42\uFF0C\u6700\u591A\u53C8<code>2\u7684(i - 1)</code>\u6B21\u65B9\u4E2A\u8282\u70B9</li><li>\u9AD8\u5EA6\u4E3Ah\u7684\u4E8C\u53C9\u6811\u4E0A\u6700\u591A\u6709<code>2\u7684(h)\u6B21\u65B9 - 1</code>\u4E2A\u8282\u70B9</li><li>\u5BF9\u4E8E\u4EFB\u4F55\u4E00\u9897\u975E\u7A7A\u4E8C\u53C9\u6811\uFF0C\u5982\u679C\u53F6\u5B50\u8282\u70B9\u4E2A\u6570\u4E3A<code>n0</code>\uFF0C\u5EA6\u4E3A<code>2</code>\u7684\u8282\u70B9\u4E2A\u6570\u4E3A<code>n2</code>\uFF0C\u5219<code>n0 = n2 + 1</code></li></ul><p>\u771F\u4E8C\u53C9\u6811</p><ul><li>\u6240\u6709\u7684\u8282\u70B9\u7684\u5EA6\u8981\u4E48\u4E3A0\uFF0C\u8981\u4E48\u4E3A2</li></ul><p>\u6EE1\u4E8C\u53C9\u6811</p><ul><li>\u6240\u6709\u7684\u8282\u70B9\u8981\u4E48\u4E3A0\uFF0C\u8981\u4E48\u4E3A1</li><li>\u6240\u6709\u7684\u53F6\u5B50\u8282\u70B9\u90FD\u5728\u6700\u540E\u4E00\u5C42</li><li>\u5728\u540C\u6837\u9AD8\u5EA6\u7684\u4E8C\u53C9\u6811\u4E2D\uFF0C\u6EE1\u4E8C\u53C9\u6811\u7684\u53F6\u5B50\u8282\u70B9\u662F\u6700\u591A\u7684\u3001\u603B\u7ED3\u70B9\u6570\u91CF\u4E5F\u662F\u6700\u591A\u7684</li><li>\u6EE1\u4E8C\u53C9\u6811\u4E00\u5B9A\u662F\u771F\u4E8C\u53C9\u6811\uFF0C\u771F\u4E8C\u53C9\u6811\u4E0D\u4E00\u5B9A\u662F\u6EE1\u4E8C\u53C9\u6811</li><li>\u5047\u8BBE\u6EE1\u4E8C\u53C9\u6811\u7684\u9AD8\u5EA6\u4E3Ah\uFF0C\u90A3\u4E48 <ol><li>\u7B2C<code>i</code>\u5C42\u8282\u70B9\u7684\u6570\u91CF\uFF1A<code>2\u7684(i - 1)\u6B21\u65B9</code></li><li>\u53F6\u5B50\u8282\u70B9\u6570\u91CF\uFF1A<code>2\u7684(h - 1)\u6B21\u65B9</code></li><li>\u603B\u8282\u70B9\u6570\u91CF n = log2(n + 1)</li></ol></li></ul><p>\u5B8C\u5168\u4E8C\u53C9\u6811</p><ul><li>\u53F6\u5B50\u8282\u70B9\u53EA\u4F1A\u51FA\u73B0\u5728\u6700\u540E2\u5C42</li><li>\u6700\u540E1\u5C42\u7684\u53F6\u5B50\u8282\u70B9\u53EA\u4F1A\u9760\u5DE6\u5BF9\u9F50</li><li>\u4ECE\u6839\u8282\u70B9\u5230\u5012\u6570\u7B2C2\u5C42\u662F\u6EE1\u4E8C\u53C9\u6811</li><li>\u6EE1\u4E8C\u53C9\u6811\u4E00\u5B9A\u662F\u4E00\u4E2A\u5B8C\u5168\u4E8C\u53C9\u6811\uFF0C\u5B8C\u5168\u4E8C\u53C9\u6811\u4E0D\u4E00\u5B9A\u662F\u6EE1\u4E8C\u53C9\u6811</li><li>\u5EA6\u4E3A1\u7684\u8282\u70B9\u53EA\u6709\u5DE6\u5B50\u6811</li><li>\u5EA6\u4E3A1\u7684\u8282\u70B9\u8981\u4E48\u662F1\u4E2A\u8981\u4E48\u662F0\u4E2A</li><li>\u540C\u6837\u8282\u70B9\u6570\u91CF\u7684\u4E8C\u53C9\u6811\uFF0C\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u9AD8\u5EA6\u6700\u5C0F</li><li>\u5047\u8BBE\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u9AD8\u5EA6\u662Fh\uFF0C\u90A3\u4E48 <ol><li>\u81F3\u5C11\u6709<code>2\u7684(h - 1)\u6B21\u65B9</code>\u4E2A\u8282\u70B9</li><li>\u6700\u591A\u6709<code>2\u7684(h)\u6B21\u65B9 - 1</code>\u4E2A\u8282\u70B9\uFF08\u4E5F\u5C31\u662F\u6EE1\u4E8C\u53C9\u6811\uFF09</li><li>\u603B\u7ED3\u70B9\u6570\u91CF\u4E3An</li></ol></li><li>\u4E00\u9897\u6709n\u4E2A\u8282\u70B9\u7684\u5B8C\u5168\u4E8C\u53C9\u6811\uFF0C\u4ECE\u4E0A\u5230\u4E0B\u3001\u4ECE\u5DE6\u5230\u53F3\u4ECE0\u5F00\u59CB\u7F16\u53F7\uFF0C\u5BF9\u4EFB\u610F\u4E00\u4E2A\u7B2Ci\u4E2A\u8282\u70B9 <ol><li>\u5982\u679C<code>i=0</code>\uFF0C\u5B83\u662F<code>\u6839</code>\u8282\u70B9</li><li>\u5982\u679C<code>i&gt;0</code>\uFF0C\u5B83\u7684<code>\u7236</code>\u8282\u70B9\u7F16\u53F7\u662F<code>Math.floor(i - 1) / 2</code></li><li>\u5982\u679C<code>2i + 1 \u2264 n - 1</code>\uFF0C\u5B83\u7684<code>\u5DE6\u5B50\u8282\u70B9</code>\u7F16\u53F7\u4E3A<code>2i + 1</code></li><li>\u5982\u679C<code>2i + 1 \uFF1E n - 1</code>\uFF0C\u5B83\u7684\u65E0<code>\u5DE6\u5B50\u8282\u70B9</code></li><li>\u5982\u679C<code>2i + 2 \u2264 n - 1</code>\uFF0C\u5B83\u7684<code>\u53F3\u5B50\u8282\u70B9</code>\u7F16\u53F7\u4E3A<code>2i + 2</code></li></ol></li></ul><h2 id="\u4E8C\u53C9\u641C\u7D22\u6811" tabindex="-1">\u4E8C\u53C9\u641C\u7D22\u6811 <a class="header-anchor" href="#\u4E8C\u53C9\u641C\u7D22\u6811" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6982\u5FF5</p><ol><li>\u4E8C\u53C9\u641C\u7D22\u6811\u662F\u4E8C\u53C9\u6811\u7684\u4E00\u79CD\u82F1\u6587\u7B80\u79F0BST</li><li>\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u5927\u4E8E\u5176\u5DE6\u5B50\u6811\u6240\u6709\u8282\u70B9\u7684\u503C</li><li>\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\u90FD\u503C\u90FD\u5C0F\u4E8E\u5176\u53F3\u5B50\u6811\u6240\u6709\u8282\u70B9\u7684\u503C</li><li>\u5B83\u7684\u5DE6\u53F3\u5B50\u6811\u4E5F\u662F\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811</li><li>\u4E8C\u53C9\u6811\u5B58\u50A8\u7684\u6570\u636E\u5FC5\u987B\u5177\u5907\u53EF\u6BD4\u8F83\u6027</li><li>\u4E0D\u5141\u8BB8\u4E3Anull</li></ol></div><h2 id="avl\u6811" tabindex="-1">AVL\u6811 <a class="header-anchor" href="#avl\u6811" aria-hidden="true">#</a></h2><h2 id="\u7EA2\u9ED1\u6811" tabindex="-1">\u7EA2\u9ED1\u6811 <a class="header-anchor" href="#\u7EA2\u9ED1\u6811" aria-hidden="true">#</a></h2><h2 id="\u7EBF\u6BB5\u6811" tabindex="-1">\u7EBF\u6BB5\u6811 <a class="header-anchor" href="#\u7EBF\u6BB5\u6811" aria-hidden="true">#</a></h2><h2 id="\u5E76\u67E5\u96C6" tabindex="-1">\u5E76\u67E5\u96C6 <a class="header-anchor" href="#\u5E76\u67E5\u96C6" aria-hidden="true">#</a></h2><h2 id="\u5B57\u5178\u6811" tabindex="-1">\u5B57\u5178\u6811 <a class="header-anchor" href="#\u5B57\u5178\u6811" aria-hidden="true">#</a></h2>',19),c=[o];function t(r,h,n,s,u,_){return e(),i("div",null,c)}var v=l(a,[["render",t]]);export{f as __pageData,v as default};
