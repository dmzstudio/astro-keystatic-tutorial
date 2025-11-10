// keystatic.config.ts
import { config, collection, fields } from "@keystatic/core";

// https://keystatic.org/docs/config
export default config({
   storage: {
      kind: "local",
   },
   collections: {
      posts: collection({
         label: "Posts",
         path: "src/content/posts/*/",
         format: {
            contentField: "content",
         },
         slugField: "title",
         schema: {
            title: fields.slug({
               name: { label: "Title" },
            }),
            date: fields.date({ label: "Date" }),
            cover: fields.image({
               label: "Cover Image",
               directory: "src/content/posts",
               publicPath: "/src/content/posts/",
            }),
            summary: fields.text({ label: "Summary" }),
            content: fields.markdoc({
               label: "Content",
               options: {
                  image: {
                     directory: "src/content/posts",
                     publicPath: "/src/content/posts/",
                  },
               },
            }),
         },
      }),
      pages: collection({
         label: "Pages",
         slugField: "title",
         path: "src/content/pages/*/",
         format: {
            contentField: "content",
         },
         schema: {
            title: fields.slug({
               name: { label: "Title" },
            }),
            content: fields.markdoc({
               label: "Content",
               options: {
                  image: {
                     directory: "src/content/pages",
                     publicPath: "/src/content/pages/",
                  },
               },
            }),
         },
      }),
   },
});
