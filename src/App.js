import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import { useState } from 'react';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  //let mode = "WELCOME"
  //state 변경
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]);

  //mode의 값에 따라 상세정보(Article) 다르게 보여주기
  let content = null;
  let contextControl = null;
  if (mode === 'WELCOME') {
    content = <Article title="환영합니다." body="안녕,웹" />
  } else if(mode === 'READ'){
    // content = <Article title='환영합니다..' body='안녕. Read' />
    let title, body = null;
    topics.forEach(topic => {
      if(id === topic.id){
        title = topic.title;
        body = topic.body;
      }
    })   
    content = <Article title={title} body={body} />

    
    contextControl = <><li><a href={`/update/{id}`} onClick={event =>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
    
    <li><input type='button' value='글 삭제' onClick={() => {
      const newTopics = [];
      // 삭제하고자 하는 글만 빼고 배열 생성
      topics.forEach(topic => {
        if(topic.id != id){
          newTopics.push(topic);
        }
      });
      setTopics(newTopics);
      setMode('WELCOME');
    }}/></li>
    </>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      const newTopic = { id: nextId, title: title, body: body }
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }} />
  } else if(mode === 'UPDATE'){
		let title, body = null;
		topics.forEach((topic, index) => {
		  if (topic.id === id) {
			title = topic.title;
			body = topic.body;
		  }
		});
		// 글 수정 화면 보이기
		content = <Update title={title} body={body} onUpdate={(title, body) =>{
		  console.log(title, body);
		  // 수정된 글 내용 (글 번호는 동일)
		  const updatedTopic = {id:id, title:title, body:body};
		  const newTopics = [...topics];
		  newTopics.forEach((topic, index) => {
			if(topic.id === id){
			  newTopics[index] = updatedTopic;
			}
		  });
		  setTopics(newTopics);
		}}></Update>
	  }
  //모드 변경
  const changeMode = (id) => {
    //alert(id);
    if (id) {
      //mode ='READ';
      setMode('READ');
      setId(id);

    } else {
      // mode ='WELCOME';
      setMode('WELCOME');

    }

  }

  return (
    <div>
      {/* 주석 내용 입니다.. */}
      <Header ader title="React" onChangeMode={changeMode} />
      <Nav topics={topics} onChangeMode={changeMode} />
      {content}
      {/*  <Clock /> */}
      <ul>
        <li>
          <a href='/create' onClick={event => {
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

function Clock() {
  const element = (
    <div>
      <h2>현재시간</h2>
      <h3>{
        new Date().toLocaleTimeString()
      }</h3>
    </div>
  );
  return element;
}
setInterval(Clock, 1000);

export default App;
