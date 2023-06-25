import { Container } from './styles'
import { Tag } from '../Tag'

// eslint-disable-next-line react/prop-types
export function Note({data, ...rest}) {
    return (
        <Container {...rest}>
            {/* eslint-disable-next-line react/prop-types */}
            <h1>{data.title}</h1>

            {
                // eslint-disable-next-line react/prop-types
                data.tags &&
                <footer>
                    {
                        // eslint-disable-next-line react/prop-types
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
        </Container>
    )
}