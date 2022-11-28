module.exports = () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        category: {
          field: "slug",
          references: "name",
        },
        project: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
