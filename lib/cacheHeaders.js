"use strict";

(function () {
    var config = require('config');

    /**
     * Специальный хелпер-middleware для установки кеширующих заголовков
     * @param app
     */
    module.exports = function cacheHeaders(app) {
        app.use(function * (next) {
            if (this.method === 'GET') {
                this.set({
                    'Cache-Control': 'public, max-age=' + config.cache.expires,
                    'Pragma': ''
                });
            }
            yield next;
        });
    }
}());