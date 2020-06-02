import { serialize, defaultNodeTypes } from '../../src';

it('Serialize a simple ul list from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.ul_list,
      children: [
        {
          type: defaultNodeTypes.listItem,
          children: [
            {
              type: defaultNodeTypes.paragraph,
              children: [
                {
                  text: 'foo',
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
                  text: 'bar',
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
                  text: 'baz',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a simple ol list from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.ol_list,
      children: [
        {
          type: defaultNodeTypes.listItem,
          children: [
            {
              type: defaultNodeTypes.paragraph,
              children: [
                {
                  text: 'foo',
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
                  text: 'bar',
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
                  text: 'baz',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a ul list with one level of nesting from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.ol_list,
      children: [
        {
          type: defaultNodeTypes.listItem,
          children: [
            {
              type: defaultNodeTypes.paragraph,
              children: [
                {
                  text: 'foo',
                },
              ],
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
                      text: 'bar',
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
                  text: 'baz',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a ol list with one level of nesting from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.ul_list,
      children: [
        {
          type: defaultNodeTypes.listItem,
          children: [
            {
              type: defaultNodeTypes.paragraph,
              children: [
                {
                  text: 'foo',
                },
              ],
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
                      text: 'bar',
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
                  text: 'baz',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a ul list with two levels of nesting from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.ul_list,
      children: [
        {
          type: defaultNodeTypes.listItem,
          children: [
            {
              type: defaultNodeTypes.paragraph,
              children: [
                {
                  text: 'foo',
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
                          text: 'bar',
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
                                  text: 'boo',
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
                          text: 'baz',
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
                  text: 'bell',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a ol list with two levels of nesting from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.ol_list,
      children: [
        {
          type: defaultNodeTypes.listItem,
          children: [
            {
              type: defaultNodeTypes.paragraph,
              children: [
                {
                  text: 'foo',
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
                          text: 'bar',
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
                                  text: 'boo',
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
                          text: 'baz',
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
                  text: 'bell',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a ul/ol list combo with two levels of nesting from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.ol_list,
      children: [
        {
          type: defaultNodeTypes.listItem,
          children: [
            {
              type: defaultNodeTypes.paragraph,
              children: [
                {
                  text: 'foo',
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
                          text: 'bar',
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
                                  text: 'boo',
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
                          text: 'baz',
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
                  text: 'bell',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});
