/**
 * 深拷贝的原始实现
 */
function deepCopy(data){

    var newData = data.constructor == Array ? [] : {};

    if(typeof data != 'object'){
        return data;
    }else if(!window.JSON){
    /*使用JSON的方式实现拷贝*/
        var str = JSON.stringify(data);
        newData = JSON.parse(str);
    }else{
     /*递归实现深拷贝*/
        for(var i in data){
            newData[i] = typeof data[i] == 'object' ? deepCopy(data[i]) : data[i];
        }
    }

    return newData;
}
