import { Body, Controller, Post } from "@nestjs/common";
import { Manga } from "./manga.entity";
import { MangaService } from "./manga.services";

@Controller('manga')
export class MangaController {
  constructor(private mangaService: MangaService) {}

  @Post()
  public createNewManga(@Body() manga: Manga): Manga {
    const mangaCreated = this.mangaService.createNewManga(manga);

    return mangaCreated;
  }
}
