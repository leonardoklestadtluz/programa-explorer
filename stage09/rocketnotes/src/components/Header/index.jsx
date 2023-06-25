import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profiler, Logout } from './styles'

export function Header() {
    return (
        <Container>
            <Profiler to="/profile">
                <img src="https://github.com/leonardoklestadtluz.png" alt="Imagem da foto de perfil do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Leonardo K. Luz</strong>
                </div>
            </Profiler>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}