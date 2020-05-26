'use strict';

var merge = require('deepmerge');

module.exports = plugin;

function plugin(opts) {
  var settings = opts || {};
  var userTypes = settings.nodeTypes || {};
  var nodeTypes = merge(defaultNodeTypes, userTypes);
  this.Compiler = function compiler(node) {
    return node.children.map((c) =>
      transform(c, merge(settings, { nodeTypes }))
    );
  };
}

module.exports.transform = transform;
module.exports.defaultNodeTypes = defaultNodeTypes;

function transform(node, opts) {
  var settings = opts || {};
  var userTypes = settings.nodeTypes || {};
  var types = merge(defaultNodeTypes, userTypes);

  var parentNode = node.parentNode || null;
  var children = [{ text: '' }];

  if (Array.isArray(node.children) && node.children.length > 0) {
    children = node.children.map(function (c) {
      return transform(
        merge(c, {
          parentNode: node,
          ordered: node.ordered || false,
        }),
        settings
      );
    });
  }

  switch (node.type) {
    case 'heading':
      return {
        type: types.heading[node.depth],
        children: children,
      };
    case 'list':
      return {
        type: node.ordered ? types.ol_list : types.ul_list,
        children: children,
      };
    case 'listItem':
      return {
        type: types.listItem,
        children: children,
      };
    case 'emphasis':
      return merge.all([
        forceLeafNode(children),
        { italic: true },
        persistLeafFormats(children),
      ]);
    case 'strong':
      return merge.all([
        forceLeafNode(children),
        { bold: true },
        persistLeafFormats(children),
      ]);
    case 'delete':
      return merge.all([
        forceLeafNode(children),
        { strikeThrough: true },
        persistLeafFormats(children),
      ]);
    case 'paragraph':
      return {
        type: types.paragraph,
        children: children,
      };
    case 'link':
      return {
        type: types.link,
        link: node.url,
        children: children,
      };
    case 'blockquote':
      return {
        type: types.block_quote,
        children: children,
      };

    case 'html':
      if (node.value === '<br>') {
        return {
          type: types.paragraph,
          children: [{ text: '' }],
        };
      }

    case 'text':
    default:
      return {
        text: node.value || '',
      };
  }
}

function forceLeafNode(children) {
  return { text: children.map((k) => k.text).join('') };
}

// This function is will take any unknown keys, and bring them up a level
// allowing leaf nodes to have many different formats at once
// for example, bold and italic on the same node
function persistLeafFormats(children) {
  return children.reduce((acc, node) => {
    Object.keys(node).forEach(function (key) {
      if (key === 'children' || key === 'text') return;
      acc[key] = true;
    });

    return acc;
  }, {});
}

var defaultNodeTypes = {
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
