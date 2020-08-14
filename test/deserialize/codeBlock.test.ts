import { deserialize } from '../../src';

it('deserialize code block', () => {
  expect(
    deserialize({
      type: 'code',
      lang: 'js',
      value: `const str = "remark-slate"
      for (let char of str) {
        console.log(char)
      }`,
    })
  ).toMatchSnapshot();
});
