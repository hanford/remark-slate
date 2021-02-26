export default {
  type: 'root',
  children: [
    {
      type: 'thematicBreak',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 4, offset: 3 },
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'foo',
          position: {
            start: { line: 2, column: 1, offset: 4 },
            end: { line: 2, column: 4, offset: 7 },
          },
        },
      ],
      position: {
        start: { line: 2, column: 1, offset: 4 },
        end: { line: 2, column: 4, offset: 7 },
      },
    },
  ],
};
