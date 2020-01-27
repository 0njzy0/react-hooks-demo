import React, { useState, useEffect } from 'react';

/**
 * 时间显示组件
 *
 * @hook useState useEffect
 */
export default function Time() {
  // 获取当前时间
  function getTime() {
    const date = new Date();
    const H = date.getHours();
    const M = date.getMinutes();
    const S = date.getSeconds();
    return `${H}:${M}:${S}`;
  }
  const [time, setTime] = useState(getTime);
  // 当effect返回一个函数时会在组件卸载或者下一次effect触发时调用 这里传[]是为了实现effect只在组件挂载和卸载时才触发，其他情况下不触发
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime);
    }, 1000);
    return () => {
      console.log('timer clear');
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>Current time is {time}</p>
    </div>
  );
}
