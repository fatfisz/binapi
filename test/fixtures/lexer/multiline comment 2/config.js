'use strict';

module.exports = {
  type: 'success',
  result: {
    start: {
      line: 1,
      column: 1,
    },
    end: {
      line: 3,
      column: 1,
    },
    tokens: [
      {
        type: 'comment',
        start: {
          line: 1,
          column: 1,
        },
        end: {
          line: 1,
          column: 11,
        },
        text: 'Comment',
      },
      {
        type: 'comment',
        start: {
          line: 2,
          column: 3,
        },
        end: {
          line: 2,
          column: 15,
        },
        text: 'Comment 2',
      },
    ],
  },
};
