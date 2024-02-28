import React from 'react';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { FaLocationDot } from "react-icons/fa6";

const LocationPanel: React.FC = () => (
    <>
        <Input
            className='w-72 '
            placeholder="Enter your username"
            prefix={<FaLocationDot className="site-form-item-icon text-sky-500 " />}
            suffix={
                <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
            }
        />
    </>
);

export default LocationPanel;