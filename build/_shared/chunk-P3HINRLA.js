import{c as n}from"/aiida-mc3d/build/_shared/chunk-RAQ24GF6.js";var r=n((i,t)=>{t.exports=a;a.displayName="haxe";a.aliases=[];function a(e){e.languages.haxe=e.languages.extend("clike",{string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},"class-name":[{pattern:/(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,function:{pattern:/\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,greedy:!0},operator:/\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/}),e.languages.insertBefore("haxe","string",{"string-interpolation":{pattern:/'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^{}]+\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:e.languages.haxe}}},string:/[\s\S]+/}}}),e.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,greedy:!0,inside:{"regex-flags":/\b[a-z]+$/,"regex-source":{pattern:/^(~\/)[\s\S]+(?=\/$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^~\/|\/$/}}}),e.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#(?:else|elseif|end|if)\b.*/,alias:"property"},metadata:{pattern:/@:?[\w.]+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"important"}})}});export{r as a};
