import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  //controller = lida com as chamadas http: get, post e put(rotas)
  // controllers: [AppController],
  //service = classe generica(conexão com banco de dados, repos. Define funcionalidades como funcoes)
  // providers: [PrismaService],
})
export class AppModule {}
//injeção de dependencia. Quem instancia a classe, injeta as dependecias. Ex: controller chama appService(prodivder) essa tendo o decorator @injectable. Nest passa para o controller a classe como parametro
