(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{I6wP:function(e,t,l){"use strict";l("PJhk");var n=l("YIwv"),o=l.n(n),r=l("Jor/"),c=l("aD51"),a=function(e){return Object(c.c)("div",{className:o.a.dynamic([["2610728844",[e.margin,e.size,r.b.marginSmaller]]])},e.children,Object(c.c)(o.a,{id:"2610728844",dynamic:[e.margin,e.size,r.b.marginSmaller]},[".__jsx-style-dynamic-selector{box-sizing:border-box;margin:"+e.margin+" auto;max-width:"+e.size+";padding:0 "+r.b.marginSmaller+";width:100%;}"]))};a.defaultProps={margin:"0",size:"100%"},t.a=a,a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"blcGridBase",filename:"components/BlcGrid/BlcGridBase.js"}}),a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"blcGridBase",filename:"components/BlcGrid/BlcGridBase.js"}})},RVjI:function(e,t,l){"use strict";l("PJhk");var n=l("I6wP"),o=l("Jor/"),r=l("aD51"),c=function(e){return Object(r.c)(n.a,{size:o.d.blcContainerSize(e.size),margin:e.margin},e.children)};c.defaultProps={children:null,margin:"0",size:null};var a=c;c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"blcContainer",filename:"components/BlcGrid/Container/index.js"}}),c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"blcContainer",filename:"components/BlcGrid/Container/index.js"}});var i=l("YIwv"),b=l.n(i),d=function(e){return Object(r.c)("div",{className:b.a.dynamic([["3328053182",[e.background,e.borderColor,e.borderStyle,e.borderWidth,e.height,e.margin,e.overflow,e.padding,e.textAlign]]])},e.children,Object(r.c)(b.a,{id:"3328053182",dynamic:[e.background,e.borderColor,e.borderStyle,e.borderWidth,e.height,e.margin,e.overflow,e.padding,e.textAlign]},[".__jsx-style-dynamic-selector{background-color:"+e.background+";border-color:"+e.borderColor+";border-style:"+e.borderStyle+";border-width:"+e.borderWidth+"px;box-sizing:border-box;height:"+e.height+";margin:"+e.margin+" auto;overflow:"+e.overflow+";padding:"+e.padding+";text-align:"+e.textAlign+";}"]))};d.defaultProps={background:o.a.smokeLight,borderColor:o.a.smokeDark,borderStyle:"solid",borderWidth:0,height:"fit-content",margin:"0",overflow:"visible",padding:o.b.marginSmaller,textAlign:"left"};var m=d;d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"blcBox",filename:"components/BlcGrid/Box/index.js"}}),d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"blcBox",filename:"components/BlcGrid/Box/index.js"}});var p=l("mXGw"),s=l.n(p),x=function(e){var t=Object(p.useRef)(null),l=Object(p.useState)(0),n=l[0],c=l[1],a=o.d.blcColumnGutter(e.gutter),i=s.a.Children.count(e.children);Object(p.useEffect)((function(){c(t.current.offsetWidth)}),[n]);var d=o.b.columns,m=n-(i<=1?0:a*(i-1));return Object(r.c)("div",{ref:t,className:b.a.dynamic([["4074712696",[e.alignContent,e.alignItems,e.direction,e.wrap,e.wrap,e.justifyContent,e.margin]]])+" "+(e.gutter||"")},s.a.Children.map(e.children,(function(e){return s.a.cloneElement(e,{columnGutter:a,columnTotal:d,totalRowWidth:m})})),Object(r.c)(b.a,{id:"4074712696",dynamic:[e.alignContent,e.alignItems,e.direction,e.wrap,e.wrap,e.justifyContent,e.margin]},[".__jsx-style-dynamic-selector{-webkit-align-content:"+e.alignContent+";-ms-flex-line-pack:"+e.alignContent+";align-content:"+e.alignContent+";-webkit-align-items:"+e.alignItems+";-webkit-box-align:"+e.alignItems+";-ms-flex-align:"+e.alignItems+";align-items:"+e.alignItems+";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:"+e.direction+";-ms-flex-direction:"+e.direction+";flex-direction:"+e.direction+";-webkit-flex-flow:"+e.wrap+";-ms-flex-flow:"+e.wrap+";flex-flow:"+e.wrap+";-webkit-flex-wrap:"+e.wrap+";-ms-flex-wrap:"+e.wrap+";flex-wrap:"+e.wrap+";-webkit-box-pack:"+e.justifyContent+";-webkit-justify-content:"+e.justifyContent+";-ms-flex-pack:"+e.justifyContent+";justify-content:"+e.justifyContent+";margin:"+e.margin+" auto;width:100%;}"]))};x.defaultProps={alignContent:"stretch",alignItems:"stretch",direction:"row",gutter:null,justifyContent:"flex-start",margin:"0",wrap:"wrap"};var u=x;x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"BlcRow",filename:"components/BlcGrid/Row/index.js"}}),x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"BlcRow",filename:"components/BlcGrid/Row/index.js"}});var B=function(e){return Object(r.c)("div",{className:b.a.dynamic([["657894165",[e.align,e.order,e.margin,e.columnGutter/2,e.totalRowWidth/e.columnTotal*e.col]]])+" "+("col-"+e.col||!1)},e.children,Object(r.c)(b.a,{id:"657894165",dynamic:[e.align,e.order,e.margin,e.columnGutter/2,e.totalRowWidth/e.columnTotal*e.col]},["div.__jsx-style-dynamic-selector{-webkit-align-self:"+e.align+";-ms-flex-item-align:"+e.align+";align-self:"+e.align+";-webkit-order:"+e.order+";-ms-flex-order:"+e.order+";order:"+e.order+";margin:"+e.margin+" "+e.columnGutter/2+"px;width:"+e.totalRowWidth/e.columnTotal*e.col+"px;}","div.__jsx-style-dynamic-selector:first-of-type{margin-left:0;}","div.__jsx-style-dynamic-selector:last-of-type{margin-right:0;}"]))};B.defaultProps={align:"auto",col:12,children:null,margin:"0",order:0};var g=B;B&&B===Object(B)&&Object.isExtensible(B)&&!B.hasOwnProperty("__filemeta")&&Object.defineProperty(B,"__filemeta",{configurable:!0,value:{name:"blcColumn",filename:"components/BlcGrid/Column/index.js"}}),B&&B===Object(B)&&Object.isExtensible(B)&&!B.hasOwnProperty("__filemeta")&&Object.defineProperty(B,"__filemeta",{configurable:!0,value:{name:"blcColumn",filename:"components/BlcGrid/Column/index.js"}}),l.d(t,"c",(function(){return a})),l.d(t,"a",(function(){return m})),l.d(t,"d",(function(){return u})),l.d(t,"b",(function(){return g})),void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"BlcColumn",filename:"components/BlcGrid/index.js"}}),void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"BlcRow",filename:"components/BlcGrid/index.js"}}),void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"BlcBox",filename:"components/BlcGrid/index.js"}}),void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"BlcContainer",filename:"components/BlcGrid/index.js"}}),void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"BlcColumn",filename:"components/BlcGrid/index.js"}}),void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"BlcRow",filename:"components/BlcGrid/index.js"}}),void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"BlcBox",filename:"components/BlcGrid/index.js"}}),void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"BlcContainer",filename:"components/BlcGrid/index.js"}})},heJw:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return m})),l.d(t,"default",(function(){return x}));l("5hJT"),l("W1QL"),l("K/PF"),l("t91x"),l("75LO"),l("PJhk");var n=l("SAVP"),o=l("TjRS"),r=l("ZFoC"),c=l("XO8t"),a=l("I6wP"),i=l("RVjI"),b=l("Jor/");l("aD51");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/BlcGrid/BlcGrid.mdx"}});var p={_frontmatter:m},s=o.a;function x(e){var t=e.components,l=function(e,t){if(null==e)return{};var l,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,["components"]);return Object(n.b)(s,d({},p,l,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"grid"},"Grid"),Object(n.b)("p",null,"Components and options for laying out, including wrapping containers and grid system."),Object(n.b)("h4",{id:"how-it-works"},"How it works"),Object(n.b)("p",null,"BacklotCars’ grid system uses a series of containers, rows, and columns to layout and align content.\nIt’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together."),Object(n.b)(r.b,{__position:0,__code:"<BlcContainer margin={size.margin}>\n  <BlcRow>\n    <BlcColumn col={4}>\n      <BlcBox borderWidth={1} />\n    </BlcColumn>\n    <BlcColumn col={4}>\n      <BlcBox borderWidth={1} />\n    </BlcColumn>\n    <BlcColumn col={4}>\n      <BlcBox borderWidth={1} />\n    </BlcColumn>\n  </BlcRow>\n</BlcContainer>",__scope:{props:l,DefaultLayout:o.a,Playground:r.b,Props:r.c,BlcParagraph:c.f,BlcGridBase:a.a,BlcContainer:i.c,BlcBox:i.a,BlcRow:i.d,BlcColumn:i.b,color:b.a,size:b.b},mdxType:"Playground"},Object(n.b)(i.c,{margin:b.b.margin,mdxType:"BlcContainer"},Object(n.b)(i.d,{mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))))),Object(n.b)("p",null,"The above example creates three equal-width columns using our predefined grid classes. Those columns are centered in the page with the parent ",Object(n.b)("inlineCode",{parentName:"p"},"container"),"."),Object(n.b)("p",null,"Breaking it down, here’s how it works:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Containers provide a means to center and horizontally pad your site’s contents. Use the ",Object(n.b)("inlineCode",{parentName:"li"},"container")," component for a responsive pixel width."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Rows")," are wrappers for ",Object(n.b)("inlineCode",{parentName:"li"},"columns"),". Each column has horizontal padding (called a gutter) for controlling the space between them. You can control this space by modifying the ",Object(n.b)("inlineCode",{parentName:"li"},"row"),"'s gutter prop."),Object(n.b)("li",{parentName:"ul"},"In a grid layout, content must be placed within columns and only columns may be immediate children of rows."),Object(n.b)("li",{parentName:"ul"},"Column props indicate the number of ",Object(n.b)("inlineCode",{parentName:"li"},"columns")," you’d like to use out of the possible per row. So, if you want three equal-width columns across, you can use ",Object(n.b)("inlineCode",{parentName:"li"},"col={4}"),"."),Object(n.b)("li",{parentName:"ul"},"Column widths are set in calculated pixels, they’re fluid and sized relative to their parent element.")),Object(n.b)("h2",{id:"container"},"Container"),Object(n.b)("p",null,"Containers are the most basic layout element but not required when using our default grid system."),Object(n.b)("p",null,"While containers can be nested, most layouts do not require a nested container."),Object(n.b)("h4",{id:"properties"},"Properties"),Object(n.b)(r.c,{of:i.c,mdxType:"Props"}),Object(n.b)("h6",{id:"sizes"},"Sizes"),Object(n.b)("p",null,"The default container width is ",Object(n.b)("inlineCode",{parentName:"p"},"1280px"),". Use the ",Object(n.b)("inlineCode",{parentName:"p"},"size")," prop for additional widths choosing one of the following values: ",Object(n.b)("inlineCode",{parentName:"p"},"largest"),", ",Object(n.b)("inlineCode",{parentName:"p"},"larger"),", ",Object(n.b)("inlineCode",{parentName:"p"},"smaller")," or ",Object(n.b)("inlineCode",{parentName:"p"},"smallest"),".\nThis prop affects the ",Object(n.b)("inlineCode",{parentName:"p"},"max-width")," style and wraps the container to the following sizes: ",Object(n.b)("inlineCode",{parentName:"p"},"largest: 2560px"),", ",Object(n.b)("inlineCode",{parentName:"p"},"larger: 1920px"),", ",Object(n.b)("inlineCode",{parentName:"p"},"smaller: 960px"),", ",Object(n.b)("inlineCode",{parentName:"p"},"smallest: 640px,")),Object(n.b)("h6",{id:"margins"},"Margins"),Object(n.b)("p",null,"Container's margin works as any other margin but only on the vertical axis, the prop will expect a string value. You cannot control individual margins, just top/bottom."),Object(n.b)("h4",{id:"examples"},"Examples"),Object(n.b)(r.b,{__position:2,__code:'<BlcContainer margin="0" size="smallest">\n  <BlcBox borderWidth={1} />\n</BlcContainer>',__scope:{props:l,DefaultLayout:o.a,Playground:r.b,Props:r.c,BlcParagraph:c.f,BlcGridBase:a.a,BlcContainer:i.c,BlcBox:i.a,BlcRow:i.d,BlcColumn:i.b,color:b.a,size:b.b},mdxType:"Playground"},Object(n.b)(i.c,{margin:"0",size:"smallest",mdxType:"BlcContainer"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)("h2",{id:"row"},"Row"),Object(n.b)("p",null,"Use this powerful flexbox grid to build layouts of all shapes and sizes thanks to its column system."),Object(n.b)("h4",{id:"properties-1"},"Properties"),Object(n.b)(r.c,{of:i.d,mdxType:"Props"}),Object(n.b)("h5",{id:"alignment"},"Alignment"),Object(n.b)("p",null,"Use flexbox alignment utilities through ",Object(n.b)("inlineCode",{parentName:"p"},"alignItems")," (vertically), ",Object(n.b)("inlineCode",{parentName:"p"},"alignContent")," and ",Object(n.b)("inlineCode",{parentName:"p"},"justifyContent")," (horizontally) align columns."),Object(n.b)("p",null,"Note: thee ",Object(n.b)("inlineCode",{parentName:"p"},"alignContent")," prop, alignes the content of the entire row vertically. If the row wrapped into two lines, this property will help you distributing the content."),Object(n.b)("h6",{id:"vertical-alignment"},"Vertical alignment"),Object(n.b)(i.a,{background:b.a.white,borderWidth:1,textAlign:"center",margin:b.b.margin,mdxType:"BlcBox"},Object(n.b)(i.d,{alignItems:"stretch",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,height:"100%",mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"By default columns stretch to fill the height."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,height:"100%",mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,height:"100%",mdxType:"BlcBox"}))),Object(n.b)(i.d,{alignItems:"flex-start",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Using flex-start columns align to the top."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{alignItems:"center",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Using center columns align to the middle."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{alignItems:"flex-end",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Using flex-end columns align to the bottom."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})))),Object(n.b)("h6",{id:"horizontal-alignment"},"Horizontal alignment"),Object(n.b)(i.a,{background:b.a.white,borderWidth:1,textAlign:"center",margin:b.b.margin,mdxType:"BlcBox"},Object(n.b)(i.d,{justifyContent:"flex-start",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"By default 'flex-start', columns align to the left."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{justifyContent:"center",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Using 'center' columns align at the center of the row."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{justifyContent:"flex-end",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Using 'flex-end' columns align to the right."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{justifyContent:"space-between",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Using 'space-between' remaining space will be distributed evenly between columns."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{justifyContent:"space-around",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Using 'space-around' remaining space will be distributed as margins to columns."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{justifyContent:"space-evenly",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Using 'space-evenly' remaining space will be spread into offsets and gutters evenly."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})))),Object(n.b)("h5",{id:"gutters"},"Gutters"),Object(n.b)(i.a,{background:b.a.white,borderWidth:1,textAlign:"center",margin:b.b.margin,mdxType:"BlcBox"},Object(n.b)(i.d,{gutter:"largest",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},'gutter="largest"'))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{gutter:"larger",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},'gutter="larger"'))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},'gutter=""'))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{gutter:"smaller",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},'gutter="smaller"'))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{gutter:"smallest",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},'gutter="smallest"'))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{gutter:"inherit",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},'gutter="inherit"'))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})))),Object(n.b)("h5",{id:"margins-1"},"Margins"),Object(n.b)("p",null,"Rows's margin works as container margins, you only target the vertical axis, the prop will expect a string value. You cannot control individual margins, just top/bottom."),Object(n.b)("h5",{id:"column-wrapping"},"Column wrapping"),Object(n.b)("p",null,"If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line unless you change the prop other ways."),Object(n.b)("h4",{id:"examples-1"},"Examples"),Object(n.b)(r.b,{__position:7,__code:'<BlcRow\n  alignContent="stretch"\n  alignItems="stretch"\n  direction="row"\n  gutter=""\n  justifyContent="flex-start"\n  margin="0"\n  wrap="wrap"\n>\n  <BlcColumn col={4}>\n    <BlcBox borderWidth={1} height="100%">\n      <BlcParagraph>Default initial state.</BlcParagraph>\n    </BlcBox>\n  </BlcColumn>\n  <BlcColumn col={4}>\n    <BlcBox borderWidth={1} height="100%" />\n  </BlcColumn>\n  <BlcColumn col={4}>\n    <BlcBox borderWidth={1} height="100%" />\n  </BlcColumn>\n</BlcRow>',__scope:{props:l,DefaultLayout:o.a,Playground:r.b,Props:r.c,BlcParagraph:c.f,BlcGridBase:a.a,BlcContainer:i.c,BlcBox:i.a,BlcRow:i.d,BlcColumn:i.b,color:b.a,size:b.b},mdxType:"Playground"},Object(n.b)(i.d,{alignContent:"stretch",alignItems:"stretch",direction:"row",gutter:"",justifyContent:"flex-start",margin:"0",wrap:"wrap",mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,height:"100%",mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Default initial state."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,height:"100%",mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,height:"100%",mdxType:"BlcBox"})))),Object(n.b)("h2",{id:"column"},"Column"),Object(n.b)("h4",{id:"properties-2"},"Properties"),Object(n.b)(r.c,{of:i.b,mdxType:"Props"}),Object(n.b)("h5",{id:"alignment-1"},"Alignment"),Object(n.b)("p",null,"Use flexbox alignment utilities through ",Object(n.b)("inlineCode",{parentName:"p"},"align")," property in order to vertically align a specific columns."),Object(n.b)(i.a,{background:b.a.white,borderWidth:1,textAlign:"center",margin:b.b.margin,mdxType:"BlcBox"},Object(n.b)(i.d,{alignItems:"flex-start",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Default initial state."))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{alignItems:"flex-start",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"2nd column aligned 'center'."))),Object(n.b)(i.b,{col:4,align:"center",mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"}))),Object(n.b)(i.d,{alignItems:"flex-start",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"2nd column aligned 'flex-end'."))),Object(n.b)(i.b,{col:4,align:"flex-end",mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"})))),Object(n.b)("h5",{id:"order"},"Order"),Object(n.b)("p",null,"Use ",Object(n.b)("inlineCode",{parentName:"p"},"order")," props for controlling the visual order of your content. Includes support for 1 through max amount of columns (12)."),Object(n.b)(i.a,{background:b.a.white,borderWidth:1,textAlign:"center",margin:b.b.margin,mdxType:"BlcBox"},Object(n.b)(i.d,{alignItems:"flex-start",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"First column"))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Second column"))),Object(n.b)(i.b,{col:4,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Third column")))),Object(n.b)(i.d,{alignItems:"flex-start",margin:b.b.marginSmaller,mdxType:"BlcRow"},Object(n.b)(i.b,{col:4,order:3,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"First column"))),Object(n.b)(i.b,{col:4,order:1,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Second column"))),Object(n.b)(i.b,{col:4,order:2,mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Third column"))))),Object(n.b)("h5",{id:"margins-2"},"Margins"),Object(n.b)("p",null,"Column's margin works as Rows margins, you only target the vertical axis, the prop will expect a string value. You cannot control individual margins, just top/bottom."),Object(n.b)("h4",{id:"examples-2"},"Examples"),Object(n.b)(r.b,{__position:11,__code:'<BlcRow>\n  <BlcColumn align="auto" col={4} margin="0" order="0">\n    <BlcBox borderWidth={1}>\n      <BlcParagraph>First column</BlcParagraph>\n    </BlcBox>\n  </BlcColumn>\n  <BlcColumn align="auto" col={4} margin="0" order="0">\n    <BlcBox borderWidth={1}>\n      <BlcParagraph>Second column</BlcParagraph>\n    </BlcBox>\n  </BlcColumn>\n  <BlcColumn align="auto" col={4} margin="0" order="0">\n    <BlcBox borderWidth={1}>\n      <BlcParagraph>Third column</BlcParagraph>\n    </BlcBox>\n  </BlcColumn>\n</BlcRow>',__scope:{props:l,DefaultLayout:o.a,Playground:r.b,Props:r.c,BlcParagraph:c.f,BlcGridBase:a.a,BlcContainer:i.c,BlcBox:i.a,BlcRow:i.d,BlcColumn:i.b,color:b.a,size:b.b},mdxType:"Playground"},Object(n.b)(i.d,{mdxType:"BlcRow"},Object(n.b)(i.b,{align:"auto",col:4,margin:"0",order:"0",mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"First column"))),Object(n.b)(i.b,{align:"auto",col:4,margin:"0",order:"0",mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Second column"))),Object(n.b)(i.b,{align:"auto",col:4,margin:"0",order:"0",mdxType:"BlcColumn"},Object(n.b)(i.a,{borderWidth:1,mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Third column"))))),Object(n.b)("h2",{id:"box"},"Box"),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"Box")," is a flexible and extensible content container. It includes options for contextual background and border colors, and powerful display options."),Object(n.b)("p",null,"Boxes are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other components. They have no margin by default, so use spacing utilities as needed."),Object(n.b)("h4",{id:"properties-3"},"Properties"),Object(n.b)(r.c,{of:i.a,mdxType:"Props"}),Object(n.b)("h4",{id:"examples-3"},"Examples"),Object(n.b)(r.b,{__position:13,__code:'<BlcBox\n  background={color.smokeLight}\n  borderColor={color.smokeDark}\n  borderStyle="solid"\n  borderWidth={0}\n  height="fit-content"\n  margin="0"\n  overflow="visible"\n  padding={size.marginSmaller}\n  textAlign="left"\n>\n  <BlcParagraph>Box content</BlcParagraph>\n</BlcBox>',__scope:{props:l,DefaultLayout:o.a,Playground:r.b,Props:r.c,BlcParagraph:c.f,BlcGridBase:a.a,BlcContainer:i.c,BlcBox:i.a,BlcRow:i.d,BlcColumn:i.b,color:b.a,size:b.b},mdxType:"Playground"},Object(n.b)(i.a,{background:b.a.smokeLight,borderColor:b.a.smokeDark,borderStyle:"solid",borderWidth:0,height:"fit-content",margin:"0",overflow:"visible",padding:b.b.marginSmaller,textAlign:"left",mdxType:"BlcBox"},Object(n.b)(c.f,{mdxType:"BlcParagraph"},"Box content"))))}x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/BlcGrid/BlcGrid.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-blc-grid-blc-grid-mdx-c7ae7eb626f6d8c0c400.js.map