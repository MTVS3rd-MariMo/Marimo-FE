import {
    useCallback,
    useEffect,
    useState
} from 'react';

function Counter() {
    console.log('Render Counter!');


    useEffect(() => {
        console.log('[Function] useEffect [] : 컴포넌트가 마눙트 될 때, 한번만!');

        return () => {
            console.log('[Function] useEffect [] : 컴포넌트가 마운트 될 때');
        }
    }, []);
}

export default Counter;