import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button,Row, Card } from 'antd';
import { UserOutlined , ImportOutlined } from '@ant-design/icons';
import ParticlesBg from 'particles-bg'


const Join = () => {
    const [form] = Form.useForm();


    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    const onFinish = values => {
        setName(values.name);
        setRoom(values.room);
      };

    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
            <ParticlesBg type="cobweb" bg={true} />
            <Card title="Join" style={{ width: 300 }}>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a username to continue',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={(event) => setName(event.target.value)} />
                </Form.Item>
                <Form.Item
                    name="room"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter a room name',
                        },
                    ]}
                >
                    <Input
                        prefix={<ImportOutlined className="site-form-item-icon" />}
                        placeholder="Room"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </Form.Item>
                

                <Form.Item>
                    <Link onClick={event => (!name || !room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
            </Card>
        </Row>
    );
}

export default Join;