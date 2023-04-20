interface Close {
  status: "paid" | "canceled" | "failed";
}

export type CloseRequest = Close;
