import { deserialize, MdastNode } from '../../src';
import thematicBreakast from '../fixtures/thematic-break';

it('When the list has thematic breaks', () => {
  expect(
    thematicBreakast.children.map((k) => deserialize(k as MdastNode))
  ).toMatchSnapshot();
});
