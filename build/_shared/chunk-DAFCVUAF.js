import{c as S}from"/aiida-mc3d/build/_shared/chunk-RAQ24GF6.js";var v=S((L,r)=>{function h(e){let i={$pattern:e.UNDERSCORE_IDENT_RE,keyword:"abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",built_in:"bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",literal:"false null true"},_="(0|[1-9][\\d_]*)",n="(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",o="0[bB][01_]+",t="([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",l="0[xX]"+t,a="([eE][+-]?"+n+")",d="("+n+"(\\.\\d*|"+a+")|\\d+\\."+n+"|\\."+_+a+"?)",E="(0[xX]("+t+"\\."+t+"|\\.?"+t+")[pP][+-]?"+n+")",s="("+_+"|"+o+"|"+l+")",u="("+E+"|"+d+")",c=`\\\\(['"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};`,g={className:"number",begin:"\\b"+s+"(L|u|U|Lu|LU|uL|UL)?",relevance:0},D={className:"number",begin:"\\b("+u+"([fF]|L|i|[fF]i|Li)?|"+s+"(i|[fF]i|Li))",relevance:0},N={className:"string",begin:"'("+c+"|.)",end:"'",illegal:"."},f={className:"string",begin:'"',contains:[{begin:c,relevance:0}],end:'"[cwd]?'},m={className:"string",begin:'[rq]"',end:'"[cwd]?',relevance:5},b={className:"string",begin:"`",end:"`[cwd]?"},O={className:"string",begin:'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',relevance:10},M={className:"string",begin:'q"\\{',end:'\\}"'},T={className:"meta",begin:"^#!",end:"$",relevance:5},A={className:"meta",begin:"#(line)",end:"$",relevance:5},p={className:"keyword",begin:"@[a-zA-Z_][a-zA-Z_\\d]*"},I=e.COMMENT("\\/\\+","\\+\\/",{contains:["self"],relevance:10});return{name:"D",keywords:i,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,I,O,f,m,b,M,D,g,N,T,A,p]}}r.exports=h});export{v as a};
