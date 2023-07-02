const removeCommentWithConsoleLog = (file, api) => {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Comment)
    .forEach((path) => path.value.value.includes('console.log') && path.prune())
    .toSource();
};

export default removeCommentWithConsoleLog;
