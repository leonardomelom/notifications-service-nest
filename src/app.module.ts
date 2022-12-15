import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  //controller = lida com as chamadas http: get, post e put(rotas)
  controllers: [AppController],
  //service = classe generica(conexão com banco de dados, repos. Define funcionalidades como funcoes)
  providers: [PrismaService],
})
export class AppModule {}
//injeção de dependencia. Quem instancia a classe, injeta as dependecias. Ex: controller chama appService(prodivder) essa tendo o decorator @injectable. Nest passa para o controller a classe como parametro
