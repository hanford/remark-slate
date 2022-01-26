export interface InputNodeTypes {
  paragraph: string;
  block_quote: string;
  code_block: string;
  link: string;
  ul_list: string;
  ol_list: string;
  listItem: string;
  heading: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  };
  emphasis_mark: string;
  strong_mark: string;
  delete_mark: string;
  inline_code_mark: string;
  thematic_break: string;
  image: string;
}
export interface NodeTypes {
  paragraph: 'paragraph';
  block_quote: 'block_quote';
  code_block: 'code_block';
  link: 'link';
  ul_list: 'ul_list';
  ol_list: 'ol_list';
  listItem: 'list_item';
  heading: {
    1: 'heading_one';
    2: 'heading_two';
    3: 'heading_three';
    4: 'heading_four';
    5: 'heading_five';
    6: 'heading_six';
  };
  emphasis_mark: 'italic';
  strong_mark: 'bold';
  delete_mark: 'strikeThrough';
  inline_code_mark: 'code';
  thematic_break: 'thematic_break';
  image: 'image';
}

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export interface OptionType<T extends InputNodeTypes> {
  nodeTypes?: RecursivePartial<T>;
  linkDestinationKey?: string;
  imageSourceKey?: string;
  imageCaptionKey?: string;
}

export type MdastNodeType =
  | 'paragraph'
  | 'heading'
  | 'list'
  | 'listItem'
  | 'link'
  | 'image'
  | 'blockquote'
  | 'code'
  | 'html'
  | 'emphasis'
  | 'strong'
  | 'delete'
  | 'inlineCode'
  | 'thematicBreak'
  | 'text';

export interface MdastNode {
  type?: MdastNodeType;
  ordered?: boolean;
  value?: string;
  text?: string;
  children?: Array<MdastNode>;
  depth?: 1 | 2 | 3 | 4 | 5 | 6;
  url?: string;
  alt?: string;
  lang?: string;
  // mdast metadata
  position?: any;
  spread?: any;
  checked?: any;
  indent?: any;
}

export const defaultNodeTypes: NodeTypes = {
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
  inline_code_mark: 'code',
  thematic_break: 'thematic_break',
  image: 'image',
};

type TextNode = { text?: string | undefined };

type CodeBlockNode<T extends InputNodeTypes> = {
  type: T['code_block'];
  language: string | undefined;
  children: Array<TextNode>;
};

type HeadingNode<T extends InputNodeTypes> = {
  type:
    | T['heading'][1]
    | T['heading'][2]
    | T['heading'][3]
    | T['heading'][4]
    | T['heading'][5]
    | T['heading'][6];
  children: Array<DeserializedNode<T>>;
};

type ListNode<T extends InputNodeTypes> = {
  type: T['ol_list'] | T['ul_list'];
  children: Array<DeserializedNode<T>>;
};

type ListItemNode<T extends InputNodeTypes> = {
  type: T['listItem'];
  children: Array<DeserializedNode<T>>;
};

type ParagraphNode<T extends InputNodeTypes> = {
  type: T['paragraph'];
  break?: true;
  children: Array<DeserializedNode<T>>;
};

type LinkNode<T extends InputNodeTypes> = {
  type: T['link'];
  children: Array<DeserializedNode<T>>;
  [urlKey: string]: string | undefined | Array<DeserializedNode<T>>;
};

type ImageNode<T extends InputNodeTypes> = {
  type: T['image'];
  children: Array<DeserializedNode<T>>;
  [sourceOrCaptionKey: string]: string | undefined | Array<DeserializedNode<T>>;
};

type BlockQuoteNode<T extends InputNodeTypes> = {
  type: T['block_quote'];
  children: Array<DeserializedNode<T>>;
};

type InlineCodeMarkNode<T extends InputNodeTypes> = {
  type: T['inline_code_mark'];
  children: Array<TextNode>;
  language: string | undefined;
};

type ThematicBreakNode<T extends InputNodeTypes> = {
  type: T['thematic_break'];
  children: Array<DeserializedNode<T>>;
};

type ItalicNode<T extends InputNodeTypes> = {
  [K in T['emphasis_mark']]: true;
} & {
  children: TextNode;
};

type BoldNode = {
  bold: true;
  children: TextNode;
};

type StrikeThoughNode = {
  strikeThrough: true;
  children: TextNode;
};

type InlineCodeNode = {
  code: true;
  text: string | undefined;
};

