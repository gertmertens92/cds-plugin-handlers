"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleError;
function handleError(req, error) {
    if (req) {
        if (error.response) {
            req.error({ code: error.response.status, message: error.response.data });
        }
        else {
            req.error({ code: error.code || 500, message: error.message || error });
        }
    }
}
