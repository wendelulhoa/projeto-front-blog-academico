<template>
  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-8 p-2">
    <div class="card cartao">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <i class="fas fa-shopping-cart fa-3x text-danger"></i>
          <div class="text-right text-secondary">
            <h5>{{title}}</h5>
            <h3>{{value}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>