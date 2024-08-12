import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='btn-primary mt-3 cursor-pointer'>
        1111
      </div>
      <div className='btn-primary mt-4'>
        2222
      </div>
      <div className='btn-primary mt-7'>
        3333
      </div>
      <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded peer'>
        鼠标悬停到此处
      </button>
      <div class='peer-hover:signal'>
        <div class='signal:bg-green-800 bg-red-800 p-1 text-white'>
          鼠标悬停到按钮我会变色
        </div>
      </div>
      <div class='has-[:is(input:checked,div:hover)]:signal'>
        <input type='checkbox' />
        <div class='bg-red-800 p-1 text-white signal:bg-green-800'>鼠标悬停或勾选</div>
      </div>
    </div>
  )
}

export default App;
