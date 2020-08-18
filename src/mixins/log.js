//需要声明一个对象！！！
const log = {
  data(){
    return {
      //使用了mixins,data和其他函数属性都会智能合并
      name: undefined,
      time: undefined
    }
  },
  created(){
    if (this.name===undefined){
      throw new Error('need name')
    }
    this.time = new Date()
    console.log(`${this.name}出生了`);
  },
  beforeDestroy() {
    const now = new Date()
    console.log(`${this.name}死亡了,共生存了${now - this.time}ms`);

  }
}

export default log