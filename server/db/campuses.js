const Sequelize = require('Sequelize')
const db = require('./database')
const defaultImage = "http://images.cdn4.stockunlimited.net/preview1300/campus-building_1967238.jpg"
// An additional version of the default picture in case if it is needed:
// const defaultImage = 'http://cdn.shortpixel.ai/client/q_glossy,ret_img,w_587/https://sqbx.com/wp-content/uploads/2015/07/campus.png'


const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING(1000),
        defaultValue: defaultImage
    },
    address: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT
    }
});


module.exports = Campus