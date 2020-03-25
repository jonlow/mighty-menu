import Typography from "typography"
// import presets, { colors } from './presets'

const headerFontFamily = [`Roboto`, `Arial`, `sans-serif`]

const _options = {
  headerFontFamily,
  bodyFontFamily: [`Roboto`, `Arial`, `sans-serif`],
  bodyWeight: 400,
  headerWeight: "bold",
  baseLineHeight: 1.5,
  baseFontSize: `16px`,
  headerLineHeight: 1,
  headerColor: "#202020",
  bodyColor: "#859599",
  blockMarginBottom: 0,
  scaleRatio: 5,
  // overrideStyles: ({ rhythm, scale }, options) => {
  //   return {
  //     "h1,h2,h3,h4,h5,h6": {
  //       fontWeight: 600,
  //     },
  //   }
  // },
}

const typography = new Typography(_options)

export const { scale, rhythm, options } = typography
export default typography
