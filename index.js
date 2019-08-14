/**
 * File: index.js
 * Author: Tommy Gingras
 * Date: 2019-10-13
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

/**
 * Load static resources
 * @param {Object} options The configuration to start the server, mandatory
 * @param {Function} app An express application, mandatory
 * @param {Function} express The express object, mandatory
 * @param {Function} log The log function, optional, by default console
 * @returns {Promise}
 */
const serveStatic = (options, app, express, log = console) => {
  return new Promise((resolve, reject) => {
    try {
      if (!options || typeof options !== "object") {
        return reject(
          new Error("The options parameter is required and must be an object")
        );
      }
      if (!app || typeof app !== "function") {
        return reject(
          new Error("The app parameter is required and must be a function")
        );
      }
      if (!express || typeof express !== "function") {
        return reject(
          new Error("The express parameter is required and must be a function")
        );
      }
      if (log && typeof log !== "object") {
        return reject(new Error("The log parameter must be an object"));
      }

      options.resources.forEach(resource => {
        log.info("Link " + resource.path + " to " + resource.resource);
        app.use(resource.path, express.static(resource.resource));
      });

      return resolve("Static resources loaded !");
    } catch (e) {
      throw e;
    }
  });
};

module.exports = { serveStatic };
