import { DynamicModule, Logger, Module } from '@nestjs/common';
import {
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
  OPTIONS_TYPE,
} from './configurable-module-class';
import { DbClient } from './db.client';
import { DB_CLIENT } from './module-options';

@Module({
  providers: [DbClient, { provide: DB_CLIENT, useExisting: DbClient }],
  exports: [DbClient, DB_CLIENT],
})
export class DbClientModule extends ConfigurableModuleClass {
  static register(option: typeof OPTIONS_TYPE): DynamicModule {
    Logger.debug('Register DbClient');

    return {
      // your custom logic here
      ...super.register(option),
    };
  }

  static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    Logger.debug('RegisterAsync DbClient');
    return {
      // your custom logic here
      ...super.registerAsync(options),
    };
  }
}
