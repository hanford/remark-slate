import { serialize, defaultNodeTypes } from '../../src';

it('Serialize a blockquote from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.block_quote,
      children: [
        {
          text: 'Faded af is faded af backwards',
        },
      ],
    })
  ).toMatchSnapshot();
});
