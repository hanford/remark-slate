const plugin = require('../');
const listOrderMdast = require('./listOrder-mdast');

const transform = plugin.transform;

it('It reorders lists when their children of list-items', () => {
  expect(listOrderMdast.children.map(transform)).toMatchSnapshot();
});


it('It works when flattenListItems is true', () => {
  expect(listOrderMdast.children.map(w => transform(w, { flattenListItems: true }))).toMatchSnapshot();
});