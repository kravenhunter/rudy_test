<script setup>
const props = defineProps({
  box: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,

    validator: (value) => {
      const hasNameKey = value.every((option) => Object.keys(option).includes("price"));
      const hasIdKey = value.every((option) => Object.keys(option).includes("id"));

      return hasNameKey && hasIdKey;
    },
  },
});
const emit = defineEmits(["update:box"]);
const updatePrice = (event) => {
  console.log(event);
};
const check = (events) => {
  // Принимаем переданные параметри из эмита из AddCheckBox
  // if (props.group) {
  //       emits('updateCheckboxGroup', {optionId: props.id, checked: event.target.checked})
  // создали новый массив и записываем в него только объекты с checked =true
  const updateValue = [...props.box];
  if (events.checked) {
    updateValue.push(events.optionId);
  } else {
    // если params.checked != true , то вырезаем Героя из массива
    updateValue.splice(updateValue.indexOf(events.optionId), 1);
  }
  // вызываем нужный v-model - событие  и передаем ему массив  ->  <add-checkbox-group v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes"/>
  emit("update:box", updateValue);
};
</script>

<template>
  <table class="checkbox__group">
    <tr v-for="option in options" :key="option.id">
      <td>
        <UiElementsAddCheckBox
          :label="option.title"
          :id="option.id"
          :name="name"
          :value="option.title"
          :checked="box.includes(option.id)"
          group
          @update-checkbox-group="check" />
      </td>
      <td>
        <input
          class="checkbox__group-price"
          type="text"
          :name="option.id"
          :value="option.Price"
          @input="updatePrice"
          :disabled="!box.includes(option.id)" />
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
.checkbox__group {
  &-price {
    width: 100px;
    text-align: center;
  }
}
</style>
