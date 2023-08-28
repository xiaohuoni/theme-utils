import { join } from 'path';
import fs from 'fs';

const argv = process.argv.slice(2);
const [type] = argv;
const configPath = join(__dirname, '..', 'demo', 'src', 'pages');
const outPut = join(configPath, `${type}.tsx`);
fs.access(outPut, fs.constants.F_OK, (err) => {
  if (err) {
    const tpl = `import { ${type} } from '@lingxiteam/pcfactory/es/index.component';
    import { Button as AntdBtn, ConfigProvider } from 'antd';
    import { useRef } from 'react';
    import { insertRules, normalizeCSS, stringifyCssByType } from '../../../src';
    import { ${type} as config } from '../../../src/config/${type}';
    import  * as indexConfig from '@lingxiteam/pcfactory/es/index.config';
const { ${type} : comConfig } = indexConfig.default;

    function Page({}) {
      const ref = useRef(null);
      return (
        <ConfigProvider prefixCls="pcfactory">
          <AntdBtn
            onClick={() => {
              const css = stringifyCssByType('${type}', config.default[0]);
              const css1 = normalizeCSS(css, '#previewId');
            insertRules('id', css1, ref.current!);
            }}
          >
            注入
          </AntdBtn>
          <div id="previewId" ref={ref}>
            {/* @ts-ignore */}
            <${type} {...comConfig.props}></${type}>
          </div>
        </ConfigProvider>
      );
    }
    
    export default Page;
    `;
    fs.writeFile(outPut, tpl, (err) => {
      if (err) throw err;
      console.log('文件已创建并写入内容');
    });
  } else {
    // 文件存在，跳过
    console.log('文件已存在，跳过写入操作');
  }
});
