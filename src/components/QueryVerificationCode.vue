<template>

    <div>
        <el-input class="phone" placeholder="手机号码" v-model="phone"></el-input><br>
        <el-button class="getCode" @click.native="getCode" type="primary" round :loading="isBtnLoading">获取验证码</el-button>
        <p>验证码：</p> {{code}}
    </div>
</template>
<script>
export default {
    name:'QueryCode',
    data(){
        return {
            code:'',
            phone:''
        }
    },
    methords:{
        getCode(){
            fetch('http//:www.baidu.com').then(response=>{
                response.json()
            }).then(resJson=>{
                
            })
        }
    }
}
</script>
<style scoped>
    .phone {
        width: 30%;
        height: 42px;
    }
    #submit {
        margin-top: 8px;
        width: 30%;
        height: 42px;
    }
    .getCode {
        margin-top: 8px;
        width: 30%;
        font-size: 16px;
        background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
        filter: brightness(1.4);
    }
</style>