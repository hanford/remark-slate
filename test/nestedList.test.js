const plugin = require('../');
const nestedMdast = require('./nested-mdast');

const transform = plugin.transform;

it('When flattenListItems is false, the list has paragraph elements', () => {
  expect(nestedMdast.children.map(transform)).toMatchSnapshot();
});

it('When flattenListItems is true, the list-items have leaf nodes', () => {
  expect(
    nestedMdast.children.map((c) => transform(c, { flattenListItems: true }))
  ).toMatchSnapshot();
});
