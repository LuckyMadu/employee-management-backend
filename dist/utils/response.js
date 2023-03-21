"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonResponse = void 0;
/**
 * Prepare static response JSON
 * @param {boolean} success - True or False
 * @param {object} data - Any other date to be sent. Ex:view record data
 * @param {string} message - Optional message to be sent
 * @param {object} error - Error object
 * @returns {object}
 */
var commonResponse = function (success, data, message, error) {
    if (data === void 0) { data = {}; }
    if (message === void 0) { message = ''; }
    if (error === void 0) { error = {}; }
    return ({
        'success': success,
        'data': data,
        'message': message,
        'error': error
    });
};
exports.commonResponse = commonResponse;
