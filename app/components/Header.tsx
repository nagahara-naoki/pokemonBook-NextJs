import React from 'react';

export default function Header() {
  return (
    <div className="p-3 bg-slate-600 text-white">
      <h1>ポケモン図鑑</h1>
      <ul className="flex justify-around mt-3">
        <li className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
          <p>初期化</p>
        </li>
        <li className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
          <p>ポケモン一覧</p>
        </li>
        <li className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
          <p>アイテム一覧</p>
        </li>
        <li className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
          <p>着せ替え</p>
        </li>
        <li>
          <input type="text" />
          <button className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">検索</button>
        </li>
        <li className="flex justify-around">
          <p>並び替え</p>
          <p>高い</p>
          <p>低い</p>
        </li>
      </ul>
    </div>
  );
}
