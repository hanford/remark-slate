'use strict';

var extend = require('xtend');

module.exports = plugin;

function plugin(opts) {
  var settings = opts || {};
  this.Compiler = function compiler(node) {
    return node.children.map((c) => transform(c, {}));
  };
}

module.exports.transform = transform;

function transform(node, opts) {
  var settings = opts || {};

  var parentNode = node.parentNode || null;
  var children = [{ text: '' }];

  if (Array.isArray(node.children) && node.children.length > 0) {
    children = node.children.map(function (c) {
      return transform(
        extend(c, {
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
        type: depthToHeading[node.depth],
        children: children,
      };
    case 'list':
      return {
        type: node.ordered ? 'ol_list' : 'ul_list',
        children: children,
      };
    case 'listItem':
      return {
        type: 'list_item',
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
        type: 'block_quote',
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
  return { text: children.map((k) => k.text).join('') };
}

var depthToHeading = {
  1: 'heading_one',
  2: 'heading_two',
  3: 'heading_three',
  4: 'heading_four',
  5: 'heading_five',
  6: 'heading_six',
};
