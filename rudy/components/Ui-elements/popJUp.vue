<script>
export default {
  name: 'Modal',
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <div class="simple-modal">
    <div class="simple-modal-backdrop">
      <div class="simple-modal-container">
        <div class="simple-modal-content">
          <header class="simple-modal-header">
            Modal title
          </header>
          <section class="simple-modal-body">
            Modal body
          </section>
          <footer class="simple-modal-footer">
            <button type="button">
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.simple-modal {
  &-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.3s ease;
    z-index: 9999;
  }

  &-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    margin: 16px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transform: translate(0, 0);
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  &-header {
    padding-bottom: 16px;
    font-size: 25px;
    text-align: center;
  }

  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    text-align: center;
  }
}
</style>