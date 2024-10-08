import { ConfigurableModuleBuilder } from '@nestjs/common';
import { DbClientOptions } from './module-options';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<DbClientOptions>().build();
