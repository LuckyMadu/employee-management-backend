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
      description:
        "Backend server build with nodeJS and mongoDB using REST API",
      contact: {
        name: "Lahiru Amaratunga",
        email: "lahirua@swivelgroup.com.au",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: [
    "./src/modules/healthcheck/routers/healthcheck_route.ts",
    "./src/modules/employee/routers/employee_route.ts",
  ],
};
