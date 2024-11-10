import { db } from "@/db"
import { customers } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getCustomer(id: number) {
    console.log('devesh- getCustomer',id)
    const customer = await db.select()
        .from(customers)
        .where(eq(customers.id, id))

    console.log('customer[0]',id)
    return customer[0]
}