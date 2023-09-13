import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import {useState, useRef} from 'react';

// const dummyList = [
//   {
//     id: 1,
//     author: '이진희',
//     content: '안농 👋 나는 귀염둥이 진희야',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: '코코몽',
//     content: '안농 👋 나는야 코코몽',
//     emotion: 4,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: '푸바오',
//     content: '안농 👋 나는 푸바오야',
//     emotion: 2,
//     created_date: new Date().getTime()
//   },
// ]

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
