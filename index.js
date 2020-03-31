var extend = require('xtend');

module.exports = plugin;

function plugin() {
  this.Compiler = function compiler(node) {
    return node.children.map(transform);
  };
}

module.exports.transform = transform;

function transform(node) {
  var children = [{ text: '' }];

  if (Array.isArray(node.children) && node.children.length > 0) {
    children = node.children.map(function (c) {
      return transform(extend(c, { ordered: node.ordered || false }));
    });
  }

  switch (node.type) {
    case 'heading':
      return {
        type: depthToHeading[node.depth],
        children: children,
      };
    case 'list':
      return {
        type: node.ordered ? 'numbered-list' : 'bulleted-list',
        children: children,
      };
    case 'listItem':
      return {
        type: 'list-item',
        children: children,
      };
    case 'emphasis':
      return extend(forceLeafNode(children), { italic: true });
    case 'strong':
      return extend(forceLeafNode(children), { bold: true });
    case 'delete':
      return extend(forceLeafNode(children), { strikeThrough: true });
    case 'paragraph':
      return {
        type: node.type,
        children: children,
      };
    case 'link':
      return {
        type: node.type,
        link: node.url,
        children: children,
      };
    case 'blockquote':
      return {
        type: 'block-quote',
        children: children,
      };

    case 'text':
    default:
      return {
        text: node.value || '',
      };
  }
}

function forceLeafNode(children) {
  return { text: children[0].text };
}

var depthToHeading = {
  1: 'heading-one',
  2: 'heading-two',
  3: 'heading-three',
  4: 'heading-four',
  5: 'heading-five',
  6: 'heading-six',
};
