import React from 'react';
import { List, Avatar,PageHeader,Tag } from 'antd';

import InfiniteScroll from 'react-infinite-scroller';

import './UsersList.css'

const UsersList = ({users}) => {
    return (
        <div className="infinite-container">
        <InfiniteScroll
          initialLoad={false}
          useWindow={false}
          loadMore={() => {}}
        >
          <List
            header={<PageHeader
                className="site-page-header"
                title="Users"
                subTitle="Online"
              />}
            
            dataSource={users}
            renderItem={item => (
              <List.Item key={item.name}>
                <List.Item.Meta
                  avatar={
                    <Avatar>{item.name.charAt(0)}</Avatar>
                  }
                  title={item.name}
                  
                />
                <Tag color="#87d068">Online</Tag>
              </List.Item>
            )}
          >
          </List>
        </InfiniteScroll>
      </div>
    )
}

export default UsersList;