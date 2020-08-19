declare var manywho: any;
declare var M: any;

import * as React from 'react';

class Materialize extends React.Component<any, any> {

 componentDidMount() {
        M.AutoInit();
        console.log('Loaded');
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.parallax');
            // const instances = M.Parallax.init(elems, options);
          });
    }
 render()  {

     return (<div><h1>HELLO WORLDw</h1></div>);
    }
}
manywho.component.register('materialize', Materialize);
export default Materialize;
