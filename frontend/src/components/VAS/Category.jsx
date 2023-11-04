import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';


const getItems = (panelStyle, data) => [
    {
        key: '1',
        label: data.category.service,
        children:
            data.options.map((item, index) => (
                <div key={index} className='flex flex-col px-5 py-3 mb-8' >
                    <div><img src={item.logo} alt="Logo" className='w-10 h-10 rounded-xl'/></div>
                    <div>{item.name}</div>
                    <div>{item.daily}</div>
                    <div>{item.monthly}</div>
                    <div>{item.dact}</div>
                    <div>{item.mact}</div>
                    <div>{item.ddeact}</div>
                    <div>{item.mdeact}</div>
                    <div>
                        <button className='px-5 py-2 bg-blue-800'>
                            Activate
                        </button>
                    </div>
                </div>
            )),
        style: panelStyle,
    },
];

const ServiceCategory = ({data}) => {

    if (data) {
        const { token } = theme.useToken();
        const panelStyle = {
            marginBottom: 24,
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            border: 'none',
        };

        return (
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{
                    background: token.colorBgContainer,
                }}
                items={getItems(panelStyle, data)}
            />
        );
    } else {
        return (
            <>
                <div>Noting to show</div>
            </>
        )
    }
};


export default ServiceCategory;