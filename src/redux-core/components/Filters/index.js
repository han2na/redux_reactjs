import { Col, Input, Radio, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { priorityFilterChange, searchFilterChange, statusFilterChange } from "../../redux/action";

const { Search } = Input;

export default function Filters() {
    const [searchText, setSearchText] = useState('');
    const [filterStatus, setFilterStatus] = useState("All");
    const [priority, setPriority] = useState([]);

    const dispatch = useDispatch();

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        dispatch(searchFilterChange(e.target.value));
    }

    const handleStatusChange = (e) => {
        setFilterStatus(e.target.value);
        dispatch(statusFilterChange(e.target.value));
    }

    const handlePriorityChange = (value) => {
        setPriority(value);
        dispatch(priorityFilterChange(value));
    };


    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder="input search text" onChange={handleSearchTextChange} value={searchText} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Fillter By Status
                </Typography.Paragraph>
                <Radio.Group onChange={handleStatusChange} value={filterStatus}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Fillter By Priority
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    onChange={handlePriorityChange}
                    value={priority}
                >
                    <Select.Option value='High' label='High'>
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value='Medium' label='Medium'>
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value='Low' label='Low'>
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}