# Nestjs Dynamic Module Example

In this repo, we will create a dynamic module using the `ConfigurableModuleClass` feature in NestJS. This module will simulate a mock database connection, with `host` and `port` as configuration options. We will implement `register` and `registerAsync` methods for flexibility.

## Prerequisites

- Node.js and npm installed
- NestJS CLI installed (`npm i -g @nestjs/cli`)

## Run the application

Start the NestJS application:

```bash
npm run start
```

You should see the mock database connection initialized and logged to the console.

### Conclusion

You've successfully implemented a dynamic NestJS module using `ConfigurableModuleClass` with both `register` and `registerAsync` options for a mock DB connection. This setup provides flexibility for runtime configuration.
