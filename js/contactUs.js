// //创建和初始化地图函数：

/*初始化*/
var map = new BMap.Map("container", {
  minZoom: 5
}); // 创建地图实例
var point = new BMap.Point(116.404, 39.915); // 创建中心点坐标
map.centerAndZoom(point, 5); // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

var myGeo = new BMap.Geocoder(); // 创建地址解析器实例

/*添加控件*/
map.addControl(new BMap.ScaleControl()); //比例尺
// 地理位置信息切换

$(document).ready(function () {
  var time = null;

  $('#bg-bj').click(function () {
    var flag = $(this);
    if (flag.hasClass('bg-bj-active')) {
      flag.removeClass('bg-bj-active')
    } else {
      flag.addClass('bg-bj-active');
      $('#bg-jh').removeClass('bg-jh-active')
      $('#bg-gy').removeClass('bg-gy-active')
    }
  });
  $('#bg-jh').click(function () {
    var flag = $(this);
    if (flag.hasClass('bg-jh-active')) {
      flag.removeClass('bg-jh-active')
    } else {
      flag.addClass('bg-jh-active');
      $('#bg-bj').removeClass('bg-bj-active')
      $('#bg-gy').removeClass('bg-gy-active')
    }
  });
  $('#bg-gy').click(function () {
    var flag = $(this);
    if (flag.hasClass('bg-gy-active')) {
      flag.removeClass('bg-gy-active')
    } else {
      flag.addClass('bg-gy-active');
      $('#bg-bj').removeClass('bg-bj-active')
      $('#bg-jh').removeClass('bg-jh-active')
    }
  });

});
//  卡片点击事件