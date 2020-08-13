import { serialize, defaultNodeTypes } from '../../src';

it('Serialize a code block from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.code_block,
      language: 'js',
      children: [
        {
          text: `const str = \\"remark-slate\\"
          for (let char of str) {
            console.log(char)
          }`,
        },
      ],
    })
  ).toMatchSnapshot();
});
