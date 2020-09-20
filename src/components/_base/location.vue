<template>
  <div>
    <GmapMap
      :center="{lat:locLat, lng:locLng}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'Location',
  //   props: ['location'],
  props: ['locLat', 'locLng'],
  data: () => ({
    // location: {
    //   lat: 1,
    //   lng: 1
    // }
  }),
  mounted () {
    // this.$getLocation()
    //   .then(coordinates => {
    //     this.location.lat = coordinates.lat
    //     this.location.lng = coordinates.lng
    //   })
  }
}
</script>

<style scoped>

</style>
