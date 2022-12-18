<template>
  <div>
    <h1>Hello, karim osama</h1>
  </div>
</template>

<script>
export default {
  created() {
    Notification.notify("error", "error msg");
    console.log("Welcome to the vue server");
  },
};
</script>

