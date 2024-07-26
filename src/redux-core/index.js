import { Divider, Typography } from 'antd';
import { Provider } from 'react-redux';
import storeReduxCore from './redux/store';
import Filters from "./components/Filters/index"
import TodoList from "./components/TodoList/index"

const { Title } = Typography;

function ReduxCore() {
    return (
        <Provider store={storeReduxCore}>
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
                <Title style={{ textAlign: 'center' }}>Todo App with REDUX CORE</Title>
                <Filters />
                <Divider />
                <TodoList />
            </div>
        </Provider>
    );
}

export default ReduxCore;
