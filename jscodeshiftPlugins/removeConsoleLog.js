const removeConsoleLog = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.ExpressionStatement, {
      expression: {
        type: 'CallExpression',
        callee: {
          object: { type: 'Identifier', name: 'console' },
          property: { type: 'Identifier', name: 'log' }
        }
      }
    })
    .remove()
    .toSource();
};

export default removeConsoleLog;
