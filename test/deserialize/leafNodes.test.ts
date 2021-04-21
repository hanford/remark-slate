import { deserialize } from '../../src';

it('Deserialize a complex leaf node with bold and emphasis', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'strong',
          children: [
            {
              type: 'emphasis',
              children: [
                {
                  value: 'bold and italic',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a complex leaf node with emphasis and bold', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'emphasis',
          children: [
            {
              type: 'strong',
              children: [
                {
                  value: 'italic and bold',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a complex leaf node with delete and bold', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'delete',
          children: [
            {
              type: 'strong',
              children: [
                {
                  value: 'strikethrough and bold',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a complex leaf node with delete and italic', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'delete',
          children: [
            {
              type: 'emphasis',
              children: [
                {
                  value: 'strikethrough and italic',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a leaf node with just italic', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'emphasis',
          children: [
            {
              value: 'Italic text',
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a leaf node with just bold', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'strong',
          children: [
            {
              value: 'bold text',
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a leaf node with just strikethrough', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'delete',
          children: [
            {
              value: 'strikethrough text',
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a leaf node with inline code directly inline', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'inline code',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Handles cases where leafs have metadata attached', () => {
  expect(
    deserialize({
      type: 'link',
      url: 'https://jackhanford.com',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'strong',
              children: [
                {
                  type: 'emphasis',
                  children: [
                    {
                      type: 'delete',
                      children: [
                        {
                          value: 'strikethrough text',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});
