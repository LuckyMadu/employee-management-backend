import winston from "winston";

export const setLogger = (level: string, message: string) => {
  const logger = winston.createLogger({
    level,
    format: winston.format.json(),
    defaultMeta: { service: "employee-service" },
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combined.log" }),
    ],
  });

  logger.log({
    level,
    message,
  });
};
