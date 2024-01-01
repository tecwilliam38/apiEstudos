import { DataSource, Connection, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    // useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuario),
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: ['DATA_SOURCE'],
  },
];