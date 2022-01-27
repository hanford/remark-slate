import unified from 'unified';
import parse from 'remark-parse';
import plugin, { serialize } from '../../src';
import { LeafType, BlockType } from '../../src/ast-types';

const mdown = `a
<br>

[https://a.com](https://a.com)
<br>

e
`;

test('Deserialize and serialize mix of break tags and new lines', (done) => {
  unified()
    .use(parse)
    .use(plugin)
    .process(mdown, (_, file) => {
      const res = file.result as (LeafType | BlockType)[];
      expect(res).toMatchSnapshot();

      const fin = res.map((v) => serialize(v)).join('');

      expect(fin).toEqual(mdown);
      done();
    });
});

const headingWithNewLine = `# heading one
`;

test('Deserialize heading with new line', (done) => {
  unified()
    .use(parse)
    .use(plugin)
    .process(headingWithNewLine, (_, file) => {
      const res = file.result as (LeafType | BlockType)[];
      expect(res).toMatchSnapshot();

      const fin = res.map((v) => serialize(v)).join('');

      expect(fin).toEqual(headingWithNewLine);
      done();
    });
});
