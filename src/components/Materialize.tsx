declare var manywho: any;
declare var M: any;

import * as React from 'react';

class Materialize extends React.Component<any, any> {

 componentDidMount() {
      
    }
 render()  {

     return (<div><h1>HELLO WORLDw</h1></div>);
    }
}
manywho.component.register('materialize', Materialize);
export default Materialize;
