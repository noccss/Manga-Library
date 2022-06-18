import { Injectable } from '@nestjs/common';
import { Manga } from './manga.entity';

@Injectable()
export class MangaService {
  private mangas: Array<Manga> = [];

  public getOneManga(id: string): Manga {
    const mangaFounded = this.mangas.find((manga) => manga.id === id);

    return mangaFounded;
  }

  public getAllManga() {
    return this.mangas;
  }

  public createNewManga(manga: Manga): Manga {
    this.mangas.push(manga);

    return manga;
  }
}
