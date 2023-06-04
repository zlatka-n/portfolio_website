const setNamedExport = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.VariableDeclaration, {
      declarations: [
        {
          id: {
            type: "Identifier",
            name: "Buttons"
          }
        }
      ]
    })
    .replaceWith(p => j.exportDeclaration(false, p.node))
    .toSource();
};

export default setNamedExport