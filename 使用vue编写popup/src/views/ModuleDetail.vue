模块的详情
<template>
    <div class="ModuleDetail" v-if="moduleInfo">
        <div class="doc">
            {{moduleInfo.file}}
            <pre>
            {{moduleInfo.doc}}
            </pre>
        </div>
        <div class="memberTypeCount">
            <el-table :data="moduleInfo.desc" style="width:400px">
                <el-table-column prop="name" label="名称" width="200"></el-table-column>
                <el-table-column prop="count" label="个数" width="100"></el-table-column>
            </el-table>
        </div>
        <div class="members">
            <div v-for="i in moduleInfo.members" :key="i.name">
                {{i.name}}&nbsp;&nbsp;{{i.type}}
                <pre>
                    {{i.doc}}
                </pre>
            </div>
        </div>
        <div class="submodules">
            <h2>子模块</h2>
            <div v-for="i in moduleInfo.sub_modules" :key="i.name">
                <router-link :to="{path:'/ModuleDetail',query:{
                        moduleName:i.module_path,
                    }}">{{i.name}}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    const api = require("../api.ts");
    export default {
        data() {
            return {
                moduleInfo: null
            }
        },
        mounted() {
            this.initModule();
        },
        watch: {
            "$route.query": function () {
                this.initModule();
            }
        },
        methods: {
            initModule() {
                const moduleName = this.$route.query.moduleName;
                api.getModuleInfo(moduleName).then(resp => {
                    this.moduleInfo = resp.data;
                })
            },
            getSubModule(subModule) {
                return this.$route.query.moduleName + "." + subModule;
            }
        }
    }
</script>
<style lang="less">
    .ModuleDetail {
        .doc {
            font-size: 19px;
        }
    }
</style>