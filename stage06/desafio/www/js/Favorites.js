import { GithubUser } from "./GithubUser.js"

/**
 * classe que irá conter a lógica dos dados
 * forma de como os dados estruturados
 */
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entriesDatas = JSON.parse(localStorage.getItem("@github-favorites:")) || []
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entriesDatas))
  }

  async add(username) {
    try {
      const userExists = this.entriesDatas.find(entry => entry.login === username)

      if (userExists) {
        throw new Error(`[ ! ATENÇÃO ! ]: ${username}, já está cadastrado!`)
      }

      const user = await GithubUser.search(username)

      if (user.login === undefined) {
        throw new Error(`[ ! ERRO !]: ${username}, não foi encontrado!`)
      }

      this.entriesDatas = [user, ...this.entriesDatas]
      this.update()
      this.save()

    } catch (error) {
      alert(error.message)
    }
  }

  delete(user) {
    const filteredEntries = this.entriesDatas.filter(entry => entry.login !== user.login)

    this.entriesDatas = filteredEntries
    this.update()
    this.save()
  }
}

/**
 * classe que irá criar a visualização e 
 * eventos do HTML
 */
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector("table tbody")
    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector(".search button")
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input")

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entriesDatas.forEach(user => {
      const row = this.createRow()

      row.querySelector(".user img").src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Imagem do perfil de ${user.name}`
      row.querySelector(".user a").href = `https://github.com/${user.login}`
      row.querySelector(".user p").textContent = user.name
      row.querySelector(".user span").textContent = user.login
      row.querySelector(".repositories").textContent = user.public_repos
      row.querySelector(".followers").textContent = user.followers
      row.querySelector(".remove").onclick = () => {
        const deleteLine = confirm(`Você está deletando a linha do ${user.login}, tem certeza?`)

        if (deleteLine) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement("tr")

    tr.innerHTML = `
        <td class="user" >
        <img src="https://www.github.com/leonardoklestadtluz.png" alt="Imagem de perfil do usuário no Github">
        <a href="https://www.github.com/leonardoklestadtluz" target="_blank">
          <p>Leonardo K. Luz</p>
          <span class="username">/leonardoklestadtluz</span>
        </a>
      </td>
      <td class="repositories">177</td>
      <td class="followers">23478</td>
      <td class="action">
        <button class="remove">Remover</button>
      </td>
      `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove()
    })
  }
}