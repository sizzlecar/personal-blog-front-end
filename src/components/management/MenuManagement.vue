<template>
    <a-card :title="title">
        <span>添加根节点</span>&nbsp;&nbsp;<a-icon type="plus" @click="addNode()"/>
        <a-tree
                class="draggable-tree"
                :defaultExpandedKeys="expandedKeys"
                draggable
                @dragenter="onDragEnter"
                @drop="onDrop"
                :treeData="treeMenu">
            <template slot="custom" slot-scope="item">
                <span>{{item.title}}</span>
                &nbsp;&nbsp;
                <a-icon type="plus" @click="()=> addNode(item)" />
                &nbsp;&nbsp;
                <a-icon type="edit" @click="()=> updateNode(item)"/>
                &nbsp;&nbsp;
                <a-icon type="close" @click="(e)=> deleteNode(item)"/>
            </template>
        </a-tree>
        <a-modal
                :title="modalTitle"
                :visible="visible"
                @cancel="handleCancel"
                :footer="null"
        >

            <a-form :form="form" @submit="handleSubmit">
                <a-form-item label="菜单名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input
                            v-decorator="['menuName', { rules: [{ required: true, message: '请输入菜单名称' },{ max: 20, message: '菜单名称长度不能超过20' }] }]"
                    />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                    <a-button type="primary" html-type="submit">
                        提交
                    </a-button>
                </a-form-item>
            </a-form>

        </a-modal>
    </a-card>

</template>

<script>

    import {managementMenuGetAllMenu} from '../../common/request';
    export default {
        name: "MenuManagement",
        data() {
            return {
                title: '菜单管理',
                expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
                treeMenu: [],
                visible: false,
                modalTitle: "编辑名称",
                form: this.$form.createForm(this, { name: 'coordinated' }),

            };
        },
        methods: {
            onDragEnter(info) {
                window.console.log(info);
                // expandedKeys 需要受控时设置
                // this.expandedKeys = info.expandedKeys
            },
            onDrop(info) {
                window.console.log(info);
                const dropKey = info.node.eventKey;//目的node的 key
                const dragKey = info.dragNode.eventKey;//拖动node 的key
                const dropPos = info.node.pos.split('-');
                const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
                const loop = (data, key, callback) => {
                    data.forEach((item, index, arr) => {
                        if (item.key === key) {
                            return callback(item, index, arr);
                        }
                        if (item.children) {
                            return loop(item.children, key, callback);
                        }
                    });
                };
                const data = [...this.treeMenu];

                // Find dragObject
                let dragObj;
                loop(data, dragKey, (item, index, arr) => {
                    arr.splice(index, 1);
                    dragObj = item;
                });
                if (!info.dropToGap) {
                    // Drop on the content
                    loop(data, dropKey, item => {
                        item.children = item.children || [];
                        // where to insert 示例添加到尾部，可以是随意位置
                        item.children.push(dragObj);
                    });
                } else if (
                    (info.node.children || []).length > 0 && // Has children
                    info.node.expanded && // Is expanded
                    dropPosition === 1 // On the bottom gap
                ) {
                    loop(data, dropKey, item => {
                        item.children = item.children || [];
                        // where to insert 示例添加到尾部，可以是随意位置
                        item.children.unshift(dragObj);
                    });
                } else {
                    let ar;
                    let i;
                    loop(data, dropKey, (item, index, arr) => {
                        ar = arr;
                        i = index;
                    });
                    if (dropPosition === -1) {
                        ar.splice(i, 0, dragObj);
                    } else {
                        ar.splice(i + 1, 0, dragObj);
                    }
                }
                this.treeMenu = data;
            },
            addNode: function (e) {

                this.form.setFieldsValue({node: e});
                this.visible = true;
                window.console.log(e);
            },
            updateNode: function (e) {
                window.console.log(e);
            },
            deleteNode: function (e) {
                window.console.log(e)
            },
            handleCancel: function () {
                this.visible = false;
                //重置表单值
                this.form.resetFields();
            },
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        window.console.log('Received values of form: ', values);
                        if(values.node){
                            //非根节点
                        }else {
                            const res = {};
                            res.key = new Date().getMilliseconds();
                            res.title = values.menuName;
                            res.level = 1;
                            res.scopedSlots = { title: 'custom' };
                            this.treeMenu.push(res);

                        }
                        this.visible = false;
                        //根节点
                    }
                });
            },

        },
        created: function () {
            managementMenuGetAllMenu().then(res => {
                //获取菜单数据
                this.treeMenu = res.data;
                window.console.log(this.treeMenu);
            });
        },
    }
</script>

<style scoped>

</style>