import { serialize, defaultNodeTypes } from '../../src';

it('Serialize a image from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.image,
      link: 'https://avatars.githubusercontent.com/u/2148168',
      caption: "'Jack's profile picture'",
      children: [],
    })
  ).toMatchSnapshot();
});
