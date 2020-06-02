import { serialize, defaultNodeTypes } from '../../src';

it('Serialize a heading one from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.heading[1],
      children: [
        {
          text: 'Heading one',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a heading two from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.heading[2],
      children: [
        {
          text: 'Heading two',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a heading three from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.heading[3],
      children: [
        {
          text: 'Heading three',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a heading four from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.heading[4],
      children: [
        {
          text: 'Heading four',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a heading five from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.heading[5],
      children: [
        {
          text: 'Heading five',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Serialize a heading six from slate state to markdown', () => {
  expect(
    serialize({
      type: defaultNodeTypes.heading[6],
      children: [
        {
          text: 'Heading six',
        },
      ],
    })
  ).toMatchSnapshot();
});
