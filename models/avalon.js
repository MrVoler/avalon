/**
 * Created by voler on 2017/2/22.
 */
var Sequelize = require('sequelize');

 var sequelize = new Sequelize('bdm258386115_db', 'bdm258386115', 'wf5201314', {
    host: 'bdm258386115.my3w.com',
    dialect: 'mysql',
});
exports.roomModel = sequelize.define('avalon', {
    roomId: {
        type: Sequelize.TEXT,
        field: 'room_id'
    }, maxPlayer: {
        type: Sequelize.INTEGER,
        field: 'max_player'
    }, nowPlayer: {
        type: Sequelize.INTEGER,
        field: 'now_player'
    }, player1: {
        type: Sequelize.INTEGER,
        field: 'player_1'
    }, player2: {
        type: Sequelize.INTEGER,
        field: 'player_2'
    }, player3: {
        type: Sequelize.INTEGER,
        field: 'player_3'
    }, player4: {
        type: Sequelize.INTEGER,
        field: 'player_4'
    }, player5: {
        type: Sequelize.INTEGER,
        field: 'player_5'
    }, player6: {
        type: Sequelize.INTEGER,
        field: 'player_6'
    }, player7: {
        type: Sequelize.INTEGER,
        field: 'player_7'
    }, player8: {
        type: Sequelize.INTEGER,
        field: 'player_8'
    }, player9: {
        type: Sequelize.INTEGER,
        field: 'player_9'
    }, player10: {
        type: Sequelize.INTEGER,
        field: 'player_10'
    }

}, {
    timestamps: false,
    freezeTableName: true,
});