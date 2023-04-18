import { AxiosInstance } from "axios";

class webhook {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async find(hook_id?: string): Promise<Object> {
    if (hook_id) {
      try {
        const { data } = await this.api.get(`/hooks/${hook_id}`);
        return data;
      } catch (error: any) {
        return error;
      }
    }

    try {
      const { data } = await this.api.get(`/hooks`);
      return data;
    } catch (error: any) {
      return error;
    }
  }

  public async send(hook_id: string): Promise<{
    [key: string]: any;
  }> {
    try {
      const { data } = await this.api.post(`/hooks/${hook_id}/retry`);
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

export { webhook as Webhook };
