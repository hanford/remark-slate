import { serialize, defaultNodeTypes } from '../../src';

it('Serialize a heading one from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.thematic_break,
      thematicBreak: true,
    })
  ).toMatchSnapshot();
});
