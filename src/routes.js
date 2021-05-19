const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name: "Paulo",
    email: "paulo@alobebe.com.br",
    password_hash: "21s21v2df3bf2b1f2"
});

module.exports = routes;