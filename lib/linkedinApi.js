'use strict';

const axios = require('axios');
const { clientId, clientSecret, authorizationURL, redirectURI, accessTokenURL } = require('../config');

class LinkedInAPI {
    static getAccessToken(code) {
        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectURI,
            client_id: clientId,
            client_secret: clientSecret
        }).toString();

        return axios.post(accessTokenURL, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => response.data);
    }

    static getAuthorizationUrl() {
        const state = Buffer.from(Math.random().toString()).toString('hex');
        const scope = encodeURIComponent('r_liteprofile r_emailaddress w_member_social');
        const url = `${authorizationURL}?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectURI)}&state=${state}&scope=${scope}`;
        return url;
    }

    static getLinkedInProfile(accessToken) {
        return axios.get('https://api.linkedin.com/v2/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'cache-control': 'no-cache',
                'X-Restli-Protocol-Version': '2.0.0'
            }
        }).then(response => response.data);
    }
}

module.exports = LinkedInAPI;
