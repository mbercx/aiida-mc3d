import{c as a}from"/aiida-mc3d/build/_shared/chunk-RAQ24GF6.js";var i=a((r,n)=>{n.exports=t;t.displayName="vala";t.aliases=[];function t(e){e.languages.vala=e.languages.extend("clike",{"class-name":[{pattern:/\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w)/,inside:{punctuation:/\./}},{pattern:/(\[)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/((?:\b(?:class|enum|interface|new|struct)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}}],keyword:/\b(?:abstract|as|assert|async|base|bool|break|case|catch|char|class|const|construct|continue|default|delegate|delete|do|double|dynamic|else|ensures|enum|errordomain|extern|finally|float|for|foreach|get|if|in|inline|int|int16|int32|int64|int8|interface|internal|is|lock|long|namespace|new|null|out|override|owned|params|private|protected|public|ref|requires|return|set|short|signal|sizeof|size_t|ssize_t|static|string|struct|switch|this|throw|throws|try|typeof|uchar|uint|uint16|uint32|uint64|uint8|ulong|unichar|unowned|ushort|using|value|var|virtual|void|volatile|weak|while|yield)\b/i,function:/\b\w+(?=\s*\()/,number:/(?:\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,operator:/\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,punctuation:/[{}[\];(),.:]/,constant:/\b[A-Z0-9_]+\b/}),e.languages.insertBefore("vala","string",{"raw-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"template-string":{pattern:/@"[\s\S]*?"/,greedy:!0,inside:{interpolation:{pattern:/\$(?:\([^)]*\)|[a-zA-Z]\w*)/,inside:{delimiter:{pattern:/^\$\(?|\)$/,alias:"punctuation"},rest:e.languages.vala}},string:/[\s\S]+/}}}),e.languages.insertBefore("vala","keyword",{regex:{pattern:/\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\//,"regex-flags":/^[a-z]+$/}}})}});export{i as a};
