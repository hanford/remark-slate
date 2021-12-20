import unified from 'unified';
import markdown from 'remark-parse';
import slate from '../src';

it('Use unified to turn markdown into slate state', () => {
  unified()
    .use(markdown)
    .use(slate)
    .process('[my link](https://github.com)', (err, file) => {
      if (err) throw err;
      expect(file.result).toMatchSnapshot();
    });
});
