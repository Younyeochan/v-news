<template>
   <div style="height: 865px; width: 100%">
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="getCoord(item.lat,item.long)" v-for="item in coordArray" :key="item.id">
        <l-popup>
            {{item.name}}
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  methods: {
    getCoord(a,b) {
      return latLng(a,b)
    }
  },
  data() {
    return {
      zoom: 16.7,
      center: latLng( 37.373626, -233.054960),
      url: 'https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=0d4710c6db794c76b51b2e74af8e4aea',
      attribution: '이지트래픽',
      withPopup: latLng(37.374857, -233.052315),
      currentZoom: 20,
      currentCenter: latLng(37.374857, -233.052315),
      showParagraph: false,
      coordArray:[{id:1,lat:37.374857,long:-233.052315,name:'이지트래픽'},{id:2,lat:37.372239,long:-233.056607,name:'금정역'}],
    };
  },
}
</script>

<style>

</style>