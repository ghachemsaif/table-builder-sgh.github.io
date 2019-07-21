### Demo

- Demo [here](https://reactjs.org/)


### Installation

```
npm i table-builder-sgh --save
```

If you prefer to use `yarn`, you can do:

```
yarn add table-builder-sgh
```

### Usage

```
import React, { Component } from 'react'
import TableBuilderGHfrom 'table-builder-sgh'

export default class App extends Component {
  data = [
  [
    {'value' : 'row 11'},
    {'value' : 'row 12'},
  ],
  [
    {'value' : 'row 21'},
    {'value' : 'row 22'},
  ]
]
  TableUpdated = (table) =>{
    this.setState({ table });
    console.log('table updated : ', this.state.table)
  }
  render() {
    return (
      <div>
        <TableBuilderGH
        data={this.data}
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
```

## Props

- `placeholder` - The placeholder text for the input box.
- `data` - An array of objects which acts as the source of data for the table builder. This prop is required.
- `OnTableUpdate` - A function which acts as a callback when the table is updated.
- `EnableTableEdit` - A boolean to enable/disable editing the table
- `EnableRowEdit` - A boolean to enable/disable editing the rows input of the table
- `LabelAddLine` - Label for the add line button
- `LabelAddRow` - Label for the add row button
- `LabelDeleteLine` - Label for the delete line button
- `LabelDefaultValueRow` - The default value of rows

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces


## License

MIT Licensed. Copyright (c) GhachemSaif 2019.
