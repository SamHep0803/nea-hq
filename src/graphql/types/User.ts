import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field()
	@Column()
	cid: string;

	@Field()
	@Column()
	name: string;

	@Field(() => String)
	@Column()
	createdAt: Date;

	@Field(() => String)
	@Column()
	updatedAt: Date;

	@Field(() => [Event])
	@Column()
	bookings: Event[];
}
