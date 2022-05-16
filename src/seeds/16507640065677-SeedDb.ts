import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb16507640065677 implements MigrationInterface {
  name = 'SeedDb16507640065677';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );
    await queryRunner.query(
      // password 123
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$6sFVH62Lw5fhSlGo2iO80.iwJHrD44ZKFu5FfhBBhK2DnE0x2zm0C')`,
    );
    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'coffee,dragons', 1), ('second-article', 'Second article', 'Second article description', 'Second article body', 'coffee,dragons', 1)`,
    );
  }

  public async down(): Promise<void> {
    console.log('Nothing here');
  }
}
