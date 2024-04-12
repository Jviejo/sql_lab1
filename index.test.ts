import { expect, test, afterAll } from "bun:test";
import { Database } from "bun:sqlite";
const db = new Database("./Northwind_small.sqlite");


test("contar los clientes", () => {
    // act
    const query = db.query<any, any>("select count(*) contador from customer");
    // assert
    console.log(query.all()[0])
    expect(query.all()[0].contador).toBe(91);
})

test("contar los productos", () => {
    // act
    const query = db.query<any, any>("select count(*) contador from products");
    // assert
    
    expect(query.all()[0].contador).toBe(91);
})



