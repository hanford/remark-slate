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

export interface LeafType {
  text: string;
  strikeThrough?: boolean;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  parentType?: string;
}

export interface BlockType {
  type: string;
  parentType?: string;
  link?: string;
  caption?: string;
  language?: string;
  break?: boolean;
  children: Array<BlockType | LeafType>;
}
