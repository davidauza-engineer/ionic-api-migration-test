import { gql } from 'apollo-angular';

export const GET_ALL_POSTS_QUERY = gql`
    {
        allPosts {
            id
            title
            author
        }
    }
`;
