import React from 'react';
import './index.css';

const Gameroom = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <a href="#" className="absolute top-4 left-4 text-gray-600">スタート画面に戻る</a>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">部屋A</h1>
        <div className="mb-6">
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              value="●●●●●●●"
              readOnly
              className="border border-gray-300 rounded p-2 text-center text-lg"
            />
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Copied!</button>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">メンバー</h2>
          <ul>
            <li className="border border-gray-300 rounded p-4 mb-2">me</li>
            <li className="border border-gray-300 rounded p-4 mb-2">user name</li>
            <li className="border border-gray-300 rounded p-4 mb-2">user name</li>
            <li className="border border-gray-300 rounded p-4 mb-2">user name</li>
          </ul>
        </div>
        <button className="bg-blue-500 text-white px-6 py-3 rounded flex items-center justify-center">
          <img src="https://via.placeholder.com/30" alt="Avatar" className="rounded-full mr-2" />
          ゲームスタート
        </button>
      </div>
    </div>
  );
};

export default Gameroom;



