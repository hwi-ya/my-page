import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'hwi-ya/my-page',
        repoId: 'R_kgDOOJ2iWQ',
        category: 'General',
        categoryId: 'DIC_kwDOOJ2iWc4CoId_',
        mapping: 'pathname',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/hwi-ya",
      "Instagram": "https://www.instagram.com/chan._.hvvi/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.Flex({
    //   components: [
    //     {
    //       Component: Component.Search(),
    //       grow: true,
    //     },
    //     { Component: Component.Darkmode() },
    //   ],
    // }),
    Component.Explorer()
  ],
  right: [
    //우측 사이드바에 그래프 띄우기
    //Component.Graph(),
    
    //우측 사이드바에 목차 띄우기
    Component.DesktopOnly(Component.TableOfContents()),
    
    //우측 사이드바에 백링크 띄우기
    //Component.Backlinks()
    
    //우측 사이드바에 최근 업데이트 게시물 띄우기
    Component.RecentNotes({ limit: 5, showTags: false, showDate: false }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.Flex({
    //   components: [
    //     {
    //       Component: Component.Search(),
    //       grow: true,
    //     },
    //     { Component: Component.Darkmode() },
    //   ],
    // }),
    Component.Explorer(),
  ],
  right: [],
}
