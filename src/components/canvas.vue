<script>
export default {
  mounted() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.font = "30px Garamond MS";
    ctx.fillStyle = "Teal";
    ctx.textAlign = "center";
    ctx.fillText("MEET OUR FOUNDERS", canvas.width / 2, canvas.height / 2);
  },
};
</script>

<template>
    <canvas id="myCanvas" width="400" height="200" style="display:block;margin:auto;"></canvas>
</template>
