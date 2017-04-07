/**
 * Created by voler on 2017/2/20.
 */
exports.shuffle = function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    function test() {
        console.log("test");
    }

    return array;
};

//返回一个时间戳+随机数的临时房间号
exports.creatRoomId = function creatRoomId() {
    var timestamp = new Date().getTime().toString();
    var radomNum = parseInt(Math.random() * 1000).toString();
    var roomId = timestamp+radomNum;
    console.log("romm_id--->",timestamp, radomNum,roomId);
    return roomId;
}
