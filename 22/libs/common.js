function toDou(n){
    return n<10? '0'+n : n;
}

module.exports = {
    time2date: function (timestamp){
        var date = new Date(timestamp*1000);
        return date.getFullYear()+'-'+toDou(date.getMonth()+1)+'-'+toDou(date.getDate())+' '+toDou(date.getHours())+':'+toDou(date.getMinutes())+':'+toDou(date.getSeconds());
    }
}