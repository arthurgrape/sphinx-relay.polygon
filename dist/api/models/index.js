"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const path = require("path");
const chat_1 = require("./ts/chat");
const contact_1 = require("./ts/contact");
const invite_1 = require("./ts/invite");
const message_1 = require("./ts/message");
const subscription_1 = require("./ts/subscription");
const mediaKey_1 = require("./ts/mediaKey");
const chatMember_1 = require("./ts/chatMember");
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../../config/config.json'))[env];
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({}, config), { dialectModule: require('sqlite3'), logging: process.env.SQL_LOG === 'true' ? console.log : false, models: [chat_1.default, contact_1.default, invite_1.default, message_1.default, subscription_1.default, mediaKey_1.default, chatMember_1.default] }));
exports.sequelize = sequelize;
const models = sequelize.models;
exports.models = models;
//# sourceMappingURL=index.js.map