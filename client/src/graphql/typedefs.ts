import type { DocumentNode } from '@apollo/client/core';
import { gql } from '@apollo/client';

const typedefs: DocumentNode = gql`
    type query {
        hello: String!
    }
`;

export default typedefs;