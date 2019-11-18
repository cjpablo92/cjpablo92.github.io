(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Va2b:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return m}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("SAVP"),a=n("TjRS"),r=n("Y19Q"),c=n("RVjI"),s=n("XO8t"),d=n("Jor/");n("aD51");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"pages/styleguide/code-guidelines.mdx"}});var b={_frontmatter:i},p=a.a;function m(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["components"]);return Object(o.b)(p,l({},b,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)(c.c,{size:"smaller",mdxType:"BlcContainer"},Object(o.b)(r.b,{margin:d.b.marginLargest,mdxType:"BlcH2"},"Code guidelines"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"As BacklotCars continues to grow, both as a product and a company, one challenge we are faced with is learning how to refine the code quality and apply it cohesively to each of our products. We created this code guidelines to act as a central location where we store all the data collected, code snippets, developer tips and more. Anyone working on the BacklotCars products is encouraged to stay familiar with this styleguide and help ensure that it is kept up-to-date."),Object(o.b)(r.d,{margin:d.b.marginLarger,mdxType:"BlcH4"},"Airbnb React/JSX Style Guide"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},Object(o.b)(s.c,{href:"https://github.com/airbnb/javascript/tree/master/react",target:"_blank",mdxType:"BlcLink"},"Read more about this style guide.")),Object(o.b)(s.d,{mdxType:"BlcParagraph"},Object(o.b)(s.h,{mdxType:"Italic"},"A mostly reasonable approach to React and JSX")),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide."),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"Table of Contents 1. [Basic Rules](#basic-rules) 1. [Class vs ",Object(o.b)(s.a,{mdxType:"BlcCode"},"React.createClass")," vs stateless](#class-vs-reactcreateclass-vs-stateless) 1. [Mixins](#mixins) 1. [Naming](#naming) 1. [Declaration](#declaration) 1. [Alignment](#alignment) 1. [Quotes](#quotes) 1. [Spacing](#spacing) 1. [Props](#props) 1. [Refs](#refs) 1. [Parentheses](#parentheses) 1. [Tags](#tags) 1. [Methods](#methods) 1. [Ordering](#ordering) 1. [",Object(o.b)(s.a,{mdxType:"BlcCode"},"isMounted"),"](#ismounted)"),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Basic Rules"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Only include one React component per file. - However, multiple ",Object(o.b)(s.c,{href:"https://facebook.github.io/react/docs/reusable-components.html#stateless-functions",target:"_blank",mdxType:"BlcLink"},"Stateless, or Pure, Components")," are allowed per file. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/no-multi-comp")),". - Always use JSX syntax. - Do not use ",Object(o.b)(s.a,{mdxType:"BlcCode"},"React.createElement")," unless you’re initializing the app from a file that is not JSX. - ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/forbid-prop-types"))," will allow ",Object(o.b)(s.a,{mdxType:"BlcCode"},"arrays")," and ",Object(o.b)(s.a,{mdxType:"BlcCode"},"objects")," only if it is explicitly noted what ",Object(o.b)(s.a,{mdxType:"BlcCode"},"array")," and ",Object(o.b)(s.a,{mdxType:"BlcCode"},"object")," contains, using ",Object(o.b)(s.a,{mdxType:"BlcCode"},"arrayOf"),", ",Object(o.b)(s.a,{mdxType:"BlcCode"},"objectOf"),", or ",Object(o.b)(s.a,{mdxType:"BlcCode"},"shape"),"."),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Class vs ",Object(o.b)(s.a,{mdxType:"BlcCode"},"React.createClass")," vs stateless"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- If you have internal state and/or refs, prefer ",Object(o.b)(s.a,{mdxType:"BlcCode"},"class extends React.Component")," over ",Object(o.b)(s.a,{mdxType:"BlcCode"},"React.createClass"),". eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/prefer-es6-class"))," ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/prefer-stateless-function")),Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\tconst Listing = React.createClass({\n\t\t\t// ...\n\t\t\trender() {\n\t\t\t\treturn <div>{this.state.hello}</div>;\n\t\t\t}\n\t\t});\n\n\t\t// good\n\t\tclass Listing extends React.Component {\n\t\t\t// ...\n\t\t\trender() {\n\t\t\t\treturn <div>{this.state.hello}</div>;\n\t\t\t}\n\t\t}\n\t"),"And if you don’t have state or refs, prefer normal functions (not arrow functions) over classes:",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\tclass Listing extends React.Component {\n\t\t\trender() {\n\t\t\t\treturn <div>{this.props.hello}</div>;\n\t\t\t}\n\t\t}\n\n\t\t// bad (relying on function name inference is discouraged)\n\t\tconst Listing = ({ hello }) => (\n\t\t\t<div>{hello}</div>\n\t\t);\n\n\t\t// good\n\t\tfunction Listing({ hello }) {\n\t\t\treturn <div>{hello}</div>;\n\t\t}\n\t")),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Mixins"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- ",Object(o.b)(s.c,{href:"https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html",target:"_blank",mdxType:"BlcLink"},"Do not use mixins"),"."),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"> Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules."),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Naming"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- ",Object(o.b)(s.f,{mdxType:"Bold"},"Extensions"),": Use ",Object(o.b)(s.a,{mdxType:"BlcCode"},".jsx")," extension for React components. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-filename-extension")),"- ",Object(o.b)(s.f,{mdxType:"Bold"},"Filename"),": Use PascalCase for filenames. E.g., ",Object(o.b)(s.a,{mdxType:"BlcCode"},"ReservationCard.jsx"),". - ",Object(o.b)(s.f,{mdxType:"Bold"},"Reference Naming"),": Use PascalCase for React components and camelCase for their instances. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-pascal-case")),Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\timport reservationCard from './ReservationCard';\n\n\t\t// good\n\t\timport ReservationCard from './ReservationCard';\n\n\t\t// bad\n\t\tconst ReservationItem = <ReservationCard />;\n\n\t\t// good\n\t\tconst reservationItem = <ReservationCard />;\n\t"),"- ",Object(o.b)(s.f,{mdxType:"Bold"},"Component Naming"),": Use the filename as the component name. For example, ",Object(o.b)(s.a,{mdxType:"BlcCode"},"ReservationCard.jsx")," should have a reference name of ",Object(o.b)(s.a,{mdxType:"BlcCode"},"ReservationCard"),". However, for root components of a directory, use ",Object(o.b)(s.a,{mdxType:"BlcCode"},"index.jsx")," as the filename and use the directory name as the component name:",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\timport Footer from './Footer/Footer';\n\n\t\t// bad\n\t\timport Footer from './Footer/index';\n\n\t\t// good\n\t\timport Footer from './Footer';\n\t"),"- ",Object(o.b)(s.f,{mdxType:"Bold"},"Higher-order Component Naming"),": Use a composite of the higher-order component’s name and the passed-in component’s name as the ",Object(o.b)(s.a,{mdxType:"BlcCode"},"displayName")," on the generated component. For example, the higher-order component ",Object(o.b)(s.a,{mdxType:"BlcCode"},"withFoo()"),", when passed a component ",Object(o.b)(s.a,{mdxType:"BlcCode"},"Bar")," should produce a component with a ",Object(o.b)(s.a,{mdxType:"BlcCode"},"displayName")," of ",Object(o.b)(s.a,{mdxType:"BlcCode"},"withFoo(Bar)"),". > Why? A component’s ",Object(o.b)(s.a,{mdxType:"BlcCode"},"displayName")," may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\texport default function withFoo(WrappedComponent) {\n\t\t\treturn function WithFoo(props) {\n\t\t\t\treturn <WrappedComponent {...props} foo />;\n\t\t\t}\n\t\t}\n\n\t\t// good\n\t\texport default function withFoo(WrappedComponent) {\n\t\t\tfunction WithFoo(props) {\n\t\t\t\treturn <WrappedComponent {...props} foo />;\n\t\t\t}\n\n\t\t\tconst wrappedComponentName = WrappedComponent.displayName\n\t\t\t\t|| WrappedComponent.name\n\t\t\t\t|| 'Component';\n\n\t\t\tWithFoo.displayName = withFoo($ {wrappedComponentName});\n\t\t\treturn WithFoo;\n\t\t}\n\t"),"- ",Object(o.b)(s.f,{mdxType:"Bold"},"Props Naming"),": Avoid using DOM component prop names for different purposes. > Why? People expect props like ",Object(o.b)(s.a,{mdxType:"BlcCode"},"style")," and ",Object(o.b)(s.a,{mdxType:"BlcCode"},"className")," to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.",Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<MyComponent style="fancy" />\n\n\t\t// bad\n\t\t<MyComponent className="fancy" />\n\n\t\t// good\n\t\t<MyComponent variant="fancy" />\n\t')),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Declaration"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Do not use ",Object(o.b)(s.a,{mdxType:"BlcCode"},"displayName")," for naming components. Instead, name the component by reference.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\texport default React.createClass({\n\t\t\tdisplayName: 'ReservationCard',\n\t\t\t// stuff goes here\n\t\t});\n\n\t\t// good\n\t\texport default class ReservationCard extends React.Component {\n\t\t}\n\t")),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Alignment"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Follow these alignment styles for JSX syntax. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-closing-bracket-location"))," ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-closing-tag-location")),Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<Foo superLongParam="bar"\n\t\t     anotherSuperLongParam="baz" />\n\n\t\t// good\n\t\t<Foo\n\t\t\tsuperLongParam="bar"\n\t\t\tanotherSuperLongParam="baz"\n\t\t/>\n\n\t\t// if props fit in one line then keep it on the same line\n\t\t<Foo bar="bar" />\n\n\t\t// children get indented normally\n\t\t<Foo\n\t\t\tsuperLongParam="bar"\n\t\t\tanotherSuperLongParam="baz"\n\t\t>\n\t\t\t<Quux />\n\t\t</Foo>\n\n\t\t// bad\n\t\t{showButton &&\n\t\t\t<Button />\n\t\t}\n\n\t\t// bad\n\t\t{\n\t\t\tshowButton &&\n\t\t\t\t<Button />\n\t\t}\n\n\t\t// good\n\t\t{showButton && (\n\t\t\t<Button />\n\t\t)}\n\n\t\t// good\n\t\t{showButton && <Button />}\n\t')),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Quotes"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Always use double quotes (",Object(o.b)(s.a,{mdxType:"BlcCode"},'"'),") for JSX attributes, but single quotes (",Object(o.b)(s.a,{mdxType:"BlcCode"},"'"),") for all other JS. eslint: ",Object(o.b)(s.c,{href:"https://eslint.org/docs/rules/jsx-quotes",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"jsx-quotes")),"> Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\t<Foo bar='bar' />\n\n\t\t// good\n\t\t<Foo bar=\"bar\" />\n\n\t\t// bad\n\t\t<Foo style={{ left: \"20px\" }} />\n\n\t\t// good\n\t\t<Foo style={{ left: '20px' }} />\n\t")),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Spacing"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Always include a single space in your self-closing tag. eslint: ",Object(o.b)(s.c,{href:"https://eslint.org/docs/rules/no-multi-spaces",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"no-multi-spaces")),", ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-tag-spacing")),Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\t<Foo/>\n\n\t\t// very bad\n\t\t<Foo                 />\n\n\t\t// bad\n\t\t<Foo\n\t\t/>\n\n\t\t// good\n\t\t<Foo />\n\t"),"- Do not pad JSX curly braces with spaces. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-curly-spacing")),Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\t<Foo bar={ baz } />\n\n\t\t// good\n\t\t<Foo bar={baz} />\n\t")),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Props"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Always use camelCase for prop names.",Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<Foo\n\t\t\tUserName="hello"\n\t\t\tphone_number={12345678}\n\t\t/>\n\n\t\t// good\n\t\t<Foo\n\t\t\tuserName="hello"\n\t\t\tphoneNumber={12345678}\n\t\t/>\n\t'),"- Omit the value of the prop when it is explicitly ",Object(o.b)(s.a,{mdxType:"BlcCode"},"true"),". eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-boolean-value")),Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\t<Foo\n\t\thidden={true}\n\t\t/>\n\n\t\t// good\n\t\t<Foo\n\t\thidden\n\t\t/>\n\n\t\t// good\n\t\t<Foo hidden />\n\t"),"- Always include an ",Object(o.b)(s.a,{mdxType:"BlcCode"},"alt")," prop on ",Object(o.b)(s.a,{mdxType:"BlcCode"},"<img>")," tags. If the image is presentational, ",Object(o.b)(s.a,{mdxType:"BlcCode"},"alt")," can be an empty string or the ",Object(o.b)(s.a,{mdxType:"BlcCode"},"<img>")," must have ",Object(o.b)(s.a,{mdxType:"BlcCode"},'role="presentation"'),". eslint: ",Object(o.b)(s.c,{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"jsx-a11y/alt-text")),Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<img src="hello.jpg" />\n\n\t\t// good\n\t\t<img src="hello.jpg" alt="Me waving hello" />\n\n\t\t// good\n\t\t<img src="hello.jpg" alt="" />\n\n\t\t// good\n\t\t<img src="hello.jpg" role="presentation" />\n\t'),'- Do not use words like "image", "photo", or "picture" in ',Object(o.b)(s.a,{mdxType:"BlcCode"},"<img>")," ",Object(o.b)(s.a,{mdxType:"BlcCode"},"alt")," props. eslint: ",Object(o.b)(s.c,{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"jsx-a11y/img-redundant-alt")),"> Why? Screenreaders already announce ",Object(o.b)(s.a,{mdxType:"BlcCode"},"img")," elements as images, so there is no need to include this information in the alt text.",Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<img src="hello.jpg" alt="Picture of me waving hello" />\n\n\t\t// good\n\t\t<img src="hello.jpg" alt="Me waving hello" />\n\t'),"- Use only valid, non-abstract ",Object(o.b)(s.c,{href:"https://www.w3.org/TR/wai-aria/#usage_intro",target:"_blank",mdxType:"BlcLink"},"ARIA roles"),". eslint: ",Object(o.b)(s.c,{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"jsx-a11y/aria-role")),Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad - not an ARIA role\n\t\t<div role="datepicker" />\n\n\t\t// bad - abstract ARIA role\n\t\t<div role="range" />\n\n\t\t// good\n\t\t<div role="button" />\n\t'),"- Do not use ",Object(o.b)(s.a,{mdxType:"BlcCode"},"accessKey")," on elements. eslint: ",Object(o.b)(s.c,{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"jsx-a11y/no-access-key")),"> Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.",Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<div accessKey="h" />\n\n\t\t// good\n\t\t<div />\n\t'),"- Avoid using an array index as ",Object(o.b)(s.a,{mdxType:"BlcCode"},"key")," prop, prefer a stable ID. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/no-array-index-key")),"> Why? Not using a stable ID ",Object(o.b)(s.c,{href:"https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318",target:"_blank",mdxType:"BlcLink"},"is an anti-pattern")," because it can negatively impact performance and cause issues with component state. We don’t recommend using indexes for keys if the order of items may change.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\t{todos.map((todo, index) =>\n\t\t\t<Todo\n\t\t\t\t{...todo}\n\t\t\t\tkey={index}\n\t\t\t/>\n\t\t)}\n\n\t\t// good\n\t\t{todos.map(todo => (\n\t\t\t<Todo\n\t\t\t\t{...todo}\n\t\t\t\tkey={todo.id}\n\t\t\t/>\n\t\t))}\n\t"),"- Always define explicit defaultProps for all non-required props. > Why? propTypes are a form of documentation, and providing defaultProps means the reader of your code doesn’t have to assume as much. In addition, it can mean that your code can omit certain type checks.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\tfunction SFC({ foo, bar, children }) {\n\t\t\treturn <div>{foo}{bar}{children}</div>;\n\t\t}\n\t\tSFC.propTypes = {\n\t\t\tfoo: PropTypes.number.isRequired,\n\t\t\tbar: PropTypes.string,\n\t\t\tchildren: PropTypes.node,\n\t\t};\n\n\t\t// good\n\t\tfunction SFC({ foo, bar, children }) {\n\t\t\treturn <div>{foo}{bar}{children}</div>;\n\t\t}\n\t\tSFC.propTypes = {\n\t\t\tfoo: PropTypes.number.isRequired,\n\t\t\tbar: PropTypes.string,\n\t\t\tchildren: PropTypes.node,\n\t\t};\n\t\tSFC.defaultProps = {\n\t\t\tbar: '',\n\t\t\tchildren: null,\n\t\t};\n\t"),"- Use spread props sparingly. > Why? Otherwise you’re more likely to pass unnecessary props down to components. And for React v15.6.1 and older, you could ",Object(o.b)(s.c,{href:"https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html",target:"_blank",mdxType:"BlcLink"},"pass invalid HTML attributes to the DOM"),". Exceptions: - HOCs that proxy down props and hoist propTypes",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\tfunction HOC(WrappedComponent) {\n\t\t\treturn class Proxy extends React.Component {\n\t\t\t\tProxy.propTypes = {\n\t\t\t\t\ttext: PropTypes.string,\n\t\t\t\t\tisLoading: PropTypes.bool\n\t\t\t\t};\n\n\t\t\t\trender() {\n\t\t\t\t\treturn <WrappedComponent {...this.props} />\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"),"- Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha’s beforeEach construct.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\texport default function Foo {\n\t\t\tconst props = {\n\t\t\t\ttext: '',\n\t\t\t\tisPublished: false\n\t\t\t}\n\n\t\t\treturn (<div {...props} />);\n\t\t}\n\t"),"Notes for use: Filter out unnecessary props when possible. Also, use ",Object(o.b)(s.c,{href:"https://www.npmjs.com/package/prop-types-exact",target:"_blank",mdxType:"BlcLink"},"prop-types-exact")," to help prevent bugs.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\trender() {\n\t\t\tconst { irrelevantProp, ...relevantProps } = this.props;\n\t\t\treturn <WrappedComponent {...this.props} />\n\t\t}\n\n\t\t// good\n\t\trender() {\n\t\t\tconst { irrelevantProp, ...relevantProps } = this.props;\n\t\t\treturn <WrappedComponent {...relevantProps} />\n\t\t}\n\t")),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Refs"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Always use ref callbacks. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/no-string-refs")),Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<Foo\n\t\t\tref="myRef"\n\t\t/>\n\n\t\t// good\n\t\t<Foo\n\t\t\tref={(ref) => { this.myRef = ref; }}\n\t\t/>\n\t')),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Parentheses"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Wrap JSX tags in parentheses when they span more than one line. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-wrap-multilines")),Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\trender() {\n\t\t\treturn <MyComponent variant="long body" foo="bar">\n\t\t\t\t\t\t<MyChild />\n\t\t\t\t\t</MyComponent>;\n\t\t}\n\n\t\t// good\n\t\trender() {\n\t\t\treturn (\n\t\t\t\t<MyComponent variant="long body" foo="bar">\n\t\t\t\t\t<MyChild />\n\t\t\t\t</MyComponent>\n\t\t\t);\n\t\t}\n\n\t\t// good, when single line\n\t\trender() {\n\t\t\tconst body = <div>hello</div>;\n\t\t\treturn <MyComponent>{body}</MyComponent>;\n\t\t}\n\t')),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Tags"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Always self-close tags that have no children. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/self-closing-comp")),Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<Foo variant="stuff"></Foo>\n\n\t\t// good\n\t\t<Foo variant="stuff" />\n\t'),"- If your component has multi-line properties, close its tag on a new line. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-closing-bracket-location")),Object(o.b)(s.a,{mdxType:"BlcCode"},'\n\t\t// bad\n\t\t<Foo\n\t\t\tbar="bar"\n\t\t\tbaz="baz" />\n\n\t\t// good\n\t\t<Foo\n\t\t\tbar="bar"\n\t\t\tbaz="baz"\n\t\t/>\n\t')),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Methods"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Use arrow functions to close over local variables. It is handy when you need to pass additional data to an event handler. Although, make sure they ",Object(o.b)(s.c,{href:"https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/",target:"_blank",mdxType:"BlcLink"},"do not massively hurt performance"),", in particular when passed to custom components that might be PureComponents, because they will trigger a possibly needless rerender every time.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\tfunction ItemList(props) {\n\t\t\treturn (\n\t\t\t\t<ul>\n\t\t\t\t\t{props.items.map((item, index) => (\n\t\t\t\t\t\t<Item\n\t\t\t\t\t\t\tkey={item.key}\n\t\t\t\t\t\t\tonClick={(event) => { doSomethingWith(event, item.name, index); }}\n\t\t\t\t\t\t/>\n\t\t\t\t\t))}\n\t\t\t\t</ul>\n\t\t\t);\n\t\t}\n\t"),"- Bind event handlers for the render method in the constructor. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/jsx-no-bind")),"> Why? A bind call in the render path creates a brand new function on every single render. Do not use arrow functions in class fields, because it makes them ",Object(o.b)(s.c,{href:"https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1",target:"_blank",mdxType:"BlcLink"},"challenging to test and debug, and can negatively impact performance"),", and because conceptually, class fields are for data, not logic.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\tclass extends React.Component {\n\t\t\tonClickDiv() {\n\t\t\t\t// do stuff\n\t\t\t}\n\n\t\t\trender() {\n\t\t\t\treturn <div onClick={this.onClickDiv.bind(this)} />;\n\t\t\t}\n\t\t}\n\n\t\t// very bad\n\t\tclass extends React.Component {\n\t\t\tonClickDiv = () => {\n\t\t\t\t// do stuff\n\t\t\t}\n\n\t\t\trender() {\n\t\t\t\treturn <div onClick={this.onClickDiv} />\n\t\t\t}\n\t\t}\n\n\t\t// good\n\t\tclass extends React.Component {\n\t\t\tconstructor(props) {\n\t\t\t\tsuper(props);\n\n\t\t\t\tthis.onClickDiv = this.onClickDiv.bind(this);\n\t\t\t}\n\n\t\t\tonClickDiv() {\n\t\t\t\t// do stuff\n\t\t\t}\n\n\t\t\trender() {\n\t\t\t\treturn <div onClick={this.onClickDiv} />;\n\t\t\t}\n\t\t}\n\t"),"- Do not use underscore prefix for internal methods of a React component. > Why? Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of your intentions, adding underscore prefixes to your properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues ",Object(o.b)(s.c,{href:"https://github.com/airbnb/javascript/issues/1024",target:"_blank",mdxType:"BlcLink"},"#1024"),", and ",Object(o.b)(s.c,{href:"https://github.com/airbnb/javascript/issues/490",target:"_blank",mdxType:"BlcLink"},"#490")," for a more in-depth discussion.",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\tReact.createClass({\n\t\t\t_onClickSubmit() {\n\t\t\t\t// do stuff\n\t\t\t},\n\n\t\t\t// other stuff\n\t\t});\n\n\t\t// good\n\t\tclass extends React.Component {\n\t\t\tonClickSubmit() {\n\t\t\t\t// do stuff\n\t\t\t}\n\n\t\t// other stuff\n\t\t}\n\t"),"- Be sure to return a value in your ",Object(o.b)(s.a,{mdxType:"BlcCode"},"render")," methods. eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/require-render-return")),Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\t// bad\n\t\trender() {\n\t\t\t(<div />);\n\t\t}\n\n\t\t// good\n\t\trender() {\n\t\t\treturn (<div />);\n\t\t}\n\t")),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},"Ordering"),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Ordering for ",Object(o.b)(s.a,{mdxType:"BlcCode"},"class extends React.Component"),": 1. optional ",Object(o.b)(s.a,{mdxType:"BlcCode"},"static")," methods 1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"constructor"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"getChildContext"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentWillMount"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentDidMount"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentWillReceiveProps"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"shouldComponentUpdate"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentWillUpdate"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentDidUpdate"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentWillUnmount"),"1. ",Object(o.b)(s.h,{mdxType:"Italic"},"clickHandlers or eventHandlers")," like ",Object(o.b)(s.a,{mdxType:"BlcCode"},"onClickSubmit()")," or ",Object(o.b)(s.a,{mdxType:"BlcCode"},"onChangeDescription()"),"1. ",Object(o.b)(s.h,{mdxType:"Italic"},"getter methods for ",Object(o.b)(s.a,{mdxType:"BlcCode"},"render"))," like ",Object(o.b)(s.a,{mdxType:"BlcCode"},"getSelectReason()")," or ",Object(o.b)(s.a,{mdxType:"BlcCode"},"getFooterContent()"),"1. ",Object(o.b)(s.h,{mdxType:"Italic"},"optional render methods")," like ",Object(o.b)(s.a,{mdxType:"BlcCode"},"renderNavigation()")," or ",Object(o.b)(s.a,{mdxType:"BlcCode"},"renderProfilePicture()"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"render"),"- How to define ",Object(o.b)(s.a,{mdxType:"BlcCode"},"propTypes"),", ",Object(o.b)(s.a,{mdxType:"BlcCode"},"defaultProps"),", ",Object(o.b)(s.a,{mdxType:"BlcCode"},"contextTypes"),", etc...",Object(o.b)(s.a,{mdxType:"BlcCode"},"\n\t\timport React from 'react';\n\t\timport PropTypes from 'prop-types';\n\n\t\tconst propTypes = {\n\t\t\tid: PropTypes.number.isRequired,\n\t\t\turl: PropTypes.string.isRequired,\n\t\t\ttext: PropTypes.string,\n\t\t};\n\n\t\tconst defaultProps = {\n\t\t\ttext: 'Hello World',\n\t\t};\n\n\t\tclass Link extends React.Component {\n\t\t\tstatic methodsAreOk() {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\trender() {\n\t\t\t\treturn <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;\n\t\t\t}\n\t\t}\n\n\t\tLink.propTypes = propTypes;\n\t\tLink.defaultProps = defaultProps;\n\n\t\texport default Link;\n\t"),"- Ordering for ",Object(o.b)(s.a,{mdxType:"BlcCode"},"React.createClass"),": eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/sort-comp")),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"displayName"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"propTypes"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"contextTypes"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"childContextTypes"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"mixins"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"statics"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"defaultProps"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"getDefaultProps"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"getInitialState"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"getChildContext"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentWillMount"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentDidMount"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentWillReceiveProps"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"shouldComponentUpdate"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentWillUpdate"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentDidUpdate"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"componentWillUnmount"),"1. ",Object(o.b)(s.h,{mdxType:"Italic"},"clickHandlers or eventHandlers")," like ",Object(o.b)(s.a,{mdxType:"BlcCode"},"onClickSubmit()")," or ",Object(o.b)(s.a,{mdxType:"BlcCode"},"onChangeDescription()"),"1. ",Object(o.b)(s.h,{mdxType:"Italic"},"getter methods for ",Object(o.b)(s.a,{mdxType:"BlcCode"},"render"))," like ",Object(o.b)(s.a,{mdxType:"BlcCode"},"getSelectReason()")," or ",Object(o.b)(s.a,{mdxType:"BlcCode"},"getFooterContent()"),"1. ",Object(o.b)(s.h,{mdxType:"Italic"},"optional render methods")," like ",Object(o.b)(s.a,{mdxType:"BlcCode"},"renderNavigation()")," or ",Object(o.b)(s.a,{mdxType:"BlcCode"},"renderProfilePicture()"),"1. ",Object(o.b)(s.a,{mdxType:"BlcCode"},"render")),Object(o.b)(r.f,{margin:d.b.marginSmallest,mdxType:"BlcH6"},Object(o.b)(s.a,{mdxType:"BlcCode"},"isMounted")),Object(o.b)(s.d,{mdxType:"BlcParagraph"},"- Do not use ",Object(o.b)(s.a,{mdxType:"BlcCode"},"isMounted"),". eslint: ",Object(o.b)(s.c,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"react/no-is-mounted")),"> Why? ",Object(o.b)(s.c,{href:"https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html",target:"_blank",mdxType:"BlcLink"},Object(o.b)(s.a,{mdxType:"BlcCode"},"isMounted")," is an anti-pattern"),", is not available when using ES6 classes, and is on its way to being officially deprecated.")))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"pages/styleguide/code-guidelines.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---pages-styleguide-code-guidelines-mdx-07e7062a739c00c8d3de.js.map