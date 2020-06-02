import { deserialize } from '../../src';
import nestedMdast from '../fixtures/nested-list';

it('When the list has paragraph elements', () => {
  expect(nestedMdast.children.map((k) => deserialize(k))).toMatchSnapshot();
});
