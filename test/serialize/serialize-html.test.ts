import { serialize, defaultNodeTypes } from '../../src';

it('Serializing content with HTML results in escaped HTML', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          text: '<h1>I have html</h1>',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serializing content with invalid markup results in escaped markup', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          text: '<Box>I have html</Box>',
        },
      ],
    })
  ).toMatchSnapshot();
});
