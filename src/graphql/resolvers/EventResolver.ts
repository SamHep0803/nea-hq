import { Event } from "@/graphql/types/Event";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class EventResolver {
	@Query(() => [Event])
	async events(): Promise<Event[]> {
		const events = await Event.find({
			relations: {
				bookings: true,
			},
		});
		return events;
	}

	@Query(() => Event, { nullable: true })
	async event(@Arg("id") id: string): Promise<Event | null> {
		const event = await Event.findOne({
			where: { id },
			relations: { bookings: true },
		});
		return event;
	}

	@Mutation(() => Event)
	async createEvent(
		@Arg("name") name: string,
		@Arg("description") description: string,
		@Arg("bannerUrl") bannerUrl: string
	): Promise<Event> {
		const event = Event.create({
			name,
			description,
			bannerUrl,
		});
		return await event.save();
	}

	@Mutation(() => Event)
	async updateEvent(
		@Arg("id") id: string,
		@Arg("name") name: string,
		@Arg("description") description: string,
		@Arg("bannerUrl") bannerUrl: string
	): Promise<Event | null> {
		const event = await Event.findOne({ where: { id } });
		if (!event) return null;
		if (name) event.name = name;
		if (description) event.description = description;
		if (bannerUrl) event.bannerUrl = bannerUrl;
		return await event.save();
	}

	@Mutation(() => Boolean)
	async deleteEvent(@Arg("id") id: string): Promise<boolean> {
		await Event.delete(id);
		return true;
	}
}
