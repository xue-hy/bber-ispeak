<template>
  <div class="xk-info">
    <div class="count">
      <i class="iconfont icon-gangbi"></i>
      小记 ({{ count }})
    </div>
  </div>
</template>

<script>
export default {
  props: ['count']
};
</script>

<style scoped>
.xk-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xk-info .count {
  font-weight: 700;
  font-size: 16px;
  /* color: #49b1f5; */
}
.xk-info .count i {
  /* color: black; */
  font-size: 20px;
}

@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.eot?t=1641618509331'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.eot?t=1641618509331#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMUAAsAAAAABswAAALIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBWIFdATYCJAMICwYABCAFhG0HMBsDBsiemjwpUokNLPAZtJlEAoQIov3Yz947VJNLIopHtaRJSyVBhhYowRL5awlvck0zIE7JjQhkMf8FTPMDhUDn5xDUpuZ2E47y4rM+PUz6Di6nP8VbB5TLHJPHBAwsDXCsRZEVSGDeIruI7YlHxHECtXr4M1jLzC8H5jIYF4hbGS0E5g2vLBuJaqGSsjSLFxWq01O6BsBz9v34D0LDnKSiACXbNxkSkPyrB1OMGsoG5wmCt5wZxioKTAEysU+1bjIqolOM1HpRYwPAsQqDX/7LhHvYPx5BVIL8etAlc5+JF/EfNT+BXHSvAy4mXU2aIe6KHBubHndZtXp7q3r9rnz+LG942RidnFhxDUOv0Xh0TCvpfvkKeWkoP6BPE3RtTXlVja+vjjqXj4y6FSxNPCFP/9cWMbjH+Vr8HJw1ut80qkdWEp41nEkP1fYpibiTYR+wW5ODOSm89IJsVvIfIxgL2yCsVPRXsw6wUuzttbP2T3cpoRceFtw8Qi9NSOn5G8O6c2SUFT+SAZQfxUoR8HN/47U4O+XbzW1el8HP1cOZu/zIYJgdqL4FW/AreQObsi8AXcouj2pP1ieFE2oxQAmcrT6mKjvuOxmqddy9vUp3BYVqQ2gmp6BCnVmoVG0Rak3KWl2nDWYkcg0mtEoQmu1D0ugdCs1u0Ey+Q4VO31CpOYyg1mG0bVlnJGSWqxgJCZJAUR2UiTVqihiIZV5YimhGKcR1QUapRFgvC8CQwOB2IgupEV5ihr6aDiWEghTWqGCmdBpSKjVQizVyJCaBUkK0sUFBFO1NgWKNClhahSFCBCIBidSBZMQ01KikM2HZ+XwphMZQEsKcsh5zJQTTk/UOhQgUPADNkqoHlT3KK3rVaKEIggJRMA0VKFMahCgpaUBa+iA5RIwIJJ0Q1ooVhO2oodLA7eWqH8gxqgBVCuxXqHyUqZWMGgA=')
      format('woff2'),
    url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.woff?t=1641618509331')
      format('woff'),
    url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.ttf?t=1641618509331')
      format('truetype'),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.svg?t=1641618509331#iconfont')
      format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gangbi:before {
  content: '\e61e';
}
</style>
