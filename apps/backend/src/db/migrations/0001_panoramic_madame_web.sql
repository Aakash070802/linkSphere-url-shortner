CREATE TABLE "urls" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"original_url" text NOT NULL,
	"short_code" text NOT NULL,
	"clicks" integer DEFAULT 0 NOT NULL,
	"expires_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "urls_short_code_unique" UNIQUE("short_code")
);
--> statement-breakpoint
CREATE TABLE "analytics" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url_id" uuid NOT NULL,
	"ip_address" text NOT NULL,
	"user_agent" text,
	"country" text,
	"city" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "urls" ADD CONSTRAINT "urls_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "analytics" ADD CONSTRAINT "analytics_url_id_urls_id_fk" FOREIGN KEY ("url_id") REFERENCES "public"."urls"("id") ON DELETE no action ON UPDATE no action;