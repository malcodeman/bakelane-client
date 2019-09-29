import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Header from "../../header/components/Header";
import Layout from "../../layout/components/Layout";
import Table from "../../commonComponents/Table";
import { getOrders } from "../actions/ordersActionCreators";

function Orders(props) {
  const { getOrders, orders } = props;
  const columns = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title"
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description"
    },
    {
      title: "Donator",
      key: "donator",
      dataIndex: "user.username"
    },
    {
      title: "Created at",
      key: "created",
      dataIndex: "createdAt"
    }
  ];

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <>
      <Header />
      <Layout>
        <Table columns={columns} dataSource={orders} />
      </Layout>
    </>
  );
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders
  };
};

const withConnect = connect(
  mapStateToProps,
  { getOrders }
);

export default compose(withConnect)(Orders);
