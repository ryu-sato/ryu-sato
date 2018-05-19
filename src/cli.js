#!/usr/bin/env node
'use strict';
const importJsx = require('import-jsx');
const getGravatar = require('get-gravatar');
const terminalImage = require('terminal-image');
const { h, render } = require('ink');

const ui = importJsx('./ui');

getGravatar('ryu@weseek.co.jp').then(image => {
  (async ()=> {
    console.log(await terminalImage.buffer(image));
    render(h(ui));
  })();
});
