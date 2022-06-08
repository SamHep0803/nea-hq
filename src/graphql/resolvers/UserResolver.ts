import { Event } from "@/graphql/types/Event";
import { User } from "@/graphql/types/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
	@Query(() => [User])
	async users(): Promise<User[]> {
		const users = await User.find({
			relations: {
				bookings: true,
			},
		});
		return users;
	}

	@Query(() => User, { nullable: true })
	async user(@Arg("id") id: string): Promise<User | null> {
		const user = await User.findOne({
			where: { id },
			relations: { bookings: true },
		});
		return user;
	}

	@Mutation(() => User)
	async createUser(
		@Arg("name") name: string,
		@Arg("cid") cid: string
	): Promise<User> {
		const user = User.create({
			name,
			cid,
			bookings: [],
		});
		return await user.save();
	}

	@Mutation(() => User)
	async bookUser(
		@Arg("userId") userId: string,
		@Arg("eventId") eventId: string
	): Promise<User | null> {
		const user = await User.findOne({ where: { id: userId } });
		if (!user) return null;

		const event = await Event.findOne({
			where: { id: eventId },
			relations: { bookings: true },
		});
		if (!event) return null;

		user.bookings.push(event);
		console.log(user);
		return await user.save();
	}

	@Mutation(() => Boolean)
	async deleteUser(@Arg("id") id: string): Promise<boolean> {
		await User.delete(id);
		return true;
	}
}
