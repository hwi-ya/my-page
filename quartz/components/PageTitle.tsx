import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        {title.split(" ").map((word, index) => (
          <span key={index} class="title-line">{word}</span>
        ))}
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  text-align: center; /* 가운데 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-title a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-line {
  display: block;
  line-height: 1.75;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
