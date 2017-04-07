/**
 * Created by voler on 2017/2/23.
 */
var myUtil = require('../util');
var avalonModel = require('../models/avalon');

//1:mei 2:pai 3:zhong
//4:zao 5:ao  6:ci 7:mogan 8;mode
var roles5 = [1, 2, 3, 6, 7];
var roles6 = [1, 2, 3, 3, 6, 7];
var roles7 = [1, 2, 3, 3, 5, 6, 7];
var roles8 = [1, 2, 3, 3, 3, 4, 5, 6];
var roles9 = [1, 2, 3, 3, 3, 3, 6, 7, 8];
var roles10 = [1, 2, 3, 3, 3, 3, 5, 6, 7, 8];

var roomModel = avalonModel.roomModel;
/**
 * creat room && retrun roomID
 * @param maxPlayer Int
 * @param callback
 */
exports.createRoom = function createRoom(maxPlayer, callback) {
    var roomId = null;
    //creat randomRoomId
    var roomIdF = myUtil.creatRoomId();
    //creat Room
    roomModel.sync({force: false}).then(function () {
        // Table created
        return roomModel.create({
            roomId: roomIdF,
            maxPlayer: maxPlayer,
            nowPlayer: 1,
            player1: 0,
            player2: -1,
            player3: -1,
            player4: -1,
            player5: -1,
            player6: -1,
            player7: -1,
            player8: -1,
            player9: -1,
            player10: -1,
        }).then(function (project) {
            try {
                console.log("find id--->", project);
                callback(false, project);
            } catch (e) {
                callback(true, null);
            }
            return roomModel.findOne({where: {room_id: roomIdF}});
        });
    });
};

/**
 * join room && get room info
 * @param roomId
 * @param callback
 */
exports.joinRoom = function joinRoom(roomId, callback) {
    var newPlayer;
    var maxPlayer;
    console.log("roomId--->", roomId);
    roomModel.sync({force: false}).then(function () {
        // Table created
        return roomModel.findById(roomId).then(function (roomInfo) {
            newPlayer = roomInfo.nowPlayer + 1;
            maxPlayer = roomInfo.maxPlayer;
            if (maxPlayer < newPlayer-1) {
                callback(true, -1,roomInfo);
            } else {
                console.log("newPlayer----->", newPlayer);
                return roomModel.update({nowPlayer: newPlayer}, {where: {id: roomId}}).then(function (data) {
                    if(data<1){
                        callback(true, Number(data),roomInfo);
                    }else{
                        callback(false, Number(data),roomInfo);
                    }
                })
            }

        })
    });
};
