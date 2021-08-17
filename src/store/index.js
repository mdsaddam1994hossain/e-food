  
import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  total: 0,
  names:''
 
});

export const setTotal = () => {
  setGlobalState('total', (v) => v);
  
};

export const setName = () =>{
    setGlobalState('names', (v) => v);
}



export { useGlobalState };