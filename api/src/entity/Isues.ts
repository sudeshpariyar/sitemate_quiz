import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Issue {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column({ length: 60, nullable: false })
  title!: string;

  @Column({ nullable: false })
  description!: string;
}
