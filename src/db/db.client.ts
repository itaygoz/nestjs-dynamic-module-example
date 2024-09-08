import { Inject, Injectable, Logger } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './configurable-module-class';
import { DbClientOptions } from './module-options';

@Injectable()
export class DbClient {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: DbClientOptions) {
    Logger.debug(
      `Connected to db at ${options.host}:${options.port}`,
      DbClient.name,
    );
  }

  getConnectionDetails() {
    return this.options;
  }
}
