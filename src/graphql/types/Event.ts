import { User } from "@/graphql/types/User";
import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Event extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	bannerUrl: string;

	@Field(() => String)
	@Column()
	createdAt: Date;

	@Field(() => String)
	@Column()
	updatedAt: Date;

	@Column()
	bookings: User[];
}
