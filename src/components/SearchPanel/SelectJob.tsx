"use client"
import React from 'react';
import { Select } from 'antd';

const SelectJob: React.FC = () => (
    <Select
        showSearch
        style={{ width: 200, border: 'none'}}
        placeholder="Ish turi"
        optionFilterProp="children"
        className='outline-none border-none  text-4xl'
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={[
            {
                value: '1',
                label: 'Dasturlash',
            },
            {
                value: '2',
                label: 'Media',
            },
            {
                value: '3',
                label: 'SMM',
            },
            {
                value: '4',
                label: 'Arxitektura',
            },
            {
                value: '5',
                label: 'Marketing',
            },
            {
                value: '6',
                label: 'logistika',
            },
        ]}
    />
);

export default SelectJob;