import { Module } from '@nestjs/common';
import { MangaModule } from './Manga/manga.module';
import { UserModule } from './Users/users.module';

@Module({
  imports: [UserModule, MangaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
