"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLogger = void 0;
var winston_1 = __importDefault(require("winston"));
var setLogger = function (level, message) {
    var logger = winston_1.default.createLogger({
        level: level,
        format: winston_1.default.format.json(),
        defaultMeta: { service: "employee-service" },
        transports: [
            new winston_1.default.transports.File({ filename: "error.log", level: "error" }),
            new winston_1.default.transports.File({ filename: "combined.log" }),
        ],
    });
    logger.log({
        level: level,
        message: message,
    });
};
exports.setLogger = setLogger;
