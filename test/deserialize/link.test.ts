import { deserialize } from '../../src';

it('deserialize link', () => {
  expect(
    deserialize({
      type: 'link',
      url: 'https://jackhanford.com',
      children: [{ value: 'Personal website' }],
    })
  ).toMatchSnapshot();
});
