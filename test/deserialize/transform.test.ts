import { deserialize } from '../../src';
import complexMdast from '../fixtures/complex';

it('Deserialize heading depth one to slate state object with {type: "heading-one", children: [{text: "hey"}]}', () => {
  expect(
    deserialize({ type: 'heading', depth: 1, children: [{ value: 'hey' }] })
  ).toMatchSnapshot();
});

it('Deserialize heading depth two to slate state object with {type: "heading-two", children: [{text: "heading two"}]}', () => {
  expect(
    deserialize({
      type: 'heading',
      depth: 2,
      children: [{ value: 'heading two' }],
    })
  ).toMatchSnapshot();
});

it('Deserialize heading depth three to slate state object with {type: "heading-three", children: [{text: "heading three"}]}', () => {
  expect(
    deserialize({
      type: 'heading',
      depth: 3,
      children: [{ value: 'heading three' }],
    })
  ).toMatchSnapshot();
});

it('Deserialize complex mdast tree derived from ./example.md', () => {
  // @ts-ignore
  expect(complexMdast.children.map((v) => deserialize(v))).toMatchSnapshot();
});

it('inserts empty text block if no children are given', () => {
  expect(
    deserialize({
      type: 'heading',
      depth: 1,
    })
  ).toMatchSnapshot();
});
