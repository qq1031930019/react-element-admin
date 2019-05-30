import React, { Component } from "react";
import { Table } from 'element-react';

export default class CrumbTable extends Component {
    render() {
        return (
            <Table
                style={{ width: '100%' }}
                className={'x-mrt-20'}
                columns={this.props.columns}
                // maxHeight={800}
                data={this.props.data}
            />
        );
    }

}
