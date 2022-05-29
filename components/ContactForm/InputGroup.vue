<template>
  <b-form-group class="trinh-input-group">
    <label :for="inputId">{{ label }} <span class="asterik">*</span></label>

    <small>Indicates required field <span class="asterik">*</span> </small>

    <b-form-textarea
      v-if="multiline"
      :id="inputId"
      v-model="value"
      :placeholder="placeholder"
      rows="5"
      no-resize
      :name="inputId"
      required
    />

    <b-form-input
      v-else
      :id="inputId"
      v-model="value"
      :name="inputId"
      :placeholder="placeholder"
      :type="inputType"
      required
    />
  </b-form-group>
</template>

<script>
export default {
  props: {
    inputId: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: false,
      default: 'text'
    },

    label: {
      type: String,
      required: true
    },

    multiline: {
      type: Boolean,
      required: true
    },

    placeholder: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      value: null
    }
  },

  watch: {
    value (newVal, oldVal) {
      this.$emit('onGetValue', { [this.inputId]: this.value })
    }
  }
}
</script>

<style lang="scss" scoped>
.trinh-input-group{
  margin-top: 1.875rem;
  margin-bottom: 0;

  label{
    display: block;

    margin-bottom: 0;
  }

  small{
    margin-bottom: 0.625rem;
    display: inline-block;

    font-family: "Helvetica Neue",Helvetica;
    color: #ACACAC;
  }

   .asterik{
    color: red
  }
}
</style>
