import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
// import * as Sentry from "@sentry/nextjs"
export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        console.log('searchParams22', await  searchParams)
        // searchParams.then(params => {
        //     const { customerid, ticketId } = params;
        //     console.log('customerid, ticketId', customerid, ticketId)
        //     // rest of your code here
        //   });
        const { customerid, ticketId } = await  searchParams;
        console.log('customerid, ticketId', customerid, ticketId)
        if (!customerid && !ticketId) {
            return (
                <>
                    <h2 className="text-2xl mb-2">Ticket ID or Customer ID required to load ticket form</h2>
                    <BackButton title="Go Back" variant="default" />
                </>
            )
        }
        // New ticket form 
        if (customerid) {
            const customer = await getCustomer(parseInt(customerid))
            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerid} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            if (!customer.active) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerid} is not active.</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            // return ticket form 
            // console.log(customer)
        }
        // Edit ticket form 
        if (ticketId) {
            const ticket = await getTicket(parseInt(ticketId))
            if (!ticket) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            const customer = await getCustomer(ticket.customerid)
            // return ticket form 
            console.log('ticket: ', ticket)
            console.log('customer: ', customer)
        }
    } catch (e) {
        if (e instanceof Error) {
            // Sentry.captureException(e)
            throw e
        }
    }
}