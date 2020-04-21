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

  var isList =
    node.type === 'list' || node.type === 'ol_list' || node.type === 'ul_list';

  if (Array.isArray(node.children) && node.children.length > 0 && isList) {
    let lastFriendlyItem;
    children = node.children
      .reduce((acc, child) => {
        if (child.children.length) {
          const nonListTypeItem = child.children.every(
            (f) => f.type !== 'list' && f.type !== 'listItem'
          );

          if (nonListTypeItem) {
            lastFriendlyItem = child;
          }

          child.children = child.children
            .map(function (grandChild) {
              if (grandChild.type === 'list') {
                lastFriendlyItem.children.push(grandChild);
                return false;
              }
              return grandChild;
            })
            .filter(Boolean);
        }

        // if (child.type !== 'paragraph' && child.children.length === 0) {
        //   return acc;
        // }

        return [...acc, child];
      }, [])
      .filter(Boolean);
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
