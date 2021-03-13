import { Map, GeolocateControl } from 'https://cdn.skypack.dev/maplibre-gl'

const map = new Map({
  container: "map",
  style: `./cargorocket_style.json`,
  center: [9.18, 48.77],
  zoom: 14
})

map.addControl(
  new GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
  })
)