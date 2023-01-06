import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

export const Data = () => {
 const testing = useLoaderData();
 const navigation = useNavigation();
 console.log(navigation);
 if (navigation.state === "loading") {
  return <div>Loading...</div>;
 }

 return <div>Data</div>;
};

export const fetchData = async () => {
 const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
 const data = await response.json();
 return data;
};
