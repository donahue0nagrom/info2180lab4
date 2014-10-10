#Prototype to tie code

/* Prototype JavaScript framework, version 1.6.0.2

(c) 2005-2008 Sam Stephenson *
Prototype is freely distributable under the terms of an MIT-style license.
For details, see the Prototype web site: http://www.prototypejs.org/ * --------------------------------------------------------------------------/
var Prototype = {
Version: '1.6.0.2',

Browser: {
IE: !!(window.attachEvent && !window.opera),
Opera: !!window.opera,
WebKit: navigator.userAgent.indexOf('AppleWebKit/') > -1,
Gecko: navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1,
MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/)
},

BrowserFeatures: {
XPath: !!document.evaluate,
ElementExtensions: !!window.HTMLElement,
SpecificElementExtensions:
document.createElement('div').proto &&
document.createElement('div').proto !==
document.createElement('form').proto
},

ScriptFragment: '
