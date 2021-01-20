import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import "./user.css";
import Header from "../header/header";
import "../header/header.css";
import "../../customstyles/customstyles.css";

const Usermanagement = () => {
  const [filteredInfo, setfilteredInfo] = useState(null);
  const [sortedInfo, setsortedInfo] = useState(null);
  const length = window.location.href.length;
  let heading = window.location.href.slice(21, length);

  if ((heading = "/dashboard/Usermanagement")) {
    heading = "User Management";
  }
  const data = [
    {
      key: "1",
      Srno: "1",
      username: "shivam",
      email: "shivamranjan87@gmail.com",
      reportcount: 3,
      phonenumber: 7009223057,
    },
    {
      key: "2",
      Srno: "2",
      username: "shiva",
      email: "shivamranjan87@gmail.com",
      reportcount: 4,
      phonenumber: 7009213057,
    },
    {
      key: "3",
      Srno: "2",
      username: "shiva",
      email: "shivamranjan87@gmail.com",
      reportcount: 4,
      phonenumber: 7009213057,
    },
    {
      key: "4",
      Srno: "2",
      username: "shiva",
      email: "shivamranjan87@gmail.com",
      reportcount: 4,
      phonenumber: 7009213057,
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setfilteredInfo({
      filteredInfo: filters,
    });
    this.setsortedInfo({
      sortedInfo: sorter,
    });
  };

  const clearFilters = () => {
    this.setfilteredInfo({ filteredInfo: null });
  };

  const clearAll = () => {
    this.setfilteredInfo({
      filteredInfo: null,
    });
    this.setsortedInfo({
      sortedInfo: null,
    });
  };

  const setAgeSort = () => {
    this.setsortedInfo({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };

  let sorted = sortedInfo;
  let filter = filteredInfo;
  sorted = sorted || {};
  filter = filter || {};
  let columns = [
    {
      title: "Sr No",
      dataIndex: "Srno",
      key: "Srno",
      filters: [
        { text: "Joe", value: "Joe" },
        { text: "Jim", value: "Jim" },
      ],
      filteredValue: filter.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sorted.columnKey === "name" && sorted.order,
      ellipsis: true,
    },
    {
      title: "UserName",
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sorted.columnKey === "age" && sorted.order,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      filteredValue: filter.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sorted.columnKey === "address" && sorted.order,
      ellipsis: true,
    },
    {
      title: "Report Count",
      dataIndex: "reportcount",
      key: "reportcount",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      filteredValue: filter.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sorted.columnKey === "address" && sorted.order,
      ellipsis: true,
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phonenumber",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      filteredValue: filter.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sorted.columnKey === "address" && sorted.order,
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a className="user-management-action">View</a>
          <a className="user-management-action">Edit</a>
          <a className="user-management-action">Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div className="side-layout-container">
      <Header heading={heading} searchbar={true} />

      <div className="user-management-screen">
        <>
          <Space style={{ marginBottom: 16 }}></Space>
          <Table
            columns={columns}
            dataSource={data}
            onChange={() => {
              this.handleChange();
            }}
          />
        </>
      </div>
    </div>
  );
};

export default Usermanagement;
