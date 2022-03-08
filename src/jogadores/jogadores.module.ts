import { Module, Post } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';

@Module({
  controllers: [JogadoresController]
})
export class JogadoresModule {

    @Post()
    async criarAtualizarJogadr()
    {
        return JSON.stringify({
            "nome": "Nicolas"
        })
    }

}
