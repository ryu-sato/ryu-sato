'use strict';
const { h, Text } = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, { wait: false });

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  { label: '// Own works' },
  {
    label: 'GitHub',
    url: 'https://github.com/ryu-sato',
  },
  {
    label: 'Qiita',
    url: 'https://qiita.com/tatsurou313',
  },
  { label: '// Jobs' },
  {
    label: 'WESEEK',
    url: 'https://weseek.co.jp/',
  },
  {
    label: 'Growi',
    url: 'https://growi.org/',
  },
  {
    label: 'SEROKU',
    url: 'https://seroku.jp/',
  },
  { label: '// ---' },
  {
    label: 'Quit',
    action() {
      process.exit(); // eslint-disable-line unicorn/no-process-exit
    },
  }
];

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>I'm interested in routine works automation in buisiness.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
