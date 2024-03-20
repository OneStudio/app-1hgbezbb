import { action, cache, redirect } from "@solidjs/router";
import { client } from "~/lib/db.ts";


    export const createCustomer = action(async (data: FormData) => {
      "use server";
      const columns: string[] = [];
      const values: any[] = [];
      for (const [key, value] of data.entries()) {
        columns.push(key);
        values.push(`'${value}'`);
      }
      const insertQuery = `INSERT INTO 'customer' (${columns.join(", ")}) VALUES (${values.join(", ")})`;
      const result = await client.execute(insertQuery);
      if (result?.rowsAffected) return redirect(`/customers/${result.lastInsertRowid}`);
    })
    



    export const deleteCustomer = action(async (id: string) => {
      "use server";
      const result = await client.execute({
        sql: "DELETE FROM 'customer' WHERE id = ?",
        args: [id],
      });
      if (result.rowsAffected) return redirect("/customers");
    })
    



    export const getCustomer = cache(async (id: string) => {
      "use server";
      const result = await client.execute({
        sql: "SELECT * FROM 'customer' WHERE id = ?",
        args: [id],
      });
      return result?.rows?.[0] ?? {};
    }, "customer")
    



    export const getCustomers = cache(async () => {
      "use server";
      const result = await client.execute("SELECT * FROM 'customer'");
      return result?.rows ? { columns: result.columns, rows: result.rows } : {}
    }, "customers")
    



    export const updateCustomer = action(async (id: string, data: FormData) => {
      "use server";
      const columns: string[] = [];
      const values: any[] = [];
      for (const [key, value] of data.entries()) {
        columns.push(key);
        values.push(`'${value}'`);
      }
      const updateQuery = `UPDATE 'customer' SET ${columns.map((col, i) => `${col} = ${values[i]}`).join(", ")} WHERE id = ${id}`;
      const result = await client.execute(updateQuery);
      if (result?.rowsAffected) return redirect(`/customers/${id}`);
    })
    