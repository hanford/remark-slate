const plugin = require('../');
const complexMdast = require('./complex-mdast');

const transform = plugin.transform;

it('transforms heading depth one to slate state object with {type: "heading-one", children: [{text: "hey"}]}', () => {
  expect(
    transform({ type: 'heading', depth: 1, children: [{ value: 'hey' }] })
  ).toMatchSnapshot();
});

it('transforms heading depth two to slate state object with {type: "heading-two", children: [{text: "heading two"}]}', () => {
  expect(
    transform({
      type: 'heading',
      depth: 2,
      children: [{ value: 'heading two' }],
    })
  ).toMatchSnapshot();
});

it('transforms heading depth three to slate state object with {type: "heading-three", children: [{text: "heading three"}]}', () => {
  expect(
    transform({
      type: 'heading',
      depth: 3,
      children: [{ value: 'heading three' }],
    })
  ).toMatchSnapshot();
});

it('transforms complex mdast tree derived from ./example.md', () => {
  expect(complexMdast.children.map(transform)).toMatchSnapshot();
});

it('transforms link', () => {
  expect(
    transform({
      type: 'link',
      url: 'https://jackhanford.com',
      children: [{ value: 'Personal website' }],
    })
  ).toMatchSnapshot();
});

it('inserts empty text block if no children are given', () => {
  expect(
    transform({
      type: 'heading',
      depth: 1,
    })
  ).toMatchSnapshot();
});

it('transforms heading depth one to slate state object with custom node types & {type: "h1", children: [{text: "hey"}]}', () => {
  expect(
    transform(
      { type: 'heading', depth: 1, children: [{ value: 'hey' }] },
      { nodeTypes: { heading: { 1: 'h1' } } }
    )
  ).toMatchSnapshot();
});

it('Transform heading depth two without changing the default nodeTypes while passing other overrides', () => {
  expect(
    transform(
      { type: 'heading', depth: 2, children: [{ value: 'yo' }] },
      { nodeTypes: { heading: { 1: 'h1' } } }
    )
  ).toMatchSnapshot();
});
