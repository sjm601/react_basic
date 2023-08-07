import './App.css';
import { useState } from 'react';
import ReduxCounter from './components/ReduxCounter';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// 리덕스 툴킷 설치
// 프로젝트 생성 시 : npx create-react-app <my-app> --template redux
// 생성된 프로젝트에 도입 : npm install @reduxjs/toolkit

// slice(작은 store) 생성 : 기능별로 slice 생성 가능
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    // 값 증가 reducer
    up: (state, action) => {
      console.log("up Called....");
      console.dir(`스텝: ${action.step}` );
      state.value = state.value + action.step;
    },
    down: (state, action) => {
      console.log("down Called....");
      console.dir(`스텝: ${action.step}` );
      state.value = state.value - action.step;
    }
  }
});

// slice를 합치기
const store = configureStore({
  // 
  reducer: {
    // 여러개의 reducer를 하나로 합친 reducer
    // counterSlice.reducer를 ConfigStore의 reducer로 전달
    counter: counterSlice.reducer
  }
});

function ReduxToolkitApp() {

  return (
    //store를 Provider의 스토어로 전달
    <Provider store={store}>
      <div>
        <ReduxCounter />
      </div>
    </Provider>
         

  );
}

export default ReduxToolkitApp;
