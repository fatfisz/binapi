'use strict';

module.exports = {
  type: 'success',
  result: {
    start: {
      line: 1,
      column: 1,
    },
    end: {
      line: 2,
      column: 1,
    },
    tokens: [
      {
        type: 'number',
        start: {
          line: 1,
          column: 1,
        },
        end: {
          line: 1,
          column: 3,
        },
        text: '0xf',
      },
      {
        type: 'ident',
        start: {
          line: 1,
          column: 4,
        },
        end: {
          line: 1,
          column: 8,
        },
        text: 'g0x0x',
      },
    ],
  },
};
