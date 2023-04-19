import { AxiosInstance } from "axios";
import { LooseRequest } from "./types/request/create";

interface Subscription {
  create: {
    loose: (body: LooseRequest) => Promise<any>;
  };
}

class subscription implements Subscription {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public get create() {
    const loose = async (body: LooseRequest) => {
      try {
        const { data } = await this.api.post("/subscriptions", body);
        return data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    return {
      loose,
    };
  }
}

export { subscription as Subscription };
