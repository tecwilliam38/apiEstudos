import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem vindo William ferreira!';
  }
  getObject(): any{
    let objeto = {
      id:1,
      name: "William Ferreira da Silva"
    }
    return objeto
  };
}
