import * as Prismic from "@prismicio/client";
import sm from "../../sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = Prismic.getRepositoryName(endpoint);

export function createClient(config = {} as any) {
  const client = Prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  });

  return client;
}
