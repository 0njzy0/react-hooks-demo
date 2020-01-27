import React, { useState } from 'react';
import Count from './components/Count';
import Time from './components/Time';
import Form from './components/Form';

/**
 * react基础hook使用demo
 *
 * @hook useState
 */
export default function BasicDemo() {
  // 使用useState赋予函数组件可以使用state的能力 这里定义timeShow是为了模拟Time组件卸载时的effect触发情况
  const [timeShow, setTimeShow] = useState(true);
  function toggleTime() {
    setTimeShow(!timeShow);
  }
  // 这里定义message是为了模拟props更新时，组件是否触发render方法的情况(虽热render方法会触发但不代表dom一定更新)
  const [message, setMessage] = useState('default message');
  function handleMessageChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setMessage(e.currentTarget.value);
  }
  return (
    <>
      <Count message={message} />
      <hr />
      {timeShow && <Time />}
      <button onClick={toggleTime}>Toggle Time</button>
      <hr />
      <Form />
      <hr />
      <h3>Change Component Props</h3>
      <input type="text" value={message} onChange={handleMessageChange} />
    </>
  );
}
