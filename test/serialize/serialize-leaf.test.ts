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
