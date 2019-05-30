/**
 * 面包屑action
 */

 export const CRUMB = 'CRUMB'

 export const setCrumb = (data) => {
     return { type: CRUMB, data: data}
 }