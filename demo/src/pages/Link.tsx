import { Link } from '@lingxiteam/pcfactory/es/index.component';
import * as indexConfig from '@lingxiteam/pcfactory/es/index.config';
import { Button as AntdBtn, ConfigProvider } from 'antd';
import { useRef } from 'react';
import { insertRules, normalizeCSS, stringifyCssByType } from '../../../src';
import { Link as config } from '../../../src/config/Link';
const { Link: comConfig } = indexConfig.default;
function Page({}) {
  const ref = useRef(null);
  return (
    <ConfigProvider prefixCls="pcfactory">
      <AntdBtn
        onClick={() => {
          const css = stringifyCssByType('Link', config.default[0]);
          const css1 = normalizeCSS(css, '#previewId');
          insertRules('id', css1, ref.current!);
        }}
      >
        注入
      </AntdBtn>
      <div id="previewId" ref={ref}>
        {/* @ts-ignore */}
        <Link {...comConfig.props} style={{}}></Link>
      </div>
    </ConfigProvider>
  );
}

export default Page;
