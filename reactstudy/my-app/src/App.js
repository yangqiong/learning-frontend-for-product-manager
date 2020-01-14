import React, { Component } from "react";
import Box from "./components/Box.js"
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="flex">
        <div className="rows">
          {/* 一行展示三个Box，并三等分 */}
          <div className="row1">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>

          {/* 一行展示三个Box，平分比例1:2:3 */}
          <div className="row2">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>

          {/* 一行展示三个Box，第一个固定宽度100px, 后面两个平分 */}
          <div className="row3">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>

          {/* 居左 */}
          <div className="row4">
            <Box></Box>
          </div>

          {/* 居中 */}
          <div className="row5">
            <Box></Box>
          </div>

          {/* 居右 */}
          <div className="row6">
            <Box></Box>
          </div>

          {/* 第一个居左，第三个一个居右，第二个与第一个和第三个间距一样，并尝试其他几种情况 */}
          <div className="row7">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>

        </div>

        <div className="cols">
          {/* 一列展示三个Box，并三等分 */}
          <div className="col1">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>

          {/* 一列展示三个Box，平分比例1:2:3 */}
          <div className="col2">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>

          {/* 一列展示三个Box，第一个固定宽度100px, 后面两个平分 */}
          <div className="col3">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>

          {/* 居上 */}
          <div className="col4">
            <Box></Box>
          </div>

          {/* 垂直居中 */}
          <div className="col5">
            <Box></Box>
          </div>

          {/* 居下 */}
          <div className="col6">
            <Box></Box>
          </div>

          {/* 第一个居上，第三个一个居下，第二个与第一个和第三个间距一样，并尝试其他几种情况 */}
          <div className="col7">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>
        </div>

        {/* 水平并垂直居中 */}
        <div className="center">
          <Box></Box>
        </div>
      </div>
    );
  }
}

export default App;
