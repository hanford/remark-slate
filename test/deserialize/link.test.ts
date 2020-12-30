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

it('deserialize link with linkDestinationKey', () => {
  expect(
    deserialize(
      {
        type: 'link',
        url: 'https://eaze.com',
        children: [{ value: 'Shopping' }],
      },
      { linkDestinationKey: 'custom-value' }
    )
  ).toMatchSnapshot();
});
