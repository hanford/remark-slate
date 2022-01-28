import unified from 'unified';
import parse from 'remark-parse';
import plugin, { serialize } from '../../src';
import { LeafType, BlockType } from '../../src/ast-types';

const mdown = `a
<foo>

[https://a.com](https://a.com)
<foo>

e
`;

test('Deserialize and serialize mix of break tags and new lines', (done) => {
  const lineBreakSymbol = '<foo>';

  unified()
    .use(parse)
    .use(plugin, { lineBreakSymbol })
    .process(mdown, (_, file) => {
      const res = file.result as (LeafType | BlockType)[];
      expect(res).toMatchSnapshot();

      const fin = res.map((v) => serialize(v, { lineBreakSymbol })).join('');

      expect(fin).toEqual(mdown);
      done();
    });
});

const headingWithNewLine = `# heading one
<oxo>

Foo
`;

test('Deserialize heading with new line', (done) => {
  unified()
    .use(parse)
    .use(plugin, { lineBreakSymbol: '<oxo>' })
    .process(headingWithNewLine, (_, file) => {
      const res = file.result as (LeafType | BlockType)[];
      expect(res).toMatchSnapshot();

      const fin = res
        .map((v) => serialize(v, { lineBreakSymbol: '<oxo>' }))
        .join('');

      expect(fin).toEqual(headingWithNewLine);
      done();
    });
});
