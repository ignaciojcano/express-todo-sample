const config = require('config');
const OAuthClient = require('intuit-oauth');

const oauthClient = new OAuthClient({
  clientId: config.get('intuit.clientId'),
  clientSecret: config.get('intuit.clientSecret'),
  environment: config.get('intuit.env'),
  redirectUri: config.get('intuit.redirectURI'),
});

const getAuthURI = () => oauthClient.authorizeUri({
  scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId], state: 'testState',
});

const getToken = async (url) => oauthClient.createToken(url)
  .then((authResponse) => ({ ...authResponse.getJson(), realmId: oauthClient.getToken().realmId }));

module.exports = {
  getAuthURI,
  getToken,
};
