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
            <template slot="operationSlot" slot-scope="item">
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

        <a-modal
                title="确认"
                :visible="deleteVisible"
                @ok="deleteHandleOk"
                @cancel="deleteHandleCancel"
                cancelText="取消"
                okText="确认"
        >
            <p>此项操作会删除该菜单以及该菜单下的所有子菜单，确认删除吗？</p>
        </a-modal>
    </a-card>

</template>

<script>

    import {managementMenuGetAllMenu,addMenu, updateMenu, deleteMenu} from '../../common/request';
    export default {
        name: "MenuManagement",
        data() {
            return {
                title: '菜单管理',
                expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
                treeMenu: [],
                visible: false,
                modalTitle: "编辑名称",
                form: this.$form.createForm(this),
                currentNode: null,
                currentOpType: 0,// 当前操作类型 0 添加  1 创建
                deleteVisible: false

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
                        dragObj.level = item.level + 1;
                        dragObj.parentId = item.key;
                        item.children.push(dragObj);

                    });
                } else if (
                    (info.node.children || []).length > 0 && // Has children
                    info.node.expanded && // Is expanded
                    dropPosition === 1 // On the bottom gap
                ) {
                    loop(data, dropKey, item => {
                        dragObj.level = item.level + 1;
                        dragObj.parentId = item.key;
                        item.children = item.children || [];
                        // where to insert 示例添加到尾部，可以是随意位置
                        item.children.unshift(dragObj);

                    });
                    window.console.log("(info.node.children || []).length > 0 && // Has children\n" +
                        "                    info.node.expanded && // Is expanded\n" +
                        "                    dropPosition === 1");
                } else {
                    let ar;
                    let i;
                    loop(data, dropKey, (item, index, arr) => {
                        ar = arr;
                        i = index;
                        dragObj.level = arr[0].level;
                        dragObj.parentId = arr[0].parentId;
                    });
                    if (dropPosition === -1) {
                        ar.splice(i, 0, dragObj);
                    } else {
                        ar.splice(i + 1, 0, dragObj);
                    }
                }
                const menu = {};
                menu.id = dragObj.key;
                menu.name = dragObj.title;
                menu.level = dragObj.level;
                menu.parentId = dragObj.parentId;
                updateMenu(menu).then(res => {
                    if(res.data.code === "0" && res.status === 200){
                        this.$message.success('修改成功');
                        managementMenuGetAllMenu().then(data => {
                            //获取菜单数据
                            window.console.log('重新获取list');
                            window.console.log(data);
                            this.treeMenu = data.data;
                        });
                    }else {
                        this.$message.error(res.data.msg || '系统发生错误，请稍微重试');
                    }
                });
                //this.treeMenu = data;
            },
            addNode: function (e) {
                this.currentNode = e;
                this.visible = true;
                this.currentOpType = 0;
                window.console.log(e);
            },
            updateNode: function (e) {
                this.form.setFieldsValue({menuName: e.title});
                this.visible = true;
                this.currentOpType = 1;
                this.currentNode = e;
                window.console.log(e);
            },
            deleteNode: function (e) {

                this.currentNode = e;
                this.deleteVisible = true;

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
                        if(this.currentOpType === 0) {
                            // 创建
                            if(this.currentNode){

                                // loop(this.treeMenu,this.currentNode.key,(item, index, arr) => {
                                //     const children = item.children;
                                //     if(children && children[0]){
                                //         //当前节点有子节点
                                //         const res = {};
                                //         res.key = new Date().getMilliseconds();
                                //         res.title = values.menuName;
                                //         res.level = children[0].level;
                                //         res.scopedSlots = { title: 'custom' };
                                //         children.push(res);
                                //     }else {
                                //         //当前节点没有子节点
                                //         const children = [];
                                //         const res = {};
                                //         res.key = new Date().getMilliseconds();
                                //         res.title = values.menuName;
                                //         res.level = item.level + 1;
                                //         res.scopedSlots = { title: 'custom' };
                                //         children.push(res);
                                //         item.children = children;
                                //     }
                                //     arr.splice(index, 1, item);
                                // });
                                //
                                //
                                // window.console.log(values);
                                const menu = {};
                                menu.name = values.menuName;
                                menu.parentId = this.currentNode.key;
                                menu.level = this.currentNode.level + 1;
                                addMenu(menu).then(res => {
                                    window.console.log(res);
                                    if(res.status === 200 && res.data.code === "0"){
                                        this.$message.success("添加成功");
                                        managementMenuGetAllMenu().then(data => {
                                            //获取菜单数据
                                            this.treeMenu = data.data;
                                        });
                                    }else {
                                        this.$message.error(res.data.msg || '系统发生错误，请稍微重试');
                                    }
                                });

                                //非根节点
                            }else {
                                // const res = {};
                                // res.key = new Date().getMilliseconds();
                                // res.title = values.menuName;
                                // res.level = 1;
                                // res.scopedSlots = { title: 'custom' };
                                // this.treeMenu.push(res);
                                const menu = {};
                                menu.name = values.menuName;
                                menu.parentId = 0;
                                menu.level = 0;
                                addMenu(menu).then(res => {
                                    if(res.status === 200 && res.data.code === "0"){
                                        this.$message.success("添加成功");
                                        managementMenuGetAllMenu().then(data => {
                                            //获取菜单数据
                                            this.treeMenu = data.data;
                                        });
                                    }else {
                                        this.$message.error(res.data.msg || '系统发生错误，请稍微重试');
                                    }

                                });
                            }
                        }else {
                            // 修改名称
                            // loop(this.treeMenu, this.currentNode.key, (item, index, arr) => {
                            //     item.title = values.menuName;
                            //     arr.splice(index, 1, item);
                            // });
                            const menu = {};
                            menu.name = values.menuName;
                            menu.parentId = this.currentNode.parentId;
                            menu.level = this.currentNode.level;
                            menu.id = this.currentNode.key;
                            updateMenu(menu).then(res => {
                                if(res.status === 200 && res.data.code === "0"){
                                    this.$message.success("修改成功");
                                    managementMenuGetAllMenu().then(data => {
                                        //获取菜单数据
                                        this.treeMenu = data.data;
                                    });
                                }else {
                                    this.$message.error(res.data.msg || '系统发生错误，请稍微重试');
                                }
                            })
                        }


                        this.visible = false;
                        this.form.resetFields();
                    }
                });
            },
            deleteHandleOk : function () {
                /*const loop = (data, key, callback) => {
                    data.forEach((item, index, arr) => {
                        if (item.key === key) {
                            return callback(item, index, arr);
                        }
                        if (item.children) {
                            return loop(item.children, key, callback);
                        }
                    });
                };
                loop(this.treeMenu, this.currentNode.key, (item, index, arr) => {
                    arr.splice(index, 1);
                });*/
                const para = {};
                para.id = this.currentNode.key;
                deleteMenu(para).then(res => {
                    if(res.status === 200 && res.data.code === '0') {
                        this.$message.success('删除成功！');
                        managementMenuGetAllMenu().then(res => {
                            //获取菜单数据
                            this.treeMenu = res.data;
                        });
                    }else {
                        this.$message.error(res.data.msg || '删除错误');
                    }
                });
                this.deleteVisible = false;
            },
            deleteHandleCancel: function () {
                this.deleteVisible = false;
            }

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
