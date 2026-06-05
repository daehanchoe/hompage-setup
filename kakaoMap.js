function kakaoMap() {

  const mapContainer = document.getElementById('map');

  const mapOption = {
    center: new kakao.maps.LatLng(35.789, 129.269),
    level: 9
  };

  const map = new kakao.maps.Map(mapContainer, mapOption);

  const positions = [
    {
      title: '신우레미콘(주) 경주공장',
      lat: 35.6641721,
      lng: 129.2949612
    },
    {
      title: '신우레미콘(주) 울산공장',
      lat: 35.5100,
      lng: 129.1970
    },
    {
      title: '영화레미콘(주) 경주공장',
      lat: 35.7315563,
      lng: 129.2046277
    },
    {
      title: '흥진레미콘(주) 경주공장',
      lat: 35.9030449,
      lng: 129.240271
    },
    {
      title: '영진레미콘아스콘',
      lat: 35.5098229,
      lng: 129.1967271
    },
    {
      title: '우진레미콘(주) 경주공장',
      lat: 35.9029163,
      lng: 129.239217
    },
    {
      title: '신우레미콘아스콘(주) 영천공장',
      lat: 35.9767712,
      lng: 128.9826349
    },
    {
      title: '신아레미콘(주) 울산공장',
      lat: 35.4150735,
      lng: 129.3544048
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
  let openedOverlay = null;

  positions.forEach((position) => {

    const markerPosition = new kakao.maps.LatLng(
      position.lat,
      position.lng
    );

    const marker = new kakao.maps.Marker({
      map: map,
      position: markerPosition
    });

    const overlay = new kakao.maps.CustomOverlay({
      position: markerPosition,
      yAnchor: 2.15,
      content: `
        <div class="map-info-window">
          ${position.title}
        </div>
      `
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      if (openedOverlay) {
        openedOverlay.setMap(null);
      }

      overlay.setMap(map);
      openedOverlay = overlay;
    });

    bounds.extend(markerPosition);
  });

  map.setBounds(bounds, 60, 60, 60, 60);
  map.setCenter(new kakao.maps.LatLng(35.7, 129.15));
}

kakao.maps.load(function () {
  kakaoMap();
});
