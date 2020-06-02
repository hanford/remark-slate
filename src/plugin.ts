import transform, { OptionType, MdastNode } from './deserialize';

export default function plugin(opts?: OptionType) {
  const compiler = (node: { children: Array<MdastNode> }) => {
    return node.children.map((c) => transform(c, opts));
  };

  // @ts-ignore
  this.Compiler = compiler;
}
