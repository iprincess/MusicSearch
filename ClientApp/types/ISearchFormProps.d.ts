interface ISearchFormProps {
	query:string; 
	onQueryChangeHandler: (query:string) => void;
	placeholder:string;
}