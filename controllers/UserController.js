const UserModel = require("../models/UserModel");

class UserController {

    async read(req, res) {
        try {
            const filter = {};
            if (req.query.login) {
                filter.login = req.query.login;
            }
            const data = await UserModel.read(filter);
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao buscar usuários.' });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await UserModel.getById(id);
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao buscar usuário.' });
        }
    }

    async create(req, res) {
        try {
            const body = req.body;
            await UserModel.create(body);
            return res.status(201).json({
                message: 'Usuário criado com sucesso.'
            });
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao criar usuário.' });
        }
    }

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
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await UserModel.delete(id);
            return res.json({
                message: 'Usuário deletado com sucesso.'
            });
        } catch (error) {
            return res.status(500).json({ error: error.message || 'Erro ao deletar usuário.' });
        }
    }
};

module.exports = UserController;