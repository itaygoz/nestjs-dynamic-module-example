import { Inject, Injectable } from '@nestjs/common';
import { DbClient } from './db/db.client';
import { DB_CLIENT } from './db/module-options';

@Injectable()
export class AppService {
  constructor(@Inject(DB_CLIENT) private dbClient: DbClient) {}

  getHello() {
    return {
      message: 'Hello World!',
      dbConfig: { ...this.dbClient.getConnectionDetails() },
    };
  }
}
