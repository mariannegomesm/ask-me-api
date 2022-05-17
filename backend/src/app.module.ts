import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './users/user.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [CommentsModule, UserModule, TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: '202010101',
    database: 'ASK_ME',
    entities: [
        __dirname + '/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
    extra: {
      trustServerCertificate: true,
    }
  })],
})

export class AppModule {}
