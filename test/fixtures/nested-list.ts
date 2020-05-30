export default {
  type: 'root',
  children: [
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'Bullet 1',
                  position: {
                    start: { line: 1, column: 3, offset: 2 },
                    end: { line: 1, column: 11, offset: 10 },
                    indent: [],
                  },
                },
              ],
              position: {
                start: { line: 1, column: 3, offset: 2 },
                end: { line: 1, column: 11, offset: 10 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 11, offset: 10 },
            indent: [],
          },
        },
        {
          type: 'listItem',
          spread: true,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'Bullet 2',
                  position: {
                    start: { line: 2, column: 3, offset: 13 },
                    end: { line: 2, column: 11, offset: 21 },
                    indent: [],
                  },
                },
              ],
              position: {
                start: { line: 2, column: 3, offset: 13 },
                end: { line: 2, column: 11, offset: 21 },
                indent: [],
              },
            },
            {
              type: 'list',
              ordered: false,
              start: null,
              spread: false,
              children: [
                {
                  type: 'listItem',
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          value: 'Nested 1 Bullet 1',
                          position: {
                            start: { line: 4, column: 5, offset: 27 },
                            end: { line: 4, column: 22, offset: 44 },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: { line: 4, column: 5, offset: 27 },
                        end: { line: 4, column: 22, offset: 44 },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: { line: 4, column: 3, offset: 25 },
                    end: { line: 4, column: 22, offset: 44 },
                    indent: [],
                  },
                },
                {
                  type: 'listItem',
                  spread: true,
                  checked: null,
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          value: 'Nested 1 Bullet 2',
                          position: {
                            start: { line: 5, column: 5, offset: 49 },
                            end: { line: 5, column: 22, offset: 66 },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: { line: 5, column: 5, offset: 49 },
                        end: { line: 5, column: 22, offset: 66 },
                        indent: [],
                      },
                    },
                    {
                      type: 'list',
                      ordered: false,
                      start: null,
                      spread: false,
                      children: [
                        {
                          type: 'listItem',
                          spread: false,
                          checked: null,
                          children: [
                            {
                              type: 'paragraph',
                              children: [
                                {
                                  type: 'text',
                                  value: 'Nested 2 Bullet 1',
                                  position: {
                                    start: {
                                      line: 7,
                                      column: 7,
                                      offset: 74,
                                    },
                                    end: {
                                      line: 7,
                                      column: 24,
                                      offset: 91,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 7,
                                  column: 7,
                                  offset: 74,
                                },
                                end: {
                                  line: 7,
                                  column: 24,
                                  offset: 91,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: { line: 7, column: 5, offset: 72 },
                            end: { line: 7, column: 24, offset: 91 },
                            indent: [],
                          },
                        },
                        {
                          type: 'listItem',
                          spread: false,
                          checked: null,
                          children: [
                            {
                              type: 'paragraph',
                              children: [
                                {
                                  type: 'text',
                                  value: 'Nested 2 Bullet 2',
                                  position: {
                                    start: {
                                      line: 8,
                                      column: 7,
                                      offset: 98,
                                    },
                                    end: {
                                      line: 8,
                                      column: 24,
                                      offset: 115,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 8,
                                  column: 7,
                                  offset: 98,
                                },
                                end: {
                                  line: 8,
                                  column: 24,
                                  offset: 115,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: { line: 8, column: 5, offset: 96 },
                            end: { line: 8, column: 24, offset: 115 },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: { line: 7, column: 5, offset: 72 },
                        end: { line: 8, column: 24, offset: 115 },
                        indent: [5],
                      },
                    },
                  ],
                  position: {
                    start: { line: 5, column: 3, offset: 47 },
                    end: { line: 8, column: 24, offset: 115 },
                    indent: [1, 3, 3],
                  },
                },
              ],
              position: {
                start: { line: 4, column: 3, offset: 25 },
                end: { line: 8, column: 24, offset: 115 },
                indent: [3, 1, 3, 3],
              },
            },
          ],
          position: {
            start: { line: 2, column: 1, offset: 11 },
            end: { line: 8, column: 24, offset: 115 },
            indent: [1, 1, 1, 1, 1, 1],
          },
        },
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 24, offset: 115 },
        indent: [1, 1, 1, 1, 1, 1, 1],
      },
    },
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 19, column: 1, offset: 252 },
  },
};
