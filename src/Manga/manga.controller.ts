import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Manga } from './manga.entity';
import { MangaService } from './manga.services';

@Controller('manga')
export class MangaController {
  constructor(private mangaService: MangaService) {}

  @Get(':id')
  public getOneManga(@Param('id') id: string): Manga {
    const mangaFounded = this.mangaService.getOneManga(id);

    return mangaFounded;
  }

  @Get()
  public getAllManga() {
    return this.mangaService.getAllManga();
  }

  @Post()
  public createNewManga(@Body() manga: Manga): Manga {
    const mangaCreated = this.mangaService.createNewManga(manga);

    return mangaCreated;
  }
}
