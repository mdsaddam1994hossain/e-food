  
    import { createGlobalState } from 'react-hooks-global-state';
import { Card } from 'antd';

    const { setGlobalState, useGlobalState } = createGlobalState({
      total: 0,
      basketItems:[],
      numberOfCard :0
    
    });

    export const setTotal = () => {
      setGlobalState('total', (v) => v);
     
    };

    export const setBasketItems = () =>{
      setGlobalState('basketItems', (v) => v);
    }
    export const setNumberOfCard = () =>{
      setGlobalState('numberOfCard', (v) => v);
    } 



    export { useGlobalState };