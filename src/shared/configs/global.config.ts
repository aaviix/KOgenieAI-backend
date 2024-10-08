
import { API_PREFIX } from '../constants/global.constants';
import { Config } from './config.interface';

export const GLOBAL_CONFIG: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Nestjs Prisma Starter',
    description: 'The nestjs API description',
    version: '1.5',
    path: API_PREFIX,
  },
  security: {
    expiresIn: 3600 * 730, // 24h
    bcryptSaltOrRound: 10,
  },
};
