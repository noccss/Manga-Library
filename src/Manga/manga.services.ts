import { Injectable } from "@nestjs/common";
import { Manga } from "./manga.entity";

@Injectable()
export class MangaService {
  private mangas: Array<Manga> = [];

  public createNewManga(manga: Manga): Manga {
    this.mangas.push(manga);

    return manga;
  }
}