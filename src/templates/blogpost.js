import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'

export const query = graphql`
query PostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      description
      date
    }
  }
}
`;

export default function BlogPost(props) {
    const post = props.data.markdownRemark;
    const { title, description, date } = post.frontmatter;
    return (
      <Layout>
        <div>
            <h1>{title}</h1>
            <small>{date}</small>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>  
    );
}