export type DeserializedNode<T extends InputNodeTypes> =
  | CodeBlockNode<T>
  | HeadingNode<T>
  | ListNode<T>
  | ListItemNode<T>
  | ParagraphNode<T>
  | LinkNode<T>
  | ImageNode<T>
  | BlockQuoteNode<T>
  | InlineCodeMarkNode<T>
  | ThematicBreakNode<T>
  | ItalicNode<T>
  | BoldNode
  | StrikeThoughNode
  | InlineCodeNode
  | TextNode;

export default function deserialize<T extends InputNodeTypes>(
  node: MdastNode,
  opts?: OptionType<T>
) {
  const types = {
    ...defaultNodeTypes,
    ...opts?.nodeTypes,
    heading: {
      ...defaultNodeTypes.heading,
      ...opts?.nodeTypes?.heading,
    },
  };

  const linkDestinationKey = opts?.linkDestinationKey ?? 'link';
  const imageSourceKey = opts?.imageSourceKey ?? 'link';
  const imageCaptionKey = opts?.imageCaptionKey ?? 'caption';

  let children: Array<DeserializedNode<T>> = [{ text: '' }];

  const nodeChildren = node.children;
  if (nodeChildren && Array.isArray(nodeChildren) && nodeChildren.length > 0) {
    children = nodeChildren.flatMap((c: MdastNode) =>
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
      return {
        type: types.heading[node.depth || 1],
        children,
      } as HeadingNode<T>;
    case 'list':
      return {
        type: node.ordered ? types.ol_list : types.ul_list,
        children,
      } as ListNode<T>;
    case 'listItem':
      return { type: types.listItem, children } as ListItemNode<T>;
    case 'paragraph':
      return { type: types.paragraph, children } as ParagraphNode<T>;
    case 'link':
      return {
        type: types.link,
        [linkDestinationKey]: node.url,
        children,
      } as LinkNode<T>;
    case 'image':
      return {
        type: types.image,
        children: [{ text: '' }],
        [imageSourceKey]: node.url,
        [imageCaptionKey]: node.alt,
      } as ImageNode<T>;
    case 'blockquote':
      return { type: types.block_quote, children } as BlockQuoteNode<T>;
    case 'code':
      return {
        type: types.code_block,
        language: node.lang,
        children: [{ text: node.value }],
      } as CodeBlockNode<T>;

    case 'html':
      if (node.value?.includes('<br>')) {
        return {
          break: true,
          type: types.paragraph,
          children: [{ text: node.value?.replace(/<br>/g, '') || '' }],
        } as ParagraphNode<T>;
      }
      return { type: 'paragraph', children: [{ text: node.value || '' }] };

    case 'emphasis':
      return {
        [types.emphasis_mark as string]: true,
        ...forceLeafNode(children as Array<TextNode>),
        ...persistLeafFormats(children as Array<MdastNode>),
      } as unknown as ItalicNode<T>;
    case 'strong':
      return {
        [types.strong_mark as string]: true,
        ...forceLeafNode(children as Array<TextNode>),
        ...persistLeafFormats(children as Array<MdastNode>),
      };
    case 'delete':
      return {
        [types.delete_mark as string]: true,
        ...forceLeafNode(children as Array<TextNode>),
        ...persistLeafFormats(children as Array<MdastNode>),
      };
    case 'inlineCode':
      return {
        [types.inline_code_mark as string]: true,
        text: node.value,
        ...persistLeafFormats(children as Array<MdastNode>),
      };
    case 'thematicBreak':
      return {
        type: types.thematic_break,
        children: [{ text: '' }],
      } as ThematicBreakNode<T>;

    case 'text':
    default:
      return { text: node.value || '' };
  }
}

const forceLeafNode = (children: Array<TextNode>) => ({
  text: children.map((k) => k?.text).join(''),
});

// This function is will take any unknown keys, and bring them up a level
// allowing leaf nodes to have many different formats at once
// for example, bold and italic on the same node
function persistLeafFormats(
  children: Array<MdastNode>
): Omit<MdastNode, 'children' | 'type' | 'text'> {
  return children.reduce((acc, node) => {
    (Object.keys(node) as Array<keyof MdastNode>).forEach(function (key) {
      if (key === 'children' || key === 'type' || key === 'text') return;

      acc[key] = node[key];
    });

    return acc;
  }, {});
}
