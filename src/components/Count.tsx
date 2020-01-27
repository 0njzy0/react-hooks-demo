import React, { useState, useEffect } from 'react';

type Props = {
  message: string;
} & typeof DefaultProps;

// 定义组件默认props
const DefaultProps = {
  initCount: 0
};

/**
 * 计数组件
 *
 * @hook useState useEffect
 */
export default function Count({ initCount, message }: Props) {
  // 利用useState赋予了组件可以使用state的能力
  const [count, setCount] = useState(initCount);

  // 利用useEffect处理组件副作用逻辑 第二个参数为effect依赖，只有当count变化时才触发effect 不然每次组件更新都会触发effect
  useEffect(() => {
    console.log('effect change');
    document.title = `count is ${count}`;
  }, [count]);

  return (
    <div>
      <p>count is {count}</p>
      {/* setCount当以函数的方式更新时，第一个值为更新前的state */}
      <button onClick={() => setCount(pre => pre - 1)}>-</button>
      <button onClick={() => setCount(initCount)}>reset</button>
      <button onClick={() => setCount(pre => pre + 1)}>+</button>
      <p>{message}</p>
    </div>
  );
}

Count.defaultProps = DefaultProps;
