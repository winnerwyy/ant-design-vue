<template>
  <div>
    <h1>form</h1>
    <div id="formEnter">
      <a-form :form="form" style="background: lightblue;">
        <a-form-item
          v-bind="formItemLayout"
          label="Name"
        >
          <a-input
            v-decorator="rules.name"
            placeholder="Please input your name"
          />
        </a-form-item>
        <a-form-item
          v-bind="formItemLayout"
          label="Age"
        >
          <a-input
            v-decorator="rules.age"
            placeholder="Please input your age"
          />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
  const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 8},
  };
  export default {
    name: "FormDemo",
    beforeCreate() {
      this.form = this.$form.createForm(this);
    },
    data() {
      return {
        formItemLayout,
        rules: {
          name: [
            'userName2',
            {rules: [{required: true, message: 'Please input your name'}]},
          ],
          age: [
            'age',
            {rules: [{required: true, message: 'Please input your age'}]},
          ]
        }
      }
    },
    mounted() {
      const inputArr = [].slice.call(document.getElementById('formEnter').querySelectorAll('input'));
      inputArr.forEach(item => {
        item.onkeydown = e => {
          if (e.keyCode === 13 || e.code === 'Enter') {
            this.check()
          }
        }
      })
    },
    methods: {
      check() {
        this.form.validateFields(err => {
          if (!err) {
            this.$message.success('验证成功！')
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
