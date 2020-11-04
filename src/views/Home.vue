<template>
  <div class="home-container">
    <h1>Home! {{ msg }}</h1>
    <div class="test-box">
      <h2>Input</h2>
      <a-input placeholder="Hello IE9" v-model="msg"></a-input>
      <h2>Select</h2>
      <a-select defaultValue="lucy" style="width: 120px">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
      </a-select>
      <h2>
        Table
        <a-button
          size="small"
          @click="
            () =>
              !!this.tableData.length
                ? (this.tableData = [])
                : (this.tableData = [{ name: '帝尊菜鸟', key: '001' }])
          "
        >
          {{ !!this.tableData.length ? "查看空状态" : "还原" }}
        </a-button>
      </h2>
      <a-table :columns="columns" :dataSource="tableData" bordered />
      <h2>
        Modal
        <a-button type="primary" @click="visible = !visible"
          >Open Modal</a-button
        >
      </h2>
      <a-modal title="Basic Modal" v-model="visible">
        <p>Some contents...</p>
      </a-modal>
      <h2 title='哦！最好看的要来ヾ(๑╹◡╹)ﾉ"'>
        Spin
        <p style="color: red; font-size: 16px">
          注释：Internet Explorer 9 以及更早的版本不支持 animation 属性。
        </p>
      </h2>
      <div class="spin-box">
        <a-spin size="small" />
        <a-spin />
        <a-spin size="large" />
        <img src="../assets/66.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '',
      columns: [{ title: 'name', dataIndex: 'name' }],
      tableData: [{ name: '帝尊菜鸟', key: '001' }],
      visible: false
    }
  },
  created() {
    this._includes();
    this._class();
  },
  mounted() {
    this.msg = process.env.NODE_EN
    console.log(process.env.NODE_EN)
  },
  methods: {
    _includes() {
      const arr = [1, 2, 3, 4];
      const arr2 = [...arr];

      console.log(arr2.includes(5));    // false
    },
    _class() {
      class Person {
        constructor(name) {
          this.name = name;
        }
      }

      class Programmer extends Person {
        constructor(name, age) {
          super(name)
          this.age = age;
        }
      }

      console.log(new Programmer('帝尊菜鸟', '??'));
    },
  }
}
</script>

<style scoped lang="scss">
.test-box {
  padding: 0 10px 0;

  > h2 {
    margin: 10px;
    color: blueviolet;
  }

  .spin-box {
    position: relative;
    width: 200px;

    &:hover > img {
      display: block;
    }

    > img {
      display: none;
      position: absolute;
      top: -186px;
      left: 70px;
      width: 200px;
      border-radius: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
