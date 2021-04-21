import { serialize, defaultNodeTypes } from '../../src';

it('Serialize a bold paragraph from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          bold: true,
          text: 'bold paragraph',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize an italic paragraph from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          italic: true,
          text: 'italic paragraph',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a strikeThrough paragraph from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          strikeThrough: true,
          text: 'strikeThrough paragraph',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a code paragraph from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          code: true,
          text: 'inline code paragraph',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a bold and italic paragraph from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          bold: true,
          italic: true,
          text: 'bold/italic paragraph',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a bold, italic and strikeThrough paragraph from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          bold: true,
          italic: true,
          strikeThrough: true,
          text: 'bold/italic/strikethrough paragraph',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Whitespace is retained when applying bold formatting', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          bold: true,
          text: '  bold  ',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Whitespace is retained when applying italic formatting', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          italic: true,
          text: '  italic  ',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Whitespace is retained when applying strikethrough formatting', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          strikeThrough: true,
          text: '  strikeThrough  ',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Whitespace is retained when applying bold, italic and strikethrough formatting', () => {
  expect(
    serialize({
      type: defaultNodeTypes.paragraph,
      children: [
        {
          strikeThrough: true,
          bold: true,
          italic: true,
          text: '  bold, italic, strikeThrough  ',
        },
      ],
    })
  ).toMatchSnapshot();
});
