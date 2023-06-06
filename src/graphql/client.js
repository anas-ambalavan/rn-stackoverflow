import { Client, cacheExchange, fetchExchange } from "urql";

const client = new Client({
  url: "https://jajireddigudem.stepzen.net/api/stackoverflow/__graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions:{
    headers:{
        Authorization: "ApiKey jajireddigudem::stepzen.net+1000::a7f9e0e0aeb134327854021b0bfcb67d4241d8b8e5ecfdac1ed84cadedf3ebbf"
    }
  }
});
export default client;
