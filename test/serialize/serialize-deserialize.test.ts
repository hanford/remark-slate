import unified from 'unified';
import parse from 'remark-parse';
import plugin, { serialize } from '../../src'

const mdown = `a
<br>

[https://a.com](https://a.com)
<br>

e
`

test('Deserialize', done => {
  unified()
    .use(parse)
    .use(plugin)
    .process(mdown, (_, file) => {
      //@ts-ignore
      const res = file.result
      expect(res).toMatchSnapshot()
      //@ts-ignore
      expect(res.map((v) => serialize(v)).join('')).toEqual(mdown)
      done()
    });
})

