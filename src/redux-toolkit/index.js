import { Divider, Typography } from 'antd';
import Filters from './components/Filters/index.js';
import TodoList from './components/TodoList/index.js';
import { Provider } from 'react-redux';
import storeReduxToolkit from './redux/store.js';

const { Title } = Typography;

function ReduxToolkit() {
    return (
        <Provider store={storeReduxToolkit}>
            <div
                style={{
                    width: 600,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: 20,
                    boxShadow: '0 0 10px 4px #bfbfbf',
                    borderRadius: 5,
                    height: '80vh'
                }}
            >
                <Title style={{ textAlign: 'center' }}>Todo App with REDUX TOOLKIT</Title>
                <Filters />
                <Divider />
                <TodoList />
            </div>
        </Provider>
    );
}

export default ReduxToolkit;
