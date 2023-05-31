const plugin = () => ({
  visitor: {
    Identifier(path) {
      if (
        path.node.name === 'y' &&
        path.findParent(
          (p) => p.isFunctionDeclaration() && p.node.id.name === 'square'
        )
      ) {
        path.node.name = 'z';
      }
    }
  }
});
//npx codemod --plugin plugin.js astTransform.js

export default plugin;