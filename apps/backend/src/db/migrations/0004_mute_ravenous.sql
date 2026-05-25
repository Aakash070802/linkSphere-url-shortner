ALTER TABLE "analytics" DROP CONSTRAINT "analytics_url_id_urls_id_fk";
--> statement-breakpoint
ALTER TABLE "analytics" ADD CONSTRAINT "analytics_url_id_urls_id_fk" FOREIGN KEY ("url_id") REFERENCES "public"."urls"("id") ON DELETE cascade ON UPDATE no action;