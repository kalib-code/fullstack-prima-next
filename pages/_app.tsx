import React from "react";
import { AppProps } from "next/app";

import { Refine } from "@pankod/refine-core";
import { notificationProvider, LoginPage } from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";

require("antd/dist/antd.less");

import dataProvider from "@pankod/refine-simple-rest";
const API_URL = "https://api.fake-rest.refine.dev";
import { authProvider } from "src/authProvider";
import { PostList, PostCreate, PostEdit, PostShow } from "@components/posts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      notificationProvider={notificationProvider}
      dataProvider={dataProvider(API_URL)}
      authProvider={authProvider}
      LoginPage={LoginPage}
      resources={[
        {
          name: "posts",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
      ]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
