/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { atividadesModule } from './atividades/atividades.module';
import { treinamentoModule } from './treinamento/treinamento.module';
import { requisito_treinamentoModule } from './requisito_treinamento/requisito_treinamento.module';
import { treinamento_realizadoModule } from './treinamento_realizado/treinamento_realizado.module';
import { colaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [userModule, atividadesModule, treinamentoModule, requisito_treinamentoModule, treinamento_realizadoModule, colaboradorModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
