import{_ as n,c as t,o as s,a as e}from"./app.5d16524a.js";const q='{"title":"\u6982\u5FF5","description":"","frontmatter":{"sidebar":"auto"},"headers":[{"level":2,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5"},{"level":2,"title":"\u5B89\u88C5\u548C\u7F16\u8BD1","slug":"\u5B89\u88C5\u548C\u7F16\u8BD1"},{"level":2,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B"}],"relativePath":"typescript/basics/index.md","lastUpdated":1638168219942}',a={},o=e(`<h2 id="\u6982\u5FF5" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a></h2><ul><li><code>TypeScript</code>\u662F\u5FAE\u8F6F\u5F00\u53D1\u7684\u4E00\u4E2A\u5F00\u6E90\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u901A\u8FC7\u5728<code>JavaScript</code>\u7684\u57FA\u7840\u4E0A\u6DFB\u52A0\u9759\u6001\u7C7B\u578B\u5B9A\u4E49\u6784\u5EFA\u800C\u6210</li><li><code>TypeScript</code>\u901A\u8FC7<code>TypeScript</code>\u7F16\u8BD1\u5668\u6216Babel\u8F6C\u8BD1\u4E3A<code>JavaScript</code>\u4EE3\u7801\uFF0C\u53EF\u8FD0\u884C\u5728\u4EFB\u4F55\u6D4F\u89C8\u5668\uFF0C\u4EFB\u4F55\u64CD\u4F5C\u7CFB\u7EDF</li><li><code>Typescript</code>\u662F<code>JavaScript</code>\u7684\u8D85\u7EA7\uFF0C\u9075\u5FAA\u6700\u65B0\u7684<code>ES5/ES6</code>\u89C4\u8303\uFF0C<code>Typescript</code>\u6269\u5C55\u4E86<code>JavaScript</code>\u8BED\u6CD5</li><li>\u5F88\u591A\u7684\u5F00\u6E90\u9879\u76EE\u662F\u57FA\u4E8E<code>Typescript</code>\u7684\uFF0C\u5B66\u4E60<code>Typescript</code>\u6709\u52A9\u4E8E\u9605\u8BFB\u6E90\u7801</li><li><code>Typescript</code>\u63D0\u4F9B\u7684\u7C7B\u578B\u7CFB\u7EDF\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u5199\u4EE3\u7801\u65F6\u5019\u63D0\u4F9B\u66F4\u4E30\u5BCC\u7684\u8BED\u6CD5\u63D0\u793A</li><li>\u5728\u521B\u5EFA\u524D\u7684\u7F16\u8BD1\u9636\u6BB5\u7ECF\u8FC7\u7C7B\u578B\u68C0\u6D4B\uFF0C\u53EF\u4EE5\u89C4\u907F\u6389\u5F88\u591A\u7C7B\u578B\u7684\u9519\u8BEF</li></ul><h2 id="\u5B89\u88C5\u548C\u7F16\u8BD1" tabindex="-1">\u5B89\u88C5\u548C\u7F16\u8BD1 <a class="header-anchor" href="#\u5B89\u88C5\u548C\u7F16\u8BD1" aria-hidden="true">#</a></h2><p>\u5B89\u88C5</p><div class="language-bash"><pre><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">npm</span> i typescript -g

<span class="token comment"># \u67E5\u770B\u7248\u672C\u53F7</span>
tsc -v
</code></pre></div><p>\u7F16\u8BD1</p><div class="language-bash"><pre><code><span class="token comment"># \u521B\u5EFAts\u6587\u4EF6helloworld</span>
<span class="token function">touch</span> helloworld.ts
<span class="token comment"># \u7F16\u8BD1helloworld</span>
tsc helloworld.ts
</code></pre></div><p>\u751F\u6210\u914D\u7F6E\u6587\u4EF6\uFF0C\u6267\u884C\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-bash"><pre><code>tsc --init
</code></pre></div><p>\u751F\u6210<code>tsconfig.json</code></p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Visit https://aka.ms/tsconfig.json to read more about this file */</span>

    <span class="token comment">/* Projects */</span>
    <span class="token comment">// &quot;incremental&quot;: true,                              /* Enable incremental compilation */</span>
    <span class="token comment">// &quot;composite&quot;: true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */</span>
    <span class="token comment">// &quot;tsBuildInfoFile&quot;: &quot;./&quot;,                          /* Specify the folder for .tsbuildinfo incremental compilation files. */</span>
    <span class="token comment">// &quot;disableSourceOfProjectReferenceRedirect&quot;: true,  /* Disable preferring source files instead of declaration files when referencing composite projects */</span>
    <span class="token comment">// &quot;disableSolutionSearching&quot;: true,                 /* Opt a project out of multi-project reference checking when editing. */</span>
    <span class="token comment">// &quot;disableReferencedProjectLoad&quot;: true,             /* Reduce the number of projects loaded automatically by TypeScript. */</span>

    <span class="token comment">/* Language and Environment */</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2016&quot;</span><span class="token punctuation">,</span>                                  <span class="token comment">/* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */</span>
    <span class="token comment">// &quot;lib&quot;: [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */</span>
    <span class="token comment">// &quot;jsx&quot;: &quot;preserve&quot;,                                /* Specify what JSX code is generated. */</span>
    <span class="token comment">// &quot;experimentalDecorators&quot;: true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */</span>
    <span class="token comment">// &quot;emitDecoratorMetadata&quot;: true,                    /* Emit design-type metadata for decorated declarations in source files. */</span>
    <span class="token comment">// &quot;jsxFactory&quot;: &quot;&quot;,                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. &#39;React.createElement&#39; or &#39;h&#39; */</span>
    <span class="token comment">// &quot;jsxFragmentFactory&quot;: &quot;&quot;,                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. &#39;React.Fragment&#39; or &#39;Fragment&#39;. */</span>
    <span class="token comment">// &quot;jsxImportSource&quot;: &quot;&quot;,                            /* Specify module specifier used to import the JSX factory functions when using \`jsx: react-jsx*\`.\` */</span>
    <span class="token comment">// &quot;reactNamespace&quot;: &quot;&quot;,                             /* Specify the object invoked for \`createElement\`. This only applies when targeting \`react\` JSX emit. */</span>
    <span class="token comment">// &quot;noLib&quot;: true,                                    /* Disable including any library files, including the default lib.d.ts. */</span>
    <span class="token comment">// &quot;useDefineForClassFields&quot;: true,                  /* Emit ECMAScript-standard-compliant class fields. */</span>

    <span class="token comment">/* Modules */</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>                                <span class="token comment">/* Specify what module code is generated. */</span>
    <span class="token comment">// &quot;rootDir&quot;: &quot;./&quot;,                                  /* Specify the root folder within your source files. */</span>
    <span class="token comment">// &quot;moduleResolution&quot;: &quot;node&quot;,                       /* Specify how TypeScript looks up a file from a given module specifier. */</span>
    <span class="token comment">// &quot;baseUrl&quot;: &quot;./&quot;,                                  /* Specify the base directory to resolve non-relative module names. */</span>
    <span class="token comment">// &quot;paths&quot;: {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */</span>
    <span class="token comment">// &quot;rootDirs&quot;: [],                                   /* Allow multiple folders to be treated as one when resolving modules. */</span>
    <span class="token comment">// &quot;typeRoots&quot;: [],                                  /* Specify multiple folders that act like \`./node_modules/@types\`. */</span>
    <span class="token comment">// &quot;types&quot;: [],                                      /* Specify type package names to be included without being referenced in a source file. */</span>
    <span class="token comment">// &quot;allowUmdGlobalAccess&quot;: true,                     /* Allow accessing UMD globals from modules. */</span>
    <span class="token comment">// &quot;resolveJsonModule&quot;: true,                        /* Enable importing .json files */</span>
    <span class="token comment">// &quot;noResolve&quot;: true,                                /* Disallow \`import\`s, \`require\`s or \`&lt;reference&gt;\`s from expanding the number of files TypeScript should add to a project. */</span>

    <span class="token comment">/* JavaScript Support */</span>
    <span class="token comment">// &quot;allowJs&quot;: true,                                  /* Allow JavaScript files to be a part of your program. Use the \`checkJS\` option to get errors from these files. */</span>
    <span class="token comment">// &quot;checkJs&quot;: true,                                  /* Enable error reporting in type-checked JavaScript files. */</span>
    <span class="token comment">// &quot;maxNodeModuleJsDepth&quot;: 1,                        /* Specify the maximum folder depth used for checking JavaScript files from \`node_modules\`. Only applicable with \`allowJs\`. */</span>

    <span class="token comment">/* Emit */</span>
    <span class="token comment">// &quot;declaration&quot;: true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */</span>
    <span class="token comment">// &quot;declarationMap&quot;: true,                           /* Create sourcemaps for d.ts files. */</span>
    <span class="token comment">// &quot;emitDeclarationOnly&quot;: true,                      /* Only output d.ts files and not JavaScript files. */</span>
    <span class="token comment">// &quot;sourceMap&quot;: true,                                /* Create source map files for emitted JavaScript files. */</span>
    <span class="token comment">// &quot;outFile&quot;: &quot;./&quot;,                                  /* Specify a file that bundles all outputs into one JavaScript file. If \`declaration\` is true, also designates a file that bundles all .d.ts output. */</span>
    <span class="token comment">// &quot;outDir&quot;: &quot;./&quot;,                                   /* Specify an output folder for all emitted files. */</span>
    <span class="token comment">// &quot;removeComments&quot;: true,                           /* Disable emitting comments. */</span>
    <span class="token comment">// &quot;noEmit&quot;: true,                                   /* Disable emitting files from a compilation. */</span>
    <span class="token comment">// &quot;importHelpers&quot;: true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */</span>
    <span class="token comment">// &quot;importsNotUsedAsValues&quot;: &quot;remove&quot;,               /* Specify emit/checking behavior for imports that are only used for types */</span>
    <span class="token comment">// &quot;downlevelIteration&quot;: true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */</span>
    <span class="token comment">// &quot;sourceRoot&quot;: &quot;&quot;,                                 /* Specify the root path for debuggers to find the reference source code. */</span>
    <span class="token comment">// &quot;mapRoot&quot;: &quot;&quot;,                                    /* Specify the location where debugger should locate map files instead of generated locations. */</span>
    <span class="token comment">// &quot;inlineSourceMap&quot;: true,                          /* Include sourcemap files inside the emitted JavaScript. */</span>
    <span class="token comment">// &quot;inlineSources&quot;: true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */</span>
    <span class="token comment">// &quot;emitBOM&quot;: true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */</span>
    <span class="token comment">// &quot;newLine&quot;: &quot;crlf&quot;,                                /* Set the newline character for emitting files. */</span>
    <span class="token comment">// &quot;stripInternal&quot;: true,                            /* Disable emitting declarations that have \`@internal\` in their JSDoc comments. */</span>
    <span class="token comment">// &quot;noEmitHelpers&quot;: true,                            /* Disable generating custom helper functions like \`__extends\` in compiled output. */</span>
    <span class="token comment">// &quot;noEmitOnError&quot;: true,                            /* Disable emitting files if any type checking errors are reported. */</span>
    <span class="token comment">// &quot;preserveConstEnums&quot;: true,                       /* Disable erasing \`const enum\` declarations in generated code. */</span>
    <span class="token comment">// &quot;declarationDir&quot;: &quot;./&quot;,                           /* Specify the output directory for generated declaration files. */</span>
    <span class="token comment">// &quot;preserveValueImports&quot;: true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */</span>

    <span class="token comment">/* Interop Constraints */</span>
    <span class="token comment">// &quot;isolatedModules&quot;: true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */</span>
    <span class="token comment">// &quot;allowSyntheticDefaultImports&quot;: true,             /* Allow &#39;import x from y&#39; when a module doesn&#39;t have a default export. */</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                             <span class="token comment">/* Emit additional JavaScript to ease support for importing CommonJS modules. This enables \`allowSyntheticDefaultImports\` for type compatibility. */</span>
    <span class="token comment">// &quot;preserveSymlinks&quot;: true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */</span>
    <span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">/* Ensure that casing is correct in imports. */</span>

    <span class="token comment">/* Type Checking */</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                                      <span class="token comment">/* Enable all strict type-checking options. */</span>
    <span class="token comment">// &quot;noImplicitAny&quot;: true,                            /* Enable error reporting for expressions and declarations with an implied \`any\` type.. */</span>
    <span class="token comment">// &quot;strictNullChecks&quot;: true,                         /* When type checking, take into account \`null\` and \`undefined\`. */</span>
    <span class="token comment">// &quot;strictFunctionTypes&quot;: true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */</span>
    <span class="token comment">// &quot;strictBindCallApply&quot;: true,                      /* Check that the arguments for \`bind\`, \`call\`, and \`apply\` methods match the original function. */</span>
    <span class="token comment">// &quot;strictPropertyInitialization&quot;: true,             /* Check for class properties that are declared but not set in the constructor. */</span>
    <span class="token comment">// &quot;noImplicitThis&quot;: true,                           /* Enable error reporting when \`this\` is given the type \`any\`. */</span>
    <span class="token comment">// &quot;useUnknownInCatchVariables&quot;: true,               /* Type catch clause variables as &#39;unknown&#39; instead of &#39;any&#39;. */</span>
    <span class="token comment">// &quot;alwaysStrict&quot;: true,                             /* Ensure &#39;use strict&#39; is always emitted. */</span>
    <span class="token comment">// &quot;noUnusedLocals&quot;: true,                           /* Enable error reporting when a local variables aren&#39;t read. */</span>
    <span class="token comment">// &quot;noUnusedParameters&quot;: true,                       /* Raise an error when a function parameter isn&#39;t read */</span>
    <span class="token comment">// &quot;exactOptionalPropertyTypes&quot;: true,               /* Interpret optional property types as written, rather than adding &#39;undefined&#39;. */</span>
    <span class="token comment">// &quot;noImplicitReturns&quot;: true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */</span>
    <span class="token comment">// &quot;noFallthroughCasesInSwitch&quot;: true,               /* Enable error reporting for fallthrough cases in switch statements. */</span>
    <span class="token comment">// &quot;noUncheckedIndexedAccess&quot;: true,                 /* Include &#39;undefined&#39; in index signature results */</span>
    <span class="token comment">// &quot;noImplicitOverride&quot;: true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */</span>
    <span class="token comment">// &quot;noPropertyAccessFromIndexSignature&quot;: true,       /* Enforces using indexed accessors for keys declared using an indexed type */</span>
    <span class="token comment">// &quot;allowUnusedLabels&quot;: true,                        /* Disable error reporting for unused labels. */</span>
    <span class="token comment">// &quot;allowUnreachableCode&quot;: true,                     /* Disable error reporting for unreachable code. */</span>

    <span class="token comment">/* Completeness */</span>
    <span class="token comment">// &quot;skipDefaultLibCheck&quot;: true,                      /* Skip type checking .d.ts files that are included with TypeScript. */</span>
    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>                                 <span class="token comment">/* Skip type checking all .d.ts files. */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u5E03\u5C14\u7C7B\u578B(boolean)</p><div class="language-typescript"><pre><code><span class="token keyword">let</span> married<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6570\u5B57\u7C7B\u578B(number)</p><div class="language-typescript"><pre><code><span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5B57\u7B26\u4E32\u7C7B\u578B(string) 
</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>typescript
<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;\u54C8\u54C8\u54C8\u54C8&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6570\u7EC4\u7C7B\u578B(array)</p><div class="language-typescript"><pre><code><span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;\u54C8\u54C8\u54C8\u54C8&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5143\u7EC4\u7C7B\u578B(tuple)</p><div class="language-typescript"><pre><code><span class="token comment">// \u5728 TypeScript \u7684\u57FA\u7840\u7C7B\u578B\u4E2D\uFF0C\u5143\u7EC4\uFF08 Tuple \uFF09\u8868\u793A\u4E00\u4E2A\u5DF2\u77E5\u6570\u91CF\u548C\u7C7B\u578B\u7684\u6570\u7EC4</span>
<span class="token keyword">const</span> s<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;sfs&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6570\u7EC4\u548C\u5143\u7EC4\u533A\u522B</p><p>\u6570\u7EC4:</p><ol><li>\u6BCF\u4E00\u9879\u90FD\u662F\u540C\u4E00\u79CD\u7C7B\u578B</li><li>\u6CA1\u6709\u957F\u5EA6\u9650\u5236</li><li>\u7528\u6237\u8868\u793A\u4E00\u4E2A\u5217\u8868</li></ol><p>\u5143\u7EC4:</p><ol><li>\u6BCF\u4E00\u9879\u53EF\u4EE5\u662F\u4E0D\u540C\u7684\u7C7B\u578B</li><li>\u6709\u9884\u5B9A\u4E49\u7684\u957F\u5EA6</li><li>\u7528\u4E8E\u8868\u793A\u4E00\u4E2A\u56FA\u5B9A\u7684\u7ED3\u6784</li></ol></div><p>\u679A\u4E3E\u7C7B\u578B(enum)</p><ul><li>\u4E8B\u5148\u8003\u8651\u67D0\u4E00\u4E2A\u53D8\u91CF\u7684\u6240\u6709\u7684\u53EF\u80FD\u7684\u503C\uFF0C\u5C3D\u91CF\u7528\u81EA\u7136\u8BED\u8A00\u4E2D\u7684\u5355\u8BCD\u8868\u793A\u5B83\u7684\u6BCF\u4E00\u4E2A\u503C</li><li>\u6BD4\u5982\u8BF4\u6708\u4EFD\u3001\u661F\u671F\u3001\u6027\u522B\u3001\u989C\u8272\u3001\u5355\u4F4D</li></ul><p>\u666E\u901A\u679A\u4E3E</p><div class="language-typescript"><pre><code><span class="token keyword">enum</span> Gender<span class="token punctuation">{</span>
  <span class="token constant">GIRL</span><span class="token punctuation">,</span>
  <span class="token constant">BOY</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u674E\u96F7\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Gender<span class="token punctuation">.</span><span class="token constant">BOY</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u97E9\u6885\u6885\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Gender<span class="token punctuation">.</span><span class="token constant">GIRL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> Week<span class="token punctuation">{</span>
  <span class="token constant">MONDAY</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">TUESDAY</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u4ECA\u5929\u662F\u661F\u671F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Week<span class="token punctuation">.</span><span class="token constant">MONDAY</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,25),p=[o];function c(l,i,r,u,m,d){return s(),t("div",null,p)}var f=n(a,[["render",c]]);export{q as __pageData,f as default};
