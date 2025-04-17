import type { ServiceData } from "@features/service/schema";
import { db } from "$lib/db";
import { error } from "@sveltejs/kit"
import { ServiceController } from "@features/service/controller";

export async function load() {
  const { data, error: err } = await ServiceController.getMany(10);
  
  if (err) {
    error(500, "Error fetching services");
  }

  return { services: data as ServiceData[] }
}