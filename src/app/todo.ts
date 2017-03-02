//PASO 2
export class ToDo{
	id: number;
	title: string;
	createdDate: Date;
	endDate: Date;
	responsable: string;
	status: string;
	constructor(id:number,title:string,createdDate:Date,endDate:Date,responsable:string,status: string){
		this.id = id;
		this.title = title;
		this.createdDate = createdDate;
		this.endDate = endDate;
		this.responsable = responsable;
		this.status = status;
	}

	//PASO 3
	formatedDate(key:string){
		return this[key].getDate() + '/' + this[key].getMonth() + '/' + this[key].getFullYear();
	}
	//PASO 3
}

//PASO 2