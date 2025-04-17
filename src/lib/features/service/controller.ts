import type { ServiceData } from "./schema";
import { db } from "$lib/db";

export namespace ServiceController {
  export function createOne(data: ServiceData) {
    return db.from("service").insert(data).select("id");
  }

  export function getMany(limit = 10) {
    return db.from("service").select("*").order("created_at", { ascending: false }).limit(limit);
  }

  export function searchMany(query: string, limit = 10) {
    return db
      .from("service")
      .select("*")
      .textSearch("full_text_search", query, {
        type: "phrase",
        config: "spanish"
      })
      .order("created_at", { ascending: false })
      .limit(limit);
  }
}