import challenges from "../../utils/Routes"

export default function Homepage(){

    const routes = challenges
    return(
    <main  style={{display: "flex", flexDirection: "column"}}>
        {
            routes.map((item, key)=><a key={key} href={item.route}>{item.name}</a>)    
        }
    </main>
    )
}