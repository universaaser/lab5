// geolocation.js

// 定义 getGeolocation() 函数
function getGeolocation() {
    // 检查浏览器是否支持地理定位
    if (navigator.geolocation) {
        // 如果支持，尝试获取当前位置
        navigator.geolocation.getCurrentPosition(showGeolocation, handleLocationError);
    } else {
        // 如果不支持，更新页面内容
        document.getElementById('geolocation').innerHTML = "此浏览器不支持地理定位。";
    }
}

// 定义 showGeolocation() 函数
function showGeolocation(position) {
    // 获取纬度和经度
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // 更新页面内容以显示纬度和经度
    document.getElementById('geolocation').innerHTML = "纬度：" + latitude + "<br>经度：" + longitude;
}

// 定义 handleLocationError() 函数
function handleLocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "用户拒绝地理定位请求。"
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "位置信息不可用。"
            break;
        case error.TIMEOUT:
            x.innerHTML = "请求位置信息超时。"
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "发生未知错误。"
            break;
    }
}
