import { transform } from '../src';

it('Transform a complex leaf node with bold and emphasis', () => {
  expect(
    transform({
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

it('Transform a complex leaf node with emphasis and bold', () => {
  expect(
    transform({
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

it('Transform a complex leaf node with delete and bold', () => {
  expect(
    transform({
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

it('Transform a complex leaf node with delete and italic', () => {
  expect(
    transform({
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

it('Transform a leaf node with just italic', () => {
  expect(
    transform({
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

it('Transform a leaf node with just bold', () => {
  expect(
    transform({
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

it('Transform a leaf node with just strikethrough', () => {
  expect(
    transform({
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

it('Handles cases where leafs have metadata attached', () => {
  expect(
    transform({
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
