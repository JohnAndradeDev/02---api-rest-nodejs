import { Knex } from "knex"; // quero reaproveitar todos tipos que já exitem no knex

declare module "knex/types/tables" {
  export interface Tables {
    transactions: {
      id: string;
      title: string;
      amount: number;
      created_at: string;
      session_id?: string;
    };
  }
}
