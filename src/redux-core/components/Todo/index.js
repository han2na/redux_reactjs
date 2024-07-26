import { Checkbox, Row, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTodo } from "../../redux/action";

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function Todo({ id, name, priority, completed }) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch()
    const toggleCheckbox = () => {
        setChecked(!checked);
        dispatch(completedTodo(id));
    }

    return (
        <Row justify={"space-between"}
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <Checkbox checked={checked} onClick={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
                {priority}
            </Tag>
        </Row>
    );
}