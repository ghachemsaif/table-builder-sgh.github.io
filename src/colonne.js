import React from 'react';

class Colonne extends React.Component {

    ChangeValue = (e) => {
      this.setState({valeur : e.target.value})
      this.props.ValueChanged(e,this.props.i,this.props.j)
    }
    state = {
      valeur : this.props.valeur,
      i : this.props.i,
      j : this.props.j,
    }
    dismiss() {
         this.props.unmountMe();
     }
    componentWillReceiveProps(nextProps){
      if(this.props.j == this.state.j){
        console.log('match :', this.props.j == this.state.j)
        this.setState(
      		{ valeur : nextProps.valeur}
      	)
      }

   }

    CheckIsEditable(){
      if(this.props.EnableRowEdit){
        return <input
        className={'inputfield'+this.props.i+this.props.j}
        key={'inputfield'+this.props.i+this.props.j}
        ref={'inputfield'+this.props.i+this.props.j}
        value={this.state.valeur}
        onChange={(e) => this.ChangeValue(e)}/>
      }
      else{
        return this.state.valeur
      }
    }

		render() {
			return (
        <span key={'input'+this.props.i+this.props.j} className={this.props.i+this.props.j}>
          {this.CheckIsEditable()}
        </span>
      )
		}
}

export default Colonne;
