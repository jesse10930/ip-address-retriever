/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// const fetch = require(`node-fetch`)

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   const result = await fetch(
//     `https://geo.ipify.org/api/v1?apiKey=at_dVth0kxr6ZAu7GxhEQeNiXBssW3Q6&ipAddress=8.8.8.8`
//   )
//   const resultData = await result.json()
//   createNode({
//     dataIp: resultData.ip,
//     dataLocation: resultData.location,
//     dataDomains: resultData.domains,
//     dataIsp: resultData.isp,
//     id: `example-build-time-data`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `Example`,
//       contentDigest: createContentDigest(resultData),
//     },
//   })
// }
