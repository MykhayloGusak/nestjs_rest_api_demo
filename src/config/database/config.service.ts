import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with database config based operations.
 *
 * @class
 */
@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('db.port');
  }

  get host(): string {
    return this.configService.get<string>('db.host');
  }

  get name(): string {
    return this.configService.get<string>('db.name');
  }
}
