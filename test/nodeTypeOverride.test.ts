import { transform } from '../src';

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

it('Transform a paragraph and assign the new nodeType', () => {
  expect(
    transform(
      { type: 'paragraph', children: [{ value: 'random text' }] },
      { nodeTypes: { paragraph: 'p' } }
    )
  ).toMatchSnapshot();
});
