import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbClientModule } from './db/db.module';
import { DbClientOptions } from './db/module-options';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        (): { dbConfig: DbClientOptions } => ({
          dbConfig: {
            host: 'localhost',
            port: 1234,
          },
        }),
      ],
    }),
    DbClientModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return config.getOrThrow<DbClientOptions>('dbConfig');
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
