import { transform } from '../../src';

it('transforms link', () => {
  expect(
    transform({
      type: 'link',
      url: 'https://jackhanford.com',
      children: [{ value: 'Personal website' }],
    })
  ).toMatchSnapshot();
});
