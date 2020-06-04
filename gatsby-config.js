module.exports = {
    siteMetadata: {
        title: `Orlando Hernandez Blog`,
        author: `Orlando Hernandez`,
        description: `My personal web page`,
    },
    plugins: [
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `content`,
            },
        },
        'gatsby-plugin-theme-ui',
    ],
};
