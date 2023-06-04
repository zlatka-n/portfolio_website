const setImportSpecifier = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.ImportDefaultSpecifier, {
      local: { type: 'Identifier', name: 'Buttons' }
    })
    .replaceWith(() => {
      return j.importSpecifier(j.identifier('Buttons'));
    })
    .toSource();
};

export default setImportSpecifier;
