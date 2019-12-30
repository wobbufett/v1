/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const intro = path.resolve(`src/components/intro.js`)

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     console.log(result)
//   })

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       title: node.frontmatter.title,
//       component: intro,
//       context: {}, // additional data can be passed via context
//     })
//   })
// }

exports.onCreateWebpackConfig = ({
    stage, getConfig, rules, loaders, actions 
}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@styles': path.resolve(__dirname, 'src/styles'),
            },
        },
    });
};