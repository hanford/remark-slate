export interface NodeTypes {
  paragraph?: string;
  block_quote?: string;
  link?: string;
  ul_list?: string;
  ol_list?: string;
  listItem?: string;
  heading?: {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
  };
}

interface OptionType {
  nodeTypes: NodeTypes;
}

interface MdastNode {
  type?:
    | 'list'
    | 'listItem'
    | 'paragraph'
    | 'blockquote'
    | 'html'
    | 'emphasis'
    | 'strong'
    | 'delete'
    | 'text'
    | 'link'
    | 'heading';
  ordered?: boolean;
  value?: string;
  text?: string;
  children?: Array<MdastNode>;
  depth?: 1 | 2 | 3 | 4 | 5 | 6;
  url?: string;
  // mdast metadata
  position?: any;
  spread?: any;
  checked?: any;
  indent?: any;
}

export const defaultNodeTypes = {
  paragraph: 'paragraph',
  block_quote: 'block_quote',
  link: 'link',
  ul_list: 'ul_list',
  ol_list: 'ol_list',
  listItem: 'list_item',
  heading: {
    1: 'heading_one',
    2: 'heading_two',
    3: 'heading_three',
    4: 'heading_four',
    5: 'heading_five',
    6: 'heading_three',
  },
};

export default function plugin(opts?: OptionType) {
  const compiler = (node: { children: Array<MdastNode> }) => {
    return node.children.map((c) => transform(c, opts));
  };

  // @ts-ignore
  this.Compiler = compiler;
}

export function transform(
  node: MdastNode,
  opts: OptionType = { nodeTypes: {} }
) {
  const types = {
    ...defaultNodeTypes,
    ...opts.nodeTypes,
    heading: {
      ...defaultNodeTypes.heading,
      ...opts?.nodeTypes?.heading,
    },
  };

  let children = [{ text: '' }];

  if (
    node.children &&
    Array.isArray(node.children) &&
    node.children.length > 0
  ) {
    // @ts-ignore
    children = node.children.map((c: MdastNode) =>
      transform(
        {
          ...c,
          ordered: node.ordered || false,
        },
        opts
      )
    );
  }

  switch (node.type) {
    case 'heading':
      return { type: types.heading[node.depth || 1], children };
    case 'list':
      return { type: node.ordered ? types.ol_list : types.ul_list, children };
    case 'listItem':
      return { type: types.listItem, children };
    case 'paragraph':
      return { type: types.paragraph, children };
    case 'link':
      return { type: types.link, link: node.url, children };
    case 'blockquote':
      return { type: types.block_quote, children };

    // @ts-ignore
    case 'html':
      // TODO: Handle other HTML?
      if (node.value === '<br>') {
        return {
          type: types.paragraph,
          children: [{ text: '' }],
        };
      }

    case 'emphasis':
      return {
        italic: true,
        ...forceLeafNode(children),
        ...persistLeafFormats(children),
      };
    case 'strong':
      return {
        bold: true,
        ...forceLeafNode(children),
        ...persistLeafFormats(children),
      };
    case 'delete':
      return {
        strikeThrough: true,
        ...forceLeafNode(children),
        ...persistLeafFormats(children),
      };

    case 'text':
    default:
      return { text: node.value || '' };
  }
}

const forceLeafNode = (children: Array<{ text?: string }>) => ({
  text: children.map((k) => k?.text).join(''),
});

// This function is will take any unknown keys, and bring them up a level
// allowing leaf nodes to have many different formats at once
// for example, bold and italic on the same node
function persistLeafFormats(children: Array<MdastNode>) {
  return children.reduce((acc, node) => {
    Object.keys(node).forEach(function (key) {
      if (key === 'children' || key === 'type' || key === 'text') return;

      // @ts-ignore
      acc[key] = node[key];
    });

    return acc;
  }, {});
}
