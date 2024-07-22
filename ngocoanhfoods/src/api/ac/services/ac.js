'use strict';

/**
 * ac service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ac.ac');
