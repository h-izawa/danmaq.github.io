webpackJsonp([0x9edfc3bd620b],{212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(5),i=r(u),f=n(6),c=r(f),s=n(7),d=n(26),p=r(d),m=function(e){function t(){var n,r,o;a(this,t);for(var u=arguments.length,f=Array(u),c=0;c<u;c++)f[c]=arguments[c];return n=r=l(this,e.call.apply(e,[this].concat(f))),r.shouldComponentUpdate=function(){return!1},r.render=function(){var e=r.props,t=e.label,n=e.slug,a=e.totalCount;return i.default.createElement(s.Column,{className:"is-6-tablet is-12-mobile"},i.default.createElement(s.Card,null,i.default.createElement(s.CardHeader,null,i.default.createElement(s.Title,{className:"card-header-title",tag:"h2"},i.default.createElement(s.Tag,{isColor:"dark"},a)," ",i.default.createElement(p.default,{to:n},t||n)))))},o=n,l(r,o)}return o(t,e),t}(i.default.Component);m.defaultProps={label:""},m.propTypes={label:c.default.string,slug:c.default.string.isRequired,totalCount:c.default.number.isRequired},t.default=m,e.exports=t.default},215:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(5),c=a(f),s=n(6),d=a(s),p=n(67),m=a(p),h=n(7),y=n(13),b=n(69),g=a(b),E=n(212),_=a(E),v=n(36),w=r(v);n(34);var C=function(e){function t(){var n,r,a;l(this,t);for(var u=arguments.length,f=Array(u),s=0;s<u;s++)f[s]=arguments[s];return n=r=o(this,e.call.apply(e,[this].concat(f))),r.shouldComponentUpdate=function(){return!1},r.renderItem=function(e,t){var n=e.fieldValue,a=e.totalCount;return c.default.createElement(_.default,i({key:t,totalCount:a},{label:r.props.t(n),slug:n}))},r.render=function(){var e=r.props,t=e.data.allMarkdownRemark.group,n=e.pathContext,a=n.langKey,l=n.slug,o=e.t;return c.default.createElement("div",null,c.default.createElement(m.default,null,c.default.createElement("title",null,o("tags"))),c.default.createElement(g.default,i({langKey:a},{path:l})),c.default.createElement(h.Hero,{isSize:"medium"},c.default.createElement(h.HeroBody,null,c.default.createElement(h.Container,null,c.default.createElement(h.Title,{isSize:2,tag:"h1"},o("tags"))))),c.default.createElement("main",null,c.default.createElement("section",{className:"container"},c.default.createElement("p",null,o("length"),t.length),c.default.createElement(h.Columns,{isCentered:!0,isMultiline:!0},t.map(r.renderItem)))))},a=n,o(r,a)}return u(t,e),t}(c.default.Component);C.propTypes={data:d.default.shape({allMarkdownRemark:w.tagsAllMarkdownRemark().isRequired}).isRequired,pathContext:w.pathContext().isRequired,t:d.default.func.isRequired},t.default=(0,y.translate)("blog")(C),e.exports=t.default},543:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n(5),l=r(a),o=n(215),u=r(o);t.query="** extracted graphql fragment **";t.default=function(e){return l.default.createElement(u.default,e)}}});
//# sourceMappingURL=component---src-pages-tag-index-en-jsx-b6ab3f4168ad3ce1daac.js.map