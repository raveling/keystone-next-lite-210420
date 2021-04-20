import { config, list } from "@keystone-next/keystone/schema";
import { text, image } from "@keystone-next/fields";

export default config({
  db: { adapter: "prisma_sqlite", url: "file:./app.db" },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  images: { upload: 'local' },
  lists: {
    Post: list({
      fields: {
        title: text(),
        slug: text({ isUnique: true }),
        image: image(),
        content: text({ ui: { isMultiline: true } }),
      },
    }),
  },
});