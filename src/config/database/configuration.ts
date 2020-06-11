import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  host: process.env.DB_CONNECTION_STRING || 'mongodb://localhost:',
  port: parseInt(process.env.DB_PORT, 10) || 27017,
  name: process.env.DB_NAME || '/nest-demo',
}));
