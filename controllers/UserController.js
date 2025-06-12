const UserModel = require("../models/UserModel");

class UserController {
    async getAll(req, res) {
        try {
            const filter = {};
            if (req.query.login) {
                filter.login = req.query.login;
            };
            const data = await UserModel.getAll(filter);
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao buscar usuários.' });
        };
    };
    // http://localhost:3000/users/:id
    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await UserModel.getById(id);
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao buscar usuário.' });
        };
    };

    async create(req, res) {
        try {
            const body = req.body;
            await UserModel.create(body);
            return res.status(201).json({
                message: 'Usuário cadastrado com sucesso.'
            });
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao cadastrar usuário.' });
        };
    };

    async update(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;
            await UserModel.update(id, body);
            return res.json({
                message: 'Usuário atualizado com sucesso.'
            });
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao atualizar usuário.' });
        };
    };

    async delete(req, res) {
        try {
            const id = req.params.id
            await UserModel.delete(id);
            return res.json({
                message: 'Usuário deletado com sucesso.'
            });
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao deletar usuário.' });
        };
    }
};

module.exports = UserController;

// http://localhost:3000?login=fablilson
// name: fablilson
// user: fablilson@email.com
// senha: falbilson123