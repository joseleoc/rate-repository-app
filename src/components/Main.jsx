import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import {Switch, Redirect, Route, Routes} from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path='/signIn' exact element={<Text>Working on it</Text>} />
      </Routes>
    </View>
  );
};

export default Main;
