import { padding } from "polished";

export default {
  title: 'React components',
  description: 'Oovui react components docs site',
  src:'./docs-site',
  dest: '/docs-dist',
  indexHtml: './docs-site/index.html',
  repository: 'https://github.com/oovui/react-components',
  ordering: 'descending',  //ascending
  //base:"/"
  //propsParser:false,
  files: '**/*.{markdown,mdx}',
  codeSandbox: false,
  themeConfig: {
    colors: {
      primary: 'tomato',
    },
    styles: {
      h1: {
        fontSize: 26,
      },
      h2: {
        fontSize: 20,
      },
      h3: {
        fontSize: 18,
      },
      h4: {
        fontSize: 16,
      },
      h5: {
        fontSize: 14,
      },
      h6: {
        fontSize: 14,
      },
    },
  }

}