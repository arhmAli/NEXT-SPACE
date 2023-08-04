export const dynamic ='force-static'
import { Metadata } from "next"

export const  metadata:Metadata={
    title:"About us",
    description:"Welcome to next space a web app just like yours favourite myspace",
}
export default async function About(){
    return(
        <main>
            <h1>Next Space!</h1>
            <p>Welcome to next space a web app just like
                yours favourite myspace
            </p>
        </main>
    )
}