import { serialize, defaultNodeTypes } from '../../src';
import unified from 'unified';
import markdown from 'remark-parse';
import slate from '../../src';

test('slate to markdown, then markdown to slate', async () => {
  const serializedMarkdown = '\n- foo\n- bar\n- baz\n\n';

  const serialized = serialize({
    type: defaultNodeTypes.ul_list,
    children: [
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            text: 'foo',
          },
        ],
      },
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            text: 'bar',
          },
        ],
      },
      {
        type: defaultNodeTypes.listItem,
        children: [
          {
            text: 'baz',
          },
        ],
      },
    ],
  });

  expect(serialized).toBe(serializedMarkdown);

  const { result } = await unified()
    .use(markdown)
    .use(slate)
    .process(serializedMarkdown);

  expect(result).toStrictEqual([
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
    },
  ]);
});
