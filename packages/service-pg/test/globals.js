console.warn(
  'DEPRECATED: use the same package from "/utils/globals" instead',
).module.exports = (global) => {
  const query = (q, p) => global.post('/test/pg/query', { q, p });

  return {
    pg: {
      query,
    },
  };
};
