import { transform } from '../src';
import complexMdast from './fixtures/complex';

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
  expect(complexMdast.children.map((v) => transform(v))).toMatchSnapshot();
});

it('inserts empty text block if no children are given', () => {
  expect(
    transform({
      type: 'heading',
      depth: 1,
    })
  ).toMatchSnapshot();
});
