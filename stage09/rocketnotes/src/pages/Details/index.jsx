import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            O React permite que você crie interfaces de usuário a partir de peças individuais chamadas componentes. Crie seus próprios componentes React como Thumbnail , LikeButton e Video . Em seguida, combine-os em telas inteiras, páginas e aplicativos.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.roquetseat.com.br
              </a></li>
              <li><a href="#">https://www.roquetseat.com.br
              </a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}