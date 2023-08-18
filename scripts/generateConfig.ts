import { join } from 'path';
import fs from 'fs';

const argv = process.argv.slice(2);
const [type, title, groupName = '通用', isMobile] = argv;
const configPath = join(
  __dirname,
  '..',
  'src',
  !!isMobile ? 'h5config' : 'config',
);
const outPut = join(configPath, `${type}.ts`);
fs.access(outPut, fs.constants.F_OK, (err) => {
  if (err) {
    const tpl = `export const ${type} = {
    type: '${type}',
    variable: {
      fontSize: { type: 'px', label: '尺寸', groupsName: '文字' },
    },
    groupsName: '${groupName}',
    icon: '${type}',
    title: '${title || type}',
    defaultValue: [
      {
        fontSize: '14px',
      },
    ],
    tpl: \`\`,
  };
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
