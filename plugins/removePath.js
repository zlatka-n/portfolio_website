const removePath = () => ({
  visitor: {
    Identifier(path) {
      if (
        path.node.name === 'square' &&
        path.findParent((p) => p.isFunctionDeclaration())
      ) {
        path.parentPath.remove();
      }
    }
  }
});
export default removePath;
