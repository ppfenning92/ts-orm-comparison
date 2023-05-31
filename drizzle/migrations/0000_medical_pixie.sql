CREATE TABLE IF NOT EXISTS "drizzle_humans" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid(),
	"name" varchar(200) NOT NULL,
	"quote" text,
	"color" varchar,
	"ip" varchar(15),
	"age" integer,
	"dob" timestamp
);
