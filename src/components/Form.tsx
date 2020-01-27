import React, { useState, useRef } from 'react';

/**
 * 基础表单组件
 *
 * @hook useState useRef
 */
export default function Form() {
  // 使用useRef来存储dom元素
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  function handleUsernameChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setUsername(e.currentTarget.value);
  }

  function handlePwdChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setPwd(e.currentTarget.value);
  }

  function handleFormSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    // 阻止表单默认提交时会触发页面刷新
    e.preventDefault();
    setUsername('');
    setPwd('');
  }

  function handleFocus() {
    // 触发dom元素的focus方法
    inputEl.current?.focus();
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          {/* 绑定ref来获取input元素 */}
          <input ref={inputEl} type="text" value={username} onChange={handleUsernameChange}></input>
        </div>
        <div>
          <input type="password" value={pwd} onChange={handlePwdChange}></input>
        </div>
        <button type="submit">submit</button>
      </form>
      <button onClick={handleFocus}>focus</button>
      <p>Username is {username}</p>
      <p>Pwd is {pwd}</p>
    </div>
  );
}
