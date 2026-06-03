function kakaoMap() {

  const mapContainer = document.getElementById('map');

  const mapOption = {
    center: new kakao.maps.LatLng(35.789, 129.269),
    level: 9
  };

  const map = new kakao.maps.Map(mapContainer, mapOption);

  const positions = [
    {
      title: '신우레미콘',
      lat: 35.7180,
      lng: 129.3220
    },
    {
      title: '신우레미콘(주) 울산공장',
      lat: 35.5100,
      lng: 129.1970
    },
    {
      title: '영화레미콘(주) 경주공장',
      lat: 35.8190,
      lng: 129.2690
    },
    {
      title: '흥진레미콘(주) 경주공장',
      lat: 35.8300,
      lng: 129.2300
    },
    {
      title: '영진레미콘',
      lat: 35.7180,
      lng: 129.3220
    },
    {
      title: '우진레미콘(주) 경주공장',
      lat: 35.8305,
      lng: 129.2305
    },
    {
      title: '신우레미콘아스콘(주) 영천공장',
      lat: 35.9730,
      lng: 128.8510
    },
    {
      title: '신아레미콘(주) 울산공장',
      lat: 35.414900049312,
      lng: 129.3515808527
    },
    {
      title: '신우레미콘산업(주) 울산공장',
      lat: 35.642493482056,
      lng: 129.41301232086
    },
    {
      title: '신우개발(주) 울산',
      lat: 35.642155653351,
      lng: 129.41473241356
    }
  ];

  const bounds = new kakao.maps.LatLngBounds();

  positions.forEach((position) => {

    const markerPosition = new kakao.maps.LatLng(
      position.lat,
      position.lng
    );

    const marker = new kakao.maps.Marker({
      map: map,
      position: markerPosition
    });

    const infowindow = new kakao.maps.InfoWindow({
      content: `
        <div style="padding:8px 12px;">
          ${position.title}
        </div>
      `
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });

    bounds.extend(markerPosition);
  });

  map.setBounds(bounds, 60, 60, 60, 60);
  map.setCenter(new kakao.maps.LatLng(35.7, 129.15));
}

kakao.maps.load(function () {
  kakaoMap();
});
