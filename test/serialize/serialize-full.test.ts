import { serialize, defaultNodeTypes } from '../../src';

it('Serializes large slate object into markdown document', () => {
  expect(slateTree.map((v) => serialize(v)).join('')).toMatchSnapshot();
});

const slateTree = [
  {
    type: defaultNodeTypes.heading[1],
    children: [
      {
        text: 'Heading one',
      },
    ],
  },
  {
    type: defaultNodeTypes.heading[2],
    children: [
      {
        text: 'Heading two',
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
        bold: true,
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: 'Bold',
        bold: true,
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: 'Italic',
        italic: true,
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: 'Strike through',
        strikethrough: true,
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
        strikethrough: true,
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
        strikethrough: true,
      },
      {
        link: 'https://google.com',
        type: defaultNodeTypes.link,
        children: [
          {
            text: 'https://google.com',
          },
        ],
      },
      {
        text: '',
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
      },
      {
        link: 'https://google.com',
        type: defaultNodeTypes.link,
        children: [
          {
            text: 'Google',
          },
        ],
      },
      {
        text: '',
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
        strikethrough: true,
      },
    ],
  },
  {
    type: defaultNodeTypes.block_quote,
    children: [
      {
        text: 'He said ',
      },
      {
        text: 'whattttt',
        italic: true,
      },
      {
        text: '?',
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
        strikethrough: true,
      },
    ],
  },
  {
    type: defaultNodeTypes.ol_list,
    children: [
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            type: defaultNodeTypes.paragraph,
            children: [
              {
                text: 'OL L1 I1',
              },
            ],
          },
        ],
      },
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            type: defaultNodeTypes.paragraph,
            children: [
              {
                text: 'OL L1 I2',
              },
            ],
          },
          {
            type: defaultNodeTypes.ol_list,
            children: [
              {
                type: defaultNodeTypes.listItem,
                children: [
                  {
                    type: defaultNodeTypes.paragraph,
                    children: [
                      {
                        text: 'OL L2 I1',
                      },
                    ],
                  },
                ],
              },
              {
                type: defaultNodeTypes.listItem,
                children: [
                  {
                    type: defaultNodeTypes.paragraph,
                    children: [
                      {
                        text: 'OL L2 I2',
                      },
                    ],
                  },
                  {
                    type: defaultNodeTypes.ol_list,
                    children: [
                      {
                        type: defaultNodeTypes.listItem,
                        children: [
                          {
                            type: defaultNodeTypes.paragraph,
                            children: [
                              {
                                text: 'OL L3 I1',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: defaultNodeTypes.listItem,
                        children: [
                          {
                            type: defaultNodeTypes.paragraph,
                            children: [
                              {
                                text: 'OL L3 I2',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: defaultNodeTypes.listItem,
                children: [
                  {
                    type: defaultNodeTypes.paragraph,
                    children: [
                      {
                        text: 'OL L2 I3',
                      },
                    ],
                  },
                ],
              },
              {
                type: defaultNodeTypes.listItem,
                children: [
                  {
                    type: defaultNodeTypes.paragraph,
                    children: [
                      {
                        text: 'OL L2 I4',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            type: defaultNodeTypes.paragraph,
            children: [
              {
                text: 'OL L1 I3',
              },
            ],
          },
        ],
      },
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            type: defaultNodeTypes.paragraph,
            children: [
              {
                text: 'OL L1 I4',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
      },
    ],
  },
  {
    type: defaultNodeTypes.ul_list,
    children: [
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            type: defaultNodeTypes.paragraph,
            children: [
              {
                text: 'UL L1 I1',
              },
            ],
          },
        ],
      },
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            type: defaultNodeTypes.paragraph,
            children: [
              {
                text: 'UL L1 I2',
              },
            ],
          },
          {
            type: defaultNodeTypes.ul_list,
            children: [
              {
                type: defaultNodeTypes.listItem,
                children: [
                  {
                    type: defaultNodeTypes.paragraph,
                    children: [
                      {
                        text: 'UL L2 I1',
                      },
                    ],
                  },
                ],
              },
              {
                type: defaultNodeTypes.listItem,
                children: [
                  {
                    type: defaultNodeTypes.paragraph,
                    children: [
                      {
                        text: 'UL L2 I2',
                      },
                    ],
                  },
                  {
                    type: defaultNodeTypes.ul_list,
                    children: [
                      {
                        type: defaultNodeTypes.listItem,
                        children: [
                          {
                            type: defaultNodeTypes.paragraph,
                            children: [
                              {
                                text: 'UL L3 I1',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: defaultNodeTypes.listItem,
                        children: [
                          {
                            type: defaultNodeTypes.paragraph,
                            children: [
                              {
                                text: 'UL L3 I2',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: defaultNodeTypes.listItem,
                children: [
                  {
                    type: defaultNodeTypes.paragraph,
                    children: [
                      {
                        text: 'UL L2 I3',
                      },
                    ],
                  },
                ],
              },
              {
                type: defaultNodeTypes.listItem,
                children: [
                  {
                    type: defaultNodeTypes.paragraph,
                    children: [
                      {
                        text: 'UL L2 I4',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            type: defaultNodeTypes.paragraph,
            children: [
              {
                text: 'UL L1 I3',
              },
            ],
          },
        ],
      },
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            type: defaultNodeTypes.paragraph,
            children: [
              {
                text: 'UL L1 I4',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
      },
    ],
  },
  {
    type: defaultNodeTypes.paragraph,
    children: [
      {
        text: '',
      },
    ],
  },
];
