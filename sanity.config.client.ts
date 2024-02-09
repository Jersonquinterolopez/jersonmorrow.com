import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.SANIY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-24",
};

export const sanityClient = createClient(config);
