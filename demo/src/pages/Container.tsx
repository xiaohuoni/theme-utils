import { Table } from '@lingxiteam/pcfactory/es/index.component';
import * as indexConfig from '@lingxiteam/pcfactory/es/index.config';
import { Button as AntdBtn, ConfigProvider } from 'antd';
import { useRef } from 'react';
import { insertRules, normalizeCSS, stringifyCssByType } from '../../../src';
import { Container as config } from '../../../src/config/Container';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
function Page({}) {
  const ref = useRef(null);
  return (
    <ConfigProvider prefixCls="pcfactory">
      <AntdBtn
        onClick={() => {
          const css = stringifyCssByType('Container', config.default[0]);
          const css1 = normalizeCSS(css, '#previewId');
          insertRules('id', css1, ref.current!);
        }}
      >
        注入
      </AntdBtn>
      <div id="previewId" ref={ref}>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </ConfigProvider>
  );
}

export default Page;
