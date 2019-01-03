const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const db = require('./database');
const defaultImage = "http://img-cf.y8.com/assets/y8/default_avatar-b95766a9a753f0006659f8cc583a705d09e260787fccdc47bfdabca911b80666.png";
// An additional version of the default picture in case if it is needed:
// const defaultImage = 'http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-hi.png';


const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING(1000),
        defaultValue: defaultImage
    },
    gpa: {
        type: Sequelize.INTEGER,
        [Op.between]: [0.0, 4.0]
    }
})

module.exports = Student