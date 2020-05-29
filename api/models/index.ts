import {Sequelize} from 'sequelize-typescript';
import * as path from 'path'
import Chat from './ts/chat'
import Contact from './ts/contact'
import Invite from './ts/invite'
import Message from './ts/message'
import Subscription from './ts/subscription'
import MediaKey from './ts/mediaKey'
import ChatMember from './ts/chatMember'

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'../../config/config.json'))[env]

const sequelize = new Sequelize({
  ...config,
  dialectModule: require('sqlite3'),
  logging: process.env.SQL_LOG==='true' ? console.log : false,
  models: [Chat,Contact,Invite,Message,Subscription,MediaKey,ChatMember]
})
const models = sequelize.models

export {
  sequelize,
  models,
}
