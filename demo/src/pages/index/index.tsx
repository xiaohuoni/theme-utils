import React from 'react';
import { normalizeCSS } from '../../../../src/css';

console.log(normalizeCSS('.a{ .b{ font-size:12px; } }', '.cc'));
function Page({}) {
  return <div>hello</div>;
}

export default Page;
