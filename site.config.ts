import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c0163542ce7c409e8e6743a232dec375',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Aaron Dudley's Portfolio",
  domain: 'aarondudley.vercel.app',
  author: 'Aaron Dudley',

  // open graph metadata (optional)
  description: "🌸 Aaron Dudley's personal portfolio and website.",

  // social usernames (optional)
  //twitter: 'transitive_bs',
  github: 'aarondud',
  linkedin: 'aaron-dudley',
  newsletter: 'mailto:aarondudley00@gmail.com',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Portolio',
      pageId: '85add585283243f1895dc9e58e97635e'
    },
    {
      title: 'Blog',
      pageId: '792b81c8c05942d89fbfa1d4872fc533'
    },
    {
      title: 'Experience',
      pageId: '7123ac93d7de4dbba26ea3fe797fd0bc?pvs=4'
    }
  ]
})
