var util = require('util');

module.exports = function (restClient) {
    
    var module = {};

    module.get = function (endpointUrl, query) {
        query = query ? ('?' + query) : '';
        return restClient.get(endpointUrl + query);
    }
    
    module.post = function (endpointUrl, body, query) {
        query = query ? ('?' + query) : '';
        return restClient.post(endpointUrl + query, body);
    }

    module.put = function (endpointUrl, body, query) {
        query = query ? ('?' + query) : '';
        return restClient.put(endpointUrl + query, body);
    }

    module.delete = function (endpointUrl) {
        return restClient.delete(endpointUrl);
    }

    return module;
}

