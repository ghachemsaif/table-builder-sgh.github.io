import React, { Component } from 'react'

import TableBuilderGH from 'table-builder-sgh'

export default class App extends Component {

  state = {
    table : [
      [
        {'value' : 'row 11'},
        {'value' : 'row 12'},
      ],
      [
        {'value' : 'row 21'},
        {'value' : 'row 22'},
      ]

    ]
  }
  EnableEdit = true;
  TableUpdated = (table) =>{
    this.setState({ table });
    console.log('table updated : ', this.state.table)
  }


  render () {
    return (
      <div>
      <TableBuilderGH
      data={this.state.table}
      OnTableUpdate={this.TableUpdated}
      EnableTableEdit={true}
      EnableRowEdit={true}
      LabelAddLine="+"
      LabelAddRow="+"
      LabelDeleteLine="delete"
      LabelDefaultValueRow="New row"
      />
      </div>
    )
  }
}
