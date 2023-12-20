export default function Home() {
  return (
    <div className="App">
      <ConditionalRendering isLoggedIn={false} />
      <Counter />
    </div>
  );
}

// JavaScript: 字串反轉
function reverseString(str) {
  // 實作你的解答
  return str.split('').reverse().join('');
}
console.log(reverseString('Hello')); // 預期輸出: "olleH”

// 2. JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。
// 範例：
function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
  return numbers.filter((number) => number > 5);
}
const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

// 3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因
function formatName(firstName, lastName) {
  // 以三元運算子縮減排數
  const formatedFirstName = firstName ? firstName : '';
  const formatedLastName = lastName ? ` ${lastName}` : '';
  // 直接宣告 formatedFirstName 和 formatedLastName 再一次組合較為簡潔
  return `${formatedFirstName}${formatedLastName}`;
}

// 4. React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？
// 範例：
function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染
  return <p>{isLoggedIn ? '已登入' : '請登入'}</p>;
}

// 5. React: 組件
// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((count) => count + 1);
  };
  const minus = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="container">
      <button type="button" className="btn" onClick={minus}>
        -
      </button>
      <p>{count}</p>
      <button type="button" className="btn" onClick={plus}>
        +
      </button>
    </div>
  );
}
