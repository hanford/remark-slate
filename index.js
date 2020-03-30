var transform = require('./transform');

module.exports = plugin;

function plugin() {
  this.Compiler = function compiler(node) {
    return node.children.map(transform);
  };
}
