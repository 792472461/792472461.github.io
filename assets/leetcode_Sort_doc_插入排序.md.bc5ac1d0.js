import{_ as e,c as a,o as i,a as t}from"./app.b9cbff89.js";const u='{"title":"\u63D2\u5165\u6392\u5E8F","description":"","frontmatter":{},"relativePath":"leetcode/Sort/doc/\u63D2\u5165\u6392\u5E8F.md","lastUpdated":1640530572279}',l={},_=t('<h1 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1">\u63D2\u5165\u6392\u5E8F <a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a></h1><ul><li>\u63D2\u5165\u7B97\u6CD5\u7684\u6838\u5FC3\u601D\u60F3</li><li>\u533A\u5206\u5DF2\u6392\u5E8F\u533A\u95F4\u548C\u672A\u6392\u5E8F\u533A\u95F4</li><li>\u53D6\u672A\u6392\u5E8F\u533A\u95F4\u4E2D\u7684\u5143\u7D20\uFF0C\u5728\u5DF2\u6392\u5E8F\u533A\u95F4\u4E2D\u627E\u5230\u5408\u9002\u7684\u63D2\u5165\u4F4D\u7F6E\u5C06\u5176\u63D2\u5165\uFF0C\u5E76\u4FDD\u8BC1\u5DF2\u6392\u5E8F\u533A\u95F4\u6570\u636E\u4E00\u76F4\u6709\u5E8F\u3002</li><li>\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u76F4\u5230\u672A\u6392\u5E8F\u533A\u95F4\u4E2D\u5143\u7D20\u4E3A\u7A7A\uFF0C\u7B97\u6CD5\u7ED3\u675F\u3002</li></ul><h1 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h1><ol><li>\u63D2\u5165\u6392\u5E8F\u7B97\u6CD5\u7684\u8FD0\u884C\u5E76\u4E0D\u9700\u8981\u989D\u5916\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u6240\u4EE5\u7A7A\u95F4\u590D\u6742\u5EA6\u662F O(1)\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u662F\u4E00\u4E2A\u539F\u5730\u6392\u5E8F\u7B97\u6CD5\u3002</li><li>\u5BF9\u4E8E\u503C\u76F8\u540C\u7684\u5143\u7D20\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u5C06\u540E\u9762\u51FA\u73B0\u7684\u5143\u7D20\uFF0C\u63D2\u5165\u5230\u524D\u9762\u51FA\u73B0\u5143\u7D20\u7684\u540E\u9762\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4FDD\u6301\u539F\u6709\u7684\u524D\u540E\u987A\u5E8F\u4E0D\u53D8\uFF0C\u6240\u4EE5\u63D2\u5165\u6392\u5E8F\u662F\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\u3002</li><li>\u5982\u679C\u6211\u4EEC\u4ECE\u5C3E\u5230\u5934\u5728\u6709\u5E8F\u6570\u636E\u7EC4\u91CC\u9762\u67E5\u627E\u63D2\u5165\u4F4D\u7F6E\uFF0C\u6BCF\u6B21\u53EA\u9700\u8981\u6BD4\u8F83\u4E00\u4E2A\u6570\u636E\u5C31\u80FD\u786E\u5B9A\u63D2\u5165\u7684\u4F4D\u7F6E\u3002\u6240\u4EE5\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u662F\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)</li><li>\u5982\u679C\u6570\u7EC4\u662F\u5012\u5E8F\u7684\uFF0C\u6BCF\u6B21\u63D2\u5165\u90FD\u76F8\u5F53\u4E8E\u5728\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u5165\u65B0\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u9700\u8981\u79FB\u52A8\u5927\u91CF\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u6700\u574F\u60C5\u51B5\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n2)\u3002</li><li>\u6BCF\u6B21\u63D2\u5165\u64CD\u4F5C\u90FD\u76F8\u5F53\u4E8E\u5728\u6570\u7EC4\u4E2D\u63D2\u5165\u4E00\u4E2A\u6570\u636E\uFF0C\u5FAA\u73AF\u6267\u884C n \u6B21\u63D2\u5165\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5E73\u5747\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n2)\u3002</li></ol>',4),r=[_];function o(n,c,d,s,h,p){return i(),a("div",null,r)}var m=e(l,[["render",o]]);export{u as __pageData,m as default};
