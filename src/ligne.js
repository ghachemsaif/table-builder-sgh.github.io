import React from 'react';
import Colonne from './colonne';


class Ligne extends React.Component {

	dismiss() {
			 this.props.unmountMe();
	 }
	 CheckDeleteLabelLine = () =>{
		 return this.props.LabelDeleteLine ? this.props.LabelDeleteLine : '-'
	 }


		render() {
      const LigneTable = Object
      .keys(this.props.data)
      .map(
        (key) =>
        <td key={'td',key+this.props.i} className={key+this.props.i}>
          <Colonne
             ValueChanged={this.props.ValueUpdated}
             i={this.props.i} key={'td'+key}
             valeur={this.props.data[key].value}
             j={key}
             EnableRowEdit={this.props.EnableRowEdit}  />
        </td>
        )


			return (
        <tr>
          {LigneTable}
          <td className="actions"  >
            <button className="delete_row" onClick={ (e) => this.props.DeleteLigne(this.props.i)}>{this.CheckDeleteLabelLine()}</button>
          </td>
        </tr>
      )
		}
}

export default Ligne;
