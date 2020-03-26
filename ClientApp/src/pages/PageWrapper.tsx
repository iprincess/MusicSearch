import React from "react";
import { Header } from "../components/Header/Header";
import { SearchNav } from "../components/search/SearchNav";

export const PageWrapper = (props:{children:any}) => {
  
  return (
		<>
		<Header />
		<SearchNav />
		<div id="content">
			{props.children}
		</div>
		</>
  );
}