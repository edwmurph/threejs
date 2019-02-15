class RenderableError extends Error {
  constructor(msg, renderMsg) {
    super();
    const defaultMsg = 'Something went wrong.';
    this.message = msg || defaultMsg;
    this.renderMsg = renderMsg || defaultMsg;
  }
}

module.exports = RenderableError;
