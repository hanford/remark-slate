import { serialize, defaultNodeTypes } from '../../src';

it('Serialize a thematic break from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.thematic_break,
      children: [{ text: '' }],
    })
  ).toMatchSnapshot();
});
