import path from "path";

const ROOT_FOLDER = path.join(__dirname, "..");

export const options = {
  definition: {
    openapi: "3.0.0",
    components: {
      schemas: {
        employee: {
          properties: {
            id: {
              type: "string",
            },
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
            email: {
              type: "string",
            },
            phone: {
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
            firstName: "Lahiru",
            lastName: "Amaratunga",
            email: "lahirua@swivelgroup.com.au",
            phone: "+94712130466",
            gender: "M",
            photo: "https://randomuser.me/api/portraits/men/30.jpg",
          },
        },
      },
    },
    info: {
      title: "Employee Management Project",
      version: "1.0.0",
      description:
        "Backend server build with nodeJS and mongoDB using REST API",
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
  // Temp fix for run swagger paths on vercel
  apis: [
    `${ROOT_FOLDER}/modules/healthcheck/routers/healthcheck_route.js`,
    `${ROOT_FOLDER}/modules/healthcheck/routers/healthcheck_route.ts`,
    `${ROOT_FOLDER}/modules/employee/routers/employee_route.js`,
    `${ROOT_FOLDER}/modules/employee/routers/employee_route.ts`,
  ],
};
