import { gql }  from 'apollo-boost';

export const authenticationMutation = gql`
    mutation($phone: String!, password: String!) {
        authenticate(phone: $phone, password: $phone) {
            accessToken,
            refreshToken,
            account { id, email, token, datebirth, firstname, lastname, phone },
            session { revoked, access, refresh phone }
        }
    }
`;