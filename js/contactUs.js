// //创建和初始化地图函数：
$(document).ready(function () {
  /*初始化*/
  var map = new BMap.Map("container"); // 创建地图实例
  var point = new BMap.Point(116.499868, 39.921244); // 创建中心点坐标
  map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
  map.disableScrollWheelZoom(); //开启鼠标滚轮缩放
  map.disableDragging();
  /*添加控件*/
  map.addControl(new BMap.ScaleControl()); //比例尺
  // 地理位置信息切换
  var pointDef = new BMap.Point(116.499868, 39.921244);
  var cententDef = "北京市 朝阳区 住邦2000商务楼1号楼B702-703";
  var titleDef = "GOMINE-北京总部";
  setAddressAndWindow(pointDef, cententDef, titleDef);

  function setAddressAndWindow(point, content, Localtitle) {
    map.setCenter(point);
    map.panTo(point);
    var markerOne = new BMap.Marker(point); // 创建标注
    var opts = {
      width: 250, // 信息窗口宽度
      height: 80, // 信息窗口高度
      title: Localtitle, // 信息窗口标题
    };
    map.addOverlay(markerOne); // 将标注添加到地图中
    var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
    map.openInfoWindow(infoWindow, point); //开启信息窗口
  }
  $('#bg-bj').click(function () {
    var pointBj = new BMap.Point(116.499868, 39.921244);
    var cententBj = "北京市 朝阳区 住邦2000商务楼1号楼B702-703"
    var titleBj = "GOMINE-北京总部"
    setAddressAndWindow(pointBj, cententBj, titleBj);
    var flag = $(this);
    if (flag.hasClass('bg-bj-active')) {} else {
      flag.addClass('bg-bj-active');
      $('#bg-jh').removeClass('bg-jh-active');
      $('#bg-gy').removeClass('bg-gy-active');
    }
  });
  $('#bg-jh').click(function () {
    var pointJh = new BMap.Point(119.671047, 29.137416);
    var cententBj = "金华市 婺城区 金华电子商务创业园502-503";
    var titleJh = "GOMINE-金华分部"
    setAddressAndWindow(pointJh, cententBj, titleJh);
    var flag = $(this);
    if (flag.hasClass('bg-jh-active')) {} else {
      flag.addClass('bg-jh-active');
      $('#bg-bj').removeClass('bg-bj-active')
      $('#bg-gy').removeClass('bg-gy-active')
    }
  });
  $('#bg-gy').click(function () {
    var pointGy = new BMap.Point(106.654423, 26.627048);
    var cententGy = "贵阳市 观山湖区 贵阳国家高新技术产业开发区（毕节路）";
    var titleGy = "GOMINE-贵阳分部";
    setAddressAndWindow(pointGy, cententGy, titleGy);
    var flag = $(this);
    if (flag.hasClass('bg-gy-active')) {} else {
      flag.addClass('bg-gy-active');
      $('#bg-bj').removeClass('bg-bj-active')
      $('#bg-jh').removeClass('bg-jh-active')
    }
  });

});
//  卡片点击事件