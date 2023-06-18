const removeExportDefault = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.ExportDefaultDeclaration, {
      declaration: { type: 'Identifier', name: 'Buttons' }
    })
    .remove()
    .toSource();
};

export default removeExportDefault;
