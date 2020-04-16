'use strict';

var extend = require('xtend');

module.exports = plugin;

function plugin(opts) {
  var settings = opts || {};
  this.Compiler = function compiler(node) {
    return node.children.map(function (j) {
      return transform(j, opts);
    });
  };
}

module.exports.transform = transform;

function transform(node, opts) {
  var settings = opts || {};
  var flattenListItems = settings.flattenListItems || false;

  var parentNode = node.parentNode || null;
  var children = [{ text: '' }];

  var isList =
    node.type === 'list' ||
    node.type === 'numbered-list' ||
    node.type === 'bulleted-list';

  if (Array.isArray(node.children) && node.children.length > 0 && isList) {
    children = node.children.map(function (child) {
      if (child.children.length) {
        child.children = child.children
          .map(function (grandChild) {
            if (grandChild.type === 'list') {
              node.children.push(grandChild);
              return;
            }
            return grandChild;
          })
          .filter(Boolean);
      }

      return child;
    });
  }

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
      if (flattenListItems && parentNode && parentNode.type === 'listItem') {
        return forceLeafNode(children);
      } else {
        return {
          type: node.type,
          children: children,
        };
      }
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
