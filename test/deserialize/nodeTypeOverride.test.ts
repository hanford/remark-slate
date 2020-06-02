import { deserialize } from '../../src';

it('Deserializes heading depth one to slate state object with custom node types & {type: "h1", children: [{text: "hey"}]}', () => {
  expect(
    deserialize(
      { type: 'heading', depth: 1, children: [{ value: 'hey' }] },
      { nodeTypes: { heading: { 1: 'h1' } } }
    )
  ).toMatchSnapshot();
});

it('Deserialize heading depth two without changing the default nodeTypes while passing other overrides', () => {
  expect(
    deserialize(
      { type: 'heading', depth: 2, children: [{ value: 'yo' }] },
      { nodeTypes: { heading: { 1: 'h1' } } }
    )
  ).toMatchSnapshot();
});

it('Deserialize a paragraph and assign the new nodeType', () => {
  expect(
    deserialize(
      { type: 'paragraph', children: [{ value: 'random text' }] },
      { nodeTypes: { paragraph: 'p' } }
    )
  ).toMatchSnapshot();
});
