# @rudimusmaximus/tiny

[![npm (scoped)](https://img.shields.io/npm/v/@rudimusmaximus/tiny.svg)](https://www.npmjs.com/package/@rudimusmaximus/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rudimusmaximus/tiny.svg)](https://www.npmjs.com/package/@rudimusmaximus/tiny)

Removes all spaces from a string.

## Install

```
$ npm install @rudimusmaximus/tiny
```

## Usage

```js
const tiny = require("@rudimusmaximus/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```