/**
 * Prepare static response JSON
 * @param {boolean} success - True or False
 * @param {object} data - Any other date to be sent. Ex:view record data
 * @param {string} message - Optional message to be sent
 * @param {object} error - Error object
 * @returns {object}
 */
export const commonResponse = (success: boolean, data: object = {}, message: string  = '', error: object = {}): object => ({
    'success': success,
    'data': data,
    'message': message,
    'error': error
});


