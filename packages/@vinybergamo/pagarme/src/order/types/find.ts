interface FindParams {
  code?: string;
  status?: string;
  customer_id?: string;
  created_since?: Date;
  created_until?: Date;
  page?: number;
  size?: number;
}

export type Find = FindParams;
