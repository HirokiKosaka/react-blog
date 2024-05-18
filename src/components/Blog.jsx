import React, { useState } from "react";

export const Blog = () => {
  const [titles, setTitles] = useState("");
  const [displayTitle, setDisplayTitle] = useState([]);
  const [contents, setContents] = useState("");
  const [displayContents, setDisplayContents] = useState([]);

  const onChangeTitles = (e) => setTitles(e.target.value);
  const onChangeContents = (e) => setContents(e.target.value);

  const handleAddPost = () => {
    const newTitles = [...displayTitle];
    newTitles.push(titles);
    const newContents = [...displayContents];
    newContents.push(contents);
    setDisplayTitle(newTitles);
    setDisplayContents(newContents);
    setTitles("");
    setContents("");
  };

  const onClickDelete = (index) => {
    const afeterDeleteTitle = [...displayTitle];
    afeterDeleteTitle.splice(index, 1);
    setDisplayTitle(afeterDeleteTitle);
    const afterDeleteContents = [...displayContents];
    afterDeleteContents.splice(index, 1)
    setDisplayContents(afterDeleteContents);
  };
  return (
    <>
      <div className="blogContainer m-4">
        <div className="createPostContainer flex flex-col w-full">
          <h1 className="font-bold">投稿機能</h1>
          <label>タイトル</label>
          <input
            className="border border-grey w-1/5 rounded-md"
            type="text"
            value={titles}
            placeholder="タイトル"
            onChange={onChangeTitles}
          />
          <label>投稿内容</label>
          <textarea
            className="border border-grey w-2/5"
            placeholder="投稿内容"
            cols="30"
            rows="10"
            value={contents}
            onChange={onChangeContents}
          />
          <button
            className="text-white font-bold border rounded-full w-2/5 p-2 mt-3 delay-150 ease-in-out bg-sky-500 duration-150 
        hover:-translate-y-0.5 hover:scale-105 hover:bg-indigo-500 duration-300"
            onClick={handleAddPost}
          >
            投稿ボタン
          </button>
        </div>
        <div className="displayPostContainer mt-3">
          {displayTitle.map((title, index) => (
            <div key={index} className="border my-3 p-3">
              <h2 className="title font-bold">タイトル</h2>
              <p>{title}</p>
              <h2 className="article font-bold">記事</h2>
              <p>{displayContents[index]}</p>
              <button
                className="text-white font-bold border rounded-full w-28 p-2 mt-3 bg-red-500 hover:opacity-70"
                onClick={() => onClickDelete(index)}
              >
                削除
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
