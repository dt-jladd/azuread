  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
 	returnURL: 'http://localhost:3000/auth/openid/return',
 	identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
     
    clientID: '02efe21f-6d15-4026-8872-9fcd7d789602', //this POC
    clientSecret: 'VO474u6v5or+S4h=', //this POC
    //clientID: '01d83438-0130-472a-a1db-28fffee476f9', //silverrockweb
    //clientSecret: 'B3|$[N<-(b.0219T', //silverrockweb
    
 	skipUserProfile: true, // for AzureAD should be set to true.
 	responseType: 'id_token', // for login only flows use id_token. For accessing resources use `id_token code`
 	responseMode: 'form_post', // For login only flows we should have token passed back to us in a POST
 	//scope: ['email', 'profile'] // additional scopes you may wish to pass
 	tenantName: 'argoadb2ctest.onmicrosoft.com'
 	};
