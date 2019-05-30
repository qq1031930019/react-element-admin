import React, { Component } from "react";
import { Layout, Input, Button, Loading, Pagination } from 'element-react';
import CrumbTable from './table';
import list from './data.json'

export default class SmsSendedLog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
            data: list.data,
            loadingStatus: false,
            currentPage: 1
        }
    }
    render() {
        const state = this.state
        return (
            <div className={'x-table-box'}>
                <Layout.Row gutter="20">
                    <Layout.Col span='6'>
                        <Input placeholder="请输入手机号" />
                    </Layout.Col>
                    <Layout.Col span='6'>
                        <Input placeholder="请输入应用名称" />
                    </Layout.Col>
                    <Layout.Col span='6'>
                        <Button type="primary" icon="search" onClick={this.searchHandle}>搜索</Button>
                    </Layout.Col>
                </Layout.Row>
                <CrumbTable data={state.data} columns={state.columns} />
                <div className="block x-mrt-10">
                    <Pagination layout="total, prev, pager, next" total={list.totalCount} currentPage={ state.currentPage } onCurrentChange={ this.onChangeCurrent } />
                </div>
                {
                    state.loadingStatus && <Loading text="拼命加载中" fullscreen={true} />
                }
            </div>
        );
    }

    searchHandle = () => {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.setState({
                loadingStatus: false
            })
        }, 1000)
        this.setState({
            data: list.data,
            loadingStatus: true
        })
    }

    onChangeCurrent = (e) => {
        console.log(e);
    }

}
