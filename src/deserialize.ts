export interface NodeTypes {
  paragraph?: string;
  block_quote?: string;
  code_block?: string;
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
  emphasis_mark?: string;
  strong_mark?: string;
  delete_mark?: string;
}

export interface OptionType {
  nodeTypes?: NodeTypes;
  linkDestinationKey?: string;
}

export interface MdastNode {
  type?: string;
  ordered?: boolean;
  value?: string;
  text?: string;
  children?: Array<MdastNode>;
  depth?: 1 | 2 | 3 | 4 | 5 | 6;
  url?: string;
  lang?: string;
  // mdast metadata
  position?: any;
  spread?: any;
  checked?: any;
  indent?: any;
}

export const defaultNodeTypes = {
  paragraph: 'paragraph',
  block_quote: 'block_quote',
  code_block: 'code_block',
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
    6: 'heading_six',
  },
  emphasis_mark: 'italic',
  strong_mark: 'bold',
  delete_mark: 'strikeThrough',
};

export default function deserialize(
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

  const linkDestinationKey = opts.linkDestinationKey ?? 'link';

  let children = [{ text: '' }];

  if (
    node.children &&
    Array.isArray(node.children) &&
    node.children.length > 0
  ) {
    // @ts-ignore
    children = node.children.map((c: MdastNode) =>
      deserialize(
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
      return { type: types.link, [linkDestinationKey]: node.url, children };
    case 'blockquote':
      return { type: types.block_quote, children };
    case 'code':
      return {
        type: types.code_block,
        language: node.lang,
        children: [{ text: node.value }],
      };

    case 'html':
      if (node.value?.includes('<br>')) {
        return {
          break: true,
          type: types.paragraph,
          children: [{ text: node.value?.replace(/<br>/g, '') || '' }],
        };
      }
      // TODO: Handle other HTML?
      return { type: 'paragraph', children: [{ text: '' }] };

    case 'emphasis':
      return {
        [types.emphasis_mark]: true,
        ...forceLeafNode(children),
        ...persistLeafFormats(children),
      };
    case 'strong':
      return {
        [types.strong_mark]: true,
        ...forceLeafNode(children),
        ...persistLeafFormats(children),
      };
    case 'delete':
      return {
        [types.delete_mark]: true,
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
