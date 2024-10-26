import { GraphQLClient } from "graphql-request";
import type { Country } from "../api/types.ts";

// Accede a la variable de entorno
const api = import.meta.env.VITE_API_COUNTRIES;

const graphQLClient = new GraphQLClient(api);

export async function getCountries(): Promise<Country[]> {
  const query = `
  query {
    countries {
      name
      capital
      currency
		  languages{
        name
      }
      continent{
        name
      }
    }
  }
`;
  const data = await graphQLClient.request<{ countries: Country[] }>(query);
  return data.countries;
}
