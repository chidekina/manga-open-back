const supabase = require("../config/supabase");

class UserModel {
    static async read(filter = {}) {
        let query = supabase.from('users').select('*');
        if (filter.login) {
            query = query.eq('login', filter.login);
        }
        const { data, error } = await query;
        if (error) throw error;
        return data.map(user => ({
            id: user.id,
            name: user.name,
            login: user.login,
            password: user.password
        }));
    };

    static async getById(id) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        return {
            id: data.id,
            name: data.name,
            login: data.login,
            password: data.password
        };
    };

    static async create(user) {
        // Remove o campo id, se existir
        const { id, ...userData } = user;
        const { data, error } = await supabase
            .from('users')
            .insert([userData])
            .select('*')
            .single();

        if (error) throw error;

        return {
            id: data.id,
            name: data.name,
            login: data.login,
            password: data.password
        };
    };

    static async update(id, user) {
        // Remove o campo id, se existir
        const { id: _, ...userData } = user;
        const { data, error } = await supabase
            .from('users')
            .update(userData)
            .eq('id', id)
            .select('*')
            .single();

        if (error) throw error;

        return {
            id: data.id,
            name: data.name,
            login: data.login,
            password: data.password
        };
    };

    static async delete(id) {
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id', id)

        if (error) throw error;

        return { success: true };
    };
};

module.exports = UserModel;