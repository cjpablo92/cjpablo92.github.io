(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/ipS":function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return s})),i.d(t,"default",(function(){return b}));i("5hJT"),i("W1QL"),i("K/PF"),i("t91x"),i("75LO"),i("PJhk");var n=i("SAVP"),l=i("TjRS"),a=i("ZFoC"),o=i("XO8t"),r=i("Jor/");i("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/BlcText/BlcText.mdx"}});var p={_frontmatter:s},u=l.a;function b(e){var t=e.components,i=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,["components"]);return Object(n.b)(u,c({},p,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"text-elements"},"Text elements"),Object(n.b)("h2",{id:"paragraphs"},"Paragraphs"),Object(n.b)("h4",{id:"properties"},"Properties"),Object(n.b)(a.c,{of:o.f,mdxType:"Props"}),Object(n.b)("h5",{id:"sizes"},"Sizes"),Object(n.b)("p",null,"Use the ",Object(n.b)("inlineCode",{parentName:"p"},"size")," prop for additional font sizes choosing one of the following values: ",Object(n.b)("inlineCode",{parentName:"p"},"largest"),", ",Object(n.b)("inlineCode",{parentName:"p"},"larger"),", ",Object(n.b)("inlineCode",{parentName:"p"},"inherit"),", ",Object(n.b)("inlineCode",{parentName:"p"},"smaller")," or ",Object(n.b)("inlineCode",{parentName:"p"},"smallest"),"."),Object(n.b)("h5",{id:"text-alignment"},"Text alignment"),Object(n.b)("p",null,"Arranges its content on the horizontal axis. This prop will be inherited by its children."),Object(n.b)("h5",{id:"text-wrap"},"Text wrap"),Object(n.b)("p",null,"You can force the paragraph not to break when reaching its container max width just by adding the ",Object(n.b)("inlineCode",{parentName:"p"},"nowrap"),' boolean prop. This will prevent your paragraph\'s lines to break and stick to a "one line" text block.'),Object(n.b)("h5",{id:"text-style-helpers"},"Text style helpers"),Object(n.b)("p",null,"You can choose from this helpers to style inline code on the fly: ",Object(n.b)("inlineCode",{parentName:"p"},"Bold"),", ",Object(n.b)("inlineCode",{parentName:"p"},"Italic"),", ",Object(n.b)("inlineCode",{parentName:"p"},"Br"),". This helpers have been already styled and exported as custom components."),Object(n.b)("h4",{id:"examples"},"Examples"),Object(n.b)(a.b,{__position:1,__code:'<BlcParagraph\n  color={color.asphalt}\n  margin={size.marginSmallest}\n  nowrap={false}\n  size=""\n  textAlign="left"\n>\n  <Bold>Lorem ipsum</Bold> dolor sit amet, consectetur adipiscing elit. Nullam\n  convallis gravida lacus. Nunc sollicitudin consectetur elit id vestibulum.\n  Fusce justo orci, malesuada quis condimentum sed, vehicula eu justo.{\' \'}\n  <Italic>In pellentesque feugiat ex</Italic>, tincidunt rutrum magna\n  vulputate nec. Praesent eget finibus erat. Integer maximus tellus ac\n  pellentesque finibus.\n  <Br />\n  Morbi id erat malesuada, euismod diam ut, porta justo. Aenean vitae enim\n  orci. Vestibulum ut risus in urna aliquet iaculis. Praesent dignissim cursus\n  hendrerit.\n</BlcParagraph>',__scope:{props:i,DefaultLayout:l.a,Playground:a.b,Props:a.c,BlcParagraph:o.f,BlcText:o.h,BlcQuote:o.g,Bold:o.i,Italic:o.k,BlcLink:o.c,BlcCode:o.a,Br:o.j,color:r.a,size:r.b},mdxType:"Playground"},Object(n.b)(o.f,{color:r.a.asphalt,margin:r.b.marginSmallest,nowrap:!1,size:"",textAlign:"left",mdxType:"BlcParagraph"},Object(n.b)(o.i,{mdxType:"Bold"},"Lorem ipsum")," dolor sit amet, consectetur adipiscing elit. Nullam convallis gravida lacus. Nunc sollicitudin consectetur elit id vestibulum. Fusce justo orci, malesuada quis condimentum sed, vehicula eu justo. ",Object(n.b)(o.k,{mdxType:"Italic"},"In pellentesque feugiat ex"),", tincidunt rutrum magna vulputate nec. Praesent eget finibus erat. Integer maximus tellus ac pellentesque finibus.",Object(n.b)(o.j,{mdxType:"Br"}),"Morbi id erat malesuada, euismod diam ut, porta justo. Aenean vitae enim orci. Vestibulum ut risus in urna aliquet iaculis. Praesent dignissim cursus hendrerit.")),Object(n.b)("h2",{id:"texts"},"Texts"),Object(n.b)("p",null,"This component works just like a text span, by default it will behaviour like an inline tag helper, but display attributes can be passed through the ",Object(n.b)("inlineCode",{parentName:"p"},"display")," prop to force it as a text block."),Object(n.b)("h4",{id:"properties-1"},"Properties"),Object(n.b)(a.c,{of:o.h,mdxType:"Props"}),Object(n.b)("h4",{id:"examples-1"},"Examples"),Object(n.b)(a.b,{__position:3,__code:'<BlcText\n  color=""\n  display="inline"\n  inverted={false}\n  margin="0"\n  size="inherit"\n  textAlign="left"\n>\n  Lorem ipsum dolor sit amet\n</BlcText>',__scope:{props:i,DefaultLayout:l.a,Playground:a.b,Props:a.c,BlcParagraph:o.f,BlcText:o.h,BlcQuote:o.g,Bold:o.i,Italic:o.k,BlcLink:o.c,BlcCode:o.a,Br:o.j,color:r.a,size:r.b},mdxType:"Playground"},Object(n.b)(o.h,{color:"",display:"inline",inverted:!1,margin:"0",size:"inherit",textAlign:"left",mdxType:"BlcText"},"Lorem ipsum dolor sit amet")),Object(n.b)("h2",{id:"quotes"},"Quotes"),Object(n.b)("p",null,"Predefined and styled components to address quotes or comments."),Object(n.b)("h4",{id:"properties-2"},"Properties"),Object(n.b)(a.c,{of:o.g,mdxType:"Props"}),Object(n.b)("h4",{id:"examples-2"},"Examples"),Object(n.b)(a.b,{__position:5,__code:'<BlcQuote\n  color=""\n  display="inline-block"\n  href=""\n  inverted={false}\n  lang={null}\n  margin={size.marginSmaller}\n  size="inherit"\n  textAlign="left"\n>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis\n  gravida lacus. Nunc sollicitudin consectetur elit id vestibulum.\n</BlcQuote>',__scope:{props:i,DefaultLayout:l.a,Playground:a.b,Props:a.c,BlcParagraph:o.f,BlcText:o.h,BlcQuote:o.g,Bold:o.i,Italic:o.k,BlcLink:o.c,BlcCode:o.a,Br:o.j,color:r.a,size:r.b},mdxType:"Playground"},Object(n.b)(o.g,{color:"",display:"inline-block",href:"",inverted:!1,lang:null,margin:r.b.marginSmaller,size:"inherit",textAlign:"left",mdxType:"BlcQuote"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis gravida lacus. Nunc sollicitudin consectetur elit id vestibulum.")),Object(n.b)("h2",{id:"code"},"Code"),Object(n.b)("h4",{id:"properties-3"},"Properties"),Object(n.b)(a.c,{of:o.a,mdxType:"Props"}),Object(n.b)("h4",{id:"examples-3"},"Examples"),Object(n.b)(a.b,{__position:7,__code:'<BlcCode\n  background={color.smoke}\n  color={color.alert}\n  size="inherit"\n  textAlign="left"\n  type="code"\n>\n  {`<LoremIpsum />`}\n</BlcCode>',__scope:{props:i,DefaultLayout:l.a,Playground:a.b,Props:a.c,BlcParagraph:o.f,BlcText:o.h,BlcQuote:o.g,Bold:o.i,Italic:o.k,BlcLink:o.c,BlcCode:o.a,Br:o.j,color:r.a,size:r.b},mdxType:"Playground"},Object(n.b)(o.a,{background:r.a.smoke,color:r.a.alert,size:"inherit",textAlign:"left",type:"code",mdxType:"BlcCode"},"<LoremIpsum />")),Object(n.b)("h2",{id:"links"},"Links"),Object(n.b)("h4",{id:"properties-4"},"Properties"),Object(n.b)(a.c,{of:o.c,mdxType:"Props"}),Object(n.b)("h4",{id:"examples-4"},"Examples"),Object(n.b)(a.b,{__position:9,__code:"<BlcLink>Lorem ipsum</BlcLink>",__scope:{props:i,DefaultLayout:l.a,Playground:a.b,Props:a.c,BlcParagraph:o.f,BlcText:o.h,BlcQuote:o.g,Bold:o.i,Italic:o.k,BlcLink:o.c,BlcCode:o.a,Br:o.j,color:r.a,size:r.b},mdxType:"Playground"},Object(n.b)(o.c,{mdxType:"BlcLink"},"Lorem ipsum")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/BlcText/BlcText.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-blc-text-blc-text-mdx-0746e42f4fdf0c556650.js.map