//express_demo.js 文件
var express = require('express');
var bodyParser = require('body-parser');
var roomHelper = require('./controller/roomHelper');

var app = express();
// need it...
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/create_room', function (req, res) {
    var reqJson = {
        room_id: null,
        msg: ""
    };
    response = {
        max_player: req.query.max_player,
    };
    if (response.max_player >= 5 && response.max_player <= 10) {
        roomHelper.createRoom(Number(response.max_player), function (err, room) {
            var reqJson = {
                room_info: {
                    room_id: null,
                    max_player: 5,
                    now_player: 1,
                    player_1: -1,
                    player_2: -1,
                    player_3: -1,
                    player_4: -1,
                    player_5: -1,
                    player_6: -1,
                    player_7: -1,
                    player_8: -1,
                    player_9: -1,
                    player_10: -1,
                },
                msg: ""
            };
            if (!err) {
                reqJson.room_info.room_id = room.id;
                reqJson.room_info.max_player = room.maxPlayer;
                reqJson.room_info.now_player = room.nowPlayer;
                reqJson.room_info.player_1 = room.player1;
                reqJson.room_info.player_2 = room.player2;
                reqJson.room_info.player_3 = room.player3;
                reqJson.room_info.player_4 = room.player4;
                reqJson.room_info.player_5 = room.player5;
                reqJson.room_info.player_6 = room.player6;
                reqJson.room_info.player_7 = room.player7;
                reqJson.room_info.player_8 = room.player8;
                reqJson.room_info.player_9 = room.player9;
                reqJson.room_info.player_10 = room.player10;
                reqJson.msg = "创建成功！";
            } else {
                reqJson.room_info = null;
                reqJson.msg = "创建失败，请稍后再试～";
            }
            res.send(reqJson);
            res.end(JSON.stringify(response));
        });
    } else {
        reqJson.room_info = null;
        reqJson.msg = "创建失败，只能创建5-10人的房间噢～";
        res.send(reqJson);
        res.end(JSON.stringify(response));
    }
});

app.get('/api/join_room', function (req, res) {
    var reqJson = {
        msg: "",
        is_join:false,
        roomInfo :{}
    };
    response = {
        room_id: req.query.room_id,
    };
    roomHelper.joinRoom(Number(response.room_id),function (err,data,roomInfo){
        if (data == -1) {
            reqJson.msg = "房间已满";
        } else if (data == 0) {
            reqJson.msg = "加入失败，请稍后再试";
        }else {
            reqJson.msg = "加入房间成功";
            reqJson.is_join = !err;
            reqJson.roomInfo = roomInfo;
        }
        res.send(reqJson);
        res.end(JSON.stringify(response));
    });


});


app.post('/api/process_post', function (req, res) {
    // 输出 JSON 格式
    response = {
        A: req.body.AA,
        B: req.body.BB,
    };
    var num = parseInt(response.A) + parseInt(response.B);
    var numJson = {
        num: num,
    };
    res.send(numJson);
    res.end(JSON.stringify(response));
})


var server = app.listen(2333, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})