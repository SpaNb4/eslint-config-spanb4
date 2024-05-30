const rule = {
  name: 'no-js-date',
  defaultOptions: [],
  severity: 'off',
  meta: {
    type: 'problem',
    docs: {
      description: '',
    },
    messages: {
      noJSDate:
        'Avoid using the JS Date. Consider using a JsJoda for consistent date handling and to prevent possible bugs. Refer to this article to understand why https://dev.to/dgreene1/temporaljoda-concept-breakdown-51gk.',
    },
    schema: [],
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === 'Date') {
          context.report({
            node,
            messageId: 'noJSDate',
          });
        }
      },
    };
  },
};

module.exports = rule;
