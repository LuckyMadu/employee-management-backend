"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
var path_1 = __importDefault(require("path"));
var ROOT_FOLDER = path_1.default.join(__dirname, "../..");
var SRC_FOLDER = path_1.default.join(ROOT_FOLDER, "src");
exports.options = {
    definition: {
        openapi: "3.0.0",
        components: {
            schemas: {
                employee: {
                    properties: {
                        id: {
                            type: "string",
                        },
                        first_name: {
                            type: "string",
                        },
                        last_name: {
                            type: "string",
                        },
                        email: {
                            type: "string",
                        },
                        number: {
                            type: "string",
                        },
                        gender: {
                            type: "string",
                        },
                        photo: {
                            type: "string",
                        },
                    },
                    example: {
                        id: 13,
                        first_name: "Lahiru",
                        last_name: "Amaratunga",
                        email: "lahirua@swivelgroup.com.au",
                        number: "+94712130466",
                        gender: "M",
                        photo: "https://randomuser.me/api/portraits/men/30.jpg",
                    },
                },
            },
        },
        info: {
            title: "Employee Management Project",
            version: "1.0.0",
            description: "Backend server build with nodeJS and mongoDB using REST API",
            contact: {
                name: "Lahiru Amaratunga",
                email: "lahirua@swivelgroup.com.au",
            },
        },
        servers: [
            {
                url: "https://employee-management-backend.vercel.app",
                description: "server",
            },
        ],
    },
    apis: [
        "".concat(SRC_FOLDER, "/modules/healthcheck/routers/healthcheck_route.ts"),
        "".concat(SRC_FOLDER, "/modules/employee/routers/employee_route.ts"),
    ],
};
