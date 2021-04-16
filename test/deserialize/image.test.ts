import { deserialize } from '../../src';

it('deserialize image', () => {
  expect(
    deserialize({
      type: 'image',
      url: 'https://avatars.githubusercontent.com/u/2148168',
      alt: "'Jack's profile picture'",
      children: [{ text: '' }],
    })
  ).toMatchSnapshot();
});
