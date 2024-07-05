const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { username, password, first_name, last_name } = req.body;
    try {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(409).json({ error: 'Username already exists' });
        }
        const password_hash = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password_hash, first_name, last_name });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });

        if (user && await bcrypt.compare(password, user.password_hash)) {
            res.status(200).json({
                "email": user.username,
                "first_name": user.first_name,
                "last_name": user.last_name
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};