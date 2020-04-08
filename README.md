# remark-slate

[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[**remark**][remark] plugin to compile Markdown as a [Slate](https://www.slatejs.org/) 0.50+ compatible object.

This package is meant to be used with [remark-parse](https://github.com/remarkjs/remark/tree/master/packages/remark-parse)

## Usage

Say we have the following file, `example.md`:

```markdown
# Heading one

## Heading two

### Heading three

#### Heading four

##### Heading five

###### Heading six

Normal paragraph

_italic text_

**bold tex**

~~strike through text~~

[hyperlink](https://jackhanford.com)

> A block quote.

- bullet list item 1
- bullet list item 2

1. ordered list item 1
1. ordered list item 2
```

And our script, `example.js`, looks as follows:

```js
import fs from 'fs';
import unified from 'unified';
import markdown from 'remark-parse';
import slate from 'remark-slate';

unified()
  .use(markdown)
  .use(slate)
  .process(fs.readFileSync('example.md'), (err, file) => {
    if (err) throw err;
    console.log({ file });
  });
```

Would result in the following:

```json
[
  {
    "type": "heading-one",
    "children": [
      {
        "text": "Heading one"
      }
    ]
  },
  {
    "type": "heading-two",
    "children": [
      {
        "text": "Heading two"
      }
    ]
  },
  {
    "type": "heading-three",
    "children": [
      {
        "text": "Heading three"
      }
    ]
  },
  {
    "type": "heading-four",
    "children": [
      {
        "text": "Heading four"
      }
    ]
  },
  {
    "type": "heading-five",
    "children": [
      {
        "text": "Heading five"
      }
    ]
  },
  {
    "type": "heading-six",
    "children": [
      {
        "text": "Heading six"
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Normal paragraph"
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "italic text",
        "italic": true
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "bold text",
        "italic": true
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "text": "strike through text",
        "strikeThrough": true
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "link": "https://jackhanford.com",
        "children": [
          {
            "text": "hyperkink"
          }
        ]
      }
    ]
  },
  {
    "type": "block-quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          {
            "text": "A block quote."
          }
        ]
      }
    ]
  },
  {
    "type": "bulleted-list",
    "children": [
      {
        "type": "list-item",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "text": "bullet list item 1"
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "text": "bullet list item 2"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "numbered-list",
    "children": [
      {
        "type": "list-item",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "text": "ordered list item 1"
              }
            ]
          }
        ]
      },
      {
        "type": "list-item",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "text": "ordered list item 2"
              }
            ]
          }
        ]
      }
    ]
  }
]
```

```js
{
  type: 'heading',
  depth: 1,
  children: [{ value: 'Big text' }]
}
```

…would yield:

```json
{
  "type": "heading-one",
  "children": [{ "text": "Big text" }]
}
```

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright © 2020-present [Jack Hanford](http://jackhanford.com), jackhanford@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<!-- Definitions -->

[downloads-badge]: https://img.shields.io/npm/dm/remark-slate.svg
[downloads]: https://www.npmjs.com/package/remark-slate
[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-slate.svg
[size]: https://bundlephobia.com/result?p=remark-slate
[remark]: https://github.com/remarkjs/remark
