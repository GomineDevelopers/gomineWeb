// //创建和初始化地图函数：



$(document).ready(function () {
  /*初始化*/
  var map = new BMap.Map("container", {
    minZoom: 20
  }); // 创建地图实例

  var point = new BMap.Point(116.499868, 39.921244); // 创建中心点坐标
  map.centerAndZoom(point, 20); // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  var myGeo = new BMap.Geocoder(); // 创建地址解析器实例

  /*添加控件*/
  map.addControl(new BMap.ScaleControl()); //比例尺
  // 地理位置信息切换
  //地图跳转
  var data_info = [
    [116.499868, 39.921244, "地址：北京市 朝阳区 住邦2000商务楼 1号楼B702-703"],
    [119.671047, 29.137416, "金华市 婺城区 金华电子商务创 业园502-503"],
    [106.652481, 26.627495, "贵阳市 观山湖区 贵阳国家高新 技术产业开发区（毕节路）"]
  ];
  var opts = {
    width: 250, // 信息窗口宽度
    height: 80, // 信息窗口高度
    title: "所在区域", // 信息窗口标题
  };

  $('#bg-bj').click(function () {
    map.setCenter(new BMap.Point(116.499868, 39.921244))
    var markerOne = new BMap.Marker(new BMap.Point(116.499868, 39.921244)); // 创建标注
    var content = "地址：北京市 朝阳区 住邦2000商务楼 1号楼B702-703";
    map.addOverlay(markerOne); // 将标注添加到地图中
    var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
    map.openInfoWindow(infoWindow, new BMap.Point(116.499868, 39.921244)); //开启信息窗口
    var flag = $(this);
    if (flag.hasClass('bg-bj-active')) {} else {
      flag.addClass('bg-bj-active');
      $('#bg-jh').removeClass('bg-jh-active')
      $('#bg-gy').removeClass('bg-gy-active')
    }
  });
  $('#bg-jh').click(function () {
    map.setCenter(new BMap.Point(119.671047, 29.137416))
    var markerTwo = new BMap.Marker(new BMap.Point(119.671047, 29.137416)); // 创建标注
    var content = "金华市 婺城区 金华电子商务创 业园502-503";
    map.addOverlay(markerTwo); // 将标注添加到地图中
    var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
    map.openInfoWindow(infoWindow, new BMap.Point(119.671047, 29.137416)); //开启信息窗口
    var flag = $(this);
    if (flag.hasClass('bg-jh-active')) {} else {
      flag.addClass('bg-jh-active');
      $('#bg-bj').removeClass('bg-bj-active')
      $('#bg-gy').removeClass('bg-gy-active')
    }
  });

  $('#bg-gy').click(function () {
    map.setCenter(new BMap.Point(106.652481, 26.627495))
    var flag = $(this);
    if (flag.hasClass('bg-gy-active')) {} else {
      flag.addClass('bg-gy-active');
      $('#bg-bj').removeClass('bg-bj-active')
      $('#bg-jh').removeClass('bg-jh-active')
    }
  });

});
//  卡片点击事件