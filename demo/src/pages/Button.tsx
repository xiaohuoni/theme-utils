import { Button } from '@lingxiteam/pcfactory/es/index.component';
import { Button as AntdBtn, ConfigProvider } from 'antd';
import { useRef } from 'react';
import { insertRules, normalizeCSS, stringifyCssByType } from '../../../src';
import { Button as config } from '../../../src/config/Button';
import * as indexConfig from '@lingxiteam/pcfactory/es/index.config';
const { Button: comConfig } = indexConfig.default;

function Page({}) {
  const ref = useRef(null);
  return (
    <ConfigProvider prefixCls="pcfactory">
      <AntdBtn
        onClick={() => {
          const css = stringifyCssByType('Button', config.default[0]);
          const css1 = normalizeCSS(css, '#previewId');
          insertRules('id', css1, ref.current!);
        }}
      >
        注入
      </AntdBtn>
      <div id="previewId" ref={ref}>
        {/* @ts-ignore */}
        <Button {...comConfig.props}></Button>
      </div>
    </ConfigProvider>
  );
}

export default Page;
