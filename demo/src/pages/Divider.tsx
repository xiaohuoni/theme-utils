import { Divider } from '@lingxiteam/pcfactory/es/index.component';
import * as indexConfig from '@lingxiteam/pcfactory/es/index.config';
import { Button as AntdBtn, ConfigProvider } from 'antd';
import { useRef } from 'react';
import { insertRules, normalizeCSS, stringifyCssByType } from '../../../src';
import { Divider as config } from '../../../src/config/Divider';
const { Divider: comConfig } = indexConfig.default;

function Page({}) {
  const ref = useRef(null);
  return (
    <ConfigProvider prefixCls="pcfactory">
      <AntdBtn
        onClick={() => {
          const css = stringifyCssByType('Divider', config.default[0]);
          const css1 = normalizeCSS(css, '#previewId');
          console.log(css1);
          insertRules('id', css1, ref.current!);
        }}
      >
        注入
      </AntdBtn>
      <div id="previewId" ref={ref}>
        {/* @ts-ignore */}
        <Divider {...comConfig.props}></Divider>
      </div>
    </ConfigProvider>
  );
}

export default Page;
