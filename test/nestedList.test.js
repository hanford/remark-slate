const plugin = require('../');
const nestedMdast = require('./nested-mdast');

const transform = plugin.transform;

it('When the list has paragraph elements', () => {
  expect(nestedMdast.children.map(transform)).toMatchSnapshot();
});
