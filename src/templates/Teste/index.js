import { useParams } from "react-router-dom";

const Teste = () => {
    let {d} = useParams()
    return(<h1>{d}</h1>)
}

export default Teste;