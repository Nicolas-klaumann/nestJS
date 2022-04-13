import { Module, Post } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';

@Module({
  controllers: [JogadoresController],
  providers: [JogadoresService]
})
export class JogadoresModule {}
