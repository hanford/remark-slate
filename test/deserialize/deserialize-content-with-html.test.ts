import { deserialize } from '../../src';

it('deserialize html break tag with content in single string', () => {
  expect(
    deserialize({
      type: 'html',
      value: '<br>**hi**',
    })
  ).toMatchSnapshot();
});

it('deserialize html break tag', () => {
  expect(
    deserialize({
      type: 'html',
      value: '<br>',
    })
  ).toMatchSnapshot();
});

it('deserialize unknown html', () => {
  expect(
    deserialize({
      type: 'html',
      value: '<section>',
    })
  ).toMatchSnapshot();
});
