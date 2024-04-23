import { EB_Garamond, DM_Sans } from 'next/font/google'


export const customHeadingFont = EB_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--custom-heading-font',
})

/* Custom font example: */
// export const customBodyFont = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--custom-body-font',
//   display: 'swap'
// })
