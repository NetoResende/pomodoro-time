import { Heading } from './component/heading/Heading'

import './styles/theme.css'
import './styles/global.css'

export interface AppProps { descricao: string}

export function App (){
    return (
        <>
            <Heading descricao= 'Olá component via propriedades'/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam ab maiores vel? Voluptas at animi commodi a porro accusamus!
            </p>
        </>
    )
}