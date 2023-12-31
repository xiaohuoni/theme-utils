import { Button } from '@lingxiteam/pcfactory/es/index.component';
import { Button as AntdBtn, ConfigProvider } from 'antd';
import { useRef } from 'react';
import { insertRules, normalizeCSS, stringifyCssByType } from '../../../../src';
import { Button as config } from '../../../../src/config/Button';

const comConfig = {};

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
        <Button name="123" type="primary" {...comConfig}></Button>
      </div>
    </ConfigProvider>
  );
}

export default Page;
