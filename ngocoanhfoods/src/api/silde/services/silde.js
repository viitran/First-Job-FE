'use strict';

/**
 * silde service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::silde.silde');
