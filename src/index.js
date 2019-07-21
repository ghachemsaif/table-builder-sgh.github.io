import React from 'react';
import Ligne from './ligne';

export default class TableBuilderGH extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
    data : this.props.data
    }
    this.DeleteLigne=this.DeleteLigne.bind(this);
  }


	state = {
		data : this.props.data
	}

	row = {"value" : "New row"};

	DeleteLigne = (i) => {
		const a = this.state.data.splice(i,1)
		this.props.OnTableUpdate(this.state.data)
	}

	ValueUpdated =(e,i,j) =>{
		console.log( e.target.value,i,j)
		this.state.data[i][j].value = e.target.value;
		this.props.OnTableUpdate(this.state.data)
	}
	state = {
		data : this.state.data
	}

	AddLigne = () => {
		const l = this.state.data.length;
		const row = JSON.parse(JSON.stringify(this.row))
		if(l > 0){
			const ObjectToPush = [];
			for (var i = 0; i < this.state.data[0].length; i++){
				ObjectToPush.push(JSON.parse(JSON.stringify(row)))
			}

			this.state.data.push(ObjectToPush)
		}
		else {
			this.state.data.push(
				[row]
			)
		}
		this.props.OnTableUpdate(this.state.data)
	}
	AddColonne = () => {
		const row = JSON.parse(JSON.stringify(this.row))

		for (var i = 0; i < this.state.data.length; i++){
			this.state.data[i].push(JSON.parse(JSON.stringify(row)))
		}
		this.props.OnTableUpdate(this.state.data)
	}

	CheCkAddRow = () =>{
		if(this.props.EnableTableEdit){
			return <button className="Add_button add_colonne" onClick={ (e) => this.AddColonne(e)} >{this.LabelAddRow()}</button>;
		}
	}
	CheCkAddLine = () =>{
		if(this.props.EnableTableEdit){
			return <button className="Add_button" onClick={ (e) => this.AddLigne(e)} >{this.LabelAddLine()}</button>
		}
	}

	LabelAddLine = () =>{
		return this.props.LabelAddLine ? this.props.LabelAddLine : '+'
	}
	LabelAddRow = () =>{
		return this.props.LabelAddRow ? this.props.LabelAddRow : '+'
	}


	render() {
    const LigneTable = Object
    .keys(this.state.data)
    .map(
      (key)=> <Ligne
			 DeleteLigne={this.DeleteLigne}
			  EnableRowEdit={this.props.EnableRowEdit}
				 ValueUpdated={this.ValueUpdated}
				  i={key}
					 key={key+'ligne'}
					  LabelDeleteLine={this.props.LabelDeleteLine}
					   data={this.state.data[key]}
						 />

		)

		return (
			<div className="table_builder_holder">
				{this.CheCkAddRow()}
				<table>
	        <tbody>
	          {LigneTable}
	        </tbody>
	      </table>
				{this.CheCkAddLine()}

			</div>
		)
	}


  static propTypes = {
    data : React.PropTypes.array.isRequired,
		OnTableUpdate : React.PropTypes.func.isRequired,
		EnableTableEdit : React.PropTypes.bool,
		EnableRowEdit : React.PropTypes.bool,
		LabelAddRow : React.PropTypes.string,
		LabelAddLine : React.PropTypes.string,
  }
}
