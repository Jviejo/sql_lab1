import { expect, test } from "bun:test";
import { Database } from "bun:sqlite";

const db = new Database("./Northwind_small.sqlite");


test("Test 1", () => {
    const query = db.query("select * from customer limit 2");
    expect(query.all().length).toBe(2);
})

