import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "my_realm",
    clientId: "my_client"
});

export default keycloak;