import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {QueryClient,QueryClientProvider} from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
    
  );
}

export default App;