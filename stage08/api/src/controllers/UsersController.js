const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
  /**
   * index -> GET para listar vários registros
   * show -> GET para exibir um registro específico
   * create -> POST para criar um registro
   * update -> PUT para atualizar um registro
   * delete -> DELETE para remover um registro
   */

  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExists) {
      throw new AppError(`[ERROR]: Este e-mail: ${email}, já existe!`)
    }

    const hashedPassword = await hash(password, 8)

    await database.run(
      `INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)`,
      [name, email, hashedPassword]
    )

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const { id } = request.params

    const database = await sqliteConnection()
    const user = await database.get(`
      SELECT * FROM users
      WHERE id = (?)
    `, [id])

    if (!user) {
      throw new AppError(`[ERROR]: Usuário${user}, não foi encontrado!`)
    }

    const userWithUpdatedEmail = await database.get(`
      SELECT * FROM users
      WHERE email = (?)
    `, [email])

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError(`[ERROR]: Este e-mail: ${email}, já está em uso!`)
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError(
        `[ERROR]: Você precisa informar a senha antiga para definir uma nova senha.`)
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError(`[ERROR]: A senha antiga não confere.`)
      }

      user.password = await hash(password, 8)
    }

    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, id]
    )

    return response.status(200).json()
  }
}

module.exports = UsersController